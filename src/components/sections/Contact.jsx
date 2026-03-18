import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const SOCIALS = [
  {
    label: 'LINKEDIN',
    value: 'linkedin.com/in/namagirihemanth51',
    href: 'https://linkedin.com/in/namagirihemanth51',
    color: '#3b82f6',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
  },
  {
    label: 'GITHUB',
    value: 'github.com/hemanthnamagiri8978',
    href: 'https://github.com/hemanthnamagiri8978',
    color: '#9ca3af',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
  },
  {
    label: 'EMAIL',
    value: 'hemanthnamagiri@gmail.com',
    href: 'mailto:hemanthnamagiri@gmail.com',
    color: '#f43f5e',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
  },
  {
    label: 'MOBILE',
    value: '+91 8978703315',
    href: 'tel:+918978703315',
    color: '#10b981',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
  },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    const templateParams = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
      title: "Portfolio Message"
    };

    try {
      // Using global emailjs from index.html injection
      const resp = await window.emailjs.send(
        "service_a1ynsgk",
        "template_1v7ub6l",
        templateParams
      );

      if (resp.status === 200) {
        setStatus('success');
        e.target.reset();

        // Automatically reset the form tile after 8 seconds
        setTimeout(() => {
          setStatus(null);
        }, 8000);
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error("EmailJS Failure:", err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ paddingBottom: '6rem' }}>
      <div className="premium-container" style={{ maxWidth: '1000px' }}>

        {/* Main Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontFamily: 'var(--font-h)', fontSize: '3rem', fontWeight: 800, color: '#fff', marginBottom: '0.8rem' }}>
            Get in <span className="aurora-text">Touch</span>
          </h2>
          <div style={{ width: '50px', height: '3px', background: 'var(--accent-light)', borderRadius: '10px', margin: '0 auto 1.5rem' }} />
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Have an exciting project, job opportunity, or just want to say hi? I'd love to hear from you!
          </p>
        </motion.div>

        {/* Responsive Grid: Stacks on mobile */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'stretch'
        }}>

          {/* Left Column: Heading + Tiles */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
              fontFamily: 'var(--font-h)',
              fontSize: '1.25rem',
              color: '#fff',
              marginBottom: '1.5rem',
              fontWeight: 700,
              minHeight: '1.5rem'
            }}>
              Reach me on
            </h3>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', flex: 1 }}
            >
              {SOCIALS.map((s) => (
                <div
                  key={s.label}
                  style={{ flex: 1, display: 'flex' }}
                >
                  <motion.a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 6, backgroundColor: 'rgba(255,255,255,0.04)', borderColor: `${s.color}40` }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '1.1rem 1.4rem',
                      borderRadius: '12px',
                      background: 'rgba(255,255,255,0.015)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      flex: 1
                    }}
                  >
                    <div style={{ color: s.color, marginRight: '1rem', display: 'flex' }}>{s.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '0.2rem' }}>{s.label}</div>
                      <div style={{ fontSize: '0.88rem', color: '#fff', fontWeight: 600 }}>{s.value}</div>
                    </div>
                    <div style={{ color: 'var(--muted)', opacity: 0.5 }}>→</div>
                  </motion.a>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Heading + Form Card */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{
              fontFamily: 'var(--font-h)',
              fontSize: '1.25rem',
              color: '#fff',
              marginBottom: '1.5rem',
              fontWeight: 700,
              minHeight: '1.5rem'
            }}>
              Send a Message
            </h3>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              {status === 'success' ? (
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>✅</div>
                  <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>Successfully Sent</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--muted)', marginBottom: '1.2rem' }}>Your message has been delivered directly to my inbox.</p>
                  <button onClick={() => setStatus(null)} style={{ background: 'none', border: 'none', color: 'var(--accent-light)', cursor: 'pointer', fontWeight: 700 }}>New Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem', letterSpacing: '1px' }}>YOUR NAME</label>
                    <input type="text" name="name" required placeholder="Your Name" style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem', letterSpacing: '1px' }}>YOUR EMAIL</label>
                    <input type="email" name="email" required placeholder="Your Email" style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem', outline: 'none' }} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '0.5rem', letterSpacing: '1px' }}>MESSAGE</label>
                    <textarea name="message" required placeholder="Your Message" rows="3" style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', color: '#fff', fontSize: '0.85rem', outline: 'none', resize: 'none' }}></textarea>
                  </div>
                  <button type="submit" disabled={status === 'sending'} style={{ width: '100%', padding: '0.9rem', background: 'linear-gradient(90deg, #64dfdf, #4a69bd)', color: '#000', fontWeight: 800, border: 'none', borderRadius: '8px', cursor: 'pointer', fontSize: '0.85rem', marginTop: '0.5rem' }}>
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
              {status === 'error' && (
                <p style={{ color: '#f43f5e', fontSize: '0.75rem', marginTop: '1rem', textAlign: 'center' }}>Network error. Please check your connectivity.</p>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
