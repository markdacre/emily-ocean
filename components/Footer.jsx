/* global React */
function Footer() {
  const c = window.DATA.contact;
  return (
    <footer
      style={{
        background: "var(--deep-900)",
        color: "var(--sky-100)",
        padding: "72px 0 32px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        aria-hidden
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          top: -1,
          left: 0,
          width: "100%",
          height: 60,
          transform: "rotate(180deg)",
        }}
      >
        <path
          d="M0,40 C240,80 480,0 720,30 C960,60 1200,10 1440,40 L1440,80 L0,80 Z"
          fill="var(--sky-50)"
        />
      </svg>
      <div className="container" style={{ position: "relative" }}>
        <div
          className="em-footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr",
            gap: 56,
            marginBottom: 56,
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 4,
              }}
            >
              <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
                <circle cx="16" cy="16" r="15" fill="#239683" />
                <path
                  d="M4 19 Q 10 15, 16 19 T 28 19"
                  stroke="#F4FAFC"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M4 23 Q 10 19, 16 23 T 28 23"
                  stroke="#F4FAFC"
                  strokeWidth="1.6"
                  fill="none"
                  strokeLinecap="round"
                  opacity="0.55"
                />
              </svg>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 24,
                  textTransform: "uppercase",
                  letterSpacing: "0.02em",
                  color: "#fff",
                  whiteSpace: "nowrap",
                }}
              >
                Emily <span style={{ color: "var(--foam-300)" }}>Gregg</span>
              </div>
            </div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--foam-300)",
                marginTop: 8,
                fontWeight: 700,
              }}
            >
              Fitness + recovery
            </div>
            <p
              style={{
                marginTop: 22,
                color: "var(--sky-200)",
                fontSize: 15,
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              Training for older adults, injury recovery, and anyone living with
              chronic pain. In-person in the studio and online worldwide.
            </p>
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--foam-300)",
                marginBottom: 16,
                fontWeight: 700,
              }}
            >
              Explore
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              {window.DATA.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="em-footer-link"
                    style={{
                      color: "var(--sky-100)",
                      textDecoration: "none",
                      fontSize: 15,
                    }}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div
              style={{
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--foam-300)",
                marginBottom: 16,
                fontWeight: 700,
              }}
            >
              Reach out
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 10,
                fontSize: 15,
              }}
            >
              <li>
                <a
                  href={c.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="em-footer-link"
                  style={{ color: "var(--sky-100)", textDecoration: "none" }}
                >
                  WhatsApp · {c.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${c.email}`}
                  className="em-footer-link"
                  style={{ color: "var(--sky-100)", textDecoration: "none" }}
                >
                  {c.email}
                </a>
              </li>
              <li>
                <a
                  href={c.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="em-footer-link"
                  style={{ color: "var(--sky-100)", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={c.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="em-footer-link"
                  style={{ color: "var(--sky-100)", textDecoration: "none" }}
                >
                  Book via Calendly
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="em-footer-bottom"
          style={{
            borderTop: "1px solid rgba(244,250,252,0.12)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 13,
            color: "var(--sky-200)",
          }}
        >
          <div>© {new Date().getFullYear()} Emily Gregg Fitness</div>
          <div
            style={{
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
              color: "var(--foam-300)",
            }}
          >
            Go with the tide
          </div>
        </div>
      </div>
    </footer>
  );
}
window.Footer = Footer;
