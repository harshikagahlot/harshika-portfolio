import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './sections/Hero';
import WhatIDo from './sections/WhatIDo';
import Projects from './sections/Projects';
import HowIThink from './sections/HowIThink';
import Growing from './sections/Growing';
import Footer from './sections/Footer';

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <div className="bg-background text-primary selection:bg-sage/30">
      <Hero />
      <WhatIDo />

      {/* EXACTLY ONE PROJECT COMPONENT RENDERED HERE */}
      <div id="featured-project">
        <Projects />
      </div>

      <div id="how-i-think">
        <HowIThink />
      </div>
      <div id="growing">
        <Growing />
      </div>
      <Footer />
    </div>
  );
}