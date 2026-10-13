import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { stats, values } from '../content'

export default function About() {
  return (
    <>
      <PageHero kicker="About" title="An IT company with a long view of the software." image="/photos/about.jpg?v=6">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          Victory Minds was established in 2010 in Hyderabad. We design, develop, and support software for
          organisations that need applications to behave under real operational pressure.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap split">
          <div>
            <h2>Who we are</h2>
            <p className="muted">
              We are a software development and IT services firm: discovery, architecture, implementation, and the
              unglamorous work of keeping applications healthy after the launch party.
            </p>
            <p className="muted">
              From Kavuri Hills we serve founders, operators, and IT leaders who want a team that will argue for the
              simpler design when it is the right one — and for the harder one when scale, security, or the application
              in someone’s hand demands it.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Start a conversation
            </Link>
          </div>
          <div className="portrait">
            <img
              src="/photos/about.jpg?v=6"
              alt="Victory Minds engineers reviewing software together"
              style={{ objectPosition: '78% 42%' }}
            />
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Culture</p>
            <h2>What we refuse to compromise.</h2>
          </div>
          <div className="grid-3">
            {values.map((item) => (
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
