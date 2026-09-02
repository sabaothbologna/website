import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './Bologna.css'

const PHOTOS = [
  { className: 'ph1', src: '/photos/bologna-san-luca.jpeg', reveal: false },
  { className: 'ph2', src: '/photos/bologna-due-torri.jpg', reveal: true, delay: '0.1s' },
  { className: 'ph3', src: '/photos/bologna-canal.jpg', reveal: true, delay: '0.2s' },
  { className: 'ph4', src: '/photos/bologna-piazza-santo-stefano.jpg', reveal: true, delay: '0.3s' },
  { className: 'ph5', src: '/photos/bologna-skyline.jpeg', reveal: true, delay: '0.4s' },
]

export default function Bologna() {
  const { t } = useLanguage()

  return (
    <section className="bologna" id="bologna">
      <div className="bologna-bg" aria-hidden="true">
        <img src={asset('/photos/hero2.png')} alt="" />
      </div>
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">{t.bologna.eyebrow}</div>
          <h2>{t.bologna.title}</h2>
          <p>{t.bologna.body}</p>
        </div>
        <div className="photo-grid">
          {PHOTOS.map((photo) => (
            <div
              key={photo.className}
              className={`ph ${photo.className}${photo.reveal ? ' reveal' : ''}`}
              style={photo.reveal ? { '--reveal-delay': photo.delay } : undefined}
            >
              <div
                className="ph-img"
                style={{ backgroundImage: `url(${asset(photo.src)})` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
