import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-almost-white font-satoshi">
      <Header />
      <div className="flex">
        <Title>Proyectos que nos respaldan</Title>
      </div>
        <Discover/>
        <Experience/>
    </main>
  )
}
