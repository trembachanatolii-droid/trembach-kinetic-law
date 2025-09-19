import React, { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

// Lightweight, non-blocking starfield to add depth. Pointer-events disabled where used.
export const ToxicHeroScene: React.FC = () => {
  // Keep render cheap
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 8], fov: 55 }}>
      {/* Subtle ambient */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} />
      {/* Stars behind dark overlay for cinematic depth */}
      <Stars radius={80} depth={40} count={6000} factor={4} saturation={0} fade speed={0.6} />
    </Canvas>
  );
};

export default ToxicHeroScene;

