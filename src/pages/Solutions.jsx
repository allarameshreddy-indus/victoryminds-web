import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { solutions } from '../content'

export default function Solutions() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="Software shaped around the problem — not a kit of parts."
        image="/photos/workshop.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          We design and develop applications, integrations, and IT services around the work you actually run — a
          customer portal, an enterprise system, a clinic, a field team.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap grid-2">
          {solutions.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section cream">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Engagement</p>
            <h2>Build with us, or let us run the first chapter.</h2>
            <p className="muted">
              Fixed-scope MVPs, dedicated squads, and co-delivery with your internal engineers are all in play. We
              recommend the smallest shape that still produces a production system — not a prototype that cannot be
              staffed.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Discuss a solution
            </Link>
          </div>
          <div className="portrait">
            <img
              src="/photos/workshop.jpg"
              alt="Workshop around a software brief"
            />
          </div>
        </div>
      </section>
    </>
  )
}
