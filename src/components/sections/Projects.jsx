import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    title: 'PrepSync',
    category: 'Full Stack',
    date: 'February 2025',
    description: 'A comprehensive Subject Management System featuring Role-Based Access Control (RBAC), targeted content delivery for students, faculty file uploads, and an analytics dashboard—all wrapped in a premium glassmorphic UI.',
    tech: ['React', 'Node.js', 'Express', 'SQLite', 'Multer', 'React Router'],
    color: '#a78bfa',
    github: 'https://github.com/hemanthnamagiri8978/Prepsync',
    demo: null,
    image: 'https://images.pexels.com/photos/3182782/pexels-photo-3182782.jpeg?auto=compress&cs=tinysrgb&w=800', // Real-Life Workspace for PrepSync
    gradient: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)'
  },
  {
    title: 'Student-Teacher Ratio Optimizer',
    category: 'Machine Learning',
    date: 'March 2025',
    description: 'Developed an ensemble ML system to optimize educational resources. Solved the problem of inequitable teacher distribution by predicting student needs with 92% accuracy across 500+ data points.',
    tech: ['Python', 'Random Forest', 'Gradient Boosting', 'K-Means', 'Pandas', 'NumPy'],
    color: '#64dfdf',
    github: 'https://github.com/hemanthnamagiri8978',
    demo: null,
    image: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800', // Real-Life Dev/ML environment
    gradient: 'linear-gradient(135deg, #0a192f 0%, #064e3b 100%)'
  },
  {
    title: 'Injury Prevention Advisor',
    category: 'Machine Learning',
    date: 'January 2025',
    description: 'An AI-driven predictive system designed to assess and mitigate physical injury risks. It utilizes machine learning algorithms to analyze health indicators and environmental factors, providing real-time risk assessments and proactive safety recommendations.',
    tech: ['Python', 'Flask', 'Sklearn', 'Predictive Modeling', 'IoT Integration'],
    color: '#9edefd',
    github: 'https://github.com/hemanthnamagiri8978/AI-Driven-System-For-predictive-Injury-Risk-Assessment',
    demo: null,
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800', // Real-Life Engineering/UI Design
    gradient: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)'
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="premium-container">
        {/* Section Heading - Centered */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '4rem' }}
        >
          <div className="badge-capsule" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>Featured Work</div>
          <h2 className="section-title">
            Developed <span className="aurora-text">Projects</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '600px', margin: '0 auto' }}>
            A selection of high-impact digital solutions, built with focus on scalability, performance, and exceptional experience.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '850px', margin: '0 auto' }}>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              whileHover={{ x: 5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'default',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 15px 40px rgba(0,0,0,0.5), 0 0 25px ${p.color}10`;
                e.currentTarget.style.borderColor = `${p.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)';
              }}
            >
              {/* Project Image Tile - Left/Top Side */}
              <div style={{
                width: '100%',
                height: '100%',
                minHeight: '200px',
                background: p.gradient,
                position: 'relative',
                overflow: 'hidden',
                borderRight: '1px solid rgba(255,255,255,0.06)'
              }}>
                <img 
                  src={p.image} 
                  alt={p.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.7,
                    filter: 'brightness(0.8) contrast(1.1)',
                    transition: 'transform 0.5s ease',
                    display: 'block'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)', pointerEvents: 'none' }} />
                
                <div style={{
                  position: 'absolute', inset: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'rgba(0,0,0,0.2)',
                  zIndex: 0
                }}>
                  <div style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Card Content - Compact padding */}
              <div style={{ padding: '1.5rem 1.8rem', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: `${p.color}15`,
                    border: `1px solid ${p.color}30`,
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: p.color,
                    letterSpacing: '0.5px'
                  }}>
                    {p.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--muted)', fontWeight: 600 }}>
                    {p.date}
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-h)',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '0.5rem',
                  lineHeight: 1.3
                }}>
                  {p.title}
                </h3>

                <p style={{
                  color: 'var(--muted)',
                  fontSize: '0.85rem',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem',
                  flexGrow: 1
                }}>
                  {p.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {p.tech.map(t => (
                    <span key={t} style={{
                      padding: '0.25rem 0.65rem',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      fontSize: '0.68rem',
                      fontWeight: 600,
                      color: 'var(--muted)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '0.8rem', marginTop: 'auto' }}>
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '0.55rem 1.2rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.15)',
                      background: 'transparent',
                      color: '#fff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      transition: 'all 0.25s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                  >
                    GitHub Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
