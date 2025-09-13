import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

const EveryProblemSolved = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [completedCards, setCompletedCards] = useState<number[]>([]);

  const problems = [
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

  const handleCardClick = () => {
    if (activeIndex < problems.length) {
      setCompletedCards(prev => [...prev, activeIndex]);
      setActiveIndex(prev => prev + 1);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-1000"></div>
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

        {/* Card Pile Container */}
        <div 
          className="relative max-w-lg mx-auto mb-16"
          style={{ 
            height: '600px',
            perspective: '1200px'
          }}
        >
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            const isCompleted = completedCards.includes(index);
            const isActive = index === activeIndex && !isCompleted;
            const isLast = index === problems.length - 1;
            
            // Calculate position for completed cards
            const completedIndex = completedCards.indexOf(index);
            const slideOffset = isCompleted ? 140 + (completedIndex * 20) : 0;
            
            return (
              <div
                key={index}
                className={`absolute w-full bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600/30 transition-all duration-300 ease-out ${
                  isActive ? 'cursor-pointer hover:scale-105' : ''
                }`}
                style={{
                  transform: `
                    translate(-50%, -50%) 
                    translateX(${slideOffset}px)
                    translateZ(${isCompleted ? -10 : isActive ? 0 : -index * 4}px)
                    scale(${isCompleted ? 0.96 : isActive ? 1 : 0.98})
                  `,
                  transformStyle: 'preserve-3d',
                  left: '50%',
                  top: '50%',
                  zIndex: isActive ? 100 : isCompleted ? 50 : 10 - index,
                  opacity: isActive ? 1 : isCompleted ? 0.9 : 0.7,
                  pointerEvents: isActive ? 'auto' : 'none'
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
                {isLast && (
                  <div className="mt-8">
                    <Button 
                      className="w-full bg-accent hover:bg-accent text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] hover:brightness-110 active:scale-105"
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

        {/* Progress indicator */}
        {activeIndex > 0 && (
          <div className="text-center text-slate-400 text-sm">
            {completedCards.length} of {problems.length} problems solved
          </div>
        )}
      </div>
    </section>
  );
};

export default EveryProblemSolved;