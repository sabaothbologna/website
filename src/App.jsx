import { useEffect } from 'react'
import { LanguageProvider } from './LanguageContext.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ChiSiamo from './components/ChiSiamo.jsx'
import Eventi from './components/Eventi.jsx'
import Bologna from './components/Bologna.jsx'
import Gallery from './components/Gallery.jsx'
import VieniATrovarci from './components/VieniATrovarci.jsx'
import Contattaci from './components/Contattaci.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <Header />
      <main>
        <Hero />
        <ChiSiamo />
        <Gallery />
        <Eventi />
        <Bologna />
        <VieniATrovarci />
        <Contattaci />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
