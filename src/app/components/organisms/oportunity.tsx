'use client'
import Title from "../atoms/Title/title";
import CardOportunity from "../molecules/CardOportunity/card-oportunity";
import Carousell from "../molecules/carousell"
import { SwiperSlide } from 'swiper/react';

import Reservaciones from '../../../../public/images/Reservaciones.png'
import Romance from '../../../../public/images/Romance.png'
import Oportunidad from '../../../../public/images/Oportunidad.png'
import Premiado from '../../../../public/images/Premiado.png'
import Retorno from '../../../../public/images/Retorno.png'
import Experiencia from '../../../../public/images/Experiencia.png'


export default function Oportunity() {
  const images = [
    { src: Reservaciones, alt: "Reservaciones", text: "San Miguel de Allende dentro del Top #5 destinos de mayor crecimiento en 2023, con un aumento del 400% en reservas." },
    { src: Romance, alt: "Romance", text: "Turismo romántico en San Miguel de Allende deja 3 mil millones en 2023, con un crecimiento proyectado del 10%." },
    { src: Oportunidad, alt: "Oportunidad de Negocio", text: "El concepto de Glamping aumenta 5 a 10 nuevas unidades de negocio al mes en México." },
    { src: Premiado, alt: "Destino Premiado", text: "Destino de lujo global, San Miguel de Allende, segunda Mejor Ciudad del Mundo según la WBA." },
    { src: Retorno, alt: "Retorno prometedor", text: "Ofrecemos ROI de 24% el primer año, 36% a partir del segundo año y recuperación total en el tercer año." },
    { src: Experiencia, alt: "Buena Experiencia", text: "Gestión de Casa Club con atención en cada detalle, dando experiencias excepcionales para nuestros inversionistas." },
  ];

  return (
    <section id="oportunidad" className='w-full'>
      <div className='flex flex-col justify-center items-center mx-auto'>
        <div className="w-full">
          <Title>Oportunidad de inversión</Title>
        </div>
        <div className='flex justify-center items-center'>
          <Carousell id="_oportunidad" time={5000}>
            {images?.map((img, index) => (
              <SwiperSlide key={index}>
                <CardOportunity src={img.src} alt={img.alt} text={img.text}/>
              </SwiperSlide>
            ))}
          </Carousell>
        </div>
      </div>
    </section>
  )
}
