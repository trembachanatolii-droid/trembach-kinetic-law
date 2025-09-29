import { useEffect, useRef, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface RopeScrollOptions {
  duration?: number;
  ease?: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  reverse?: boolean;
}

export const useRopeScrollAnimation = (
  pathRef: RefObject<SVGPathElement>,
  options: RopeScrollOptions = {}
) => {
  const {
    duration = 1,
    ease = "none",
    start = "top 80%",
    end = "bottom 20%",
    scrub = 1,
    reverse = false
  } = options;

  useEffect(() => {
    if (!pathRef.current) return;

    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set initial state - path is hidden
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: reverse ? -pathLength : pathLength,
    });

    // Create the scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: path,
        start: start,
        end: end,
        scrub: scrub,
        onUpdate: (self) => {
          const progress = self.progress;
          const offset = reverse 
            ? -pathLength + (pathLength * progress)
            : pathLength - (pathLength * progress);
          
          gsap.set(path, {
            strokeDashoffset: offset
          });
        }
      }
    });

    return () => {
      tl.kill();
    };
  }, [pathRef, duration, ease, start, end, scrub, reverse]);
};

export const useMultipleRopeAnimation = (
  pathRefs: RefObject<SVGPathElement>[],
  options: RopeScrollOptions = {}
) => {
  useEffect(() => {
    const animations: gsap.core.Timeline[] = [];

    pathRefs.forEach((pathRef, index) => {
      if (!pathRef.current) return;

      const path = pathRef.current;
      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: path,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          scrub: options.scrub !== undefined ? options.scrub : 1,
          onUpdate: (self) => {
            const progress = self.progress;
            const offset = pathLength - (pathLength * progress);
            gsap.set(path, { strokeDashoffset: offset });
          }
        }
      });

      animations.push(tl);
    });

    return () => {
      animations.forEach(tl => tl.kill());
    };
  }, [pathRefs, options]);
};