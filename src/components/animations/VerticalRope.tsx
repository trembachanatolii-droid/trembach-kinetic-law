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

  // Diagonal rope: from top-left toward bottom-right with gentle arcs.
  const margin = 96;
  const d = [
    `M ${margin} 0`,
    `C ${viewW * 0.25} ${viewH * 0.12}, ${viewW * 0.18} ${viewH * 0.28}, ${viewW * 0.36} ${viewH * 0.36}`,
    `C ${viewW * 0.54} ${viewH * 0.46}, ${viewW * 0.48} ${viewH * 0.62}, ${viewW * 0.66} ${viewH * 0.72}`,
    `C ${viewW * 0.84} ${viewH * 0.82}, ${viewW * 0.72} ${viewH * 0.92}, ${viewW - margin} ${viewH - margin}`
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
