import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
  Building,
  Map,
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Activity,
  UserX,
  CheckCircle,
  Calculator,
  Gavel,
  TrendingUp,
  Home,
  Car,
  Briefcase
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/wrongful-death-hero.jpg';
import legalConsultationImage from '@/assets/practice-areas/wrongful-death-legal-consultation.jpg';
import courthouseImage from '@/assets/practice-areas/wrongful-death-courthouse.jpg';
import legalProcessImage from '@/assets/practice-areas/wrongful-death-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/wrongful-death-compensation.jpg';
import medicalImage from '@/assets/practice-areas/wrongful-death-medical.jpg';
import vehicleAccidentsImage from '@/assets/practice-areas/wrongful-death-vehicle-accidents.jpg';
import workplaceImage from '@/assets/practice-areas/wrongful-death-workplace.jpg';
import damagesImage from '@/assets/practice-areas/wrongful-death-damages.jpg';
import investigationImage from '@/assets/practice-areas/wrongful-death-investigation.jpg';
import familyImage from '@/assets/practice-areas/wrongful-death-family.jpg';
import timeLimitsImage from '@/assets/practice-areas/wrongful-death-time-limits.jpg';
import SEO from '@/components/SEO';

import { useNavigate } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const WrongfulDeath: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfDeath: '',
    causeOfDeath: '',
    relationship: '',
    description: '',
    consentToContact: false
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'types-of-cases', label: 'TYPES OF CASES', icon: Gavel },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Remove hero animation for immediate appearance
      // gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
      //   { opacity: 0, y: 50 },
      //   { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      // );

      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Wrongful Death Case Evaluation Request';
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Date of Death: ${formData.dateOfDeath}
Cause of Death: ${formData.causeOfDeath}
Relationship to Deceased: ${formData.relationship}
Description: ${formData.description}
Consent to Contact: ${formData.consentToContact ? 'Yes' : 'No'}
    `;
    window.open(`mailto:info@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const faqData = [
    {
      question: "What is the statute of limitations for wrongful death in California?",
      answer: "Generally, you have 2 years from the date of death to file a wrongful death lawsuit. However, important exceptions exist: Medical malpractice cases have either 1 year from discovery of negligence or 3 years from death, whichever comes first. Government claims require filing within 6 months. Minors can file within 2 years of turning 18. The discovery rule may extend deadlines if the cause wasn't immediately known. Contact us immediately to ensure you don't miss critical deadlines."
    },
    {
      question: "Who can file a wrongful death lawsuit in California?",
      answer: "California law prioritizes certain family members: surviving spouse or domestic partner, children, grandchildren (if no living children), parents (if no spouse/children), siblings (if entitled to inherit), putative spouse and their children, stepchildren or parents if dependent, minors who lived with deceased 180+ days and were 50%+ dependent, and anyone else financially dependent on the deceased. All eligible parties should join in one lawsuit due to California's \"one-action rule.\""
    },
    {
      question: "How much is my wrongful death case worth?",
      answer: "Case values vary significantly based on multiple factors. Economic damages include lost income/benefits, medical bills, funeral costs, and household services value. Non-economic damages cover loss of love, companionship, and guidance. Factors affecting value include the deceased's age and health, earning capacity, number of dependents, closeness of relationships, defendant's conduct severity, available insurance coverage, and any comparative fault. California settlements range from $250,000 to several million, averaging around $970,000. We provide detailed case evaluation during your free consultation."
    },
    {
      question: "What's the difference between wrongful death and survival actions?",
      answer: "Wrongful death claims compensate family members for their losses - lost support, companionship, and services. Damages go directly to family members. Survival actions recover damages the deceased could have claimed if they survived - medical bills, lost wages before death, property damage, and (through 2025) pain and suffering. These damages go to the estate for distribution. Both can be filed together, potentially under different damage caps for medical malpractice cases."
    },
    {
      question: "How much does it cost to hire a wrongful death attorney?",
      answer: "Nothing upfront. We work on contingency, meaning you pay no attorney fees unless we win. Our fee is typically 33-40% of the recovery amount. We advance all costs including filing fees, expert witnesses, investigations, and medical record retrieval. These costs are reimbursed from the settlement or verdict. You never pay out-of-pocket, removing financial barriers to justice. Our free consultation includes detailed fee explanation."
    },
    {
      question: "Can I still file if the defendant was found not guilty in criminal court?",
      answer: "Yes. Criminal and civil cases are separate with different standards of proof. Criminal cases require proof \"beyond a reasonable doubt\" while civil cases need only \"preponderance of evidence\" (more likely than not). Acquittal in criminal court doesn't prevent civil recovery. The O.J. Simpson case famously demonstrated this distinction. Additionally, many wrongful deaths don't involve criminal charges at all."
    },
    {
      question: "What if my loved one was partially at fault?",
      answer: "California follows \"pure comparative negligence,\" allowing recovery even if the deceased was partially at fault. However, compensation reduces by their percentage of fault. For example, if damages are $1 million but the deceased was 30% at fault, recovery would be $700,000. We work to minimize fault attribution and maximize recovery despite any comparative negligence."
    },
    {
      question: "How long does a wrongful death lawsuit take?",
      answer: "Timeline varies by case complexity. Simple cases with clear liability and adequate insurance may settle in 6-12 months. Average cases take 12-18 months. Complex cases involving multiple parties, disputed liability, or extensive damages often require 18-36 months. Medical malpractice and product liability cases typically take longer due to expert testimony requirements. We push for quick resolution while ensuring maximum compensation."
    },
    {
      question: "What damages are recoverable in California wrongful death cases?",
      answer: "Economic damages: lost financial support, lost gifts/benefits, funeral/burial expenses, household services value. Non-economic damages: loss of love, companionship, comfort, care, assistance, protection, affection, society, moral support, training, and guidance. Through 2025, survival actions can also recover the deceased's pain and suffering. Medical malpractice cases cap non-economic damages at $500,000 (increasing annually). Punitive damages may be available in survival actions for egregious conduct."
    },
    {
      question: "Should I accept the insurance company's settlement offer?",
      answer: "Never accept an offer without legal consultation. Initial offers are typically 20-50% below fair value. Insurance companies exploit grieving families who don't know their rights or case values. They may pressure quick settlements before you understand total losses. Once you accept and sign a release, you cannot seek additional compensation even if losses exceed the settlement. We evaluate offers and negotiate maximum compensation."
    },
    {
      question: "What evidence is needed for a wrongful death case?",
      answer: "Critical evidence includes: death certificate, autopsy report, medical records, police/accident reports, witness statements, photographs, video surveillance, employment records, tax returns, expert testimony, maintenance records (for equipment/vehicle cases), safety violation documentation, and correspondence. We handle all evidence gathering, preservation, and presentation."
    },
    {
      question: "Can I sue a government entity for wrongful death?",
      answer: "Yes, but special rules apply. You must file a government claim within 6 months of death. If denied, you have 6 additional months to file lawsuit. Government entities have certain immunities but can be liable for dangerous conditions, employee negligence, and failure to protect. Cases involve complex procedural requirements demanding immediate legal assistance."
    },
    {
      question: "What if the person who caused the death has no insurance?",
      answer: "Recovery options include: defendant's personal assets, employer liability if acting within employment scope, uninsured/underinsured motorist coverage, homeowner's or umbrella policies, dram shop liability (bars over-serving), premises liability insurance, product manufacturer liability, and crime victim compensation funds. We explore all potential recovery sources."
    },
    {
      question: "How are wrongful death settlements distributed?",
      answer: "Distribution depends on who files and their losses. Without agreement among heirs, courts distribute based on each heir's damages - financial dependency, relationship closeness, and individual losses. Surviving spouses typically receive largest portions. Minor children's shares may be placed in trust. Settlements aren't subject to creditor claims unless estate is recipient."
    },
    {
      question: "Are wrongful death settlements taxable?",
      answer: "Generally, wrongful death settlements aren't taxable under federal law. Compensation for physical injury or sickness is tax-exempt. However, punitive damages and interest earned on settlements are taxable. California doesn't tax wrongful death recoveries. Structured settlements can provide additional tax advantages. Consult a tax professional for specific guidance."
    },
    {
      question: "What if my loved one died from medical malpractice?",
      answer: "Medical malpractice wrongful death requires proving healthcare providers breached standard of care causing death. California caps non-economic damages at $500,000 (increasing to $1 million by 2034). You have 1 year from discovering malpractice or 3 years from death to file. Cases require medical expert testimony. We work with leading medical experts to prove negligence."
    },
    {
      question: "Can I recover punitive damages in a wrongful death case?",
      answer: "Not in the wrongful death claim itself, but potentially through a survival action if the defendant acted with malice, oppression, or fraud. Drunk driving, intentional harm, and conscious disregard for safety may warrant punitive damages. Exception: felony murder convictions allow punitive damages in wrongful death claims."
    },
    {
      question: "What's California's \"one-action rule\" for wrongful death?",
      answer: "All persons entitled to recover must join in single lawsuit. This prevents multiple suits against same defendant for same death. Heirs can have different attorneys but must coordinate claims. If heir is omitted, they can still claim their proportionate share of recovery. The rule ensures judicial efficiency and protects defendants from multiple proceedings."
    },
    {
      question: "How do I prove negligence caused the death?",
      answer: "We must establish: duty of care existed (legal obligation to act reasonably), breach of duty (failure to meet standard), causation (breach directly caused death), and damages (measurable losses resulted). Evidence includes expert testimony, violation of safety regulations, witness accounts, and documentation showing substandard conduct. Our experience proves negligence effectively."
    },
    {
      question: "Can stepchildren file wrongful death claims?",
      answer: "Yes, if they were financially dependent on the deceased stepparent. The dependency must be established through evidence of financial support, living arrangements, and relationship duration. Stepchildren compete with biological children and surviving spouse for recovery but can receive compensation reflecting their actual losses and dependency level."
    },
    {
      question: "What if death occurred at work?",
      answer: "Workers' compensation provides death benefits but prevents suing employers. However, third-party claims remain viable against equipment manufacturers, subcontractors, property owners, or drivers causing workplace deaths. These claims allow full damages including pain and suffering. We coordinate with workers' comp while pursuing third-party recovery for maximum compensation."
    },
    {
      question: "How does life insurance affect wrongful death claims?",
      answer: "Life insurance doesn't reduce wrongful death recovery. These are separate - life insurance is a contract benefit while wrongful death compensates for negligently-caused losses. Defendants cannot offset damages by life insurance proceeds. However, life insurance can provide immediate funds while wrongful death cases proceed."
    },
    {
      question: "What if multiple parties caused the death?",
      answer: "California follows \"joint and several liability\" for economic damages - each defendant is fully liable regardless of fault percentage. Non-economic damages are proportional to fault. We pursue all liable parties to maximize recovery sources. Multiple defendants often lead to higher settlements as parties seek to avoid trial."
    },
    {
      question: "Can I recover if death occurred years after injury?",
      answer: "Yes. The wrongful death statute of limitations begins at death, not injury. If someone dies from injuries years later, family has 2 years from death date to file. However, any prior personal injury settlement may affect available damages. Survival action may be barred if personal injury statute expired."
    },
    {
      question: "What if deceased had no close family?",
      answer: "Those entitled to property through intestate succession can file, potentially including distant relatives. If truly no heirs exist, no wrongful death claim is possible, though estate may pursue survival action. Putative spouses, stepchildren, and financial dependents may also have standing despite no blood relation."
    },
    {
      question: "How do I choose a wrongful death attorney?",
      answer: "Look for: specific wrongful death experience, trial capability, resources for complex litigation, expert witness access, strong reputation, compassionate approach, clear communication, and contingency fees. Former defense attorneys like us understand insurance tactics. Check reviews, case results, and professional standing. Free consultation should provide clear case assessment."
    },
    {
      question: "What's loss of consortium in wrongful death?",
      answer: "Compensation for loss of companionship, love, affection, society, sexual relations, and moral support. California recognizes these losses for spouses, children, and sometimes parents. Not measurable in dollars but juries award substantial amounts recognizing profound impact. Quality of relationship before death affects valuation."
    },
    {
      question: "Can I file if I wasn't legally married?",
      answer: "Registered domestic partners have same rights as spouses. \"Putative spouses\" believing in good faith they were married can also file. Long-term partners without legal status may file if financially dependent. Common law marriage isn't recognized in California, but relationships from common law states are honored."
    },
    {
      question: "What if defendant files bankruptcy?",
      answer: "Bankruptcy may discharge personal liability but insurance coverage remains available. Intentional acts causing death are non-dischargeable debts. Corporate defendants' insurance and assets may still provide recovery. We pursue all available sources including parent companies and individual actors."
    },
    {
      question: "How does wrongful death affect estate planning?",
      answer: "Wrongful death proceeds go directly to statutory beneficiaries, not through estate (avoiding probate and creditors). Survival action proceeds go to estate for distribution per will or intestate succession. Settlements may affect estate taxes. Coordinate with estate attorney for optimal structure."
    },
    {
      question: "Can grandparents file for grandchild's death?",
      answer: "Not typically, unless grandchild's parents are also deceased and grandparents would inherit through intestate succession. If grandparents were legal guardians or primary caretakers, they may have stronger standing. Financial dependency can also create eligibility."
    },
    {
      question: "What's the average jury verdict vs settlement?",
      answer: "Jury verdicts average higher than settlements but involve risk. California juries awarded average wrongful death verdicts around $1.8 million recently, while settlements averaged $970,000. However, verdicts can be appealed, reduced, or result in defense verdicts. Settlement provides certainty. We advise based on specific case factors."
    },
    {
      question: "How do I preserve evidence after death?",
      answer: "Immediately: photograph scene/injuries, preserve physical evidence, obtain witness contacts, request police reports, secure medical records, save correspondence, document expenses, maintain deceased's phone/computer, request autopsy, and notify potential defendants to preserve evidence. We send preservation letters preventing destruction of critical evidence."
    },
    {
      question: "What if death occurred out of state?",
      answer: "Jurisdiction depends on where death occurred, where defendants reside, and where negligent acts occurred. California residents may file here if defendants have California connections. Other states' laws may apply with different statutes of limitations and damage caps. We coordinate with out-of-state counsel when needed."
    },
    {
      question: "Can I recover attorney fees from defendant?",
      answer: "Generally no - each party pays own attorney fees. Exceptions include cases with fee-shifting statutes, contractual provisions, or frivolous defense conduct. Elder abuse cases allow fee recovery. Our contingency arrangement means you pay nothing unless we win, regardless of fee-shifting."
    },
    {
      question: "What's a survival action worth?",
      answer: "Depends on deceased's suffering duration and intensity before death, medical expenses incurred, lost wages between injury and death, and property damage. Through 2025, pain and suffering damages can be substantial. Instantaneous deaths have minimal survival values, while prolonged suffering yields significant recovery."
    },
    {
      question: "How do I handle media attention?",
      answer: "High-profile deaths attract media coverage. We handle all media interactions, protecting your privacy while leveraging public interest if beneficial. Avoid social media posts about the case. Direct all inquiries to us. Media attention can pressure defendants toward settlement but requires careful management."
    },
    {
      question: "Can I file against a bar for drunk driving death?",
      answer: "California's dram shop law is limited but bars can be liable for serving obviously intoxicated minors who cause death. Social host liability exists for providing alcohol to minors. Adult over-service typically doesn't create liability unless exceptional circumstances exist."
    },
    {
      question: "What if deceased was homeless?",
      answer: "Homeless individuals' lives have equal value under law. While economic damages may be limited, non-economic damages for loss of life, relationships, and human dignity remain substantial. Family members maintain full rights to pursue wrongful death regardless of deceased's housing status."
    },
    {
      question: "How are business losses handled?",
      answer: "If deceased owned a business, lost business value and income are recoverable. Expert valuation determines business worth and deceased's irreplaceable contributions. Key person insurance doesn't offset damages. Partnership agreements may affect distribution. Business succession planning should coordinate with wrongful death recovery."
    },
    {
      question: "Can I file if death was from COVID-19?",
      answer: "Potentially, if negligence caused exposure or inadequate treatment. Nursing homes, employers violating safety protocols, or healthcare providers failing standards may be liable. Some COVID legislation provides immunity, but gross negligence exceptions exist. Cases are evolving with mixed results requiring careful evaluation."
    },
    {
      question: "What's \"pecuniary loss\" in wrongful death?",
      answer: "Financial losses from death including lost earnings, benefits, services, support, gifts, and inheritance survivors would have received. Calculated using life expectancy, work-life expectancy, earnings history, and economic projections. Both past losses and future losses to survivors' life expectancies are recoverable."
    },
    {
      question: "How do I find witnesses after fatal accident?",
      answer: "We use multiple methods: canvas scene for surveillance cameras, check social media for posts about incident, review 911 calls, obtain police witness lists, post signs requesting information, check traffic cameras, interview first responders, and hire investigators. Early action preserves witness memories and availability."
    },
    {
      question: "Can I sue if my loved one signed a waiver?",
      answer: "Waivers don't always bar wrongful death claims. California doesn't enforce waivers for gross negligence, intentional conduct, or statutory violations. Waivers must be clear, conspicuous, and specifically address risks. Many waivers are poorly drafted or procedurally defective. We examine enforceability carefully."
    },
    {
      question: "What if I can't afford funeral expenses?",
      answer: "We can help arrange funeral financing or payment plans pending case resolution. Some funeral homes accept liens against settlements. County assistance may be available. Document all expenses for recovery. Reasonable funeral and burial costs are priority damages in settlements."
    },
    {
      question: "How is future income calculated?",
      answer: "Economists project earnings using: current income, anticipated raises/promotions, industry standards, inflation adjustments, work-life expectancy, benefits value, and retirement contributions. Self-employed and irregular earners require detailed analysis. Higher education and career trajectory significantly impact valuations. We retain leading economists for accurate projections."
    },
    {
      question: "What if police won't investigate?",
      answer: "Civil cases don't require criminal investigations. We conduct independent investigations using private investigators, accident reconstructionists, and experts. Subpoena power obtains records police won't pursue. Civil burden of proof is lower than criminal. We've succeeded many times without police cooperation."
    },
    {
      question: "Can siblings share in wrongful death recovery?",
      answer: "Only if no spouse, children, grandchildren, or parents survive, and siblings would inherit through intestate succession. Minor siblings dependent on deceased may qualify regardless. Adult siblings rarely recover unless they prove financial dependency or inherit due to no closer relatives surviving."
    },
    {
      question: "What's the role of autopsy in wrongful death?",
      answer: "Autopsy determines cause of death, essential for proving causation. Coroner's autopsy may be insufficient; private autopsy provides detailed analysis. Toxicology, microscopic examination, and expert interpretation reveal negligence evidence. Request autopsy immediately as delays compromise findings. Costs are recoverable as case expenses."
    },
    {
      question: "What compensation can children receive for parent's death?",
      answer: "Children can recover for loss of financial support, loss of guidance and training, loss of care and companionship, and household services. Younger children typically receive larger awards due to longer dependency. Adult children may recover if they prove financial dependency or close relationship. Earning capacity affects calculations."
    },
    {
      question: "How do I protect my wrongful death claim?",
      answer: "Don't discuss the case publicly, avoid social media posts about incident, preserve all evidence, follow all medical treatment, don't sign anything from insurance companies, document all expenses and losses, keep detailed records, and contact us immediately. Early legal representation protects your rights and maximizes recovery."
    },
    {
      question: "Can I file if my spouse died in another country?",
      answer: "Potentially, depending on jurisdiction rules and where defendants can be sued. U.S. courts may have jurisdiction over U.S. defendants even for foreign deaths. International treaties and foreign laws may apply. These cases involve complex procedural issues requiring immediate legal consultation to preserve rights."
    },
    {
      question: "What if the wrongful death was suicide?",
      answer: "Suicide doesn't automatically bar wrongful death claims if negligence contributed. Medical malpractice, defective products, premises liability, or failure to prevent foreseeable suicide may create liability. Mental health provider negligence, inadequate hospital security, or medication-induced suicidal behavior can support claims."
    },
    {
      question: "How do pre-existing conditions affect wrongful death cases?",
      answer: "Pre-existing conditions don't bar wrongful death claims if negligence accelerated death or caused death earlier than natural progression. The \"eggshell skull\" rule holds defendants liable for consequences of their negligence even if victim was more vulnerable. Medical records and expert testimony establish causation despite pre-existing health issues."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Wrongful Death Attorney | Expert Legal Representation | Free Consultation"
        description="California wrongful death lawyers fighting for families who lost loved ones. Former defense attorney insight. Free case evaluation, contingency fees, maximum compensation."
        canonical="/practice-areas/wrongful-death"
      />

      

      {/* Hero Section - Same ratio as Medical Malpractice */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              California Wrongful Death Attorney
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Fighting for Families Who Lost Loved Ones
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Former defense attorney providing compassionate legal representation for wrongful death cases. Free consultation, no fees unless we win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                onClick={() => navigate('/wrongful-death-case-evaluation')}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Free Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8" ref={contentRef}>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="lg:w-2/3 space-y-8">
            {/* Navigation Tabs */}
            <div className="content-section">
              <div className="flex flex-wrap gap-2 mb-8 p-1 bg-gray-100 rounded-lg">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        const el = document.getElementById(tab.id);
                        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-all ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground shadow-sm'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tab Content */}
              <section id="overview">
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">California Wrongful Death Attorney - Compassionate Legal Representation</h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                      <div>
                        <img 
                          src={legalConsultationImage} 
                          alt="Legal consultation for wrongful death cases" 
                          className="w-full h-64 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <p className="text-lg text-gray-700 mb-4">
                          When a loved one dies due to another's negligence, surviving family members face overwhelming grief while confronting complex legal challenges. California's wrongful death laws provide a path to justice and financial recovery, but navigating these claims requires experienced legal representation.
                        </p>
                        <p className="text-lg text-gray-700 mb-4">
                          At Trembach Law, we understand the profound impact of losing a family member to preventable circumstances. Our compassionate approach combines aggressive legal advocacy with understanding of your emotional needs during this difficult time.
                        </p>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">What Constitutes Wrongful Death?</h3>
                        <p className="text-lg text-gray-700 mb-4">
                          Under California Code of Civil Procedure Section 377.60, wrongful death occurs when someone dies due to another party's wrongful act or negligence. Essential elements include:
                        </p>
                        <ul className="space-y-2 text-gray-700 mb-6">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Death occurred:</strong> A person died (not just injured)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Negligence or wrongful act:</strong> Another party's actions or failures caused the death</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Survival of dependents:</strong> Family members survive who suffer losses</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span><strong>Monetary damages:</strong> Quantifiable financial losses resulted</span>
                          </li>
                        </ul>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                          <h4 className="text-lg font-semibold text-blue-900 mb-3">Former Defense Attorney Advantage</h4>
                          <p className="text-blue-800">
                            As a former defense attorney, I know exactly how insurance companies and corporate defendants operate. I've seen their playbooks, understand their strategies, and know their pressure points. This insider knowledge allows us to anticipate their moves, counter their tactics, and maximize your recovery.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="evaluation">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Free Wrongful Death Case Evaluation</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={courthouseImage} 
                        alt="California courthouse representing legal justice" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Evaluate</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <Scale className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Strength of negligence evidence and liability</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Economic damages including lost income and benefits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Non-economic losses such as companionship and guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Statute of limitations and filing deadlines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Available insurance coverage and assets</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <Card className="p-6">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">Start Your Free Evaluation</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                              <Input
                                value={formData.firstName}
                                onChange={(e) => handleInputChange('firstName', e.target.value)}
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                              <Input
                                value={formData.lastName}
                                onChange={(e) => handleInputChange('lastName', e.target.value)}
                                required
                              />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                            <Input
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                            <Input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Date of Death</label>
                            <Input
                              type="date"
                              value={formData.dateOfDeath}
                              onChange={(e) => handleInputChange('dateOfDeath', e.target.value)}
                            />
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Cause of Death</label>
                            <Select onValueChange={(value) => handleInputChange('causeOfDeath', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select cause" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="motor-vehicle">Motor Vehicle Accident</SelectItem>
                                <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                                <SelectItem value="workplace">Workplace Accident</SelectItem>
                                <SelectItem value="premises-liability">Premises Liability</SelectItem>
                                <SelectItem value="product-defect">Defective Product</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Your Relationship to Deceased</label>
                            <Select onValueChange={(value) => handleInputChange('relationship', value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select relationship" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="spouse">Spouse</SelectItem>
                                <SelectItem value="child">Child</SelectItem>
                                <SelectItem value="parent">Parent</SelectItem>
                                <SelectItem value="sibling">Sibling</SelectItem>
                                <SelectItem value="partner">Domestic Partner</SelectItem>
                                <SelectItem value="other">Other Family Member</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description of Incident</label>
                            <Textarea
                              value={formData.description}
                              onChange={(e) => handleInputChange('description', e.target.value)}
                              placeholder="Please describe what happened..."
                              rows={4}
                            />
                          </div>
                          
                          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                            Start Free Case Evaluation
                          </Button>
                        </form>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              <section id="what-to-do">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">What to Do After a Wrongful Death</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={legalProcessImage} 
                        alt="Legal process for wrongful death claims" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Immediate Actions (First 48 Hours)</h3>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Obtain death certificate and autopsy report</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Request all medical records and bills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Camera className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Photograph accident scene if applicable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Identify and contact witnesses</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Avoid giving statements to insurance companies</span>
                        </li>
                      </ul>
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-red-900 mb-3">Don't Wait - Evidence Disappears Quickly</h4>
                        <p className="text-red-800">
                          Critical evidence can be lost, destroyed, or altered within days. Security footage is often deleted, witnesses forget details, and physical evidence deteriorates. Contact us immediately to preserve your case.
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Week 1: Building Your Case</h3>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <Briefcase className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Gather employment and income records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Home className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Document household services provided</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Calculate financial dependency</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Preserve financial records and tax returns</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Map className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span>Secure accident/incident reports</span>
                        </li>
                      </ul>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Long-term Strategy</h3>
                      <ul className="space-y-3 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <Scale className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>File claims within statute of limitations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Coordinate with all eligible family members</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Conduct thorough investigation and discovery</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Gavel className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>Negotiate settlement or proceed to trial</span>
                        </li>
                      </ul>
                      
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">We Handle Everything</h4>
                        <p className="text-green-800">
                          From evidence preservation to final settlement, our experienced team manages every aspect of your wrongful death claim while you focus on healing and remembering your loved one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section id="types-of-cases">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Types of Wrongful Death Cases</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={vehicleAccidentsImage} 
                        alt="Motor vehicle accident scene representing wrongful death cases" 
                        className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <Car className="w-6 h-6 text-red-600" />
                        Motor Vehicle Accidents
                      </h3>
                      <p className="text-gray-700 mb-4">
                        Car, truck, motorcycle, and pedestrian accidents remain leading causes of wrongful death. Factors include drunk driving, distracted driving, speeding, reckless driving, defective vehicles, and dangerous road conditions.
                      </p>
                      
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800">
                            Learn more about vehicle accidents <ChevronDown className="w-4 h-4 ml-1" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <p className="text-gray-700 mb-3">
                            Commercial truck accidents often involve multiple liable parties including drivers, trucking companies, and maintenance providers. We investigate all potential defendants to maximize recovery.
                          </p>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Driver negligence and violations</li>
                            <li>• Vehicle defects and maintenance failures</li>
                            <li>• Road design and maintenance issues</li>
                            <li>• Commercial liability and insurance coverage</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </div>
                    
                    <div>
                      <img 
                        src={medicalImage} 
                        alt="Medical facility representing healthcare negligence" 
                        className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                        Medical Malpractice
                      </h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Healthcare providers' negligence causes thousands of preventable deaths annually through misdiagnosis, surgical errors, medication mistakes, and emergency room negligence.
                      </p>
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-800 text-xs">
                            View details <ChevronDown className="w-3 h-3 ml-1" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 p-3 bg-blue-50 rounded text-xs">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Misdiagnosis and delayed diagnosis</li>
                            <li>• Surgical and anesthesia errors</li>
                            <li>• Birth injuries and obstetric negligence</li>
                            <li>• Hospital-acquired infections</li>
                            <li>• Nursing home neglect</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-green-600" />
                        Workplace Accidents
                      </h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Construction falls, equipment accidents, electrocutions, and toxic exposures cause workplace fatalities. Third-party claims can yield additional recovery beyond workers' compensation.
                      </p>
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto text-green-600 hover:text-green-800 text-xs">
                            View details <ChevronDown className="w-3 h-3 ml-1" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 p-3 bg-green-50 rounded text-xs">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Construction site accidents</li>
                            <li>• Equipment manufacturer liability</li>
                            <li>• Toxic exposure and chemicals</li>
                            <li>• Third-party contractor negligence</li>
                            <li>• Safety violation consequences</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                    
                    <Card className="p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-purple-600" />
                        Premises Liability
                      </h4>
                      <p className="text-gray-700 text-sm mb-3">
                        Property owner negligence causing deaths through slip and falls, inadequate security, swimming pool drownings, and building collapses.
                      </p>
                      <Collapsible>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-800 text-xs">
                            View details <ChevronDown className="w-3 h-3 ml-1" />
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-3 p-3 bg-purple-50 rounded text-xs">
                          <ul className="space-y-1 text-gray-700">
                            <li>• Slip and fall accidents</li>
                            <li>• Inadequate security leading to assault</li>
                            <li>• Swimming pool drownings</li>
                            <li>• Fire code violations</li>
                            <li>• Carbon monoxide poisoning</li>
                          </ul>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  </div>
                </div>
              </section>

              <section id="proving-negligence">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Proving Negligence in Wrongful Death Cases</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={investigationImage} 
                        alt="Legal investigation evidence for wrongful death cases" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Four Elements of Negligence</h3>
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-full p-3">
                            <span className="text-blue-600 font-bold text-lg">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Duty of Care</h4>
                            <p className="text-gray-700">
                              The defendant had a legal obligation to act reasonably and avoid causing harm. This duty varies by relationship and circumstances.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-full p-3">
                            <span className="text-blue-600 font-bold text-lg">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Breach of Duty</h4>
                            <p className="text-gray-700">
                              The defendant failed to meet the required standard of care through action or inaction that a reasonable person wouldn't have done.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-full p-3">
                            <span className="text-blue-600 font-bold text-lg">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Causation</h4>
                            <p className="text-gray-700">
                              The breach directly caused the death. We must prove both factual causation ("but for" the breach) and legal causation (foreseeable consequence).
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-blue-100 rounded-full p-3">
                            <span className="text-blue-600 font-bold text-lg">4</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Damages</h4>
                            <p className="text-gray-700">
                              Quantifiable losses resulted from the death, including economic and non-economic damages to surviving family members.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <img 
                        src={legalProcessImage} 
                        alt="Legal evidence and documentation" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Types of Evidence We Use</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Expert witness testimony from professionals</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Camera className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Photo and video evidence of scene/conditions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <BookOpen className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Safety regulation violations and standards</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Witness testimony and statements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Activity className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Medical records and autopsy findings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>Accident reconstruction and analysis</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section id="compensation">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Wrongful Death Compensation in California</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={compensationImage} 
                        alt="Compensation calculation for wrongful death" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Economic Damages</h3>
                      <p className="text-gray-700 mb-4">
                        California law allows recovery of quantifiable financial losses including:
                      </p>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Financial support:</strong> Lost income, benefits, and future earnings the deceased would have provided</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Funeral and burial expenses:</strong> Reasonable costs for final arrangements</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Medical bills:</strong> Treatment costs between injury and death</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Household services:</strong> Value of cooking, cleaning, childcare, maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Lost gifts and benefits:</strong> Expected inheritance, gifts, benefits</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Non-Economic Damages</h3>
                      <p className="text-gray-700 mb-4">
                        Compensation for intangible losses that profoundly impact survivors:
                      </p>
                      <ul className="space-y-2 text-gray-700 mb-6">
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Loss of love, companionship, comfort, and affection</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Loss of moral support and guidance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Loss of protection and care</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Loss of marital relations (for spouses)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span>Loss of training and guidance (for children)</span>
                        </li>
                      </ul>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">📌 New California Law (Through 2025)</h4>
                        <p className="text-blue-800">
                          Senate Bill 447 temporarily allows recovery of the deceased's pain and suffering before death in survival actions filed between 2022-2025. This significant change can substantially increase compensation.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        <span>Learn More About Damages and Valuation Factors</span>
                        <ChevronDown className="w-4 h-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-6 p-6 bg-gray-50 rounded-lg">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Survival Actions vs. Wrongful Death Claims</h4>
                          <p className="text-gray-700 mb-3">California allows two types of claims after a death:</p>
                          <p className="text-gray-700 mb-3">
                            <strong>Wrongful Death Claims:</strong> Filed by family members for their own losses. Damages go directly to survivors based on their relationship and dependency on the deceased.
                          </p>
                          <p className="text-gray-700">
                            <strong>Survival Actions:</strong> Filed by the estate for damages the deceased could have claimed if they survived. This includes the deceased's pain and suffering (through 2025), medical expenses, lost wages before death, property damage, and potentially punitive damages.
                          </p>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">Factors Affecting Compensation Amount</h4>
                          <ul className="space-y-2 text-gray-700">
                            <li>• Age and health of deceased</li>
                            <li>• Income and earning capacity</li>
                            <li>• Number of dependents</li>
                            <li>• Relationship closeness</li>
                            <li>• Defendant's conduct</li>
                            <li>• Available insurance</li>
                            <li>• Comparative fault</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </section>

              <section id="time-limits">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">California Wrongful Death Time Limits</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={timeLimitsImage} 
                        alt="Time limits and deadlines for wrongful death cases" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                      />
                      
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                        <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center gap-2">
                          <Clock className="w-6 h-6" />
                          Critical Deadlines
                        </h3>
                        <ul className="space-y-3 text-red-800">
                          <li><strong>General Wrongful Death:</strong> 2 years from date of death</li>
                          <li><strong>Medical Malpractice:</strong> 1 year from discovery OR 3 years from death (whichever comes first)</li>
                          <li><strong>Government Claims:</strong> 6 months to file claim, then 6 months to sue if denied</li>
                          <li><strong>Product Liability:</strong> 2 years from death or discovery</li>
                        </ul>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Important Exceptions</h3>
                      <ul className="space-y-3 text-gray-700">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Discovery Rule:</strong> Deadline may extend if negligence wasn't immediately apparent</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Fraudulent Concealment:</strong> Defendant's concealment can extend deadlines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Minors:</strong> Can file within 2 years of turning 18</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span><strong>Out-of-State Accidents:</strong> Other state laws may apply</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4">Don't Wait - Act Immediately</h3>
                        <p className="text-blue-800 mb-4">
                          Missing the statute of limitations deadline bars your claim forever, regardless of how strong your case may be. Evidence also deteriorates quickly, making immediate action crucial.
                        </p>
                        
                        <h4 className="font-semibold text-blue-900 mb-3">Why Early Action Matters:</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li>• Witnesses' memories fade</li>
                          <li>• Physical evidence disappears</li>
                          <li>• Security footage gets deleted</li>
                          <li>• Documents may be destroyed</li>
                          <li>• Investigation becomes more difficult</li>
                        </ul>
                        
                        <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700">
                          <Phone className="w-4 h-4 mr-2" />
                          Call Now - Free Consultation
                        </Button>
                      </Card>
                    </div>
                  </div>
                </div>
              </section>

              <section id="faq">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
                  
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <Card key={index} className="border border-gray-200">
                        <CardHeader 
                          className="cursor-pointer hover:bg-gray-50 transition-colors"
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        >
                          <CardTitle className="flex justify-between items-center text-lg font-medium">
                            <span className="text-left pr-4">{faq.question}</span>
                            {expandedFaq === index ? 
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" /> : 
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            }
                          </CardTitle>
                        </CardHeader>
                        
                        {expandedFaq === index && (
                          <CardContent className="pt-0">
                            <p className="text-gray-700 leading-relaxed text-base">
                              {faq.answer}
                            </p>
                          </CardContent>
                          )}
                      </Card>
                    ))}
                  </div>
                </div>
              </section>

              <section id="resources">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Wrongful Death Resources & Tools</h2>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-center">
                        <Calculator className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Compensation Calculator</h3>
                        <p className="text-gray-600 mb-4">
                          Estimate potential compensation for your wrongful death case based on California law and recent settlements.
                        </p>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700"
                          onClick={() => navigate('/wrongful-death-compensation-calculator')}
                        >
                          Calculate Compensation
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-center">
                        <FileText className="w-12 h-12 text-green-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Evaluation</h3>
                        <p className="text-gray-600 mb-4">
                          Get a comprehensive evaluation of your wrongful death case strength and potential outcomes.
                        </p>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700"
                          onClick={() => navigate('/wrongful-death-case-evaluation')}
                        >
                          Start Evaluation
                        </Button>
                      </div>
                    </Card>
                    
                    <Card className="p-6 hover:shadow-lg transition-shadow">
                      <div className="text-center">
                        <BookOpen className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Medical Guidance</h3>
                        <p className="text-gray-600 mb-4">
                          Comprehensive guide to California wrongful death law and medical support during your case.
                        </p>
                        <Button 
                          className="w-full bg-purple-600 hover:bg-purple-700"
                          onClick={() => navigate('/wrongful-death-medical-guidance')}
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          Access Guide
                        </Button>
                      </div>
                    </Card>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Resources</h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <img 
                          src={familyImage} 
                          alt="Family support during wrongful death case" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">California Legal Resources</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• California Code of Civil Procedure Section 377.60</li>
                          <li>• State Bar of California Attorney Directory</li>
                          <li>• California Courts Self-Help Resources</li>
                          <li>• Department of Consumer Affairs</li>
                        </ul>
                      </div>
                      
                      <div>
                        <img 
                          src={medicalImage} 
                          alt="Medical support and healthcare resources" 
                          className="w-full h-48 object-cover rounded-lg shadow-lg mb-4"
                        />
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Support Organizations</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Mothers Against Drunk Driving (MADD)</li>
                          <li>• Parents of Murdered Children (POMC)</li>
                          <li>• Compassionate Friends</li>
                          <li>• Victim Rights Law Center</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:w-1/3">
            <div className="sticky top-24 space-y-6">
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-card bg-white border-gray-200 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-center text-gray-900">
                    3 Ways to Start Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3"
                    onClick={() => {
                      const subject = 'Free Wrongful Death Case Evaluation';
                      const body = 'I would like to start a free wrongful death case evaluation.';
                      window.open(`mailto:info@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Consultation
                  </Button>
                  
                    <Button 
                      variant="outline" 
                      className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3"
                      onClick={() => navigate('/wrongful-death-compensation-calculator')}
                    >
                      <Calculator className="w-5 h-5 mr-2" />
                      Compensation Calculator
                    </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-blue-800">
                    <li className="flex items-start gap-2">
                      <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Time Limit:</strong> Generally 2 years from date of death</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <DollarSign className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>No Upfront Costs:</strong> We work on contingency</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Users className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Who Can File:</strong> Spouse, children, parents, dependents</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Scale className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Damages:</strong> Economic + non-economic losses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span><strong>Former Defense Attorney:</strong> Inside knowledge advantage</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply for California */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't Wait - Time Limits Apply for California Wrongful Death Cases
            </h2>
            <p className="text-xl mb-8 text-red-100">
              California's statute of limitations for wrongful death is generally 2 years from the date of death. Missing this deadline means losing your right to seek compensation forever. Evidence also disappears quickly, making immediate action crucial for your case.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Time is Critical</h3>
                <p className="text-red-100">Evidence disappears and witnesses forget. Act now to preserve your case.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">Former Defense Attorney</h3>
                <p className="text-red-100">I know insurance company tactics from the inside. Let me fight for you.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">No Upfront Costs</h3>
                <p className="text-red-100">You pay nothing unless we win your wrongful death case.</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3"
                onClick={() => navigate('/wrongful-death-case-evaluation')}
              >
                <FileText className="w-5 h-5 mr-2" />
                Start Free Case Evaluation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3"
                onClick={() => window.open('tel:8181234567')}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567 Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WrongfulDeath;