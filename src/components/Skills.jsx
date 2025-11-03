import React from 'react';
import { Brush, LayoutPanelTop, ShoppingBag, Globe, Wand2, Image } from 'lucide-react';

const skills = [
  { name: 'WordPress', icon: Globe },
  { name: 'Shopify', icon: ShoppingBag },
  { name: 'Webflow', icon: LayoutPanelTop },
  { name: 'Framer', icon: Wand2 },
  { name: 'Photoshop', icon: Image },
  { name: 'Illustrator', icon: Brush },
];

const Skills = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>Tools & Platforms</h2>
            <p className="mt-2 text-white/80">I design and build with a battle‑tested stack for speed and precision.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {skills.map(({ name, icon: Icon }) => (
            <div key={name} className="group rounded-lg border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-4 text-center transition hover:border-emerald-400/60">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-md bg-emerald-500/20 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
