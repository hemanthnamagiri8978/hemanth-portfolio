import React from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
  const profile = {
    name: 'Namagiri Hemanth Kumar',
    focus: 'Machine Learning & Software Engineering',
    skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    location: 'Punjab, India',
    motto: 'Building intelligent systems'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="glass"
      style={{
        width: '100%',
        maxWidth: '500px',
        height: '350px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        border: '1px solid rgba(100, 223, 223, 0.1)'
      }}
    >
      <div style={{
        background: 'rgba(255,255,255,0.03)',
        padding: '0.8rem 1.2rem',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        borderBottom: '1px solid rgba(255,255,255,0.05)'
      }}>
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f56' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffbd2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#27c93f' }} />
        <span style={{ marginLeft: 'auto', fontSize: '0.65rem', color: 'var(--dim)', fontFamily: 'monospace' }}>Portfolio.ts</span>
      </div>
      
      <div style={{ 
        padding: '1.5rem', 
        fontFamily: 'monospace', 
        fontSize: '0.85rem', 
        lineHeight: 1.6,
        color: '#e0e0e0'
      }}>
        <div><span style={{ color: '#c678dd' }}>const</span> <span style={{ color: '#d19a66' }}>developer</span> = {'{'}</div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#98c379' }}>name</span>: <span style={{ color: '#61afef' }}>'Namagiri Hemanth Kumar'</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#98c379' }}>education</span>: <span style={{ color: '#61afef' }}>'LPU'</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#98c379' }}>focus</span>: <span style={{ color: '#61afef' }}>['Machine Learning', 'Software Engineering', 'Data Science']</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#98c379' }}>skills</span>: <span style={{ color: '#61afef' }}>['Python', 'Scikit-learn', 'Pandas', 'NumPy']</span>,
        </div>
        <div style={{ paddingLeft: '1.5rem' }}>
          <span style={{ color: '#98c379' }}>passion</span>: <span style={{ color: '#61afef' }}>'Deep Learning'</span>
        </div>
        <div>{'}'};</div>
        <div style={{ marginTop: '0.8rem' }}>
          <span style={{ color: '#d19a66' }}>developer</span>.<span style={{ color: '#61afef' }}>initialize</span>();
        </div>
        
        <motion.div 
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          style={{ width: 8, height: 16, background: 'var(--accent-light)', display: 'inline-block', verticalAlign: 'middle', marginLeft: '4px' }}
        />
      </div>
    </motion.div>
  );
};

export default Terminal;
