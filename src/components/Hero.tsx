import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroStatue from '@/assets/hero-statue-centered.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure hero visible immediately
      if (heroRef.current) {
        gsap.set(heroRef.current, { opacity: 1 });
      }

      // Staggered headline animation
      const heroLines = heroRef.current?.querySelectorAll(".hero-line");
      if (heroLines && heroLines.length > 0) {
        gsap.fromTo(
          heroLines,
          {
            y: 50,
            opacity: 0,
            filter: "blur(10px)"
          },
          {
            y: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.5
          }
        );
      }

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          {
            y: 30,
            opacity: 0,
            scale: 0.9
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            delay: 1.2
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden pt-0 bg-background"
    >
      {/* Dramatic Gradient Background (Inspired by Chanel ad) */}
      <div className="absolute inset-0 z-0">
        {/* Main gradient - dark top to light bottom with spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/95 to-gray-800/90"></div>
        
        {/* Spotlight effect from bottom center */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[80%] bg-gradient-radial from-white/40 via-gray-300/20 to-transparent blur-3xl opacity-60"></div>
        
        {/* Subtle side lighting */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/10 to-transparent"></div>
      </div>
      
      {/* Lady Justice Statue - Right Border */}
      <img
        src={heroStatue}
        alt="Lady Justice statue representing legal excellence"
        className="absolute bottom-0 right-0 h-[90%] w-auto object-contain pointer-events-none select-none z-10 opacity-95"
        loading="eager"
      />
      
      <div className="container mx-auto px-8 flex items-center min-h-screen relative z-20">
        {/* Left-aligned Content - Apple Style */}
        <div className="max-w-2xl pt-20">
          <div ref={headlineRef} className="space-y-6">
            <h1 className="hero-line font-display text-white text-5xl md:text-6xl lg:text-[72px] leading-[1.1] tracking-tight font-bold drop-shadow-2xl">
              California's premier<br />
              personal injury<br />
              and mesothelioma<br />
              lawyers
            </h1>
            <p className="hero-line font-sans text-white/90 text-lg md:text-xl lg:text-2xl leading-[1.5] max-w-xl font-normal drop-shadow-lg">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Button - Centered, Not Overlapping Statue */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 w-full max-w-md px-8">
        <Link 
          to="/free-consultation"
          ref={buttonRef}
          className="group relative inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-base md:text-lg px-10 py-5 rounded-lg shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
        >
          <span className="relative z-10">START YOUR FREE CASE REVIEW</span>
          <svg 
            className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
