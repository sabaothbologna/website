import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from './translations.js'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'sabaoth-lang'

function detectLanguage() {
  if (typeof navigator === 'undefined') return 'it'
  const browserLang = navigator.language || navigator.userLanguage || ''
  return browserLang.toLowerCase().startsWith('it') ? 'it' : 'en'
}

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'it'
  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (saved === 'it' || saved === 'en') return saved
  return detectLanguage()
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggleLanguage = () => setLang((current) => (current === 'it' ? 'en' : 'it'))

  const value = { lang, toggleLanguage, t: translations[lang] }

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return ctx
}
