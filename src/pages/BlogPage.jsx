import Meta from "../components/Meta";
import SectionHeader from "../components/SectionHeader";

const posts = [
  {
    category: "Investment Tips",
    title: "What to review before buying plotted land in an emerging market",
    excerpt:
      "Before making a land purchase, investors should evaluate ownership clarity, road access, layout context, and how the property aligns with their holding horizon.",
  },
  {
    category: "Dholera Updates",
    title: "How infrastructure progress can shape investor confidence around Dholera",
    excerpt:
      "Large-scale development stories gain credibility when transport links, utilities, and industrial momentum begin to support the long-term vision.",
  },
  {
    category: "Smart City Insights",
    title: "Why smart city growth is a long-cycle story, not a short-term trade",
    excerpt:
      "Urban transformation takes time. Investors who benefit most are usually the ones who understand pacing, location quality, and realistic value drivers.",
  },
  {
    category: "Investor Education",
    title: "Questions NRIs should ask before exploring land opportunities in Gujarat",
    excerpt:
      "NRIs often need an extra layer of process clarity, from verification support to communication structure and documentation review.",
  },
  {
    category: "Planning Strategy",
    title: "Choosing between budget plots and premium-positioned land parcels",
    excerpt:
      "Price is only one variable. A stronger buying decision usually comes from balancing affordability with utility, access, and long-term relevance.",
  },
  {
    category: "Market Perspective",
    title: "How to build a patient property investment mindset in developing corridors",
    excerpt:
      "Disciplined investors define their time horizon early, avoid exaggerated assumptions, and prioritize opportunities that remain understandable over time.",
  },
];

export default function BlogPage() {
  return (
    <>
      <Meta
        title="Blog | dholeralands"
        description="Read original blog content from dholeralands on real estate investment tips, Dholera Smart City insights, and long-term land buying strategy."
      />

      <section className="page-hero">
        <div className="container narrow" data-reveal>
          <p className="eyebrow">Insights & Articles</p>
          <h1>Original perspectives on land investment, smart city growth, and market timing.</h1>
          <p>
            This blog section is designed as a clean, static resource hub for buyers who want sharper
            thinking around Dholera, plotted land, and real estate planning.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Featured Posts"
            title="Fresh, investor-friendly reading for better property decisions"
            description="Each sample article topic is written to reflect the concerns real buyers have when evaluating long-term land opportunities."
          />
          <div className="blog-grid">
            {posts.map((post) => (
              <article className="blog-card glass-card" key={post.title} data-reveal>
                <p className="eyebrow">{post.category}</p>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <button className="text-link" type="button">
                  Read article
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
