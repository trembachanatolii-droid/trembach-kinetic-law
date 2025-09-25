import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

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

    const tl = gsap.timeline({ repeat: -1 });
    
    // Back layer - slow vertical float
    if (backLayerRef.current) {
      gsap.to(backLayerRef.current, {
        y: 30,
        duration: 14,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    
    // Mid layer - horizontal drift
    if (midLayerRef.current) {
      gsap.to(midLayerRef.current, {
        x: 40,
        duration: 18,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1
      });
    }
    
    // Front layer - complex motion with rotation
    if (frontLayerRef.current) {
      const frontTl = gsap.timeline({ repeat: -1 });
      frontTl
        .to(frontLayerRef.current, {
          y: 20,
          x: 25,
          duration: 10,
          ease: "power2.inOut"
        })
        .to(frontLayerRef.current, {
          rotation: 2,
          duration: 22,
          ease: "power2.inOut",
          yoyo: true,
          repeat: -1
        }, 0);
    }

    return () => {
      gsap.killTweensOf([backLayerRef.current, midLayerRef.current, frontLayerRef.current]);
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
      {/* Floating Background Layers */}
      <div
        ref={backLayerRef}
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{ transform: 'translateZ(-500px)' }}
      >
        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div
        ref={midLayerRef}
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ transform: 'translateZ(-250px)' }}
      >
        <div className="w-3/4 h-3/4 bg-gradient-to-tl from-accent/30 to-accent/10 rounded-full blur-2xl mx-auto mt-10" />
      </div>
      
      <div
        ref={frontLayerRef}
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ transform: 'translateZ(-100px)' }}
      >
        <div className="w-1/2 h-1/2 bg-gradient-to-r from-secondary/40 to-secondary/15 rounded-full blur-xl mx-auto mt-20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ThreeDVisualEffects;