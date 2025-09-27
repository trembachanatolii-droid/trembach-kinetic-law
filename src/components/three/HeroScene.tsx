import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import LadyJusticeStatue from './LadyJusticeStatue';

const HeroScene: React.FC = () => {
  return (
    <div className="pointer-events-none absolute right-8 top-1/2 transform -translate-y-1/2 w-[28rem] h-[28rem] md:w-[32rem] md:h-[32rem] z-30">
      <Canvas
        camera={{ 
          position: [4, 1, 6], 
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        shadows
      >
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1.5}
          castShadow
          shadow-mapSize-width={4096}
          shadow-mapSize-height={4096}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <pointLight position={[-5, 5, 5]} intensity={0.8} color="#ffd700" />
        <spotLight 
          position={[0, 10, 0]} 
          intensity={0.5} 
          angle={0.15} 
          penumbra={1}
          castShadow
        />
        
        <Suspense fallback={null}>
          <LadyJusticeStatue />
          <Environment preset="city" />
        </Suspense>
        
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping={true}
          dampingFactor={0.05}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          maxAzimuthAngle={Math.PI / 4}
          minAzimuthAngle={-Math.PI / 4}
        />
      </Canvas>
    </div>
  );
};

export default HeroScene;