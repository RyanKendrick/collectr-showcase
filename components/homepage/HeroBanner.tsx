import React, { FunctionComponent } from 'react'
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper'
SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/bundle'

interface HeroBannerProps {
    images: any;
}

const HeroBanner: FunctionComponent<HeroBannerProps> = ({ images }) => {
 
  return (
    <>
    
    <div className="slideshow">
      <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            autoplay={true}
            pagination={{ clickable: true }}
      
          >
      
            <SwiperSlide>

            <div className='slideshow'>
              <Image
                src={'https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg'}
                alt={'banner'}
                width={800}
                height={300}
                className={'current-img'}
              />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slideshow'>
              <Image
                src={'https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg'}
                alt={'banner'}
                width={800}
                height={300}
                className={'current-img'}
              />
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='slideshow'>
              <Image
                src={'https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg'}
                alt={'banner'}
                width={800}
                height={300}
                className={'current-img'}
              />
            </div>
            </SwiperSlide>
          </Swiper>
    </div>
    {/* <div className="slideshow">
      <div className="cover-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. </div>
      <Image 
        src={'https://www.tributemedia.com/hubfs/Images/Blog%20Images/shutterstock_252081805.jpg'}
        alt={'banner'}
        width={800}
        height={300}
        className={'current-img'}
      />
    </div> */}
        
    </>
  )
}

export default HeroBanner