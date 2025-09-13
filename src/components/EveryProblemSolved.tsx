import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

interface Problem {
  number: number;
  problem: string;
  solution: string;
  icon: React.ComponentType<{ className?: string }>;
}

const EveryProblemSolved = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedCards, setCompletedCards] = useState<number[]>([]);

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

  const handleCardClick = useCallback(() => {
    if (currentStep <= problems.length) {
      setCompletedCards(prev => [...prev, currentStep]);
      if (currentStep < problems.length) {
        setCurrentStep(prev => prev + 1);
      }
    }
  }, [currentStep, problems.length]);

  return (
    <section 
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
        <div className="text-center mb-20">
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

        {/* Card Stack Container */}
        <div className="relative flex justify-center items-center min-h-[600px]">
          <div 
            className="relative w-full max-w-lg"
            style={{ 
              perspective: '1200px',
              perspectiveOrigin: 'center center'
            }}
          >
            {problems.map((item, index) => {
              const step = index + 1;
              const IconComponent = item.icon;
              const isActive = step === currentStep;
              const isCompleted = completedCards.includes(step);
              const isLast = step === problems.length;
              const completedIndex = completedCards.indexOf(step);
              
              return (
                <div
                  key={step}
                  data-step={step}
                  role="group"
                  aria-roledescription="Step"
                  aria-current={isActive ? "step" : undefined}
                  tabIndex={isActive ? 0 : -1}
                  className={`absolute w-full bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600/30 transition-all duration-[380ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? 'cursor-pointer hover:scale-[1.05] hover:shadow-2xl' : 'cursor-default'
                  }`}
                  style={{
                    transform: isCompleted 
                      ? `translate(-50%, -50%) translateX(140px) scale(0.92)`
                      : isActive
                      ? `translate(-50%, -50%) scale(1)`
                      : `translate(-50%, -50%) scale(0.98)`,
                    left: '50%',
                    top: '50%',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    zIndex: isActive ? 20 : isCompleted ? 5 + completedIndex : 10 - step,
                    opacity: isActive ? 1 : isCompleted ? 0.8 : 0.9
                  }}
                  onClick={isActive ? handleCardClick : undefined}
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
                        className="w-full bg-accent hover:bg-accent hover:scale-[1.02] text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:brightness-110"
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
      </div>
    </section>
  );
};

export default EveryProblemSolved;