import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AppleScrollSectionProps {
  children: React.ReactNode;
  className?: string;
  backgroundLayers?: number;
  enableParallax?: boolean;
}

/**
 * Apple-style scroll section wrapper
 * Includes multi-layer parallax backgrounds and smooth scroll reveals
 */
export const AppleScrollSection: React.FC<AppleScrollSectionProps> = ({
  children,
  className = '',
  backgroundLayers = 3,
  enableParallax = true,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const layerRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !enableParallax) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Apple-style: Multi-layer parallax with different speeds
    layerRefs.current.forEach((layer, index) => {
      if (!layer) return;

      const speed = (index + 1) * 0.3; // Layer 1: 0.3x, Layer 2: 0.6x, Layer 3: 0.9x
      
      gsap.to(layer, {
        y: () => -150 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) trigger.kill();
      });
    };
  }, [enableParallax, backgroundLayers]);

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Apple-style parallax background layers */}
      {enableParallax && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(backgroundLayers)].map((_, index) => (
            <div
              key={index}
              ref={(el) => el && (layerRefs.current[index] = el)}
              className="absolute inset-0"
              style={{
                zIndex: index,
                opacity: 0.3 - index * 0.08,
              }}
            >
              {/* Gradient orb */}
              <div
                className="absolute rounded-full"
                style={{
                  width: `${300 + index * 100}px`,
                  height: `${300 + index * 100}px`,
                  left: `${20 + index * 15}%`,
                  top: `${10 + index * 20}%`,
                  background: `radial-gradient(circle, hsl(var(--primary) / ${0.15 - index * 0.03}) 0%, transparent 70%)`,
                  filter: `blur(${40 + index * 20}px)`,
                }}
              />
            </div>
          ))}
          
          {/* Subtle gradient overlay (Apple signature) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </section>
  );
};

export default AppleScrollSection;
