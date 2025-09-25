import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navigation from '@/components/Navigation';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
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
  Truck,
  Construction,
  Wrench,
  Gavel,
  Eye,
  CheckCircle,
  Calculator,
  BookOpen,
  HelpCircle,
  Play,
  Pause,
  RotateCcw,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/truck-accidents-hero-bright.jpg';
import sidebarImage from '@/assets/practice-areas/truck-18-wheeler.jpg';
import legalProcessImage from '@/assets/practice-areas/truck-legal-documentation.jpg';
import truckingRegulationsImage from '@/assets/practice-areas/truck-safety-inspection.jpg';
import investigationImage from '@/assets/practice-areas/truck-legal-investigation.jpg';
import medicalTreatmentImage from '@/assets/practice-areas/truck-medical-care.jpg';
import compensationInsuranceImage from '@/assets/practice-areas/truck-compensation-insurance.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const TruckAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentLocation: '',
    injuryType: '',
    vehicleType: '',
    truckCompany: '',
    policeReport: '',
    medicalTreatment: '',
    description: '',
    truckType: '',
    accidentType: '',
    insuranceClaim: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS', icon: Heart },
    { id: 'trucking-regulations', label: 'TRUCKING REGULATIONS', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Gavel },
    { id: 'investigation', label: 'INVESTIGATION', icon: Eye },
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
    const url = new URL('/case-evaluation', window.location.origin);
    window.open(url.href, '_self');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What should I do immediately after a truck accident in California?",
      answer: "First, ensure safety and call 911 for medical help and police response. Move to safety if possible. Document everything: take photos of vehicles, injuries, road conditions, and truck company information. Get the driver's CDL, DOT number, insurance details, and company information. Collect witness contact information. Seek immediate medical attention even if you feel fine - some injuries appear days later. Report to DMV within 10 days if damages exceed $1,000 or injuries occurred. Most importantly, don't give statements to insurance companies and contact an attorney immediately to preserve evidence."
    },
    {
      question: "How much is my California truck accident case worth?",
      answer: "Case values vary significantly based on injury severity, medical expenses, lost wages, and impact on life quality. Minor injuries might settle for tens of thousands, while catastrophic injuries often result in multi-million dollar settlements. Factors include: current and future medical costs, lost income and earning capacity, property damage, pain and suffering, permanent disability, and punitive damages for egregious conduct. Truck cases typically yield higher settlements than car accidents due to severe injuries and higher insurance coverage. We provide free case evaluations to estimate your specific case value."
    },
    {
      question: "Who can be held liable in a California truck accident?",
      answer: "Multiple parties may share liability: the truck driver for negligent operation, the trucking company under vicarious liability or negligent hiring/training, cargo loaders for improper loading, maintenance companies for faulty repairs, truck manufacturers for defective parts, and government entities for dangerous road conditions. California follows joint and several liability, meaning you can recover full damages from any liable party. We investigate thoroughly to identify all responsible parties and insurance coverage sources."
    },
    {
      question: "What is the statute of limitations for truck accidents in California?",
      answer: "California provides two years from the accident date to file personal injury lawsuits. For wrongful death, it's two years from the date of death. Property damage claims have three years. Government entity claims require filing within six months. These deadlines are strict - missing them forfeits your right to compensation. However, starting immediately preserves evidence, secures witness testimony, and prevents trucking companies from destroying logs (legally destroyed after six months). Contact us immediately to protect your rights."
    },
    {
      question: "How long will my truck accident case take to settle?",
      answer: "Timeline depends on injury severity, liability disputes, and insurance company cooperation. Simple cases with clear liability might settle in 3-6 months. Complex cases involving severe injuries, multiple parties, or liability disputes can take 1-2 years. Cases going to trial may take 2-3 years. We work efficiently while ensuring maximum compensation - rushing settlements often means accepting less. Our reputation for trial readiness often accelerates reasonable settlement offers."
    },
    {
      question: "What if I was partially at fault for the accident?",
      answer: "California follows pure comparative negligence, allowing recovery even if you're 99% at fault. Your compensation reduces by your fault percentage. If damages are $1 million and you're 20% at fault, you receive $800,000. Insurance companies aggressively claim victim fault to reduce payouts. Common tactics include claiming you were speeding, following too closely, or distracted. Our defense experience reveals these strategies, and we fight to minimize any fault attribution, maximizing your recovery."
    },
    {
      question: "How much does hiring a truck accident lawyer cost?",
      answer: "We work on contingency fees - you pay nothing upfront and owe nothing unless we win. Our fee is a percentage of recovery (typically 33-40%). We advance all case costs including investigations, expert witnesses, court filings, and medical records. If we don't win, you owe nothing. This structure ensures we're invested in maximizing your recovery. Initial consultations are always free, and you'll know all fee structures before signing anything."
    },
    {
      question: "What evidence is crucial in truck accident cases?",
      answer: "Critical evidence includes: Electronic Logging Device (ELD) data showing hours driven, black box data recording speed and braking, driver logs and inspection reports, maintenance records, driver qualification files, drug/alcohol test results, cargo manifests and weight tickets, surveillance footage, witness statements, and police reports. Time-sensitive evidence like skid marks and vehicle positions disappear quickly. Trucking companies can legally destroy logs after six months. We immediately send preservation letters and gather evidence before it's lost."
    },
    {
      question: "What federal regulations apply to truck accidents?",
      answer: "The Federal Motor Carrier Safety Administration (FMCSA) regulates commercial trucking. Key regulations include: Hours of Service limiting driving to 11 hours in 14-hour periods, mandatory 30-minute breaks after 8 hours, drug and alcohol testing requirements, minimum insurance coverage, vehicle inspection and maintenance standards, cargo securement rules, and CDL licensing requirements. Violations of these regulations often contribute to accidents and strengthen liability claims. Our expertise in FMCSA regulations helps prove negligence."
    },
    {
      question: "Should I accept the trucking company's settlement offer?",
      answer: "Never accept initial offers without legal consultation. First offers are typically 10-20% of case value. Insurance companies count on victims not knowing their rights or case values. They offer quick settlements before you understand injury severity or long-term impacts. Once accepted, you cannot pursue additional compensation even if injuries worsen. We evaluate offers against true case value, negotiate aggressively, and ensure settlements cover all current and future needs."
    },
    {
      question: "What if the truck driver was an independent contractor?",
      answer: "Trucking companies often claim drivers are independent contractors to avoid liability. However, California law looks at actual control, not labels. If the company controls routes, schedules, equipment, or methods, they may be liable regardless of contractor status. The ABC test under AB5 reclassified many truckers as employees. Federal motor carrier regulations also impose non-delegable duties on companies. We pierce through contractor shields to hold companies accountable."
    },
    {
      question: "What are common truck accident injuries?",
      answer: "Truck accidents cause severe injuries including: traumatic brain injuries (TBI) affecting cognitive function, spinal cord injuries causing paralysis, multiple fractures requiring surgery, internal organ damage, severe burns from fuel fires, amputation of limbs, whiplash and neck injuries, PTSD and psychological trauma. The force involved often causes multiple simultaneous injuries requiring extensive medical treatment, rehabilitation, and lifetime care. These catastrophic injuries justify substantial compensation."
    },
    {
      question: "Can I sue if a loved one died in a truck accident?",
      answer: "Yes, California's wrongful death statute allows specific family members to seek compensation. Eligible parties include spouses, domestic partners, children, and if none exist, anyone entitled to property through intestate succession. Recoverable damages include funeral expenses, lost financial support, loss of companionship, and household services value. Survival actions also allow recovery for the deceased's pain and suffering before death. We handle these sensitive cases with compassion while aggressively pursuing maximum compensation."
    },
    {
      question: "What if the truck was carrying hazardous materials?",
      answer: "Hazmat accidents involve additional regulations and higher insurance requirements ($5 million minimum). Exposure to dangerous chemicals causes immediate injuries and long-term health effects. Additional liable parties may include chemical manufacturers and shippers. Special cleanup costs and environmental damage create additional claims. Federal Hazardous Materials Regulations impose strict requirements often violated. These cases require specialized expertise in hazmat regulations and toxic exposure injuries."
    },
    {
      question: "How do truck accidents differ from car accidents legally?",
      answer: "Truck accidents involve federal regulations, multiple liable parties, higher insurance coverage, and more severe injuries. Evidence includes specialized data like ELDs and maintenance records. Trucking companies deploy rapid response teams and aggressive legal defense. Discovery is more complex, requiring expertise in DOT regulations. Damages are typically much higher due to catastrophic injuries. These complexities require attorneys experienced specifically in truck accident litigation."
    },
    {
      question: "What is a jackknife accident?",
      answer: "Jackknifing occurs when a truck's trailer swings out to form a 90-degree angle with the cab, resembling a folding pocket knife. Causes include sudden braking, equipment failure, improper loading, and slippery conditions. These accidents often involve multiple vehicles as the truck blocks multiple lanes. Jackknifing indicates driver error or equipment problems, strengthening liability claims. Recovery focuses on determining why the jackknife occurred and which safety measures were violated."
    },
    {
      question: "What are underride accidents?",
      answer: "Underride accidents occur when smaller vehicles slide under truck trailers, often shearing off the car's roof. These catastrophic accidents frequently cause decapitation or severe head injuries. Federal law requires rear underride guards, but many are inadequate or poorly maintained. Side underride guards aren't required despite safety advocates' efforts. These accidents often result from trucks making unsafe turns or sudden stops. Liability includes both driver negligence and equipment inadequacy."
    },
    {
      question: "Can I recover damages if I wasn't wearing a seatbelt?",
      answer: "Yes, but California's 'seatbelt defense' may reduce compensation for injuries that seatbelts would have prevented or lessened. The defense cannot eliminate your claim entirely, only reduce damages attributable to not wearing a seatbelt. Insurance companies aggressively pursue this defense. We counter with expert testimony showing injuries would have occurred regardless or that the truck accident's severity made seatbelts irrelevant."
    },
    {
      question: "What if I was hit by a delivery truck (FedEx, UPS, Amazon)?",
      answer: "Delivery truck accidents involve unique considerations. Major companies have substantial insurance and assets but aggressive legal teams. Amazon's DSP (Delivery Service Partner) program attempts limiting liability through contractors. However, companies maintaining control over drivers, routes, and standards remain liable. Delivery pressure causing speeding and unsafe practices strengthens negligence claims. These cases often settle favorably due to companies protecting brand reputation."
    },
    {
      question: "Should I talk to the trucking company's insurance adjuster?",
      answer: "Never speak with their insurance without an attorney. Adjusters are trained to minimize claims through tactics like recorded statements used against you, getting admissions of partial fault, quick lowball settlements, and requesting unnecessary authorizations. They seem friendly but work against your interests. Let us handle all insurance communications, protecting your rights and maximizing recovery."
    },
    {
      question: "What medical treatment should I seek after a truck accident?",
      answer: "Seek emergency care immediately, even without obvious injuries. Get comprehensive evaluation including head CT, spine X-rays, and internal organ assessment. Follow up with specialists for ongoing symptoms. Document all treatment, medications, and therapy. Keep records of pain levels and limitations. Don't skip appointments - gaps in treatment hurt claims. We connect you with doctors providing treatment on lien basis if you lack insurance."
    },
    {
      question: "What if the truck driver was drunk or on drugs?",
      answer: "Impaired driving strengthens your case significantly. FMCSA requires drug/alcohol testing after accidents. Positive tests or refusals create strong liability and justify punitive damages. Criminal charges help but aren't required for civil recovery. Trucking companies may be liable for inadequate testing, ignoring warning signs, or pressuring drivers leading to substance use. These cases often result in substantial settlements."
    },
    {
      question: "Can I sue the government if poor road conditions contributed?",
      answer: "Yes, government entities may be liable for dangerous road conditions they knew or should have known about. This includes poor maintenance, inadequate signage, design defects, and construction zones. However, claims against government entities require filing notice within six months and face immunity defenses. We navigate these complex requirements, having successfully sued cities, counties, and Caltrans for road-related accidents."
    },
    {
      question: "What are California's truck weight limits?",
      answer: "California limits trucks to 80,000 pounds gross weight without special permits. Single axles cannot exceed 20,000 pounds, tandem axles 34,000 pounds. Overweight trucks cause brake failure, tire blowouts, and bridge damage. Weigh station avoidance and falsified weight tickets indicate violations. Overweight violations strengthen negligence claims and may trigger punitive damages for conscious safety disregard."
    },
    {
      question: "How do I know if I have a valid truck accident case?",
      answer: "Valid cases typically involve: injuries requiring medical treatment, another party's negligence or violation, and damages exceeding insurance deductibles. Even seemingly minor accidents may have valid claims due to high insurance coverage and potential injuries appearing later. We provide free case evaluations, reviewing police reports, medical records, and circumstances to determine viability. There's no obligation, and consultations are confidential."
    },
    {
      question: "What if the truck accident happened in a construction zone?",
      answer: "Construction zone accidents involve additional complexities and potential liable parties. Enhanced penalties apply for violations in construction zones. Construction companies may be liable for inadequate warnings, poor traffic control, or dangerous conditions. Truck drivers must exercise extra caution in work zones. These accidents often involve multiple defendants including the trucking company, construction contractor, and possibly Caltrans. Documentation of construction zone setup and safety measures becomes crucial evidence."
    },
    {
      question: "How does driver fatigue contribute to truck accidents?",
      answer: "Driver fatigue causes reaction times similar to alcohol impairment. Studies show being awake 18 hours equals 0.08 BAC impairment. Truckers driving 70+ hours weekly face chronic exhaustion. Warning signs include lane drifting, speed variations, and missing exits. Electronic logging devices track hours but drivers find workarounds. Trucking companies pushing unrealistic schedules share liability. Fatigue-related accidents often occur between 2-6 AM and 2-4 PM when alertness naturally drops."
    },
    {
      question: "What compensation is available for permanent disability?",
      answer: "Permanent disability compensation includes lifetime medical care, lost earning capacity through retirement age, home and vehicle modifications, assistive devices and technology, in-home care or nursing facilities, vocational rehabilitation, and pain and suffering. California uses life care planners calculating costs over life expectancy. Structured settlements provide tax-free lifetime income. These cases require extensive documentation and expert testimony to capture true lifetime costs."
    },
    {
      question: "Can I recover punitive damages in a truck accident case?",
      answer: "Punitive damages require proving malice, oppression, or conscious disregard for safety by clear and convincing evidence. Examples include knowingly allowing impaired driving, falsifying safety records, ignoring critical maintenance, or forcing drivers to violate regulations. California doesn't cap punitive damages, but they must be reasonable relative to harm caused. Wealth of defendant is considered. These damages punish wrongdoing and deter future misconduct."
    },
    {
      question: "What if I have pre-existing injuries aggravated by the accident?",
      answer: "California's 'eggshell plaintiff' rule means defendants take victims as they find them. They're liable for aggravating pre-existing conditions even if someone else wouldn't have been injured as severely. The key is distinguishing new injuries from prior conditions. Medical records before and after establish baselines. Insurance companies scrutinize medical history seeking to blame current problems on old injuries. We work with doctors documenting how the accident worsened conditions."
    },
    {
      question: "How are lost wages calculated in truck accident cases?",
      answer: "Lost wages include past and future income loss. Past wages cover time missed from work for treatment and recovery. Future losses calculate reduced earning capacity through retirement age. Factors include education, skills, age, and injury impact on work ability. Self-employed individuals use tax returns and business records. Benefits like health insurance, retirement contributions, and bonuses are included. Vocational experts assess career trajectory and limitations. Household services value is added for those unable to perform domestic tasks."
    },
    {
      question: "What role does black box data play in truck accident cases?",
      answer: "Electronic Control Modules (ECMs) or 'black boxes' record crucial data including speed, braking, throttle position, and airbag deployment. This objective evidence proves or disproves driver claims. Data shows hard braking events, hours driven, and maintenance issues. Quick preservation is essential as data can be overwritten. We immediately send preservation letters and obtain court orders if necessary. Expert analysis translates raw data into understandable evidence for settlement or trial."
    },
    {
      question: "Should I hire a local attorney or a big firm for my truck accident?",
      answer: "The ideal choice combines local knowledge with resources to battle trucking companies. Local attorneys know judges, opposing counsel, and jury tendencies. But truck cases require resources for experts, investigations, and lengthy litigation. Trembach Law provides both - California expertise with resources matching big firms. You get personal attention, not being passed between associates. I personally handle your case while deploying extensive resources. This combination maximizes recovery potential."
    },
    {
      question: "What if multiple vehicles were involved in the truck accident?",
      answer: "Multi-vehicle accidents complicate liability and insurance coverage. Each driver may share fault percentages. California's joint and several liability means you can recover full damages from any defendant able to pay. Multiple insurance policies may apply, increasing available compensation. Coordination with other victims' attorneys may strengthen cases through shared evidence and expert costs. Quick action secures your position before insurance limits are exhausted by other claims."
    },
    {
      question: "Can truck drivers sue if they're injured in an accident?",
      answer: "Truck drivers can pursue claims beyond workers' compensation in certain circumstances. Third-party claims against other motorists, equipment manufacturers for defective parts, and loading companies for improper cargo are possible. Independent contractors may sue trucking companies directly. Even employee drivers might have claims if companies' gross negligence caused injuries. These cases require navigating workers' comp exclusivity and employment status issues."
    },
    {
      question: "What if the truck was from another state?",
      answer: "Interstate trucking involves federal jurisdiction and potentially multiple state laws. The accident location typically determines applicable law. Out-of-state trucking companies can be sued in California if the accident occurred here. Service of process and jurisdiction issues require expertise. Interstate carriers must register with FMCSA and maintain process agents. Insurance minimums may differ, but federal requirements apply. These cases often involve complex jurisdiction and choice of law issues."
    },
    {
      question: "How do California's new insurance minimums affect my case?",
      answer: "California raised minimum auto insurance to 30/60/15 in 2025, but commercial trucks require much higher coverage. Federal minimums range from $750,000 to $5 million depending on cargo. Many trucking companies carry umbrella policies with millions in additional coverage. These higher limits mean better compensation potential for serious injuries. However, catastrophic injuries may still exceed available insurance, requiring asset investigation and creative recovery strategies."
    },
    {
      question: "What if the trucking company declares bankruptcy?",
      answer: "Bankruptcy doesn't necessarily eliminate recovery options. Insurance policies remain available as they're separate assets. Other liable parties like drivers, brokers, or manufacturers may have coverage. Quick action can secure claims before bankruptcy filing. Bankruptcy court may allow personal injury claims to proceed. Priority status may apply for certain claims. Asset transfers before bankruptcy might be voidable. Strategic positioning protects recovery despite bankruptcy complications."
    },
    {
      question: "Can I recover emotional distress damages without physical injury?",
      answer: "California allows emotional distress recovery in certain circumstances without physical impact. Being in the 'zone of danger' where injury was likely can suffice. Witnessing injury to close family members may create claims. Intentional infliction of emotional distress has different standards. However, emotional distress claims are stronger with accompanying physical injuries. Documentation through therapy records and psychiatric evaluation strengthens these claims."
    },
    {
      question: "What is spoliation of evidence in truck accident cases?",
      answer: "Spoliation occurs when evidence is destroyed or altered. Trucking companies may 'lose' unfavorable logs, repair vehicles before inspection, or delete electronic data. Immediate spoliation letters create legal duty to preserve evidence. Violations can result in sanctions, adverse jury instructions, or presumption that destroyed evidence was unfavorable. California courts take spoliation seriously. Quick attorney involvement prevents evidence loss and documents any destruction for use at trial."
    },
    {
      question: "How do hours of service violations affect my case?",
      answer: "Hours of Service violations strongly indicate negligence and driver fatigue. Exceeding 11-hour driving limits, skipping mandatory breaks, or falsifying logs shows conscious safety disregard. These violations may constitute negligence per se - automatic breach of duty. Pattern violations suggest company pressure or policy. Electronic logging devices make violations harder to hide but workarounds exist. Expert analysis reveals manipulation. Violations justify higher compensation and possible punitive damages."
    },
    {
      question: "What if I'm an undocumented immigrant injured in a truck accident?",
      answer: "Immigration status doesn't affect your right to compensation for injuries in California. Personal injury laws protect all accident victims regardless of documentation. You can recover medical expenses, lost wages (past and some future), and pain and suffering. Immigration status generally cannot be questioned in civil cases. We protect client privacy and ensure safe participation in legal proceedings. Don't let status fears prevent seeking deserved compensation."
    },
    {
      question: "Can I still file a claim if the police report blames me?",
      answer: "Police reports aren't final determinations of fault. Officers often lack commercial trucking expertise and may not understand complex regulations. Reports can contain errors or miss crucial evidence. We conduct independent investigations often revealing different conclusions. Black box data, witness statements, and expert analysis may contradict initial reports. California's comparative negligence allows recovery even with partial fault. Don't accept police conclusions without thorough legal review."
    },
    {
      question: "How do maintenance failures contribute to truck accidents?",
      answer: "Poor maintenance causes numerous accidents through brake failure, tire blowouts, steering problems, and lighting defects. Federal regulations require systematic inspection, repair, and maintenance (SIRM). Annual inspections, pre-trip inspections, and repair documentation are mandatory. Deferred maintenance to save money shows negligence. Third-party maintenance companies may share liability. Maintenance records reveal patterns of neglect. Expert inspection identifies overlooked problems causing accidents."
    },
    {
      question: "What role do truck brokers play in liability?",
      answer: "Freight brokers connecting shippers with carriers may share liability for negligent carrier selection. If brokers hire carriers with poor safety records, inadequate insurance, or known violations, they may be liable. The FMCSA requires brokers to verify carrier authority and insurance. Negligent hiring claims require showing the broker knew or should have known about carrier problems. Broker liability expands recovery options when carriers lack adequate insurance."
    },
    {
      question: "Can I sue if road debris from a truck damaged my vehicle?",
      answer: "Yes, if the debris fell from the truck due to improper loading, inadequate securement, or equipment failure. Truck drivers and companies must properly secure cargo per FMCSA regulations. Liability depends on whether the debris directly fell from the truck or was kicked up from the roadway. We investigate the source and circumstances of debris to determine liability. Proper cargo securement violations create strong negligence claims."
    },
    {
      question: "What if weather conditions contributed to the truck accident?",
      answer: "Weather doesn't eliminate liability - it often increases it. Truck drivers must adjust speed and driving for conditions. Following too closely in rain, driving too fast in fog, or failing to chain up in snow shows negligence. Federal regulations require adjusting for adverse conditions. 'Weather defense' rarely succeeds because professional drivers should handle expected conditions. We often prove weather made driver negligence more dangerous, not less culpable."
    },
    {
      question: "How do electronic logging devices (ELDs) help my case?",
      answer: "ELDs provide objective evidence of hours driven, locations, and compliance with regulations. They prevent drivers from falsifying paper logs and show exact driving patterns. ELD data reveals violations like driving over 11-hour limits, skipping required breaks, or exceeding 70-hour weekly limits. However, drivers sometimes find workarounds like switching ELD modes inappropriately. Expert analysis reveals manipulation attempts and exposes violations strengthening your case."
    },
    {
      question: "Can I receive compensation for future medical expenses?",
      answer: "Yes, California law allows recovery of reasonably certain future medical expenses. Life care planners work with doctors to project lifetime medical needs including surgeries, therapy, medications, equipment, and home care. Present value calculations account for inflation and interest rates. Future medical expenses often exceed past expenses in catastrophic injury cases. We ensure settlements or judgments include comprehensive future care provisions, not just current medical bills."
    },
    {
      question: "What if my insurance company wants reimbursement from my settlement?",
      answer: "Health insurance subrogation claims require careful handling to maximize your net recovery. California law provides some protection through the 'made whole' doctrine - you must be fully compensated before insurers recover. Attorney fees and costs reduce subrogation claims. Negotiating reductions often achieves significant savings. ERISA plans have different rules and stronger subrogation rights. We handle all subrogation negotiations to minimize reimbursement obligations and maximize your recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component */}
      <SEO 
        title="California Truck Accident Lawyer | 18-Wheeler Attorney | Trembach Law Firm"
        description="Former defense attorney fighting for truck accident victims. Free 24/7 consultation. No fees unless we win. Serving all California. Call (818) 123-4567."
        canonical="/practice-areas/truck-18-wheeler"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Truck Accident Attorneys",
          "description": "California truck accident law firm specializing in 18-wheeler, semi-truck, and commercial vehicle accidents",
          "url": "https://www.trembachlawfirm.com/truck-18-wheeler-accidents/",
          "telephone": "+18181234567",
          "email": "info@trembachlawfirm.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "27001 Agoura Road, Suite 350",
            "addressLocality": "Calabasas",
            "addressRegion": "CA",
            "postalCode": "91301",
            "addressCountry": "US"
          },
          "areaServed": "California",
          "priceRange": "No fees unless we win"
        }}
      />

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Truck & 18-Wheeler Accident Lawyers
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
              onClick={() => window.location.href = '/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Truck & 18-Wheeler Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California's highways and freeways see thousands of commercial trucks daily, creating constant potential for devastating accidents. When 80,000-pound trucks collide with passenger vehicles, the results are catastrophic. Victims face life-altering injuries, overwhelming medical bills, and lost income while trucking companies deploy teams of lawyers and investigators to minimize liability.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we level the playing field. As a former defense attorney who once protected trucking companies, I now use that insider knowledge to fight for accident victims. We understand every defense strategy, every delay tactic, and every pressure point that leads to maximum compensation.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our California Truck Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Truck className="w-5 h-5 mr-2 text-primary" />
                          Trucking Industry Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Deep understanding of federal motor carrier regulations, hours of service rules, and industry practices that create liability when violated.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Former Defense Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Unique insight into trucking company defense strategies, settlement authority, and pressure points that maximize your recovery.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Your Truck Accident Case?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Eye className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Investigation</h4>
                          <p className="text-sm text-muted-foreground">We deploy accident reconstruction experts and investigators to preserve evidence before it disappears.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Urgent Response</h4>
                          <p className="text-sm text-muted-foreground">Time-critical evidence preservation with immediate spoliation letters to prevent destruction.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Personal Attention</h4>
                          <p className="text-sm text-muted-foreground">Direct access to experienced attorneys, not junior associates or paralegals.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We advance all costs and fees - you pay nothing unless we recover compensation.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>The Devastating Impact of California Truck Accidents</h3>
                    <p>
                      Truck accidents are fundamentally different from car crashes. The massive size and weight disparity creates physics that destroys lives. An 80,000-pound fully loaded truck has 20-25 times the momentum of a 4,000-pound passenger car. When these forces collide, the passenger vehicle occupants absorb devastating energy.
                    </p>
                    
                    <h4>Common Catastrophic Injuries Include:</h4>
                    <ul>
                      <li><strong>Traumatic Brain Injuries (TBI):</strong> Cognitive impairment, memory loss, personality changes requiring lifetime care</li>
                      <li><strong>Spinal Cord Injuries:</strong> Paralysis, loss of sensation, requiring extensive medical intervention</li>
                      <li><strong>Multiple Fractures:</strong> Complex breaks requiring surgeries, plates, and rehabilitation</li>
                      <li><strong>Internal Organ Damage:</strong> Liver laceration, spleen rupture, internal bleeding</li>
                      <li><strong>Severe Burns:</strong> From fuel fires or chemical exposure requiring skin grafts</li>
                      <li><strong>Amputations:</strong> Loss of limbs requiring prosthetics and retraining</li>
                      <li><strong>Wrongful Death:</strong> Immediate fatality leaving families devastated</li>
                    </ul>
                    
                    <p>
                      Beyond physical trauma, victims suffer psychological injuries including PTSD, anxiety, and depression. Many never return to previous employment, creating economic devastation alongside medical costs. California's high cost of living amplifies these damages, requiring substantial compensation to restore victims' lives.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-16">
              <ThreeDVisualEffects>
                <div className="premium-form-container interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Truck Accident Consultation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-slate-700 text-lg leading-relaxed">Confidential evaluation by former defense attorneys now fighting for you</p>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="Enter your first name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="Enter your last name"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Phone Number *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="(555) 123-4567"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          className="bg-white/90 border-slate-300 text-slate-900 placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 h-12 text-base font-medium"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Accident Date *</label>
                        <Select value={formData.accidentDate} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentDate: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select when accident occurred" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="yesterday">Yesterday</SelectItem>
                            <SelectItem value="this-week">This week</SelectItem>
                            <SelectItem value="last-week">Last week</SelectItem>
                            <SelectItem value="this-month">This month</SelectItem>
                            <SelectItem value="1-3-months">1-3 months ago</SelectItem>
                            <SelectItem value="3-6-months">3-6 months ago</SelectItem>
                            <SelectItem value="6-12-months">6-12 months ago</SelectItem>
                            <SelectItem value="over-1-year">Over 1 year ago</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Type of Truck *</label>
                        <Select value={formData.truckType} onValueChange={(value) => setFormData(prev => ({ ...prev, truckType: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select truck type" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-wheeler">18-Wheeler/Semi-truck</SelectItem>
                            <SelectItem value="big-rig">Big Rig</SelectItem>
                            <SelectItem value="delivery-truck">Delivery Truck</SelectItem>
                            <SelectItem value="garbage-truck">Garbage Truck</SelectItem>
                            <SelectItem value="tow-truck">Tow Truck</SelectItem>
                            <SelectItem value="cement-truck">Cement Mixer</SelectItem>
                            <SelectItem value="dump-truck">Dump Truck</SelectItem>
                            <SelectItem value="box-truck">Box Truck</SelectItem>
                            <SelectItem value="tanker-truck">Tanker Truck</SelectItem>
                            <SelectItem value="other">Other Commercial Vehicle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Type of Accident *</label>
                        <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select accident type" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rear-end">Truck rear-ended me</SelectItem>
                            <SelectItem value="head-on">Head-on collision</SelectItem>
                            <SelectItem value="side-impact">Side-impact/T-bone</SelectItem>
                            <SelectItem value="rollover">Rollover caused by truck</SelectItem>
                            <SelectItem value="jackknife">Jackknife accident</SelectItem>
                            <SelectItem value="underride">Underride accident</SelectItem>
                            <SelectItem value="sideswipe">Sideswipe collision</SelectItem>
                            <SelectItem value="blind-spot">Blind spot accident</SelectItem>
                            <SelectItem value="wide-turn">Wide turn accident</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Primary Injury Type *</label>
                        <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select injury type" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="traumatic-brain">Traumatic brain injury</SelectItem>
                            <SelectItem value="spinal-cord">Spinal cord injury</SelectItem>
                            <SelectItem value="broken-bones">Broken bones/Fractures</SelectItem>
                            <SelectItem value="internal-injuries">Internal injuries</SelectItem>
                            <SelectItem value="burns">Burns</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="whiplash">Whiplash/Neck injury</SelectItem>
                            <SelectItem value="back-injury">Back injury</SelectItem>
                            <SelectItem value="multiple-injuries">Multiple injuries</SelectItem>
                            <SelectItem value="other">Other injuries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Medical Treatment *</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, medicalTreatment: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select treatment received" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency room visit</SelectItem>
                            <SelectItem value="hospitalized">Hospitalized</SelectItem>
                            <SelectItem value="surgery">Required surgery</SelectItem>
                            <SelectItem value="ongoing-treatment">Ongoing treatment</SelectItem>
                            <SelectItem value="physical-therapy">Physical therapy</SelectItem>
                            <SelectItem value="doctor-visit">Doctor visit only</SelectItem>
                            <SelectItem value="no-treatment">No treatment yet</SelectItem>
                            <SelectItem value="refused-treatment">Refused treatment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-900 text-base font-semibold">Insurance Claim Status *</label>
                        <Select value={formData.insuranceClaim} onValueChange={(value) => setFormData(prev => ({ ...prev, insuranceClaim: value }))}>
                          <SelectTrigger className="bg-white/90 border-slate-300 text-slate-900 h-12 text-base font-medium focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30">
                            <SelectValue placeholder="Select claim status" className="text-slate-500" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-filed">Haven't filed a claim</SelectItem>
                            <SelectItem value="filed-pending">Filed - claim pending</SelectItem>
                            <SelectItem value="claim-denied">Claim denied</SelectItem>
                            <SelectItem value="low-settlement">Received low settlement offer</SelectItem>
                            <SelectItem value="dealing-with-adjuster">Dealing with insurance adjuster</SelectItem>
                            <SelectItem value="trucking-company">Trucking company contacted me</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button type="submit" className="btn-enhanced w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-4 px-8 rounded-lg shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 focus:ring-4 focus:ring-blue-300 focus:outline-none">
                      Get My Free Truck Accident Case Evaluation
                    </Button>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Steps After a Truck Accident</h2>
              
              <div className="mb-6">
                <img 
                  src={medicalTreatmentImage} 
                  alt="Immediate medical treatment and documentation after truck accident" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Safety & Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Call 911 immediately for police and medical response</p>
                    <p>• Move to safety if possible without causing further injury</p>
                    <p>• Seek medical attention even without obvious injuries</p>
                    <p>• Document all injuries with photographs</p>
                    <p>• Get comprehensive medical evaluation including CT scans</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Eye className="w-5 h-5 mr-2 text-red-600" />
                      Evidence Preservation Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Photograph all vehicles, damage, and road conditions</p>
                    <p>• Get truck driver's CDL, DOT number, and insurance info</p>
                    <p>• Collect witness contact information immediately</p>
                    <p>• Document truck company name and truck number</p>
                    <p>• Take photos of cargo and loading/securement</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                  Critical Don'ts After a Truck Accident
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• Don't admit fault or apologize</li>
                    <li>• Don't sign anything from insurance companies</li>
                    <li>• Don't give recorded statements without an attorney</li>
                    <li>• Don't accept quick settlement offers</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Don't delay medical treatment</li>
                    <li>• Don't discuss the accident on social media</li>
                    <li>• Don't let evidence disappear</li>
                    <li>• Don't handle insurance companies alone</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Trucking Regulations Section */}
            <section id="trucking-regulations" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Federal Trucking Regulations & Violations</h2>
              
              <div className="mb-6">
                <img 
                  src={truckingRegulationsImage} 
                  alt="Federal trucking regulations and safety compliance documentation" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  The trucking industry is heavily regulated by the Federal Motor Carrier Safety Administration (FMCSA). These regulations exist because trucks pose unique dangers requiring special safety measures. When trucking companies or drivers violate these regulations, they create liability and strengthen your case.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Hours of Service Violations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Maximum 11 hours driving in 14-hour window</li>
                      <li>• Mandatory 30-minute break after 8 hours</li>
                      <li>• Maximum 70 hours in 8 consecutive days</li>
                      <li>• 10 consecutive hours off-duty before driving</li>
                      <li>• Electronic logging device (ELD) requirements</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Driver Qualification Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Valid Commercial Driver's License (CDL)</li>
                      <li>• Medical certification and fitness</li>
                      <li>• Drug and alcohol testing programs</li>
                      <li>• Background checks and safety records</li>
                      <li>• Training and certification requirements</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Wrench className="w-5 h-5 mr-2 text-primary" />
                      Vehicle Maintenance Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Systematic inspection, repair, and maintenance</li>
                      <li>• Pre-trip and post-trip inspections</li>
                      <li>• Annual DOT inspections</li>
                      <li>• Brake system requirements</li>
                      <li>• Lighting and reflector standards</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Target className="w-5 h-5 mr-2 text-primary" />
                      Cargo Securement Rules
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Proper load distribution and securement</li>
                      <li>• Weight limits and axle restrictions</li>
                      <li>• Specialized rules for different cargo types</li>
                      <li>• Tie-down and blocking requirements</li>
                      <li>• Hazardous materials handling</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.regulations} onOpenChange={() => toggleSection('regulations')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About How Violations Strengthen Your Case
                    {expandedSections.regulations ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>How Regulatory Violations Create Liability</h3>
                    <p>
                      Violations of federal motor carrier regulations often constitute "negligence per se" under California law. This means the violation automatically establishes a breach of duty, making it easier to prove the trucking company or driver was negligent. Common violations we investigate include:
                    </p>
                    
                    <h4>Driver Fatigue and Hours of Service</h4>
                    <p>
                      Driver fatigue is a leading cause of truck accidents. Studies show that being awake for 18 hours impairs driving ability equivalent to a 0.08% blood alcohol level. Electronic Logging Devices (ELDs) are supposed to prevent hours of service violations, but drivers and companies still find ways to circumvent these systems.
                    </p>
                    
                    <p>We investigate:</p>
                    <ul>
                      <li>ELD data for actual driving hours versus logs</li>
                      <li>Pattern of violations showing company pressure</li>
                      <li>Duty status manipulations and false entries</li>
                      <li>Off-duty time spent working rather than resting</li>
                      <li>Coercion to violate regulations</li>
                    </ul>
                    
                    <h4>Inadequate Driver Screening</h4>
                    <p>
                      Trucking companies must thoroughly vet drivers before hiring. Negligent hiring occurs when companies fail to properly screen applicants or ignore red flags in driving records. We examine:
                    </p>
                    <ul>
                      <li>Prior traffic violations and accidents</li>
                      <li>Drug and alcohol testing history</li>
                      <li>Previous employment verification</li>
                      <li>Medical disqualifications</li>
                      <li>Training adequacy and certification</li>
                    </ul>
                    
                    <h4>Vehicle Maintenance Failures</h4>
                    <p>
                      Poor maintenance causes many truck accidents. Federal regulations require systematic programs for inspection, repair, and maintenance. Violations include:
                    </p>
                    <ul>
                      <li>Skipping or falsifying inspections</li>
                      <li>Deferring critical repairs to save money</li>
                      <li>Using unqualified maintenance personnel</li>
                      <li>Failing to address known defects</li>
                      <li>Inadequate maintenance records</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Legal Process for Truck Accident Claims</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Legal process and documentation for truck accident claims" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Truck accident cases follow a complex legal process requiring expertise in federal regulations, insurance coverage, and multi-party liability. Understanding this process helps you make informed decisions about your case.
                </p>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Phase 1: Immediate Investigation (0-30 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Evidence preservation and spoliation letters</li>
                      <li>• Accident scene reconstruction</li>
                      <li>• Witness interviews and statements</li>
                      <li>• Medical record compilation</li>
                      <li>• Insurance notification and coverage investigation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Eye className="w-5 h-5 mr-2 text-primary" />
                      Phase 2: Discovery and Investigation (30-180 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Subpoena of trucking company records</li>
                      <li>• Driver qualification file review</li>
                      <li>• Vehicle maintenance history analysis</li>
                      <li>• Hours of service and ELD data examination</li>
                      <li>• Expert witness retention and analysis</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      Phase 3: Formal Legal Action (If Necessary)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• Lawsuit filing and formal discovery</li>
                      <li>• Depositions of key witnesses</li>
                      <li>• Expert witness preparation</li>
                      <li>• Mediation and settlement negotiations</li>
                      <li>• Trial preparation and presentation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.legal} onOpenChange={() => toggleSection('legal')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 mt-6">
                    Learn More About Legal Strategy and Compensation
                    {expandedSections.legal ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Determining Liability in Complex Cases</h3>
                    <p>
                      Truck accident liability often involves multiple parties, each with different insurance coverage and legal responsibilities. Our investigation identifies all potential defendants to maximize your recovery:
                    </p>
                    
                    <h4>Primary Liable Parties</h4>
                    <ul>
                      <li><strong>Truck Driver:</strong> Direct negligence through violations, impairment, or reckless operation</li>
                      <li><strong>Trucking Company:</strong> Vicarious liability for employee actions, negligent hiring/training, regulatory violations</li>
                      <li><strong>Cargo Loaders:</strong> Improper loading creating dangerous weight distribution or securement failures</li>
                      <li><strong>Maintenance Providers:</strong> Faulty repairs, missed inspections, or inadequate maintenance</li>
                      <li><strong>Truck Manufacturers:</strong> Defective components, design flaws, or inadequate warnings</li>
                      <li><strong>Government Entities:</strong> Dangerous road conditions, poor signage, or construction zone hazards</li>
                    </ul>
                    
                    <h3>Maximizing Compensation Through Multiple Sources</h3>
                    <p>
                      Unlike car accidents with limited insurance coverage, truck accidents often provide access to substantial compensation through various sources:
                    </p>
                    
                    <h4>Primary Insurance Coverage</h4>
                    <ul>
                      <li>Federal minimum requirements: $750,000 (general freight) to $5,000,000 (hazmat)</li>
                      <li>Many companies carry higher limits due to cargo value and risk</li>
                      <li>Umbrella policies often provide additional millions in coverage</li>
                    </ul>
                    
                    <h4>Additional Recovery Sources</h4>
                    <ul>
                      <li>Multiple insurance policies from various liable parties</li>
                      <li>Corporate assets when insurance is insufficient</li>
                      <li>Your own underinsured motorist coverage</li>
                      <li>Workers' compensation (if injured on the job)</li>
                    </ul>
                    
                    <h3>Types of Damages Available</h3>
                    
                    <h4>Economic Damages</h4>
                    <ul>
                      <li>Current and future medical expenses</li>
                      <li>Lost wages and reduced earning capacity</li>
                      <li>Property damage and vehicle replacement</li>
                      <li>Home modifications for disabilities</li>
                      <li>Ongoing care and rehabilitation costs</li>
                    </ul>
                    
                    <h4>Non-Economic Damages</h4>
                    <ul>
                      <li>Pain and suffering</li>
                      <li>Emotional distress and PTSD</li>
                      <li>Loss of life enjoyment</li>
                      <li>Loss of consortium (spousal relationship)</li>
                      <li>Permanent disability and disfigurement</li>
                    </ul>
                    
                    <h4>Punitive Damages</h4>
                    <p>
                      California allows punitive damages when defendants show conscious disregard for safety. Examples include:
                    </p>
                    <ul>
                      <li>Knowingly allowing impaired or unqualified drivers</li>
                      <li>Falsifying safety records or inspection reports</li>
                      <li>Pressuring drivers to violate hours of service</li>
                      <li>Ignoring critical maintenance to save money</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>


            {/* Investigation Section */}
            <section id="investigation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Comprehensive Accident Investigation</h2>
              
              <div className="mb-6">
                <img 
                  src={compensationInsuranceImage} 
                  alt="Comprehensive truck accident investigation and evidence collection" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Successful truck accident cases depend on thorough investigation and evidence preservation. Time is critical as evidence disappears quickly and trucking companies deploy their own investigators to minimize liability.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Critical Evidence We Preserve</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Electronic Control Module (ECM) "black box" data</li>
                      <li>• Electronic Logging Device (ELD) records</li>
                      <li>• Driver qualification files and training records</li>
                      <li>• Vehicle maintenance and inspection reports</li>
                      <li>• Drug and alcohol testing results</li>
                      <li>• Cargo manifests and weight tickets</li>
                      <li>• GPS tracking and fleet management data</li>
                      <li>• Surveillance footage from surrounding areas</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Expert Witnesses We Deploy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Accident reconstruction specialists</li>
                      <li>• Trucking industry safety experts</li>
                      <li>• Mechanical engineers for vehicle defects</li>
                      <li>• Medical experts for injury documentation</li>
                      <li>• Economic experts for damage calculations</li>
                      <li>• Former DOT inspectors</li>
                      <li>• Biomechanical experts for injury causation</li>
                      <li>• Life care planners for future needs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  Why Immediate Action Is Critical
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-2">
                    <li>• ELD data can be overwritten every 6 months</li>
                    <li>• Surveillance footage often deleted within 30 days</li>
                    <li>• Accident scene evidence disappears quickly</li>
                    <li>• Witness memories fade over time</li>
                  </ul>
                  <ul className="space-y-2">
                    <li>• Trucking companies may repair or destroy vehicles</li>
                    <li>• Driver personnel files may be "cleaned up"</li>
                    <li>• Maintenance records may disappear</li>
                    <li>• GPS and telematics data may be purged</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Truck Accidents</h2>
              
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Helpful Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Government Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Federal Motor Carrier Safety Administration</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">California Department of Motor Vehicles</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">National Highway Traffic Safety Administration</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Occupational Safety and Health Administration</Link></li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle>Support Organizations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Citizens for Reliable and Safe Highways</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Road Safety Information Database</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Truck Safety Coalition</Link></li>
                      <li>• <Link to="/schedule-consultation" className="text-primary hover:underline">Insurance Institute for Highway Safety</Link></li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            
            {/* Quick Contact Card */}
            <Card className="mb-6 sticky top-6">
              <CardHeader className="bg-red-600 text-white rounded-t-lg">
                <CardTitle className="text-center">Get Help Now</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold mb-2">(818) 123-4567</div>
                  <p className="text-sm text-muted-foreground">Available 24/7 for Emergencies</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700"
                    onClick={() => window.location.href = 'tel:+18181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-foreground hover:text-foreground border-foreground hover:bg-muted"
                    onClick={() => window.location.href = 'sms:+18181234567'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Text for Quick Response
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-foreground hover:text-foreground border-foreground hover:bg-muted"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Case Evaluation Form */}
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Quick Case Evaluation</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" required />
                  </div>
                  <div>
                    <Input type="email" placeholder="Email Address" required />
                  </div>
                  <div>
                    <Input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div>
                    <Textarea placeholder="Brief description of your accident..." rows={3} />
                  </div>
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Get Free Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Sidebar Image */}
            <Card className="mb-6">
              <CardContent className="p-0">
                <img 
                  src={sidebarImage} 
                  alt="Truck accident legal representation" 
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">Experienced Truck Accident Attorney</h3>
                  <p className="text-sm text-muted-foreground">
                    Former defense attorney now fighting for truck accident victims across California.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Results */}
            <Card>
              <CardHeader>
                <CardTitle>Why Choose Our Firm</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Former Defense Experience</h4>
                      <p className="text-xs text-muted-foreground">Unique insight into trucking company defense strategies</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Immediate Response</h4>
                      <p className="text-xs text-muted-foreground">24/7 availability for accident scene investigation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-xs text-muted-foreground">We advance all costs and fees</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply for California Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Truck Accident Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you only two years from the accident date to file your claim. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/case-evaluation'}
            >
              Free Case Review
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 bg-transparent"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TruckAccidentsNew;