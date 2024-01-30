'use client'

import { useState, useRef, useEffect } from 'react'
import SectionText from '../atoms/SectionText/section-text'

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-green-primary hover:text-green-primary transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className="absolute top-full z-20 left-0 w-full px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out"
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white"></div>
        <ul className="bg-green-pastel2 px-4 py-2 rounded bg-opacity-97">
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#desarrollo">Desarrollo</SectionText>
          </li>
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#galeria">Galería</SectionText>
          </li>
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#oportunidad">Oportunidad</SectionText>
          </li>
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#experiencia">Experiencia</SectionText>
          </li>
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#etapas">Etapas</SectionText>
          </li>
          <li className='py-1 border-b border-almost-white'>
            <SectionText href="#ubicacion">Ubicación</SectionText>
          </li>
          <li className='pt-1'>
            <SectionText href="#contacto">Contacto</SectionText>
          </li>
        </ul>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white opacity-25"></div>
      </nav>
    </div>
  )
}