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
  Baby,
  Brain,
  Activity
} from 'lucide-react';
import heroBackground from '@/assets/birth-injuries-hero-bg.jpg';
import sidebarImage from '@/assets/birth-injuries-sidebar.jpg';
import diagnosisImage from '@/assets/birth-injuries-diagnosis-process.jpg';
import legalProcessImage from '@/assets/birth-injuries-legal-process.jpg';
import medicalImage from '@/assets/birth-injuries-medical-facility.jpg';
import compensationImage from '@/assets/birth-injuries-compensation-calculator.jpg';
import { useScrollMemory } from '@/hooks/useScrollMemory';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BirthInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    diagnosisDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO AFTER INJURY', icon: Stethoscope },
    { id: 'injury-types', label: 'INJURY TYPES', icon: Heart },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: Award },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
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

    // Go Back button scroll visibility
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setVisible(scrolled > 200);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
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
    window.location.href = '/birth-injuries/case-evaluation';
  };

  const handleGoBack = () => {
    const savedPosition = sessionStorage.getItem('birth-injuries-scroll-position');
    if (savedPosition) {
      sessionStorage.removeItem('birth-injuries-scroll-position');
    }
    window.history.back();
  };

  // Extended FAQ data from HTML file (50+ questions)
  const faqData = [
    {
      question: "What is a birth injury and how do I know if my child has one?",
      answer: "A birth injury is physical damage to a baby that occurs during pregnancy, labor, delivery, or shortly after birth. Signs include difficulty breathing, seizures, weak muscle tone, excessive crying, difficulty feeding, or developmental delays. If your child shows any unusual symptoms or was diagnosed with conditions like cerebral palsy, HIE, or Erb's palsy, you may have a birth injury case. Immediate medical evaluation is crucial, and consulting with a birth injury attorney can help determine if medical negligence was involved."
    },
    {
      question: "How much does it cost to hire a birth injury lawyer in California?",
      answer: "Nothing upfront. We work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. Our fee is typically 33-40% of the settlement or verdict amount. We advance all costs including medical expert fees, court filing fees, and investigation expenses. You never pay out of pocket, and if we don't win, you owe us nothing. This ensures every family can afford quality legal representation regardless of their financial situation."
    },
    {
      question: "What is the statute of limitations for birth injury cases in California?",
      answer: "In California, you generally have until your child's 8th birthday to file a birth injury lawsuit, though claims should be filed within 3 years of discovering the injury. For minors under 6, you have 3 years from the injury or before the child's 8th birthday, whichever is longer. However, it's critical to contact an attorney immediately as evidence can be lost and witnesses' memories fade. Some exceptions may apply, and government entity claims require notice within 6 months."
    },
    {
      question: "Can I sue for cerebral palsy caused during birth?",
      answer: "Yes, if cerebral palsy resulted from medical negligence during pregnancy, labor, or delivery. Common causes include delayed C-sections, failure to monitor fetal distress, improper use of delivery tools, or failure to treat infections. Not all cerebral palsy is from malpractice - about 85-90% occurs at birth, and many cases involve preventable medical errors. We work with medical experts to determine if proper care would have prevented your child's CP."
    },
    {
      question: "What compensation can I receive for my child's birth injury?",
      answer: "Compensation typically includes: past and future medical expenses, rehabilitation and therapy costs, special education needs, medical equipment and home modifications, lost wages for caregiving parents, pain and suffering, loss of enjoyment of life, and in severe cases, lifetime care costs. California has no caps on birth injury damages. Compensation often ranges from hundreds of thousands to multiple millions depending on injury severity and lifetime care needs."
    },
    {
      question: "What are common types of birth injuries?",
      answer: "Common birth injuries include cerebral palsy, Erb's palsy, brachial plexus injuries, hypoxic-ischemic encephalopathy (HIE), skull fractures, brain bleeds, and nerve damage. Each injury has unique symptoms and treatment options, and many result from preventable medical errors during labor and delivery."
    },
    {
      question: "How do I prove medical negligence in a birth injury case?",
      answer: "Proving negligence requires showing that the healthcare provider breached the standard of care, causing the injury. This involves expert medical testimony, review of medical records, and evidence of errors such as delayed C-sections, failure to monitor fetal distress, or improper use of delivery instruments."
    },
    {
      question: "Can I file a birth injury claim if the injury was not immediately apparent?",
      answer: "Yes, some birth injuries manifest symptoms weeks or months after birth. California law allows filing within a certain time after discovery of the injury, but it's important to consult an attorney promptly to preserve evidence and meet deadlines."
    },
    {
      question: "What should I do if I suspect a birth injury?",
      answer: "Seek immediate medical evaluation for your child, obtain all medical records, and consult a birth injury attorney to discuss your legal options. Avoid signing any documents or giving statements without legal advice."
    },
    {
      question: "How long does a birth injury lawsuit take?",
      answer: "The duration varies depending on case complexity, evidence, and court schedules. Many cases settle within 1-2 years, but some may take longer if going to trial."
    },
    {
      question: "Do I need a medical expert for my birth injury case?",
      answer: "Yes, medical experts are essential to establish the standard of care, causation, and damages in birth injury cases."
    },
    {
      question: "What damages can I recover in a birth injury lawsuit?",
      answer: "Damages include medical expenses, therapy costs, pain and suffering, lost wages, future care costs, and sometimes punitive damages."
    },
    {
      question: "Is there a cap on damages for birth injury cases in California?",
      answer: "No, California does not impose caps on damages for birth injury medical malpractice cases."
    },
    {
      question: "Can I get a free case evaluation?",
      answer: "Yes, we offer free, no-obligation case evaluations to discuss your situation and legal options."
    },
    {
      question: "What if the hospital denies responsibility?",
      answer: "We conduct thorough investigations and work with medical experts to build a strong case regardless of initial hospital denials."
    },
    {
      question: "How do I preserve evidence for my birth injury case?",
      answer: "Keep all medical records, bills, and correspondence. Avoid altering or discarding any documents related to the injury."
    },
    {
      question: "Can I sue a government hospital for birth injury?",
      answer: "Yes, but special notice requirements and shorter deadlines apply. Consult an attorney immediately."
    },
    {
      question: "What is hypoxic-ischemic encephalopathy (HIE)?",
      answer: "HIE is brain damage caused by oxygen deprivation during birth, often leading to cerebral palsy or developmental delays."
    },
    {
      question: "What is Erb's palsy?",
      answer: "Erb's palsy is a nerve injury affecting the arm, often caused by shoulder dystocia during delivery."
    },
    {
      question: "What is shoulder dystocia?",
      answer: "Shoulder dystocia occurs when a baby's shoulder gets stuck during delivery, potentially causing nerve or bone injuries."
    },
    {
      question: "Can I sue for delayed C-section?",
      answer: "Yes, if a delayed C-section caused or contributed to your child's birth injury."
    },
    {
      question: "What is the role of a birth injury attorney?",
      answer: "To investigate your case, gather evidence, consult experts, negotiate settlements, and represent you in court if needed."
    },
    {
      question: "How do I contact your firm?",
      answer: "You can call, email, or fill out our free case evaluation form on the website."
    },
    {
      question: "What if I can't afford a lawyer?",
      answer: "We work on contingency, so you pay nothing unless we win your case."
    },
    {
      question: "Can I file a claim for emotional distress?",
      answer: "Yes, emotional distress damages may be included in your claim."
    },
    {
      question: "What if the injury was caused by a midwife or nurse?",
      answer: "You can file claims against any negligent healthcare provider involved in the injury."
    },
    {
      question: "What is the difference between a birth injury and birth defect?",
      answer: "Birth injuries are caused by trauma or medical negligence during birth; birth defects are genetic or developmental abnormalities."
    },
    {
      question: "How do you calculate compensation?",
      answer: "Compensation is based on medical costs, lost income, pain and suffering, and future care needs."
    },
    {
      question: "What if the injury was caused by delayed diagnosis?",
      answer: "Delayed diagnosis can be grounds for a malpractice claim if it worsened the injury."
    },
    {
      question: "Can I sue for failure to monitor fetal distress?",
      answer: "Yes, failure to monitor or respond to fetal distress is a common cause of birth injury claims."
    },
    {
      question: "What is the statute of repose?",
      answer: "It's the absolute deadline to file a claim, regardless of discovery, often 10 years in California."
    },
    {
      question: "Can I settle my case out of court?",
      answer: "Yes, many cases settle through negotiation without going to trial."
    },
    {
      question: "What if the injury was caused by a medication error?",
      answer: "Medication errors during labor or delivery can be grounds for a birth injury claim."
    },
    {
      question: "How do you prove causation?",
      answer: "Through expert testimony linking the negligence directly to the injury."
    },
    {
      question: "What is the role of medical records?",
      answer: "They provide critical evidence of care provided and any deviations from standards."
    },
    {
      question: "Can I sue for failure to perform timely emergency interventions?",
      answer: "Yes, delays in emergency care can cause or worsen birth injuries."
    },
    {
      question: "What is the difference between a birth injury and medical malpractice?",
      answer: "A birth injury is the harm; malpractice is the negligent act causing it."
    },
    {
      question: "What if the injury was caused by improper use of delivery tools?",
      answer: "Improper use of forceps or vacuum extractors can be grounds for a claim."
    },
    {
      question: "Can I sue for failure to obtain informed consent?",
      answer: "Yes, if lack of informed consent contributed to the injury."
    },
    {
      question: "What is the importance of expert witnesses?",
      answer: "They establish the standard of care and whether it was breached."
    },
    {
      question: "Can I sue if the injury was caused by a hospital system failure?",
      answer: "Yes, hospitals can be liable for systemic failures leading to injury."
    },
    {
      question: "What if the injury was caused by a nurse's negligence?",
      answer: "Nurses can be held liable for negligent acts causing birth injuries."
    },
    {
      question: "How do I start a birth injury claim?",
      answer: "Contact an experienced birth injury attorney for a free consultation."
    },
    {
      question: "What is the role of the statute of limitations?",
      answer: "It sets the deadline to file a lawsuit to preserve your rights."
    },
    {
      question: "Can I sue for failure to perform prenatal testing?",
      answer: "Yes, failure to detect conditions prenatally can be grounds for claims."
    },
    {
      question: "What if the injury was caused by a delayed diagnosis of infection?",
      answer: "Delayed infection diagnosis can cause serious birth injuries and be grounds for claims."
    },
    {
      question: "Can I sue for failure to perform timely C-section?",
      answer: "Yes, failure to perform a timely C-section can cause birth injuries."
    },
    {
      question: "What is the importance of timely legal action?",
      answer: "Timely action preserves evidence and witnesses, increasing chances of success."
    },
    {
      question: "Can I sue for failure to monitor contractions?",
      answer: "Yes, inadequate monitoring can lead to preventable injuries."
    },
    {
      question: "What if the injury was caused by improper fetal positioning management?",
      answer: "Mismanagement of fetal positioning can cause injuries and be grounds for claims."
    },
    {
      question: "Can I sue for failure to provide adequate neonatal care?",
      answer: "Yes, inadequate care after birth can worsen injuries and be grounds for claims."
    },
    {
      question: "What if the injury was caused by delayed resuscitation?",
      answer: "Delayed resuscitation can cause brain damage and be grounds for claims."
    },
    {
      question: "Can I sue for failure to diagnose birth asphyxia?",
      answer: "Yes, failure to diagnose and treat birth asphyxia can cause serious injuries."
    },
    {
      question: "What if the injury was caused by improper documentation?",
      answer: "Poor documentation can hinder care and be evidence of negligence."
    },
    {
      question: "Can I sue for failure to follow hospital protocols?",
      answer: "Yes, failure to follow protocols can be grounds for malpractice claims."
    },
    {
      question: "What if the injury was caused by inadequate staffing?",
      answer: "Inadequate staffing leading to injury can be grounds for claims against hospitals."
    },
    {
      question: "Can I sue for failure to communicate risks?",
      answer: "Yes, failure to communicate risks to parents can be grounds for claims."
    },
    {
      question: "What if the injury was caused by improper use of anesthesia?",
      answer: "Improper anesthesia can cause injuries and be grounds for claims."
    },
    {
      question: "Can I sue for failure to provide follow-up care?",
      answer: "Yes, failure to provide adequate follow-up can worsen injuries and be grounds for claims."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Button - Fixed position with fade-in */}
      <div 
        className={`fixed top-20 left-6 z-50 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>

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
              California Birth Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting for Your Baby's Future</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Birth Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When medical negligence harms your baby during childbirth, we fight for justice and your child's future care. If you or your loved one has experienced a birth injury in California, you're facing one of the most challenging situations any family can endure. These devastating injuries are often preventable with proper medical care, and those responsible should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency and emotional impact of birth injury cases. With extensive experience in California medical malpractice and a deep understanding of obstetric standards of care, we're prepared to fight for maximum compensation while you focus on your child's immediate medical needs and family time.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary hover:text-primary">
                    Learn More About Our California Birth Injury Practice
                    {expandedSections.overview ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Medical Understanding
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team works closely with leading neonatologists and birth injury specialists throughout California to understand the full scope of your child's condition, prognosis, and treatment needs.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California's major medical centers, including UCLA, Cedars-Sinai, UCSF, and other hospitals where birth injuries occur due to negligent care.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Birth Injury Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending medical facilities provides unique insights into hospital defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expedited Process</h4>
                          <p className="text-sm text-muted-foreground">We understand families need immediate support and work to secure compensation as quickly as possible.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey during this difficult time.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Birth Injury Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">When did the injury occur?</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Birth Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cerebral-palsy">Cerebral Palsy</SelectItem>
                          <SelectItem value="hie">HIE (Hypoxic-Ischemic Encephalopathy)</SelectItem>
                          <SelectItem value="erbs-palsy">Erb's Palsy</SelectItem>
                          <SelectItem value="shoulder-dystocia">Shoulder Dystocia</SelectItem>
                          <SelectItem value="birth-asphyxia">Birth Asphyxia</SelectItem>
                          <SelectItem value="other">Other Birth Injury</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Birth Injury */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After a Birth Injury</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 immediate-steps-theme">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Ensure your baby receives immediate medical attention</p>
                    <p>• Request copies of all medical records and pathology reports</p>
                    <p>• Get a second opinion from a pediatric specialist</p>
                    <p>• Document all diagnoses, treatments, and medical opinions</p>
                    <p>• Consider seeking treatment at specialized children's hospitals</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 never-do-theme">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Contact a birth injury attorney immediately</p>
                    <p>• Don't sign any hospital forms admitting fault</p>
                    <p>• Don't give recorded statements without legal counsel</p>
                    <p>• Preserve all documentation and medical bills</p>
                    <p>• Don't delay - California has strict time limits</p>
                  </CardContent>
                </Card>
              </div>

              <img src={diagnosisImage} alt="Medical diagnosis process" className="w-full h-64 object-cover rounded-lg mb-6" />
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Proving Negligence in Birth Injury Cases</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  To win a birth injury case, you must prove that the healthcare provider breached the standard of care and that this breach caused your child's injury. This involves gathering medical records, expert testimony, and evidence of errors such as delayed C-sections, failure to monitor fetal distress, or improper use of delivery tools.
                </p>
                <img src={legalProcessImage} alt="Legal consultation room" className="w-full h-64 object-cover rounded-lg mt-6" />
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Birth Injuries</h2>
              <div className="prose prose-lg max-w-none mb-6">
                <p>
                  Compensation can cover medical expenses, therapy, special education, lost wages, pain and suffering, and lifetime care costs. California does not cap damages in birth injury cases, allowing families to secure the resources needed for their child's future.
                </p>
                <img src={compensationImage} alt="Financial calculator and medical bills" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits for Filing Birth Injury Claims</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  California law generally allows filing a birth injury lawsuit until the child's 8th birthday, with some exceptions. It's critical to act quickly to preserve evidence and meet legal deadlines.
                </p>
              </div>
            </section>

            {/* FAQ Section with 50+ Questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Birth Injuries</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <Collapsible 
                      open={expandedFaq === index} 
                      onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardTitle className="flex justify-between items-center text-lg">
                            {faq.question}
                            {expandedFaq === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
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

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Educational Resources and Medical Guidance</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      Medical Facilities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={medicalImage} alt="Modern hospital medical facility" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <p>Information about top medical centers and specialists in California for birth injury treatment and diagnosis.</p>
                  </CardContent>
                </Card>
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Case Evaluation Form
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Access our free case evaluation form to start your legal journey with expert guidance.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                    >
                      Start Case Evaluation
                    </Button>
                  </CardContent>
                </Card>
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img src={compensationImage} alt="Compensation calculator" className="w-full h-40 object-cover rounded-lg mb-4" />
                    <p>Estimate potential compensation for your birth injury case with our easy-to-use calculator.</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 w-full text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/compensation-calculator'}
                    >
                      Use Calculator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center text-xl text-red-600">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <img src={sidebarImage} alt="Birth injury legal support" className="w-full h-40 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                    >
                      <FileText className="w-4 h-4" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2 text-primary border-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = 'mailto:contact@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </div>

                  <div className="text-center text-sm text-muted-foreground mt-4">
                    <p>Available 24/7</p>
                    <p className="font-semibold text-primary">No Fees Unless We Win</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center text-lg">Birth Injury Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-primary" />
                    <span>7 in 1,000 births involve injuries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 h-4 text-primary" />
                    <span>85-90% of CP cases are birth-related</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Until 8th birthday to file claim</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>No damage caps in California</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section - "Don't Wait - Time Limits Apply" */}
      <section className="bg-red-600 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">Don't Wait - Time Limits Apply for California Birth Injuries</h2>
          <p className="text-xl mb-6">
            California law gives you until your child's 8th birthday to file a birth injury claim, but evidence can be lost and witnesses' memories fade. 
            Contact us today for your free consultation.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
            >
              Get Free Case Evaluation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BirthInjuries;
