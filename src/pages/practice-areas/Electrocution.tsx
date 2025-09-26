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
  Calculator
} from 'lucide-react';

import heroBackground from '@/assets/electrocution-hero-bg.jpg';
import sidebarImage from '@/assets/electrocution-sidebar.jpg';
import medicalProcessImage from '@/assets/electrocution-medical-process.jpg';
import legalProcessImage from '@/assets/electrocution-legal-process.jpg';
import exposureSitesImage from '@/assets/california-electrical-sites.jpg';
import medicalImage from '@/assets/electrocution-medical-facility.jpg';
import compensationImage from '@/assets/electrocution-compensation-calculator.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Electrocution: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    injuryDate: '',
    injuryType: '',
    location: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const backgroundLayer1 = useRef<HTMLDivElement>(null);
  const backgroundLayer2 = useRef<HTMLDivElement>(null);
  const backgroundLayer3 = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER ELECTROCUTION', icon: AlertTriangle },
    { id: 'medical-process', label: 'MEDICAL PROCESS', icon: Stethoscope },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Floating Background Layers
      const layers = [backgroundLayer1.current, backgroundLayer2.current, backgroundLayer3.current];
      layers.forEach((layer, index) => {
        if (layer) {
          gsap.set(layer, {
            rotationX: Math.random() * 20 - 10,
            rotationY: Math.random() * 20 - 10,
            z: (index + 1) * -100
          });
          
          gsap.to(layer, {
            rotationX: Math.random() * 40 - 20,
            rotationY: Math.random() * 40 - 20,
            duration: 8 + index * 2,
            ease: 'sine.inOut',
            repeat: -1,
            yoyo: true
          });
        }
      });

      // Enhanced Hero Animation with 3D perspective
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 80, 
          rotationX: -15,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          scale: 1,
          duration: 1.2, 
          ease: 'power3.out',
          transformPerspective: 1000
        }
      );

      // 3D Card hover effects for all cards
      const cards = document.querySelectorAll('.practice-card, .card');
      cards.forEach((card) => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            y: -12,
            rotationX: 2,
            rotationY: 1,
            scale: 1.02,
            duration: 0.4,
            ease: 'power2.out',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            transformPerspective: 1000
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.4,
            ease: 'power2.out',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            transformPerspective: 1000
          });
        };

        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });

      // Parallax scrolling for background elements
      gsap.utils.toArray('.parallax-element').forEach((element: any, index) => {
        gsap.to(element, {
          y: (index + 1) * -50,
          scrollTrigger: {
            trigger: element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1
          }
        });
      });

      // Enhanced content sections animation with 3D effects
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { 
          opacity: 0, 
          y: 60,
          rotationX: -10,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          transformPerspective: 1000,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%'
          }
        }
      );

      // Sidebar scroll-triggered animations with reduced motion support
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      
      if (!prefersReducedMotion && sidebarRef.current) {
        gsap.fromTo(sidebarRef.current,
          { 
            x: 100, 
            opacity: 0,
            rotationY: 15
          },
          {
            x: 0,
            opacity: 1,
            rotationY: 0,
            duration: 1,
            ease: 'power3.out',
            transformPerspective: 1000,
            scrollTrigger: {
              trigger: sidebarRef.current,
              start: 'top 80%'
            }
          }
        );
      }
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
    window.location.href = '/practice-areas/electrocution/case-evaluation';
  };

  const faqData = [
    {
      question: "What should I do immediately after an electrical accident?",
      answer: "Immediately seek emergency medical attention even if you feel fine, as electrical injuries can cause internal damage. Call 911 if the person is unconscious, has severe burns, or difficulty breathing. Do not touch someone who is still in contact with an electrical source. Document the scene if safe to do so. Contact an attorney quickly as evidence can disappear and witnesses' memories fade."
    },
    {
      question: "Who can be held liable for electrical injuries in California?",
      answer: "Multiple parties may be liable including property owners who failed to maintain electrical systems, contractors who improperly installed wiring, utility companies with defective power lines, manufacturers of faulty electrical equipment, employers who violated safety standards, and architects/engineers who designed unsafe electrical systems. California's comparative fault laws allow recovery even if the victim bears some responsibility."
    },
    {
      question: "What types of compensation are available for electrical injury victims?",
      answer: "Compensation includes medical expenses (current and future), lost wages and earning capacity, pain and suffering, permanent disability benefits, disfigurement from burns, rehabilitation costs, home modifications for disabilities, and in wrongful death cases, funeral expenses and loss of companionship. California law allows substantial recovery for severe electrical injuries."
    },
    {
      question: "How long do I have to file an electrical injury lawsuit in California?",
      answer: "Generally two years from the date of injury under California's statute of limitations. However, if the injury wasn't immediately discovered, the clock may start when you reasonably should have known about the injury and its cause. Government entities have shorter notice requirements (6 months). Product liability cases may have different timelines. It's crucial to consult an attorney immediately."
    },
    {
      question: "What evidence is needed to prove an electrical injury case?",
      answer: "Key evidence includes medical records documenting all injuries and treatment, photos of the accident scene and electrical equipment, witness statements, electrical inspection reports, building codes and safety violations, employment records if workplace injury, utility company maintenance records, expert testimony on electrical safety standards, and documentation of financial losses."
    },
    {
      question: "Can I sue if the electrical accident happened at work?",
      answer: "While workers' compensation may cover some costs, you may have third-party claims against general contractors, subcontractors, property owners, utility companies, or equipment manufacturers. These claims can provide additional compensation beyond workers' comp limits. California allows both workers' comp and third-party lawsuits for workplace electrical injuries."
    },
    {
      question: "What are common causes of electrical accidents in California?",
      answer: "Common causes include contact with overhead power lines, defective electrical equipment, improper installation or maintenance, inadequate grounding, missing ground-fault circuit interrupters (GFCIs), overloaded circuits, damaged extension cords, wet conditions near electricity, lack of lockout/tagout procedures, and failure to follow electrical codes and OSHA standards."
    },
    {
      question: "How do electrical injuries differ from other types of injuries?",
      answer: "Electrical injuries are unique because they can cause both external burns and internal organ damage. The electrical current travels through the body, potentially affecting the heart, nervous system, and muscles. Some injuries may not be immediately apparent, requiring specialized medical evaluation and long-term monitoring for complications like cardiac arrhythmias or neurological problems."
    },
    {
      question: "What safety standards apply to electrical work in California?",
      answer: "California follows the National Electrical Code (NEC) and California Electrical Code, Cal/OSHA workplace safety standards, local building codes, utility company safety regulations, and manufacturers' equipment specifications. Violations of these standards can establish negligence and strengthen liability claims against responsible parties."
    },
    {
      question: "How are electrical injury settlements calculated?",
      answer: "Settlements consider the severity of injuries, permanent disabilities, medical expenses, lost income, pain and suffering, future care needs, age and life expectancy, and the degree of negligence involved. Severe burns, cardiac complications, and neurological damage typically result in higher settlements. Each case is unique and requires expert evaluation."
    },
    {
      question: "Can children's electrical injuries result in larger settlements?",
      answer: "Yes, children's cases often result in larger settlements due to their longer life expectancy, potential impact on future earnings, and the psychological trauma involved. Special consideration is given to developmental delays, scarring, and the need for ongoing psychological support. California courts are particularly protective of children's rights."
    },
    {
      question: "What role do expert witnesses play in electrical injury cases?",
      answer: "Expert witnesses are crucial for proving liability and damages. Electrical engineers analyze safety violations and equipment failures, medical experts explain injuries and prognosis, economists calculate future losses, and safety experts identify violations of industry standards. Their testimony helps juries understand complex technical issues."
    },
    {
      question: "How do utility companies try to avoid liability?",
      answer: "Utility companies often claim the injured person was trespassing, argue their lines met minimum safety standards, blame contractors for not calling 811 before digging, or assert the accident was unforeseeable. They have teams of lawyers and investigators. That's why immediate attorney involvement is crucial to preserve evidence and protect your rights."
    },
    {
      question: "What if the electrical accident caused a house fire?",
      answer: "If defective electrical equipment or improper installation caused a house fire, you may have claims against manufacturers, contractors, electricians, or property owners. These cases can involve significant property damage, personal injuries, and sometimes wrongful death. Insurance companies may try to deny coverage, making legal representation essential."
    },
    {
      question: "Are there special considerations for construction site electrical accidents?",
      answer: "Construction sites have heightened safety requirements under Cal/OSHA and federal OSHA standards. Multiple parties may be liable including general contractors, subcontractors, property owners, and equipment manufacturers. Temporary electrical installations must meet specific safety standards. These cases often involve multiple insurance companies and complex liability issues."
    },
    {
      question: "What compensation is available for electrical burns?",
      answer: "Electrical burn compensation includes medical expenses for emergency treatment, surgery, skin grafts, rehabilitation, pain and suffering for the trauma and scarring, lost wages during recovery, permanent disability benefits if work capacity is affected, disfigurement damages for visible scarring, and psychological counseling for trauma-related stress."
    },
    {
      question: "How do I prove the electrical equipment was defective?",
      answer: "Proving defective equipment requires preserving the actual device, obtaining maintenance records, consulting with electrical engineers, reviewing installation manuals and safety warnings, documenting similar incidents with the same product, and gathering evidence of manufacturer knowledge of defects. Product liability cases require specific legal strategies."
    },
    {
      question: "What if I received an electric shock but wasn't severely injured?",
      answer: "Even minor electrical shocks can cause internal damage that manifests later. You should still seek medical evaluation and document the incident. Some electrical injuries cause delayed cardiac problems, neurological issues, or psychological trauma. Early legal consultation protects your rights if complications develop later."
    },
    {
      question: "Can I sue if the accident happened on government property?",
      answer: "Government entities can be sued in California but have special notice requirements and shorter deadlines. Claims against cities, counties, or the state must often be filed within 6 months. Government immunity laws provide some protections, but dangerous conditions on public property can still result in liability. Immediate legal action is essential."
    },
    {
      question: "What happens if the responsible party has no insurance?",
      answer: "Even without insurance, you may still recover through other sources like your own insurance policies, workers' compensation, personal assets of defendants, or bonds required for contractors. Some victims qualify for state compensation programs. An experienced attorney can identify all potential sources of recovery."
    },
    {
      question: "How do electrical injuries affect employment and disability benefits?",
      answer: "Severe electrical injuries may qualify for Social Security Disability benefits, especially if they cause permanent neurological damage, severe burns, or cardiac complications. Workers' compensation may provide temporary or permanent disability payments. These benefits can supplement but not replace your right to pursue third-party liability claims."
    },
    {
      question: "What if the electrical accident was caused by old or outdated wiring?",
      answer: "Property owners have a duty to maintain safe electrical systems and update dangerous conditions. Old wiring that doesn't meet current codes can create liability, especially in rental properties or commercial buildings. Electrical code violations strengthen negligence claims and may result in significant settlements or verdicts."
    },
    {
      question: "Are there criminal implications for electrical accidents?",
      answer: "Severe electrical accidents may trigger criminal investigations for workplace safety violations, criminal negligence, or involuntary manslaughter in wrongful death cases. While criminal proceedings are separate from civil lawsuits, criminal violations can strengthen civil liability claims and may result in additional compensation through restitution orders."
    },
    {
      question: "How do insurance companies handle electrical injury claims?",
      answer: "Insurance companies often minimize electrical injury claims by arguing the injuries aren't as severe as claimed, disputing causation, or claiming policy exclusions apply. They may rush to settle before the full extent of injuries is known. Having an attorney prevents you from accepting inadequate settlements and ensures proper investigation of your claim."
    },
    {
      question: "What if multiple people were injured in the same electrical accident?",
      answer: "Mass electrical accidents involving multiple victims require coordinated legal strategies to maximize recovery for all victims while avoiding conflicts of interest. These cases may involve limited insurance coverage that must be allocated fairly among victims. Early legal intervention ensures your interests are protected in complex multi-party litigation."
    },
    {
      question: "Can family members sue for emotional distress from witnessing electrical accidents?",
      answer: "California allows family members to sue for negligent infliction of emotional distress if they witnessed the accident and suffered severe emotional trauma as a result. These claims require proof of the witness's close relationship to the victim, presence at the scene, and resulting psychological injury requiring treatment."
    },
    {
      question: "What role does alcohol or drug use play in electrical injury cases?",
      answer: "While alcohol or drug use may affect a case, it doesn't automatically bar recovery under California's comparative fault system. The key is whether the electrical hazard was unreasonably dangerous regardless of the victim's condition. Even impaired individuals deserve protection from obviously dangerous electrical conditions."
    },
    {
      question: "How do electrical injuries affect insurance coverage and premiums?",
      answer: "Electrical injuries may affect health insurance coverage for ongoing treatment, disability insurance benefits, and potentially homeowners' insurance if the accident occurred on your property. Some policies have exclusions for electrical injuries. Life insurance typically isn't affected unless fraud was involved in obtaining coverage."
    },
    {
      question: "What if the electrical accident was caused by amateur electrical work?",
      answer: "Unlicensed electrical work that causes injuries creates liability for the person who performed the work and potentially the property owner who allowed it. Most electrical work requires licensed contractors and permits. Homeowners who attempt electrical work may face liability for injuries to visitors or family members."
    },
    {
      question: "Are there special protections for electrical workers in California?",
      answer: "Electrical workers have heightened protections under Cal/OSHA standards including requirements for personal protective equipment, training, lockout/tagout procedures, and safe work practices. Violations of these standards can strengthen liability claims against employers, contractors, and property owners who fail to provide required safety protections."
    },
    {
      question: "What compensation is available for wrongful death from electrical accidents?",
      answer: "Wrongful death compensation includes funeral and burial expenses, medical expenses before death, lost financial support, loss of companionship and guidance, and pain and suffering of survivors. California allows spouses, children, and other dependents to recover. The amount depends on the victim's age, earnings, and life expectancy."
    },
    {
      question: "How do electrical injury cases involving children differ?",
      answer: "Children's cases require court approval of settlements, have longer statutes of limitations that may not begin until age 18, require special medical evaluations for developmental impacts, and often result in higher settlements due to longer life expectancy and potential future earnings. Parents may also have claims for medical expenses and emotional distress."
    },
    {
      question: "What if the electrical accident was caused by weather conditions?",
      answer: "Weather-related electrical accidents may still involve liability if safety standards weren't followed. Utility companies must maintain equipment to withstand expected weather conditions. Property owners must secure outdoor electrical equipment. Even natural disasters don't automatically excuse safety violations that contribute to electrical injuries."
    },
    {
      question: "Can electrical injuries cause psychological or neurological problems?",
      answer: "Yes, electrical injuries commonly cause psychological trauma including PTSD, anxiety, and depression. Neurological effects may include memory problems, concentration difficulties, chronic pain, and motor function impairment. These complications require specialized medical evaluation and can significantly increase the value of injury claims."
    },
    {
      question: "How do electrical injury lawsuits affect workers' compensation claims?",
      answer: "Workers' compensation and third-party lawsuits are separate claims that can proceed simultaneously. Workers' comp provides immediate medical coverage and wage replacement, while third-party claims seek additional compensation from parties other than your employer. Coordination between claims requires experienced legal guidance to maximize total recovery."
    },
    {
      question: "What if I can't afford medical treatment for electrical injuries?",
      answer: "Many attorneys can arrange medical treatment on a lien basis where providers agree to wait for payment until your case settles. Workers' compensation may cover treatment for workplace injuries. Some victims qualify for state medical programs. Emergency treatment cannot be denied due to inability to pay."
    },
    {
      question: "How do product recalls affect electrical injury cases?",
      answer: "Product recalls can strengthen liability claims by proving the manufacturer knew about defects. However, recalls often include legal language trying to limit liability. If you were injured by recalled electrical equipment, you may still have valid claims for compensation, especially if the recall was delayed or inadequate."
    },
    {
      question: "What if the electrical accident happened while trespassing?",
      answer: "California law still provides some protection for trespassers, especially children. Property owners cannot maintain obviously dangerous electrical conditions that could injure trespassers. The degree of protection depends on whether the trespassing was foreseeable and whether the electrical hazard was hidden or obvious."
    },
    {
      question: "How do electrical injuries affect family relationships and daily life?",
      answer: "Severe electrical injuries can strain family relationships, affect intimacy, require lifestyle modifications, and create financial stress. California law recognizes these impacts through damages for loss of consortium (spouse's companionship), care and comfort, and the psychological impact on family members who must provide ongoing care."
    },
    {
      question: "What if electrical equipment appeared to be working properly before the accident?",
      answer: "Electrical equipment can fail suddenly due to manufacturing defects, design flaws, or inadequate maintenance. Expert investigation can often identify the cause of failure and establish liability even when equipment appeared normal before the accident. Hidden defects don't excuse manufacturers or property owners from responsibility."
    },
    {
      question: "Are there time limits for seeking medical treatment after electrical injuries?",
      answer: "While there's no legal deadline for seeking medical treatment, insurance companies may argue that delayed treatment shows injuries weren't serious. Electrical injuries should be evaluated promptly because internal damage may not be immediately apparent. Early medical documentation also strengthens legal claims."
    },
    {
      question: "How do electrical injury settlements affect taxes and government benefits?",
      answer: "Personal injury settlements are generally not taxable income, but punitive damages may be taxable. Large settlements can affect eligibility for means-tested government benefits like Medicaid or SSI. Structured settlements can help manage tax implications and preserve benefit eligibility. Financial planning is important for large recoveries."
    },
    {
      question: "What if I was wearing protective equipment during the electrical accident?",
      answer: "Wearing protective equipment doesn't prevent you from recovering compensation if the equipment was defective, inadequate for the electrical hazard, or if safety standards were still violated. In fact, it may strengthen your case by showing you were following safety procedures while others failed in their duty to provide a safe environment."
    },
    {
      question: "Can electrical injuries cause complications during pregnancy?",
      answer: "Electrical injuries during pregnancy can affect both mother and unborn child. These cases require immediate medical evaluation and ongoing monitoring. Compensation may include additional medical expenses, complications during delivery, and potential developmental impacts on the child. These cases often result in significant settlements due to the involvement of two victims."
    },
    {
      question: "What if the electrical accident was caused by vandalism or sabotage?",
      answer: "Even if vandalism or sabotage contributed to an electrical accident, property owners and utilities may still bear liability for failing to secure electrical equipment or respond appropriately to known risks. These cases require thorough investigation to identify all contributing factors and responsible parties."
    },
    {
      question: "How do electrical injury cases involving apartments or rental properties work?",
      answer: "Landlords have a duty to maintain safe electrical systems in rental properties. Both landlords and tenants may bear responsibility depending on who was responsible for maintenance and whether electrical problems were reported. Electrical code violations in rental properties can result in significant liability for property owners."
    },
    {
      question: "What if electrical medical equipment malfunctioned and caused injury?",
      answer: "Medical device malfunctions may involve product liability claims against manufacturers, negligence claims against healthcare providers for improper maintenance, or facility liability for inadequate electrical systems. These cases require specialized medical and engineering expertise to identify the cause of malfunction and establish responsibility."
    },
    {
      question: "Can electrical injuries affect my ability to obtain life or disability insurance?",
      answer: "Electrical injuries may affect future insurance applications, particularly if they cause permanent disabilities or ongoing health issues. Some policies exclude pre-existing conditions. It's important to maintain current insurance coverage and understand how settlements might affect future insurability."
    },
    {
      question: "What if I signed a waiver before the electrical accident occurred?",
      answer: "Waivers don't always prevent recovery, especially if gross negligence or willful misconduct was involved. California has specific requirements for valid liability waivers, and they cannot excuse violations of safety standards or reckless conduct. Courts scrutinize waivers carefully in cases involving serious electrical injuries."
    },
    {
      question: "How do electrical injury cases involving schools or educational institutions work?",
      answer: "Schools have heightened duties to protect students from electrical hazards. Educational institutions must maintain safe facilities and provide proper supervision during activities involving electricity. These cases may involve government immunity issues but often result in significant settlements when safety standards are violated."
    },
    {
      question: "What if the electrical accident involved emergency responders or utility workers?",
      answer: "Emergency responders and utility workers have special protections under workers' compensation laws, but may still have third-party claims against property owners, contractors, or equipment manufacturers. These cases often involve complex issues of governmental immunity and special duty doctrines requiring experienced legal guidance."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Electrocution Injury Lawyers | Electrical Accident Attorney"
        description="Former defense attorney fighting for California electrocution victims. Electrical burns, shock injuries, power line accidents. Free 24/7 consultation. No fees unless we win."
        keywords="California electrocution lawyer, electrical injury attorney, electric shock lawyer, electrical burn attorney, power line accident lawyer"
        canonical="/practice-areas/electrocution"
      />

      

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Electrocution Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Backed by Proven Experience</span>
            </div>
            
            <p className="text-xl mb-8 leading-relaxed text-white">
              Former defense attorney fighting for electrical injury victims. Free consultation. No fees unless we win.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button size="lg" variant="secondary" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 transition-colors" asChild>
                <Link to="/practice-areas/electrocution/case-evaluation">
                  Free Case Review
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-3">
            
            {/* Tab Navigation */}
            <div className="mb-8 overflow-x-auto">
              <div className="flex gap-2 min-w-max">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <Button
                      key={tab.id}
                      variant={activeTab === tab.id ? "default" : "outline"}
                      onClick={() => scrollToSection(tab.id)}
                      className="flex items-center gap-2 whitespace-nowrap"
                    >
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <FileText className="w-6 h-6" />
                    California Electrocution Law Overview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={exposureSitesImage} 
                    alt="California electrical hazard sites" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <p className="text-lg mb-4">
                    Electrical injuries cause severe burns, cardiac arrest, neurological damage, and death with construction sites and defective products creating most hazards in California. Contact with power lines, faulty wiring, inadequate grounding, and missing ground-fault circuit interrupters violate safety standards.
                  </p>
                  
                  <Collapsible 
                    open={expandedSections['overview-details']} 
                    onOpenChange={() => toggleSection('overview-details')}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="text-primary font-semibold">
                        Learn More About California Electrical Injury Law
                        {expandedSections['overview-details'] ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-4 mt-4">
                        <p>
                          OSHA regulations and electrical codes establish duty of care standards strengthening liability claims. We investigate lockout/tagout procedures, safety equipment provision, and warning system failures. Utility companies failing to maintain lines or respond to hazard reports face liability.
                        </p>
                        <p>
                          Arc flash injuries causing severe burns require extensive treatment including skin grafts. Neurological damage affects memory, concentration, and motor function requiring ongoing therapy. Cardiac complications including arrhythmias may manifest later requiring medical monitoring.
                        </p>
                        <p>
                          Construction workers, electricians, and utility workers face highest risks but residential electrocutions from defective appliances affect consumers. Recovery includes medical expenses, lost wages, and significant pain and suffering from preventable electrical hazards.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                      <h3 className="font-semibold">High Voltage</h3>
                      <p className="text-sm text-muted-foreground">Power line contacts</p>
                    </div>
                    <div className="text-center">
                      <HardHat className="w-12 h-12 text-orange-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Construction Sites</h3>
                      <p className="text-sm text-muted-foreground">Workplace accidents</p>
                    </div>
                    <div className="text-center">
                      <Home className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                      <h3 className="font-semibold">Residential</h3>
                      <p className="text-sm text-muted-foreground">Defective appliances</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Scale className="w-6 h-6" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Every electrical injury case is unique. Our experienced attorneys will evaluate your case for free and explain your legal options.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <Link to="/practice-areas/electrocution/case-evaluation">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <Scale className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold">Case Evaluation</h3>
                          <p className="text-sm text-muted-foreground">Complete assessment</p>
                        </CardContent>
                      </Card>
                    </Link>
                    
                    <Link to="/practice-areas/electrocution/compensation-calculator">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold">Compensation Calculator</h3>
                          <p className="text-sm text-muted-foreground">Estimate potential value</p>
                        </CardContent>
                      </Card>
                    </Link>
                    
                    <Link to="/practice-areas/electrocution/legal-guidance">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                        <CardContent className="p-4 text-center">
                          <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                          <h3 className="font-semibold">Legal Guidance</h3>
                          <p className="text-sm text-muted-foreground">Know your rights</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <Card className="immediate-steps-theme">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <AlertTriangle className="w-6 h-6" />
                    Immediate Steps After Electrocution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalProcessImage} 
                    alt="Emergency medical response for electrical injuries" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold text-green-600 mb-4">DO IMMEDIATELY:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Call 911 immediately for medical emergency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Seek medical attention even if you feel fine</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Document the scene with photos if safe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Get witness contact information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Report to supervisor if workplace injury</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Contact an attorney immediately</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-red-600 mb-4">NEVER DO:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Touch someone still in contact with electricity</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Assume you're fine without medical evaluation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Give recorded statements to insurance companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Sign documents without attorney review</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Accept quick settlement offers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                          <span>Delay seeking legal representation</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Collapsible 
                    open={expandedSections['immediate-details']} 
                    onOpenChange={() => toggleSection('immediate-details')}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="text-primary font-semibold mt-6">
                        Learn More About Post-Electrocution Actions
                        {expandedSections['immediate-details'] ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-4 mt-4">
                        <p>
                          Electrical injuries are unique because they can cause both external burns and internal organ damage that may not be immediately apparent. The electrical current travels through the body, potentially affecting the heart, nervous system, and muscles.
                        </p>
                        <p>
                          Even minor electrical shocks require medical evaluation as complications can develop hours or days later. Cardiac arrhythmias, neurological damage, and internal burns may not manifest immediately but can be life-threatening.
                        </p>
                        <p>
                          Evidence can disappear quickly after electrical accidents. Equipment may be repaired or replaced, witnesses may forget details, and responsible parties may destroy documentation. Immediate legal intervention preserves crucial evidence for your case.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Medical Process Section */}
            <section id="medical-process" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Stethoscope className="w-6 h-6" />
                    Medical Evaluation & Treatment Process
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="Medical facility specialized in electrical injury treatment" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <p className="text-lg mb-6">
                    Electrical injuries require specialized medical evaluation and ongoing monitoring for complications that may not be immediately apparent.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Emergency Medical Evaluation</h3>
                      <p className="mb-4">
                        Immediate assessment includes cardiac monitoring, neurological examination, burn evaluation, and internal injury screening. All electrical injury victims require ECG monitoring even without obvious symptoms.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Ongoing Medical Monitoring</h3>
                      <p className="mb-4">
                        Follow-up care monitors for delayed complications including cardiac arrhythmias, neurological deficits, chronic pain, and psychological effects. Some complications may develop weeks or months after the initial injury.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Specialized Treatment</h3>
                      <p className="mb-4">
                        Severe electrical burns may require skin grafts, reconstruction surgery, and intensive rehabilitation. Neurological injuries may need occupational therapy, physical therapy, and cognitive rehabilitation.
                      </p>
                    </div>
                  </div>

                  <Collapsible 
                    open={expandedSections['medical-details']} 
                    onOpenChange={() => toggleSection('medical-details')}
                  >
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="text-primary font-semibold mt-6">
                        Detailed Medical Information
                        {expandedSections['medical-details'] ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="space-y-4 mt-4">
                        <h4 className="font-semibold">Common Electrical Injury Types:</h4>
                        <ul className="list-disc list-inside space-y-2 ml-4">
                          <li>Contact burns at entry and exit points</li>
                          <li>Arc flash burns from electrical explosions</li>
                          <li>Internal organ damage along current pathway</li>
                          <li>Cardiac arrest or arrhythmias</li>
                          <li>Neurological damage affecting memory and motor function</li>
                          <li>Muscle and tissue damage from electrical current</li>
                          <li>Psychological trauma and PTSD</li>
                        </ul>

                        <h4 className="font-semibold mt-6">Treatment Locations in California:</h4>
                        <p>
                          Major burn centers and trauma hospitals throughout California specialize in electrical injury treatment. Early transfer to specialized facilities improves outcomes for severe electrical injuries.
                        </p>

                        <h4 className="font-semibold mt-6">Long-term Care Planning:</h4>
                        <p>
                          Severe electrical injuries often require lifelong medical monitoring and treatment. Life care planning helps estimate future medical costs and ensures adequate compensation for ongoing needs.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Shield className="w-6 h-6" />
                    Legal Process & Your Rights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={legalProcessImage} 
                    alt="Legal process for electrical injury cases" 
                    className="w-full h-64 object-cover rounded-lg mb-6"
                  />
                  
                  <p className="text-lg mb-6">
                    California law provides strong protections for electrical injury victims. Understanding the legal process helps ensure maximum compensation for your injuries.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Case Investigation</h3>
                      <p>
                        We investigate the electrical hazard, safety violations, responsible parties, and insurance coverage. Expert witnesses analyze equipment failures and safety standard violations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Liability Determination</h3>
                      <p>
                        Multiple parties may be liable including property owners, contractors, utility companies, and equipment manufacturers. California's comparative fault laws allow recovery even if you bear some responsibility.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Compensation Recovery</h3>
                      <p>
                        We pursue all available compensation including medical expenses, lost wages, pain and suffering, permanent disability, and future care needs. No fees unless we win your case.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Types of Legal Claims</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Premises Liability</h4>
                        <p className="text-sm">Property owners' duty to maintain safe electrical systems</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Product Liability</h4>
                        <p className="text-sm">Defective electrical equipment and appliances</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Construction Negligence</h4>
                        <p className="text-sm">Contractor safety violations and improper installation</p>
                      </div>
                      <div className="p-4 border rounded-lg">
                        <h4 className="font-semibold text-primary mb-2">Utility Company Liability</h4>
                        <p className="text-sm">Power line maintenance and hazard response failures</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <MessageCircle className="w-6 h-6" />
                    Frequently Asked Questions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Get answers to common questions about electrical injury cases in California.
                  </p>
                  
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <Collapsible 
                        key={index}
                        open={expandedFaq === index}
                        onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <CollapsibleTrigger asChild>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-between text-left p-4 h-auto border rounded-lg hover:bg-muted"
                          >
                            <span className="font-medium text-base pr-4">{faq.question}</span>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 flex-shrink-0" />
                            )}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <div className="p-4 pt-2">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <Building className="w-6 h-6" />
                    Electrical Safety Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-6">
                    Access helpful resources for electrical safety, legal guidance, and support services.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/practice-areas/electrocution/legal-guidance">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardContent className="p-6 text-center">
                          <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Legal Guidance</h3>
                          <p className="text-sm text-muted-foreground">Know your rights and legal options</p>
                        </CardContent>
                      </Card>
                    </Link>
                    
                    <Link to="/practice-areas/electrocution/medical-guidance">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardContent className="p-6 text-center">
                          <Stethoscope className="w-12 h-12 text-primary mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Medical Guidance</h3>
                          <p className="text-sm text-muted-foreground">Treatment and recovery information</p>
                        </CardContent>
                      </Card>
                    </Link>
                    
                    <Link to="/practice-areas/electrocution/resources">
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <CardContent className="p-6 text-center">
                          <Building className="w-12 h-12 text-primary mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Safety Resources</h3>
                          <p className="text-sm text-muted-foreground">Prevention and safety information</p>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                  
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <h3 className="text-lg font-semibold mb-3">Emergency Contacts</h3>
                    <div className="space-y-2">
                      <p><strong>Medical Emergency:</strong> 911</p>
                      <p><strong>Poison Control:</strong> 1-800-222-1222</p>
                      <p><strong>Cal/OSHA:</strong> 1-833-579-0927</p>
                      <p><strong>Electrical Safety Foundation:</strong> (703) 841-3229</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Time Limits Section */}
            <section className="content-section mb-12">
              <Card className="border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl text-destructive">
                    <Clock className="w-6 h-6" />
                    Don't Wait - Time Limits Apply for California
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg mb-2">Act Fast - California Statute of Limitations</h3>
                        <p className="text-muted-foreground mb-4">
                          Generally, you have only <strong>two years</strong> from the date of your electrical injury to file a lawsuit in California. 
                          Waiting too long could mean losing your right to compensation forever.
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 border border-orange-200 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Special Deadlines</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Government claims: 6 months</li>
                          <li>• Product defect cases: 2 years from discovery</li>
                          <li>• Workers' compensation: Report immediately</li>
                          <li>• Wrongful death: 2 years from death</li>
                        </ul>
                      </div>
                      
                      <div className="p-4 border border-red-200 bg-red-50 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-2">Evidence Can Disappear</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Equipment gets repaired or destroyed</li>
                          <li>• Witnesses forget crucial details</li>
                          <li>• Surveillance footage gets erased</li>
                          <li>• Documents get lost or destroyed</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="text-center pt-6">
                      <p className="text-lg mb-4">
                        <strong>Don't let time run out on your electrocution injury case.</strong>
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-destructive hover:bg-destructive/90">
                          <Phone className="w-5 h-5 mr-2" />
                          Call (818) 123-4567 Now
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                          <Link to="/practice-areas/electrocution/case-evaluation">
                            Free Case Evaluation
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={sidebarImage} 
                    alt="California electrocution case consultation" 
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <Button className="w-full" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/practice-areas/electrocution/case-evaluation">
                        <Mail className="w-4 h-4 mr-2" />
                        Free Case Review
                      </Link>
                    </Button>
                    
                    <Button variant="outline" className="w-full" asChild>
                      <Link to="/practice-areas/electrocution/compensation-calculator">
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
                      placeholder="Injury Date"
                      value={formData.injuryDate}
                      onChange={(e) => setFormData({...formData, injuryDate: e.target.value})}
                    />
                    <Select 
                      value={formData.injuryType}
                      onValueChange={(value) => setFormData({...formData, injuryType: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Type of Electrical Injury" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electrical-burn">Electrical Burns</SelectItem>
                        <SelectItem value="electric-shock">Electric Shock</SelectItem>
                        <SelectItem value="arc-flash">Arc Flash</SelectItem>
                        <SelectItem value="power-line-contact">Power Line Contact</SelectItem>
                        <SelectItem value="appliance-electrocution">Appliance Electrocution</SelectItem>
                        <SelectItem value="workplace-electrocution">Workplace Electrocution</SelectItem>
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
                        <SelectItem value="construction-site">Construction Site</SelectItem>
                        <SelectItem value="workplace">Workplace</SelectItem>
                        <SelectItem value="home">Home</SelectItem>
                        <SelectItem value="public-property">Public Property</SelectItem>
                        <SelectItem value="utility-area">Utility Area</SelectItem>
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

export default Electrocution;