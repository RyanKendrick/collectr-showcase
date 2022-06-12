import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface CategoriesProps {
    categories: any;
}

const Categories: FunctionComponent<CategoriesProps> = ({ categories }) => {
    console.log('categories', categories)
  
    return (
    <>
    <div className="showcases-title">
        <div className="showcase-bold-title">Categories</div>&nbsp;we think you&apos;ll like
    </div>
    <div className="categories-container">
            
      {categories.map((result: any) => (
        <>
            <div className="category-result">
              <Image 
                src={result.image_url}
                alt={'category cover'}
                height={100}
                width={170}
              />
            </div>
        </>
      ))}
    </div>
    </>
  )
}


export default Categories