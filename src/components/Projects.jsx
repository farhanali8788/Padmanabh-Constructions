import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Projects.css'

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&auto=format&fit=crop',
    title: 'The Maple Residency',
    location: 'Dharampeth, Nagpur',
    type: '4 BHK · Custom Build',
    desc: 'A modern family home blending warm earthy tones with contemporary architecture and vastu-compliant layout.',
    year: '2024',
    area: '2,800 sq.ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=700&auto=format&fit=crop',
    title: 'Orchid Garden Villa',
    location: 'Wardha Road, Nagpur',
    type: '3 BHK · Turnkey Project',
    desc: 'A serene villa with open-plan living, landscaped garden, and premium Italian marble flooring throughout.',
    year: '2023',
    area: '3,200 sq.ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=700&auto=format&fit=crop',
    title: 'The Heritage Bungalow',
    location: 'Civil Lines, Nagpur',
    type: '5 BHK · Renovation & Extension',
    desc: 'A complete transformation of a heritage bungalow — preserving classic charm while adding modern amenities.',
    year: '2023',
    area: '4,500 sq.ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&auto=format&fit=crop',
    title: 'Sunrise Twin Homes',
    location: 'Besa, Nagpur',
    type: '3 BHK · Duplex Build',
    desc: 'Twin duplex homes designed for two families with shared compound, private zones, and efficient floor plans.',
    year: '2022',
    area: '2 × 1,900 sq.ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&auto=format&fit=crop',
    title: 'Green Valley Residence',
    location: 'Manish Nagar, Nagpur',
    type: '4 BHK · Interior Execution',
    desc: 'Luxury residence with custom modular kitchen, home theater, walk-in wardrobes, and landscaped terrace.',
    year: '2024',
    area: '3,600 sq.ft',
  },
  {
    img: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=700&auto=format&fit=crop',
    title: 'The Timber House',
    location: 'Sadar, Nagpur',
    type: '2 BHK + Study · Compact Luxury',
    desc: 'A beautifully compact home proving that thoughtful design and quality materials can make any size feel grand.',
    year: '2022',
    area: '1,450 sq.ft',
  },
]

export default function Projects() {
  const [visible6, setVisible6] = useState(false)
  const [headRef, headVisible] = useScrollAnimation()

  return (
    <section className="projects" id="projects">
      <div className="container">
        {/* Header */}
        <div ref={headRef} className="projects__header">
          <p className={`section-label fade-up ${headVisible ? 'visible' : ''}`}>Featured Work</p>
          <div className="projects__header-row">
            <h2 className={`section-heading fade-up stagger-1 ${headVisible ? 'visible' : ''}`}>
              Homes We've <em>Built with Pride</em>
            </h2>
            <p className={`projects__header-sub fade-up stagger-2 ${headVisible ? 'visible' : ''}`}>
              Each project is a story — a family's vision brought to life with careful
              craftsmanship and honest work.
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
            <button className="btn-outline projects__see-more" onClick={() => setVisible6(true)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              See More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

function ProjectCard({ project, index }) {
  const [ref, visible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`project-card fade-up ${visible ? 'visible' : ''}`}
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
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <path d="M6 1C4.07 1 2.5 2.57 2.5 4.5c0 2.7 3.5 6.5 3.5 6.5s3.5-3.8 3.5-6.5C9.5 2.57 7.93 1 6 1zm0 4.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor"/>
          </svg>
          {project.location}
        </p>
      </div>
    </div>
  )
}
