import { useState, useEffect } from "react";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#"
          className="navbar__logo"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <span className="navbar__logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M16 2L3 12v18h8v-8h10v8h8V12L16 2z"
                fill="currentColor"
                opacity="0.2"
              />
              <path
                d="M16 2L3 12v18h8v-8h10v8h8V12L16 2z"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M13 22v-5h6v5"
                stroke="currentColor"
                strokeWidth="1.2"
                fill="none"
              />
              <circle cx="16" cy="10" r="2" fill="currentColor" opacity="0.6" />
            </svg>
          </span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-name">Padmanabh</span>
            <span className="navbar__logo-sub">Construction company</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__link"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn-primary"
          onClick={(e) => handleNavClick(e, "#contact")}
        >
          <span>Free Consultation</span>
        </a>

        {/* Mobile Toggle */}
        <button
          className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile ${menuOpen ? "navbar__mobile--open" : ""}`}
      >
        <nav>
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar__mobile-link"
              style={{ "--i": i }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="navbar__mobile-cta btn-primary"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            <span>Get Free Consultation</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
