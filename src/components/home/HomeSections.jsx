import { Link } from "react-router-dom";

export function HomeSectionIntro({ eyebrow, title, description, align = "left" }) {
  return (
    <div className={`reference-section-intro ${align === "center" ? "is-center" : ""}`} data-reveal>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export function SearchPanel({ villages, linearityOptions, zones, townPlanningOptions }) {
  return (
    <div className="reference-search-card" data-reveal style={{ "--reveal-delay": "90ms" }}>
      <div className="reference-search-grid">
        <label>
          <span>Village</span>
          <select defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {villages.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Linear / Non-Linear</span>
          <select defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {linearityOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Zone</span>
          <select defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {zones.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>TP</span>
          <select defaultValue="">
            <option value="" disabled>
              Select
            </option>
            {townPlanningOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      <Link className="button button-primary reference-search-button" to="/zones">
        Search Now
      </Link>
    </div>
  );
}

export function ServiceCard({ title, description, image, link, delay }) {
  return (
    <article className="reference-service-card" data-reveal style={{ "--reveal-delay": `${delay}ms` }}>
      <div className="reference-card-media">
        <img src={image} alt={title} />
      </div>
      <div className="reference-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="text-link" to={link}>
          View Page
        </Link>
      </div>
    </article>
  );
}

export function ProcessCard({ title, description, image, delay }) {
  return (
    <article className="reference-process-card" data-reveal style={{ "--reveal-delay": `${delay}ms` }}>
      <img src={image} alt={title} />
      <div className="reference-process-card-copy">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}

export function ZoneCard({ title, image, delay, link }) {
  return (
    <Link className="reference-zone-card reference-zone-card-link" to={link} data-reveal style={{ "--reveal-delay": `${delay}ms` }}>
      <img src={image} alt={title} />
      <div className="reference-zone-label">
        <span>{title}</span>
      </div>
    </Link>
  );
}
