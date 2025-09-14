import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
    const ctx = gsap.context(() => {
      // Cards entrance animation
      gsap.fromTo(
        ".problem-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
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

  const handleCardHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -8,
      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleCardLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-background to-surface/20">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="section-header text-center mb-16">
          <h2 className="text-display font-display font-bold text-foreground mb-4">
            Every Problem Solved
          </h2>
          <p className="text-title text-muted-foreground max-w-4xl mx-auto">
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="problem-card bg-background rounded-2xl p-6 shadow-lg border border-border/10 cursor-pointer transition-all duration-300"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                {/* Icon */}
                <div className="mb-4">
                  <IconComponent className="w-6 h-6 text-primary" />
                </div>

                {/* Problem Number */}
                <div className="text-small font-bold text-primary mb-2">
                  Problem #{item.number}
                </div>

                {/* Problem Statement */}
                <blockquote className="text-body text-foreground italic mb-4 leading-relaxed">
                  "{item.problem}"
                </blockquote>

                {/* Divider */}
                <div className="h-px bg-border/30 mb-4"></div>

                {/* Solution Heading */}
                <div className="text-small font-bold text-foreground mb-2 tracking-wide">
                  WE SOLVE THIS:
                </div>

                {/* Solution Text */}
                <p className="text-small text-muted-foreground leading-relaxed">
                  {item.solution}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button 
            className="bg-accent hover:bg-accent-glow text-accent-foreground font-bold py-4 px-8 rounded-full text-body glow-accent transition-all duration-300 hover:scale-105"
          >
            Get My Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;