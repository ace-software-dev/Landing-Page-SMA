import React from 'react';
import SectionTitle from '../molecules/SectionTitle/section-title';
import MapAtom from '../atoms/Map/map';
import RoundedButton from '../atoms/Button/rounded-button';

const places = [
  {
    lat: 20.913533166035844,
    lng: -100.74378055060164,
    name: 'Parroquia Centro'
  },
  {
    lat: 20.898342336684696,
    lng: -100.72659947263716,
    name: 'Plaza la Luciérnaga'
  },
  {
    lat: 20.93124265594304, 
    lng: -100.6881409531946,
    name: 'Splash Inn San Miguel'
  },
]

const center = {
    lat: 20.927441183582008,
    lng: -100.7104233679535,
    name: 'Glamping San Miguel'
  };



export default function Location() {
  
  return (
    <section id="location" className='flex flex-col items-center mx-5  md:mx-10 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-5xl xl:max-w-7xl'>
      <div className="flex flex-col gap-4 sm:gap-6 md:gap-10 lg:gap-16 xl:gap-20 lg:flex-row">

        <div className='flex flex-col gap-10 justify-center w-full lg:w-1/3'>
          <SectionTitle 
            title='Ubicación Privilegiada' 
            subtitle='Experimenta el lujo y la conveniencia de una gran ubicación. En tan solo 15 minutos, sumérgete en la magia del centro histórico y disfruta de todo lo que ofrece.'
          />
          <div className='flex flex-row justify-center'>
            <RoundedButton classes='text-sm md:text-base lg:text-lg xl:text-2xl'>
              <a href="https://www.google.com/maps/place/20%C2%B055'38.8%22N+100%C2%B042'37.5%22W/@20.9274444,-100.7104167,17z" target="_blank">
                Ver en Google Maps
              </a>
            </RoundedButton>
          </div>
        </div>

        <div className='flex flex-col w-full lg:w-2/3'>
          <MapAtom center={center} places={places}/>
        </div>

      </div>
    </section>
  );
}