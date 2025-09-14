import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CapabilityStripeProps {
  title: string;
  description: string;
  index: number;
}

const CapabilityStripe: React.FC<CapabilityStripeProps> = ({ title, description, index }) => {
  const stripeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stripe = stripeRef.current;
    if (!stripe) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    gsap.fromTo(
      stripe,
      {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 100,
        z: prefersReducedMotion ? 0 : -200,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
        scale: prefersReducedMotion ? 1 : 0.95,
      },
      {
        opacity: 1,
        y: 0,
        z: 0,
        filter: "blur(0px)",
        scale: 1,
        duration: 0.8,
        ease: premiumEase,
        scrollTrigger: {
          trigger: stripe,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={stripeRef}
      className="relative w-full py-16 lg:py-24 border-b border-border/20 group hover:bg-surface/20 transition-all duration-700"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className="container mx-auto px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Stripe Number */}
            <div className="lg:col-span-1">
              <span className="text-8xl lg:text-9xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors duration-700 group-hover:scale-110 transform-gpu">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-display font-display font-bold text-foreground group-hover:text-primary transition-colors duration-500 glow">
                {title}
              </h3>
              <p className="text-body text-muted-foreground leading-relaxed max-w-3xl group-hover:text-foreground transition-colors duration-500">
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />
    </div>
  );
};

const CapabilityStripes = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const capabilities = [
    {
      title: "Insider Advantage",
      description: "We know the insurer playbook—valuation software, reserves, negotiation ladders. Having worked on the defense side, we understand exactly how insurance companies minimize claims and can counter their tactics at every turn."
    },
    {
      title: "Medical-First Recovery", 
      description: "Get treatment fast. We handle claims, liens, and future care coordination so you can focus on healing. Our network of medical professionals ensures you receive proper documentation and treatment."
    },
    {
      title: "Statewide Reach",
      description: "All 58 counties • Remote consults • Local experts. Our comprehensive California coverage means we understand local court systems, judges, and opposing counsel throughout the state."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Section reveal animation
    gsap.fromTo(
      ".section-header",
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-8 mb-20">
        <div className="section-header text-center max-w-4xl mx-auto">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            Why We Win Bigger Settlements
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Former defense experience gives us unparalleled insight into insurance company tactics
          </p>
        </div>
      </div>

      <div className="space-y-0">
        {capabilities.map((capability, index) => (
          <CapabilityStripe
            key={index}
            title={capability.title}
            description={capability.description}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default CapabilityStripes;