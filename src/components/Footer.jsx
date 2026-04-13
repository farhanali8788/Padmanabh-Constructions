import "./Footer.css";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

const services = [
  "Custom Home Construction",
  "Renovation & Remodeling",
  "Turnkey Projects",
  "Architectural Planning",
  "Interior Execution",
  "Site Supervision",
];

export default function Footer() {
  const handleScroll = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__top">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">
                <svg width="30" height="30" viewBox="0 0 32 32" fill="none">
                  <path
                    d="M16 2L3 12v18h8v-8h10v8h8V12L16 2z"
                    fill="rgba(184,149,90,0.25)"
                  />
                  <path
                    d="M16 2L3 12v18h8v-8h10v8h8V12L16 2z"
                    stroke="var(--gold)"
                    strokeWidth="1.5"
                    fill="none"
                  />
                  <circle
                    cx="16"
                    cy="10"
                    r="2"
                    fill="var(--gold)"
                    opacity="0.8"
                  />
                </svg>
              </span>
              <span className="footer__logo-text">
                <span className="footer__logo-name">Zade</span>
                <span className="footer__logo-sub">Constructions</span>
              </span>
            </div>
            <p className="footer__tagline">
              Building homes that stand the test of time — with craftsmanship,
              integrity, and a deep commitment to every family we serve across
              Nagpur.
            </p>
            {/* Social */}
            <div className="footer__social">
              <a
                href="#"
                className="footer__social-link"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                className="footer__social-link"
                aria-label="YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon
                    points="9.75,15.02 15.5,12 9.75,8.98 9.75,15.02"
                    fill="var(--charcoal)"
                  />
                </svg>
              </a>
              <a
                href="https://wa.me/919876543210"
                className="footer__social-link"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} onClick={(e) => handleScroll(e, l.href)}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6h7M6.5 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Services</h4>
            <ul className="footer__links">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => handleScroll(e, "#services")}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2.5 6h7M6.5 3l3 3-3 3"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h4 className="footer__col-title">Contact Info</h4>
            <div className="footer__contact-list">
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 1.5C5.79 1.5 4 3.29 4 5.5c0 3.3 4 8.5 4 8.5s4-5.2 4-8.5c0-2.21-1.79-4-4-4z"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                  />
                  <circle
                    cx="8"
                    cy="5.5"
                    r="1.5"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                  />
                </svg>
                <span>
                  Plot 42, Dharampeth Extension,
                  <br />
                  Nagpur – 440010, MH
                </span>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M14.67 11.28c-.2-.99-1.17-1.64-2.17-1.45L11 10.1C9.89 9.14 9.14 7.89 8.86 6.5l.37-1.3C9.62 4.2 9.15 3.2 8.17 2.87L6.93 2.44C6.07 2.15 5.11 2.5 4.68 3.28L3.5 5.5c.5 4.5 4.5 8.5 9 9l2.22-1.18c.78-.43 1.13-1.39.85-2.24l-.9-1.8z"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="2"
                    y="4"
                    width="12"
                    height="9"
                    rx="1.5"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M2 5.5l6 4 6-4"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                <a href="mailto:hello@Zadeconstructions.in">
                  hello@Zadeconstructions.in
                </a>
              </div>
              <div className="footer__contact-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="6"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                  />
                  <path
                    d="M8 4.5V8l2.5 2"
                    stroke="var(--gold)"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                  />
                </svg>
                <span>Mon–Sat, 9 AM – 7 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            © {new Date().getFullYear()} Zade Constructions Pvt. Ltd. All rights
            reserved.
          </p>
          <p>
            Made with care in <span>Nagpur, Maharashtra</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
