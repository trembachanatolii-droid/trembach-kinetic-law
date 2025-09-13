import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

interface Problem {
  number: number;
  problem: string;
  solution: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const shelfRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedCards, setCompletedCards] = useState<number[]>([]);
  const [isScrolling, setIsScrolling] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const problems: Problem[] = [
    {
      number: 1,
      problem: "I don't know what my case is worth",
      solution: "Former defense attorney reveals exact formula insurance companies use to value cases (then we 10X it).",
      icon: Scale
    },
    {
      number: 2,
      problem: "Insurance offered me pennies", 
      solution: "We know their entire playbook. Average settlement increase: 347% above initial offer.",
      icon: Shield
    },
    {
      number: 3,
      problem: "I can't afford a lawyer",
      solution: "$0 upfront. $0 unless we win. We even advance all case costs.",
      icon: Clock
    },
    {
      number: 4,
      problem: "This will take forever",
      solution: "Most cases settle in 3–6 months using our insider negotiation tactics.",
      icon: Scale
    },
    {
      number: 5,
      problem: "They're denying liability",
      solution: "We know every excuse they use and exactly how to destroy each one.",
      icon: Shield
    },
    {
      number: 6,
      problem: "I'm overwhelmed",
      solution: "We handle 100% of everything. You focus on healing.",
      icon: Clock
    }
  ];

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const advanceToNext = useCallback(() => {
    if (currentStep < problems.length) {
      setCompletedCards(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, problems.length]);

  const goToPrevious = useCallback(() => {
    if (currentStep > 1) {
      setCompletedCards(prev => prev.filter(step => step !== currentStep - 1));
      setCurrentStep(prev => prev - 1);
    }
  }, [currentStep]);

  const jumpToStep = useCallback((step: number) => {
    if (step >= 1 && step <= problems.length) {
      const newCompleted = [];
      for (let i = 1; i < step; i++) {
        newCompleted.push(i);
      }
      setCompletedCards(newCompleted);
      setCurrentStep(step);
    }
  }, [problems.length]);

  // Scroll-based progression
  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo(
        ".section-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Scroll progression triggers
      problems.forEach((_, index) => {
        const step = index + 1;
        
        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: `top+=${200 + (index * 150)} center`,
          end: `top+=${350 + (index * 150)} center`,
          onEnter: () => {
            if (!isScrolling && currentStep === step && step < problems.length) {
              setIsScrolling(true);
              advanceToNext();
              setTimeout(() => setIsScrolling(false), 400);
            }
          },
          onLeaveBack: () => {
            if (!isScrolling && currentStep === step + 1 && step >= 1) {
              setIsScrolling(true);
              goToPrevious();
              setTimeout(() => setIsScrolling(false), 400);
            }
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [currentStep, advanceToNext, goToPrevious, isScrolling]);

  // Card animations
  useEffect(() => {
    if (prefersReducedMotion) return;

    const activeCard = document.querySelector(`[data-step="${currentStep}"]`);
    const completedCardElements = completedCards.map(step => 
      document.querySelector(`[data-step="${step}"]`)
    );

    // Animate completed cards to shelf
    completedCardElements.forEach((card, index) => {
      if (card) {
        gsap.set(card, { willChange: 'transform, opacity' });
        gsap.to(card, {
          x: window.innerWidth <= 768 ? 0 : 320,
          y: window.innerWidth <= 768 ? 100 + (index * 60) : index * 80,
          scale: 0.92,
          opacity: 0.6,
          rotateZ: 0,
          duration: 0.35,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          onComplete: () => gsap.set(card, { willChange: 'auto' })
        });
      }
    });

    // Animate active card
    if (activeCard) {
      gsap.set(activeCard, { willChange: 'transform, opacity' });
      gsap.to(activeCard, {
        x: 0,
        y: 0,
        scale: 1.04,
        opacity: 1,
        rotateZ: 0,
        translateZ: 24,
        duration: 0.35,
        ease: "cubic-bezier(0.22, 1, 0.36, 1)",
        onComplete: () => gsap.set(activeCard, { willChange: 'auto' })
      });
    }

    // Animate upcoming cards in stack
    problems.forEach((_, index) => {
      const step = index + 1;
      if (step > currentStep && !completedCards.includes(step)) {
        const card = document.querySelector(`[data-step="${step}"]`);
        if (card) {
          const offset = step - currentStep;
          gsap.set(card, { willChange: 'transform, opacity' });
          gsap.to(card, {
            x: 0,
            y: offset * 12,
            scale: 0.96 - (offset * 0.02),
            opacity: 0.7 - (offset * 0.1),
            rotateZ: (offset % 2 === 0 ? -1 : 1) * (2 + offset),
            translateZ: -offset * 8,
            duration: 0.35,
            ease: "cubic-bezier(0.4, 0, 0.2, 1)",
            onComplete: () => gsap.set(card, { willChange: 'auto' })
          });
        }
      }
    });
  }, [currentStep, completedCards, prefersReducedMotion]);

  const handleCardClick = () => {
    if (currentStep < problems.length) {
      advanceToNext();
    }
  };

  const handleCardHover = (isHovering: boolean) => {
    if (prefersReducedMotion) return;
    
    const activeCard = document.querySelector(`[data-step="${currentStep}"]`);
    if (activeCard) {
      gsap.to(activeCard, {
        scale: isHovering ? 1.07 : 1.04,
        translateZ: isHovering ? 36 : 24,
        duration: 0.2,
        ease: "power2.out"
      });
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (currentStep < problems.length) advanceToNext();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (currentStep > 1) goToPrevious();
        break;
      case 'ArrowRight':
        e.preventDefault();
        if (currentStep < problems.length) advanceToNext();
        break;
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id="problems"
      className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      aria-live="polite"
      aria-label="Problem solving steps"
    >
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping delay-500"></div>
      </div>

      <div className="container mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="section-header text-center mb-20">
          <h2 className="text-display font-display font-bold text-white mb-4">
            Every Problem Solved
          </h2>
          <p className="text-title text-slate-300 max-w-4xl mx-auto">
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8" aria-label={`Step ${currentStep} of ${problems.length}`}>
          <div className="flex gap-2">
            {problems.map((_, index) => {
              const step = index + 1;
              const isActive = step === currentStep;
              const isCompleted = completedCards.includes(step);
              
              return (
                <button
                  key={step}
                  onClick={() => jumpToStep(step)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent scale-125 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                      : isCompleted
                      ? 'bg-accent/60'
                      : 'bg-slate-600'
                  }`}
                  aria-label={`Go to step ${step}`}
                />
              );
            })}
          </div>
        </div>

        {/* Main Layout Container */}
        <div className="relative flex flex-col lg:flex-row justify-center items-start gap-8">
          {/* Card Stack Container */}
          <div 
            ref={stackRef}
            className="relative w-full max-w-lg mx-auto lg:mx-0"
            style={{ 
              perspective: '1200px',
              perspectiveOrigin: 'center center',
              height: '600px',
              transformStyle: 'preserve-3d'
            }}
          >
            {problems.map((item, index) => {
              const step = index + 1;
              const IconComponent = item.icon;
              const isActive = step === currentStep;
              const isCompleted = completedCards.includes(step);
              const isLast = step === problems.length;
              
              return (
                <div
                  key={step}
                  data-step={step}
                  role="group"
                  aria-roledescription="Step"
                  aria-current={isActive ? "step" : undefined}
                  tabIndex={isActive ? 0 : -1}
                  className={`absolute w-full bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600/30 ${
                    isActive ? 'cursor-pointer' : 'cursor-default'
                  }`}
                  style={{
                    transform: 'translateX(-50%) translateY(-50%)',
                    left: '50%',
                    top: '50%',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform, opacity',
                    zIndex: isActive ? 20 : isCompleted ? 5 : 10 - step
                  }}
                  onClick={isActive ? handleCardClick : undefined}
                  onMouseEnter={() => isActive && handleCardHover(true)}
                  onMouseLeave={() => isActive && handleCardHover(false)}
                  onKeyDown={isActive ? handleKeyDown : undefined}
                >
                  {/* Icon */}
                  <div className="mb-6">
                    <IconComponent className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                  </div>

                  {/* Problem Number */}
                  <div className="text-xl font-bold mb-4 tracking-wide">
                    <span className="text-accent drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-extrabold">
                      Problem #{item.number}
                    </span>
                  </div>

                  {/* Problem Statement */}
                  <blockquote className="text-white text-lg italic mb-6 leading-relaxed font-medium">
                    "{item.problem}"
                  </blockquote>

                  {/* Divider */}
                  <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-6 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>

                  {/* Solution Heading */}
                  <div className="text-sm font-bold text-white mb-4 tracking-widest opacity-90">
                    WE SOLVE THIS:
                  </div>

                  {/* Solution Text */}
                  <p className="text-slate-300 leading-relaxed mb-6 text-base">
                    {item.solution}
                  </p>

                  {/* CTA Button on last card */}
                  {isLast && isActive && (
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-accent hover:bg-accent text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:brightness-110 active:scale-102"
                        style={{
                          boxShadow: '0 0 20px rgba(34,197,94,0.3)'
                        }}
                      >
                        Get My Free Case Review
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Completion Shelf */}
          <div 
            ref={shelfRef}
            className="w-full lg:w-64 mt-8 lg:mt-0"
            aria-label="Completed steps"
          >
            <div className="lg:hidden flex flex-wrap gap-2 justify-center">
              {/* Mobile: horizontal row at bottom */}
            </div>
            <div className="hidden lg:block">
              {/* Desktop: vertical shelf on right */}
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={goToPrevious}
            disabled={currentStep === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-600 transition-colors"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Back</span>
          </button>
          
          <span className="flex items-center px-4 py-2 text-slate-300">
            {currentStep} / {problems.length}
          </span>
          
          <button
            onClick={advanceToNext}
            disabled={currentStep === problems.length}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent/90 transition-colors font-medium"
            aria-label="Next step"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;