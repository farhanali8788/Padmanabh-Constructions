import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Parallax BG */}
      <div
        className="hero__bg"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="hero__bg-overlay" />
        {/* Architectural line pattern */}
        <div className="hero__bg-pattern" />
      </div>

      {/* Floating badges */}
      <div className="hero__badge hero__badge--top">
        <span className="hero__badge-dot" />
        <span>Est. 2000 · Nagpur</span>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="section-label hero__label">Trusted Home Builders</p>

          <h1 className="hero__headline">
            Build the Home
            <br />
            <em>You've Always</em>
            <br />
            Dreamed Of
          </h1>

          <p className="hero__subline">
            Nagpur's most trusted residential construction company. From custom
            dream homes to complete renovations — built with craftsmanship,
            delivered with care.
          </p>

          <div className="hero__actions">
            <button
              className="btn-primary hero__btn-primary"
              onClick={() => handleScroll("#contact")}
            >
              <span>Get Free Consultation</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="btn-outline hero__btn-outline"
              onClick={() => handleScroll("#projects")}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="2"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <rect
                  x="2"
                  y="9"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <rect
                  x="9"
                  y="9"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
              View Projects
            </button>
          </div>

          {/* Stats row */}
          <div className="hero__stats">
            {[
              { num: "26+", label: "Years of Excellence" },
              // { num: '350+', label: 'Homes Delivered' },
              { num: "98%", label: "Client Satisfaction" },
              { num: "40+", label: "Skilled Professionals" },
            ].map((s, i) => (
              <div key={i} className="hero__stat">
                <strong>{s.num}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right visual card */}
        <div className="hero__visual">
          <div className="hero__card">
            <div className="hero__card-img">
              <img
                src="image-2.jpeg"
                alt="Beautiful residential home in Nagpur"
                loading="eager"
              />
              <div className="hero__card-badge">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 1l2.09 4.26L16 6.27l-3.5 3.41.83 4.82L9 12.1l-4.33 2.27.83-4.82L2 6.27l4.91-.99L9 1z"
                    fill="var(--gold)"
                    stroke="var(--gold)"
                    strokeWidth="0.5"
                  />
                </svg>
                <span>Premium Quality</span>
              </div>
            </div>
            <div className="hero__card-info">
              <div className="hero__card-tag">Recently Completed</div>
              <p className="hero__card-title">Green Valley Residence</p>
              <p className="hero__card-loc">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path
                    d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.7 3.5 6.5 3.5 6.5s3.5-3.8 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
                    fill="var(--gold)"
                  />
                </svg>
                Dharampeth, Nagpur
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="hero__deco hero__deco--ring" />
          <div className="hero__deco hero__deco--dot-grid" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  );
}
