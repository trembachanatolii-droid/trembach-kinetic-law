import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  index: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ number, title, description, index }) => {
  const stepRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const step = stepRef.current;
    if (!step) return;

    gsap.fromTo(
      step,
      {
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: step,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.2,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div ref={stepRef} className="relative">
      {/* Connection Line */}
      {index < 4 && (
        <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-primary/60 to-primary/20 transform -translate-y-1/2 z-0" />
      )}

      <div className="relative bg-surface/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 glass hover:bg-surface/50 transition-all duration-500 group">
        {/* Step Number */}
        <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary rounded-full flex items-center justify-center glow group-hover:scale-110 transition-transform duration-300">
          <span className="text-2xl font-display font-bold text-primary-foreground">
            {number}
          </span>
        </div>

        {/* Content */}
        <div className="pt-4">
          <h3 className="text-title font-display font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
          <p className="text-body text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </div>
  );
};

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const processSteps = [
    {
      number: 1,
      title: "Free Consultation",
      description: "We evaluate your case at no cost, using our defense experience to identify maximum recovery opportunities and insurance bad faith tactics."
    },
    {
      number: 2,
      title: "Case Investigation", 
      description: "Our team conducts thorough investigation, gathering evidence, medical records, and expert testimony to build the strongest possible claim."
    },
    {
      number: 3,
      title: "Evidence & Claim Prep",
      description: "We prepare comprehensive demand packages that insurance companies can't ignore, using insider knowledge of valuation methods and reserve setting."
    },
    {
      number: 4,
      title: "Filing the Lawsuit",
      description: "When necessary, we file suit and use aggressive litigation tactics learned from representing insurance companies to maximize pressure."
    },
    {
      number: 5,
      title: "Ongoing Support",
      description: "From medical treatment coordination to lien resolution, we handle every aspect so you can focus on recovery while we fight for maximum compensation."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".process-header",
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
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="process-header text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            Our Winning Process
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Five strategic steps that leverage our defense experience to maximize your compensation
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {processSteps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>

        {/* CTA Banner */}
        <div className="relative bg-gradient-to-r from-primary/20 via-accent/20 to-electric/20 rounded-2xl p-12 text-center glass">
          <div className="relative z-10">
            <h3 className="text-headline font-display font-bold text-foreground mb-4 glow">
              Ready to Start Your Case?
            </h3>
            <p className="text-body text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't let insurance companies minimize your claim. Get the insider advantage with a free consultation.
            </p>
            <Button 
              size="lg"
              className="magnetic bg-[#0071E3] hover:bg-[#0066CC] active:bg-[#0057A3] !text-white hover:!text-white active:!text-white px-12 py-4 text-lg font-semibold mr-4 group transition-all duration-300 shadow-lg"
              onClick={() => window.location.href = '/free-consultation'}
            >
              Start your Free Case Review
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-4 text-lg font-semibold glow-accent group transition-all duration-300"
              onClick={() => window.location.href = 'tel:800-555-0000'}
            >
              Call Now - (800) 555-0000
            </Button>
          </div>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default Process;