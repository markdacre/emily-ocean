/* global React */
const { useState: useNavState, useEffect: useNavEffect } = React;

function Nav() {
  const [scrolled, setScrolled] = useNavState(false);
  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "rgba(244,250,252,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--ink-100)"
          : "1px solid transparent",
        transition:
          "background .32s var(--ease-out), border-color .32s var(--ease-out)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 76,
        }}
      >
        <a
          href="#top"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden>
            <defs>
              <linearGradient id="lg-wave" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0" stopColor="#156699" />
                <stop offset="1" stopColor="#239683" />
              </linearGradient>
            </defs>
            <circle cx="16" cy="16" r="15" fill="url(#lg-wave)" />
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
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 24,
              color: "var(--deep-800)",
              letterSpacing: "0.02em",
              textTransform: "uppercase",
            }}
          >
            Emily <span style={{ color: "var(--tide-500)" }}>Thibodeau</span>
          </span>
        </a>
        <nav
          style={{ display: "flex", gap: 28, alignItems: "center" }}
          className="desktop-nav"
        >
          {window.DATA.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                color: "var(--ink-700)",
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="btn btn-primary"
            href="#contact"
            style={{
              fontSize: 14,
              padding: "12px 22px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Book a call
          </a>
        </nav>
      </div>
    </header>
  );
}

window.Nav = Nav;
