import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Phone, FileText, Camera, Users } from "lucide-react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CriticalStepsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const immediateStepsRef = useRef<HTMLDivElement>(null);
  const neverDoRef = useRef<HTMLDivElement>(null);
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
    const header = headerRef.current;
    const immediateCards = immediateCardsRef.current.filter(Boolean);
    const neverDoCards = neverDoCardsRef.current.filter(Boolean);
    const immediateStepsEl = immediateStepsRef.current;
    const neverDoEl = neverDoRef.current;

    if (!section || !header) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(header, {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 60,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)"
    });

    if (immediateStepsEl) {
      gsap.set(immediateStepsEl, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 60
      });
    }

    if (neverDoEl) {
      gsap.set(neverDoEl, {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 60
      });
    }

    gsap.set([...immediateCards, ...neverDoCards], {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 60,
      scale: prefersReducedMotion ? 1 : 0.95,
      filter: prefersReducedMotion ? "blur(0px)" : "blur(5px)"
    });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Header animation
    tl.to(header, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out"
    });

    // Column headers animation
    if (immediateStepsEl) {
      tl.to(immediateStepsEl, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    }

    if (neverDoEl) {
      tl.to(neverDoEl, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.8");
    }

    // Cards animation
    tl.to(immediateCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out"
    }, "-=0.4")
    .to(neverDoCards, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.8,
      stagger: 0.05,
      ease: "power3.out"
    }, "-=0.6");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-surface/10 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 font-display">
            What to Do After a California Accident
          </h2>
          <p className="text-xl text-muted-foreground mb-2">Critical Steps</p>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Immediate Steps */}
          <div ref={immediateStepsRef} className="space-y-8">
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
                  className="group relative bg-surface/20 backdrop-blur-sm border border-border/20 rounded-xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:border-primary/30"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
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

          {/* Never Do This */}
          <div ref={neverDoRef} className="space-y-8">
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
                  className="group relative bg-surface/20 backdrop-blur-sm border border-border/20 rounded-xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-2 hover:border-primary/30"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-accent/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
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
      </div>
    </section>
  );
};

export default CriticalStepsSection;