import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VerticalRopeProps {
  startElement?: string; // CSS selector for the section where rope begins
  className?: string;
  strokeWidth?: number;
  lengthPx?: number; // visual length of the rope path in SVG units
}

// Single, Lusion-style vertical rope with curvature, gradient, and glow.
// Drawn on scroll using stroke-dash technique and gently sways for life.
export const VerticalRope: React.FC<VerticalRopeProps> = ({
  startElement = '#about',
  className = '',
  strokeWidth = 64,
  lengthPx = 3000,
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

    // Draw on scroll from the About section downward
    const tween = gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: startElement,
        start: 'top top',
        end: `+=${Math.floor(total)}`,
        scrub: 1.5,
      },
      duration: 1,
    });

    // Gentle micro-sway for a living feel
    const sway = gsap.to([path, glow], {
      x: 8,
      duration: 2.2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      sway.kill();
    };
  }, [startElement]);

  // Build a tall curved path that meanders left/right while moving down.
  // ViewBox is wide enough to allow lateral motion.
  const viewW = 1440;
  const viewH = lengthPx; // Make SVG tall so rope can extend

  // Flowing rope with loops like the reference image
  const centerX = viewW / 2;
  const loopRadius = 120;
  
  const d = [
    // Start from top-left area
    `M ${centerX - 200} 50`,
    
    // First flowing curve down and right
    `C ${centerX - 100} 180, ${centerX + 80} 280, ${centerX + 150} 420`,
    
    // First loop (clockwise circle)
    `C ${centerX + 150 + loopRadius} 420, ${centerX + 150 + loopRadius} ${420 + loopRadius * 2}, ${centerX + 150} ${420 + loopRadius * 2}`,
    `C ${centerX + 150 - loopRadius} ${420 + loopRadius * 2}, ${centerX + 150 - loopRadius} 420, ${centerX + 150} 420`,
    
    // Flow down and left
    `C ${centerX + 50} 720, ${centerX - 120} 880, ${centerX - 180} 1020`,
    
    // Second loop (clockwise circle)
    `C ${centerX - 180 - loopRadius} 1020, ${centerX - 180 - loopRadius} ${1020 + loopRadius * 2}, ${centerX - 180} ${1020 + loopRadius * 2}`,
    `C ${centerX - 180 + loopRadius} ${1020 + loopRadius * 2}, ${centerX - 180 + loopRadius} 1020, ${centerX - 180} 1020`,
    
    // Continue flowing down with curves
    `C ${centerX - 80} 1400, ${centerX + 100} 1600, ${centerX + 200} 1800`,
    `C ${centerX + 300} 2000, ${centerX - 50} 2200, ${centerX} ${viewH - 100}`
  ].join(' ');

  return (
    <div className={`fixed inset-0 pointer-events-none z-10 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="xMinYMin slice"
      >
        <defs>
          <linearGradient id="ropeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id="ropeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="18" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Soft glow behind */}
        <path
          ref={glowPathRef}
          d={d}
          fill="none"
          stroke="url(#ropeGradient)"
          strokeWidth={strokeWidth * 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.18}
          filter="url(#ropeGlow)"
        />

        {/* Main rope */}
        <path
          ref={mainPathRef}
          d={d}
          fill="none"
          stroke="url(#ropeGradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.95}
        />
      </svg>
    </div>
  );
};
