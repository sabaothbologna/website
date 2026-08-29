import { useLanguage } from '../LanguageContext.jsx'
import './Bologna.css'

export default function Bologna() {
  const { t } = useLanguage()

  return (
    <section className="bologna" id="bologna">
      <div className="wrap">
        <div className="head reveal">
          <div className="eyebrow">{t.bologna.eyebrow}</div>
          <h2>{t.bologna.title}</h2>
          <p>{t.bologna.body}</p>
        </div>
        <div className="photo-grid">
          <div
            className="ph ph1 reveal"
            style={{
              '--reveal-delay': '0s',
              backgroundImage:
                "url(https://images.unsplash.com/photo-1730145612903-d5fe98515c47?auto=format&fit=crop&w=900&q=80)",
            }}
          >
            <span>{t.bologna.portici}</span>
          </div>
          <div
            className="ph ph2 reveal"
            style={{
              '--reveal-delay': '0.1s',
              backgroundImage:
                "url(https://images.unsplash.com/photo-1667758608427-f7be105f9bc3?auto=format&fit=crop&w=700&q=80)",
            }}
          >
            <span>{t.bologna.torri}</span>
          </div>
          <div
            className="ph ph3 reveal"
            style={{
              '--reveal-delay': '0.2s',
              backgroundImage:
                "url(https://images.unsplash.com/photo-1705171651065-4905e3eee1aa?auto=format&fit=crop&w=700&q=80)",
            }}
          >
            <span>{t.bologna.piazza}</span>
          </div>
          <div
            className="ph ph4 reveal"
            style={{
              '--reveal-delay': '0.3s',
              backgroundImage:
                "url(https://images.unsplash.com/photo-1786347583011-c5902e885aba?auto=format&fit=crop&w=1000&q=80)",
            }}
          >
            <span>{t.bologna.palazzo}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
