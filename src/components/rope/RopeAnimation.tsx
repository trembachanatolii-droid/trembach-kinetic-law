import React, { useRef, useEffect, useMemo } from 'react';
import * as THREE from 'three';
import { useFrame, useThree } from '@react-three/fiber';
import { NURBSCurve } from 'three/addons/curves/NURBSCurve.js';
import nurbsJson from '@/assets/nurbs-canxerian.json';
import { createNurbsCurve } from '@/utils/nurbsUtils';

interface RopeAnimationProps {
  className?: string;
}

const RopeAnimation: React.FC<RopeAnimationProps> = ({ className = "" }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera, size } = useThree();
  
  const uniforms = useMemo(() => ({
    curveTexture: { value: null },
    stretchRatio: { value: 0 }
  }), []);

  const drawStartPercent = useRef(0);
  const radius = 0.11;
  const startPosPageY = size.height * 0.6;
  const endPosPageY = startPosPageY + size.height;
  const targetDrawPercent = useRef(0);

  // Create the NURBS curve from the imported data
  const curve = useMemo(() => {
    const nurbsPoints = nurbsJson[0].points.map(p => 
      new THREE.Vector4(p.x, p.y, p.z, p.weight)
    );
    return createNurbsCurve(nurbsPoints, 4);
  }, []);

  // Create tube mesh with data texture
  const { mesh: tubeMesh, material } = useMemo(() => {
    // Create data texture for curve points
    const texSize = 1024;
    const pData = curve.getSpacedPoints(texSize - 1);
    const data = new Float32Array(texSize * 4);
    
    pData.forEach((point, i) => {
      data[i * 4] = point.x;
      data[i * 4 + 1] = point.y;
      data[i * 4 + 2] = point.z;
      data[i * 4 + 3] = 0;
    });

    const curveTexture = new THREE.DataTexture(
      data, 
      texSize, 
      1, 
      THREE.RGBAFormat, 
      THREE.FloatType
    );
    curveTexture.needsUpdate = true;

    uniforms.curveTexture.value = curveTexture;

    // Create tube geometry
    const tubeGeometry = new THREE.TubeGeometry(curve, 200, radius, 8, false);
    
    // Custom shader material
    const shaderMaterial = new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: `
        uniform sampler2D curveTexture;
        uniform float stretchRatio;
        
        varying vec2 vUv;
        varying float vAlpha;
        
        void main() {
          vUv = uv;
          
          // Calculate alpha based on progress along curve
          float progress = uv.x;
          vAlpha = step(progress, stretchRatio);
          
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying float vAlpha;
        
        void main() {
          // Create rope-like appearance
          float radialFactor = length(vUv - vec2(0.5, 0.5)) * 2.0;
          float alpha = (1.0 - radialFactor) * vAlpha;
          
          // Law firm colors - professional blue/gold
          vec3 color = mix(
            vec3(0.2, 0.4, 0.8), // Professional blue
            vec3(0.8, 0.6, 0.2), // Gold accent
            vUv.x
          );
          
          gl_FragColor = vec4(color, alpha);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide
    });

    return { 
      mesh: new THREE.Mesh(tubeGeometry, shaderMaterial),
      material: shaderMaterial
    };
  }, [curve, uniforms]);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = THREE.MathUtils.clamp(
        THREE.MathUtils.inverseLerp(startPosPageY, endPosPageY, scrollY), 
        0, 
        1
      );
      targetDrawPercent.current = progress;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, [startPosPageY, endPosPageY]);

  // Position the rope
  useEffect(() => {
    if (meshRef.current) {
      // Position at bottom-left of screen like lusion.co
      // Use normalized device coordinates for consistent positioning
      meshRef.current.position.x = -8;
      meshRef.current.position.y = -6;
      meshRef.current.position.z = -1; // Behind content
      meshRef.current.scale.setScalar(0.5); // Scale down for better fit
    }
  }, [size]);

  // Animation loop
  useFrame((state, delta) => {
    if (meshRef.current && material) {
      // Smooth animation toward target
      const lerpFactor = 1 - Math.pow(0.01, delta);
      drawStartPercent.current = THREE.MathUtils.lerp(
        drawStartPercent.current,
        targetDrawPercent.current,
        lerpFactor
      );

      // Update shader uniform
      uniforms.stretchRatio.value = drawStartPercent.current;

      // Add subtle rotation for dynamic feel
      meshRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <mesh 
      ref={meshRef} 
      geometry={tubeMesh.geometry} 
      material={tubeMesh.material}
    />
  );
};

export default RopeAnimation;