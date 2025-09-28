import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CircularRopeProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  trigger?: string;
}

export const CircularRope: React.FC<CircularRopeProps> = ({
  size = 300,
  strokeWidth = 10,
  className = '',
  trigger = '.rope-trigger'
}) => {
  const mainPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = mainPathRef.current;
    const glow = glowPathRef.current;
    if (!path || !glow) return;

    const total = path.getTotalLength();

    // Prepare paths (hidden initially)
    gsap.set([path, glow], {
      strokeDasharray: total,
      strokeDashoffset: total,
    });

    // Draw on scroll
    const tween = gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: trigger,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
      duration: 1,
    });

    // Gentle rotation
    const rotate = gsap.to([path, glow], {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1,
    });

    // Subtle pulsing
    const pulse = gsap.to([path, glow], {
      scale: 1.05,
      duration: 4,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      rotate.kill();
      pulse.kill();
    };
  }, [trigger]);

  // Create circular path with slight imperfections like a rope
  const radius = (size - strokeWidth * 2) / 2;
  const center = size / 2;
  
  // Create a slightly irregular circle to mimic rope texture
  const createRopePath = () => {
    const segments = 32;
    const pathCommands = [];
    
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * 2 * Math.PI;
      const variation = Math.sin(angle * 8) * 2; // Small rope-like variations
      const currentRadius = radius + variation;
      
      const x = center + currentRadius * Math.cos(angle);
      const y = center + currentRadius * Math.sin(angle);
      
      if (i === 0) {
        pathCommands.push(`M ${x} ${y}`);
      } else {
        // Use curve commands for smoother rope-like appearance
        const prevAngle = ((i - 1) / segments) * 2 * Math.PI;
        const prevVariation = Math.sin(prevAngle * 8) * 2;
        const prevRadius = radius + prevVariation;
        const prevX = center + prevRadius * Math.cos(prevAngle);
        const prevY = center + prevRadius * Math.sin(prevAngle);
        
        // Control points for smooth curves
        const cp1x = prevX + (currentRadius * 0.1) * Math.cos(prevAngle + Math.PI/2);
        const cp1y = prevY + (currentRadius * 0.1) * Math.sin(prevAngle + Math.PI/2);
        const cp2x = x - (currentRadius * 0.1) * Math.cos(angle + Math.PI/2);
        const cp2y = y - (currentRadius * 0.1) * Math.sin(angle + Math.PI/2);
        
        pathCommands.push(`C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${x} ${y}`);
      }
    }
    
    pathCommands.push('Z'); // Close the path
    return pathCommands.join(' ');
  };

  const pathData = createRopePath();

  return (
    <div className={`absolute inset-0 pointer-events-none z-0 flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute"
      >
        <defs>
          <linearGradient id="circularRopeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="25%" stopColor="hsl(var(--accent))" stopOpacity="0.9" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.7" />
            <stop offset="75%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
          </linearGradient>
          <filter id="circularRopeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft glow behind */}
        <path
          ref={glowPathRef}
          d={pathData}
          fill="none"
          stroke="url(#circularRopeGradient)"
          strokeWidth={strokeWidth * 1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.15}
          filter="url(#circularRopeGlow)"
        />

        {/* Main rope */}
        <path
          ref={mainPathRef}
          d={pathData}
          fill="none"
          stroke="url(#circularRopeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.7}
        />
      </svg>
    </div>
  );
};