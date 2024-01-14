import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Experience from './components/organisms/experience'
import Oportunity from './components/organisms/oportunity'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 md:gap-28 p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 bg-background">
      <div className="flex">
        <Title>Proyectos que nos respaldan</Title>
      </div>
        <Discover/>
        <Oportunity/>
        <Experience/>
    </main>
  )
}
