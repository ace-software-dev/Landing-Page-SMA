'use client'
import SectionTitle from "../molecules/section-title"
import Carousell from "../molecules/carousell"

import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';

import Arboleda from '../../../../public/images/Arboleda.png'
import Espiga from '../../../../public/images/Espiga.png'
import Latitud from '../../../../public/images/Latitud.png'
import Molino from '../../../../public/images/Molino.png'


export default function Experience() {
  const images = [
    { src: Molino, alt: "El Molino Residencial & Golf León"},
    { src: Arboleda, alt: "La Arboleda Cabañas"},
    { src: Latitud, alt: "Latitud La Victoria QRO"},
    { src: Espiga, alt: "La Espiga Vida y Comunidad"},
  ];

  return (
    <section id="experiencia" className='px-6 sm:px-12 md:px-14 lg:px-20 xl:px-24 w-full'>
      <div className='flex flex-col justify-center items-center mx-auto'>
        <div className="w-full">
          <SectionTitle title="Proyectos que nos respaldan" subtitle="20 años de experiencia colaborando en la gestión y dirección de proyectos inmobiliarios." />
        </div>
        <div className='flex justify-center items-center'>
          <Carousell id="_experiencia">
            {images?.map((img, index) => (
              <SwiperSlide key={index} className="!h-40 md:!h-52">
                <div className='flex h-full justify-center items-center'>
                  <Image src={img.src} loading="lazy" alt={img.alt} className="w-auto h-auto max-w-40 max-h-40 md:max-w-52 md:max-h-52 object-cover filter grayscale" />
                </div>
              </SwiperSlide>
            ))}
          </Carousell>
        </div>
      </div>


    </section>
  )
}
