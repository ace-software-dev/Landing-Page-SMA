import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Operations from './components/organisms/operations'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-almost-white">
      <div className="p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24">
          <Title>Proyectos que nos respaldan</Title>
          <Discover/>
      </div>
      <Operations/>
    </main>
  )
}
