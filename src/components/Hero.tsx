import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import lawyerPortrait from '@/assets/lawyer-portrait.png';
import lawOfficeBg from '@/assets/law-office-background.png';

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
      className="relative min-h-screen flex items-center overflow-hidden pt-24"
    >
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.webm" type="video/webm" />
      </video>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="container mx-auto px-8 flex items-center justify-center min-h-[calc(100vh-6rem)] relative z-10">
        {/* Center Content */}
        <div className="text-center max-w-4xl">
          <div ref={headlineRef} className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="hero-line block">You Focus on Healing.</span>
              <span className="hero-line block">We Focus on Winning.</span>
            </h1>
          </div>

          <Button 
            ref={buttonRef}
            className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg rounded-md shadow-lg transform hover:scale-105 transition-all duration-200"
            onClick={() => window.location.href = '/case-evaluation'}
          >
            START YOUR FREE CASE REVIEW
          </Button>
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