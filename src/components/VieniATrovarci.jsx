import { CONTACT } from '../constants.js'
import { useLanguage } from '../LanguageContext.jsx'
import './VieniATrovarci.css'

export default function VieniATrovarci() {
  const { t } = useLanguage()
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    CONTACT.address,
  )}&output=embed`

  return (
    <section className="contatti" id="contatti">
      <div className="wrap grid">
        <div className="reveal">
          <div className="eyebrow">{t.vieni.eyebrow}</div>
          <h2>{t.vieni.title}</h2>
          <div className="info-row">
            <div className="label">{t.vieni.indirizzoLabel}</div>
            <div className="value">
              {t.vieni.addressLine1}
              <br />
              {t.vieni.addressLine2}
            </div>
          </div>
          <div className="info-row">
            <div className="label">{t.vieni.orarioLabel}</div>
            <div className="value">{t.vieni.orario}</div>
          </div>
        </div>
        <div className="map-block reveal" style={{ '--reveal-delay': '0.15s' }}>
          <iframe
            title={t.vieni.mapTitle}
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
