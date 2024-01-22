'use client'

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {src: '/images/gallery/1_cabin.jpg', alt: 'Cabaña', description: 'Cabaña'},
  {src: '/images/gallery/2_bathroom.jpg', alt: 'Cabaña', description: 'Cabaña'},
  {src: '/images/gallery/3_cabin.jpg', alt: 'Cabaña', description: 'Cabaña'},
  {src: '/images/gallery/4_glamping.jpg', alt: 'Cabaña', description: 'Glamping'},
];

export default function Gallery() {

  return (
    <section id="gallery" className='max-w-7xl w-full h-60 xs:h-72 sm:h-96 md:h-[32rem]'>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        modules={[Navigation, Autoplay]}
        navigation={{
          enabled: true,
        }}
        loop={true}
        className='w-full h-full'
      >
        {images.map((image, index) => (
          <div key={index}>
            <SwiperSlide id='gallery-slide'>
              <Image
                src={image.src}
                alt={image.alt}
                width={1280}
                height={657}
                className='h-full w-full object-cover'
              />
              <div className="relative text-almost-white font-satoshi">
                <div id='slide-description' className="flex xs:flex-col bg-almost-black-40 w-full items-center justify-around
                  gap-2 text-lg absolute bottom-0 left-0 font-bold transition-opacity duration-500 py-2
                  sm:justify-center sm:text-xl sm:py-3 md:text-2xl lg:text-3xl lg:py-4
                ">
                  {image.description}
                  <div className="rounded-full border-2 border-almost-white hover:cursor-pointer
                    text-sm px-3 py-1.5 sm:text-lg sm:px-4 sm:py-2 lg:text-xl lg:px-5 lg:py-3
                  ">
                    Contáctanos
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  )
}
