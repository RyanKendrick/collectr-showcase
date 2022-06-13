import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import ShowcaseCard from '../components/homepage/ShowcaseCard'
import axios from 'axios'
import Header from '../components/homepage/Header'
import Footer from '../components/homepage/Footer'

const CategoriesPage: NextPage = () => {

    type results = {
        product_name: any;
        image_url: any;
        categories: any;
    };
    type categoriesList = {
        any: any;
    }

    const [results, setResults] = useState<results[]>([])
    const [category, setCategory] = useState('default')
    const [categoriesList, setCategoriesList] = useState<categoriesList[]>([])
    let resultsOffset = 0
    let resultsLimit = 24
 


    const getData = () => {
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=${resultsOffset}&limit=${resultsLimit}`)
        .then((showcases) => {
            console.log(showcases.data)
            setResults(showcases.data.data)
            for (let i in showcases.data.data) {
                setCategoriesList((categoriesList: any) => ([...categoriesList, ...showcases.data.data[i].categories]))
            }
        })
    }

    useEffect(() => {
       getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loadMore = () => {
        console.log('clicked')
        resultsOffset + 24
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=${resultsOffset}&limit=${resultsLimit}`)
        .then((response) => {
            setResults((results: any) => ([...results, ...response.data.data]))
        })
    }

    const filterResults = (e: any) => {
        setCategory(e.target.value)
    }


  return (
    <>
        <Header />
        <div className="category-select">
            <select onChange={filterResults} name="categories">
                <option value="default">Categories</option>
                {Array.from(new Set(categoriesList)).map((i: any) => (
                    <option key={i} value={i}>{i}</option>
                ))}
            </select>
        </div>
        <div className="showcases-page-container">
            {category === 'default' && (
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
            {category !== 'default' && (
                results.filter(i => {return i.categories.includes(category)}).map((item: any) => (
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