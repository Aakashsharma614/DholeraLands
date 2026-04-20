import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Zones", to: "/zones" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

function Brand() {
  return (
    <NavLink className="brand" to="/">
      <span className="brand-mark">DL</span>
      <span>
        <strong>dholeralands</strong>
        <small>Strategic Smart City Realty</small>
      </span>
    </NavLink>
  );
}

function FooterLinkGroup({ title, items }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((item) =>
        item.href.startsWith("/") ? (
          <NavLink key={item.label} to={item.href}>
            {item.label}
          </NavLink>
        ) : (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        )
      )}
    </div>
  );
}

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (elements.length === 0) {
      return undefined;
    }

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  const footerGroups = useMemo(
    () => [
      {
        title: "Pages",
        items: navItems.map((item) => ({ label: item.label, href: item.to })),
      },
      {
        title: "Reach Us",
        items: [
          { label: "+91 98713 66609", href: "tel:+919871366609" },
          { label: "hello@dholeralands.com", href: "mailto:hello@dholeralands.com" },
          { label: "Ahmedabad, Gujarat", href: "#" },
        ],
      },
    ],
    []
  );

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container nav-shell">
          <Brand />
          <button
            className="nav-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={`site-nav ${menuOpen ? "is-open" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => (isActive ? "is-active" : "")}
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink className="button button-primary nav-cta" to="/contact">
              Schedule a Call
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <Brand />
            <p>
              dholeralands presents original, investor-friendly information for buyers exploring plotted
              opportunities around Dholera Smart City.
            </p>
          </div>
          {footerGroups.map((group) => (
            <FooterLinkGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </footer>
    </div>
  );
}
