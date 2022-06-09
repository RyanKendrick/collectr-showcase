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
  console.log('images', images)
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
            {images.map((img: any) => (
              <>
                <SwiperSlide>
                <div className='slideshow'>
                  <Image
                    src={img.image_url}
                    alt={'banner'}
                    width={1000}
                    height={400}
                    className={'current-img'}
                    objectFit={"contain"}
                  />
                </div>
                </SwiperSlide>
              </>
            ))}
          </Swiper>
    </div>
    </>
  )
}

export default HeroBanner