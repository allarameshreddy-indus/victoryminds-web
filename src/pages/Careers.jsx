import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { company, openings } from '../content'

export default function Careers() {
  return (
    <>
      <PageHero kicker="Careers" title="Build here. Ship here. Own the craft." image="/photos/careers.jpg">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          We hire software engineers who like talking to the people who will use the application — and who still care about the
          pull request.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Open roles</p>
            <h2>Hyderabad studio.</h2>
          </div>
          <div className="grid-3">
            {openings.map((item) => (
              <article className="card" key={item.title}>
                <p className="kicker">{item.type}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
                <a className="text-link" href={company.emailHref}>
                  Write to {company.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section cream">
        <div className="wrap">
          <h2>No role that fits?</h2>
          <p className="muted" style={{ maxWidth: 560 }}>
            Send a portfolio and a note on the kind of work you want next. We keep a short list when the right brief
            arrives.
          </p>
          <Link to="/contact" className="btn btn-outline">
            Introduce yourself
          </Link>
        </div>
      </section>
    </>
  )
}
