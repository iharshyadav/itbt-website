import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination,Autoplay,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./CSS/Carousel.css"

const Carousel = () => {
  return (
    <>
      <Swiper
        //   spaceBetween={}
        slidesPerView={1}
        // centeredSlides={true}
        loop={true}
        cssMode={true}
        sticky={false}
        freeMode={{ enable: true }}
        mousewheel={{
          mousewheel: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
        }}
        modules={[Autoplay, Pagination, Navigation, Mousewheel]}
      >
        <SwiperSlide>
          <img className=" w-full height" src="../../Images/img1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full height" src="../../Images/img2.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className=" w-full height" src="../../Images/img3.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carousel