import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./About.css";

const highlights = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 2L2 7v10l10 5 10-5V7L12 2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 22V12M2 7l10 5 10-5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "26+ Years",
    desc: "Building homes across Nagpur with proven expertise and trusted relationships.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M9 12l2 2 4-4M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Grade-A Materials",
    desc: "We source premium construction materials ensuring longevity and quality finish.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    title: "Expert Team",
    desc: "40+ skilled architects, engineers, and craftsmen dedicated to your home vision.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Transparent Process",
    desc: "Clear timelines, honest budgets, and open communication from start to handover.",
  },
];

export default function About() {
  const [sectionRef, visible] = useScrollAnimation();
  const [imgRef, imgVisible] = useScrollAnimation();

  return (
    <section className="about" id="about">
      <div className="container about__container">
        {/* Left: Image collage */}
        <div
          ref={imgRef}
          className={`about__images fade-in ${imgVisible ? "visible" : ""}`}
        >
          <div className="about__img-main">
            <img src="image-1.jpeg" alt="Home construction in Nagpur" />
            <div className="about__img-overlay">
              <p className="about__img-years">
                <span>26</span>
                <small>
                  Years of
                  <br />
                  Excellence
                </small>
              </p>
            </div>
          </div>
          <div className="about__img-secondary">
            <img
              src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=400&auto=format&fit=crop"
              alt="Beautiful home interior"
            />
          </div>
          {/* Floating award card */}
          <div className="about__award">
            <div className="about__award-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M10 1l2.5 5 5.5.8-4 3.9.94 5.5L10 13.5l-4.94 2.7.94-5.5L2 6.8l5.5-.8L10 1z"
                  fill="var(--gold)"
                  stroke="var(--gold)"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <div>
              <p className="about__award-title">Best Residential Builder</p>
              <p className="about__award-sub">Nagpur Excellence Awards 2023</p>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div ref={sectionRef} className="about__content">
          <p className={`section-label fade-up ${visible ? "visible" : ""}`}>
            About Padmanabh Constructions
          </p>

          <h2
            className={`section-heading about__heading fade-up stagger-1 ${visible ? "visible" : ""}`}
          >
            Crafting Homes with <em>Heart</em> Since 2000
          </h2>

          <p
            className={`about__text fade-up stagger-2 ${visible ? "visible" : ""}`}
          >
            Padmanabh Constructions was founded with one belief: every family
            deserves a home built to last, designed to inspire, and delivered
            with integrity. Over two decades, we have become Nagpur's most
            trusted name in residential home building — not through scale, but
            through the care we bring to every project.
          </p>

          <p
            className={`about__text fade-up stagger-3 ${visible ? "visible" : ""}`}
          >
            We specialize exclusively in residential projects. No commercial
            shortcuts, no cookie-cutter templates. Every home we build is a
            collaboration — your vision, our craftsmanship.
          </p>

          {/* Highlights grid */}
          <div
            className={`about__highlights fade-up stagger-4 ${visible ? "visible" : ""}`}
          >
            {highlights.map((h, i) => (
              <div className="about__highlight" key={i}>
                <div className="about__highlight-icon">{h.icon}</div>
                <div>
                  <strong>{h.title}</strong>
                  <p>{h.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`about__actions fade-up stagger-5 ${visible ? "visible" : ""}`}
          >
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .querySelector("#contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Start Your Project</span>
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
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
              className="btn-outline"
              onClick={() =>
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              See Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
