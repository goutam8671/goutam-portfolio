"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function Starfield() {
  const starsRef = useRef<THREE.Points>(null);

  // Slowly rotate the entire starfield to make it feel alive
  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x -= 0.0002;
      starsRef.current.rotation.y -= 0.0002;
    }
  });

  return (
    <Stars 
      ref={starsRef}
      radius={100} // How far out the stars go
      depth={50} 
      count={5000} 
      factor={4} 
      saturation={0} 
      fade 
      speed={1} 
    />
  );
}

export default function SpaceCanvas() {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-[-1] bg-[#030303]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Starfield />
      </Canvas>
    </div>
  );
}