import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between bg-almost-white ">
      <div className="flex">
        <Title>Proyectos que nos respaldan</Title>
      </div>
        <Discover/>
    </main>
  )
}
