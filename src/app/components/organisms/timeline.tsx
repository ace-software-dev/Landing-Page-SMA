
import React from 'react';
import TimelineItem from '../molecules/TimelineItem/timeline-item';

export default function Timeline() {
    return (
    <section id="timeline" className='w-full bg-green-pastel flex justify-center items-center p-6'>
      <div className="w-[2px] h-96 bg-green-primary"></div>
      <div className="flex flex-col items-center justify-around h-96 absolute w-100">
        <div className="ml-[86px]">
          <TimelineItem date='2023' description='Comienzo del proyecto' />
        </div>
        <div className="ml-[-86px]">
          <TimelineItem date='2024' description='Inicio de obra' reverse />
        </div>
        <div className="ml-[86px]">
          <TimelineItem date='2024' description='Entrega de proyecto' />
        </div>
      </div>
    </section>
  )
}
