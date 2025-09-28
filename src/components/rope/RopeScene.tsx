import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import EnhancedRopeAnimation from './EnhancedRopeAnimation';

const RopeScene: React.FC = () => {
  return (
    <div className="rope-scene-container">
      <Canvas
        camera={{ 
          position: [0, 0, 10],
          fov: 50,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={1}
        />
        
        <Suspense fallback={null}>
          <EnhancedRopeAnimation />
          <Environment files="/assets/quarry_01_1k.hdr" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default RopeScene;