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
  Activity,
  Brain,
  Baby,
  Pill,
  UserX,
  CheckCircle,
  Home
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/medical-malpractice-hero.jpg';
import consultationImage from '@/assets/practice-areas/medical-malpractice-consultation.jpg';
import evidenceImage from '@/assets/practice-areas/medical-negligence-evidence.jpg';
import investigationImage from '@/assets/practice-areas/hospital-liability-investigation.jpg';
import expertImage from '@/assets/practice-areas/medical-expert-testimony.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MedicalMalpractice: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    incidentDate: '',
    typeOfError: '',
    healthcareProvider: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'types-of-errors', label: 'MEDICAL ERRORS', icon: Stethoscope },
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
    window.location.href = '/medical-malpractice-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions
  const faqData = [
    {
      question: "What is the statute of limitations for medical malpractice in California?",
      answer: "In California, you generally have 3 years from the date of injury OR 1 year from the date you discovered (or should have discovered) the injury to file a medical malpractice lawsuit, whichever comes first. For minors under 6, you have 3 years or until the child's 8th birthday, whichever provides more time. Cases involving foreign objects left in the body have special rules. Don't wait - contact us immediately to ensure you don't miss critical deadlines."
    },
    {
      question: "How much is my medical malpractice case worth?",
      answer: "Case values vary greatly depending on the severity of injuries, economic losses, and circumstances. Economic damages (medical bills, lost wages) are unlimited. Non-economic damages (pain and suffering) are capped under MICRA - currently starting at $350,000 for injury cases and $500,000 for wrongful death in 2023, increasing annually. Cases involving permanent disability, disfigurement, or death typically result in higher settlements."
    },
    {
      question: "Do I need expert witnesses for my medical malpractice case?",
      answer: "Yes, California law requires expert testimony in almost all medical malpractice cases. Medical experts must establish the standard of care, prove the provider breached that standard, and demonstrate causation between the breach and your injuries. We work with top medical experts across all specialties and handle all expert costs upfront - you don't pay unless we win."
    },
    {
      question: "Can I sue multiple parties for medical malpractice?",
      answer: "Yes, multiple parties can be held liable. This may include doctors, nurses, hospitals, medical groups, and pharmaceutical companies. Under California's new MICRA laws, you can potentially recover separate damage caps from healthcare providers, healthcare institutions, and unaffiliated providers. We identify all liable parties to maximize your recovery."
    },
    {
      question: "What if the doctor admits they made a mistake?",
      answer: "A doctor admitting error can strengthen your case, but it doesn't automatically prove malpractice. We still must show the error fell below the standard of care and caused your damages. Under California's new laws, expressions of sympathy or apology are generally not admissible as evidence, but factual admissions of fault may be used. Document any admissions and contact us immediately."
    },
    {
      question: "How long does a medical malpractice lawsuit take?",
      answer: "Medical malpractice cases typically take 1-3 years from filing to resolution, though complex cases may take longer. Factors affecting timeline include case complexity, number of defendants, court schedules, and whether the case settles or goes to trial. We work efficiently to resolve your case as quickly as possible while maximizing your compensation."
    },
    {
      question: "What if I can't afford medical treatment for my injuries?",
      answer: "We can help you access medical care even if you can't afford it upfront. We work with medical providers who offer treatment on a lien basis, meaning they wait for payment until your case settles. We can also help you navigate insurance options and connect you with appropriate specialists. Your health is the priority - we ensure you get necessary treatment while we fight for compensation."
    },
    {
      question: "Can I sue for misdiagnosis if I didn't suffer permanent harm?",
      answer: "You can pursue a claim if misdiagnosis caused you damages, even if not permanent. This includes unnecessary treatments, surgeries, medications with side effects, emotional distress, lost wages, and medical expenses. The key is proving the misdiagnosis caused harm that wouldn't have occurred with proper diagnosis. Temporary injuries with significant impact on your life can still result in substantial compensation."
    },
    {
      question: "What's the difference between medical malpractice and medical negligence?",
      answer: "In California law, these terms are often used interchangeably. Medical negligence refers to a healthcare provider's failure to meet the standard of care. Medical malpractice is the legal claim arising from that negligence. Technically, negligence becomes malpractice when it causes patient harm and gives rise to a legal claim for damages."
    },
    {
      question: "Can I sue if my surgery had complications?",
      answer: "Not all surgical complications constitute malpractice. Surgery carries inherent risks, and bad outcomes can occur even with perfect care. However, you may have a case if complications resulted from surgical errors like wrong-site surgery, leaving instruments inside you, damaging organs or nerves, or failing to monitor post-operative complications. We evaluate whether your complications were preventable negligence or unavoidable risks."
    },
    {
      question: "What if I signed a consent form?",
      answer: "Signing a consent form doesn't waive your right to sue for malpractice. Consent forms acknowledge risks of procedures but don't protect against negligent care. If you weren't properly informed about material risks, if the procedure was performed negligently, or if complications occurred due to substandard care, you may still have a valid claim despite signing consent."
    },
    {
      question: "Can I sue a hospital for negligent care?",
      answer: "Yes, hospitals can be held liable for medical malpractice through vicarious liability for their employees' negligence or direct liability for institutional negligence. This includes inadequate staffing, poor credentialing, defective equipment, or systemic failures. We pursue both individual providers and institutions to maximize your recovery under California's expanded MICRA caps."
    },
    {
      question: "What constitutes emergency room malpractice?",
      answer: "ER malpractice includes failure to diagnose heart attacks or strokes, premature discharge, inadequate testing, medication errors, and delayed treatment. The fast-paced emergency room environment is no excuse for negligence. We understand ER standards of care and work with emergency medicine experts to prove when care fell below acceptable standards."
    },
    {
      question: "How do I prove my doctor misdiagnosed my condition?",
      answer: "Proving misdiagnosis requires showing a competent doctor would have reached the correct diagnosis given your symptoms, medical history, and test results. We work with medical experts to review your records, analyze the diagnostic process, and demonstrate how proper care would have led to accurate diagnosis and better outcomes."
    },
    {
      question: "Can I sue for birth injuries during delivery?",
      answer: "Yes, birth injuries often result from medical negligence during pregnancy, labor, or delivery. This includes failure to monitor fetal distress, delayed C-sections, improper use of forceps or vacuum, and medication errors. Birth injury cases require specialized medical experts who understand obstetric standards of care and can prove preventable harm occurred."
    },
    {
      question: "What if my loved one died due to medical malpractice?",
      answer: "Wrongful death due to medical malpractice allows surviving family members to recover damages including loss of financial support, loss of companionship, and funeral expenses. Under California's updated MICRA laws, non-economic damages in wrongful death cases start at $500,000 in 2023, increasing annually. We help families navigate this difficult time while pursuing maximum compensation."
    },
    {
      question: "Can I sue for medication errors?",
      answer: "Yes, medication errors include wrong drugs, incorrect dosages, dangerous drug interactions, and administration mistakes. These errors can cause severe adverse reactions, organ damage, or death. Doctors, nurses, pharmacists, and hospitals can all be held liable for medication-related malpractice. We investigate all parties involved in prescribing, dispensing, and administering medications."
    },
    {
      question: "What if my cancer was misdiagnosed or diagnosed late?",
      answer: "Cancer misdiagnosis or delayed diagnosis can be devastating, leading to advanced disease, reduced survival chances, and unnecessary suffering. We work with oncology experts to determine if earlier diagnosis would have improved your prognosis and what damages resulted from the delay. These cases often involve substantial compensation due to the severity of consequences."
    },
    {
      question: "Can I sue for nursing home neglect?",
      answer: "Yes, nursing home neglect constitutes medical malpractice when it involves medical care failures. This includes medication errors, failure to prevent falls, inadequate wound care, and neglect leading to infections or pressure sores. Nursing homes have a duty to provide competent medical care to residents, and we hold them accountable for failures that cause harm."
    },
    {
      question: "What should I do if I suspect medical malpractice occurred?",
      answer: "Immediately seek proper medical treatment from a different provider, document everything with photos and notes, request complete medical records before they can be altered, avoid signing any documents from hospitals or insurers, and contact our firm for a free consultation. Time is critical - evidence disappears quickly and deadlines are strict."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Malpractice Attorney Los Angeles | California Medical Negligence Lawyer | Trembach Law"
        description="Expert California medical malpractice attorneys fighting for victims of medical negligence, misdiagnosis, surgical errors, and birth injuries. Free consultation. No fees unless we win."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="hero-content text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            California Medical Malpractice Attorneys
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Fighting for Victims of Medical Negligence, Misdiagnosis, and Surgical Errors
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4" onClick={() => window.location.href = '/medical-malpractice-case-evaluation'}>
              <Scale className="mr-2 h-5 w-5" />
              Free Case Evaluation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 text-white border-white hover:bg-white hover:text-primary" asChild>
              <a href="tel:8181234567">
                <Phone className="mr-2 h-5 w-5" />
                Call (818) 123-4567
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-white border-b z-40">
        <div className="container mx-auto px-6">
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-primary'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main ref={contentRef} className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          
          {/* Left Content - 3 columns */}
          <div className="lg:col-span-3 space-y-16">

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">California Medical Malpractice Law</h2>
                <p className="text-xl text-muted-foreground">Understanding Your Rights When Healthcare Goes Wrong</p>
              </div>

              <Card className="content-card p-8 mb-8">
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">
                    Medical malpractice occurs when healthcare providers fail to meet the accepted standard of care, causing harm to patients. In California, thousands of patients suffer preventable injuries each year due to medical negligence, misdiagnosis, surgical errors, and other forms of substandard care.
                  </p>
                  <p className="text-lg leading-relaxed">
                    If you or a loved one has been harmed by medical negligence, you have the right to seek compensation for your injuries, medical expenses, lost wages, and pain and suffering. Our experienced California medical malpractice attorneys are here to help you navigate this complex legal process and fight for the justice you deserve.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Stethoscope className="h-6 w-6 text-primary" />
                      Medical Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our attorneys work with leading medical experts to build strong cases and prove negligence in complex medical situations.</p>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Scale className="h-6 w-6 text-primary" />
                      Proven Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have successfully recovered millions for medical malpractice victims throughout California, maximizing compensation under MICRA laws.</p>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Shield className="h-6 w-6 text-primary" />
                      No Fee Guarantee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We work on a contingency fee basis - you pay nothing unless we win your case. We advance all costs including expert fees.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Case Evaluation Form Section */}
            <section id="evaluation" className="content-section">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Free Medical Malpractice Case Evaluation</h2>
                <p className="text-xl text-muted-foreground">Get Your Case Reviewed by Expert Medical Malpractice Attorneys</p>
              </div>

              <Card className="content-card p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Quick Case Assessment</CardTitle>
                  <p className="text-muted-foreground">Fill out this form for a free, confidential evaluation of your medical malpractice case.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Date of Medical Error</label>
                        <Input 
                          type="date"
                          value={formData.incidentDate}
                          onChange={(e) => setFormData({...formData, incidentDate: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Medical Error</label>
                        <Select onValueChange={(value) => setFormData({...formData, typeOfError: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type of error" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="misdiagnosis">Misdiagnosis</SelectItem>
                            <SelectItem value="delayed-diagnosis">Delayed Diagnosis</SelectItem>
                            <SelectItem value="surgical-error">Surgical Error</SelectItem>
                            <SelectItem value="medication-error">Medication Error</SelectItem>
                            <SelectItem value="birth-injury">Birth Injury</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Healthcare Provider/Hospital</label>
                      <Input 
                        value={formData.healthcareProvider}
                        onChange={(e) => setFormData({...formData, healthcareProvider: e.target.value})}
                        placeholder="Enter provider or hospital name"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Scale className="mr-2 h-5 w-5" />
                      Get Free Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* What To Do Section */}
            <section id="what-to-do" className="content-section">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">What to Do After Medical Malpractice</h2>
                <p className="text-xl text-muted-foreground">Critical Steps to Protect Your Rights and Build Your Case</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <AlertTriangle className="h-8 w-8 text-red-500" />
                      Immediate Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold">Seek Immediate Medical Care</h4>
                          <p className="text-sm text-muted-foreground">Get proper treatment from a different healthcare provider to address your injuries and prevent further harm.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold">Document Everything</h4>
                          <p className="text-sm text-muted-foreground">Take photos of injuries, keep all medical records, and write down details while they're fresh in your memory.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold">Request Medical Records</h4>
                          <p className="text-sm text-muted-foreground">Obtain complete copies of all medical records before they can be altered or "lost."</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Shield className="h-8 w-8 text-green-500" />
                      Legal Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h4 className="font-semibold">Don't Sign Anything</h4>
                          <p className="text-sm text-muted-foreground">Avoid signing documents from hospitals, insurers, or healthcare providers without legal review.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">5</div>
                        <div>
                          <h4 className="font-semibold">Contact an Attorney</h4>
                          <p className="text-sm text-muted-foreground">Speak with an experienced medical malpractice attorney immediately to protect your rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">6</div>
                        <div>
                          <h4 className="font-semibold">Preserve Evidence</h4>
                          <p className="text-sm text-muted-foreground">Don't dispose of any medical devices, medications, or items related to your care.</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="content-card bg-yellow-50 border-yellow-200 p-8 mt-8">
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-yellow-800 mb-2">Time is Critical</h4>
                    <p className="text-yellow-700">California's statute of limitations for medical malpractice is complex and unforgiving. You may have as little as one year from discovery of the injury to file your case. Evidence disappears quickly, so immediate action is essential to preserve your rights and build a strong case.</p>
                  </div>
                </div>
              </Card>
            </section>

            {/* Types of Medical Errors Section */}
            <section id="types-of-errors" className="content-section">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Types of Medical Malpractice We Handle</h2>
                <p className="text-xl text-muted-foreground">Comprehensive Legal Support for All Forms of Medical Negligence</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${consultationImage})` }}></div>
                  <CardHeader>
                    <CardTitle className="text-xl">Diagnostic Errors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Misdiagnosis, delayed diagnosis, and failure to diagnose serious conditions like cancer, heart disease, and stroke.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Cancer misdiagnosis or delayed diagnosis</li>
                      <li>• Heart attack and stroke misdiagnosis</li>
                      <li>• Infection diagnosis failures</li>
                      <li>• Radiology and imaging errors</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${evidenceImage})` }}></div>
                  <CardHeader>
                    <CardTitle className="text-xl">Surgical Errors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Wrong-site surgery, surgical instruments left inside patients, and post-operative complications.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Wrong-site or wrong-patient surgery</li>
                      <li>• Foreign objects left in body</li>
                      <li>• Organ damage during surgery</li>
                      <li>• Anesthesia errors</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${investigationImage})` }}></div>
                  <CardHeader>
                    <CardTitle className="text-xl">Birth Injuries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Preventable injuries to mothers and babies during pregnancy, labor, and delivery.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Cerebral palsy from oxygen deprivation</li>
                      <li>• Erb's palsy from delivery complications</li>
                      <li>• Maternal injuries during delivery</li>
                      <li>• Failure to monitor fetal distress</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card overflow-hidden">
                  <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${expertImage})` }}></div>
                  <CardHeader>
                    <CardTitle className="text-xl">Medication Errors</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">Wrong medications, incorrect dosages, and dangerous drug interactions causing serious harm.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Wrong medication administration</li>
                      <li>• Incorrect dosage calculations</li>
                      <li>• Dangerous drug interactions</li>
                      <li>• Pharmacy dispensing errors</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-xl text-muted-foreground">Expert Answers to Your Medical Malpractice Questions</p>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="content-card">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="text-lg flex items-center justify-between">
                        {faq.question}
                        {expandedFaq === index ? (
                          <ChevronUp className="h-5 w-5 text-primary" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-primary" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    <Collapsible open={expandedFaq === index}>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar - 1 column */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* 24/7 Live Chat Section */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl text-center">24/7 Live Chat</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">Chat with our legal team anytime</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary font-medium mb-2">
                      <MessageCircle className="h-4 w-4" />
                      <span>24/7 Live Chat</span>
                    </div>
                    <Button size="lg" className="w-full" onClick={() => window.location.href = '/medical-malpractice-case-evaluation'}>
                      Start Medical Malpractice Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* 3 Ways to Start Your Case */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Call Us Now</h4>
                      <p className="text-sm text-muted-foreground">Speak directly with an attorney</p>
                      <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                        <a href="tel:8181234567">
                          <Phone className="mr-2 h-4 w-4" />
                          (818) 123-4567
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Online Case Evaluation</h4>
                      <p className="text-sm text-muted-foreground">Quick and confidential review</p>
                      <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                        <Link to="/medical-malpractice-case-evaluation">
                          <Scale className="mr-2 h-4 w-4" />
                          Start Evaluation
                        </Link>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Calculate Compensation</h4>
                      <p className="text-sm text-muted-foreground">Estimate your case value</p>
                      <Button variant="outline" size="sm" className="mt-2 w-full" asChild>
                        <Link to="/medical-malpractice-compensation-calculator">
                          <DollarSign className="mr-2 h-4 w-4" />
                          Calculate Now
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="p-6 bg-primary text-primary-foreground">
                <CardHeader>
                  <CardTitle className="text-xl text-center">Emergency Legal Line</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">(818) 123-4567</div>
                    <p className="text-primary-foreground/80">Available 24/7 for Medical Emergencies</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>info@trembachlawfirm.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>Los Angeles, California</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link to="/medical-malpractice-medical-guidance">
                      <Stethoscope className="mr-2 h-4 w-4" />
                      Medical Guidance
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link to="/schedule-consultation">
                      <Calendar className="mr-2 h-4 w-4" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
                    <Link to="/practice-areas">
                      <Building className="mr-2 h-4 w-4" />
                      All Practice Areas
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalMalpractice;