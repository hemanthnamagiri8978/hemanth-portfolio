import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ACHIEVEMENTS = [
  { 
    title: 'Privacy and Security in Social Media', 
    detail: 'Advanced certification completed via NPTEL with distinction.', 
    icon: '🛡️', 
    badge: 'Certification',
    year: '2024',
    color: '#9edefd',
    bg: 'rgba(158, 222, 253, 0.1)'
  },
  { 
    title: 'Generative AI Apps & Solutions', 
    detail: 'Built production-ready GenAI apps using low-code/no-code stacks via Infosys.', 
    icon: '🤖', 
    badge: 'Training',
    year: '2025',
    color: '#f472b6',
    bg: 'rgba(244, 114, 182, 0.1)'
  },
  { 
    title: '4-Star Java Developer', 
    detail: 'Consistently high problem-solving ranking on HackerRank for Algorithm & Logic building.', 
    icon: '⭐', 
    badge: 'Coding',
    year: '2024',
    color: '#fbbf24',
    bg: 'rgba(251, 191, 36, 0.1)'
  },
  { 
    title: 'LeetCode Problem Solver — 100+ problems', 
    detail: 'Solved 100+ complex problems across DP, Graphs, and Greedy algorithms.', 
    icon: '💻', 
    badge: 'Algorithm', 
    year: '2024', 
    color: '#a78bfa', 
    bg: 'rgba(167, 139, 250, 0.1)' 
  },
];

const Achievements = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="achievements" className="section" ref={ref}>
      <div className="premium-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            Achieve<span className="aurora-text">ments</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '1.5rem' }}>
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              whileHover={{ y: -5, borderColor: `${a.color}50`, boxShadow: `0 15px 35px ${a.color}15` }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.2rem',
                padding: '1.5rem',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                cursor: 'default',
                transition: 'all 0.3s ease'
              }}
            >
              {/* Icon Container */}
              <div style={{
                width: '70px',
                height: '70px',
                borderRadius: '16px',
                background: a.bg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2.2rem',
                flexShrink: 0
              }}>
                {a.icon}
              </div>

              {/* Text Content */}
              <div>
                {/* Badges Row */}
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.6rem' }}>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: a.bg,
                    border: `1px solid ${a.color}30`,
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: a.color,
                    letterSpacing: '0.5px'
                  }}>
                    {a.badge}
                  </span>
                  <span style={{
                    padding: '0.2rem 0.6rem',
                    borderRadius: '6px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: 'var(--muted)'
                  }}>
                    {a.year}
                  </span>
                </div>

                {/* Title and Detail */}
                <h3 style={{
                  fontFamily: 'var(--font-h)',
                  fontSize: '1.1rem',
                  fontWeight: 800,
                  color: '#fff',
                  marginBottom: '0.4rem',
                  lineHeight: 1.3
                }}>
                  {a.title}
                </h3>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--muted)',
                  lineHeight: 1.6,
                  margin: 0
                }}>
                  {a.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
