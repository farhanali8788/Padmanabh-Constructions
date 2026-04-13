import { useScrollAnimation } from '../hooks/useScrollAnimation'
import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 21V12h6v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Custom Home Construction',
    desc: 'Your dream home designed and built from scratch — tailored to your lifestyle, budget, and aesthetic preferences.',
    tag: 'Most Popular',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M14.5 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7.5L14.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Renovation & Remodeling',
    desc: 'Breathe new life into your existing home with our expert renovation and structural remodeling services.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M5 12l-2 1 9 9 9-9-2-1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5 8l-2 1 9 9 9-9-2-1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M5 4l-2 1 9 9 9-9-2-1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Turnkey Home Projects',
    desc: 'We handle everything — from foundation to furnished handover. One point of contact, zero stress for you.',
    tag: 'All-Inclusive',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Architectural Planning Support',
    desc: 'Expert architectural guidance, floor plan optimization, and vastu-compliant layout design for your home.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Interior Execution',
    desc: 'From modular kitchens to elegant living spaces — we bring cohesive interior design to life within your home.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Site Supervision & Quality Control',
    desc: 'Dedicated site managers who ensure every brick, beam, and finish meets our uncompromising quality standards.',
  },
]

export default function Services() {
  const [headRef, headVisible] = useScrollAnimation()

  return (
    <section className="services" id="services">
      {/* Background decoration */}
      <div className="services__bg-deco" aria-hidden="true">
        <span>Services</span>
      </div>

      <div className="container">
        <div ref={headRef} className="services__header">
          <p className={`section-label fade-up ${headVisible ? 'visible' : ''}`}>What We Offer</p>
          <h2 className={`section-heading fade-up stagger-1 ${headVisible ? 'visible' : ''}`}>
            Everything Your <em>Dream Home</em> Needs
          </h2>
          <p className={`section-subtext fade-up stagger-2 ${headVisible ? 'visible' : ''}`}>
            We offer a complete suite of home construction services — all under one trusted roof.
            Whether you're starting from scratch or upgrading your existing home.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service, index }) {
  const [ref, visible] = useScrollAnimation()

  return (
    <div
      ref={ref}
      className={`service-card fade-up ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${(index % 3) * 0.1}s` }}
    >
      {service.tag && (
        <div className="service-card__tag">{service.tag}</div>
      )}
      <div className="service-card__icon">{service.icon}</div>
      <h3 className="service-card__title">{service.title}</h3>
      <p className="service-card__desc">{service.desc}</p>
      <div className="service-card__arrow">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}
