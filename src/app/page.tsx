import Discover from './components/organisms/discover'
import Experience from './components/organisms/experience'
import Operations from './components/organisms/operations'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-almost-white">
      <Discover />
      <Operations />
      <Experience />
    </main>
  )
}
