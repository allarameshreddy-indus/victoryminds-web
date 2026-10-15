import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { emergingTech, technologies } from '../content'

export default function Technologies() {
  return (
    <>
      <PageHero
        kicker="Technologies"
        title="AI and emerging stacks, chosen for the problem."
        image="/photos/code.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          Product engineering, AI, emerging technologies, HR systems, infrastructure, and audit-ready operations — a
          sharp core we stretch when the domain demands it.
        </p>
      </PageHero>
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Highlighted</p>
            <h2>AI and emerging technologies.</h2>
            <p className="muted">
              Not a lab on the side. Copilots, retrieval, AI-search visibility, vision and XR pipelines, with
              evaluation and a person in the loop.
            </p>
          </div>
          <div className="grid-2">
            {emergingTech.map((item) => (
              <article className="card card-featured" key={item.title}>
                <h3>{item.title}</h3>
                <p className="muted">{item.body}</p>
              </article>
            ))}
          </div>
          <Link to="/services#ai-emerging-detail" className="text-link">
            AI & emerging technologies service →
          </Link>
        </div>
      </section>
      <section className="section cream">
        <div className="wrap grid-3">
          {technologies.map((group) => (
            <article className="card" key={group.group}>
              <h3>{group.group}</h3>
              <div className="chip-row">
                {group.items.map((item) => (
                  <span className="chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
