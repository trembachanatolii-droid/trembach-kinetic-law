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
  Car,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Bike
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/bicycle-accidents-hero.jpg';
import legalConsultationImage from '@/assets/practice-areas/bicycle-legal-consultation.jpg';
import medicalCareImage from '@/assets/practice-areas/bicycle-medical-care.jpg';
import accidentSceneImage from '@/assets/practice-areas/bicycle-accident-scene.jpg';
import compensationCalculationImage from '@/assets/practice-areas/bicycle-compensation-calculation.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BicycleAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'california-law', label: 'CALIFORNIA LAW', icon: BookOpen },
    { id: 'accident-types', label: 'ACCIDENT TYPES', icon: Bike },
    { id: 'injuries', label: 'INJURIES', icon: Heart },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
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
    window.location.href = '/bicycle-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data extracted from HTML content - 50+ questions
  const faqData = [
    {
      question: "What should I do immediately after a bicycle accident?",
      answer: "First priority is safety - get out of traffic if possible. Call 911 for medical attention and police documentation. Never leave the scene. Take photos of your injuries, bike damage, and accident scene. Get driver's license, insurance info, and witness contacts. Seek medical evaluation even if you feel fine - adrenaline masks serious injuries like concussions or internal damage."
    },
    {
      question: "Do cyclists have the same rights as car drivers in California?",
      answer: "Yes, California Vehicle Code Section 21200 establishes that cyclists have all the rights and responsibilities of vehicle drivers. You have the legal right to use any road except freeways, take the full lane when necessary for safety, and expect drivers to treat you as traffic, not an obstacle."
    },
    {
      question: "What is California's Three-Foot Law?",
      answer: "Assembly Bill 1909 requires drivers to change lanes entirely when passing cyclists, not just maintain three feet of distance. This 'change lanes to pass' law recognizes that three feet at high speeds creates dangerous wind turbulence. Violations result in base fines of $233, increasing to $959 if a collision occurs."
    },
    {
      question: "Can I still recover compensation if I wasn't wearing a helmet?",
      answer: "Yes, California only mandates helmets for cyclists under 18. While insurance companies may argue comparative negligence for not wearing a helmet, this doesn't eliminate your right to compensation. The driver's negligence is the primary factor in determining liability and damages."
    },
    {
      question: "What are dooring accidents and who's at fault?",
      answer: "Dooring occurs when a car door opens into a cyclist's path. California Vehicle Code 22517 makes door-openers liable. These crashes typically cause facial injuries, broken collarbones, and traumatic brain injuries. Insurance companies argue you should have ridden outside the door zone, but this often means riding in dangerous high-speed traffic."
    },
    {
      question: "How long do I have to file a bicycle accident lawsuit in California?",
      answer: "Two years from the accident date under the statute of limitations. However, start immediately - evidence disappears, witnesses forget, and surveillance footage gets overwritten. Government claims require filing within six months. Missing these deadlines bars recovery forever."
    },
    {
      question: "What compensation can I recover in a bicycle accident case?",
      answer: "Economic damages include medical expenses, future medical care, lost wages, reduced earning capacity, and bike replacement. Non-economic damages cover pain and suffering, emotional distress, and loss of enjoyment. California doesn't cap these damages. Punitive damages are possible for egregious conduct like DUI or road rage."
    },
    {
      question: "Will my health insurance cover bicycle accident injuries?",
      answer: "Yes, but they'll seek reimbursement from your settlement. We negotiate with health insurers to reduce liens, maximizing your net recovery. Use your insurance for immediate treatment while building your case. Medical payments coverage from auto insurance also applies to bicycle accidents."
    },
    {
      question: "What if the driver who hit me doesn't have insurance?",
      answer: "Your own auto insurance's uninsured motorist (UM) coverage applies even when you're cycling. This coverage is often your best source of compensation. We also investigate other insurance sources like employer liability, premises liability, and umbrella policies providing additional coverage layers."
    },
    {
      question: "How do I prove the driver was at fault?",
      answer: "We gather police reports, witness statements, surveillance footage, phone records proving distraction, accident reconstruction, medical records, and photos. Traffic camera footage is invaluable but must be requested quickly before deletion. Skid marks show reaction time. Cell phone records reveal distraction at impact."
    },
    {
      question: "Can I sue if an e-bike or scooter hit me?",
      answer: "Yes, e-bike and scooter riders owe duties of care to other cyclists and pedestrians. We handle all micromobility accidents including shared devices like Lime and Bird. These cases involve unique issues like user agreements, maintenance failures, and corporate liability through terms of service."
    },
    {
      question: "What if the accident happened in a bike lane?",
      answer: "Bike lanes provide legal protection, but drivers frequently violate them. Common violations include parking, driving, or turning through bike lanes. These violations strengthen your case by establishing clear driver negligence. However, bike lane design defects may create additional government liability."
    },
    {
      question: "Do I need a police report for my claim?",
      answer: "Police reports significantly strengthen claims but aren't absolutely required. Officers document the scene, interview witnesses, note violations, and sometimes determine fault. Reports provide official documentation insurance companies can't easily dismiss. Without reports, we build cases using witness statements and physical evidence."
    },
    {
      question: "What if I was hit by a commercial vehicle or delivery truck?",
      answer: "Commercial vehicle accidents often mean higher compensation due to larger insurance policies and corporate liability. Employers are liable for employees' negligence during work duties. Commercial policies typically provide $1 million or more versus minimum personal vehicle coverage. Delivery pressure creates additional liability arguments."
    },
    {
      question: "Can I ride on sidewalks in California?",
      answer: "California delegates sidewalk riding rules to local jurisdictions. Even where prohibited, violating sidewalk rules doesn't automatically make you at fault. Drivers must still exercise caution at driveways and crosswalks. We examine why you were on the sidewalk - unsafe conditions may justify your decision."
    },
    {
      question: "How much does hiring a bicycle accident lawyer cost?",
      answer: "We work on contingency fee basis - you pay nothing unless we win. Typically 33.33% for settlements and 40% if trial is necessary. We advance all case costs including medical records, expert witnesses, and investigations. Free consultations let us evaluate your case without obligation."
    },
    {
      question: "Should I accept the insurance company's first offer?",
      answer: "Never accept first offers without legal review. Initial offers are deliberately low, often 10-20% of case value. Companies know unrepresented cyclists don't understand values and accept inadequate settlements from financial pressure. Our involvement typically increases offers 3-5 times original amounts."
    },
    {
      question: "What if the driver claims I 'came out of nowhere'?",
      answer: "This common defense doesn't eliminate driver liability. Drivers must maintain proper lookout and drive at safe speeds. 'Came out of nowhere' often indicates inattention. We investigate sight lines, lighting, and distractions. Even unexpected cyclist behavior doesn't excuse preventable impacts."
    },
    {
      question: "Can I still recover if I was outside the bike lane?",
      answer: "Yes, cyclists can legally take full lanes when bike lanes are unsafe, blocked, or non-existent. Vehicle Code 21202 permits taking the full lane when necessary for safety. Your compensation gets reduced only by your fault percentage, but recovery remains possible in most situations."
    },
    {
      question: "What evidence is most important in bicycle accident cases?",
      answer: "Don't repair or discard your damaged bike - it's crucial evidence. Damage patterns prove impact angle and force. Photos of scene, injuries, and vehicles provide visual evidence. Surveillance footage shows exactly what happened. Medical records prove injury extent. Keep all damaged parts and get repair estimates."
    },
    {
      question: "What if I don't remember the crash due to head trauma?",
      answer: "Memory loss from head trauma is common and doesn't hurt your case. We reconstruct accidents through physical evidence and witness statements. Your lack of memory actually indicates significant head trauma, potentially increasing case value. Don't guess - saying 'I don't remember' is perfectly acceptable."
    },
    {
      question: "What if the driver was having a medical emergency?",
      answer: "Sudden medical emergencies may provide defense if truly unforeseeable, but most cases still result in liability. Drivers with known conditions must manage them safely. Previous symptoms or doctor warnings eliminate the defense. Driver insurance still covers damages even with medical emergencies."
    },
    {
      question: "How do traffic cameras help my bicycle accident case?",
      answer: "Traffic cameras provide invaluable objective evidence of signal timing, vehicle speed, and cyclist position. This contradicts driver lies about signals or actions. Footage must be requested quickly before automatic deletion - usually within 30-60 days. We immediately send preservation letters securing footage."
    },
    {
      question: "Can I recover lost wages if I'm self-employed?",
      answer: "Yes, though proving losses requires more documentation. Tax returns, profit/loss statements, bank records, and contracts demonstrate earnings. We show how injuries prevented work - canceled contracts, lost clients, inability to fulfill orders. Forensic accountants help establish complex business losses."
    },
    {
      question: "What if I'm an undocumented immigrant hit while cycling?",
      answer: "Immigration status doesn't affect your compensation rights in California. You have identical rights as any victim. Insurance companies cannot ask about status. California law protects access to civil justice. You can recover medical expenses, lost wages, and pain and suffering."
    },
    {
      question: "How do I pay medical bills while waiting for settlement?",
      answer: "We connect you with doctors who treat on lien basis, meaning they wait for payment from your settlement. We also arrange payment plans and can refer you to funding companies for advances. Don't accept lowball offers due to financial pressure."
    },
    {
      question: "What if the accident happened at night?",
      answer: "Nighttime cycling requires proper lighting under California law. However, inadequate lighting doesn't eliminate driver responsibility. Drivers must adjust speed for conditions and maintain proper lookout. We investigate street lighting adequacy and potential municipal liability for dangerous conditions."
    },
    {
      question: "Can children or teenagers recover differently in bicycle accidents?",
      answer: "Children receive special protections under California law with different behavioral standards. School zones have enhanced penalties for striking children. The statute of limitations extends to two years from their 18th birthday. Child injury cases often result in higher compensation due to lifetime impact."
    },
    {
      question: "What if multiple vehicles were involved?",
      answer: "Multi-vehicle accidents create complex liability with multiple insurance sources. Each driver's negligence is evaluated separately. Joint and several liability allows collecting full damages from any defendant able to pay. This often increases total available coverage through multiple policies."
    },
    {
      question: "How do construction zones affect bicycle accident liability?",
      answer: "Construction zones require enhanced safety measures for cyclists. Contractors must maintain safe cycling paths or provide protected alternatives. When cyclists are forced into traffic without adequate protection, liability extends to construction companies and property owners pursuing maximum coverage."
    },
    {
      question: "What types of expert witnesses help bicycle accident cases?",
      answer: "Accident reconstruction experts analyze impact dynamics. Medical experts explain injuries and future care needs. Economic experts calculate lost earnings. Traffic engineers evaluate road design. Biomechanical experts explain injury mechanisms. Cycling experts testify about safe riding practices and industry standards."
    },
    {
      question: "Can I sue if hit while riding for work as a delivery cyclist?",
      answer: "Delivery riders may have workers' compensation claims plus third-party claims against negligent drivers. Employer liability insurance might provide additional coverage. We investigate all potential sources to maximize recovery for work-related accidents, including lost wages and career impacts."
    },
    {
      question: "What if poor road conditions contributed to my accident?",
      answer: "Government entities can be liable under Government Code 835 for dangerous conditions. Potholes, missing signs, construction hazards, or poorly designed bike lanes create liability. However, government claims have strict six-month filing deadlines and special procedures requiring immediate action."
    },
    {
      question: "How long will my bicycle accident case take?",
      answer: "Timeline varies based on injury severity, liability disputes, and insurance cooperation. Simple cases may settle in 3-6 months, while complex cases involving serious injuries can take 1-2 years. We move cases quickly while ensuring maximum compensation. Rushing often means accepting less than deserved."
    },
    {
      question: "What if the driver was drunk or on drugs?",
      answer: "DUI crashes may warrant punitive damages beyond normal compensation, potentially tripling your recovery. Criminal charges strengthen your civil case but aren't required for compensation. We coordinate with prosecutors, obtain criminal evidence, and pursue maximum damages for inexcusable impaired driving."
    },
    {
      question: "Do I need medical insurance to get treatment?",
      answer: "We connect you with doctors who treat on a lien basis, meaning they wait for payment from your settlement. This ensures you get necessary treatment regardless of insurance or financial situation. Proper medical treatment strengthens your case and recovery. Never skip treatment due to cost concerns."
    },
    {
      question: "Can I handle this without a lawyer?",
      answer: "While possible, statistics show represented victims receive 3-5 times more compensation even after attorney fees. Insurance companies exploit unrepresented cyclists' lack of legal knowledge, offering quick lowball settlements before you understand your case's true value. Our experience motivates fair settlements you won't achieve alone."
    },
    {
      question: "What if I was riding for work?",
      answer: "Delivery riders, messengers, and commuters may have additional claims. Workers' compensation may apply, though third-party claims against negligent drivers remain available. Employer liability insurance might provide additional coverage. We investigate all potential sources to maximize recovery for work-related bicycle accidents."
    },
    {
      question: "How do you prove my future medical costs?",
      answer: "We work with medical experts who evaluate your injuries and project future treatment needs. Life care planners calculate costs for surgeries, therapy, medications, and equipment over your lifetime. Economic experts determine how injuries affect earning capacity ensuring settlements account for long-term needs."
    },
    {
      question: "What about my lost wages?",
      answer: "We recover past lost wages from missed work and future lost earnings if injuries affect your career. This includes salary, bonuses, benefits, and advancement opportunities. Self-employed individuals can claim lost business income. We document losses through pay stubs, tax returns, and employer statements."
    },
    {
      question: "Can family members get compensation?",
      answer: "Spouses may claim loss of consortium for impacts on marital relationships. In fatal accidents, family members can pursue wrongful death claims for funeral expenses, lost financial support, and loss of companionship. California law specifies who can file these claims and damage types available."
    },
    {
      question: "What if my injuries get worse over time?",
      answer: "Many bicycle accident injuries worsen over time. Soft tissue damage can develop into chronic pain. Head injuries may cause delayed cognitive problems. That's why we don't rush settlements - we wait until maximum medical improvement or have clear prognoses for future needs."
    },
    {
      question: "How do I pay bills while waiting for settlement?",
      answer: "We help arrange medical treatment on liens, negotiate payment plans with providers, and can refer you to funding companies for advances against your settlement if needed. Don't accept lowball offers due to financial pressure. We help you withstand their tactics while pursuing maximum compensation."
    },
    {
      question: "What if the accident happened on private property?",
      answer: "Accidents in parking lots, driveways, or private roads still create liability. Property owners may be liable for dangerous conditions. Drivers must still operate safely regardless of location. Insurance coverage typically applies to private property accidents. We investigate all liability sources."
    },
    {
      question: "Do I have to go to court?",
      answer: "Most cases (95%) settle without trial. However, being trial-ready motivates better settlement offers. If trial becomes necessary, we thoroughly prepare you for testimony and handle all proceedings. Your willingness to fight for fair compensation often produces settlements avoiding court entirely."
    },
    {
      question: "What makes you different from other lawyers?",
      answer: "As a former defense attorney, I know exactly how insurance companies evaluate bicycle claims. I understand cycling culture, safety issues, and unique challenges cyclists face. Many lawyers treat bike accidents like car accidents - they're not. Our cycling community commitment goes beyond legal representation to street safety advocacy."
    },
    {
      question: "Can you help with property damage too?",
      answer: "Yes, we handle all aspects including bike replacement, damaged equipment, clothing, and personal items. High-end bicycles can cost $10,000+, and custom builds require special documentation. We ensure full compensation for all property damage, not just generic replacement values insurance companies offer."
    },
    {
      question: "What if the driver blames me?",
      answer: "Drivers often falsely blame cyclists to avoid responsibility. Common false claims include 'they swerved into me' or 'came from nowhere.' We counter with evidence, witness testimony, and accident reconstruction showing driver negligence. Don't be intimidated by false accusations - that's exactly what insurance companies want."
    },
    {
      question: "How soon should I contact you?",
      answer: "Immediately. Evidence disappears, witnesses vanish, and surveillance footage gets overwritten within days. Insurance companies start building their defense immediately. The sooner we investigate, the stronger your case. Even if hospitalized, have family call us. Waiting only helps insurance companies."
    },
    {
      question: "What if I already talked to insurance?",
      answer: "Don't panic, but don't say anything more. We can often minimize damage from early statements and prevent further mistakes. Tell them you've retained counsel and all future communications go through us. Early missteps don't doom your case, but continuing without representation makes things worse."
    },
    {
      question: "Do you handle Lime/Bird scooter accidents?",
      answer: "Yes, we handle all micromobility accidents including e-scooters, e-bikes, and shared mobility devices. These cases involve unique issues like user agreements, maintenance failures, and municipal regulations. Corporate entities often try avoiding liability through terms of service. We understand these complexities."
    },
    {
      question: "Do you handle electric bike (e-bike) accidents?",
      answer: "Yes, we handle all e-bike accidents including Class 1, 2, and 3 e-bikes. Senate Bill 1271 regulates e-bikes into specific categories with different rules. Modifications exceeding limits can affect liability. We understand e-bike regulations and pursue maximum compensation for enhanced speed and injury potential."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Button */}
      <Button
        variant="ghost"
        size="sm"
        className="fixed top-20 left-4 z-[60] bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white/95"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Go Back
      </Button>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="hero-content">
            <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold">
              California's Premier Bicycle Accident Lawyers
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Injured in a <span className="text-cyan-300">Bicycle Accident</span>?
              <br />
              We Fight for Maximum Recovery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
              Former defense attorney now fighting for injured cyclists. We know their tactics. We beat their strategies. 
              Free 24/7 consultation. No fees unless we win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                Free Case Review
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-cyan-300 mb-2">24/7</div>
                <div className="text-white">Available</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-green-300 mb-2">$0</div>
                <div className="text-white">Unless We Win</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-white">Focused on You</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto no-scrollbar">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div ref={contentRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Overview Section */}
        <section id="overview" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">California Bicycle Accident Lawyers Who Actually Ride</h2>
          
          <div className="mb-6">
            <img src={accidentSceneImage} alt="Bicycle accident scene documentation" className="w-full h-64 object-cover rounded-lg mb-4" />
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed mb-6">
              When a 4,000-pound vehicle strikes a 20-pound bicycle, the outcome is never fair. California's roads see over 10,000 bicycle accidents annually, with 145 cyclists killed in 2023 alone. Behind every statistic is a person whose life changed in seconds – medical bills mounting, wages lost, and the simple joy of riding stolen by someone's carelessness.
            </p>
            
            <p className="text-lg leading-relaxed mb-6">
              As a former defense attorney who previously protected insurance companies, I know exactly how they minimize cyclist claims. They blame you for being on the road. They argue you should have been more visible. They claim your injuries aren't that serious. Now I use that insider knowledge to destroy their arguments and maximize your compensation.
            </p>
          </div>

          <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between mb-4">
                Learn More About Why California Roads Are Dangerous for Cyclists
                {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <p>
                  California law gives cyclists equal rights to the road, but exercising those rights shouldn't cost you your health, your finances, or your life. Whether you were doored by a careless driver, right-hooked at an intersection, or struck by a distracted motorist checking their phone, you deserve aggressive representation that understands both the law and the cycling community.
                </p>
                
                <h3>Why California Roads Are Increasingly Dangerous for Cyclists</h3>
                <p>
                  Despite California ranking third nationally as a bike-friendly state, our cyclists face mounting dangers. Los Angeles County alone reported 1,813 bicycle accidents in 2021, with similar numbers continuing through 2025. The problem isn't just volume – it's severity. Urban crashes account for 88% of fatal bicycle accidents, occurring primarily during evening commute hours between 6-9 PM when visibility decreases and driver attention wanes.
                </p>
                
                <p>
                  Smartphone addiction has created an epidemic of distracted driving. Studies show drivers spend an average of 1 minute per every 10 minutes looking at their phones while driving. At 35 mph, checking a text for 5 seconds means traveling the length of a football field essentially blind. When that blind spot contains a cyclist, catastrophe follows.
                </p>
                
                <p>
                  Infrastructure failures compound the danger. California has 28,000 miles of street lanes, but only 0.6% are truly safe for bicycles. Bike lanes that disappear at intersections, door zones painted as "safety" lanes, and sharrows on 45 mph roads create an illusion of protection while placing cyclists directly in harm's way.
                </p>
                
                <h3>The Hidden Costs Insurance Companies Don't Want You to Know</h3>
                <p>
                  Insurance adjusters will offer you a quick settlement covering your emergency room visit and bike replacement. They won't mention the MRI that reveals a herniated disc six weeks later. They ignore the PTSD that makes you break into a sweat when a car passes too close. They certainly don't calculate the thousands in future medical costs, lost promotional opportunities from missed work, or the complete lifestyle change a permanent injury brings.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* California Law Section */}
        <section id="california-law" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">California Bicycle Laws Every Cyclist Must Know</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <BookOpen className="w-5 h-5 mr-2 text-red-600" />
                  Equal Road Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">California Vehicle Code Section 21200 establishes cyclists have all rights and responsibilities of vehicle drivers.</p>
                <ul className="text-sm space-y-2">
                  <li>• Legal right to use any road except freeways</li>
                  <li>• Can take full lane when necessary for safety</li>
                  <li>• Drivers must treat cyclists as traffic</li>
                  <li>• Same liability protections as motorists</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Shield className="w-5 h-5 mr-2 text-red-600" />
                  Three-Foot Law & Lane Change
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Assembly Bill 1909 requires drivers to change lanes entirely when passing cyclists.</p>
                <ul className="text-sm space-y-2">
                  <li>• Must change lanes to pass, not just 3-feet clearance</li>
                  <li>• Base fines of $233 for violations</li>
                  <li>• $959 fine if collision occurs</li>
                  <li>• Recognizes wind turbulence dangers</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Collapsible open={expandedSections.law} onOpenChange={() => toggleSection('law')}>
            <CollapsibleTrigger asChild>
              <Button variant="outline" className="w-full justify-between mb-4">
                Learn More About California Bicycle Laws and Your Rights
                {expandedSections.law ? <ChevronUp /> : <ChevronDown />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="space-y-6">
              <div className="prose prose-lg max-w-none">
                <h3>Taking the Lane: Your Legal Right to Safety</h3>
                <p>
                  Vehicle Code 21202 permits cyclists to take the full lane when the lane is too narrow for a bicycle and vehicle to travel safely side-by-side. This includes most lanes under 14 feet wide, areas with parked cars creating door zones, approaching intersections, or when road hazards exist. Drivers honking or yelling at you to move over are demanding you break the law and endanger yourself.
                </p>
                
                <h3>E-Bike Regulations and Classifications</h3>
                <p>
                  Senate Bill 1271, enacted in 2024, strictly regulates e-bikes into three classes: Class 1 (pedal-assist only, 20 mph), Class 2 (throttle-assisted, 20 mph), and Class 3 (pedal-assist only, 28 mph). Modifications exceeding 750 watts or speed limits transform e-bikes into motor vehicles requiring registration and licensing. Riders under 16 cannot operate Class 3 e-bikes, and helmets are mandatory for all Class 3 riders regardless of age.
                </p>
                
                <h3>Helmet Laws and Safety Equipment</h3>
                <p>
                  California mandates helmets only for cyclists under 18, though helmets reduce head injury risk by 85%. While adults aren't legally required to wear helmets, insurance companies use helmet absence to argue comparative negligence, potentially reducing compensation even when the driver is primarily at fault.
                </p>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </section>

        {/* Accident Types Section */}
        <section id="accident-types" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Types of Bicycle Accidents We Handle</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Car className="w-5 h-5 mr-2 text-red-600" />
                  Dooring Accidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Car doors opening into cyclist path with zero reaction time.</p>
                <ul className="text-sm space-y-1">
                  <li>• Launch cyclists over handlebars</li>
                  <li>• Facial injuries and brain trauma</li>
                  <li>• Broken collarbones common</li>
                  <li>• Vehicle Code 22517 liability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <MapPin className="w-5 h-5 mr-2 text-red-600" />
                  Right-Hook Collisions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Drivers turning right across bike lanes cause 40% of urban cycling fatalities.</p>
                <ul className="text-sm space-y-1">
                  <li>• Pass cyclist then immediately turn</li>
                  <li>• Crush cyclists against curbs</li>
                  <li>• Drag victims under vehicles</li>
                  <li>• Often at intersections</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                  Left-Cross Collisions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Oncoming drivers turning left claim they "didn't see" cyclist.</p>
                <ul className="text-sm space-y-1">
                  <li>• Head-on impacts at high speeds</li>
                  <li>• Combined speeds exceed 50 mph</li>
                  <li>• Catastrophic injuries common</li>
                  <li>• Negligent lookout liability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Bike className="w-5 h-5 mr-2 text-red-600" />
                  Rear-End & Sideswipes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Distracted or impaired drivers striking cyclists from behind.</p>
                <ul className="text-sm space-y-1">
                  <li>• Texting while driving epidemic</li>
                  <li>• DUI and prescription drug impairment</li>
                  <li>• High-speed impacts</li>
                  <li>• Clear liability cases</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Building className="w-5 h-5 mr-2 text-red-600" />
                  Intersection Accidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Complex traffic patterns at intersections create multiple collision scenarios.</p>
                <ul className="text-sm space-y-1">
                  <li>• Red light running</li>
                  <li>• Failure to yield on turns</li>
                  <li>• Blocked sight lines</li>
                  <li>• Signal timing issues</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Shield className="w-5 h-5 mr-2 text-red-600" />
                  E-Bike Accidents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-3">Electric bikes create unique accident scenarios with higher speeds.</p>
                <ul className="text-sm space-y-1">
                  <li>• Class 1, 2, and 3 e-bike incidents</li>
                  <li>• Battery and motor failures</li>
                  <li>• Speed-related crashes</li>
                  <li>• Manufacturer defect claims</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Injuries Section */}
        <section id="injuries" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Severe Bicycle Accident Injuries</h2>
          
          <div className="mb-6">
            <img src={medicalCareImage} alt="Bicycle accident medical care" className="w-full h-64 object-cover rounded-lg mb-4" />
          </div>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Bicycle accidents create unique injury patterns reflecting the physics of lightweight bikes versus heavy vehicles. Insurance companies often undervalue these injuries or claim they're "expected" from cycling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Common Severe Injuries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Traumatic brain injuries (despite helmets)</li>
                  <li>• Spinal cord damage and paralysis</li>
                  <li>• Clavicle and shoulder fractures</li>
                  <li>• Severe road rash and scarring</li>
                  <li>• Hand and wrist injuries</li>
                  <li>• Facial injuries and dental damage</li>
                  <li>• Lower extremity fractures</li>
                  <li>• Internal organ damage</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Clock className="w-5 h-5 mr-2 text-red-600" />
                  Long-Term Impact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Permanent scarring and disfigurement</li>
                  <li>• Chronic pain conditions</li>
                  <li>• Limited mobility and function</li>
                  <li>• Multiple reconstructive surgeries</li>
                  <li>• Fear of cycling again</li>
                  <li>• Post-traumatic stress disorder</li>
                  <li>• Career and lifestyle limitations</li>
                  <li>• Lost cycling community connection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Compensation Section */}
        <section id="compensation" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Comprehensive Compensation for Cyclists</h2>
          
          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-lg leading-relaxed mb-6">
              Bicycle accident cases require specialized understanding of cycling culture, infrastructure, and the unique vulnerabilities cyclists face. We ensure comprehensive compensation addressing all aspects of impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                  Economic Damages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Medical treatment costs</p>
                <p className="text-sm">• Lost wages and benefits</p>
                <p className="text-sm">• Diminished earning capacity</p>
                <p className="text-sm">• Bicycle and equipment replacement</p>
                <p className="text-sm">• Transportation alternatives</p>
                <p className="text-sm">• Home and workplace modifications</p>
                <p className="text-sm">• Ongoing rehabilitation costs</p>
              </CardContent>
            </Card>
            
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Heart className="w-5 h-5 mr-2 text-red-600" />
                  Non-Economic Damages
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm">• Pain and suffering</p>
                <p className="text-sm">• Loss of cycling enjoyment</p>
                <p className="text-sm">• Disfigurement and scarring</p>
                <p className="text-sm">• Emotional distress</p>
                <p className="text-sm">• Loss of life activities</p>
                <p className="text-sm">• Family relationship impact</p>
                <p className="text-sm">• Community connection loss</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="glass-card">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <CardTitle className="flex items-center justify-between text-lg">
                    <span>{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-red-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-red-600" />
                    )}
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
        <section id="resources" className="content-section mb-16">
          <h2 className="text-3xl font-bold text-red-600 mb-8">Bicycle Accident Resources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <FileText className="w-5 h-5 mr-2 text-red-600" />
                  Case Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Get a detailed analysis of your bicycle accident case and legal options.</p>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/bicycle-case-evaluation'}>
                  Start Evaluation →
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <Stethoscope className="w-5 h-5 mr-2 text-red-600" />
                  Medical Guidance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Learn about medical care and documentation after bicycle injuries.</p>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/bicycle-medical-guidance'}>
                  Learn More →
                </Button>
              </CardContent>
            </Card>

            <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
              <CardHeader>
                <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                  <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                  Compensation Calculator
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Estimate potential compensation for your bicycle accident injuries.</p>
                <Button variant="outline" size="sm" onClick={() => window.location.href = '/bicycle-compensation-calculator'}>
                  Calculate Value →
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default BicycleAccidents;