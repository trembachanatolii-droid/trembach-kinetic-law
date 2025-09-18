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
      question: "Can I sue for failure to monitor a patient properly?",
      answer: "Yes, healthcare providers have a duty to properly monitor patients, especially those in critical condition or receiving certain medications. Failure to monitor vital signs, respond to changes in condition, or provide adequate post-operative care can constitute malpractice. We work with nursing and medical experts to establish proper monitoring standards and prove when care fell short."
    },
    {
      question: "What if I was injured by a defective medical device?",
      answer: "Medical device injuries may involve both malpractice and product liability claims. If the device was properly used but defective, you may sue the manufacturer. If the device was improperly used or the wrong device was chosen, you may have a malpractice claim against the provider. We investigate all potential claims to maximize your recovery from all responsible parties."
    },
    {
      question: "Can I sue for psychiatric malpractice?",
      answer: "Yes, mental health providers can be held liable for malpractice including misdiagnosis, inappropriate medication management, failure to prevent suicide, sexual misconduct, and breach of confidentiality. Psychiatric malpractice cases require specialized experts who understand mental health standards of care and can prove causation between negligent treatment and psychological harm."
    },
    {
      question: "What if my primary care doctor failed to refer me to a specialist?",
      answer: "Primary care physicians have a duty to recognize when conditions require specialist care and make appropriate referrals. Failure to refer when a reasonable doctor would have done so can constitute malpractice, especially if delays in specialist care worsen your condition. We evaluate whether referral delays caused additional harm and pursue compensation accordingly."
    },
    {
      question: "Can I sue for post-surgical infections?",
      answer: "Not all post-surgical infections constitute malpractice, as some infection risk is inherent in surgery. However, infections may result from negligent surgical technique, inadequate sterilization, failure to prescribe appropriate antibiotics, or improper wound care. We investigate whether infections resulted from preventable negligence or unavoidable complications."
    },
    {
      question: "What if my dentist injured me during treatment?",
      answer: "Dental malpractice can include nerve damage, infections, unnecessary procedures, failure to diagnose oral cancer, and anesthesia complications. Dentists are held to the same professional standards as other healthcare providers. We work with dental experts to evaluate whether your injuries resulted from negligent dental care below professional standards."
    },
    {
      question: "Can I sue for laboratory errors?",
      answer: "Yes, laboratory errors can lead to misdiagnosis, delayed treatment, and inappropriate medical decisions. This includes specimen mix-ups, contaminated samples, incorrect test results, and failure to report critical values promptly. Labs, hospitals, and ordering physicians may all be liable for errors that cause patient harm."
    },
    {
      question: "What if my surgeon operated on the wrong body part?",
      answer: "Wrong-site surgery is a serious never-event that should never occur with proper protocols. This includes wrong limb, wrong organ, wrong side of body, or wrong patient entirely. These cases often result in substantial compensation as they represent clear breaches of surgical safety standards and typically cause significant physical and emotional harm."
    },
    {
      question: "Can I sue for failure to diagnose a heart attack?",
      answer: "Yes, failure to diagnose heart attacks in emergency rooms or primary care settings can be fatal or cause permanent heart damage. Symptoms may be atypical, especially in women, but providers must consider cardiac causes for chest pain, shortness of breath, and related symptoms. Delayed diagnosis can worsen outcomes and may constitute malpractice."
    },
    {
      question: "What if my doctor prescribed the wrong medication?",
      answer: "Prescription errors can cause serious harm including allergic reactions, drug interactions, overdoses, and treatment failures. Doctors must check patient allergies, review current medications, verify dosages, and provide proper instructions. Pharmacists also have duties to catch prescription errors before dispensing medications to patients."
    },
    {
      question: "Can I sue for failure to follow up on test results?",
      answer: "Yes, healthcare providers have a duty to review test results promptly and communicate abnormal findings to patients. Failure to follow up on concerning test results, delays in notification, or inadequate patient tracking systems can constitute malpractice, especially if delayed treatment worsens patient outcomes."
    },
    {
      question: "What if my plastic surgeon botched my cosmetic procedure?",
      answer: "Cosmetic surgery malpractice can include nerve damage, scarring, asymmetry, infections, and results far below professional standards. While cosmetic procedures carry inherent risks, surgeons must meet professional standards of care. We evaluate whether poor outcomes resulted from negligent technique or unavoidable complications."
    },
    {
      question: "Can I sue for failure to prevent hospital-acquired infections?",
      answer: "Hospitals have strict infection control protocols to prevent healthcare-associated infections. Failure to follow hand hygiene protocols, improper sterilization, inadequate isolation procedures, or systemic infection control failures may constitute negligence. We investigate whether infections resulted from preventable hospital negligence."
    },
    {
      question: "What if my doctor failed to order necessary tests?",
      answer: "Physicians must order appropriate diagnostic tests based on patient symptoms and medical history. Failure to order necessary tests, delaying needed testing, or misinterpreting test results can constitute malpractice if it leads to missed diagnoses or delayed treatment. We work with medical experts to establish proper diagnostic standards."
    },
    {
      question: "Can I sue for negligent credentialing by a hospital?",
      answer: "Hospitals have a duty to properly credential physicians and verify their qualifications before granting privileges. Negligent credentialing that allows unqualified physicians to practice can make hospitals liable for resulting patient harm. We investigate physician backgrounds and hospital credentialing processes when poor outcomes occur."
    },
    {
      question: "What if my medical treatment was delayed due to insurance issues?",
      answer: "While insurance delays can complicate care, healthcare providers still have duties to patients. If providers fail to advocate for necessary care, don't seek alternative treatments, or delay care unreasonably due to insurance issues, they may be liable for worsened outcomes. We evaluate whether insurance delays contributed to preventable harm."
    },
    {
      question: "Can I sue for failure to obtain proper consent for experimental treatments?",
      answer: "Experimental treatments require enhanced informed consent including disclosure of experimental nature, alternative treatments, and additional risks. Patients must understand they're receiving experimental care and consent to participation. Failure to obtain proper informed consent for experimental treatments can result in liability even if the treatment itself was performed competently."
    },
    {
      question: "What if my doctor failed to coordinate my care with other specialists?",
      answer: "When multiple specialists are involved in patient care, coordination is essential to prevent conflicting treatments, drug interactions, and communication failures. Primary care physicians and specialists have duties to communicate effectively and coordinate care plans. Poor coordination that causes patient harm may constitute malpractice by multiple providers."
    },
    {
      question: "Can I sue for medical malpractice if I'm uninsured?",
      answer: "Yes, your insurance status doesn't affect your right to pursue medical malpractice claims. Healthcare providers owe the same standard of care to all patients regardless of insurance status. We help uninsured clients access necessary medical care through liens while pursuing compensation for their injuries. Everyone deserves competent medical care."
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
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
              California Medical Malpractice Attorneys
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6">
              Fighting for victims of medical negligence across California
            </p>
            <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              When healthcare providers fail to meet the standard of care, patients suffer devastating consequences. Our dedicated medical malpractice attorneys leverage defense-side insights to fight for victims of medical negligence throughout California.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                <h2 className="text-5xl font-bold mb-8">Medical Malpractice in California</h2>
                <p className="text-2xl text-muted-foreground">Comprehensive Legal Support for Medical Negligence Victims</p>
              </div>

              <Card className="content-card p-10 mb-10">
                <CardContent>
                  <p className="text-xl leading-relaxed mb-8">
                    Medical malpractice occurs when healthcare providers fail to deliver the standard of care expected in their profession, resulting in patient harm. In California, these cases are governed by specific laws including the Medical Injury Compensation Reform Act (MICRA), which was significantly updated in 2022 to increase compensation limits for victims.
                  </p>
                  <p className="text-xl leading-relaxed">
                    Our legal team understands the complexities of California medical malpractice law and works with top medical experts to build compelling cases for our clients. We handle all aspects of your case while you focus on recovery.
                  </p>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-10">
                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Shield className="h-8 w-8 text-red-600" />
                      Our Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-muted-foreground">
                      <li>• Former insurance defense attorney insight</li>
                      <li>• Network of top medical experts available</li>
                      <li>• No fees unless we win your case</li>
                      <li>• Focused on building strong cases with evidence</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="content-card p-8">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Clock className="h-8 w-8 text-red-600" />
                      Time Is Critical
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 text-lg text-muted-foreground">
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
              <h2 className="text-4xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <Collapsible open={expandedFaq === index} onOpenChange={() => toggleFaq(index)}>
                        <CollapsibleTrigger asChild>
                          <Button variant="ghost" className="w-full justify-between text-left text-lg p-6">
                            {faq.question}
                            {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                          </Button>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <CardContent className="pt-4">
                            <p className="text-lg leading-relaxed">{faq.answer}</p>
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
                    <span>Our Approach:</span>
                    <span className="font-semibold text-green-600">Client-Focused</span>
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