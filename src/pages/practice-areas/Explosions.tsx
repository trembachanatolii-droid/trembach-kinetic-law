import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
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
  Zap,
  Home,
  HardHat,
  Factory,
  Flame
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/explosions-hero-bg.jpg';
import sidebarImage from '@/assets/explosions-sidebar.jpg';
import medicalProcessImage from '@/assets/explosions-medical-process.jpg';
import legalProcessImage from '@/assets/explosions-legal-process.jpg';
import exposureSitesImage from '@/assets/california-explosion-sites.jpg';
import medicalImage from '@/assets/explosions-medical-facility.jpg';
import compensationImage from '@/assets/explosions-compensation-calculator.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Explosions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    explosionDate: '',
    explosionType: '',
    location: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER EXPLOSION', icon: AlertTriangle },
    { id: 'injury-types', label: 'TYPES OF EXPLOSION INJURIES', icon: Stethoscope },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

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
    // Handle form submission - redirect to case evaluation
    window.location.href = '/practice-areas/explosions/case-evaluation';
  };

  const faqData = [
    {
      question: "What should I do immediately after an explosion accident?",
      answer: "Seek emergency medical attention immediately, even if injuries aren't obvious - blast injuries often have delayed symptoms. Document everything possible including photos, witness contacts, and your recollection of events. Don't give recorded statements to insurance companies. Report the incident to authorities and keep all documentation. Contact an explosion accident attorney immediately to preserve evidence and protect your rights. Never return to the explosion site without clearance as secondary explosions or structural collapse may occur."
    },
    {
      question: "How much compensation can I receive for explosion injuries?",
      answer: "Explosion injury compensation varies greatly based on injury severity, medical costs, lost income, and pain and suffering. Severe burn injuries often result in multi-million dollar settlements due to extensive treatment needs and permanent disfigurement. Brain injuries may warrant higher compensation due to lifetime care requirements. Cases involving corporate negligence or safety violations typically yield larger settlements. Each case is unique, requiring thorough evaluation of all damages."
    },
    {
      question: "Who can be held liable for explosion accidents?",
      answer: "Multiple parties often share liability including property owners who failed to maintain safe conditions, gas companies that ignored leak reports, manufacturers of defective equipment, contractors who violated safety protocols, chemical companies that improperly stored hazardous materials, and employers who violated OSHA standards. Each potentially liable party typically has separate insurance coverage, increasing total available compensation."
    },
    {
      question: "What if the explosion happened at my workplace?",
      answer: "While workers' compensation provides some benefits, it doesn't fully compensate catastrophic explosion injuries. You may have additional claims against third parties like equipment manufacturers, contractors, property owners, or chemical suppliers. If your employer committed serious safety violations, additional remedies may be available. We coordinate with workers' comp while pursuing third-party claims for full compensation including pain and suffering not covered by workers' comp."
    },
    {
      question: "How long do I have to file an explosion injury lawsuit in California?",
      answer: "California generally allows two years from the injury date to file personal injury lawsuits, but important exceptions exist. Government entity claims require filing within six months. Product liability claims have two years from when you discovered or should have discovered the defect. Minor children have extended deadlines. Some toxic exposure claims have different limitations periods. Don't risk missing deadlines - contact us immediately for free consultation to ensure timely filing."
    },
    {
      question: "What types of explosion injuries are compensable?",
      answer: "All explosion-related injuries are potentially compensable including primary blast injuries (blast lung, TBI, hearing loss), secondary injuries from flying debris, burns and thermal injuries, toxic inhalation injuries, psychological trauma and PTSD, and any other physical or emotional harm caused by the explosion. Even seemingly minor injuries like tinnitus or mild traumatic brain injury can have long-term consequences warranting compensation."
    },
    {
      question: "What if I was partially at fault for the explosion?",
      answer: "California's pure comparative negligence law allows recovery even if you're partially at fault, though damages reduce by your fault percentage. For example, if you're 20% at fault for a $1 million claim, you'd recover $800,000. Insurance companies exaggerate victim fault to reduce payouts. We fight these tactics by showing defendants' negligence was the primary cause. Most explosion victims bear no fault - defendants just claim otherwise to avoid responsibility."
    },
    {
      question: "Do I need an attorney for my explosion injury case?",
      answer: "Explosion cases are extremely complex, requiring technical expertise, extensive resources, and aggressive advocacy against well-funded defendants. Insurance companies immediately deploy teams of adjusters, investigators, and attorneys to minimize liability. Without experienced legal representation, you'll be at a severe disadvantage. Our contingency fee structure means no upfront costs - we only get paid when we win your case."
    },
    {
      question: "What evidence is important in explosion cases?",
      answer: "Critical evidence includes scene photos and videos, witness statements, medical records documenting all injuries, fire department and police reports, regulatory inspection reports, maintenance and repair records, prior complaints or incidents, surveillance footage, and physical evidence from the scene. Time is critical as evidence quickly disappears. We immediately send investigators and experts to preserve evidence before it's lost, destroyed, or contaminated."
    },
    {
      question: "Can I recover for emotional trauma from an explosion?",
      answer: "Yes, psychological injuries including PTSD, anxiety, depression, and other emotional trauma are compensable in explosion cases. The sudden, violent nature of explosions commonly causes severe psychological trauma requiring extensive treatment. Even those without physical injuries may recover for purely emotional distress in certain circumstances. We work with psychiatrists and psychologists to document psychological injuries and treatment needs."
    },
    {
      question: "What about medical bills while my case is pending?",
      answer: "We help arrange medical treatment on a lien basis, meaning providers wait for payment until case resolution. Health insurance, if available, should be used but we protect against subrogation claims. We negotiate with medical providers to reduce bills, maximizing your net recovery. Never let inability to pay prevent you from getting necessary treatment - we ensure you receive proper medical care while protecting your financial interests throughout the case."
    },
    {
      question: "How are gas explosion cases different from other explosions?",
      answer: "Gas explosions often involve utility company liability for distribution system failures, inadequate odorant, or delayed leak response. Strict regulations govern gas system maintenance, leak surveys, and emergency response. Property owners have duties to report suspected leaks and maintain gas appliances. These cases often reveal systemic safety failures and prior incidents supporting negligence claims. Public Utilities Commission oversight provides additional evidence sources."
    },
    {
      question: "What are blast injuries and how are they unique?",
      answer: "Blast injuries result from explosion pressure waves causing unique damage patterns. Primary blast injuries affect air-filled organs (lungs, ears, intestines) through overpressure. Secondary injuries come from flying debris. Tertiary injuries occur when victims are thrown by blast wind. Quaternary injuries include burns and toxic exposures. These injuries often have delayed presentation, requiring immediate medical evaluation even without obvious trauma."
    },
    {
      question: "Can I sue if the explosion was caused by a criminal act?",
      answer: "Yes, even criminal explosions may create civil liability for property owners, security companies, or others who failed to prevent foreseeable crimes. Inadequate security, ignored threats, or negligent handling of dangerous materials can create liability despite criminal acts. Crime victim compensation funds may provide additional resources. We pursue all available compensation sources while you focus on recovery."
    },
    {
      question: "What if the explosion destroyed all my belongings?",
      answer: "Property damage from explosions is fully compensable including structure damage, personal belongings, vehicles, and other property. We help document losses through photos, receipts, and replacement costs. Sentimental items like family photos or heirlooms may warrant additional compensation. Business property, inventory, and equipment losses are recoverable. Temporary housing costs during repairs or rebuilding are included."
    },
    {
      question: "How long does an explosion injury case take?",
      answer: "Case duration depends on injury severity, number of parties, and case complexity. Simple cases with clear liability may settle in months. Complex cases involving multiple defendants, severe injuries, and disputed liability may take years. We push for quick resolution while ensuring full compensation. Rushing settlements often leaves money on the table. Most cases settle without trial, but we prepare every case for trial to maximize leverage."
    },
    {
      question: "What are Cal/OSHA violations and how do they affect my case?",
      answer: "Cal/OSHA violations provide powerful evidence of negligence in explosion cases. Process Safety Management standards, hazard communication requirements, and emergency response protocols create specific duties. Violations shown through citations, inspection reports, or accident investigations establish negligence per se - automatic breach of duty. Prior violations show patterns of safety disregard supporting punitive damages."
    },
    {
      question: "Can family members recover if they witnessed the explosion?",
      answer: "California allows bystander emotional distress claims for close family members who witness traumatic injuries to loved ones. Parents, spouses, children, and sometimes other close relatives may recover for psychological trauma from witnessing explosion injuries or death. Proximity to the event and sensory perception of trauma are required. These claims are separate from the victim's own claims."
    },
    {
      question: "What if the responsible company declares bankruptcy?",
      answer: "Bankruptcy doesn't necessarily prevent recovery. Insurance policies remain available despite bankruptcy. Other liable parties like property owners, contractors, or manufacturers may have separate coverage. Personal injury claims receive priority in bankruptcy proceedings. Parent companies or successors may have liability. We explore all recovery avenues including insurance, assets, bonds, and alternative liable parties."
    },
    {
      question: "Do I have a case if I don't remember the explosion?",
      answer: "Memory loss is common with explosion injuries due to traumatic brain injury or psychological trauma. Your lack of memory doesn't prevent recovery. We reconstruct events through witness statements, physical evidence, expert analysis, and official reports. Medical records document your injuries regardless of memory. Many explosion victims have no recollection yet recover full compensation."
    },
    {
      question: "What about explosions at apartment buildings or rental properties?",
      answer: "Landlords have heightened duties to maintain safe rental properties including gas systems, electrical wiring, and common areas. Failure to address known hazards, respond to complaints, or conduct required inspections creates liability. Property management companies, maintenance contractors, and owners may all share responsibility. Tenant negligence doesn't absolve landlords from maintaining safe conditions."
    },
    {
      question: "Can I recover punitive damages for an explosion injury?",
      answer: "Punitive damages are available when defendants acted with malice, oppression, or fraud. Conscious disregard for safety, falsified records, ignored warnings, or known dangerous conditions support punitive awards. Corporate decisions prioritizing profits over safety warrant punishment. California requires clear and convincing evidence of despicable conduct. Punitive damages can significantly exceed compensatory damages."
    },
    {
      question: "What's the difference between a gas leak and gas explosion claim?",
      answer: "Gas leak claims typically involve toxic exposure injuries without explosion - headaches, respiratory problems, or carbon monoxide poisoning. Explosion claims involve blast injuries from ignited gas. Both may involve utility company negligence, but damages differ significantly. Explosions cause catastrophic acute injuries while leaks may cause chronic health problems. Different experts and evidence are needed."
    },
    {
      question: "How do you prove an explosion was preventable?",
      answer: "We prove preventability through safety violations, industry standards, prior incidents, and expert testimony showing proper procedures would have prevented explosion. Maintenance records reveal deferred repairs. Training documents show inadequate preparation. Internal communications expose known risks ignored. Similar incidents at other facilities demonstrate foreseeability. Expert witnesses explain how standard safety measures prevent explosions."
    },
    {
      question: "What if multiple people were injured in the same explosion?",
      answer: "Multiple victim explosions may be handled individually or through coordinated litigation. Each victim has unique damages requiring separate evaluation. However, liability evidence and experts can be shared, reducing costs and strengthening cases. Insurance coverage limits may affect strategy when multiple claims exceed available funds. We coordinate with other victims' attorneys when beneficial while protecting each client's individual interests."
    },
    {
      question: "Are chemical plant explosions handled differently?",
      answer: "Chemical plant explosions involve complex regulations including Cal/OSHA Process Safety Management, EPA Risk Management Programs, and industry standards. Multiple chemicals may create toxic exposures beyond blast injuries. Emergency response failures can compound injuries. These facilities have extensive insurance and often prior violations supporting liability. Long-term health monitoring may be needed for chemical exposures."
    },
    {
      question: "What compensation is available for hearing loss from explosions?",
      answer: "Explosion-induced hearing loss, tinnitus, and vestibular damage warrant significant compensation. Impacts include communication difficulties, employment limitations, social isolation, and reduced quality of life. Hearing aids, cochlear implants, and assistive devices are expensive. Many victims require sign language training and vocational rehabilitation. Tinnitus causing constant ringing significantly impacts sleep and concentration."
    },
    {
      question: "Can I sue for an explosion at a construction site?",
      answer: "Construction site explosions create multiple liability theories. General contractors control site safety. Subcontractors may violate safety protocols. Equipment suppliers provide defective machinery. Property owners may rush dangerous work. Third parties like utility companies may contribute. Cal/OSHA construction standards establish specific duties. Violations create strong negligence evidence."
    },
    {
      question: "What if I suffered burns in an explosion?",
      answer: "Burn injuries from explosions require specialized medical care and create enormous damages. Treatment includes debridement, grafting, reconstruction, and scar management over years. Pain levels are extreme. Scarring causes disfigurement and functional limitations. Psychological impacts include PTSD, depression, and social anxiety. Burn center care is extremely expensive. Long-term complications include infections, contractures, and chronic pain."
    },
    {
      question: "How do you calculate future medical costs?",
      answer: "Life care planners work with treating physicians projecting all future medical needs including surgeries, therapy, medications, equipment, and care assistance. Costs are calculated using current prices with inflation adjustments. Plans address complications, age-related changes, and technology advances. Vocational impacts affecting insurance coverage are considered. Present value calculations determine lump-sum equivalents."
    },
    {
      question: "What if the explosion happened at a gas station?",
      answer: "Gas station explosions involve multiple potential defendants including station owners, operators, fuel suppliers, tank installers, and maintenance companies. Strict regulations govern underground storage tanks, dispensers, and vapor recovery systems. Common causes include tank leaks, static discharge, dispenser failures, and vehicle collisions with pumps. These facilities carry substantial insurance."
    },
    {
      question: "Can I recover if I was a first responder injured in an explosion?",
      answer: "First responders injured in explosions may have claims beyond workers' compensation. Property owners, chemical companies, or others whose negligence caused the explosion may be liable. Failure to warn about hazards, improper storage of chemicals, or secondary explosions from known dangers create liability. Federal programs may provide additional benefits."
    },
    {
      question: "What's the difference between high and low order explosives?",
      answer: "High-order explosives detonate supersonically creating devastating overpressure waves causing primary blast injuries. Examples include TNT, C-4, and ANFO. Low-order explosives deflagrate subsonic, burning rapidly without massive overpressure but causing thermal injuries and projectiles. Gunpowder and petroleum vapors are examples. High-order explosions cause unique blast injuries requiring specialized medical treatment."
    },
    {
      question: "What if I can't afford an attorney for my explosion case?",
      answer: "Our contingency fee structure means you pay nothing unless we win. We advance all case costs including investigations, experts, depositions, and trial expenses. No upfront payments or hourly bills. Our fee is a percentage of recovery, aligning our interests with yours - we only succeed when you do. Free consultation evaluates your case without obligation. Financial hardship never prevents explosion victims from obtaining quality legal representation."
    },
    {
      question: "How do pipeline explosions differ from other explosion cases?",
      answer: "Pipeline explosions involve federal regulations, interstate commerce issues, and often multiple states' laws. PHMSA (Pipeline and Hazardous Materials Safety Administration) oversight provides extensive regulatory framework. Pipeline operators must conduct integrity management, corrosion control, and leak surveys. Prior incidents, inspection reports, and violation history establish negligence patterns. These explosions often affect large areas with numerous victims."
    },
    {
      question: "What compensation exists for facial disfigurement from explosions?",
      answer: "Facial disfigurement warrants substantial compensation beyond medical costs for reconstruction. Impacts include social isolation, employment discrimination, relationship difficulties, and severe psychological distress. Multiple revision surgeries, scar treatments, and cosmetic procedures may provide improvement but rarely restore appearance. Psychological counseling addresses depression, social anxiety, and PTSD."
    },
    {
      question: "Can I sue if an e-cigarette or vape pen exploded?",
      answer: "E-cigarette and vape explosions from battery failures create product liability claims against manufacturers, distributors, and retailers. Lithium-ion battery defects, inadequate safety mechanisms, and poor design cause facial injuries, burns, and dental damage. Strict liability applies to defective products regardless of user conduct. Prior recalls, similar incidents, and inadequate warnings strengthen claims."
    },
    {
      question: "What if my loved one died in an explosion?",
      answer: "Wrongful death claims allow families to recover funeral expenses, lost financial support, and loss of companionship. California law permits spouses, children, dependents, and sometimes parents or siblings to seek compensation. Economic losses include the deceased's lost earnings, benefits, and household services value projected through retirement. Non-economic damages address profound emotional loss."
    },
    {
      question: "How do I know if I have a valid explosion injury claim?",
      answer: "Valid claims require showing someone's negligence or a product defect caused the explosion injuring you. Red flags indicating potential claims include prior incidents at the location, safety violations, ignored maintenance, gas odor complaints, and regulatory citations. Even without obvious negligence, investigation often reveals liability. Strict liability may apply regardless of fault."
    },
    {
      question: "What role do government agencies play in explosion investigations?",
      answer: "Multiple agencies investigate explosions including fire departments determining origin and cause, Cal/OSHA examining workplace safety violations, Chemical Safety Board investigating industrial accidents, ATF for criminal explosions, and Public Utilities Commission for gas explosions. These investigations provide valuable evidence but focus on regulatory compliance or criminal prosecution, not civil compensation."
    },
    {
      question: "What if I have pre-existing conditions worsened by the explosion?",
      answer: "California's 'eggshell plaintiff' rule means defendants take victims as they find them. Pre-existing conditions worsened by explosions are fully compensable. Defendants remain liable for aggravating prior injuries or making asymptomatic conditions symptomatic. Medical records differentiate new injuries from exacerbations. Expert testimony explains how explosion trauma worsened existing conditions."
    },
    {
      question: "Can I recover for property damage in addition to personal injuries?",
      answer: "Yes, explosion victims can recover for all property damage including homes, vehicles, personal belongings, and business property. Compensation includes repair or replacement costs, temporary housing, storage, and loss of use. Sentimental value items may warrant additional compensation. Business interruption losses, lost inventory, and equipment damage are recoverable."
    },
    {
      question: "What safety violations commonly cause explosions?",
      answer: "Common violations include inadequate ventilation allowing vapor accumulation, missing or disabled safety devices, improper hot work procedures, static electricity control failures, incompatible chemical storage, deficient emergency shutdown systems, inadequate training, and deferred maintenance. Cal/OSHA Process Safety Management violations, National Fire Protection Association code violations, and industry standard breaches provide strong negligence evidence."
    },
    {
      question: "How soon after an explosion should I contact an attorney?",
      answer: "Contact an attorney immediately, ideally within hours or days of the explosion. Evidence deteriorates quickly - explosion sites are cleaned, surveillance footage is overwritten, witnesses forget details or become unavailable. Defendants immediately deploy investigators and attorneys protecting their interests. Insurance companies push for quick, lowball settlements before victims understand their injuries' full extent."
    },
    {
      question: "What if the explosion was caused by amateur electrical work?",
      answer: "Unlicensed electrical work that causes explosions creates liability for the person who performed the work and potentially the property owner who allowed it. Most electrical work requires licensed contractors and permits. Homeowners who attempt electrical work may face liability for injuries to visitors or family members. Poor electrical installations can create spark sources igniting gas or vapors."
    },
    {
      question: "Are there special protections for workers in explosion-prone industries?",
      answer: "Workers in chemical plants, refineries, and other explosion-prone industries have heightened protections under Cal/OSHA standards including requirements for personal protective equipment, training, emergency response procedures, and safe work practices. Violations of these standards can strengthen liability claims against employers, contractors, and property owners who fail to provide required safety protections."
    },
    {
      question: "What compensation is available for wrongful death from explosion accidents?",
      answer: "Wrongful death compensation includes funeral and burial expenses, medical expenses before death, lost financial support, loss of companionship and guidance, and pain and suffering of survivors. California allows spouses, children, and other dependents to recover. The amount depends on the victim's age, earnings, and life expectancy. Punitive damages may also be available in cases of gross negligence."
    },
    {
      question: "How do explosion injury cases involving children differ?",
      answer: "Children's explosion injury cases often result in larger settlements due to their longer life expectancy, potential impact on future earnings, and the psychological trauma involved. Special consideration is given to developmental delays, scarring, and the need for ongoing psychological support. California courts are particularly protective of children's rights, and longer statute of limitations periods may apply."
    },
    {
      question: "What if the explosion occurred during demolition work?",
      answer: "Demolition explosions may involve improper handling of explosives, failure to clear gas lines, inadequate safety perimeters, or defective equipment. Demolition contractors must follow strict safety protocols and obtain proper permits. Property owners must ensure utilities are properly disconnected. Multiple parties including contractors, property owners, utility companies, and explosive suppliers may share liability."
    },
    {
      question: "Can I sue if the explosion was at a fireworks display?",
      answer: "Fireworks explosions create liability for manufacturers, distributors, display companies, and property owners. Professional displays require permits, insurance, and compliance with safety standards. Manufacturing defects, improper storage, inadequate safety distances, or failure to follow protocols can create liability. Both participants and spectators may have claims for injuries from fireworks accidents."
    },
    {
      question: "What about explosions caused by propane tanks or grills?",
      answer: "Propane tank explosions may result from manufacturing defects, improper filling, damaged valves, or user error. Product liability claims against manufacturers, distributors, and retailers are possible. Property owners using propane equipment have duties to maintain safe conditions. Restaurant and commercial users face additional regulations. These cases often involve multiple parties in the distribution and use chain."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Explosion Accident Lawyers | Gas Chemical Industrial Blast Attorney"
        description="California explosion accident attorney. Former defense lawyer fighting for blast injury victims. Gas explosions, chemical plants, industrial accidents. No fees unless we win. Call 24/7: (818) 123-4567"
        keywords="explosion accident lawyer California, gas explosion attorney, chemical plant explosion lawyer, industrial blast injury attorney, fire explosion lawsuit, workplace explosion compensation, blast injury lawyer"
        canonical="/practice-areas/explosions"
      />

      <GoBack fallbackPath="/practice-areas" />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Explosion Accident Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Catastrophic Blast Injury Specialists</span>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed text-white">
              Former defense attorney fighting for explosion victims. Gas explosions, chemical plants, industrial accidents. No fees unless we win.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/explosions/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Devastating Explosion Accidents Require Experienced Legal Advocates</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  <strong>Explosions represent some of the most catastrophic accidents in California, causing devastating injuries that forever alter victims' lives.</strong> Whether occurring in industrial facilities, residential buildings, construction sites, or commercial properties, explosion accidents unleash destructive forces that cause severe burns, traumatic brain injuries, blast lung syndrome, hearing loss, and psychological trauma.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the unique complexities of explosion cases and the overwhelming challenges facing blast injury victims. Our former defense attorney experience provides insider knowledge of how insurance companies and corporate defendants attempt to minimize liability and compensation in explosion cases.
                </p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <div className="flex">
                  <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-0.5" />
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-800">Critical Time Limits</h3>
                    <p className="text-yellow-700">California law imposes strict deadlines for filing explosion injury claims. Evidence deteriorates rapidly, witnesses become unavailable, and crucial documentation can be destroyed. Contact us immediately to preserve your rights and begin investigating your case.</p>
                  </div>
                </div>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Explosion Cases
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Flame className="w-5 h-5 mr-2 text-red-500" />
                          Types of Explosions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Gas explosions, chemical plant blasts, industrial accidents, construction site explosions, residential explosions, and transportation-related explosions each require specialized legal approaches.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-red-500" />
                          Unique Injury Patterns
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Blast injuries include primary overpressure injuries, secondary debris injuries, tertiary displacement injuries, and quaternary burns and toxic exposures requiring specialized medical expertise.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Explosion Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into corporate defense strategies in explosion cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Scale className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Technical Expertise</h4>
                          <p className="text-sm text-muted-foreground">We work with explosion experts, chemical engineers, and medical specialists to build powerful cases for maximum compensation.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Free Explosion Case Evaluation</h2>
                  <p className="text-lg mb-4">
                    Every explosion case is unique, requiring immediate investigation to preserve evidence and protect your rights. Our free case evaluation examines:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <ChevronDown className="w-4 h-4 text-primary mt-1 mr-2" />
                      <span>Cause and origin of the explosion</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown className="w-4 h-4 text-primary mt-1 mr-2" />
                      <span>All potentially liable parties</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown className="w-4 h-4 text-primary mt-1 mr-2" />
                      <span>Safety violations and regulatory breaches</span>
                    </li>
                    <li className="flex items-start">
                      <ChevronDown className="w-4 h-4 text-primary mt-1 mr-2" />
                      <span>Available insurance coverage</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <img 
                    src={medicalProcessImage} 
                    alt="Medical evaluation of explosion injuries" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Immediate Steps After an Explosion Accident</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-700 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      What You Should Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                      <span>Seek immediate medical attention even if you feel fine - blast injuries often have delayed symptoms</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                      <span>Document everything - photos, witness information, your recollection of events</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                      <span>Contact an experienced explosion attorney immediately to preserve evidence</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                      <span>Keep all medical records and documentation related to your injuries</span>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      What You Should Never Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✗</span>
                      <span>Never give recorded statements to insurance companies without an attorney</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✗</span>
                      <span>Don't return to the explosion site without official clearance</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✗</span>
                      <span>Don't accept quick settlement offers before understanding your full injuries</span>
                    </div>
                    <div className="flex items-start">
                      <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">✗</span>
                      <span>Don't delay seeking legal representation - evidence disappears quickly</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Injury Types Section */}
            <section id="injury-types" className="content-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Types of Explosion Injuries We Handle</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-500" />
                      Primary Blast Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Overpressure from explosion waves causes unique injuries to air-filled organs:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li>• Blast lung syndrome</li>
                      <li>• Traumatic brain injury</li>
                      <li>• Hearing loss and tinnitus</li>
                      <li>• Gastrointestinal injuries</li>
                      <li>• Eye injuries and vision loss</li>
                      <li>• Air embolism</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-red-500" />
                      Secondary Blast Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Flying debris and shrapnel cause penetrating trauma:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <li>• Penetrating wounds</li>
                      <li>• Fractures from debris</li>
                      <li>• Lacerations and cuts</li>
                      <li>• Internal organ damage</li>
                      <li>• Vascular injuries</li>
                      <li>• Compartment syndrome</li>
                    </ul>
                  </CardContent>
                </Card>

                <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      View All Explosion Injury Types
                      {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                          Tertiary Blast Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Victims thrown by blast wind suffer blunt trauma:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li>• Closed head injuries</li>
                          <li>• Spinal cord injuries</li>
                          <li>• Crush injuries</li>
                          <li>• Multiple fractures</li>
                          <li>• Internal bleeding</li>
                          <li>• Building collapse injuries</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Flame className="w-5 h-5 mr-2 text-red-500" />
                          Quaternary Blast Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Burns and toxic exposures from explosions:</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          <li>• Thermal burns (all degrees)</li>
                          <li>• Chemical burns</li>
                          <li>• Inhalation injuries</li>
                          <li>• Toxic chemical exposure</li>
                          <li>• Radiation exposure</li>
                          <li>• Crush injuries from collapse</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Building Your Explosion Injury Case</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Our Investigation Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold">Immediate Scene Investigation</h4>
                        <p className="text-sm text-muted-foreground">We dispatch experts to preserve evidence before it's lost or destroyed</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold">Expert Analysis</h4>
                        <p className="text-sm text-muted-foreground">Explosion engineers determine cause and establish liability</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold">Medical Documentation</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive medical evaluation and future care planning</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold">Maximum Recovery</h4>
                        <p className="text-sm text-muted-foreground">Aggressive negotiation and trial preparation for full compensation</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={legalProcessImage} 
                    alt="Legal process for explosion cases" 
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions About Explosion Cases</h2>
              
              <div className="space-y-4">
                {faqData.slice(0, 10).map((faq, index) => (
                  <Card key={index}>
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>

              <Collapsible open={expandedSections.allFaq} onOpenChange={() => toggleSection('allFaq')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mt-6">
                    View All {faqData.length} Questions
                    {expandedSections.allFaq ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  {faqData.slice(10).map((faq, index) => (
                    <Card key={index + 10}>
                      <CardHeader 
                        className="cursor-pointer"
                        onClick={() => setExpandedFaq(expandedFaq === (index + 10) ? null : (index + 10))}
                      >
                        <CardTitle className="flex items-center justify-between text-lg">
                          <span>{faq.question}</span>
                          {expandedFaq === (index + 10) ? <ChevronUp /> : <ChevronDown />}
                        </CardTitle>
                      </CardHeader>
                      {expandedFaq === (index + 10) && (
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-2xl font-bold mb-6">Explosion Injury Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Legal Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/case-evaluation">
                        <Scale className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/compensation-calculator">
                        <Clock className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/legal-guidance">
                        <Shield className="w-4 h-4 mr-2" />
                        Legal Guidance
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Medical Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/medical-guidance">
                        <Heart className="w-4 h-4 mr-2" />
                        Medical Guidance
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/treatment-centers">
                        <Building className="w-4 h-4 mr-2" />
                        Treatment Centers
                      </Link>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <Link to="/practice-areas/explosions/support-groups">
                        <Users className="w-4 h-4 mr-2" />
                        Support Groups
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section mb-12">
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Don't Wait - Time Limits Apply for California Explosion Cases</h2>
                    <p className="text-lg text-red-700 mb-6">
                      California law imposes strict deadlines for filing explosion injury claims. Evidence deteriorates quickly, and insurance companies begin building their defense immediately. The sooner you act, the stronger your case becomes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white" asChild>
                        <Link to="/practice-areas/explosions/case-evaluation">
                          Get Free Case Evaluation
                        </Link>
                      </Button>
                      <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                        <Link to="tel:8181234567">Call (818) 123-4567</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={sidebarImage} 
                    alt="California explosion case consultation" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <Button className="w-full" size="lg" asChild>
                      <Link to="tel:8181234567">
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/practice-areas/explosions/case-evaluation">
                        <Mail className="w-4 h-4 mr-2" />
                        Free Case Review
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/practice-areas/explosions/compensation-calculator">
                        <Clock className="w-4 h-4 mr-2" />
                        Compensation Calculator
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <div className="flex justify-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground">No Fees Unless We Win</p>
                  </div>
                  
                  <form onSubmit={handleFormSubmit} className="mt-6 space-y-3">
                    <Input 
                      type="date" 
                      placeholder="Explosion Date"
                      value={formData.explosionDate}
                      onChange={(e) => setFormData({...formData, explosionDate: e.target.value})}
                    />
                    <Select 
                      value={formData.explosionType}
                      onValueChange={(value) => setFormData({...formData, explosionType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Type of Explosion" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gas-explosion">Gas Explosion</SelectItem>
                        <SelectItem value="chemical-plant">Chemical Plant</SelectItem>
                        <SelectItem value="industrial-accident">Industrial Accident</SelectItem>
                        <SelectItem value="residential-explosion">Residential Explosion</SelectItem>
                        <SelectItem value="construction-site">Construction Site</SelectItem>
                        <SelectItem value="vehicle-explosion">Vehicle Explosion</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Select 
                      value={formData.location}
                      onValueChange={(value) => setFormData({...formData, location: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Where did it happen?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="workplace">Workplace</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="public-property">Public Property</SelectItem>
                        <SelectItem value="construction-site">Construction Site</SelectItem>
                        <SelectItem value="industrial-facility">Industrial Facility</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit" className="w-full">Get Started</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explosions;