'use client'

import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

interface SwiperProps {
  children: React.ReactNode,
  id: string
}

export default function Carousell({ children, id }: SwiperProps) {
  return (
    <div>

      <div className='flex justify-center items-center max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto py-4 md:py-7'>
        <Swiper
          spaceBetween={58}
          loop={true}
          pagination={{
            clickable: true,
            el: `.${id}`,
          }}
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
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            10280: {
              spaceBetween: 72,
            }
          }}
          modules={[Autoplay, Pagination]}>
          {children}
        </Swiper>
      </div>
      <div className={`flex justify-center items-center ${id}`} />
    </div>
  )
}
