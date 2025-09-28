import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import nurbsJson from '@/assets/nurbs-canxerian.json';

const SimpleRopeAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);

  // Create the spiral curve from NURBS data
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Use the NURBS points to create a simple spiral
    nurbsJson[0].points.forEach((p, i) => {
      const angle = (i / nurbsJson[0].points.length) * Math.PI * 4; // 2 full rotations
      const radius = 2 + Math.sin(angle * 0.5) * 0.5;
      const height = (i / nurbsJson[0].points.length) * 8 - 4;
      
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ));
    });
    
    return new THREE.CatmullRomCurve3(points);
  }, []);

  // Create rope geometry
  const ropeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 100, 0.08, 8, false);
  }, [curve]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / (maxScroll * 0.7), 1); // Start animation earlier
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animation loop
  useFrame((state, delta) => {
    // Smooth progress interpolation
    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetProgress.current,
      delta * 3
    );

    if (groupRef.current && materialRef.current) {
      // Update opacity based on scroll progress
      materialRef.current.opacity = scrollProgress.current * 0.8;
      
      // Rotate the entire rope for dynamic effect
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      
      // Scale based on progress (rope grows as you scroll)
      const scale = 0.3 + scrollProgress.current * 0.4;
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group 
      ref={groupRef}
      position={[-4, -1, -2]} // Position at bottom-left, more visible
    >
      {/* Main rope */}
      <mesh geometry={ropeGeometry}>
        <meshStandardMaterial
          ref={materialRef}
          color="#1e40af" // Professional blue from your design system
          transparent
          opacity={0}
          metalness={0.3}
          roughness={0.7}
          emissive="#0f1629"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.15}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Inner core for more depth */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color="#60a5fa"
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
};

export default SimpleRopeAnimation;