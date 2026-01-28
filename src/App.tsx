import React from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Expertise } from './components/Expertise'
import { DanceHouse } from './components/DanceHouse'
import { Awards } from './components/Awards'
import { Portfolio } from './components/Portfolio'
import { Gallery } from './components/Gallery'
import { Festivals } from './components/Festivals'
import { Partnerships } from './components/Partnerships'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Global Noise Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-40 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Expertise />
        <DanceHouse />
        <Festivals />
        <Awards />
        <Portfolio />
        <Gallery />
        <Partnerships />
        <Services />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
