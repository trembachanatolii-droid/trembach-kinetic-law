import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import nurbsJson from '@/assets/nurbs-canxerian.json';

const EnhancedRopeAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const ropeRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);

  // Create the main spiral curve
  const curve = useMemo(() => {
    const points: THREE.Vector3[] = [];
    
    // Create a more dramatic spiral based on NURBS data
    nurbsJson[0].points.forEach((p, i) => {
      const t = i / (nurbsJson[0].points.length - 1);
      const angle = t * Math.PI * 6; // 3 full rotations
      const radius = 3 + Math.sin(t * Math.PI * 2) * 0.8; // Varying radius
      const height = t * 10 - 5;
      
      points.push(new THREE.Vector3(
        Math.cos(angle) * radius,
        height,
        Math.sin(angle) * radius
      ));
    });
    
    return new THREE.CatmullRomCurve3(points, false);
  }, []);

  // Create rope geometry with higher detail
  const ropeGeometry = useMemo(() => {
    return new THREE.TubeGeometry(curve, 200, 0.12, 12, false);
  }, [curve]);

  // Create particle system along the rope
  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(300 * 3); // 300 particles
    const colors = new Float32Array(300 * 3);
    
    for (let i = 0; i < 300; i++) {
      const t = i / 299;
      const point = curve.getPoint(t);
      
      // Add some randomness around the curve
      const offset = new THREE.Vector3(
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5,
        (Math.random() - 0.5) * 0.5
      );
      
      point.add(offset);
      
      positions[i * 3] = point.x;
      positions[i * 3 + 1] = point.y;
      positions[i * 3 + 2] = point.z;
      
      // Gradient colors from blue to light blue
      const color = new THREE.Color().lerpColors(
        new THREE.Color('#1e40af'),
        new THREE.Color('#60a5fa'),
        t
      );
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    
    return geometry;
  }, [curve]);

  // Handle scroll events with more sophisticated detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      // Start animation when 20% scrolled, complete at 80%
      const startPoint = maxScroll * 0.2;
      const endPoint = maxScroll * 0.8;
      const progress = Math.max(0, Math.min(1, (scrollTop - startPoint) / (endPoint - startPoint)));
      
      targetProgress.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Advanced animation loop
  useFrame((state, delta) => {
    // Smooth progress interpolation
    scrollProgress.current = THREE.MathUtils.lerp(
      scrollProgress.current,
      targetProgress.current,
      delta * 4
    );

    if (groupRef.current) {
      // Main group rotation for the spiral effect
      groupRef.current.rotation.y = scrollProgress.current * Math.PI * 2;
      
      // Subtle bobbing motion
      groupRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      
      // Scale animation
      const scale = 0.2 + scrollProgress.current * 0.6;
      groupRef.current.scale.setScalar(scale);
      
      // Rope-specific animations
      if (ropeRef.current) {
        const material = ropeRef.current.material as THREE.MeshStandardMaterial;
        material.opacity = scrollProgress.current * 0.9;
        
        // Animate emissive intensity for glow effect
        material.emissiveIntensity = 0.1 + scrollProgress.current * 0.3;
      }
      
      // Particle animations
      if (particlesRef.current) {
        const material = particlesRef.current.material as THREE.PointsMaterial;
        material.opacity = scrollProgress.current * 0.7;
        
        // Rotate particles in opposite direction for dynamic effect
        particlesRef.current.rotation.y = -state.clock.elapsedTime * 0.3;
      }
    }
  });

  return (
    <group 
      ref={groupRef}
      position={[-5, -1, -3]} // Bottom-left positioning
    >
      {/* Main rope mesh */}
      <mesh ref={ropeRef} geometry={ropeGeometry}>
        <meshStandardMaterial
          color="#1e40af"
          transparent
          opacity={0}
          metalness={0.4}
          roughness={0.6}
          emissive="#0f1629"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.2}
          side={THREE.BackSide}
        />
      </mesh>
      
      {/* Particle system */}
      <points ref={particlesRef} geometry={particleGeometry}>
        <pointsMaterial
          size={0.05}
          transparent
          opacity={0}
          vertexColors
          sizeAttenuation
        />
      </points>
      
      {/* Subtle ambient light for the rope */}
      <pointLight
        position={[0, 2, 0]}
        intensity={0.3}
        color="#60a5fa"
        distance={8}
      />
    </group>
  );
};

export default EnhancedRopeAnimation;