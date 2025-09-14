import React, { useEffect, useRef, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const PracticeAreaCard3D: React.FC<PracticeAreaProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Floating idle animation
      gsap.to(card, {
        y: "random(-10, 10)",
        rotation: "random(-1, 1)",
        duration: "random(4, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2,
      });

      // Scroll-driven animation with translateZ and scale
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotationX: 45,
          transformPerspective: 1000,
          transformOrigin: "center bottom",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)", // Premium cubic-bezier
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              gsap.to(card, {
                z: 50,
                duration: 0.6,
                ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              });
            },
            onLeave: () => {
              gsap.to(card, {
                z: 0,
                duration: 0.6,
                ease: "cubic-bezier(0.16, 1, 0.3, 1)",
              });
            }
          },
          delay: index * 0.08,
        }
      );
    } else {
      // Simplified animation for reduced motion
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  // Enhanced hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
    const card = cardRef.current;
    if (!card) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.to(card, {
        scale: 1.05,
        y: -15,
        rotationY: 5,
        rotationX: -5,
        z: 100,
        duration: 0.4,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (!card) return;
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.to(card, {
        scale: 1,
        y: 0,
        rotationY: 0,
        rotationX: 0,
        z: 50,
        duration: 0.4,
        ease: "cubic-bezier(0.16, 1, 0.3, 1)",
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      className="group relative bg-card/80 backdrop-blur-sm border border-border/40 rounded-xl p-8 transition-all duration-300 cursor-pointer min-h-[300px] flex flex-col transform-gpu"
      style={{
        transformStyle: 'preserve-3d',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Glow effect */}
      <div 
        className={`absolute inset-0 rounded-xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle at center, hsl(var(--primary) / 0.2), transparent 70%)`,
          filter: 'blur(20px)',
          transform: 'translateZ(-10px)',
        }}
      />
      
      <div className="text-4xl mb-4 block transform transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed text-sm flex-grow line-clamp-4">
        {description}
      </p>

      <a 
        href={`/practice-areas/${title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`}
        className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-primary-glow transition-colors text-sm"
      >
        Get Help →
      </a>

      {/* Premium border glow */}
      <div 
        className={`absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3))`,
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          maskComposite: 'xor',
          padding: '2px',
        }}
      />
    </div>
  );
};

const ParallaxLayer: React.FC<{ 
  children: React.ReactNode; 
  speed: number; 
  className?: string;
  zIndex?: number;
}> = ({ children, speed, className = "", zIndex = 0 }) => {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.to(layer, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: layer.closest('.parallax-container'),
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [speed]);

  return (
    <div 
      ref={layerRef}
      className={`absolute inset-0 ${className}`}
      style={{ zIndex, transform: 'translateZ(0)' }}
    >
      {children}
    </div>
  );
};

const PracticeAreas3D = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const practiceAreas = [
    {
      title: "Mesothelioma & Asbestos",
      description: "Aggressive representation for asbestos cancer victims throughout California. We trace exposure histories from military service, shipyards, construction sites, and consumer products.",
      icon: "🫁"
    },
    {
      title: "Silicosis Injuries",
      description: "Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates.",
      icon: "⚠️"
    },
    {
      title: "Talc & Baby Powder Cancer",
      description: "Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. Manufacturers knew their talc contained asbestos.",
      icon: "🍼"
    },
    {
      title: "Car Accidents",
      description: "California's congested highways see thousands of serious crashes annually. Our former defense experience reveals insurance company tactics.",
      icon: "🚗"
    },
    {
      title: "Truck & 18-Wheeler",
      description: "Commercial truck crashes cause catastrophic injuries due to size and weight disparities. Federal regulations create complex liability issues.",
      icon: "🚛"
    },
    {
      title: "Motorcycle Accidents",
      description: "Protecting California riders against bias and securing fair compensation. Despite following laws, motorcyclists face prejudice from insurers.",
      icon: "🏍️"
    },
    {
      title: "Pedestrian Accidents",
      description: "California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal.",
      icon: "🚶"
    },
    {
      title: "Bicycle Accidents",
      description: "California's bicycle-friendly laws provide extensive protections, but cyclists remain vulnerable to serious injuries.",
      icon: "🚴"
    },
    {
      title: "Premises Liability",
      description: "Property owners must maintain safe conditions. Slip and falls from wet floors, uneven surfaces cause serious injuries.",
      icon: "🏢"
    },
    {
      title: "Dog Bites",
      description: "California's strict liability statute holds dog owners responsible for bite injuries regardless of the animal's history.",
      icon: "🐕"
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards. Misdiagnosis delays treatment allowing conditions to worsen.",
      icon: "⚕️"
    },
    {
      title: "Wrongful Death",
      description: "When negligence causes death, surviving family members deserve justice and financial security during devastating loss.",
      icon: "⚰️"
    },
    {
      title: "Product Liability",
      description: "Strict liability holds manufacturers responsible for injuries from defective products regardless of negligence.",
      icon: "⚡"
    },
    {
      title: "Construction Accidents",
      description: "Construction sites present numerous hazards. Falls from heights, scaffolding collapses require investigation beyond workers' comp.",
      icon: "🏗️"
    },
    {
      title: "Brain Injuries",
      description: "Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments requiring lifetime care.",
      icon: "🧠"
    },
    {
      title: "Spinal Cord Injuries",
      description: "Spinal cord damage causing paralysis requires extensive lifetime medical care costing millions.",
      icon: "🦴"
    },
    {
      title: "Burn Injuries",
      description: "Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive treatment.",
      icon: "🔥"
    },
    {
      title: "Amputation",
      description: "Limb loss causes permanent disability requiring prosthetics, rehabilitation, and psychological support throughout life.",
      icon: "🦾"
    },
    {
      title: "Workplace Injuries",
      description: "Third-party claims against equipment manufacturers, contractors yield additional recovery for serious workplace injuries.",
      icon: "⚠️"
    },
    {
      title: "Medical Devices",
      description: "FDA approval doesn't guarantee safety. Hip replacements, surgical mesh, IVC filters cause serious complications.",
      icon: "🏥"
    },
    {
      title: "Pharmaceutical",
      description: "Dangerous drugs cause serious adverse reactions when manufacturers conceal risks or provide inadequate warnings.",
      icon: "💊"
    },
    {
      title: "Mass Torts",
      description: "Widespread harm from defective products requires coordinated litigation against powerful corporate defendants.",
      icon: "⚖️"
    },
    {
      title: "Class Actions",
      description: "Collective legal action provides justice when corporate wrongdoing affects numerous people similarly.",
      icon: "👥"
    },
    {
      title: "Environmental Toxic",
      description: "Chemical exposures from industrial pollution cause cancer, organ damage in surrounding communities.",
      icon: "☢️"
    },
    {
      title: "Camp Lejeune",
      description: "Military families exposed to contaminated drinking water now have legal recourse through the Camp Lejeune Justice Act.",
      icon: "🎖️"
    },
    {
      title: "PFAS Exposure",
      description: "Forever chemicals contaminating water supplies cause cancer, thyroid disease with manufacturers concealing risks.",
      icon: "💧"
    },
    {
      title: "Benzene Exposure",
      description: "Known carcinogen causing leukemia, lymphoma from occupational and consumer product exposure.",
      icon: "🧪"
    },
    {
      title: "Opioid Litigation",
      description: "The opioid epidemic devastated families while manufacturers misrepresented addiction risks.",
      icon: "⚕️"
    },
    {
      title: "Sexual Abuse",
      description: "Survivors deserve justice from both perpetrators and institutions that enabled abuse through negligent supervision.",
      icon: "🛡️"
    },
    {
      title: "Clergy Abuse",
      description: "Religious institutions harboring predators face accountability as California reopened time-barred claims.",
      icon: "⛪"
    },
    {
      title: "Elder Abuse",
      description: "Enhanced remedies for physical abuse, neglect, financial exploitation in nursing homes and care facilities.",
      icon: "👴"
    },
    {
      title: "Birth Injuries",
      description: "Medical negligence during pregnancy, labor causes preventable birth injuries resulting in lifelong disabilities.",
      icon: "👶"
    },
    {
      title: "Uber/Lyft Accidents",
      description: "Rideshare accidents involve complex insurance coverage varying by driver status when crashes occur.",
      icon: "🚕"
    },
    {
      title: "Bus Accidents",
      description: "Public transportation accidents involving municipal and private bus companies require specialized legal knowledge.",
      icon: "🚌"
    },
    {
      title: "Train Accidents",
      description: "Railroad crossing accidents, derailments, and platform injuries involve federal regulations and multiple defendants.",
      icon: "🚂"
    },
    {
      title: "Aviation Accidents",
      description: "Commercial and private aircraft accidents require investigation of pilot error, mechanical failure, air traffic control.",
      icon: "✈️"
    },
    {
      title: "Maritime Accidents",
      description: "Boating accidents, harbor incidents, and commercial fishing vessel injuries fall under maritime law.",
      icon: "⚓"
    },
    {
      title: "Swimming Pool Accidents",
      description: "Drowning, diving injuries, and chemical exposure in pools require premises liability and safety code expertise.",
      icon: "🏊"
    },
    {
      title: "Playground Injuries",
      description: "Equipment defects, inadequate supervision, and maintenance failures cause serious childhood injuries.",
      icon: "🛝"
    },
    {
      title: "Sports Injuries",
      description: "Negligent coaching, equipment failures, and unsafe facilities cause preventable athletic injuries.",
      icon: "⚽"
    },
    {
      title: "School Accidents",
      description: "Educational institutions must provide safe environments. Negligent supervision and dangerous conditions create liability.",
      icon: "🏫"
    },
    {
      title: "Nursing Home Abuse",
      description: "Systematic neglect, physical abuse, and medication errors in long-term care facilities violate resident rights.",
      icon: "🏥"
    },
    {
      title: "Food Poisoning",
      description: "Restaurant negligence, contaminated products, and foodborne illnesses require rapid investigation and medical documentation.",
      icon: "🍽️"
    },
    {
      title: "Hotel Accidents",
      description: "Slip and falls, balcony collapses, swimming pool accidents, and inadequate security in hospitality venues.",
      icon: "🏨"
    },
    {
      title: "Amusement Park Injuries",
      description: "Ride malfunctions, operator negligence, and inadequate safety inspections cause serious injuries and deaths.",
      icon: "🎢"
    },
    {
      title: "Concert/Event Injuries",
      description: "Crowd crushes, stage collapses, inadequate security, and venue negligence at entertainment events.",
      icon: "🎵"
    },
    {
      title: "Retail Store Accidents",
      description: "Falling merchandise, wet floors, inadequate lighting, and security incidents in commercial establishments.",
      icon: "🛒"
    },
    {
      title: "Parking Lot Accidents",
      description: "Vehicle collisions, pedestrian strikes, inadequate lighting, and security failures in parking facilities.",
      icon: "🅿️"
    },
    {
      title: "Elevator Accidents",
      description: "Mechanical failures, entrapments, falls, and maintenance negligence in vertical transportation systems.",
      icon: "🛗"
    },
    {
      title: "Escalator Injuries",
      description: "Entrapment injuries, falls, and mechanical malfunctions requiring immediate medical attention and investigation.",
      icon: "🔄"
    },
    {
      title: "Fire Accidents",
      description: "Building fires, electrical failures, gas explosions, and negligent fire safety maintenance causing injuries and death.",
      icon: "🔥"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    if (!section || !container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      // 3D perspective container setup
      gsap.set(container, {
        transformPerspective: 1000,
        transformStyle: "preserve-3d",
      });

      // Section reveal animation
      gsap.fromTo(
        ".section-header-3d",
        {
          opacity: 0,
          y: 80,
          rotationX: 45,
          transformPerspective: 1000,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1.2,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );
    } else {
      // Simplified animation for reduced motion
      gsap.fromTo(
        ".section-header-3d",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          }
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef} 
      className="relative py-20 lg:py-32 bg-background overflow-hidden parallax-container"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Three Parallax Background Layers */}
      <ParallaxLayer speed={0.5} className="opacity-30" zIndex={1}>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.3} className="opacity-20" zIndex={2}>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer speed={0.1} className="opacity-10" zIndex={3}>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-primary/5 to-transparent" />
      </ParallaxLayer>

      {/* Main Content with 3D Container */}
      <div 
        ref={containerRef}
        className="relative z-10"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="container mx-auto px-8 mb-20">
          <div className="section-header-3d text-center max-w-4xl mx-auto">
            <h2 className="text-display font-display font-bold text-foreground mb-6 glow">
              50+ Practice Areas
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Comprehensive legal representation across all areas of personal injury and mass tort litigation
            </p>
          </div>
        </div>

        {/* 3D Grid with Enhanced Effects */}
        <div className="container mx-auto px-8">
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {practiceAreas.map((area, index) => (
              <PracticeAreaCard3D
                key={index}
                title={area.title}
                description={area.description}
                icon={area.icon}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* CTA Section with 3D Effect */}
        <div className="container mx-auto px-8 mt-20">
          <div 
            className="text-center bg-card/50 backdrop-blur-sm border border-border/40 rounded-2xl p-12"
            style={{ transform: 'translateZ(20px)' }}
          >
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Don't See Your Case Type?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We handle virtually every type of personal injury and mass tort case. Contact us for a free consultation to discuss your specific situation.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-glow transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              Get Free Case Review
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Accessibility: Reduced motion message */}
      <div className="sr-only" aria-live="polite">
        50+ Practice Areas section loaded. Navigate through our comprehensive legal services using tab navigation.
      </div>
    </section>
  );
};

export default PracticeAreas3D;