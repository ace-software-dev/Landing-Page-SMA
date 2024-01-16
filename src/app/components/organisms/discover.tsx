
import React from 'react';
import RectangleButton from '../atoms/Button/button-rectangle';
import ImageCard from '../atoms/Card/image-card';
export default function Discover() {
    
    
    return (
    <section id="discover" className=' m-6 gap-9 flex flex-col items-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
        <div className='flex flex-row w-full gap-5 items-center'>
            <RectangleButton classes='flex-1 text-xs md:text-xl' active={false}>Casa Club</RectangleButton>
            <RectangleButton classes='flex-1 text-xs md:text-xl'>Glamping</RectangleButton>
            <RectangleButton classes='flex-1 text-xs md:text-xl' active={false}>Cabaña</RectangleButton>
        </div>
        <div>
            <ImageCard src ="/images/glamping_plano.png"></ImageCard>
        </div>
    </section>
    )
}
