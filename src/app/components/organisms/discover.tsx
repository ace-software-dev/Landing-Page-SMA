
import React from 'react';
import RectangleButton from '../atoms/Button/button-rectangle';
import ImageCard from '../atoms/Card/image-card';
import TabsGallery from '../molecules/Gallery/TabsGallery';

export default function Discover() {
    
    
    return (
    <section id="discover" className=' m-6 gap-9 flex flex-col items-center max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl'>
        <TabsGallery image1='/images/casaclub_plano.png' image2='/images/glamping_plano.png' image3='/images/cabaña_plantabaja.png'></TabsGallery>
    </section>
    )
}
