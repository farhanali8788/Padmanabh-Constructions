import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Location.css";

const areas = [
  "Dharampeth",
  "Civil Lines",
  "Sadar",
  "Wardha Road",
  "Manish Nagar",
  "Besa",
  "Hingna Road",
  "Trimurti Nagar",
  "Pratap Nagar",
  "Ramdaspeth",
  "Sitabuldi",
  "Laxmi Nagar",
];

const trustPoints = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <circle
          cx="12"
          cy="9"
          r="2.5"
          stroke="currentColor"
          strokeWidth="1.5"
        />
      </svg>
    ),
    title: "Deep Local Knowledge",
    text: "We know Nagpur soil types, NMRDA regulations, and neighbourhood nuances inside out.",
  },
  // {
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none">
  //       <path
  //         d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
  //         stroke="currentColor"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //       />
  //       <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
  //       <path
  //         d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
  //         stroke="currentColor"
  //         strokeWidth="1.5"
  //         strokeLinecap="round"
  //       />
  //     </svg>
  //   ),
  //   title: "Trusted by 350+ Families",
  //   text: "From first-time home builders to multi-generational families — Nagpur trusts Padmanabh.",
  // },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <polyline
          points="9 22 9 12 15 12 15 22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Local Materials & Vendors",
    text: "We source from trusted Nagpur-based suppliers, ensuring faster delivery and fresh quality.",
  },
];

export default function Location() {
  const [headRef, headVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

  return (
    <section className="location" id="location">
      <div className="container location__container">
        {/* Left: Content */}
        <div ref={headRef} className="location__content">
          <p
            className={`section-label fade-up ${headVisible ? "visible" : ""}`}
          >
            Where We Build
          </p>
          <h2
            className={`section-heading fade-up stagger-1 ${headVisible ? "visible" : ""}`}
          >
            Proudly Rooted in <em>Nagpur</em>
          </h2>
          <p
            className={`location__text fade-up stagger-2 ${headVisible ? "visible" : ""}`}
          >
            We are a Nagpur company through and through. Our office is here, our
            team lives here, and our commitment is to build homes that become
            part of this city's story. We serve all major areas across Nagpur
            and surrounding townships.
          </p>

          {/* Trust points */}
          <div
            className={`location__trust fade-up stagger-3 ${headVisible ? "visible" : ""}`}
          >
            {trustPoints.map((t, i) => (
              <div className="location__trust-item" key={i}>
                <div className="location__trust-icon">{t.icon}</div>
                <div>
                  <strong>{t.title}</strong>
                  <p>{t.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Areas grid */}
          <div
            className={`location__areas fade-up stagger-4 ${headVisible ? "visible" : ""}`}
          >
            <p className="location__areas-label">Areas We Serve</p>
            <div className="location__areas-grid">
              {areas.map((area, i) => (
                <span key={i} className="location__area-tag">
                  <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                    <circle
                      cx="4"
                      cy="4"
                      r="3"
                      fill="var(--gold)"
                      opacity="0.6"
                    />
                  </svg>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Map */}
        <div
          ref={mapRef}
          className={`location__map-wrap fade-in ${mapVisible ? "visible" : ""}`}
        >
          <div className="location__map">
            {/* Embedded Google Map placeholder */}
            <iframe
              title="Zade Constructions Location - Nagpur"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.3003991593478!2d79.0535792753041!3d21.14044028053696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c06707478771%3A0x82c6ea0c0bf948bd!2s295%2C%20Ram%20Nagar%20Rd%2C%20Dharampeth%20Extension%2C%20Shivaji%20Nagar%2C%20Nagpur%2C%20Maharashtra%20440010%2C%20India!5e0!3m2!1sen!2sau!4v1776320489667!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Office card */}
          <div className="location__office-card">
            <div className="location__office-icon">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M9 1C6.24 1 4 3.24 4 6c0 3.94 5 11 5 11s5-7.06 5-11c0-2.76-2.24-5-5-5zm0 6.75a1.75 1.75 0 110-3.5 1.75 1.75 0 010 3.5z"
                  fill="var(--gold)"
                />
              </svg>
            </div>
            <div>
              <p className="location__office-name">Our Office</p>
              <p className="location__office-addr">
                Plot 295, Ram Nagar,
                <br />
                Nagpur - 440010, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
