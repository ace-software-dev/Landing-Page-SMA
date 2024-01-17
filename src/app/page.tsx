import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-almost-white font-satoshi">
      <Header />
      <div className="flex">
        <Title>Proyectos que nos respaldan</Title>
      </div>
        <Discover/>
        <Oportunity/>
        <Experience/>
    </main>
  )
}
