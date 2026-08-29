import { Instagram, MessageCircle, Facebook } from 'lucide-react'
import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './Hero.css'

export default function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="hero-bg" aria-hidden="true">
        <img src={asset('/photos/hero2.png')} alt="" />
      </div>
      <div className="wrap">
        <div className="eyebrow hero-in" style={{ '--in-delay': '0.05s' }}>
          {t.hero.eyebrow}
        </div>
        <h1 className="hero-in" style={{ '--in-delay': '0.15s' }}>
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
          <br />
          {t.hero.titleLine3}
        </h1>
        <p className="hero-in" style={{ '--in-delay': '0.3s' }}>
          {t.hero.body}
        </p>
        <a href="#contatti" className="btn hero-in" style={{ '--in-delay': '0.42s' }}>
          {t.hero.cta}
        </a>
        <div className="social-row hero-social hero-in" style={{ '--in-delay': '0.52s' }}>
          <a href={CONTACT.instagramUrl} aria-label={t.social.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.facebookUrl} aria-label={t.social.facebook} target="_blank" rel="noreferrer">
            <Facebook size={18} />
          </a>
          <a href={CONTACT.whatsappUrl} aria-label={t.social.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={18} />
          </a>
        </div>
      </div>
    </section>
  )
}
