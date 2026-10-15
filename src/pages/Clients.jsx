import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { clients, reviews } from '../content'

export default function Clients() {
  return (
    <>
      <PageHero kicker="Clients" title="GTM clients we take to market." image="/photos/dashboard.jpg">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          These companies work with Victory Minds on go-to-market — positioning, launch, and the story that wins buyers.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Clients</p>
            <h2>All of them, in one place.</h2>
          </div>
          <div className="grid-2">
            {clients.map((item) => (
              <article className="card" key={item.name}>
                <p className="kicker">{item.sector}</p>
                <h3>{item.name}</h3>
                <p className="muted">{item.body}</p>
                <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                  {item.url.replace(/^https?:\/\//, '').replace(/\/$/, '')} →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Reviews</p>
            <h2>What GTM looks like from their side.</h2>
          </div>
          <div className="grid-2">
            {reviews.map((item) => (
              <article className="card review-card" key={item.company}>
                <p className="quote">“{item.quote}”</p>
                <p className="review-meta">
                  {item.role},{' '}
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.company}
                  </a>
                </p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-gold">
              Talk about your GTM
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
