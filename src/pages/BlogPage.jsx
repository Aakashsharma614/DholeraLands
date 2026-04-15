import Meta from "../components/Meta";

const posts = [
  {
    category: "Investment Tips",
    title: "What to review before buying plotted land in an emerging market",
    excerpt:
      "Before making a land purchase, investors should evaluate ownership clarity, road access, layout context, and how the property aligns with their holding horizon.",
    image:
      "https://images.unsplash.com/photo-1720175369915-d941b2394228?auto=format&fit=crop&w=1400&q=80",
    alt: "Aerial view of plotted land divisions and connecting roadways",
    readTime: "5 min read",
  },
  {
    category: "Dholera Updates",
    title: "How infrastructure progress can shape investor confidence around Dholera",
    excerpt:
      "Large-scale development stories gain credibility when transport links, utilities, and industrial momentum begin to support the long-term vision.",
    image:
      "https://images.unsplash.com/photo-1758304481620-464b33d5e4dd?auto=format&fit=crop&w=1400&q=80",
    alt: "Aerial view of industrial buildings and development corridors",
    readTime: "4 min read",
  },
  {
    category: "Smart City Insights",
    title: "Why smart city growth is a long-cycle story, not a short-term trade",
    excerpt:
      "Urban transformation takes time. Investors who benefit most are usually the ones who understand pacing, location quality, and realistic value drivers.",
    image:
      "https://images.unsplash.com/photo-1647313063997-f6afa7e30157?auto=format&fit=crop&w=1200&q=80",
    alt: "Aerial view of a planned urban development layout",
    readTime: "6 min read",
  },
  {
    category: "Investor Education",
    title: "Questions NRIs should ask before exploring land opportunities in Gujarat",
    excerpt:
      "NRIs often need an extra layer of process clarity, from verification support to communication structure and documentation review.",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern house exterior at sunset representing premium real estate",
    readTime: "5 min read",
  },
  {
    category: "Planning Strategy",
    title: "Choosing between budget plots and premium-positioned land parcels",
    excerpt:
      "Price is only one variable. A stronger buying decision usually comes from balancing affordability with utility, access, and long-term relevance.",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural exterior of a contemporary property",
    readTime: "4 min read",
  },
  {
    category: "Market Perspective",
    title: "How to build a patient property investment mindset in developing corridors",
    excerpt:
      "Disciplined investors define their time horizon early, avoid exaggerated assumptions, and prioritize opportunities that remain understandable over time.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean interior and window view reflecting aspirational property presentation",
    readTime: "5 min read",
  },
];

function revealDelay(index, offset = 0) {
  return { "--reveal-delay": `${offset + index * 90}ms` };
}

export default function BlogPage() {
  const [featuredPost, ...articlePosts] = posts;

  return (
    <>
      <Meta
        title="Blog | dholeralands"
        description="Read original blog content from dholeralands on real estate investment tips, Dholera Smart City insights, and long-term land buying strategy."
      />

      <section className="page-hero blog-hero">
        <div className="container blog-hero-layout">
          <div className="blog-hero-copy" data-reveal="left">
            <p className="eyebrow">Insights & Articles</p>
            <h1>Real-estate style editorial content for buyers who want sharper Dholera decisions.</h1>
            <p>
              This blog is positioned as a premium resource hub for investors exploring plotted land,
              development corridors, smart city context, and disciplined long-term strategy.
            </p>
            <div className="blog-hero-pills">
              {["Investor education", "Dholera market context", "Property decision clarity"].map((item, index) => (
                <span key={item} data-reveal style={revealDelay(index, 120)}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <article className="blog-featured-card" data-reveal="right" style={revealDelay(1, 120)}>
            <img src={featuredPost.image} alt={featuredPost.alt} />
            <div className="blog-featured-overlay">
              <div className="blog-meta-row">
                <span className="eyebrow">{featuredPost.category}</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <h2>{featuredPost.title}</h2>
              <p>{featuredPost.excerpt}</p>
              <button className="text-link" type="button">
                Read featured article
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="blog-section-heading" data-reveal>
            <p className="eyebrow">Latest Reading</p>
            <h2>Professional article cards designed to feel closer to a real estate editorial site.</h2>
            <p>
              Each article topic is framed around the questions serious buyers tend to ask before making a
              property decision.
            </p>
          </div>

          <div className="blog-grid blog-grid-enhanced">
            {articlePosts.map((post, index) => (
              <article className="blog-card blog-card-enhanced" key={post.title} data-reveal style={revealDelay(index)}>
                <div className="blog-card-media">
                  <img src={post.image} alt={post.alt} loading="lazy" />
                </div>
                <div className="blog-card-body">
                  <div className="blog-meta-row">
                    <p className="eyebrow">{post.category}</p>
                    <span>{post.readTime}</span>
                  </div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <button className="text-link" type="button">
                    Read article
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
