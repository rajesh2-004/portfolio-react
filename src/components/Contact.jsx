import React, { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Compose mailto link
    const mailto = `mailto:rajeshuppada5@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Let's <span>Connect</span></h2>
          <div className="section-divider" />
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-tagline">
              I'm currently open to internship opportunities, full-time roles, and
              collaborative research in Cloud, Web Development, or Quantum ML.
              Feel free to reach out — I'd love to connect!
            </p>

            <div className="contact-links">
              <a
                href="mailto:rajeshuppada5@gmail.com"
                className="contact-link-card"
              >
                <div className="contact-link-icon icon-email">📧</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Email</div>
                  <div className="contact-link-value">rajeshuppada5@gmail.com</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/uppada-rajeswara-rao-3125b4277"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link-card"
              >
                <div className="contact-link-icon icon-linkedin">💼</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">LinkedIn</div>
                  <div className="contact-link-value">uppada-rajeswara-rao</div>
                </div>
                <span className="contact-link-arrow">→</span>
              </a>

              <div className="contact-link-card" style={{ cursor: 'default' }}>
                <div className="contact-link-icon icon-github">🐙</div>
                <div className="contact-link-text">
                  <div className="contact-link-label">Location</div>
                  <div className="contact-link-value">Andhra Pradesh, India</div>
                </div>
                <span className="contact-link-arrow">📍</span>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3 className="form-title">Send a Message ✉️</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="Internship Opportunity / Collaboration"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  placeholder="Tell me about the opportunity or project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary form-submit">
                Send Message →
              </button>

              {submitted && (
                <div className="form-success">
                  ✅ Message opened in your email client. Thanks for reaching out!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
