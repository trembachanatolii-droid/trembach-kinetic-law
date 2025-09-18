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
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/medical-malpractice-hero.jpg';
import diagnosticErrorsImage from '@/assets/practice-areas/medical-malpractice.jpg';
import surgicalErrorsImage from '@/assets/practice-areas/brain-injuries.jpg';
import provingNegligenceImage from '@/assets/hero-background-scales.jpg';
import compensationImage from '@/assets/practice-areas/courthouse-professional.jpg';
import SEO from '@/components/SEO';

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
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    typeOfError: '',
    healthcareProvider: '',
    description: '',
    consentToContact: false
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
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
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
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Medical Malpractice Attorney California | Free Case Evaluation | Expert Legal Help"
        description="California medical malpractice lawyers fighting for victims of medical negligence. Free case evaluation, contingency fees, maximum compensation. Call now for expert legal help."
        canonical="/practice-areas/medical-malpractice"
      />

      {/* Go Back Button */}
      <div className="fixed top-20 left-4 z-[100]">
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-white/98 backdrop-blur-sm shadow-xl border border-gray-200 rounded-full px-3 py-1.5 text-xs font-medium hover:bg-white transition-all"
        >
          <ArrowLeft className="w-3 h-3" />
          Go Back
        </Button>
      </div>

      {/* Hero Section - Same ratio as Premises Liability */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl hero-content">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              California Medical Malpractice Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fighting for victims of medical negligence across California
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl leading-relaxed">
              When healthcare providers fail to meet the standard of care, patients suffer devastating consequences. Our experienced medical malpractice attorneys have secured millions in compensation for victims of medical negligence throughout California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Free Case Review
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Call (855) 374-2906
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-8">
          <div className="flex overflow-x-auto scrollbar-hide py-4 gap-2">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(tab.id)}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      <main className="container mx-auto px-8 py-12" ref={contentRef}>
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            {/* Overview Section */}
            <section id="overview" className="content-section mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Medical Malpractice in California</h2>
                <p className="text-xl text-muted-foreground">Comprehensive Legal Support for Medical Negligence Victims</p>
              </div>

              <Card className="content-card p-8 mb-8">
                <CardContent>
                  <p className="text-lg leading-relaxed mb-6">
                    Medical malpractice occurs when healthcare providers fail to deliver the standard of care expected in their profession, resulting in patient harm. In California, these cases are governed by specific laws including the Medical Injury Compensation Reform Act (MICRA), which was significantly updated in 2022 to increase compensation limits for victims.
                  </p>
                  <p className="text-lg leading-relaxed">
                    Our experienced legal team understands the complexities of California medical malpractice law and works with top medical experts to build compelling cases for our clients. We handle all aspects of your case while you focus on recovery.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Shield className="h-6 w-6 text-red-600" />
                      Our Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 25+ years of medical malpractice experience</li>
                      <li>• Over $500 million recovered for clients</li>
                      <li>• Network of top medical experts</li>
                      <li>• No fees unless we win your case</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Clock className="h-6 w-6 text-red-600" />
                      Time Is Critical
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• 3-year statute of limitations</li>
                      <li>• Evidence preservation is crucial</li>
                      <li>• Medical records must be secured quickly</li>
                      <li>• Early expert evaluation improves outcomes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Case Evaluation Form */}
            <section className="content-section mb-16">
              <Card className="content-card bg-red-50 border-red-200">
                <CardHeader className="bg-red-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl text-center">
                    Free Medical Malpractice Case Evaluation
                  </CardTitle>
                  <p className="text-center text-red-100">
                    Get expert legal assessment of your potential medical malpractice claim
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="firstName">
                          First Name *
                        </label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="border-red-200 focus:border-red-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="lastName">
                          Last Name *
                        </label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="border-red-200 focus:border-red-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="border-red-200 focus:border-red-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="phone">
                          Phone Number *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="border-red-200 focus:border-red-400"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="incidentDate">
                          Date of Medical Incident
                        </label>
                        <Input
                          id="incidentDate"
                          name="incidentDate"
                          type="date"
                          value={formData.incidentDate}
                          onChange={handleInputChange}
                          className="border-red-200 focus:border-red-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2" htmlFor="typeOfError">
                          Type of Medical Error
                        </label>
                        <Select onValueChange={(value) => handleSelectChange('typeOfError', value)}>
                          <SelectTrigger className="border-red-200 focus:border-red-400">
                            <SelectValue placeholder="Select error type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="misdiagnosis">Misdiagnosis</SelectItem>
                            <SelectItem value="surgical-error">Surgical Error</SelectItem>
                            <SelectItem value="medication-error">Medication Error</SelectItem>
                            <SelectItem value="birth-injury">Birth Injury</SelectItem>
                            <SelectItem value="emergency-room">Emergency Room Error</SelectItem>
                            <SelectItem value="anesthesia-error">Anesthesia Error</SelectItem>
                            <SelectItem value="failure-to-treat">Failure to Treat</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="healthcareProvider">
                        Healthcare Provider/Facility
                      </label>
                      <Input
                        id="healthcareProvider"
                        name="healthcareProvider"
                        value={formData.healthcareProvider}
                        onChange={handleInputChange}
                        placeholder="Hospital, clinic, doctor's name"
                        className="border-red-200 focus:border-red-400"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="description">
                        Describe What Happened *
                      </label>
                      <Textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        placeholder="Please provide details about the medical incident and any resulting injuries or complications..."
                        className="border-red-200 focus:border-red-400"
                      />
                    </div>

                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        checked={formData.consentToContact}
                        onChange={(e) => setFormData(prev => ({ ...prev, consentToContact: e.target.checked }))}
                        required
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I consent to be contacted by this law firm about my potential case via phone, email, or text message. I understand this does not create an attorney-client relationship.
                      </label>
                    </div>

                    <div className="text-center">
                      <Button 
                        type="submit"
                        size="lg"
                        className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg font-semibold"
                      >
                        Submit Case for Review
                      </Button>
                      <p className="text-sm text-muted-foreground mt-3">
                        Free consultation • No obligations • Confidential review
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="content-section mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">What to Do After Medical Malpractice</h2>
                <p className="text-xl text-muted-foreground">Critical Steps to Protect Your Rights and Health</p>
              </div>

              <div className="mb-8">
                <img 
                  src={surgicalErrorsImage} 
                  alt="What to do after medical malpractice - immediate steps for victims" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                      Immediate Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Seek immediate medical attention from another provider</li>
                      <li>• Document everything with photos and notes</li>
                      <li>• Request complete medical records immediately</li>
                      <li>• Don't sign any documents from the hospital</li>
                      <li>• Preserve all evidence of the incident</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Shield className="h-6 w-6 text-red-600" />
                      Legal Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• Contact experienced medical malpractice attorneys</li>
                      <li>• Avoid speaking to insurance companies</li>
                      <li>• Don't accept any quick settlement offers</li>
                      <li>• Understand your rights under California law</li>
                      <li>• File claims before statute of limitations expires</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Types of Medical Errors Section */}
            <section id="types-of-errors" className="content-section mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Common Types of Medical Malpractice</h2>
                <p className="text-xl text-muted-foreground">Understanding Medical Errors That Lead to Lawsuits</p>
              </div>

              <div className="mb-8">
                <img 
                  src={diagnosticErrorsImage} 
                  alt="Types of medical errors and malpractice cases handled by California attorneys" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Brain className="h-6 w-6 text-red-600" />
                      Diagnostic Errors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Misdiagnosis of cancer, heart attacks, and strokes</li>
                      <li>• Delayed diagnosis leading to worsened conditions</li>
                      <li>• Failure to order appropriate tests</li>
                      <li>• Misreading of X-rays, CT scans, and MRIs</li>
                      <li>• Ignoring patient symptoms and complaints</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Activity className="h-6 w-6 text-red-600" />
                      Surgical Errors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wrong-site surgery and surgical mistakes</li>
                      <li>• Leaving surgical instruments inside patients</li>
                      <li>• Anesthesia errors causing brain damage</li>
                      <li>• Post-operative infection and complications</li>
                      <li>• Nerve damage and organ perforation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Baby className="h-6 w-6 text-red-600" />
                      Birth Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Cerebral palsy from oxygen deprivation</li>
                      <li>• Shoulder dystocia and brachial plexus injuries</li>
                      <li>• Failure to perform timely C-sections</li>
                      <li>• Improper use of forceps and vacuum extractors</li>
                      <li>• Failure to monitor fetal distress</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-6">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                      <Pill className="h-6 w-6 text-red-600" />
                      Medication Errors
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Wrong medication or incorrect dosages</li>
                      <li>• Dangerous drug interactions</li>
                      <li>• Pharmacy dispensing errors</li>
                      <li>• Failure to check patient allergies</li>
                      <li>• IV medication administration mistakes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-16">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-6">Proving Medical Malpractice: The Four Essential Elements</h2>
                <p className="text-xl text-muted-foreground">How We Build Winning Cases for Our Clients</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <UserX className="h-8 w-8 text-red-600" />
                      1. Duty of Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      We must establish that a formal healthcare provider-patient relationship existed. This creates a legal duty for the provider to deliver competent medical care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Shield className="h-8 w-8 text-red-600" />
                      2. Breach of Duty
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      The healthcare provider failed to meet the accepted standard of care. We prove this through expert testimony from medical professionals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Activity className="h-8 w-8 text-red-600" />
                      3. Causation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      The provider's negligence directly caused your injury. Medical experts help establish this causal link between the negligent act and your damages.
                    </p>
                  </CardContent>
                </Card>

                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Heart className="h-8 w-8 text-red-600" />
                      4. Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg leading-relaxed">
                      You must have suffered actual harm as a result of the negligence. We document all damages to maximize your compensation.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation in Medical Malpractice Cases</h2>
              
              <div className="mb-8">
                <img 
                  src={compensationImage} 
                  alt="Understanding compensation types in medical malpractice cases - economic and non-economic damages" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Victims may recover economic damages such as medical expenses, lost wages, and rehabilitation costs, as well as non-economic damages like pain and suffering, emotional distress, and loss of enjoyment of life. Under California's updated MICRA laws, compensation limits have significantly increased for medical malpractice victims.
                </p>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits to File a Medical Malpractice Claim</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  California medical malpractice claims must be filed within 3 years of the injury OR 1 year from discovery of the injury, whichever comes first. Special rules apply for minors and cases involving foreign objects. Acting promptly is essential to preserve evidence and protect your rights.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <Collapsible open={expandedFaq === index} onOpenChange={() => toggleFaq(index)}>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="w-full justify-between text-left">
                            {faq.question}
                            {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent>
                            <p>{faq.answer}</p>
                          </CardContent>
                        </CollapsibleContent>
                      </Collapsible>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Medical Malpractice Resources</h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-inside space-y-2">
                  <li><a href="https://www.mbc.ca.gov/" target="_blank" rel="noopener noreferrer" className="text-primary underline">California Medical Board</a></li>
                  <li><a href="https://www.courts.ca.gov/selfhelp-injury.htm" target="_blank" rel="noopener noreferrer" className="text-primary underline">California Courts Self-Help: Personal Injury</a></li>
                  <li><a href="https://www.jointcommission.org/resources/patient-safety-topics/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Joint Commission Patient Safety Resources</a></li>
                  <li><a href="https://www.psqh.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline">Patient Safety & Quality Healthcare</a></li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card - Ultrathin Red Design */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Background with overlay */}
                <div className="absolute inset-0 bg-black/90 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-30"
                  style={{
                    backgroundImage: `url(${provingNegligenceImage})`
                  }}
                ></div>
                
                {/* Content - Ultrathin styling like reference */}
                <div className="relative z-20 p-8 text-center text-white">
                  <h3 className="text-3xl font-light text-gray-300 mb-2">
                    3 Ways to
                  </h3>
                  <h3 className="text-3xl font-light text-gray-300 mb-4">
                    Start Your Case
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-300 leading-relaxed font-light">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-light py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('tel:8553742906')}
                    >
                      CALL (855) 374-2906
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-light py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/medical-malpractice-case-evaluation'}
                    >
                      EMAIL US
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-light py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/medical-malpractice-compensation-calculator'}
                    >
                      CALCULATE SETTLEMENT
                    </Button>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-red-600" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Statute of Limitations:</span>
                    <span className="font-semibold">3 Years / 1 Year Discovery</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MICRA Caps 2024:</span>
                    <span className="font-semibold">$430K - $600K</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expert Witnesses:</span>
                    <span className="font-semibold">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Our Success Rate:</span>
                    <span className="font-semibold text-green-600">95%+</span>
                  </div>
                </CardContent>
              </Card>

              {/* 24/7 Live Chat - Visible Inactive Status */}
              <Card className="glass-card bg-gray-50 border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center text-gray-500">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    24/7 Live Chat
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    disabled
                    variant="outline" 
                    className="w-full text-gray-400 border-gray-300 cursor-not-allowed"
                  >
                    Start Medical Malpractice Evaluation
                  </Button>
                  <p className="text-xs text-gray-400 mt-2 text-center">
                    Currently offline - Call for immediate assistance
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Medical Malpractice Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            California law imposes strict deadlines for medical malpractice claims: 3 years from injury OR 1 year from discovery. Evidence disappears quickly, and witness memories fade. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/medical-malpractice-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('tel:8553742906')}
            >
              Call (855) 374-2906
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalMalpractice;