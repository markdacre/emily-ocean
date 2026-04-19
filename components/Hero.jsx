/* global React */
function Hero() {
  const h = window.DATA.hero;
  return (
    <section
      id="top"
      style={{
        position: "relative",
        paddingTop: 40,
        paddingBottom: 120,
        background: "var(--gradient-tide)",
        overflow: "hidden",
      }}
    >
      {/* decorative wave blobs */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 620,
          height: 620,
          background:
            "radial-gradient(closest-side, rgba(35,150,131,0.22), rgba(35,150,131,0) 70%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-35%",
          left: "-8%",
          width: 520,
          height: 520,
          background:
            "radial-gradient(closest-side, rgba(21,102,153,0.25), rgba(21,102,153,0) 70%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      {/* wave divider at bottom */}
      <svg
        aria-hidden
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          bottom: -1,
          left: 0,
          width: "100%",
          height: 80,
          display: "block",
        }}
      >
        <path
          d="M0,60 C240,110 480,10 720,50 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
          fill="var(--sky-50)"
        />
      </svg>

      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div>
            <span className="eyebrow">{h.eyebrow}</span>
            <h1
              style={{
                marginTop: 12,
                textTransform: "uppercase",
                color: "var(--deep-800)",
              }}
            >
              {h.titleA}
              <br />
              <span style={{ color: "var(--tide-500)" }}>{h.titleB}</span>
              <br />
              <span style={{ color: "var(--foam-500)" }}>{h.titleC}</span>
            </h1>
            <p
              style={{
                marginTop: 28,
                fontSize: 19,
                lineHeight: 1.6,
                color: "var(--ink-500)",
                maxWidth: 560,
              }}
            >
              {h.sub}
            </p>
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 36,
                flexWrap: "wrap",
              }}
            >
              <a className="btn btn-primary" href={h.primaryCta.href}>
                {h.primaryCta.label}
              </a>
              <a className="btn btn-secondary" href={h.secondaryCta.href}>
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
                {h.secondaryCta.label}
              </a>
            </div>
            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 48,
                color: "var(--ink-500)",
                fontSize: 14,
              }}
            >
              {h.stats.map((s, i) => (
                <div key={i}>
                  <strong
                    style={{
                      color: "var(--deep-800)",
                      fontSize: 28,
                      fontFamily: "var(--font-display)",
                      fontWeight: 400,
                      display: "block",
                      lineHeight: 1,
                      letterSpacing: "0.02em",
                    }}
                  >
                    {s.value}
                  </strong>
                  <span style={{ marginTop: 6, display: "inline-block" }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {/* tide marker ring behind photo */}
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-18px -18px 18px -18px",
                border: "1.5px solid var(--tide-300)",
                borderRadius: "var(--r-lg)",
                transform: "rotate(2deg)",
              }}
            />
            <div
              style={{
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-3)",
                transform: "rotate(-1.5deg)",
                position: "relative",
              }}
            >
              <img
                src={h.photo}
                alt="Emily coaching in her studio"
                style={{
                  display: "block",
                  width: "100%",
                  height: 580,
                  objectFit: "cover",
                }}
              />
            </div>
            {/* pull-quote lozenge */}
            <div
              style={{
                position: "absolute",
                bottom: -22,
                left: -24,
                background: "var(--foam-500)",
                padding: "16px 20px",
                borderRadius: "var(--r-md)",
                boxShadow: "var(--shadow-2)",
                color: "#fff",
                maxWidth: 260,
                lineHeight: 1.3,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 19,
                  letterSpacing: "0.01em",
                }}
              >
                "She moves at exactly my pace."
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  marginTop: 6,
                  opacity: 0.9,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                — David, 61
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
