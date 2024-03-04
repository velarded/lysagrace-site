import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './main/components/Navbar'
import { Fragment } from 'react'
import MainContainer from './main/components/MainContainer'
import Hero from './page'
import About from './main/about/page'
import Media from './main/media/page'
import Events from './main/events/page'
import Lessons from './main/lessons/page'
import Contact from './main/contact/page'
import Footer from './main/components/Footer'

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
          <Navbar isHero={false}/>
          <Hero />
          <MainContainer>
            <About />
            <Media />
            <Events />
            <Lessons />
            <Contact />
          </MainContainer>
          <Footer />
      </body>
    </html>
  )
}