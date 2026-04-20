/* global React */
function ServicesGrid() {
  const services = window.DATA.services;
  return (
    <section
      id="services"
      className="em-section"
      style={{ padding: "112px 0 72px", background: "var(--sky-50)" }}
    >
      <div className="container">
        <div style={{ maxWidth: 780, marginBottom: 56 }}>
          <span className="eyebrow">Services · three ways to train</span>
          <h2
            style={{
              marginTop: 6,
              textTransform: "uppercase",
              color: "var(--deep-800)",
            }}
          >
            Three ways in.{" "}
            <span style={{ color: "var(--tide-500)" }}>One plan</span> built for
            you.
          </h2>
        </div>
        <div
          className="em-svc-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
          }}
        >
          {services.map((s) => (
            <article
              key={s.title}
              style={{
                background: "var(--bg-raised)",
                borderRadius: "var(--r-lg)",
                boxShadow: "var(--shadow-2)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                transition:
                  "transform .32s var(--ease-out), box-shadow .32s var(--ease-out)",
                border: "1px solid var(--ink-100)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "var(--shadow-3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "var(--shadow-2)";
              }}
            >
              <div
                className="em-svc-photo"
                style={{
                  height: 240,
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <img
                  src={s.photo}
                  alt=""
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <span
                  className={`chip chip-${s.tagKind}`}
                  style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {s.tag}
                </span>
              </div>
              <div
                style={{
                  padding: "28px 28px 32px",
                  display: "flex",
                  flexDirection: "column",
                  flex: 1,
                }}
              >
                <span className="eyebrow">{s.eyebrow}</span>
                <h3
                  style={{
                    marginTop: 6,
                    marginBottom: 14,
                    textTransform: "uppercase",
                    color: "var(--deep-800)",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: 16, color: "var(--ink-500)", flex: 1 }}>
                  {s.body}
                </p>
                <a
                  href="#contact"
                  className="btn btn-primary"
                  style={{
                    alignSelf: "flex-start",
                    marginTop: 20,
                    fontSize: 14,
                    padding: "12px 22px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  Book this
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ServicesGrid = ServicesGrid;
