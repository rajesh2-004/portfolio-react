import React from 'react'

const footerLinks = [
  { label: 'GitHub', href: 'https://github.com/rajesh2-004' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/uppada-rajeswara-rao-3125b4277' },
  
]

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          URR<span>.dev</span>
        </div>

        <p className="footer-copy">
          © {year} Uppada Rajeswara Rao. Built with <span>♥</span> &amp; React.
        </p>

        <div className="footer-links">
          {footerLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={scrollTop}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-body)',
              transition: 'var(--transition)',
            }}
            onMouseEnter={e => e.target.style.color = 'var(--accent-cyan)'}
            onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}
          >
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  )
}
