import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy.jsx'
import CookiePolicy from './components/CookiePolicy.jsx'

function HomePage() {
  return (
    <main>
      <Hero />
      <ChiSiamo />
      <Gallery />
      <Eventi />
      <Bologna />
      <VieniATrovarci />
      <Contattaci />
    </main>
  )
}

export default function App() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

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
  }, [location.pathname])

  return (
    <LanguageProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
      <Footer />
    </LanguageProvider>
  )
}
