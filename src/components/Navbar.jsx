import React, { useState, useEffect } from 'react'

const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Certificates',  'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Update active nav based on scroll
      const sections = navItems.map(n => document.getElementById(n.toLowerCase()))
      const scrollPos = window.scrollY + 120
      sections.forEach(sec => {
        if (sec && scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1))
        }
      })
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase())
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
        <div className="navbar-inner">
          <a className="navbar-logo" href="#home" onClick={e => { e.preventDefault(); scrollTo('home') }}>
            <span className="logo-dot">_</span>URR<span className="logo-dot">_</span>
          </a>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={active === item ? 'active' : ''}
                  onClick={e => { e.preventDefault(); scrollTo(item) }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a
              className="btn btn-primary"
              href="mailto:rajeshuppada5@gmail.com"
              style={{ padding: '10px 20px', fontSize: '0.82rem' }}
            >
              Hire Me ✦
            </a>
            <button
              className={`hamburger${menuOpen ? ' open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav${menuOpen ? ' open' : ''}`}>
        {navItems.map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={e => { e.preventDefault(); scrollTo(item) }}
          >
            {item}
          </a>
        ))}
        <a
          href="mailto:rajeshuppada5@gmail.com"
          style={{ color: 'var(--accent-cyan)', marginTop: '8px' }}
        >
          ✉ Hire Me
        </a>
      </div>
    </>
  )
}
