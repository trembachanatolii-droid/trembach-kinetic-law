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
      // Mobile: Follow the red marker — start near top-right, descend the right edge, sweep across bottom to left
      return [
        `M ${viewW * 0.82} ${viewH * 0.16}`,
        // slight lead to the right, then begin descending
        `C ${viewW * 0.9} ${viewH * 0.14}, ${viewW * 0.96} ${viewH * 0.18}, ${viewW * 0.98} ${viewH * 0.24}`,
        // right side down
        `C ${viewW * 0.99} ${viewH * 0.36}, ${viewW * 0.95} ${viewH * 0.58}, ${viewW * 0.9} ${viewH * 0.76}`,
        // long bottom sweep to the left
        `C ${viewW * 0.8} ${viewH * 0.88}, ${viewW * 0.6} ${viewH * 0.92}, ${viewW * 0.42} ${viewH * 0.9}`,
        `C ${viewW * 0.26} ${viewH * 0.88}, ${viewW * 0.16} ${viewH * 0.86}, ${viewW * 0.08} ${viewH * 0.84}`
      ].join(' ');
    }

    // Desktop: Follow the red marker — start upper-right, descend along right curve, then a long near-horizontal bottom sweep
    return [
      `M ${viewW * 0.82} ${viewH * 0.14}`,
      // gentle move to the right top
      `C ${viewW * 0.9} ${viewH * 0.12}, ${viewW * 0.96} ${viewH * 0.16}, ${viewW * 0.985} ${viewH * 0.22}`,
      // right side descent
      `C ${viewW * 0.995} ${viewH * 0.34}, ${viewW * 0.97} ${viewH * 0.56}, ${viewW * 0.92} ${viewH * 0.74}`,
      // begin bottom rounding
      `C ${viewW * 0.85} ${viewH * 0.86}, ${viewW * 0.72} ${viewH * 0.9}, ${viewW * 0.58} ${viewH * 0.9}`,
      // long, almost straight sweep to the left
      `C ${viewW * 0.42} ${viewH * 0.9}, ${viewW * 0.26} ${viewH * 0.9}, ${viewW * 0.12} ${viewH * 0.88}`,
      // taper toward left bottom
      `C ${viewW * 0.08} ${viewH * 0.87}, ${viewW * 0.06} ${viewH * 0.86}, ${viewW * 0.05} ${viewH * 0.86}`
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