import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Helper to get devicon URL
const iconUrl = (name) => `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}.svg`;

const SKILLS = [
  { name: 'Python', icon: iconUrl('python/python-original'), color: '#ffde57' },
  { name: 'C++', icon: iconUrl('cplusplus/cplusplus-original'), color: '#00599c' },
  { name: 'Java', icon: iconUrl('java/java-original'), color: '#f89820' },
  { name: 'C', icon: iconUrl('c/c-original'), color: '#a8b9cc' },
  { name: 'React', icon: iconUrl('react/react-original'), color: '#61dafb' },
  { name: 'FastAPI', icon: iconUrl('fastapi/fastapi-original'), color: '#009688' },
  { name: 'Flask', icon: iconUrl('flask/flask-original'), color: '#ffffff', filter: 'invert(1)' },
  { name: 'MySQL', icon: iconUrl('mysql/mysql-original'), color: '#4479a1' },
  { name: 'Pandas', icon: iconUrl('pandas/pandas-original'), color: '#150458', filter: 'invert(1)' },
  { name: 'NumPy', icon: iconUrl('numpy/numpy-original'), color: '#013243' },
  { name: 'Scikit-Learn', icon: iconUrl('scikitlearn/scikitlearn-original'), color: '#f7931e' },
  { name: 'Matplotlib', icon: iconUrl('matplotlib/matplotlib-original'), color: '#ffffff' },
  { name: 'GitHub', icon: iconUrl('github/github-original'), color: '#ffffff', filter: 'invert(1)' },
  { name: 'Machine Learning', isEmoji: true, icon: '🤖', color: '#a78bfa' },
  { name: 'Deep Learning', isEmoji: true, icon: '🧠', color: '#ff4b4b' },
  { name: 'Data Science', isEmoji: true, icon: '📊', color: '#38bdf8' },
  { name: 'DSA', isEmoji: true, icon: '🧩', color: '#fbbf24' },
  { name: 'DBMS', isEmoji: true, icon: '🗄️', color: '#10b981' },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="premium-container">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={inView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <div className="badge-capsule" style={{ marginBottom: '1rem' }}>Technical Arsenal</div>
          <h2 className="section-title" style={{ marginBottom: '0.8rem' }}>
            Technical <span className="aurora-text">Skills</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto' }} />
        </motion.div>

        {/* Dense Grid matching the reference screenshot proportions */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', 
          gap: '1rem',
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 15 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              whileHover={{ 
                y: -3, 
                borderColor: `${skill.color}80`, 
                boxShadow: `0 8px 20px ${skill.color}15`,
                background: 'rgba(255,255,255,0.06)' 
              }}
              style={{
                padding: '0.8rem 0.5rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                cursor: 'default',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {skill.isEmoji ? (
                  <span style={{ fontSize: '1.8rem', lineHeight: 1, filter: `drop-shadow(0 0 8px ${skill.color}50)` }}>
                    {skill.icon}
                  </span>
                ) : (
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    style={{ 
                      height: '100%', 
                      width: 'auto', 
                      objectFit: 'contain',
                      filter: skill.filter || 'none'
                    }} 
                  />
                )}
              </div>
              <div style={{
                fontFamily: 'var(--font-primary)',
                fontSize: '0.75rem',
                fontWeight: 600,
                color: 'var(--muted)',
                textAlign: 'center'
              }}>
                {skill.name}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
