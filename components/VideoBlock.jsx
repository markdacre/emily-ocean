/* global React, DATA */
const { useState: useVState, useRef: useVRef } = React;

function VideoBlock() {
  const [playing, setPlaying] = useVState(false);
  const videoRef = useVRef(null);
  const { src, poster } = DATA.video;
  return (
    <section style={{ padding: "64px 0 96px", background: "var(--sky-100)" }}>
      <div className="container">
        <div
          style={{
            position: "relative",
            borderRadius: "var(--r-lg)",
            overflow: "hidden",
            boxShadow: "var(--shadow-3)",
            aspectRatio: "16/9",
            background: "var(--deep-900)",
          }}
        >
          {!playing && (
            <img
              src={poster}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "brightness(0.6) saturate(1.05) hue-rotate(-8deg)",
                transition: "filter .32s var(--ease-out)",
              }}
            />
          )}
          {playing && (
            <video
              ref={videoRef}
              src={src}
              poster={poster}
              controls
              autoPlay
              playsInline
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                background: "var(--deep-900)",
              }}
            />
          )}
          {!playing && (
            <>
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(7,24,39,0.2) 0%, rgba(7,24,39,0.5) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 22,
                  color: "#fff",
                }}
              >
                <button
                  onClick={() => setPlaying(true)}
                  aria-label="Play video"
                  className="em-video-btn"
                  style={{
                    width: 104,
                    height: 104,
                    borderRadius: "50%",
                    background: "var(--tide-500)",
                    border: 0,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.35)",
                    transition:
                      "transform .18s var(--ease-out), background .18s var(--ease-out)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--tide-600)";
                    e.currentTarget.style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--tide-500)";
                    e.currentTarget.style.transform = "";
                  }}
                >
                  <svg viewBox="0 0 24 24" width="34" height="34" fill="#fff">
                    <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
                  </svg>
                </button>
                <div style={{ textAlign: "center", maxWidth: 560 }}>
                  <div
                    style={{
                      fontSize: 13,
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "var(--foam-300)",
                      fontWeight: 700,
                      marginBottom: 10,
                    }}
                  >
                    Watch · 90 seconds
                  </div>
                  <div
                    className="em-video-title"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: 36,
                      textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}
                  >
                    See what a session looks like
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
window.VideoBlock = VideoBlock;
