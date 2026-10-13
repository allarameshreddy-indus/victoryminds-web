import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { developmentLifecycle, developmentPractices, services } from '../content'

export default function Services() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Software development and IT services, as one practice."
        image="/photos/ios.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          Custom applications, web software, iOS and Android apps, cloud, and ongoing IT support — discovery through
          launch, then a team that stays to operate and improve.
        </p>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What we build</p>
            <h2>Six practices, one IT studio.</h2>
            <p className="muted">
              Choose a lane or combine them. Most software programmes need more than one — a mobile app beside a web
              portal, or iOS and Android in the same release train, with IT support after go-live.
            </p>
          </div>
          <div className="grid-2">
            {services.map((item) => (
              <article className="card service-card" key={item.slug} id={item.slug}>
                <p className="kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                <a href={`#${item.slug}-detail`} className="text-link">
                  Read the development detail →
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
            <p className="eyebrow">How development runs</p>
            <h2>A delivery rhythm you can inspect.</h2>
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
            <p className="eyebrow">Engineering standards</p>
            <h2>More than features. Software your team can own.</h2>
          </div>
          <div className="grid-3">
            {developmentPractices.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 36 }}>
            <Link to="/contact" className="btn btn-gold">
              Start a build conversation
            </Link>
            <Link to="/portfolio" className="btn btn-outline">
              See selected work
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
