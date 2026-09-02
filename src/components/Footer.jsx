import { Link } from 'react-router-dom'
import { Instagram, Facebook } from 'lucide-react'
import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import WhatsAppIcon from './icons/WhatsAppIcon.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-legal">
          <span>{t.footer.copyright}</span>
          <span className="footer-sep" aria-hidden="true">|</span>
          <Link to="/privacy-policy">{t.footer.privacyPolicy}</Link>
          <span className="footer-sep" aria-hidden="true">|</span>
          <Link to="/cookie-policy">{t.footer.cookiePolicy}</Link>
        </div>
        <div className="social-row">
          <a href={CONTACT.instagramUrl} aria-label={t.social.instagram} target="_blank" rel="noreferrer">
            <Instagram size={18} />
          </a>
          <a href={CONTACT.facebookUrl} aria-label={t.social.facebook} target="_blank" rel="noreferrer">
            <Facebook size={18} />
          </a>
          <a href={CONTACT.whatsappUrl} aria-label={t.social.whatsapp} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
