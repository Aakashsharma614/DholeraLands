import { Link } from "react-router-dom";
import Meta from "../components/Meta";

const marketStats = [
  { value: "Long-term", label: "investment horizon" },
  { value: "Documentation-led", label: "screening approach" },
  { value: "Buyer-first", label: "advisory style" },
];

const marketImages = {
  aerialPlots:
    "https://images.unsplash.com/photo-1720175369915-d941b2394228?auto=format&fit=crop&w=1400&q=80",
  residentialGrid:
    "https://images.unsplash.com/photo-1647313063997-f6afa7e30157?auto=format&fit=crop&w=1200&q=80",
  industrialCorridor:
    "https://images.unsplash.com/photo-1758304481620-464b33d5e4dd?auto=format&fit=crop&w=1600&q=80",
};

const investmentSignals = [
  {
    title: "Corridor Positioning",
    text: "We assess whether a plot sits within a believable growth narrative shaped by access, infrastructure sequencing, and surrounding activity.",
  },
  {
    title: "Asset Fit",
    text: "Every recommendation should match the buyer's budget, intended holding period, risk comfort, and future flexibility.",
  },
  {
    title: "Execution Readiness",
    text: "The right opportunity is not just well marketed. It should also be understandable, documentable, and practical to evaluate.",
  },
];

const trustSignals = [
  "Transparent discussions before site visits",
  "Support for NRIs and first-time land buyers",
  "Structured guidance from shortlist to closure",
  "Clear communication focused on long-term value",
];

const testimonials = [
  {
    quote:
      "The process felt calm and informed. I was given context, not pressure, which made the final decision much easier.",
    author: "Business Owner, Mumbai",
  },
  {
    quote:
      "As an NRI, I needed clarity more than promises. dholeralands explained the area, the timing, and the paperwork clearly.",
    author: "NRI Investor, Dubai",
  },
  {
    quote:
      "The shortlist was practical and aligned to my budget. That saved time and removed a lot of confusion.",
    author: "First-Time Buyer, Ahmedabad",
  },
];

function revealDelay(index, offset = 0) {
  return { "--reveal-delay": `${offset + index * 90}ms` };
}

export default function HomePage() {
  return (
    <>
      <Meta
        title="dholeralands | Invest in the Future of Smart Cities"
        description="Explore original real estate insights, plotted opportunities, and investor guidance around Dholera Smart City with dholeralands."
      />

      <section className="home-hero">
        <img
          className="home-hero-image"
          src={marketImages.industrialCorridor}
          alt="Aerial view of industrial buildings and logistics-focused development near Dholera"
        />
        <div className="home-hero-overlay" />
        <div className="container home-hero-content">
          <div className="home-hero-copy" data-reveal="left">
            <div className="home-hero-topline">
              <span className="home-badge">Dholera Smart City Focus</span>
              <span className="home-badge home-badge-muted">Investor-first land advisory</span>
            </div>
            <p className="eyebrow">Professional Land Guidance</p>
            <h1>Find the Dholera opportunity that actually fits your long-term strategy.</h1>
            <p className="home-hero-text">
              dholeralands helps buyers evaluate plotted opportunities through clearer market framing,
              documentation-led screening, and practical support that reduces noise before capital is
              committed.
            </p>
            <div className="home-hero-actions">
              <Link className="button button-primary" to="/contact">
                Get Strategic Guidance
              </Link>
              <a className="button button-secondary" href="#investment-lens">
                Explore The Market Lens
              </a>
            </div>
            <div className="hero-search-panel" data-reveal style={revealDelay(1, 120)}>
              <div>
                <span>Focus Area</span>
                <strong>Dholera plotted land</strong>
              </div>
              <div>
                <span>Buyer Type</span>
                <strong>NRI, family, and long-term investors</strong>
              </div>
              <Link className="button button-primary" to="/contact">
                Book A Call
              </Link>
            </div>
          </div>

          <div className="home-hero-aside" data-reveal="right" style={revealDelay(2, 120)}>
            <article className="hero-floating-card hero-market-card">
              <span className="hero-card-label">Executive Snapshot</span>
              <strong>Clarity beats urgency in emerging land markets.</strong>
              <p>
                The better Dholera decision comes from testing location logic, documents, and time horizon
                before reacting to marketing hype.
              </p>
            </article>
            <article className="hero-floating-card hero-contact-card">
              <span className="hero-card-label">Speak With dholeralands</span>
              <strong>+91 98713 66609</strong>
              <p>Guidance for serious buyers evaluating plotted opportunities near growth corridors.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section home-showcase-section" id="investment-lens">
        <div className="container home-showcase-layout">
          <div className="home-showcase-copy" data-reveal="left">
            <div className="home-showcase-intro">
              <p className="eyebrow">Why Dholera Smart City</p>
              <h2>Clearer market context for serious Dholera land buyers.</h2>
              <p className="section-copy">
                Dholera is a long-term infrastructure and planning story, but buyers still need practical
                clarity on location relevance, document quality, road access, and holding logic before
                selecting any plot.
              </p>
            </div>
            <div className="home-showcase-stats" data-reveal style={revealDelay(1, 40)}>
              {marketStats.map((item) => (
                <article key={item.label} className="home-showcase-stat">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
            <div className="home-check-list">
              {trustSignals.map((item, index) => (
                <div key={item} className="home-check-item" data-reveal style={revealDelay(index, 80)}>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="home-showcase-visual" data-reveal="right">
            <article className="home-feature-photo home-float-card">
              <img src={marketImages.aerialPlots} alt="Aerial view of divided land parcels and access roads" />
              <div className="home-feature-caption">
                <span className="hero-card-label">Site Visit Perspective</span>
                <strong>Buyers should be able to read layout, access, and surrounding development quickly.</strong>
              </div>
            </article>
            <div className="home-mini-grid">
              <article className="home-mini-card home-float-card home-float-card-delayed">
                <img src={marketImages.residentialGrid} alt="Aerial view of a residential-style development layout" />
                <div>
                  <span className="hero-card-label">Planning Context</span>
                  <p>Visible road structure and nearby activity help buyers understand whether the location story is credible.</p>
                </div>
              </article>
              <article className="home-mini-card home-mini-card-text home-float-card">
                <img
                  src={marketImages.industrialCorridor}
                  alt="Development corridor view representing confident long-term property positioning"
                />
                <span className="hero-card-label">Buyer Outcome</span>
                <strong>More grounded decisions with fewer surprises later.</strong>
                <p>
                  We aim to replace pressure-based selling with a cleaner advisory process and realistic
                  market framing.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading align-center" data-reveal>
            <p className="eyebrow">Investment Criteria</p>
            <h2>How we frame opportunity before recommending any plot.</h2>
            <p>
              A more professional buying process starts with a repeatable lens. We focus on the factors
              that matter when capital is expected to stay patient and deliberate.
            </p>
          </div>
          <div className="home-criteria-grid">
            {investmentSignals.map((item, index) => (
              <article key={item.title} className="home-criteria-card" data-reveal style={revealDelay(index)}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading align-center" data-reveal>
            <p className="eyebrow">Client Confidence</p>
            <h2>Professional confidence grows when the advisory process stays transparent.</h2>
            <p>
              Buyers choose dholeralands when they want a practical conversation about value, growth
              drivers, risk awareness, and the documents behind the deal.
            </p>
          </div>
          <div className="home-testimonial-grid">
            {testimonials.map((item, index) => (
              <article key={item.author} className="home-testimonial-card" data-reveal style={revealDelay(index)}>
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="home-cta-banner" data-reveal>
            <div>
              <p className="eyebrow">Ready To Evaluate</p>
              <h2>Discuss your investment plan before you commit to a Dholera opportunity.</h2>
              <p>
                Let's talk through your budget, investment horizon, and the type of plotted opportunity
                that fits your plan.
              </p>
            </div>
            <Link className="button button-primary" to="/contact">
              Speak With dholeralands
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
