import { useState } from 'react'
import { company, contactInterests, contactNext } from '../content'
import PageHero from '../components/PageHero'
import SocialLinks from '../components/SocialLinks'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero kicker="Contact" title="Tell us what you're building. We'll reply within one business day." image="/photos/contact.jpg">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          Share a few details about your goals and timeline — the right person from our US or India team will get back
          to you.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap split">
          <div>
            {sent ? (
              <div className="success">
                Thank you. We have received your note and will reply within one business day.
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <input name="name" required placeholder="Your name" />
                <input name="email" type="email" required placeholder="Work email" />
                <input name="phone" required placeholder="Phone" />
                <select name="interest" defaultValue="" required>
                  <option value="" disabled>
                    What do you need help with?
                  </option>
                  {contactInterests.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
                <textarea name="message" placeholder="Goals, timeline, and anything we should know" />
                <button className="btn btn-gold" type="submit">
                  Book a discovery call
                </button>
              </form>
            )}
          </div>
          <aside className="card">
            <p className="kicker">Offices</p>
            <h3>{company.offices}</h3>
            <p>{company.address}</p>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              <a href={company.emailHref}>{company.email}</a>
            </p>
            <p className="muted">Response time: {company.responseTime}.</p>
            <SocialLinks />
          </aside>
        </div>
      </section>
      <section className="section cream">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">What happens next</p>
            <h2>A short path from your note to a clear proposal.</h2>
          </div>
          <div className="process">
            {contactNext.map((item) => (
              <article key={item.step}>
                <div className="step">{item.step}</div>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
