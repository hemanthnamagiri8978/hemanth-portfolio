import React, { Suspense } from 'react';
import GlobalCanvas from './components/canvas/GlobalCanvas';
import CustomCursor from './components/ui/CustomCursor';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Training from './components/sections/Training';
import Achievements from './components/sections/Achievements';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <>
      {/* Animated WebGL background */}
      <Suspense fallback={null}>
        <GlobalCanvas />
      </Suspense>

      {/* Noise overlay for texture */}
      <div className="noise-overlay" />

      {/* Main scrollable content */}
      <div className="site-wrapper">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Training />
          <Achievements />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
