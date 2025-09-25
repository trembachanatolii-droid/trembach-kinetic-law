import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VisualEffectsProps {
  children: React.ReactNode;
  className?: string;
}

export const ThreeDVisualEffects: React.FC<VisualEffectsProps> = ({ children, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Back layer - slow vertical float with Z-axis animation
      if (backLayerRef.current) {
        gsap.to(backLayerRef.current, {
          y: 30,
          z: -20,
          rotationX: 5,
          duration: 14,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });
        
        // Parallax scroll effect for back layer
        gsap.to(backLayerRef.current, {
          y: -50,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5
          }
        });
      }
      
      // Mid layer - horizontal drift with rotation
      if (midLayerRef.current) {
        gsap.to(midLayerRef.current, {
          x: 40,
          rotationY: 10,
          duration: 18,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        });
        
        // Parallax scroll effect for mid layer
        gsap.to(midLayerRef.current, {
          x: -30,
          y: -25,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      }
      
      // Front layer - complex motion with rotation and Z-axis movement
      if (frontLayerRef.current) {
        const frontTl = gsap.timeline({ repeat: -1 });
        frontTl
          .to(frontLayerRef.current, {
            y: 20,
            x: 25,
            z: 15,
            rotationZ: 2,
            duration: 10,
            ease: "power2.inOut"
          })
          .to(frontLayerRef.current, {
            rotation: 2,
            rotationX: 3,
            duration: 22,
            ease: "power2.inOut",
            yoyo: true,
            repeat: -1
          }, 0);
          
        // Parallax scroll effect for front layer
        gsap.to(frontLayerRef.current, {
          y: -15,
          x: 20,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.5
          }
        });
      }
      
      // Interactive hover effects for the container
      if (containerRef.current) {
        const container = containerRef.current;
        
        container.addEventListener('mouseenter', () => {
          gsap.to([backLayerRef.current, midLayerRef.current, frontLayerRef.current], {
            scale: 1.05,
            duration: 0.8,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          });
        });
        
        container.addEventListener('mouseleave', () => {
          gsap.to([backLayerRef.current, midLayerRef.current, frontLayerRef.current], {
            scale: 1,
            duration: 0.8,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          });
        });
      }
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Floating Background Layers with Enhanced 3D Effects */}
      <div
        ref={backLayerRef}
        className="absolute inset-0 opacity-15 pointer-events-none gpu-accelerated"
        style={{ transform: 'translateZ(-500px)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-blue-400/10 rounded-full blur-3xl animate-float-back" />
      </div>
      
      <div
        ref={midLayerRef}
        className="absolute inset-0 opacity-25 pointer-events-none gpu-accelerated"
        style={{ transform: 'translateZ(-250px)' }}
      >
        <div className="w-3/4 h-3/4 bg-gradient-to-tl from-blue-400/40 to-blue-300/15 rounded-full blur-2xl mx-auto mt-10 animate-float-mid" />
      </div>
      
      <div
        ref={frontLayerRef}
        className="absolute inset-0 opacity-35 pointer-events-none gpu-accelerated"
        style={{ transform: 'translateZ(-100px)' }}
      >
        <div className="w-1/2 h-1/2 bg-gradient-to-r from-blue-300/50 to-blue-200/20 rounded-full blur-xl mx-auto mt-20 animate-float-front" />
      </div>
      
      {/* Content with enhanced interactivity */}
      <div className="relative z-10 interactive-card">
        {children}
      </div>
    </div>
  );
};

export default ThreeDVisualEffects;