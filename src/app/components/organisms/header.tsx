
import RoundedButton from '../atoms/Button/rounded-button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Subtitle from '../atoms/Subtitle/subtitle';
import Title from '../atoms/Title/title';

export default function Header() {

  return (
    <section id="header" className='bg-background w-full flex flex-col sm:flex-row justify-between items-center sm:items-end'>
      <div className="flex flex-col justify-start items-center gap-5 px-6 py-8 z-10
        sm:w-1/2 sm:items-start sm:justify-center sm:ml-5
        md:place-self-center md:gap-8
        lg:w-2/5 lg:ml-16
      ">
        <div className="flex flex-col justify-center items-center gap-4 text-center sm:items-start sm:text-start">
          <Subtitle size='text-xl lg:text-2xl  xl:text-4xl' classes='italic align-center'>Naturaleza, Lujo y Encanto</Subtitle>
          <Title size='text-[2.5rem] lg:text-5xl xl:text-7xl' classes='leading-[3rem]'> Glamping <br className='xs:none md:block' /> San Miguel </Title>
          <div className='text-almost-black text-base lg:text-xl  w-80 lg:w-full'>Invierte en San Miguel de Allende, la mejor ciudad pequeña del <strong>mundo</strong> </div>
        </div>
        <RoundedButton>
          <div className='text-sm lg:text-lg'>
            Quiero invertir
          </div>
        </RoundedButton>
      </div>
      <div className="relative flex items-end justify-end -mt-12 sm:mt-8">
        <Image
          src='/images/header-blob.svg'
          alt='Header blob'
          className='w-[48rem] sm:w-[50vw] xl:w-[45vw]'
          width={1280}
          height={1280}
        />
        <Image
          src='/images/header-image.png'
          alt='Header image'
          className='absolute bottom-0 right-0 w-[48rem] sm:w-[50vw] xl:w-[45vw]'
          width={1217}
          height={987}
        />
      </div>
    </section>
  )
}
