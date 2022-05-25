import React, { FunctionComponent } from 'react'
import ProductCard from './ProductCard'

interface CollectionProps {
    collectionList: any;
}

const Collection: FunctionComponent<CollectionProps> = ({ collectionList }) => {
  return (
    <>
    <div className="collection-container">
        {[...collectionList].map(product => (
            <ProductCard 
                key={'#'}
                categoryGroup={product.catalog_group}
                categoryName={product.catalog_category_name}
                productImage={product.image_url}
                productName={product.product_name} 
         />
        ))}
        
    </div>
    </>
  )
}

export default Collection