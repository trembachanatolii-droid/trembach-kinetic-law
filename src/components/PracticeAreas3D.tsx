import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all practice area icons
import mesotheliomaAsbestosIcon from '@/assets/icons/mesothelioma-asbestos.png';
import silicosisInjuriesIcon from '@/assets/icons/silicosis-injuries.png';
import talcBabyPowderIcon from '@/assets/icons/talc-baby-powder.png';
import carAccidentsIcon from '@/assets/icons/car-accidents.png';
import truckAccidentsIcon from '@/assets/icons/truck-accidents.png';
import motorcycleAccidentsIcon from '@/assets/icons/motorcycle-accidents.png';
import pedestrianAccidentsIcon from '@/assets/icons/pedestrian-accidents.png';
import bicycleAccidentsIcon from '@/assets/icons/bicycle-accidents.png';
import premisesLiabilityIcon from '@/assets/icons/premises-liability.png';
import dogBitesIcon from '@/assets/icons/dog-bites.png';
import medicalMalpracticeIcon from '@/assets/icons/medical-malpractice.png';
import wrongfulDeathIcon from '@/assets/icons/wrongful-death.png';
import productLiabilityIcon from '@/assets/icons/product-liability.png';
import constructionAccidentsIcon from '@/assets/icons/construction-accidents.png';
import brainInjuriesIcon from '@/assets/icons/brain-injuries.png';
import spinalCordInjuriesIcon from '@/assets/icons/spinal-cord-injuries.png';
import burnInjuriesIcon from '@/assets/icons/burn-injuries.png';
import amputationIcon from '@/assets/icons/amputation.png';
import workplaceInjuriesIcon from '@/assets/icons/workplace-injuries.png';
import medicalDevicesIcon from '@/assets/icons/medical-devices.png';
import pharmaceuticalIcon from '@/assets/icons/pharmaceutical.png';
import massTortsIcon from '@/assets/icons/mass-torts.png';
import classActionsIcon from '@/assets/icons/class-actions.png';
import environmentalToxicIcon from '@/assets/icons/environmental-toxic.png';
import campLejeuneIcon from '@/assets/icons/camp-lejeune.png';
import pfasExposureIcon from '@/assets/icons/pfas-exposure.png';
import benzeneExposureIcon from '@/assets/icons/benzene-exposure.png';
import opioidLitigationIcon from '@/assets/icons/opioid-litigation.png';
import sexualAbuseIcon from '@/assets/icons/sexual-abuse.png';
import clergyAbuseIcon from '@/assets/icons/clergy-abuse.png';
import elderAbuseIcon from '@/assets/icons/elder-abuse.png';
import birthInjuriesIcon from '@/assets/icons/birth-injuries.png';
import uberLyftAccidentsIcon from '@/assets/icons/uber-lyft-accidents.png';
import busAccidentsIcon from '@/assets/icons/bus-accidents.png';
import trainAccidentsIcon from '@/assets/icons/train-accidents.png';
import aviationAccidentsIcon from '@/assets/icons/aviation-accidents.png';
import maritimeAccidentsIcon from '@/assets/icons/maritime-accidents.png';
import swimmingPoolAccidentsIcon from '@/assets/icons/swimming-pool-accidents.png';
import playgroundInjuriesIcon from '@/assets/icons/playground-injuries.png';
import sportsInjuriesIcon from '@/assets/icons/sports-injuries.png';
import schoolAccidentsIcon from '@/assets/icons/school-accidents.png';
import nursingHomeAbuseIcon from '@/assets/icons/nursing-home-abuse.png';
import foodPoisoningIcon from '@/assets/icons/food-poisoning.png';
import hotelAccidentsIcon from '@/assets/icons/hotel-accidents.png';
import amusementParkInjuriesIcon from '@/assets/icons/amusement-park-injuries.png';
import concertEventInjuriesIcon from '@/assets/icons/concert-event-injuries.png';
import retailAccidentsIcon from '@/assets/icons/retail-accidents.png';
import parkingLotAccidentsIcon from '@/assets/icons/parking-lot-accidents.png';
import elevatorAccidentsIcon from '@/assets/icons/elevator-accidents.png';
import escalatorInjuriesIcon from '@/assets/icons/escalator-injuries.png';
import electrocutionIcon from '@/assets/icons/electrocution.png';
import explosionsIcon from '@/assets/icons/explosions.png';
import fireAccidentsIcon from '@/assets/icons/fire-accidents.png';
import visionLossIcon from '@/assets/icons/vision-loss.png';
import hearingLossIcon from '@/assets/icons/hearing-loss.png';
import paralysisIcon from '@/assets/icons/paralysis.png';
import civilRightsIcon from '@/assets/icons/civil-rights.png';
import scaffoldingFallsIcon from '@/assets/icons/scaffolding-falls.png';
import craneAccidentsIcon from '@/assets/icons/crane-accidents.png';
import railroadAccidentsIcon from '@/assets/icons/railroad-accidents.png';
import defamationIcon from '@/assets/icons/defamation.png';
import generalPersonalInjuryIcon from '@/assets/icons/general-personal-injury.png';

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
            <div className="w-20 h-20 transform transition-transform duration-700 group-hover:scale-110">
              <img 
                src={icon} 
                alt={title} 
                className="w-full h-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Overlay Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a 
            href={`/practice-areas/${generateSlug(title)}`}
            className="hero-button"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
              <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
            </svg>
            See More Information
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
            See More Information
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
      icon: mesotheliomaAsbestosIcon
    },
    {
      title: "Silicosis Injuries", 
      description: "Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates.",
      icon: silicosisInjuriesIcon
    },
    {
      title: "Talc & Baby Powder Cancer",
      description: "Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. Manufacturers knew their talc contained asbestos.",
      icon: talcBabyPowderIcon
    },
    {
      title: "Car Accidents",
      description: "California's congested highways see thousands of serious crashes annually. Our former defense experience reveals insurance company tactics.",
      icon: carAccidentsIcon
    },
    {
      title: "Truck & 18-Wheeler",
      description: "Commercial truck crashes cause catastrophic injuries due to size and weight disparities. Federal regulations create complex liability issues.",
      icon: truckAccidentsIcon
    },
    {
      title: "Motorcycle Accidents",
      description: "Protecting California riders against bias and securing fair compensation. Despite following laws, motorcyclists face prejudice from insurers.",
      icon: motorcycleAccidentsIcon
    },
    {
      title: "Pedestrian Accidents",
      description: "California law provides strong protections for pedestrians, but injuries from vehicle strikes are often severe or fatal.",
      icon: pedestrianAccidentsIcon
    },
    {
      title: "Bicycle Accidents",
      description: "California's bicycle-friendly laws provide extensive protections, but cyclists remain vulnerable to serious injuries.",
      icon: bicycleAccidentsIcon
    },
    {
      title: "Premises Liability",
      description: "Property owners must maintain safe conditions. Slip and falls from wet floors, uneven surfaces cause serious injuries.",
      icon: premisesLiabilityIcon
    },
    {
      title: "Dog Bites",
      description: "California's strict liability statute holds dog owners responsible for bite injuries regardless of the animal's history.",
      icon: dogBitesIcon
    },
    {
      title: "Medical Malpractice",
      description: "Healthcare providers must meet professional standards. Misdiagnosis delays treatment allowing conditions to worsen.",
      icon: medicalMalpracticeIcon
    },
    {
      title: "Wrongful Death",
      description: "When negligence causes death, surviving family members deserve justice and financial security during devastating loss.",
      icon: wrongfulDeathIcon
    },
    {
      title: "Product Liability",
      description: "Strict liability holds manufacturers responsible for injuries from defective products regardless of negligence.",
      icon: productLiabilityIcon
    },
    {
      title: "Construction Accidents",
      description: "Construction sites present numerous hazards. Falls from heights, scaffolding collapses require investigation beyond workers' comp.",
      icon: constructionAccidentsIcon
    },
    {
      title: "Brain Injuries",
      description: "Traumatic brain injuries cause devastating cognitive, physical, and emotional impairments requiring lifetime care.",
      icon: brainInjuriesIcon
    },
    {
      title: "Spinal Cord Injuries",
      description: "Spinal cord damage causing paralysis requires extensive lifetime medical care costing millions.",
      icon: spinalCordInjuriesIcon
    },
    {
      title: "Burn Injuries",
      description: "Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive treatment.",
      icon: burnInjuriesIcon
    },
    {
      title: "Amputation",
      description: "Limb loss causes permanent disability requiring prosthetics, rehabilitation, and psychological support throughout life.",
      icon: amputationIcon
    },
    {
      title: "Workplace Injuries",
      description: "Third-party claims against equipment manufacturers, contractors yield additional recovery for serious workplace injuries.",
      icon: workplaceInjuriesIcon
    },
    {
      title: "Medical Devices",
      description: "FDA approval doesn't guarantee safety. Hip replacements, surgical mesh, IVC filters cause serious complications.",
      icon: medicalDevicesIcon
    },
    {
      title: "Pharmaceutical",
      description: "Dangerous drugs cause serious adverse reactions when manufacturers conceal risks or provide inadequate warnings.",
      icon: pharmaceuticalIcon
    },
    {
      title: "Mass Torts",
      description: "Widespread harm from defective products requires coordinated litigation against powerful corporate defendants.",
      icon: massTortsIcon
    },
    {
      title: "Class Actions",
      description: "Collective legal action provides justice when corporate wrongdoing affects numerous people similarly.",
      icon: classActionsIcon
    },
    {
      title: "Environmental Toxic",
      description: "Chemical exposures from industrial pollution cause cancer, organ damage in surrounding communities.",
      icon: environmentalToxicIcon
    },
    {
      title: "Camp Lejeune",
      description: "Military families exposed to contaminated drinking water now have legal recourse through the Camp Lejeune Justice Act.",
      icon: campLejeuneIcon
    },
    {
      title: "PFAS Exposure",
      description: "Forever chemicals contaminating water supplies cause cancer, thyroid disease with manufacturers concealing risks.",
      icon: pfasExposureIcon
    },
    {
      title: "Benzene Exposure",
      description: "Known carcinogen causing leukemia, lymphoma from occupational and consumer product exposure.",
      icon: benzeneExposureIcon
    },
    {
      title: "Opioid Litigation",
      description: "The opioid epidemic devastated families while manufacturers misrepresented addiction risks.",
      icon: opioidLitigationIcon
    },
    {
      title: "Sexual Abuse",
      description: "Survivors deserve justice from both perpetrators and institutions that enabled abuse through negligent supervision.",
      icon: sexualAbuseIcon
    },
    {
      title: "Clergy Abuse",
      description: "Religious institutions harboring predators face accountability as California reopened time-barred claims.",
      icon: clergyAbuseIcon
    },
    {
      title: "Elder Abuse",
      description: "Enhanced remedies for physical abuse, neglect, financial exploitation in nursing homes and care facilities.",
      icon: elderAbuseIcon
    },
    {
      title: "Birth Injuries",
      description: "Medical negligence during pregnancy, labor causes preventable birth injuries resulting in lifelong disabilities.",
      icon: birthInjuriesIcon
    },
    {
      title: "Uber/Lyft Accidents",
      description: "Rideshare accidents involve complex insurance coverage varying by driver status when crashes occur.",
      icon: uberLyftAccidentsIcon
    },
    {
      title: "Bus Accidents",
      description: "Public transportation accidents involving municipal and private bus companies require specialized legal knowledge.",
      icon: busAccidentsIcon
    },
    {
      title: "Train Accidents",
      description: "Railroad crossing accidents, derailments, and platform injuries involve federal regulations and multiple defendants.",
      icon: trainAccidentsIcon
    },
    {
      title: "Aviation Accidents",
      description: "Commercial and private aircraft accidents require investigation of pilot error, mechanical failure, air traffic control.",
      icon: aviationAccidentsIcon
    },
    {
      title: "Maritime Accidents",
      description: "Boating accidents, harbor incidents, and commercial fishing vessel injuries fall under maritime law.",
      icon: maritimeAccidentsIcon
    },
    {
      title: "Swimming Pool Accidents",
      description: "Drowning, diving injuries, and chemical exposure in pools require premises liability and safety code expertise.",
      icon: swimmingPoolAccidentsIcon
    },
    {
      title: "Playground Injuries",
      description: "Equipment defects, inadequate supervision, and maintenance failures cause serious childhood injuries.",
      icon: playgroundInjuriesIcon
    },
    {
      title: "Sports Injuries",
      description: "Negligent coaching, equipment failures, and unsafe facilities cause preventable athletic injuries.",
      icon: sportsInjuriesIcon
    },
    {
      title: "School Accidents",
      description: "Educational institutions must provide safe environments. Negligent supervision and dangerous conditions create liability.",
      icon: schoolAccidentsIcon
    },
    {
      title: "Nursing Home Abuse",
      description: "Systematic neglect, physical abuse, and medication errors in long-term care facilities violate resident rights.",
      icon: nursingHomeAbuseIcon
    },
    {
      title: "Food Poisoning",
      description: "Restaurant negligence, contaminated products, and foodborne illnesses require rapid investigation and medical documentation.",
      icon: foodPoisoningIcon
    },
    {
      title: "Hotel Accidents",
      description: "Slip and falls, balcony collapses, swimming pool accidents, and inadequate security in hospitality venues.",
      icon: hotelAccidentsIcon
    },
    {
      title: "Amusement Park Injuries",
      description: "Ride malfunctions, operator negligence, and inadequate safety inspections cause serious injuries and deaths.",
      icon: amusementParkInjuriesIcon
    },
    {
      title: "Concert/Event Injuries",
      description: "Crowd crushes, stage collapses, inadequate security, and venue negligence at entertainment events.",
      icon: concertEventInjuriesIcon
    },
    {
      title: "Retail Store Accidents",
      description: "Falling merchandise, wet floors, inadequate lighting, and security incidents in commercial establishments.",
      icon: retailAccidentsIcon
    },
    {
      title: "Parking Lot Accidents",
      description: "Vehicle collisions, pedestrian strikes, inadequate lighting, and security failures in parking facilities.",
      icon: parkingLotAccidentsIcon
    },
    {
      title: "Elevator Accidents",
      description: "Mechanical failures, entrapments, falls, and maintenance negligence in vertical transportation systems.",
      icon: elevatorAccidentsIcon
    },
    {
      title: "Escalator Injuries",
      description: "Entrapment injuries, falls, and mechanical malfunctions requiring immediate medical attention and investigation.",
      icon: escalatorInjuriesIcon
    },
    {
      title: "Electrocution",
      description: "Electrical shock injuries from faulty wiring, power lines, and defective electrical equipment causing burns and cardiac issues.",
      icon: electrocutionIcon
    },
    {
      title: "Explosions",
      description: "Gas explosions, industrial accidents, and chemical plant incidents causing devastating injuries and property damage.",
      icon: explosionsIcon
    },
    {
      title: "Fire Accidents",
      description: "Building fires, electrical failures, gas explosions, and negligent fire safety maintenance causing injuries and death.",
      icon: fireAccidentsIcon
    },
    {
      title: "Vision Loss",
      description: "Eye injuries from accidents, medical malpractice, and defective products resulting in partial or complete vision loss.",
      icon: visionLossIcon
    },
    {
      title: "Hearing Loss",
      description: "Noise-induced hearing damage from workplace exposure, defective products, and medical negligence.",
      icon: hearingLossIcon
    },
    {
      title: "Paralysis",
      description: "Spinal cord injuries resulting in partial or complete paralysis requiring lifetime medical care and support.",
      icon: paralysisIcon
    },
    {
      title: "Civil Rights",
      description: "Fighting discrimination, police misconduct, and violations of constitutional rights in various settings.",
      icon: civilRightsIcon
    },
    {
      title: "Scaffolding Falls",
      description: "Construction workers injured in scaffolding collapses due to improper assembly or maintenance failures.",
      icon: scaffoldingFallsIcon
    },
    {
      title: "Crane Accidents",
      description: "Construction site injuries from crane collapses, operator error, and equipment failures affecting workers and bystanders.",
      icon: craneAccidentsIcon
    },
    {
      title: "Railroad Accidents",
      description: "Train derailments, crossing accidents, and railroad worker injuries involving federal regulations and multiple parties.",
      icon: railroadAccidentsIcon
    },
    {
      title: "Defamation",
      description: "Protecting reputation from false statements that damage personal or professional standing and financial prospects.",
      icon: defamationIcon
    },
    {
      title: "General Personal Injury",
      description: "Comprehensive representation for all types of personal injury cases with experienced trial attorneys.",
      icon: generalPersonalInjuryIcon
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