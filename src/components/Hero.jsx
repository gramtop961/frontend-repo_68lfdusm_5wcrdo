import React from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center text-center">
      {/* Spline Animation */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/a6HhFsV3-DN9Z-yP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft vignette to enhance contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Centered content */}
      <div className="relative z-10 px-6">
        <h1 className="mx-auto max-w-3xl font-extrabold leading-tight" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
          <span className="block text-4xl sm:text-5xl md:text-6xl" style={{ color: '#39FF14' }}>ohh hey there!!</span>
        </h1>
        <p className="mt-4 text-white/80 max-w-xl mx-auto">Welcome to a playful, modern portfolio. Scroll to begin the story.</p>
      </div>

      {/* Scroll indicator */}
      <a href="#name" className="absolute bottom-6 left-1/2 -translate-x-1/2 inline-flex flex-col items-center text-white/80 hover:text-white">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="mt-1 h-6 w-6" style={{ color: '#39FF14' }} />
        <div className="mt-2 h-10 w-px bg-white/20" />
      </a>
    </section>
  );
};

export default Hero;
