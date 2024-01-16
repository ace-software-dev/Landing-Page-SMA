
import React from 'react';
import RectangleButton from '../atoms/Button/button-rectangle';
import ImageCard from '../atoms/Card/image-card';
import GalleryTabs from '../molecules/GalleryTabs';

export default function Discover() {
    
    
    return (
    <section id="discover" className=' m-6 gap-9 flex flex-col items-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
        <GalleryTabs></GalleryTabs>
    </section>
    )
}
