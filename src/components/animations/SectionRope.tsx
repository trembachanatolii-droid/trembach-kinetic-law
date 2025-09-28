import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useIsMobile } from '../../hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

interface SectionRopeProps {
  sectionId: string;
  direction?: 'left-to-right' | 'right-to-left';
  strokeWidth?: number;
  className?: string;
}

export const SectionRope: React.FC<SectionRopeProps> = ({
  sectionId,
  direction = 'left-to-right',
  strokeWidth = 16,
  className = '',
}) => {
  const mainPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const isMobile = useIsMobile();

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

    // Draw on scroll within the section
    const startPos = isMobile ? 'top 95%' : 'top 80%';
    const endPos = isMobile ? 'bottom 5%' : 'bottom 20%';
    const tween = gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: `#${sectionId}`,
        start: startPos,
        end: endPos,
        scrub: 1,
      },
      duration: 1,
    });

    // Gentle sway animation
    const sway = gsap.to([path, glow], {
      x: isMobile ? 8 : 4,
      y: isMobile ? 6 : 0,
      duration: isMobile ? 4.5 : 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      sway.kill();
    };
  }, [sectionId, isMobile]);

  // Create curved diagonal path based on direction
  const viewW = 1200;
  const viewH = 800;
  const sw = isMobile ? Math.max(4, strokeWidth * 0.5) : strokeWidth;

  const createPath = () => {
    if (isMobile) {
      // Mobile: Zig-zag through content sections - start upper right, weave through boxes
      return [
        `M ${viewW * 0.82} ${viewH * 0.16}`,
        // Curve down right edge
        `C ${viewW * 0.9} ${viewH * 0.14}, ${viewW * 0.96} ${viewH * 0.18}, ${viewW * 0.98} ${viewH * 0.24}`,
        `C ${viewW * 0.99} ${viewH * 0.32}, ${viewW * 0.96} ${viewH * 0.38}, ${viewW * 0.9} ${viewH * 0.42}`,
        // Zig-zag through top row sections (Legal Defense -> Client Advocacy -> Trial Experience)
        `C ${viewW * 0.75} ${viewH * 0.45}, ${viewW * 0.6} ${viewH * 0.43}, ${viewW * 0.5} ${viewH * 0.46}`,
        `C ${viewW * 0.35} ${viewH * 0.49}, ${viewW * 0.25} ${viewH * 0.47}, ${viewW * 0.15} ${viewH * 0.5}`,
        // Drop down and zig-zag through bottom row (USC Law -> Strategy -> Results)
        `C ${viewW * 0.25} ${viewH * 0.58}, ${viewW * 0.35} ${viewH * 0.62}, ${viewW * 0.5} ${viewH * 0.6}`,
        `C ${viewW * 0.65} ${viewH * 0.58}, ${viewW * 0.8} ${viewH * 0.62}, ${viewW * 0.9} ${viewH * 0.65}`,
        // Long horizontal sweep at bottom
        `C ${viewW * 0.8} ${viewH * 0.8}, ${viewW * 0.6} ${viewH * 0.85}, ${viewW * 0.4} ${viewH * 0.87}`,
        `C ${viewW * 0.25} ${viewH * 0.88}, ${viewW * 0.15} ${viewH * 0.86}, ${viewW * 0.08} ${viewH * 0.84}`
      ].join(' ');
    }

    // Desktop: Zig-zag through content sections exactly like the red marker
    return [
      `M ${viewW * 0.82} ${viewH * 0.14}`,
      // Curve down right edge
      `C ${viewW * 0.9} ${viewH * 0.12}, ${viewW * 0.96} ${viewH * 0.16}, ${viewW * 0.985} ${viewH * 0.22}`,
      `C ${viewW * 0.995} ${viewH * 0.3}, ${viewW * 0.97} ${viewH * 0.36}, ${viewW * 0.92} ${viewH * 0.4}`,
      // Zig-zag through top row sections (Trial Experience -> Client Advocacy -> Legal Defense)
      `C ${viewW * 0.8} ${viewH * 0.42}, ${viewW * 0.65} ${viewH * 0.41}, ${viewW * 0.5} ${viewH * 0.43}`,
      `C ${viewW * 0.35} ${viewH * 0.45}, ${viewW * 0.2} ${viewH * 0.44}, ${viewW * 0.08} ${viewH * 0.46}`,
      // Drop down and zig-zag through bottom row (USC Law -> Strategy -> Results)  
      `C ${viewW * 0.2} ${viewH * 0.54}, ${viewW * 0.35} ${viewH * 0.58}, ${viewW * 0.5} ${viewH * 0.56}`,
      `C ${viewW * 0.65} ${viewH * 0.54}, ${viewW * 0.8} ${viewH * 0.58}, ${viewW * 0.92} ${viewH * 0.62}`,
      // Long horizontal sweep at bottom
      `C ${viewW * 0.8} ${viewH * 0.75}, ${viewW * 0.6} ${viewH * 0.82}, ${viewW * 0.4} ${viewH * 0.85}`,
      `C ${viewW * 0.25} ${viewW * 0.86}, ${viewW * 0.15} ${viewH * 0.85}, ${viewW * 0.05} ${viewH * 0.84}`
    ].join(' ');
  };

  const pathData = createPath();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`ropeGradient-${sectionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id={`ropeGlow-${sectionId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
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
          stroke={`url(#ropeGradient-${sectionId})`}
          strokeWidth={sw * 1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.12}
          filter={`url(#ropeGlow-${sectionId})`}
        />

        {/* Main rope */}
        <path
          ref={mainPathRef}
          d={pathData}
          fill="none"
          stroke={`url(#ropeGradient-${sectionId})`}
          strokeWidth={sw}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.8}
        />
      </svg>
    </div>
  );
};