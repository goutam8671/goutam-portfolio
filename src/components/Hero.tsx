"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    );
  }, []);

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between px-6 max-w-6xl mx-auto pt-24 pb-12">
      {/* Top Status Bar */}
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
            Open for Full Stack, Python & AI/ML Roles
          </span>
        </div>
        <span className="text-xs font-mono text-neutral-600 hidden md:block">
          PUNE, MH — 18.5204° N, 73.8567° E
        </span>
      </div>

      {/* Main Editorial Typography */}
      <div ref={containerRef} className="my-auto py-12">
        <h1 className="text-6xl md:text-9xl font-extrabold text-white tracking-tighter leading-[0.9] mb-8">
          GOUTAM <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-500 to-neutral-700">
            VISHNOI.
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed">
          Computer Engineering Student & Engineer specializing as a <strong className="text-white font-normal">Full Stack Developer</strong>, <strong className="text-white font-normal">Python Developer</strong>, and <strong className="text-white font-normal">AI & ML / AI & DS Engineer</strong>.
        </p>
      </div>

      {/* Bottom Action Bar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10">
        <div className="flex gap-6 text-xs font-mono uppercase tracking-widest text-neutral-400">
          <a href="#projects" className="hover:text-white transition-colors">Featured Works ↓</a>
          <a href="#contact" className="hover:text-white transition-colors">Direct Contact ↓</a>
        </div>
        <a 
          href="#contact" 
          className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all"
        >
          Initialize Contact
        </a>
      </div>
    </section>
  );
}