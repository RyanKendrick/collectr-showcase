import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import ShowcaseCard from '../components/homepage/ShowcaseCard'
import axios from 'axios'
import Header from '../components/homepage/Header'
import Footer from '../components/homepage/Footer'
import { useRouter } from 'next/router'
import HtmlHead from "../components/homepage/HtmlHead";
import Head from '../components/Head'

const CategoriesPage: NextPage = () => {
    const router = useRouter()

    const { query: {categoryId}} = router

    const props = { categoryId }

    type results = {
        product_name: any;
        image_url: any;
        categories: any;
    };
    type categoriesList = {
        any: any;
    }

    console.log('props.categoryId', props.categoryId)

  const [results, setResults] = useState<results[]>([]);
  const [category, setCategory] = useState(
    props.categoryId === undefined ? "" : props.categoryId
  );
  const [categoriesList, setCategoriesList] = useState<categoriesList[]>([]);
  const [rOffset, setROffset] = useState(0);
  const [isOpen, setIsOpen] = useState(false)
  // let resultsOffset = 0
  let resultsLimit = 28;

  const getData = () => {
    axios
      .get(
        `https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?filters=${category}&offset=${rOffset}&limit=${resultsLimit}`
      )
      .then((showcases) => {
        setResults(showcases.data.data);
        setCategories();
        setROffset(rOffset + 28);
      });
  };

    const getCategoryData = async (e: any) => {
        const close: any = document.getElementById('dropdown-content')
        close.className = 'display-none'
        setIsOpen(false)
        document.getElementById('dropdown-content')
        console.log('etv', e.target.value)
        setCategory(e.target.value)
        await axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?filters=${e.target.value}&offset=${rOffset}&limit=${resultsLimit}`)
        .then((response) => {
            console.log('response.data', response.data.data)
            setResults(response.data.data)
        })
    }

    const setCategories = () => {
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase/categories`)
        .then((response) => {
            setCategoriesList(response.data.data)
        })
    }

    const openDropdown = () => {
        if (isOpen === false) {
            const open: any = document.getElementById('dropdown-content')
            setIsOpen(true)
            open.className = 'show-dropdown'
        } else {
            const close: any = document.getElementById('dropdown-content')
            close.className = 'display-none'
            setIsOpen(false)
        }
    }

    useEffect(() => {
       getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loadMore = () => {
        setROffset(rOffset + 20)
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?filters=${category}&offset=${rOffset}&limit=${resultsLimit}`)
        .then((response) => {
            setResults((results) => ([...results, ...response.data.data]))
        }).catch(err => {
            console.log('error', err)
        })
        console.log('results offset', rOffset)
    }

  return (
    <>
        <HtmlHead /> 
        <Head />       
        <Header />

        <div className='category-select'>
            <div className="dropdown">
                <button onClick={openDropdown} className="dropbtn">Categories ▼</button>
                <div id='dropdown-content' className="dropdown-content">
                        {Array.from(new Set(categoriesList)).map((i: any) => (
                            <button className='dropdown-option' key={i.category_id} onClick={getCategoryData} value={i.category_id}>{i.category_name}</button>
                        ))}
                </div>
            </div>
        </div>
        
        {/* <div className="category-select">
            <select onChange={getCategoryData} name="categories">
                <option className='options-placeholder' value="default">Categories</option>
                {Array.from(new Set(categoriesList)).map((i: any) => (
                    <option key={i.category_id} value={i.category_id}>{i.category_name}</option>
                ))}
            </select>
        </div> */}
        
        <div className="showcases-page-container">
            {category === '' && (
                results.map((item: any) => (
                    <>
                        <ShowcaseCard
                            showcases={item}
                            img1={item.image_1_url}
                            img2={item.image_2_url}
                            img3={item.image_3_url}
                            avatar={item.profile_photo_url}
                            username={item.display_name}
                            categories={item.categories}
                            collectionValue={item.total_value}
                            refId={item.reference_id}
                        />
                    </>
                ))
            )}
            {category !== '' && (
                results.map((item: any) => (
                    <>
                        <ShowcaseCard
                            showcases={item}
                            img1={item.image_1_url}
                            img2={item.image_2_url}
                            img3={item.image_3_url}
                            avatar={item.profile_photo_url}
                            username={item.display_name}
                            categories={item.categories}
                            collectionValue={item.total_value}
                            refId={item.reference_id}
                        />
                    </>
                ))
            )}
            
        </div>
        
        <button onClick={loadMore} className='load-more-btn'>Load More</button>
        
        <Footer />
    </>
  )
}

export default CategoriesPage