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

    // Draw once when section enters, keep visible afterwards
    const startPos = isMobile ? 'top 95%' : 'top 80%';
    const tween = gsap.fromTo(
      [path, glow],
      { strokeDashoffset: total },
      {
        strokeDashoffset: 0,
        ease: 'power1.out',
        duration: isMobile ? 1.1 : 1.4,
        scrollTrigger: {
          trigger: `#${sectionId}`,
          start: startPos,
          once: true,
          invalidateOnRefresh: true,
        },
      }
    );

    // Gentle sway animation (continuous, independent of scroll)
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
      // Mobile: closely follow the red marker path (start top-center, arc right, descend, long bottom sweep to left, exit bottom-left)
      return [
        `M ${viewW * 0.5} ${viewH * 0.09}`,
        // Upper arc to the right
        `C ${viewW * 0.68} ${viewH * 0.12}, ${viewW * 0.86} ${viewH * 0.18}, ${viewW * 0.94} ${viewH * 0.42}`,
        // Descend on the right side
        `C ${viewW * 0.9} ${viewH * 0.6}, ${viewW * 0.74} ${viewH * 0.7}, ${viewW * 0.58} ${viewH * 0.72}`,
        // Long, fairly flat bottom sweep toward the left
        `C ${viewW * 0.42} ${viewH * 0.74}, ${viewW * 0.28} ${viewH * 0.74}, ${viewW * 0.16} ${viewH * 0.73}`,
        // Bottom-left tail
        `C ${viewW * 0.10} ${viewH * 0.72}, ${viewW * 0.07} ${viewH * 0.82}, ${viewW * 0.05} ${viewH * 0.90}`,
        `C ${viewW * 0.04} ${viewH * 0.97}, ${viewW * 0.03} ${viewH * 1.05}, ${viewW * 0.03} ${viewH * 1.12}`
      ].join(' ');
    }

    // Desktop: same movement but with a bit more width and gentle curvature
    return [
      `M ${viewW * 0.5} ${viewH * 0.08}`,
      `C ${viewW * 0.7} ${viewH * 0.12}, ${viewW * 0.9} ${viewH * 0.18}, ${viewW * 0.96} ${viewH * 0.44}`,
      `C ${viewW * 0.92} ${viewH * 0.62}, ${viewW * 0.78} ${viewH * 0.72}, ${viewW * 0.62} ${viewH * 0.74}`,
      `C ${viewW * 0.46} ${viewH * 0.76}, ${viewW * 0.30} ${viewH * 0.76}, ${viewW * 0.16} ${viewH * 0.75}`,
      `C ${viewW * 0.10} ${viewH * 0.74}, ${viewW * 0.07} ${viewH * 0.84}, ${viewW * 0.05} ${viewH * 0.92}`,
      `C ${viewW * 0.04} ${viewH * 1.00}, ${viewW * 0.03} ${viewH * 1.10}, ${viewW * 0.02} ${viewH * 1.16}`
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