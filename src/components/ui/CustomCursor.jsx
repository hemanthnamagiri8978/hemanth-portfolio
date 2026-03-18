import React, { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dot   = useRef(null);
  const ring  = useRef(null);
  const pos   = useRef({ x: 0, y: 0 });
  const ring_ = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };
    window.addEventListener('mousemove', move);

    let raf;
    const loop = () => {
      ring_.current.x += (pos.current.x - ring_.current.x) * 0.12;
      ring_.current.y += (pos.current.y - ring_.current.y) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${ring_.current.x - 18}px, ${ring_.current.y - 18}px)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div ref={dot} style={{
        position: 'fixed', top: 0, left: 0, width: 8, height: 8,
        borderRadius: '50%', background: 'var(--accent-light)',
        zIndex: 10001, pointerEvents: 'none',
        boxShadow: '0 0 10px var(--accent-light)',
        transition: 'transform 0s',
      }} />
      <div ref={ring} style={{
        position: 'fixed', left: 0, top: 0,
        width: 40, height: 40,
        borderRadius: '50%', border: '1.5px solid var(--accent-light)',
        pointerEvents: 'none', zIndex: 9998, willChange: 'transform',
        opacity: 0.5,
      }} />
    </>
  );
};

export default CustomCursor;
