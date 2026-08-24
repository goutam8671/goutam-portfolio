"use client";

import { useRef, useState } from "react";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase">
          03 // Core Competencies & Tech Stack
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <TiltBox className="md:col-span-2">
          <div className="absolute top-0 right-0 p-8 text-neutral-800 font-mono text-6xl font-bold select-none pointer-events-none">
            01
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Full-Stack & Python Architecture</h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-md">
              Building scalable, high-concurrency web apps with Next.js, Python backends, and robust system scripts.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {["Next.js", "Python", "React.js", "Node.js", "Django", "Flask", "JavaScript", "HTML5", "CSS3", "Git"].map((tech, i) => (
              <span key={i} className="text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg font-mono text-xs">
                {tech}
              </span>
            ))}
          </div>
        </TiltBox>

        <TiltBox>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Systems & Core Logic</h3>
            <p className="text-neutral-400 font-light text-sm leading-relaxed mb-6">
              Core low-level programming foundation.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {["C", "C++", "Java", "SQL"].map((tech, i) => (
              <span key={i} className="text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg font-mono text-xs">
                {tech}
              </span>
            ))}
          </div>
        </TiltBox>

        <TiltBox className="md:col-span-3">
          <div className="absolute top-0 right-0 p-8 text-neutral-800 font-mono text-6xl font-bold select-none pointer-events-none">
            02
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">AI & ML / AI & DS Engineering</h3>
            <p className="text-neutral-400 font-light leading-relaxed max-w-2xl">
              Integrating LLMs, building custom RAG data pipelines, and deploying TensorFlow & Sci-kit learn models into real-world applications.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            {["TensorFlow", "Sci-kit learn", "LLMs", "RAG Pipelines", "Gen AI", "Supabase", "MongoDB"].map((tech, i) => (
              <span key={i} className="text-neutral-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg font-mono text-xs">
                {tech}
              </span>
            ))}
          </div>
        </TiltBox>
      </div>
    </section>
  );
}

function TiltBox({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCoords({ x: x / 20, y: -y / 20 });
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
          ? `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) scale3d(1.01, 1.01, 1.01)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
        transition: isHovered ? "none" : "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)",
      }}
      className={`bg-[#080808]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}