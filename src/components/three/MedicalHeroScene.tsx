import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Sparkles, Float, Cloud } from '@react-three/drei';
import { Vector3 } from 'three';

// Medical-themed animated particles for birth injury visualization
const MedicalParticles: React.FC = () => {
  const particlesRef = useRef<any>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0008;
      particlesRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.08;
    }
  });

  return (
    <group ref={particlesRef}>
      {Array.from({ length: 20 }, (_, i) => (
        <mesh key={i} position={[
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 10
        ]}>
          <sphereGeometry args={[0.015, 16, 16]} />
          <meshStandardMaterial 
            color={i % 4 === 0 ? "#3b82f6" : i % 4 === 1 ? "#06b6d4" : i % 4 === 2 ? "#10b981" : "#8b5cf6"} 
            emissive={i % 4 === 0 ? "#3b82f6" : i % 4 === 1 ? "#06b6d4" : i % 4 === 2 ? "#10b981" : "#8b5cf6"}
            emissiveIntensity={0.2}
            transparent
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

// Medical cross floating element
const MedicalCross: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const crossRef = useRef<any>(null);
  
  useFrame((state) => {
    if (crossRef.current) {
      crossRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={crossRef} position={position}>
      {/* Vertical bar */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[0.1, 0.6, 0.05]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      {/* Horizontal bar */}
      <mesh position={[0, 0.05, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.05]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
    </group>
  );
};

// Enhanced medical hero scene with healing atmosphere
export const MedicalHeroScene: React.FC = () => {
  const dpr = Math.min(window.devicePixelRatio || 1, 1.5);

  return (
    <Canvas dpr={dpr} camera={{ position: [0, 0, 9], fov: 50 }}>
      <color attach="background" args={["#0f172a"]} />
      
      {/* Medical-themed lighting for calm, healing atmosphere */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.4} color="#ffffff" />
      <pointLight position={[-3, -3, -2]} intensity={0.6} color="#3b82f6" />
      <pointLight position={[3, 3, 2]} intensity={0.5} color="#06b6d4" />
      <pointLight position={[0, -4, 3]} intensity={0.4} color="#10b981" />

      {/* Soft medical atmosphere clouds */}
      <Cloud
        opacity={0.08}
        speed={0.1}
        segments={25}
        color="#e2e8f0"
        position={[0, 0, -5]}
      />
      <Cloud
        opacity={0.06}
        speed={0.15}
        segments={20}
        color="#cbd5e1"
        position={[2, 1, -6]}
      />

      {/* Medical starfield with soft, healing colors */}
      <Stars 
        radius={150} 
        depth={100} 
        count={6000} 
        factor={3} 
        saturation={0.1} 
        fade 
        speed={0.2} 
      />
      
      {/* Healing sparkles with medical colors */}
      <Sparkles 
        count={120} 
        scale={120} 
        size={1.5} 
        speed={0.3} 
        color="#3b82f6"
        position={[1.5, 0.5, -2]}
      />
      <Sparkles 
        count={80} 
        scale={100} 
        size={1.2} 
        speed={0.4} 
        color="#06b6d4"
        position={[-1.5, -0.5, -1.5]}
      />
      <Sparkles 
        count={60} 
        scale={90} 
        size={1} 
        speed={0.5} 
        color="#10b981"
        position={[0, 1.5, -2.5]}
      />

      {/* Medical particles */}
      <MedicalParticles />

      {/* Floating medical crosses */}
      <Float speed={0.8} rotationIntensity={0.3} floatIntensity={1.5}>
        <MedicalCross position={[2.5, 1.2, -2]} />
      </Float>
      <Float speed={1.0} rotationIntensity={0.4} floatIntensity={1.8}>
        <MedicalCross position={[-2.5, -0.8, -1.8]} />
      </Float>
      <Float speed={0.6} rotationIntensity={0.2} floatIntensity={1.2}>
        <MedicalCross position={[0, 2.2, -3]} />
      </Float>

      {/* Enhanced floating medical elements with healing colors */}
      <Float speed={1.0} rotationIntensity={0.6} floatIntensity={1.8}>
        <mesh position={[3.2, 0.8, -2.5]}>
          <icosahedronGeometry args={[0.5, 2]} />
          <meshStandardMaterial 
            color="#3b82f6" 
            emissive="#3b82f6" 
            emissiveIntensity={0.4} 
            metalness={0.2} 
            roughness={0.4}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh position={[-3.2, -0.4, -2]}>
          <octahedronGeometry args={[0.4, 1]} />
          <meshStandardMaterial 
            color="#06b6d4" 
            emissive="#06b6d4" 
            emissiveIntensity={0.3} 
            metalness={0.15} 
            roughness={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>
        <mesh position={[0, 2.5, -3.5]}>
          <dodecahedronGeometry args={[0.35, 0]} />
          <meshStandardMaterial 
            color="#10b981" 
            emissive="#10b981" 
            emissiveIntensity={0.35} 
            metalness={0.1} 
            roughness={0.6}
            transparent
            opacity={0.8}
          />
        </mesh>
      </Float>

      {/* Heart-shaped healing elements */}
      <Float speed={0.7} rotationIntensity={0.5} floatIntensity={2.2}>
        <mesh position={[-1, 1.8, -1.5]}>
          <sphereGeometry args={[0.25, 16, 16]} />
          <meshStandardMaterial 
            color="#ef4444" 
            emissive="#ef4444" 
            emissiveIntensity={0.4} 
            metalness={0.1} 
            roughness={0.3}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh position={[1, -1.8, -1.8]}>
          <sphereGeometry args={[0.2, 16, 16]} />
          <meshStandardMaterial 
            color="#f97316" 
            emissive="#f97316" 
            emissiveIntensity={0.3} 
            metalness={0.1} 
            roughness={0.4}
            transparent
            opacity={0.75}
          />
        </mesh>
      </Float>
    </Canvas>
  );
};

export default MedicalHeroScene;