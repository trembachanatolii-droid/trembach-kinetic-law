import React, { useRef, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { SparklesCore } from '@/components/ui/sparkles';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Justice Statue Component
const JusticeStatue = ({ mousePosition }: { mousePosition: { x: number; y: number } }) => {
  const emblemRef = useRef<THREE.Group>(null);
  const leftScaleRef = useRef<THREE.Group>(null);
  const rightScaleRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!emblemRef.current) return;

    // Smooth rotation based on mouse
    emblemRef.current.rotation.y += (mousePosition.x * 0.26 - emblemRef.current.rotation.y) * 0.08;
    emblemRef.current.rotation.x += (-mousePosition.y * 0.16 - emblemRef.current.rotation.x) * 0.08;

    // Subtle scale sway
    const t = clock.getElapsedTime();
    const amp = 0.035;
    if (leftScaleRef.current) leftScaleRef.current.rotation.z = Math.sin(t * 0.9) * amp;
    if (rightScaleRef.current) rightScaleRef.current.rotation.z = Math.sin(t * 0.9 + Math.PI) * amp;
  });

  const bronze = new THREE.MeshPhysicalMaterial({
    color: '#C9A34A',
    metalness: 1,
    roughness: 0.3,
    clearcoat: 0.35,
    clearcoatRoughness: 0.25,
    envMapIntensity: 1.0,
  });

  const darkBronze = bronze.clone();
  darkBronze.color = new THREE.Color('#8A6E2E');
  darkBronze.roughness = 0.42;

  const steel = new THREE.MeshPhysicalMaterial({
    color: '#C7D2E0',
    metalness: 0.95,
    roughness: 0.25,
    envMapIntensity: 1.0,
  });

  return (
    <group ref={emblemRef}>
      {/* Base */}
      <mesh material={darkBronze}>
        <cylinderGeometry args={[0.55, 0.75, 0.1, 64]} />
      </mesh>

      {/* Column */}
      <mesh position={[0, 0.72, 0]} material={bronze}>
        <cylinderGeometry args={[0.09, 0.13, 1.3, 64]} />
      </mesh>

      {/* Beam */}
      <mesh position={[0, 1.42, 0]} material={bronze}>
        <boxGeometry args={[1.75, 0.07, 0.07]} />
      </mesh>

      {/* Finial */}
      <mesh position={[0, 1.58, 0]} material={steel}>
        <coneGeometry args={[0.075, 0.18, 32]} />
      </mesh>

      {/* Sword */}
      <group position={[0.62, 0.62, -0.12]} rotation={[0.05, -0.28, 0.35]}>
        <mesh position={[0, 0.05, 0]} material={steel}>
          <boxGeometry args={[0.055, 1.65, 0.018, 1, 40, 1]} />
        </mesh>
        <mesh position={[0, -0.9, 0]} rotation={[0, 0, Math.PI]} material={steel}>
          <coneGeometry args={[0.055, 0.18, 28]} />
        </mesh>
        <mesh position={[0, 0.45, 0]} material={darkBronze}>
          <boxGeometry args={[0.36, 0.06, 0.06]} />
        </mesh>
        <mesh position={[0, 0.62, 0]} material={darkBronze}>
          <cylinderGeometry args={[0.038, 0.038, 0.3, 28]} />
        </mesh>
        <mesh position={[0, 0.8, 0]} material={darkBronze}>
          <sphereGeometry args={[0.055, 28, 20]} />
        </mesh>
      </group>

      {/* Left Scale */}
      <group ref={leftScaleRef} position={[-0.9, 0, 0]}>
        {[-1, 0, 1].map((i) => (
          <React.Fragment key={`left-${i}`}>
            <mesh position={[i * 0.05, 1.42, 0]} material={steel}>
              <sphereGeometry args={[0.012, 12, 12]} />
            </mesh>
            <mesh position={[i * 0.05, 1.15, 0]} material={steel}>
              <cylinderGeometry args={[0.005, 0.005, 0.48, 8]} />
            </mesh>
          </React.Fragment>
        ))}
        <mesh position={[0, 0.94, 0]} material={darkBronze}>
          <cylinderGeometry args={[0.27, 0.29, 0.045, 56]} />
        </mesh>
        <mesh position={[0, 0.96, 0]} rotation={[Math.PI / 2, 0, 0]} material={steel}>
          <torusGeometry args={[0.28, 0.011, 14, 72]} />
        </mesh>
      </group>

      {/* Right Scale */}
      <group ref={rightScaleRef} position={[0.9, 0, 0]}>
        {[-1, 0, 1].map((i) => (
          <React.Fragment key={`right-${i}`}>
            <mesh position={[i * 0.05, 1.42, 0]} material={steel}>
              <sphereGeometry args={[0.012, 12, 12]} />
            </mesh>
            <mesh position={[i * 0.05, 1.15, 0]} material={steel}>
              <cylinderGeometry args={[0.005, 0.005, 0.48, 8]} />
            </mesh>
          </React.Fragment>
        ))}
        <mesh position={[0, 0.94, 0]} material={darkBronze}>
          <cylinderGeometry args={[0.27, 0.29, 0.045, 56]} />
        </mesh>
        <mesh position={[0, 0.96, 0]} rotation={[Math.PI / 2, 0, 0]} material={steel}>
          <torusGeometry args={[0.28, 0.011, 14, 72]} />
        </mesh>
      </group>

      {/* Ground fade */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0]}>
        <circleGeometry args={[3, 64]} />
        <meshStandardMaterial color="#0b0e13" roughness={0.95} transparent opacity={0.65} />
      </mesh>
    </group>
  );
};

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: '58%', y: '38%' });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      
      setMousePosition({ x, y });
      setGlowPosition({
        x: `${((e.clientX - rect.left) / rect.width) * 100}%`,
        y: `${((e.clientY - rect.top) / rect.height) * 100}%`,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[70vh] flex items-start overflow-hidden bg-[#0b0e13] isolate">
      {/* Sparkles Background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.8}
          maxSize={1.8}
          particleDensity={220}
          className="w-full h-full pointer-events-none"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Canvas
          camera={{ position: [1.2, 1.25, 3.5], fov: 45 }}
          gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <ambientLight intensity={0.5} />
          <hemisphereLight color="#f0f7ff" groundColor="#0b0e13" intensity={0.9} />
          <directionalLight position={[3, 5, 4]} intensity={1.1} />
          <directionalLight position={[-3, 2, -3]} intensity={0.55} color="#9cc7ff" />
          
          <JusticeStatue mousePosition={mousePosition} />
          <Environment preset="city" />
          
          <OrbitControls
            enablePan={false}
            enableRotate={false}
            enableZoom={true}
            minDistance={2.2}
            maxDistance={4.2}
            enableDamping
            dampingFactor={0.06}
          />
        </Canvas>
      </div>

      {/* Moving Glow */}
      <div
        className="absolute z-20 w-[1400px] h-[1400px] rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: glowPosition.x,
          top: glowPosition.y,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(closest-side, rgba(255, 198, 57, 0.38), rgba(255, 198, 57, 0) 70%)',
          filter: 'blur(20px)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-[-20%] z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(1000px 600px at 80% 40%, rgba(79, 70, 229, 0.14), transparent 62%), radial-gradient(900px 520px at 20% 80%, rgba(14, 165, 233, 0.14), transparent 60%)',
        }}
      />

      {/* Glassmorphism Grid & Content */}
      <div className="relative z-30 mt-[6%] ml-[6%] mr-[50%] max-w-4xl">
        {/* Glass Tiles */}
        <div className="grid grid-cols-3 gap-4 max-w-[720px] mb-6">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`rounded-3xl bg-white/8 backdrop-blur-md border border-white/18 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)] min-h-[90px] ${
                i >= 6 ? 'hidden lg:block' : ''
              }`}
              style={{ backdropFilter: 'blur(16px) saturate(130%)' }}
            />
          ))}
        </div>

        {/* Copy */}
        <div className="max-w-[560px] text-white space-y-3">
          <div className="text-xs uppercase tracking-[0.14em] opacity-75">Interactive 3D • Glassmorphism</div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            California's Premier<br />
            Personal Injury and<br />
            Mesothelioma Lawyers
          </h1>
          <p className="text-sm md:text-base opacity-85 leading-relaxed">
            After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
          </p>
          <Button
            size="lg"
            className="mt-4 text-white font-bold px-8 py-6 rounded-xl text-base bg-[#E50914] hover:bg-[#C11119] transition-colors duration-200"
            asChild
          >
            <Link to="/free-consultation">START YOUR FREE CASE REVIEW</Link>
          </Button>
        </div>
      </div>

      {/* Scroll Cue */}
      <a
        href="#next"
        className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-40 text-[#c9d4e5] opacity-88 flex items-center gap-2 text-sm tracking-wide hover:opacity-100 transition-opacity"
      >
        <span className="text-lg animate-bounce">⌄</span>
        <span>Scroll</span>
      </a>

      {/* Bottom Teaser */}
      <div
        className="absolute left-0 right-0 bottom-0 h-[120px] z-20 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.35))' }}
      />
    </section>
  );
};

export default Hero;