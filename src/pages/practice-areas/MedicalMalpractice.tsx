import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Phone, 
  Mail, 
  Clock, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  Scale, 
  Building, 
  Calculator, 
  DollarSign, 
  TrendingUp, 
  FileText, 
  Stethoscope, 
  Activity, 
  Heart, 
  Users, 
  Award, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  ChevronRight, 
  Star, 
  BookOpen, 
  MessageSquare, 
  UserCheck, 
  Lightbulb, 
  Target, 
  CreditCard, 
  Briefcase, 
  Home
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/medical-malpractice-consultation-hero.jpg';
import negligenceEvidenceImage from '@/assets/practice-areas/medical-negligence-evidence.jpg';
import hospitalLiabilityImage from '@/assets/practice-areas/hospital-liability-investigation.jpg';
import expertTestimonyImage from '@/assets/practice-areas/medical-expert-testimony.jpg';
import insuranceClaimsImage from '@/assets/practice-areas/medical-insurance-claims.jpg';
import caseBuildingImage from '@/assets/practice-areas/medical-case-building.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
}

const MedicalMalpractice: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - would normally send to backend
    console.log('Form submitted:', formData);
  };

  // 50+ FAQ Questions targeting voice search queries
  const faqData = [
    {
      question: "Will my medical malpractice lawyer deal with the insurance companies for me?",
      answer: "Yes, our medical malpractice attorneys handle all communications with insurance companies on your behalf. We understand how insurance companies operate and will protect your rights while negotiating for maximum compensation. You shouldn't have to deal with insurance adjusters while recovering from medical injuries."
    },
    {
      question: "What is medical malpractice in California?",
      answer: "Medical malpractice occurs when a healthcare provider fails to meet the accepted standard of care, resulting in patient harm. This includes misdiagnosis, surgical errors, medication mistakes, birth injuries, and failure to treat conditions properly."
    },
    {
      question: "How much is my medical malpractice case worth?",
      answer: "Case values vary based on injury severity, economic losses, and circumstances. California's MICRA caps limit non-economic damages but economic damages (medical bills, lost wages) are unlimited. We evaluate each case individually to determine potential compensation."
    },
    {
      question: "What is the statute of limitations for medical malpractice in California?",
      answer: "Generally 3 years from injury or 1 year from discovery, whichever comes first. For minors under 6, you have until the child's 8th birthday or 3 years from injury. Don't wait - contact us immediately to protect your rights."
    },
    {
      question: "Do I need expert witnesses for my medical malpractice case?",
      answer: "Yes, California law requires medical expert testimony to establish standard of care, prove breach of that standard, and demonstrate causation. We work with top medical experts across all specialties and handle expert costs upfront."
    },
    {
      question: "Can I sue multiple parties for medical malpractice?",
      answer: "Yes, you can sue doctors, nurses, hospitals, medical groups, and other healthcare providers. We identify all liable parties to maximize your recovery under California's expanded MICRA damage caps."
    },
    {
      question: "What if the doctor admits they made a mistake?",
      answer: "Doctor admissions can strengthen your case, but we still must prove the error fell below standard of care and caused damages. Document any admissions and contact us immediately for legal advice."
    },
    {
      question: "How long does a medical malpractice lawsuit take?",
      answer: "Cases typically take 1-3 years from filing to resolution, depending on complexity, number of defendants, and whether the case settles or goes to trial. We work efficiently to resolve cases as quickly as possible."
    },
    {
      question: "What if I can't afford medical treatment for my injuries?",
      answer: "We help you access medical care through providers who accept treatment liens, meaning they wait for payment until your case settles. We also help navigate insurance options and connect you with specialists."
    },
    {
      question: "Can I sue for misdiagnosis if I didn't suffer permanent harm?",
      answer: "Yes, if misdiagnosis caused damages like unnecessary treatments, medications with side effects, emotional distress, or lost wages. Temporary injuries with significant life impact can still result in substantial compensation."
    },
    {
      question: "What's the difference between medical malpractice and medical negligence?",
      answer: "These terms are often used interchangeably. Medical negligence is the failure to meet standard of care, while medical malpractice is the legal claim arising from that negligence when it causes patient harm."
    },
    {
      question: "Can I sue if my surgery had complications?",
      answer: "Not all complications constitute malpractice. You may have a case if complications resulted from surgical errors like wrong-site surgery, leaving instruments inside you, or failing to monitor post-operative care properly."
    },
    {
      question: "What if I signed a consent form?",
      answer: "Consent forms don't waive your right to sue for malpractice. They acknowledge procedure risks but don't protect against negligent care. You may still have a claim despite signing consent if care was substandard."
    },
    {
      question: "Can I sue a hospital for negligent care?",
      answer: "Yes, hospitals can be liable through vicarious liability for employee negligence or direct liability for institutional failures like inadequate staffing, poor credentialing, or defective equipment."
    },
    {
      question: "What constitutes emergency room malpractice?",
      answer: "ER malpractice includes failure to diagnose heart attacks or strokes, premature discharge, inadequate testing, medication errors, and delayed treatment. Fast-paced environments don't excuse negligence."
    },
    {
      question: "How do I prove my doctor misdiagnosed my condition?",
      answer: "We work with medical experts to review your records and demonstrate how a competent doctor would have reached the correct diagnosis given your symptoms, history, and test results."
    },
    {
      question: "Can I sue for birth injuries during delivery?",
      answer: "Yes, birth injuries often result from negligence during pregnancy, labor, or delivery. This includes failure to monitor fetal distress, delayed C-sections, and improper use of delivery instruments."
    },
    {
      question: "What if my loved one died due to medical malpractice?",
      answer: "Wrongful death allows family members to recover damages for loss of financial support, companionship, and funeral expenses. California's updated MICRA laws significantly increased wrongful death damage caps."
    },
    {
      question: "Can I sue for medication errors?",
      answer: "Yes, medication errors include wrong drugs, incorrect dosages, dangerous interactions, and administration mistakes. Doctors, nurses, pharmacists, and hospitals can all be held liable for medication-related malpractice."
    },
    {
      question: "What if my cancer was misdiagnosed or diagnosed late?",
      answer: "Cancer misdiagnosis can be devastating, leading to advanced disease and reduced survival chances. We work with oncology experts to determine if earlier diagnosis would have improved your prognosis."
    },
    {
      question: "Can I sue for nursing home neglect?",
      answer: "Yes, nursing home neglect constitutes medical malpractice when involving medical care failures like medication errors, inadequate wound care, and neglect leading to infections or pressure sores."
    },
    {
      question: "What should I do if I suspect medical malpractice occurred?",
      answer: "Seek proper medical treatment elsewhere, document everything, request complete medical records, avoid signing hospital documents, and contact our firm immediately for a free consultation."
    },
    {
      question: "How does MICRA affect my medical malpractice case?",
      answer: "MICRA caps non-economic damages but recent 2022 reforms significantly increased caps to $350,000+ for injuries and $500,000+ for wrongful death, rising annually through 2033. Economic damages remain unlimited."
    },
    {
      question: "Can I change lawyers if I'm not satisfied?",
      answer: "Yes, you can change attorneys anytime. We often take over cases when clients aren't receiving proper attention or results. We'll review your case file and determine the best strategy moving forward."
    },
    {
      question: "What if the medical error happened years ago?",
      answer: "Contact us immediately. While California has strict time limits, certain circumstances can extend deadlines including fraudulent concealment, continuing treatment, or foreign objects left in the body."
    },
    {
      question: "Do I have a case if my condition simply didn't improve?",
      answer: "Poor outcomes alone don't constitute malpractice. You must prove negligence caused harm. We evaluate whether poor outcomes resulted from negligence or unavoidable circumstances."
    },
    {
      question: "Can I sue for failure to obtain informed consent?",
      answer: "Yes, if you weren't properly informed about material risks and would have chosen differently with proper information. Providers must disclose risks a reasonable patient would find significant."
    },
    {
      question: "What if multiple doctors were involved in my care?",
      answer: "We investigate each provider's role and determine individual liability. Multiple providers have independent duties, and we may sue various doctors, specialists, and hospitals who contributed to your harm."
    },
    {
      question: "Can I sue for anesthesia errors?",
      answer: "Yes, anesthesia errors can cause brain damage, organ failure, and death. Common errors include dosage mistakes, inadequate monitoring, poor pre-operative evaluation, and equipment failures."
    },
    {
      question: "What if I can't afford to pursue a lawsuit?",
      answer: "You need no money upfront. We work on contingency - you pay nothing unless we win. We advance all costs including expert fees, court costs, and investigation expenses."
    },
    {
      question: "How do I get my medical records?",
      answer: "We help you request complete records from all providers. Sometimes providers delay or limit record production, but we know how to obtain all relevant files including test results and nursing notes."
    },
    {
      question: "Can I sue for radiology errors?",
      answer: "Yes, radiology errors like missed fractures, tumors, or misread scans can have serious consequences. Radiologists must meet professional standards when interpreting medical images."
    },
    {
      question: "What if the hospital says it wasn't their fault?",
      answer: "Hospitals often deny responsibility, but we investigate thoroughly to determine actual liability. Hospitals can be responsible for employee actions, credentialing failures, and institutional negligence."
    },
    {
      question: "Can I sue for plastic surgery errors?",
      answer: "Yes, plastic surgeons must meet professional standards whether for cosmetic or reconstructive procedures. Errors, poor outcomes from negligence, and failure to inform about risks may constitute malpractice."
    },
    {
      question: "What if my child was injured during medical treatment?",
      answer: "Children have special protections under California law with extended time limits for filing claims. We handle pediatric malpractice cases involving birth injuries, delayed diagnosis, and treatment errors."
    },
    {
      question: "Can I sue for dental malpractice?",
      answer: "Yes, dentists and oral surgeons can be held liable for substandard care including unnecessary procedures, nerve damage, infections, and failure to diagnose oral diseases."
    },
    {
      question: "What if my psychiatrist or therapist harmed me?",
      answer: "Mental health providers can commit malpractice through misdiagnosis, improper medication management, boundary violations, and failure to prevent patient harm including suicide."
    },
    {
      question: "Can I sue for chiropractor injuries?",
      answer: "Yes, chiropractors must meet professional standards. Malpractice can include excessive force causing injury, failure to diagnose serious conditions, and treating outside their scope of practice."
    },
    {
      question: "What if my pharmacist gave me the wrong medication?",
      answer: "Pharmacists have duties to dispense correct medications, check for interactions, and verify prescriptions. Pharmacy errors can cause serious adverse reactions and may constitute professional negligence."
    },
    {
      question: "Can I sue for failure to diagnose heart attack?",
      answer: "Yes, failure to diagnose heart attacks in emergency rooms or clinics can be malpractice. We work with cardiology experts to prove negligent failure to recognize heart attack symptoms."
    },
    {
      question: "What if my stroke was misdiagnosed?",
      answer: "Stroke misdiagnosis can lead to permanent disability or death. Time is critical for stroke treatment, and failure to recognize stroke symptoms may constitute medical negligence."
    },
    {
      question: "Can I sue for failure to diagnose cancer?",
      answer: "Yes, delayed cancer diagnosis can significantly impact treatment options and survival rates. We work with oncology experts to prove earlier diagnosis would have improved outcomes."
    },
    {
      question: "What if I was injured by a defective medical device?",
      answer: "Medical device injuries may involve both malpractice and product liability claims. We pursue all responsible parties including device manufacturers, hospitals, and healthcare providers."
    },
    {
      question: "Can I sue for infection acquired in the hospital?",
      answer: "Hospital-acquired infections may constitute malpractice if caused by poor sanitation, inadequate infection control procedures, or failure to properly treat infections once diagnosed."
    },
    {
      question: "What if my lab results were wrong?",
      answer: "Laboratory errors in blood tests, biopsies, or other diagnostic tests can lead to misdiagnosis and improper treatment. Labs and interpreting physicians may be liable for negligent errors."
    },
    {
      question: "Can I sue for ambulance or paramedic negligence?",
      answer: "Yes, emergency medical technicians and paramedics must meet professional standards. Negligent pre-hospital care, delayed response, or treatment errors may constitute malpractice."
    },
    {
      question: "What if my dialysis treatment was negligent?",
      answer: "Dialysis centers and staff must follow strict protocols. Negligent dialysis care can cause infections, improper fluid removal, or equipment failures resulting in serious complications."
    },
    {
      question: "Can I sue for negligent physical therapy?",
      answer: "Yes, physical therapists must provide appropriate care. Negligent therapy causing further injury, inappropriate exercises, or failure to recognize worsening conditions may constitute malpractice."
    },
    {
      question: "What if my eye doctor caused vision loss?",
      answer: "Ophthalmologists and optometrists can commit malpractice through surgical errors, failure to diagnose glaucoma or retinal detachment, and negligent post-operative care causing vision loss."
    },
    {
      question: "Can I sue for negligent addiction treatment?",
      answer: "Yes, addiction treatment providers must meet professional standards. Negligent detoxification, improper medication management, or failure to prevent harm during treatment may constitute malpractice."
    },
    {
      question: "How quickly should I contact a lawyer after medical malpractice?",
      answer: "Contact us immediately. Evidence disappears quickly, medical records can be altered, and witnesses' memories fade. California has strict time limits, so early legal intervention is crucial for protecting your rights."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Will My Medical Malpractice Lawyer Deal with the Insurance Companies for Me? | California | Trembach Law"
        description="Medical malpractice can lead to significant harm. When healthcare negligence results in injuries, you may need to deal with multiple insurance companies. Our experienced medical malpractice attorneys step in for you so you can focus on recovery."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section - Matching Mike Morse Style */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center bg-gray-800"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})` }}
      >
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Content */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              WILL MY MEDICAL MALPRACTICE LAWYER DEAL WITH THE INSURANCE COMPANIES FOR ME?
            </h1>
            <div className="mb-8">
              <div className="bg-red-600 text-white px-6 py-4 rounded-lg mb-4">
                <div className="text-center">
                  <div className="text-sm font-semibold">DEDICATED TO</div>
                  <div className="text-3xl font-bold">MAXIMUM RESULTS</div>
                  <div className="text-sm font-semibold">NO FEES UNTIL WE WIN</div>
                </div>
              </div>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
                asChild
              >
                <Link to="/medical-malpractice-case-evaluation">
                  START YOUR FREE CASE REVIEW
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/95 backdrop-blur p-8 rounded-lg shadow-2xl">
            <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">Do I Have a Case?</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name *</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name *</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                GET MY FREE CONSULTATION
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4 text-center">
              By submitting your contact information, you agree that we may contact you by telephone and email.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        
        {/* Opening Paragraph with Image */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-2">
            <div className="flex gap-6 mb-8">
              <img 
                src={negligenceEvidenceImage} 
                alt="Medical negligence evidence documentation"
                className="w-48 h-36 object-cover rounded-lg flex-shrink-0"
              />
              <div>
                <p className="text-lg leading-relaxed mb-4">
                  Medical malpractice can lead to significant physical harm and devastating consequences for patients and their families. These cases are often more complex than other personal injury claims. When medical negligence results in injuries, you may need to deal with more than one insurance company.
                </p>
                <p className="text-lg leading-relaxed">
                  No one enjoys filing a claim or negotiating with insurance companies. While it may seem reasonable to settle for the quick compensation they offer, the insurance companies are not looking out for you. When you're trying to heal and get your life on track, it can help to have someone on your side to deal with the insurers. <strong>Trembach Law attorneys</strong> step in for you so that you can focus on recovery.
                </p>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div>
            <Card className="bg-blue-50 border-blue-200 p-6">
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center">Ready to win your case?</h3>
              <p className="text-center text-blue-600 mb-4">
                Fill out our quick contact form below. Within 2 hours we'll let you know if you have a case. It's that simple.
              </p>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" asChild>
                <Link to="/medical-malpractice-case-evaluation">
                  Start Free Case Review
                </Link>
              </Button>
            </Card>
          </div>
        </div>

        {/* Why You Might Not Want To Deal With Insurance Companies Alone */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why You Might Not Want To Deal With the Insurance Companies Alone</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                In California, medical malpractice cases involve complex insurance scenarios. Healthcare providers carry professional liability insurance, and hospitals have institutional coverage. Each may try to shift blame to minimize their exposure. Neither is in business to protect your interests and ensure you receive fair compensation.
              </p>
              <p className="text-lg leading-relaxed">
                Insurance companies answer to their shareholders rather than their customers. They are in the market to make a profit, not to fairly compensate injured patients.
              </p>
            </div>
            <img 
              src={hospitalLiabilityImage} 
              alt="Hospital liability investigation" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>

          <h3 className="text-2xl font-semibold mb-4">Quick Settlement Offers</h3>
          <p className="text-lg leading-relaxed mb-6">
            Though the California Department of Insurance regulates the state's insurance industry, companies understand how to operate within the law while reducing payouts. One of their first tactics is offering quick settlements designed to tempt you into accepting less than you deserve.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            They know that if you have mounting medical bills and can't work due to your injuries, you may accept their lowball offer. However, once you accept, you cannot pursue additional compensation later. If your expenses continue growing, you'll pay from your own funds.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Complex Medical Malpractice Cases</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Medical malpractice cases involve intricate medical and legal standards. California's Medical Injury Compensation Reform Act (MICRA) creates additional complexity with damage caps and procedural requirements. Multiple parties may share liability:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg mb-6">
                <li>Individual physicians and specialists</li>
                <li>Hospitals and medical centers</li>
                <li>Nursing staff and technicians</li>
                <li>Medical device manufacturers</li>
                <li>Pharmaceutical companies</li>
                <li>Laboratory services</li>
              </ul>
              <p className="text-lg leading-relaxed">
                Each entity may have separate insurance coverage, but they won't voluntarily offer compensation. Without knowing how to prove medical negligence and establish damages, you may receive inadequate settlements.
              </p>
            </div>
            <img 
              src={expertTestimonyImage} 
              alt="Medical expert testimony preparation" 
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* How a Medical Malpractice Lawyer Can Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">How a Medical Malpractice Lawyer Can Help</h2>
          
          <p className="text-lg leading-relaxed mb-8">
            A <Link to="/medical-malpractice-case-evaluation" className="text-blue-600 hover:text-blue-800 underline">medical malpractice lawyer</Link> does more than deal with insurance companies. While handling communications and negotiations relieves significant stress, an experienced attorney's comprehensive approach dramatically improves your chances of receiving fair compensation.
          </p>

          <h3 className="text-2xl font-semibold mb-6">Building Your Case</h3>
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <img 
              src={caseBuildingImage} 
              alt="Medical malpractice case building process" 
              className="w-full h-64 object-cover rounded-lg"
            />
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Your lawyer helps build a solid case by gathering crucial evidence that insurance companies often overlook or downplay. Our legal team may:
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Obtain complete medical records from all providers</li>
                <li>Consult with medical experts in relevant specialties</li>
                <li>Analyze hospital policies and procedures</li>
                <li>Review medical literature and standards of care</li>
                <li>Calculate current and future economic losses</li>
                <li>Document non-economic damages like pain and suffering</li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Establishing Medical Negligence</h3>
          <p className="text-lg leading-relaxed mb-6">
            Proving medical negligence requires demonstrating four key elements: duty of care, breach of standard care, causation, and damages. A medical malpractice attorney understands the evidence needed and works with qualified medical experts to establish each element. We dig deeper to uncover whether multiple parties share responsibility, potentially increasing your total recovery.
          </p>

          <h3 className="text-2xl font-semibold mb-4">Communicating With Insurance Companies</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-4">
                Insurance communications alone justify hiring an attorney. Insurance representatives ask leading questions designed to elicit responses that jeopardize your claim. A single poorly phrased answer can be used against you throughout the process.
              </p>
              <p className="text-lg leading-relaxed">
                Your medical malpractice lawyer knows how to communicate with insurers while protecting your rights and preserving your claim's value.
              </p>
            </div>
            <img 
              src={insuranceClaimsImage} 
              alt="Medical malpractice insurance claims processing" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Negotiating Your Settlement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Negotiating Your Medical Malpractice Settlement</h2>
          <p className="text-lg leading-relaxed mb-6">
            No matter how strong your case, insurance companies rarely agree to full compensation initially. Skilled negotiation is essential. Your <Link to="/medical-malpractice-compensation-calculator" className="text-blue-600 hover:text-blue-800 underline">medical malpractice lawyer</Link> has experience handling complex negotiations and won't be intimidated by insurance company pressure tactics.
          </p>
          <p className="text-lg leading-relaxed">
            Insurance companies understand California's comparative negligence rules and MICRA damage caps, using these laws to justify lower settlements. When you have an attorney with in-depth understanding of medical malpractice law, you can be assured the insurance company won't unfairly deny or reduce your rightful compensation.
          </p>
        </section>

        {/* When You Don't Reach a Satisfactory Settlement */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What Your Options Are When You Don't Reach a Satisfactory Settlement</h2>
          <p className="text-lg leading-relaxed">
            If insurance companies refuse adequate compensation, you may need to file a lawsuit. California allows personal injury lawsuits when you suffer serious injuries due to medical negligence. You may also need litigation if insurance coverage limits are insufficient to cover your total damages, which often occurs in severe medical malpractice cases.
          </p>
        </section>

        {/* Who You Can Call for Help */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Who You Can Call for Help With Your Medical Malpractice Claim</h2>
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Trembach Law</strong>, we assist clients throughout the medical malpractice claims process. If you sustained injuries due to healthcare negligence, we help you deal with insurance companies to secure the compensation you deserve. We provide individualized attention, beginning with a thorough and honest case evaluation.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            We understand how financially and emotionally devastating medical malpractice can be, and we support you every step of the way. Trembach Law operates on a contingency fee basis - we collect no fees until we win your case.
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg" asChild>
              <Link to="/medical-malpractice-case-evaluation">
                Get Your Free Case Evaluation Today
              </Link>
            </Button>
            <p className="text-lg mt-4">You have nothing to lose, but you may have much to gain.</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Medical Malpractice</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg">
                  <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Bottom Contact Section */}
        <section className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Call (818) 123-4567 24 hours a day, 7 days a week</h2>
          <p className="text-xl mb-8">You pay nothing unless we WIN!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:8181234567" className="flex items-center justify-center text-lg font-bold">
                <Phone className="mr-2 h-5 w-5" />
                Call (818) 123-4567
              </a>
            </Button>
            <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
              <Link to="/medical-malpractice-case-evaluation">
                Start Free Case Review
              </Link>
            </Button>
          </div>
        </section>

        {/* Other Practice Areas */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Other Practice Areas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Car Accident Lawyers</h3>
              <p className="text-muted-foreground mb-4">
                Injured in a car accident? Our experienced attorneys fight for maximum compensation for your injuries, lost wages, and pain and suffering.
              </p>
              <Button variant="outline" asChild>
                <Link to="/practice-areas/car-accidents">
                  Let us help you today
                </Link>
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-4">Truck Accident Lawyers</h3>
              <p className="text-muted-foreground mb-4">
                Commercial truck accidents often result in catastrophic injuries. We have the resources and expertise to take on trucking companies and their insurers.
              </p>
              <Button variant="outline" asChild>
                <Link to="/practice-areas/truck-accidents">
                  Let us help you today
                </Link>
              </Button>
            </Card>
          </div>
        </section>

      </main>
    </div>
  );
};

export default MedicalMalpractice;
