import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { company, nav } from '../content'
import SocialLinks from './SocialLinks'

export default function Layout() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>{company.address}</span>
          <span className="topbar-right">
            <a href={company.emailHref}>{company.email}</a>
            <a href={company.phoneHref}>{company.phone}</a>
            <SocialLinks />
          </span>
        </div>
      </div>
      <header className="site">
        <div className="wrap nav">
          <NavLink to="/" end className="brand" onClick={() => setOpen(false)}>
            <img src="/vm-logo.png" alt="Victory Minds" className="brand-logo" />
          </NavLink>
          <button className="menu-btn" type="button" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            ☰
          </button>
          <nav className={`nav-links ${open ? 'open' : ''}`}>
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>
              Get started
            </Link>
          </nav>
        </div>
      </header>
      <Outlet />
      <section className="cta-band">
        <div className="wrap">
          <p className="eyebrow">Ready to begin?</p>
          <h2>Let us tailor software around your next programme.</h2>
          <p className="muted" style={{ maxWidth: 560, color: 'rgba(255,255,255,0.72)' }}>
            Share a brief. We will come back with a recommended path — MVP, rebuild, or a dedicated engineering squad.
          </p>
          <div className="hero-actions">
            <NavLink to="/contact" className="btn btn-gold">
              Get started
            </NavLink>
            <a href={company.phoneHref} className="btn btn-ghost">
              Call {company.phone}
            </a>
          </div>
        </div>
      </section>
      <footer className="site">
        <div className="wrap foot-grid">
          <div>
            <div className="brand brand-foot" style={{ marginBottom: 16 }}>
              <img src="/vm-logo.png" alt="Victory Minds" className="brand-logo" />
            </div>
            <p>
              Hyderabad IT company for custom software, web applications, iOS and Android apps, cloud, and IT services.{' '}
              {company.tagline}
            </p>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
              <li>
                <NavLink to="/careers">Careers</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4>Work</h4>
            <ul>
              <li>
                <NavLink to="/services">Services</NavLink>
              </li>
              <li>
                <NavLink to="/solutions">Solutions</NavLink>
              </li>
              <li>
                <NavLink to="/technologies">Technologies</NavLink>
              </li>
            </ul>
          </div>
          <div>
            <h4>Visit</h4>
            <p>{company.address}</p>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              <a href={company.emailHref}>{company.email}</a>
            </p>
            <SocialLinks />
          </div>
        </div>
        <div className="wrap legal">
          <span>© {new Date().getFullYear()} Victory Minds. All rights reserved.</span>
          <span>Hyderabad · victoryminds.in</span>
        </div>
      </footer>
    </>
  )
}
