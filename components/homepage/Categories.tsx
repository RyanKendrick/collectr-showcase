import React, { FunctionComponent, useState } from 'react'
import Image from 'next/image'
import Router from 'next/router'

interface CategoriesProps {
    categories: any;
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories }) => {


    const sendProps = (e: any) => {
      let categoryId = e.target.id
      Router.push({
        pathname: '/collections',
        query: {
          categoryId
        }
      })
    }
  
    return (
    <>
    <div className="showcases-title">
        <div className="showcase-bold-title">Categories</div>&nbsp;we think you&apos;ll like
    </div>
    <div className="categories-container">
            
      {categories.map((result: any) => (
        <>
            <div className="category-result" onClick={sendProps}>
       
                <Image 
                  src={result.image_url}
                  alt={'category cover'}
                  height={100}
                  width={170}
                  id={result.category_id}
                />
  
            </div>
        </>
      ))}
    </div>
    </>
  )
}


export default Categories