import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './ChiSiamo.css'

export default function ChiSiamo() {
  const { t } = useLanguage()

  return (
    <section className="dark-section" id="chi-siamo">
      <div className="wrap grid">
        <div className="img-block reveal">
          <img src={asset('/gallery/6.webp')} alt={t.chiSiamo.imgAlt} />
        </div>
        <div className="reveal" style={{ '--reveal-delay': '0.15s' }}>
          <div className="eyebrow">{t.chiSiamo.eyebrow}</div>
          <h2>
            {t.chiSiamo.titleLine1}
            <br />
            {t.chiSiamo.titleLine2}
            <br />
            {t.chiSiamo.titleLine3}
          </h2>
          <p>{t.chiSiamo.p1}</p>
          <p className="body-light">{t.chiSiamo.p2}</p>
        </div>
      </div>
    </section>
  )
}
