import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { solutions } from '../content'

export default function Solutions() {
  return (
    <>
      <PageHero
        kicker="Solutions"
        title="One partner from product idea to market."
        image="/photos/workshop.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          We build, test, integrate, and implement products; shape go-to-market; connect founders with investors; and
          keep infrastructure and SOC audits in the same house.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap grid-2">
          {solutions.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="muted">{item.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section cream">
        <div className="wrap split">
          <div>
            <p className="eyebrow">Engagement</p>
            <h2>Build right. Launch ready. Backed end to end.</h2>
            <p className="muted">
              Share a few details about your goals and timeline. We review your note, hold a short discovery call, and
              return a clear proposal — scope, milestones, and commercials.
            </p>
            <Link to="/contact" className="btn btn-outline">
              Get a project quote
            </Link>
          </div>
          <div className="portrait">
            <img src="/photos/workshop.jpg" alt="Workshop around a product brief" />
          </div>
        </div>
      </section>
    </>
  )
}
