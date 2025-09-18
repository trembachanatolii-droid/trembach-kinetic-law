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
  CheckCircle
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
    },
    {
      question: "How does MICRA affect my medical malpractice case?",
      answer: "The Medical Injury Compensation Reform Act (MICRA) caps non-economic damages in California medical malpractice cases. Recent 2022 reforms significantly increased these caps, starting at $350,000 for injury cases and $500,000 for wrongful death in 2023, rising annually to $750,000 and $1,000,000 respectively by 2033. Economic damages remain unlimited."
    },
    {
      question: "Can I change lawyers if I'm not satisfied with my current attorney?",
      answer: "Yes, you have the right to change attorneys at any time. We often take over cases from other firms when clients aren't receiving the attention or results they deserve. We'll review your case file, evaluate the previous attorney's work, and determine the best strategy moving forward. Client satisfaction and maximum results are our priorities."
    },
    {
      question: "What if the medical error happened years ago?",
      answer: "California's statute of limitations for medical malpractice is generally 3 years from injury or 1 year from discovery, whichever comes first. However, certain circumstances can extend these deadlines, including fraudulent concealment, continuing treatment, or foreign objects left in the body. Contact us immediately - we can determine if your case is still viable despite the time passage."
    },
    {
      question: "Do I have a case if my condition simply didn't improve?",
      answer: "Poor outcomes alone don't constitute malpractice. You must prove the healthcare provider's negligence caused your harm. However, if your condition worsened due to inadequate treatment, failure to diagnose a treatable condition, or negligent care that prevented improvement, you may have a valid claim. We evaluate whether your poor outcome resulted from negligence or was an unfortunate but unavoidable result."
    },
    {
      question: "Can I sue for failure to obtain informed consent?",
      answer: "Yes, if you weren't properly informed about material risks of a procedure and would have chosen differently with proper information, you may have a claim for lack of informed consent. The provider must disclose risks that a reasonable patient would find significant in making treatment decisions. We prove what information should have been disclosed and how it would have affected your decision."
    },
    {
      question: "What if multiple doctors were involved in my care?",
      answer: "When multiple providers are involved, we investigate each doctor's role and determine individual liability. Each provider has independent duties to their patients. We may sue multiple doctors, specialists, hospitals, and other providers who contributed to your harm. This often results in higher total compensation as we can pursue separate damage awards from different parties."
    },
    {
      question: "Can I sue for anesthesia errors?",
      answer: "Yes, anesthesia errors can cause serious injuries including brain damage, organ failure, and death. Common errors include dosage mistakes, failure to monitor vital signs, inadequate pre-operative evaluation, and equipment failures. Anesthesiologists have specialized training and are held to high standards of care. We work with anesthesiology experts to prove negligence and secure compensation."
    },
    {
      question: "What if I can't afford to pursue a medical malpractice lawsuit?",
      answer: "You don't need money upfront to pursue a medical malpractice case. We work on a contingency fee basis - you pay nothing unless we win. We advance all case costs including expert fees, court costs, and investigation expenses. This allows anyone who has been harmed by medical negligence to access quality legal representation regardless of their financial situation."
    },
    {
      question: "How do I get my medical records for my case?",
      answer: "You have the right to obtain copies of all your medical records. We help you request records from all providers and ensure you receive complete files. Sometimes providers try to delay or limit record production, but we know how to obtain all relevant records including test results, nursing notes, and physician orders. Quick record acquisition is crucial for preserving evidence."
    },
    {
      question: "Can I sue for radiology errors?",
      answer: "Yes, radiologists can be held liable for misreading X-rays, CT scans, MRIs, and other imaging studies. Failure to identify fractures, tumors, aneurysms, or other critical findings can delay treatment and worsen outcomes. We work with radiology experts who review imaging studies and determine if readings met professional standards."
    },
    {
      question: "What if the hospital claims they followed protocols?",
      answer: "Following protocols doesn't automatically protect against malpractice claims. Protocols may be inadequate, improperly implemented, or the provider may have deviated from established procedures. We investigate whether protocols met professional standards, were properly followed, and whether reasonable care required going beyond minimum protocols in your specific situation."
    },
    {
      question: "Can I sue for pathology errors?",
      answer: "Yes, pathologists can be held liable for misinterpreting biopsies, Pap smears, and other tissue samples. These errors can lead to missed cancer diagnoses, unnecessary treatments, or delayed care. Pathology mistakes often have serious consequences because other doctors rely on pathology reports to make treatment decisions. We work with pathology experts to review slide interpretations and prove negligence."
    },
    {
      question: "What if my injury occurred during a clinical trial?",
      answer: "Clinical trial participants maintain the right to sue for medical malpractice if negligent care causes harm. However, these cases involve additional complexities including informed consent requirements, protocol deviations, and potential liability of pharmaceutical companies or research institutions. We have experience with clinical trial malpractice and understand the unique legal issues involved."
    },
    {
      question: "Can I sue for failure to diagnose a heart attack?",
      answer: "Yes, failure to diagnose heart attacks is a common and serious form of emergency room malpractice. Symptoms can be subtle, especially in women, but providers must properly evaluate chest pain, order appropriate tests, and recognize cardiac events. Missed heart attacks can lead to additional heart damage, disability, or death. We work with cardiology experts to prove negligent evaluation."
    },
    {
      question: "What if I was injured by a defective medical device?",
      answer: "Medical device injuries may involve both product liability claims against manufacturers and malpractice claims against providers who improperly implanted or monitored the device. We investigate all potential claims to maximize your recovery. Device cases often involve class actions or multidistrict litigation with other injured patients."
    },
    {
      question: "Can I sue for psychiatric malpractice?",
      answer: "Yes, psychiatrists and other mental health providers can be held liable for malpractice including improper medication management, failure to prevent patient suicide, inappropriate treatment, and boundary violations. Mental health malpractice cases require specialized experts who understand psychiatric standards of care and can prove how negligence caused psychological or physical harm."
    },
    {
      question: "What if my child was injured due to medical negligence?",
      answer: "Children have extended statute of limitations protections in California. Medical malpractice affecting minors can be filed until the child's 8th birthday or within 3 years of the incident, whichever provides more time. Pediatric cases often involve lifetime care costs and substantial damages. We work with pediatric specialists and life care planners to ensure full compensation for your child's needs."
    },
    {
      question: "Can I sue for negligent care during cosmetic surgery?",
      answer: "Yes, cosmetic surgeons are held to the same standards as other physicians. Poor results, infections, nerve damage, and other complications can constitute malpractice if they result from negligent care. Even elective procedures require proper surgical technique, sterile conditions, and appropriate post-operative care. We work with plastic surgery experts to evaluate cosmetic surgery complications."
    },
    {
      question: "What if my case involves multiple states or federal facilities?",
      answer: "Medical malpractice cases involving federal facilities like VA hospitals, military bases, or cases spanning multiple states involve complex jurisdictional issues. We have experience with federal tort claims, military malpractice, and multi-state medical care. Different deadlines and procedures may apply, making immediate legal consultation crucial for protecting your rights."
    },
    {
      question: "How do I know if my case is strong enough to pursue?",
      answer: "We evaluate case strength by reviewing medical records, consulting with medical experts, and assessing damages. Strong cases typically involve clear deviations from standard care that directly caused significant harm. Even if you're uncertain about your case's strength, our free consultation provides honest evaluation of your legal options and potential for recovery."
    },
    {
      question: "Can I sue for failure to refer me to a specialist?",
      answer: "Yes, primary care doctors have a duty to refer patients to specialists when conditions require expertise beyond their training. Failure to refer when a reasonable doctor would have done so can constitute malpractice, especially if the delay in specialist care worsened your condition or reduced treatment options."
    },
    {
      question: "What if my medical malpractice case goes to trial?",
      answer: "While many cases settle, we're fully prepared to take your case to trial if necessary to achieve fair compensation. We have extensive trial experience and work with compelling medical experts to present your case to a jury. Our willingness to go to trial often motivates better settlement offers from defendants who want to avoid the uncertainty of jury verdicts."
    },
    {
      question: "Can I sue for failure to follow up on test results?",
      answer: "Yes, healthcare providers have a duty to follow up on abnormal test results and communicate findings to patients. Failure to follow up can delay diagnosis and treatment, worsening outcomes. We investigate communication systems, tracking procedures, and provider responsibilities to prove negligent failure to act on critical test results."
    },
    {
      question: "What if language barriers contributed to my medical error?",
      answer: "Healthcare providers must ensure effective communication with all patients, including providing qualified interpreters when needed. Miscommunication due to language barriers that leads to medical errors can constitute malpractice. Providers cannot rely on family members or inadequate translation services for critical medical communications."
    },
    {
      question: "Can I sue for hospital-acquired infections?",
      answer: "Yes, hospitals can be held liable for preventable infections like MRSA, sepsis, and surgical site infections that result from poor sanitation, inadequate sterilization, or failure to follow infection control protocols. We investigate hospital policies, staff training, and compliance with safety standards to prove institutional negligence that led to your infection."
    },
    {
      question: "What compensation can I recover for permanent disability?",
      answer: "Permanent disability cases often result in substantial compensation including unlimited economic damages for lifetime medical care, lost earning capacity, rehabilitation costs, and home modifications. Non-economic damages for pain, suffering, and loss of life enjoyment are subject to MICRA caps but can still be significant. We work with life care planners and economists to fully document your losses."
    },
    {
      question: "How do I choose the right medical malpractice attorney?",
      answer: "Choose an attorney with specific medical malpractice experience, resources to hire top medical experts, a track record of significant recoveries, and a commitment to taking cases to trial when necessary. We offer free consultations, work on contingency fees, and provide personal attention throughout your case. Our clients receive direct attorney contact and regular case updates."
    },
    {
      question: "Can I sue for failure to treat pain appropriately?",
      answer: "Yes, inadequate pain management can constitute medical malpractice when it deviates from accepted standards and causes unnecessary suffering. This includes failure to assess pain properly, inadequate medication, ignoring patient reports, or improper treatment protocols. We work with pain management specialists to prove negligent care."
    },
    {
      question: "What if my medical records have been altered?",
      answer: "Alteration of medical records after an incident is serious misconduct that can strengthen your malpractice case. We have forensic experts who can detect alterations and prove when records were changed. Spoliation of evidence can result in sanctions against defendants and adverse jury instructions that help prove your case."
    },
    {
      question: "Can I sue for telemedicine malpractice?",
      answer: "Yes, telemedicine providers are held to the same standards as in-person care within the limitations of remote consultation. Telemedicine malpractice can include failure to recognize when in-person evaluation is needed, inadequate patient history, technical failures affecting care, or prescribing medications without proper examination. We understand evolving telemedicine standards and liability issues."
    },
    {
      question: "What happens if the at-fault doctor has no insurance?",
      answer: "Doctors in California are required to carry malpractice insurance, but some may be uninsured or underinsured. We investigate all potential sources of recovery including hospital coverage, medical group policies, and personal assets. We also explore whether the doctor's uninsured status violates licensing requirements, which can strengthen your case."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Medical Malpractice Attorneys | No Win No Fee | Trembach Law"
        description="California medical malpractice lawyers fighting for victims of medical negligence. Free consultation. No fees unless we win. Misdiagnosis, surgical errors, birth injuries."
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="hero-content text-center text-white px-6 max-w-6xl mx-auto">
          <Badge className="mb-6 bg-primary/90 text-white text-lg px-6 py-2">
            Medical Malpractice Attorneys
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            When Healthcare Fails, 
            <span className="text-primary-foreground block mt-2">We Fight for Justice</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Medical errors are the third leading cause of death in America. If you or a loved one has suffered due to medical negligence, misdiagnosis, surgical errors, or hospital mistakes, you deserve compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              <Phone className="mr-2 h-5 w-5" />
              Get Free Case Review
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
              <MessageCircle className="mr-2 h-5 w-5" />
              24/7 Live Chat
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2 gap-1">
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(tab.id)}
                className="whitespace-nowrap flex items-center gap-2 min-w-fit text-xs font-medium"
              >
                <tab.icon className="h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main ref={contentRef} className="container mx-auto px-6 py-16">
        
        {/* Overview Section */}
        <section id="overview" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Understanding Medical Malpractice in California</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your Rights, Our Fight - Comprehensive Legal Support for Medical Negligence Victims
            </p>
          </div>

          <Card className="content-card mb-12 bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-3">
                <AlertTriangle className="h-8 w-8" />
                Critical Information for Medical Malpractice Victims
              </CardTitle>
            </CardHeader>
            <CardContent className="text-lg leading-relaxed">
              Medical malpractice occurs when a healthcare provider's negligence causes harm to a patient. In California, you have the right to seek compensation for injuries caused by medical errors, misdiagnosis, surgical mistakes, medication errors, and more. Time is critical - California law requires filing within specific deadlines. Contact us immediately for a free case evaluation.
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="content-card text-center p-6">
              <Stethoscope className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">All Medical Errors Covered</h3>
              <p className="text-muted-foreground">From misdiagnosis and surgical mistakes to medication errors and birth injuries, we handle all types of medical malpractice cases throughout California.</p>
            </Card>
            <Card className="content-card text-center p-6">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No Fees Unless We Win</h3>
              <p className="text-muted-foreground">You pay nothing upfront. We only get paid when we win your case. No hidden costs, no hourly fees - just results-driven representation.</p>
            </Card>
            <Card className="content-card text-center p-6">
              <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-muted-foreground">Our experienced attorneys understand California's MICRA laws and have the medical expertise needed to prove negligence and maximize your compensation.</p>
            </Card>
            <Card className="content-card text-center p-6">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground">Medical emergencies don't wait. Neither do we. Call anytime for immediate assistance and a free consultation with our legal team.</p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="content-card p-6">
              <Brain className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Misdiagnosis & Delayed Diagnosis</h3>
              <p className="text-muted-foreground mb-4">
                One of the most common forms of medical malpractice, misdiagnosis can lead to delayed treatment, unnecessary procedures, or complete lack of treatment for serious conditions.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  Cancer misdiagnosis, stroke misidentification, and heart attack misdiagnosis are particularly devastating, often resulting in preventable death or permanent disability. Our medical experts review diagnostic procedures to prove when standard care would have led to proper diagnosis.
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="content-card p-6">
              <Activity className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Surgical Errors</h3>
              <p className="text-muted-foreground mb-4">
                Surgical mistakes include wrong-site surgery, leaving surgical instruments inside the body, nerve damage, unnecessary surgery, and anesthesia errors.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  These "never events" should never occur but happen more frequently than most patients realize, often causing catastrophic injuries or death. We work with surgical experts to prove these preventable errors.
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="content-card p-6">
              <Pill className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Medication Errors</h3>
              <p className="text-muted-foreground mb-4">
                Prescription mistakes, incorrect dosages, dangerous drug interactions, and administration errors can cause severe adverse reactions, organ damage, or death.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  Pharmacists, doctors, and nurses can all be held liable for medication-related malpractice. We investigate all parties involved in prescribing, dispensing, and administering medications.
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="content-card p-6">
              <Baby className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Birth Injuries</h3>
              <p className="text-muted-foreground mb-4">
                Medical negligence during pregnancy, labor, or delivery can cause lifelong disabilities. Cerebral palsy, Erb's palsy, brain damage from oxygen deprivation.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  Birth injuries often result from failure to monitor fetal distress, delayed C-sections, or improper use of delivery instruments. These cases require specialized obstetric experts.
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="content-card p-6">
              <AlertTriangle className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Emergency Room Errors</h3>
              <p className="text-muted-foreground mb-4">
                ER mistakes include failure to diagnose heart attacks or strokes, premature discharge, inadequate testing, and delayed treatment.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  The fast-paced emergency room environment is no excuse for negligence that causes patient harm. We understand ER standards and work with emergency medicine experts.
                </CollapsibleContent>
              </Collapsible>
            </Card>

            <Card className="content-card p-6">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="text-xl font-semibold mb-3">Hospital-Acquired Infections</h3>
              <p className="text-muted-foreground mb-4">
                Preventable infections like MRSA, sepsis, and surgical site infections often result from poor sanitation, inadequate sterilization.
              </p>
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" className="p-0 h-auto font-normal text-primary hover:text-primary/80">
                    Learn more <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-3 text-sm text-muted-foreground">
                  Hospitals can be held liable for systemic failures that lead to patient infections. We investigate infection control protocols and hospital policies.
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>
        </section>

        {/* Case Evaluation Section */}
        <section id="evaluation" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Free Medical Malpractice Case Evaluation</h2>
            <p className="text-xl text-muted-foreground">Get Your Case Reviewed by Expert Medical Malpractice Attorneys</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="content-card p-8">
                <CardHeader>
                  <CardTitle className="text-2xl mb-4">Start Your Free Case Review</CardTitle>
                  <p className="text-muted-foreground">Tell us about your medical malpractice situation. All consultations are completely confidential.</p>
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
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Medical Error</label>
                        <Select value={formData.typeOfError} onValueChange={(value) => setFormData({...formData, typeOfError: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select error type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="misdiagnosis">Misdiagnosis</SelectItem>
                            <SelectItem value="surgical-error">Surgical Error</SelectItem>
                            <SelectItem value="medication-error">Medication Error</SelectItem>
                            <SelectItem value="birth-injury">Birth Injury</SelectItem>
                            <SelectItem value="emergency-room">Emergency Room Error</SelectItem>
                            <SelectItem value="anesthesia-error">Anesthesia Error</SelectItem>
                            <SelectItem value="failure-to-diagnose">Failure to Diagnose</SelectItem>
                            <SelectItem value="hospital-infection">Hospital-Acquired Infection</SelectItem>
                            <SelectItem value="other">Other Medical Error</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Healthcare Provider/Facility</label>
                      <Input 
                        value={formData.healthcareProvider}
                        onChange={(e) => setFormData({...formData, healthcareProvider: e.target.value})}
                        placeholder="Hospital name, doctor's name, medical facility"
                        className="w-full"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Get Free Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="content-card p-6 sticky top-24">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Call Now: (818) 123-4567
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">24/7 Emergency Line</h4>
                    <p className="text-sm text-muted-foreground">Medical emergencies don't wait. Call anytime for immediate legal assistance.</p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Why Choose Our Firm?</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>No fees unless we win</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Medical experts on our team</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Proven MICRA expertise</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Maximum compensation pursuit</span>
                      </div>
                    </div>
                  </div>

                  <Card className="bg-red-50 border-red-200 p-4">
                    <div className="flex items-start gap-2">
                      <Clock className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-red-700 mb-1">Time-Sensitive Warning</h4>
                        <p className="text-sm text-red-600">California medical malpractice cases have strict deadlines. Evidence disappears quickly. Contact us immediately to protect your rights.</p>
                      </div>
                    </div>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What To Do Section */}
        <section id="what-to-do" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Immediate Steps After Medical Malpractice</h2>
            <p className="text-xl text-muted-foreground">Protect Your Rights - Act Now</p>
          </div>

          <Card className="content-card bg-green-50 border-green-200 p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-green-700 flex items-center gap-3">
                <Shield className="h-8 w-8" />
                Critical Actions to Take Immediately
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                  <div>
                    <strong>Seek Medical Treatment:</strong> Get proper medical care immediately from a different provider to address your injuries and prevent further harm.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                  <div>
                    <strong>Document Everything:</strong> Keep detailed records of symptoms, treatments, and conversations with healthcare providers.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                  <div>
                    <strong>Request Medical Records:</strong> Obtain complete copies before they can be altered or "lost" by the healthcare facility.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                  <div>
                    <strong>Photograph Injuries:</strong> Take photos of visible injuries and continue documenting the healing process.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">5</Badge>
                  <div>
                    <strong>Don't Sign Anything:</strong> Refuse to sign any documents from hospitals or insurers without legal counsel review.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">6</Badge>
                  <div>
                    <strong>Avoid Social Media:</strong> Don't post about your case on any social platforms - insurance companies monitor these.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Badge className="bg-green-600 text-white min-w-[24px] h-6 flex items-center justify-center">7</Badge>
                  <div>
                    <strong>Call Us Immediately:</strong> Free consultation to protect your rights - (818) 123-4567
                  </div>
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card className="content-card bg-red-50 border-red-200 p-8">
            <CardHeader>
              <CardTitle className="text-2xl text-red-700 flex items-center gap-3">
                <AlertTriangle className="h-8 w-8" />
                Warning Signs You May Have a Medical Malpractice Case
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid md:grid-cols-2 gap-3 text-base">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Your condition worsened after treatment instead of improving
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  You received a different diagnosis from a second doctor
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Your doctor failed to order standard tests for your symptoms
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  You suffered unexpected complications after a routine procedure
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Medical staff won't explain what went wrong
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  You discovered a surgical error (wrong site, retained instruments)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Your medical records are incomplete or have been altered
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  You weren't informed about treatment risks before consenting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  Your symptoms were dismissed without proper examination
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-1">•</span>
                  You suffered a severe reaction to medication that wasn't monitored
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>

        {/* Medical Errors Section */}
        <section id="types-of-errors" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Types of Medical Errors We Handle</h2>
            <p className="text-xl text-muted-foreground">Comprehensive Legal Support for All Forms of Medical Negligence</p>
          </div>

          <div className="space-y-8">
            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Understanding California's MICRA Laws and Damage Caps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">The Medical Injury Compensation Reform Act (MICRA) has governed California medical malpractice cases since 1975. Recent reforms in 2022 have significantly changed the landscape for victims:</p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">New MICRA Damage Caps (Effective January 1, 2023)</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Non-Death Cases:</strong> Starting at $350,000 in 2023, increasing by $40,000 annually until reaching $750,000 in 2033</li>
                      <li><strong>Wrongful Death Cases:</strong> Starting at $500,000 in 2023, increasing by $50,000 annually until reaching $1,000,000 in 2033</li>
                      <li><strong>After 2033:</strong> Both caps will increase by 2% annually for inflation</li>
                      <li><strong>Multiple Defendants:</strong> Separate caps apply for healthcare providers, healthcare institutions, and unaffiliated providers</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-3">What MICRA Doesn't Cap</h4>
                    <p className="mb-2">Economic damages remain unlimited, including:</p>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Past and future medical expenses</li>
                      <li>• Lost wages and loss of earning capacity</li>
                      <li>• Cost of rehabilitation and therapy</li>
                      <li>• Home modifications for disabilities</li>
                      <li>• Long-term care costs</li>
                    </ul>
                  </div>
                </div>

                <Card className="bg-red-50 border-red-200 p-6 mt-6">
                  <div className="flex items-start gap-3">
                    <Clock className="h-6 w-6 text-red-500 mt-1" />
                    <div>
                      <h4 className="text-xl font-semibold text-red-700 mb-2">Important Timeline Alert</h4>
                      <p className="text-red-600">California's statute of limitations for medical malpractice is complex: You must file within 3 years of the injury OR 1 year from discovery of the injury, whichever comes first. For minors, special rules apply. Don't delay - contact us immediately to protect your rights.</p>
                    </div>
                  </div>
                </Card>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Types of Healthcare Providers We Sue for Malpractice</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-6">Medical malpractice can be committed by any healthcare professional or facility. We hold all negligent parties accountable:</p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Medical Professionals</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li><strong>Doctors & Surgeons:</strong> Primary care physicians, specialists, surgeons, emergency room doctors</li>
                      <li><strong>Nurses & Medical Staff:</strong> Registered nurses, nurse practitioners, physician assistants, medical technicians</li>
                      <li><strong>Specialists:</strong> Anesthesiologists, radiologists, oncologists, cardiologists, neurologists, obstetricians</li>
                      <li><strong>Mental Health Providers:</strong> Psychiatrists, psychologists, therapists</li>
                      <li><strong>Other Providers:</strong> Dentists, chiropractors, pharmacists, physical therapists</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-primary mb-4">Healthcare Facilities</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Hospitals and medical centers</li>
                      <li>• Outpatient surgery centers</li>
                      <li>• Emergency rooms and urgent care clinics</li>
                      <li>• Nursing homes and assisted living facilities</li>
                      <li>• Rehabilitation centers</li>
                      <li>• Birthing centers</li>
                      <li>• Diagnostic imaging centers</li>
                      <li>• Laboratories</li>
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-lg">California law allows victims to pursue claims against multiple parties. Hospitals can be held vicariously liable for their employees' negligence, and direct liability applies for systemic failures like inadequate staffing, poor training, or dangerous policies.</p>
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
                  <UserX className="h-8 w-8 text-primary" />
                  1. Duty of Care (Doctor-Patient Relationship)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  We must establish that a formal healthcare provider-patient relationship existed. This creates a legal duty for the provider to deliver competent medical care. This is typically straightforward when you've been treated by the provider.
                </p>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="h-8 w-8 text-primary" />
                  2. Breach of Duty (Negligence)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed mb-4">
                  The healthcare provider failed to meet the accepted standard of care. We prove this through expert testimony from medical professionals who testify about what a reasonably competent provider would have done differently.
                </p>
                <p className="text-sm text-muted-foreground">Common breaches include failure to order necessary tests, misinterpreting test results, ignoring patient symptoms, performing unnecessary procedures, and lack of informed consent.</p>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Activity className="h-8 w-8 text-primary" />
                  3. Causation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  The provider's negligence directly caused your injury. This requires showing that your harm wouldn't have occurred if the provider had met the standard of care. Medical experts help establish this causal link between the negligent act and your damages.
                </p>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Heart className="h-8 w-8 text-primary" />
                  4. Damages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg leading-relaxed">
                  You must have suffered actual harm or damages as a result of the negligence. This includes physical injuries, emotional trauma, additional medical expenses, lost wages, pain and suffering, and reduced quality of life. We document all damages to maximize your compensation.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Compensation Section */}
        <section id="compensation" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Medical Malpractice Compensation in California</h2>
            <p className="text-xl text-muted-foreground">Understanding Your Rights to Full Recovery</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Economic Damages (Unlimited)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Past and future medical expenses</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Lost wages and reduced earning capacity</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Rehabilitation and therapy costs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Home modifications for disabilities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Long-term care and assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="h-5 w-5 text-green-500 mt-1" />
                    <span>Transportation for medical care</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl mb-4">Non-Economic Damages (MICRA Caps Apply)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Pain and suffering</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Emotional distress and trauma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Loss of enjoyment of life</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Disfigurement and scarring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Loss of consortium (for spouses)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Heart className="h-5 w-5 text-primary mt-1" />
                    <span>Permanent disability impact</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="content-card p-8 mt-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-700 mb-4">2024 MICRA Damage Caps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 text-lg">
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Non-Death Cases:</h4>
                  <p className="text-blue-700">$430,000 (increasing annually until $750,000 in 2033)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 mb-2">Wrongful Death Cases:</h4>
                  <p className="text-blue-700">$600,000 (increasing annually until $1,000,000 in 2033)</p>
                </div>
              </div>
              <p className="mt-4 text-blue-600">*Separate caps may apply for different types of defendants (healthcare providers vs. institutions)</p>
            </CardContent>
          </Card>
        </section>

        {/* Time Limits Section */}
        <section id="time-limits" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">California Medical Malpractice Time Limits</h2>
            <p className="text-xl text-muted-foreground">Understanding Critical Deadlines for Your Case</p>
          </div>

          <Card className="content-card bg-red-50 border-red-200 p-8 mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-red-700 flex items-center gap-3">
                <Clock className="h-8 w-8" />
                Statute of Limitations - Act Now!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-red-800 mb-3">General Rule</h4>
                  <p className="text-lg text-red-700">
                    You have <strong>3 years from the date of injury</strong> OR <strong>1 year from discovery</strong> of the injury, whichever comes first.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-red-800 mb-3">Special Rules for Minors</h4>
                  <p className="text-lg text-red-700">
                    For children under 6: 3 years from injury or until the child's 8th birthday, whichever provides more time.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-red-800 mb-3">Foreign Objects Exception</h4>
                  <p className="text-lg text-red-700">
                    If surgical instruments or foreign objects are left in your body, special extended deadlines may apply.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-orange-500" />
                  Why Time Matters
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li>• Evidence disappears quickly</li>
                  <li>• Witnesses forget important details</li>
                  <li>• Medical records can be altered or lost</li>
                  <li>• Surveillance footage is often overwritten</li>
                  <li>• Healthcare providers change jobs</li>
                  <li>• Memories fade over time</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="content-card p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-500" />
                  How We Protect You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-lg">
                  <li>• Immediate evidence preservation</li>
                  <li>• Quick medical record requests</li>
                  <li>• Expert witness retention</li>
                  <li>• Timely lawsuit filing</li>
                  <li>• Comprehensive investigation</li>
                  <li>• Strategic case development</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Medical Malpractice FAQs</h2>
            <p className="text-xl text-muted-foreground">Answers to Your Most Important Questions</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="content-card">
                <CardHeader 
                  className="cursor-pointer hover:bg-muted/50 transition-colors"
                  onClick={() => toggleFaq(index)}
                >
                  <CardTitle className="flex justify-between items-center text-lg">
                    {faq.question}
                    {expandedFaq === index ? (
                      <ChevronUp className="h-5 w-5 text-primary" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-primary" />
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6">Medical Malpractice Resources</h2>
            <p className="text-xl text-muted-foreground">Quick Access to Essential Tools and Information</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <Scale className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Case Evaluation</h3>
              <p className="text-muted-foreground mb-4">Get your medical malpractice case reviewed by expert attorneys</p>
              <Button asChild>
                <a href="/medical-malpractice-case-evaluation">Start Evaluation</a>
              </Button>
            </Card>

            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Compensation Calculator</h3>
              <p className="text-muted-foreground mb-4">Estimate potential compensation for your medical malpractice case</p>
              <Button asChild>
                <a href="/medical-malpractice-compensation-calculator">Calculate Now</a>
              </Button>
            </Card>

            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Medical Guidance</h3>
              <p className="text-muted-foreground mb-4">Essential medical information for malpractice victims</p>
              <Button asChild>
                <a href="/medical-malpractice-medical-guidance">Learn More</a>
              </Button>
            </Card>

            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <Building className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">California Medical Board</h3>
              <p className="text-muted-foreground mb-4">Official medical licensing and complaint information</p>
              <Button variant="outline" asChild>
                <a href="https://www.mbc.ca.gov/" target="_blank" rel="noopener noreferrer">Visit Site</a>
              </Button>
            </Card>

            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient Safety Resources</h3>
              <p className="text-muted-foreground mb-4">Information about patient rights and safety</p>
              <Button variant="outline" asChild>
                <a href="https://www.psqh.com/" target="_blank" rel="noopener noreferrer">Learn More</a>
              </Button>
            </Card>

            <Card className="content-card p-6 text-center hover:shadow-lg transition-shadow">
              <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Legal Hotline</h3>
              <p className="text-muted-foreground mb-4">Immediate legal assistance for medical emergencies</p>
              <Button asChild>
                <a href="tel:8181234567">(818) 123-4567</a>
              </Button>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="content-section text-center bg-primary text-primary-foreground p-12 rounded-lg">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Time Limits Apply for California Medical Malpractice Claims</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            California law imposes strict deadlines for filing medical malpractice lawsuits. Evidence disappears quickly, and witness memories fade. The sooner you contact us, the better we can protect your rights and build a strong case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
              <Phone className="mr-2 h-5 w-5" />
              Free Case Review Now
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 border-white text-white hover:bg-white hover:text-primary">
              <a href="/medical-malpractice-case-evaluation" className="flex items-center">
                <Scale className="mr-2 h-5 w-5" />
                Start Case Evaluation
              </a>
            </Button>
          </div>
          <p className="mt-6 text-lg opacity-90">
            Call (818) 123-4567 - Available 24/7 for Medical Emergencies
          </p>
        </section>
      </main>
    </div>
  );
};

export default MedicalMalpractice;