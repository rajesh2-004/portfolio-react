import React, { useState, useEffect } from 'react'

const roles = [
  'AWS Cloud Practitioner',
  'Web Developer',
  'Quantum ML Enthusiast',
  'Data Science Student',
]

export default function Home() {
  const [displayText, setDisplayText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIdx]
    let timeout

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx(c => c + 1), 70)
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx(c => c - 1), 40)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setRoleIdx(r => (r + 1) % roles.length)
    }

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, roleIdx])

  useEffect(() => {
    setDisplayText(roles[roleIdx].slice(0, charIdx))
  }, [charIdx, roleIdx])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="home-section" id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text">
            {/* <div className="home-greeting">Hello, World!</div> */}

            <h1 className="home-name">
              Uppada{' '}
              <span className="highlight">Rajeswara</span>
              <br />Rao
            </h1>

            <div className="home-typing-container">
              <span style={{ color: 'var(--text-secondary)' }}>I'm a&nbsp;</span>
              <span className="typing-text">{displayText}</span>
              <span className="cursor" />
            </div>

            <p className="home-description">
              Final-year B.Tech CSE (Data Science) student passionate about Cloud Computing,
              Web Development, and Quantum Machine Learning. Building at the intersection
              of cutting-edge tech and real-world impact.
            </p>

            <div className="home-buttons">
              <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
                View My Work →
              </button>
              <button className="btn btn-outline" onClick={() => scrollTo('contact')}>
                Get In Touch
              </button>
            </div>

            <div className="home-stats">
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">6</span>
                <span className="stat-label">Certifications</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4th</span>
                <span className="stat-label">Year B.Tech</span>
              </div>
            </div>
          </div>

          <div className="home-visual">
            <div className="avatar-container">
              <div className="avatar-ring" />
              <div className="avatar-ring-2" />
              <div className="avatar-core">
                <span className="avatar-initials">URR</span>
              </div>

              <div className="floating-badge">
                <span className="badge-dot" />
                <span>☁️ AWS Certified</span>
              </div>
              <div className="floating-badge">
                <span className="badge-dot" style={{ background: '#818cf8' }} />
                <span>⚛️ Quantum ML</span>
              </div>
              <div className="floating-badge">
                <span className="badge-dot" style={{ background: '#34d399' }} />
                <span>🌐 Full Stack</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
