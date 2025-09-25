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
  HardHat,
  Settings,
  Wrench
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/scaffolding-falls-hero-bg.jpg';
import sidebarImage from '@/assets/scaffolding-sidebar.jpg';
import diagnosisImage from '@/assets/scaffolding-medical.jpg';
import legalProcessImage from '@/assets/scaffolding-legal-clean.jpg';
import equipmentImage from '@/assets/scaffolding-equipment-updated.jpg';
import compensationImage from '@/assets/scaffolding-compensation.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ScaffoldingFalls: React.FC = () => {
  useScrollRestoration();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    accidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const goBackRef = useRef<HTMLButtonElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: Stethoscope },
    { id: 'diagnosis-process', label: 'INVESTIGATION PROCESS', icon: Heart },
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

      // Go Back button animation - fade in on scroll
      if (goBackRef.current) {
        gsap.set(goBackRef.current, { opacity: 0 });
        
        ScrollTrigger.create({
          trigger: heroRef.current,
          start: 'bottom 90%',
          end: 'bottom top',
          onEnter: () => gsap.to(goBackRef.current, { opacity: 1, duration: 0.3 }),
          onLeaveBack: () => gsap.to(goBackRef.current, { opacity: 0, duration: 0.3 })
        });
      }

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
    window.location.href = '/practice-areas/scaffolding-falls/case-evaluation';
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const faqData = [
    {
      question: "What should I do immediately after a scaffolding fall accident?",
      answer: "Seek immediate medical attention even if injuries seem minor - adrenaline can mask serious injuries. Report the accident to your supervisor and ensure an incident report is filed. Document everything: photograph the scaffolding, accident scene, your injuries, and safety equipment. Collect witness contact information. Do not admit fault or sign any documents beyond basic incident reports. Contact an experienced scaffolding accident attorney immediately to preserve evidence and protect your rights."
    },
    {
      question: "How long do I have to file a scaffolding accident lawsuit in California?",
      answer: "California's statute of limitations for personal injury claims is generally two years from the date of the accident. However, exceptions exist: if injuries aren't immediately apparent, the clock may start when injuries are discovered. Government entity claims require filing within six months. Workers' compensation claims must be reported to employers within 30 days and filed within one year. Time limits are strict, so contact an attorney immediately."
    },
    {
      question: "Can I sue if I'm already receiving workers' compensation benefits?",
      answer: "Yes, if third parties caused your scaffolding fall. Workers' compensation prevents suing your direct employer but doesn't bar claims against general contractors, subcontractors, equipment manufacturers, property owners, or scaffolding companies. Third-party claims can provide full wage replacement, pain and suffering damages, and punitive damages not available through workers' comp. Your employer may have a lien on third-party recoveries for benefits paid."
    },
    {
      question: "Who can be held liable for my scaffolding fall accident?",
      answer: "Multiple parties may be liable: general contractors responsible for overall site safety, scaffolding companies that erected or maintained the structure, equipment manufacturers if components were defective, property owners who retained control over safety, other subcontractors who created dangerous conditions, and safety companies responsible for training or inspection. Our investigation identifies all potentially liable parties to maximize your compensation."
    },
    {
      question: "What if the scaffolding collapse was caused by my own mistake?",
      answer: "California follows pure comparative negligence, allowing recovery even if you were partially at fault. Your compensation reduces by your percentage of fault. For example, if total damages are $1 million and you're found 20% at fault, you'd recover $800,000. Often, apparent 'worker error' results from inadequate training, defective equipment, or unsafe conditions created by others. We investigate thoroughly to minimize any fault attributed to you."
    },
    {
      question: "How much is my scaffolding fall case worth?",
      answer: "Case value depends on injury severity, liability strength, available insurance, lost wages, medical expenses, pain and suffering, and long-term impacts. Mild injuries might recover $50,000-200,000, while catastrophic injuries like paralysis or brain damage can exceed $5-15 million. We work with medical experts, life care planners, and economists to fully document your damages and maximize compensation. Each case is unique and requires individual evaluation."
    },
    {
      question: "What safety violations commonly cause scaffolding falls?",
      answer: "Common violations include: inadequate fall protection systems, missing or damaged guardrails, improper scaffold assembly, defective planking, insufficient bracing, overloading, using damaged components, inadequate access methods, poor weather protections, lack of training, missing safety equipment, and failure to inspect daily. Cal/OSHA requires specific safety measures that, when violated, create strong liability cases for injured workers."
    },
    {
      question: "Do I need an attorney for a scaffolding accident claim?",
      answer: "Absolutely. Scaffolding cases involve complex liability issues, multiple defendants, technical safety regulations, and substantial damages. Insurance companies deploy teams of lawyers and experts to minimize payouts. You need experienced legal representation to level the playing field, preserve evidence, identify all liable parties, and maximize compensation. Our former defense attorney experience gives us unique insight into insurance company tactics and strategies."
    },
    {
      question: "What evidence is important in scaffolding fall cases?",
      answer: "Critical evidence includes: accident scene photographs, scaffolding inspection records, safety training documentation, witness statements, OSHA reports and citations, equipment maintenance logs, weather conditions, project specifications, safety meeting minutes, and surveillance footage. Evidence deteriorates quickly - scaffolding is dismantled, witnesses disperse, and companies destroy records. Immediate legal action is essential to preserve crucial evidence."
    },
    {
      question: "Can I recover compensation if I was injured by falling objects from scaffolding?",
      answer: "Yes, both workers and pedestrians injured by falling objects have valid claims. Scaffolding users must secure tools and materials, provide toeboards, use safety nets, and warn people below. Struck-by injuries can cause severe head trauma, fractures, and death. We pursue claims against scaffold users, general contractors, and others responsible for maintaining safe conditions around scaffolding operations."
    },
    {
      question: "What types of scaffolding accidents are most common in California?",
      answer: "Most common types include: falls from working platforms due to missing guardrails, scaffold collapses from structural failures, plank failures causing workers to fall through, falls during assembly or dismantling, electrocution from power line contact, being struck by falling tools or materials, slips on wet or icy surfaces, and falls through unprotected openings. Each type requires different investigation approaches and liability theories."
    },
    {
      question: "How are scaffolding accident cases different from other construction accidents?",
      answer: "Scaffolding cases involve specialized regulations, multiple assembly components, temporary structures with inherent instability, height-related fall risks, and multiple parties responsible for design, assembly, inspection, and use. Technical expertise in scaffolding systems, OSHA standards, and engineering principles is essential. The temporary nature of scaffolding means evidence disappears quickly, making immediate investigation critical."
    },
    {
      question: "What should I know about Cal/OSHA scaffolding regulations?",
      answer: "Cal/OSHA requires scaffolds for work where permanent structures are less than 20 inches wide, permits for scaffolding over 36 feet, qualified person supervision, daily inspections, specific load limits, proper access methods, fall protection at 10+ feet, and comprehensive safety training. Violations of these regulations create strong evidence of negligence in injury claims. We're experts in California scaffolding law and safety standards."
    },
    {
      question: "Can family members sue if someone dies in a scaffolding fall?",
      answer: "Yes, California's wrongful death statute allows surviving spouses, children, and dependents to recover funeral expenses, lost financial support, loss of companionship, and household services. Wrongful death claims can be filed against any party whose negligence contributed to the fatal fall. These cases require sensitive handling and comprehensive evaluation of the deceased's life expectancy, earning capacity, and family relationships."
    },
    {
      question: "What role do safety inspections play in scaffolding accident cases?",
      answer: "OSHA and Cal/OSHA require daily scaffolding inspections by competent persons before each work shift and after any incident that could affect safety. Inspection records, or lack thereof, provide crucial evidence of negligence. We analyze inspection documentation, interview inspectors, and determine whether proper safety protocols were followed. Missing or inadequate inspections often indicate systemic safety failures."
    },
    {
      question: "How do weather conditions affect scaffolding accident liability?",
      answer: "Employers must cease scaffolding work during dangerous weather conditions including high winds, storms, ice, and low visibility. Cal/OSHA prohibits work on scaffolds during winds exceeding 25 mph unless specifically designed for higher speeds. Failing to stop work or secure scaffolding during bad weather creates liability for resulting accidents. Weather-related scaffolding violations often involve inadequate planning and pressure to meet deadlines."
    },
    {
      question: "What compensation can I receive for scaffolding fall injuries?",
      answer: "Economic damages include medical expenses, lost wages, reduced earning capacity, vocational rehabilitation, home modifications, and ongoing care needs. Non-economic damages cover pain and suffering, emotional distress, loss of enjoyment of life, and disability. California has no caps on non-economic damages in personal injury cases. Punitive damages may be available for willful safety violations or egregious conduct."
    },
    {
      question: "How long does a scaffolding accident case take to resolve?",
      answer: "Case duration varies widely based on injury severity, liability complexity, and defendant cooperation. Simple cases may settle within 6-18 months, while complex cases with catastrophic injuries can take 2-4 years. We work to resolve cases as quickly as possible while ensuring maximum compensation. Early settlement offers are often inadequate and don't account for long-term consequences."
    },
    {
      question: "What if the scaffolding equipment was defective?",
      answer: "Product liability claims can be filed against manufacturers, distributors, and retailers of defective scaffolding components. Defects may include design flaws, manufacturing errors, inadequate warnings, or failure to meet safety standards. Product liability cases often result in significant compensation and don't require proving negligence - only that the product was unreasonably dangerous when used as intended."
    },
    {
      question: "Can I switch attorneys if I'm unhappy with my current representation?",
      answer: "Yes, you have the right to change attorneys at any time. We frequently take over scaffolding cases from attorneys who lack specialized experience in construction accidents. Our former defense attorney background and technical expertise often result in significantly better outcomes. We handle all transfer procedures and ensure continuity in your case."
    },
    {
      question: "What costs are involved in pursuing a scaffolding accident case?",
      answer: "We work on contingency fees, meaning you pay nothing unless we win your case. We advance all costs for investigation, expert witnesses, medical records, depositions, and trial preparation. Our fee is a percentage of your recovery, and we only get paid if you receive compensation. This arrangement allows injured workers to pursue claims regardless of their financial situation."
    },
    {
      question: "How do I prove my scaffolding fall was caused by safety violations?",
      answer: "We work with scaffolding safety experts, engineers, and OSHA specialists to analyze accident causes and identify violations. Evidence includes OSHA citations, safety inspection records, training documentation, industry standards, and expert testimony. Our technical team reconstructs accidents to demonstrate how safety violations directly caused your injuries."
    },
    {
      question: "What if I was working without proper documentation?",
      answer: "Immigration status doesn't affect your right to workers' compensation or personal injury claims in California. Undocumented workers are entitled to the same legal protections as other employees. We maintain strict confidentiality and focus on your legal rights rather than immigration issues. Your safety and compensation rights are protected regardless of documentation status."
    },
    {
      question: "Can I pursue a claim if I was injured while working for a subcontractor?",
      answer: "Yes, subcontractor employees can pursue third-party claims against general contractors, other subcontractors, property owners, and equipment manufacturers. The general contractor often has overall responsibility for site safety, creating liability for subcontractor injuries. We analyze all contractual relationships and safety responsibilities to identify liable parties."
    },
    {
      question: "What if my employer tries to cover up the scaffolding accident?",
      answer: "Employer cover-ups are unfortunately common and may constitute additional violations. We work to uncover the truth through independent investigation, witness interviews, document preservation, and OSHA reporting. Attempts to conceal accidents or intimidate witnesses can result in additional liability and punitive damages."
    },
    {
      question: "How do Cal/OSHA requirements differ from federal OSHA standards?",
      answer: "California maintains its own occupational safety program (Cal/OSHA) that often exceeds federal requirements. Cal/OSHA has specific scaffolding regulations, stricter enforcement, higher penalties, and additional worker protections. We're experts in both state and federal scaffolding standards and use the most stringent applicable requirements to build your case."
    },
    {
      question: "What if multiple workers were injured in the same scaffolding accident?",
      answer: "Mass scaffolding accidents often result in multiple lawsuits against the same defendants. We coordinate with other injured workers while maintaining individual representation. Collective action can strengthen liability arguments and increase pressure for fair settlements. Each worker's case is evaluated individually to ensure maximum compensation."
    },
    {
      question: "Can I be fired for filing a scaffolding accident claim?",
      answer: "California law prohibits retaliation against workers who file injury claims or report safety violations. Wrongful termination for exercising legal rights creates additional claims for lost wages, emotional distress, and punitive damages. We protect your employment rights while pursuing your injury claim."
    },
    {
      question: "What role do safety training records play in scaffolding cases?",
      answer: "Inadequate safety training is a common factor in scaffolding accidents. We review training records, curricula, attendance documentation, and competency testing. Lack of proper training creates liability for employers and demonstrates negligence. We work with safety experts to establish industry training standards and identify deficiencies."
    },
    {
      question: "How do insurance companies handle scaffolding accident claims?",
      answer: "Insurance companies use teams of lawyers, experts, and investigators to minimize payouts. They may dispute liability, claim pre-existing injuries, argue comparative fault, or pressure for quick settlements. Our former defense attorney experience gives us unique insight into insurance tactics, allowing us to counter their strategies effectively."
    },
    {
      question: "What if the scaffolding accident occurred on government property?",
      answer: "Government entity claims have special requirements including shorter filing deadlines (6 months), specific notice procedures, and potential immunity defenses. Public works projects often have additional safety requirements and oversight. We're experienced in government liability cases and understand the unique challenges involved."
    },
    {
      question: "Can I recover compensation for future medical expenses?",
      answer: "Yes, California law allows recovery for all reasonable future medical expenses related to your scaffolding injuries. We work with medical experts and life care planners to project your long-term treatment needs, rehabilitation requirements, and ongoing care costs. Future medical expenses often represent the largest component of catastrophic injury settlements."
    },
    {
      question: "What if the scaffolding accident was caused by design defects?",
      answer: "Design defect claims can be pursued against architects, engineers, and contractors responsible for scaffolding specifications. Design defects may include inadequate load calculations, improper materials specification, or failure to account for environmental conditions. These cases require technical experts to establish industry standards and identify deviations."
    },
    {
      question: "How do I document my injuries after a scaffolding fall?",
      answer: "Seek immediate medical attention and follow all treatment recommendations. Keep detailed records of medical appointments, treatments, medications, and symptoms. Document how injuries affect your daily activities, work capacity, and quality of life. Medical documentation forms the foundation of your damage claims and should be comprehensive and consistent."
    },
    {
      question: "What if I was partially responsible for the scaffolding accident?",
      answer: "California's pure comparative negligence system allows recovery even if you were partially at fault. Your compensation is reduced by your percentage of fault, but you can still recover substantial damages. We work to minimize any fault attributed to you by demonstrating how safety violations, inadequate training, or defective equipment contributed to your accident."
    },
    {
      question: "Can I pursue a claim if the scaffolding contractor is uninsured?",
      answer: "Uninsured contractors create challenges but don't eliminate your options. We identify all potentially liable parties, including general contractors, property owners, and equipment suppliers who may have insurance coverage. We also explore bond claims, personal assets, and alternative compensation sources to ensure recovery."
    },
    {
      question: "What if my scaffolding accident happened years ago?",
      answer: "California's statute of limitations may bar claims filed too late, but exceptions exist for delayed injury discovery or fraudulent concealment. Even if personal injury claims are time-barred, workers' compensation claims may still be available. Contact us immediately to evaluate your options - time limits are strictly enforced."
    },
    {
      question: "How do expert witnesses help in scaffolding accident cases?",
      answer: "Expert witnesses provide crucial testimony on industry standards, safety violations, accident causation, and injury consequences. We work with scaffolding engineers, safety experts, medical specialists, economists, and life care planners. Expert testimony often determines case outcomes and is essential for maximum compensation."
    },
    {
      question: "What if the general contractor blames the scaffolding subcontractor?",
      answer: "Finger-pointing between defendants is common in scaffolding cases. We pursue all potentially liable parties and let them fight over responsibility while ensuring your compensation. General contractors often retain overall safety responsibility even when subcontractors perform specific work. Our investigation establishes each party's role and liability."
    },
    {
      question: "Can I recover compensation for my family's losses?",
      answer: "Yes, California law allows recovery for loss of consortium (spousal companionship), family services, and emotional distress suffered by family members. Serious injuries affect entire families, and the law recognizes these losses. Family members may also recover for their own medical expenses related to the trauma of your accident."
    },
    {
      question: "What if the scaffolding accident was caused by rushed work schedules?",
      answer: "Schedule pressure that compromises safety creates liability for employers and general contractors. We investigate project timelines, deadline pressures, and whether safety shortcuts were taken to meet schedules. Evidence of rushing work or pressuring workers to ignore safety procedures strengthens liability arguments and may support punitive damages."
    },
    {
      question: "How do workplace safety violations affect my case?",
      answer: "OSHA and Cal/OSHA violations create strong evidence of negligence and provide blueprints for liability arguments. Violation citations, inspection reports, and penalty assessments demonstrate acknowledged safety failures. We use regulatory violations to establish duty, breach, and causation in your injury claim."
    },
    {
      question: "What if I need ongoing medical treatment for my scaffolding injuries?",
      answer: "We work with medical experts to develop comprehensive life care plans that account for all future treatment needs. This includes surgeries, rehabilitation, medications, equipment, and supportive care. Future medical expenses are included in settlement demands and trial presentations to ensure adequate compensation for lifelong care."
    },
    {
      question: "Can I pursue claims against multiple defendants?",
      answer: "Yes, scaffolding accidents often involve multiple liable parties including general contractors, subcontractors, equipment manufacturers, property owners, and safety companies. We pursue all responsible parties to maximize compensation and ensure adequate coverage for your damages. Joint liability often results in higher settlements."
    },
    {
      question: "What happens if the scaffolding company goes out of business?",
      answer: "Business closures don't necessarily eliminate liability. We investigate insurance coverage, bonding, successor liability, and personal guarantees. Assets may be available through dissolution proceedings or successor companies. We also pursue other liable parties to ensure compensation despite one defendant's unavailability."
    },
    {
      question: "How do I know if my attorney is qualified to handle scaffolding cases?",
      answer: "Look for attorneys with specific construction accident experience, technical knowledge of scaffolding systems, OSHA expertise, and proven results in similar cases. Our firm's former defense attorney background provides unique insights into how these cases are defended, giving us significant advantages in building winning strategies."
    },
    {
      question: "What if I can't afford to miss work for medical appointments and legal proceedings?",
      answer: "We understand the financial pressures injured workers face. We accommodate your schedule, handle proceedings efficiently, and work to secure interim financial support through workers' compensation or settlement advances. Your health and recovery take priority, and we minimize disruption to your recovery process."
    },
    {
      question: "Can I settle my case and still receive workers' compensation benefits?",
      answer: "Yes, but coordination is required. Your employer typically has a lien on third-party settlements for workers' compensation benefits paid. We negotiate lien reductions and structure settlements to maximize your net recovery while protecting future benefits. Medical care coordination is also important for ongoing treatment."
    },
    {
      question: "What if new injuries develop after my scaffolding accident settlement?",
      answer: "Settlements typically require releases that may bar future claims for the same incident. However, if new injuries are truly unforeseeable or result from different causes, additional claims may be possible. We carefully review settlement terms and advise on protecting rights for potential future complications."
    },
    {
      question: "How do I deal with bill collectors while my case is pending?",
      answer: "Medical providers often wait for case resolution, and we help coordinate payment arrangements. Workers' compensation should cover medical expenses, and health insurance may provide temporary coverage. We provide letters confirming pending litigation to help manage creditor demands while your case proceeds."
    },
    {
      question: "What should I do if insurance companies contact me directly?",
      answer: "Never provide statements or sign documents without attorney review. Insurance companies often seek early statements to limit liability or pressure for quick settlements. Refer all insurance contacts to our office and avoid discussing your accident, injuries, or treatment with anyone except your medical providers and legal team."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Scaffolding Falls Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorney Insight</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}
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

      {/* Go Back Button - positioned below hero and fades in on scroll */}
      <Button 
        ref={goBackRef}
        variant="ghost" 
        onClick={handleGoBack}
        className="fixed top-24 left-6 z-50 flex items-center gap-2 bg-black/30 text-foreground hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Scaffolding Falls Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a scaffolding fall in California, you're facing one of the most serious workplace hazards in the construction industry. With approximately 2.3 million construction workers regularly using scaffolds, the risk of catastrophic injury or death remains unacceptably high due to safety violations, defective equipment, and inadequate training.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency of scaffolding fall cases. With our former defense attorney experience and deep understanding of California safety regulations, we're prepared to fight for maximum compensation while you focus on recovery and time with family.
                </p>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <Card className="text-center p-4 bg-primary text-primary-foreground">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold">65%</div>
                    <div className="text-sm">of construction workers use scaffolds</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-primary text-primary-foreground">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold">4,500+</div>
                    <div className="text-sm">scaffold injuries annually</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-primary text-primary-foreground">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold">72%</div>
                    <div className="text-sm">due to plank or support failure</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-4 bg-primary text-primary-foreground">
                  <CardContent className="p-0">
                    <div className="text-3xl font-bold">36%</div>
                    <div className="text-sm">of construction fatalities from falls</div>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About California Scaffolding Fall Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <HardHat className="w-5 h-5 mr-2 text-primary" />
                          Construction Safety Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team understands California's complex scaffolding regulations, Cal/OSHA requirements, and the technical aspects of scaffolding system failures that cause catastrophic injuries.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Project Knowledge
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California's construction sites, major contractors, and the industry practices that lead to scaffolding accidents throughout the state.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into corporate defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">We understand evidence disappears quickly and take immediate action to preserve scaffolding components and accident scenes.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Technical Expertise</h4>
                          <p className="text-sm text-muted-foreground">Our team works with scaffolding engineers and safety experts to build compelling liability cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Scaffolding Fall Representation</h3>
                    <p>
                      Scaffolding fall cases in California involve complex technical, legal, and medical factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of safety violations to working with engineering experts who can clearly explain how scaffold failures caused your injuries.
                    </p>
                    
                    <p>
                      California's construction industry spans major metropolitan areas, with significant scaffolding use in:
                    </p>
                    
                    <ul>
                      <li>High-rise construction in Los Angeles, San Francisco, and San Diego</li>
                      <li>Bridge and infrastructure projects throughout the state</li>
                      <li>Refinery and industrial facility maintenance</li>
                      <li>Hospital and school construction projects</li>
                      <li>Commercial and residential developments</li>
                      <li>Seismic retrofitting and building renovations</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of liability to ensure no responsible party escapes accountability for your injuries. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including third-party liability claims, product liability actions, and premises liability cases.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your scaffolding accident better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Scaffolding Accident</label>
                      <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fall-from-scaffolding">Fall from Scaffolding</SelectItem>
                          <SelectItem value="scaffolding-collapse">Scaffolding Collapse</SelectItem>
                          <SelectItem value="struck-by-falling-object">Struck by Falling Object</SelectItem>
                          <SelectItem value="plank-failure">Plank Failure</SelectItem>
                          <SelectItem value="support-structure-failure">Support Structure Failure</SelectItem>
                          <SelectItem value="other-scaffolding-accident">Other Scaffolding Accident</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Diagnosis */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Scaffolding Fall</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-green-500 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-500 transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-500" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Seek immediate medical attention even if injuries seem minor</p>
                    <p>• Request all medical records and diagnostic reports</p>
                    <p>• Follow all treatment recommendations from specialists</p>
                    <p>• Document all symptoms and physical limitations</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-red-500 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-red-500 transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-500" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Document the accident scene and scaffolding</p>
                    <p>• Collect witness contact information</p>
                    <p>• Report the accident to your supervisor</p>
                    <p>• Contact an experienced scaffolding attorney immediately</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.diagnosisSteps} onOpenChange={() => toggleSection('diagnosisSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Protecting Your Rights
                    {expandedSections.diagnosisSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <img src={diagnosisImage} alt="Scaffolding safety evaluation process" className="w-full h-64 object-cover rounded-lg mb-6" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">✅ IMMEDIATE STEPS (Do These Now)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Get medical attention immediately</li>
                        <li>• Photograph the scaffolding and accident scene</li>
                        <li>• Get witness names and contact information</li>
                        <li>• Report the accident to your supervisor</li>
                        <li>• Keep all medical records and bills</li>
                        <li>• Contact a scaffolding accident attorney</li>
                        <li>• File workers' compensation claim</li>
                        <li>• Preserve all safety equipment involved</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3">❌ NEVER DO (Avoid These Actions)</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Don't admit fault for the accident</li>
                        <li>• Don't sign documents without attorney review</li>
                        <li>• Don't give recorded statements to insurance</li>
                        <li>• Don't delay medical treatment</li>
                        <li>• Don't return to work too early</li>
                        <li>• Don't settle quickly without legal advice</li>
                        <li>• Don't let evidence disappear</li>
                        <li>• Don't miss medical appointments</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-600 mb-2">⚠️ Critical Time Limits</h4>
                    <p className="text-sm">
                      California has strict deadlines for scaffolding accident claims. Workers' compensation claims must be reported within 30 days. Personal injury lawsuits generally must be filed within two years. Government claims require notice within six months. Evidence disappears quickly - scaffolding is dismantled, witnesses leave, and companies destroy records. Contact us immediately to protect your rights.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Investigation Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Scaffolding Accident Investigation Process</h2>
              
              <img src={equipmentImage} alt="Scaffolding safety equipment and investigation" className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-orange-500" />
                      Evidence Preservation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Critical evidence must be preserved immediately before it disappears:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Scaffolding components and connections</li>
                      <li>• Safety equipment and fall protection</li>
                      <li>• Inspection records and maintenance logs</li>
                      <li>• Witness statements and contact information</li>
                      <li>• Photographs and video documentation</li>
                      <li>• Weather conditions and site conditions</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Settings className="w-5 h-5 mr-2 text-blue-500" />
                      Technical Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-3">Our experts analyze all technical aspects:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Scaffold engineering and load calculations</li>
                      <li>• Component failure analysis and testing</li>
                      <li>• Fall trajectory and impact analysis</li>
                      <li>• Safety equipment performance evaluation</li>
                      <li>• Code compliance review and violations</li>
                      <li>• Industry standard comparison</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.investigationProcess} onOpenChange={() => toggleSection('investigationProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our Investigation Methods
                    {expandedSections.investigationProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive Accident Reconstruction</h3>
                    <p>
                      Our investigation team includes former safety inspectors, scaffolding engineers, and construction experts who understand exactly what evidence to look for and how to preserve it. We move quickly because scaffolding is temporary - structures are dismantled, moved, or modified within days of an accident.
                    </p>
                    
                    <h4>Phase 1: Immediate Evidence Preservation (24-48 hours)</h4>
                    <ul>
                      <li>Photograph scaffolding from multiple angles</li>
                      <li>Measure and document all components</li>
                      <li>Preserve failed or damaged parts</li>
                      <li>Interview witnesses while memories are fresh</li>
                      <li>Review surveillance footage</li>
                      <li>Obtain weather reports and site conditions</li>
                    </ul>
                    
                    <h4>Phase 2: Document Collection (1-4 weeks)</h4>
                    <ul>
                      <li>Safety inspection records and certifications</li>
                      <li>Training documentation for all workers</li>
                      <li>Equipment rental and maintenance agreements</li>
                      <li>Project specifications and safety plans</li>
                      <li>OSHA citations and violation history</li>
                      <li>Insurance policies and coverage limits</li>
                    </ul>
                    
                    <h4>Phase 3: Expert Analysis (2-6 months)</h4>
                    <ul>
                      <li>Engineering analysis of scaffold design and assembly</li>
                      <li>Load calculations and stress testing</li>
                      <li>Component failure analysis</li>
                      <li>Safety code compliance review</li>
                      <li>Industry standard comparison</li>
                      <li>Accident reconstruction and causation analysis</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Legal Process for Scaffolding Fall Claims</h2>
              
              <img src={legalProcessImage} alt="Legal process for scaffolding fall cases" className="w-full h-64 object-cover rounded-lg mb-6" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Investigation & Evidence (Months 1-3)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Immediate preservation of scaffolding components, witness interviews, document collection, expert retention, and liability analysis. Time is critical as evidence disappears quickly.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Documentation (Ongoing)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive medical evaluation, treatment records, prognosis documentation, and future care planning with qualified medical experts.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Filing & Discovery (Months 3-12)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>File lawsuits against all responsible parties, conduct discovery, take depositions, exchange expert reports, and build the strongest possible case.</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Resolution (Months 6-24)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Negotiate settlements or proceed to trial. Most cases settle, but trial preparation is essential for maximum compensation.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.slice(0, 10).map((faq, index) => (
                  <Card key={index} className="border">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex justify-between items-center text-base">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
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

              <Collapsible open={expandedSections.moreFaqs} onOpenChange={() => toggleSection('moreFaqs')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mt-6">
                    Show More FAQs ({faqData.length - 10} Additional Questions)
                    {expandedSections.moreFaqs ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4 mt-4">
                  {faqData.slice(10).map((faq, index) => (
                    <Card key={index + 10} className="border">
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === (index + 10) ? null : (index + 10))}
                      >
                        <CardTitle className="flex justify-between items-center text-base">
                          {faq.question}
                          {expandedFaq === (index + 10) ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Scaffolding Safety Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button variant="link" className="p-0 h-auto text-left justify-start" onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}>
                      Free Case Evaluation
                    </Button>
                    <Button variant="link" className="p-0 h-auto text-left justify-start" onClick={() => window.location.href = '/practice-areas/scaffolding-falls/compensation-calculator'}>
                      Compensation Calculator
                    </Button>
                    <Button variant="link" className="p-0 h-auto text-left justify-start" onClick={() => window.location.href = '/practice-areas/scaffolding-falls/legal-guidance'}>
                      Legal Guidance
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Safety Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Cal/OSHA Scaffolding Standards</p>
                    <p className="text-sm">• OSHA Construction Safety Guide</p>
                    <p className="text-sm">• Worker Rights After Injury</p>
                    <p className="text-sm">• Safety Violation Reporting</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <Card className="border-l-4 border-red-500 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-600">Don't Wait - Time Limits Apply for California Scaffolding Falls</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    California law imposes strict deadlines for scaffolding fall claims. Missing these deadlines can forever bar your right to compensation, even for the most serious injuries.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6">
                    <li><strong>Personal Injury Claims:</strong> Generally 2 years from the date of accident</li>
                    <li><strong>Workers' Compensation:</strong> Must report within 30 days, file within 1 year</li>
                    <li><strong>Government Claims:</strong> Notice required within 6 months</li>
                    <li><strong>Product Liability:</strong> 2 years from discovery of defect</li>
                    <li><strong>Wrongful Death:</strong> 2 years from date of death</li>
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}
                    >
                      Start Free Case Evaluation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call (818) 123-4567
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
          
          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* 3 Ways to Start Your Case */}
              <Card className="bg-muted/50">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white h-12"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12"
                    onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Free Case Evaluation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Trembach Law Firm?</CardTitle>
                </CardHeader>
                <CardContent>
                  <img src={sidebarImage} alt="Scaffolding safety and legal expertise" className="w-full h-40 object-cover rounded-lg mb-4" />
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><Shield className="w-4 h-4 mr-2 text-primary" /> Former defense attorney insight</li>
                    <li className="flex items-center"><Star className="w-4 h-4 mr-2 text-primary" /> Rising Star recognition</li>
                    <li className="flex items-center"><HardHat className="w-4 h-4 mr-2 text-primary" /> Scaffolding safety expertise</li>
                    <li className="flex items-center"><Award className="w-4 h-4 mr-2 text-primary" /> No fees unless we win</li>
                    <li className="flex items-center"><Clock className="w-4 h-4 mr-2 text-primary" /> Available for immediate action</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Scaffolding Fall Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-left justify-start w-full text-primary hover:!text-primary"
                    onClick={() => window.location.href = '/practice-areas/scaffolding-falls/compensation-calculator'}
                  >
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-left justify-start w-full text-primary hover:!text-primary"
                    onClick={() => window.location.href = '/practice-areas/scaffolding-falls/legal-guidance'}
                  >
                    Legal Guidance
                  </Button>
                  <Button 
                    variant="link" 
                    className="p-0 h-auto text-left justify-start w-full text-primary hover:!text-primary"
                    onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}
                  >
                    Case Evaluation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - Phase 8: Time Limits Apply Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits Apply for California Scaffolding Falls Claims</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law has strict deadlines for filing scaffolding accident claims. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              <span className="text-primary-foreground hover:!text-primary-foreground">CALL (818) 123-4567</span>
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/practice-areas/scaffolding-falls/case-evaluation'}>
              <span className="text-primary-foreground hover:!text-primary-foreground">START MY FREE CASE EVALUATION</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScaffoldingFalls;