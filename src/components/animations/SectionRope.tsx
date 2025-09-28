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
      // Mobile: Start at far left top of "About Trembach Law Firm" and weave smoothly between all subsections
      return [
        `M ${viewW * 0.04} ${viewH * 0.08}`,
        // Between main title and subtitle
        `C ${viewW * 0.18} ${viewH * 0.08}, ${viewW * 0.32} ${viewH * 0.10}, ${viewW * 0.46} ${viewH * 0.12}`,
        // A Unique Advantage -> Having seen firsthand...
        `C ${viewW * 0.64} ${viewH * 0.14}, ${viewW * 0.78} ${viewH * 0.18}, ${viewW * 0.90} ${viewH * 0.20}`,
        `C ${viewW * 0.76} ${viewH * 0.24}, ${viewW * 0.58} ${viewH * 0.26}, ${viewW * 0.40} ${viewH * 0.28}`,
        // The Inside Advantage -> Attorney Credentials
        `C ${viewW * 0.24} ${viewH * 0.30}, ${viewW * 0.14} ${viewH * 0.32}, ${viewW * 0.10} ${viewH * 0.34}`,
        `C ${viewW * 0.26} ${viewH * 0.36}, ${viewW * 0.44} ${viewH * 0.38}, ${viewW * 0.60} ${viewH * 0.40}`,
        // Client Service -> Bar Admissions
        `C ${viewW * 0.76} ${viewH * 0.42}, ${viewW * 0.88} ${viewH * 0.46}, ${viewW * 0.94} ${viewH * 0.50}`,
        `C ${viewW * 0.78} ${viewH * 0.54}, ${viewW * 0.60} ${viewH * 0.56}, ${viewW * 0.44} ${viewH * 0.58}`,
        // The Truth About Your Case -> gentle finish
        `C ${viewW * 0.28} ${viewH * 0.60}, ${viewW * 0.16} ${viewH * 0.62}, ${viewW * 0.08} ${viewH * 0.64}`,
        `C ${viewW * 0.24} ${viewH * 0.68}, ${viewW * 0.44} ${viewH * 0.72}, ${viewW * 0.62} ${viewH * 0.74}`,
        `C ${viewW * 0.76} ${viewH * 0.78}, ${viewW * 0.60} ${viewH * 0.84}, ${viewW * 0.36} ${viewH * 0.86}`,
        `C ${viewW * 0.22} ${viewH * 0.88}, ${viewW * 0.12} ${viewH * 0.88}, ${viewW * 0.06} ${viewH * 0.86}`
      ].join(' ');
    }

    // Desktop: Start at far left top and zig-zag smoothly between all listed subsections
    return [
      `M ${viewW * 0.02} ${viewH * 0.06}`,
      // Between main title and subtitle ("From Defense to Your Defense")
      `C ${viewW * 0.18} ${viewH * 0.06}, ${viewW * 0.32} ${viewH * 0.08}, ${viewW * 0.48} ${viewH * 0.11}`,
      // A Unique Advantage -> Having seen firsthand
      `C ${viewW * 0.68} ${viewH * 0.12}, ${viewW * 0.82} ${viewH * 0.16}, ${viewW * 0.96} ${viewH * 0.19}`,
      `C ${viewW * 0.82} ${viewH * 0.23}, ${viewW * 0.64} ${viewH * 0.25}, ${viewW * 0.46} ${viewH * 0.27}`,
      // The Inside Advantage -> Attorney Credentials & Qualifications
      `C ${viewW * 0.30} ${viewH * 0.29}, ${viewW * 0.18} ${viewH * 0.31}, ${viewW * 0.10} ${viewH * 0.33}`,
      `C ${viewW * 0.26} ${viewH * 0.35}, ${viewW * 0.44} ${viewH * 0.37}, ${viewW * 0.62} ${viewH * 0.39}`,
      // Client Service -> Bar Admissions
      `C ${viewW * 0.78} ${viewH * 0.41}, ${viewW * 0.90} ${viewH * 0.45}, ${viewW * 0.96} ${viewH * 0.48}`,
      `C ${viewW * 0.82} ${viewH * 0.52}, ${viewW * 0.64} ${viewH * 0.54}, ${viewW * 0.48} ${viewH * 0.56}`,
      `C ${viewW * 0.32} ${viewH * 0.58}, ${viewW * 0.18} ${viewH * 0.60}, ${viewW * 0.08} ${viewH * 0.62}`,
      // The Truth About Your Case -> graceful finish
      `C ${viewW * 0.24} ${viewH * 0.64}, ${viewW * 0.44} ${viewH * 0.66}, ${viewW * 0.62} ${viewH * 0.68}`,
      `C ${viewW * 0.78} ${viewH * 0.70}, ${viewW * 0.90} ${viewH * 0.74}, ${viewW * 0.96} ${viewH * 0.76}`,
      `C ${viewW * 0.80} ${viewH * 0.80}, ${viewW * 0.58} ${viewH * 0.84}, ${viewW * 0.36} ${viewH * 0.86}`,
      `C ${viewW * 0.22} ${viewH * 0.88}, ${viewW * 0.12} ${viewH * 0.88}, ${viewW * 0.06} ${viewH * 0.86}`
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