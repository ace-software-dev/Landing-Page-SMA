import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'
import Timeline from './components/organisms/timeline'
import Operations from './components/organisms/operations'
import Gallery from './components/organisms/gallery'

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-28">
        <Header/>
        <Discover/>
        <Gallery />
        <Oportunity/>
        <Operations/>
        <Experience/>
        <Timeline />
    </main>
  )
}
