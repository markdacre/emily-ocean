/* global React */
function Contact() {
  const c = window.DATA.contact;
  return (
    <section
      id="contact"
      className="em-section"
      style={{ padding: "112px 0", background: "var(--sky-50)" }}
    >
      <div className="container">
        <div
          className="em-contact-grid"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72 }}
        >
          <div>
            <span className="eyebrow">Contact · let's talk</span>
            <h2
              style={{
                marginTop: 6,
                textTransform: "uppercase",
                color: "var(--deep-800)",
              }}
            >
              The first step is{" "}
              <span style={{ color: "var(--tide-500)" }}>a conversation.</span>
            </h2>
            <p
              style={{
                marginTop: 22,
                fontSize: 18,
                color: "var(--ink-500)",
                maxWidth: 500,
              }}
            >
              Book a free 20-minute call and tell me what's going on. I'll ask a
              lot of questions and tell you honestly whether I'm the right
              person to help.
            </p>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                marginTop: 36,
                maxWidth: 420,
              }}
            >
              <a
                href={c.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ justifyContent: "flex-start" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="18" height="16" rx="2.5" />
                  <path d="M3 9h18M8 3v4M16 3v4" />
                </svg>
                Book a 20-min call · Calendly
              </a>
              <a
                href={c.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-foam"
                style={{ justifyContent: "flex-start" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22a10 10 0 1 0-8.7-5.1L2 22l5.2-1.4A10 10 0 0 0 12 22Z" />
                  <path d="M9 9c.3-.5.7-.5 1-.5s.5.1.8.6l.9 1.9c.1.3.1.4 0 .7l-.4.5a.4.4 0 0 0-.1.5 6 6 0 0 0 2.9 2.9.4.4 0 0 0 .5-.1l.5-.4c.3-.1.4-.1.7 0l1.9.9c.5.3.5.5.5.8 0 .3-.1.7-.5 1-.4.4-1.2.7-2.3.7-2.5 0-5-1.5-6.2-2.7s-2.7-3.7-2.7-6.2c0-1.1.3-1.9.7-2.3Z" />
                </svg>
                Message me on WhatsApp
              </a>
              <a
                href={c.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ justifyContent: "flex-start" }}
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
          <form
            className="em-contact-form"
            style={{
              background: "var(--bg-raised)",
              borderRadius: "var(--r-lg)",
              padding: "36px 40px",
              boxShadow: "var(--shadow-2)",
              border: "1px solid var(--ink-100)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! I'll get back to you within a day.");
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 26,
                color: "var(--deep-800)",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
              }}
            >
              Or send a note
            </div>
            <div className="field">
              <label>Your name</label>
              <input required placeholder="First name" />
            </div>
            <div className="field">
              <label>Email</label>
              <input required type="email" placeholder="you@example.com" />
            </div>
            <div className="field">
              <label>What are you working on?</label>
              <textarea
                rows="4"
                placeholder="A bit about your goals, history, and what hurts."
              ></textarea>
            </div>
            <button
              className="btn btn-primary"
              type="submit"
              style={{ justifyContent: "center", marginTop: 4 }}
            >
              Send
            </button>
            <div
              style={{
                fontSize: 13,
                color: "var(--ink-400)",
                textAlign: "center",
              }}
            >
              I reply within a day — usually the same morning.
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
