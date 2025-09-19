import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, Sparkles, Float } from '@react-three/drei';

// Lightweight, non-blocking hero scene with depth and subtle motion. Pointer-events disabled where used.
export const ToxicHeroScene: React.FC = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 8], fov: 55 }}>
      <color attach="background" args={["#07080b"]} />
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[6, 6, 6]} intensity={0.5} />

      {/* Starfield + sparkles for subtle parallax depth */}
      <Stars radius={90} depth={60} count={7000} factor={3.5} saturation={0} fade speed={0.4} />
      <Sparkles count={120} scale={80} size={1.6} speed={0.5} color="white" />

      {/* Floating toxic shards (very cheap geometry) */}
      <Float speed={1} rotationIntensity={0.6} floatIntensity={1.8}>
        <mesh position={[2.5, 0.8, -2]}>
          <icosahedronGeometry args={[0.55, 1]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#8b5cf6" emissiveIntensity={0.8} metalness={0.2} roughness={0.4} />
        </mesh>
        <mesh position={[-2.8, -0.6, -1.5]}>
          <icosahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} metalness={0.1} roughness={0.5} />
        </mesh>
      </Float>
    </Canvas>
  );
};

export default ToxicHeroScene;

