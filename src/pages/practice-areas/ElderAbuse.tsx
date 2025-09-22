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
  DollarSign,
  Home,
  Gavel
} from 'lucide-react';
import heroBackground from '@/assets/elder-abuse-hero-bg.jpg';
import sidebarImage from '@/assets/elder-abuse-sidebar.jpg';
import medicalCareImage from '@/assets/elder-abuse-medical-care.jpg';
import legalProcessImage from '@/assets/elder-abuse-legal-process.jpg';
import financialProtectionImage from '@/assets/elder-abuse-financial-protection.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

interface GoBackProps {
  onGoBack?: () => void;
  fromSection?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, fromSection }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 100;
      setIsVisible(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleClick = () => {
    if (onGoBack) {
      onGoBack();
    } else if (fromSection) {
      const targetElement = document.getElementById(fromSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.back();
    } else {
      window.history.back();
    }
  };
  
  return (
    <div className={`fixed top-20 left-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="ghost" 
        onClick={handleClick}
        className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

const ElderAbuse: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    abuseType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO AFTER ABUSE', icon: Heart },
    { id: 'types-abuse', label: 'TYPES OF ELDER ABUSE', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Visual Effects & Perspective
      const container = heroRef.current;
      if (container) {
        gsap.set(container, {
          perspective: 1200,
          transformStyle: "preserve-3d"
        });
      }

      // Hero animation with 3D transforms
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotateX: -10, z: -100 },
        { 
          opacity: 1, 
          y: 0, 
          rotateX: 0, 
          z: 0,
          duration: 1.2, 
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)' 
        }
      );

      // Layered 3D Background Animation
      const createFloatingLayers = () => {
        const backLayer = document.createElement('div');
        const midLayer = document.createElement('div');
        const frontLayer = document.createElement('div');
        
        // Style layers
        const layerStyle = 'position: absolute; width: 100%; height: 100%; pointer-events: none; opacity: 0.1;';
        backLayer.style.cssText = layerStyle + 'background: linear-gradient(135deg, hsl(var(--primary)), transparent); z-index: 1; transform: translateZ(-500px);';
        midLayer.style.cssText = layerStyle + 'background: linear-gradient(45deg, transparent, hsl(var(--accent)), transparent); z-index: 2; transform: translateZ(-250px);';
        frontLayer.style.cssText = layerStyle + 'background: radial-gradient(circle, hsl(var(--primary-glow)), transparent); z-index: 3; transform: translateZ(-100px);';
        
        heroRef.current?.appendChild(backLayer);
        heroRef.current?.appendChild(midLayer);
        heroRef.current?.appendChild(frontLayer);
        
        // Floating animations
        gsap.to(backLayer, {
          y: "30px",
          duration: 14,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        gsap.to(midLayer, {
          x: "40px",
          duration: 18,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
        
        gsap.to(frontLayer, {
          y: "20px",
          x: "25px",
          rotation: "2deg",
          duration: 10,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      };

      createFloatingLayers();

      // Content sections with parallax and Z-axis animation
      const sections = contentRef.current?.querySelectorAll('.content-section');
      if (sections) {
        gsap.fromTo(sections,
          { 
            opacity: 0, 
            y: 60,
            rotateY: -5,
            z: -50,
            scale: 0.95
          },
          {
            opacity: 1,
            y: 0,
            rotateY: 0,
            z: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%',
              end: 'bottom 20%',
              scrub: 1
            }
          }
        );
      }

      // Advanced hover effects for cards
      const cards = document.querySelectorAll('.glass-card');
      cards.forEach(card => {
        const handleMouseEnter = () => {
          gsap.to(card, {
            scale: 1.05,
            rotateY: 5,
            z: 20,
            duration: 0.3,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
          });
        };
        
        const handleMouseLeave = () => {
          gsap.to(card, {
            scale: 1,
            rotateY: 0,
            z: 0,
            duration: 0.3,
            ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
          });
        };
        
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
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
    // Handle form submission - redirect to Elder Abuse case evaluation
    window.location.href = '/elder-abuse-case-evaluation';
  };

  const faqData = [
    {
      question: "What is the Elder Abuse and Dependent Adult Civil Protection Act (EADACPA)?",
      answer: "California's EADACPA provides enhanced legal protections for adults 65 and older and dependent adults aged 18-64 with physical or mental limitations. The law allows for attorney fees, punitive damages, and pain and suffering compensation when abuse, neglect, or financial exploitation occurs. It requires clear and convincing evidence that defendants acted with recklessness, fraud, malice, or oppression."
    },
    {
      question: "What is the statute of limitations for elder abuse cases in California?",
      answer: "Generally, elder abuse cases must be filed within two years from the date of discovery of the abuse. However, this can be extended if the victim was unaware of the abuse due to cognitive impairment or if the abuse was concealed. For financial abuse cases, the timeline may be extended to four years from discovery. The sooner you act, the stronger your case becomes as evidence is preserved."
    },
    {
      question: "What types of elder abuse are covered under California law?",
      answer: "California law covers physical abuse (hitting, restraining, sexual assault), neglect (failure to provide adequate care, food, medical attention), financial abuse (theft, fraud, undue influence), emotional abuse (threats, humiliation), abandonment (desertion by caregivers), and isolation (restricting contact with others). Each type has specific legal definitions and evidence requirements."
    },
    {
      question: "Can I sue a nursing home for elder abuse?",
      answer: "Yes. Nursing homes have a legal duty to provide adequate care and protection. You can sue for physical abuse, neglect leading to bedsores or malnutrition, medication errors, falls due to inadequate supervision, sexual abuse by staff, and financial exploitation. Enhanced damages under EADACPA may apply if the facility's conduct was particularly egregious."
    },
    {
      question: "What is financial elder abuse and how do I prove it?",
      answer: "Financial elder abuse includes theft, fraud, forgery, undue influence, and misuse of power of attorney. Evidence includes bank records showing unusual withdrawals, forged signatures, new beneficiaries added to wills, isolation from family during financial changes, and cognitive evaluations showing vulnerability. We work with financial experts to trace stolen assets and demonstrate the abuse."
    },
    {
      question: "Do I need to pay attorney fees upfront for an elder abuse case?",
      answer: "No. We work on contingency, meaning you pay nothing unless we win. Additionally, California's EADACPA allows recovery of attorney fees from defendants in successful cases, making legal representation more accessible. This fee-shifting provision encourages attorneys to take meritorious cases and serves as a deterrent to potential abusers."
    },
    {
      question: "What damages can I recover in an elder abuse lawsuit?",
      answer: "California law provides compensation for medical expenses, pain and suffering, emotional distress, return of stolen property, punitive damages (to punish egregious conduct), attorney fees, and in cases involving financial abuse, treble (triple) damages may be available. Enhanced damages recognize the particular vulnerability of elderly victims."
    },
    {
      question: "How do I prove neglect in a nursing home?",
      answer: "Neglect is proven through medical records showing deterioration, staffing records revealing inadequate supervision, facility policies that weren't followed, expert testimony about care standards, photographs of conditions, and witness statements. Common indicators include bedsores, malnutrition, dehydration, falls, medication errors, and poor hygiene."
    },
    {
      question: "Can I file a case if my loved one has dementia?",
      answer: "Yes. Cognitive impairment doesn't prevent filing elder abuse claims. In fact, it may strengthen your case as it demonstrates increased vulnerability. Family members can file on behalf of incapacitated elders. The law recognizes that those with dementia are particularly susceptible to abuse and exploitation, warranting enhanced protection."
    },
    {
      question: "What should I do immediately after discovering elder abuse?",
      answer: "Ensure immediate safety, document everything with photographs and written notes, report to Adult Protective Services (833-401-0832), contact law enforcement if criminal activity occurred, preserve evidence including medical records and financial documents, seek medical evaluation, and contact an experienced elder abuse attorney immediately to protect legal rights."
    },
    {
      question: "How do California's enhanced remedies work in elder abuse cases?",
      answer: "Enhanced remedies under EADACPA include attorney fees (unusual in personal injury cases), punitive damages to punish and deter, pain and suffering compensation, and in financial cases, potential treble damages. These enhanced remedies require proving the defendant acted with recklessness, fraud, malice, or oppression by clear and convincing evidence."
    },
    {
      question: "Can assisted living facilities be held liable for elder abuse?",
      answer: "Absolutely. Assisted living facilities have duties to protect residents from harm. They can be liable for inadequate background checks on staff, failure to supervise residents prone to wandering, medication management errors, falls due to unsafe conditions, and failure to report suspected abuse. Licensing violations often support liability claims."
    },
    {
      question: "What is undue influence in financial elder abuse?",
      answer: "Undue influence occurs when someone uses their position of trust or authority to manipulate an elder into financial decisions that benefit the influencer. Elements include vulnerability of the elder, authority or trust of the influencer, actions or tactics used, and an inequitable result. Common scenarios involve caregivers, family members, or advisors gaining control over finances."
    },
    {
      question: "How are elder abuse cases different from other personal injury cases?",
      answer: "Elder abuse cases have unique features including enhanced damage remedies, fee-shifting provisions, higher burden of proof requirements (clear and convincing evidence vs. preponderance), specific statutory definitions, mandatory reporting obligations, and recognition of the vulnerable victim class requiring special protection under California law."
    },
    {
      question: "Can home care agencies be sued for elder abuse?",
      answer: "Yes. Home care agencies are responsible for their employees and have duties including proper hiring and background checks, adequate training and supervision, ensuring continuity of care, and protecting clients from abuse. They can be liable for physical abuse by caregivers, theft by employees, neglect leading to injury, and failure to report suspected abuse."
    },
    {
      question: "What role does Adult Protective Services (APS) play?",
      answer: "APS investigates reports of abuse, provides immediate safety planning, connects victims with resources, may initiate emergency protective measures, and coordinates with law enforcement when criminal activity is suspected. APS involvement supports civil cases by documenting abuse and providing professional assessments of the situation."
    },
    {
      question: "How do you handle cases involving family member abuse?",
      answer: "Family member abuse cases require sensitive handling as they involve complex family dynamics. We address emotional challenges with compassion while aggressively pursuing legal remedies. These cases often involve financial exploitation, isolation from other family members, or physical abuse by trusted relatives. Evidence preservation is crucial in these emotionally charged situations."
    },
    {
      question: "What is the burden of proof in elder abuse cases?",
      answer: "To recover enhanced damages under EADACPA, plaintiffs must prove by clear and convincing evidence that defendants acted with recklessness, oppression, fraud, or malice. This is a higher standard than the typical 'preponderance of evidence' used in most civil cases, but the enhanced remedies available justify this higher burden."
    },
    {
      question: "Can I recover damages if the elder has passed away?",
      answer: "Yes. Surviving family members can pursue wrongful death claims and elder abuse claims through the estate. Enhanced damages may still be available if abuse contributed to the death. We pursue compensation for the elder's pain and suffering before death, medical expenses, and punitive damages to hold wrongdoers accountable."
    },
    {
      question: "How do you investigate elder abuse cases?",
      answer: "Our investigation includes reviewing medical records and care plans, interviewing witnesses and staff members, obtaining facility records and policies, consulting with medical experts, analyzing financial records for exploitation, photographing conditions and injuries, researching facility licensing history, and coordinating with law enforcement when appropriate."
    },
    {
      question: "What are the warning signs of financial elder abuse?",
      answer: "Warning signs include unexplained changes to wills or beneficiaries, new people involved in financial decisions, unusual bank withdrawals or transfers, unpaid bills despite adequate income, missing belongings or money, isolation from family during financial changes, signatures that don't match historical examples, and cognitive decline being exploited by trusted individuals."
    },
    {
      question: "Can elder abuse cases go to trial?",
      answer: "Yes, though many settle before trial. When cases do go to trial, we present compelling evidence including expert testimony, medical records, witness statements, and visual evidence. California courts take elder abuse seriously, and juries often award substantial damages when egregious conduct is proven. We prepare every case for trial while pursuing settlement opportunities."
    },
    {
      question: "How do medication errors constitute elder abuse?",
      answer: "Medication errors can constitute neglect under EADACPA when they result from failure to follow proper procedures, inadequate staff training, or systemic problems. Serious medication errors causing harm may support enhanced damage claims. We examine medication administration records, staff training documentation, and consult with pharmaceutical experts."
    },
    {
      question: "What is the role of expert witnesses in elder abuse cases?",
      answer: "Expert witnesses are crucial for establishing care standards, explaining medical causation, evaluating financial exploitation, assessing facility operations, and calculating damages. We work with geriatricians, nurses, social workers, financial experts, and facility administration specialists to build compelling cases that educate juries about complex elder care issues."
    },
    {
      question: "Can elder abuse occur in hospitals?",
      answer: "Yes. Hospitals can be liable for physical abuse by staff, neglect during treatment, failure to prevent patient falls, inadequate monitoring leading to complications, and discharge planning that puts vulnerable elders at risk. Hospital abuse cases often involve complex medical issues requiring careful expert analysis."
    },
    {
      question: "How do bedsores indicate elder abuse?",
      answer: "Severe bedsores (pressure ulcers) often indicate neglect as they're largely preventable with proper care including regular turning, adequate nutrition, proper hygiene, and appropriate medical equipment. Stage III and IV bedsores typically result from prolonged neglect and can support enhanced damage claims under EADACPA."
    },
    {
      question: "What compensation is available for emotional abuse?",
      answer: "Emotional abuse causing psychological harm is compensable under EADACPA. Damages include pain and suffering, mental health treatment costs, loss of enjoyment of life, and in egregious cases, punitive damages. We work with psychologists and psychiatrists to document the psychological impact of emotional abuse on vulnerable elders."
    },
    {
      question: "How do you handle cases involving multiple family members as defendants?",
      answer: "Complex family dynamics require strategic litigation approaches. We identify each family member's role in the abuse, determine individual liability, address joint and several liability issues, and manage complex discovery involving multiple parties. These cases often involve financial exploitation conspiracies requiring detailed financial analysis."
    },
    {
      question: "Can elder abuse cases be filed against government facilities?",
      answer: "Yes, but special procedural requirements apply. Claims against government entities require filing administrative claims before lawsuits, have shorter deadlines (6 months typically), and may have damage caps. However, elder abuse cases may overcome some governmental immunities, and enhanced damages may still be available under EADACPA."
    },
    {
      question: "What is sexual abuse in elder care settings?",
      answer: "Sexual abuse includes unwanted touching, rape, forced nudity, or sexual photography. These cases require immediate law enforcement involvement and sensitive handling. Facilities can be liable for inadequate background checks, failure to supervise staff, and failure to protect vulnerable residents. Enhanced damages are often appropriate for these egregious violations."
    },
    {
      question: "How do you prove institutional knowledge of abuse?",
      answer: "We prove institutional knowledge through employee complaints, incident reports, licensing violations, previous lawsuits, witness testimony about management awareness, and patterns of behavior. Institutional knowledge supports claims for punitive damages and demonstrates the facility's reckless disregard for resident safety."
    },
    {
      question: "Can elder abuse cases involve wrongful death claims?",
      answer: "Yes. When elder abuse causes or contributes to death, we pursue both elder abuse claims (through the estate) and wrongful death claims (by surviving family members). This dual approach maximizes recovery and ensures accountability. Enhanced damages may be available even in wrongful death contexts when abuse is proven."
    },
    {
      question: "What is abandonment in elder care?",
      answer: "Abandonment occurs when caregivers desert elders under circumstances requiring continued care. This can happen in facilities (mass staff departures) or home settings (family members withdrawing necessary support). Abandonment cases often involve emergency situations requiring immediate intervention and can support enhanced damage claims."
    },
    {
      question: "How do you calculate damages in elder abuse cases?",
      answer: "Damages include economic losses (medical expenses, stolen money), non-economic damages (pain and suffering), punitive damages (to punish and deter), and attorney fees. We work with economists and life care planners to project future needs and ensure comprehensive compensation that addresses the full impact of abuse on vulnerable elders."
    },
    {
      question: "Can elder abuse cases be resolved through mediation?",
      answer: "Many cases settle through mediation, but we approach settlement negotiations from a position of strength after thorough case development. Mediation can provide faster resolution and avoid trial stress, but we never recommend settlements that don't adequately compensate victims and deter future abuse. Every settlement must serve justice."
    },
    {
      question: "What happens if the elder lacks capacity to make legal decisions?",
      answer: "Family members can petition for conservatorship or guardianship to make legal decisions on behalf of incapacitated elders. In urgent situations, courts can appoint temporary conservators. We assist with these proceedings while simultaneously developing the abuse case, ensuring legal rights are protected throughout the process."
    },
    {
      question: "How do you handle cases involving religious or nonprofit facilities?",
      answer: "Religious and nonprofit facilities must meet the same care standards as for-profit facilities. While they may claim charitable immunity in some contexts, EADACPA's protections generally override these defenses. We pursue accountability regardless of facility ownership structure, focusing on the vulnerable elder's right to proper care and protection."
    },
    {
      question: "What is the difference between abuse and neglect?",
      answer: "Abuse involves intentional harmful acts (hitting, stealing, threatening), while neglect involves failure to provide necessary care (food, medicine, hygiene). Both can support EADACPA claims with enhanced remedies, but they require different types of evidence and expert testimony. The legal remedies available are similar for both abuse and neglect."
    },
    {
      question: "Can elder abuse cases involve multiple facilities?",
      answer: "Yes. Elders may experience abuse at multiple facilities or during transfers between facilities. We investigate the entire care history to identify all responsible parties. Sequential abuse cases may involve complex causation issues requiring detailed medical analysis and coordination between multiple defendants and insurance companies."
    },
    {
      question: "How do you protect elder abuse victims during litigation?",
      answer: "We prioritize victim safety through confidentiality measures, court protective orders when necessary, limiting depositions for fragile elders, using video testimony when appropriate, and coordinating with APS for ongoing protection. The litigation process should never further victimize vulnerable elders seeking justice."
    },
    {
      question: "What is the role of facility licensing in elder abuse cases?",
      answer: "Licensing violations provide evidence of substandard care and institutional knowledge of problems. We review facility inspection reports, licensing actions, and compliance history. Repeated violations demonstrate patterns of neglect that support enhanced damage claims and help establish the facility's reckless disregard for resident welfare."
    },
    {
      question: "Can elder abuse cases involve insurance coverage disputes?",
      answer: "Insurance companies sometimes deny coverage for intentional acts or claim policy exclusions apply. We pursue direct liability against facilities while also addressing insurance coverage issues. Professional liability, general liability, and excess policies may all be implicated depending on the type and extent of abuse."
    },
    {
      question: "How do you handle elder abuse cases involving dementia patients?",
      answer: "Dementia patients are particularly vulnerable to abuse and exploitation. We work with geriatric psychiatrists and neurologists to document cognitive capacity at relevant times, establish the progression of dementia, and demonstrate how the condition made the elder vulnerable to abuse. Special evidentiary considerations apply to testimony and documentation."
    },
    {
      question: "What immediate steps should family members take?",
      answer: "Remove the elder from dangerous situations if possible, document injuries and conditions with photographs, preserve financial records and communications, report to APS and law enforcement, seek immediate medical evaluation, gather witness contact information, and consult with an experienced elder abuse attorney to understand legal rights and preserve evidence."
    },
    {
      question: "Can elder abuse cases result in criminal charges?",
      answer: "Yes. Elder abuse can be prosecuted criminally under Penal Code 368. Criminal prosecution runs parallel to civil cases and can strengthen civil claims. Criminal convictions provide powerful evidence of wrongdoing, but civil cases can succeed even without criminal prosecution due to different burden of proof standards."
    },
    {
      question: "How do you address the emotional impact on families?",
      answer: "Elder abuse devastates families emotionally. We provide compassionate support while aggressively pursuing legal remedies. We connect families with counseling resources, support groups, and victim advocates. Our approach recognizes that healing involves both emotional support and achieving justice through accountability and compensation."
    },
    {
      question: "What makes an elder abuse case strong?",
      answer: "Strong cases involve clear documentation of abuse or neglect, expert testimony supporting claims, institutional knowledge of problems, severe injuries or financial losses, witnesses to corroborate abuse, and evidence of reckless or intentional conduct. Early intervention by experienced attorneys strengthens cases by ensuring proper evidence preservation and witness interviews."
    },
    {
      question: "Can you pursue elder abuse claims against individual employees?",
      answer: "Yes. Individual employees who commit abuse can be sued personally along with their employers. This dual approach ensures maximum accountability and recovery sources. Individual liability is particularly important in cases involving theft, assault, or other intentional criminal acts that may not be covered by employer insurance."
    },
    {
      question: "How do California elder abuse laws compare to other states?",
      answer: "California's EADACPA is among the strongest elder protection laws in the nation. The enhanced remedies including attorney fees, punitive damages, and pain and suffering compensation exceed what many states provide. The clear and convincing evidence standard ensures quality cases while the enhanced damages deter abuse and encourage legal representation."
    },
    {
      question: "What resources are available to support elder abuse victims?",
      answer: "Resources include Adult Protective Services, law enforcement elder abuse units, victim compensation programs, counseling services, support groups, ombudsman programs, and legal aid organizations. We connect clients with comprehensive resources while pursuing legal remedies to ensure both immediate support and long-term justice."
    },
    {
      question: "How long do elder abuse cases typically take?",
      answer: "Case duration varies depending on complexity, defendant cooperation, and court schedules. Simple cases may resolve in 12-18 months, while complex cases involving multiple defendants or significant damages can take 2-4 years. We work efficiently to resolve cases while ensuring thorough preparation that maximizes recovery for vulnerable elder victims."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Component */}
      <GoBack />

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
              California Elder Abuse Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Protecting California's Vulnerable Seniors</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
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
          <div className="lg:col-span-2 relative z-10" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Elder Abuse Attorneys</h2>
              
              <div className="prose prose-xl max-w-none text-gray-900 dark:text-gray-100">
                <p className="text-xl leading-relaxed mb-4 text-gray-900 dark:text-gray-100">
                  Elder abuse devastates California's most vulnerable residents every day. Physical violence, financial exploitation, neglect in care facilities, and emotional abuse rob seniors of dignity, security, and peace in their final years. California's Elder Abuse and Dependent Adult Civil Protection Act provides powerful legal remedies to hold abusers accountable and secure justice for victims.
                </p>
                
                <p className="text-xl leading-relaxed text-gray-900 dark:text-gray-100">
                  At Trembach Law Firm, we understand the unique trauma of elder abuse and the complex legal framework protecting California seniors. With deep knowledge of elder care standards, institutional liability, and the enhanced remedies available under state law, we fight aggressively for maximum compensation while treating victims and families with compassion and dignity.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our California Elder Abuse Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          EADACPA Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Deep understanding of California's Elder Abuse and Dependent Adult Civil Protection Act, including enhanced remedies like attorney fees, punitive damages, and treble damages for financial exploitation.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Compassionate Advocacy
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We understand the emotional trauma families face when discovering elder abuse. Our approach combines aggressive legal advocacy with compassionate support throughout the legal process.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Elder Abuse Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Gavel className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Enhanced Damages Expertise</h4>
                          <p className="text-sm text-gray-800 dark:text-gray-200">We know how to prove the heightened standards required for attorney fees, punitive damages, and enhanced remedies under EADACPA.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Urgent Response</h4>
                          <p className="text-sm text-gray-800 dark:text-gray-200">Elder abuse cases require immediate action to preserve evidence and protect victims. We respond quickly to secure critical documentation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expert Network</h4>
                          <p className="text-sm text-gray-800 dark:text-gray-200">We work with geriatricians, forensic accountants, and care facility experts to build compelling cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-gray-800 dark:text-gray-200">Contingency representation with potential attorney fee recovery under EADACPA.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none text-gray-900 dark:text-gray-100">
                    <h3>Comprehensive Elder Abuse Representation in California</h3>
                    <p>
                      Elder abuse takes many devastating forms in California, from physical violence in nursing homes to sophisticated financial exploitation schemes. Our firm handles the full spectrum of elder abuse cases, understanding both the legal complexities and the human tragedy involved in each situation.
                    </p>
                    
                    <p>
                      California's Elder Abuse and Dependent Adult Civil Protection Act provides some of the strongest protections in the nation for vulnerable adults. The law recognizes that elder abuse causes unique harm requiring special legal remedies beyond typical personal injury compensation.
                    </p>
                    
                    <h4>Types of Elder Abuse We Handle:</h4>
                    <ul>
                      <li>Physical abuse and assault in care facilities</li>
                      <li>Sexual abuse and exploitation of vulnerable adults</li>
                      <li>Neglect leading to bedsores, malnutrition, and preventable injuries</li>
                      <li>Financial exploitation, theft, and fraudulent schemes</li>
                      <li>Emotional abuse, threats, and psychological manipulation</li>
                      <li>Medication errors and medical neglect</li>
                      <li>Abandonment by caregivers and facilities</li>
                      <li>Isolation and deprivation of basic needs</li>
                    </ul>
                    
                    <p>
                      We investigate every form of institutional failure, from understaffing and inadequate training to corporate policies that prioritize profits over resident safety. Our goal is comprehensive accountability that prevents future abuse while securing maximum compensation for victims and families.
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
                <p className="mb-6">🔒 100% Confidential • 24/7 Available</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Abuse *</label>
                    <Select value={formData.abuseType} onValueChange={(value) => setFormData(prev => ({ ...prev, abuseType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type of abuse" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="nursing-home-neglect">Nursing Home Neglect</SelectItem>
                        <SelectItem value="physical-abuse">Physical Abuse</SelectItem>
                        <SelectItem value="financial-exploitation">Financial Exploitation</SelectItem>
                        <SelectItem value="assisted-living-abuse">Assisted Living Abuse</SelectItem>
                        <SelectItem value="home-care-abuse">Home Care Abuse</SelectItem>
                        <SelectItem value="emotional-abuse">Emotional Abuse</SelectItem>
                        <SelectItem value="medication-errors">Medication Errors</SelectItem>
                        <SelectItem value="other">Other/Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Get Free Consultation →
                  </Button>
                  
                  <p className="text-center text-sm text-gray-700 dark:text-gray-300">
                    Your information is protected by attorney-client privilege
                  </p>
                </form>
              </div>
            </section>

            {/* What to Do After Abuse */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Discovering Elder Abuse</h2>
              
              <div className="mb-6">
                <img 
                  src={medicalCareImage} 
                  alt="Professional medical care documentation for elder abuse cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Discovering elder abuse is traumatic and overwhelming, but taking the right steps immediately can protect your loved one and preserve crucial evidence for legal action.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      Ensure Immediate Safety
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Remove elder from dangerous situation if possible</p>
                    <p>• Seek immediate medical evaluation for injuries</p>
                    <p>• Document conditions with photographs</p>
                    <p>• Call 911 if emergency medical care needed</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Phone className="w-5 h-5 mr-2 text-green-600" />
                      Report the Abuse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Call Adult Protective Services: 833-401-0832</p>
                    <p>• Report to local law enforcement if criminal</p>
                    <p>• Contact facility ombudsman if applicable</p>
                    <p>• File reports within required timeframes</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Preserve Evidence
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Take photographs of injuries and conditions</p>
                    <p>• Collect medical records and care plans</p>
                    <p>• Secure financial documents and bank records</p>
                    <p>• Get witness contact information</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-green-600" />
                      Contact Trembach Law Firm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Call us 24/7 at (818) 123-4567</p>
                    <p>• Free confidential consultation available</p>
                    <p>• We handle all facility communications</p>
                    <p>• Protect your legal rights immediately</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Types of Elder Abuse */}
            <section id="types-abuse" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Elder Abuse in California</h2>
              
              <div className="mb-6">
                <img 
                  src={financialProtectionImage} 
                  alt="Financial protection documentation for elder abuse prevention" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  California law recognizes multiple forms of elder abuse, each with specific legal definitions and remedies under the Elder Abuse and Dependent Adult Civil Protection Act.
                </p>
              </div>

              <Collapsible open={expandedSections.typesAbuse} onOpenChange={() => toggleSection('typesAbuse')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Guide to Elder Abuse Types
                    {expandedSections.typesAbuse ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                          Physical Abuse
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Inflicting physical pain, injury, or impairment</p>
                        <p><strong>Examples:</strong> Hitting, kicking, restraints, sexual assault, force-feeding</p>
                        <p><strong>Evidence:</strong> Injuries, bruises, broken bones, witness testimony</p>
                        <p><strong>Legal Remedy:</strong> Enhanced damages, punitive damages, criminal prosecution</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
                          Neglect
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Failure to provide necessary care and services</p>
                        <p><strong>Examples:</strong> Bedsores, malnutrition, medication errors, unsafe conditions</p>
                        <p><strong>Evidence:</strong> Medical records, facility logs, expert testimony</p>
                        <p><strong>Legal Remedy:</strong> Medical expenses, pain and suffering, facility liability</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                          Financial Abuse
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Theft, fraud, or misuse of elder's property or assets</p>
                        <p><strong>Examples:</strong> Undue influence, forged signatures, unauthorized transactions</p>
                        <p><strong>Evidence:</strong> Bank records, will changes, isolation patterns</p>
                        <p><strong>Legal Remedy:</strong> Return of assets, treble damages, punitive damages</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <Heart className="w-5 h-5 mr-2 text-red-600" />
                          Emotional Abuse
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Inflicting mental pain, distress, or anguish</p>
                        <p><strong>Examples:</strong> Threats, humiliation, intimidation, isolation from family</p>
                        <p><strong>Evidence:</strong> Witness statements, psychological evaluations, behavior changes</p>
                        <p><strong>Legal Remedy:</strong> Pain and suffering, mental health treatment costs</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <Home className="w-5 h-5 mr-2 text-red-600" />
                          Abandonment
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Desertion by caregiver under circumstances requiring continued care</p>
                        <p><strong>Examples:</strong> Facility closures, family withdrawal of support, staff departures</p>
                        <p><strong>Evidence:</strong> Facility records, emergency reports, witness testimony</p>
                        <p><strong>Legal Remedy:</strong> Emergency intervention, enhanced damages</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card group hover-glow-red transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                          <Users className="w-5 h-5 mr-2 text-red-600" />
                          Isolation
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3 text-gray-900 dark:text-gray-100">
                        <p><strong>Definition:</strong> Preventing contact with family, friends, or outside support</p>
                        <p><strong>Examples:</strong> Restricting visitors, controlling communications, geographic isolation</p>
                        <p><strong>Evidence:</strong> Facility policies, communication records, family testimony</p>
                        <p><strong>Legal Remedy:</strong> Injunctive relief, emotional distress damages</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Elder Abuse Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Legal scales of justice representing elder abuse litigation" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps families know what to expect as we pursue maximum compensation under California's Elder Abuse and Dependent Adult Civil Protection Act.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Guide
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none text-gray-900 dark:text-gray-100">
                    <h3>Enhanced Remedies Under EADACPA</h3>
                    <p>
                      California's Elder Abuse and Dependent Adult Civil Protection Act provides enhanced remedies not available in typical personal injury cases. These include attorney fees, punitive damages, and pain and suffering compensation when we prove defendants acted with recklessness, fraud, malice, or oppression.
                    </p>
                    
                    <h4>1. Case Investigation and Evidence Gathering</h4>
                    <ul>
                      <li>Comprehensive medical record review and analysis</li>
                      <li>Facility inspection reports and licensing history</li>
                      <li>Staff training records and background checks</li>
                      <li>Financial records and transaction analysis</li>
                      <li>Witness interviews and expert consultations</li>
                      <li>Photography and documentation of conditions</li>
                    </ul>
                    
                    <h4>2. Legal Claims and Theories</h4>
                    <ul>
                      <li>Elder abuse under EADACPA with enhanced remedies</li>
                      <li>Professional negligence and breach of duty</li>
                      <li>Institutional liability and corporate negligence</li>
                      <li>Wrongful death claims when abuse causes death</li>
                      <li>Financial exploitation and fraud claims</li>
                      <li>Violation of residents' rights and regulations</li>
                    </ul>
                    
                    <h4>3. Proving Enhanced Damages</h4>
                    <p>
                      To recover enhanced remedies, we must prove by clear and convincing evidence that defendants acted with:
                    </p>
                    <ul>
                      <li><strong>Recklessness:</strong> Deliberate disregard of high degree of probability of injury</li>
                      <li><strong>Oppression:</strong> Despicable conduct subjecting elder to cruel and unjust hardship</li>
                      <li><strong>Fraud:</strong> Intentional misrepresentation or concealment of material facts</li>
                      <li><strong>Malice:</strong> Conduct intended to cause injury or despicable conduct with willful disregard</li>
                    </ul>
                    
                    <h4>4. Expert Witness Testimony</h4>
                    <p>
                      Expert witnesses are crucial for establishing liability and damages:
                    </p>
                    <ul>
                      <li>Geriatricians and nursing experts for care standard violations</li>
                      <li>Facility administration experts for policy and training failures</li>
                      <li>Forensic accountants for financial exploitation cases</li>
                      <li>Psychologists for emotional abuse and trauma assessment</li>
                      <li>Life care planners for future medical needs</li>
                      <li>Economists for financial loss calculations</li>
                    </ul>
                    
                    <h3>Damages Available in Elder Abuse Cases</h3>
                    <ul>
                      <li><strong>Economic Damages:</strong> Medical expenses, stolen property, lost income</li>
                      <li><strong>Non-Economic Damages:</strong> Pain and suffering, emotional distress, loss of enjoyment</li>
                      <li><strong>Punitive Damages:</strong> To punish and deter egregious conduct</li>
                      <li><strong>Attorney Fees:</strong> Recovery of legal costs in successful cases</li>
                      <li><strong>Treble Damages:</strong> Triple damages in financial abuse cases</li>
                      <li><strong>Injunctive Relief:</strong> Court orders to prevent future harm</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Elder Abuse Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Emergency & Crisis Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Emergency Services: 911</li>
                      <li>• Adult Protective Services: 833-401-0832</li>
                      <li>• Elder Abuse Hotline: 1-800-231-4024</li>
                      <li>• Crisis Counseling: 1-800-273-8255</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer" onClick={() => window.location.href = '/elder-abuse-resources'}>
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      Legal & Support Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Department of Aging</p>
                    <p>• Long-Term Care Ombudsman</p>
                    <p>• Area Agencies on Aging</p>
                    <p>• Legal Aid Society</p>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      View All Resources →
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait - Time Limits Apply */}
            <section className="content-section mb-12">
              <Card className="border-l-4 border-l-red-500 bg-red-50 dark:bg-red-950/20">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
                        Don't Wait - Time Limits Apply for California Elder Abuse Cases
                      </h2>
                      <p className="text-red-800 dark:text-red-200 mb-4 text-lg">
                        California elder abuse cases must generally be filed within two years of discovering the abuse. Evidence becomes harder to obtain over time, witnesses' memories fade, and critical documentation may be lost or destroyed. Early legal intervention is crucial for building the strongest possible case.
                      </p>
                      <ul className="list-disc list-inside text-red-800 dark:text-red-200 mb-6 space-y-2">
                        <li>Two-year statute of limitations from discovery of abuse</li>
                        <li>Enhanced remedies require clear and convincing evidence</li>
                        <li>Facility records may be destroyed or altered over time</li>
                        <li>Witness availability decreases with delayed action</li>
                        <li>Medical evidence is strongest when cases are filed promptly</li>
                      </ul>
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
                      >
                        Get Free Case Evaluation Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl text-primary">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={sidebarImage} 
                    alt="Professional elder abuse legal consultation" 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary/10"
                      onClick={() => window.location.href = '/elder-abuse-case-evaluation'}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary/10"
                      onClick={() => window.location.href = 'mailto:confidential@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-700 dark:text-gray-300 mt-4">
                    <p>✓ 100% Confidential</p>
                    <p>✓ No Fees Unless We Win</p>
                    <p>✓ Available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Don't Wait - Time Limits Apply for California</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed text-gray-100">California elder abuse cases have strict deadlines. Contact us today for your free consultation and protect your legal rights.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/elder-abuse-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElderAbuse;