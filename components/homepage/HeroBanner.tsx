import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay]);
SwiperCore.use([Pagination]);

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

interface HeroBannerProps {
  images: any;
}

const HeroBanner: FunctionComponent<HeroBannerProps> = ({ images }) => {
  console.log("images", images);
  return (
    <>
      <div className="slideshow">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
        >
          {images.map((img: any) => (
            <>
              <SwiperSlide>
                <Link href={`/profile?id=${img.link_url}`} passHref>
                  <a href="" target="_blank" rel="noopener noreferrer">
                    <Image
                      src={img.image_url}
                      alt={"banner"}
                      width={2000}
                      height={1000}
                      className={"current-img"}
                      objectFit={"contain"}
                    />
                  </a>
                </Link>
              </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HeroBanner;
