import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import SectionHeader from "../components/SectionHeader";

const pillars = [
  {
    title: "Vision",
    text: "To help investors participate in Dholera’s long-term urban transformation through informed, transparent property decisions.",
  },
  {
    title: "Mission",
    text: "To make plotted land buying easier to understand by combining market insight, practical screening, and clear communication.",
  },
  {
    title: "Approach",
    text: "We prefer honest framing over exaggerated promises, with guidance centered on fit, timing, and long-term value.",
  },
];

const reasons = [
  "Original advisory content written for clarity and trust",
  "Support for first-time buyers, families, and NRI investors",
  "Focus on plotted opportunities near growth corridors",
  "Professional communication before and after purchase decisions",
];

function revealDelay(index, offset = 0) {
  return { "--reveal-delay": `${offset + index * 90}ms` };
}

export default function AboutPage() {
  return (
    <>
      <Meta
        title="About | dholeralands"
        description="Learn about dholeralands, our vision, mission, and the trust-first approach behind our Dholera Smart City real estate guidance."
      />

      <section className="page-hero page-hero-about">
        <div className="container about-hero-layout">
          <div data-reveal="left">
            <p className="eyebrow">About dholeralands</p>
            <h1>Professional guidance for investors who want clarity before commitment.</h1>
            <p>
              dholeralands is built around one simple idea: land investment decisions should feel informed,
              steady, and transparent. We help clients evaluate opportunities around Dholera Smart City with
              more structure and less confusion.
            </p>
            <div className="about-hero-points">
              {[
                "Trust-first advisory conversations",
                "Clearer market framing for serious investors",
                "Guidance built for patient decision-making",
              ].map((point, index) => (
                <div key={point} className="about-hero-chip" data-reveal style={revealDelay(index, 120)}>
                  {point}
                </div>
              ))}
            </div>
          </div>
          <aside className="about-hero-panel glass-card" data-reveal="right" style={revealDelay(1, 80)}>
            <p className="eyebrow">Our Focus</p>
            <h2>Clarity before commitment.</h2>
            <p>
              We prefer measured recommendations over pressure, and practical screening over exaggerated
              sales narratives.
            </p>
            <div className="about-hero-stats">
              {[
                ["Buyer Lens", "Fit, timing, and documentation"],
                ["Style", "Simple, direct, and transparent"],
                ["Priority", "Long-term value over short-term hype"],
              ].map(([title, text], index) => (
                <article key={title} data-reveal style={revealDelay(index, 220)}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Who We Are"
            title="A real estate advisory brand focused on trust, simplicity, and long-horizon value"
            description="Our role is to guide buyers through the early and middle stages of the decision process, from understanding market context to reviewing practical fit."
          />
          <div className="info-grid">
            {pillars.map((item, index) => (
              <article
                className="glass-card about-pillar-card"
                key={item.title}
                data-reveal
                style={revealDelay(index)}
              >
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container about-layout">
          <div data-reveal>
            <p className="eyebrow">Why Choose Us</p>
            <h2>We keep the focus on suitability, documents, and realistic expectations.</h2>
            <p className="section-copy">
              Investors often encounter too much noise in emerging land markets. We bring the process back to
              what matters: credibility, communication, planning context, and patient decision-making.
            </p>
          </div>
          <div className="reason-list">
            {reasons.map((reason, index) => (
              <article
                className="reason-card about-reason-card"
                key={reason}
                data-reveal="right"
                style={revealDelay(index, 60)}
              >
                <span />
                <p>{reason}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container metric-row">
          {[
            ["Investor Focus", "Clear, practical guidance for serious buyers"],
            ["Transparency", "Open communication from inquiry to next steps"],
            ["Long-Term Value", "A disciplined view shaped by development potential"],
          ].map(([title, text], index) => (
            <article
              className="metric-card about-metric-card"
              key={title}
              data-reveal
              style={revealDelay(index)}
            >
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner" data-reveal>
            <div>
              <p className="eyebrow">Let’s Connect</p>
              <h2>Want to discuss how Dholera fits your investment strategy?</h2>
              <p>
                We can help you compare options, understand the market narrative, and decide whether the
                timing and format are right for you.
              </p>
            </div>
            <Link className="button button-primary" to="/contact">
              Speak With Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
