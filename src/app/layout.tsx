import type { Metadata } from 'next'
import './globals.css'
import localFont from "next/font/local"

const satoshi = localFont({
  src: [

    {
      path: '../../public/fonts/Satoshi-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/fonts/Satoshi-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Satoshi-Medium.otf',
      weight: '500'
    },
    {
      path: '../../public/fonts/Satoshi-Bold.otf',
      weight: '700'
    },
    {
      path: '../../public/fonts/Satoshi-Black.otf',
      weight: '900'
    },
  ],
  variable: '--font-satoshi'
});


export const metadata: Metadata = {
  title: 'Glamping San Miguel',
  description: 'Invierte en San Miguel de Allende, mejor ciudad pequeña del mundo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-almost-white'>
      <body className={satoshi.variable}>{children}</body>
    </html>
  )
}
