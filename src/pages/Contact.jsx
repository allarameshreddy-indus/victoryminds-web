import { useState } from 'react'
import { company } from '../content'
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
      <PageHero kicker="Contact" title="Tell us what software you need to build." image="/photos/contact.jpg">
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          A short brief is enough to start — a new application, a mobile app, cloud, or IT support for systems you
          already run.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap split">
          <div>
            {sent ? (
              <div className="success">
                Thank you. We have received your note and will be in touch at the details you shared.
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit}>
                <input name="name" required placeholder="Your name" />
                <input name="email" type="email" required placeholder="Work email" />
                <input name="phone" required placeholder="Phone" />
                <select name="interest" defaultValue="">
                  <option value="" disabled>
                    I am interested in
                  </option>
                  <option>Custom software development</option>
                  <option>Web application development</option>
                  <option>iOS app development</option>
                  <option>Android app development</option>
                  <option>IT services and support</option>
                  <option>Cloud</option>
                  <option>AI / ML</option>
                  <option>A partnership</option>
                  <option>Careers</option>
                </select>
                <textarea name="message" placeholder="Project notes" />
                <button className="btn btn-gold" type="submit">
                  Send message
                </button>
              </form>
            )}
          </div>
          <aside className="card">
            <p className="kicker">Studio</p>
            <h3>Kavuri Hills, Hyderabad</h3>
            <p>{company.address}</p>
            <p>
              <a href={company.phoneHref}>{company.phone}</a>
              <br />
              <a href={company.emailHref}>{company.email}</a>
            </p>
            <p className="muted">
              We typically reply within one business day. For urgent production issues, call the studio line or message
              us on WhatsApp.
            </p>
            <SocialLinks />
          </aside>
        </div>
      </section>
    </>
  )
}
