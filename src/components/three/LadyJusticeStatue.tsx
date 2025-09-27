import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useFBX } from '@react-three/drei';
import * as THREE from 'three';

const LadyJusticeStatue: React.FC = () => {
  const meshRef = useRef<THREE.Group>(null);
  
  // Load the actual FBX model
  const fbx = useFBX('./src/assets/lady_justice_statue_3d_model.fbx');
  
  useFrame((state) => {
    if (meshRef.current) {
      // Smooth rotation animation
      meshRef.current.rotation.y += 0.003;
    }
  });

  // Configure materials for the loaded model
  React.useEffect(() => {
    if (fbx) {
      fbx.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Apply marble-like material to all meshes
          child.material = new THREE.MeshStandardMaterial({
            color: '#f8f9fa',
            metalness: 0.1,
            roughness: 0.7,
            envMapIntensity: 0.8,
          });
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [fbx]);

  return (
    <group ref={meshRef} position={[0, -1, 0]} scale={[0.02, 0.02, 0.02]}>
      <primitive object={fbx} />
    </group>
  );
};

export default LadyJusticeStatue;