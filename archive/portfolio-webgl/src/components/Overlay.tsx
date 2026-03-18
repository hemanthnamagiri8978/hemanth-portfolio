export default function Overlay() {
  return (
    <div className="overlay-container">
      
      {/* HEADER */}
      <header className="header">
        <div className="header-left">
          <div className="header-logo-cube">{'<>'}</div>
          Hemanth
        </div>
        <div className="header-right">
          <button className="btn-contact">GET IN TOUCH</button>
          <div className="sound-toggle">
            {/* Simple speaker icon placeholder */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
            </svg>
          </div>
        </div>
      </header>

      {/* PAGE 1: Hero Section */}
      <section className="section" style={{ pointerEvents: 'none' }}>
        <div className="overlay-content">
          <div className="hero-title" style={{ color: '#2D2D2D' }}>
            <div>Hemanth</div>
            <div className="hero-subtitle-wrapper">
              <div className="hero-subtitle">
                <span className="hero-subtitle-inner">WEB DEVELOPER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <div className="scroll-text">Scroll</div>
        </div>
      </section>

      {/* PAGE 2: Education / Skills Section (Technical Zone) */}
      <section className="section-skills">
        <div className="content">
          <h2>Education &<br/>Skills</h2>
          <p>
            I'm a passionate web developer specializing in immersive 3D experiences. 
            I build high-performance applications using React, Three.js, and modern WebGL techniques to bring creative visions to life.
          </p>
          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', pointerEvents: 'auto' }}>
            {['React', 'Three.js', 'TypeScript', 'Node.js', 'WebGL', 'GSAP'].map((skill) => (
              <span key={skill} style={{ 
                background: 'rgba(255,255,255,0.1)', 
                color: 'white', 
                padding: '0.5rem 1rem', 
                borderRadius: '50px',
                fontWeight: 700,
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PAGE 3: Projects Section (Minimalist Zone) */}
      <section className="section-projects">
        <h2>Selected Work</h2>
        <div className="projects-grid">
          {/* Project 1 */}
          <div className="project-card">
            <div className="project-tag">2026</div>
            <h3>E-Commerce 3D</h3>
            <p>Interactive product visualization for global brands.</p>
          </div>
          {/* Project 2 */}
          <div className="project-card">
            <div className="project-tag">2025</div>
            <h3>Portfolio V2</h3>
            <p>A WebGL driven portfolio experience.</p>
          </div>
          {/* Project 3 */}
          <div className="project-card">
            <div className="project-tag">2025</div>
            <h3>SaaS Dashboard</h3>
            <p>Real-time analytics and data visualization.</p>
          </div>
          {/* Project 4 */}
          <div className="project-card">
            <div className="project-tag">2024</div>
            <h3>Web App</h3>
            <p>Fullstack application with React and Node.</p>
          </div>
        </div>
      </section>

      {/* PAGE 4: Contact Section */}
      <section className="section-contact">
        <div className="content">
          <h2>Let's Talk</h2>
          <button className="btn-contact" style={{ fontSize: '1.5rem', padding: '1.2rem 3rem' }}>
            GET IN TOUCH
          </button>
        </div>

        <footer className="footer">
          <div className="footer-text">
            © {new Date().getFullYear()} Hemanth. All rights reserved.
          </div>
          <div className="social-links">
            <a href="#">EMAIL</a>
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
            <a href="#">X</a>
          </div>
        </footer>
      </section>

    </div>
  );
}
