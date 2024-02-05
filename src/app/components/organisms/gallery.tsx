'use client'

import Image from 'next/image';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper } from 'swiper/react';
import { SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const images = [
  { src: '/images/gallery/1_cabin.jpeg', alt: 'Cabaña', description: 'Cabaña' },
  { src: '/images/gallery/2_bathroom.jpg', alt: 'Cabaña', description: 'Cabaña' },
  { src: '/images/gallery/3_cabin.jpg', alt: 'Cabaña', description: 'Cabaña' },
  { src: '/images/gallery/11_cabin.jpg', alt: 'Cabaña', description: 'Cabaña' },
  { src: '/images/gallery/4_glamping.jpg', alt: 'Glamping', description: 'Glamping' },
  { src: '/images/gallery/5_bathroom.jpg', alt: 'Baño Glamping', description: 'Glamping' },
  { src: '/images/gallery/6_glamping.jpg', alt: 'Glamping', description: 'Glamping' },
  { src: '/images/gallery/7_casaclub.jpg', alt: 'Casa Club', description: 'Casa Club' },
  { src: '/images/gallery/8_temazcal.jpeg', alt: 'Casa Club Temazcal', description: 'Casa Club' },
  { src: '/images/gallery/12_temazcal.jpg', alt: 'Casa Club', description: 'Casa Club' },
  { src: '/images/gallery/9_casaclub.jpg', alt: 'Casa Club', description: 'Casa Club' },
  { src: '/images/gallery/13_casaclub.jpg', alt: 'Casa Club', description: 'Casa Club' },
  { src: '/images/gallery/14_spa.jpg', alt: 'Spa', description: 'Casa Club' },
  { src: '/images/gallery/15_spa.jpg', alt: 'Spa', description: 'Casa Club' },
  { src: '/images/gallery/10_eventos.jpg', alt: 'Espacio para eventos', description: 'Eventos' },
];

export default function Gallery() {

  return (
    <section id="galeria" className='max-w-screen-2xl w-full h-60 xs:h-72 sm:h-96 md:h-[32rem] 2xl:h-[36rem]'>
      <Swiper
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        navigation={{
          enabled: true,
        }}
        loop={true}
        className='w-full h-full'
      >
        {images.map((image, index) => (
          <SwiperSlide id='gallery-slide' key={`gallery-slide-${index}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={1536}
              height={897}
              className='h-full w-full object-cover'
            />
            <div className="relative text-almost-white font-satoshi">
              <div id='slide-description' className="flex xs:flex-col bg-almost-black-40 w-full items-center justify-around
                gap-2 text-lg absolute bottom-0 left-0 font-bold transition-opacity duration-500 py-2
                sm:justify-center sm:text-xl sm:py-3 md:text-2xl lg:text-3xl lg:py-4
              ">
                {image.description}
                <Link href="/#contacto" className="rounded-full border-2 border-almost-white hover:cursor-pointer
                  text-sm px-3 py-1.5 sm:text-lg sm:px-4 sm:py-2 lg:text-xl lg:px-5 lg:py-3
                ">
                  Contáctanos
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}
