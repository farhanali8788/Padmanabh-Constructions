import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Projects.css";

const projects = [
  {
    img: "projects-image-1.jpeg",
    title: "The Maple Residency",
    location: "Dharampeth, Nagpur",
    type: "4 BHK · Custom Build",
    desc: "A contemporary luxury home designed with clean lines, open terraces, and a spacious car porch—perfectly blending aesthetics with everyday functionality.",
    year: "2024",
    area: "2,800 sq.ft",
  },
  {
    img: "projects-image-2.jpeg",
    title: "Chandekar's Villa",
    location: "Kamptee Road, Nagpur",
    type: "2 BHK · Turnkey Project",
    desc: "A modern villa featuring a bold façade, ambient lighting accents, and a compact yet elegant layout tailored for urban living.",
    year: "2023",
    area: "3,200 sq.ft",
  },
  {
    img: "projects-image-8.jpeg",
    title: "The Belekar House",
    location: "Kamptee Road, Nagpur",
    type: "4 BHK · Renovation & Extension",
    desc: "A stylish upgrade combining natural textures, glass elements, and vertical design to create a striking and modern family residence.",
    year: "2023",
    area: "4,500 sq.ft",
  },
  {
    img: "projects-image-7.jpeg",
    title: "Sunrise Twin Homes",
    location: "Besa, Nagpur",
    type: "3 BHK · Semi-Custom Build",
    desc: "Elegant twin homes designed with symmetry and warmth, featuring large balconies, soft lighting, and a welcoming residential feel.",
    year: "2022",
    area: "2 × 1,900 sq.ft",
  },
  {
    img: "projects-image-3.jpeg",
    title: "The Bag Studio",
    location: "Manish Nagar, Nagpur",
    type: "Shop · Interior Execution",
    desc: "A premium retail space with curated lighting, minimalist shelving, and a luxurious ambiance crafted to elevate the shopping experience.",
    year: "2024",
    area: "1,200 sq.ft",
  },
  {
    img: "image-1.jpeg",
    title: "The Timber House",
    location: "Sadar, Nagpur",
    type: "2 BHK + Study · Compact Luxury",
    desc: "A refined modern home defined by its signature arched façade, warm textures, and thoughtfully designed indoor-outdoor spaces that create a perfect balance of comfort and elegance.",
    year: "2022",
    area: "1,450 sq.ft",
  },
];

export default function Projects() {
  const [visible6, setVisible6] = useState(false);
  const [headRef, headVisible] = useScrollAnimation();

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Header */}
        <div ref={headRef} className="projects__header">
          <p
            className={`section-label fade-up ${headVisible ? "visible" : ""}`}
          >
            Featured Work
          </p>
          <div className="projects__header-row">
            <h2
              className={`section-heading fade-up stagger-1 ${headVisible ? "visible" : ""}`}
            >
              Homes We've <em>Built with Pride</em>
            </h2>
            <p
              className={`projects__header-sub fade-up stagger-2 ${headVisible ? "visible" : ""}`}
            >
              Each project is a story — a family's vision brought to life with
              careful craftsmanship and honest work.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="projects__grid">
          {projects.slice(0, visible6 ? 6 : 3).map((p, i) => (
            <ProjectCard key={i} project={p} index={i} />
          ))}
        </div>

        {/* CTA */}
        {!visible6 && (
          <div className="projects__more">
            <button
              className="btn-outline projects__see-more"
              onClick={() => setVisible6(true)}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M3 8h10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              See More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${visible ? "visible" : ""}`}
      style={{ transitionDelay: `${(index % 3) * 0.12}s` }}
    >
      <div className="project-card__img">
        <img src={project.img} alt={project.title} loading="lazy" />
        <div className="project-card__overlay">
          <div className="project-card__overlay-content">
            <div className="project-card__meta-row">
              <span className="project-card__area">{project.area}</span>
              <span className="project-card__year">{project.year}</span>
            </div>
            <p className="project-card__desc">{project.desc}</p>
            <button className="project-card__cta">
              View Project
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="project-card__type">{project.type}</div>
      </div>
      <div className="project-card__info">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__location">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.7 3.5 6.5 3.5 6.5s3.5-3.8 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
              fill="currentColor"
            />
          </svg>
          {project.location}
        </p>
      </div>
    </div>
  );
}
