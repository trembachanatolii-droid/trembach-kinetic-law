import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PracticeAreaProps {
  title: string;
  description: string;
  icon: string;
  index: number;
}

const PracticeAreaCard: React.FC<PracticeAreaProps> = ({ title, description, icon, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1,
        }
      );
    } else {
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
          delay: index * 0.05,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [index]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const generateSlug = (title: string) => {
    return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  };

  return (
    <div 
      ref={cardRef}
      className="glass-card group hover-glow-primary cursor-pointer overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Practice Area Image/Icon */}
      <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-electric/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl transform transition-transform duration-700 group-hover:scale-110">
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="glass-button">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
            </svg>
            Learn More
          </button>
          <a 
            href={`/practice-areas/${generateSlug(title)}`}
            className="hero-button"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
            </svg>
            Get Help
          </a>
        </div>
      </div>

      {/* Practice Area Info */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
            Personal Injury
          </span>
          <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
            Litigation
          </span>
          {index % 3 === 0 && (
            <span className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20">
              Mass Tort
            </span>
          )}
        </div>
        
        {/* CTA */}
        <div className="pt-2">
          <a 
            href={`/practice-areas/${generateSlug(title)}`}
            className="ghost-button group/btn"
          >
            Free Consultation
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="transition-transform group-hover/btn:translate-x-1">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

const PracticeAreas3D = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    if (!section) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!prefersReducedMotion) {
      gsap.fromTo(
        ".section-header-glass",
        {
          opacity: 0,
          y: 60,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "cubic-bezier(0.16, 1, 0.3, 1)",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
          }
        }
      );
    } else {
      gsap.fromTo(
        ".section-header-glass",
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
      className="relative py-24 bg-background overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/4 w-72 h-72 orb animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 orb-secondary animate-float-delayed opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="section-header-glass text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              50+ Practice Areas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal representation across all areas of personal injury and mass tort litigation. 
            Our experienced attorneys fight for maximum compensation in every case.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <PracticeAreaCard
              key={index}
              title={area.title}
              description={area.description}
              icon={area.icon}
              index={index}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass-card max-w-2xl mx-auto p-8">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Don't See Your Case Type?
            </h3>
            <p className="text-muted-foreground mb-6">
              We handle virtually every type of personal injury and mass tort case. Contact us for a free consultation.
            </p>
            <a 
              href="#contact"
              className="hero-button text-lg px-8 py-4"
            >
              Get Free Case Review
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
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