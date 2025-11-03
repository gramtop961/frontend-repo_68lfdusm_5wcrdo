import React from 'react';

const panels = [
  {
    title: 'Chapter 1 — Foundations',
    text: 'Over 3+ years, I have blended graphic design with web experiences that feel clean, fast, and expressive.'
  },
  {
    title: 'Chapter 2 — The Tools',
    text: 'I build with WordPress, Shopify, Webflow, and Framer; I design with Adobe Photoshop and Illustrator.'
  },
  {
    title: 'Chapter 3 — The Style',
    text: 'Tall, modern type. Black, white, and neon accents. A tech-forward vibe with playful interactions.'
  },
  {
    title: 'Chapter 4 — The Mission',
    text: 'Turn ideas into bold visuals and interactive stories that convert and delight.'
  }
];

const MangaStory = () => {
  return (
    <section className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <h3 className="mb-10 text-center text-2xl sm:text-3xl font-extrabold" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif', color: '#39FF14' }}>read like a manga</h3>
        <div className="grid gap-6 md:gap-8">
          {panels.map((p, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-xl border-4 bg-white text-black shadow-[8px_8px_0_0_#000]" style={{ borderColor: '#111', boxShadow: '8px 8px 0 0 #111' }}>
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '10px 10px' }} />
              <div className="relative p-6 sm:p-8 md:p-10">
                <div className="mb-3 inline-block rounded px-2 py-1 text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: '#39FF14', color: '#000' }}>Panel {idx + 1}</div>
                <h4 className="text-xl sm:text-2xl font-extrabold" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>{p.title}</h4>
                <p className="mt-3 text-black/80 sm:text-lg">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MangaStory;
