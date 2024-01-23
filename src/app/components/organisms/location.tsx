import React from 'react';
import SectionTitle from '../molecules/SectionTitle/section-title';
import MapAtom from '../atoms/Map/map';
import RoundedButton from '../atoms/Button/rounded-button';



export default function Location() {
  
  return (
    <section id="location" className='w-full  flex justify-center p-6 sm:p-10 md:p-14 font-satoshi'>
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-20 sm:flex-row max-w-[68rem]">

        <div className='flex flex-col gap-10 items-center justify-center'>
          <SectionTitle 
            title='Ubicación Privilegiada' 
            subtitle='Experimenta el lujo y la conveniencia de una gran ubicación. En tan solo 15 minutos, sumérgete en la magia del centro histórico y disfruta de todo lo que ofrece.'
          />
          <div className='flex flex-row justify-center'>
            <RoundedButton>
              <a href="https://www.google.com/maps/place/20%C2%B055'38.8%22N+100%C2%B042'37.5%22W/@20.9274444,-100.7104167,17z" target="_blank">
                Ver en Google Maps
              </a>
            </RoundedButton>
          </div>
        </div>

        <div className='flex flex-col w-full'>
          <MapAtom/>
        </div>

      </div>
    </section>
  );
}