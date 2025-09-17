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
  Bike,
  AlertCircle
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/motorcycle-accidents-hero-new.jpg';
import sceneImage from '@/assets/practice-areas/motorcycle-accident-scene.jpg';
import legalConsultationImage from '@/assets/practice-areas/motorcycle-legal-consultation.jpg';
import medicalImage from '@/assets/practice-areas/motorcycle-medical-care.jpg';
import compensationImage from '@/assets/practice-areas/motorcycle-compensation.jpg';
import biasDefenseImage from '@/assets/practice-areas/motorcycle-bias-defense.jpg';
import legalProcessImage from '@/assets/practice-areas/motorcycle-legal-process.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MotorcycleAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    bikeType: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: AlertCircle },
    { id: 'bias-defense', label: 'FIGHTING BIAS', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Heart },
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
    // Handle form submission - redirect to motorcycle case evaluation
    window.location.href = '/motorcycle-case-evaluation';
  };

  // FAQ Data - 50+ questions
  const faqs = [
    {
      category: 'immediate',
      question: 'What should I do immediately after a motorcycle accident in California?',
      answer: 'Safety first - get yourself and your bike out of traffic if possible. Call 911 immediately for any injuries. Take photos of your bike, the other vehicle, road conditions, and injuries before anything is moved. Get witness information and the other driver\'s insurance details. Do not discuss fault or apologize. Seek medical attention even if you feel fine - adrenaline masks injuries. Contact a motorcycle accident attorney before giving statements to insurance companies who often use bias against riders.'
    },
    {
      category: 'immediate',
      question: 'Should I move my motorcycle after an accident?',
      answer: 'Only if it\'s safe and necessary to prevent further accidents. California law requires moving vehicles from traffic lanes when possible, but first take extensive photos showing: bike position, damage, skid marks, road conditions, and traffic controls. If you\'re injured or the bike can\'t be moved safely, leave everything where it is. Turn on hazard lights if possible and set up road flares if available.'
    },
    {
      category: 'immediate',
      question: 'What information should I collect at a motorcycle accident scene?',
      answer: 'Collect: other driver\'s license, insurance, and vehicle information; witness names and contacts; photos of both vehicles from multiple angles; photos of the accident scene including traffic signals, road conditions, and your injuries; weather and lighting conditions; time and exact location; any statements made by the other driver about fault. Also note if you smell alcohol or observe erratic behavior.'
    },
    {
      category: 'immediate',
      question: 'Should I call police after a minor motorcycle accident?',
      answer: 'Always call police for motorcycle accidents, even minor ones. Riders are often blamed unfairly, and police reports provide crucial official documentation. California requires reports for accidents with injuries, deaths, or property damage over $1,000. Even if damage seems minor, motorcycle accident injuries often don\'t appear immediately, and police reports protect against changing stories from other drivers.'
    },
    {
      category: 'immediate',
      question: 'What if I\'m not wearing a helmet in California?',
      answer: 'California requires all motorcyclists and passengers to wear DOT-approved helmets. Not wearing a helmet can affect your case through comparative negligence but won\'t bar recovery. Insurance companies will argue your injuries would have been less severe with a helmet, potentially reducing compensation. However, many serious motorcycle injuries occur to other body parts. An experienced attorney can minimize helmet-related fault arguments and focus on the other driver\'s negligence.'
    },
    {
      category: 'bias',
      question: 'How does anti-motorcycle bias affect my case?',
      answer: 'Anti-motorcycle bias is real and pervasive. Studies show many people wrongly view motorcyclists as reckless risk-takers responsible for their own accidents. Insurance companies exploit this bias by immediately investigating rider behavior, demanding helmet cam footage, and scrutinizing riding experience. Police officers may unfairly blame riders in accident reports. Potential jurors often harbor unconscious bias. Experienced motorcycle attorneys counter these prejudices with factual evidence, expert testimony, and jury education about rider rights and safety.'
    },
    {
      category: 'bias',
      question: 'What motorcycle stereotypes do insurance companies use against me?',
      answer: 'Insurance companies commonly claim motorcyclists are: speed demons who always exceed limits, show-offs performing dangerous stunts, weekend warriors lacking experience, risk-takers who don\'t follow traffic laws, or riders who split lanes recklessly. They\'ll examine your social media for any photos suggesting aggressive riding. They may argue your bike\'s power capabilities suggest reckless use. Expert attorneys counter these stereotypes with riding records, training certificates, witness testimony, and accident reconstruction showing the other driver\'s fault.'
    },
    {
      category: 'bias',
      question: 'How do I prove the other driver\'s fault in a motorcycle accident?',
      answer: 'Evidence is crucial because bias works against motorcyclists. Gather: traffic camera footage, surveillance video from nearby businesses, witness statements emphasizing the other driver\'s actions, cell phone records showing distracted driving, police citations issued, accident reconstruction analysis, and expert testimony about vehicle dynamics. Your attorney may hire accident reconstruction specialists and motorcycle safety experts to demonstrate how the other driver\'s negligence caused the collision.'
    },
    {
      category: 'bias',
      question: 'What if the police report blames me unfairly?',
      answer: 'Police reports aren\'t final determinations of fault and can be challenged. Officers often lack motorcycle accident training and may make assumptions based on bias. Your attorney can investigate further, interview witnesses the police missed, obtain additional evidence like surveillance footage, and hire accident reconstruction experts. Independent investigations frequently reveal evidence of the other driver\'s fault not included in initial police reports.'
    },
    {
      category: 'bias',
      question: 'How does lane splitting affect my motorcycle accident case?',
      answer: 'Lane splitting is legal in California when done safely, but insurance companies often blame riders regardless. They\'ll argue you were going too fast between cars or that the other driver couldn\'t see you. However, lane splitting is specifically allowed by Vehicle Code 21658.1 when done in a safe manner. Expert attorneys use traffic engineering studies, helmet cam footage, and witness testimony to prove lane splitting was conducted safely and legally, placing fault on the negligent driver.'
    },
    {
      category: 'legal',
      question: 'How long do I have to file a motorcycle accident lawsuit in California?',
      answer: 'California\'s statute of limitations gives you 2 years from the accident date to file a personal injury lawsuit, and 3 years for property damage claims. However, if a government entity is involved (city bus, county vehicle, etc.), you must file a claim within 6 months. Don\'t wait - motorcycle accident evidence like skid marks disappears quickly, and witnesses forget crucial details. Early investigation strengthens your case significantly.'
    },
    {
      category: 'legal',
      question: 'What if I\'m partially at fault for my motorcycle accident?',
      answer: 'California\'s pure comparative negligence law allows recovery even if you\'re 99% at fault - your damages are just reduced by your fault percentage. For example, if damages total $200,000 and you\'re 20% at fault, you recover $160,000. This is more favorable than other states that bar recovery if you\'re 50% or more at fault. Insurance companies often try to inflate rider fault percentages, making experienced legal representation crucial.'
    },
    {
      category: 'legal',
      question: 'What damages can I recover in a California motorcycle accident?',
      answer: 'California allows recovery for: medical expenses (past and future), lost wages and diminished earning capacity, property damage to your bike and gear, pain and suffering, emotional distress, disability and disfigurement, and loss of life enjoyment. Motorcycle accidents often cause severe injuries requiring extensive medical treatment, making future damages substantial. Punitive damages may be available if the other driver was intoxicated or extremely reckless.'
    },
    {
      category: 'legal',
      question: 'Should I handle my motorcycle accident case without an attorney?',
      answer: 'Absolutely not. Motorcycle cases involve unique challenges including bias, complex injury patterns, and specialized equipment knowledge. Insurance companies have teams of lawyers and experts working against you from day one. They know most people don\'t understand motorcycle accident dynamics and will use this to minimize your claim. Studies show represented clients recover significantly more compensation than those who handle cases themselves.'
    },
    {
      category: 'legal',
      question: 'How is motorcycle accident compensation calculated?',
      answer: 'Compensation includes economic damages (medical bills, lost wages, property damage) and non-economic damages (pain, suffering, disability). Motorcycle accidents often result in severe injuries making future medical care expensive. Calculation considers: injury severity and permanence, impact on earning capacity, need for ongoing medical treatment, degree of pain and suffering, and effect on quality of life. Experienced attorneys use medical economists and life care planners to accurately calculate future needs.'
    },
    {
      category: 'medical',
      question: 'What are the most common motorcycle accident injuries?',
      answer: 'Motorcycle accidents cause severe injuries due to lack of protection: traumatic brain injuries (even with helmets), spinal cord injuries and paralysis, broken bones and fractures, road rash and skin grafts, internal organ damage, amputations, soft tissue injuries, and psychological trauma. These injuries often require multiple surgeries, extensive rehabilitation, and permanent lifestyle changes. The severity of motorcycle injuries makes immediate and ongoing medical documentation crucial for your case.'
    },
    {
      category: 'medical',
      question: 'Why should I seek medical attention after a motorcycle accident?',
      answer: 'Seek immediate medical attention even if you feel fine. Adrenaline and shock mask serious injuries that appear hours or days later. Internal injuries, brain trauma, and spinal damage may not cause immediate pain. Delaying medical treatment gives insurance companies ammunition to argue your injuries aren\'t accident-related. Early medical documentation creates a clear link between the accident and your injuries, strengthening your legal case.'
    },
    {
      category: 'medical',
      question: 'What if I can\'t afford medical treatment after my motorcycle accident?',
      answer: 'Don\'t let financial concerns prevent necessary medical treatment. Options include: your health insurance, medical payments coverage on your motorcycle policy, the other driver\'s insurance (if they accept fault), medical liens where doctors wait for settlement payment, and letters of protection from your attorney guaranteeing payment. Many medical providers work with accident victims, and attorneys can arrange treatment networks that wait for case resolution.'
    },
    {
      category: 'medical',
      question: 'How do I document my motorcycle accident injuries properly?',
      answer: 'Proper documentation is crucial: take photos of all visible injuries immediately after the accident and throughout healing, keep detailed records of pain levels and limitations, attend all medical appointments and follow treatment recommendations, save all medical bills and records, document how injuries affect daily activities, and never minimize pain to medical providers. This documentation becomes crucial evidence for your compensation claim.'
    },
    {
      category: 'medical',
      question: 'What if insurance companies question my motorcycle accident injuries?',
      answer: 'Insurance companies routinely question motorcycle accident injuries, claiming they\'re pre-existing, exaggerated, or unrelated to the accident. They may demand independent medical exams by their doctors or surveillance to "catch" you doing activities they claim you can\'t do. Your attorney will counter with comprehensive medical records, expert medical testimony, functional capacity evaluations, and day-in-the-life videos showing your true limitations.'
    },
    {
      category: 'insurance',
      question: 'What motorcycle insurance do I need in California?',
      answer: 'California requires minimum liability coverage: $15,000 per person/$30,000 per accident for bodily injury, and $5,000 for property damage. However, these minimums are inadequate for serious motorcycle accidents. We recommend: higher liability limits, comprehensive and collision coverage, uninsured/underinsured motorist coverage (crucial since many drivers lack adequate insurance), and medical payments coverage for immediate medical expenses regardless of fault.'
    },
    {
      category: 'insurance',
      question: 'What if the other driver doesn\'t have insurance?',
      answer: 'Uninsured drivers are unfortunately common in California. Your options include: filing a claim under your uninsured motorist coverage (if you have it), suing the driver personally (though collection can be difficult), checking if other insurance applies (employer policies if they were working), and exploring other liable parties (vehicle owners, bars that overserved drunk drivers). This highlights why uninsured motorist coverage is essential for all riders.'
    },
    {
      category: 'insurance',
      question: 'Should I give a recorded statement to insurance companies?',
      answer: 'Never give recorded statements to the other driver\'s insurance company without attorney representation. These statements are designed to get you to say something that damages your case. Insurance adjusters are trained interrogators who will ask leading questions to minimize your injuries or shift blame. You\'re only required to cooperate with your own insurance company, and even then, it\'s best to have attorney guidance.'
    },
    {
      category: 'insurance',
      question: 'How do insurance companies investigate motorcycle accidents?',
      answer: 'Insurance companies conduct aggressive investigations to deny or minimize motorcycle accident claims: they interview all parties and witnesses, examine the accident scene, review police reports and traffic citations, analyze medical records for pre-existing conditions, conduct surveillance of injured riders, examine social media for contradictory evidence, hire accident reconstruction experts, and may demand bike inspections. Having your own attorney levels the playing field with independent investigations and expert witnesses.'
    },
    {
      category: 'insurance',
      question: 'What insurance tactics are used against motorcycle accident victims?',
      answer: 'Common insurance tactics include: delaying claim processing hoping you\'ll accept quick lowball offers, demanding unnecessary medical records to find pre-existing conditions, using surveillance to "catch" normal activities they claim prove you\'re not injured, scheduling independent medical exams with doctors known for minimizing injuries, arguing that safety gear would have prevented injuries, and exploiting motorcycle stereotypes to shift blame to the rider.'
    },
    {
      category: 'settlement',
      question: 'How long does a motorcycle accident case take to settle?',
      answer: 'Motorcycle accident cases typically take 6 months to 2 years, depending on injury severity and insurance cooperation. Complex cases with severe injuries, disputed liability, or uncooperative insurers take longer. Factors affecting timeline include: reaching maximum medical improvement, completing injury treatment, gathering all evidence, and negotiating with insurance companies. Your attorney will advise when you\'ve reached the best time to settle versus continuing treatment or filing a lawsuit.'
    },
    {
      category: 'settlement',
      question: 'Should I accept the first settlement offer for my motorcycle accident?',
      answer: 'Almost never accept the first offer. Initial offers are typically far below fair compensation and are made before the full extent of injuries is known. Insurance companies hope you\'ll accept quickly before consulting an attorney. Motorcycle accident injuries often require long-term treatment, and settling too early prevents recovering additional compensation for ongoing medical needs, permanent disabilities, or lost earning capacity.'
    },
    {
      category: 'settlement',
      question: 'What factors determine my motorcycle accident settlement amount?',
      answer: 'Settlement amounts depend on: severity and permanence of injuries, total medical expenses (past and future), lost wages and diminished earning capacity, degree of pain and suffering, impact on quality of life, degree of other driver\'s fault, insurance policy limits available, strength of evidence supporting your case, and your attorney\'s negotiation skills. Motorcycle accidents often result in higher settlements due to injury severity, but bias can work against riders without proper representation.'
    },
    {
      category: 'settlement',
      question: 'Can I reopen my motorcycle accident case after settling?',
      answer: 'Generally no - settlements include releases that prevent future claims related to the accident. This is why it\'s crucial not to settle until you understand the full extent of your injuries and future medical needs. Exceptions may exist for fraud or if new injuries develop that couldn\'t reasonably have been discovered, but these are rare. Always ensure you\'ve reached maximum medical improvement before settling.'
    },
    {
      category: 'settlement',
      question: 'What if the insurance company denies my motorcycle accident claim?',
      answer: 'Claim denials can often be overturned with proper legal representation. Common denial reasons include: disputed liability, coverage exclusions, late reporting, or insufficient evidence. Your attorney can appeal the denial with additional evidence, expert opinions, and legal arguments. If the denial is unreasonable, you may have bad faith insurance claims against your own insurer or the option to file a lawsuit against the at-fault driver.'
    },
    {
      category: 'process',
      question: 'What happens during a motorcycle accident lawsuit?',
      answer: 'If settlement negotiations fail, filing a lawsuit begins the formal legal process: complaint filing and service, discovery (document exchange, depositions, expert witnesses), mediation attempts, and potentially trial. Most cases settle before trial, but having an attorney prepared for court strengthens your negotiating position. Motorcycle cases often require accident reconstruction experts, medical experts, and economic experts to prove damages.'
    },
    {
      category: 'process',
      question: 'Do motorcycle accident cases go to trial?',
      answer: 'Most motorcycle accident cases settle out of court, but your attorney must be prepared for trial. Going to trial may be necessary if: insurance companies make unreasonable offers, liability is strongly disputed, or damages are substantial enough to justify trial risks. Having trial-experienced attorneys often leads to better settlement offers because insurance companies know they\'ll face competent courtroom representation.'
    },
    {
      category: 'process',
      question: 'How much does a motorcycle accident attorney cost?',
      answer: 'Most motorcycle accident attorneys work on contingency fees, meaning no upfront costs and fees are only paid if you recover compensation. Typical contingency fees range from 33% to 40% of the recovery amount. This arrangement allows anyone to afford quality legal representation regardless of financial situation. Given the complexity and bias issues in motorcycle cases, attorney representation typically results in significantly higher net recovery even after fees.'
    },
    {
      category: 'process',
      question: 'What should I look for in a motorcycle accident attorney?',
      answer: 'Choose an attorney with: specific experience handling motorcycle accident cases, understanding of motorcycle dynamics and rider bias, proven track record of motorcycle accident recoveries, resources to hire necessary experts, willingness to take cases to trial if needed, and genuine understanding of motorcycle culture. Many general personal injury attorneys lack the specialized knowledge needed to effectively represent motorcycle accident victims against bias and insurance company tactics.'
    },
    {
      category: 'process',
      question: 'How do I prepare for meeting with a motorcycle accident attorney?',
      answer: 'Bring: police report, insurance information for all parties, photos of the accident scene and injuries, medical records and bills, witness contact information, your motorcycle registration and insurance policy, and any correspondence with insurance companies. Write down a detailed account of how the accident happened while it\'s fresh in your memory. Don\'t sign anything or give recorded statements before consulting with an attorney.'
    },
    {
      category: 'prevention',
      question: 'What are the most common causes of motorcycle accidents in California?',
      answer: 'Leading causes include: left-turning vehicles failing to yield to motorcycles, distracted driving (cell phones, texting), drunk/impaired driving, speeding and aggressive driving, following too closely, improper lane changes without checking blind spots, road hazards and poor maintenance, and weather conditions. Many accidents occur because other drivers simply don\'t see motorcycles or fail to judge their speed and distance properly.'
    },
    {
      category: 'prevention',
      question: 'What can motorcyclists do to prevent accidents?',
      answer: 'Safety measures include: wearing proper protective gear (helmet, jacket, gloves, boots), taking motorcycle safety courses, practicing defensive driving techniques, maintaining proper bike maintenance, avoiding riding in bad weather when possible, staying visible with proper lighting and bright colors, never riding under the influence, and being extra cautious at intersections where many accidents occur. However, even the safest riders can\'t prevent negligent driver actions.'
    },
    {
      category: 'prevention',
      question: 'Where do most motorcycle accidents happen in California?',
      answer: 'Common accident locations include: urban intersections where cars turn left across motorcycle paths, freeway merges where cars change lanes without checking blind spots, construction zones with changing traffic patterns, mountain roads popular with weekend riders, beach communities with tourist traffic unfamiliar with local roads, and parking lots where visibility is limited. Los Angeles, San Francisco, and San Diego counties see the highest accident numbers due to traffic volume.'
    },
    {
      category: 'prevention',
      question: 'How does weather affect motorcycle accident risk?',
      answer: 'Weather significantly impacts motorcycle safety: rain reduces tire traction and visibility, wind affects bike stability especially for lighter riders, fog creates dangerous visibility conditions, extreme heat can cause rider fatigue and tire blowouts, and cold weather reduces rider dexterity and reaction time. California\'s year-round riding weather means many riders encounter conditions they\'re unprepared for. Other drivers are also less aware of motorcycles in poor weather.'
    },
    {
      category: 'special',
      question: 'What if my motorcycle accident involved a commercial vehicle?',
      answer: 'Commercial vehicle accidents often involve additional liability and insurance coverage: trucking companies may be liable for inadequate training, hours of service violations, or maintenance failures; commercial insurance policies typically have higher limits; federal regulations may apply creating additional evidence sources; and multiple parties may be liable (driver, trucking company, maintenance contractors). These cases require attorneys experienced with commercial vehicle regulations and corporate liability.'
    },
    {
      category: 'special',
      question: 'What about motorcycle accidents with government vehicles?',
      answer: 'Government liability cases have special requirements: claims must be filed within 6 months against government entities, sovereign immunity may limit liability, special notice procedures must be followed, and damage caps may apply. However, government drivers must still follow traffic laws, and agencies can be liable for negligent training, supervision, or vehicle maintenance. These cases require attorneys experienced with government claim procedures and deadlines.'
    },
    {
      category: 'special',
      question: 'How do hit-and-run motorcycle accidents work legally?',
      answer: 'Hit-and-run cases create unique challenges: police investigation is crucial for finding the fleeing driver, uninsured motorist coverage may apply even if your own insurer, reward programs may help locate witnesses, surveillance footage from nearby businesses is time-sensitive, and phantom vehicle claims require specific evidence standards. Your attorney can help coordinate with police, hire private investigators, and ensure all potential insurance coverage is explored.'
    },
    {
      category: 'special',
      question: 'What if my motorcycle accident involved a drunk driver?',
      answer: 'Drunk driving accidents may allow additional compensation: punitive damages to punish extreme recklessness, claims against bars or restaurants that overserved the driver (dram shop liability), enhanced insurance coverage requirements, and criminal restitution orders. These cases often settle for higher amounts due to clear liability and the drunk driver\'s obvious negligence. Your attorney can coordinate with criminal prosecutors and explore all liability sources.'
    },
    {
      category: 'special',
      question: 'How do motorcycle defect cases work?',
      answer: 'Motorcycle or parts defects can cause accidents: manufacturing defects in brakes, tires, or steering components, design defects that create inherent dangers, inadequate warnings about known risks, and recall failures. Product liability cases require proving the defect existed and caused the accident. These cases often involve multiple defendants (manufacturer, distributor, dealer) and require expert engineering testimony about design standards and manufacturing processes.'
    },
    {
      category: 'road',
      question: 'What if dangerous road conditions caused my motorcycle accident?',
      answer: 'Government entities responsible for road maintenance can be liable for: potholes and road surface defects, inadequate signage or traffic controls, construction zone hazards, debris removal failures, and improper road design. These cases require proving the government knew or should have known about the dangerous condition. Claims against government entities have strict deadlines (6 months) and special procedures that must be followed precisely.'
    },
    {
      category: 'road',
      question: 'How do construction zone motorcycle accidents work?',
      answer: 'Construction zones create special hazards for motorcycles: changing traffic patterns, uneven surfaces, debris, and reduced visibility. Liability may fall on: the construction company for inadequate safety measures, government agencies for poor planning or signage, or other drivers for failing to exercise extra caution. These cases often involve multiple parties and require investigation of construction contracts, safety protocols, and compliance with traffic control standards.'
    }
  ];

  const filteredFaqs = faqs;

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Motorcycle Accident Lawyers | Fighting Bias for Injured Riders"
        description="Expert motorcycle accident attorneys throughout California. Former defense lawyer now fighting anti-rider bias. Free consultation for motorcycle crash cases."
        canonical="/practice-areas/motorcycle-accidents"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/25"></div>
        
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
              California Motorcycle Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting Anti-Rider Bias</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/motorcycle-case-evaluation'}
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

      {/* Contact Bar */}
      <section className="bg-red-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">24/7 Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>No Fees Unless We Win</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 font-bold bg-red-600 border border-white/30"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-red-600"
              onClick={() => window.location.href = '/motorcycle-case-evaluation'}
            >
              Free Case Review
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6" ref={contentRef}>
        {/* Overview Section */}
        <section id="overview" className="content-section py-16">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Fighting Anti-Motorcycle Bias in California
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  California leads the nation with over 941,000 registered motorcycles, from daily commuters navigating Los Angeles traffic to weekend warriors exploring scenic coastal highways. Yet when negligent drivers cause accidents, injured riders face devastating physical injuries plus systematic bias from insurance companies, law enforcement, and potential jurors who wrongly assume motorcyclists are reckless thrill-seekers.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-muted-foreground">
                    At Trembach Law Firm, we leverage former defense attorney experience to expose and defeat discriminatory tactics used against motorcycle accident victims. We understand the unique challenges riders face and fight aggressively to overcome anti-motorcycle prejudice while maximizing your compensation.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Shield className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold">Anti-Bias Defense</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Aggressive defense against insurance company stereotypes and prejudices that unfairly blame motorcyclists for accidents caused by negligent drivers.
                  </p>
                </Card>

                <Card className="p-6">
                  <div className="flex items-center mb-4">
                    <Award className="w-8 h-8 text-red-600 mr-3" />
                    <h3 className="text-xl font-semibold">Specialized Knowledge</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Deep understanding of motorcycle dynamics, rider safety practices, and the unique injury patterns common in motorcycle accidents.
                  </p>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">California's Motorcycle Accident Crisis</h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">941K+</div>
                    <div className="text-sm text-muted-foreground">Registered Motorcycles</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">5,000+</div>
                    <div className="text-sm text-muted-foreground">Annual Injuries</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-3xl font-bold text-red-600 mb-2">29x</div>
                    <div className="text-sm text-muted-foreground">Higher Fatality Rate</div>
                  </div>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      Learn More About Motorcycle Accident Statistics
                      {expandedSections.overview ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    <p className="text-muted-foreground">
                      California's extensive highway system, year-round riding weather, and diverse terrain make it a motorcycle paradise, but these same factors contribute to serious accident risks. The Golden State sees over 15,000 motorcycle accidents annually, with riders facing injury rates nearly 30 times higher than car occupants.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">High-Risk Areas</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Los Angeles County: 3,000+ annual accidents</li>
                          <li>• Bay Area corridors with heavy commuter traffic</li>
                          <li>• Popular weekend routes like Angeles Crest Highway</li>
                          <li>• Tourist areas with unfamiliar drivers</li>
                          <li>• Construction zones with changing traffic patterns</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Contributing Factors</h4>
                        <ul className="text-muted-foreground space-y-1">
                          <li>• Distracted driving and cell phone use</li>
                          <li>• Left-turning vehicles failing to yield</li>
                          <li>• Lane change accidents in blind spots</li>
                          <li>• Drunk driving incidents</li>
                          <li>• Road hazards and poor maintenance</li>
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6">
                <img 
                  src={sceneImage} 
                  alt="Motorcycle accident scene investigation" 
                  className="w-full h-48 object-cover rounded-lg mb-6"
                />
                
                <h3 className="text-xl font-semibold mb-4">Start Your Free Case Evaluation</h3>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-foreground">Accident Date</label>
                    <Input 
                      type="date"
                      value={formData.accidentDate}
                      onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Type of Motorcycle</label>
                    <Select value={formData.bikeType} onValueChange={(value) => setFormData({...formData, bikeType: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select bike type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="street">Street/Standard</SelectItem>
                        <SelectItem value="sport">Sport Bike</SelectItem>
                        <SelectItem value="cruiser">Cruiser</SelectItem>
                        <SelectItem value="touring">Touring</SelectItem>
                        <SelectItem value="dirt">Dirt Bike</SelectItem>
                        <SelectItem value="scooter">Scooter</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground">Primary Injury Type</label>
                    <Select value={formData.injuryType} onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                        <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
                        <SelectItem value="broken-bones">Broken Bones</SelectItem>
                        <SelectItem value="road-rash">Road Rash</SelectItem>
                        <SelectItem value="internal">Internal Injuries</SelectItem>
                        <SelectItem value="multiple">Multiple Injuries</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Get My Free Evaluation
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Phone className="w-5 h-5 text-red-600 mr-2" />
                    <span className="font-semibold">Call 24/7</span>
                  </div>
                  <p className="text-2xl font-bold text-red-600">(818) 123-4567</p>
                  <p className="text-sm text-muted-foreground">No fees unless we win your case</p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Case Evaluation Section */}
        <section id="evaluation" className="content-section mb-12">
          <div 
            className="relative bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${biasDefenseImage})` }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-2">3 Ways to Start Your Case</h2>
              <div className="w-32 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
              </p>
              
              <div className="space-y-4 max-w-md mx-auto">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  onClick={() => window.location.href = 'tel:+18553742906'}
                >
                  CALL (855) 374-2906
                </Button>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  onClick={() => window.location.href = 'mailto:info@trembachlaw.com'}
                >
                  EMAIL US
                </Button>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                >
                  CALCULATE SETTLEMENT
                </Button>
            </div>
          </div>
        </section>

        {/* Immediate Steps After Motorcycle Accident */}
        <section id="immediate-steps" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Steps After Motorcycle Accident</h2>
          <p className="text-lg text-muted-foreground mb-6">
            Motorcycle accident cases require immediate action to preserve evidence and protect your rights. Our comprehensive case evaluation examines every aspect of your accident to build the strongest possible claim against insurance company bias.
          </p>

          <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Accident Analysis</h3>
                    <p className="text-muted-foreground">
                      Detailed review of accident circumstances, road conditions, traffic patterns, and other driver behavior to establish clear fault determination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Stethoscope className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Injury Assessment</h3>
                    <p className="text-muted-foreground">
                      Comprehensive evaluation of all injuries, treatment needs, and long-term impacts to ensure full compensation for current and future medical needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Bias Defense Strategy</h3>
                    <p className="text-muted-foreground">
                      Proactive development of strategies to counter anti-motorcycle prejudice and insurance company tactics designed to blame riders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = '/motorcycle-case-evaluation'}
                >
                  Start Your Free Case Evaluation
                </Button>
              </div>
            </div>

            <div className="relative">
              <img 
                src={legalConsultationImage} 
                alt="Motorcycle accident legal consultation" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-muted-foreground">Free Consultation</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Immediate Steps Section */}
        <section id="immediate-steps" className="content-section py-16 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                What to Do After a Motorcycle Accident
              </h2>
              <p className="text-lg text-muted-foreground">
                The actions you take immediately after a motorcycle accident can significantly impact your case. Follow these critical steps to protect your health and legal rights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">1. Ensure Safety First</h3>
                  <p className="text-muted-foreground">
                    Get yourself and your motorcycle out of traffic if possible. Turn on hazard lights and set up road flares if available. Call 911 immediately for any injuries.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">2. Document Everything</h3>
                  <p className="text-muted-foreground">
                    Take extensive photos of all vehicles, road conditions, traffic signs, and visible injuries. Get witness contact information and record their statements.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">3. Collect Information</h3>
                  <p className="text-muted-foreground">
                    Exchange insurance and contact information with other drivers. Get the police report number when officers arrive at the scene.
                  </p>
                </div>

                <div className="border-l-4 border-red-600 pl-6">
                  <h3 className="text-xl font-semibold mb-2">4. Seek Medical Attention</h3>
                  <p className="text-muted-foreground">
                    Get medical evaluation even if you feel fine. Adrenaline can mask serious injuries that become apparent hours or days later.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">DON'T Admit Fault</h3>
                  <p className="text-muted-foreground">
                    Never discuss fault or apologize at the scene. Let police and insurance investigators determine liability based on evidence, not assumptions.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">DON'T Give Recorded Statements</h3>
                  <p className="text-muted-foreground">
                    Avoid giving recorded statements to the other driver's insurance company without legal representation. They use these to minimize your claim.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">DON'T Accept Quick Settlements</h3>
                  <p className="text-muted-foreground">
                    Initial settlement offers are typically far below fair compensation. Consult an attorney before accepting any offers from insurance companies.
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold mb-2 text-orange-600">DON'T Delay Legal Consultation</h3>
                  <p className="text-muted-foreground">
                    Contact a motorcycle accident attorney immediately. Evidence disappears quickly, and early legal involvement strengthens your case.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 bg-red-50 rounded-lg">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-semibold">Critical Evidence Preservation</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Motorcycle accident evidence is particularly time-sensitive. Skid marks wash away, surveillance footage gets deleted, and witnesses forget crucial details. Acting quickly preserves evidence that could make the difference in your case.
              </p>
              
              <Collapsible open={expandedSections.evidence} onOpenChange={() => toggleSection('evidence')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More About Evidence Preservation
                    {expandedSections.evidence ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Physical Evidence</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Tire skid marks and road debris</li>
                        <li>• Vehicle damage patterns</li>
                        <li>• Road surface conditions</li>
                        <li>• Traffic control devices</li>
                        <li>• Motorcycle protective gear condition</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Digital Evidence</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Traffic camera footage</li>
                        <li>• Business surveillance video</li>
                        <li>• Cell phone records</li>
                        <li>• GPS and telematics data</li>
                        <li>• Social media posts</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          </div>
        </section>

        {/* Fighting Bias Section */}
        <section id="bias-defense" className="content-section py-16 border-t">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src={biasDefenseImage} 
                alt="Fighting motorcycle bias in legal cases" 
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Overcoming Anti-Motorcycle Bias
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Despite California's large riding community, prejudice against motorcyclists remains a significant challenge in accident cases. Insurance companies, law enforcement, and even potential jurors often harbor unconscious bias that unfairly blames riders for accidents caused by negligent drivers.
              </p>

              <div className="space-y-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Common Stereotypes We Fight</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• "All motorcyclists are speed demons"</li>
                    <li>• "Riders don't follow traffic laws"</li>
                    <li>• "Motorcycles are inherently dangerous"</li>
                    <li>• "Bikers are reckless thrill-seekers"</li>
                    <li>• "Lane splitting is always dangerous"</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Our Defense Strategies</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Detailed accident reconstruction analysis</li>
                    <li>• Expert testimony on motorcycle safety</li>
                    <li>• Evidence of rider training and experience</li>
                    <li>• Traffic law compliance documentation</li>
                    <li>• Jury education about rider rights</li>
                  </ul>
                </div>
              </div>

              <Collapsible open={expandedSections.bias} onOpenChange={() => toggleSection('bias')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-6">
                    Learn More About Bias Defense Tactics
                    {expandedSections.bias ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Insurance companies have developed sophisticated strategies to exploit anti-motorcycle bias. They immediately investigate rider behavior, scrutinize training history, and search social media for any evidence that supports negative stereotypes. They may demand helmet camera footage, question protective gear choices, or argue that motorcycle modifications suggest reckless behavior.
                  </p>
                  <p className="text-muted-foreground">
                    Our firm counters these tactics with comprehensive evidence gathering, expert witnesses who understand motorcycle dynamics, and strategic case presentation that focuses on the other driver's negligence rather than motorcycle stereotypes. We educate adjusters, mediators, and potential jurors about the reality of responsible motorcycle operation and the legal rights of all road users.
                  </p>
                </CollapsibleContent>
              </Collapsible>

              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = '/motorcycle-case-evaluation'}
              >
                Fight Bias in Your Case
              </Button>
            </div>
          </div>
        </section>

        {/* Legal Process Section */}
        <section id="legal-process" className="content-section py-16 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Your Motorcycle Accident Legal Journey
              </h2>
              <p className="text-lg text-muted-foreground">
                Understanding the legal process helps you make informed decisions about your motorcycle accident case. We guide you through every step while fighting for maximum compensation.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Initial Consultation & Investigation</h3>
                  <p className="text-muted-foreground mb-4">
                    Free comprehensive case evaluation where we review accident details, injuries, and evidence. We immediately begin investigating to preserve crucial evidence before it disappears.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">What We Review</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Police reports and accident scene</li>
                        <li>• Medical records and treatment needs</li>
                        <li>• Insurance coverage for all parties</li>
                        <li>• Witness statements and evidence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Investigation Actions</h4>
                      <ul className="text-muted-foreground text-sm space-y-1">
                        <li>• Accident scene preservation</li>
                        <li>• Surveillance footage collection</li>
                        <li>• Expert witness consultation</li>
                        <li>• Insurance company notification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Medical Treatment & Documentation</h3>
                  <p className="text-muted-foreground mb-4">
                    We connect you with qualified medical providers who understand motorcycle injuries. Proper treatment and documentation are essential for both your recovery and your legal case.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-muted-foreground">
                      <strong>Important:</strong> Continue all recommended medical treatment. Insurance companies use treatment gaps to argue your injuries aren't serious or weren't caused by the accident.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Insurance Negotiations</h3>
                  <p className="text-muted-foreground mb-4">
                    We handle all communications with insurance companies while building a comprehensive demand package that addresses bias and demonstrates the full extent of your damages.
                  </p>
                  
                  <Collapsible open={expandedSections.negotiations} onOpenChange={() => toggleSection('negotiations')}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        Learn More About Our Negotiation Process
                        {expandedSections.negotiations ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-2">Demand Package Contents</h4>
                          <ul className="text-muted-foreground space-y-1">
                            <li>• Detailed accident reconstruction</li>
                            <li>• Complete medical documentation</li>
                            <li>• Economic loss calculations</li>
                            <li>• Pain and suffering valuation</li>
                            <li>• Future care requirements</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Negotiation Tactics</h4>
                          <ul className="text-muted-foreground space-y-1">
                            <li>• Counter bias with facts and evidence</li>
                            <li>• Present compelling injury documentation</li>
                            <li>• Demonstrate other driver's clear fault</li>
                            <li>• Use expert opinions and studies</li>
                            <li>• Leverage trial readiness</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3">Settlement or Trial</h3>
                  <p className="text-muted-foreground mb-4">
                    Most cases settle through negotiation, but we're always prepared for trial. Insurance companies offer better settlements when they know we'll fight in court if necessary.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-green-700">Settlement Benefits</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Faster resolution and payment</li>
                        <li>• Guaranteed outcome</li>
                        <li>• Lower costs and fees</li>
                        <li>• Privacy maintained</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 text-blue-700">Trial Advantages</h4>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Potential for higher awards</li>
                        <li>• Public vindication</li>
                        <li>• Punitive damages possible</li>
                        <li>• Precedent setting</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <img 
                src={legalProcessImage} 
                alt="Motorcycle accident legal process" 
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = '/motorcycle-case-evaluation'}
              >
                Start Your Legal Process Today
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section py-16 border-t">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Get answers to common questions about motorcycle accident cases in California.
              </p>
            </div>

            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-left pr-4">{faq.question}</h3>
                      {expandedFaq === index ? 
                        <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" /> : 
                        <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                      }
                    </div>
                  </CardHeader>
                  <Collapsible open={expandedFaq === index}>
                    <CollapsibleContent>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Have more questions? Our motorcycle accident attorneys are here to help.
              </p>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = '/motorcycle-case-evaluation'}
              >
                Get Your Questions Answered
              </Button>
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section id="resources" className="content-section py-16 border-t">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Motorcycle Accident Resources
              </h2>
              <p className="text-lg text-muted-foreground">
                Additional resources and tools for motorcycle accident victims in California.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Stethoscope className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Medical Guidance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Understanding motorcycle injuries and treatment options to ensure proper medical care.
                </p>
                <Link 
                  to="/motorcycle-medical-guidance" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Learn More →
                </Link>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Scale className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Compensation Calculator</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Estimate potential compensation for your motorcycle accident injuries and damages.
                </p>
                <Link 
                  to="/motorcycle-compensation-calculator" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Calculate Now →
                </Link>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <FileText className="w-8 h-8 text-red-600 mr-3" />
                  <h3 className="text-xl font-semibold">Case Evaluation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Free comprehensive evaluation of your motorcycle accident case and legal options.
                </p>
                <Link 
                  to="/motorcycle-case-evaluation" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Start Now →
                </Link>
              </Card>
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">California Motorcycle Laws</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Helmet requirements for all riders</li>
                  <li>• Lane splitting regulations and safety</li>
                  <li>• Insurance requirements and minimums</li>
                  <li>• Licensing and endorsement rules</li>
                  <li>• Equipment and modification standards</li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Safety Resources</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• California Motorcyclist Safety Program</li>
                  <li>• Advanced rider training courses</li>
                  <li>• Protective gear recommendations</li>
                  <li>• Motorcycle maintenance safety tips</li>
                  <li>• Weather and road condition updates</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Don't Wait - Time Limits Section */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-4xl font-bold mb-4">
              Don't Wait - Time Limits Apply for California Motorcycle Accidents
            </h2>
            
            <p className="text-lg mb-8">
              California law strictly limits the time you have to file a motorcycle accident lawsuit. Missing these deadlines can permanently bar your right to compensation, regardless of how strong your case may be.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">2 Years</div>
                <div className="text-sm font-semibold mb-2">Personal Injury Claims</div>
                <div className="text-sm opacity-90">From the date of the motorcycle accident</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">3 Years</div>
                <div className="text-sm font-semibold mb-2">Property Damage Claims</div>
                <div className="text-sm opacity-90">For motorcycle and gear damage</div>
              </div>
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2">6 Months</div>
                <div className="text-sm font-semibold mb-2">Government Claims</div>
                <div className="text-sm opacity-90">Against city, county, or state entities</div>
              </div>
            </div>

            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm mb-8">
              <h3 className="text-2xl font-semibold mb-4">Why Evidence Disappears Quickly in Motorcycle Cases</h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2">
                  <li>• Skid marks and road evidence wash away</li>
                  <li>• Surveillance footage gets automatically deleted</li>
                  <li>• Witness memories fade over time</li>
                  <li>• Vehicle evidence may be destroyed</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Insurance companies destroy claim files</li>
                  <li>• Medical records become harder to obtain</li>
                  <li>• Traffic camera data has retention limits</li>
                  <li>• Police reports may be archived</li>
                </ul>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-12 py-6 text-xl"
              onClick={() => window.location.href = '/motorcycle-case-evaluation'}
            >
              PROTECT YOUR RIGHTS - START YOUR FREE CASE EVALUATION NOW
            </Button>

            <p className="mt-4">
              No fees unless we win your motorcycle accident case. Call 24/7: <span className="font-bold">(818) 123-4567</span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MotorcycleAccidentsNew;