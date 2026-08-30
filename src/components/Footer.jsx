import { Link } from 'react-router-dom'
import { Instagram, MessageCircle, Facebook } from 'lucide-react'
import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer>
      <div className="wrap footer-inner">
        <div className="footer-legal">
          <div>{t.footer.copyright}</div>
          <div className="footer-links">
            <Link to="/privacy-policy">{t.footer.privacyPolicy}</Link>
            <Link to="/cookie-policy">{t.footer.cookiePolicy}</Link>
          </div>
        </div>
        <div className="social-row">
          <a href={CONTACT.instagramUrl} aria-label={t.social.instagram} target="_blank" rel="noreferrer">
            <Instagram size={16} />
          </a>
          <a href={CONTACT.facebookUrl} aria-label={t.social.facebook} target="_blank" rel="noreferrer">
            <Facebook size={16} />
          </a>
          <a href={CONTACT.whatsappUrl} aria-label={t.social.whatsapp} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
