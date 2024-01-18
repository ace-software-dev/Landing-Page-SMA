import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'


export default function Home() {
  return (
    <main className="flex flex-col items-center gap-12 md:gap-28">
        <Header/>
        <Discover/>
        <Oportunity/>
        <Experience/>
    </main>
  )
}
