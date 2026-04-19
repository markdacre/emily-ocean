/* global React */
const { useState: useTState2 } = React;

function Testimonials() {
  const items = window.DATA.testimonials;
  const [i, setI] = useTState2(0);
  const t = items[i];
  return (
    <section
      id="testimonials"
      style={{
        padding: "120px 0",
        background: "var(--gradient-deep)",
        color: "var(--sky-50)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle wave lines */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          opacity: 0.12,
        }}
      >
        <defs>
          <pattern
            id="wavepat"
            x="0"
            y="0"
            width="160"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 30 Q 40 10, 80 30 T 160 30"
              fill="none"
              stroke="#fff"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#wavepat)" />
      </svg>
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -120,
          right: -80,
          width: 480,
          height: 480,
          background:
            "radial-gradient(closest-side, rgba(35,150,131,0.45), transparent 70%)",
        }}
      />
      <div className="container" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.45fr 1fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div>
            <span
              style={{
                color: "var(--foam-300)",
                fontSize: 13,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Stories · from the studio
            </span>
            <h2
              style={{
                marginTop: 10,
                color: "#fff",
                textTransform: "uppercase",
              }}
            >
              Change comes{" "}
              <span style={{ color: "var(--foam-300)" }}>quietly.</span>
            </h2>
          </div>
          <div
            style={{
              background: "var(--sky-50)",
              color: "var(--deep-800)",
              borderRadius: "var(--r-lg)",
              padding: "48px 52px",
              boxShadow: "var(--shadow-3)",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -12,
                right: 28,
                fontFamily: "var(--font-display)",
                fontSize: 180,
                color: "rgba(21,102,153,0.14)",
                lineHeight: 0.8,
                pointerEvents: "none",
              }}
            >
              "
            </div>
            <blockquote
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                fontSize: 26,
                lineHeight: 1.45,
                color: "var(--deep-800)",
                margin: 0,
                letterSpacing: "0.005em",
              }}
            >
              {t.quote}
            </blockquote>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "var(--tide-500)",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  letterSpacing: "0.02em",
                }}
              >
                {t.initial}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "var(--deep-800)",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--ink-500)",
                  }}
                >
                  {t.context}
                </div>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                gap: 8,
                marginTop: 32,
                alignItems: "center",
              }}
            >
              {items.map((_, j) => (
                <button
                  key={j}
                  onClick={() => setI(j)}
                  aria-label={`Story ${j + 1}`}
                  style={{
                    width: j === i ? 32 : 8,
                    height: 8,
                    borderRadius: 999,
                    background: j === i ? "var(--tide-500)" : "var(--ink-100)",
                    border: 0,
                    cursor: "pointer",
                    padding: 0,
                    transition:
                      "width .32s var(--ease-out), background .32s var(--ease-out)",
                  }}
                />
              ))}
              <div style={{ flex: 1 }} />
              <button
                onClick={() => setI((i - 1 + items.length) % items.length)}
                className="btn btn-ghost"
                style={{ padding: 8, color: "var(--deep-800)" }}
              >
                ←
              </button>
              <button
                onClick={() => setI((i + 1) % items.length)}
                className="btn btn-ghost"
                style={{ padding: 8, color: "var(--deep-800)" }}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Testimonials = Testimonials;
