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
      icon: Clock
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
    <section ref={sectionRef} className="py-20 bg-background overflow-visible">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
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

        {/* Cards Fan Arc Layout */}
        <div className="relative flex justify-center items-center min-h-[600px] mb-12 overflow-visible">
          <div className="relative w-full flex justify-center overflow-visible">
            {problems.map((item, index) => {
              const IconComponent = item.icon;
              // Calculate rotation and position for semicircle fan
              const totalCards = problems.length;
              const angleStep = 50 / (totalCards - 1); // 50 degrees total spread
              const rotation = -25 + (index * angleStep); // -25 to +25 degrees
              const radiusX = 320; // Horizontal radius (increased for larger cards)
              const radiusY = 70;  // Vertical radius (increased for larger cards)
              const radian = (rotation * Math.PI) / 180;
              const x = radiusX * Math.sin(radian);
              const y = radiusY * (1 - Math.cos(radian));
              
              return (
                <div
                  key={index}
                  ref={el => { if (el) cardsRef.current[index] = el; }}
                  className="absolute group cursor-pointer hover:z-[999] focus-within:z-[999]"
                  tabIndex={0}
                  onMouseEnter={(e) => { e.currentTarget.style.zIndex = '999'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.zIndex = String(10 + index); }}
                  onFocus={(e) => { e.currentTarget.style.zIndex = '999'; }}
                  onBlur={(e) => { e.currentTarget.style.zIndex = String(10 + index); }}
                  style={{
                    transform: `translate(-50%, 0) translate(${x}px, ${y}px) rotate(${rotation * 0.2}deg)`,
                    left: '50%',
                    zIndex: 10 + index,
                  }}
                >
                  <div className="bg-card border border-border/20 rounded-2xl p-7 w-80 h-96 shadow-sm 
                                 transition-all duration-[350ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                                 hover:scale-[1.15] focus-within:scale-[1.15] hover:-translate-y-8 focus-within:-translate-y-8 hover:rotate-0 
                                 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] focus-within:shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                                 hover:border-primary/40 hover:bg-card hover:z-[200]
                                 transform-gpu origin-center">
                    
                    {/* Icon */}
                    <div className="mb-3">
                      <IconComponent className="w-7 h-7 text-accent" />
                    </div>

                    {/* Problem Number */}
                    <div className="text-sm font-bold text-accent mb-3 tracking-wide">
                      Problem #{item.number}
                    </div>

                    {/* Problem Statement in Quotes */}
                    <blockquote className="text-sm text-foreground italic mb-3 leading-relaxed font-medium 
                                         bg-muted/30 p-3 rounded-lg border-l-4 border-accent/50">
                      "{item.problem}"
                    </blockquote>

                    {/* Divider Line */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-3 
                                   group-hover:via-accent/60 transition-all duration-300"></div>

                    {/* Solution Heading */}
                    <div className="text-xs font-bold text-foreground mb-2 tracking-wide uppercase opacity-90">
                      WE SOLVE THIS:
                    </div>

                    {/* Solution Text */}
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-2xl mx-auto text-center bg-card/50 border border-border/20 rounded-3xl p-8 shadow-lg mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
            Ready to Get Maximum Compensation?
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Don't let insurance companies take advantage of you. Get your free case review now.
          </p>
          <Button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-12 
                       rounded-full text-lg transition-all duration-300 hover:scale-105 
                       shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Get My Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;