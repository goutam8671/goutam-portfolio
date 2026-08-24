"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Projects() {
  const sectionRef = useRef(null);
  const bgTextRef = useRef(null);

  const projectsList = [
    {
      title: "Project GridSec",
      role: "Full Stack & Python Developer",
      description: "Built a Next.js command center dashboard delivering real-time geographic threat mapping. Architected a Supabase-backed data layer to handle live telemetry streaming and developed Python microservices to automate AI-driven incident dossiers.",
      tech: ["Next.js", "Supabase", "Python", "Microservices"],
      link: "https://github.com/goutam8671"
    },
    {
      title: "A.U.R.A. (Advanced Intrusion Prevention System)",
      role: "Lead Cybersecurity & Python Engineer",
      description: "Engineered a full-stack cybersecurity ecosystem for low-latency, autonomous threat neutralization. Built a Python Flask backend using Socket.IO to maintain asynchronous connections, and designed a dynamic defense module injecting OS-level firewall rules.",
      tech: ["Python (Flask)", "Socket.IO", "Architecture", "TensorFlow"],
      link: "https://github.com/goutam8671"
    },
    {
      title: "AlertSamaritan-Pro",
      role: "Team Leader & AI Integrator",
      description: "Led a team to build an offline-capable disaster preparedness web app optimized for 2G networks. Implemented interactive risk-tracking maps and deployed Generative AI-powered predictive alerts to generate responsive safety checklists.",
      tech: ["Generative AI", "Web Dev", "UI/UX", "Mobile Optimization"],
      link: "https://github.com/goutam8671"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(bgTextRef.current, {
      x: -200,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      }
    });
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-40 px-6 max-w-6xl mx-auto overflow-hidden relative">
      <div
        ref={bgTextRef}
        className="absolute top-10 right-[-10%] text-[140px] md:text-[220px] font-extrabold whitespace-nowrap z-0 pointer-events-none select-none tracking-tighter"
        style={{ color: "transparent", WebkitTextStroke: "1px rgba(255, 255, 255, 0.03)" }}
      >
        WORK
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
            02 // Selected Works
          </h2>
          <span className="text-xs font-mono text-neutral-600 uppercase">3D Perspective Tilt Active</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsList.map((project, index) => (
            <TiltCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ project, index }: { project: any; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x: x / 15, y: -y / 15 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setCoords({ x: 0, y: 0 });
      }}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1), transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`bg-[#080808]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 md:p-10 flex flex-col justify-between ${
        index === 2 ? "md:col-span-2" : ""
      }`}
    >
      <div>
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest">{project.role}</span>
          <a 
            href={project.link} 
            target="_blank" 
            rel="noreferrer"
            className="text-xs font-mono text-white underline hover:text-neutral-400 transition-colors"
          >
            Repository ↗
          </a>
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight">
          {project.title}
        </h3>
        <p className="text-neutral-400 mb-8 leading-relaxed font-light text-base">
          {project.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
        {project.tech.map((t: string, i: number) => (
          <span key={i} className="text-neutral-300 bg-white/5 border border-white/5 px-3 py-1 rounded-md font-mono text-[10px] uppercase tracking-wider">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}