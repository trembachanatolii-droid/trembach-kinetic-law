import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Cards stack entrance animation
      gsap.fromTo(
        ".stacked-card",
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -20
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Section header animation
      gsap.fromTo(
        ".section-header",
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
    const card = document.querySelector(`[data-card="${index}"]`);
    if (card) {
      gsap.to(card, {
        scale: 1.12,
        z: 50,
        rotateX: -5,
        boxShadow: "0 30px 60px rgba(0,0,0,0.4)",
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  const handleCardLeave = (index: number) => {
    setHoveredCard(null);
    const card = document.querySelector(`[data-card="${index}"]`);
    if (card) {
      gsap.to(card, {
        scale: 1,
        z: 0,
        rotateX: 0,
        boxShadow: "0 15px 30px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background dots */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-primary rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-electric rounded-full animate-pulse delay-1000"></div>
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

        {/* Stacked Cards Container */}
        <div 
          ref={cardsRef} 
          className="relative max-w-md mx-auto mb-16"
          style={{ perspective: '1000px', height: '600px' }}
        >
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === problems.length - 1;
            
            return (
              <div
                key={index}
                data-card={index}
                className={`stacked-card absolute w-full bg-slate-800 rounded-3xl p-8 shadow-2xl border border-slate-700/50 cursor-pointer transition-all duration-400 ${
                  hoveredCard !== null && hoveredCard !== index ? 'opacity-30 blur-sm' : ''
                }`}
                style={{
                  transform: `
                    translateZ(${index * -10}px) 
                    translateY(${index * 8}px) 
                    translateX(${index % 2 === 0 ? index * -2 : index * 2}px)
                    rotateZ(${index % 2 === 0 ? index * -1.5 : index * 1.5}deg)
                  `,
                  transformStyle: 'preserve-3d',
                  zIndex: problems.length - index,
                  boxShadow: '0 15px 30px rgba(0,0,0,0.2)'
                }}
                onMouseEnter={() => handleCardHover(index)}
                onMouseLeave={() => handleCardLeave(index)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-accent" />
                </div>

                {/* Problem Number with neon effect */}
                <div className="text-lg font-bold text-accent mb-4 tracking-wide">
                  <span className="text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]">
                    Problem #{item.number}
                  </span>
                </div>

                {/* Problem Statement */}
                <blockquote className="text-white text-lg italic mb-6 leading-relaxed font-medium">
                  "{item.problem}"
                </blockquote>

                {/* Divider with glow */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-6 shadow-[0_0_10px_rgba(34,197,94,0.3)]"></div>

                {/* Solution Heading */}
                <div className="text-sm font-bold text-white mb-4 tracking-widest">
                  WE SOLVE THIS:
                </div>

                {/* Solution Text */}
                <p className="text-slate-300 leading-relaxed mb-6">
                  {item.solution}
                </p>

                {/* CTA Button on last card */}
                {isLast && (
                  <div className="mt-8">
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90 text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]"
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
    </section>
  );
};

export default EveryProblemSolved;