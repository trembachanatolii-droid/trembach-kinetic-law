import React, { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Phone, Camera, Shield, X, Clock, FileX, DollarSign } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AccidentStepsGuide = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const ctaRef = useRef<HTMLDivElement>(null);

  const immediateSteps = [
    {
      icon: AlertTriangle,
      title: "Seek medical attention immediately",
      description: "Your health is #1 priority",
      iconColor: "text-red-500"
    },
    {
      icon: Phone,
      title: "Call 911",
      description: "Get a police report",
      iconColor: "text-blue-500"
    },
    {
      icon: Camera,
      title: "Document everything",
      description: "Photos, witnesses, scene details",
      iconColor: "text-green-500"
    },
    {
      icon: Shield,
      title: "Contact us before insurance",
      description: "Protect your rights",
      iconColor: "text-primary"
    }
  ];

  const neverDoThis = [
    {
      icon: X,
      title: "Don't admit fault",
      description: "Even if you think you're partially responsible",
      iconColor: "text-red-500"
    },
    {
      icon: FileX,
      title: "Don't give recorded statements",
      description: "To insurance companies without representation",
      iconColor: "text-orange-500"
    },
    {
      icon: DollarSign,
      title: "Don't accept quick settlements",
      description: "They're usually far below fair value",
      iconColor: "text-amber-500"
    },
    {
      icon: Clock,
      title: "Don't delay treatment",
      description: "Gaps in care can hurt your case",
      iconColor: "text-red-600"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const headline = headlineRef.current;
    const subtitle = subtitleRef.current;
    const cards = cardsRef.current.filter(Boolean);
    const cta = ctaRef.current;

    if (!section || !headline || !subtitle || cards.length === 0 || !cta) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Set initial states
    gsap.set(section, { opacity: 0 });
    gsap.set(headline, { opacity: 0, y: prefersReducedMotion ? 0 : 30 });
    gsap.set(subtitle, { opacity: 0, y: prefersReducedMotion ? 0 : 20 });
    gsap.set(cards, { opacity: 0, y: prefersReducedMotion ? 0 : 40 });
    gsap.set(cta, { opacity: 0, y: prefersReducedMotion ? 0 : 30 });

    // Create timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Animate elements
    tl.to(section, {
      opacity: 1,
      duration: 0.4,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    })
    .to(headline, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    })
    .to(subtitle, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    }, "-=0.3")
    .to(cards, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    }, "-=0.2")
    .to(cta, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: "cubic-bezier(0.22, 1, 0.36, 1)"
    }, "-=0.2");

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            ref={headlineRef}
            className="text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display"
          >
            What to Do After a California Accident
          </h2>
          <p 
            ref={subtitleRef}
            className="text-xl text-muted-foreground max-w-3xl mx-auto font-medium"
          >
            Critical Steps
          </p>
        </div>

        {/* Immediate Steps Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 font-display">
              Immediate Steps
            </h3>
            <p className="text-lg text-muted-foreground">
              Take these actions right away to protect yourself and your case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {immediateSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  ref={el => { if (el) cardsRef.current[index] = el; }}
                  className="bg-card/80 backdrop-blur-sm border border-border/30 rounded-2xl p-6 text-center 
                           shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 
                           hover:border-primary/30 hover:bg-card/90"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-muted/50">
                      <IconComponent className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Never Do This Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2 font-display">
              Never Do This
            </h3>
            <p className="text-lg text-muted-foreground">
              Avoid these common mistakes that can hurt your case
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neverDoThis.map((mistake, index) => {
              const IconComponent = mistake.icon;
              const cardIndex = immediateSteps.length + index;
              return (
                <div
                  key={index}
                  ref={el => { if (el) cardsRef.current[cardIndex] = el; }}
                  className="bg-card/80 backdrop-blur-sm border border-red-200/30 rounded-2xl p-6 text-center 
                           shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 
                           hover:border-red-300/50 hover:bg-card/90"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-red-50/50 dark:bg-red-950/30">
                      <IconComponent className={`w-8 h-8 ${mistake.iconColor}`} />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-2">
                    {mistake.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {mistake.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div 
          ref={ctaRef}
          className="max-w-2xl mx-auto text-center bg-card/60 backdrop-blur-sm border border-border/20 rounded-3xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4 font-display">
            Free Case Check in 2 Minutes
          </h3>
          <p className="text-muted-foreground mb-6 text-lg">
            Get expert guidance on your next steps
          </p>
          <Button 
            className="bg-primary hover:bg-primary/80 text-primary-foreground font-bold py-4 px-12 
                       rounded-full text-lg transition-all duration-300 hover:scale-105 
                       shadow-lg hover:shadow-xl hover:shadow-primary/30"
          >
            Start Your Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AccidentStepsGuide;