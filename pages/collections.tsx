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

    const [results, setResults] = useState<results[]>([])
    let resultsOffset = 0
    let resultsLimit = 20

    const getData = () => {
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=${resultsOffset}&limit=${resultsLimit}`)
        .then((showcases) => {
            setResults(showcases.data.data)
        }) 
    }

    useEffect(() => {
       getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    const loadMore = () => {
        console.log('clicked')
        resultsOffset += 20
        axios.get(`https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=${resultsOffset}&limit=${resultsLimit}`)
        .then((response) => {
          
            setResults((results: any) => ([...results, ...response.data.data]))
            
        }) 
        
    }

    const filterResults = () => {
       

    }


  return (
    <>
        <Header />
        <div className="category-select">
            <select onChange={filterResults} name="categories">
                <option value="default">Categories</option>
                <option value="pokemon">Pokemon</option>
                <option value="magic">Magic MTG</option>
                <option value="yugioh">Yu-Gi-Oh!</option>
                <option value="metazoo">MetaZoo</option>
                <option value="funko">Funko</option>
            </select>
        </div>
        <div className="showcases-container">
            {results.map((item: any) => (
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
            ))}
        </div>
        
        <button onClick={loadMore} className='load-more-btn'>Load More</button>
        
        <Footer />
    </>
  )
}

export default CategoriesPage