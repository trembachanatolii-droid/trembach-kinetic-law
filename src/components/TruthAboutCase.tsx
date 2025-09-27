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
      className="relative min-h-screen py-32 overflow-hidden"
      style={{ 
        perspective: '1500px',
        transformStyle: 'preserve-3d',
        background: 'linear-gradient(135deg, hsl(222.2 84% 4.9%) 0%, hsl(217.2 32.6% 17.5%) 30%, hsl(215 20.2% 65.1%) 70%, hsl(210 40% 98%) 100%)'
      }}
    >
      {/* Advanced 3D Floating Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, hsla(${200 + Math.random() * 100}, 70%, 60%, 0.1) 0%, transparent 70%)`,
              filter: 'blur(1px)',
              animation: `float ${3 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}

        {/* Enhanced 3D Background Layers */}
        <div 
          ref={el => el && (floatingLayersRef.current[0] = el)}
          className="absolute inset-0 opacity-20"
          style={{ transform: 'translateZ(-600px)' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/25 rounded-full blur-3xl"></div>
        </div>
        
        <div 
          ref={el => el && (floatingLayersRef.current[1] = el)}
          className="absolute inset-0 opacity-30"
          style={{ transform: 'translateZ(-300px)' }}
        >
          <div className="w-4/5 h-4/5 mx-auto mt-24 bg-gradient-to-tl from-violet-400/40 via-indigo-400/30 to-blue-400/35 rounded-full blur-2xl"></div>
        </div>
        
        <div 
          ref={el => el && (floatingLayersRef.current[2] = el)}
          className="absolute inset-0 opacity-40"
          style={{ transform: 'translateZ(-150px)' }}
        >
          <div className="w-3/5 h-3/5 mx-auto mt-40 bg-gradient-to-r from-emerald-400/50 via-teal-400/40 to-cyan-400/45 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        {/* Cinematic Section Header */}
        <div ref={headerRef} className="text-center mb-24">
          <h1 
            ref={titleRef}
            className="font-display text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight"
            style={{
              background: 'linear-gradient(135deg, hsl(0 0% 98%) 0%, hsl(217.2 32.6% 17.5%) 50%, hsl(263.4 70% 50.4%) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(139, 92, 246, 0.3)'
            }}
          >
            The <span className="relative inline-block">
              Truth
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-lg blur-lg"></div>
            </span> About Your Case
          </h1>
          
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 mx-auto mb-8 rounded-full shadow-lg shadow-blue-500/50"></div>
          
          <p 
            ref={subtitleRef}
            className="text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed"
            style={{ color: 'hsl(215.4 16.3% 46.9%)' }}
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
                {/* Glassmorphic Card */}
                <div className={`
                  relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-700
                  ${isImmediate 
                    ? 'bg-emerald-500/10 border-emerald-400/30 hover:border-emerald-400/60' 
                    : 'bg-rose-500/10 border-rose-400/30 hover:border-rose-400/60'
                  }
                  shadow-2xl shadow-black/20 hover:shadow-black/40
                `}
                  style={{
                    background: isImmediate 
                      ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.05) 100%)'
                      : 'linear-gradient(135deg, rgba(244, 63, 94, 0.1) 0%, rgba(225, 29, 72, 0.05) 100%)',
                  }}
                >
                  {/* Animated Background Glow */}
                  <div className={`
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700
                    ${isImmediate 
                      ? 'bg-gradient-to-br from-emerald-400/20 via-green-400/10 to-teal-400/15' 
                      : 'bg-gradient-to-br from-rose-400/20 via-red-400/10 to-pink-400/15'
                    }
                  `}></div>
                  
                  {/* Number Badge */}
                  <div className={`
                    absolute top-6 left-6 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl
                    backdrop-blur-sm border transition-all duration-500 group-hover:scale-110
                    ${isImmediate 
                      ? 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300' 
                      : 'bg-rose-500/20 border-rose-400/50 text-rose-300'
                    }
                  `}>
                    {problem.number}
                  </div>

                  {/* Icon */}
                  <div className={`
                    card-icon absolute top-6 right-6 w-12 h-12 rounded-xl flex items-center justify-center
                    backdrop-blur-sm border transition-all duration-500
                    ${isImmediate 
                      ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-400' 
                      : 'bg-rose-500/15 border-rose-400/40 text-rose-400'
                    }
                  `}>
                    <IconComponent size={24} weight="light" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative pt-16">
                    <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white/90 group-hover:text-white transition-colors duration-300">
                      {problem.title}
                    </h3>
                    
                    <p className="text-lg leading-relaxed mb-8 text-white/70 group-hover:text-white/80 transition-colors duration-300">
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