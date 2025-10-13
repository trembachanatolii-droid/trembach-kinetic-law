import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import scalesJusticeHeroBg from '@/assets/scales-justice-hero-bg.png';

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
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5)), url(${scalesJusticeHeroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      
      
      <div className="container mx-auto px-8 flex items-start pt-32 min-h-[calc(100vh-6rem)] relative z-10">
        {/* Left-aligned Content - Apple Style */}
        <div className="max-w-xl">
          <div ref={headlineRef} className="space-y-8">
            <h1 className="hero-line font-display text-white text-4xl md:text-[40px] leading-[1.3] [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]">
              California's premier<br />
              personal injury<br />
              and mesothelioma<br />
              lawyers
            </h1>
            <p className="hero-line font-sans text-white text-lg md:text-xl leading-[1.6] max-w-md [text-shadow:0_2px_8px_rgba(0,0,0,0.7)]">
              After defending insurance companies, our lead attorney switched sides. Now we use their playbook to maximize your compensation.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20">
        <Button 
          ref={buttonRef}
          size="lg"
          className="hero-cta-button relative overflow-hidden text-white font-bold px-10 py-6 rounded-full text-base tracking-wide
            bg-gradient-to-b from-[#E63946] to-[#C1272D]
            shadow-[0_4px_14px_0_rgba(230,57,70,0.39),0_8px_20px_-4px_rgba(193,39,45,0.5),inset_0_-2px_4px_0_rgba(0,0,0,0.2),inset_0_1px_2px_0_rgba(255,255,255,0.3)]
            hover:shadow-[0_6px_20px_0_rgba(230,57,70,0.5),0_12px_30px_-6px_rgba(193,39,45,0.6),inset_0_-2px_4px_0_rgba(0,0,0,0.3),inset_0_1px_2px_0_rgba(255,255,255,0.4)]
            active:shadow-[0_2px_8px_0_rgba(230,57,70,0.35),inset_0_2px_6px_0_rgba(0,0,0,0.4)]
            hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-300 ease-out
            before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
            after:absolute after:inset-0 after:rounded-full after:bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.4),transparent_60%)] after:opacity-70
            will-change-transform"
          asChild
        >
          <Link to="/free-consultation">START YOUR FREE CASE REVIEW</Link>
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