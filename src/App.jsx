import React from 'react';
import Hero from './components/Hero';
import NameReveal from './components/NameReveal';
import MangaStory from './components/MangaStory';
import Finale from './components/Finale';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white text-center">
      {/* Header (simple centered mark) */}
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center py-4 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="rounded-full border px-3 py-1 text-xs tracking-widest" style={{ borderColor: '#39FF14', color: '#39FF14' }}>
          SD • portfolio
        </div>
      </header>

      <main>
        <Hero />
        <NameReveal />
        <MangaStory />
        <Finale />
      </main>

      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Suhel Dhimal — built with love, type, and neon.</p>
      </footer>
    </div>
  );
};

export default App;
