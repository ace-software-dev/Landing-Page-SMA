'use client'

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const images = [
  {src: '/images/gallery/1_cabin.jpg', alt: 'Cabaña'},
  {src: '/images/gallery/2_bathroom.jpg', alt: 'Cabaña'},
  {src: '/images/gallery/3_cabin.jpg', alt: 'Cabaña'},
  {src: '/images/gallery/4_glamping.jpg', alt: 'Cabaña'},
];

export default function Gallery() {

  return (
    <section id="gallery" className='max-w-7xl w-full h-[32rem]'>
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
                <div id='slide-description' className="flex flex-col bg-almost-black-40 w-full py-4 items-center justify-center gap-2 absolute bottom-0 left-0 text-3xl font-bold transition-opacity duration-500">
                  Cabaña
                  <div className="rounded-full border-2 border-almost-white px-5 py-3 hover:cursor-pointer text-xl">
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
