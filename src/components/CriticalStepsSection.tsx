import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, FileText, Camera, Users, AlertTriangle, Shield } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CriticalStepsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const threeDContainerRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<HTMLDivElement[]>([]);

  // Section 1: Immediate Steps (4 subsections)
  const immediateSteps = [
    {
      icon: Users,
      title: "Seek medical attention immediately",
      description: "Your health is #1 priority",
      detail: "Get immediate medical care even if injuries seem minor"
    },
    {
      icon: Phone,
      title: "Call 911", 
      description: "Get a police report",
      detail: "Official documentation is crucial for your case"
    },
    {
      icon: Camera,
      title: "Document everything",
      description: "Photos, witnesses, scene details",
      detail: "Evidence disappears fast - capture it now"
    },
    {
      icon: Shield,
      title: "Contact us before insurance",
      description: "Protect your rights",
      detail: "Don't let insurance companies take advantage of you"
    }
  ];

  // Section 2: Never Do This (4 subsections)
  const neverDo = [
    {
      icon: XCircle,
      title: "Don't admit fault",
      description: "Even if you think you're partially responsible",
      detail: "Let the investigation determine what happened"
    },
    {
      icon: AlertTriangle,
      title: "Don't give recorded statements", 
      description: "To insurance companies without representation",
      detail: "Anything you say can be used against you later"
    },
    {
      icon: XCircle,
      title: "Don't accept quick settlements",
      description: "They're usually far below fair value",
      detail: "Initial offers are designed to close cases cheaply"
    },
    {
      icon: XCircle,
      title: "Don't delay treatment",
      description: "Gaps in care can hurt your case",
      detail: "Continuous medical care strengthens your claim"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const threeDContainer = threeDContainerRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;
    const panels = panelRefs.current.filter(Boolean);

    if (!section || !threeDContainer) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // VINE-style premium easing
    const vineEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    // Set up 3D container with enhanced perspective
    gsap.set(threeDContainer, {
      transformStyle: "preserve-3d",
      willChange: "transform"
    });

    if (!prefersReducedMotion) {
      // VINE-style floating background animations (idle state)
      if (backLayer) {
        // Back layer: vertical drift (14s loop)
        gsap.to(backLayer, {
          y: 50,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        // Mid layer: horizontal drift (18s loop)
        gsap.to(midLayer, {
          x: 60,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        // Front layer: combo drift Y(10s) + X(22s) + rotation
        gsap.to(frontLayer, {
          y: 30,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          x: 40,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          rotation: 3,
          duration: 25,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // VINE-style parallax scroll effects (back 20%, mid 40%, front 60%)
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (backLayer) {
            gsap.set(backLayer, { y: progress * -200 }); // 0.2x speed
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -400 }); // 0.4x speed  
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -600 }); // 0.6x speed
          }
        }
      });
    }

    // Set initial states for all panels (inactive/receded)
    panels.forEach((panel, index) => {
      gsap.set(panel, {
        opacity: prefersReducedMotion ? 0 : 0.1,
        y: prefersReducedMotion ? 0 : 50,
        z: prefersReducedMotion ? 0 : -200, // Start deeper in 3D space
        scale: prefersReducedMotion ? 1 : 0.9,
        willChange: "transform"
      });

      // Set initial states for panel content
      const title = panel.querySelector('h1, h2');
      const subtitle = panel.querySelector('.subtitle, .detail');
      const icon = panel.querySelector('.panel-icon');
      const button = panel.querySelector('button');

      // Hide all content initially
      [title, subtitle, icon, button].forEach(el => {
        if (el) {
          gsap.set(el, {
            opacity: 0,
            y: 30,
            scale: el === icon ? 0.7 : 1,
            willChange: "transform"
          });
        }
      });

      // VINE-style scroll trigger for each panel (~40% viewport)
      ScrollTrigger.create({
        trigger: panel,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          // Panel zooms forward into focus (VINE traveling effect)
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            z: prefersReducedMotion ? 0 : 120, // Zoom forward in 3D space
            scale: prefersReducedMotion ? 1 : 1.05,
            duration: 0.8,
            ease: vineEase
          });

          // Staggered content reveals (150-200ms apart)
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
            tl.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: vineEase
            }, "-=0.4");
          }

          if (subtitle) {
            tl.to(subtitle, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: vineEase
            }, "-=0.2");
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
        },
        onLeave: () => {
          // Panel recedes back into 3D space
          gsap.to(panel, {
            opacity: prefersReducedMotion ? 0 : 0.1,
            y: prefersReducedMotion ? 0 : 50,
            z: prefersReducedMotion ? 0 : -200,
            scale: prefersReducedMotion ? 1 : 0.9,
            duration: 0.6,
            ease: vineEase
          });
        },
        onEnterBack: () => {
          // Panel comes forward again when scrolling back
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            z: prefersReducedMotion ? 0 : 120,
            scale: prefersReducedMotion ? 1 : 1.05,
            duration: 0.8,
            ease: vineEase
          });
        },
        onLeaveBack: () => {
          // Panel recedes when scrolling back up
          gsap.to(panel, {
            opacity: prefersReducedMotion ? 0 : 0.1,
            y: prefersReducedMotion ? 0 : 50,
            z: prefersReducedMotion ? 0 : -200,
            scale: prefersReducedMotion ? 1 : 0.9,
            duration: 0.6,
            ease: vineEase
          });
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background">
      {/* VINE-style 3D Container with Enhanced Perspective */}
      <div 
        ref={threeDContainerRef}
        className="relative"
        style={{ 
          perspective: window.innerWidth < 768 ? '1100px' : '1600px',
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
              transform: 'translateZ(-800px)',
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
              transform: 'translateZ(-400px)',
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
              transform: 'translateZ(-200px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/15 via-transparent to-accent/20 blur-xl" />
            <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-primary/6 rounded-full blur-2xl" />
            <div className="absolute top-1/2 right-1/5 w-48 h-48 bg-accent/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Header Panel */}
        <div 
          ref={el => { if (el) panelRefs.current[0] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-5xl mx-auto">
            <div className="panel-icon mb-8">
              <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30">
                <CheckCircle className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 font-display leading-tight">
              What to Do After a California Accident
            </h1>
            <p className="subtitle text-2xl text-muted-foreground font-medium">Critical Steps</p>
          </div>
        </div>

        {/* Section 1: Immediate Steps Intro */}
        <div 
          ref={el => { if (el) panelRefs.current[1] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-5xl mx-auto">
            <div className="panel-icon mb-8">
              <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-emerald-500/30">
                <CheckCircle className="h-12 w-12 text-emerald-500" />
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Immediate Steps
            </h2>
            <p className="subtitle text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Take these actions right away to protect yourself and your case
            </p>
          </div>
        </div>

        {/* Section 1: Immediate Steps (4 subsections) */}
        {immediateSteps.map((step, index) => (
          <div 
            key={index}
            ref={el => { if (el) panelRefs.current[2 + index] = el; }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="panel-icon mb-8">
                <div className="w-28 h-28 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-emerald-500/30 hover:scale-110 transition-transform duration-300">
                  <step.icon className="h-14 w-14 text-emerald-500" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
                {step.title}
              </h2>
              <p className="subtitle text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed">
                {step.description}
              </p>
              <p className="detail text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                {step.detail}
              </p>
            </div>
          </div>
        ))}

        {/* Section 2: Never Do This Intro */}
        <div 
          ref={el => { if (el) panelRefs.current[6] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-5xl mx-auto">
            <div className="panel-icon mb-8">
              <div className="w-24 h-24 bg-destructive/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-destructive/30">
                <XCircle className="h-12 w-12 text-destructive" />
              </div>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              Never Do This
            </h2>
            <p className="subtitle text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Avoid these common mistakes that can hurt your case
            </p>
          </div>
        </div>

        {/* Section 2: Never Do This (4 subsections) */}
        {neverDo.map((item, index) => (
          <div 
            key={index}
            ref={el => { if (el) panelRefs.current[7 + index] = el; }}
            className="relative z-10 min-h-screen flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="panel-icon mb-8">
                <div className="w-28 h-28 bg-destructive/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-destructive/30 hover:scale-110 transition-transform duration-300">
                  <item.icon className="h-14 w-14 text-destructive" />
                </div>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
                {item.title}
              </h2>
              <p className="subtitle text-xl lg:text-2xl text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <p className="detail text-lg text-muted-foreground/80 max-w-2xl mx-auto">
                {item.detail}
              </p>
            </div>
          </div>
        ))}

        {/* CTA Panel */}
        <div 
          ref={el => { if (el) panelRefs.current[11] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-5xl mx-auto">
            <div className="panel-icon mb-8">
              <div className="w-28 h-28 bg-primary/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-primary/30 animate-pulse-glow">
                <Phone className="h-14 w-14 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 font-display leading-tight">
              Ready to Get Maximum Compensation?
            </h2>
            <p className="subtitle text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
              Don't let insurance companies take advantage of you. Our experienced team will fight for every dollar you deserve.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-6 text-xl rounded-full hover:scale-110 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 backdrop-blur-sm border border-primary/30"
            >
              Get Free Consultation Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalStepsSection;