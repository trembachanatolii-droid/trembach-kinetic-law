import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/hero-background.png';

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
      gsap.fromTo(
        ".hero-line",
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

      // Button animation
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

      // Lawyer image animation
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

      // Chat widget animation
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
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden pt-24 bg-white"
    >
      <div className="container mx-auto px-8 flex items-center justify-center min-h-[calc(100vh-6rem)] relative z-10">
        {/* Center Content */}
        <div className="text-center max-w-4xl">
          <div ref={headlineRef} className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
              <span className="hero-line block text-[#1d1d1f]">TREMBACH LAW FIRM</span>
            </h1>
            <p className="hero-line text-2xl lg:text-3xl text-[#86868b] font-normal mt-4">
              You Focus on Healing.<br/>We Focus on Winning.
            </p>
          </div>

          <Button
            ref={buttonRef}
            className="mt-12 rounded-full bg-[hsl(208,100%,45%)] text-white hover:bg-[hsl(209,100%,46%)] font-medium px-6 py-2 text-sm leading-none transition-colors duration-200"
            onClick={() => window.location.href = '/case-evaluation'}
          >
            Start Your Free Case Review
          </Button>
          
          <p className="text-sm text-[#86868b] mt-4">
            No Win, No Fee Guarantee
          </p>
        </div>
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