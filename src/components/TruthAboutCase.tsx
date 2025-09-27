import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TruthAboutCase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const floatingLayersRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Check for reduced motion preference
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion) {
        // Floating Background Layers Animation
        floatingLayersRef.current.forEach((layer, index) => {
          if (!layer) return;
          
          switch (index) {
            case 0: // Back layer - slow vertical float
              gsap.to(layer, {
                y: 30,
                duration: 14,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });
              break;
            case 1: // Mid layer - horizontal drift
              gsap.to(layer, {
                x: 40,
                duration: 18,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });
              break;
            case 2: // Front layer - complex motion + rotation
              gsap.to(layer, {
                y: 20,
                x: 25,
                duration: 10,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });
              gsap.to(layer, {
                rotation: 2,
                duration: 22,
                ease: "sine.inOut",
                repeat: -1,
                yoyo: true
              });
              break;
          }
        });

        // Parallax Scroll Effects
        floatingLayersRef.current.forEach((layer, index) => {
          if (!layer) return;
          
          gsap.to(layer, {
            y: (index + 1) * -100,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true
            }
          });
        });
      }

      // Animate process steps with 3D effects
      const steps = section.querySelectorAll('.process-step');
      gsap.fromTo(
        steps,
        { 
          opacity: 0, 
          y: 50,
          z: -100,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          z: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const problems = [
    {
      number: "01",
      title: "They're Recording Everything",
      description: "That friendly adjuster? They're building a case against you. Every word you say is being analyzed to minimize or deny your claim. One wrong statement costs you thousands.",
      tags: ["Recording", "Analysis", "Minimize", "Deny"],
      type: "immediate"
    },
    {
      number: "02", 
      title: "Evidence is Disappearing Fast",
      description: "Surveillance footage gets deleted in 30 days. Witnesses forget details. Skid marks fade. Every day you wait makes your case weaker and their defense stronger.",
      tags: ["Surveillance", "Witnesses", "Evidence", "Time"],
      type: "immediate"
    },
    {
      number: "03",
      title: "Your Doctor Works for Them", 
      description: "Insurance companies have networks of doctors who minimize injuries. They'll send you to \"their\" doctor who will say you're fine, destroying your case value.",
      tags: ["Medical", "Networks", "Minimize", "Destroy"],
      type: "never"
    },
    {
      number: "04",
      title: "The First Offer is an Insult",
      description: "They know you need money now. Bills are piling up. So they offer 10% of what your case is worth, hoping desperation makes you accept. Don't fall for it.",
      tags: ["Lowball", "Desperation", "Accept", "Insult"],
      type: "never"
    },
    {
      number: "05",
      title: "Most Lawyers are Scared of Trial",
      description: "95% of attorneys never go to trial. Insurance companies know this. They lowball because they know your lawyer will push you to settle. I'm not afraid. They know it.",
      tags: ["Trial", "Scared", "Settle", "Weak"],
      type: "never"
    },
    {
      number: "06",
      title: "Time Limits are Ticking",
      description: "California has strict deadlines. Miss them and you get nothing. Government claims? 6 months. Regular claims? 2 years. But evidence disappears much faster.",
      tags: ["Deadlines", "Limits", "Miss", "Nothing"],
      type: "immediate"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-white overflow-hidden"
      style={{ 
        perspective: '1200px',
        transformStyle: 'preserve-3d'
      }}
    >
      {/* 3D Floating Background Layers */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Back layer */}
        <div 
          ref={el => el && (floatingLayersRef.current[0] = el)}
          className="absolute inset-0 opacity-10"
          style={{ transform: 'translateZ(-500px)' }}
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Mid layer */}
        <div 
          ref={el => el && (floatingLayersRef.current[1] = el)}
          className="absolute inset-0 opacity-20"
          style={{ transform: 'translateZ(-250px)' }}
        >
          <div className="w-3/4 h-3/4 mx-auto mt-20 bg-gradient-to-tl from-green-400/30 via-blue-400/30 to-purple-400/30 rounded-full blur-2xl"></div>
        </div>
        
        {/* Front layer */}
        <div 
          ref={el => el && (floatingLayersRef.current[2] = el)}
          className="absolute inset-0 opacity-30"
          style={{ transform: 'translateZ(-100px)' }}
        >
          <div className="w-1/2 h-1/2 mx-auto mt-32 bg-gradient-to-r from-orange-400/40 via-red-400/40 to-pink-400/40 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-8 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Truth</span> About Your Case
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            What insurance companies don't want you to know
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {problems.map((problem, index) => {
            const isImmediate = problem.type === 'immediate';
            const borderColor = isImmediate ? 'border-green-200 hover:border-green-400' : 'border-red-200 hover:border-red-400';
            const shadowColor = isImmediate ? 'hover:shadow-green-500/20' : 'hover:shadow-red-500/20';
            const accentColor = isImmediate ? 'text-green-500' : 'text-red-500';
            const bgGradient = isImmediate 
              ? 'hover:bg-gradient-to-br hover:from-green-50/50 hover:to-emerald-50/50' 
              : 'hover:bg-gradient-to-br hover:from-red-50/50 hover:to-rose-50/50';
            
            return (
              <div
                key={index}
                className={`
                  process-step group relative p-8 rounded-2xl border-2 transition-all duration-500 transform-gpu will-change-transform
                  hover:scale-105 hover:shadow-2xl backdrop-blur-sm bg-white/90
                  ${borderColor} ${shadowColor} ${bgGradient}
                `}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: 'translateZ(0)'
                }}
              >
                {/* Number badge - pinned inside top-left */}
                <span
                  className={`absolute top-4 left-4 z-10 px-2 py-1 text-xs font-semibold rounded-full tracking-widest
                    ${isImmediate ? 'text-green-700 bg-green-50 ring-1 ring-green-200' : 'text-red-700 bg-red-50 ring-1 ring-red-200'}`}
                >
                  {problem.number}
                </span>

                {/* Glow effect overlay */}
                <div className={`
                  pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500
                  ${isImmediate ? 'bg-gradient-to-r from-green-400/10 to-emerald-400/10' : 'bg-gradient-to-r from-red-400/10 to-rose-400/10'}
                `}></div>
                
                {/* Content Container */}
                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-slate-800 transition-colors duration-300">
                    {problem.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed mb-6 group-hover:text-slate-700 transition-colors duration-300">
                    {problem.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {problem.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`
                          px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-300
                          ${isImmediate 
                            ? 'bg-green-100 text-green-700 group-hover:bg-green-200 group-hover:text-green-800' 
                            : 'bg-red-100 text-red-700 group-hover:bg-red-200 group-hover:text-red-800'
                          }
                          group-hover:scale-105
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TruthAboutCase;