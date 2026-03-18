import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EDUCATION = [
  {
    level: 'B.Tech Computer Science & Engineering',
    institution: 'Lovely Professional University, Punjab',
    period: 'Aug 2023 — Present',
    score: 'CGPA: 7.5',
    scoreColor: '#64dfdf',
    description: 'Pursuing specialized coursework in Machine Learning, Data Structures, Algorithms, and Software Engineering. Actively engaged in research, building ML systems, and participating in hackathons.',
    icon: '🎓'
  },
  {
    level: 'Intermediate (Class XII)',
    institution: 'Sri Chaitanya Junior College, Visakhapatnam',
    period: '2021 — 2023',
    score: '84%',
    scoreColor: '#9edefd',
    description: 'Completed senior secondary education with a focus on Mathematics, Physics, and Chemistry. Developed strong fundamentals in analytical skills and problem solving.',
    icon: '📘'
  },
  {
    level: 'Matriculation (Class X)',
    institution: 'Sri Chaitanya Techno School, Visakhapatnam',
    period: '2020 — 2021',
    score: '92%',
    scoreColor: '#a78bfa',
    description: 'Completed secondary education with distinction. Built a strong foundation in Mathematics and Sciences that laid the groundwork for a career in technology.',
    icon: '📖'
  }
];

const Education = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="education" className="section" ref={ref}>
      <div className="premium-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3.5rem' }}
        >
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            Education <span className="aurora-text">Timeline</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto' }} />
        </motion.div>

        {/* Vertical Timeline */}
        <div style={{ position: 'relative', maxWidth: '700px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div style={{
            position: 'absolute',
            left: '24px',
            top: '10px',
            bottom: '10px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-light), rgba(100,223,223,0.1))',
            borderRadius: '10px'
          }} />

          {EDUCATION.map((edu, i) => (
            <motion.div
              key={edu.level}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.15 }}
              style={{
                position: 'relative',
                paddingLeft: '65px',
                marginBottom: i < EDUCATION.length - 1 ? '2.5rem' : '0'
              }}
            >
              {/* Timeline Node */}
              <div style={{
                position: 'absolute',
                left: '12px',
                top: '8px',
                width: '26px',
                height: '26px',
                borderRadius: '50%',
                background: 'rgba(5,5,5,0.95)',
                border: `2px solid ${edu.scoreColor}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.75rem',
                zIndex: 2,
                boxShadow: `0 0 15px ${edu.scoreColor}30`
              }}>
                {edu.icon}
              </div>

              {/* Card */}
              <motion.div
                whileHover={{ y: -4, borderColor: `${edu.scoreColor}50`, boxShadow: `0 15px 40px ${edu.scoreColor}10` }}
                style={{
                  padding: '1.5rem 1.8rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                {/* Header row: level + period */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <h3 style={{ fontFamily: 'var(--font-h)', fontWeight: 800, fontSize: '1.05rem', color: '#fff', margin: 0 }}>
                    {edu.level}
                  </h3>
                  <span style={{
                    fontSize: '0.7rem',
                    color: 'var(--muted)',
                    padding: '0.25rem 0.7rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '20px',
                    whiteSpace: 'nowrap',
                    fontWeight: 600
                  }}>
                    {edu.period}
                  </span>
                </div>

                {/* Institution & Score */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                  <div style={{ fontSize: '0.82rem', color: edu.scoreColor, fontWeight: 600 }}>
                    {edu.institution}
                  </div>
                  {edu.score && edu.score.includes('%') && (
                    <div style={{
                      fontSize: '0.75rem',
                      color: edu.scoreColor,
                      padding: '0.2rem 0.6rem',
                      background: `${edu.scoreColor}15`,
                      border: `1px solid ${edu.scoreColor}30`,
                      borderRadius: '10px',
                      fontWeight: 700,
                      letterSpacing: '0.5px'
                    }}>
                      {edu.score}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p style={{ fontSize: '0.83rem', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>
                  {edu.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
