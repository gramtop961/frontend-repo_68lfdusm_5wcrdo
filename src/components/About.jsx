import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
            Integrative design with a modern edge
          </h2>
          <p className="mt-4 max-w-3xl text-white/80">
            I create brand systems and websites that feel alive: clean layouts, tall modern type, and bold neon accents. From concept to delivery, I shape experiences that are fast, accessible, and visually striking.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
            <p className="text-emerald-300 text-sm">Core Focus</p>
            <h3 className="mt-2 text-xl font-semibold">Graphic & Web Design</h3>
            <p className="mt-2 text-white/80">Design systems, brand visuals, and responsive interfaces with consistent typography and motion.</p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
            <p className="text-emerald-300 text-sm">Experience</p>
            <h3 className="mt-2 text-xl font-semibold">3+ Years</h3>
            <p className="mt-2 text-white/80">Delivering projects for businesses and personal brands with attention to detail and usability.</p>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
            <p className="text-emerald-300 text-sm">Approach</p>
            <h3 className="mt-2 text-xl font-semibold">Integrative & Playful</h3>
            <p className="mt-2 text-white/80">Balance clarity and character — modern, tech-forward, and interactive without the clutter.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
