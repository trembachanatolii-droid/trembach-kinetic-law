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

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 80,
        z: prefersReducedMotion ? 0 : -150,
        scale: prefersReducedMotion ? 1 : 0.9,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        z: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: premiumEase,
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.1,
      }
    );

    // Enhanced 3D hover animations
    const handleMouseEnter = () => {
      gsap.to(card, {
        y: -15,
        z: 50,
        rotateY: 5,
        scale: 1.05,
        duration: 0.4,
        ease: premiumEase,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        y: 0,
        z: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.4,
        ease: premiumEase,
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className="group relative bg-surface/20 backdrop-blur-sm border border-border/20 rounded-2xl p-8 hover:bg-surface/40 transition-all duration-500 cursor-pointer hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/30"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Enhanced background glow on hover */}
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
          <h3 className="text-3xl lg:text-4xl font-display font-bold text-primary glow group-hover:text-primary-glow transition-colors duration-300 group-hover:scale-110 transform-gpu origin-left">
            {metric}
          </h3>
        </div>

        {/* Title */}
        <h4 className="text-title font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h4>

        {/* Description */}
        <p className="text-body text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground transition-colors duration-300">
          {description}
        </p>

        {/* CTA */}
        <Button 
          variant="outline" 
          size="sm"
          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
        >
          View Case Details
        </Button>
      </div>
    </div>
  );
};

const FeaturedResults = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const threeDContainerRef = useRef<HTMLDivElement>(null);
  const backLayerRef = useRef<HTMLDivElement>(null);
  const midLayerRef = useRef<HTMLDivElement>(null);
  const frontLayerRef = useRef<HTMLDivElement>(null);

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
    const threeDContainer = threeDContainerRef.current;
    const backLayer = backLayerRef.current;
    const midLayer = midLayerRef.current;
    const frontLayer = frontLayerRef.current;

    if (!section || !threeDContainer) return;

    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const premiumEase = "cubic-bezier(0.22, 1, 0.36, 1)";

    if (!prefersReducedMotion) {
      // Floating background animations
      if (backLayer) {
        gsap.to(backLayer, {
          y: 22,
          duration: 16,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 32,
          duration: 20,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 18,
          x: 25,
          duration: 14,
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
            gsap.set(backLayer, { y: progress * -70 });
          }
          if (midLayer) {
            gsap.set(midLayer, { y: progress * -140 });
          }
          if (frontLayer) {
            gsap.set(frontLayer, { y: progress * -210 });
          }
        }
      });
    }

    gsap.fromTo(
      ".results-header",
      {
        opacity: 0,
        y: prefersReducedMotion ? 0 : 60,
        z: prefersReducedMotion ? 0 : -200,
        filter: prefersReducedMotion ? "blur(0px)" : "blur(10px)"
      },
      {
        opacity: 1,
        y: 0,
        z: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: premiumEase,
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
    <section ref={sectionRef} id="results" className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* 3D Container with Perspective */}
      <div 
        ref={threeDContainerRef}
        className="relative"
        style={{ 
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Background Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Back Layer */}
          <div
            ref={backLayerRef}
            className="absolute inset-0 opacity-30"
            style={{ transform: 'translateZ(-500px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/30 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,hsl(var(--primary))_0%,transparent_50%)] opacity-20" />
          </div>

          {/* Mid Layer */}
          <div
            ref={midLayerRef}
            className="absolute inset-0 opacity-40"
            style={{ transform: 'translateZ(-250px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 via-transparent to-primary/20 blur-2xl" />
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          </div>

          {/* Front Layer */}
          <div
            ref={frontLayerRef}
            className="absolute inset-0 opacity-20"
            style={{ transform: 'translateZ(-100px)' }}
          >
            <div className="absolute inset-0 bg-gradient-to-bl from-primary/10 via-transparent to-accent/15 blur-xl" />
            <div className="absolute bottom-1/2 right-1/3 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>
        </div>

        <div className="container mx-auto px-8 relative z-10">
          {/* Section Header */}
          <div 
            className="results-header text-center max-w-4xl mx-auto mb-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
              Real Results for Real People
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Our insider knowledge of insurance tactics consistently delivers maximum compensation for California injury victims
            </p>
          </div>

          {/* Results Grid */}
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{ transformStyle: 'preserve-3d' }}
          >
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
          <div 
            className="text-center mt-16"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Button 
              size="lg"
              className="magnetic bg-primary hover:bg-primary-glow text-primary-foreground px-8 py-4 text-lg font-semibold glow hover:scale-105 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
            >
              Start Your Case Today — Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedResults;