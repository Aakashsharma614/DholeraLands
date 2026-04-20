import { Link } from "react-router-dom";
import Meta from "../components/Meta";
import {
  HomeSectionIntro,
  ProcessCard,
  SearchPanel,
  ServiceCard,
  ZoneCard,
} from "../components/home/HomeSections";
import { zoneDirectory } from "../data/zones";

const heroImage =
  "/images/home-poster.jpeg";

const serviceCards = [
  {
    title: "Property Valuation",
    description: "Know the right value of your property before you buy or sell in Dholera.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    link: "/contact",
  },
  {
    title: "Legal Title Check",
    description: "Get property checked for clean title and no legal claim or bank attachment.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
    link: "/contact",
  },
  {
    title: "Know Zones",
    description: "Understand usage, FSI or FAR, and permissions before shortlisting a plot.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    link: "/zones",
  },
];

const processCards = [
  {
    title: "Evaluate",
    description:
      "Review fair market value, access, surrounding development, and the overall fit before progressing to the next step.",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Meet Your Agent",
    description:
      "Work with one clear point of contact who helps you compare options, collect documents, and understand each location properly.",
    image:
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Close The Deal",
    description:
      "Move from shortlist to closure with support on documentation, agreements, and the final buyer-seller handoff.",
    image:
      "https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=1200&q=80",
  },
];

const zoneCards = zoneDirectory;

const villages = ["Bhangadh", "Bhimtalav", "Dholera", "Hebatpur"];
const linearityOptions = ["Linear", "Non-Linear"];
const zones = ["Residential", "Industrial", "City Center", "Tourism"];
const townPlanningOptions = ["TP-1", "TP-2", "TP-3", "TP-4"];

export default function HomePage() {
  return (
    <>
      <Meta
        title="dholeralands | Buy Dholera Style Investment Homepage"
        description="Explore a Dholera investment homepage inspired by buydholera.com with zone discovery, valuation guidance, and legal support."
      />

      <section className="reference-hero">
        <div className="reference-hero-media">
          <img src={heroImage} alt="Residential development poster used as the homepage background" />
        </div>
        <div className="reference-hero-overlay" />
        <div className="container reference-hero-content">
          <div className="reference-hero-copy" data-reveal="left">
            <p className="eyebrow">Dholera Land Marketplace</p>
            <h1>Looking For Investment In Dholera ?</h1>
            <p>
              Discover property services, compare zones, and move from search to closure with a
              cleaner buyer journey modeled on the reference website.
            </p>
          </div>
          <SearchPanel
            villages={villages}
            linearityOptions={linearityOptions}
            zones={zones}
            townPlanningOptions={townPlanningOptions}
          />
        </div>
      </section>

      <section className="section reference-services">
        <div className="container">
          <div className="reference-service-grid">
            {serviceCards.map((card, index) => (
              <ServiceCard key={card.title} {...card} delay={index * 90} />
            ))}
          </div>
        </div>
      </section>

      <section className="section reference-process-section">
        <div className="container">
          <div className="reference-process-header">
            <HomeSectionIntro
              eyebrow="How It Works"
              title="A familiar Dholera buying flow with clearer structure and tighter spacing."
              description="The reference homepage guides users from first evaluation through agent support and final closure. This version keeps that same UX sequence but turns it into reusable React sections."
            />
          </div>
          <div className="reference-process-grid">
            {processCards.map((card, index) => (
              <ProcessCard key={card.title} {...card} delay={index * 90} />
            ))}
          </div>
          <div className="reference-process-action" data-reveal>
            <Link className="button button-primary" to="/contact">
              Get Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="reference-legal-banner" data-reveal>
            <div className="reference-legal-copy">
              <p className="eyebrow">Right Legal Advice</p>
              <h2>Right legal advice today will save your big cost tomorrow.</h2>
              <p>
                Keep the same mid-page CTA pattern from the reference homepage and direct users into
                documentation or legal support without adding friction.
              </p>
            </div>
            <div className="reference-legal-actions">
              <Link className="button button-primary" to="/contact">
                Property Lawyer
              </Link>
              <Link className="button button-secondary" to="/contact">
                Get Property Document
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section reference-zone-section">
        <div className="container">
          <HomeSectionIntro
            eyebrow="Know Your Zone"
            title="Zone discovery cards arranged like the source homepage."
            description="The reference site ends with a dense visual zone grid. This rebuild keeps that browsing pattern while using reusable card components and consistent alignment."
            align="center"
          />
          <div className="reference-zone-grid">
            {zoneCards.map((card, index) => (
              <ZoneCard key={card.slug} {...card} link={`/zones/${card.slug}`} delay={index * 55} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
