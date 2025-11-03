import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-extrabold tracking-tight text-white" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
            SD<span className="text-emerald-400">.</span>
          </a>
          <nav className="hidden gap-6 text-sm text-white/80 md:flex">
            <a href="#about" className="hover:text-emerald-300">About</a>
            <a href="#skills" className="hover:text-emerald-300">Skills</a>
            <a href="#contact" className="hover:text-emerald-300">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Sections */}
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-8 text-center text-sm text-white/60">
        <p>
          © {new Date().getFullYear()} Suhel Dhimal — Portfolio. Built with a modern, tech-forward aesthetic.
        </p>
      </footer>
    </div>
  );
};

export default App;
