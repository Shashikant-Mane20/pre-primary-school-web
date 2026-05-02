import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Programs from './components/Programs'
import Features from './components/Features'
import Activities from './components/Activities'
import About from './components/About'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Benefits />
      <Programs />
      <Features />
      <Activities />
      <About />
      <Gallery />
      <CTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
