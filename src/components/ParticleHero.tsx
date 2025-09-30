import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';

const ParticleHero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const loadingRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure hero visible immediately
      if (heroRef.current) {
        gsap.set(heroRef.current, { opacity: 1 });
      }

      // Staggered headline animation - delayed after particle loading
      gsap.fromTo(
        ".hero-line",
        {
          y: 50,
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.15,
          ease: "power3.out",
          delay: 3.5
        }
      );

      // Button animation
      gsap.fromTo(
        buttonRef.current,
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: 4.2
        }
      );

      // Chat widget animation
      gsap.fromTo(
        chatRef.current,
        {
          scale: 0,
          rotation: -10
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: 5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Particle system initialization
    const initParticleSystem = async () => {
      if (!canvasRef.current) return;

      try {
        // Dynamically import required modules
        const [
          THREE,
          { OrbitControls },
          { EffectComposer },
          { RenderPass },
          { UnrealBloomPass }
        ] = await Promise.all([
          import('three'),
          import('three/examples/jsm/controls/OrbitControls.js'),
          import('three/examples/jsm/postprocessing/EffectComposer.js'),
          import('three/examples/jsm/postprocessing/RenderPass.js'),
          import('three/examples/jsm/postprocessing/UnrealBloomPass.js')
        ]);

        let scene: any, camera: any, renderer: any, controls: any, clock: any;
        let composer: any, bloomPass: any;
        let particlesGeometry: any, particlesMaterial: any, particleSystem: any;
        let currentPositions: any, sourcePositions: any, targetPositions: any, swarmPositions: any;
        let particleSizes: any, particleOpacities: any, particleEffectStrengths: any;
        let isInitialized = false;
        let isMorphing = false;
        let animationId: number;

        // Simplified noise functions
        const noise3D = (x: number, y: number, z: number) => 
          Math.sin(x * 0.02) * Math.cos(y * 0.02) * Math.sin(z * 0.02) * 0.5;
        const noise4D = (x: number, y: number, z: number, w: number) => 
          Math.sin(x * 0.02 + w * 0.1) * Math.cos(y * 0.02 + w * 0.1) * Math.sin(z * 0.02 + w * 0.1) * 0.5;

        const CONFIG = {
          particleCount: 15000,
          shapeSize: 14,
          swarmDistanceFactor: 1.5,
          swirlFactor: 4.0,
          noiseFrequency: 0.1,
          noiseTimeScale: 0.04,
          noiseMaxStrength: 2.8,
          colorScheme: 'fire',
          morphDuration: 4000,
          particleSizeRange: [0.08, 0.25],
          starCount: 18000,
          bloomStrength: 1.3,
          bloomRadius: 0.5,
          bloomThreshold: 0.05,
          idleFlowStrength: 0.25,
          idleFlowSpeed: 0.08,
          idleRotationSpeed: 0.02,
          morphSizeFactor: 0.5,
          morphBrightnessFactor: 0.6
        };

        const SHAPES = [
          { name: 'Sphere', generator: generateSphere },
          { name: 'Cube', generator: generateCube },
          { name: 'Pyramid', generator: generatePyramid },
          { name: 'Torus', generator: generateTorus },
          { name: 'Galaxy', generator: generateGalaxy },
          { name: 'Wave', generator: generateWave }
        ];

        let currentShapeIndex = 0;
        const morphState = { progress: 0.0 };

        const COLOR_SCHEMES = {
          fire: { startHue: 0, endHue: 45, saturation: 0.95, lightness: 0.6 },
          neon: { startHue: 300, endHue: 180, saturation: 1.0, lightness: 0.65 },
          nature: { startHue: 90, endHue: 160, saturation: 0.85, lightness: 0.55 },
          rainbow: { startHue: 0, endHue: 360, saturation: 0.9, lightness: 0.6 }
        };

        const tempVec = new THREE.Vector3();
        const sourceVec = new THREE.Vector3();
        const targetVec = new THREE.Vector3();
        const swarmVec = new THREE.Vector3();
        const noiseOffset = new THREE.Vector3();
        const flowVec = new THREE.Vector3();
        const bezPos = new THREE.Vector3();
        const swirlAxis = new THREE.Vector3();
        const currentVec = new THREE.Vector3();

        function generateSphere(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const phi = Math.PI * (Math.sqrt(5) - 1);
          for (let i = 0; i < count; i++) {
            const y = 1 - (i / (count - 1)) * 2;
            const radius = Math.sqrt(1 - y * y);
            const theta = phi * i;
            const x = Math.cos(theta) * radius;
            const z = Math.sin(theta) * radius;
            points[i * 3] = x * size;
            points[i * 3 + 1] = y * size;
            points[i * 3 + 2] = z * size;
          }
          return points;
        }

        function generateCube(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const halfSize = size / 2;
          for (let i = 0; i < count; i++) {
            const face = Math.floor(Math.random() * 6);
            const u = Math.random() * size - halfSize;
            const v = Math.random() * size - halfSize;
            switch (face) {
              case 0: points.set([halfSize, u, v], i * 3); break;
              case 1: points.set([-halfSize, u, v], i * 3); break;
              case 2: points.set([u, halfSize, v], i * 3); break;
              case 3: points.set([u, -halfSize, v], i * 3); break;
              case 4: points.set([u, v, halfSize], i * 3); break;
              case 5: points.set([u, v, -halfSize], i * 3); break;
            }
          }
          return points;
        }

        function generatePyramid(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const halfBase = size / 2;
          const height = size * 1.2;
          const apex = new THREE.Vector3(0, height / 2, 0);
          const baseVertices = [
            new THREE.Vector3(-halfBase, -height / 2, -halfBase),
            new THREE.Vector3(halfBase, -height / 2, -halfBase),
            new THREE.Vector3(halfBase, -height / 2, halfBase),
            new THREE.Vector3(-halfBase, -height / 2, halfBase)
          ];
          const baseArea = size * size;
          const sideFaceHeight = Math.sqrt(Math.pow(height, 2) + Math.pow(halfBase, 2));
          const sideFaceArea = 0.5 * size * sideFaceHeight;
          const totalArea = baseArea + 4 * sideFaceArea;
          const baseWeight = baseArea / totalArea;
          const sideWeight = sideFaceArea / totalArea;
          
          for (let i = 0; i < count; i++) {
            const r = Math.random();
            let p = new THREE.Vector3();
            let u, v;
            if (r < baseWeight) {
              u = Math.random();
              v = Math.random();
              p.lerpVectors(baseVertices[0], baseVertices[1], u);
              const p2 = new THREE.Vector3().lerpVectors(baseVertices[3], baseVertices[2], u);
              p.lerp(p2, v);
            } else {
              const faceIndex = Math.floor((r - baseWeight) / sideWeight);
              const v1 = baseVertices[faceIndex];
              const v2 = baseVertices[(faceIndex + 1) % 4];
              u = Math.random();
              v = Math.random();
              if (u + v > 1) {
                u = 1 - u;
                v = 1 - v;
              }
              p.addVectors(v1, tempVec.subVectors(v2, v1).multiplyScalar(u));
              p.add(tempVec.subVectors(apex, v1).multiplyScalar(v));
            }
            points.set([p.x, p.y, p.z], i * 3);
          }
          return points;
        }

        function generateTorus(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const R = size * 0.7;
          const r = size * 0.3;
          for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.random() * Math.PI * 2;
            const x = (R + r * Math.cos(phi)) * Math.cos(theta);
            const y = r * Math.sin(phi);
            const z = (R + r * Math.cos(phi)) * Math.sin(theta);
            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
          }
          return points;
        }

        function generateGalaxy(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const arms = 4;
          const armWidth = 0.6;
          const bulgeFactor = 0.3;
          for (let i = 0; i < count; i++) {
            const t = Math.pow(Math.random(), 1.5);
            const radius = t * size;
            const armIndex = Math.floor(Math.random() * arms);
            const armOffset = (armIndex / arms) * Math.PI * 2;
            const rotationAmount = radius / size * 6;
            const angle = armOffset + rotationAmount;
            const spread = (Math.random() - 0.5) * armWidth * (1 - radius / size);
            const theta = angle + spread;
            const x = radius * Math.cos(theta);
            const z = radius * Math.sin(theta);
            const y = (Math.random() - 0.5) * size * 0.1 * (1 - radius / size * bulgeFactor);
            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
          }
          return points;
        }

        function generateWave(count: number, size: number) {
          const points = new Float32Array(count * 3);
          const waveScale = size * 0.4;
          const frequency = 3;
          for (let i = 0; i < count; i++) {
            const u = Math.random() * 2 - 1;
            const v = Math.random() * 2 - 1;
            const x = u * size;
            const z = v * size;
            const dist = Math.sqrt(u * u + v * v);
            const angle = Math.atan2(v, u);
            const y = Math.sin(dist * Math.PI * frequency) * Math.cos(angle * 2) * waveScale * (1 - dist);
            points[i * 3] = x;
            points[i * 3 + 1] = y;
            points[i * 3 + 2] = z;
          }
          return points;
        }

        function createStarTexture() {
          const size = 64;
          const canvas = document.createElement('canvas');
          canvas.width = size;
          canvas.height = size;
          const context = canvas.getContext('2d')!;
          const gradient = context.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
          gradient.addColorStop(0, 'rgba(255,255,255,1)');
          gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
          gradient.addColorStop(0.5, 'rgba(255,255,255,0.3)');
          gradient.addColorStop(1, 'rgba(255,255,255,0)');
          context.fillStyle = gradient;
          context.fillRect(0, 0, size, size);
          return new THREE.CanvasTexture(canvas);
        }

        function updateProgress(increment: number) {
          if (loadingRef.current) {
            const progressBar = loadingRef.current.querySelector('#progress') as HTMLElement;
            if (progressBar) {
              const currentWidth = parseFloat(progressBar.style.width || '0');
              const newWidth = Math.min(100, currentWidth + increment);
              progressBar.style.width = `${newWidth}%`;
              
              if (newWidth >= 100) {
                setTimeout(() => {
                  if (loadingRef.current) {
                    loadingRef.current.style.opacity = '0';
                    setTimeout(() => {
                      if (loadingRef.current) {
                        loadingRef.current.style.display = 'none';
                      }
                    }, 600);
                  }
                }, 200);
              }
            }
          }
        }

        function init() {
          clock = new THREE.Clock();
          scene = new THREE.Scene();
          scene.fog = new THREE.FogExp2(0x000308, 0.03);
          updateProgress(5);

          camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000);
          camera.position.set(0, 8, 28);
          camera.lookAt(scene.position);
          updateProgress(5);

          renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current!,
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance'
          });
          renderer.setSize(window.innerWidth, window.innerHeight);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          renderer.toneMapping = THREE.ACESFilmicToneMapping;
          renderer.toneMappingExposure = 1.1;
          updateProgress(10);

          controls = new OrbitControls(camera, renderer.domElement);
          controls.enableDamping = true;
          controls.dampingFactor = 0.05;
          controls.minDistance = 5;
          controls.maxDistance = 80;
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.3;
          updateProgress(5);

          // Lighting
          scene.add(new THREE.AmbientLight(0x404060));
          const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.5);
          dirLight1.position.set(15, 20, 10);
          scene.add(dirLight1);
          const dirLight2 = new THREE.DirectionalLight(0x88aaff, 0.9);
          dirLight2.position.set(-15, -10, -15);
          scene.add(dirLight2);
          updateProgress(10);

          setupPostProcessing();
          updateProgress(10);
          createStarfield();
          updateProgress(15);
          setupParticleSystem();
          updateProgress(25);

          // Auto-morph every 8 seconds
          setInterval(() => {
            if (!isMorphing) triggerMorph();
          }, 8000);

          window.addEventListener('resize', onWindowResize);

          isInitialized = true;
          animate();
        }

        function setupPostProcessing() {
          composer = new EffectComposer(renderer);
          composer.addPass(new RenderPass(scene, camera));
          bloomPass = new UnrealBloomPass(
            new THREE.Vector2(window.innerWidth, window.innerHeight),
            CONFIG.bloomStrength,
            CONFIG.bloomRadius,
            CONFIG.bloomThreshold
          );
          composer.addPass(bloomPass);
        }

        function createStarfield() {
          const starVertices = [];
          const starSizes = [];
          const starColors = [];
          const starGeometry = new THREE.BufferGeometry();

          for (let i = 0; i < CONFIG.starCount; i++) {
            tempVec.set(
              THREE.MathUtils.randFloatSpread(400),
              THREE.MathUtils.randFloatSpread(400),
              THREE.MathUtils.randFloatSpread(400)
            );
            if (tempVec.length() < 100) tempVec.setLength(100 + Math.random() * 300);
            starVertices.push(tempVec.x, tempVec.y, tempVec.z);
            starSizes.push(Math.random() * 0.15 + 0.05);
            
            const color = new THREE.Color();
            if (Math.random() < 0.1) {
              color.setHSL(Math.random(), 0.7, 0.65);
            } else {
              color.setHSL(0.6, Math.random() * 0.1, 0.8 + Math.random() * 0.2);
            }
            starColors.push(color.r, color.g, color.b);
          }

          starGeometry.setAttribute('position', new THREE.Float32BufferAttribute(starVertices, 3));
          starGeometry.setAttribute('color', new THREE.Float32BufferAttribute(starColors, 3));
          starGeometry.setAttribute('size', new THREE.Float32BufferAttribute(starSizes, 1));

          const starMaterial = new THREE.ShaderMaterial({
            uniforms: { pointTexture: { value: createStarTexture() } },
            vertexShader: `
              attribute float size;
              varying vec3 vColor;
              varying float vSize;
              void main() {
                vColor = color;
                vSize = size;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (400.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
              }`,
            fragmentShader: `
              uniform sampler2D pointTexture;
              varying vec3 vColor;
              varying float vSize;
              void main() {
                float alpha = texture2D(pointTexture, gl_PointCoord).a;
                if (alpha < 0.1) discard;
                gl_FragColor = vec4(vColor, alpha * 0.9);
              }`,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            transparent: true,
            vertexColors: true
          });

          scene.add(new THREE.Points(starGeometry, starMaterial));
        }

        function setupParticleSystem() {
          targetPositions = SHAPES.map(shape => shape.generator(CONFIG.particleCount, CONFIG.shapeSize));
          particlesGeometry = new THREE.BufferGeometry();
          currentPositions = new Float32Array(targetPositions[0]);
          sourcePositions = new Float32Array(targetPositions[0]);
          swarmPositions = new Float32Array(CONFIG.particleCount * 3);
          particlesGeometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));

          particleSizes = new Float32Array(CONFIG.particleCount);
          particleOpacities = new Float32Array(CONFIG.particleCount);
          particleEffectStrengths = new Float32Array(CONFIG.particleCount);

          for (let i = 0; i < CONFIG.particleCount; i++) {
            particleSizes[i] = THREE.MathUtils.randFloat(CONFIG.particleSizeRange[0], CONFIG.particleSizeRange[1]);
            particleOpacities[i] = 1.0;
            particleEffectStrengths[i] = 0.0;
          }

          particlesGeometry.setAttribute('size', new THREE.BufferAttribute(particleSizes, 1));
          particlesGeometry.setAttribute('opacity', new THREE.BufferAttribute(particleOpacities, 1));
          particlesGeometry.setAttribute('aEffectStrength', new THREE.BufferAttribute(particleEffectStrengths, 1));

          const colors = new Float32Array(CONFIG.particleCount * 3);
          updateColorArray(colors, currentPositions);
          particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

          particlesMaterial = new THREE.ShaderMaterial({
            uniforms: {
              pointTexture: { value: createStarTexture() }
            },
            vertexShader: `
              attribute float size;
              attribute float opacity;
              attribute float aEffectStrength;
              varying vec3 vColor;
              varying float vOpacity;
              varying float vEffectStrength;

              void main() {
                vColor = color;
                vOpacity = opacity;
                vEffectStrength = aEffectStrength;

                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

                float sizeScale = 1.0 - vEffectStrength * ${CONFIG.morphSizeFactor.toFixed(2)};
                gl_PointSize = size * sizeScale * (400.0 / -mvPosition.z);

                gl_Position = projectionMatrix * mvPosition;
              }
            `,
            fragmentShader: `
              uniform sampler2D pointTexture;
              varying vec3 vColor;
              varying float vOpacity;
              varying float vEffectStrength;

              void main() {
                float alpha = texture2D(pointTexture, gl_PointCoord).a;
                if (alpha < 0.05) discard;

                vec3 finalColor = vColor * (1.0 + vEffectStrength * ${CONFIG.morphBrightnessFactor.toFixed(2)});

                gl_FragColor = vec4(finalColor, alpha * vOpacity);
              }
            `,
            blending: THREE.AdditiveBlending,
            depthTest: true,
            depthWrite: false,
            transparent: true,
            vertexColors: true
          });

          particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
          scene.add(particleSystem);
        }

        function updateColorArray(colors: Float32Array, positionsArray: Float32Array) {
          const colorScheme = COLOR_SCHEMES[CONFIG.colorScheme as keyof typeof COLOR_SCHEMES];
          const center = new THREE.Vector3(0, 0, 0);
          const maxRadius = CONFIG.shapeSize * 1.1;

          for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            tempVec.fromArray(positionsArray, i3);
            const dist = tempVec.distanceTo(center);
            let hue;

            if (CONFIG.colorScheme === 'rainbow') {
              const normX = (tempVec.x / maxRadius + 1) / 2;
              const normY = (tempVec.y / maxRadius + 1) / 2;
              const normZ = (tempVec.z / maxRadius + 1) / 2;
              hue = (normX * 120 + normY * 120 + normZ * 120) % 360;
            } else {
              hue = THREE.MathUtils.mapLinear(dist, 0, maxRadius, colorScheme.startHue, colorScheme.endHue);
            }

            const noiseValue = (noise3D(tempVec.x * 0.2, tempVec.y * 0.2, tempVec.z * 0.2) + 1) * 0.5;
            const saturation = THREE.MathUtils.clamp(colorScheme.saturation * (0.9 + noiseValue * 0.2), 0, 1);
            const lightness = THREE.MathUtils.clamp(colorScheme.lightness * (0.85 + noiseValue * 0.3), 0.1, 0.9);

            const color = new THREE.Color().setHSL(hue / 360, saturation, lightness);
            color.toArray(colors, i3);
          }
        }

        function triggerMorph() {
          if (isMorphing) return;
          isMorphing = true;
          controls.autoRotate = false;

          if (infoRef.current) {
            infoRef.current.innerText = 'Morphing...';
            infoRef.current.style.textShadow = '0 0 8px rgba(255, 150, 50, 0.9)';
          }

          sourcePositions.set(currentPositions);
          const nextShapeIndex = (currentShapeIndex + 1) % SHAPES.length;
          const nextTargetPositions = targetPositions[nextShapeIndex];
          const centerOffsetAmount = CONFIG.shapeSize * CONFIG.swarmDistanceFactor;

          for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            sourceVec.fromArray(sourcePositions, i3);
            targetVec.fromArray(nextTargetPositions, i3);
            swarmVec.lerpVectors(sourceVec, targetVec, 0.5);
            const offsetDir = tempVec.set(
              noise3D(i * 0.05, 10, 10),
              noise3D(20, i * 0.05, 20),
              noise3D(30, 30, i * 0.05)
            ).normalize();
            const distFactor = sourceVec.distanceTo(targetVec) * 0.1 + centerOffsetAmount;
            swarmVec.addScaledVector(offsetDir, distFactor * (0.5 + Math.random() * 0.8));
            swarmPositions[i3] = swarmVec.x;
            swarmPositions[i3 + 1] = swarmVec.y;
            swarmPositions[i3 + 2] = swarmVec.z;
          }

          currentShapeIndex = nextShapeIndex;
          morphState.progress = 0;

          // Simplified morph animation using requestAnimationFrame
          const startTime = performance.now();
          const morphAnimation = () => {
            const elapsed = performance.now() - startTime;
            const progress = Math.min(elapsed / CONFIG.morphDuration, 1);
            morphState.progress = progress;

            if (progress >= 1) {
              if (infoRef.current) {
                infoRef.current.innerText = `Shape: ${SHAPES[currentShapeIndex].name} (Click to morph)`;
                infoRef.current.style.textShadow = '0 0 5px rgba(0, 128, 255, 0.8)';
              }
              currentPositions.set(targetPositions[currentShapeIndex]);
              particlesGeometry.attributes.position.needsUpdate = true;
              particleEffectStrengths.fill(0.0);
              particlesGeometry.attributes.aEffectStrength.needsUpdate = true;
              sourcePositions.set(targetPositions[currentShapeIndex]);
              updateColors();
              isMorphing = false;
              controls.autoRotate = true;
            } else {
              requestAnimationFrame(morphAnimation);
            }
          };
          morphAnimation();
        }

        function updateColors() {
          const colors = particlesGeometry.attributes.color.array;
          updateColorArray(colors, particlesGeometry.attributes.position.array);
          particlesGeometry.attributes.color.needsUpdate = true;
        }

        function animate() {
          if (!isInitialized) return;
          animationId = requestAnimationFrame(animate);

          const elapsedTime = clock.getElapsedTime();
          const deltaTime = clock.getDelta();

          controls.update();

          const positions = particlesGeometry.attributes.position.array;
          const effectStrengths = particlesGeometry.attributes.aEffectStrength.array;

          if (isMorphing) {
            updateMorphAnimation(positions, effectStrengths, elapsedTime, deltaTime);
          } else {
            updateIdleAnimation(positions, effectStrengths, elapsedTime, deltaTime);
          }

          particlesGeometry.attributes.position.needsUpdate = true;
          if (isMorphing || particlesGeometry.attributes.aEffectStrength.needsUpdate) {
            particlesGeometry.attributes.aEffectStrength.needsUpdate = true;
          }

          composer.render(deltaTime);
        }

        function updateMorphAnimation(positions: any, effectStrengths: any, elapsedTime: number, deltaTime: number) {
          const t = morphState.progress;
          const targets = targetPositions[currentShapeIndex];
          const effectStrength = Math.sin(t * Math.PI);
          const currentSwirl = effectStrength * CONFIG.swirlFactor * deltaTime * 50;
          const currentNoise = effectStrength * CONFIG.noiseMaxStrength;

          for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            sourceVec.fromArray(sourcePositions, i3);
            swarmVec.fromArray(swarmPositions, i3);
            targetVec.fromArray(targets, i3);

            const t_inv = 1.0 - t;
            const t_inv_sq = t_inv * t_inv;
            const t_sq = t * t;

            bezPos.copy(sourceVec).multiplyScalar(t_inv_sq);
            bezPos.addScaledVector(swarmVec, 2.0 * t_inv * t);
            bezPos.addScaledVector(targetVec, t_sq);

            if (currentSwirl > 0.01) {
              tempVec.subVectors(bezPos, sourceVec);
              swirlAxis.set(
                noise3D(i * 0.02, elapsedTime * 0.1, 0),
                noise3D(0, i * 0.02, elapsedTime * 0.1 + 5),
                noise3D(elapsedTime * 0.1 + 10, 0, i * 0.02)
              ).normalize();
              tempVec.applyAxisAngle(swirlAxis, currentSwirl * (0.5 + Math.random() * 0.5));
              bezPos.copy(sourceVec).add(tempVec);
            }

            if (currentNoise > 0.01) {
              const noiseTime = elapsedTime * CONFIG.noiseTimeScale;
              noiseOffset.set(
                noise4D(bezPos.x * CONFIG.noiseFrequency, bezPos.y * CONFIG.noiseFrequency, bezPos.z * CONFIG.noiseFrequency, noiseTime),
                noise4D(bezPos.x * CONFIG.noiseFrequency + 100, bezPos.y * CONFIG.noiseFrequency + 100, bezPos.z * CONFIG.noiseFrequency + 100, noiseTime),
                noise4D(bezPos.x * CONFIG.noiseFrequency + 200, bezPos.y * CONFIG.noiseFrequency + 200, bezPos.z * CONFIG.noiseFrequency + 200, noiseTime)
              );
              bezPos.addScaledVector(noiseOffset, currentNoise);
            }

            positions[i3] = bezPos.x;
            positions[i3 + 1] = bezPos.y;
            positions[i3 + 2] = bezPos.z;
            effectStrengths[i] = effectStrength;
          }
          particlesGeometry.attributes.aEffectStrength.needsUpdate = true;
        }

        function updateIdleAnimation(positions: any, effectStrengths: any, elapsedTime: number, deltaTime: number) {
          const breathScale = 1.0 + Math.sin(elapsedTime * 0.5) * 0.015;
          const timeScaled = elapsedTime * CONFIG.idleFlowSpeed;
          const freq = 0.1;
          let needsEffectStrengthReset = false;

          for (let i = 0; i < CONFIG.particleCount; i++) {
            const i3 = i * 3;
            sourceVec.fromArray(sourcePositions, i3);
            tempVec.copy(sourceVec).multiplyScalar(breathScale);
            flowVec.set(
              noise4D(tempVec.x * freq, tempVec.y * freq, tempVec.z * freq, timeScaled),
              noise4D(tempVec.x * freq + 10, tempVec.y * freq + 10, tempVec.z * freq + 10, timeScaled),
              noise4D(tempVec.x * freq + 20, tempVec.y * freq + 20, tempVec.z * freq + 20, timeScaled)
            );
            tempVec.addScaledVector(flowVec, CONFIG.idleFlowStrength);
            currentVec.fromArray(positions, i3);
            currentVec.lerp(tempVec, 0.05);
            positions[i3] = currentVec.x;
            positions[i3 + 1] = currentVec.y;
            positions[i3 + 2] = currentVec.z;

            if (effectStrengths[i] !== 0.0) {
              effectStrengths[i] = 0.0;
              needsEffectStrengthReset = true;
            }
          }

          if (needsEffectStrengthReset) {
            particlesGeometry.attributes.aEffectStrength.needsUpdate = true;
          }
        }

        function onWindowResize() {
          if (!camera || !renderer || !composer) return;
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
          composer.setSize(window.innerWidth, window.innerHeight);
        }

        // Initialize the particle system
        init();

        // Cleanup function
        return () => {
          if (animationId) {
            cancelAnimationFrame(animationId);
          }
          window.removeEventListener('resize', onWindowResize);
          if (renderer) {
            renderer.dispose();
          }
          if (particlesGeometry) {
            particlesGeometry.dispose();
          }
          if (particlesMaterial) {
            particlesMaterial.dispose();
          }
        };

      } catch (error) {
        console.error('Error initializing particle system:', error);
      }
    };

    initParticleSystem();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div 
        ref={loadingRef}
        className="fixed inset-0 bg-black flex flex-col justify-center items-center z-50"
        style={{
          transition: 'opacity 0.6s ease-out'
        }}
      >
        <span className="text-2xl tracking-wider mb-4 text-white font-mono">
          Initializing Particles...
        </span>
        <div className="w-3/5 max-w-xs h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div 
            id="progress"
            className="h-full w-0 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 rounded-full"
          />
        </div>
      </div>

      {/* Particle Canvas - Fixed Background */}
      <canvas 
        ref={canvasRef}
        id="webglCanvas"
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
        style={{ display: 'block' }}
      />

      {/* UI Overlay for Particle Info */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
        <div 
          ref={infoRef}
          className="text-sm px-5 py-2.5 bg-slate-900/35 rounded-xl inline-block text-white/90 font-mono border border-white/10 backdrop-blur-xl shadow-inner transition-all duration-300"
          style={{
            textShadow: '0 0 5px rgba(0, 128, 255, 0.8)',
            boxShadow: 'inset 0 0 10px rgba(255, 255, 255, 0.05)'
          }}
        >
          Shape: Sphere (Click to morph)
        </div>
      </div>

      {/* Hero Content Section */}
      <section 
        ref={heroRef} 
        className="relative min-h-screen overflow-hidden bg-transparent flex items-center justify-center z-10"
      >
        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl mx-auto px-8">
          <div className="text-center space-y-8">
            <div ref={headlineRef} className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                <span className="hero-line block">You Focus on Healing.</span>
                <span className="hero-line block">We Focus on Winning.</span>
              </h1>
            </div>

            <Button 
              ref={buttonRef}
              className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-md shadow-lg transform hover:scale-105 transition-all duration-200"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              START YOUR FREE CASE REVIEW
            </Button>
          </div>
        </div>

        {/* Chat Widget */}
        <div ref={chatRef} className="fixed bottom-6 right-6 z-50">
          <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-xl">👨‍💼</span>
              </div>
              <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
                <p className="text-sm text-gray-700 font-medium">How can we help you?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ParticleHero;