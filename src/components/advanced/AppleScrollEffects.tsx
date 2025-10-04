import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Apple-style scroll-linked animation hook
 * Creates smooth fade + blur + scale effects tied to scroll position
 */
export const useAppleScrollReveal = (options: {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Apple-style: Element starts from below, blurred, scaled down
    gsap.fromTo(
      element,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: 'blur(10px)',
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)', // Apple's signature ease
        scrollTrigger: {
          trigger: options.trigger || element,
          start: options.start || 'top 85%',
          end: options.end || 'top 60%',
          scrub: options.scrub !== undefined ? options.scrub : 1,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) trigger.kill();
      });
    };
  }, [options.trigger, options.start, options.end, options.scrub]);

  return ref;
};

/**
 * Apple-style parallax effect
 * Multiple layers move at different speeds for depth
 */
export const useAppleParallax = (speed: number = 0.5) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // GPU-accelerated parallax
    gsap.to(element, {
      y: () => -100 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element.parentElement,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element.parentElement) trigger.kill();
      });
    };
  }, [speed]);

  return ref;
};

/**
 * Apple-style magnetic effect for interactive elements
 * Cards/buttons subtly follow cursor
 */
export const useMagneticEffect = (strength: number = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.6,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.8,
        ease: 'elastic.out(1, 0.5)',
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
};

/**
 * Apple-style text reveal
 * Words/lines fade in sequentially with blur effect
 */
export const useAppleTextReveal = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Split text into words
    const text = element.textContent || '';
    const words = text.split(' ');
    
    element.innerHTML = words
      .map((word) => `<span class="inline-block opacity-0">${word}</span>`)
      .join(' ');

    const wordElements = element.querySelectorAll('span');

    gsap.fromTo(
      wordElements,
      {
        opacity: 0,
        y: 20,
        filter: 'blur(8px)',
      },
      {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        stagger: 0.08,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      element.textContent = text;
    };
  }, []);

  return ref;
};

/**
 * Apple-style elevated card hover
 * Smooth scale + shadow + lift on hover
 */
export const useAppleCardHover = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseEnter = () => {
      gsap.to(element, {
        y: -8,
        scale: 1.02,
        boxShadow: '0 24px 48px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.1)',
        duration: 0.4,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        y: 0,
        scale: 1,
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
        duration: 0.5,
        ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
};
