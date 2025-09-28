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
  const headerRef = useRef<HTMLDivElement>(null);
  const immediateStepsRef = useRef<HTMLDivElement>(null);
  const neverDoRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const immediateCardsRef = useRef<HTMLDivElement[]>([]);
  const neverDoCardsRef = useRef<HTMLDivElement[]>([]);

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

  const neverDo = [
    {
      title: "Don't admit fault",
      description: "Even if you think you're partially responsible"
    },
    {
      title: "Don't give recorded statements",
      description: "To insurance companies without representation"
    },
    {
      title: "Don't accept quick settlements",
      description: "They're usually far below fair value"
    },
    {
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
    const header = headerRef.current;
    const immediateCards = immediateCardsRef.current.filter(Boolean);
    const neverDoCards = neverDoCardsRef.current.filter(Boolean);
    const immediateStepsEl = immediateStepsRef.current;
    const neverDoEl = neverDoRef.current;
    const cta = ctaRef.current;

    if (!section || !header || !threeDContainer) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Premium easing
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    if (!prefersReducedMotion) {
      // Floating background animations
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

      // Parallax scroll effects
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

    // Set initial 3D states
    gsap.set(header, {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 60,
      z: prefersReducedMotion ? 0 : -200,
      scale: prefersReducedMotion ? 1 : 0.8,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)"
    });

    if (immediateStepsEl) {
      gsap.set(immediateStepsEl, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40,
        z: prefersReducedMotion ? 0 : -150,
        scale: prefersReducedMotion ? 1 : 0.85,
        rotationX: prefersReducedMotion ? 0 : 15
      });
    }

    if (neverDoEl) {
      gsap.set(neverDoEl, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 40,
        z: prefersReducedMotion ? 0 : -150,
        scale: prefersReducedMotion ? 1 : 0.85,
        rotationX: prefersReducedMotion ? 0 : 15
      });
    }

    if (cta) {
      gsap.set(cta, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 60,
        z: prefersReducedMotion ? 0 : -300,
        scale: prefersReducedMotion ? 1 : 0.7
      });
    }

    gsap.set([...immediateCards, ...neverDoCards], {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 40,
      z: prefersReducedMotion ? 0 : -100,
      scale: prefersReducedMotion ? 1 : 0.9,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(5px)"
    });

    // Header animation
    ScrollTrigger.create({
      trigger: header,
      start: "top 80%",
      onEnter: () => {
        gsap.to(header, {
          opacity: 1,
          y: 0,
          z: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.8,
          ease: premiumEase
        });
      }
    });

    // Immediate Steps panel animation
    if (immediateStepsEl) {
      ScrollTrigger.create({
        trigger: immediateStepsEl,
        start: "top 75%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(immediateStepsEl, {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.7,
            ease: premiumEase
          })
          .to(immediateCards, {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.15,
            ease: premiumEase
          }, "-=0.4");
        }
      });
    }

    // Never Do panel animation
    if (neverDoEl) {
      ScrollTrigger.create({
        trigger: neverDoEl,
        start: "top 75%",
        onEnter: () => {
          const tl = gsap.timeline();
          tl.to(neverDoEl, {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            rotationX: 0,
            duration: 0.7,
            ease: premiumEase
          })
          .to(neverDoCards, {
            opacity: 1,
            y: 0,
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.6,
            stagger: 0.15,
            ease: premiumEase
          }, "-=0.4");
        }
      });
    }

    // CTA animation
    if (cta) {
      ScrollTrigger.create({
        trigger: cta,
        start: "top 80%",
        onEnter: () => {
          gsap.to(cta, {
            opacity: 1,
            y: 0,
            z: 100, // Zoom forward into focus
            scale: 1,
            duration: 0.8,
            ease: premiumEase
          });
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-surface/10 backdrop-blur-sm overflow-hidden">
      {/* Simplified container without 3D transforms */}
      <div className="relative">
        {/* Background Layers - Simplified */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 blur-3xl opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-40" />
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-2xl opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <div 
            ref={headerRef} 
            className="text-center mb-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
              What to Do After a California Accident
            </h2>
            <p className="text-xl text-muted-foreground mb-2">Critical Steps</p>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Immediate Steps Panel */}
            <div 
              ref={immediateStepsRef} 
              className="space-y-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <CheckCircle className="h-8 w-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-foreground">Immediate Steps</h3>
                </div>
                <p className="text-muted-foreground">Take these actions right away to protect yourself and your case</p>
              </div>

              <div className="space-y-4">
                {immediateSteps.map((step, index) => (
                  <div
                    key={index}
                    ref={el => { if (el) immediateCardsRef.current[index] = el; }}
                    className="group relative bg-surface/20 backdrop-blur-sm border border-border/20 rounded-xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Enhanced Glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-accent/10 to-primary/10" />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-primary/20" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="h-6 w-6 text-green-500" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{step.title}</h4>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Never Do This Panel */}
            <div 
              ref={neverDoRef} 
              className="space-y-8"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-3 mb-4">
                  <XCircle className="h-8 w-8 text-red-500" />
                  <h3 className="text-2xl font-bold text-foreground">Never Do This</h3>
                </div>
                <p className="text-muted-foreground">Avoid these common mistakes that can hurt your case</p>
              </div>

              <div className="space-y-4">
                {neverDo.map((item, index) => (
                  <div
                    key={index}
                    ref={el => { if (el) neverDoCardsRef.current[index] = el; }}
                    className="group relative bg-surface/20 backdrop-blur-sm border border-border/20 rounded-xl p-6 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-destructive/20 hover:border-destructive/30"
                    style={{ transformStyle: 'preserve-3d' }}
                  >
                    {/* Enhanced Glow effect */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-destructive/10 to-accent/5" />
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg shadow-destructive/20" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <XCircle className="h-6 w-6 text-red-500" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div 
            ref={ctaRef}
            className="text-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-700 group">
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                Ready to Get Maximum Compensation?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't let insurance companies take advantage of you. Our experienced team will fight for every dollar you deserve.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 group"
                onClick={() => window.location.href = '/case-evaluation'}
              >
                Get Free Consultation Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CriticalStepsSection;