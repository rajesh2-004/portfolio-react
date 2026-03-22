import React, { useState, useEffect, useCallback } from 'react'
import './Achievements.css'

// ── Correct asset imports matching your src/assets/ folder ──
import conclaveImg  from '../assets/conclave.png'  // Research Conclave 2025
import a3Img        from '../assets/A3.jpg'         // Avishkaar Season 3
import q1Img        from '../assets/Q1.jpg'         // Quantum Hackathon photo 1
import q2Img        from '../assets/Q2.jpg'         // Quantum Hackathon photo 2
import q3Img        from '../assets/Q3.jpg'         // Quantum Hackathon photo 3
import nssImg       from '../assets/nss.jpg'        // NSS volunteer photo (replace placeholder)

// ── NSS: no real photo supplied → inline SVG placeholder ──
const NSS_PLACEHOLDER = `data:image/svg+xml,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="340" viewBox="0 0 600 340">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0b1733"/>
      <stop offset="100%" stop-color="#060e20"/>
    </linearGradient>
    <radialGradient id="r" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="rgba(52,211,153,0.14)"/>
      <stop offset="100%" stop-color="transparent"/>
    </radialGradient>
  </defs>
  <rect width="600" height="340" fill="url(#g)"/>
  <rect width="600" height="340" fill="url(#r)"/>
  <circle cx="300" cy="170" r="140" fill="none" stroke="rgba(52,211,153,0.08)" stroke-width="1"/>
  <circle cx="300" cy="170" r="170" fill="none" stroke="rgba(52,211,153,0.04)" stroke-width="1"/>
  <text x="50%" y="44%" font-size="72" text-anchor="middle" dominant-baseline="middle">🤝</text>
  <text x="50%" y="68%" font-family="sans-serif" font-size="17" font-weight="bold"
        fill="#34d399" text-anchor="middle">NSS · National Service Scheme</text>
  <text x="50%" y="80%" font-family="sans-serif" font-size="13"
        fill="rgba(148,170,200,0.8)" text-anchor="middle">Social Service · Community Impact</text>
</svg>`)}`

/* ────────────────────────────────────────────────────────────────── */
/*  Achievements data                                                  */
/* ────────────────────────────────────────────────────────────────── */
const achievements = [
  {
    images: [q1Img, q2Img, q3Img],        // carousel — 3 real photos
    title: '1st Place – National Level Hackathon AQVH',
    description:
      'Won 1st place in Amaravati Quantum Valley Hackathon conducted by APSCHE and Government of Andhra Pradesh. Solved Portfolio Optimization using QAOA as Team Lead.',
    badge: '🏆 2025',
    badgeVariant: 'cyan',
    icon: '🏆',
  },
  {
    images: [conclaveImg],                 // single photo: conclave.png
    title: '1st Place – Research Conclave 2025',
    description:
      'Won first place for presenting Quantum SVM for Rice Crop Health research project, demonstrating hybrid classical-quantum machine learning techniques.',
    badge: '🔬 2025',
    badgeVariant: 'indigo',
    icon: '🔬',
  },
  {
    images: [nssImg],             // placeholder until you add nss.jpg
    title: 'NSS Volunteer',
    description:
      'Active NSS (National Service Scheme) volunteer committed to social service, community outreach, and college activities throughout the academic journey.',
    badge: '🤝 College',
    badgeVariant: 'green',
    icon: '🤝',
  },
  {
    images: [a3Img],                       // single photo: A3.jpg
    title: 'Corporate Relations Coordinator – Avishkaar Season 3',
    description:
      'Served as Corporate Relations Coordinator for Avishkaar Season 3, a national-level technical fest — communicated with industry professionals, managed collaborations, and conducted mentoring sessions for participants.',
    badge: '🎯 2025',
    badgeVariant: 'gold',
    icon: '🎯',
  },
]

/* ────────────────────────────────────────────────────────────────── */
/*  ImageCarousel — auto-advances while the card is hovered            */
/* ────────────────────────────────────────────────────────────────── */
function ImageCarousel({ images, alt, icon, hovered }) {
  const [idx, setIdx] = useState(0)

  // Auto-advance only when card is hovered and multiple images exist
  useEffect(() => {
    if (!hovered || images.length < 2) return
    const t = setInterval(() => setIdx(i => (i + 1) % images.length), 1800)
    return () => clearInterval(t)
  }, [hovered, images.length])

  const prev = useCallback((e) => {
    e.stopPropagation()
    setIdx(i => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback((e) => {
    e.stopPropagation()
    setIdx(i => (i + 1) % images.length)
  }, [images.length])

  return (
    <div className="achievement-img-wrapper">

      {/* All slides stacked; active one is visible */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`${alt} – ${i + 1}`}
          className={`achievement-img${i === idx ? ' achievement-img--active' : ''}`}
          loading="lazy"
        />
      ))}

      {/* Hover overlay with icon */}
      <div className="achievement-img-overlay">
        <span className="achievement-overlay-icon">{icon}</span>
      </div>

      {/* Carousel controls — only when more than one image */}
      {images.length > 1 && (
        <>
          <button
            className="carousel-btn carousel-btn--prev"
            onClick={prev}
            aria-label="Previous photo"
          >‹</button>
          <button
            className="carousel-btn carousel-btn--next"
            onClick={next}
            aria-label="Next photo"
          >›</button>

          <div className="carousel-dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === idx ? ' carousel-dot--active' : ''}`}
                onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                aria-label={`Photo ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ────────────────────────────────────────────────────────────────── */
/*  Main Achievements component                                        */
/* ────────────────────────────────────────────────────────────────── */
export default function Achievements() {
  const [hovered, setHovered] = useState(null)

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">

        {/* ── Section header ── */}
        <div className="section-header">
          <span className="section-label">Honours &amp; Activities</span>
          <h2 className="section-title">My <span>Achievements</span></h2>
          <div className="section-divider" />
        </div>

        {/* ── Cards grid ── */}
        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <div
              key={i}
              className={`achievement-card achievement-card--${item.badgeVariant}${
                hovered === i ? ' achievement-card--hovered' : ''
              }`}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Image / carousel */}
              <ImageCarousel
                images={item.images}
                alt={item.title}
                icon={item.icon}
                hovered={hovered === i}
              />

              {/* Body */}
              <div className="achievement-body">
                <span className={`achievement-badge achievement-badge--${item.badgeVariant}`}>
                  {item.badge}
                </span>
                <h3 className="achievement-title">{item.title}</h3>
                <p className="achievement-desc">{item.description}</p>
                <div className="achievement-line" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
