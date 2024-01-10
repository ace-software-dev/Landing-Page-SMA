import Title from './components/atoms/title'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <Title children="Proyectos que nos respaldan" />
      </div>
    </main>
  )
}
