import Link from 'next/link';
import SectionText from '../atoms/SectionText/section-text';
import MobileMenu from '../molecules/mobile-menu';

export default function Topbar() {
  return (
    <header className="flex w-full z-30 top-0">
      <div className="sticky z-30 top-0 w-full h-[70px] px-8 pt-3 bg-header justify-between items-center inline-flex">
        <Link href="#header">
          <div className="w-12 md:w-16 flex items-center">
            {/* si en el futuro hay un logo puede agregarse aqui */}
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav>
          <ul className="hidden md:flex justify-center items-center gap-4 lg:gap-8 space-x-2 my-8">
            <li>
              <SectionText href="#desarrollo">Desarrollo</SectionText>
            </li>
            <li>
              <SectionText href="#galeria">Galería</SectionText>
            </li>
            <li>
              <SectionText href="#oportunidad">Oportunidad</SectionText>
            </li>
            <li>
              <SectionText href="#experiencia">Experiencia</SectionText>
            </li>
            <li>
              <SectionText href="#etapas">Etapas</SectionText>
            </li>
            <li>
              <SectionText href="#ubicacion">Ubicación</SectionText>
            </li>
            <li>
              <SectionText href="#contacto">Contacto</SectionText>
            </li>
          </ul>
        </nav>

        {/* Mobile navigation  */}
        <MobileMenu />
      </div>
    </header>
  )
}