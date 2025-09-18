import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
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
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/medical-malpractice-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/medical-malpractice-consultation.jpg';
import errorTypesImage from '@/assets/practice-areas/medical-negligence-evidence.jpg';
import provingNegligenceImage from '@/assets/practice-areas/hospital-liability-investigation.jpg';
import compensationImage from '@/assets/practice-areas/medical-expert-testimony.jpg';
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
    healthcareProvider: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    description: '',
    consent: false
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
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
      answer: "Yes, radiology errors including misread X-rays, CT scans, MRIs, and mammograms can lead to delayed diagnosis, improper treatment, and patient harm. Radiologists have a duty to accurately interpret imaging studies and communicate findings promptly. We work with radiology experts to review imaging studies and prove when errors in interpretation or communication caused patient harm."
    },
    {
      question: "What if the medical facility claims sovereign immunity?",
      answer: "Government-operated medical facilities may claim sovereign immunity, but this protection has limits. Public hospitals and facilities can be sued under the California Tort Claims Act, though special procedures and shorter deadlines apply. University medical centers and county hospitals are often subject to liability for medical malpractice. We navigate these complex rules to pursue all available remedies."
    },
    {
      question: "Can I sue for cosmetic surgery gone wrong?",
      answer: "Yes, cosmetic surgeons must meet the same standard of care as other medical specialists. While cosmetic surgery carries risks, surgeons can be liable for negligent technique, failure to obtain informed consent, performing procedures beyond their training, or post-operative care failures. Poor aesthetic results don't always constitute malpractice, but negligent care that causes harm or complications may support a valid claim."
    },
    {
      question: "What if I signed an arbitration agreement?",
      answer: "Many medical providers require patients to sign arbitration agreements limiting the right to jury trial. While these agreements are often enforceable in California, they don't prevent you from pursuing a claim - they just change the forum from court to arbitration. We have extensive experience with medical arbitration and know how to maximize results in this setting."
    },
    {
      question: "Can I sue for pharmacy errors?",
      answer: "Yes, pharmacists have a duty to dispense medications accurately and counsel patients about proper use. Pharmacy errors include dispensing wrong medications, incorrect dosages, failing to check for drug interactions, and inadequate patient counseling. Both the individual pharmacist and pharmacy corporation may be liable for errors that cause patient harm."
    },
    {
      question: "What if my dentist caused nerve damage?",
      answer: "Dental procedures carry risks, but dentists can be liable for nerve damage caused by negligent technique, inadequate pre-procedural evaluation, or failure to obtain informed consent about risks. Common dental malpractice includes nerve damage during extractions, endodontic treatment, or implant placement. We work with dental experts to evaluate whether nerve damage resulted from negligence or was an unavoidable complication."
    },
    {
      question: "Can I sue for failure to diagnose a heart attack?",
      answer: "Yes, failure to diagnose heart attacks is a common form of emergency room malpractice. Doctors must recognize heart attack symptoms, order appropriate tests like EKGs and cardiac enzymes, and provide timely treatment. Delayed diagnosis can result in additional heart damage, complications, or death. We work with cardiology experts to prove when symptoms warranted immediate cardiac evaluation and treatment."
    },
    {
      question: "What if I was injured during surgery by a trainee?",
      answer: "Teaching hospitals have special responsibilities when residents and medical students participate in patient care. Attending physicians must provide adequate supervision, and patients should be informed when trainees are involved. If a trainee's error causes harm, both the trainee and supervising physicians may be liable. Hospitals also have duties to ensure adequate supervision and training."
    },
    {
      question: "Can I sue for failure to prevent hospital-acquired infections?",
      answer: "Yes, hospitals have a duty to maintain sanitary conditions and follow infection control protocols. Hospital-acquired infections may result from contaminated equipment, poor hand hygiene, inadequate sterilization, or failure to isolate infectious patients. These infections can be severe and sometimes fatal. We investigate whether proper infection control measures were followed and hold hospitals accountable for preventable infections."
    },
    {
      question: "What if my doctor was under the influence during treatment?",
      answer: "Healthcare providers impaired by drugs or alcohol pose extreme danger to patients. Even if no immediate harm occurs, treating patients while impaired constitutes serious professional negligence. If impairment contributed to medical errors or poor judgment that harmed you, both the individual provider and employing facility may face liability. These cases often involve punitive damages due to the egregious nature of the conduct."
    },
    {
      question: "Can I sue for failure to monitor vital signs?",
      answer: "Yes, healthcare providers have a duty to appropriately monitor patients' vital signs and respond to changes indicating distress. This is especially critical during surgery, in intensive care units, and for high-risk patients. Failure to monitor or respond to vital sign changes can lead to preventable complications, organ damage, or death. We prove when monitoring fell below the standard of care."
    },
    {
      question: "What if my medical device was defective?",
      answer: "Medical device injuries may involve both product liability claims against manufacturers and malpractice claims against healthcare providers. Doctors have duties to select appropriate devices, properly implant or use them, and monitor for complications. If a device was recalled or had known defects, providers may be liable for continuing to use it. We pursue all liable parties to maximize recovery."
    },
    {
      question: "Can I sue for wrongful discharge from the hospital?",
      answer: "Yes, premature hospital discharge can constitute malpractice if it falls below the standard of care and causes patient harm. Factors include the patient's condition at discharge, adequacy of discharge planning, follow-up arrangements, and whether complications were foreseeable. Economic pressures don't excuse discharging patients who aren't medically stable."
    },
    {
      question: "What if I was given the wrong blood type during a transfusion?",
      answer: "Blood transfusion errors are serious medical mistakes that can cause severe reactions, organ damage, or death. Hospitals have strict protocols for blood typing, cross-matching, and verification before transfusions. Multiple healthcare providers typically check patient identity and blood compatibility. Transfusion errors often result from systemic failures in hospital procedures and can support substantial damage claims."
    },
    {
      question: "Can I sue for failure to obtain adequate medical history?",
      answer: "Yes, healthcare providers have a duty to obtain relevant medical history before treatment. Failure to ask about allergies, medications, previous surgeries, or family history can lead to inappropriate treatment, dangerous drug interactions, or missed diagnoses. Adequate history-taking is a fundamental standard of care, and failures that cause patient harm may constitute malpractice."
    },
    {
      question: "What if my case involves multiple hospitals or medical groups?",
      answer: "Complex medical cases often involve multiple healthcare entities with different insurance coverage and liability exposure. We have experience coordinating cases against multiple defendants, navigating different insurance policies, and maximizing total recovery. Each entity's liability is evaluated separately, and we pursue all responsible parties to ensure full compensation for your injuries."
    },
    {
      question: "Can I sue for failure to properly sedate during procedures?",
      answer: "Yes, proper sedation is crucial for patient safety and comfort during medical procedures. Errors include inadequate sedation causing pain and trauma, over-sedation causing respiratory depression or cardiac arrest, and failure to monitor patients during sedation. Providers administering sedation must be properly trained and equipped to handle complications. We work with anesthesiology experts to evaluate sedation-related malpractice claims."
    },
    {
      question: "What if I was treated without my consent?",
      answer: "Medical treatment without proper consent can constitute both malpractice and battery. Except in true emergencies, patients have the right to make informed decisions about their medical care. Treatment without consent may occur when patients are unconscious, mentally incapacitated, or when providers exceed the scope of consented procedures. We evaluate whether consent was properly obtained and whether treatment was justified by emergency circumstances."
    },
    {
      question: "Can I sue for failure to properly train medical staff?",
      answer: "Yes, hospitals and medical facilities have a duty to properly train their staff and ensure competency. This includes initial training, ongoing education, and supervision of new employees. If inadequate training contributes to medical errors that harm patients, the employing institution may be liable. We investigate training records, policies, and procedures to prove when institutional failures contributed to patient harm."
    },
    {
      question: "What if my doctor had a conflict of interest?",
      answer: "Healthcare providers must disclose financial conflicts of interest that might affect treatment decisions. This includes financial relationships with drug companies, medical device manufacturers, or investment interests in treatment facilities. While conflicts don't automatically prove malpractice, they may affect the standard of care analysis and damages if they influenced inappropriate treatment decisions. Failure to disclose material conflicts may constitute breach of fiduciary duty."
    },
    {
      question: "Can I sue for medical malpractice if I'm from another state?",
      answer: "Yes, if you were treated in California, you can pursue a malpractice claim here regardless of your home state. California courts have jurisdiction over medical treatment that occurred within the state. However, choice of law issues may arise regarding which state's laws apply to different aspects of your case. We handle cases for clients from all states and navigate these complex jurisdictional issues."
    },
    {
      question: "What if the medical error was caught and corrected before I was harmed?",
      answer: "Even if a medical error was caught and corrected, you may still have a claim if the error caused any damages such as additional medical procedures, extended hospital stays, anxiety, or other harm. The fact that an error was caught doesn't excuse the negligence that caused it. We evaluate all consequences of medical errors, including emotional distress and economic losses that resulted from the mistake and its correction."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Medical Malpractice Lawyers in California | Free Case Review"
        description="Experienced California medical malpractice attorneys. Free case evaluation for misdiagnosis, surgical errors, birth injuries & more. No fees unless we win."
        canonical="/practice-areas/medical-malpractice"
      />
      
      <Navigation />
      
      {/* Hero Section - Matching Premises Liability ratio */}
      <section 
        ref={heroRef}
        className="relative h-[60vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <div className="hero-content">
              <Badge className="mb-4 bg-red-600 hover:bg-red-700">Medical Malpractice</Badge>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                California Medical Malpractice Lawyers
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                When healthcare providers fail to meet professional standards, patients suffer. Our experienced medical malpractice attorneys fight for victims of medical negligence across California.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6">
                  Free Case Review
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20">
                  Call (555) 123-4567
                </Button>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">Get Your Free Case Evaluation</CardTitle>
                <p className="text-gray-600">No fees unless we win your case</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Input
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                    <Input
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                  <Select onValueChange={(value) => handleSelectChange('typeOfError', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Type of Medical Error" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="misdiagnosis">Misdiagnosis</SelectItem>
                      <SelectItem value="surgical-error">Surgical Error</SelectItem>
                      <SelectItem value="medication-error">Medication Error</SelectItem>
                      <SelectItem value="birth-injury">Birth Injury</SelectItem>
                      <SelectItem value="emergency-error">Emergency Room Error</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Brief description of what happened..."
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={3}
                  />
                  <div className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      className="mt-1"
                      required
                    />
                    <label htmlFor="consent" className="text-sm text-gray-600">
                      I consent to being contacted by this law firm about my potential case.
                    </label>
                  </div>
                  <Button type="submit" className="w-full text-lg py-6" disabled={!formData.consent}>
                    Start Medical Malpractice Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <GoBack />

      {/* Main Content */}
      <div ref={contentRef} className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Navigation Tabs */}
            <div className="content-section">
              <div className="flex flex-wrap gap-2 mb-8 sticky top-4 bg-background p-4 rounded-lg shadow-sm z-10">
                {tabs.map((tab) => (
                  <Button
                    key={tab.id}
                    variant={activeTab === tab.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => scrollToSection(tab.id)}
                    className="flex items-center gap-2"
                  >
                    <tab.icon className="w-4 h-4" />
                    {tab.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <h2 className="text-4xl font-bold mb-6">California Medical Malpractice Overview</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground mb-6">
                  Medical malpractice occurs when healthcare providers fail to meet the accepted standard of care, 
                  resulting in patient harm. In California, these cases are governed by specific laws and procedures 
                  designed to ensure accountability while protecting patients' rights to compensation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <Card>
                    <CardContent className="p-6">
                      <Heart className="w-8 h-8 text-red-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Patient Safety</h3>
                      <p>Our primary concern is ensuring you receive proper medical care while pursuing justice for negligent treatment.</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <Scale className="w-8 h-8 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold mb-3">Legal Expertise</h3>
                      <p>We have extensive experience with California's complex medical malpractice laws and MICRA regulations.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Free Case Evaluation Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-blue-600">1</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Initial Review</h3>
                    <p className="text-sm text-muted-foreground">We review your medical records and incident details</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-blue-600">2</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Expert Analysis</h3>
                    <p className="text-sm text-muted-foreground">Medical experts evaluate the standard of care</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-blue-600">3</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">Case Strategy</h3>
                    <p className="text-sm text-muted-foreground">We develop a comprehensive legal strategy</p>
                  </CardContent>
                </Card>
              </div>
              <Link to="/medical-malpractice-case-evaluation">
                <Button size="lg" className="w-full md:w-auto">
                  Start Your Free Evaluation
                </Button>
              </Link>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="content-section">
              <h2 className="text-4xl font-bold mb-6">What to Do After Medical Malpractice</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={whatToDoImage} 
                    alt="Medical malpractice consultation" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Seek Immediate Medical Care</h3>
                      <p className="text-muted-foreground">Get proper treatment from a different healthcare provider</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Document Everything</h3>
                      <p className="text-muted-foreground">Keep detailed records of your injuries and treatment</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Obtain Medical Records</h3>
                      <p className="text-muted-foreground">Request complete records from all healthcare providers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Contact Our Firm</h3>
                      <p className="text-muted-foreground">Time limits apply - don't delay seeking legal advice</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Medical Errors */}
            <section id="types-of-errors" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Types of Medical Errors We Handle</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Brain className="w-8 h-8 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Diagnostic Errors</h3>
                    <p className="text-muted-foreground mb-4">Misdiagnosis, delayed diagnosis, or failure to diagnose serious conditions</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Cancer misdiagnosis</li>
                      <li>• Heart attack/stroke delays</li>
                      <li>• Infection oversight</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Activity className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Surgical Errors</h3>
                    <p className="text-muted-foreground mb-4">Operating room mistakes that cause preventable harm</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Wrong-site surgery</li>
                      <li>• Retained instruments</li>
                      <li>• Organ damage</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Pill className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Medication Errors</h3>
                    <p className="text-muted-foreground mb-4">Wrong drugs, dosages, or dangerous interactions</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Prescription mistakes</li>
                      <li>• Drug interactions</li>
                      <li>• Administration errors</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Baby className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Birth Injuries</h3>
                    <p className="text-muted-foreground mb-4">Preventable injuries during pregnancy, labor, or delivery</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Cerebral palsy</li>
                      <li>• Delayed C-sections</li>
                      <li>• Forceps injuries</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Proving Negligence */}
            <section id="proving-negligence" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Proving Medical Negligence</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Four Key Elements</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-blue-600">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Duty of Care</h4>
                          <p className="text-sm text-muted-foreground">Provider owed you professional care</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-blue-600">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Breach of Duty</h4>
                          <p className="text-sm text-muted-foreground">Care fell below accepted standards</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-blue-600">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Causation</h4>
                          <p className="text-sm text-muted-foreground">Breach directly caused your harm</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-sm font-bold text-blue-600">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold">Damages</h4>
                          <p className="text-sm text-muted-foreground">You suffered actual harm or losses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src={provingNegligenceImage} 
                    alt="Medical negligence investigation" 
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            </section>

            {/* Compensation */}
            <section id="compensation" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Medical Malpractice Compensation</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src={compensationImage} 
                    alt="Medical malpractice compensation" 
                    className="rounded-lg shadow-lg w-full mb-6"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Economic Damages</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Medical expenses (past and future)</li>
                      <li>• Lost wages and earning capacity</li>
                      <li>• Rehabilitation and therapy costs</li>
                      <li>• Life care expenses</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Non-Economic Damages</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Loss of enjoyment of life</li>
                      <li>• Disfigurement or disability</li>
                    </ul>
                  </div>
                  <Link to="/medical-malpractice-compensation-calculator">
                    <Button variant="outline" className="w-full">
                      Calculate Your Potential Compensation
                    </Button>
                  </Link>
                </div>
              </div>
            </section>

            {/* Time Limits */}
            <section id="time-limits" className="content-section">
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <div className="flex items-start gap-3">
                  <Clock className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-800 mb-3">Don't Wait - Time Limits Apply</h2>
                    <p className="text-red-700 mb-4">
                      California medical malpractice cases have strict deadlines. You generally have 3 years from 
                      the date of injury OR 1 year from discovery, whichever comes first.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link to="/medical-malpractice-case-evaluation">
                        <Button size="lg" className="bg-red-600 hover:bg-red-700">
                          Get Free Case Review Now
                        </Button>
                      </Link>
                      <Button variant="outline" size="lg" className="border-red-300 text-red-700 hover:bg-red-50">
                        Call (555) 123-4567
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => toggleFaq(index)}>
                    <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                      <span className="font-semibold">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 border border-gray-200 rounded-lg mt-1">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </section>

            {/* Resources */}
            <section id="resources" className="content-section">
              <h2 className="text-4xl font-bold mb-6">Medical Malpractice Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <FileText className="w-8 h-8 text-blue-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Case Evaluation</h3>
                    <p className="text-muted-foreground mb-4">Get a professional review of your potential medical malpractice case</p>
                    <Link to="/medical-malpractice-case-evaluation">
                      <Button variant="outline" className="w-full">Start Evaluation</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <DollarSign className="w-8 h-8 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Compensation Calculator</h3>
                    <p className="text-muted-foreground mb-4">Estimate potential compensation for your medical malpractice injuries</p>
                    <Link to="/medical-malpractice-compensation-calculator">
                      <Button variant="outline" className="w-full">Calculate Now</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Stethoscope className="w-8 h-8 text-red-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Medical Guidance</h3>
                    <p className="text-muted-foreground mb-4">Understanding your medical condition and treatment options</p>
                    <Link to="/medical-malpractice-medical-guidance">
                      <Button variant="outline" className="w-full">Learn More</Button>
                    </Link>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <Calendar className="w-8 h-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-3">Schedule Consultation</h3>
                    <p className="text-muted-foreground mb-4">Meet with our experienced medical malpractice attorneys</p>
                    <Link to="/schedule-consultation">
                      <Button variant="outline" className="w-full">Book Now</Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Right Sidebar - Sticky "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-blue-900">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <MessageCircle className="w-8 h-8 text-blue-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-blue-900">24/7 Live Chat</h3>
                        <p className="text-sm text-blue-700">Chat with our team anytime</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <Phone className="w-8 h-8 text-green-600 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-blue-900">Call Now</h3>
                        <p className="text-lg font-bold text-green-600">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <Link to="/medical-malpractice-case-evaluation" className="block">
                      <div className="flex items-center gap-3 p-3 bg-blue-600 text-white rounded-lg shadow-sm hover:bg-blue-700 transition-colors">
                        <Scale className="w-8 h-8 flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold">Start Medical Malpractice Evaluation</h3>
                          <p className="text-sm text-blue-100">Free case review form</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">(555) 123-4567</p>
                    <p className="text-sm text-muted-foreground">Free Consultation</p>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    <span>info@californialawfirm.com</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span>Serving all of California</span>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Why Choose Our Medical Malpractice Team
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Experienced medical malpractice attorneys</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">No fees unless we win your case</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Network of medical experts</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Comprehensive case investigation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Personalized attention to your case</span>
                  </div>
                </CardContent>
              </Card>

              {/* Time-Sensitive Warning */}
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-red-800">
                    <AlertTriangle className="w-5 h-5" />
                    Time-Sensitive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-700 mb-4">
                    California medical malpractice cases have strict deadlines. Evidence can disappear quickly. 
                    Don't wait to protect your rights.
                  </p>
                  <Link to="/medical-malpractice-case-evaluation">
                    <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                      Start Case Review Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalMalpractice;