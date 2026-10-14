import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { developmentLifecycle, services, whyVictoryMinds } from '../content'

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Product, testing, integrations, market, and trust — under one roof."
        image="/photos/ios.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          We build, test, integrate, and implement products; shape go-to-market strategies; connect founders with
          investors; and provide IT infrastructure support along with SOC audits.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we do</p>
            <h2>Eight practices, one accountable partner.</h2>
            <p className="muted">
              Choose a lane or combine them. Most programmes need more than one — a product beside integrations, or a
              launch beside infrastructure and audits.
            </p>
          </div>
          <div className="grid-2">
            {services.map((item) => (
              <article className="card service-card" key={item.slug} id={item.slug}>
                <p className="kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                <a href={`#${item.slug}-detail`} className="text-link">
                  Read the detail →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {services.map((item, index) => (
        <section
          className={`section ${index % 2 === 0 ? 'cream' : ''}`}
          key={item.slug}
          id={`${item.slug}-detail`}
        >
          <div className="wrap split">
            {index % 2 === 1 ? (
              <div className="portrait">
                <img src={item.image} alt={item.title} />
              </div>
            ) : null}
            <div>
              <p className="eyebrow">{item.kicker}</p>
              <h2>{item.title}</h2>
              <p className="muted">{item.summary}</p>
              <ul className="detail-list">
                {item.details.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
              <div className="chip-row">
                {item.stack.map((tech) => (
                  <span className="chip" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {index % 2 === 0 ? (
              <div className="portrait">
                <img src={item.image} alt={item.title} />
              </div>
            ) : null}
          </div>
        </section>
      ))}

      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How the journey runs</p>
            <h2>From idea to scale, without vendor handoffs.</h2>
          </div>
          <div className="process process-4">
            {developmentLifecycle.map((item) => (
              <article key={item.step}>
                <div className="step">{item.step}</div>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Why Victory Minds</p>
            <h2>One partner. Full journey.</h2>
          </div>
          <div className="grid-2">
            {whyVictoryMinds.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-gold">
              Book a discovery call
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Get a project quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
