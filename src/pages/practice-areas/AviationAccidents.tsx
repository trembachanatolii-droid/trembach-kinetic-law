import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  Map,
  ArrowLeft,
  Plane,
  Calculator,
  BookOpen
} from 'lucide-react';
import heroBackground from '@/assets/aviation-hero-bg.jpg';
import sidebarImage from '@/assets/aviation-sidebar.jpg';
import medicalProcessImage from '@/assets/aviation-medical-process.jpg';
import legalProcessImage from '@/assets/aviation-legal-process.jpg';
import aviationZonesImage from '@/assets/california-aviation-zones.jpg';
import medicalFacilityImage from '@/assets/aviation-medical-facility.jpg';
import caseEvaluationImage from '@/assets/aviation-case-evaluation.jpg';
import emergencyResponseImage from '@/assets/aviation-emergency-response.jpg';
import governmentClaimsImage from '@/assets/aviation-government-claims.jpg';
import accidentSceneImage from '@/assets/aviation-accident-scene.jpg';
import diagnosisImage from '@/assets/aviation-diagnosis.jpg';
import legalRepresentationImage from '@/assets/aviation-legal-representation.jpg';
import courtroomImage from '@/assets/aviation-courtroom.jpg';
import californiaCoverageImage from '@/assets/aviation-california-coverage.jpg';
import medicalConsultationImage from '@/assets/aviation-medical-consultation.jpg';
import resourcesImage from '@/assets/aviation-resources.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AviationAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    accidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'accident-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: AlertTriangle },
    { id: 'accident-types', label: 'TYPES OF ACCIDENTS', icon: Plane },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  // Premium 3D Visual Effects Setup
  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Container Setup
      if (containerRef.current) {
        gsap.set(containerRef.current, {
          perspective: 1200,
          transformStyle: "preserve-3d"
        });
      }

      // Floating Background Layers Animation
      const backLayer = document.querySelector('.back-layer');
      const midLayer = document.querySelector('.mid-layer');
      const frontLayer = document.querySelector('.front-layer');

      if (backLayer) {
        gsap.to(backLayer, {
          y: "30px",
          duration: 14,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: "40px",
          duration: 18,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: "20px",
          x: "25px",
          rotation: "2deg",
          duration: 10,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          rotation: "2deg",
          duration: 22,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Parallax Scroll Effects
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element, index) => {
        gsap.to(element, {
          y: () => (index + 1) * -50,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      });

      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation with 3D effects
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30, z: -100 },
        {
          opacity: 1,
          y: 0,
          z: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "cubic-bezier(0.22, 1, 0.36, 1)",
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      // 3D Card Hover Effects
      const cards = document.querySelectorAll('.aviation-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            z: 50,
            duration: 0.3,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            z: 0,
            duration: 0.3,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/aviation/case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How much is my aviation accident case worth?",
      answer: "Aviation accident settlements vary widely from hundreds of thousands to tens of millions depending on injury severity, liability clarity, and available insurance. Wrongful death cases average $5.2 million nationally but can exceed $50 million for high earners. Factors include medical expenses, lost income, pain and suffering, and whether punitive damages apply. International flights may have damage limitations under treaties. We evaluate all factors to maximize your compensation."
    },
    {
      question: "Who can be sued in an aviation accident?",
      answer: "Multiple parties may share liability including airlines, aircraft owners and operators, pilots, maintenance facilities, aircraft and component manufacturers, airports, air traffic controllers (through federal government), fixed base operators, and flight schools. Each party's liability depends on their role in causing the accident. We investigate thoroughly to identify all responsible parties, ensuring maximum compensation sources."
    },
    {
      question: "What if the airline or tour operator had me sign a waiver?",
      answer: "Liability waivers don't protect against gross negligence, intentional misconduct, or violations of statutory duties. California law limits waiver enforceability, especially for commercial carriers. Even with waivers, you may have valid claims if the operator was negligent. We review waiver language, circumstances of signing, and whether the specific negligence exceeded waiver scope to challenge these liability limitations."
    },
    {
      question: "How long do I have to file an aviation accident lawsuit?",
      answer: "California generally allows two years for personal injury and wrongful death claims, but aviation cases have exceptions. Government claims require six-month notice. International flights under Montreal Convention require two-year filing. Some defendants may have shorter contractual limitations. Product liability claims may extend to ten years. Early consultation ensures all deadlines are met and evidence preserved."
    },
    {
      question: "What if the NTSB finds pilot error caused the crash?",
      answer: "NTSB findings aren't admissible in court and don't determine legal liability. Pilot error doesn't exclude other contributing factors like inadequate training, maintenance failures, or design defects. Airlines remain liable for employee negligence. We conduct independent investigations often revealing factors NTSB didn't consider, identifying multiple causes and responsible parties beyond pilot error."
    },
    {
      question: "Can I sue if my loved one died in a military aircraft?",
      answer: "Military aviation accidents involve complex legal issues. Active duty service members are generally barred by the Feres Doctrine, but exceptions exist. Civilians, family members, and veterans may have claims. Government contractors may be liable despite government contractor defense. We navigate these complexities, identifying available claims through Federal Tort Claims Act, contractor liability, or product defects."
    },
    {
      question: "What compensation can I receive for aviation injuries?",
      answer: "Compensation includes medical expenses (past and future), lost wages and earning capacity, pain and suffering, disability and disfigurement, property damage, and wrongful death damages for families. Severe injuries like burns, spinal injuries, or traumatic brain injuries require lifetime care costing millions. Punitive damages may apply for gross negligence. We calculate comprehensive damages ensuring full compensation."
    },
    {
      question: "Should I talk to airline representatives or insurance adjusters?",
      answer: "Never give statements or sign documents without legal counsel. Airlines and insurers seek admissions to minimize liability. Their representatives appear sympathetic but work to protect corporate interests. Early statements made without understanding your rights can devastate your case. Let us handle all communications, protecting your interests while you focus on recovery."
    },
    {
      question: "What if the accident happened outside California?",
      answer: "You may still file suit in California if you're a resident, the airline does business here, or the ticket was purchased here. International accidents invoke treaty considerations affecting jurisdiction. We handle cases nationwide and coordinate with local counsel when needed. Choice of venue significantly impacts case value, making proper jurisdiction selection crucial for maximum recovery."
    },
    {
      question: "How are helicopter accidents different from airplane crashes?",
      answer: "Helicopters have higher accident rates due to mechanical complexity, challenging flight characteristics, and operation in dangerous environments. Common issues include rotor failures, transmission problems, and spatial disorientation. Tour operators often push weather limits. Medical helicopters face pressure to accept dangerous flights. These unique factors require specialized expertise in helicopter operations and accident investigation."
    },
    {
      question: "What evidence is important in aviation accident cases?",
      answer: "Critical evidence includes flight data and cockpit voice recorders, maintenance logs, pilot training records, weather data, air traffic control communications, witness statements, photographs and videos, medical records, and wreckage analysis. Evidence can be lost or destroyed quickly. Airlines have rapid response teams protecting their interests. Immediate legal representation ensures evidence preservation before it disappears."
    },
    {
      question: "Can I recover damages if the pilot was a friend or family member?",
      answer: "Yes, insurance typically covers these situations. Aircraft owner's insurance, homeowner's policies, or umbrella coverage may apply regardless of personal relationships. Claims focus on insurance recovery, not personal assets. We handle these sensitive cases with discretion, pursuing available insurance while preserving relationships when possible. Don't let personal relationships prevent you from securing needed compensation."
    },
    {
      question: "What if weather caused the crash?",
      answer: "Weather alone doesn't eliminate liability. Pilots must make safe decisions about flying in adverse conditions. Airlines pressure pilots to maintain schedules despite weather. Inadequate weather equipment, training, or planning creates liability. We investigate whether the flight should have proceeded, adequate weather information was obtained, and proper precautions were taken for conditions encountered."
    },
    {
      question: "How long do aviation accident cases take?",
      answer: "Aviation cases typically take 18 months to 3 years, longer than typical injury cases due to complexity. NTSB investigations, extensive discovery, multiple defendants, and technical issues extend timelines. International cases may take longer. However, we can often secure partial settlements or advances for immediate needs while pursuing full compensation. Our aggressive approach speeds resolution when possible."
    },
    {
      question: "What if I can't afford an aviation accident lawyer?",
      answer: "We work on contingency fees - you pay nothing unless we win. We advance all costs including investigations, experts, and litigation expenses. Aviation cases require substantial resources that we provide without upfront payment. Our fee is a percentage of recovery, aligning our interests with yours. Don't let financial concerns prevent you from pursuing rightful compensation."
    },
    {
      question: "Can I sue if the accident was caused by a terrorist act or hijacking?",
      answer: "Security failures may create liability despite criminal acts. Airlines and airports have duties to screen passengers and cargo. The September 11th Victim Compensation Fund provides alternative compensation for terrorism victims. We evaluate security procedures, intelligence failures, and available compensation sources including government funds, airline liability, and security company negligence."
    },
    {
      question: "What about accidents involving drones or unmanned aircraft?",
      answer: "Drone accidents are increasingly common with evolving regulations. Commercial drone operators need licenses and insurance. Recreational users may have homeowner's coverage. Manufacturers may be liable for defects. We pursue claims against operators, owners, and manufacturers for injuries caused by drones, navigating this developing area of aviation law."
    },
    {
      question: "Can airport ground accidents be aviation claims?",
      answer: "Yes, injuries at airports including jetbridge accidents, baggage vehicle strikes, tarmac falls, and security incidents may be aviation claims. Airlines, airports, and contractors share liability for ground operations safety. These cases involve premises liability, common carrier duties, and aviation regulations. We pursue all responsible parties for airport ground accidents."
    },
    {
      question: "What if I'm injured by turbulence during a flight?",
      answer: "Turbulence injuries may create liability if airlines failed to warn passengers, secure service items, or avoid known turbulence. Clear air turbulence is harder to prove negligence, but severe turbulence often has warnings pilots should heed. We investigate weather reports, pilot decisions, and whether proper procedures were followed to protect passengers."
    },
    {
      question: "What's the Montreal Convention and how does it affect my claim?",
      answer: "The Montreal Convention governs international flights, establishing strict liability up to certain limits (approximately $170,000) regardless of fault. Higher damages require proving negligence. The treaty affects where you can sue and time limits. We navigate treaty requirements, maximize recovery within treaty framework, and identify claims outside treaty limitations."
    },
    {
      question: "Can I sue for emotional distress if I wasn't physically injured?",
      answer: "Emotional distress claims are possible but challenging without physical injury. Witnessing traumatic events, fear of death during emergencies, or PTSD from aviation accidents may support claims. Success depends on severity of emotional trauma, medical documentation, and relationship to directly injured parties. We evaluate whether emotional distress claims are viable in your specific circumstances."
    },
    {
      question: "What if the aircraft was experimental or homebuilt?",
      answer: "Experimental aircraft accidents involve unique liability issues. Builders, kit manufacturers, and component suppliers may share responsibility. Insurance coverage is often limited. We investigate construction quality, design modifications, and whether proper warnings existed about experimental status. These cases require specialized knowledge of amateur-built aircraft regulations and industry standards."
    },
    {
      question: "How do international aviation accidents differ legally?",
      answer: "International flights involve treaties affecting liability limits, jurisdiction options, and time limits. The Montreal Convention governs most international flights. Foreign airline accidents may require coordination with international counsel. Cultural and language barriers complicate investigations. We navigate these complexities, identifying optimal legal strategies for international aviation accidents."
    },
    {
      question: "What role does aircraft maintenance play in accidents?",
      answer: "Maintenance negligence causes many aviation accidents through skipped inspections, improper repairs, or use of incorrect parts. Maintenance facilities, mechanics, and aircraft operators share responsibility for airworthiness. We investigate maintenance records, work orders, and quality control procedures to identify maintenance-related negligence contributing to accidents."
    },
    {
      question: "Can I file a claim against the government for air traffic control errors?",
      answer: "Yes, air traffic controller errors may create federal liability under the Federal Tort Claims Act. These cases require proving operational errors, deviation from standard procedures, and causation. Government claims have specific procedural requirements and shorter deadlines. We analyze radar data, voice recordings, and controller workload to establish government liability."
    },
    {
      question: "What if multiple family members died in the same crash?",
      answer: "Multiple wrongful death claims from the same accident require careful coordination to maximize total recovery. Each family member's claim is evaluated separately considering their relationship to the deceased, financial dependency, and emotional impact. We work with all family members to ensure fair distribution while maximizing total compensation from all available sources."
    },
    {
      question: "How do products liability claims work in aviation accidents?",
      answer: "Aircraft and component manufacturers face strict liability for defective products causing accidents. These claims don't require proving negligence - only that the product was unreasonably dangerous. Famous aviation product liability cases include DC-10 cargo doors and Boeing 737 MAX issues. We pursue both strict liability and negligence theories against manufacturers."
    },
    {
      question: "What if the pilot had alcohol or drugs in their system?",
      answer: "Pilot impairment creates strong liability but doesn't eliminate other responsible parties. Airlines, flight schools, and employers may be liable for inadequate screening, supervision, or enabling impaired operations. We investigate all circumstances surrounding pilot impairment, pursuing maximum compensation from all responsible parties while addressing this sensitive issue appropriately."
    },
    {
      question: "Can I sue if the crash was caused by bird strikes?",
      answer: "Bird strikes may create airport liability if they failed to manage wildlife hazards. Airports must maintain wildlife management programs, monitor strike histories, and take reasonable measures to reduce bird populations. Aircraft manufacturers may be liable if engines weren't designed to withstand expected bird strikes. We evaluate whether proper precautions were taken."
    },
    {
      question: "What compensation is available for burn injuries from aviation fires?",
      answer: "Aviation fire injuries often result in catastrophic burns requiring extensive treatment, multiple surgeries, and lifelong care. Compensation includes medical expenses, rehabilitation costs, pain and suffering, disability, disfigurement, and lost earning capacity. Burn injuries may support punitive damages if gross negligence caused the fire. We work with burn specialists to document full damages."
    },
    {
      question: "How do charter flight accidents differ from commercial airline crashes?",
      answer: "Charter operators have the same safety obligations as airlines but may have less oversight and resources. Insurance coverage varies significantly. Pilot qualifications and aircraft maintenance may be less rigorous. We investigate charter operator certificates, insurance coverage, and compliance with safety regulations to establish liability in charter flight accidents."
    },
    {
      question: "What if the aviation accident was caused by air traffic control communications failure?",
      answer: "Communication failures between pilots and controllers cause many accidents. These may involve equipment malfunctions, frequency congestion, language barriers, or miscommunications. We analyze cockpit voice recordings, air traffic control tapes, and communication protocols to identify where breakdowns occurred and who bears responsibility for communication failures."
    },
    {
      question: "Can survivors of aviation accidents sue for pre-impact terror?",
      answer: "Pre-impact terror allows recovery for conscious pain and suffering before death in aviation accidents. California recognizes these claims when evidence shows victims were aware of impending death. We investigate crash circumstances, impact patterns, and survivor statements to determine whether pre-impact terror claims are viable for your family member."
    },
    {
      question: "What happens if the aircraft manufacturer is foreign?",
      answer: "Foreign aircraft manufacturers like Airbus, Bombardier, or Embraer can be sued in U.S. courts for accidents involving their aircraft. These cases may involve complex jurisdictional issues and international service of process. We coordinate with foreign counsel when necessary and navigate international legal complexities to pursue foreign manufacturer liability."
    },
    {
      question: "How do aviation accident cases involving corporate jets differ?",
      answer: "Corporate aviation accidents often involve wealthy individuals with significant insurance coverage but also complex corporate structures. Liability may extend to corporations owning aircraft, management companies, and fractional ownership operators. These cases require investigating corporate relationships, insurance coverage, and operational control to identify all responsible parties."
    },
    {
      question: "What role does pilot training play in aviation accident liability?",
      answer: "Inadequate pilot training contributes to many accidents through insufficient emergency procedures, type-specific training, or recurrent training failures. Airlines, flight schools, and training providers may be liable for substandard training. We examine training records, simulator time, instructor qualifications, and whether training met industry standards and regulatory requirements."
    },
    {
      question: "Can passengers sue for injuries during emergency evacuations?",
      answer: "Emergency evacuation injuries may create liability if crew failed to follow proper procedures, evacuation slides malfunctioned, or passengers weren't properly instructed. Airlines have specific duties during evacuations. We investigate evacuation procedures, crew actions, equipment functionality, and passenger briefings to determine liability for evacuation injuries."
    },
    {
      question: "What if the aviation accident involved a flight training school?",
      answer: "Flight training accidents involve unique liability issues including instructor negligence, inadequate aircraft maintenance, and student pilot supervision. Training schools owe heightened duties to inexperienced pilots. We investigate instructor qualifications, training curriculum, aircraft condition, and whether proper supervision was provided during training flights."
    },
    {
      question: "How do medical helicopter accidents differ legally?",
      answer: "Medical helicopter operations involve life-and-death decisions creating pressure to fly in marginal conditions. These cases require investigating whether flights were medically necessary, weather-related decisions, pilot fatigue, and equipment failures. Hospital liability may exist for flight dispatch decisions. We evaluate all aspects of medical helicopter operations."
    },
    {
      question: "What compensation is available for spinal cord injuries from aviation accidents?",
      answer: "Spinal cord injuries from aviation accidents often result in paralysis requiring lifetime care costing millions. Compensation includes medical expenses, rehabilitation, adaptive equipment, home modifications, attendant care, lost earning capacity, and pain and suffering. We work with life care planners and economists to calculate comprehensive damages for spinal cord injuries."
    },
    {
      question: "Can I sue if the aviation accident was caused by hijacking or terrorism?",
      answer: "Terrorism creates complex liability issues involving security failures, government intelligence, and criminal acts. While terrorists are primarily responsible, airlines and airports may be liable for security negligence. The September 11th Victim Compensation Fund provides alternative recovery. We evaluate all available compensation sources for terrorism-related aviation accidents."
    },
    {
      question: "What if the pilot was flying under the influence of prescription medications?",
      answer: "Pilots taking prescription medications must report them to the FAA and ensure they don't impair flying ability. Unreported medications or flying while impaired creates liability. We investigate pilot medical records, prescription histories, and FAA medical certificates to determine whether medication impairment contributed to accidents."
    },
    {
      question: "How long does it take to resolve an aviation accident case?",
      answer: "Aviation accident cases typically take 18 months to 3 years due to complexity involving NTSB investigations, multiple defendants, technical issues, and extensive discovery. International cases may take longer. However, we often secure partial settlements or advances for immediate needs. Our efficient approach minimizes delays while maximizing compensation."
    },
    {
      question: "What if the aviation accident involved aerial firefighting or emergency services?",
      answer: "Aerial firefighting accidents involve unique risks and liability issues including government contractor status, emergency operations, and dangerous conditions. These operators often have governmental immunity limitations. We navigate these complexities, identifying available claims while respecting the heroic nature of emergency aviation operations."
    },
    {
      question: "Can I file a wrongful death claim if my family member died as a passenger?",
      answer: "Airline passengers' families can file wrongful death claims against responsible parties including airlines, manufacturers, and maintenance providers. Compensation includes lost financial support, funeral expenses, loss of companionship, and grief and sorrow damages. California allows spouses, children, and dependent parents to file wrongful death claims."
    },
    {
      question: "What happens if the aviation accident involved a government aircraft but I'm a civilian?",
      answer: "Civilian injuries from government aircraft accidents may create federal liability under the Federal Tort Claims Act despite governmental immunity. Military contractors may also be liable. We navigate federal claim procedures, sovereign immunity exceptions, and contractor liability to secure compensation for civilian victims of government aviation accidents."
    },
    {
      question: "How do aviation accidents involving private airstrips differ?",
      answer: "Private airstrip accidents involve liability issues for airstrip owners, operators, and maintainers. These facilities may lack professional oversight and maintenance standards. Runway conditions, obstacle clearance, and lighting adequacy become critical factors. We investigate airstrip design, maintenance, and compliance with safety standards for private aviation facilities."
    },
    {
      question: "What role does aircraft age play in aviation accident liability?",
      answer: "Older aircraft require more intensive maintenance and may have outdated safety systems. Age alone doesn't create liability, but inadequate maintenance, obsolete equipment, or failure to retrofit safety improvements may. We investigate whether aircraft age contributed to accidents through maintenance failures or outdated safety technology."
    },
    {
      question: "Can I sue if I was injured during aircraft boarding or deplaning?",
      answer: "Boarding and deplaning injuries create airline and airport liability through premises liability, common carrier duties, and operational negligence. These accidents often involve jetbridge malfunctions, slip and falls, or inadequate assistance. We pursue all responsible parties for ground operation injuries occurring during the boarding process."
    },
    {
      question: "What if the aviation accident involved cargo or freight operations?",
      answer: "Cargo aircraft accidents involve specialized liability issues including hazardous materials, loading procedures, and cargo securement. These operations may have different safety standards and insurance coverage. We investigate cargo loading, weight distribution, hazardous materials handling, and operational procedures specific to cargo aviation accidents."
    },
    {
      question: "How do aviation accident settlements compare to trial verdicts?",
      answer: "Aviation accident settlements often exceed trial verdicts due to litigation costs, time delays, and appeal risks. Defendants prefer confidential settlements avoiding public scrutiny. However, strong cases may achieve higher trial verdicts. We evaluate settlement offers against trial potential, advising whether settlement or trial maximizes your compensation."
    }
  ];

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <SEO 
        title="California Aviation Accident Attorneys | Airplane & Helicopter Crash Lawyers"
        description="Experienced California aviation accident attorneys specializing in airplane crashes, helicopter accidents, and aviation law. Former defense attorney. Free consultation."
        keywords="California aviation accident attorney, airplane crash lawyer, helicopter accident attorney, aviation law firm, aircraft accident compensation"
        canonical="https://www.trembachlawfirm.com/practice-areas/aviation-accidents"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Aviation Accident Attorneys",
          "description": "California aviation accident law firm representing airplane and helicopter crash victims",
          "url": "https://www.trembachlawfirm.com/practice-areas/aviation-accidents",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Aviation Accident Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Commercial Airline Accident Representation"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Private Plane Crash Legal Services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service", 
                  "name": "Helicopter Accident Litigation"
                }
              }
            ]
          }
        }}
      />
      {/* 3D Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="back-layer absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 transform-gpu" style={{ transform: 'translateZ(-500px)' }}></div>
        <div className="mid-layer absolute inset-0 bg-gradient-to-tr from-accent/5 to-primary/5 transform-gpu" style={{ transform: 'translateZ(-250px)' }}></div>
        <div className="front-layer absolute inset-0 bg-gradient-to-bl from-secondary/5 to-accent/5 transform-gpu" style={{ transform: 'translateZ(-100px)' }}></div>
      </div>

      <GoBack fallbackPath="/" />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat parallax-element"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Aviation Accident Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/aviation/case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Aviation Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When aviation disasters strike, you need experienced advocates who understand the complexities of airplane and helicopter crashes. Aviation accidents require specialized expertise navigating federal regulations, NTSB investigations, and complex technical evidence that determines who is responsible for your devastating losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency and complexity of aviation accident cases. With our former defense attorney experience, we know how airlines and manufacturers defend these cases and use this insider knowledge to maximize your compensation while you focus on recovery and time with family.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary border-primary hover:bg-primary hover:text-white">
                    Learn More About Our California Aviation Practice
                    {expandedSections.overview ? <ChevronUp className="text-current" /> : <ChevronDown className="text-current" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="aviation-card glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Plane className="w-5 h-5 mr-2 text-primary" />
                          Aviation Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team includes former pilots, mechanics, and investigators who understand technical complexities while compassionately supporting families after traumatic aviation losses.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="aviation-card glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Coverage
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We handle aviation accidents throughout California, from LAX commercial disasters to Central Valley crop duster crashes, with comprehensive knowledge of federal and state aviation law.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Aviation Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-primary">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending aviation companies provides unique insights into corporate defense strategies and liability theories.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-primary">Rapid Response Team</h4>
                          <p className="text-sm text-muted-foreground">We dispatch investigators to accident sites immediately to preserve critical evidence before it's lost or destroyed by weather and cleanup crews.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-primary">Technical Resources</h4>
                          <p className="text-sm text-muted-foreground">Our network includes leading aviation experts, accident reconstructionists, and medical specialists who provide crucial testimony in complex cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold text-primary">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We advance all costs including investigations, experts, and litigation expenses - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Aviation Accident Representation</h3>
                    <p>
                      Aviation accidents in California involve complex federal regulations, NTSB investigations, and technical evidence that requires specialized expertise. From commercial airline disasters to private plane crashes, helicopter tour accidents to military aviation incidents, we have the resources and experience to handle any aviation case.
                    </p>
                    
                    <p>
                      California's extensive aviation industry includes major airports like LAX, SFO, and San Diego, along with thousands of smaller airports serving general aviation. Our clients have been injured in accidents involving:
                    </p>
                    
                    <ul>
                      <li>Commercial airline crashes and emergency landings</li>
                      <li>Private plane and corporate jet accidents</li>
                      <li>Helicopter tours and medical transport crashes</li>
                      <li>Military aircraft accidents at bases throughout California</li>
                      <li>Agricultural aviation and crop dusting accidents</li>
                      <li>Flight training and air show accidents</li>
                    </ul>
                    
                    <p>
                      We investigate every potential cause and responsible party to ensure maximum compensation. This comprehensive approach often results in higher settlements as we identify multiple defendants and pursue claims through various legal channels including product liability, premises liability, and wrongful death actions.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Aviation Accident Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your aviation accident case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        className="bg-background border-border text-foreground"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Accident Type</label>
                      <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                        <SelectTrigger className="bg-background border-border text-foreground">
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="commercial-airline">Commercial Airline Crash</SelectItem>
                          <SelectItem value="private-plane">Private Plane Accident</SelectItem>
                          <SelectItem value="helicopter">Helicopter Crash</SelectItem>
                          <SelectItem value="military-aircraft">Military Aircraft Accident</SelectItem>
                          <SelectItem value="air-ambulance">Air Ambulance Crash</SelectItem>
                          <SelectItem value="charter-flight">Charter Flight Accident</SelectItem>
                          <SelectItem value="flight-training">Flight Training Accident</SelectItem>
                          <SelectItem value="agricultural">Agricultural Aviation</SelectItem>
                          <SelectItem value="other">Other Aviation Accident</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Aviation Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Aviation Accident */}
            <section id="accident-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After an Aviation Accident</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="aviation-card glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      Immediate Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-green-700">• Ensure safety and seek immediate medical attention</p>
                    <p className="text-green-700">• Report the accident to authorities (FAA and NTSB)</p>
                    <p className="text-green-700">• Document everything - photos, injuries, witness information</p>
                    <p className="text-green-700">• Preserve all tickets, boarding passes, and travel documents</p>
                  </CardContent>
                </Card>
                
                <Card className="aviation-card glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Never Do This
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-red-700">• Don't give statements to airline representatives</p>
                    <p className="text-red-700">• Don't sign any documents without legal counsel</p>
                    <p className="text-red-700">• Don't accept quick settlement offers</p>
                    <p className="text-red-700">• Don't delay in contacting an aviation attorney</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.accidentSteps} onOpenChange={() => toggleSection('accidentSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary border-primary hover:bg-primary hover:text-white">
                    Learn More About Post-Accident Steps
                    {expandedSections.accidentSteps ? <ChevronUp className="text-current" /> : <ChevronDown className="text-current" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Critical Evidence Preservation</h3>
                    <p>
                      Aviation accidents require immediate action to preserve evidence before it's lost or destroyed. Airlines have rapid response teams protecting their interests, so you need legal representation immediately to ensure evidence preservation.
                    </p>
                    
                    <h4>Essential Evidence Includes:</h4>
                    <ul>
                      <li>Flight data and cockpit voice recorders</li>
                      <li>Maintenance logs and inspection records</li>
                      <li>Pilot training and medical records</li>
                      <li>Weather data and air traffic control communications</li>
                      <li>Witness statements and contact information</li>
                      <li>Photographs and videos of the accident scene</li>
                      <li>Medical records documenting all injuries</li>
                      <li>Wreckage analysis before removal</li>
                    </ul>

                    <h3>Understanding Your Rights</h3>
                    <p>
                      Aviation accidents involve complex liability issues with multiple potential defendants. Understanding your rights is crucial to securing maximum compensation:
                    </p>
                    
                    <ul>
                      <li><strong>Statute of Limitations:</strong> California generally allows two years, but government claims require six-month notice</li>
                      <li><strong>International Flights:</strong> Montreal Convention may limit damages and affect jurisdiction</li>
                      <li><strong>Multiple Defendants:</strong> Airlines, manufacturers, maintenance providers, airports may all share liability</li>
                      <li><strong>No-Fault Compensation:</strong> Some aviation insurance provides immediate compensation regardless of fault</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Types of Aviation Accidents */}
            <section id="accident-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Aviation Accidents We Handle</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  Our aviation accident team handles all types of aircraft accidents throughout California, from major commercial airline disasters to private plane crashes. Each type of aviation accident presents unique legal challenges requiring specialized expertise.
                </p>
              </div>

              <Collapsible open={expandedSections.accidentTypes} onOpenChange={() => toggleSection('accidentTypes')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary border-primary hover:bg-primary hover:text-white">
                    See All Aviation Accident Types We Handle
                    {expandedSections.accidentTypes ? <ChevronUp className="text-current" /> : <ChevronDown className="text-current" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Commercial Airline Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Major airline crashes involving carriers like United, American, Delta, Southwest, and international airlines require extensive resources to investigate and litigate. These cases often involve hundreds of victims, complex federal regulations, and battles with well-funded corporate legal teams.</p>
                      </CardContent>
                    </Card>

                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Private Plane Crashes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Small aircraft accidents including Cessna, Piper, Beechcraft, and other general aviation crashes often result from pilot error, mechanical failure, or weather conditions. These cases require investigating pilot qualifications, maintenance records, and ownership structures.</p>
                      </CardContent>
                    </Card>

                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Helicopter Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Helicopter crashes from tour operations, medical transport, news gathering, and private flights present unique challenges. The complexity of helicopter mechanics and higher accident rates require specialized expertise in rotor failures, transmission problems, and pilot spatial disorientation.</p>
                      </CardContent>
                    </Card>

                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Military Aviation Accidents</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Service members and civilians injured in military aircraft accidents face unique legal challenges including the Feres Doctrine and government contractor defense. We navigate these complexities for veterans, families, and civilian victims of military aviation accidents.</p>
                      </CardContent>
                    </Card>

                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Air Ambulance & Medical Transport</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Medical helicopter and fixed-wing ambulance crashes devastate families already dealing with medical emergencies. These cases involve complex liability between medical providers, aviation operators, and maintenance companies during critical life-saving missions.</p>
                      </CardContent>
                    </Card>

                    <Card className="aviation-card">
                      <CardHeader>
                        <CardTitle className="text-primary">Sightseeing & Tour Aircraft</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Tourist helicopter and airplane crashes in California's scenic areas often involve inadequate safety measures, pushing weather limits for profit, and inexperienced pilots. Tour operators frequently use liability waivers that we challenge when negligence causes accidents.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Additional Aviation Accidents We Handle:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Agricultural Aviation</h4>
                        <p className="text-sm">Crop duster and agricultural aircraft accidents involving low-altitude operations, chemical exposure, and wire strikes.</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Experimental Aircraft</h4>
                        <p className="text-sm">Amateur-built and experimental aircraft crashes requiring investigation of construction quality and design modifications.</p>
                      </div>
                      <div className="bg-muted p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Seaplane Accidents</h4>
                        <p className="text-sm">Water landing accidents combining aviation and maritime law complexities in California's lakes and coastal waters.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Aviation Accident Legal Process</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  Aviation accident litigation involves complex federal regulations, NTSB procedures, and multiple defendants requiring specialized legal expertise. Our systematic approach ensures no stone is left unturned in pursuing maximum compensation.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary border-primary hover:bg-primary hover:text-white">
                    Understanding the Aviation Legal Process
                    {expandedSections.legalProcess ? <ChevronUp className="text-current" /> : <ChevronDown className="text-current" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="space-y-8">
                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 1: Immediate Investigation</h3>
                      <p>Aviation accidents require immediate action to preserve evidence before it's lost or destroyed. We dispatch investigators to accident sites, coordinate with NTSB and FAA officials, and document wreckage before removal. Our rapid response ensures critical evidence preservation.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 2: Identifying All Liable Parties</h3>
                      <p>Aviation accidents typically involve multiple defendants including airlines, aircraft owners, operators, pilots, maintenance facilities, manufacturers, component suppliers, airports, and government entities. We investigate all potential sources of liability and compensation.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 3: NTSB Investigation Coordination</h3>
                      <p>While NTSB conducts independent investigations, we monitor their progress and conduct parallel investigations focused on legal liability. NTSB findings aren't admissible in court, so we develop independent evidence for legal proceedings.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 4: Expert Witness Development</h3>
                      <p>Aviation cases require specialized experts including accident reconstructionists, meteorologists, human factors specialists, maintenance experts, and aviation economists. We maintain relationships with leading experts who provide crucial testimony.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 5: Discovery and Evidence Analysis</h3>
                      <p>Extensive discovery includes depositions, document production, aircraft inspections, and prior incident review. We aggressively pursue all evidence while fighting defendants' attempts to hide damaging information through protective orders.</p>
                    </div>

                    <div className="border-l-4 border-primary pl-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">Phase 6: Settlement Negotiations or Trial</h3>
                      <p>Most aviation cases settle through intensive negotiations involving multiple defendants with varying liability exposure. When settlement isn't possible, we prepare meticulously for trial with compelling evidence and expert testimony.</p>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Aviation Accident FAQ</h2>
              <p className="text-lg mb-8">Answers to your important questions about airplane and helicopter crash cases in California.</p>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="aviation-card">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="text-primary">{faq.question}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      {expandedFaq === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Aviation Accident Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="aviation-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Calculator className="w-5 h-5 mr-2" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Estimate potential compensation for your aviation accident case based on California law and industry standards.</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/aviation/compensation-calculator'}
                    >
                      Calculate My Case Value
                    </Button>
                  </CardContent>
                </Card>

                <Card className="aviation-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Legal Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Comprehensive guide to aviation accident law, your rights, and what to expect during the legal process.</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/aviation/medical-guidance'}
                    >
                      Access Medical Guide
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Time Limits Section */}
            <section className="content-section mb-12 bg-red-50 p-8 rounded-lg border-l-4 border-red-600">
              <h2 className="text-3xl font-bold text-red-600 mb-4">Don't Wait - Time Limits Apply for California Aviation Accidents</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-4">
                  California aviation accident cases have strict deadlines that can permanently bar your claim if missed. While most personal injury cases allow two years, aviation accidents often involve government entities requiring much shorter notice periods.
                </p>
                <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-semibold text-red-600 mb-3">Critical Deadlines:</h3>
                  <ul className="space-y-2">
                    <li><strong>Government Claims:</strong> 6 months notice requirement</li>
                    <li><strong>International Flights:</strong> 2 years under Montreal Convention</li>
                    <li><strong>Personal Injury/Wrongful Death:</strong> Generally 2 years</li>
                    <li><strong>Product Liability:</strong> May extend to 10 years</li>
                  </ul>
                </div>
                <p className="text-lg font-semibold text-red-600">
                  Don't let time run out on your family's right to compensation. Contact us immediately for a free consultation to protect your claim.
                </p>
                <div className="mt-6">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg mr-4"
                    onClick={() => window.location.href = '/aviation/case-evaluation'}
                  >
                    Start My Free Case Evaluation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4 text-lg"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    Call (818) 123-4567
                  </Button>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Exactly matching Mesothelioma sticky structure */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                  <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                      <h3 className="text-xl font-bold">Start Your Case</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/schedule-consultation'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/aviation/case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limit</h4>
                      <p className="text-sm text-muted-foreground">2 years from injury in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost to discuss your case</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Aviation Coverage */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Aviation Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p>• Commercial Airlines</p>
                    <p>• Private Aircraft</p>
                    <p>• Helicopter Accidents</p>
                    <p>• Charter Flights</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationAccidents;