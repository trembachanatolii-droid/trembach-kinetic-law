import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import lawOfficeBackground from '@/assets/law-office-background.png';
import lawyerPortrait from '@/assets/lawyer-portrait.png';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Ensure hero visible immediately (no fade to prevent blank screen)
      if (heroRef.current) {
        gsap.set(heroRef.current, { opacity: 1 });
      }

      // Staggered headline animation
      gsap.fromTo(
        ".hero-line",
        {
          y: 24,
          filter: "blur(8px)"
        },
        {
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2
        }
      );

      // Form entrance
      gsap.fromTo(
        formRef.current,
        {
          x: 40,
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          x: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power3.out",
          delay: 0.6
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{
        backgroundImage: `url(${lawOfficeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 container mx-auto px-8 flex items-center min-h-[calc(100vh-4rem)]">
        {/* Main Content - Left Side */}
        <div className="flex-1 max-w-2xl">
          <div ref={headlineRef} className="space-y-4">
            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              <span className="hero-line block">You Focus on Healing.</span>
              <span className="hero-line block">We Focus on Winning.</span>
            </h1>
          </div>

          <div className="hero-line mt-8">
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 text-uppercase tracking-wide"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              START YOUR FREE CASE REVIEW
            </Button>
          </div>
        </div>

        {/* Lawyer Portrait - Right Side */}
        <div className="hidden lg:block flex-1 flex justify-end">
          <div className="relative">
            <img 
              src={lawyerPortrait} 
              alt="Professional Attorney" 
              className="w-96 h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-full p-4 shadow-lg cursor-pointer hover:scale-105 transition-transform">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
            </div>
            <div className="bg-white rounded-lg px-4 py-2 shadow-md">
              <p className="text-sm text-gray-700">How can we help you?</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;