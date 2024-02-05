
import React from 'react';
import CircleNumber from '../atoms/CircleNumber/circle-number';

const installations = [
  {number: 10, text: 'Glamping'},
  {number: 5, text: 'Cabañas'},
  {number: 4, text: 'Servicios Casa Club'},
  {number: 4, text: 'Amenidades'},
];


export default function Installations() {

  return (
    <section id="installations" className='grid grid-cols-2 sm:grid-cols-4 pb-8 justify-center items-start gap-6 lg:gap-20 md:max-w-3xl lg:max-w-[52rem] flex-wrap'>
      { installations.map((installation, index) => (
        <div key={index} className="flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-6">
          <CircleNumber>{installation.number}</CircleNumber>
          <div className="text-base md:text-xl lg:text-2xl font-light text-center text-nowrap">{installation.text}</div>
        </div>
      ))}
    </section>
  )
}
