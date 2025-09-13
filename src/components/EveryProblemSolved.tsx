import React, { useEffect, useRef, useState, useCallback } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

interface Problem {
  number: number;
  problem: string;
  solution: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [completedCards, setCompletedCards] = useState<number[]>([]);
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
    if (currentStep <= problems.length) {
      setCompletedCards(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, problems.length]);

  // Section header animation only
  useEffect(() => {
    if (!sectionRef.current) return;
    
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".section-header",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.2
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card animations - position all cards
  useEffect(() => {
    if (prefersReducedMotion) {
      // For reduced motion, just show/hide cards instantly
      problems.forEach((_, index) => {
        const step = index + 1;
        const card = document.querySelector(`[data-step="${step}"]`);
        if (card) {
          const isActive = step === currentStep;
          const isCompleted = completedCards.includes(step);
          
          if (isCompleted) {
            gsap.set(card, { x: 140, y: 0, scale: 1, opacity: 0.7 });
          } else if (isActive) {
            gsap.set(card, { x: 0, y: 0, scale: 1, opacity: 1 });
          } else {
            gsap.set(card, { x: 0, y: 0, scale: 1, opacity: 0.8 });
          }
        }
      });
      return;
    }

    problems.forEach((_, index) => {
      const step = index + 1;
      const card = document.querySelector(`[data-step="${step}"]`);
      if (card) {
        const isActive = step === currentStep;
        const isCompleted = completedCards.includes(step);
        
        gsap.set(card, { willChange: 'transform, opacity' });
        
        if (isCompleted) {
          // Completed cards slide to right
          gsap.to(card, {
            x: 140,
            y: 0,
            scale: 1,
            opacity: 0.7,
            duration: 0.38,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            onComplete: () => gsap.set(card, { willChange: 'auto' })
          });
        } else if (isActive) {
          // Active card in center
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.38,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            onComplete: () => gsap.set(card, { willChange: 'auto' })
          });
        } else {
          // Upcoming cards in stack behind
          gsap.to(card, {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 0.8,
            duration: 0.38,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            onComplete: () => gsap.set(card, { willChange: 'auto' })
          });
        }
      }
    });
  }, [currentStep, completedCards, prefersReducedMotion]);

  const handleCardClick = () => {
    if (currentStep <= problems.length) {
      const activeCard = document.querySelector(`[data-step="${currentStep}"]`);
      
      if (activeCard && !prefersReducedMotion) {
        // Pop up animation first
        gsap.to(activeCard, {
          scale: 1.15,
          boxShadow: '0 25px 50px rgba(0,0,0,0.5)',
          duration: 0.15,
          ease: "power2.out",
          onComplete: () => {
            // Then advance to next
            advanceToNext();
          }
        });
      } else {
        advanceToNext();
      }
    }
  };

  const handleCardHover = (isHovering: boolean) => {
    if (prefersReducedMotion) return;
    
    const activeCard = document.querySelector(`[data-step="${currentStep}"]`);
    if (activeCard) {
      gsap.to(activeCard, {
        scale: isHovering ? 1.05 : 1,
        boxShadow: isHovering 
          ? '0 20px 40px rgba(0,0,0,0.3)' 
          : '0 10px 25px rgba(0,0,0,0.15)',
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
        if (currentStep <= problems.length) handleCardClick();
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
                <div
                  key={step}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    isActive 
                      ? 'bg-accent scale-125 shadow-[0_0_8px_rgba(34,197,94,0.6)]'
                      : isCompleted
                      ? 'bg-accent/60'
                      : 'bg-slate-600'
                  }`}
                  aria-label={`Step ${step}`}
                />
              );
            })}
          </div>
        </div>

        {/* Main Layout Container */}
        <div className="relative flex justify-center items-center">
          {/* Card Stack Container */}
          <div 
            ref={stackRef}
            className="relative w-full max-w-lg mx-auto"
            style={{ 
              height: '600px',
              width: '500px'
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
                    willChange: 'transform, opacity',
                    zIndex: isActive ? 20 : isCompleted ? 5 : 15 - step
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
                  {isLast && isActive && currentStep > problems.length && (
                    <div className="mt-8">
                      <Button 
                        className="w-full bg-accent hover:bg-accent text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-102"
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

        </div>

        {/* CTA Button - shows after all cards are completed */}
        {currentStep > problems.length && (
          <div className="flex justify-center mt-12">
            <Button 
              className="bg-accent hover:bg-accent text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-102"
              style={{
                boxShadow: '0 0 20px rgba(34,197,94,0.3)'
              }}
            >
              Get My Free Case Review
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default EveryProblemSolved;