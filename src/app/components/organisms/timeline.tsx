
import React from 'react';
import TimelineItem from '../molecules/TimelineItem/timeline-item';

export default function Timeline() {
    return (
    <section id="timeline" className='w-full bg-green-pastel flex justify-center items-center p-6'>
      <div className="flex flex-col items-center justify-around h-96 absolute w-full z-10 max-w-[48rem]
        sm:flex-row sm:static sm:justify-between sm:w-3/4 sm:h-72
      ">
        <div className="ml-[86px] sm:ml-0 sm:mt-[82px]">
          <TimelineItem date='2023' description='Comienzo del proyecto' />
        </div>
        <div className="ml-[-86px] sm:ml-0 sm:-mt-[82px]">
          <TimelineItem date='2024' description='Inicio de obra' reverse />
        </div>
        <div className="ml-[86px] sm:ml-0 sm:mt-[82px]">
          <TimelineItem date='Junio 2025' description='Entrega de proyecto' />
        </div>
      </div>
      <div className="w-[2px] h-96 sm:w-3/4 sm:h-[2px] sm:absolute bg-green-primary max-w-[48rem]"></div>
    </section>
  )
}
