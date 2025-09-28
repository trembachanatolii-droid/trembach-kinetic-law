import React from 'react';
import { Canvas } from '@react-three/fiber';
import '@/styles/rope-effects.css';
import SimpleRopeAnimation from './SimpleRopeAnimation';

const RopeScene: React.FC = () => {
  return (
    <div className="rope-scene-container">
      <Canvas
        camera={{ 
          position: [0, 0, 15],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.8} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={1.2}
          castShadow
        />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#60a5fa" />
        
        <SimpleRopeAnimation />
      </Canvas>
    </div>
  );
};

export default RopeScene;