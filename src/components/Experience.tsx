"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Experience() {
  const sectionRef = useRef(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    itemsRef.current.forEach((item) => {
      if (!item) return;
      gsap.fromTo(item,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
          }
        }
      );
    });
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto relative">
      <div className="absolute right-10 top-20 font-mono text-neutral-800 text-xs md:text-sm select-none pointer-events-none opacity-40 leading-relaxed text-right">
        <span>lim(n &rarr; &infin;) [Architecture / Latency] = Scale</span> <br />
        <span>f(x) = FullStack + Python + AI/ML</span>
      </div>

      <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-20">
        04 // Career Story & Milestones
      </h2>
      
      <div className="space-y-16 border-l border-white/10 ml-3 pl-8 relative">
        
        <div ref={(el) => { itemsRef.current[0] = el; }} className="relative group">
          <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-[#030303] border-2 border-white/40 group-hover:border-white transition-colors"></div>
          <h3 className="text-xl font-bold text-neutral-200 tracking-tight">
            Campus Mantri <span className="text-neutral-400 font-normal">@ GeeksforGeeks</span>
          </h3>
          <p className="text-neutral-500 font-mono text-xs mt-1 mb-4 uppercase tracking-wider">Jan 2026 – May 2026 | Pune, Maharashtra</p>
          <p className="text-neutral-400 font-light leading-relaxed">
            Acting as the core technical liaison, driving developer ecosystems, technical workshops, and high-impact coding culture across the institution.
          </p>
        </div>

        <div ref={(el) => { itemsRef.current[1] = el; }} className="relative group">
          <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-[#030303] border-2 border-white/20 group-hover:border-white transition-colors"></div>
          <h3 className="text-xl font-bold text-neutral-200 tracking-tight">
            Bachelor of Engineering in Computer Engineering
          </h3>
          <p className="text-neutral-500 font-mono text-xs mt-1 mb-4 uppercase tracking-wider">Sep 2025 – 2029 | Dhole Patil College of Engineering</p>
          <p className="text-neutral-400 font-light leading-relaxed">
            Specializing in core data structures, algorithms, advanced web frameworks, and artificial intelligence architectures.
          </p>
        </div>
        
        <div ref={(el) => { itemsRef.current[2] = el; }} className="relative group">
          <div className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full bg-[#030303] border-2 border-white/20 group-hover:border-white transition-colors"></div>
          <h3 className="text-xl font-bold text-neutral-200 tracking-tight">
            Academic Foundation & Engineering Prep
          </h3>
          <p className="text-neutral-500 font-mono text-xs mt-1 mb-4 uppercase tracking-wider">HSC (80.67%) & SSC (82.40%)</p>
          <p className="text-neutral-400 font-light leading-relaxed">
            Completed rigorous foundational training at Jai Hind Junior College and Siddheshwar English Medium School, building a strong base for computer science.
          </p>
        </div>

      </div>
    </section>
  );
}