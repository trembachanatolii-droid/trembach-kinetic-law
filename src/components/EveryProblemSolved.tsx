import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, Shield, Clock } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EveryProblemSolved = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const threeDContainerRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const headlineWordsRef = useRef<HTMLSpanElement[]>([]);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);
  
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
    const threeDContainer = threeDContainerRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;
    const headlineWords = headlineWordsRef.current.filter(Boolean);
    const subheading = subheadingRef.current;
    const cards = cardsRef.current.filter(Boolean);

    if (!section || !threeDContainer || headlineWords.length === 0 || !subheading || cards.length === 0) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Premium easing
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    if (!prefersReducedMotion) {
      // Floating background animations
      if (backLayer) {
        gsap.to(backLayer, {
          y: 25,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 35,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 18,
          x: 28,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Parallax scroll effects
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          if (backLayer) {
            gsap.set(backLayer, { y: progress * -80 });
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -160 });
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -240 });
          }
        }
      });
    }

    // Set initial states
    gsap.set(section, { opacity: 0 });
    gsap.set(headlineWords, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 20,
      z: prefersReducedMotion ? 0 : -100,
      scale: prefersReducedMotion ? 1 : 0.9
    });
    gsap.set(subheading, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 16,
      z: prefersReducedMotion ? 0 : -80
    });
    gsap.set(cards, { 
      opacity: 0, 
      y: prefersReducedMotion ? 0 : 30,
      z: prefersReducedMotion ? 0 : -120,
      scale: prefersReducedMotion ? 1 : 0.85,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(5px)"
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
      ease: premiumEase
    })
    // Headline words animation (word by word)
    .to(headlineWords, {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      duration: prefersReducedMotion ? 0.3 : 0.6,
      stagger: prefersReducedMotion ? 0.05 : 0.15,
      ease: premiumEase
    })
    // Subheading animation (after headline completes + 200ms delay)
    .to(subheading, {
      opacity: 1,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: premiumEase
    }, "+=0.2")
    // Cards staggered animation
    .to(cards, {
      opacity: 1,
      y: 0,
      z: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.6,
      stagger: 0.15,
      ease: premiumEase
    }, "-=0.2");

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background overflow-hidden">
      {/* 3D Container with Perspective */}
      <div 
        ref={threeDContainerRef}
        className="relative"
        style={{ 
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Back Layer */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-30"
            style={{ transform: 'translateZ(-500px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(var(--accent))_0%,transparent_50%)] opacity-20" />
          </div>

          {/* Mid Layer */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-40"
            style={{ transform: 'translateZ(-250px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Front Layer */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ transform: 'translateZ(-100px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-accent/15 blur-xl" />
            <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div 
            className="text-center -mb-32"
            style={{ transformStyle: 'preserve-3d' }}
          >
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
          <div 
            className="relative flex justify-center items-center min-h-[600px] mb-12 overflow-visible -mt-48 lg:-mt-64"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="relative w-full flex justify-center overflow-visible">
              {problems.map((item, index) => {
                const IconComponent = item.icon;
                // Calculate rotation and position for semicircle fan
                const totalCards = problems.length;
                const angleStep = 65 / (totalCards - 1); // 65 degrees total spread
                const rotation = -25 + (index * angleStep); // -25 to +25 degrees
                const radiusX = 380; // Horizontal radius (wider spacing for accessibility)
                const radiusY = 70;  // Vertical radius (increased for larger cards)
                const radian = (rotation * Math.PI) / 180;
                const x = radiusX * Math.sin(radian);
                const y = radiusY * (1 - Math.cos(radian));
                 
                // Determine card states
                const isHovered = hoveredCard === index;
                const isLeftNeighbor = hoveredCard !== null && index === hoveredCard - 1;
                const isRightNeighbor = hoveredCard !== null && index === hoveredCard + 1;
                const isNeighbor = isLeftNeighbor || isRightNeighbor;
                
                // Bias hover growth away from neighbors
                const centerIndex = Math.floor((totalCards - 1) / 2);
                const isLeft = index < centerIndex;
                const isRight = index > centerIndex;
                const transformOrigin = isLeft ? 'left center' : isRight ? 'right center' : 'center';
                
                // Dynamic classes with 3D hover effects
                let cardClasses = "bg-surface/20 backdrop-blur-sm border border-border/20 rounded-3xl p-7 w-80 h-96 shadow-sm transition-all duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu will-change-transform";
                
                if (isHovered) {
                  // Main active card with 3D effects
                  cardClasses += " scale-[1.08] -translate-y-16 rotate-0 shadow-[0_32px_64px_rgba(0,0,0,0.25),0_8px_24px_rgba(0,0,0,0.15)] border-primary/50 bg-surface/40 backdrop-blur-md z-[200] brightness-[1.02]";
                  if (isLeft) cardClasses += " -translate-x-4 lg:-translate-x-6";
                  if (isRight) cardClasses += " translate-x-4 lg:translate-x-6";
                } else if (isNeighbor) {
                  // Neighbor card - subtle secondary elevation
                  cardClasses += " scale-[1.03] -translate-y-6 shadow-[0_16px_32px_rgba(0,0,0,0.18),0_4px_12px_rgba(0,0,0,0.12)] border-primary/30 bg-surface/30 backdrop-blur-sm z-[150] brightness-[1.01]";
                } else {
                  // Inactive card with gentle 3D hover
                  cardClasses += " hover:scale-[1.02] hover:-translate-y-2 hover:shadow-[0_12px_24px_rgba(0,0,0,0.15)] hover:border-border/40 hover:bg-surface/30 hover:backdrop-blur-sm hover:rotateY-2";
                }
                
                return (
                  <div
                    key={index}
                    ref={el => { if (el) cardsRef.current[index] = el; }}
                    className="absolute group cursor-pointer"
                    tabIndex={0}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onFocus={() => setHoveredCard(index)}
                    onBlur={() => setHoveredCard(null)}
                    style={{
                      transform: `translate(-50%, 0) translate(${x}px, ${y}px) rotate(${rotation * 0.2}deg)`,
                      left: '50%',
                      zIndex: isHovered ? 200 : isNeighbor ? 150 : 10 + index,
                      transformOrigin,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className={cardClasses}>
                      
                      {/* Icon */}
                      <div className="mb-3">
                        <IconComponent className="w-7 h-7 text-accent group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {/* Problem Number */}
                      <div className="text-sm font-bold text-accent mb-3 tracking-wide group-hover:text-accent-glow transition-colors duration-300">
                        Problem #{item.number}
                      </div>

                      {/* Problem Statement in Quotes */}
                      <blockquote className="text-sm text-foreground italic mb-3 leading-relaxed font-medium 
                                           bg-muted/30 p-3 rounded-lg border-l-4 border-accent/50 group-hover:border-accent transition-colors duration-300">
                        "{item.problem}"
                      </blockquote>

                      {/* Divider Line */}
                      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-3 
                                     group-hover:via-accent/60 transition-all duration-300"></div>

                      {/* Solution Heading */}
                      <div className="text-xs font-bold text-foreground mb-2 tracking-wide uppercase opacity-90 group-hover:text-primary transition-colors duration-300">
                        WE SOLVE THIS:
                      </div>

                      {/* Solution Text */}
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div 
            className="max-w-2xl mx-auto text-center bg-surface/30 backdrop-blur-sm border border-border/20 rounded-3xl p-8 shadow-lg mt-32 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30 transition-all duration-500"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
              Ready to Get Maximum Compensation?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Don't let insurance companies take advantage of you. Get your free case review now.
            </p>
            <Button 
              className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-12 
                         rounded-full text-lg transition-all duration-300 hover:scale-105 
                         shadow-lg hover:shadow-xl hover:shadow-primary/30 hover:translateZ-10"
            >
              Get My Free Case Review
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EveryProblemSolved;