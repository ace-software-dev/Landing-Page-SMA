
import React from 'react';
import RectangleButton from '../atoms/Button/button-rectangle';
import ImageCard from '../atoms/Card/image-card';
export default function Discover() {
    
    
    return (
    <section id="discover" className=' m-6 gap-9 flex flex-col items-center'>
        <div className='flex flex-row w-[500px] gap-5 items-center'>
            <RectangleButton classes='flex-1' active={false}>Casa Club</RectangleButton>
            <RectangleButton classes='flex-1'>Glamping</RectangleButton>
            <RectangleButton classes='flex-1' active={false}>Cabaña</RectangleButton>
        </div>
        <div>
            <ImageCard src ="/images/glamping_plano.png"></ImageCard>
        </div>
    </section>
    )
}
