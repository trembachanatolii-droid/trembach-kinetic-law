import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';

const SimpleRopeAnimation: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  const scrollProgress = useRef(0);
  const targetProgress = useRef(0);

  // Use design token color (HSL) parsed to THREE.Color for reliable rendering
  const primaryColor = useMemo(() => {
    try {
      const root = getComputedStyle(document.documentElement);
      const val = root.getPropertyValue('--primary').trim(); // e.g., "221 83% 53%"
      const match = val.match(/(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%/);
      if (match) {
        const h = parseFloat(match[1]) / 360;
        const s = parseFloat(match[2]) / 100;
        const l = parseFloat(match[3]) / 100;
        const c = new THREE.Color();
        c.setHSL(h, s, l);
        return c;
      }
    } catch {}
    // Fallback bright blue
    return new THREE.Color('#3b82f6');
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
    return new THREE.TubeGeometry(curve, 120, 1.0, 24, false);
  }, [curve]);

  useEffect(() => {
    console.log('[Rope] mount');
    const computeProgressFromAbout = () => {
      const about = document.getElementById('about');
      if (!about) return 0;
      const rect = about.getBoundingClientRect();

      // If section is offscreen, return 0
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return 0;

      // Visible fraction of the section within the viewport
      const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      const fraction = visible / Math.min(rect.height, window.innerHeight);

      // Map to a smoother 0..1 curve as the section comes fully into view
      const centerOffset = 1 - Math.abs((rect.top + rect.height / 2 - window.innerHeight / 2) / (window.innerHeight / 2));
      const p = THREE.MathUtils.clamp((fraction * 0.6 + centerOffset * 0.4), 0, 1);
      return p;
    };

    const handleScrollOrResize = () => {
      const p = computeProgressFromAbout();
      if (p !== undefined) targetProgress.current = p;
    };

    targetProgress.current = 0;
    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize);
    handleScrollOrResize();

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
    };
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
      materialRef.current.opacity = Math.max(0, scrollProgress.current * 0.95);
      
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
        <meshBasicMaterial
          ref={materialRef as any}
          color={primaryColor}
          transparent
          opacity={0.9}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Bright glow effect */}
      <mesh geometry={ropeGeometry}>
        <meshBasicMaterial
          color={primaryColor}
          transparent
          opacity={0.6}
          side={THREE.BackSide}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

export default SimpleRopeAnimation;