import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PracticeAreaProps {
  title: string;
  description: string;
  priority?: boolean;
  index: number;
}

const PracticeAreaCard: React.FC<PracticeAreaProps> = ({ title, description, priority = false, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    gsap.fromTo(
      card,
      {
        opacity: 0,
        y: 60,
        scale: 0.95,
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        delay: index * 0.05,
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  return (
    <div 
      ref={cardRef}
      className={`group relative bg-surface/20 backdrop-blur-sm border rounded-xl p-6 transition-all duration-500 cursor-pointer hover:-translate-y-2 ${
        priority 
          ? 'border-primary/40 hover:border-primary/60 lg:col-span-2' 
          : 'border-border/20 hover:border-primary/30'
      }`}
    >
      {/* Priority highlight */}
      {priority && (
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
            Priority
          </span>
        </div>
      )}

      {/* Glow effect */}
      <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
        priority ? 'bg-primary/5' : 'bg-accent/5'
      }`} />

      <div className="relative z-10">
        <h3 className={`font-display font-semibold mb-3 group-hover:text-primary transition-colors duration-300 ${
          priority ? 'text-xl lg:text-2xl text-primary' : 'text-lg text-foreground'
        }`}>
          {title}
        </h3>
        
        <p className="text-small text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const PracticeAreas = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const practiceAreas = [
    {
      title: "Mesothelioma & Asbestos",
      description: "Representing victims of asbestos exposure from construction, naval service, and industrial work. We understand the complex litigation and specialized medical needs.",
      priority: true
    },
    {
      title: "Silicosis & Silica Exposure",
      description: "Fighting for construction workers, sandblasters, and industrial employees suffering from silicosis and lung disease caused by crystalline silica exposure.",
      priority: true
    },
    {
      title: "Talc & Talcum Litigation",
      description: "Pursuing claims for ovarian cancer, mesothelioma, and respiratory illness caused by contaminated talcum powder products.",
      priority: false
    },
    {
      title: "Car Accidents",
      description: "Maximum recovery for vehicle collision victims including traumatic brain injury, spinal cord damage, and wrongful death claims.",
      priority: false
    },
    {
      title: "Dog Bites & Attacks",
      description: "Comprehensive representation for dog bite victims covering medical expenses, scarring, and psychological trauma under California strict liability law.",
      priority: false
    },
    {
      title: "Product Liability",
      description: "Defective products, medical devices, pharmaceuticals, and consumer goods causing injury or death. We handle complex multi-district litigation.",
      priority: false
    },
    {
      title: "Wrongful Death",
      description: "Fighting for families who lost loved ones due to negligence, medical malpractice, workplace accidents, or defective products.",
      priority: false
    },
    {
      title: "Medical Malpractice",
      description: "Hospital negligence, surgical errors, misdiagnosis, and birth injuries. We work with medical experts to prove complex cases.",
      priority: false
    },
    {
      title: "Workplace Injuries",
      description: "Third-party liability claims, toxic exposure, construction accidents, and occupational diseases beyond workers' compensation.",
      priority: false
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    gsap.fromTo(
      ".practice-header",
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
    <section ref={sectionRef} id="practice-areas" className="relative py-20 lg:py-32 bg-surface/10">
      <div className="container mx-auto px-8">
        {/* Section Header */}
        <div className="practice-header text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
            California Personal Injury Practice Areas
          </h2>
          <p className="text-body text-muted-foreground leading-relaxed">
            Comprehensive legal representation across all major practice areas with specialized focus on toxic exposure and complex litigation
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={index}
              title={area.title}
              description={area.description}
              priority={area.priority}
              index={index}
            />
          ))}
        </div>

        {/* Additional Areas Note */}
        <div className="text-center">
          <p className="text-body text-muted-foreground mb-6">
            Don't see your case type? We handle 50+ practice areas across California.
          </p>
          <button className="text-primary hover:text-primary-glow font-medium underline decoration-primary/30 hover:decoration-primary transition-colors duration-300">
            View All Practice Areas →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;