import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
  strokeWidth = 24,
  className = '',
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

    // Draw on scroll within the section
    const tween = gsap.to([path, glow], {
      strokeDashoffset: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: `#${sectionId}`,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
      duration: 1,
    });

    // Gentle sway animation
    const sway = gsap.to([path, glow], {
      x: 4,
      duration: 3,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      sway.kill();
    };
  }, [sectionId]);

  // Create curved diagonal path based on direction
  const viewW = 1200;
  const viewH = 800;
  
  const createPath = () => {
    if (direction === 'left-to-right') {
      // Top-left to bottom-right with elegant curves
      return [
        `M 80 60`,
        `C 200 120, 300 180, 450 300`,
        `C 600 420, 750 480, 900 580`,
        `C 1000 640, 1080 700, 1120 740`
      ].join(' ');
    } else {
      // Top-right to bottom-left with elegant curves
      return [
        `M 1120 60`,
        `C 1000 120, 900 180, 750 300`,
        `C 600 420, 450 480, 300 580`,
        `C 200 640, 120 700, 80 740`
      ].join(' ');
    }
  };

  const pathData = createPath();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox={`0 0 ${viewW} ${viewH}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id={`ropeGradient-${sectionId}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" />
            <stop offset="50%" stopColor="hsl(var(--primary-foreground))" />
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
          strokeWidth={strokeWidth * 1.8}
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
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.8}
        />
      </svg>
    </div>
  );
};