import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Contact.css";

const FORMSPREE_ID = "mpqkqvaz"; // Replace with your Formspree form ID
const WHATSAPP_NUMBER = "919960123560"; // Replace with actual number if different

const services = [
  "Custom Home Construction",
  "Renovation & Remodeling",
  "Turnkey Home Project",
  "Architectural Planning",
  "Interior Execution",
  "Site Supervision",
  "Other",
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 11.74 19.79 19.79 0 01.45 3.1 2 2 0 012.43 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.18 6.18l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Call Us",
    value: "+91 99601 23560",
    href: "tel:+919960123560",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="22,6 12,13 2,6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    label: "Email Us",
    value: "padmanabhconstruction@gmail.com",
    href: "mailto:padmanabhconstruction@gmail.com",
  },
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
    label: "Visit Us",
    value: "Plot 295, Ram Nagar, Nagpur – 440010",
    href: "https://maps.google.com",
  },
];

export default function Contact() {
  const [headRef, headVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    // 1. Send to Formspree
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error("Formspree error");
    } catch (err) {
      // Non-blocking — we still open WhatsApp even if Formspree fails
      console.warn("Formspree submission failed:", err);
    }

    // 2. Open WhatsApp with pre-filled message
    const waText = [
      `*New Home Inquiry – Padmanabh Constructions*`,
      ``,
      `*Name:* ${formData.name}`,
      `*Phone:* ${formData.phone}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Service:* ${formData.service}`,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waText)}`,
      "_blank",
    );

    // 3. Show success + reset
    setStatus("success");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="contact__bg" aria-hidden="true" />

      <div className="container contact__container">
        {/* Left */}
        <div ref={headRef} className="contact__left">
          <p
            className={`section-label fade-up ${headVisible ? "visible" : ""}`}
          >
            Get In Touch
          </p>
          <h2
            className={`section-heading contact__heading fade-up stagger-1 ${headVisible ? "visible" : ""}`}
          >
            Let's Build Your <em>Dream Home</em> Together
          </h2>
          <p
            className={`contact__text fade-up stagger-2 ${headVisible ? "visible" : ""}`}
          >
            Tell us about your vision. Whether you have detailed plans or just a
            dream — our team will guide you every step of the way. Free
            consultation, no obligations.
          </p>

          {/* Contact info */}
          <div
            className={`contact__info fade-up stagger-3 ${headVisible ? "visible" : ""}`}
          >
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="contact__info-item"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="contact__info-icon">{item.icon}</div>
                <div>
                  <span className="contact__info-label">{item.label}</span>
                  <span className="contact__info-value">{item.value}</span>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I'm interested in home construction services.")}`}
            className={`contact__whatsapp fade-up stagger-4 ${headVisible ? "visible" : ""}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Quick Chat on WhatsApp
          </a>
        </div>

        {/* Right: Form */}
        <div
          ref={formRef}
          className={`contact__form-wrap fade-up ${formVisible ? "visible" : ""}`}
        >
          <div className="contact__form-card">
            <div className="contact__form-header">
              <h3>Request Free Consultation</h3>
              <p>
                Submits to email{" "}
                <span className="contact__form-header-and">and</span> opens
                WhatsApp instantly.
              </p>
            </div>

            {status === "success" ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 12l2 2 4-4m6 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      stroke="var(--gold)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h4>Inquiry Sent!</h4>
                <p>
                  Your details were emailed to us and WhatsApp opened for a
                  quick follow-up. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__form-row">
                  <div className="form-field">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-field">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-field">
                  <label htmlFor="service">Service Required *</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Tell us about your dream home — location, size, budget, timeline..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                {/* Submit hint */}
                <div className="contact__submit-hint">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path
                      d="M7 1v6M4 4l3-3 3 3"
                      stroke="var(--gold)"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 9v2a1 1 0 001 1h8a1 1 0 001-1V9"
                      stroke="var(--gold)"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>
                    Sends your details to our email <strong>+</strong> opens
                    WhatsApp for instant contact
                  </span>
                </div>

                <button
                  type="submit"
                  className={`btn-primary contact__submit ${status === "submitting" ? "contact__submit--loading" : ""}`}
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? (
                    <>
                      <span className="contact__spinner" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send & Open WhatsApp</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
