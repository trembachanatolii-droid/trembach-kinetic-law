import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-surface/20 overflow-hidden">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-display font-display font-bold text-foreground mb-4">
            Every Problem Solved
          </h2>
          <p className="text-title text-muted-foreground max-w-4xl mx-auto">
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Semicircle Fan Layout */}
        <div className="relative h-[600px] flex items-center justify-center">
          <div className="relative w-full max-w-5xl">
            {problems.map((item, index) => {
              const IconComponent = item.icon;
              // Calculate position for semicircle arc
              const totalCards = problems.length;
              const angleSpacing = 150 / (totalCards - 1); // 150 degrees total arc
              const startAngle = -75; // Start from -75 degrees
              const angle = startAngle + (index * angleSpacing);
              const radius = 280; // Distance from center
              
              // Convert angle to radians for positioning
              const angleRad = (angle * Math.PI) / 180;
              const x = Math.cos(angleRad) * radius;
              const y = Math.sin(angleRad) * radius;

              return (
                <div
                  key={index}
                  className="absolute w-72 h-80 group cursor-pointer"
                  style={{
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                    transformOrigin: 'center',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                  }}
                >
                  <div 
                    className="w-full h-full bg-card border border-border/20 rounded-2xl p-6 shadow-lg 
                               transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]
                               group-hover:scale-110 group-hover:shadow-2xl group-hover:-translate-y-4
                               group-hover:border-primary/30 backdrop-blur-sm glass"
                  >
                    {/* Icon */}
                    <div className="mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                      <IconComponent className="w-7 h-7 text-primary glow" />
                    </div>

                    {/* Problem Number */}
                    <div className="text-small font-bold text-primary mb-3 tracking-wide">
                      Problem #{item.number}
                    </div>

                    {/* Problem Statement */}
                    <blockquote className="text-body text-foreground italic mb-4 leading-relaxed font-medium">
                      "{item.problem}"
                    </blockquote>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 
                                   group-hover:via-primary/50 transition-all duration-300"></div>

                    {/* Solution Heading */}
                    <div className="text-small font-bold text-foreground mb-2 tracking-wide opacity-90">
                      WE SOLVE THIS:
                    </div>

                    {/* Solution Text */}
                    <p className="text-small text-muted-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Button 
            className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold py-4 px-8 
                       rounded-full text-body glow-accent transition-all duration-300 hover:scale-105 
                       magnetic"
          >
            Get My Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;