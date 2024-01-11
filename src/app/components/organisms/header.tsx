
import RoundedButton from '../atoms/Button/rounded-button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Subtitle from '../atoms/Subtitle/subtitle';
import Title from '../atoms/Title/title';
import headerBlob from '@/../public/images/header-blob.svg';
import headerImage from '@/../public/images/header-image.png';

export default function Header() {

  return (
    <section id="header" className='bg-background w-full flex justify-between'>
      <div className="inline-flex flex-col justify-center items-start gap-8 ml-24 w-2/5 py-8">
        <div className="flex flex-col justify-center items-start gap-4">
          <Subtitle size='text-2xl' classes='italic'>Naturaleza, Lujo y Encanto</Subtitle>
          <Title size='text-6xl'> Glamping <br /> San Miguel </Title>
          <div className='text-almost-black text-2xl'>Invierte en San Miguel de Allende, la mejor ciudad pequeña del mundo </div>
        </div>
        <RoundedButton>Quiero invertir</RoundedButton>
      </div>
      <div className="relative flex items-end justify-end">
        <Image
          src={headerBlob}
          alt='Header blob'
          className='w-[48rem]'
        />
        <Image
          src={headerImage}
          alt='Header image'
          className='absolute bottom-0 right-0 w-[48rem]'
        />
      </div>
    </section>
  )
}
