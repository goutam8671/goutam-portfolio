"use client";

import { motion } from "framer-motion";

export default function Aurora() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-slate-950 pointer-events-none">
      {/* Deep Emerald Glowing Orb */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, -50, 0, 50, 0],
          scale: [1, 1.1, 1, 0.9, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-emerald-900/20 blur-[120px]"
      />

      {/* Midnight Blue Glowing Orb */}
      <motion.div
        animate={{
          x: [0, -100, 0, 100, 0],
          y: [0, 50, 0, -50, 0],
          scale: [1, 0.9, 1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-blue-900/10 blur-[150px]"
      />
    </div>
  );
}