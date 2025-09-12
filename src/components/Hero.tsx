import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        heroRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      );

      // Staggered headline animation
      gsap.fromTo(
        ".hero-line",
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.5
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-between overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/60 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 flex w-full h-screen">
        {/* Main Content - Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16">
          <div ref={headlineRef} className="space-y-2">
            <h1 className="text-display font-display leading-[0.8] tracking-tighter">
              <span className="hero-line block">Former Insurance</span>
              <span className="hero-line block">Defense Attorney</span>
            </h1>
            <h2 className="text-headline font-display text-primary glow mt-4">
              <span className="hero-line block">Now Using Their Tactics</span>
              <span className="hero-line block">To Maximize</span>
              <span className="hero-line block text-accent">YOUR Compensation</span>
            </h2>
          </div>

          <div className="hero-line mt-8 max-w-2xl">
            <p className="text-body text-muted-foreground">
              Anatolii Trembach, Esq. leverages insider knowledge to fight for California injury victims.
            </p>
          </div>

          <div className="hero-line mt-8">
            <Button size="lg" className="magnetic bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-base font-semibold glow">
              Get Your Free Case Evaluation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;