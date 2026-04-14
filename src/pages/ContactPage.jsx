import { useState } from "react";
import Meta from "../components/Meta";

const initialState = {
  name: "",
  email: "",
  message: "",
};

export default function ContactPage() {
  const [formState, setFormState] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    setFormState(initialState);
  }

  return (
    <>
      <Meta
        title="Contact | dholeralands"
        description="Contact dholeralands for plotted investment guidance around Dholera Smart City. Reach us by phone, email, or the contact form."
      />

      <section className="page-hero">
        <div className="container narrow" data-reveal>
          <p className="eyebrow">Contact dholeralands</p>
          <h1>Start with a conversation built around your goals, not a sales script.</h1>
          <p>
            Share your investment range, timeframe, or questions about Dholera Smart City. We will help
            you move forward with greater clarity.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <article className="glass-card" data-reveal>
            <h2>Send Us a Message</h2>
            <p className="section-copy">
              Fill out the form and our team will get back to you for a focused discussion.
            </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <label htmlFor="name">
                Name
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                />
              </label>
              <label htmlFor="email">
                Email
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </label>
              <label htmlFor="message">
                Message
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Tell us what kind of investment opportunity you are exploring"
                  required
                />
              </label>
              <button className="button button-primary" type="submit">
                Submit Inquiry
              </button>
              {submitted ? <p className="success-note">Thank you. Your inquiry has been recorded.</p> : null}
            </form>
          </article>

          <div className="contact-stack">
            <article className="glass-card" data-reveal>
              <h2>Contact Information</h2>
              <div className="info-list">
                <div>
                  <span>Phone</span>
                  <a href="tel:+918980044556">+91 89800 44556</a>
                </div>
                <div>
                  <span>Email</span>
                  <a href="mailto:hello@dholeralands.com">hello@dholeralands.com</a>
                </div>
                <div>
                  <span>Office</span>
                  <p>Business Hub, SG Highway, Ahmedabad, Gujarat</p>
                </div>
              </div>
            </article>
            <article className="glass-card" data-reveal>
              <h2>Location</h2>
              <div className="map-frame">
                <iframe
                  title="Ahmedabad map"
                  src="https://www.google.com/maps?q=Ahmedabad%2C%20Gujarat&z=11&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
