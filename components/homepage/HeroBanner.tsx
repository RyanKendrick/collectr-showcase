import React, { FunctionComponent, useRef, useState, useEffect } from 'react'
import Image from 'next/image'


interface HeroBannerProps {
    images: any;
}

const HeroBanner: FunctionComponent<HeroBannerProps> = ({ images }) => {
 
  return (
    <>
    <div className="slideshow">
      <div className="cover-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
      <Image 
        src={'https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg'}
        alt={'banner'}
        width={800}
        height={300}
        className={'current-img'}
      />
    </div>
        
    </>
  )
}

export default HeroBanner