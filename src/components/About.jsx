import React from 'react'
import profile from '../assets/profile.jpg'

const highlights = [
  '☁️ Cloud Computing',
  '🌐 Web Development',
  '⚛️ Quantum ML',
  '📊 Data Science',
  '🤖 Machine Learning',
]

const infoCards = [
  { icon: '🎓', label: 'Degree', value: 'B.Tech CSE (DS)' },
  { icon: '📍', label: 'Location', value: 'Andhra Pradesh, IN' },
  { icon: '💼', label: 'Status', value: 'Final Year' },
  { icon: '📧', label: 'Email', value: 'rajeshuppada5@gmail.com' },
]

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-label">About Me</span>
          <h2 className="section-title">Who I <span>Am</span></h2>
          <div className="section-divider" />
        </div>

        <div className="about-content">
          <div className="about-visual">
            <div className="about-photo-frame">
              <div className="about-photo-bg">
                <img src={profile} alt="Rajeswara Rao" className="about-img" />
                {/* <span className="about-initials">URR</span> */}
              </div>
              <div className="about-photo-accent" />
              <div className="about-photo-accent-2" />
            </div>

            <div className="about-info-cards">
              {infoCards.map((card, i) => (
                <div className="about-info-card" key={i}>
                  <span className="about-info-icon">{card.icon}</span>
                  <div className="about-info-label">{card.label}</div>
                  <div className="about-info-value">{card.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-text">
            <p>
              I am <strong>Uppada Rajeswara Rao</strong>, a final-year B.Tech student in
              Computer Science and Engineering with specialization in Data Science. I thrive
              at the intersection of cloud infrastructure, modern web technologies, and
              cutting-edge quantum computing research.
            </p>
            <p>
               My journey began with a curiosity for how software systems work at scale.
               This led me to explore <strong>AWS cloud services</strong>, where I built
               real-world applications like MEDtrack — a cloud-based healthcare system
               that allows patients to book online appointments with doctors and manage
               medication records using EC2, DynamoDB, and SNS.
</p>
            <p>
               On the research side, I'm deeply interested in <strong>Quantum Machine Learning</strong>.
               I worked on hybrid classical–quantum models for rice disease classification using three different approaches:
               MobileNetV2 + PCA + Quantum SVM, EfficientNetB0 + Autoencoder + Quantum SVM, and a classical feature-based model.
               The system was implemented using Qiskit quantum kernels to explore quantum-enhanced classification performance.
           </p>
            <p>
              I'm actively seeking opportunities to contribute to innovative teams where
              I can apply my skills in cloud, full-stack development, and machine learning.
            </p>

            <div className="about-highlights">
              {highlights.map((h, i) => (
                <span className="highlight-tag" key={i}>{h}</span>
              ))}
            </div>

            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/uppada-rajeswara-rao-3125b4277"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                LinkedIn Profile →
              </a>
              <a
                href="mailto:rajeshuppada5@gmail.com"
                className="btn btn-outline"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
