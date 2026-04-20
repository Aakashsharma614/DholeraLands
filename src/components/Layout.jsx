import { NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Zones", to: "/zones" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const footerContacts = [
  { icon: "P", content: <a href="tel:+919054108068">+91 9054108068</a> },
  {
    icon: "E",
    content: (
      <>
        <a href="mailto:buydholera@gmail.com">buydholera@gmail.com</a>
        <a href="mailto:info@buydholera.com">info@buydholera.com</a>
      </>
    ),
  },
  {
    icon: "L",
    content: (
      <p>
        606, Earth Arise,
        <br />
        YMCA Club Road, S G Highway,
        <br />
        Ahmedabad 380051
        <br />
        Gujarat India
      </p>
    ),
  },
];

function Brand({ footer = false }) {
  return (
    <NavLink className={`brand ${footer ? "brand-footer" : ""}`} to="/">
      <img className="brand-mark" src="/images/logo.png" alt="Dholera Lands logo" />
      <span>
        <strong>dholeralands</strong>
        <small>{footer ? "Property Advisory & Land Investment" : "Strategic Smart City Realty"}</small>
      </span>
    </NavLink>
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

  const footerNav = useMemo(() => navItems, []);

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
        <div className="footer-panel">
          <div className="container footer-grid">
            <div className="footer-contact-column">
              <Brand footer />
              <div className="footer-contact-list">
                {footerContacts.map((item) => (
                  <div key={item.icon} className="footer-contact-row">
                    <span className="footer-contact-icon" aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className="footer-contact-content">{item.content}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="footer-map-column">
              <div className="footer-map-frame">
                <iframe
                  title="Dholera Lands office map"
                  src="https://www.google.com/maps?q=Earth%20Arise%2C%20YMCA%20Club%20Road%2C%20S%20G%20Highway%2C%20Ahmedabad&z=16&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom-strip">
          <div className="container footer-bottom-content">
            <p>© dholeralands</p>
            <div className="footer-bottom-links">
              {footerNav.map((item) => (
                <NavLink key={item.to} to={item.to}>
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
