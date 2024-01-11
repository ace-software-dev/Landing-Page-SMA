
import RoundedButton from '../atoms/Button/rounded-button';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export default function Hero() {

  return (
    <section id="header">
      <div className="xs:h-[45rem] md:h-full md:w-11/12 max-w-[85rem] w-full px-4 sm:px-6 relative flex justify-center overflow-hidden md:px-0 md:mx-auto">

        {/* Illustration behind hero content */}
        <div className="absolute lg:block pointer-events-none -bottom-1/4 md:-bottom-[15%] md:w-full h-3/4" aria-hidden="true" data-aos="fade-up" data-aos-delay="400">
          <div className="grid grid-cols-2 px-8 md:px-0 place-items-center place-content-end opacity-70">
            <div className="bg-radial-gradient-blue w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] md:place-self-start"></div>
            <div className="bg-radial-gradient-purple w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] md:place-self-end relative"></div>
          </div>
        </div>

        {/* Hero content */}
        <div className="relative flex pt-12 pb-10 md:pt-12 md:pb-16">

          {/* Section header */}
          <div className="grid grid-cols-1 md:grid-cols-2 w-full h-[32rem] md:h-[25rem] lg:h-[28rem] place-items-center md:place-items-stretch justify-center gap-6">
            <div className="flex md:col-span-1 justify-center flex-col gap-10 w-[28rem] sm:w-9/12 md:w-[35rem] md:items-start xl:w-[40rem]" data-aos="fade-up">
              <div className="flex flex-col text-[1.65rem] sm:text-3xl md:text-[1.8rem] xl:text-4xl">
                <span className='text-center md:text-start'>dict.header.title</span>
                <div className="inline-flex justify-center h-9 sm:h-12 md:h-14 md:justify-start">
                  <span>dict.header.title2</span>
                </div>
              </div>
              <div className="flex gap-8 justify-center items-center flex-col md:justify-start md:flex-row">
                <Link href={'https://calendly.com/acesoftwaremx/amamos-verte-crecer'} target="_blank">
                  <RoundedButton>dict.header.ctaButton</RoundedButton>
                </Link>
                <div className="inline-flex gap-2 md:gap-4 h-8">
                  <Link href={"https://www.instagram.com/ace.software.mx?igsh=OHlweHJ4dWZwNHl3"} target="_blank">
                    <Image
                      src="/images/instagram_icon.svg"
                      alt='Instagram Logo Icon'
                      width={32}
                      height={32}
                      className='hover:cursor-pointer hover:opacity-90'
                    />
                  </Link>
                  <Link href={"https://www.linkedin.com/company/ace-software-mx/"} target="_blank">
                    <Image
                      src="/images/linkedin_icon.svg"
                      alt='Instagram Logo Icon'
                      width={32}
                      height={32}
                      className='hover:cursor-pointer hover:opacity-90'
                    />
                  </Link>
                  <Image
                    src="/images/facebook_icon.svg"
                    alt='Instagram Logo Icon'
                    width={32}
                    height={32}
                    className='hidden hover:cursor-pointer hover:opacity-90'
                  />
                </div>
              </div>
              <div className="text-3xl font-book hidden md:block md:text-2xl">
                dict.header.slogan
              </div>
            </div>
            <div className='flex relative -right-2 md:col-span-1' data-aos="fade-up">
             {/* image */}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
    </section>
  )
}
