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
        scale: 0.9,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
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
      className="group relative bg-surface/30 backdrop-blur-sm border border-border/20 rounded-2xl p-8 glass hover:bg-surface/50 transition-all duration-500 cursor-pointer"
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
      title: "Construction Silicosis Settlement",
      metric: "$2.8M",
      description: "Secured maximum compensation for construction worker diagnosed with silicosis from decades of exposure to respirable crystalline silica.",
      caseType: "Silicosis"
    },
    {
      title: "Mesothelioma Verdict",
      metric: "$4.2M",
      description: "Jury verdict for Navy veteran and his family after asbestos exposure during military service led to mesothelioma diagnosis.",
      caseType: "Mesothelioma"
    },
    {
      title: "Multi-Vehicle Collision",
      metric: "$1.5M",
      description: "Policy limits recovery for client with traumatic brain injury in freeway accident involving commercial vehicle.",
      caseType: "Auto Accident"
    },
    {
      title: "Talc Ovarian Cancer",
      metric: "$890K",
      description: "Settlement for woman who developed ovarian cancer after decades of talcum powder use. Case resolved before trial.",
      caseType: "Product Liability"
    },
    {
      title: "Wrongful Death - Industrial",
      metric: "$3.1M",
      description: "Wrongful death settlement for family after workplace explosion at oil refinery. Secured full compensation for loss of income and pain.",
      caseType: "Wrongful Death"
    },
    {
      title: "Dog Attack Settlement",
      metric: "$675K",
      description: "Maximum recovery for child attacked by neighbor's dog, covering medical expenses, scarring, and psychological trauma.",
      caseType: "Dog Bite"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".results-header",
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
    <section ref={sectionRef} id="results" className="relative py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="results-header text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            Real Results for Real People
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Our insider knowledge of insurance tactics consistently delivers maximum compensation for California injury victims
          </p>
        </div>

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
            onClick={() => window.location.href = '/case-evaluation'}
          >
            Start Your Case Today — Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResults;