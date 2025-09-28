import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const SimpleRopeAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);

  // Use design token color if available
  const primaryHsl = useMemo(() => {
    try {
      const root = getComputedStyle(document.documentElement);
      const val = root.getPropertyValue('--primary').trim();
      return val ? `hsl(${val})` : 'hsl(221 83% 53%)';
    } catch {
      return 'hsl(221 83% 53%)';
    }
  }, []);

  // Create a simple visible spiral curve
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Create a prominent spiral that's easy to see
    for (let i = 0; i < 60; i++) {
      const t = i / 59;
      const angle = t * Math.PI * 2.5; // sweeping arc
      const radius = 6 + Math.sin(t * Math.PI * 2) * 0.8;
      const height = t * 20 - 10;
      
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
    return new THREE.TubeGeometry(curve, 100, 0.6, 20, false);
  }, [curve]);

  useEffect(() => {
    console.log('[Rope] mount');
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / Math.max(maxScroll * 0.5, 1), 1);
      targetProgress.current = progress;
    };

    targetProgress.current = 0.5;
    window.addEventListener('scroll', handleScroll, { passive: true });
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
      materialRef.current.opacity = Math.max(0.7, scrollProgress.current * 0.95);
      
      // Rotate the entire rope for dynamic effect
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
      
      // Scale with minimum visibility
      const scale = Math.max(0.8, 0.6 + scrollProgress.current * 0.5);
      groupRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group 
      ref={groupRef}
      position={[0, 0, 0]} // Centered position for visibility
    >
      {/* Main rope - bright and visible */}
      <mesh geometry={ropeGeometry}>
        <meshStandardMaterial
          ref={materialRef}
          color={primaryHsl}
          transparent
          opacity={0.8} // Start with strong opacity
          metalness={0.15}
          roughness={0.55}
          emissive={primaryHsl}
          emissiveIntensity={0.15}
        />
      </mesh>
      
      {/* Bright glow effect */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color={primaryHsl}
          transparent
          opacity={0.35}
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
};

export default SimpleRopeAnimation;