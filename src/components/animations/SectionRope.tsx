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
  strokeWidth = 6,
  className = '',
}) => {
  const mainPathRef = useRef<SVGPathElement>(null);
  const glowPathRef = useRef<SVGPathElement>(null);
  const markerRef = useRef<SVGCircleElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const path = mainPathRef.current;
    const glow = glowPathRef.current;
    const marker = markerRef.current;
    if (!path || !glow || !marker) return;

    const total = path.getTotalLength();

    // Prepare paths and marker (hidden initially)
    gsap.set([path, glow], {
      strokeDasharray: total,
      strokeDashoffset: total,
    });
    
    gsap.set(marker, {
      opacity: 0,
    });

    // Create scroll-pinned section with segmented animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#${sectionId}`,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          const progress = self.progress;
          let segmentProgress = 0;
          
          // Segment 1: Top sweep (0-35%)
          if (progress <= 0.35) {
            segmentProgress = progress / 0.35;
            gsap.set([path, glow], {
              strokeDashoffset: total * (1 - segmentProgress * 0.35),
            });
          }
          // Segment 2: Right descent (35-55%)
          else if (progress <= 0.55) {
            segmentProgress = (progress - 0.35) / 0.2;
            gsap.set([path, glow], {
              strokeDashoffset: total * (1 - 0.35 - segmentProgress * 0.2),
            });
          }
          // Segment 3: Bottom sweep (55-100%)
          else {
            segmentProgress = (progress - 0.55) / 0.45;
            gsap.set([path, glow], {
              strokeDashoffset: total * (1 - 0.55 - segmentProgress * 0.45),
            });
          }

          // Update marker position
          const point = path.getPointAtLength(total * progress);
          gsap.set(marker, {
            cx: point.x,
            cy: point.y,
            opacity: progress > 0 ? 1 : 0,
          });
        },
      },
      ease: 'power2.inOut',
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [sectionId, isMobile]);

  // Create path that frames Anatolii Trembach's portrait capsule
  const viewW = 1200;
  const viewH = 800;
  const sw = isMobile ? Math.max(4, strokeWidth * 0.8) : strokeWidth;

  const createPath = () => {
    if (isMobile) {
      // Mobile: Simplified path around portrait capsule
      return [
        // Start at top-left corner of portrait capsule
        `M ${viewW * 0.1} ${viewH * 0.15}`,
        // Top sweep - shortened for mobile
        `C ${viewW * 0.25} ${viewH * 0.13}, ${viewW * 0.4} ${viewH * 0.12}, ${viewW * 0.55} ${viewH * 0.14}`,
        `C ${viewW * 0.7} ${viewH * 0.16}, ${viewW * 0.8} ${viewH * 0.18}, ${viewW * 0.85} ${viewH * 0.22}`,
        // Right descent - less tall for mobile
        `C ${viewW * 0.87} ${viewH * 0.28}, ${viewW * 0.86} ${viewH * 0.35}, ${viewW * 0.83} ${viewH * 0.42}`,
        `C ${viewW * 0.8} ${viewH * 0.48}, ${viewW * 0.75} ${viewH * 0.52}, ${viewW * 0.68} ${viewH * 0.55}`,
        // Bottom sweep - aligned above stacked feature tiles
        `C ${viewW * 0.55} ${viewH * 0.57}, ${viewW * 0.4} ${viewH * 0.58}, ${viewW * 0.25} ${viewH * 0.57}`,
        `C ${viewW * 0.18} ${viewH * 0.56}, ${viewW * 0.12} ${viewH * 0.55}, ${viewW * 0.08} ${viewH * 0.53}`
      ].join(' ');
    }

    // Desktop: Full 3-segment path around portrait capsule
    return [
      // Start at top-left corner of gradient capsule
      `M ${viewW * 0.08} ${viewH * 0.12}`,
      
      // Top sweep - horizontally across top edge of capsule
      `C ${viewW * 0.2} ${viewH * 0.1}, ${viewW * 0.35} ${viewH * 0.09}, ${viewW * 0.5} ${viewH * 0.1}`,
      `C ${viewW * 0.65} ${viewH * 0.11}, ${viewW * 0.78} ${viewH * 0.13}, ${viewW * 0.88} ${viewH * 0.16}`,
      `C ${viewW * 0.92} ${viewH * 0.18}, ${viewW * 0.94} ${viewH * 0.2}, ${viewW * 0.95} ${viewH * 0.23}`,
      
      // Right descent - curve down along right side of portrait circle
      `C ${viewW * 0.96} ${viewH * 0.28}, ${viewW * 0.95} ${viewH * 0.34}, ${viewW * 0.93} ${viewH * 0.4}`,
      `C ${viewW * 0.9} ${viewH * 0.46}, ${viewW * 0.86} ${viewH * 0.51}, ${viewW * 0.8} ${viewH * 0.55}`,
      `C ${viewW * 0.74} ${viewH * 0.58}, ${viewW * 0.67} ${viewH * 0.6}, ${viewW * 0.59} ${viewH * 0.61}`,
      
      // Bottom sweep - between tagline and first feature row
      `C ${viewW * 0.5} ${viewH * 0.62}, ${viewW * 0.4} ${viewH * 0.62}, ${viewW * 0.3} ${viewH * 0.61}`,
      `C ${viewW * 0.22} ${viewH * 0.6}, ${viewW * 0.15} ${viewH * 0.58}, ${viewW * 0.1} ${viewH * 0.56}`,
      `C ${viewW * 0.07} ${viewH * 0.54}, ${viewW * 0.05} ${viewH * 0.52}, ${viewW * 0.04} ${viewH * 0.5}`
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
            <stop offset="0%" stopColor="#00B2FF" />
            <stop offset="100%" stopColor="hsl(var(--accent))" />
          </linearGradient>
          <filter id={`ropeGlow-${sectionId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id={`markerGlow-${sectionId}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Soft glow behind */}
        <path
          ref={glowPathRef}
          d={pathData}
          fill="none"
          stroke={`url(#ropeGradient-${sectionId})`}
          strokeWidth={sw * 2}
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.35}
          filter={`url(#ropeGlow-${sectionId})`}
          style={{
            filter: 'drop-shadow(0 0 12px rgba(0, 178, 255, 0.35))',
          }}
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
          opacity={0.9}
        />

        {/* Glowing marker circle that follows the rope head */}
        <circle
          ref={markerRef}
          r={isMobile ? 3 : 4}
          fill="#00B2FF"
          opacity={0.8}
          filter={`url(#markerGlow-${sectionId})`}
          style={{
            filter: 'drop-shadow(0 0 8px rgba(0, 178, 255, 0.6))',
          }}
        />
      </svg>
    </div>
  );
};