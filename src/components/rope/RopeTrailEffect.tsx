import React, { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

interface RopeTrailEffectProps {
  scrollProgress: number;
}

const RopeTrailEffect: React.FC<RopeTrailEffectProps> = ({ scrollProgress }) => {
  const trailRef = useRef<THREE.Line>(null);
  
  // Create a glowing trail that follows behind the main rope
  const trailGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Create a secondary spiral path slightly offset
    for (let i = 0; i < 100; i++) {
      const t = i / 99;
      const angle = t * Math.PI * 6 + Math.PI * 0.1; // Slightly offset
      const radius = 3.2 + Math.sin(t * Math.PI * 2) * 0.8;
      const height = t * 10 - 5;
      
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ));
    }
    
    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame((state) => {
    if (trailRef.current) {
      const material = trailRef.current.material as THREE.LineBasicMaterial;
      
      // Animate trail opacity and color based on scroll
      material.opacity = scrollProgress * 0.4;
      
      // Slight delay in trail rotation
      trailRef.current.rotation.y = scrollProgress * Math.PI * 2 - 0.2;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 2) * 0.1 + 0.9;
      material.color.setHSL(0.6, 0.8, 0.5 * pulse);
    }
  });

  return (
    <primitive object={new THREE.Line(trailGeometry, new THREE.LineBasicMaterial({
      color: "#60a5fa",
      transparent: true,
      opacity: 0,
      linewidth: 2
    }))} ref={trailRef} />
  );
};

export default RopeTrailEffect;