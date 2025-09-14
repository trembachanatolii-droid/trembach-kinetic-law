import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, FileText, Camera, Users } from "lucide-react";
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

  // Chapter 1: Immediate Steps
  const immediateSteps = [
    {
      icon: Users,
      title: "Seek medical attention immediately",
      description: "Your health is #1 priority"
    },
    {
      icon: Phone,
      title: "Call 911", 
      description: "Get a police report"
    },
    {
      icon: Camera,
      title: "Document everything",
      description: "Photos, witnesses, scene details"
    },
    {
      icon: FileText,
      title: "Contact us before insurance",
      description: "Protect your rights"
    }
  ];

  // Chapter 2: Never Do This
  const neverDo = [
    {
      icon: XCircle,
      title: "Don't admit fault",
      description: "Even if you think you're partially responsible"
    },
    {
      icon: XCircle,
      title: "Don't give recorded statements", 
      description: "To insurance companies without representation"
    },
    {
      icon: XCircle,
      title: "Don't accept quick settlements",
      description: "They're usually far below far value"
    },
    {
      icon: XCircle,
      title: "Don't delay treatment",
      description: "Gaps in care can hurt your case"
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

    // Premium easing
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    // Set up 3D container
    gsap.set(threeDContainer, {
      transformStyle: "preserve-3d",
      willChange: "transform"
    });

    if (!prefersReducedMotion) {
      // Floating background animations (idle state)
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
        gsap.to(frontLayer, {
          y: 20,
          x: 25,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          rotation: 2,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Parallax scroll effects for background layers
      ScrollTrigger.create({
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
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

    // Set initial states for panels
    panels.forEach((panel, index) => {
      gsap.set(panel, {
        opacity: prefersReducedMotion ? 0 : 0.2,
        y: prefersReducedMotion ? 0 : 30,
        z: prefersReducedMotion ? 0 : 0,
        scale: prefersReducedMotion ? 1 : 1,
        willChange: "transform"
      });

      // Set initial states for panel content
      const title = panel.querySelector('h2');
      const subtitle = panel.querySelector('.subtitle');
      const icon = panel.querySelector('.panel-icon');

      if (title) {
        gsap.set(title, {
          opacity: 0,
          y: 20,
          willChange: "transform"
        });
      }

      if (subtitle) {
        gsap.set(subtitle, {
          opacity: 0,
          y: 20,
          willChange: "transform"
        });
      }

      if (icon) {
        gsap.set(icon, {
          opacity: 0,
          scale: 0.8,
          willChange: "transform"
        });
      }

      // Create scroll trigger for each panel
      ScrollTrigger.create({
        trigger: panel,
        start: "top 60%",
        end: "bottom 40%",
        onEnter: () => {
          // Panel becomes active
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            z: prefersReducedMotion ? 0 : 120,
            scale: prefersReducedMotion ? 1 : 1.05,
            duration: 0.7,
            ease: premiumEase
          });

          // Animate content with stagger
          const tl = gsap.timeline();
          
          if (icon) {
            tl.to(icon, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              ease: premiumEase
            });
          }

          if (title) {
            tl.to(title, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: premiumEase
            }, "-=0.3");
          }

          if (subtitle) {
            tl.to(subtitle, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: premiumEase
            }, "-=0.4");
          }
        },
        onLeave: () => {
          // Panel becomes inactive
          gsap.to(panel, {
            opacity: prefersReducedMotion ? 0 : 0.2,
            y: prefersReducedMotion ? 0 : 30,
            z: 0,
            scale: 1,
            duration: 0.5,
            ease: premiumEase
          });
        },
        onEnterBack: () => {
          // Panel becomes active again when scrolling back
          gsap.to(panel, {
            opacity: 1,
            y: 0,
            z: prefersReducedMotion ? 0 : 120,
            scale: prefersReducedMotion ? 1 : 1.05,
            duration: 0.7,
            ease: premiumEase
          });
        },
        onLeaveBack: () => {
          // Panel becomes inactive when scrolling back
          gsap.to(panel, {
            opacity: prefersReducedMotion ? 0 : 0.2,
            y: prefersReducedMotion ? 0 : 30,
            z: 0,
            scale: 1,
            duration: 0.5,
            ease: premiumEase
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
      {/* 3D Container with Perspective */}
      <div 
        ref={threeDContainerRef}
        className="relative"
        style={{ 
          perspective: window.innerWidth < 768 ? '900px' : '1400px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Layers */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Back Layer */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-30"
            style={{ 
              transform: 'translateZ(-500px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
          </div>

          {/* Mid Layer */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-40"
            style={{ 
              transform: 'translateZ(-250px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Front Layer */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ 
              transform: 'translateZ(-100px)',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-accent/15 blur-xl" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>

        {/* Header Panel */}
        <div 
          ref={el => { if (el) panelRefs.current[0] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="panel-icon mb-8">
              <CheckCircle className="h-16 w-16 text-primary mx-auto" />
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 font-display">
              What to Do After a California Accident
            </h2>
            <p className="subtitle text-xl text-muted-foreground">Critical Steps</p>
          </div>
        </div>

        {/* Chapter 1: Immediate Steps */}
        <div className="relative z-10">
          <div 
            ref={el => { if (el) panelRefs.current[1] = el; }}
            className="min-h-screen flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="panel-icon mb-8">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
                Immediate Steps
              </h2>
              <p className="subtitle text-xl text-muted-foreground">
                Take these actions right away to protect yourself and your case
              </p>
            </div>
          </div>

          {immediateSteps.map((step, index) => (
            <div 
              key={index}
              ref={el => { if (el) panelRefs.current[2 + index] = el; }}
              className="min-h-screen flex items-center justify-center px-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className="panel-icon mb-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="h-10 w-10 text-green-500" />
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
                  {step.title}
                </h2>
                <p className="subtitle text-xl text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Chapter 2: Never Do This */}
        <div className="relative z-10">
          <div 
            ref={el => { if (el) panelRefs.current[6] = el; }}
            className="min-h-screen flex items-center justify-center px-4"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <div className="panel-icon mb-8">
                <XCircle className="h-16 w-16 text-destructive mx-auto" />
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
                Never Do This
              </h2>
              <p className="subtitle text-xl text-muted-foreground">
                Avoid these common mistakes that can hurt your case
              </p>
            </div>
          </div>

          {neverDo.map((item, index) => (
            <div 
              key={index}
              ref={el => { if (el) panelRefs.current[7 + index] = el; }}
              className="min-h-screen flex items-center justify-center px-4"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center max-w-4xl mx-auto">
                <div className="panel-icon mb-8">
                  <div className="w-20 h-20 bg-destructive/20 rounded-full flex items-center justify-center mx-auto">
                    <item.icon className="h-10 w-10 text-destructive" />
                  </div>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display">
                  {item.title}
                </h2>
                <p className="subtitle text-xl text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Panel */}
        <div 
          ref={el => { if (el) panelRefs.current[11] = el; }}
          className="relative z-10 min-h-screen flex items-center justify-center px-4"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <div className="panel-icon mb-8">
              <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Phone className="h-10 w-10 text-primary" />
              </div>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
              Ready to Get Maximum Compensation?
            </h2>
            <p className="subtitle text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let insurance companies take advantage of you. Our experienced team will fight for every dollar you deserve.
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
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