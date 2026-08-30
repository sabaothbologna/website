import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './Eventi.css'

const EVENT_IMAGES = [
  'https://images.unsplash.com/photo-1600288480699-0b0d8a456dd8?auto=format&fit=crop&w=700&q=80',
  'https://images.unsplash.com/photo-1663162550932-f67b561e656f?auto=format&fit=crop&w=700&q=80',
  asset('/photos/yous-night.jpg'),
]

export default function Eventi() {
  const { t } = useLanguage()

  return (
    <section className="eventi" id="eventi">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">{t.eventi.eyebrow}</div>
          <h2>{t.eventi.title}</h2>
          <p className="lead">{t.eventi.lead}</p>
        </div>
        <div className="event-grid">
          {t.eventi.items.map((event, index) => (
            <div
              className="event-card reveal"
              key={index}
              style={{ '--reveal-delay': `${index * 0.12}s` }}
            >
              <div
                className="img"
                style={{ backgroundImage: `url(${EVENT_IMAGES[index]})` }}
              />
              <h3>{event.title}</h3>
              <p>{event.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
