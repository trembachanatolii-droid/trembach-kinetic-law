import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const IntroducingVine = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ledeRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ring = ringRef.current;
    const flare = flareRef.current;
    const heading = headingRef.current;
    const lede = ledeRef.current;
    const cards = cardsRef.current?.querySelectorAll('.card');

    if (!section || !ring || !flare || !heading || !lede || !cards) return;

    const tl = gsap.timeline({
      defaults: { ease: "power1.out" },
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%",
        scrub: true
      }
    });

    tl.fromTo(ring, { y: 40, opacity: 0.3 }, { y: -40, opacity: 0.8 }, 0)
      .fromTo(flare, { y: -10, x: 0, opacity: 0.35 }, { y: 30, x: 20, opacity: 0.6 }, 0)
      .fromTo(heading, { y: 10, letterSpacing: "0em" }, { y: -10, letterSpacing: "0.02em" }, 0)
      .fromTo(lede, { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.1)
      .fromTo(cards, { y: 30, opacity: 0, rotateX: 8 }, { y: 0, opacity: 1, rotateX: 0, stagger: 0.12 }, 0.15);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden grid place-items-center py-32 px-6"
      id="introducing-vine" 
      aria-labelledby="introvine-heading"
    >
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 -m-[40%] pointer-events-none opacity-40"
        style={{
          background: `
            linear-gradient(transparent 31px, hsl(var(--foreground) / 0.04) 32px),
            linear-gradient(90deg, transparent 31px, hsl(var(--foreground) / 0.04) 32px)
          `,
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(60% 70% at 50% 40%, #000 50%, transparent 100%)'
        }}
      />

      {/* Atmospheric Depth Layers */}
      <div 
        ref={ringRef}
        className="absolute left-1/2 -translate-x-1/2 pointer-events-none z-10 opacity-60 top-[10%]"
        style={{
          width: 'min(950px, 88vw)',
          aspectRatio: '2.4/1',
          borderRadius: '60%',
          background: 'radial-gradient(60% 120% at 50% -10%, hsl(var(--primary) / 0.25), transparent 60%)',
          filter: 'blur(28px)'
        }}
        aria-hidden="true"
      />
      
      <div 
        ref={flareRef}
        className="absolute w-[220px] h-[220px] rounded-full pointer-events-none z-10 right-[6%] top-[16%]"
        style={{
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.55), transparent 60%)',
          filter: 'blur(24px)'
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full relative z-20">
        <div className="tracking-[0.18em] uppercase text-muted-foreground text-xs mb-3">
          Introducing
        </div>
        
        <h1 
          ref={headingRef}
          id="introvine-heading"
          className="m-0 font-bold leading-none text-6xl lg:text-7xl tracking-tight"
        >
          <span 
            className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            VINE
          </span>
        </h1>
        
        <p 
          ref={ledeRef}
          className="max-w-4xl mt-5 mb-7 text-muted-foreground text-lg lg:text-xl leading-relaxed"
        >
          Vine powers <strong className="text-foreground">360° brand universes</strong>, uniting{' '}
          <strong className="text-foreground">commerce</strong>,{' '}
          <strong className="text-foreground">entertainment</strong>, and{' '}
          <strong className="text-foreground">community</strong>.
          Build a modular hub that connects every{' '}
          <strong className="text-foreground">store</strong>,{' '}
          <strong className="text-foreground">street</strong>, and{' '}
          <strong className="text-foreground">screen</strong> into one ecosystem.
        </p>

        <div 
          ref={cardsRef}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-7"
          role="list"
        >
          <article 
            className="card bg-surface/10 border border-border/20 rounded-3xl p-5 backdrop-blur-sm"
            role="listitem"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div 
              className="inline-grid place-items-center w-8 h-8 rounded-xl mb-2 text-sm border border-border/20"
              style={{ background: 'hsl(var(--primary) / 0.12)' }}
            >
              🛒
            </div>
            <h3 className="m-0 mb-2 text-lg font-semibold">Commerce</h3>
            <p className="m-0 text-muted-foreground text-sm">
              Unify product, checkout, and loyalty across channels with a single identity and catalog.
            </p>
          </article>
          
          <article 
            className="card bg-surface/10 border border-border/20 rounded-3xl p-5 backdrop-blur-sm"
            role="listitem"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div 
              className="inline-grid place-items-center w-8 h-8 rounded-xl mb-2 text-sm border border-border/20"
              style={{ background: 'hsl(var(--primary) / 0.12)' }}
            >
              🎬
            </div>
            <h3 className="m-0 mb-2 text-lg font-semibold">Entertainment</h3>
            <p className="m-0 text-muted-foreground text-sm">
              Turn content into conversion with shoppable video, live drops, and creator-led premieres.
            </p>
          </article>
          
          <article 
            className="card bg-surface/10 border border-border/20 rounded-3xl p-5 backdrop-blur-sm"
            role="listitem"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div 
              className="inline-grid place-items-center w-8 h-8 rounded-xl mb-2 text-sm border border-border/20"
              style={{ background: 'hsl(var(--primary) / 0.12)' }}
            >
              👥
            </div>
            <h3 className="m-0 mb-2 text-lg font-semibold">Community</h3>
            <p className="m-0 text-muted-foreground text-sm">
              Own the relationship. Membership tiers, quests, and rewards that compound engagement.
            </p>
          </article>
        </div>

        <div className="mt-6 flex items-center gap-3 text-muted-foreground text-xs flex-wrap" aria-label="Ecosystem">
          <span className="inline-flex items-center gap-2 py-2 px-3 rounded-full border border-border/20 bg-surface/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Store
          </span>
          <span className="inline-flex items-center gap-2 py-2 px-3 rounded-full border border-border/20 bg-surface/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Street
          </span>
          <span className="inline-flex items-center gap-2 py-2 px-3 rounded-full border border-border/20 bg-surface/5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            Screen
          </span>
          <a 
            className="inline-block mt-3 py-2 px-4 rounded-full border border-border/20 text-foreground no-underline text-sm hover:bg-surface/10 transition-colors"
            href="#learn"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroducingVine;