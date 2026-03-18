import React, { useState, useEffect } from 'react';

const LINKS = ['About', 'Skills', 'Projects', 'Training', 'Achievements', 'Education', 'Resume', 'Contact'];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-h)',
      display: 'flex', alignItems: 'center',
      background: scrolled || mobileMenuOpen ? 'rgba(5,5,5,0.95)' : 'transparent',
      backdropFilter: scrolled || mobileMenuOpen ? 'blur(20px)' : 'none',
      borderBottom: scrolled || mobileMenuOpen ? '1px solid rgba(255,255,255,0.1)' : 'none',
      transition: 'all 0.4s ease',
    }}>
      <div className="premium-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', gap: '1rem' }}>
        <a href="#home" className="navbar-logo" style={{ fontFamily: 'var(--font-h)', fontWeight: 900, color: '#fff', letterSpacing: '0.5px', whiteSpace: 'nowrap', zIndex: 1001 }}>
          NAMAGIRI HEMANTH <span style={{ color: 'var(--accent-light)' }}>KUMAR</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-only" style={{ display: 'flex', gap: '0.2rem' }}>
          {LINKS.map(l => {
            const href = l === 'Resume' ? 'https://drive.google.com/file/d/1-nsGg2MEbU-5AVTwPjzc_cJBbCiHpr5l/view?usp=drivesdk' : `#${l.toLowerCase()}`;
            const target = l === 'Resume' ? '_blank' : undefined;
            return (
              <a key={l} href={href} target={target} style={{
                padding: '0.4rem 0.6rem',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--muted)',
                transition: 'all 0.25s',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                whiteSpace: 'nowrap'
              }}>
                {l}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#fff', 
            fontSize: '1.5rem', 
            cursor: 'pointer',
            zIndex: 1001 
          }}
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(5,5,5,0.96)',
            backdropFilter: 'blur(30px)',
            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            gap: '1.2rem', padding: '6rem 2rem 2rem 2rem', zIndex: 1000, overflowY: 'auto'
          }}>
            {LINKS.map(l => {
              const href = l === 'Resume' ? 'https://drive.google.com/file/d/1-nsGg2MEbU-5AVTwPjzc_cJBbCiHpr5l/view?usp=drivesdk' : `#${l.toLowerCase()}`;
              const target = l === 'Resume' ? '_blank' : undefined;
              return (
                <a 
                  key={l} 
                  href={href} 
                  target={target}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 800,
                    color: '#fff',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textDecoration: 'none',
                    opacity: 0.9
                  }}
                >
                  {l}
                </a>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
