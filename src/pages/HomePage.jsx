import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import SectionHeader from "../components/SectionHeader";

const marketStats = [
  { value: "Long-term", label: "investment horizon" },
  { value: "Documentation-led", label: "screening approach" },
  { value: "Buyer-first", label: "advisory style" },
];

const benefits = [
  {
    title: "Location logic over hype",
    text: "We focus on plotted opportunities backed by corridor access, planning context, and future usability.",
  },
  {
    title: "Documentation-first approach",
    text: "Every conversation begins with clarity around ownership records, layout details, and process transparency.",
  },
  {
    title: "Built for long-term investors",
    text: "Our guidance is designed for buyers who want sensible expectations and patient value creation.",
  },
];

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

const highlights = [
  {
    label: "Plots",
    title: "Curated land options for practical entry",
    text: "Well-positioned plotted inventory for investors seeking flexibility, lower upkeep, and future resale potential.",
  },
  {
    label: "Infrastructure",
    title: "A market story tied to real development",
    text: "Dholera draws attention because infrastructure progress can create stronger location relevance over time.",
  },
  {
    label: "Growth Potential",
    title: "A horizon shaped by industrial expansion",
    text: "As planning, transport links, and business activity advance, land near growth corridors can gain strategic appeal.",
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

export default function HomePage() {
  return (
    <>
      <Meta
        title="dholeralands | Invest in the Future of Smart Cities"
        description="Explore original real estate insights, plotted opportunities, and investor guidance around Dholera Smart City with dholeralands."
      />

      <section className="hero">
        <div className="container hero-layout">
          <div className="hero-copy" data-reveal>
            <div className="hero-kicker">
              <p className="eyebrow">Strategic Land Advisory</p>
              <span className="hero-chip">Dholera Smart City Focus</span>
            </div>
            <h1>Professional land investment guidance for buyers looking at Dholera seriously.</h1>
            <p className="hero-text">
              dholeralands helps investors evaluate plotted opportunities around Dholera through clear
              market framing, disciplined shortlisting, and practical decision support designed to reduce
              noise and improve confidence.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/contact">
                Book a Strategic Call
              </Link>
              <a className="button button-secondary" href="#why-dholera">
                View Investment Lens
              </a>
            </div>
            <div className="hero-summary">
              <p>
                For buyers comparing Dholera opportunities, the real edge is not speed. It is clarity on
                location logic, paperwork quality, and long-horizon suitability before capital is committed.
              </p>
            </div>
            <div className="hero-inline-stats">
              {marketStats.map((stat) => (
                <div key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="hero-panel glass-card">
              <p className="eyebrow">Executive Snapshot</p>
              <h2>Structured guidance for a market where discipline matters more than excitement.</h2>
              <p>
                Dholera continues to draw investor attention because it connects planning ambition,
                industrial relevance, and infrastructure-led development. The better question is which
                opportunities still make sense after documentation, fit, and timing are tested properly.
              </p>
              <div className="hero-metrics">
                <article>
                  <span>Primary focus</span>
                  <strong>Plotted opportunities with decision clarity</strong>
                </article>
                <article>
                  <span>Advisory method</span>
                  <strong>Context first, recommendation second</strong>
                </article>
                <article>
                  <span>Buyer outcome</span>
                  <strong>Confident action with realistic expectations</strong>
                </article>
              </div>
            </div>
            <div className="hero-aside">
              <article className="hero-note glass-card">
                <span className="hero-note-label">What serious buyers ask first</span>
                <strong>Is the story credible for this exact location?</strong>
                <p>That is where our evaluation process starts.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="why-dholera">
        <div className="container split-feature">
          <div className="split-content" data-reveal>
            <p className="eyebrow">Why Dholera Smart City</p>
            <h2>A planned district where infrastructure and patience matter more than speculation.</h2>
            <p>
              Dholera is often discussed as a major long-horizon development story. For investors, the
              important question is not whether the region gets attention, but whether a specific property
              aligns with planning signals, access, paperwork quality, and realistic timeframes.
            </p>
          </div>
          <div className="benefit-stack">
            {benefits.map((benefit) => (
              <article className="glass-card" key={benefit.title} data-reveal>
                <h3>{benefit.title}</h3>
                <p>{benefit.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Investment Criteria"
            title="How we frame opportunity before recommending any plot"
            description="A more professional buying process starts with a repeatable lens. We focus on the factors that matter when capital is expected to stay patient and deliberate."
            align="center"
          />
          <div className="highlight-grid signal-grid">
            {investmentSignals.map((item) => (
              <article className="feature-card signal-card" key={item.title} data-reveal>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Highlights"
            title="Built around plots, infrastructure signals, and patient capital"
            description="The strongest opportunities usually sit at the intersection of planning relevance, legal clarity, and an investor's willingness to hold with discipline."
            align="center"
          />
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="feature-card" key={item.title} data-reveal>
                <span className="feature-label">{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container process-layout">
          <SectionHeader
            eyebrow="Advisory Process"
            title="A cleaner path from initial inquiry to informed action"
            description="Investors usually need less noise and more structure. Our process is designed to keep each step understandable, traceable, and practical."
          />
          <div className="timeline">
            {[
              [
                "01",
                "Understand your goals",
                "We start with budget, purpose, time horizon, and preferred level of risk before discussing any option.",
              ],
              [
                "02",
                "Shortlist credible options",
                "Properties are filtered through location logic, plot utility, and document readiness instead of sales urgency.",
              ],
              [
                "03",
                "Support your next step",
                "From due-diligence questions to coordination, we help keep the buying journey transparent and organized.",
              ],
            ].map(([number, title, text]) => (
              <article className="timeline-item" key={number} data-reveal>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container trust-layout">
          <div data-reveal>
            <p className="eyebrow">Trust Indicators</p>
            <h2>Professional confidence grows when the advisory process stays transparent.</h2>
            <p className="section-copy">
              Buyers choose dholeralands when they want a practical conversation about value, growth
              drivers, risk awareness, and the documents behind the deal.
            </p>
            <ul className="trust-list">
              {trustSignals.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article className="glass-card" key={item.author} data-reveal>
                <p>"{item.quote}"</p>
                <strong>{item.author}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner" data-reveal>
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
