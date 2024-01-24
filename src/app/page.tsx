import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'
import Timeline from './components/organisms/timeline'
import Operations from './components/organisms/operations'
import Contact from './components/organisms/contact'
import Gallery from './components/organisms/gallery'
import Footer from './components/organisms/footer'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center gap-12 md:gap-28 font-satoshi">
        <Header />
        <Discover />
        <Gallery />
        <Oportunity />
        <Operations />
        <Experience />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
