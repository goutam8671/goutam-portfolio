"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadSlim(engine);
  }, []);

  return (
    // Changed -z-10 to z-0 so it sits in front of the page background
    <div className="absolute inset-0 z-0 h-full w-full opacity-60">
      <Particles
        id="tsparticles"
        init={particlesInit}
        // Force the canvas to take up 100% of this div
        className="h-full w-full absolute inset-0" 
        options={{
          background: {
            color: { value: "transparent" },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
            },
            modes: {
              grab: { distance: 150, links: { opacity: 0.7, color: "#34d399" } },
            },
          },
          particles: {
            color: { value: "#34d399" }, 
            links: {
              color: "#1e293b", 
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              outModes: { default: "bounce" },
            },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 2 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}