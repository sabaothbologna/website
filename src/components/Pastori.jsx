import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './Pastori.css'

export default function Pastori() {
  const { t } = useLanguage()

  return (
    <section className="pastori" id="pastori">
      <div className="wrap grid">
        <div className="img-block reveal">
          <img src={asset('/photos/pastori.jpeg')} alt={t.pastori.imgAlt} />
        </div>
        <div className="reveal" style={{ '--reveal-delay': '0.15s' }}>
          <div className="eyebrow">{t.pastori.eyebrow}</div>
          <h2>{t.pastori.title}</h2>
          <p>{t.pastori.p1}</p>
          <p>{t.pastori.p2}</p>
        </div>
      </div>
    </section>
  )
}
