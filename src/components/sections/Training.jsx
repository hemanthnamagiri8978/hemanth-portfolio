import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CERTIFICATIONS = [
  {
    vendor: 'CSE PATHSHALA',
    title: 'C Programming Language',
    description: 'Mastered advanced memory management, pointer arithmetic, and complex data structure implementations through intensive live sessions.',
    color: '#64dfdf',
    link: 'https://drive.google.com/file/d/1nqgb5Ig5V14PYCj1Fdjyq-cJOtyyDyrB/view',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="4 17 10 11 4 5"></polyline>
        <line x1="12" y1="19" x2="20" y2="19"></line>
      </svg>
    )
  },
  {
    vendor: 'CODE SPRINT',
    title: 'Ethical Hacking Industrial Training',
    description: 'Executed penetration testing simulations, conducted vulnerability assessments on web applications, and mastered network security monitoring.',
    color: '#38bdf8',
    link: 'https://drive.google.com/file/d/1_-GUpSwfEnVPJ-5QrtupOFG2HYysKBaT/view',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    )
  },
  {
    vendor: 'NPTEL',
    title: 'Privacy and Security in Social Media',
    description: 'Advanced certification on privacy frameworks, data protection policies, and security mechanisms in social networking platforms.',
    color: '#a78bfa',
    link: 'https://drive.google.com/file/d/1D9A38M-IoJ_2LN-YzvUb9ZIeXs_93WXQ/view',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
    )
  },
  {
    vendor: 'INFOSYS',
    title: 'Generative AI Apps & Solutions',
    description: 'Built production-ready GenAI applications using low-code/no-code stacks. Comprehensive training on Generative AI concepts, tools, and real-world applications.',
    color: '#f472b6',
    link: 'https://drive.google.com/file/d/1D2trn8SP4lk4oJnkKIJ7kQ7QnZIjQ5Ul/view',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
        <line x1="12" y1="22.08" x2="12" y2="12"></line>
      </svg>
    )
  },
  {
    vendor: 'INFOSYS',
    title: 'Computational Theory',
    description: 'Language Principle & Finite Automata Theory. Mastered theoretical foundation of computation and formal language principles.',
    color: '#fbbf24',
    link: 'https://drive.google.com/file/d/1aMhE8QBXcsSsQshcOFGY9NmYB_ERzgWO/view',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
      </svg>
    )
  }
];

const Training = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="training" className="section" ref={ref}>
      <div className="premium-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            Training and <span className="aurora-text">Certificates</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto' }} />
        </motion.div>

        {/* Certs Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              whileHover={{ x: 10, background: 'rgba(255,255,255,0.05)' }}
              style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: cert.link !== '#' ? 'pointer' : 'default'
              }}
              onClick={() => cert.link !== '#' && window.open(cert.link, '_blank')}
            >
              {/* Logo Area */}
              <div style={{
                background: `${cert.color}10`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                color: cert.color
              }}>
                <div style={{ filter: `drop-shadow(0 0 10px ${cert.color}40)` }}>
                  {cert.icon}
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{
                  fontSize: '0.65rem',
                  fontWeight: 800,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: cert.color,
                  marginBottom: '0.6rem'
                }}>
                  {cert.vendor}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-h)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  color: '#fff',
                  marginBottom: '0.4rem',
                }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  marginBottom: '1rem'
                }}>
                  {cert.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: cert.color,
                  opacity: 0.8
                }}>
                  View Credential ↗
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Training;
