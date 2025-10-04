import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import practice area images
import mesotheliomaAsbestosImg from '@/assets/practice-areas/mesothelioma-asbestos.jpg';
import silicosisInjuriesImg from '@/assets/practice-areas/silicosis-injuries-bright.jpg';
import talcBabyPowderImg from '@/assets/practice-areas/talc-baby-powder.jpg';
import carAccidentsImg from '@/assets/practice-areas/car-accidents-bright.jpg';
import truckAccidentsImg from '@/assets/practice-areas/truck-18-wheeler.jpg';
import motorcycleAccidentsImg from '@/assets/practice-areas/motorcycle-accidents.jpg';
import pedestrianAccidentsImg from '@/assets/practice-areas/pedestrian-accidents.jpg';
import bicycleAccidentsImg from '@/assets/practice-areas/bicycle-accidents.jpg';
import premisesLiabilityImg from '@/assets/practice-areas/premises-liability-bright.jpg';
import dogBitesImg from '@/assets/practice-areas/dog-bites-bright.jpg';
import medicalMalpracticeImg from '@/assets/practice-areas/medical-malpractice.jpg';
import wrongfulDeathImg from '@/assets/practice-areas/wrongful-death.jpg';
import productLiabilityImg from '@/assets/practice-areas/product-liability.jpg';
import constructionAccidentsImg from '@/assets/practice-areas/construction-accidents.jpg';
import brainInjuriesImg from '@/assets/practice-areas/brain-injuries.jpg';
import spinalCordInjuriesImg from '@/assets/practice-areas/spinal-cord-injuries.jpg';
import burnInjuriesImg from '@/assets/practice-areas/burn-injuries.jpg';
import amputationImg from '@/assets/practice-areas/amputation-bright.jpg';
import workplaceInjuriesImg from '@/assets/practice-areas/workplace-injuries.jpg';
import medicalDevicesImg from '@/assets/practice-areas/medical-devices.jpg';
import pharmaceuticalImg from '@/assets/practice-areas/pharmaceutical.jpg';
import massTortsImg from '@/assets/practice-areas/mass-torts.jpg';
import classActionsImg from '@/assets/practice-areas/class-actions.jpg';
import environmentalToxicImg from '@/assets/practice-areas/environmental-toxic-hero.jpg';
import campLejeuneImg from '@/assets/practice-areas/camp-lejeune-bright.jpg';
import pfasExposureImg from '@/assets/practice-areas/pfas-exposure.jpg';
import benzeneExposureImg from '@/assets/practice-areas/benzene-exposure.jpg';
import opioidLitigationImg from '@/assets/practice-areas/opioid-litigation.jpg';
import sexualAbuseImg from '@/assets/practice-areas/sexual-abuse-bright.jpg';
import clergyAbuseImg from '@/assets/practice-areas/clergy-abuse.jpg';
import elderAbuseImg from '@/assets/practice-areas/elder-abuse.jpg';
import birthInjuriesImg from '@/assets/practice-areas/birth-injuries.jpg';
import uberLyftAccidentsImg from '@/assets/practice-areas/uber-lyft-accidents.jpg';
import busAccidentsImg from '@/assets/practice-areas/bus-accidents.jpg';
import aviationAccidentsImg from '@/assets/practice-areas/aviation-accidents.jpg';
import maritimeAccidentsImg from '@/assets/practice-areas/maritime-accidents.jpg';
import swimmingPoolImg from '@/assets/practice-areas/swimming-pool.jpg';
import amusementParksImg from '@/assets/practice-areas/amusement-parks-bright.jpg';
import electrocutionImg from '@/assets/practice-areas/electrocution.jpg';
import explosionsImg from '@/assets/practice-areas/explosions.jpg';
import visionLossImg from '@/assets/practice-areas/vision-loss-bright.jpg';
import hearingLossImg from '@/assets/practice-areas/hearing-loss.jpg';
import paralysisImg from '@/assets/practice-areas/paralysis.jpg';
import civilRightsImg from '@/assets/practice-areas/civil-rights.jpg';
import retailAccidentsImg from '@/assets/practice-areas/retail-accidents-bright.jpg';
import scaffoldingFallsImg from '@/assets/practice-areas/scaffolding-falls.jpg';
import craneAccidentsImg from '@/assets/practice-areas/crane-accidents.jpg';
import railroadAccidentsImg from '@/assets/practice-areas/railroad-accidents.jpg';
import defamationImg from '@/assets/practice-areas/defamation.jpg';
import generalPersonalInjuryImg from '@/assets/practice-areas/general-personal-injury.jpg';

import heroFallback from '@/assets/hero-background.png';

gsap.registerPlugin(ScrollTrigger);

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

const practiceAreas: PracticeArea[] = [
  {
    id: 'mesothelioma-asbestos',
    title: 'Mesothelioma & Asbestos',
    description: 'Aggressive representation for asbestos cancer victims throughout California. We trace exposure histories from military service, shipyards, construction sites, and consumer products. Our team understands the devastating impact of this aggressive cancer that develops decades after exposure. California\'s favorable laws allow recovery for exposures dating back many years, with multiple compensation sources available including trust funds, settlements, and verdicts. We work with medical specialists to document your diagnosis and treatment needs while pursuing maximum compensation from all responsible parties. Time is critical with mesothelioma cases - we expedite proceedings to secure compensation quickly for you and your family.',
    image: mesotheliomaAsbestosImg,
    slug: 'mesothelioma-asbestos'
  },
  {
    id: 'silicosis-injuries',
    title: 'Silicosis',
    description: 'Fighting for stone workers suffering from this preventable yet incurable lung disease. Engineered stone fabricators face epidemic-level silicosis rates from cutting quartz countertops without proper protection. This devastating disease causes progressive scarring of lung tissue, leading to difficulty breathing, fatigue, and eventual respiratory failure. We pursue claims against manufacturers who failed to warn about dangers and employers who violated safety standards. California leads the nation in recognizing this occupational hazard and protecting workers\' rights. Our advocacy includes securing compensation for medical treatment, lost wages, and pain and suffering while pushing for industry-wide safety reforms. Young workers deserve justice for this entirely preventable disease that robs them of their health and livelihood.',
    image: silicosisInjuriesImg,
    slug: 'silicosis-injuries'
  },
  {
    id: 'talc-baby-powder',
    title: 'Talc',
    description: 'Seeking justice for ovarian cancer and mesothelioma victims from contaminated talc products. For decades, manufacturers knew their talc contained asbestos but continued marketing these products for intimate use and infant care. Internal documents reveal deliberate concealment of contamination risks while aggressively promoting powder use. California courts have awarded substantial verdicts recognizing the link between talc use and cancer development. We pursue compensation for medical expenses, pain and suffering, and punitive damages against corporations that prioritized profits over consumer safety. Women who used these products for feminine hygiene and families who trusted baby powder deserve accountability. Our team works with oncologists and epidemiologists to establish causation and secure maximum recovery for this betrayal of consumer trust.',
    image: talcBabyPowderImg,
    slug: 'talc-baby-powder-cancer'
  },
  {
    id: 'car-accidents',
    title: 'Car Accidents',
    description: 'California\'s congested highways and streets see thousands of serious crashes annually, causing life-altering injuries and devastating losses. Our former defense experience reveals insurance company tactics used to minimize payouts and deny valid claims. We handle all collision types including rear-end impacts, intersection crashes, head-on collisions, and multi-vehicle pileups. Using accident reconstruction, black box data, surveillance footage, and witness testimony, we prove liability and document damages comprehensively. California\'s pure comparative negligence system allows recovery even when partially at fault, though compensation reduces proportionally. We pursue all available coverage including underinsured motorist benefits to maximize recovery for medical bills, lost income, property damage, and pain and suffering. Don\'t let insurance adjusters undervalue your claim - we fight for full compensation.',
    image: carAccidentsImg,
    slug: 'car-accidents'
  },
  {
    id: 'uber-lyft-accidents',
    title: 'Uber/Lyft Accidents',
    description: 'Rideshare accidents create complex insurance issues with multiple coverage layers depending on driver app status. We navigate Uber and Lyft\'s corporate liability policies, driver personal coverage, and gap insurance determining which applies. App-on versus available versus engaged status dramatically affects coverage amounts and responsible parties. Background check failures allowing dangerous drivers, inadequate vehicle inspections, and pressure encouraging unsafe driving create corporate liability. Rideshare companies initially denied responsibility but legal precedent now holds them accountable. Passengers, other drivers, pedestrians, and cyclists injured by rideshare vehicles deserve full compensation regardless of confusing insurance structures. We handle coverage disputes, comparative negligence with driver and company, and maximum policy limit recovery. California\'s regulations specifically address rideshare insurance requirements strengthening victim protections.',
    image: uberLyftAccidentsImg,
    slug: 'uber-lyft-accidents'
  },
  {
    id: 'dog-bites',
    title: 'Dog Bites',
    description: 'California\'s strict liability statute holds dog owners responsible for bite injuries regardless of the animal\'s history or owner\'s knowledge of aggression. This protection especially benefits children who comprise the majority of serious bite victims. We pursue homeowner\'s and renter\'s insurance claims for medical expenses, reconstructive surgery, scarring, nerve damage, infection treatment, and psychological counseling for trauma. Facial injuries causing disfigurement require plastic surgery and ongoing treatment affecting victims\' self-esteem and social interactions. Beyond bites, we handle injuries from dogs knocking people down, causing falls, or attacking other pets. Dangerous breeds and repeat offenders may warrant punitive damages. Post-traumatic stress, especially in children, requires therapeutic intervention covered in settlements. Our compassionate approach balances aggressive advocacy with sensitivity to both human and animal welfare concerns.',
    image: dogBitesImg,
    slug: 'dog-bites-animal-attacks'
  },
  {
    id: 'premises-liability',
    title: 'Premises Liability',
    description: 'Property owners must maintain safe conditions for visitors, with liability arising from negligent maintenance, inadequate security, and dangerous conditions. Slip and falls from wet floors, uneven surfaces, poor lighting, and obstacles cause serious injuries including hip fractures, head trauma, and back injuries requiring surgery. Inadequate security leading to assaults, negligent maintenance causing accidents, and dangerous conditions like broken stairs create liability. We prove notice through maintenance records, prior complaints, surveillance footage, and inspection reports showing owners knew or should have known about hazards. California law distinguishes between invitees, licensees, and trespassers, affecting duty of care owed. Retail stores, apartments, offices, and public spaces must regularly inspect and promptly address dangers. Compensation covers medical treatment, lost income, pain and suffering, and permanent disabilities from preventable property hazards.',
    image: premisesLiabilityImg,
    slug: 'premises-liability'
  },
  {
    id: 'medical-malpractice',
    title: 'Medical Malpractice',
    description: 'Healthcare providers must meet professional standards of care, with deviation causing patient harm creating liability for compensation. Misdiagnosis delays treatment allowing conditions to worsen, while surgical errors cause permanent damage requiring corrective procedures. Medication errors, birth injuries, anesthesia mistakes, and failure to obtain informed consent violate patient trust and safety. California\'s MICRA limits on non-economic damages require strategic approaches maximizing economic damage recovery through life care plans and vocational assessments. We work with medical experts establishing standard of care breaches and causation linking negligence to injuries. Hospital infections, emergency room errors, and nursing negligence create institutional liability beyond individual providers. One-year statute of limitations demands prompt action preserving claims. Despite damage caps, substantial compensation remains available for medical expenses, lost earnings, and permanent disabilities from preventable medical errors.',
    image: medicalMalpracticeImg,
    slug: 'medical-malpractice'
  }
];

const PracticeAreasReference: React.FC = () => {
  // Default to first area (Mesothelioma & Asbestos)
  const defaultArea = practiceAreas[0];
  const [activeArea, setActiveArea] = useState<PracticeArea>(defaultArea);
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);
  const [lockedArea, setLockedArea] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Initialize all cards with proper styling on mount
    cardsRef.current.forEach((card) => {
      if (card) {
        gsap.set(card, {
          filter: 'brightness(1) saturate(1)',
          opacity: 1,
          scale: 1
        });
      }
    });
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current?.children || [],
        { 
          opacity: 0, 
          y: 60,
          filter: 'blur(10px)'
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
          }
        }
      );

      // Sidebar animation
      gsap.fromTo(sidebarRef.current,
        { 
          opacity: 0, 
          x: -100,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 85%',
          }
        }
      );

      // Practice area cards staggered animation
      gsap.fromTo(gridRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleAreaHover = (areaId: string | null) => {
    setHoveredArea(areaId);
    if (areaId) {
      const area = practiceAreas.find(p => p.id === areaId);
      if (area) setActiveArea(area);
      
      // Add visual effects to cards
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const cardArea = practiceAreas[index];
          if (cardArea?.id === areaId) {
            // Activate the hovered card with subtle glow
            gsap.to(card, { 
              scale: 1.02, 
              opacity: 1,
              filter: 'brightness(1.1) drop-shadow(0 0 20px hsl(var(--primary) / 0.3))',
              duration: 0.3, 
              ease: 'power2.out' 
            });
          } else {
            // Fade out other cards (but keep brightness normal for images)
            gsap.to(card, { 
              scale: 0.98, 
              opacity: 0.6,
              filter: 'brightness(1) saturate(0.8)',
              duration: 0.3, 
              ease: 'power2.out' 
            });
          }
        }
      });
    } else {
      // Reset all cards to normal state
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.to(card, { 
            scale: 1, 
            opacity: 1,
            filter: 'brightness(1) saturate(1) drop-shadow(0 0 0px transparent)',
            duration: 0.3, 
            ease: 'power2.out' 
          });
        }
      });
      
      // On hover leave, revert to locked area
      const lockedAreaData = practiceAreas.find(p => p.id === lockedArea);
      if (lockedAreaData) setActiveArea(lockedAreaData);
    }
  };

  const handleAreaClick = (areaId: string) => {
    setLockedArea(areaId);
    const area = practiceAreas.find(p => p.id === areaId);
    if (area) {
      setActiveArea(area);
      // Navigate to the practice area page
      if (area.slug) {
        window.location.href = `/practice-areas/${area.slug}`;
      }
    }
  };

  const getItemState = (areaId: string) => {
    if (hoveredArea === areaId) return 'hovered';
    if (lockedArea === areaId) return 'active';
    return 'default';
  };

  // Get practice area categories for tags
  const getPracticeAreaTags = (title: string): string[] => {
    const tagMap: Record<string, string[]> = {
      'Mesothelioma & Asbestos': ['Mass Tort', 'Toxic Exposure', 'Cancer'],
      'Silicosis Injuries': ['Occupational', 'Toxic Exposure', 'Lung Disease'],
      'Talc & Baby Powder Cancer': ['Mass Tort', 'Product Liability', 'Cancer'],
      'Car Accidents': ['Motor Vehicle', 'Personal Injury', 'Insurance'],
      'Truck & 18-Wheeler': ['Motor Vehicle', 'Commercial', 'Catastrophic'],
      'Motorcycle Accidents': ['Motor Vehicle', 'Personal Injury', 'Bias Defense'],
      'Pedestrian Accidents': ['Motor Vehicle', 'Vulnerable Road User', 'Serious Injury'],
      'Bicycle Accidents': ['Motor Vehicle', 'Vulnerable Road User', 'California Law'],
      'Premises Liability': ['Property Law', 'Negligence', 'Slip & Fall'],
      'Dog Bites': ['Strict Liability', 'Animal Law', 'California Statute'],
      'Medical Malpractice': ['Healthcare', 'Professional Negligence', 'MICRA'],
      'Wrongful Death': ['Catastrophic', 'Family Law', 'Survival Action'],
      'Product Liability': ['Defective Products', 'Strict Liability', 'Consumer Safety'],
      'Construction Accidents': ['Workplace', 'OSHA', 'Catastrophic'],
      'Brain Injuries': ['Catastrophic', 'Neurological', 'Life Care'],
      'Spinal Cord Injuries': ['Catastrophic', 'Paralysis', 'Life Care'],
      'Burn Injuries': ['Catastrophic', 'Plastic Surgery', 'Pain & Suffering'],
      'Amputation': ['Catastrophic', 'Prosthetics', 'Life Alteration'],
      'Workplace Injuries': ['Workers Comp', 'Third Party', 'Labor Law'],
      'Medical Devices': ['FDA', 'Defective Product', 'Healthcare'],
      'Pharmaceutical': ['FDA', 'Drug Safety', 'Side Effects'],
      'Mass Torts': ['Class Action', 'Multiple Plaintiffs', 'Corporate Liability'],
      'Class Actions': ['Group Litigation', 'Consumer Rights', 'Corporate Misconduct'],
      'Environmental & Toxic': ['Toxic Exposure', 'Environmental Law', 'Public Health'],
      'Camp Lejeune': ['Military', 'Toxic Water', 'Government Liability'],
      'PFAS Exposure': ['Forever Chemicals', 'Environmental', 'Water Contamination'],
      'Benzene Exposure': ['Chemical Exposure', 'Cancer', 'Occupational'],
      'Opioid Litigation': ['Pharmaceutical', 'Addiction', 'Public Health'],
      'Sexual Abuse': ['Civil Rights', 'Institutional Liability', 'Trauma'],
      'Clergy Abuse': ['Institutional Liability', 'Religious Organizations', 'Civil Rights'],
      'Elder Abuse': ['Vulnerable Adults', 'Nursing Home', 'Civil Rights'],
      'Birth Injuries': ['Medical Malpractice', 'Pediatric', 'Life Care'],
      'Uber & Lyft Accidents': ['Rideshare', 'Commercial Insurance', 'Gig Economy'],
      'Bus Accidents': ['Public Transit', 'Government Liability', 'Commercial'],
      'Aviation Accidents': ['Federal Aviation', 'Commercial Aviation', 'Catastrophic'],
      'Maritime Accidents': ['Admiralty Law', 'Jones Act', 'Offshore'],
      'Swimming Pool': ['Premises Liability', 'Drowning', 'Supervision'],
      'Amusement Parks': ['Premises Liability', 'Safety Regulations', 'Entertainment'],
      'Electrocution': ['Electrical Safety', 'Utility Companies', 'Construction'],
      'Explosions': ['Industrial Accidents', 'Property Damage', 'Catastrophic'],
      'Vision Loss': ['Catastrophic', 'Disability', 'Life Alteration'],
      'Hearing Loss': ['Occupational', 'Disability', 'OSHA'],
      'Paralysis': ['Catastrophic', 'Spinal Injury', 'Life Care'],
      'Civil Rights': ['Constitutional Law', 'Government Liability', 'Civil Liberty'],
      'Retail Accidents': ['Premises Liability', 'Customer Safety', 'Negligence'],
      'Scaffolding Falls': ['Construction', 'OSHA', 'Height Safety'],
      'Crane Accidents': ['Construction', 'Heavy Equipment', 'Workplace Safety'],
      'Railroad Accidents': ['Federal Railroad', 'FELA', 'Transportation'],
      'Defamation': ['Reputation', 'First Amendment', 'Media Law'],
      'General Personal Injury': ['All Areas', 'Comprehensive', 'Expert Representation']
    };
    return tagMap[title] || ['Personal Injury', 'Legal Services', 'Compensation'];
  };

  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/6 left-1/4 w-72 h-72 orb animate-float opacity-20"></div>
        <div className="absolute bottom-1/4 right-1/6 w-56 h-56 orb-secondary animate-float-delayed opacity-25"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Our Practice Areas
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal representation across all areas of personal injury law. 
            Our experienced attorneys fight for maximum compensation in every case.
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex gap-8">
          {/* Left Sidebar - Practice Area Links */}
          <div ref={sidebarRef} className="w-72 glass-card h-fit relative">
            
            {/* Header with gradient background */}
            <div className="bg-gradient-primary px-8 py-6 rounded-t-2xl">
              <h3 className="text-xl font-bold text-primary-foreground">
                Our Practice Areas
              </h3>
            </div>
            
            {/* Navigation Links */}
            <div className="px-6 py-4">
              <nav className="space-y-0.5 max-h-[580px]">
                {practiceAreas.map((area) => {
                  const state = getItemState(area.id);
                  return (
                    <button
                      key={area.id}
                      onClick={() => handleAreaClick(area.id)}
                      onMouseEnter={() => handleAreaHover(area.id)}
                      onMouseLeave={() => handleAreaHover(null)}
                      className={`w-full text-left py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 glass-button border-0 magnetic hover:scale-[1.02] ${
                        state === 'active'
                          ? 'bg-primary/20 text-primary border border-primary/30 shadow-md' 
                          : state === 'hovered'
                          ? 'bg-primary/15 text-primary scale-[1.02] shadow-sm'
                          : 'text-foreground hover:text-primary hover:bg-primary/10'
                      }`}
                    >
                      {area.title}
                    </button>
                  );
                })}
                
                {/* See All Link */}
                <Link
                  to="/practice-areas"
                  className="w-full text-left py-2 px-3 text-sm font-bold rounded-md transition-all duration-200 glass-button border border-primary/40 magnetic hover:scale-[1.02] bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/60 mt-2 block"
                >
                  See All 50 Practice Areas →
                </Link>
              </nav>
            </div>
          </div>

          {/* Right Content Area - Practice Cards Grid */}
          <div className="flex-1 relative">
            <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practiceAreas.map((area, index) => {
                const state = getItemState(area.id);
                const tags = getPracticeAreaTags(area.title);
                
                return (
                  <div
                    key={area.id}
                    ref={el => { if (el) cardsRef.current[index] = el; }}
                    className="glass-card group hover-glow-primary cursor-pointer overflow-hidden"
                    onMouseEnter={() => handleAreaHover(area.id)}
                    onMouseLeave={() => handleAreaHover(null)}
                    onClick={() => handleAreaClick(area.id)}
                  >
                    {/* Practice Area Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <img 
                        src={area.image}
                        alt={`${area.title} legal services`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroFallback; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Overlay Buttons */}
                     </div>

                    {/* Practice Info */}
                    <div className="p-6 space-y-4">
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {area.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {area.description}
                      </p>
                      
                      {/* Practice Area Tags */}
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* CTA */}
                      <div className="pt-2">
                        <Link
                        to={area.title === 'Mesothelioma & Asbestos' ? '/practice-areas/mesothelioma-asbestos' :
                            area.title === 'Silicosis Injuries' ? '/practice-areas/silicosis-injuries' :
                            area.title === 'Talc & Baby Powder Cancer' ? '/practice-areas/talc-baby-powder-cancer' :
                            area.title === 'Car Accidents' ? '/practice-areas/car-accidents' :
                            area.title === 'Truck & 18-Wheeler' ? '/practice-areas/truck-18-wheeler' :
                            area.title === 'Motorcycle Accidents' ? '/practice-areas/motorcycle-accidents' :
                            area.title === 'Pedestrian Accidents' ? '/practice-areas/pedestrian-accidents' :
                            area.title === 'Bicycle Accidents' ? '/practice-areas/bicycle-accidents' :
                            area.title === 'Premises Liability' ? '/practice-areas/premises-liability' :
                            area.title === 'Dog Bites' ? '/practice-areas/dog-bites-animal-attacks' :
                            area.title === 'Medical Malpractice' ? '/practice-areas/medical-malpractice' :
                            area.title === 'Wrongful Death' ? '/practice-areas/wrongful-death' :
                            area.title === 'Product Liability' ? '/practice-areas/product-liability' :
                            area.title === 'Construction Accidents' ? '/practice-areas/construction-accidents' :
                            area.title === 'Brain Injuries' ? '/practice-areas/brain-injuries' :
                            area.title === 'Spinal Cord Injuries' ? '/practice-areas/spinal-cord-injuries' :
                            area.title === 'Burn Injuries' ? '/practice-areas/burn-injuries' :
                            area.title === 'Amputation' ? '/practice-areas/amputation' :
                            area.title === 'Workplace Injuries' ? '/practice-areas/workplace-injuries' :
                            area.title === 'Medical Devices' ? '/practice-areas/medical-devices' :
                            area.title === 'Pharmaceutical' ? '/practice-areas/pharmaceutical' :
                            area.title === 'Mass Torts' ? '/practice-areas/mass-torts' :
                            area.title === 'Class Actions' ? '/practice-areas/class-actions' :
                            area.title === 'Environmental & Toxic' ? '/practice-areas/environmental-toxic' :
                            area.title === 'Camp Lejeune' ? '/practice-areas/camp-lejeune' :
                            area.title === 'PFAS Exposure' ? '/practice-areas/pfas-exposure' :
                            area.title === 'Benzene Exposure' ? '/practice-areas/benzene-exposure' :
                            area.title === 'Opioid Litigation' ? '/practice-areas/opioid-litigation' :
                            area.title === 'Sexual Abuse' ? '/practice-areas/sexual-abuse' :
                            area.title === 'Clergy Abuse' ? '/practice-areas/clergy-abuse' :
                            area.title === 'Elder Abuse' ? '/practice-areas/elder-abuse' :
                            area.title === 'Birth Injuries' ? '/practice-areas/birth-injuries' :
                            area.title === 'Uber & Lyft Accidents' ? '/practice-areas/uber-lyft-accidents' :
                            area.title === 'Bus Accidents' ? '/practice-areas/bus-accidents' :
                            area.title === 'Aviation Accidents' ? '/practice-areas/aviation-accidents' :
                            area.title === 'Maritime Accidents' ? '/practice-areas/maritime-accidents' :
                            area.title === 'Swimming Pool' ? '/practice-areas/swimming-pool-accidents' :
                            area.title === 'Amusement Parks' ? '/practice-areas/amusement-parks' :
                            area.title === 'Electrocution' ? '/practice-areas/electrocution' :
                            area.title === 'Explosions' ? '/practice-areas/explosions' :
                            area.title === 'Vision Loss' ? '/practice-areas/vision-loss' :
                            area.title === 'Hearing Loss' ? '/practice-areas/hearing-loss' :
                            area.title === 'Paralysis' ? '/practice-areas/paralysis' :
                            area.title === 'Civil Rights' ? '/practice-areas/civil-rights' :
                            area.title === 'Retail Accidents' ? '/practice-areas/retail-accidents' :
                            area.title === 'Scaffolding Falls' ? '/practice-areas/scaffolding-falls' :
                            area.title === 'Crane Accidents' ? '/practice-areas/crane-accidents' :
                            area.title === 'Railroad Accidents' ? '/practice-areas/railroad-accidents' :
                            area.title === 'Defamation' ? '/practice-areas/defamation' :
                            area.title === 'General Personal Injury' ? '/practice-areas/general-personal-injury' :
                            `/practice-areas/${area.slug}`}
                          className="ghost-button group/btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          View Details
                          <svg width="14" height="14" fill="currentColor" viewBox="0 0 256 256" className="transition-transform group-hover/btn:translate-x-1">
                            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
              
              {/* See All 50 Practice Areas Card */}
              <Link
                to="/practice-areas"
                className="glass-card group hover-glow-primary cursor-pointer overflow-hidden flex flex-col items-center justify-center p-8 min-h-[300px] border-2 border-primary/30 hover:border-primary/60 transition-all duration-300"
              >
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <svg width="32" height="32" fill="currentColor" viewBox="0 0 256 256" className="text-primary">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    See All 50 Practice Areas
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Explore our complete range of legal services
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Mobile Practice Areas Grid - Compact Card Layout */}

          {/* Mobile Practice Cards Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {practiceAreas.map((area, index) => {
              const state = getItemState(area.id);
              const tags = getPracticeAreaTags(area.title);
              
              return (
                <div
                  key={area.id}
                  className="glass-card group cursor-pointer overflow-hidden hover:scale-[1.02] transition-all duration-300"
                  onClick={() => handleAreaClick(area.id)}
                >
                  {/* Practice Area Image */}
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img 
                      src={area.image}
                      alt={`${area.title} legal services`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => { (e.currentTarget as HTMLImageElement).src = heroFallback; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent"></div>
                    
                    {/* Title Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <h3 className="text-sm font-semibold text-primary leading-tight line-clamp-2 group-hover:text-primary-glow transition-colors">
                        {area.title}
                      </h3>
                      
                      {/* Primary tag for context */}
                      <span className="inline-block mt-1 px-2 py-0.5 text-[10px] bg-primary/20 text-primary-glow rounded-full border border-primary/30">
                        {tags[0]}
                      </span>
                    </div>
                  </div>

                  {/* Quick action button */}
                  <div className="p-3">
                    <Link
                      to={area.title === 'Mesothelioma & Asbestos' ? '/practice-areas/mesothelioma-asbestos' :
                           area.title === 'Silicosis Injuries' ? '/practice-areas/silicosis-injuries' :
                           area.title === 'Talc & Baby Powder Cancer' ? '/practice-areas/talc-baby-powder-cancer' :
                           area.title === 'Car Accidents' ? '/practice-areas/car-accidents' :
                           area.title === 'Truck & 18-Wheeler' ? '/practice-areas/truck-18-wheeler' :
                           area.title === 'Motorcycle Accidents' ? '/practice-areas/motorcycle-accidents' :
                           area.title === 'Pedestrian Accidents' ? '/practice-areas/pedestrian-accidents' :
                           area.title === 'Bicycle Accidents' ? '/practice-areas/bicycle-accidents' :
                           area.title === 'Premises Liability' ? '/practice-areas/premises-liability' :
                           area.title === 'Dog Bites' ? '/practice-areas/dog-bites-animal-attacks' :
                           area.title === 'Medical Malpractice' ? '/practice-areas/medical-malpractice' :
                           area.title === 'Wrongful Death' ? '/practice-areas/wrongful-death' :
                           area.title === 'Product Liability' ? '/practice-areas/product-liability' :
                           area.title === 'Construction Accidents' ? '/practice-areas/construction-accidents' :
                           area.title === 'Brain Injuries' ? '/practice-areas/brain-injuries' :
                           area.title === 'Spinal Cord Injuries' ? '/practice-areas/spinal-cord-injuries' :
                           area.title === 'Burn Injuries' ? '/practice-areas/burn-injuries' :
                           area.title === 'Amputation' ? '/practice-areas/amputation' :
                           area.title === 'Workplace Injuries' ? '/practice-areas/workplace-injuries' :
                           area.title === 'Medical Devices' ? '/practice-areas/medical-devices' :
                           area.title === 'Pharmaceutical' ? '/practice-areas/pharmaceutical' :
                           area.title === 'Mass Torts' ? '/practice-areas/mass-torts' :
                           area.title === 'Class Actions' ? '/practice-areas/class-actions' :
                           area.title === 'Environmental & Toxic' ? '/practice-areas/environmental-toxic' :
                           area.title === 'Camp Lejeune' ? '/practice-areas/camp-lejeune' :
                           area.title === 'PFAS Exposure' ? '/practice-areas/pfas-exposure' :
                           area.title === 'Benzene Exposure' ? '/practice-areas/benzene-exposure' :
                           area.title === 'Opioid Litigation' ? '/practice-areas/opioid-litigation' :
                           area.title === 'Sexual Abuse' ? '/practice-areas/sexual-abuse' :
                           area.title === 'Clergy Abuse' ? '/practice-areas/clergy-abuse' :
                           area.title === 'Elder Abuse' ? '/practice-areas/elder-abuse' :
                           area.title === 'Birth Injuries' ? '/practice-areas/birth-injuries' :
                           area.title === 'Uber & Lyft Accidents' ? '/practice-areas/uber-lyft-accidents' :
                           area.title === 'Bus Accidents' ? '/practice-areas/bus-accidents' :
                           area.title === 'Aviation Accidents' ? '/practice-areas/aviation-accidents' :
                           area.title === 'Maritime Accidents' ? '/practice-areas/maritime-accidents' :
                           area.title === 'Swimming Pool' ? '/practice-areas/swimming-pool-accidents' :
                           area.title === 'Amusement Parks' ? '/practice-areas/amusement-parks' :
                           area.title === 'Electrocution' ? '/practice-areas/electrocution' :
                           area.title === 'Explosions' ? '/practice-areas/explosions' :
                           area.title === 'Vision Loss' ? '/practice-areas/vision-loss' :
                           area.title === 'Hearing Loss' ? '/practice-areas/hearing-loss' :
                           area.title === 'Paralysis' ? '/practice-areas/paralysis' :
                           area.title === 'Civil Rights' ? '/practice-areas/civil-rights' :
                           area.title === 'Retail Accidents' ? '/practice-areas/retail-accidents' :
                           area.title === 'Scaffolding Falls' ? '/practice-areas/scaffolding-falls' :
                           area.title === 'Crane Accidents' ? '/practice-areas/crane-accidents' :
                           area.title === 'Railroad Accidents' ? '/practice-areas/railroad-accidents' :
                           area.title === 'Defamation' ? '/practice-areas/defamation' :
                           area.title === 'General Personal Injury' ? '/practice-areas/general-personal-injury' :
                           `/practice-areas/${area.slug}`}
                      className="block"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button 
                        size="sm"
                        className="w-full bg-primary hover:bg-primary/90 text-white font-medium text-xs py-2 transition-all duration-300"
                      >
                        View Details
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
            
            {/* See All 50 Practice Areas Card - Mobile */}
            <Link
              to="/practice-areas"
              className="glass-card group cursor-pointer overflow-hidden col-span-2 flex flex-col items-center justify-center p-6 border-2 border-primary/30 hover:border-primary/60 transition-all duration-300"
            >
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256" className="text-primary">
                    <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  See All 50 Practice Areas
                </h3>
                <p className="text-xs text-muted-foreground">
                  Explore our complete range of legal services
                </p>
              </div>
            </Link>
          </div>
        </div>

        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="hero-button text-lg px-8 py-4">
            Free Case Evaluation
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 256 256">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
            </svg>
          </button>
          <p className="text-sm text-muted-foreground mt-4">
            No fees unless we win your case
          </p>
        </div>
      </div>

      {/* Accessibility */}
      <div className="sr-only" aria-live="polite">
        Currently showing {activeArea.title} practice area information. {practiceAreas.length} practice areas available.
      </div>
    </section>
  );
};

export default PracticeAreasReference;