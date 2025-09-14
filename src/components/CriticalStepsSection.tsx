import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, Camera, Users, AlertTriangle, Shield } from "lucide-react";
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

  // VINE-style panel configuration - each panel is a 3D plane in Z-space
  const panels = [
    // Section 1: Immediate Steps
    {
      type: 'section-header',
      title: ['Immediate', 'Steps'],
      subtitle: 'Take these actions right away to protect yourself and your case',
      icon: CheckCircle,
      color: 'emerald',
      zPosition: 0
    },
    {
      type: 'panel',
      title: ['Seek', 'medical', 'attention', 'immediately'],
      subtitle: 'Your health is #1 priority',
      icon: Users,
      color: 'emerald',
      zPosition: -1000
    },
    {
      type: 'panel',
      title: ['Call', '911'],
      subtitle: 'Get a police report',
      icon: Phone,
      color: 'emerald',
      zPosition: -2000
    },
    {
      type: 'panel',
      title: ['Document', 'everything'],
      subtitle: 'Photos, witnesses, scene details',
      icon: Camera,
      color: 'emerald',
      zPosition: -3000
    },
    {
      type: 'panel',
      title: ['Contact', 'us', 'before', 'insurance'],
      subtitle: 'Protect your rights',
      icon: Shield,
      color: 'emerald',
      zPosition: -4000
    },
    // Section 2: Never Do This
    {
      type: 'section-header',
      title: ['Never', 'Do', 'This'],
      subtitle: 'Avoid these common mistakes that can hurt your case',
      icon: XCircle,
      color: 'destructive',
      zPosition: -5000
    },
    {
      type: 'panel',
      title: ["Don't", 'admit', 'fault'],
      subtitle: "Even if you think you're partially responsible",
      icon: XCircle,
      color: 'destructive',
      zPosition: -6000
    },
    {
      type: 'panel',
      title: ["Don't", 'give', 'recorded', 'statements'],
      subtitle: 'To insurance companies without representation',
      icon: AlertTriangle,
      color: 'destructive',
      zPosition: -7000
    },
    {
      type: 'panel',
      title: ["Don't", 'accept', 'quick', 'settlements'],
      subtitle: "They're usually far below fair value",
      icon: XCircle,
      color: 'destructive',
      zPosition: -8000
    },
    {
      type: 'panel',
      title: ["Don't", 'delay', 'treatment'],
      subtitle: 'Gaps in care can hurt your case',
      icon: XCircle,
      color: 'destructive',
      zPosition: -9000
    },
    // CTA Panel
    {
      type: 'cta',
      title: ['Ready', 'to', 'Get', 'Maximum', 'Compensation?'],
      subtitle: "Don't let insurance companies take advantage of you. Our experienced team will fight for every dollar you deserve.",
      icon: Phone,
      color: 'primary',
      zPosition: -10000
    }
  ];

  useEffect(() => {
    const container = containerRef.current;
    const camera = cameraRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;
    const panelElements = panelRefs.current.filter(Boolean);

    if (!container || !camera) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // VINE-style premium easing
    const vineEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    // Set up 3D perspective for the container
    gsap.set(container, {
      transformStyle: "preserve-3d",
      perspective: window.innerWidth < 768 ? 1200 : 1800,
      willChange: "transform"
    });

    // Set up camera that will move through 3D space
    gsap.set(camera, {
      transformStyle: "preserve-3d",
      willChange: "transform"
    });

    if (!prefersReducedMotion) {
      // VINE-style floating background animations (idle state)
      if (backLayer) {
        gsap.to(backLayer, {
          y: 30,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 40,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        // Combined floating motion
        gsap.to(frontLayer, {
          y: 20,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          x: 25,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // VINE-style parallax background layers on scroll
      ScrollTrigger.create({
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (backLayer) {
            gsap.set(backLayer, { y: progress * -100 }); // 20% speed
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -200 }); // 40% speed  
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -300 }); // 60% speed
          }
        }
      });
    }

    // Position all panels as 3D planes in Z-space
    panelElements.forEach((panel, index) => {
      const panelData = panels[index];
      if (!panelData) return;

      gsap.set(panel, {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        transformStyle: 'preserve-3d',
        z: panelData.zPosition,
        opacity: index === 0 ? 1 : 0, // Only first panel visible initially
        scale: index === 0 ? 1 : 0.8,
        willChange: 'transform'
      });

      // Set initial states for text content (hidden except first panel)
      const titleWords = panel.querySelectorAll('.word');
      const subtitle = panel.querySelector('.panel-subtitle');
      const icon = panel.querySelector('.panel-icon');
      const button = panel.querySelector('button');

      if (index > 0) {
        titleWords.forEach(word => {
          gsap.set(word, {
            opacity: 0,
            y: 20,
            willChange: 'transform'
          });
        });

        [subtitle, icon, button].forEach(el => {
          if (el) {
            gsap.set(el, {
              opacity: 0,
              y: 30,
              scale: el === icon ? 0.8 : 1,
              willChange: 'transform'
            });
          }
        });
      }
    });

    // VINE-style camera movement - scroll moves camera forward through Z-space
    const totalPanels = panels.length;
    const totalDistance = Math.abs(panels[panels.length - 1].zPosition);
    
    // Set container height to create scroll distance
    gsap.set(container, { height: totalPanels * window.innerHeight });

    let lastActivePanel = 0;

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      pin: true,
      onUpdate: (self) => {
        if (prefersReducedMotion) {
          // Fallback for reduced motion - simple fade between panels
          const newActivePanel = Math.min(Math.floor(self.progress * totalPanels), totalPanels - 1);
          if (newActivePanel !== lastActivePanel) {
            panelElements.forEach((panel, index) => {
              gsap.to(panel, {
                opacity: index === newActivePanel ? 1 : 0,
                duration: 0.6,
                ease: vineEase
              });
            });
            lastActivePanel = newActivePanel;
            setCurrentPanel(newActivePanel);
          }
          return;
        }

        const progress = self.progress;
        // Move camera forward through Z-space
        const cameraZ = progress * totalDistance;
        gsap.set(camera, { z: cameraZ });

        // Determine which panel should be active
        const newActivePanel = Math.min(Math.floor(progress * totalPanels), totalPanels - 1);
        
        if (newActivePanel !== lastActivePanel) {
          lastActivePanel = newActivePanel;
          setCurrentPanel(newActivePanel);

          // Animate panels - only one in focus at a time (VINE style)
          panelElements.forEach((panel, index) => {
            if (index === newActivePanel) {
              // Current panel - comes into focus
              gsap.to(panel, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: vineEase
              });

              // VINE-style text reveals with word-by-word staggering
              const titleWords = panel.querySelectorAll('.word');
              const subtitle = panel.querySelector('.panel-subtitle');
              const icon = panel.querySelector('.panel-icon');
              const button = panel.querySelector('button');

              // Create staggered timeline for content reveal
              const tl = gsap.timeline();

              // Icon first
              if (icon) {
                tl.to(icon, {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  duration: 0.6,
                  ease: vineEase
                });
              }

              // Title words with stagger (VINE signature effect)
              titleWords.forEach((word, i) => {
                tl.to(word, {
                  opacity: 1,
                  y: 0,
                  duration: 0.5,
                  ease: vineEase
                }, i * 0.15); // 150ms stagger between words
              });

              // Subtitle after title (200ms delay)
              if (subtitle) {
                tl.to(subtitle, {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: vineEase
                }, "-=0.2");
              }

              // Button last (if exists)
              if (button) {
                tl.to(button, {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.6,
                  ease: vineEase
                }, "-=0.1");
              }

            } else {
              // Non-active panels - fade out and scale down
              gsap.to(panel, {
                opacity: index < newActivePanel ? 0.3 : 0, // Previous panels slightly visible
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
      {/* VINE-style 3D Camera that moves through Z-space */}
      <div 
        ref={cameraRef}
        className="relative w-full h-screen"
        style={{ 
          transformStyle: 'preserve-3d'
        }}
      >
        {/* VINE-style Parallax Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Back Layer (20% scroll speed) */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ 
              transform: 'translateZ(-1500px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/25 via-accent/10 to-primary/35 blur-3xl" />
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
            <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-accent/6 rounded-full blur-3xl" />
          </div>

          {/* Mid Layer (40% scroll speed) */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-25"
            style={{ 
              transform: 'translateZ(-800px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-primary/6 rounded-full blur-2xl" />
          </div>

          {/* Front Layer (60% scroll speed) */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-15"
            style={{ 
              transform: 'translateZ(-400px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/12 via-transparent to-accent/15 blur-xl" />
            <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-primary/4 rounded-full blur-xl" />
            <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-accent/8 rounded-full blur-xl" />
          </div>
        </div>

        {/* All Panels as 3D Planes in Z-Space */}
        {panels.map((panelData, index) => (
          <div 
            key={index}
            ref={el => { if (el) panelRefs.current[index] = el; }}
            className="flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-5xl mx-auto relative z-10">
              {/* Icon */}
              <div className="panel-icon mb-8">
                <div className={`w-20 h-20 ${
                  panelData.color === 'emerald' 
                    ? 'bg-emerald-500/20 border-emerald-500/30' 
                    : panelData.color === 'destructive'
                    ? 'bg-destructive/20 border-destructive/30'
                    : 'bg-primary/20 border-primary/30'
                } rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border hover:scale-110 transition-transform duration-300`}>
                  <panelData.icon className={`h-10 w-10 ${
                    panelData.color === 'emerald' 
                      ? 'text-emerald-500' 
                      : panelData.color === 'destructive'
                      ? 'text-destructive'
                      : 'text-primary'
                  }`} />
                </div>
              </div>

              {/* Title with VINE-style word staggering */}
              <h1 className="panel-title text-4xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
                {panelData.title.map((word, wordIndex) => (
                  <span key={wordIndex} className="word inline-block mr-3">
                    {word}
                  </span>
                ))}
              </h1>

              {/* Subtitle */}
              <p className="panel-subtitle text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
                {panelData.subtitle}
              </p>

              {/* CTA Button (only for CTA panel) */}
              {panelData.type === 'cta' && (
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-xl rounded-full hover:scale-105 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 backdrop-blur-sm border border-primary/30"
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