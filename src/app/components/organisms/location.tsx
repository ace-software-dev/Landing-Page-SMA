'use client'
import React, { useEffect } from 'react';
import SectionTitle from '../molecules/SectionTitle/section-title';
import L, { marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import customIconUrl from '../../../../public/images/marker.png'

export default function Location() {
  useEffect(() => {
    // Create a map centered at a specific location
    console.log('Initializing map...');
    const map = L.map('map').setView([20.9356, -100.7133], 14);

    // Add a tile layer (you can use various tile providers)
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    const customIcon = L.icon({
      iconUrl: '../../../../public/images/marker.png',
      iconSize: [32, 32], // Set the size of your custom icon
      iconAnchor: [16, 32], // Set the anchor point of your custom icon
      popupAnchor: [0, -32], // Set the popup anchor of your custom icon
    });

    // Add a marker at the specified location

    L.marker([20.927240839304275, -100.71043413584435], { icon: customIcon }).addTo(map);

    return () => {
      console.log('Cleaning up map instance...');
      // Clean up the map instance when the component unmounts
      map.remove();
    };
  }, []);

  return (
    <section id="contact" className='w-full bg-almost-white flex justify-center p-6 sm:p-10 md:p-14 font-satoshi'>
      <div className="w-full flex flex-col gap-4 sm:gap-6 md:gap-8 sm:flex-row max-w-[68rem]">

        <div className='flex flex-row'>
          <SectionTitle 
            title='Ubicación Privilegiada' 
            subtitle='Experimenta el lujo y la conveniencia de una gran ubicación. En tan solo 15 minutos, sumérgete en la magia del centro histórico y disfruta de todo lo que ofrece.'
          />
        </div>

        <div className='flex flex-row w-full'>
          <div id="map" className=" h-96 w-full"/>
        </div>

      </div>
    </section>
  );
}