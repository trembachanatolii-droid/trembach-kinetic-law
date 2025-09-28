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
      if (direction === 'left-to-right') {
        // Mobile: pronounced sweep from top-left curving down, then towards bottom-right
        return [
          `M 0 60`,
          `C ${viewW * 0.15} 180, ${viewW * 0.25} 360, ${viewW * 0.38} ${viewH * 0.6}`,
          `C ${viewW * 0.55} ${viewH * 0.8}, ${viewW * 0.75} ${viewH * 0.9}, ${viewW} ${viewH - 40}`
        ].join(' ');
      } else {
        // Mobile mirrored path
        return [
          `M ${viewW} 60`,
          `C ${viewW * 0.85} 180, ${viewW * 0.75} 360, ${viewW * 0.62} ${viewH * 0.6}`,
          `C ${viewW * 0.45} ${viewH * 0.8}, ${viewW * 0.25} ${viewH * 0.9}, 0 ${viewH - 40}`
        ].join(' ');
      }
    }

    if (direction === 'left-to-right') {
      // Desktop: Top-left to bottom-right with elegant S-curve across the whole section
      return [
        `M 0 40`,
        `C ${viewW * 0.2} 120, ${viewW * 0.3} 180, ${viewW * 0.42} ${viewH * 0.35}`,
        `C ${viewW * 0.58} ${viewH * 0.5}, ${viewW * 0.7} ${viewH * 0.62}, ${viewW * 0.84} ${viewH * 0.68}`,
        `C ${viewW * 0.94} ${viewH * 0.72}, ${viewW * 0.98} ${viewH * 0.86}, ${viewW} ${viewH - 40}`
      ].join(' ');
    } else {
      // Desktop mirrored S-curve
      return [
        `M ${viewW} 40`,
        `C ${viewW * 0.8} 120, ${viewW * 0.7} 180, ${viewW * 0.58} ${viewH * 0.35}`,
        `C ${viewW * 0.42} ${viewH * 0.5}, ${viewW * 0.3} ${viewH * 0.62}, ${viewW * 0.16} ${viewH * 0.68}`,
        `C ${viewW * 0.06} ${viewH * 0.72}, ${viewW * 0.02} ${viewH * 0.86}, 0 ${viewH - 40}`
      ].join(' ');
    }
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