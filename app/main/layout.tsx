import { Inter } from 'next/font/google'
// import Navbar from './main/components/Navbar'
import { Fragment } from 'react'
// import MainContainer from './main/components/MainContainer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lysa Grace',
  description: 'Lysa Grace',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&family=Source+Sans+3:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
      </head>
      <body className={inter.className}>
          {/* <Navbar />
          <MainContainer name='test'>{children}</MainContainer> */}
      </body>
    </html>
  )
}