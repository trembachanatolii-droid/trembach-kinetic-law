import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
      // Individual card scroll animations with pump-up effect
      problems.forEach((_, index) => {
        const cardElement = `[data-card="${index}"]`;
        
        gsap.fromTo(
          cardElement,
          {
            opacity: 0,
            y: 80,
            scale: 0.85,
            rotateX: 15
          },
          {
            opacity: 1,
            y: 0,
            scale: 1.08, // Pump up entrance effect
            rotateX: 0,
            duration: 0.8,
            delay: index * 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: cardElement,
              start: "top 85%",
              toggleActions: "play none none none" // Only play once
            }
          }
        );

        // Return to normal scale after pump-up with delay
        gsap.to(cardElement, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
          delay: (index * 0.15) + 1 // Wait for entrance animation + extra delay
        });
      });

      // Section header animation
      gsap.fromTo(
        ".section-header",
        {
          opacity: 0,
          y: 40
        },
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleCardClick = (index: number) => {
    setActiveCard(index);
    
    // Animate clicked card - strong pop forward
    const clickedCard = document.querySelector(`[data-card="${index}"]`);
    if (clickedCard) {
      gsap.to(clickedCard, {
        scale: 1.18,
        z: 60,
        rotateX: -8,
        rotateY: 3,
        boxShadow: "0 35px 70px rgba(0,0,0,0.7)",
        brightness: 1.15,
        duration: 0.4,
        ease: "back.out(1.1)"
      });
    }

    // Animate other cards - push back and dim
    problems.forEach((_, i) => {
      if (i !== index) {
        const card = document.querySelector(`[data-card="${i}"]`);
        if (card) {
          gsap.to(card, {
            opacity: 0.3,
            scale: 0.88,
            z: -35,
            rotateX: 5,
            filter: "blur(1px)",
            duration: 0.4,
            ease: "power2.out"
          });
        }
      }
    });
  };

  const handleCardHover = (index: number) => {
    // Only hover effect if no card is actively clicked and this isn't the active card
    if (activeCard === null && hoveredCard !== index) {
      setHoveredCard(index);
      
      const hoveredCardElement = document.querySelector(`[data-card="${index}"]`);
      if (hoveredCardElement) {
        gsap.to(hoveredCardElement, {
          scale: 1.12,
          z: 25,
          rotateX: -5,
          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
          brightness: 1.08,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    }
  };

  const handleCardLeave = () => {
    // Only reset hover if no card is actively clicked
    if (activeCard === null) {
      setHoveredCard(null);
      
      problems.forEach((_, i) => {
        const card = document.querySelector(`[data-card="${i}"]`);
        if (card) {
          gsap.to(card, {
            scale: 1,
            opacity: 1,
            z: 0,
            rotateX: 0,
            rotateY: 0,
            boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
            brightness: 1,
            filter: "blur(0px)",
            duration: 0.35,
            ease: "power2.out"
          });
        }
      });
    } else {
      setHoveredCard(null);
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

        {/* Stacked Cards Container - Deck Style */}
        <div 
          ref={cardsRef} 
          className="relative max-w-lg mx-auto mb-16"
          style={{ 
            perspective: '1200px', 
            perspectiveOrigin: 'center center',
            height: '650px' 
          }}
          onMouseLeave={handleCardLeave}
        >
          {problems.map((item, index) => {
            const IconComponent = item.icon;
            const isLast = index === problems.length - 1;
            
            // Calculate stagger positions for deck effect
            const rotation = (index % 2 === 0 ? -1 : 1) * (2 + index * 0.8);
            const xOffset = (index % 2 === 0 ? -1 : 1) * (index * 4);
            const yOffset = index * 6;
            const zOffset = -index * 8;
            
            return (
              <div
                key={index}
                data-card={index}
                className="stacked-card absolute w-full bg-slate-800/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-600/30 cursor-pointer"
                style={{
                  transform: `
                    translateX(${xOffset}px) 
                    translateY(${yOffset}px) 
                    translateZ(${zOffset}px)
                    rotateZ(${rotation}deg)
                  `,
                  transformStyle: 'preserve-3d',
                  zIndex: problems.length - index,
                  boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                  transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                  filter: 'brightness(1)',
                  left: '50%',
                  top: '50%',
                  marginLeft: '-50%',
                  marginTop: '-40%'
                }}
                onMouseEnter={() => handleCardHover(index)}
                onClick={() => handleCardClick(index)}
              >
                {/* Icon */}
                <div className="mb-6">
                  <IconComponent className="w-8 h-8 text-accent drop-shadow-[0_0_8px_rgba(34,197,94,0.4)]" />
                </div>

                {/* Problem Number with enhanced neon effect */}
                <div className="text-xl font-bold mb-4 tracking-wide">
                  <span className="text-accent drop-shadow-[0_0_12px_rgba(34,197,94,0.8)] font-extrabold">
                    Problem #{item.number}
                  </span>
                </div>

                {/* Problem Statement */}
                <blockquote className="text-white text-lg italic mb-6 leading-relaxed font-medium">
                  "{item.problem}"
                </blockquote>

                {/* Enhanced Divider with stronger glow */}
                <div className="h-px bg-gradient-to-r from-transparent via-accent to-transparent mb-6 shadow-[0_0_15px_rgba(34,197,94,0.5)]"></div>

                {/* Solution Heading */}
                <div className="text-sm font-bold text-white mb-4 tracking-widest opacity-90">
                  WE SOLVE THIS:
                </div>

                {/* Solution Text */}
                <p className="text-slate-300 leading-relaxed mb-6 text-base">
                  {item.solution}
                </p>

                {/* Enhanced CTA Button on last card */}
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
      </div>
    </section>
  );
};

export default EveryProblemSolved;