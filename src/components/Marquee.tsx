import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface MarqueeProps {
  direction?: 'left' | 'right';
  speed?: number;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ direction = 'left', speed = 60, children }) => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    const firstElement = marquee.children[0] as HTMLElement;
    const secondElement = marquee.children[1] as HTMLElement;

    // Clone for seamless loop
    const duration = speed;
    const directionMultiplier = direction === 'left' ? -1 : 1;

    const timeline = gsap.timeline({ repeat: -1 });

    timeline
      .set([firstElement, secondElement], {
        x: direction === 'left' ? '0%' : '-100%',
      })
      .to([firstElement, secondElement], {
        x: direction === 'left' ? '-100%' : '0%',
        duration: duration,
        ease: 'none',
      });

    return () => {
      timeline.kill();
    };
  }, [direction, speed]);

  return (
    <div className="relative overflow-hidden whitespace-nowrap py-6">
      <div ref={marqueeRef} className="flex">
        <div className="flex shrink-0 items-center gap-8 px-4">
          {children}
        </div>
        <div className="flex shrink-0 items-center gap-8 px-4" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

const MarqueeBand: React.FC<{ items: string[], direction?: 'left' | 'right' }> = ({ 
  items, 
  direction = 'left' 
}) => {
  return (
    <div className="bg-surface/20 border-y border-border/10 glow">
      <Marquee direction={direction}>
        {items.map((item, index) => (
          <span 
            key={index} 
            className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-foreground/90"
          >
            {item}
            <span className="mx-8 text-primary">•</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
};

export { Marquee, MarqueeBand };