import React from 'react';
import SectionTitle from '../molecules/SectionTitle/section-title';
import { GoogleMapsEmbed } from '@next/third-parties/google'


export default function Location() {
  
  return (
    <section id="contact" className='w-full bg-almost-white flex justify-center p-6 sm:p-10 md:p-14 font-satoshi'>
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-20 sm:flex-row max-w-[68rem]">

        <div className='flex flex-row'>
          <SectionTitle 
            title='Ubicación Privilegiada' 
            subtitle='Experimenta el lujo y la conveniencia de una gran ubicación. En tan solo 15 minutos, sumérgete en la magia del centro histórico y disfruta de todo lo que ofrece.'
          />
        </div>

        <div className='flex flex-row w-full'>
        <GoogleMapsEmbed
          apiKey="AIzaSyA2oBnN5Vzw8NDlZO7O6PlKrdY_OPXNLbY"
          height={600}
          width="600px"
          mode="place"
          q="20.927441183582008, -100.7104233679535"
          language="es"
          zoom='13'
        />
        </div>

      </div>
    </section>
  );
}