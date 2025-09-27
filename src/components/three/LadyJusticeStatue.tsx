import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const LadyJusticeStatue: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the FBX model (converted to GLB for better web performance)
  // Note: FBX files need to be converted to GLB/GLTF for web use
  // For now, we'll create a placeholder geometry that resembles a statue
  
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation animation
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={meshRef} position={[2, -1, 0]} scale={[0.8, 0.8, 0.8]}>
      {/* Statue base */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.8, 1, 0.3, 8]} />
        <meshStandardMaterial color="#4a5568" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Main statue body - simplified representation */}
      <mesh position={[0, 0.5, 0]}>
        <capsuleGeometry args={[0.3, 1.5, 4, 8]} />
        <meshStandardMaterial 
          color="#e2e8f0" 
          metalness={0.1} 
          roughness={0.8}
          emissive="#1a202c"
          emissiveIntensity={0.1}
        />
      </mesh>
      
      {/* Head */}
      <mesh position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#e2e8f0" metalness={0.1} roughness={0.8} />
      </mesh>
      
      {/* Scales (left hand) */}
      <group position={[-0.4, 1.2, 0]}>
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[0.1, 0.02, 0.1]} />
          <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[-0.08, 0.15, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0.08, 0.15, 0]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#ffd700" metalness={0.9} roughness={0.1} />
        </mesh>
      </group>
      
      {/* Sword (right hand) */}
      <group position={[0.4, 1.0, 0]} rotation={[0, 0, -0.3]}>
        <mesh position={[0, 0.3, 0]}>
          <boxGeometry args={[0.02, 0.6, 0.02]} />
          <meshStandardMaterial color="#c0c0c0" metalness={0.9} roughness={0.1} />
        </mesh>
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.1, 0.02, 0.02]} />
          <meshStandardMaterial color="#8b4513" metalness={0.3} roughness={0.7} />
        </mesh>
      </group>
      
      {/* Blindfold effect */}
      <mesh position={[0, 1.85, 0.2]}>
        <boxGeometry args={[0.3, 0.05, 0.02]} />
        <meshStandardMaterial color="#2d3748" metalness={0.1} roughness={0.9} />
      </mesh>
    </group>
  );
};

export default LadyJusticeStatue;