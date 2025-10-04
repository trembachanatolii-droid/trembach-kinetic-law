import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders/RoundedImageShader';

interface WebGLPracticeCardProps {
  imageUrl: string;
  position: { x: number; y: number; z: number };
  scale: { width: number; height: number };
  mousePosition: THREE.Vector2;
  isHovered: boolean;
  scrollProgress: number;
}

export const WebGLPracticeCard: React.FC<WebGLPracticeCardProps> = ({
  imageUrl,
  position,
  scale,
  mousePosition,
  isHovered,
  scrollProgress,
}) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const { size } = useThree();
  
  const hoverRef = useRef(0);
  const velocityRef = useRef(0);
  const lastMouseRef = useRef(new THREE.Vector2());

  // Load texture
  useEffect(() => {
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (loadedTexture) => {
      loadedTexture.minFilter = THREE.LinearFilter;
      loadedTexture.magFilter = THREE.LinearFilter;
      setTexture(loadedTexture);
    });
  }, [imageUrl]);

  // Shader material
  const shaderMaterial = React.useMemo(() => {
    if (!texture) return null;

    return new THREE.ShaderMaterial({
      uniforms: {
        uTexture: { value: texture },
        uMouse: { value: new THREE.Vector2(0.5, 0.5) },
        uHover: { value: 0 },
        uTime: { value: 0 },
        uBlur: { value: 1.0 },
        uResolution: { value: new THREE.Vector2(scale.width, scale.height) },
        uRadius: { value: 0.02 },
        uVelocity: { value: 0 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, [texture, scale]);

  // Animation loop
  useFrame(({ clock }) => {
    if (!materialRef.current) return;

    const uniforms = materialRef.current.uniforms;

    // Update time
    uniforms.uTime.value = clock.getElapsedTime();

    // Smooth hover transition
    const targetHover = isHovered ? 1 : 0;
    hoverRef.current += (targetHover - hoverRef.current) * 0.1;
    uniforms.uHover.value = hoverRef.current;

    // Calculate mouse velocity
    const velocity = mousePosition.distanceTo(lastMouseRef.current);
    velocityRef.current += (velocity - velocityRef.current) * 0.1;
    uniforms.uVelocity.value = velocityRef.current;
    lastMouseRef.current.copy(mousePosition);

    // Update mouse position (normalized to card space)
    uniforms.uMouse.value.copy(mousePosition);

    // Progressive blur reveal based on scroll
    const blurAmount = Math.max(0, 1 - scrollProgress);
    uniforms.uBlur.value = blurAmount;

    // 3D rotation on hover
    if (meshRef.current && isHovered) {
      const rotationX = (mousePosition.y - 0.5) * 0.15;
      const rotationY = (mousePosition.x - 0.5) * 0.15;
      
      meshRef.current.rotation.x += (rotationX - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (rotationY - meshRef.current.rotation.y) * 0.1;
    } else if (meshRef.current) {
      meshRef.current.rotation.x += (0 - meshRef.current.rotation.x) * 0.1;
      meshRef.current.rotation.y += (0 - meshRef.current.rotation.y) * 0.1;
    }
  });

  if (!shaderMaterial) return null;

  return (
    <mesh
      ref={meshRef}
      position={[position.x, position.y, position.z]}
    >
      <planeGeometry args={[scale.width, scale.height, 32, 32]} />
      <primitive object={shaderMaterial} attach="material" ref={materialRef} />
    </mesh>
  );
};
