import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial setup
    gsap.set([preloaderRef.current, progressBarRef.current, logoRef.current], {
      opacity: 1
    });
    
    // Logo fade in
    tl.fromTo(logoRef.current, 
      { 
        opacity: 0, 
        y: 30,
        scale: 0.8,
        filter: 'blur(10px)'
      },
      { 
        opacity: 1, 
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1,
        ease: "power2.out"
      }
    );

    // Progress bar animation
    tl.to(progressBarRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentageRef.current) {
          percentageRef.current.textContent = `${progress}%`;
        }
      }
    }, "-=0.5");

    // Completion sequence
    tl.to(percentageRef.current, {
      opacity: 0,
      duration: 0.3
    })
    .to(progressBarRef.current?.parentElement, {
      opacity: 0,
      y: -20,
      duration: 0.5
    }, "-=0.1")
    .to(logoRef.current, {
      scale: 1.1,
      duration: 0.3,
      ease: "power2.out"
    }, "-=0.3")
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      filter: 'blur(20px)',
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        if (preloaderRef.current) {
          preloaderRef.current.style.display = "none";
        }
        onComplete();
      }
    });

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900"
      style={{
        background: 'linear-gradient(135deg, hsl(222.2 84% 4.9%) 0%, hsl(217.2 32.6% 17.5%) 50%, hsl(263.4 70% 50.4%) 100%)'
      }}
    >
      {/* Floating orbs background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
            style={{
              width: `${Math.random() * 400 + 100}px`,
              height: `${Math.random() * 400 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Logo/Brand */}
      <div 
        ref={logoRef}
        className="text-center mb-12"
      >
        <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 mb-4">
          TREMBACH
        </h1>
        <p className="text-xl text-white/70 font-light tracking-wider">
          LAW FIRM
        </p>
      </div>

      {/* Progress Bar Container */}
      <div className="w-80 max-w-sm mx-auto">
        <div className="relative mb-4">
          <div className="h-1 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
            <div 
              ref={progressBarRef}
              className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full w-0 transition-all duration-100"
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>
        </div>
        
        <div className="text-center">
          <span 
            ref={percentageRef}
            className="text-white/80 text-sm font-medium tracking-wider"
          >
            0%
          </span>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;