import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const SimpleRopeAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);

  // Create a simple visible spiral curve
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Create a prominent spiral that's easy to see
    for (let i = 0; i < 50; i++) {
      const t = i / 49;
      const angle = t * Math.PI * 4; // 2 full rotations
      const radius = 3 + Math.sin(t * Math.PI * 2) * 1;
      const height = t * 12 - 6;
      
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ));
    }
    
    return new THREE.CatmullRomCurve3(points);
  }, []);

  // Create rope geometry - make it thicker and more visible
  const ropeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, 0.15, 12, false);
  }, [curve]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / Math.max(maxScroll * 0.5, 1), 1);
      targetProgress.current = progress;
    };

    // Start with some visibility for testing
    targetProgress.current = 0.3;
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    // Smooth progress interpolation
    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetProgress.current,
      delta * 2
    );

    if (groupRef.current && materialRef.current) {
      // Always keep some minimum opacity for visibility
      materialRef.current.opacity = Math.max(0.4, scrollProgress.current * 0.9);
      
      // Rotate the entire rope for dynamic effect
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      
      // Scale with minimum visibility
      const scale = Math.max(0.4, 0.3 + scrollProgress.current * 0.5);
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group 
      ref={groupRef}
      position={[-6, 0, 0]} // Centered left position for visibility
    >
      {/* Main rope - bright and visible */}
      <mesh geometry={ropeGeometry}>
        <meshStandardMaterial
          ref={materialRef}
          color="#2563eb" // Bright blue
          transparent
          opacity={0.4} // Start with some opacity
          metalness={0.2}
          roughness={0.6}
          emissive="#1d4ed8"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Bright glow effect */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.6}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default SimpleRopeAnimation;