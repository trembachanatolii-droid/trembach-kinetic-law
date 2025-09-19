import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float, Cloud } from '@react-three/drei';
import { Vector3 } from 'three';

// Enhanced animated particles for toxic exposure visualization
const AnimatedParticles: React.FC = () => {
  const particlesRef = useRef<any>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 15 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 8
        ]}>
          <sphereGeometry args={[0.02, 8, 8]} />
          <meshStandardMaterial 
            color={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#f97316" : "#eab308"} 
            emissive={i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#f97316" : "#eab308"}
            emissiveIntensity={0.3}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

// Enhanced hero scene with atmospheric toxic effects
export const ToxicHeroScene: React.FC = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 8], fov: 55 }}>
      <color attach="background" args={["#0a0a0f"]} />
      
      {/* Enhanced lighting for atmospheric effect */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[6, 6, 6]} intensity={0.6} color="#ffffff" />
      <pointLight position={[-4, -4, -2]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[4, 4, 2]} intensity={0.6} color="#06b6d4" />

      {/* Atmospheric clouds for toxic atmosphere */}
      <Cloud
        opacity={0.1}
        speed={0.2}
        segments={20}
        color="#444444"
        position={[0, 0, -4]}
      />

      {/* Enhanced starfield with toxic colors */}
      <Stars 
        radius={120} 
        depth={80} 
        count={8000} 
        factor={4} 
        saturation={0.2} 
        fade 
        speed={0.3} 
      />
      
      {/* Toxic sparkles with color variation */}
      <Sparkles 
        count={200} 
        scale={100} 
        size={2} 
        speed={0.4} 
        color="#ef4444"
        position={[2, 1, -2]}
      />
      <Sparkles 
        count={150} 
        scale={80} 
        size={1.5} 
        speed={0.6} 
        color="#f97316"
        position={[-2, -1, -1]}
      />

      {/* Animated toxic particles */}
      <AnimatedParticles />

      {/* Enhanced floating toxic elements */}
      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[3, 1, -2]}>
          <icosahedronGeometry args={[0.6, 2]} />
          <meshStandardMaterial 
            color="#8b5cf6" 
            emissive="#8b5cf6" 
            emissiveIntensity={0.9} 
            metalness={0.3} 
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh position={[-3, -0.5, -1.5]}>
          <octahedronGeometry args={[0.5, 1]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={0.7} 
            metalness={0.2} 
            roughness={0.4}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh position={[0, 2, -3]}>
          <dodecahedronGeometry args={[0.4, 0]} />
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#ef4444" 
            emissiveIntensity={0.6} 
            metalness={0.1} 
            roughness={0.6}
            transparent
            opacity={0.7}
          />
        </mesh>
      </Float>
    </Canvas>
  );
};

export default ToxicHeroScene;

