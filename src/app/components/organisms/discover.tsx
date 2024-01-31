
import React from 'react';
import TabsGallery from '../molecules/Gallery/TabsGallery';
import SectionTitle from '../molecules/SectionTitle/section-title';


export default function Discover() {

  return (
    <section id="desarrollo" className='px-5 md:mx-10 gap-8 flex flex-col items-center max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-[978px]'>
      <div className='flex lg:px-32'>
        <SectionTitle
          title='Conoce Nuestro Desarrollo'
          subtitle='Donde la naturaleza, el lujo y la comodidad se encuentran en un entorno sustentable. Descubre tu espacio integral de lujo en San Miguel de Allende con casa club, glamping y cabañas de primera clase.'>
        </SectionTitle>
      </div>
      <TabsGallery image1='/images/casaclub_plano.png' image2='/images/glamping_plano.png' image3='/images/cabaña_plantabaja.png'></TabsGallery>
    </section>
  )
}
