import React from 'react';

const NameReveal = () => {
  return (
    <section id="name" className="relative min-h-screen w-full bg-black text-white flex items-center justify-center text-center px-6">
      <div>
        <h2 className="font-extrabold leading-tight" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
          <span className="block text-3xl sm:text-4xl md:text-5xl">my name is</span>
          <span className="mt-2 block text-4xl sm:text-5xl md:text-6xl" style={{ color: '#39FF14' }}>suhel dhimal</span>
          <span className="mt-4 block text-xl sm:text-2xl md:text-3xl text-white/80">but you can call me <span style={{ color: '#39FF14' }}>soil</span>.</span>
        </h2>
      </div>
    </section>
  );
};

export default NameReveal;
