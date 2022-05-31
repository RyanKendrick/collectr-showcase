import React, { FunctionComponent } from 'react'
import Skeleton from '@mui/material/Skeleton'
import { useMediaQuery } from '@mui/material'


const CollectionSkeleton: FunctionComponent = () => {
  const screenSmall = useMediaQuery('(min-width: 600px)')
  const screenLarge = useMediaQuery('(max-width: 600px)')
  return (
    <>
    {screenSmall && (
      <div className="product-container">
        <Skeleton id='skeleton' variant='rectangular' width={'15vw'} height={'15vh'} animation='wave'/><br/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'15vw'}/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'15vw'}/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'15vw'}/>
      </div>
    )}
    {screenLarge && (
      <div className="product-container">
        <Skeleton id='skeleton' variant='rectangular' width={'20vw'} height={'15vh'} animation='wave'/><br/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'20vw'}/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'20vw'}/>
        <Skeleton id='skeleton' variant='text' animation='wave' width={'20vw'}/>
      </div>
    )}

    </>
  )
}

export default CollectionSkeleton