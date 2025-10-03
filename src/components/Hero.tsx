import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
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
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Lady Justice Background */}
      <img
        src={ladyJusticeHero}
        alt="Lady Justice statue"
        className="absolute inset-0 w-full h-full object-contain object-right"
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
      <div className="container mx-auto px-8 flex items-center min-h-[calc(100vh-6rem)] relative z-10">
        {/* Left-aligned Content - Apple Style */}
        <div className="max-w-2xl">
          <div ref={headlineRef} className="space-y-8">
            <p className="hero-line font-sans text-[#0A0A0A] text-lg md:text-xl leading-tight">
              California's premier personal injury and mesothelioma law firm
            </p>
            <h1 className="hero-line font-sans text-white text-4xl md:text-[40px] leading-[1.5] max-w-3xl">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </h1>
          </div>
        </div>
      </div>

      {/* Bottom Center Button */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          ref={buttonRef}
          className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-md shadow-lg transform hover:scale-105 transition-all duration-200"
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