import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { portfolio } from '../content'

export default function Portfolio() {
  return (
    <>
      <PageHero kicker="Portfolio" title="Work that left the building." image="/photos/dashboard.jpg">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          Products we have built, tested, integrated, and taken into market — logistics, healthcare, retail, and
          enterprise operations.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap grid-2">
          {portfolio.map((item) => (
            <article className="card" key={item.title}>
              <p className="kicker">{item.sector}</p>
              <h3>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section cream">
        <div className="wrap">
          <p className="eyebrow">Confidentiality</p>
          <h2>Named clients stay off the homepage until they ask to be there.</h2>
          <p className="muted" style={{ maxWidth: 640 }}>
            If you want a deeper walkthrough of architecture, metrics, or a similar brief, we will share it in
            conversation — with the discretion the original work required.
          </p>
          <Link to="/contact" className="btn btn-outline" style={{ marginTop: 8 }}>
            Request a briefing
          </Link>
        </div>
      </section>
    </>
  )
}
