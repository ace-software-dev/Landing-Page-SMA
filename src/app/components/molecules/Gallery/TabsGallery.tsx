
'use client'

interface TabsGalleryProps {
    image1: string,
    image2: string,
    image3: string,
}

import React, {useState } from 'react';
import RectangleButton from '../../atoms/Button/button-rectangle';
import ImageCard from '../../atoms/Card/image-card';
export default function TabsGallery( {image1, image2, image3} : TabsGalleryProps) {
    const [index, setIndex] = useState(1);

    const images = [image1, image2, image3];

    return (
        <div className='gap-8 flex flex-col items-center'>
            <div className='flex w-full gap-2  sm:w-1/2 md:gap-6 items-center'>
                <RectangleButton action={setIndex} index={0} classes='flex-1 text-base lg:text-xl' active={index === 0}>Casa Club</RectangleButton>
                <RectangleButton action={setIndex} index={1} classes='flex-1 text-base lg:text-xl' active={index === 1}>Glamping</RectangleButton>
                <RectangleButton action={setIndex} index={2} classes='flex-1 text-base lg:text-xl' active={index === 2}>Cabaña</RectangleButton>
            </div>
            <div className={index === 0 ? '':'hidden' }>
                <ImageCard src ={images[0]}></ImageCard>
            </div >
            <div className={index === 1 ? '':'hidden' }>
                <ImageCard src ={images[1]}></ImageCard>
            </div>
            <div className={index === 2 ? '':'hidden' }>
                <ImageCard src ={images[2]}></ImageCard>
            </div>
        </div>
    )
}
