import Discover from "./components/organisms/discover"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24 bg-almost-white">
        <div className="flex flex-row text-black"> 
          <p>header</p>
        </div>
        <br/>
        <Discover/>
    </main>
  )
}
