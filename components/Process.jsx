/* global React */
function Process() {
  const steps = window.DATA.process;
  return (
    <section
      id="process"
      style={{
        padding: "112px 0",
        background: "var(--sky-100)",
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
        <div style={{ maxWidth: 720, marginBottom: 80 }}>
          <span className="eyebrow">The process · three steps</span>
          <h2
            style={{
              marginTop: 6,
              textTransform: "uppercase",
              color: "var(--deep-800)",
            }}
          >
            No templates. No rush.{" "}
            <span style={{ color: "var(--tide-500)" }}>Just a plan</span> that
            fits your body.
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
          {steps.map((s, i) => {
            const reverse = i % 2 === 1;
            return (
              <div
                key={s.n}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 72,
                  alignItems: "center",
                  direction: reverse ? "rtl" : "ltr",
                }}
              >
                <div
                  style={{
                    direction: "ltr",
                    borderRadius: "var(--r-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-3)",
                    position: "relative",
                  }}
                >
                  <img
                    src={s.photo}
                    alt=""
                    style={{
                      width: "100%",
                      height: 400,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ direction: "ltr" }}>
                  <div
                    style={{ display: "flex", alignItems: "baseline", gap: 14 }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: 72,
                        color: "var(--tide-500)",
                        lineHeight: 1,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {s.n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 700,
                        fontSize: 13,
                        color: "var(--foam-600)",
                        textTransform: "uppercase",
                        letterSpacing: "0.18em",
                      }}
                    >
                      — {s.label}
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: 38,
                      marginTop: 14,
                      marginBottom: 16,
                      textTransform: "uppercase",
                      color: "var(--deep-800)",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 18,
                      color: "var(--ink-500)",
                      lineHeight: 1.65,
                      maxWidth: 480,
                    }}
                  >
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Process = Process;
