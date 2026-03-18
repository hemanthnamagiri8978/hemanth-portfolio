import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fade = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] } }),
};

const Section = ({ id, children, ...rest }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.section ref={ref} id={id} className="section" initial="hidden" animate={inView ? 'visible' : 'hidden'} {...rest}>
      {children}
    </motion.section>
  );
};

const INFO_CARDS = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
    title: 'Phagwara, Punjab',
    sub: 'Active Student',
    color: '#f87171'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>,
    title: 'ML & Data Science',
    sub: 'Deep Learning & AI',
    color: '#a78bfa'
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>,
    title: 'ML Engineer',
    sub: 'Python · Scikit-learn · Pandas',
    color: '#38bdf8'
  },
];

export const About = () => {
  return (
    <Section id="about">
      <div className="premium-container">
        {/* Section Heading */}
        <motion.div variants={fade} custom={0} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            About <span className="aurora-text">Me</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>

          {/* Top: Formal Education Card (Reference Match) */}
          <motion.div
            variants={fade}
            custom={1}
            whileHover={{ y: -5 }}
            style={{
              padding: '2.5rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: '24px',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.2rem' }}>
              <h3 className="education-card-title" style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', margin: 0 }}>B.Tech Computer Science & Engineering </h3>
              <div style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '50px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--muted)',
                fontSize: '0.8rem',
                fontWeight: 600
              }}>
                Aug 2023 — Present
              </div>
            </div>

            <h4 style={{ color: '#64dfdf', fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem', margin: 0 }}>
              Lovely Professional University, Punjab
            </h4>



            {/* Glowing accent orb */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, rgba(100,223,223,0.1) 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none'
            }} />
          </motion.div>

          {/* Bottom Grid: Bio + Info Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}>
            {/* Bio Text */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <motion.p variants={fade} custom={2} style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>
                Hi! I'm <span style={{ color: '#fff', fontWeight: 800 }}>Namagiri Hemanth Kumar</span>, a CS undergraduate passionate about one question — how do machines learn?
              </motion.p>
              <motion.p variants={fade} custom={3} style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>
                That question led me to build an ensemble ML system that optimizes educational resource allocation and a biometric pipeline that detects injury risk from real-time workout data.
              </motion.p>
              <motion.p variants={fade} custom={4} style={{ color: 'var(--muted)', lineHeight: 1.8, fontSize: '1rem', margin: 0 }}>
                I specialize in <span style={{ color: 'var(--accent-light)', fontWeight: 800 }}>Machine Learning, Deep Learning and Data Science</span>, focused on building intelligent end-to-end pipelines that turn complex data into production-ready solutions.
              </motion.p>
            </div>

            {/* Minor Info Tiles */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              {INFO_CARDS.map((card, i) => (
                <motion.div
                  key={card.title}
                  variants={fade}
                  custom={4 + i * 0.1}
                  whileHover={{ x: 5, background: 'rgba(255,255,255,0.04)' }}
                  style={{
                    padding: '1rem 1.2rem',
                    background: 'rgba(255,255,255,0.015)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ color: card.color, display: 'flex' }}>{card.icon}</div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '0.9rem', color: '#fff' }}>{card.title}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>{card.sub}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
};
export default About;
