import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ fontFamily: 'Manrope, Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>Get in touch</h2>
          <p className="mt-3 text-white/80">Have a project in mind or need a fresh visual identity? I'm available for freelance and collaborations.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <a href="mailto:suheldhimal104@gmail.com" className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 hover:border-emerald-400/60 transition">
            <div className="flex items-center gap-3 text-emerald-300">
              <Mail className="h-5 w-5" />
              <span className="font-semibold">Email</span>
            </div>
            <p className="mt-2 text-white">suheldhimal104@gmail.com</p>
          </a>

          <a href="tel:07570731114" className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6 hover:border-emerald-400/60 transition">
            <div className="flex items-center gap-3 text-emerald-300">
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Phone</span>
            </div>
            <p className="mt-2 text-white">07570731114</p>
          </a>

          <div className="rounded-xl border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent p-6">
            <div className="flex items-center gap-3 text-emerald-300">
              <MapPin className="h-5 w-5" />
              <span className="font-semibold">Address</span>
            </div>
            <p className="mt-2 text-white">33b Eastcote Lane, Northolt, Middlesex UB5 5R</p>
          </div>
        </div>

        <div className="mt-12">
          <a href="#" className="inline-flex items-center rounded-md border border-emerald-400/60 bg-emerald-500/10 px-5 py-3 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20">
            Request portfolio PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
