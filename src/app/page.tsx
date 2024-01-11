import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Header from './components/organisms/header'
import Experience from './components/organisms/experience'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 md:p-16 lg:p-20 xl:p-24 bg-almost-white font-satoshi">
      <Header />
      <div className="flex">
        <Title>Proyectos que nos respaldan</Title>
      </div>
        <Discover/>
        <Experience/>
    </main>
  )
}
