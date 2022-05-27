import React from 'react'
import Skeleton from '@mui/material/Skeleton'

const CollectionSkeleton = () => {
  return (
    <>
    <div className="product-container">
      <Skeleton variant='rectangular' width={150} height={200} animation='wave'/><br/>
      <Skeleton variant='text' animation='wave' width={190}/>
      <Skeleton variant='text' animation='wave' width={190}/>
      <Skeleton variant='text' animation='wave' width={190}/>
    </div>
    </>
  )
}

export default CollectionSkeleton