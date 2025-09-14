import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, FileText, Camera, Users, AlertTriangle, Shield } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CriticalStepsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);
  const [currentPanel, setCurrentPanel] = useState(0);

  // All panels arranged in Z-space
  const allPanels = [
    // Header
    {
      type: 'header',
      title: ['What', 'to', 'Do', 'After', 'a', 'California', 'Accident'],
      subtitle: 'Critical Steps',
      icon: CheckCircle,
      zPosition: 0
    },
    // Section 1 Intro
    {
      type: 'section-intro',
      title: ['Immediate', 'Steps'],
      subtitle: 'Take these actions right away to protect yourself and your case',
      icon: CheckCircle,
      color: 'emerald',
      zPosition: -800
    },
    // Section 1 Panels
    {
      type: 'panel',
      title: ['Seek', 'medical', 'attention', 'immediately'],
      subtitle: 'Your health is #1 priority',
      detail: 'Get immediate medical care even if injuries seem minor',
      icon: Users,
      color: 'emerald',
      zPosition: -1600
    },
    {
      type: 'panel',
      title: ['Call', '911'],
      subtitle: 'Get a police report',
      detail: 'Official documentation is crucial for your case',
      icon: Phone,
      color: 'emerald',
      zPosition: -2400
    },
    {
      type: 'panel',
      title: ['Document', 'everything'],
      subtitle: 'Photos, witnesses, scene details',
      detail: 'Evidence disappears fast - capture it now',
      icon: Camera,
      color: 'emerald',
      zPosition: -3200
    },
    {
      type: 'panel',
      title: ['Contact', 'us', 'before', 'insurance'],
      subtitle: 'Protect your rights',
      detail: "Don't let insurance companies take advantage of you",
      icon: Shield,
      color: 'emerald',
      zPosition: -4000
    },
    // Section 2 Intro
    {
      type: 'section-intro',
      title: ['Never', 'Do', 'This'],
      subtitle: 'Avoid these common mistakes that can hurt your case',
      icon: XCircle,
      color: 'destructive',
      zPosition: -4800
    },
    // Section 2 Panels
    {
      type: 'panel',
      title: ["Don't", 'admit', 'fault'],
      subtitle: "Even if you think you're partially responsible",
      detail: 'Let the investigation determine what happened',
      icon: XCircle,
      color: 'destructive',
      zPosition: -5600
    },
    {
      type: 'panel',
      title: ["Don't", 'give', 'recorded', 'statements'],
      subtitle: 'To insurance companies without representation',
      detail: 'Anything you say can be used against you later',
      icon: AlertTriangle,
      color: 'destructive',
      zPosition: -6400
    },
    {
      type: 'panel',
      title: ["Don't", 'accept', 'quick', 'settlements'],
      subtitle: "They're usually far below fair value",
      detail: 'Initial offers are designed to close cases cheaply',
      icon: XCircle,
      color: 'destructive',
      zPosition: -7200
    },
    {
      type: 'panel',
      title: ["Don't", 'delay', 'treatment'],
      subtitle: 'Gaps in care can hurt your case',
      detail: 'Continuous medical care strengthens your claim',
      icon: XCircle,
      color: 'destructive',
      zPosition: -8000
    },
    // CTA Panel
    {
      type: 'cta',
      title: ['Ready', 'to', 'Get', 'Maximum', 'Compensation?'],
      subtitle: "Don't let insurance companies take advantage of you. Our experienced team will fight for every dollar you deserve.",
      icon: Phone,
      zPosition: -8800
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;
    const panels = panelRefs.current.filter(Boolean);

    if (!container || !camera) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // VINE-style premium easing
    const vineEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    // Set up 3D environment
    gsap.set(container, {
      transformStyle: "preserve-3d",
      perspective: window.innerWidth < 768 ? 1100 : 1600,
      willChange: "transform"
    });

    gsap.set(camera, {
      transformStyle: "preserve-3d",
      willChange: "transform"
    });

    if (!prefersReducedMotion) {
      // VINE-style floating background animations (idle state)
      if (backLayer) {
        gsap.to(backLayer, {
          y: 40,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 50,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 25,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          x: 35,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // VINE-style parallax background layers
      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (backLayer) {
            gsap.set(backLayer, { y: progress * -150 }); // 20% speed
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -300 }); // 40% speed  
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -450 }); // 60% speed
          }
        }
      });
    }

    // Position all panels in Z-space
    panels.forEach((panel, index) => {
      const panelData = allPanels[index];
      if (!panelData) return;

      gsap.set(panel, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        transformStyle: 'preserve-3d',
        z: panelData.zPosition,
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 0.8,
        willChange: 'transform'
      });

      // Hide all text content initially except first panel
      const title = panel.querySelector('.panel-title');
      const subtitle = panel.querySelector('.panel-subtitle');
      const detail = panel.querySelector('.panel-detail');
      const icon = panel.querySelector('.panel-icon');
      const button = panel.querySelector('button');

      if (index > 0) {
        [title, subtitle, detail, icon, button].forEach(el => {
          if (el) {
            gsap.set(el, {
              opacity: 0,
              y: 30,
              scale: el === icon ? 0.7 : 1
            });
          }
        });
      }
    });

    // VINE-style camera movement through panels
    const totalPanels = allPanels.length;
    const sectionHeight = totalPanels * window.innerHeight;

    // Set container height to allow scrolling through all panels
    gsap.set(container, { height: sectionHeight });

    let lastActivePanel = 0;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      onUpdate: (self) => {
        if (prefersReducedMotion) return;

        const progress = self.progress;
        const cameraZ = progress * (totalPanels - 1) * 800; // Move camera forward

        gsap.set(camera, { z: cameraZ });

        // Determine active panel based on scroll progress
        const newActivePanel = Math.min(Math.floor(progress * totalPanels), totalPanels - 1);
        
        if (newActivePanel !== lastActivePanel) {
          lastActivePanel = newActivePanel;
          setCurrentPanel(newActivePanel);

          // Animate panel transitions
          panels.forEach((panel, index) => {
            const distance = Math.abs(index - newActivePanel);
            
            if (index === newActivePanel) {
              // Current panel - full focus
              gsap.to(panel, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: vineEase
              });

              // Animate text content in
              const title = panel.querySelector('.panel-title');
              const subtitle = panel.querySelector('.panel-subtitle');
              const detail = panel.querySelector('.panel-detail');
              const icon = panel.querySelector('.panel-icon');
              const button = panel.querySelector('button');

              const tl = gsap.timeline();

              if (icon) {
                tl.to(icon, {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.6,
                  ease: vineEase
                });
              }

              if (title) {
                // Stagger words in title
                const words = title.querySelectorAll('.word');
                words.forEach((word, i) => {
                  tl.to(word, {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    ease: vineEase
                  }, i * 0.15);
                });
              }

              if (subtitle) {
                tl.to(subtitle, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: vineEase
                }, "-=0.2");
              }

              if (detail) {
                tl.to(detail, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: vineEase
                }, "-=0.1");
              }

              if (button) {
                tl.to(button, {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.6,
                  ease: vineEase
                }, "-=0.1");
              }

            } else if (distance === 1) {
              // Adjacent panels - partially visible
              gsap.to(panel, {
                opacity: 0.3,
                scale: 0.9,
                duration: 0.6,
                ease: vineEase
              });
            } else {
              // Far panels - hidden
              gsap.to(panel, {
                opacity: 0,
                scale: 0.8,
                duration: 0.6,
                ease: vineEase
              });
            }
          });
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-background">
      {/* VINE-style 3D Camera Container */}
      <div 
        ref={cameraRef}
        className="relative"
        style={{ 
          transformStyle: 'preserve-3d'
        }}
      >
        {/* VINE-style Parallax Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Back Layer (20% speed) */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-25"
            style={{ 
              transform: 'translateZ(-1000px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/15 to-primary/40 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary))_0%,transparent_60%)] opacity-25" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Mid Layer (40% speed) */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-35"
            style={{ 
              transform: 'translateZ(-500px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/25 via-transparent to-primary/25 blur-2xl" />
            <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/8 rounded-full blur-2xl" />
          </div>

          {/* Front Layer (60% speed) */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ 
              transform: 'translateZ(-250px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-transparent to-accent/20 blur-xl" />
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* All Panels in Z-Space */}
        {allPanels.map((panelData, index) => (
          <div 
            key={index}
            ref={el => { if (el) panelRefs.current[index] = el; }}
            className="flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-5xl mx-auto relative z-10">
              {/* Icon */}
              <div className="panel-icon mb-8">
                <div className={`w-24 h-24 ${
                  panelData.color === 'emerald' 
                    ? 'bg-emerald-500/20 border-emerald-500/30' 
                    : panelData.color === 'destructive'
                    ? 'bg-destructive/20 border-destructive/30'
                    : 'bg-primary/20 border-primary/30'
                } rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border hover:scale-110 transition-transform duration-300`}>
                  <panelData.icon className={`h-12 w-12 ${
                    panelData.color === 'emerald' 
                      ? 'text-emerald-500' 
                      : panelData.color === 'destructive'
                      ? 'text-destructive'
                      : 'text-primary'
                  }`} />
                </div>
              </div>

              {/* Title with word staggering */}
              <h1 className="panel-title text-4xl lg:text-7xl font-bold text-foreground mb-6 font-display leading-tight">
                {panelData.title.map((word, wordIndex) => (
                  <span key={wordIndex} className="word inline-block mr-4">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="panel-subtitle text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
                {panelData.subtitle}
              </p>

              {/* Detail text (for regular panels) */}
              {panelData.detail && (
                <p className="panel-detail text-lg text-muted-foreground/80 max-w-2xl mx-auto mb-8">
                  {panelData.detail}
                </p>
              )}

              {/* CTA Button (only for CTA panel) */}
              {panelData.type === 'cta' && (
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-xl rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 backdrop-blur-sm border border-primary/30"
                >
                  Get Free Consultation Now
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CriticalStepsSection;