import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Clock, Shield, CurrencyDollar, Scales, Warning } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const TruthAboutCase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingLayersRef = useRef<HTMLDivElement[]>([]);
  const headerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        // Enhanced 3D Floating Background Layers
        floatingLayersRef.current.forEach((layer, index) => {
          if (!layer) return;
          
          // Create master timeline for each layer
          const tl = gsap.timeline({ repeat: -1 });
          
          switch (index) {
            case 0: // Back layer - complex orbital motion
              tl.to(layer, {
                y: 40,
                x: 20,
                rotation: 5,
                duration: 16,
                ease: "sine.inOut"
              })
              .to(layer, {
                y: -30,
                x: -15,
                rotation: -3,
                duration: 12,
                ease: "sine.inOut"
              })
              .to(layer, {
                y: 0,
                x: 0,
                rotation: 0,
                duration: 14,
                ease: "sine.inOut"
              });
              break;
              
            case 1: // Mid layer - figure-8 motion
              tl.to(layer, {
                x: 50,
                y: 25,
                rotation: 8,
                duration: 20,
                ease: "sine.inOut"
              })
              .to(layer, {
                x: -30,
                y: -20,
                rotation: -5,
                duration: 18,
                ease: "sine.inOut"
              })
              .to(layer, {
                x: 0,
                y: 0,
                rotation: 0,
                duration: 16,
                ease: "sine.inOut"
              });
              break;
              
            case 2: // Front layer - pulsing motion with scale
              tl.to(layer, {
                y: 30,
                x: 35,
                rotation: 10,
                scale: 1.1,
                duration: 12,
                ease: "sine.inOut"
              })
              .to(layer, {
                y: -25,
                x: -40,
                rotation: -8,
                scale: 0.9,
                duration: 15,
                ease: "sine.inOut"
              })
              .to(layer, {
                y: 0,
                x: 0,
                rotation: 0,
                scale: 1,
                duration: 13,
                ease: "sine.inOut"
              });
              break;
          }
        });

        // Advanced Parallax Scroll Effects
        floatingLayersRef.current.forEach((layer, index) => {
          if (!layer) return;
          
          gsap.to(layer, {
            y: (index + 1) * -120,
            rotation: (index + 1) * 5,
            scale: 1 + (index * 0.05),
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.5,
              invalidateOnRefresh: true
            }
          });
        });

        // Cinematic Header Animation Sequence
        const headerTl = gsap.timeline({
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          }
        });

        // Title animation with blur and glow effect
        headerTl.fromTo(titleRef.current, 
          { 
            opacity: 0, 
            y: 60,
            filter: 'blur(20px)',
            scale: 0.8
          },
          { 
            opacity: 1, 
            y: 0,
            filter: 'blur(0px)',
            scale: 1,
            duration: 1.2,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          }
        );

        // Subtitle with delayed entrance
        headerTl.fromTo(subtitleRef.current,
          {
            opacity: 0,
            y: 30,
            filter: 'blur(10px)'
          },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            ease: "power2.out"
          },
          "-=0.5"
        );

        // Enhanced Cards Animation with Magnetic Effect
        cardsRef.current.forEach((card, index) => {
          if (!card) return;

          // Entry animation
          gsap.fromTo(card, 
            { 
              opacity: 0, 
              y: 80,
              z: -200,
              rotationX: 20,
              scale: 0.8,
              filter: 'blur(15px)'
            },
            {
              opacity: 1,
              y: 0,
              z: 0,
              rotationX: 0,
              scale: 1,
              filter: 'blur(0px)',
              duration: 1,
              delay: index * 0.15,
              ease: "cubic-bezier(0.22, 1, 0.36, 1)",
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              }
            }
          );

          // Advanced hover interactions
          const handleMouseEnter = () => {
            gsap.to(card, {
              y: -10,
              z: 50,
              rotationX: 5,
              rotationY: 5,
              scale: 1.02,
              duration: 0.6,
              ease: "power2.out"
            });

            // Animate icon
            const icon = card.querySelector('.card-icon');
            if (icon) {
              gsap.to(icon, {
                scale: 1.15,
                rotation: 5,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)"
              });
            }

            // Animate tags
            const tags = card.querySelectorAll('.card-tag');
            gsap.to(tags, {
              y: -2,
              scale: 1.05,
              duration: 0.3,
              stagger: 0.05,
              ease: "power2.out"
            });
          };

          const handleMouseLeave = () => {
            gsap.to(card, {
              y: 0,
              z: 0,
              rotationX: 0,
              rotationY: 0,
              scale: 1,
              duration: 0.6,
              ease: "power2.out"
            });

            const icon = card.querySelector('.card-icon');
            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.4,
                ease: "elastic.out(1, 0.5)"
              });
            }

            const tags = card.querySelectorAll('.card-tag');
            gsap.to(tags, {
              y: 0,
              scale: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: "power2.out"
            });
          };

          card.addEventListener('mouseenter', handleMouseEnter);
          card.addEventListener('mouseleave', handleMouseLeave);
        });
      }

      // Mark as visible for conditional rendering
      setIsVisible(true);
    }, section);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      number: "01",
      title: "They're Recording Everything",
      description: "That friendly adjuster? They're building a case against you. Every word you say is being analyzed to minimize or deny your claim. One wrong statement costs you thousands.",
      tags: ["Recording", "Analysis", "Minimize", "Deny"],
      type: "immediate",
      icon: Eye,
      color: "emerald"
    },
    {
      number: "02", 
      title: "Evidence is Disappearing Fast",
      description: "Surveillance footage gets deleted in 30 days. Witnesses forget details. Skid marks fade. Every day you wait makes your case weaker and their defense stronger.",
      tags: ["Surveillance", "Witnesses", "Evidence", "Time"],
      type: "immediate",
      icon: Clock,
      color: "emerald"
    },
    {
      number: "03",
      title: "Your Doctor Works for Them", 
      description: "Insurance companies have networks of doctors who minimize injuries. They'll send you to \"their\" doctor who will say you're fine, destroying your case value.",
      tags: ["Medical", "Networks", "Minimize", "Destroy"],
      type: "never",
      icon: Shield,
      color: "rose"
    },
    {
      number: "04",
      title: "The First Offer is an Insult",
      description: "They know you need money now. Bills are piling up. So they offer 10% of what your case is worth, hoping desperation makes you accept. Don't fall for it.",
      tags: ["Lowball", "Desperation", "Accept", "Insult"],
      type: "never",
      icon: CurrencyDollar,
      color: "rose"
    },
    {
      number: "05",
      title: "Most Lawyers are Scared of Trial",
      description: "95% of attorneys never go to trial. Insurance companies know this. They lowball because they know your lawyer will push you to settle. I'm not afraid. They know it.",
      tags: ["Trial", "Scared", "Settle", "Weak"],
      type: "never",
      icon: Scales,
      color: "rose"
    },
    {
      number: "06",
      title: "Time Limits are Ticking",
      description: "California has strict deadlines. Miss them and you get nothing. Government claims? 6 months. Regular claims? 2 years. But evidence disappears much faster.",
      tags: ["Deadlines", "Limits", "Miss", "Nothing"],
      type: "immediate",
      icon: Warning,
      color: "emerald"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative min-h-screen py-32 overflow-hidden bg-background"
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30"
            style={{
              width: `${Math.random() * 100 + 30}px`,
              height: `${Math.random() * 100 + 30}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)`,
              filter: 'blur(2px)',
              animation: `float ${4 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}

        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background/80"></div>
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Cinematic Section Header */}
        <div ref={headerRef} className="text-center mb-24">
          <h1 
            ref={titleRef}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight text-foreground"
          >
            The <span className="text-primary">Truth</span> About Your Case
          </h1>
          
          <div className="w-32 h-1 bg-primary mx-auto mb-8 rounded-full"></div>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-muted-foreground"
          >
            What insurance companies don't want you to know
          </p>
        </div>

        {/* Enhanced Glassmorphic Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {problems.map((problem, index) => {
            const isImmediate = problem.type === 'immediate';
            const IconComponent = problem.icon;
            
            return (
              <div
                key={index}
                ref={el => el && (cardsRef.current[index] = el)}
                className="group relative overflow-hidden"
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Clean Card */}
                <div className={`
                  relative p-8 rounded-2xl border-2 transition-all duration-500 bg-surface/50 backdrop-blur-sm
                  ${isImmediate 
                    ? 'border-primary/20 hover:border-primary/40' 
                    : 'border-destructive/20 hover:border-destructive/40'
                  }
                  shadow-lg hover:shadow-xl hover:-translate-y-1
                `}
                >
                  {/* Subtle hover effect */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500
                    ${isImmediate 
                      ? 'bg-primary/5' 
                      : 'bg-destructive/5'
                    }
                  `}></div>
                  
                  {/* Number Badge */}
                  <div className={`
                    absolute top-6 left-6 w-14 h-14 rounded-xl flex items-center justify-center font-bold text-lg
                    transition-all duration-500 group-hover:scale-110
                    ${isImmediate 
                      ? 'bg-primary/20 text-primary' 
                      : 'bg-destructive/20 text-destructive'
                    }
                  `}>
                    {problem.number}
                  </div>

                  {/* Icon */}
                  <div className={`
                    card-icon absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center
                    transition-all duration-500
                    ${isImmediate 
                      ? 'bg-primary/15 text-primary' 
                      : 'bg-destructive/15 text-destructive'
                    }
                  `}>
                    <IconComponent size={24} weight="light" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative pt-16">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight text-foreground">
                      {problem.title}
                    </h3>
                    
                    <p className="text-base leading-relaxed mb-6 text-muted-foreground">
                      {problem.description}
                    </p>
                    
                    {/* Enhanced Tags */}
                    <div className="flex flex-wrap gap-3">
                      {problem.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`
                            card-tag px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                            backdrop-blur-sm border
                            ${isImmediate 
                              ? 'bg-emerald-500/20 border-emerald-400/40 text-emerald-200 hover:bg-emerald-400/30' 
                              : 'bg-rose-500/20 border-rose-400/40 text-rose-200 hover:bg-rose-400/30'
                            }
                          `}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.3;
          }
          25% { 
            transform: translateY(-20px) translateX(10px) rotate(2deg); 
            opacity: 0.6;
          }
          50% { 
            transform: translateY(-10px) translateX(-5px) rotate(-1deg); 
            opacity: 0.4;
          }
          75% { 
            transform: translateY(-30px) translateX(-10px) rotate(3deg); 
            opacity: 0.7;
          }
        }
      `}</style>
    </section>
  );
};

export default TruthAboutCase;