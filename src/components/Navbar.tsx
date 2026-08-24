"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030303]/40 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
        {/* Your minimalist logo */}
        <span className="text-white font-bold tracking-widest text-sm uppercase">
          Goutam.
        </span>
        
        {/* Minimalist links */}
        <div className="flex gap-8 text-xs uppercase tracking-widest text-neutral-400">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#projects" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
}