'use client'

import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface SwiperProps {
  children: React.ReactNode,
}

export default function Carousell({ children }: SwiperProps) {
  return (
    <div>

      <div className='flex justify-center items-center max-w-xl md:max-w-3xl lg:max-w-6xl mx-auto py-4 md:py-7'>
        <Swiper
          spaceBetween={58}
          loop={true}
          pagination={{
            clickable: true,
            el: '.my-custom-pagination-div',
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          breakpoints={{
            200: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
          }}
          modules={[Autoplay, Pagination]}>
          {children}
        </Swiper>
      </div>
      <div className='flex justify-center items-center my-custom-pagination-div ' />
    </div>
  )
}
