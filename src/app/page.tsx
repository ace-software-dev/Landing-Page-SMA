import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'
import Timeline from './components/organisms/timeline'
import Operations from './components/organisms/operations'
import Location from './components/organisms/location'
import Contact from './components/organisms/contact'
import Gallery from './components/organisms/gallery'
import Installations from './components/organisms/installations'
import Footer from './components/organisms/footer'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center gap-12 md:gap-28 font-satoshi">
        <Header />
        <Discover />
        <Installations />
        <Gallery />
        <Oportunity />
        <Operations />
        <Experience />
        <Timeline />
        <Location />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
