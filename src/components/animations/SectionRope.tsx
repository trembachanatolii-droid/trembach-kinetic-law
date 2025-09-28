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
      // Mobile: Match red marker - top center to right, down right side, long bottom sweep
      return [
        `M ${viewW * 0.5} ${viewH * 0.08}`,
        // Top arc across to upper right
        `C ${viewW * 0.65} ${viewH * 0.05}, ${viewW * 0.85} ${viewH * 0.08}, ${viewW * 0.92} ${viewH * 0.15}`,
        // Right side down
        `C ${viewW * 0.96} ${viewH * 0.3}, ${viewW * 0.94} ${viewH * 0.5}, ${viewW * 0.9} ${viewH * 0.75}`,
        // Long sweeping curve across bottom
        `C ${viewW * 0.8} ${viewH * 0.9}, ${viewW * 0.6} ${viewH * 0.95}, ${viewW * 0.4} ${viewH * 0.92}`,
        `C ${viewW * 0.25} ${viewH * 0.88}, ${viewW * 0.15} ${viewH * 0.85}, ${viewW * 0.08} ${viewH * 0.8}`
      ].join(' ');
    }

    // Desktop: Match red marker exactly - top center arc to right, down, long bottom sweep
    return [
      `M ${viewW * 0.5} ${viewH * 0.06}`,
      // Top arc from center to upper right
      `C ${viewW * 0.65} ${viewH * 0.02}, ${viewW * 0.85} ${viewH * 0.05}, ${viewW * 0.95} ${viewH * 0.12}`,
      // Right side curve down
      `C ${viewW * 0.98} ${viewH * 0.25}, ${viewW * 0.96} ${viewH * 0.45}, ${viewW * 0.92} ${viewH * 0.65}`,
      `C ${viewW * 0.88} ${viewH * 0.78}, ${viewW * 0.82} ${viewH * 0.85}, ${viewW * 0.75} ${viewH * 0.88}`,
      // Long sweeping curve across the entire bottom
      `C ${viewW * 0.65} ${viewH * 0.92}, ${viewW * 0.5} ${viewH * 0.95}, ${viewW * 0.35} ${viewH * 0.92}`,
      `C ${viewW * 0.25} ${viewH * 0.89}, ${viewW * 0.15} ${viewH * 0.86}, ${viewW * 0.05} ${viewH * 0.8}`
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