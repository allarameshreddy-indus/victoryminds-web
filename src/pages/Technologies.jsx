import PageHero from '../components/PageHero'
import { technologies } from '../content'

export default function Technologies() {
  return (
    <>
      <PageHero
        kicker="Technologies"
        title="Tools chosen for the problem, not the brochure."
        image="/photos/code.jpg"
      >
        <p className="muted" style={{ maxWidth: 640, color: 'rgba(255,255,255,0.86)' }}>
          We keep a sharp core — web software, mobile apps, cloud, data, and IT services — and stretch it with specialists when a
          domain demands it.
        </p>
      </PageHero>
      <section className="section">
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
