import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

// Simple interactive character that follows the mouse and waves goodbye
const InteractiveCharacter = () => {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.8 });
  const y = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.8 });

  // Eye tracking relative transforms
  const eyeX = useTransform(mouseX, (v) => (v - (containerRef.current?.clientWidth || 0) / 2) / 50);
  const eyeY = useTransform(mouseY, (v) => (v - (containerRef.current?.clientHeight || 0) / 2) / 50);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const rect = () => el.getBoundingClientRect();
    const onMove = (e) => {
      const r = rect();
      const mx = e.clientX - (r.left + r.width / 2);
      const my = e.clientY - (r.top + r.height / 2);
      mouseX.set(mx);
      mouseY.set(my);
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="relative mx-auto flex h-[60vh] w-full max-w-4xl items-center justify-center">
      {/* Background farewell text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <p className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold opacity-10" style={{ color: '#39FF14', fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
          see ya!! — hope we work together
        </p>
      </div>

      {/* Character */}
      <motion.div style={{ x, y }} className="relative">
        <div className="relative mx-auto flex h-40 w-40 items-center justify-center rounded-full border-4 bg-white" style={{ borderColor: '#39FF14' }}>
          {/* Eyes */}
          <div className="absolute left-1/2 top-1/2 grid w-[70%] -translate-x-1/2 -translate-y-1/2 grid-cols-2 gap-6">
            <motion.span style={{ x: eyeX, y: eyeY }} className="h-6 w-6 rounded-full bg-black" />
            <motion.span style={{ x: eyeX, y: eyeY }} className="h-6 w-6 rounded-full bg-black" />
          </div>
          {/* Smile */}
          <div className="absolute bottom-8 left-1/2 h-3 w-16 -translate-x-1/2 rounded-b-full border-b-4 border-black" />
          {/* Waving hand */}
          <motion.div
            className="absolute -right-6 -top-6 h-12 w-12 origin-bottom-right rounded-full"
            animate={{ rotate: [0, 20, 0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full border-4 bg-white text-2xl" style={{ borderColor: '#39FF14' }}>👋</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

const Finale = () => {
  return (
    <section id="finale" className="relative w-full bg-black py-28 text-white text-center">
      <div className="mx-auto max-w-3xl px-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
          thats the end of the scroll.
        </h3>
        <p className="mt-3 text-white/80">thanks for reading my story.</p>
      </div>
      <div className="mt-10">
        <InteractiveCharacter />
      </div>
    </section>
  );
};

export default Finale;
