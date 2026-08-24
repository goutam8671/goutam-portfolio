"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { supabase } from "../supabase"; // Import your supabase client

export default function Contact() {
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [comments, setComments] = useState<Array<{ name: string; text: string; date: string }>>([
    { name: "Recruiter Team", text: "Elite multi-role positioning and flawless 3D execution.", date: "Verified" }
  ]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(containerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        }
      }
    );

    // Fetch permanent comments from Supabase on load
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const { data, error } = await supabase
        .from('comments')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      if (data && data.length > 0) {
        const formatted = data.map((item: any) => ({
          name: item.name,
          text: item.text,
          date: new Date(item.created_at).toLocaleDateString()
        }));
        setComments(formatted);
      }
    } catch (err) {
      console.error("Error fetching comments:", err);
    }
  };

  const handleAddComment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setStatus("Saving permanently to Supabase...");

    try {
      const { error } = await supabase
        .from('comments')
        .insert([{ name: name.trim(), text: message.trim() }]);

      if (error) throw error;

      setStatus("Successfully saved to cloud database!");
      setName("");
      setMessage("");
      fetchComments(); // Refresh comment list from database

      setTimeout(() => setStatus(""), 4000);
    } catch (err) {
      console.error("Database error:", err);
      setStatus("Error saving comment. Check credentials.");
    }
  };

  return (
    <section id="contact" ref={containerRef} className="py-40 px-6 max-w-3xl mx-auto text-center relative">
      <p className="text-xs font-bold tracking-[0.3em] text-neutral-400 uppercase mb-4">
        05 // What&apos;s Next?
      </p>
      <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
        Let&apos;s build something exceptional.
      </h2>
      <p className="text-neutral-400 mb-8 text-lg font-light leading-relaxed max-w-xl mx-auto">
        Open for opportunities as a Full Stack, Python, and AI/ML Engineer. Reach out directly or leave a verified note below.
      </p>

      {/* Direct Contact Cards */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <a 
          href="mailto:goutamvishnoi07@gmail.com" 
          className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-neutral-200 font-mono text-xs hover:border-white/40 transition-all"
        >
          📧 goutamvishnoi07@gmail.com
        </a>
        <a 
          href="tel:9423526429" 
          className="bg-white/5 border border-white/10 px-6 py-4 rounded-xl text-neutral-200 font-mono text-xs hover:border-white/40 transition-all"
        >
          📞 +91 9423526429
        </a>
      </div>

      {/* Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-block bg-white text-black px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] hover:bg-neutral-200 transition-all duration-300 shadow-xl cursor-pointer"
      >
        {isOpen ? "Close Feedback Box" : "Say Hello & Leave a Verified Note"}
      </button>

      {/* Interactive Comment Modal / Box */}
      {isOpen && (
        <div className="mt-12 bg-[#080808] border border-white/10 p-8 rounded-3xl text-left backdrop-blur-2xl animate-fadeIn">
          <h3 className="text-lg font-bold text-white mb-2">Global Visitor Feed</h3>
          <p className="text-neutral-400 text-xs font-light mb-6">Persistent cloud database board connected via Supabase.</p>
          
          <form onSubmit={handleAddComment} className="space-y-4 mb-8">
            <div>
              <label className="block text-xs font-mono text-neutral-500 uppercase mb-2">Your Name / Organization</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Principal Engineering Recruiter" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-mono text-neutral-500 uppercase mb-2">Your Message / Note</label>
              <textarea 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your professional review here..." 
                rows={3}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-white/40 resize-none"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-neutral-200 text-black py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-colors cursor-pointer"
            >
              Submit Permanent Comment
            </button>
            {status && <p className="text-xs font-mono text-emerald-400 text-center pt-2">{status}</p>}
          </form>

          {/* Comments Feed */}
          <div className="space-y-4 pt-6 border-t border-white/5">
            <h4 className="text-xs font-mono text-neutral-500 uppercase tracking-widest mb-4">Database Feed ({comments.length})</h4>
            {comments.map((c, i) => (
              <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    {c.name} <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-1.5 py-0.5 rounded">Database Saved</span>
                  </span>
                  <span className="text-[10px] font-mono text-neutral-600">{c.date}</span>
                </div>
                <p className="text-neutral-300 text-sm font-light">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Footer Social Links */}
      <div className="mt-32 pt-8 border-t border-white/5 flex justify-center gap-8 text-xs uppercase tracking-[0.2em] text-neutral-500">
        <a href="https://github.com/goutam8671" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://linkedin.com/in/goutam-vishnoi-1567713a1" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
      </div>
    </section>
  );
}