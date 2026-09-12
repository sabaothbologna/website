import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import WhatsAppIcon from './icons/WhatsAppIcon.jsx'
import './Contattaci.css'

export default function Contattaci() {
  const { t } = useLanguage()

  return (
    <section className="scrivici" id="scrivici">
      <div className="scrivici-bg" aria-hidden="true">
        <img src={asset('/photos/hero2.png')} alt="" />
      </div>
      <div className="wrap reveal">
        <div className="eyebrow">{t.contattaci.eyebrow}</div>
        <h2>{t.contattaci.title}</h2>
        <p>{t.contattaci.body}</p>
        <div className="cta-row">
          <a href={CONTACT.whatsappUrl} className="btn" target="_blank" rel="noreferrer">
            <WhatsAppIcon size={18} />
            {t.contattaci.whatsappBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
