
import React from 'react';
import RectangleButton from '../atoms/Button/button-rectangle';
export default function Discover() {
    
    
    return (
    <section id="discover" className=''>
        <div className='flex flex-row w-[500px] gap-6 items-center'>
            <RectangleButton classes='flex-1' active={false}>Casa Club</RectangleButton>
            <RectangleButton classes='flex-1'>Glamping</RectangleButton>
            <RectangleButton classes='flex-1' active={false}>Cabaña</RectangleButton>
        </div>
    </section>
  )
}
