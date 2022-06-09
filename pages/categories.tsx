import { NextPage } from 'next'
import React, { useState } from 'react'
import ShowcaseCard from '../components/homepage/ShowcaseCard'
import axios from 'axios'
import Header from '../components/homepage/Header'
import Footer from '../components/homepage/Footer'

const CategoriesPage: NextPage = () => {

    const [results, setResults] = useState([])

    axios.get('https://djk9wkkysj.execute-api.us-east-1.amazonaws.com/data/showcase?offset=0&limit=20')
      .then((showcases) => {
        setResults(showcases.data.data)
      })



  return (
    <>
        <Header />
        <div className="category-select">
            <select name="categories">
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
        
        <button className='load-more-btn'>Load More</button>
        
        <Footer />
    </>
  )
}

export default CategoriesPage