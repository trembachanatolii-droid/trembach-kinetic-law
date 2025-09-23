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
  DollarSign,
  Calculator
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/uber-lyft-hero-bg.jpg';
import sidebarImage from '@/assets/uber-lyft-legal-process.jpg';
import insuranceImage from '@/assets/uber-lyft-insurance-coverage.jpg';
import medicalImage from '@/assets/uber-lyft-medical-care.jpg';
import compensationImage from '@/assets/uber-lyft-compensation.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const UberLyftAccidents: React.FC = () => {
  useScrollRestoration();
  
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentType: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'injuries', label: 'COMMON INJURIES', icon: Stethoscope },
    { id: 'insurance', label: 'INSURANCE COVERAGE', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Heart },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 50,
          rotationX: 15,
          transformOrigin: 'center bottom'
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out'
        }
      );

      // 3D floating background layers
      gsap.to('.floating-bg-1', {
        y: 30,
        rotation: 5,
        duration: 14,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      gsap.to('.floating-bg-2', {
        x: 40,
        y: -20,
        rotation: -3,
        duration: 18,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      gsap.to('.floating-bg-3', {
        y: 20,
        x: 25,
        rotation: 2,
        duration: 10,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true
      });

      // Content sections with parallax
      gsap.fromTo('.content-card',
        { 
          opacity: 0, 
          y: 60,
          scale: 0.95
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 85%',
            end: 'bottom 15%',
            scrub: 1
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
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveTab(sectionId);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/uber-lyft-case-evaluation';
  };

  const faqData = [
    {
      question: "What should I do immediately after an Uber or Lyft accident?",
      answer: "First, ensure everyone's safety and call 911 if there are injuries. Document everything with photos, get driver information, and screenshot your ride details in the app before they disappear. Report the accident through the app's safety feature immediately. Seek medical attention even for minor injuries, as some symptoms appear later. Don't admit fault or discuss details with insurance companies before consulting an attorney."
    },
    {
      question: "Who pays for my medical bills after a rideshare accident?",
      answer: "Initially, your health insurance or medical payments coverage may cover treatment. The at-fault party's insurance ultimately bears responsibility. During active rides, Uber and Lyft's $1 million policies apply. We can arrange treatment on a lien basis, meaning doctors wait for payment from your settlement, ensuring you get necessary care without upfront costs."
    },
    {
      question: "Can I sue Uber or Lyft directly for my injuries?",
      answer: "Yes, despite their independent contractor model, rideshare companies can be held liable for negligent hiring, inadequate background checks, failure to address safety complaints, or systemic safety failures. California courts increasingly recognize these companies' duty to ensure passenger safety. Our former defense experience helps us identify corporate liability theories that succeed."
    },
    {
      question: "What if the rideshare driver was drunk or on drugs?",
      answer: "Intoxicated driving strengthens your case significantly. Beyond regular compensation, you may receive punitive damages. The rideshare company may be liable for inadequate screening or ignoring warning signs. Criminal charges against the driver don't prevent civil lawsuits. We coordinate with prosecutors while pursuing maximum civil compensation."
    },
    {
      question: "How much is my rideshare accident case worth?",
      answer: "Case values vary based on injury severity, medical expenses, lost wages, and impact on your life. Minor injuries may settle for thousands, while catastrophic injuries can exceed millions. Factors include available insurance, liability strength, and long-term effects. Our free consultation provides realistic case valuation based on similar successful cases."
    },
    {
      question: "What if I was partially at fault for the accident?",
      answer: "California follows pure comparative negligence, meaning you can recover even if 99% at fault, though your compensation reduces by your fault percentage. As a passenger, you're rarely at fault unless you grabbed the wheel or distracted the driver. We minimize your fault percentage through strategic case presentation."
    },
    {
      question: "Do I need a lawyer for a minor rideshare accident?",
      answer: "Even 'minor' accidents can cause serious injuries that manifest later. Insurance companies minimize claims, especially those without legal representation. Soft tissue injuries, concussions, and psychological trauma are often undervalued. Free consultation helps determine if legal representation benefits your case. We handle all cases on contingency - no fees unless we win."
    },
    {
      question: "What if the driver sexually assaulted or harassed me?",
      answer: "Report to police immediately and preserve all evidence. Rideshare companies may be liable for inadequate background checks or ignoring prior complaints. You can pursue both criminal charges and civil compensation. We handle these sensitive cases with discretion and compassion, fighting for justice while protecting your privacy."
    },
    {
      question: "How long does a rideshare accident case take to settle?",
      answer: "Simple cases may settle in 3-6 months, while complex cases can take 1-2 years or more. Factors include injury severity, liability disputes, and insurance company cooperation. We move cases efficiently while ensuring maximum compensation. Quick settlements often undervalue claims - patience typically yields better results."
    },
    {
      question: "Can I get compensation if I was a pedestrian hit by an Uber/Lyft?",
      answer: "Yes, pedestrians have strong claims against rideshare drivers who strike them. The $1 million insurance applies if the driver was logged into the app. Pedestrians often suffer severe injuries deserving maximum compensation. We investigate driver negligence, visibility conditions, and whether the driver was distracted by the app."
    },
    {
      question: "What's the difference between Uber and Lyft insurance coverage?",
      answer: "Both provide similar coverage: $1 million during rides, limited coverage when logged in without passengers. Minor differences exist in deductibles and claim procedures. Both companies use aggressive tactics to minimize payouts. We navigate both systems effectively, maximizing recovery regardless of which service was involved."
    },
    {
      question: "Should I accept the insurance company's first settlement offer?",
      answer: "Never accept initial offers without legal review. First offers are typically 3-10 times less than cases are worth. Insurance companies prey on victims' financial desperation and lack of legal knowledge. Once you accept and sign a release, you cannot pursue additional compensation even if injuries worsen."
    },
    {
      question: "What evidence do I need for my rideshare accident claim?",
      answer: "Critical evidence includes ride receipts, app screenshots, police reports, medical records, witness statements, photos of injuries/damage, and traffic camera footage. Time-sensitive evidence like driver logs and vehicle data may be destroyed. We immediately preserve evidence and conduct thorough investigations."
    },
    {
      question: "Can I claim compensation for PTSD after a rideshare accident?",
      answer: "Absolutely. PTSD, anxiety, depression, and other psychological injuries deserve compensation. Mental health treatment costs, therapy, medications, and impact on daily life are recoverable damages. We work with mental health professionals to document psychological trauma often minimized by insurance companies."
    },
    {
      question: "What if my Uber/Lyft driver fled the scene?",
      answer: "Hit-and-run by rideshare drivers is serious criminal conduct. The app tracks driver identity, making escape impossible. Criminal charges strengthen civil cases. Uninsured motorist coverage may apply. We coordinate with law enforcement while pursuing maximum civil compensation including punitive damages."
    },
    {
      question: "How does Prop 22 affect my rideshare accident claim?",
      answer: "Proposition 22 maintains drivers as independent contractors while requiring some benefits. It doesn't eliminate rideshare company liability for passenger safety. Companies still must provide insurance and can be liable for systemic safety failures. We navigate California's complex legal framework to maximize recovery."
    },
    {
      question: "What if I didn't report the accident immediately?",
      answer: "While immediate reporting is best, delayed reporting doesn't eliminate your claim. Injuries often manifest days or weeks later. Document why you delayed (shock, didn't realize injury severity). Insurance companies use delays against you, making legal representation crucial to explain legitimate reasons for delay."
    },
    {
      question: "Can I recover damages if I wasn't wearing a seatbelt?",
      answer: "California's 'seat belt defense' may reduce but not eliminate recovery. Maximum reduction is typically 5-25% of damages. Many rideshare passengers don't wear seatbelts in backseats. We minimize impact by focusing on driver negligence causing the accident regardless of seatbelt use."
    },
    {
      question: "What if the driver was using multiple rideshare apps?",
      answer: "Many drivers use Uber and Lyft simultaneously. Coverage depends on which app had active ride. Both companies may deny coverage claiming the other was active. We investigate app data, determine active platform, and prevent coverage denials from finger-pointing between companies."
    },
    {
      question: "What compensation is available for scarring and disfigurement?",
      answer: "Permanent scarring and disfigurement warrant significant compensation beyond medical costs. Factors include visibility, size, location, age, gender, and impact on employment/relationships. Plastic surgery costs, psychological counseling, and diminished quality of life are compensable. Young victims with facial scarring often receive higher awards."
    },
    {
      question: "Can undocumented immigrants file rideshare accident claims?",
      answer: "Yes, immigration status doesn't affect personal injury rights in California. You can pursue full compensation regardless of documentation. Insurance companies cannot ask about immigration status. We protect clients' privacy and ensure immigration concerns don't impact injury claims."
    },
    {
      question: "What if I was injured in a rideshare during a work trip?",
      answer: "You may have both workers' compensation and personal injury claims. Workers' comp provides immediate benefits while personal injury claims offer fuller compensation including pain and suffering. Coordination between claims maximizes recovery. Employer-paid rides don't limit your rights against rideshare companies."
    },
    {
      question: "How do pre-existing conditions affect my claim?",
      answer: "Pre-existing conditions don't bar recovery for aggravation or exacerbation. The 'eggshell plaintiff' rule means defendants take victims as they find them. Insurance companies scrutinize medical history seeking to blame pre-existing conditions. We use medical experts to distinguish new injuries from prior conditions."
    },
    {
      question: "What if the accident happened at an airport or special zone?",
      answer: "Airports have designated rideshare areas with specific rules. Accidents in these zones may involve airport authority liability for dangerous conditions. LAX, SFO, and other California airports have unique pickup/dropoff procedures. Violations of airport regulations strengthen negligence claims."
    },
    {
      question: "Can I recover if injured in a rideshare pool/shared ride?",
      answer: "Yes, pool passengers have the same rights as private ride passengers. Multiple passengers may strengthen liability findings through consistent witness testimony. Shared rides don't reduce available insurance coverage. Companies can't use cost-sharing to limit passenger safety obligations or compensation."
    }
  ];

  const additionalFaqs = [
    {
      question: "What if the rideshare vehicle had mechanical problems?",
      answer: "Mechanical failures can create liability for the rideshare company, driver, and potentially the vehicle manufacturer. Poor maintenance, ignored recalls, or defective parts strengthen your case. We investigate maintenance records, recall notices, and mechanical inspections to identify all liable parties."
    },
    {
      question: "How are wrongful death settlements distributed?",
      answer: "California law determines distribution based on heirs and dependents. Surviving spouses, children, and dependents share recovery. Court approval often required for distribution. We ensure fair allocation while minimizing family conflicts during difficult times."
    },
    {
      question: "What if I can't afford medical treatment?",
      answer: "We arrange treatment on lien basis - doctors wait for payment from settlement. No upfront costs for necessary care. Network of physicians familiar with injury cases. Don't delay treatment due to costs - we ensure you get care needed."
    },
    {
      question: "Can I delete the rideshare app after an accident?",
      answer: "Don't delete apps or ride history. This data provides crucial evidence. Screenshot everything before it disappears. Companies may delete data after certain periods. We immediately preserve electronic evidence through litigation holds."
    },
    {
      question: "What about accidents in company vehicles used for rideshare?",
      answer: "Rental or fleet vehicles may have additional insurance coverage. Rental company liability for mechanical failures. Fleet management companies may share liability for poor maintenance. Multiple insurance policies potentially increase available compensation."
    },
    {
      question: "How do I handle social media after an accident?",
      answer: "Avoid posting about the accident, injuries, or activities. Insurance companies monitor social media for contradicting evidence. Privacy settings don't prevent discovery. Posts showing activity can be misinterpreted to minimize injuries. Consult us before any accident-related posts."
    },
    {
      question: "What if I signed something at the scene?",
      answer: "Documents signed under duress or without understanding may be invalid. Shock and injuries impair judgment. We review any signed documents for enforceability. Don't assume signed papers end your rights - legal review essential."
    },
    {
      question: "What about accidents involving food delivery services?",
      answer: "Food delivery uses similar but distinct insurance coverage. Active delivery provides $1 million coverage. Different rules apply for restaurant pickup versus customer delivery. Multi-app delivery complicates coverage. We navigate various gig economy insurance structures."
    },
    {
      question: "How do I get my medical records for the claim?",
      answer: "We handle medical record collection through proper authorizations. HIPAA releases allow us to obtain all treatment records. Incomplete records hurt claims - we ensure comprehensive documentation. Medical record organization and summary strengthen settlement negotiations."
    },
    {
      question: "What if I gave a recorded statement to insurance?",
      answer: "Prior statements don't destroy cases but require careful handling. We review statements for misinterpretations or coercion. Context about pain, shock, or medication during statements helps explain inconsistencies. Never give additional statements without legal representation."
    },
    {
      question: "Can I switch attorneys if I'm unhappy with representation?",
      answer: "You can change attorneys anytime. New attorneys handle fee splits with prior counsel. No additional costs to you. If unhappy with current representation, get a second opinion. We often take over mishandled cases and achieve better results."
    },
    {
      question: "What if the driver's personal insurance denies coverage?",
      answer: "Personal insurance often excludes commercial activity. This triggers rideshare company insurance as primary coverage. Denial letters actually help establish that rideshare insurance applies. We navigate coverage disputes ensuring some insurance pays."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      <GoBack />
      
      {/* 3D Floating Background Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="floating-bg-1 absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" style={{ transform: 'translateZ(-500px)' }} />
        <div className="floating-bg-2 absolute bottom-20 left-20 w-80 h-80 bg-secondary/10 rounded-full blur-2xl" style={{ transform: 'translateZ(-250px)' }} />
        <div className="floating-bg-3 absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-xl" style={{ transform: 'translateZ(-100px) translate(-50%, -50%)' }} />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center justify-center py-20 bg-gradient-to-br from-primary/10 via-secondary/5 to-background overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Hero Content */}
            <div className="lg:col-span-7 hero-content text-center lg:text-left">
              <div className="mb-6 flex flex-wrap gap-3 justify-center lg:justify-start">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Star className="w-4 h-4 mr-1" />
                  2026 Rising Star
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <Shield className="w-4 h-4 mr-1" />
                  Former Defense Attorney
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                  <DollarSign className="w-4 h-4 mr-1" />
                  No Fees Unless We Win
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                California's Premier 
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
                  Uber & Lyft Accident
                </span>
                <span className="block text-white">Attorneys</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed font-medium">
                Former defense insider now fighting for rideshare accident victims. We know their tactics. We maximize your compensation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-semibold"
                  onClick={() => scrollToSection('evaluation')}
                >
                  <Scale className="w-5 h-5 mr-2" />
                  Get Your Free Case Review
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/20 hover:scale-105 transition-all duration-300 text-lg font-semibold"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="text-white">Call (818) 123-4567</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex-shrink-0 flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-all duration-300 mr-2 hover:scale-105 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary to-primary/80 text-white shadow-lg'
                        : 'text-primary hover:text-primary hover:bg-primary/5 font-semibold'
                    }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main ref={contentRef} className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-8 space-y-12">

            {/* Overview Section */}
            <section id="overview" className="content-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="p-8">
                <h2 className="text-4xl font-bold text-primary mb-6 flex items-center gap-3">
                  <FileText className="w-8 h-8" />
                  What to Do After an Uber or Lyft Accident
                </h2>
                <p className="text-xl text-muted-foreground mb-8 font-medium">
                  Critical steps to protect your rights and maximize compensation after a rideshare accident.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-green-700 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Immediate Steps (Do This)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-base font-medium">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-green-700">Move to safety and call 911 if injuries exist</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-green-700">Take photos of injuries, vehicles, and scene</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Screenshot ride details in app before they disappear</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Report accident through app's safety feature</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Seek immediate medical attention</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Contact our firm immediately</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 hover:border-red-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Never Do This
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't admit fault or discuss details</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't accept quick settlement offers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't give recorded statements to insurance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't delete app or ride history</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't delay medical treatment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                          <span>Don't post about accident on social media</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="mt-6 hover:bg-primary/5 transition-all duration-300">
                      Learn More About Rideshare Accident Risks
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>The Hidden Dangers of Rideshare Services:</strong> While Uber and Lyft provide convenient transportation options throughout California, the rapid growth of ridesharing has led to increased accidents on our roads. Studies show rideshare services have contributed to a 3% annual increase in traffic fatalities, representing approximately 987 additional deaths per year nationwide. In California alone, thousands of rideshare accidents occur annually, with Los Angeles, San Francisco, and San Diego experiencing the highest incident rates.
                    </p>
                    <p>
                      <strong>Driver Distraction and Pressure:</strong> Rideshare drivers face unique pressures that increase accident risks. They must constantly interact with their apps while driving - accepting rides, following GPS navigation, and monitoring passenger requests. The pressure to maintain high ratings and complete more rides for better earnings often leads to speeding, aggressive driving, and fatigue. Many drivers work long hours or juggle multiple gig economy jobs, leading to exhaustion that impairs their driving ability similar to alcohol intoxication.
                    </p>
                    <p>
                      <strong>Insurance Complexity:</strong> Unlike traditional taxi services with straightforward commercial insurance, rideshare accidents involve multiple insurance policies that activate based on the driver's app status. This creates coverage gaps and disputes that can leave victims struggling to receive compensation. Insurance companies often point fingers at each other, claiming the other party should pay, while victims suffer without proper medical care or vehicle repairs.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-card bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Scale className="w-8 h-8" />
                  Free Case Evaluation
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get a professional assessment of your rideshare accident case value and legal options.
                </p>

                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Accident *
                      </label>
                      <Select value={formData.accidentType} onValueChange={(value) => setFormData({...formData, accidentType: value})}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="passenger-injury">Uber/Lyft Passenger Injury</SelectItem>
                          <SelectItem value="pedestrian-hit">Pedestrian Hit by Uber/Lyft</SelectItem>
                          <SelectItem value="driver-collision">Driver vs. Rideshare Collision</SelectItem>
                          <SelectItem value="driver-assault">Driver Assault/Harassment</SelectItem>
                          <SelectItem value="other">Other Rideshare Incident</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Injury Type
                      </label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                          <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
                          <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                          <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                          <SelectItem value="psychological">PTSD/Psychological Trauma</SelectItem>
                          <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                          <SelectItem value="other">Other Injuries</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                    <Scale className="w-6 h-6 mr-3" />
                    Start Free Case Evaluation
                  </Button>
                </form>

                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-muted-foreground">Annual Rideshare Accidents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary">$1M</div>
                    <div className="text-sm text-muted-foreground">Insurance During Rides</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">3%</div>
                    <div className="text-sm text-muted-foreground">Traffic Fatality Increase</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Common Injuries Section */}
            <section id="injuries" className="content-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="relative">
                <img 
                  src={medicalImage} 
                  alt="Medical care for rideshare accident injuries" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Stethoscope className="w-8 h-8" />
                    Common Uber & Lyft Accident Injuries
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-muted-foreground mb-8">
                  Understanding injury types helps maximize your compensation claim and ensures proper medical treatment.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      title: "Traumatic Brain Injuries (TBI)",
                      description: "Even seemingly minor rideshare accidents can cause serious brain injuries. The sudden impact forces the brain against the skull, causing bruising, bleeding, or tissue damage. Symptoms may not appear immediately - headaches, confusion, memory problems, or personality changes can develop days or weeks later."
                    },
                    {
                      title: "Whiplash and Neck Injuries", 
                      description: "The most common rideshare accident injury, whiplash occurs when the head snaps forward and back violently. While insurance companies often minimize whiplash claims, these injuries can cause chronic pain, limited mobility, and neurological symptoms lasting months or years."
                    },
                    {
                      title: "Spinal Cord Injuries",
                      description: "Catastrophic spinal injuries can result in partial or complete paralysis, fundamentally altering victims' lives. These injuries require immediate specialized medical care, extensive rehabilitation, home modifications, adaptive equipment, and lifetime medical support."
                    },
                    {
                      title: "Broken Bones and Fractures",
                      description: "Rideshare accidents commonly cause fractures to ribs, arms, legs, hips, and facial bones. Complex fractures may require multiple surgeries, metal implants, and months of rehabilitation. Victims often cannot work during recovery, facing mounting medical bills while losing income."
                    },
                    {
                      title: "Internal Injuries",
                      description: "Seatbelt injuries, while preventing ejection, can cause internal organ damage, internal bleeding, and abdominal trauma. These life-threatening injuries may not show immediate symptoms, making prompt medical evaluation crucial."
                    },
                    {
                      title: "Psychological Trauma",
                      description: "Post-traumatic stress disorder (PTSD), anxiety, depression, and phobias frequently develop after rideshare accidents. Victims may fear riding in vehicles, experience panic attacks, or suffer sleep disturbances. Mental health treatment represents a significant but often overlooked component of accident damages."
                    }
                  ].map((injury, index) => (
                    <Card key={index} className="border-l-4 border-l-primary hover:border-l-secondary transition-all duration-300 hover:shadow-md hover:scale-[1.01]">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-xl text-primary">{injury.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{injury.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </section>

            {/* Insurance Coverage Section */}
            <section id="insurance" className="content-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="relative">
                <img 
                  src={insuranceImage} 
                  alt="Rideshare insurance coverage documentation" 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80 flex items-center justify-center">
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    <Shield className="w-8 h-8" />
                    Rideshare Insurance Coverage Explained
                  </h2>
                </div>
              </div>
              
              <div className="p-8">
                <p className="text-lg text-muted-foreground mb-8">
                  Understanding the three-period insurance system is crucial for maximizing your compensation.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Period 1</CardTitle>
                      <p className="text-sm text-muted-foreground">App On, No Passenger</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-secondary mb-2">$50K/$100K</div>
                      <p className="text-sm">Limited liability coverage when driver is online but no passenger assigned</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Period 2</CardTitle>
                      <p className="text-sm text-muted-foreground">Ride Accepted</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-secondary mb-2">$1 Million</div>
                      <p className="text-sm">Full coverage when driver accepts ride until passenger pickup</p>
                    </CardContent>
                  </Card>

                  <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg text-primary">Period 3</CardTitle>
                      <p className="text-sm text-muted-foreground">Passenger in Vehicle</p>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-secondary mb-2">$1 Million</div>
                      <p className="text-sm">Maximum coverage during ride until passenger exit</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="mb-6 hover:bg-primary/5 transition-all duration-300">
                      Learn More About Coverage Disputes
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 text-muted-foreground leading-relaxed">
                    <p>
                      <strong>Coverage Gap Disputes:</strong> Insurance companies frequently dispute which period applies, whether the driver was truly available for rides, or if they deviated from prescribed routes. These disputes can leave victims without coverage while companies argue over responsibility.
                    </p>
                    <p>
                      <strong>Personal Insurance Exclusions:</strong> Most personal auto insurance policies exclude coverage during commercial activities. This means if rideshare insurance doesn't apply, victims may have no coverage at all. We fight to ensure appropriate coverage applies.
                    </p>
                    <p>
                      <strong>Uninsured/Underinsured Motorist Coverage:</strong> Your own auto insurance policy may provide additional coverage through UM/UIM provisions. We explore all available coverage sources to maximize your recovery.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-card bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Heart className="w-8 h-8" />
                  Our Legal Process for Rideshare Cases
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  From initial consultation to maximum settlement, we guide you through every step.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Free Consultation & Case Review",
                      description: "We evaluate your case, explain your rights, and determine the strength of your claim. No fees unless we win.",
                      timeline: "Same Day"
                    },
                    {
                      step: "2", 
                      title: "Evidence Preservation & Investigation",
                      description: "We immediately preserve app data, obtain police reports, interview witnesses, and secure all evidence before it's destroyed.",
                      timeline: "1-2 Weeks"
                    },
                    {
                      step: "3",
                      title: "Medical Documentation & Treatment",
                      description: "We arrange necessary medical care and ensure all injuries are properly documented for maximum compensation.",
                      timeline: "Ongoing"
                    },
                    {
                      step: "4",
                      title: "Insurance Claims & Negotiations",
                      description: "We handle all insurance communications, file claims, and negotiate aggressively for maximum settlement.",
                      timeline: "2-6 Months"
                    },
                    {
                      step: "5",
                      title: "Litigation if Necessary",
                      description: "If insurance companies won't pay fair compensation, we file lawsuits and take cases to trial.",
                      timeline: "6-18 Months"
                    },
                    {
                      step: "6",
                      title: "Maximum Settlement or Verdict",
                      description: "We secure the highest possible compensation for your injuries, lost wages, and suffering.",
                      timeline: "Final Resolution"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-6 group">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                        {item.step}
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-primary group-hover:text-secondary transition-colors duration-300">{item.title}</h3>
                          <span className="text-sm text-muted-foreground bg-gray-100 px-3 py-1 rounded-full">{item.timeline}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <MessageCircle className="w-8 h-8" />
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get answers to the most common questions about rideshare accident claims in California.
                </p>

                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="hover:shadow-md transition-all duration-300">
                      <button
                        className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-300"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="font-semibold text-xl mb-2 text-primary">{faq.question}</h3>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {expandedFaq === index && (
                        <div className="px-4 pb-4">
                          <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="mt-8 hover:bg-primary/5 transition-all duration-300">
                      View 25 Additional FAQs
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 space-y-4">
                    {additionalFaqs.map((faq, index) => (
                      <Card key={index} className="hover:shadow-md transition-all duration-300">
                        <button
                          className="w-full text-left p-4 hover:bg-gray-50 transition-colors duration-300"
                          onClick={() => setExpandedFaq(expandedFaq === index + 100 ? null : index + 100)}
                        >
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-primary pr-4 text-xl leading-tight">{faq.question}</h3>
                            {expandedFaq === index + 100 ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        {expandedFaq === index + 100 && (
                          <div className="px-4 pb-4">
                            <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
                          </div>
                        )}
                      </Card>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-card bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden hover:scale-[1.01]">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-primary mb-6 flex items-center gap-3">
                  <Building className="w-8 h-8" />
                  Essential California Rideshare Legal Resources
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Understanding your rights under California's unique legal framework.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Related Practice Areas</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/5 text-primary font-medium" onClick={() => window.location.href = '/uber-lyft-medical-guidance'}>
                        <Stethoscope className="w-4 h-4 mr-2" />
                        <span className="text-primary">Medical Guidance</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/5 text-primary font-medium" onClick={() => window.location.href = '/uber-lyft-legal-guidance'}>
                        <Scale className="w-4 h-4 mr-2" />
                        <span className="text-primary">Legal Guidance</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/5 text-primary font-medium" onClick={() => window.location.href = '/uber-lyft-compensation-calculator'}>
                        <Calculator className="w-4 h-4 mr-2" />
                        <span className="text-primary">Compensation Calculator</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/5 text-primary font-medium" onClick={() => window.location.href = '/uber-lyft-faq'}>
                        <MessageCircle className="w-4 h-4 mr-2" />
                        <span className="text-primary">Complete FAQ</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start hover:bg-primary/5 text-primary font-medium" onClick={() => window.location.href = '/uber-lyft-resources'}>
                        <Building className="w-4 h-4 mr-2" />
                        <span className="text-primary">Additional Resources</span>
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-xl text-primary">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button className="w-full justify-start bg-gradient-to-r from-primary to-secondary text-white hover:from-primary/90 hover:to-secondary/90" onClick={() => window.location.href = '/uber-lyft-case-evaluation'}>
                        <FileText className="w-4 h-4 mr-2" />
                        Start Case Evaluation
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-green-500 text-green-700 hover:bg-green-50" onClick={() => window.location.href = 'tel:8181234567'}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-blue-500 text-blue-700 hover:bg-blue-50" onClick={() => window.location.href = '/schedule-consultation'}>
                        <Clock className="w-4 h-4 mr-2" />
                        Schedule Consultation
                      </Button>
                      <Button variant="outline" className="w-full justify-start border-purple-500 text-purple-700 hover:bg-purple-50" onClick={() => window.location.href = '/uber-lyft-compensation-calculator'}>
                        <DollarSign className="w-4 h-4 mr-2" />
                        Calculate My Case Value
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="mt-8 hover:bg-primary/5 transition-all duration-300">
                      Learn More About California Rideshare Law
                      <ChevronDown className="w-4 h-4 ml-2" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                    <h3 className="text-xl font-semibold text-primary">California's AB5 and Proposition 22 Impact</h3>
                    <p>
                      California's Assembly Bill 5 (AB5) attempted to classify gig workers, including rideshare drivers, as employees rather than independent contractors. This would have made Uber and Lyft directly liable for their drivers' actions, similar to traditional employers. However, these companies spent over $200 million promoting Proposition 22, which passed in November 2020, allowing them to maintain the independent contractor model while providing some additional benefits to drivers.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-primary">Your Rights as a Rideshare Passenger in California</h3>
                    <p>
                      California law provides strong protections for rideshare passengers. You have the right to safe transportation, properly maintained vehicles, and qualified drivers who've passed background checks. When these standards aren't met and injuries occur, you're entitled to full compensation including medical expenses, lost wages, pain and suffering, and other damages.
                    </p>
                    
                    <h3 className="text-xl font-semibold text-primary">Understanding the Three-Period Insurance System</h3>
                    <p>
                      California pioneered the three-period insurance framework adopted nationwide. Each period has different coverage levels and potential disputes. Insurance companies exploit ambiguities about when periods begin and end, whether drivers were actually available for rides, or if they deviated from prescribed routes. Understanding these distinctions is crucial for maximizing recovery.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

          </div>

          {/* Right Sidebar - Contact Options */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={sidebarImage} 
                    alt="Legal consultation for Uber and Lyft accident cases" 
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
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => scrollToSection('evaluation')}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/uber-lyft-compensation-calculator'}
                    >
                      <Calculator className="w-4 h-4" />
                      Compensation Calculator
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>✓ 100% Confidential</p>
                    <p>✓ No Fees Unless We Win</p>
                    <p>✓ Available 24/7</p>
                  </div>
                </CardContent>
              </Card>
              {/* Contact Card */}
              <Card className="shadow-lg border-0 bg-gradient-to-br from-primary/5 to-secondary/5 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary">Contact Trembach Law Firm</CardTitle>
                  <p className="text-muted-foreground">Available 24/7 for Emergencies</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full h-12 border-2 border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Consultation
                  </Button>
                  
                  <div className="text-center space-y-2 pt-4 border-t border-gray-200">
                    <p className="text-sm font-medium text-primary">No Fees Unless We Win</p>
                    <p className="text-xs text-muted-foreground">Free consultation • Se habla español</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rideshare Accidents Annually:</span>
                    <span className="font-semibold">100,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Insurance During Rides:</span>
                    <span className="font-semibold">$1 Million</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Traffic Fatality Increase:</span>
                    <span className="font-semibold">3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rides Without Incidents:</span>
                    <span className="font-semibold">99%</span>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardHeader>
                  <CardTitle className="text-lg text-primary flex items-center gap-2">
                    <Star className="w-5 h-5" />
                    Why Choose Trembach Law
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Former Defense Attorney</p>
                      <p className="text-xs text-muted-foreground">We know insurance company tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">Rideshare Expertise</p>
                      <p className="text-xs text-muted-foreground">Specialized in Uber/Lyft accidents</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">24/7 Availability</p>
                      <p className="text-xs text-muted-foreground">Emergency response team</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-sm">No Fees Unless We Win</p>
                      <p className="text-xs text-muted-foreground">Contingency fee basis</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Don't Wait Section */}
      <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Time Limits Apply for California Rideshare Cases</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            California's statute of limitations gives you only 2 years to file a rideshare accident claim. Evidence disappears, witnesses forget, and insurance companies destroy records. The sooner you act, the stronger your case becomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100 text-lg px-8 py-4 h-auto shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-6 h-6 mr-2" />
              Start Your Free Case Evaluation Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 text-lg px-8 py-4 h-auto transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-6 h-6 mr-2" />
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftAccidents;