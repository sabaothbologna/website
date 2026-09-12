import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../LanguageContext.jsx'
import { asset } from '../publicAsset.js'
import './Gallery.css'

const PHOTOS = [
  asset('/gallery/1.webp'),
  asset('/gallery/2.webp'),
  asset('/gallery/3.webp'),
  asset('/gallery/4.webp'),
  asset('/gallery/5.webp'),
  asset('/gallery/6.webp'),
  asset('/gallery/7.webp'),
  asset('/gallery/8.jpg'),
  asset('/gallery/9.jpg'),
  asset('/gallery/10.jpg'),
  asset('/gallery/11.jpg'),
  asset('/gallery/12.jpg'),
]

export default function Gallery() {
  const trackRef = useRef(null)
  const { t } = useLanguage()

  const scrollByAmount = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.8 * direction
    track.scrollBy({ left: amount, behavior: 'smooth' })
  }

  return (
    <section className="gallery" id="galleria">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">{t.gallery.eyebrow}</div>
          <h2>{t.gallery.title}</h2>
        </div>
      </div>

      <div className="gallery-carousel">
        <button
          className="gallery-arrow gallery-arrow-left"
          aria-label={t.gallery.prev}
          onClick={() => scrollByAmount(-1)}
        >
          <ChevronLeft size={22} />
        </button>

        <div className="gallery-track" ref={trackRef}>
          {PHOTOS.map((src, index) => (
            <div className="gallery-item" key={src}>
              <img src={src} alt={t.gallery.alts[index]} loading="lazy" />
            </div>
          ))}
        </div>

        <button
          className="gallery-arrow gallery-arrow-right"
          aria-label={t.gallery.next}
          onClick={() => scrollByAmount(1)}
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  )
}
