import React, { FunctionComponent } from 'react'
import Image from 'next/image'

interface ProductCardProps {
    categoryGroup: string;
    categoryName: string;
    productImage: string;
    productName: string;
}

const ProductCard: FunctionComponent<ProductCardProps> = ({ categoryGroup, categoryName, productImage, productName }) => {
  return (
    <>
        <div className="product-container">
            <Image
                src={productImage ? productImage : '/loading.gif'} 
                width={50}
                height={50}
                alt={'product'}
            />
            <span>{productName}</span>
            <span>{categoryName}</span>
            <span>{categoryGroup}</span>
        </div>
    </>
  )
}

export default ProductCard