import React, { FunctionComponent } from 'react'
import ProductCard from './ProductCard'
import CollectionSkeleton from './CollectionSkeleton'


interface CollectionProps {
    collectionList: any;
    openModal: any;
}

const Collection: FunctionComponent<CollectionProps> = ({ collectionList, openModal }) => {
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
                  openModal={openModal}
                  gradeId={product.grade_id}
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