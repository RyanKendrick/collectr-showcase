import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ProductCardProps {
    categoryGroup: string;
    categoryName: string;
    productImage: string;
    productName: string;
    openModal: any;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ categoryGroup, categoryName, productImage, productName, openModal }) => {
  return (
    <>
    
    <div className="product-container">
    <div>
      <Image
          src={productImage}
          width={150}
          height={150}
          alt={'product'}
          objectFit={'contain'}
          className={'product-image'}
          id={productName}
          onClick={openModal}
      />
    </div>
    <br/>
      
      <div className='product-title'>{productName}</div>
      <div className='product-subtitle'>{categoryName}</div>
      <div className='product-subtitle'>{categoryGroup}</div>
    </div>
    </>
  )
}

export default ProductCard