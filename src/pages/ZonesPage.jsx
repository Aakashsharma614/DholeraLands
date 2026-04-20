import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import SectionHeader from "../components/SectionHeader";
import { zoneDirectory } from "../data/zones";

function revealDelay(index, offset = 0) {
  return { "--reveal-delay": `${offset + index * 55}ms` };
}

export default function ZonesPage() {
  return (
    <>
      <Meta
        title="Know Your Zones | dholeralands"
        description="Browse Dholera zone pages including corridor, residential, industrial, tourism, and infrastructure-focused land-use categories."
      />

      <section className="page-hero zone-directory-hero">
        <div className="container narrow" data-reveal>
          <p className="eyebrow">Know Your Zone</p>
          <h1>Explore every Dholera zone through a single reusable zone directory.</h1>
          <p>
            This section mirrors the reference site’s zone discovery flow: click any zone card to open a
            dedicated detail page with intent, land-use guidance, and supporting categories.
          </p>
        </div>
      </section>

      <section className="section reference-zone-section">
        <div className="container">
          <SectionHeader
            eyebrow="Zone Directory"
            title="All corridor and zone pages are now wired as dedicated route pages."
            description="Each card below opens a separate detail page using one shared page template and a single central zone dataset."
            align="center"
          />
          <div className="reference-zone-grid">
            {zoneDirectory.map((zone, index) => (
              <Link
                key={zone.slug}
                className="reference-zone-card reference-zone-card-link"
                to={`/zones/${zone.slug}`}
                data-reveal
                style={revealDelay(index)}
              >
                <img src={zone.image} alt={zone.title} loading="lazy" />
                <div className="reference-zone-label">
                  <span>{zone.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
