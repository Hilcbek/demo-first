import parisImage from '../../public/images/sliders/first.jpg';
import belgiumImage from '../../public/images/sliders/second.jpg';
import newYorkImage from '../../public/images/sliders/third.jpg';
import kenyaImage from '../../public/images/sliders/fourth.jpg';
const Sliders = [parisImage, belgiumImage, newYorkImage, kenyaImage];
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const ImageSliders = () => {
  return (
    <div className="h-[85.96vh]">
      <Swiper
        spaceBetween={30}
        autoScroll={true}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Sliders.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} className="grayscale-0" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ImageSliders;
