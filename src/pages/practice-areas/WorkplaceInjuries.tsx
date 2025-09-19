import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  HardHat,
  Wrench,
  Factory,
  Calculator,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/workplace-injuries-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/workplace-immediate-steps.jpg';
import injuryTypesImage from '@/assets/practice-areas/workplace-injury-types.jpg';
import thirdPartyImage from '@/assets/practice-areas/workplace-third-party.jpg';
import compensationImage from '@/assets/practice-areas/workplace-compensation.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const WorkplaceInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'injury-types', label: 'INJURY TYPES', icon: HardHat },
    { id: 'third-party', label: 'THIRD-PARTY LIABILITY', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // 50 FAQ Questions about Workplace Injuries
  const faqData = [
    {
      question: "What damages can I recover in a third-party workplace injury lawsuit?",
      answer: "Third-party claims allow full compensation including: 100% of lost wages (past and future), all medical expenses, pain and suffering, emotional distress, permanent disability/disfigurement, loss of enjoyment of life, loss of consortium for spouses, punitive damages for egregious conduct, future care costs, vocational retraining, and home/vehicle modifications. This far exceeds workers' comp which only covers medical care and 2/3 of wages with no pain and suffering."
    },
    {
      question: "What's the time limit to file a workplace injury claim in California?",
      answer: "California generally allows 2 years from the injury date to file a personal injury lawsuit against third parties. However, different deadlines apply: 6 months for government entity claims, 1 year for some defective product claims, 3 years for toxic exposure/latent injuries, and extended time for minors. Workers' comp has separate deadlines: report to employer within 30 days, file claim within 1 year. Don't delay - evidence disappears and witnesses forget."
    },
    {
      question: "Who can be held liable as a third party in workplace accidents?",
      answer: "Common third parties include: subcontractors and general contractors on construction sites, property owners who fail to maintain safe premises, equipment manufacturers (defective machinery/tools), negligent drivers who cause work-related vehicle accidents, architects/engineers whose designs create hazards, maintenance companies, security companies, chemical/material suppliers, temporary staffing agencies, and customers/clients who assault workers. Anyone besides your employer and co-workers potentially faces liability."
    },
    {
      question: "What if I was partially at fault for my workplace injury?",
      answer: "California follows pure comparative negligence, meaning you can recover even if 99% at fault, though your award reduces by your fault percentage. For example, if damages are $500,000 and you're 30% at fault, you receive $350,000. Workers' comp provides benefits regardless of fault. In third-party claims, defendants will try to shift blame to you - skilled attorneys minimize your assigned fault percentage through evidence and advocacy."
    },
    {
      question: "How do OSHA violations affect my workplace injury claim?",
      answer: "OSHA violations provide powerful evidence of negligence in third-party claims. Citations prove the defendant breached safety standards causing your injury. Serious violations can establish 'negligence per se' - automatic proof of negligence. Willful violations support punitive damages. In workers' comp, serious and willful violations by employers can increase benefits by 50%. We obtain OSHA inspection reports, citations, and investigation files to strengthen your claim."
    },
    {
      question: "Do I have to pay back workers' comp if I win a third-party lawsuit?",
      answer: "Workers' comp insurers have subrogation rights to recover benefits paid from your third-party settlement. However, California law provides protections: insurers must share attorney fees/costs proportionally, liens often reduce through negotiation, future medical credits apply, and the 'made whole' doctrine may eliminate reimbursement if you're not fully compensated. Strategic settlement allocation between economic/non-economic damages minimizes reimbursement. We handle lien negotiations to maximize your net recovery."
    },
    {
      question: "What if my employer doesn't have workers' compensation insurance?",
      answer: "Uninsured employers face serious consequences: you can sue them directly in civil court for full damages (bypassing workers' comp limits), file a claim with California's Uninsured Employers Benefits Trust Fund for benefits, and the employer faces criminal prosecution and stop-work orders. Personal assets become available for collection. Labor Code § 3706 presumes employer negligence caused injury, shifting burden of proof. This violation alone often leads to quick settlements."
    },
    {
      question: "Can I file a claim if exposed to toxic chemicals but not sick yet?",
      answer: "Yes, through medical monitoring claims. If exposed to hazardous substances creating increased disease risk, you can recover costs of future medical surveillance to detect early disease onset. California recognizes medical monitoring for asbestos, silica, benzene, and other toxins. Early detection improves treatment outcomes. Additionally, the statute of limitations may not begin until disease manifests (discovery rule), preserving future claims. Document all exposures now."
    },
    {
      question: "What if I'm an independent contractor injured at work?",
      answer: "True independent contractors aren't covered by workers' comp but can sue any party whose negligence caused injury, including the hiring company. However, California's ABC test strictly limits independent contractor classification - many 'contractors' are actually employees entitled to workers' comp. Misclassification itself creates liability. Gig workers (Uber, DoorDash) face unique challenges. We analyze your actual work relationship to determine all available claims."
    },
    {
      question: "Can I sue if injured by defective safety equipment?",
      answer: "Yes, defective safety equipment creates strong product liability claims against manufacturers, distributors, and sellers. This includes faulty harnesses, defective respirators, failing safety guards, malfunctioning emergency stops, and inadequate protective gear. Strict liability applies - you need only prove the defect existed and caused injury. The employer's workers' comp immunity doesn't protect equipment manufacturers. Failure of safety equipment often results in severe injuries justifying substantial damages."
    },
    {
      question: "What if injured in a vehicle accident while working?",
      answer: "Work-related vehicle accidents create multiple claims: workers' comp from your employer, third-party claim against the at-fault driver, uninsured/underinsured motorist coverage if applicable, and potentially claims against vehicle manufacturers for defects. This includes delivery drivers, traveling between job sites, or running work errands. The 'going and coming' rule has exceptions. Commercial policies often provide higher coverage limits than personal auto insurance, increasing recovery potential."
    },
    {
      question: "How are construction site injuries handled with multiple contractors?",
      answer: "Construction sites involve complex liability with general contractors, subcontractors, property owners, architects, and equipment suppliers potentially liable. General contractors often have non-delegable duties for site safety regardless of subcontractor involvement. Each entity's insurance provides potential recovery. California's Privette doctrine limits but doesn't eliminate contractor liability. We investigate all parties' roles, safety responsibilities, and insurance coverage to maximize recovery sources."
    },
    {
      question: "What if my injury aggravated a pre-existing condition?",
      answer: "The 'eggshell plaintiff' rule means defendants take victims as they find them. If workplace injury aggravates, accelerates, or lights up a pre-existing condition, you recover for all resulting harm. Workers' comp covers aggravation of pre-existing conditions. Third-party defendants remain fully liable even if someone else may not have been injured as severely. Medical evidence distinguishing new injury from pre-existing condition is crucial. Don't let insurance companies blame everything on prior conditions."
    },
    {
      question: "Can family members sue if I'm killed in a workplace accident?",
      answer: "Yes, families can pursue: workers' comp death benefits (burial costs and dependents' support), wrongful death lawsuits against third parties for full damages, and survival actions for the deceased's pre-death pain and suffering. Wrongful death damages include lost financial support, household services value, and loss of companionship. Spouses, children, and financial dependents can recover. California's 2-year statute of limitations applies. These cases require sensitive handling while aggressively pursuing maximum recovery."
    },
    {
      question: "What if I'm injured by workplace violence?",
      answer: "Workplace violence creates multiple claims: workers' comp covers most workplace assaults, third-party claims against attackers (customers, patients, criminals), premises liability against property owners for inadequate security, and potentially employer liability for negligent hiring/retention of dangerous employees. California's new Workplace Violence Prevention law (SB 553) creates additional employer duties. Criminal prosecution doesn't prevent civil claims. Victim compensation funds may provide additional recovery."
    },
    {
      question: "How much is my workplace injury case worth?",
      answer: "Case value depends on injury severity, medical expenses, lost wages, permanent disability, pain and suffering, and defendant liability. Minor injuries may settle for tens of thousands while catastrophic injuries reach millions. Factors include: total medical costs (past and future), wage loss and earning capacity, disability rating, age and life expectancy, pain and suffering multipliers, available insurance coverage, strength of liability evidence, and comparative fault allocation. We evaluate all factors to maximize recovery."
    },
    {
      question: "Should I accept the insurance company's settlement offer?",
      answer: "Never accept initial offers without legal consultation. Insurance companies offer quick, lowball settlements hoping you'll accept before understanding your case's true value. Early offers rarely account for future medical needs, full wage loss, or pain and suffering. Once you accept and sign a release, you cannot pursue additional compensation even if injuries worsen. Our former defense attorney experience reveals their tactics. We evaluate offers and negotiate maximum settlements."
    },
    {
      question: "What if I'm afraid to report my injury due to immigration status?",
      answer: "California protects all workers regardless of immigration status. You're entitled to workers' comp benefits and can pursue third-party claims. Labor Code § 1171.5 prohibits employers from threatening immigration-related retaliation for asserting workplace rights. Courts exclude immigration status from injury cases as irrelevant and prejudicial. Employers who threaten deportation face additional liability. Your safety and compensation rights don't depend on documentation status. We protect client confidentiality."
    },
    {
      question: "Can I get fired for filing a workplace injury claim?",
      answer: "No, firing you for filing a workers' comp or injury claim is illegal retaliation under Labor Code § 132a. Retaliation includes termination, demotion, reduction in hours, harassment, or any adverse employment action. If retaliated against, you can receive: reinstatement with back pay, increased workers' comp benefits (up to $10,000), attorney fees, and potential wrongful termination lawsuit with additional damages. Document all employer actions following your injury report. Retaliation claims strengthen your overall case and often lead to larger settlements."
    },
    {
      question: "What if I didn't report my injury immediately?",
      answer: "Late reporting doesn't necessarily bar your claim. Workers' comp requires reporting 'as soon as practicable' - reasonable delays due to medical emergencies, unconsciousness, or not immediately recognizing injury severity are often acceptable. Third-party claims have separate notice requirements and deadlines. However, delayed reporting weakens your case as evidence deteriorates and employer defenses strengthen. Report as soon as possible and document reasons for any delay. Medical records showing treatment can help establish injury timing."
    },
    {
      question: "What constitutes a serious and willful misconduct by an employer?",
      answer: "Serious and willful misconduct requires the employer to know their conduct will likely cause serious injury and deliberately ignore that risk. Examples include: knowingly requiring unsafe work without protection, deliberately removing safety equipment, ordering work with knowledge of specific safety violations, and continuing dangerous practices after repeated warnings. If proven, workers' comp benefits increase by 50% and additional penalties apply. This is difficult to prove but significantly increases compensation when established."
    },
    {
      question: "Can I choose my own doctor for workplace injuries?",
      answer: "Workers' comp limits your doctor choice to pre-designated networks, but third-party claims allow complete physician freedom. If you notify your employer in writing before injury, you can choose your doctor for workers' comp treatment. Emergency care allows any provider. After 30 days with the insurance doctor, you can request a one-time change within the network. Poor care or disputes about treatment may justify additional changes. Independent medical evaluations often favor insurance companies."
    },
    {
      question: "What evidence should I preserve after a workplace injury?",
      answer: "Critical evidence includes: photographs of accident scene, equipment, and hazards, medical records and doctor reports, witness contact information and statements, equipment maintenance records, safety training records, OSHA reports and citations, surveillance video footage, incident reports, weather conditions if relevant, and personal injury documentation through photos and journals. Evidence disappears quickly - document everything immediately. Your attorney can issue preservation notices requiring defendants to maintain evidence."
    },
    {
      question: "How does workers' compensation affect my third-party claim?",
      answer: "Workers' comp and third-party claims proceed simultaneously but separately. Workers' comp provides immediate medical coverage and wage replacement while your third-party case develops. This ensures you receive treatment and support during litigation. However, workers' comp insurers have subrogation rights to recover benefits from third-party settlements. Strategic coordination between both claims maximizes total recovery while protecting your rights in each proceeding."
    },
    {
      question: "What if the equipment causing my injury was recalled after my accident?",
      answer: "Post-accident recalls provide powerful evidence of defects and manufacturer knowledge. Recalls admit the product poses unreasonable safety risks, strengthening your product liability claim. This evidence often leads to favorable settlements as it undermines manufacturer defenses. However, recalls don't automatically prove your specific injury resulted from the defect - medical and engineering evidence must still connect the recall issues to your injuries. Timing of manufacturer knowledge is crucial for punitive damages."
    },
    {
      question: "Can I sue if injured due to lack of proper safety training?",
      answer: "Inadequate safety training creates liability for third parties with training duties, including general contractors, safety consultants, and training companies. Employers have workers' comp immunity for training failures, but third parties don't. OSHA requires specific training for hazardous work - violations establish negligence. Temporary staffing agencies may face liability for inadequate worker preparation. Poor training combined with complex equipment or hazardous conditions strengthens claims against multiple defendants."
    },
    {
      question: "What if I'm a union member injured at work?",
      answer: "Union membership doesn't limit your injury claims. You still have workers' comp rights and can pursue third-party claims. Union contracts may provide additional benefits or grievance procedures, but can't waive your statutory rights. Some unions have supplemental injury benefits or legal assistance programs. Union safety representatives can help document hazards and violations. Collective bargaining agreements might affect arbitration requirements for employment disputes but not personal injury claims against third parties."
    },
    {
      question: "How do scaffold collapses get investigated for liability?",
      answer: "Scaffold accidents require immediate investigation before evidence disappears. Potential defendants include scaffold manufacturers, rental companies, erection contractors, and general contractors. OSHA investigates serious accidents and issues citations providing liability evidence. Expert engineers examine scaffold design, assembly, and maintenance. Weather, overloading, and improper modification often contribute. Multiple parties typically share liability. Scaffold company insurance and general contractor coverage provide multiple recovery sources. Photos and witness statements must be obtained immediately."
    },
    {
      question: "What compensation is available for occupational diseases?",
      answer: "Occupational diseases like silicosis, asbestosis, and chemical poisoning qualify for workers' comp and third-party claims. Workers' comp covers medical treatment and disability benefits. Third-party claims against manufacturers of toxic substances often provide larger recovery. Latent diseases may not manifest for years - the statute of limitations typically begins when disease is diagnosed, not exposure date. Medical monitoring claims may recover future surveillance costs even before disease develops."
    },
    {
      question: "Can I sue for repetitive stress injuries?",
      answer: "Repetitive stress injuries (RSI) qualify for workers' comp benefits and potential third-party claims. If defective equipment, poor ergonomic design, or inadequate workplace setup caused your RSI, manufacturers and designers face liability. Workers' comp covers carpal tunnel, back injuries, and other repetitive trauma. Third-party claims require proving specific equipment defects or design failures caused your condition. Cumulative injuries are harder to prove but still recoverable with proper medical evidence."
    },
    {
      question: "What if I'm injured by a co-worker's assault?",
      answer: "Co-worker assaults generally fall under workers' comp since they occur at work, but exceptions exist. If the assault is purely personal and unrelated to work, you may sue the co-worker directly. Employer liability depends on whether they knew of violent tendencies and failed to protect you. Third-party liability may exist if inadequate security, drug/alcohol policies, or negligent hiring contributed. Criminal charges against the co-worker don't prevent civil claims."
    },
    {
      question: "How are crane accidents investigated for liability?",
      answer: "Crane accidents involve multiple potential defendants: crane manufacturers, maintenance companies, operators, general contractors, and property owners. OSHA investigates serious crane accidents and issues detailed reports. Expert analysis examines mechanical failures, operator error, inadequate maintenance, overloading, and environmental factors. Crane inspection records, operator certifications, and maintenance logs provide crucial evidence. Multiple insurance policies typically apply. These cases often result in substantial settlements due to severe injuries and clear liability evidence."
    },
    {
      question: "What if injured by falling tools or materials?",
      answer: "Falling object injuries require investigation of site safety protocols, tool securement, and overhead work procedures. Potential defendants include contractors working above, tool manufacturers (if defective), and general contractors responsible for site safety. OSHA has specific requirements for overhead protection and tool handling. Workers' comp covers the injury while third-party claims pursue additional recovery. Security cameras and witness testimony help establish how objects fell and identify responsible parties."
    },
    {
      question: "Can I sue for slip and fall accidents at work?",
      answer: "Workplace slip and falls qualify for workers' comp, with third-party claims possible against property owners, maintenance companies, or contractors who created hazardous conditions. If you're working at a client's location and they failed to maintain safe conditions, they may face premises liability. Cleaning companies, snow removal contractors, and maintenance firms often face liability. Document the hazard immediately with photos and witness statements."
    },
    {
      question: "What if injured by exploding equipment?",
      answer: "Equipment explosions create strong product liability claims against manufacturers, especially if caused by design defects, manufacturing flaws, or inadequate warnings. Pressure vessel failures, electrical explosions, and chemical reactions often involve multiple defendants. OSHA and fire department investigations provide crucial evidence. Expert analysis determines causes and responsible parties. These catastrophic events typically result in severe injuries justifying substantial damages against multiple defendants with significant insurance coverage."
    },
    {
      question: "How do heat-related workplace injuries get compensated?",
      answer: "Heat exhaustion and heat stroke qualify for workers' comp benefits. Third-party liability may exist if cooling equipment manufacturers provided defective systems or contractors failed to provide adequate protection. OSHA has heat illness prevention requirements - violations strengthen claims. Employers with outdoor workers face heightened duties. Workers' comp covers medical treatment and lost wages while third-party claims pursue additional damages for preventable heat injuries."
    },
    {
      question: "What if injured due to inadequate lighting?",
      answer: "Poor lighting contributing to workplace injuries creates liability for property owners, electrical contractors, and potentially lighting manufacturers. OSHA has illumination standards for various work environments. If working at a client's location with inadequate lighting, premises liability claims may apply. Workers' comp covers the injury while pursuing third-party claims against parties responsible for lighting. Documentation of lighting levels and photographs of conditions strengthen claims."
    },
    {
      question: "Can I claim for injuries during required safety training?",
      answer: "Injuries during mandatory safety training qualify for workers' comp as work-related activities. If training equipment was defective or training providers were negligent, third-party claims may apply. This includes injuries during confined space training, fall protection courses, or equipment operation training. Training companies and equipment manufacturers face potential liability. Poor facility conditions where training occurs may create premises liability claims."
    },
    {
      question: "What if injured by unmarked hazards?",
      answer: "Unmarked workplace hazards violate OSHA standards and create liability for parties responsible for warning workers. This includes unmarked excavations, chemical hazards, electrical dangers, and fall risks. Property owners, general contractors, and hazard creators may face liability. Workers' comp provides immediate benefits while pursuing third-party claims. Lack of proper signage, barriers, or warnings strengthens negligence claims. Document the absence of warnings immediately."
    },
    {
      question: "How are forklift accidents handled legally?",
      answer: "Forklift accidents may involve multiple defendants: forklift manufacturers (if defective), maintenance companies, operators (if not co-workers), and companies controlling the work area. OSHA has specific forklift operation requirements. Workers' comp covers injuries while third-party claims pursue additional recovery. Operator certification, maintenance records, and OSHA compliance are key evidence. Forklift modifications or safety device removals strengthen liability claims."
    },
    {
      question: "What if injured by contaminated water at work?",
      answer: "Contaminated water exposure creates multiple potential claims. Workers' comp covers immediate illness while third-party claims may target water suppliers, treatment companies, or equipment manufacturers. This includes Legionnaires' disease, chemical contamination, and bacterial infections. Property owners maintaining water systems may face premises liability. Document all symptoms and medical treatment immediately. Water testing results and CDC investigations provide crucial evidence."
    },
    {
      question: "Can I sue for noise-induced hearing loss?",
      answer: "Occupational hearing loss qualifies for workers' comp benefits including medical treatment and permanent disability payments. Third-party claims may target equipment manufacturers if noise levels exceeded safe limits or hearing protection was defective. OSHA noise exposure standards establish liability benchmarks. Audiogram testing documents progression of hearing loss. Equipment modification or removal of noise controls strengthens claims against multiple defendants."
    },
    {
      question: "What if injured in workplace parking lots?",
      answer: "Parking lot injuries depend on who controls the lot and caused the dangerous condition. If your employer owns the lot, workers' comp typically applies. If a third party (property manager, maintenance company) controls the lot, premises liability claims are possible. This includes potholes, inadequate lighting, ice/snow removal failures, and security issues. Document conditions immediately and determine lot ownership and maintenance responsibilities."
    },
    {
      question: "How do electrocution cases work with multiple parties?",
      answer: "Electrical injuries often involve utilities, electrical contractors, equipment manufacturers, and property owners. OSHA investigates serious electrical accidents. Utility companies face liability for unmarked lines or power surges. Electrical contractors may have improper installation or maintenance. Equipment manufacturers face product liability for defective electrical components. Multiple insurance policies and deep-pocket defendants typically result in substantial settlements for these severe injuries."
    },
    {
      question: "What if injured due to missing safety guards?",
      answer: "Missing or removed safety guards violate OSHA standards and create strong liability against parties responsible for equipment maintenance. This includes manufacturers who failed to provide adequate guards, employers who removed guards, and maintenance companies who failed to replace them. Workers' comp covers immediate benefits while pursuing third-party claims. Documentation of missing guards and OSHA citations strengthen claims against multiple responsible parties."
    },
    {
      question: "Can I recover for psychological trauma from workplace accidents?",
      answer: "Psychological trauma from workplace accidents qualifies for workers' comp psychiatric injury benefits if you can prove the work stress caused your condition. Third-party claims include pain and suffering damages for PTSD, anxiety, and depression. Witnessing co-worker deaths or suffering catastrophic injuries often causes severe psychological harm. Mental health treatment records document damages. Psychological injuries add substantial value to third-party claims beyond physical harm."
    },
    {
      question: "What if I'm injured during disaster response work?",
      answer: "Emergency response workers injured during disasters face complex workers' comp and liability issues. Federal disaster declarations may affect benefits and deadlines. Third-party contractors, equipment suppliers, and property owners may face liability despite emergency conditions. Volunteer responders may lack workers' comp coverage but can pursue third-party claims. Document dangerous conditions and equipment failures during emergency response work. Special federal programs may provide additional benefits."
    },
    {
      question: "How do multi-state workplace injuries get handled?",
      answer: "Workers injured while traveling between states for work may file workers' comp in multiple jurisdictions. California's generous workers' comp system often applies if you're a California employee. Third-party claims file where the injury occurred or where defendants are located. Choice of law issues affect damages and deadlines. Interstate truckers and traveling workers face unique challenges requiring analysis of multiple state laws and insurance coverage."
    },
    {
      question: "What if injured by security failures at work?",
      answer: "Inadequate workplace security leading to injuries creates premises liability against property owners and security companies. This includes inadequate lighting, broken locks, missing cameras, and insufficient security personnel. Workers' comp covers assault injuries while third-party claims pursue additional recovery. Businesses have duties to protect workers from foreseeable criminal acts. Prior crime reports and security assessments establish notice of dangers and liability for preventable violence."
    },
    {
      question: "Can I claim for injuries in company vehicles?",
      answer: "Company vehicle accidents create multiple claims: workers' comp, third-party auto liability against other drivers, and potentially product liability against vehicle manufacturers. Commercial vehicle policies often provide higher coverage than personal auto insurance. Vehicle maintenance companies may face liability for mechanical failures. Fleet management companies controlling vehicle safety may also bear responsibility. These accidents often result in substantial settlements due to multiple insurance sources."
    },
    {
      question: "What should I know about federal contractor workplace injuries?",
      answer: "Federal contractors often have additional safety requirements and insurance mandates beyond state law. Defense Base Act coverage may apply for overseas work. Federal facilities have unique safety protocols and investigation procedures. Government immunity may limit some claims while contractor liability remains. Multiple federal agencies may investigate serious accidents providing extensive documentation. Federal contractor insurance requirements often result in higher policy limits and better coverage for injury victims."
    }
  ];

  return (
    <>
      <SEO 
        title="California Workplace Injury Lawyers | Third-Party Claims Beyond Workers' Comp"
        description="Injured at work? Beyond workers' comp - pursue third-party claims for full compensation. Expert workplace injury attorneys fight for maximum recovery. Free consultation."
        canonical="/practice-areas/workplace-injuries"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Workplace Injury Legal Services",
          "description": "Expert legal representation for California workplace injury cases, specializing in third-party liability claims beyond workers' compensation"
        }}
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="hero-content text-center px-6 max-w-5xl mx-auto">
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Injured at Work? <span className="text-red-400">Go Beyond Workers' Comp</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
            While workers' compensation covers only 2/3 of wages and no pain & suffering, third-party claims unlock FULL compensation for California workplace injuries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              asChild
            >
              <Link to="/workplace-injuries-case-evaluation">Get Free Evaluation →</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              asChild
            >
              <Link to="tel:8181234567" className="text-white hover:text-red-600">Call (818) 123-4567</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-red-50 border-b border-red-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <div className="flex overflow-x-auto space-x-2 pb-2">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      if (tab.id === 'evaluation') {
                        window.location.href = '/workplace-injuries-case-evaluation';
                      } else {
                        scrollToSection(tab.id);
                      }
                    }}
                    className={`flex items-center px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-red-600 text-white shadow-lg'
                        : 'bg-white text-red-600 hover:bg-red-100 border border-red-200'
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Workplace Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When workplace injuries occur due to third-party negligence, we fight for full compensation beyond workers' compensation limits. Our former defense experience reveals insurance company tactics, maximizing your recovery while you focus on healing.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Workplace injuries can be life-altering events. At Trembach Law Firm, we understand the urgency of workplace injury cases and the devastating impact they have on victims and families. With our background in defense work, we know exactly how employers, contractors, and their insurance companies minimize claims.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our California Workplace Injury Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Former Defense Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our defense background reveals exactly how employers, contractors, and insurance companies build defenses against workplace injury claims and minimize payouts.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <HardHat className="w-5 h-5 mr-2 text-primary" />
                          OSHA & Safety Law Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California OSHA regulations, safety standards, and workplace compliance requirements that create third-party liability.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-2">Understanding Third-Party Liability in Workplace Injuries</h4>
                    <p className="text-red-700 mb-4">
                      While California's workers' compensation system prevents direct lawsuits against employers under Labor Code § 3600's "exclusive remedy" rule, this protection has critical exceptions. When someone other than your employer causes your workplace injury, you can pursue both workers' compensation AND a third-party personal injury lawsuit, dramatically increasing your potential recovery.
                    </p>
                    <p className="text-red-700">
                      Every year, over 363,000 California workers suffer injuries on the job, with construction accounting for 75 fatal accidents in 2022 alone. While workers' compensation provides basic benefits, it leaves injured workers dramatically undercompensated.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>


            {/* Immediate Steps Section */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What To Do After a Workplace Injury</h2>
              
              <div className="mb-8">
                <img 
                  src={whatToDoImage} 
                  alt="Immediate steps after workplace injury - medical care, documentation, and legal protection" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-6">
                  Taking the right steps immediately after a workplace injury can protect your health and legal rights. Here's what you need to do:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-800">
                        <Heart className="w-5 h-5 mr-2" />
                        1. Seek Medical Care
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-green-700">
                      <p>Get immediate treatment. Unlike workers' comp, third-party claims let you choose your own doctors. Document all medical care.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-800">
                        <Camera className="w-5 h-5 mr-2" />
                        2. Document Everything
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-blue-700">
                      <p>Photograph injuries, accident scene, equipment. Gather witness information. Keep all medical records and incident reports.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-purple-800">
                        <Scale className="w-5 h-5 mr-2" />
                        3. Contact Our Firm
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-purple-700">
                      <p>We identify third-party liability beyond your employer to pursue full compensation while protecting your workers' comp rights.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="flex items-center text-orange-800">
                        <DollarSign className="w-5 h-5 mr-2" />
                        4. Receive Full Recovery
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-orange-700">
                      <p>Get 100% wages, pain & suffering, and future losses - not just limited workers' comp benefits.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <Collapsible open={expandedSections['what-to-do']} onOpenChange={() => toggleSection('what-to-do')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Critical First Steps
                    {expandedSections['what-to-do'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold text-yellow-800 mb-2">Important to Know About California Workplace Injuries</h4>
                    <ul className="text-yellow-700 space-y-2">
                      <li><strong>Workers' comp only pays 2/3 of wages</strong> - Third-party claims recover 100%</li>
                      <li><strong>No pain & suffering in workers' comp</strong> - Personal injury claims include these damages</li>
                      <li><strong>Limited medical provider choice</strong> - Third-party claims allow your choice of doctors</li>
                      <li><strong>OSHA violations strengthen claims</strong> - Safety violations prove negligence</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Injury Types Section */}
            <section id="injury-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Workplace Injuries We Handle</h2>
              
              <div className="mb-8">
                <img 
                  src={injuryTypesImage} 
                  alt="Common workplace injury types including construction accidents, equipment failures, and toxic exposures" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  We handle all types of workplace injuries with third-party liability potential:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <ul className="list-disc list-inside space-y-2">
                    <li>Construction accidents and scaffold collapses</li>
                    <li>Equipment and machinery malfunctions</li>
                    <li>Toxic chemical exposure and poisoning</li>
                    <li>Vehicle accidents while working</li>
                    <li>Falls from heights and scaffolding</li>
                    <li>Electrocution and electrical injuries</li>
                    <li>Crane and heavy equipment accidents</li>
                    <li>Defective safety equipment failures</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Industrial explosions and fires</li>
                    <li>Slip and fall accidents at worksites</li>
                    <li>Repetitive stress and ergonomic injuries</li>
                    <li>Workplace violence and assaults</li>
                    <li>Occupational diseases and illnesses</li>
                    <li>Heat-related injuries and heat stroke</li>
                    <li>Noise-induced hearing loss</li>
                    <li>Third-party negligence injuries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Third-Party Liability Section */}
            <section id="third-party" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Third-Party Liability</h2>
              
              <div className="mb-8">
                <img 
                  src={thirdPartyImage} 
                  alt="Third-party liability in workplace injuries - multiple contractors and equipment suppliers" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  While California's workers' compensation system prevents direct lawsuits against employers under Labor Code § 3600's "exclusive remedy" rule, this protection has critical exceptions. When someone other than your employer causes your workplace injury, you can pursue both workers' compensation AND a third-party personal injury lawsuit.
                </p>
              </div>

              <Collapsible open={expandedSections['third-party']} onOpenChange={() => toggleSection('third-party')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Third-Party Defendants
                    {expandedSections['third-party'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Subcontractors & General Contractors</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>On construction sites, multiple companies work simultaneously. If a subcontractor's negligence causes your injury - such as unsafe scaffolding installation, improper excavation, or failure to follow safety protocols - they can be held liable separately from your employer.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Property Owners</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Building owners who fail to maintain safe premises, warn of hazards, or address known dangers face liability under California premises liability law. This includes structural defects, inadequate lighting, or dangerous conditions they knew or should have known about.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Equipment Manufacturers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Defective machinery, tools, or safety equipment that malfunction and cause injury create strict product liability claims. This includes design defects, manufacturing defects, or failure to provide adequate warnings about inherent dangers.</p>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-red-600">Negligent Drivers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>If injured in a vehicle accident while working - whether as a delivery driver, traveling between job sites, or struck by a vehicle at a worksite - the at-fault driver and their insurance become liable for your full damages.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Workplace Injuries</h2>
              
              <div className="mb-8">
                <img 
                  src={compensationImage} 
                  alt="Full compensation for workplace injuries beyond workers' compensation limits" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed mb-6">
                  Third-party workplace injury claims provide significantly more compensation than workers' compensation alone:
                </p>
                
                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-green-800 mb-4">Full Compensation Available in Third-Party Claims:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="text-green-700 space-y-2">
                      <li>• 100% of lost wages (past and future)</li>
                      <li>• All medical expenses</li>
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Permanent disability/disfigurement</li>
                      <li>• Loss of enjoyment of life</li>
                    </ul>
                    <ul className="text-green-700 space-y-2">
                      <li>• Loss of consortium for spouses</li>
                      <li>• Punitive damages for egregious conduct</li>
                      <li>• Future care costs</li>
                      <li>• Vocational retraining</li>
                      <li>• Home/vehicle modifications</li>
                      <li>• Loss of earning capacity</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Workers' Compensation Limitations:</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Only 2/3 of wages covered</li>
                    <li>• No pain and suffering damages</li>
                    <li>• Limited medical provider choice</li>
                    <li>• No compensation for full losses</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits for California Workplace Injury Claims</h2>
              
              <div className="prose prose-lg max-w-none">
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-yellow-800 mb-2">Critical Deadlines:</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• <strong>Third-party claims:</strong> 2 years from injury date</li>
                    <li>• <strong>Government entities:</strong> 6 months notice requirement</li>
                    <li>• <strong>Workers' compensation:</strong> Report within 30 days, file within 1 year</li>
                    <li>• <strong>Defective products:</strong> May have extended deadlines</li>
                    <li>• <strong>Toxic exposure:</strong> 3 years from discovery of illness</li>
                  </ul>
                </div>
                
                <p className="text-lg leading-relaxed">
                  Don't delay - evidence disappears quickly in workplace injury cases. Surveillance footage gets deleted, witnesses forget details, and accident scenes get cleaned up. Contact us immediately to preserve crucial evidence and protect your rights.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="border border-gray-200">
                    <CardHeader 
                      className="cursor-pointer hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="text-red-600">{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Additional Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <Calculator className="w-5 h-5 mr-2" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Get an estimate of your potential workplace injury compensation.</p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link to="/workplace-injuries-compensation-calculator">Calculate Now</Link>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Understanding medical care and documentation for workplace injuries.</p>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link to="/workplace-injuries-medical-guidance">Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="bg-red-600 text-white p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Don't Wait - Time Limits Apply for California Workplace Injuries</h2>
              <p className="text-lg mb-6">
                Evidence disappears quickly in workplace injury cases. Contact us immediately to preserve crucial evidence and maximize your recovery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-red-600 hover:bg-gray-100 hover:text-red-700 font-semibold"
                  asChild
                >
                  <Link to="/workplace-injuries-case-evaluation" className="text-red-600 hover:text-red-700">Start Free Case Evaluation</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-semibold"
                  asChild
                >
                  <Link to="tel:8181234567">Call (818) 123-4567</Link>
                </Button>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-card border-red-200 bg-red-50/50">
                <CardHeader>
                  <CardTitle className="text-red-600 text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Link>
                  </Button>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="/workplace-injuries-case-evaluation">
                      <ClipboardCheck className="w-4 h-4" />
                      Free Case Review
                    </Link>
                  </Button>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                    asChild
                  >
                    <Link to="mailto:info@trembachlawfirm.com">
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="glass-card border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="text-orange-600 text-center flex items-center justify-center gap-2">
                    <Zap className="w-5 h-5" />
                    Emergency Contact
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-orange-700 mb-4">Injured today? Call now for immediate assistance.</p>
                  <Button 
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white pulse"
                    asChild
                  >
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      (818) 123-4567
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Tips */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Quick Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                      <span>Seek medical attention immediately</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                      <span>Document everything with photos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                      <span>Get witness contact information</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="bg-green-100 text-green-800 text-xs">✓</Badge>
                      <span>Report to employer within 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="bg-red-100 text-red-800 text-xs">✗</Badge>
                      <span>Don't admit fault</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Badge className="bg-red-100 text-red-800 text-xs">✗</Badge>
                      <span>Don't delay legal consultation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkplaceInjuries;