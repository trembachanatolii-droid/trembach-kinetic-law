import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineWordsRef = useRef<HTMLSpanElement[]>([]);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
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
      icon: Clock,
      hasCTA: true
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const headlineWords = headlineWordsRef.current.filter(Boolean);
    const subheading = subheadingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || headlineWords.length === 0 || !subheading || cards.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(section, { opacity: 0 });
    gsap.set(headlineWords, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20 
    });
    gsap.set(subheading, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 16 
    });
    gsap.set(cards, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30 
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Section fade in
    tl.to(section, {
      opacity: 1,
      duration: 0.4,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    })
    // Headline words animation (word by word)
    .to(headlineWords, {
      opacity: 1,
      y: 0,
      duration: prefersReducedMotion ? 0.3 : 0.5,
      stagger: prefersReducedMotion ? 0.05 : 0.15,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    })
    // Subheading animation (after headline completes + 200ms delay)
    .to(subheading, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    }, "+=0.2")
    // Cards staggered animation
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.15,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    }, "-=0.2");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background/50 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {['Every', 'Problem', 'Solved'].map((word, index) => (
              <span
                key={index}
                ref={el => { if (el) headlineWordsRef.current[index] = el; }}
                className="inline-block mr-3 last:mr-0"
              >
                {word}
              </span>
            ))}
          </h2>
          <p 
            ref={subheadingRef}
            className="text-xl text-muted-foreground max-w-4xl mx-auto font-medium"
          >
            Here's how we eliminate every obstacle between you and maximum compensation
          </p>
        </div>

        {/* Cards Grid - 3x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                ref={el => { if (el) cardsRef.current[index] = el; }}
                className="group cursor-pointer"
              >
                <div className="bg-card border border-border/20 rounded-2xl p-6 h-full shadow-sm 
                               transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
                               hover:scale-[1.05] hover:shadow-2xl hover:shadow-primary/20 
                               hover:border-primary/40 hover:bg-card/90 active:scale-[1.02]
                               lg:hover:-translate-y-1">
                  
                  {/* Icon */}
                  <div className="mb-4">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>

                  {/* Problem Number */}
                  <div className="text-sm font-bold text-accent mb-3 tracking-wide">
                    Problem #{item.number}
                  </div>

                  {/* Problem Statement in Quotes */}
                  <blockquote className="text-base text-foreground italic mb-4 leading-relaxed font-medium 
                                       bg-muted/30 p-3 rounded-lg border-l-4 border-accent/50">
                    "{item.problem}"
                  </blockquote>

                  {/* Divider Line */}
                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4 
                                 group-hover:via-accent/60 transition-all duration-300"></div>

                  {/* Solution Heading */}
                  <div className="text-sm font-bold text-foreground mb-3 tracking-wide uppercase opacity-90">
                    WE SOLVE THIS:
                  </div>

                  {/* Solution Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {item.solution}
                  </p>

                  {/* CTA Button for Card #6 Only */}
                  {item.hasCTA && (
                    <div className="mt-6">
                      <Button 
                        className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-8 
                                   rounded-full text-base transition-all duration-300 hover:scale-105 
                                   shadow-lg hover:shadow-xl hover:shadow-primary/30"
                      >
                        Get My Free Case Review
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;