/* global React */
function About() {
  const a = window.DATA.about;
  return (
    <section
      id="about"
      className="em-section"
      style={{ padding: "112px 0", background: "var(--sky-50)" }}
    >
      <div className="container">
        <div
          className="em-about-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "0.9fr 1.1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          <div className="em-about-photo" style={{ position: "relative" }}>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: "-22px -22px 22px 22px",
                background: "var(--foam-100)",
                borderRadius: "var(--r-lg)",
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: "var(--r-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-3)",
              }}
            >
              <img
                src={a.photo}
                alt="Emily Gregg"
                style={{
                  display: "block",
                  width: "100%",
                  height: 580,
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
          <div>
            <span className="eyebrow">About · the person behind the plan</span>
            <h2
              style={{
                marginTop: 6,
                textTransform: "uppercase",
                color: "var(--deep-800)",
              }}
            >
              Hi, I'm <span style={{ color: "var(--tide-500)" }}>Emily.</span>
            </h2>
            <p
              style={{
                marginTop: 22,
                fontSize: 19,
                lineHeight: 1.65,
                color: "var(--ink-500)",
                maxWidth: 580,
              }}
            >
              {a.bio}
            </p>
            <div style={{ marginTop: 32 }}>
              <div
                style={{
                  fontSize: 13,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "var(--tide-500)",
                  fontWeight: 700,
                  marginBottom: 18,
                }}
              >
                Certifications
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                }}
              >
                {a.credentials.map((group) => (
                  <div key={group.issuer}>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 12,
                        fontWeight: 700,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-400)",
                        marginBottom: 8,
                      }}
                    >
                      {group.issuer}
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                      {group.items.map((c) => (
                        <span key={c} className="chip chip-tide">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.About = About;
