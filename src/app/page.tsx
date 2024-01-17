import Title from './components/atoms/Title/title'
import Discover from './components/organisms/discover'
import Experience from './components/organisms/experience'


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between bg-almost-white ">
        <Discover/>
        <Experience/>
    </main>
  )
}
