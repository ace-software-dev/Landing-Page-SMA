'use client'
import Title from "../atoms/Title/title";
import CardOportunity from "../molecules/CardOportunity/card-oportunity";
import Carousell from "../molecules/carousell"
import { SwiperSlide } from 'swiper/react';

export default function Oportunity() {
  const images = [
    { src: '/images/Reservaciones.png', alt: "Reservaciones", text: "San Miguel de Allende dentro del Top #5 destinos de mayor crecimiento en 2023, con un aumento del 400% en reservas." },
    { src: '/images/Romance.png', alt: "Romance", text: "Turismo romántico en San Miguel de Allende deja 3 mil millones de pesos (MXN) en 2023, con un crecimiento proyectado del 10%." },
    { src: '/images/Oportunidad.png', alt: "Oportunidad de Negocio", text: "El concepto de Glamping aumenta 5 a 10 nuevas unidades de negocio al mes en México." },
    { src: '/images/Premiado.png', alt: "Destino Premiado", text: "Destino de lujo global, San Miguel de Allende, segunda Mejor Ciudad del Mundo según la WBA." },
    { src: '/images/Retorno.png', alt: "Retorno prometedor", text: "Ofrecemos ROI de 20% el primer año, 30% a partir del segundo año y recuperación total en el tercer año." },
    { src: '/images/Experiencia.png', alt: "Buena Experiencia", text: "Casa Club con atención en cada detalle, dando experiencias excepcionales para nuestros inversionistas." },
  ];

  return (
    <section id="oportunidad" className='px-6 sm:px-12 md:px-14 lg:px-20 xl:px-24 w-full'>
      <div className='flex flex-col justify-center items-center mx-auto'>
        <div className="w-full">
          <Title>Oportunidad de inversión</Title>
        </div>
        <div className='flex justify-center items-center w-full'>
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
