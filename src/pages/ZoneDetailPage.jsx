import { Link, Navigate, useParams } from "react-router-dom";
import Meta from "../components/Meta";
import { getZoneBySlug, zoneDirectory } from "../data/zones";

function revealDelay(index, offset = 0) {
  return { "--reveal-delay": `${offset + index * 80}ms` };
}

export default function ZoneDetailPage() {
  const { slug } = useParams();
  const zone = getZoneBySlug(slug);

  if (!zone) {
    return <Navigate to="/zones" replace />;
  }

  const relatedZones = zoneDirectory.filter((item) => item.slug !== zone.slug).slice(0, 3);

  return (
    <>
      <Meta
        title={`${zone.title} | dholeralands`}
        description={`${zone.title} page covering the zone intent, permitted uses, and supporting land-use patterns for Dholera investors.`}
      />

      <section className="zone-detail-hero">
        <div className="zone-detail-hero-media">
          <img src={zone.image} alt={zone.title} />
        </div>
        <div className="zone-detail-hero-overlay" />
        <div className="container zone-detail-hero-layout">
          <div className="zone-detail-hero-copy" data-reveal="left">
            <p className="eyebrow">Know Your Zone</p>
            <h1>{zone.title}</h1>
            <p className="zone-detail-tagline">{zone.tagline}</p>
            <p>{zone.summary}</p>
            <div className="zone-detail-actions">
              <Link className="button button-primary" to="/contact">
                Get Consultation
              </Link>
              <Link className="button button-secondary" to="/zones">
                View All Zones
              </Link>
            </div>
          </div>
          <aside className="zone-detail-intro-card" data-reveal="right" style={revealDelay(1, 120)}>
            <span className="hero-card-label">Zone Summary</span>
            <strong>Why this zone exists</strong>
            <ul className="zone-detail-bullet-list">
              {zone.intent.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container zone-detail-grid">
          {zone.sections.map((section, index) => (
            <article className="zone-detail-card" key={section.title} data-reveal style={revealDelay(index)}>
              <p className="eyebrow">Permitted Uses</p>
              <h2>{section.title}</h2>
              <ul className="zone-detail-bullet-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container zone-detail-support-layout">
          <article className="zone-detail-card" data-reveal>
            <p className="eyebrow">Investor Lens</p>
            <h2>Read the zone as a land-use story, not only a label.</h2>
            <p>
              The reference site presents zones as separate information pages. This implementation keeps
              that same behavior while making the content easier to maintain and extend inside your React
              app.
            </p>
            <p>
              Use the zone page to understand the broad intent, the type of activity encouraged there, and
              which support uses usually sit around the primary land-use pattern.
            </p>
          </article>

          <article className="zone-detail-card" data-reveal="right" style={revealDelay(1, 120)}>
            <p className="eyebrow">Explore More</p>
            <h2>Related zones</h2>
            <div className="zone-detail-related-list">
              {relatedZones.map((item) => (
                <Link key={item.slug} className="zone-detail-related-item" to={`/zones/${item.slug}`}>
                  <span>{item.title}</span>
                  <small>{item.tagline}</small>
                </Link>
              ))}
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
