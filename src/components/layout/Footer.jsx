import React from 'react';

const Footer = () => (
  <footer style={{
    padding: '4rem 2rem',
    borderTop: '1px solid rgba(255,255,255,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'var(--bg)',
    position: 'relative', zIndex: 10
  }}>
    <div>
      <div style={{ fontFamily: 'var(--font-h)', fontWeight: 900, fontSize: '1rem', letterSpacing: '1px' }}>
        NAMAGIRI <span style={{ color: 'var(--accent-light)' }}>HEMANTH KUMAR</span>
      </div>
        © 2025 • ML Engineer & CS Student
    </div>
    <div style={{ display: 'flex', gap: '2rem' }}>
      {[
        { label: 'GitHub',   href: 'https://github.com/hemanthnamagiri8978' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/namagirihemanth51' },
      ].map(({ label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer"
          style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '1px' }}
        >
          {label}
        </a>
      ))}
    </div>
  </footer>
);

export default Footer;
