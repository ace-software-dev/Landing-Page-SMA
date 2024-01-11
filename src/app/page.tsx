import Title from './components/atoms/title'
import Discover from './components/organisms/discover'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 bg-almost-white ">
      <div className="flex">
        <Title children="Proyectos que nos respaldan" />
      </div>
        <Discover/>
    </main>
  )
}
