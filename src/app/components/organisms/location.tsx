import React from 'react';
import SectionTitle from '../molecules/SectionTitle/section-title';



export default function Location() {
    return (
    <section id="contact" className='w-full bg-almost-white flex justify-center p-6 sm:p-10 md:p-14 font-satoshi'>
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row max-w-[68rem]">

        <div className='flex flex-row'>
          <SectionTitle 
          title='Ubicación Privilegiada' 
          subtitle='Experimenta el lujo y la conveniencia de una gran ubicación. En tan solo 15 minutos, sumérgete en la magia del centro histórico y disfruta de todo lo que ofrece.'
          />
        </div>
        
        <div>
          <iframe 
          src="https://www.google.com/maps/d/u/0/embed?mid=1Je4vpV5ekX6LzcRswVYjytpJqC6_MEQ&ehbc=2E312F&noprof=1" 
          width="640" 
          height="480">

          </iframe>
        </div>

      </div>
    </section>
  )
}