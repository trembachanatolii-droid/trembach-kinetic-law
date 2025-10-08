import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import ladyJusticeHero from '@/assets/lady-justice-hero.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const lawyerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

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

      // Lawyer image animation
      if (lawyerRef.current) {
        gsap.fromTo(
          lawyerRef.current,
          {
            x: 100,
            opacity: 0,
            filter: "blur(5px)"
          },
          {
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            duration: 1,
            ease: "power3.out",
            delay: 0.8
          }
        );
      }

      // Chat widget animation
      if (chatRef.current) {
        gsap.fromTo(
          chatRef.current,
          {
            scale: 0,
            rotation: -10
          },
          {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: 2
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-background"
    >
      {/* Lady Justice Background */}
      <img
        src={ladyJusticeHero}
        alt="Lady Justice statue"
        className="absolute bottom-0 right-0 h-[75%] md:h-[80%] w-auto object-contain pointer-events-none select-none opacity-90 z-0"
      />
      
      
      <div className="container mx-auto px-8 flex items-start pt-32 min-h-[calc(100vh-6rem)] relative z-10">
        {/* Left-aligned Content - Apple Style */}
        <div className="max-w-xl">
          <div ref={headlineRef} className="space-y-8">
            <h1 className="hero-line font-display text-foreground text-4xl md:text-[40px] leading-[1.3] [text-shadow:0_2px_8px_rgba(0,0,0,0.3)]">
              California's premier<br />
              personal injury<br />
              and mesothelioma<br />
              lawyers
            </h1>
            <p className="hero-line font-sans text-foreground text-lg md:text-xl leading-[1.6] max-w-md [text-shadow:0_1px_4px_rgba(0,0,0,0.2)]">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <Link 
          to="/free-consultation"
          ref={buttonRef as any}
          className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#D32F2F] via-[#E53935] to-[#D32F2F] hover:from-[#C62828] hover:via-[#D32F2F] hover:to-[#C62828] text-white font-bold px-12 py-6 rounded-2xl shadow-[0_20px_60px_rgba(211,47,47,0.5)] hover:shadow-[0_25px_70px_rgba(211,47,47,0.7)] transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 bg-[length:200%_100%] hover:bg-[length:100%_100%] uppercase tracking-wider text-base"
          onClick={() => window.scrollTo(0, 0)}
        >
          <span className="relative z-10">START YOUR FREE CASE REVIEW</span>
          <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Chat Widget */}
      <div ref={chatRef} className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-xl">👨‍💼</span>
            </div>
            <div className="bg-white rounded-2xl px-4 py-2 shadow-md">
              <p className="text-sm text-gray-700 font-medium">How can we help you?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;