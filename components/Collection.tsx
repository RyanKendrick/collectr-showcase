import React, { FunctionComponent } from 'react'
import ProductCard from './ProductCard'
import CollectionSkeleton from './CollectionSkeleton'

interface CollectionProps {
    collectionList: any;
}

const Collection: FunctionComponent<CollectionProps> = ({ collectionList }) => {
  return (
    <>
      {collectionList.length > 1 && (
        <div className="collection-container">
        {[...collectionList].map(product => (
            <>
              <ProductCard
                  key={'#'}
                  categoryGroup={product.catalog_group}
                  categoryName={product.catalog_category_name}
                  productImage={product.image_url}
                  productName={product.product_name}
              />
            </>
        ))} 
      </div>
      )}
      {collectionList.length < 1 && (
        <div className="collection-container">
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
          <CollectionSkeleton />
        </div>
      )}
      
    </>
  )
}

export default Collection