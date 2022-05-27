import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ProductCardProps {
    categoryGroup: string;
    categoryName: string;
    productImage: string;
    productName: string;
}

const onClick = (e: any) => {
  e.target.className === 'product-image' ? 
    e.target.className = 'expand' 
    : e.target.className = 'product-image'
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ categoryGroup, categoryName, productImage, productName }) => {
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
          onClick={onClick}
      />
    </div>
    <br/>
      <div>{productName}</div>
      <div>{categoryName}</div>
      <div>{categoryGroup}</div>
    </div>

    </>
  )
}

export default ProductCard