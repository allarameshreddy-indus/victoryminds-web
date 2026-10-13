export default function PageHero({ kicker, title, children, image }) {
  return (
    <section className="page-hero">
      {image ? (
        <div className="page-hero-media" aria-hidden="true">
          <img src={image} alt="" />
        </div>
      ) : null}
      <div className="wrap page-hero-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {children}
      </div>
    </section>
  )
}
