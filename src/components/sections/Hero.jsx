import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Terminal from '../ui/Terminal';

const Hero = () => {
  const focusBadgeRef = useRef(null);
  const inView = useInView(focusBadgeRef, { once: true, margin: '-80px' });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2 + i * 0.15, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  const socialLinks = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
        </svg>
      ),
      url: 'https://github.com/hemanthnamagiri8978'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
      url: 'https://linkedin.com/in/namagirihemanth51'
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
      ),
      url: 'mailto:hemanthnamagiri@gmail.com'
    }
  ];

  return (
    <section id="home" className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: 'var(--nav-h)', overflow: 'hidden', position: 'relative' }}>
      {/* Background Decorative Elements */}
      <div style={{ position: 'absolute', top: '15%', left: '10%', width: '4px', height: '4px', background: 'var(--accent-light)', borderRadius: '50%', filter: 'blur(2px)', boxShadow: '0 0 15px var(--accent-light)', opacity: 0.6 }} />
      <div style={{ position: 'absolute', top: '40%', right: '15%', width: '3px', height: '3px', background: 'var(--accent-light)', borderRadius: '50%', filter: 'blur(1px)', boxShadow: '0 0 10px var(--accent-light)', opacity: 0.4 }} />
      <div style={{ position: 'absolute', bottom: '20%', left: '40%', width: '5px', height: '5px', background: 'var(--accent-light)', borderRadius: '50%', filter: 'blur(3px)', boxShadow: '0 0 20px var(--accent-light)', opacity: 0.5 }} />

      <div className="premium-container hero-grid" style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        paddingTop: '2rem',
        paddingBottom: '2rem'
      }}>

        {/* Left Side: Text & CTAs */}
        <div className="hero-text-content" style={{ position: 'relative', zIndex: 10 }}>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="badge-capsule" style={{ letterSpacing: '2px', textTransform: 'uppercase' }}>
            Data • Models • Insights
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            style={{ fontFamily: 'var(--font-h)', fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: 900, lineHeight: 1.05, letterSpacing: '-1px', marginBottom: '1.5rem' }}>
            <span style={{ color: '#fff' }}>Building Models</span> <br />
            <span className="aurora-text" style={{ fontStyle: 'italic', paddingRight: '10px', display: 'inline-block' }}>That Learn,</span> <br />
            <span style={{ color: '#fff' }}>Solving Problems That Matter</span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            style={{ fontSize: '1.05rem', color: 'var(--muted)', lineHeight: 1.8, maxWidth: '560px', marginBottom: '2.5rem' }}>
            I'm <span style={{ color: 'var(--text)', fontWeight: 700 }}>Namagiri Hemanth Kumar</span>, a CS student at LPU who builds ML models, writes clean code and turns raw data into meaningful insights. Passionate about Deep Learning, Data Science and creating software that solves real problems.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="hero-actions" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Download Resume Button */}
            <motion.a 
              href="https://drive.google.com/file/d/1-nsGg2MEbU-5AVTwPjzc_cJBbCiHpr5l/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ padding: '0.8rem 1.8rem', fontSize: '0.85rem' }}
            >
              Download CV
            </motion.a>

            {/* Social Links Stack */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {socialLinks.map((s, idx) => (
                <motion.a
                  key={idx}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="glass"
                  whileHover={{ y: -5, background: 'rgba(100, 223, 223, 0.1)', borderColor: 'rgba(100, 223, 223, 0.3)' }}
                  style={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    borderRadius: '12px'
                  }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Side: Terminal & Profile */}
        <div style={{ position: 'relative', paddingTop: '75px' }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: '140%', height: '140%', background: 'radial-gradient(circle, rgba(100,223,223,0.12) 0%, transparent 70%)',
            zIndex: -1, pointerEvents: 'none', filter: 'blur(40px)'
          }} />

          {/* Stunning Profile Frame - Clean & Integrated Style */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="hero-profile-frame"
            style={{
              position: 'absolute',
              top: '-40px',
              right: '25px',
              zIndex: 20,
              padding: '0px',
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(30px)',
              borderRadius: '24px',
              border: 'none',
              boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 35px rgba(100, 223, 223, 0.25)',
              cursor: 'pointer'
            }}
          >
            <div style={{
              width: '150px',
              height: '150px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.12)',
              position: 'relative'
            }}>
              <img
                src="/profile.jpg"
                alt="Namagiri Hemanth Kumar"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(1.05) contrast(1.05)' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)', pointerEvents: 'none' }} />
            </div>
          </motion.div>

          <Terminal />

          <motion.div
            ref={focusBadgeRef}
            className="hero-focus-badge"
            initial={{ opacity: 0, x: 20 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.8 }}
            style={{
              position: 'absolute', bottom: '-15px', right: '-15px',
              padding: '0.8rem 1.2rem', background: 'rgba(5,5,5,0.95)',
              border: '1px solid rgba(100, 223, 223, 0.4)', borderRadius: '14px',
              backdropFilter: 'blur(10px)', zIndex: 10,
              boxShadow: '0 10px 40px rgba(0,0,0,0.7)'
            }}
          >
            <div style={{ fontSize: '0.6rem', color: 'var(--accent-light)', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>Current Focus</div>
            <div style={{ fontSize: '0.85rem', color: '#fff', fontWeight: 600 }}>Deep Learning Architectures</div>
          </motion.div>
        </div>

      </div>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', opacity: 0.5 }}
      >
        <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--muted)' }}>Scroll Discover</div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent-light), transparent)' }} />
      </motion.div>
    </section>
  );
};

export default Hero;
