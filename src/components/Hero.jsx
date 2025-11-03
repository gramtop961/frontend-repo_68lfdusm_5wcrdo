import React from 'react';
import Spline from '@splinetool/react-spline';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays for depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-20">
        <div className="max-w-3xl">
          <span className="inline-flex items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs tracking-widest uppercase text-emerald-400">Portfolio</span>
          <h1 className="mt-6 font-extrabold leading-[1.05] text-white" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
            <span className="block text-4xl sm:text-5xl md:text-6xl">Suhel Dhimal</span>
            <span className="mt-2 block bg-gradient-to-r from-emerald-300 to-emerald-500 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl">Graphic & Web Designer</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-white/80">
            3+ years crafting modern brands and interactive websites — blending clean typography with playful, tech-forward visuals. I build with WordPress, Shopify, Webflow, Framer, and design in Adobe Photoshop & Illustrator.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-md bg-emerald-500 px-5 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              Let's collaborate
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <div className="flex flex-wrap items-center gap-5 text-sm text-white/80">
              <a href="mailto:suheldhimal104@gmail.com" className="inline-flex items-center gap-2 hover:text-emerald-300">
                <Mail className="h-4 w-4 text-emerald-400" /> suheldhimal104@gmail.com
              </a>
              <a href="tel:07570731114" className="inline-flex items-center gap-2 hover:text-emerald-300">
                <Phone className="h-4 w-4 text-emerald-400" /> 07570731114
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-2 text-sm text-white/70">
            <MapPin className="mt-0.5 h-4 w-4 text-emerald-400" />
            <span>33b Eastcote Lane, Northolt, Middlesex UB5 5R</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
