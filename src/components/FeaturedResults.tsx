import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';

gsap.registerPlugin(ScrollTrigger);

interface ResultCardProps {
  title: string;
  metric: string;
  description: string;
  caseType: string;
  index: number;
}

const ResultCard: React.FC<ResultCardProps> = ({ title, metric, description, caseType, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 80,
        scale: 0.95
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );

    // Hover animations
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-surface/30 border border-border/20 rounded-2xl p-8 hover:bg-surface/50 transition-all duration-500 cursor-pointer"
    >
      {/* Background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        {/* Case Type Badge */}
        <div className="inline-block mb-4">
          <span className="px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full">
            {caseType}
          </span>
        </div>

        {/* Metric */}
        <div className="mb-4">
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary glow group-hover:text-primary-glow transition-colors duration-300">
            {metric}
          </h3>
        </div>

        {/* Title */}
        <h4 className="text-title font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>

        {/* Description */}
        <p className="text-body text-muted-foreground leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        >
          View Case Details
        </Button>
      </div>
    </div>
  );
};

const FeaturedResults = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const results = [
    {
      title: "Former Defense Insight",
      metric: "Insider Advantage",
      description: "We anticipate insurance tactics to protect your rights from day one.",
      caseType: "Strategy"
    },
    {
      title: "Fast-Track Filing",
      metric: "Speed Matters",
      description: "Prioritize urgent filings and evidence preservation to move your case quickly.",
      caseType: "Process"
    },
    {
      title: "Statewide Representation",
      metric: "All 58 Counties",
      description: "Remote sign-ups, virtual consults, and home visits across California.",
      caseType: "Coverage"
    },
    {
      title: "No Upfront Fees",
      metric: "Contingency Only",
      description: "You pay nothing unless we recover compensation for you.",
      caseType: "Costs"
    },
    {
      title: "Personalized Strategy",
      metric: "Boutique Focus",
      description: "Small caseload for high-touch, tailored legal strategy.",
      caseType: "Service"
    },
    {
      title: "24/7 Availability",
      metric: "Here When You Need",
      description: "Emergency consultations any time, because timing is critical.",
      caseType: "Support"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".results-header",
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
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
    <section ref={sectionRef} id="results" className="relative py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-8">
        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <ResultCard
              key={index}
              title={result.title}
              metric={result.metric}
              description={result.description}
              caseType={result.caseType}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            size="lg"
            className="magnetic bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold glow group transition-all duration-300"
            onClick={() => window.location.href = '/free-consultation'}
          >
            Start your Free Case Review
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResults;
