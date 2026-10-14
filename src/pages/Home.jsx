import { Link } from 'react-router-dom'
import { aboutCopy, hero, portfolio, services, stats, whyVictoryMinds } from '../content'

const aboutImg = '/studio-portrait.jpg?v=3'

const heroPills = [
  { label: 'Product Building', icon: 'code' },
  { label: 'Product Testing', icon: 'data' },
  { label: 'Integrations', icon: 'cloud' },
  { label: 'Implementation', icon: 'shield' },
  { label: 'Go-to-Market', icon: 'ai' },
  { label: 'Investors', icon: 'code' },
  { label: 'Infrastructure', icon: 'cloud' },
  { label: 'SOC Audits', icon: 'shield' },
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
        <img src="/hero-team.jpg?v=5" width={2560} height={1440} alt="" />
        <div className="hero-live-shade" />
        <div className="wrap">
          <div className="hero-live-copy">
            <h1>
              We build, test, integrate, and launch products — then help them{' '}
              <span>win the market.</span>
            </h1>
            <p>{hero.subhead}</p>
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
          <Link to="/contact" className="btn btn-gold">
            {hero.primaryCta}
          </Link>
          <Link to="/contact" className="btn btn-ghost">
            {hero.secondaryCta}
          </Link>
        </div>
      </div>

      <section className="section">
        <div className="wrap split">
          <div>
            <p className="eyebrow">US and India</p>
            <h2>Your product, engineering, and go-to-market partner.</h2>
            <p className="muted">{aboutCopy.short}</p>
            <p className="muted">{aboutCopy.beyond}</p>
            <Link to="/about" className="btn btn-outline">
              About us
            </Link>
          </div>
          <div className="portrait">
            <img src={aboutImg} alt="Victory Minds team in a product review" />
          </div>
        </div>
      </section>

      <section className="section navy">
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
        </div>
      </section>

      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>Eight practices, one accountable partner.</h2>
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
            <h2>Products we have taken into market.</h2>
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
            <Link to="/contact" className="btn btn-ghost">
              {hero.primaryCta}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
