import { Link } from 'react-router-dom'
import { capabilities, portfolio, services, stats, values } from '../content'

const aboutImg = '/studio-portrait.jpg?v=3'

const heroPills = [
  { label: 'Cloud Solutions', icon: 'cloud' },
  { label: 'Software Development', icon: 'code' },
  { label: 'Data & Analytics', icon: 'data' },
  { label: 'AI & Automation', icon: 'ai' },
  { label: 'IT Consulting & Support', icon: 'shield' },
]

function HeroIcon({ name }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
  }
  if (name === 'cloud') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18h10a4 4 0 0 0 .4-8 5.5 5.5 0 0 0-10.7-1.2A3.5 3.5 0 0 0 7 18z" {...common} />
      </svg>
    )
  }
  if (name === 'code') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 8 5 12l4 4M15 8l4 4-4 4M13 6l-2 12" {...common} />
      </svg>
    )
  }
  if (name === 'data') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse cx="12" cy="6" rx="7" ry="3" {...common} />
        <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" {...common} />
      </svg>
    )
  }
  if (name === 'ai') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 3a6 6 0 0 0-4 10.8V17h8v-3.2A6 6 0 0 0 12 3z" {...common} />
        <path d="M9 17v2a3 3 0 0 0 6 0v-2" {...common} />
      </svg>
    )
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3z" {...common} />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero-live">
        <img
          src="/hero-team.jpg?v=5"
          width={2560}
          height={1440}
          alt=""
        />
        <div className="hero-live-shade" />
        <div className="wrap">
          <div className="hero-live-copy">
            <h1>
              Ideas.
              <br />
              Technology.
              <br />
              <span>Real Impact.</span>
            </h1>
            <p>
              Empowering businesses with innovative IT solutions to build a smarter, brighter future.
            </p>
            <ul className="hero-live-pills">
              {heroPills.map((item) => (
                <li key={item.label}>
                  <span className="hero-live-icon">
                    <HeroIcon name={item.icon} />
                  </span>
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <div className="hero-banner-bar">
        <div className="wrap hero-actions">
          <Link to="/services" className="btn btn-gold">
            Our services
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            Get started
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Since 2010</p>
            <h2>A Kavuri Hills IT studio for serious software work.</h2>
            <p className="muted">
              Victory Minds is a software and IT services company. We help organisations turn briefs into working
              applications: discovery, architecture, development, and the months after launch.
            </p>
            <p className="muted">
              Web software, mobile apps, cloud, and ongoing IT services sit in the same house, so a portal, an API, and
              an application do not become three disconnected vendors.
            </p>
            <Link to="/about" className="btn btn-outline">
              About us
            </Link>
          </div>
          <div className="portrait">
            <img src={aboutImg} alt="Victory Minds team in a software review" />
          </div>
        </div>
      </section>

      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">How we work</p>
            <h2>Values that show up in the backlog.</h2>
            <p className="muted">
              Elegant language is useless if the sprint cannot explain itself. These are the habits we hold when
              estimates get tight.
            </p>
          </div>
          <div className="grid-3">
            {values.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Software development and IT services, end to end.</h2>
          </div>
          <div className="grid-3">
            {services.map((item) => (
              <article className="card" key={item.slug}>
                <p className="kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.summary}</p>
                <Link to={`/services#${item.slug}-detail`} className="text-link">
                  Explore →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Capabilities</p>
            <h2>What our teams actually deliver.</h2>
          </div>
          <div className="grid-3">
            {capabilities.map((item) => (
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

      <section className="section navy">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Selected work</p>
            <h2>Software we have taken into production.</h2>
          </div>
          <div className="grid-2">
            {portfolio.slice(0, 4).map((item) => (
              <article className="card" key={item.title}>
                <p className="kicker">{item.sector}</p>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="hero-actions" style={{ marginTop: 32 }}>
            <Link to="/portfolio" className="btn btn-gold">
              View portfolio
            </Link>
            <Link to="/technologies" className="btn btn-ghost">
              Technologies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
