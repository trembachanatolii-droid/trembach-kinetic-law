import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import LadyJusticeStatue from './LadyJusticeStatue';

const HeroScene: React.FC = () => {
  return (
    <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-80 h-80 z-20">
      <Canvas
        camera={{ 
          position: [3, 2, 5], 
          fov: 45,
          near: 0.1,
          far: 100
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
        <pointLight position={[-2, 3, 2]} intensity={0.6} color="#ffd700" />
        
        <Suspense fallback={null}>
          <LadyJusticeStatue />
          <Environment preset="studio" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;