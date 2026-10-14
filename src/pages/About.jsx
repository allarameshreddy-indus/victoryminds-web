import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { aboutCopy, company, stats, whyVictoryMinds } from '../content'

export default function About() {
  return (
    <>
      <PageHero kicker="About" title="A US and India based technology and product company." image="/photos/about.jpg?v=6">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          {company.tagline}
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Who we are</h2>
            <p className="muted">{aboutCopy.short}</p>
            <p className="muted">{aboutCopy.beyond}</p>
            <Link to="/contact" className="btn btn-outline">
              Book a discovery call
            </Link>
          </div>
          <div className="portrait">
            <img
              src="/photos/about.jpg?v=6"
              alt="Victory Minds engineers reviewing a product together"
              style={{ objectPosition: '78% 42%' }}
            />
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why Victory Minds</p>
            <h2>Build right. Launch ready. Backed end to end.</h2>
          </div>
          <div className="grid-2">
            {whyVictoryMinds.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="stats">
            {stats.map((item) => (
              <div className="stat" key={item.label}>
                <b>{item.value}</b>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
