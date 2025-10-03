import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import ladyJusticeHero from '@/assets/lady-justice-3d.png';

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
      className="relative min-h-screen flex flex-col overflow-hidden"
    >
      {/* Lady Justice Background */}
      <img
        src={ladyJusticeHero}
        alt="Lady Justice statue"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      
      <div className="container mx-auto px-8 lg:px-16 flex-1 flex items-center relative z-10 pt-32 pb-32">
        {/* Left Column Content - Apple Style */}
        <div className="max-w-2xl">
          <div ref={headlineRef} className="space-y-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] tracking-tight">
              <span className="hero-line block">Design</span>
              <span className="hero-line block">faw</span>
              <span className="hero-line block">lawm</span>
              <span className="hero-line block">Joursfice</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-lg">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation and secure your medical future.
            </p>
          </div>
        </div>
      </div>

      {/* Button at Bottom Center - Apple Style */}
      <div className="relative z-10 pb-12 flex justify-center">
        <Button 
          ref={buttonRef}
          className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold px-12 py-6 text-base rounded-full border border-white/30 shadow-2xl transition-all duration-300"
          onClick={() => window.location.href = '/free-consultation'}
        >
          START YOUR FREE CASE REVIEW
        </Button>
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