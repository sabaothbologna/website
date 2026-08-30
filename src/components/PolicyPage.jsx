import { Link } from 'react-router-dom'
import { useLanguage } from '../LanguageContext.jsx'
import './PolicyPage.css'

export default function PolicyPage({ titleKey, sections }) {
  const { t } = useLanguage()

  return (
    <main className="policy-page">
      <div className="wrap policy-inner">
        <Link to="/" className="policy-back">
          {t.policy.back}
        </Link>
        <h1>{t.policy[titleKey].title}</h1>
        <p className="policy-updated">{t.policy.updated}</p>
        {sections.map((section) => (
          <section key={section}>
            <h2>{t.policy[titleKey][section].heading}</h2>
            {t.policy[titleKey][section].body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </section>
        ))}
      </div>
    </main>
  )
}
