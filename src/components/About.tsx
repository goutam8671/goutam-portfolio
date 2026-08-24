"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(bgTextRef.current, {
      x: 200,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });

    gsap.fromTo(contentRef.current, 
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power3.out", 
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        }
      }
    );
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 max-w-5xl mx-auto overflow-hidden relative">
      <div
        ref={bgTextRef}
        className="absolute top-10 left-[-10%] text-[120px] md:text-[180px] font-extrabold whitespace-nowrap z-0 pointer-events-none select-none tracking-tighter"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(255, 255, 255, 0.03)" }}
      >
        ABOUT GOUTAM
      </div>

      <div ref={contentRef} className="relative z-10 mt-12 bg-[#080808]/80 backdrop-blur-2xl p-10 md:p-14 rounded-3xl border border-white/10 shadow-2xl">
        <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-8">
          01 // Professional Profile
        </h2>
        <div className="text-neutral-300 leading-relaxed space-y-6 text-lg md:text-xl font-light">
          <p>
            I am a Computer Engineering student at Dhole Patil College of Engineering in Pune, specializing as a <strong className="text-white font-normal">Full Stack Web Developer</strong>, <strong className="text-white font-normal">Python Developer</strong>, and <strong className="text-white font-normal">AI & ML / AI & DS Engineer</strong>.
          </p>
          <p>
            My engineering philosophy centers on building secure, intelligent web systems and automated AI workflows. Whether architecting high-concurrency Node/Next.js platforms or training deep learning modules, I bridge the gap between robust software engineering and cutting-edge artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}