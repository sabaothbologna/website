import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import './Contattaci.css'

export default function Contattaci() {
  const { t } = useLanguage()

  return (
    <section className="scrivici" id="scrivici">
      <div className="wrap reveal">
        <div className="eyebrow">{t.contattaci.eyebrow}</div>
        <h2>{t.contattaci.title}</h2>
        <p>{t.contattaci.body}</p>
        <div className="cta-row">
          <a href={CONTACT.whatsappUrl} className="btn" target="_blank" rel="noreferrer">
            {t.contattaci.whatsappBtn}
          </a>
        </div>
      </div>
    </section>
  )
}
