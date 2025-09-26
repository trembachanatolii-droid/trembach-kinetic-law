import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Flame,
  Activity,
  TrendingUp
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/burn-injuries-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/burn-medical-treatment.jpg';
import burnTypesImage from '@/assets/practice-areas/burn-chemical-damage.jpg';
import provingNegligenceImage from '@/assets/practice-areas/burn-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/burn-compensation-calculation.jpg';
import safetyPreventionImage from '@/assets/practice-areas/burn-safety-prevention.jpg';
import electricalHazardImage from '@/assets/practice-areas/burn-electrical-hazard.jpg';
import investigationImage from '@/assets/practice-areas/burn-investigation.jpg';
import caseDocumentationImage from '@/assets/practice-areas/burn-case-documentation.jpg';
import SEO from '@/components/SEO';


gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BurnInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'burn-types', label: 'BURN TYPES', icon: Flame },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

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
    window.location.href = '/burn-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "How long do I have to file a burn injury lawsuit in California?",
      answer: "California's statute of limitations gives you 2 years from the date of your burn injury to file a personal injury lawsuit. However, important exceptions exist: if you're suing a government entity, you must file an administrative claim within 6 months. Minors have until 2 years after turning 18. The discovery rule may extend the deadline if injuries weren't immediately apparent. Missing these deadlines typically bars recovery forever, making immediate legal consultation crucial."
    },
    {
      question: "Can I sue for a burn injury if I was partially at fault?",
      answer: "Yes, California follows pure comparative negligence rules, allowing recovery even if you're 99% at fault. Your compensation reduces by your fault percentage. For example, if damages total $1 million but you're 30% at fault, you'd recover $700,000. Insurance companies aggressively argue comparative fault to minimize payouts. Our attorneys counter these tactics by thoroughly investigating all contributing factors and minimizing your assigned fault percentage."
    },
    {
      question: "What if the person who caused my burns doesn't have insurance?",
      answer: "Multiple recovery options exist beyond the at-fault party's insurance: your own homeowner's or renter's insurance may provide coverage, umbrella policies offer additional protection, employer liability for employee actions, property owner liability for dangerous conditions, product manufacturer liability for defects, and personal assets of wealthy defendants. We investigate all potential sources to maximize your recovery."
    },
    {
      question: "Should I talk to the insurance company after my burn injury?",
      answer: "Never speak with insurance adjusters without legal representation. They record conversations to use against you, twist statements to imply fault, and pressure quick settlements before you understand your injuries' full extent. Refer all communications to your attorney. We handle all insurance negotiations, protecting your interests while you focus on recovery."
    },
    {
      question: "How much does it cost to hire a burn injury lawyer?",
      answer: "Nothing upfront. We work on contingency, meaning we only get paid if we win your case. Our fee is typically 33-40% of the recovery. We advance all costs including filing fees, expert witnesses, medical record retrieval, and investigation expenses. You never pay anything out of pocket, eliminating financial barriers to justice."
    },
    {
      question: "What are the different degrees of burns and their implications?",
      answer: "First-degree burns affect only the epidermis, causing redness and pain, typically healing within a week. Second-degree burns reach the dermis, causing blisters, severe pain, and potential scarring. Third-degree burns destroy all skin layers, appearing white or charred, requiring skin grafts. Fourth-degree burns extend into muscle and bone, often necessitating amputation. Severity affects both treatment complexity and compensation amounts."
    },
    {
      question: "Where are California's specialized burn treatment centers?",
      answer: "California has 13 verified burn centers: UC Davis Regional Burn Center (Sacramento), Shriners Hospital NorCal (Sacramento), Saint Francis Bothin Burn Center (San Francisco), Santa Clara Valley Medical Center (San Jose), UC San Diego Regional Burn Center, UC Irvine Regional Burn Center, LAC+USC Burn Center, and others. These facilities provide specialized care including ICU treatment, hyperbaric oxygen therapy, and reconstruction surgery."
    },
    {
      question: "What is the Total Body Surface Area (TBSA) rule?",
      answer: "TBSA percentage determines burn severity using the 'Rule of Nines': head/neck 9%, each arm 9%, chest 9%, abdomen 9%, upper back 9%, lower back 9%, each leg 18%, genitals 1%. Burns exceeding 10% TBSA in adults or 5% in children require specialized burn center treatment. TBSA directly impacts case value and required medical care."
    },
    {
      question: "What long-term medical care do burn victims need?",
      answer: "Burn recovery often requires years of treatment: multiple reconstructive surgeries, skin grafts and tissue expansion, physical/occupational therapy, psychological counseling for trauma, pain management programs, compression garments, specialized wound care, and scar revision procedures. We work with life care planners to document all future medical needs, ensuring settlements cover lifetime care costs."
    },
    {
      question: "Can I afford medical treatment while my case is pending?",
      answer: "Yes. We connect clients with doctors accepting liens, meaning payment comes from your settlement. Health insurance, medical payments coverage, and state disability benefits provide immediate support. We negotiate with providers to delay billing and arrange payment plans. Never delay treatment due to cost concerns - proper medical care strengthens your case."
    },
    {
      question: "What types of burns are most common in California?",
      answer: "Thermal burns from fires, hot liquids, and heated objects are most common, often occurring in cooking accidents, hot water scalding, and house fires. Chemical burns from industrial accidents, cleaning products, and battery acid exposure are frequent in workplace settings. Electrical burns happen from faulty wiring, power line contact, and defective appliances. California's wildfire risks also create significant burn injury cases."
    },
    {
      question: "How are burn injury settlements calculated?",
      answer: "Settlement values consider medical expenses (past and future), lost wages and earning capacity, pain and suffering, disfigurement and scarring, disability and lifestyle changes, and punitive damages for gross negligence. Severe burns requiring multiple surgeries and permanent scarring typically result in settlements ranging from hundreds of thousands to millions of dollars, depending on the victim's age, occupation, and injury severity."
    },
    {
      question: "What evidence is crucial in burn injury cases?",
      answer: "Essential evidence includes medical records documenting burn severity and treatment, photographs of injuries and accident scene, witness statements, expert accident reconstruction, product defect analysis, safety violation records, and employer training documentation. We preserve evidence quickly before it's lost or destroyed, working with fire investigators, medical experts, and safety engineers."
    },
    {
      question: "Can I sue if I was burned at work?",
      answer: "While workers' compensation typically covers workplace burns, you may have third-party claims against equipment manufacturers, property owners, contractors, or other negligent parties. These additional claims can provide compensation beyond workers' comp benefits, including full lost wages and pain and suffering damages not available through workers' compensation."
    },
    {
      question: "What if my loved one died from burn injuries?",
      answer: "Surviving family members may file wrongful death claims seeking compensation for medical expenses before death, funeral costs, lost financial support, loss of companionship, and punitive damages. California's wrongful death statute allows spouses, children, and sometimes parents to recover damages. These cases require immediate action to preserve evidence and meet legal deadlines."
    },
    {
      question: "How do I prove someone else caused my burn injury?",
      answer: "Proving liability requires demonstrating the defendant owed you a duty of care, breached that duty through negligent or reckless conduct, and directly caused your burn injuries. This involves expert testimony, safety standard violations, product defect evidence, and witness accounts. We work with fire investigators, safety experts, and medical professionals to build compelling cases."
    },
    {
      question: "What immediate steps should I take after a burn injury?",
      answer: "Seek immediate medical attention, even for seemingly minor burns. Document everything: take photos of injuries and accident scene, collect witness information, preserve clothing and evidence, report the incident to appropriate authorities, and avoid giving statements to insurance companies. Contact our burn injury attorneys immediately to protect your legal rights."
    },
    {
      question: "Are apartment complex owners liable for fire injuries?",
      answer: "Yes, landlords and property management companies must maintain safe premises including working smoke detectors, proper electrical systems, adequate fire exits, and building code compliance. They're liable for tenant burn injuries caused by inadequate safety measures, faulty wiring, blocked exits, or failure to maintain fire safety equipment."
    },
    {
      question: "Can I sue manufacturers for defective products that caused burns?",
      answer: "Absolutely. Product liability laws hold manufacturers strictly liable for defective products causing burn injuries. This includes design defects making products unreasonably dangerous, manufacturing flaws creating hazards, and inadequate warnings about burn risks. We've recovered millions in defective appliance, electronics, and automotive fire cases."
    },
    {
      question: "What compensation is available for burn scars and disfigurement?",
      answer: "California law provides substantial compensation for permanent scarring and disfigurement, recognizing both physical and emotional impacts. Factors include scar size, location, and visibility, impact on appearance and self-esteem, social and professional consequences, and future cosmetic surgery needs. Facial scarring often results in higher compensation due to psychological impact."
    },
    {
      question: "How long does a burn injury lawsuit take?",
      answer: "Timeline varies based on case complexity, injury severity, and defendant cooperation. Simple cases may settle within 6-12 months, while complex cases involving multiple parties or severe injuries can take 2-3 years. We prioritize quick resolutions when possible but never recommend inadequate settlements that don't cover lifetime needs."
    },
    {
      question: "What if I can't identify who caused my burn injury?",
      answer: "Our investigation team helps identify all potentially liable parties. This may include property owners, employers, product manufacturers, contractors, or government entities. We examine building codes, safety regulations, maintenance records, and product defect patterns to uncover responsible parties you might not initially recognize."
    },
    {
      question: "Do burn injury cases go to trial?",
      answer: "Most burn injury cases settle before trial, as defendants recognize the substantial damages severe burns cause. However, we're fully prepared for trial when necessary to secure fair compensation. Our courtroom experience and burn injury expertise often motivate defendants to offer reasonable settlements."
    },
    {
      question: "Can children file burn injury lawsuits?",
      answer: "Minor children can pursue burn injury claims through legal guardians or parents. California extends the statute of limitations for minors, giving them until age 20 (2 years after turning 18) to file suit. Children's cases often result in substantial settlements due to lifetime impact and earning capacity considerations."
    },
    {
      question: "What role do expert witnesses play in burn cases?",
      answer: "Expert witnesses are crucial for proving liability and damages. Fire investigators determine accident causes, medical experts explain burn severity and treatment needs, economists calculate lifetime costs, and safety engineers identify code violations. We work with nationally recognized experts who strengthen cases and maximize compensation."
    },
    {
      question: "How do insurance companies handle burn injury claims?",
      answer: "Insurance companies often minimize burn injury severity, question medical necessity of treatments, dispute causation, and pressure quick settlements. They use their own medical experts to challenge your doctor's opinions. Having experienced burn injury attorneys levels the playing field, ensuring proper case evaluation and fair settlement negotiations."
    },
    {
      question: "What if my burn injury occurred in a vehicle accident?",
      answer: "Vehicle fire burns may involve multiple liable parties including negligent drivers, vehicle manufacturers with defective fuel systems, accident responders with delayed extraction, and government entities with unsafe road design. We investigate all potential claims to maximize recovery from available insurance policies and liable parties."
    },
    {
      question: "Can I sue for chemical burns from cleaning products?",
      answer: "Yes, if cleaning product manufacturers failed to provide adequate warnings, products were defectively designed, or workplace safety protocols weren't followed. These cases often involve product liability claims against manufacturers and negligence claims against employers or property owners who failed to provide proper safety equipment."
    },
    {
      question: "What compensation is available for lost earning capacity?",
      answer: "Burn victims unable to return to previous employment due to physical limitations or scarring receive compensation for reduced earning capacity. Economists calculate lifetime income loss considering age, education, career trajectory, and injury impact. This often represents the largest component of burn injury settlements."
    },
    {
      question: "How do electrical burn injuries differ legally?",
      answer: "Electrical burns often involve utility company liability, contractor negligence, or defective electrical products. These cases require specialized expertise in electrical safety codes, power line regulations, and electrical engineering. Utility companies have significant liability when power lines cause burns through inadequate maintenance or safety measures."
    },
    {
      question: "What if my burn injury was caused by medical malpractice?",
      answer: "Medical malpractice burn cases include surgical burns, electrocautery injuries, chemical burns from treatments, and radiation burns. These require medical expert testimony proving the standard of care was breached. California has specific requirements for medical malpractice cases, including expert witness qualifications and damage caps."
    },
    {
      question: "Can I sue for psychological trauma from burn injuries?",
      answer: "Absolutely. Burn injuries often cause severe psychological trauma including PTSD, depression, anxiety, and social withdrawal. California recognizes compensation for mental anguish, emotional distress, and psychological treatment costs. Mental health experts document these impacts and their treatment requirements."
    },
    {
      question: "What if the burn injury occurred on government property?",
      answer: "Government liability cases have special requirements including short notice deadlines (6 months for California government claims), specific claim procedures, and statutory damage limits. Common scenarios include burns from defective government building equipment, unsafe public facilities, or negligent government employee actions."
    },
    {
      question: "How do construction site burn injuries work legally?",
      answer: "Construction burns often involve multiple parties: general contractors, subcontractors, equipment manufacturers, and property owners. These cases frequently include OSHA violations, inadequate safety training, and defective equipment. Workers may have claims beyond workers' compensation against third parties who caused their injuries."
    },
    {
      question: "What about burns from restaurant or hotel accidents?",
      answer: "Hospitality industry burns may result from kitchen accidents, scalding water, electrical faults, or fire code violations. Property owners must maintain safe premises for guests and employees. These cases often involve premises liability claims for inadequate maintenance, training, or safety protocols."
    },
    {
      question: "Can I recover compensation for home modifications needed after burns?",
      answer: "Yes, settlements should include home accessibility modifications like wheelchair ramps, widened doorways, accessible bathrooms, and assistive technology. We work with occupational therapists and home modification specialists to document these needs and ensure they're included in settlement calculations."
    },
    {
      question: "What if my burn injury was caused by a gas explosion?",
      answer: "Gas explosion burns often involve utility company negligence, contractor errors, or defective appliances. These catastrophic events require immediate investigation to preserve evidence. Liability may extend to gas companies, plumbers, appliance manufacturers, and property owners who failed to maintain safe systems."
    },
    {
      question: "How do wildfire burn injury cases work?",
      answer: "California wildfire burn cases may involve utility company liability (like PG&E cases), government negligence in fire response, or property owner failures to maintain defensible space. These complex cases often become mass tort litigation with specific procedures and settlement funds established for victims."
    },
    {
      question: "What compensation is available for pain and suffering?",
      answer: "Pain and suffering damages compensate for physical pain, emotional distress, loss of life enjoyment, and mental anguish. California has no caps on pain and suffering in most personal injury cases. These damages often exceed economic losses in severe burn cases, requiring skilled presentation of the injury's life impact."
    },
    {
      question: "Can I sue if my burn injury happened at someone else's home?",
      answer: "Homeowners' liability insurance typically covers guest injuries from negligent conditions like faulty electrical systems, dangerous equipment, or inadequate warnings about hazards. Property owners must maintain reasonably safe premises and warn guests of known dangers that might cause burn injuries."
    },
    {
      question: "What if multiple parties caused my burn injury?",
      answer: "California's joint and several liability rules allow you to collect full compensation from any liable party, regardless of their fault percentage. This protects victims when one defendant lacks insurance or assets. We identify all potentially liable parties to maximize recovery sources and ensure full compensation."
    },
    {
      question: "How do apartment fire burn cases work?",
      answer: "Apartment fire cases often involve landlord negligence including faulty smoke detectors, inadequate fire exits, electrical code violations, and poor maintenance. Landlords must ensure tenant safety through proper fire prevention and detection systems. These cases may also involve product liability for defective appliances or electrical systems."
    },
    {
      question: "What about burns from malfunctioning appliances?",
      answer: "Appliance burn cases typically involve product liability claims against manufacturers for design defects, manufacturing flaws, or inadequate warnings. We also investigate maintenance issues, installation problems, and whether retailers provided proper safety information. These cases often result in substantial recoveries."
    },
    {
      question: "Can I sue for burn injuries from scalding water?",
      answer: "Scalding burn cases may involve defective water heaters, landlord negligence in temperature regulation, restaurant equipment failures, or inadequate warnings about water temperature. These burns are particularly common in children and elderly victims, often requiring extensive medical treatment and resulting in significant settlements."
    },
    {
      question: "What if my burn injury case involves a drunk driver?",
      answer: "Drunk driving burn cases often qualify for punitive damages due to the reckless nature of intoxicated driving. These cases may involve dram shop liability against bars or restaurants that overserved the driver, enhanced damages for gross negligence, and criminal restitution in addition to civil recovery."
    },
    {
      question: "How do workplace chemical burn cases work?",
      answer: "Workplace chemical burns may involve OSHA violations, inadequate safety training, missing protective equipment, or defective chemical products. While workers' compensation covers initial treatment, third-party claims against chemical manufacturers, equipment makers, or other contractors can provide additional compensation."
    },
    {
      question: "What compensation is available for family members of burn victims?",
      answer: "Family members may recover damages for loss of consortium (companionship, affection, and support), caregiving expenses, and their own emotional distress. Spouses and children of severely burned victims often require psychological counseling and may need to reduce work hours to provide care."
    },
    {
      question: "Can I pursue a burn injury case if the accident happened years ago?",
      answer: "The 2-year statute of limitations typically applies, but exceptions exist. The discovery rule may extend deadlines if burn complications developed later, new evidence emerged, or defendants concealed their negligence. Consult with burn injury attorneys immediately to determine if your case remains viable."
    },
    {
      question: "What if I was burned while helping in an emergency?",
      answer: "Good Samaritan laws protect those helping in emergencies, but you may still have claims against parties who created the dangerous situation. These cases require careful analysis of the circumstances and applicable immunity laws. Your heroic actions don't eliminate others' liability for negligence that caused the emergency."
    },
    {
      question: "How do massage and spa burn injury cases work?",
      answer: "Spa burn cases often involve equipment malfunctions, inadequately trained staff, or failure to warn about treatment risks. These businesses owe customers a high duty of care, and burns from hot stones, steam, or chemical treatments may result in significant liability for the spa and its employees."
    }
  ];

  return (
    <div className="min-h-screen">
      
      <SEO 
        title="California Burn Injury Lawyers | #1 Burn Accident Attorneys | Free Consultation"
        description="Experienced California burn injury lawyers fighting for maximum compensation. Former defense attorney now advocating for burn victims. Free 24/7 consultation. No fees unless we win."
        canonical="https://www.californiainjuryadvocates.com/practice-areas/burn-injuries"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              California Burn Injury Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Experienced legal representation for thermal, chemical, and electrical burn injuries. 
              Fighting for maximum compensation for your medical costs, lost wages, and pain and suffering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/burn-case-evaluation'}
              >
                <Phone className="w-6 h-6 mr-3" />
                Free Case Evaluation
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 border-2 border-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => window.location.href = '/burn-compensation-calculator'}
              >
                <DollarSign className="w-6 h-6 mr-3" />
                Calculate Compensation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="bg-white shadow-xl rounded-lg mb-8 overflow-hidden">
              <div className="flex flex-wrap border-b">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`flex items-center px-4 py-4 text-sm font-medium transition-colors border-r border-gray-200 hover:bg-red-50 ${
                        activeTab === tab.id 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4">
                    California Burn Injury Legal Representation - Fighting for Maximum Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Burn injuries represent some of the most devastating and life-altering personal injuries, causing excruciating pain, permanent scarring, and profound psychological trauma that requires extensive medical treatment spanning years or even decades. The physical agony of severe burns extends far beyond the initial injury, as victims endure multiple surgical procedures including painful debridement to remove dead tissue, complex skin grafts to replace destroyed skin, and intricate reconstruction surgeries attempting to restore both function and appearance.
                  </p>
                  <p>
                    The medical complications associated with serious burn injuries create a cascade of additional health challenges that compound the victim's suffering. Infection risks remain constantly elevated due to compromised skin barriers, while contractures develop as healing skin tightens, severely limiting movement and requiring ongoing physical therapy. Nerve damage from deep burns often results in chronic pain syndromes that persist long after the initial healing, while hypertrophic scarring and keloid formation create both functional limitations and devastating cosmetic disfigurement.
                  </p>
                  <p>
                    Third and fourth-degree burns destroy all layers of skin and often extend into underlying muscle, tendon, and bone tissue, frequently necessitating amputation of affected limbs or digits. Facial burns create particularly devastating consequences, causing severe disfigurement that profoundly impacts the victim's self-esteem, personal relationships, and employment opportunities. Inhalation injuries from smoke and superheated air damage delicate airway tissues, creating life-threatening respiratory complications that may require prolonged mechanical ventilation and permanent breathing assistance.
                  </p>
                  <p>
                    Our experienced burn injury attorneys aggressively pursue maximum compensation from all liable parties in cases involving apartment complex fires with inadequate smoke detection systems, workplace explosions resulting from safety violations and inadequate training, defective consumer products that ignite or overheat causing fires, vehicle crashes with fuel tank ruptures or electrical system failures, restaurant accidents involving scalding liquids or kitchen equipment malfunctions, and construction site incidents with welding accidents or electrical hazards.
                  </p>
                  <p>
                    The financial burden of burn injury treatment often exceeds millions of dollars over a victim's lifetime, encompassing emergency trauma care, specialized burn unit treatment, multiple reconstructive surgeries, extensive rehabilitation programs, psychological counseling for trauma recovery, and ongoing medical maintenance. We work with leading medical experts, life care planners, and economists to ensure our clients receive settlements that fully account for their lifetime needs, while also pursuing compensation for pain and suffering, loss of earning capacity, and the profound impact these injuries have on their quality of life.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
                    What to Do After a Burn Injury
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={whatToDoImage} 
                        alt="Emergency medical treatment for burn injuries" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Immediate Actions</h3>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                          <span>Seek immediate medical attention, even for minor burns</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                          <span>Cool the burn with lukewarm water for 10-20 minutes</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                          <span>Remove jewelry and loose clothing before swelling begins</span>
                        </li>
                        <li className="flex items-start">
                          <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">4</div>
                          <span>Cover burn with sterile, non-stick bandage</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-red-600 mb-4">Legal Protection Steps</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">Document Everything</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Take photos of injuries and accident scene</li>
                          <li>• Preserve burned clothing and evidence</li>
                          <li>• Get witness contact information</li>
                          <li>• Report incident to appropriate authorities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Avoid These Mistakes</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Don't give recorded statements to insurance</li>
                          <li>• Don't sign any settlement documents</li>
                          <li>• Don't admit fault or blame yourself</li>
                          <li>• Don't delay seeking legal counsel</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Burn Types Section */}
            <section id="burn-types" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Flame className="w-8 h-8 mr-3 text-red-600" />
                    Types of Burn Injuries We Handle
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={burnTypesImage} 
                        alt="Different types of burn injuries and their causes" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="border-l-4 border-red-600 pl-4">
                        <h3 className="text-xl font-bold text-red-600">Thermal Burns</h3>
                        <p>Fire, hot liquids, steam, hot surfaces - most common type requiring specialized treatment</p>
                      </div>
                      <div className="border-l-4 border-orange-600 pl-4">
                        <h3 className="text-xl font-bold text-orange-600">Chemical Burns</h3>
                        <p>Acids, alkalis, solvents - continue damaging tissue until neutralized</p>
                      </div>
                      <div className="border-l-4 border-yellow-600 pl-4">
                        <h3 className="text-xl font-bold text-yellow-600">Electrical Burns</h3>
                        <p>High voltage, defective wiring - internal damage often exceeds visible injury</p>
                      </div>
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h3 className="text-xl font-bold text-purple-600">Radiation Burns</h3>
                        <p>Medical treatments, industrial exposure - specialized damage requiring expert care</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Burn Severity Classifications</h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-4 bg-yellow-100 rounded-lg">
                        <h4 className="font-bold text-yellow-800">First Degree</h4>
                        <p className="text-sm text-yellow-700">Epidermis only, red skin, pain</p>
                      </div>
                      <div className="text-center p-4 bg-orange-100 rounded-lg">
                        <h4 className="font-bold text-orange-800">Second Degree</h4>
                        <p className="text-sm text-orange-700">Into dermis, blisters, severe pain</p>
                      </div>
                      <div className="text-center p-4 bg-red-100 rounded-lg">
                        <h4 className="font-bold text-red-800">Third Degree</h4>
                        <p className="text-sm text-red-700">Full thickness, white/charred</p>
                      </div>
                      <div className="text-center p-4 bg-gray-100 rounded-lg">
                        <h4 className="font-bold text-gray-800">Fourth Degree</h4>
                        <p className="text-sm text-gray-700">Into muscle/bone, amputation</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Shield className="w-8 h-8 mr-3 text-red-600" />
                    Proving Negligence in Burn Injury Cases
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Elements of Negligence</h3>
                      <div className="space-y-3">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <h4 className="font-bold text-blue-800">Duty of Care</h4>
                          <p className="text-blue-700">Defendant owed you a legal obligation to act safely</p>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <h4 className="font-bold text-green-800">Breach of Duty</h4>
                          <p className="text-green-700">Defendant failed to meet the required standard</p>
                        </div>
                        <div className="p-4 bg-yellow-50 rounded-lg">
                          <h4 className="font-bold text-yellow-800">Causation</h4>
                          <p className="text-yellow-700">Breach directly caused your burn injuries</p>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <h4 className="font-bold text-red-800">Damages</h4>
                          <p className="text-red-700">You suffered actual harm and losses</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src={provingNegligenceImage} 
                        alt="Legal process for proving burn injury negligence" 
                        className="w-full h-80 object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                    Burn Injury Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={compensationImage} 
                        alt="Calculating compensation for burn injury cases" 
                        className="w-full h-64 object-cover rounded-lg mb-4"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">Types of Damages</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-green-50 rounded border-l-4 border-green-600">
                          <h4 className="font-bold text-green-800">Medical Expenses</h4>
                          <p className="text-sm text-green-700">Emergency care, surgeries, therapy, future treatment</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded border-l-4 border-blue-600">
                          <h4 className="font-bold text-blue-800">Lost Income</h4>
                          <p className="text-sm text-blue-700">Past and future wages, reduced earning capacity</p>
                        </div>
                        <div className="p-3 bg-purple-50 rounded border-l-4 border-purple-600">
                          <h4 className="font-bold text-purple-800">Pain & Suffering</h4>
                          <p className="text-sm text-purple-700">Physical pain, emotional trauma, mental anguish</p>
                        </div>
                        <div className="p-3 bg-red-50 rounded border-l-4 border-red-600">
                          <h4 className="font-bold text-red-800">Disfigurement</h4>
                          <p className="text-sm text-red-700">Scarring, disability, loss of life enjoyment</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Clock className="w-8 h-8 mr-3 text-red-600" />
                    California Burn Injury Time Limits
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <img 
                        src={caseDocumentationImage} 
                        alt="Legal documentation and time limits for burn injury cases" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div className="bg-red-100 border border-red-300 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-red-800 mb-4">Critical Deadlines</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">Personal Injury Claims</h4>
                        <p className="text-red-600">2 years from injury date</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">Government Claims</h4>
                        <p className="text-red-600">6 months for claim filing</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">Product Liability</h4>
                        <p className="text-red-600">2 years from discovery</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-red-700 mb-2">Wrongful Death</h4>
                        <p className="text-red-600">2 years from death date</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-yellow-800 mb-2">Don't Wait - Evidence Disappears</h3>
                    <p className="text-yellow-700">
                      Critical evidence like surveillance footage, witness memories, and physical evidence deteriorates rapidly. 
                      Insurance companies immediately begin investigating to minimize claims. Early legal representation 
                      protects your rights and preserves crucial evidence for maximum compensation.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Building className="w-8 h-8 mr-3 text-red-600" />
                    Burn Injury Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <img 
                        src={investigationImage} 
                        alt="Burn injury investigation and resources" 
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Emergency Resources</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-red-50 rounded">
                          <h4 className="font-semibold text-red-800">Immediate Medical Care</h4>
                          <p className="text-sm text-red-600">Specialized burn centers across California</p>
                        </div>
                        <div className="p-3 bg-blue-50 rounded">
                          <h4 className="font-semibold text-blue-800">Legal Support</h4>
                          <p className="text-sm text-blue-600">24/7 consultation available</p>
                        </div>
                        <div className="p-3 bg-green-50 rounded">
                          <h4 className="font-semibold text-green-800">Financial Assistance</h4>
                          <p className="text-sm text-green-600">Insurance and settlement coordination</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-bold mb-4">California Burn Centers</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">UC Davis Regional Burn Center</h4>
                          <p className="text-sm text-gray-600">Sacramento - Advanced burn treatment</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">LAC+USC Burn Center</h4>
                          <p className="text-sm text-gray-600">Los Angeles - Specialized care</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">UC San Diego Regional Burn Center</h4>
                          <p className="text-sm text-gray-600">San Diego - Research facility</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-4">Support Organizations</h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">Phoenix Society for Burn Survivors</h4>
                          <p className="text-sm text-gray-600">National support network</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">Burn Support Groups</h4>
                          <p className="text-sm text-gray-600">Local community resources</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                          <h4 className="font-semibold">Rehabilitation Services</h4>
                          <p className="text-sm text-gray-600">Physical and occupational therapy</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Scale className="w-8 h-8 mr-3 text-red-600" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Type of Burn Injury</label>
                          <Select onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select burn type..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="thermal">Thermal/Fire Burn</SelectItem>
                              <SelectItem value="chemical">Chemical Burn</SelectItem>
                              <SelectItem value="electrical">Electrical Burn</SelectItem>
                              <SelectItem value="radiation">Radiation Burn</SelectItem>
                              <SelectItem value="friction">Friction Burn</SelectItem>
                              <SelectItem value="workplace">Workplace Burn</SelectItem>
                              <SelectItem value="apartment-fire">Apartment Fire</SelectItem>
                              <SelectItem value="vehicle-fire">Vehicle Fire</SelectItem>
                              <SelectItem value="defective-product">Defective Product</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Location of Accident</label>
                        <Input
                          type="text"
                          value={formData.accidentLocation}
                          onChange={(e) => setFormData({...formData, accidentLocation: e.target.value})}
                          placeholder="Where did the burn occur?"
                          className="w-full"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-full">
                        Get Your Free Case Review →
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <HelpCircle className="w-8 h-8 mr-3 text-red-600" />
                    Frequently Asked Questions About Burn Injuries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <Collapsible key={index}>
                        <CollapsibleTrigger 
                          className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium pr-4 text-lg">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-4">
                          <div className="pt-2 text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-2xl border-0 bg-gray-900 text-white overflow-hidden">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      3 Ways to
                    </h3>
                    <h3 className="text-2xl font-bold mb-4 text-white">
                      Start Your Case
                    </h3>
                    <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
                    <p className="text-gray-300 mb-8 text-base leading-relaxed">
                      You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                    </p>
                  </div>

                  {/* Call Button */}
                  <Button 
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-4 text-lg font-semibold rounded-lg"
                    onClick={() => window.location.href = 'tel:8554155849'}
                  >
                    CALL (855) 415-5849
                  </Button>

                  {/* Email Button */}
                  <Button 
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-4 text-lg font-semibold rounded-lg"
                    onClick={() => window.location.href = '/burn-case-evaluation'}
                  >
                    EMAIL US
                  </Button>

                  {/* Calculate Settlement Button */}
                  <Button 
                    className="w-full bg-red-700 hover:bg-red-800 text-white py-3 text-base font-semibold rounded-lg"
                    onClick={() => window.location.href = '/burn-compensation-calculator'}
                  >
                    CALCULATE SETTLEMENT
                  </Button>

                  {/* Trust Indicators */}
                  <div className="border-t pt-6">
                    <div className="text-center space-y-3">
                      <div className="flex justify-center items-center">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Experienced Burn Injury Attorneys
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          No Win, No Fee
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          Free Consultation
                        </div>
                        <div className="flex items-center justify-center">
                          <Heart className="w-4 h-4 text-red-600 mr-2" />
                          Personal Attention
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Time Limits Apply for California Burn Injuries
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every day you delay reduces your chances of maximum compensation. Our burn injury specialists are available 24/7 to protect your rights and secure the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 border-2 border-white px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = '/burn-case-evaluation'}
            >
              <Scale className="mr-2 h-5 w-5" />
              Free Case Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BurnInjuries;