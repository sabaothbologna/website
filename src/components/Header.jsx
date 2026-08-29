import { useState, useEffect } from 'react'
import { Menu, X, Globe } from 'lucide-react'
import logo from '../logo.svg'
import { NAV_LINKS } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import './Header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { lang, toggleLanguage, t } = useLanguage()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 820) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap header-inner">
        <a href="#top" className="logo-link" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Sabaoth Church Bologna" className="logo-img" />
        </a>

        <div className="header-right">
          <nav className="nav-desktop">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href}>
                {t.nav[link.key]}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <button
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={t.langSwitch}
              title={t.langSwitch}
            >
              <Globe size={17} />
              <span>{lang === 'it' ? 'EN' : 'IT'}</span>
            </button>

            <button
              className="menu-toggle"
              aria-label={menuOpen ? t.menu.close : t.menu.open}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
        <nav>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
