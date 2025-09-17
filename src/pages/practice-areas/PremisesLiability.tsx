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
  Home
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/premises-liability-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/premises-what-to-do.jpg';
import accidentTypesImage from '@/assets/practice-areas/premises-accident-types.jpg';
import provingNegligenceImage from '@/assets/practice-areas/premises-proving-negligence.jpg';
import compensationImage from '@/assets/practice-areas/premises-compensation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const PremisesLiability: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'types-of-accidents', label: 'ACCIDENT TYPES', icon: Home },
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
    window.location.href = '/premises-liability-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50 Questions from HTML
  const faqData = [
    {
      question: "What is premises liability law in California?",
      answer: "Premises liability law holds property owners responsible for maintaining reasonably safe conditions on their property. Under California Civil Code Section 1714, property owners owe a duty of ordinary care to prevent foreseeable harm to visitors. This includes regular inspections, prompt repairs, and adequate warnings about known hazards."
    },
    {
      question: "What should I do immediately after a slip and fall accident?",
      answer: "Seek medical attention even if injuries seem minor, document everything with photos of the hazard and your injuries, get witness contact information, report the incident to property management, and avoid admitting fault. Keep copies of all incident reports and contact an attorney immediately."
    },
    {
      question: "How long do I have to file a premises liability claim in California?",
      answer: "Generally two years from the accident date under the statute of limitations. However, government property claims require filing within six months. Evidence disappears quickly, so immediate action is crucial to preserve surveillance footage, witness statements, and physical evidence."
    },
    {
      question: "What types of accidents fall under premises liability?",
      answer: "Slip and falls from wet floors or spills, trip and falls from uneven surfaces, stairway accidents, elevator malfunctions, inadequate security leading to crimes, swimming pool accidents, parking lot injuries, store accidents from falling merchandise, and construction site injuries to non-workers."
    },
    {
      question: "Do I need to prove the property owner knew about the dangerous condition?",
      answer: "Not necessarily. California recognizes 'constructive notice,' meaning if a hazard existed long enough that a reasonable property owner should have discovered it through proper inspection, they can be held liable even without actual knowledge."
    },
    {
      question: "What if the property owner claims they didn't know about the dangerous condition?",
      answer: "Property owners can be held liable even if they claim ignorance of a dangerous condition. California law recognizes 'constructive notice,' meaning if a hazard existed long enough that a reasonable property owner should have discovered it through proper inspection and maintenance, they can be held responsible. The time required for constructive notice varies by situation - a spill in a busy store might require action within minutes, while a pothole in a parking lot might need to exist for days or weeks. We investigate surveillance footage, maintenance logs, and witness statements to prove how long the hazard existed."
    },
    {
      question: "What damages can I recover in a California premises liability case?",
      answer: "You can recover both economic and non-economic damages. Economic damages include past and future medical expenses, lost wages and reduced earning capacity, rehabilitation costs, property damage, and life care costs for permanent injuries. Non-economic damages include pain and suffering, emotional distress, loss of enjoyment of life, disfigurement, and loss of consortium for spouses. In rare cases involving malicious conduct, punitive damages may be available. The value of your case depends on the severity of your injuries, the strength of liability evidence, and the impact on your life."
    },
    {
      question: "Do I need to prove the exact cause of my slip and fall?",
      answer: "While you don't need to prove the exact molecular cause of your fall, you must identify the dangerous condition that caused it. This could be a wet floor, uneven surface, poor lighting, or other hazard. Evidence like photos, surveillance video, incident reports, and witness statements help establish causation. If you can't identify what caused your fall, it becomes very difficult to prove the property owner's negligence. This is why immediate documentation after an accident is crucial."
    },
    {
      question: "What if I signed a liability waiver before entering the property?",
      answer: "Liability waivers in California are not absolute protection for property owners. While they can limit liability for inherent risks of certain activities, they cannot protect against gross negligence, intentional misconduct, or violations of statutory duties. Courts scrutinize waivers carefully and may invalidate them if they're unclear, overly broad, or against public policy. Even with a signed waiver, property owners must still maintain reasonably safe conditions. An attorney can evaluate whether a waiver affects your specific case."
    },
    {
      question: "Can I sue if I was injured at a friend's house?",
      answer: "Yes, you can pursue a claim even if injured at a friend's house. Their homeowner's or renter's insurance typically covers such accidents. You're not suing your friend personally but rather making a claim against their insurance policy. Property owners have the same duty to maintain safe conditions regardless of their relationship with visitors. Many people hesitate to pursue these claims, but insurance exists specifically for these situations, and you shouldn't bear the financial burden of someone else's negligence."
    },
    {
      question: "What's the difference between slip and fall and trip and fall cases?",
      answer: "Slip and fall cases typically involve losing traction on slippery surfaces like wet floors, ice, or slick substances. Trip and fall cases involve catching your foot on an object or uneven surface, such as torn carpeting, uneven sidewalks, or debris in walkways. The distinction matters because different building codes and safety standards may apply. Both types of cases fall under premises liability law, and property owners must maintain safe conditions to prevent both slipping and tripping hazards."
    },
    {
      question: "How do I prove a store was negligent in maintaining its premises?",
      answer: "Proving store negligence requires showing they knew or should have known about the dangerous condition and failed to fix it or warn customers. Evidence includes surveillance footage showing how long a hazard existed, maintenance logs and inspection records, incident reports from previous accidents, witness statements, photos of the hazard and lack of warning signs, and employee testimony about cleaning procedures. Stores have a heightened duty of care to customers and must conduct regular inspections to identify and address hazards promptly."
    },
    {
      question: "What if the hazard was 'open and obvious'?",
      answer: "The 'open and obvious' defense doesn't automatically bar recovery in California. Property owners still have duties even regarding obvious hazards. They must assess whether people might encounter the danger despite its obvious nature, whether the hazard could be encountered by someone legitimately distracted, and whether simple warnings or barriers could prevent injuries. Courts consider factors like whether avoiding the hazard would require unreasonable effort or whether the property owner should anticipate harm despite the obvious nature of the danger."
    },
    {
      question: "Can I recover damages if I don't have health insurance?",
      answer: "Yes, you can recover all reasonable medical expenses whether or not you have health insurance. In fact, California law allows you to claim the full value of medical services, not just what insurance paid. We can help you find medical providers who work on a lien basis, meaning they wait for payment until your case resolves. You're entitled to compensation for all medical costs caused by the property owner's negligence, regardless of your insurance status."
    },
    {
      question: "What should I do if the insurance company contacts me?",
      answer: "Don't speak with the property owner's insurance company without legal representation. They may seem friendly, but their goal is to minimize or deny your claim. They'll try to get recorded statements, obtain blanket medical authorizations, and push for quick settlements before you know the extent of your injuries. Politely decline to discuss the accident and tell them your attorney will contact them. Never sign anything or accept a settlement without legal advice. Insurance adjusters are trained to use your words against you."
    },
    {
      question: "How long does a premises liability case typically take?",
      answer: "Case duration varies significantly based on injury severity, liability disputes, and insurance company cooperation. Simple cases with clear liability might settle in 3-6 months. Complex cases or those requiring litigation can take 1-2 years or more. Factors affecting timeline include the time needed for medical treatment and recovery, investigation and evidence gathering, negotiation with insurance companies, and court scheduling if litigation is necessary. We work efficiently while ensuring maximum compensation - rushing to settlement before understanding your full damages often results in inadequate compensation."
    },
    {
      question: "What if I was injured on a rental property?",
      answer: "Both landlords and tenants can be liable for premises injuries depending on who controlled the dangerous condition. Landlords are typically responsible for common areas like hallways, stairs, parking lots, and structural defects. They're also liable for dangerous conditions they knew about before renting the property. Tenants may be liable for hazards within their rented space. California law requires landlords to maintain habitable conditions and make necessary repairs. Multiple parties may share liability, and we pursue all responsible parties to maximize your recovery."
    },
    {
      question: "Can I sue for a parking lot accident?",
      answer: "Yes, parking lot owners must maintain safe conditions just like any other property. Common parking lot hazards include potholes and cracked pavement, inadequate lighting, oil spills and slippery surfaces, lack of proper signage or markings, snow and ice accumulation, and criminal attacks due to negligent security. Property owners must regularly inspect and maintain parking areas, provide adequate lighting for safety, and address known hazards promptly. Both the property owner and any management company may be liable for accidents."
    },
    {
      question: "What constitutes inadequate security leading to injury?",
      answer: "Property owners may be liable for criminal attacks when they fail to provide reasonable security measures. This includes insufficient lighting in parking areas and walkways, broken locks or security gates, lack of security personnel in high-crime areas, failure to respond to previous criminal incidents, inadequate surveillance systems, and failure to control access to the property. Liability depends on the foreseeability of criminal acts based on prior incidents, crime rates in the area, and industry standards for similar properties. Property owners must balance security costs against the risk of foreseeable criminal activity."
    },
    {
      question: "How does California's attractive nuisance doctrine protect children?",
      answer: "While California doesn't follow the traditional attractive nuisance doctrine, property owners still owe special duties to protect children from dangerous conditions that might attract them. This includes swimming pools, construction sites, abandoned buildings, machinery, and other hazards children might find interesting. Property owners must anticipate children may not appreciate dangers and take reasonable steps to prevent access or eliminate hazards. This might require fencing, locks, covers, or removing the dangerous condition entirely. Even trespassing children may have valid claims if the property owner knew children were likely to be attracted to the hazard."
    },
    {
      question: "What if I was injured by falling merchandise in a store?",
      answer: "Stores must safely stack and secure merchandise to prevent items from falling and injuring customers. Liability can arise from overloading shelves, improper stacking methods, failure to secure heavy items, inadequate shelf maintenance, and allowing customers in areas with unstable displays. Stores must follow industry standards for merchandise display and regularly inspect for hazards. Both the store and potentially the employee who stacked the items may be liable. Document the scene immediately, as stores often quickly clean up and rearrange displays after accidents."
    },
    {
      question: "Can I sue if injured on government property?",
      answer: "Yes, but special rules apply under the California Tort Claims Act. You must file an administrative claim within six months of injury - much shorter than the two-year limit for private property. The government has certain immunities but remains liable for dangerous conditions they knew or should have known about. This includes injuries on sidewalks, government buildings, parks, schools, and public transportation facilities. The claim must include specific information and be filed with the correct entity. If denied, you have only six months to file a lawsuit. Government claims are complex and require immediate legal assistance."
    },
    {
      question: "What if I was injured at work on someone else's property?",
      answer: "You may have both workers' compensation and premises liability claims. Workers' comp covers medical bills and lost wages but limits recovery. A premises liability claim against the property owner can provide additional compensation for pain and suffering, full wage loss, and other damages not covered by workers' comp. This commonly occurs with construction workers injured by dangerous conditions on job sites they don't control, delivery drivers injured on customer premises, and service workers injured at client locations. We coordinate with workers' comp attorneys to maximize total recovery while protecting your benefits."
    },
    {
      question: "How does comparative negligence affect my premises liability case?",
      answer: "California follows pure comparative negligence, meaning you can recover damages even if partially at fault, reduced by your percentage of responsibility. For example, if you're found 30% at fault and damages total $100,000, you'd recover $70,000. Insurance companies aggressively argue comparative fault to reduce payouts, claiming you were distracted, wearing inappropriate footwear, or ignoring warning signs. Our former defense experience helps counter these tactics and minimize your assigned fault percentage."
    },
    {
      question: "What evidence should I preserve after a premises liability accident?",
      answer: "Take photos of the hazard that caused your fall, your injuries, the surrounding area, and any warning signs (or lack thereof). Get contact information from witnesses and ask them to write brief statements. Keep your clothing and shoes from the accident. Obtain copies of incident reports and surveillance footage. Document weather conditions if relevant. Save medical records, bills, and treatment notes. Keep receipts for expenses related to your injury. The property owner's insurance company will begin investigating immediately, so preserving evidence is crucial."
    },
    {
      question: "Can I sue my landlord for injuries in my apartment?",
      answer: "Landlords can be liable for injuries caused by dangerous conditions they're responsible to maintain or repair. This includes structural defects, plumbing and electrical problems, inadequate lighting in common areas, broken stairs or railings, and security issues in common areas. California's implied warranty of habitability requires landlords to maintain safe, livable conditions. Document the hazard with photos, report it in writing to your landlord, and keep copies of all communications. Landlords who fail to address known safety hazards can face both premises liability claims and habitability violations."
    },
    {
      question: "What if the property owner claims the accident was 'an act of God'?",
      answer: "Natural events don't automatically excuse property owner negligence. While property owners aren't liable for unforeseeable natural disasters, they must take reasonable precautions against foreseeable conditions. This includes clearing snow and ice from walkways, addressing drainage problems that cause flooding, trimming trees that could fall, and maintaining structures to withstand normal weather conditions. The key question is foreseeability - if similar conditions have occurred before or are common in the area, property owners must take preventive measures."
    },
    {
      question: "How much is my premises liability case worth?",
      answer: "Case value depends on injury severity, medical expenses, lost income, pain and suffering, permanence of injuries, strength of liability evidence, and impact on your daily life. Minor injuries might recover thousands, while catastrophic injuries can result in millions. Factors include your age, occupation, pre-injury health, and life expectancy. We work with medical experts, economists, and life care planners to calculate current and future damages accurately. Every case is unique, and we provide personalized case evaluations based on your specific circumstances."
    },
    {
      question: "What if multiple parties are responsible for my injury?",
      answer: "California allows you to pursue all parties who contributed to your injury. This might include property owners, management companies, maintenance contractors, security companies, and product manufacturers. Each party can be held fully liable under joint and several liability rules, meaning you can collect your full judgment from any defendant. This provides better recovery prospects and ensures compensation even if one party lacks adequate insurance or assets. We identify all potentially liable parties and pursue maximum recovery from available sources."
    },
    {
      question: "Can I still sue if the dangerous condition has been fixed?",
      answer: "Yes, fixing a hazard after your accident doesn't prevent a lawsuit, and California Evidence Code Section 1151 prohibits using subsequent repairs as evidence that the condition was dangerous. Property owners often fix hazards quickly after accidents to prevent future incidents, but this doesn't admit liability or prevent claims for past injuries. In fact, prompt repairs after an accident can sometimes support your claim by showing the owner recognized the danger and could have fixed it earlier."
    },
    {
      question: "What if I was intoxicated when the accident occurred?",
      answer: "Intoxication doesn't automatically bar recovery but may reduce your compensation under comparative negligence principles. The key questions are whether your intoxication contributed to the accident and whether a sober person would have avoided the hazard. Property owners still owe duties to intoxicated visitors, especially in establishments serving alcohol. If the dangerous condition would have injured anyone regardless of intoxication, your recovery may not be affected. We evaluate each case individually and work to minimize the impact of intoxication on your claim."
    },
    {
      question: "How do building code violations affect my case?",
      answer: "Building code violations can establish negligence per se, meaning the violation automatically proves the property owner breached their duty of care. California codes specify requirements for handrails, lighting, flooring, stairs, and other safety features. Violations strengthen your case significantly because they show the owner failed to meet minimum safety standards. We investigate applicable codes, obtain inspection records, and work with experts to identify violations that contributed to your accident."
    },
    {
      question: "What if I was injured while trespassing?",
      answer: "Trespassers have limited rights in California, but property owners still can't intentionally injure them or set traps. Some exceptions exist for child trespassers and situations where owners know of frequent trespassing. If you were initially a lawful visitor who became a trespasser (like staying after business hours), you might retain some protections. The circumstances of your presence on the property significantly affect your rights. Consult an attorney immediately as trespasser cases are complex and fact-specific."
    },
    {
      question: "Can I recover damages if the accident aggravated a pre-existing injury?",
      answer: "Yes, under California's 'eggshell plaintiff' rule, defendants must take victims as they find them. If the accident aggravated or worsened a pre-existing condition, you can recover damages for the aggravation. The key is proving the accident made your condition worse than it would have been otherwise. We work with medical experts to document how the accident impacted your pre-existing condition and calculate the additional damages caused by the premises owner's negligence."
    },
    {
      question: "What should I expect during the litigation process?",
      answer: "Litigation typically involves several phases: filing the complaint, discovery (exchanging documents and taking depositions), expert witness preparation, mediation attempts, and potentially trial. The process can take 1-2 years or more depending on case complexity. Most cases settle before trial, but we prepare every case as if it will go to trial to maximize settlement leverage. We handle all aspects of litigation while keeping you informed of important developments and always seeking your input on major decisions."
    },
    {
      question: "How do I find the best premises liability attorney?",
      answer: "Look for attorneys with specific premises liability experience, knowledge of California law, resources to handle complex cases, and a track record of successful outcomes. Ask about their experience with cases similar to yours, their approach to investigation and case preparation, and their fee structure. Most premises liability attorneys work on contingency, meaning no fees unless you win. Choose someone who communicates well and makes you feel comfortable, as you'll work together closely throughout your case."
    },
    {
      question: "What if the insurance company offers a settlement right away?",
      answer: "Early settlement offers are typically much lower than your case's true value because the insurance company wants to resolve claims before you fully understand your injuries and hire an attorney. These offers rarely cover ongoing medical expenses, future complications, or adequate compensation for pain and suffering. Never accept an initial offer without consulting an attorney. Once you accept a settlement, you typically cannot pursue additional compensation even if your injuries prove more serious than initially thought."
    },
    {
      question: "Can I sue for emotional distress from a premises liability accident?",
      answer: "Yes, emotional distress is a compensable damage in premises liability cases, especially when accompanying physical injuries. This includes anxiety about future falls, depression from lifestyle limitations, and trauma from the accident itself. Post-traumatic stress disorder (PTSD) from severe accidents can significantly impact case value. We work with mental health professionals to document the psychological impact of your accident and ensure full compensation for both physical and emotional damages."
    },
    {
      question: "What if I can't afford medical treatment after my accident?",
      answer: "Don't let financial concerns prevent you from getting necessary medical care. We can help you find doctors who work on a medical lien basis, treating you now and waiting for payment until your case resolves. Some medical providers specialize in treating accident victims and understand the legal process. Emergency rooms cannot turn you away for inability to pay. Document all medical needs and costs - you're entitled to compensation for necessary treatment regardless of your ability to pay upfront."
    },
    {
      question: "How does my age affect my premises liability case?",
      answer: "Age can significantly impact case value and legal analysis. Children receive special protections as they may not appreciate dangers adults would recognize. Elderly victims often suffer more severe injuries from falls and may have longer recovery times. Working-age adults typically have higher lost wage claims. Younger victims may receive more compensation for lifetime impacts. We tailor our approach based on your specific age-related factors and ensure maximum compensation for your particular circumstances."
    },
    {
      question: "What if the accident happened at a special event or festival?",
      answer: "Event organizers, property owners, and vendors may all share liability for accidents at special events. Temporary structures, increased crowds, and changed conditions create additional hazards. Event permits may require specific safety measures and insurance coverage. We investigate which parties controlled the area where your accident occurred, what safety protocols were required and followed, and what insurance coverage is available. Major events often have substantial liability insurance specifically for attendee injuries."
    },
    {
      question: "Can I sue if injured at a gym or fitness center?",
      answer: "Gyms must maintain safe premises despite inherent exercise risks. They're liable for wet locker room floors, broken equipment, inadequate maintenance, poor instruction leading to injury, and inadequate supervision. Liability waivers don't protect against gross negligence or equipment defects. California courts scrutinize gym waivers carefully. Gyms must regularly inspect and maintain equipment, provide proper instruction, maintain clean and safe facilities, and warn about known equipment problems. Both the gym owner and equipment manufacturers may be liable for injuries. Document equipment serial numbers and take photos of any defects."
    },
    {
      question: "How does California handle snow and ice slip cases?",
      answer: "While rare in most of California, snow and ice create premises liability in mountain areas and during unusual weather. Property owners must take reasonable steps to remove or treat ice and snow, especially in walkways. This includes salting or sanding icy areas, removing snow accumulations, warning about dangerous conditions, and providing safe alternative routes. The reasonable time for response depends on storm severity and available resources. Natural accumulations might not create liability during ongoing storms, but owners must act once storms end. Ski resorts and mountain businesses have heightened duties given the foreseeability of winter conditions."
    },
    {
      question: "What if I was injured in a poorly lit area?",
      answer: "Inadequate lighting can create liability when it contributes to accidents or crimes. Property owners must provide sufficient lighting for safe navigation, especially in stairways, walkways, parking lots, and entrances. Building codes specify minimum lighting levels for different areas. Burned out bulbs, broken fixtures, or insufficient fixtures can establish negligence. Poor lighting often contributes to other accidents by preventing visitors from seeing hazards. It also enables criminal activity in parking lots and isolated areas. Document lighting conditions through photos (showing darkness) and identify any non-functioning lights. Expert testimony about lighting standards may strengthen your case."
    },
    {
      question: "Can I sue if injured at a California amusement park?",
      answer: "Amusement parks must maintain safe conditions beyond just ride safety. This includes walkways, queuing areas, restaurants, and facilities. Common accidents involve slip and falls on wet surfaces, trip hazards in crowded areas, inadequate crowd control, and food poisoning. While assumption of risk applies to inherent ride dangers, it doesn't protect against negligent maintenance or operation. California strictly regulates permanent amusement parks. Violations can establish negligence per se. Parks must regularly inspect, maintain detailed records, and address known hazards promptly. Major parks have substantial insurance but aggressively defend claims. Preserve tickets, photos, and medical records."
    },
    {
      question: "What should I do if injured at a construction site?",
      answer: "Non-workers injured at construction sites may have premises liability claims. This includes pedestrians injured by falling debris, inadequate barriers, or unmarked hazards. General contractors typically control site safety and can be liable even for subcontractor negligence. Property owners may also be liable if they retain control over safety. Document the scene immediately as conditions change rapidly. Identify all contractors and subcontractors present. California has strict construction safety regulations; violations strengthen your claim. Multiple defendants often mean multiple insurance policies. Act quickly as construction companies may be temporary entities that dissolve after project completion."
    },
    {
      question: "Do I need an attorney for a premises liability case?",
      answer: "While not legally required, having an experienced attorney dramatically improves your chances of fair compensation. Property owners and their insurance companies have legal teams working to minimize or deny your claim. Premises liability law is complex, involving building codes, industry standards, and liability theories. Attorneys know how to investigate accidents, preserve evidence, calculate damages accurately, negotiate with insurance companies, and try cases if necessary. Studies show represented victims receive significantly more compensation even after attorney fees. Most premises liability attorneys work on contingency, meaning no upfront costs and fees only if you win. The consultation is free, so there's no risk in learning about your rights."
    }
  ];

  // FAQ Structured Data for SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Premises Liability Lawyers | Slip & Fall Attorneys | Trembach Law Firm"
        description="Former defense attorney fighting for California premises liability victims. Free 24/7 consultation for slip & fall, trip & fall accidents. No fees unless we win."
        canonical="/practice-areas/premises-liability"
        structuredData={faqJsonLd}
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-[60]">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Premises Liability Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">2026 Rising Star</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/premises-liability-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Premises Liability Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When property owners fail to maintain safe conditions, and you suffer injuries as a result, we fight for the compensation you deserve. Our former defense experience reveals insurance company tactics, maximizing your recovery while you focus on healing.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Premises liability accidents can be life-altering events. At Trembach Law Firm, we understand the urgency of slip and fall cases and the devastating impact they have on victims and families. With our background in defense work, we know exactly how property owners and their insurance companies minimize claims.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Premises Liability Practice
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
                        <p>Our defense background reveals exactly how property owners and insurance companies build defenses against premises liability claims and minimize payouts.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Property Law Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California building codes, safety regulations, and property maintenance standards that create liability.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Get Your Free Consultation</h3>
                <p className="mb-6 text-red-700">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-red-800">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                        className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-red-800">Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                          <SelectItem value="inadequate-security">Inadequate Security</SelectItem>
                          <SelectItem value="stairway-accident">Stairway Accident</SelectItem>
                          <SelectItem value="elevator-accident">Elevator Accident</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-red-800">Accident Location</label>
                    <Select value={formData.accidentLocation} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentLocation: value }))}>
                      <SelectTrigger className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500">
                        <SelectValue placeholder="Where did the accident occur?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="store">Store/Retail</SelectItem>
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="parking-lot">Parking Lot</SelectItem>
                        <SelectItem value="apartment">Apartment Complex</SelectItem>
                        <SelectItem value="office">Office Building</SelectItem>
                        <SelectItem value="sidewalk">Sidewalk/Public</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What To Do Section */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What To Do After a Premises Liability Accident</h2>
              
              <div className="mb-8">
                <img 
                  src={whatToDoImage} 
                  alt="What to do after a premises liability accident - immediate steps for documentation and safety" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-inside space-y-2">
                  <li>Seek immediate medical attention, even if injuries seem minor.</li>
                  <li>Document the scene with photos and videos of the hazard and your injuries.</li>
                  <li>Get contact information from any witnesses.</li>
                  <li>Report the incident to property management or the responsible party.</li>
                  <li>Preserve any evidence such as clothing, shoes, or objects involved in the accident.</li>
                  <li>Avoid admitting fault or making statements that could be used against you.</li>
                  <li>Contact an experienced premises liability attorney promptly.</li>
                </ul>
              </div>
            </section>

            {/* Types of Accidents Section */}
            <section id="types-of-accidents" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Premises Liability Accidents</h2>
              
              <div className="mb-8">
                <img 
                  src={accidentTypesImage} 
                  alt="Common types of premises liability accidents including slip and fall, trip and fall, and inadequate security incidents" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-inside space-y-2">
                  <li>Slip and fall accidents due to wet floors, spills, or icy conditions.</li>
                  <li>Trip and fall accidents caused by uneven surfaces, torn carpeting, or debris.</li>
                  <li>Stairway and escalator accidents.</li>
                  <li>Elevator malfunctions and accidents.</li>
                  <li>Inadequate security leading to criminal attacks or assaults.</li>
                  <li>Swimming pool accidents and drownings.</li>
                  <li>Parking lot accidents including potholes and poor lighting.</li>
                  <li>Falling merchandise or objects in stores.</li>
                  <li>Construction site injuries to non-workers.</li>
                </ul>
              </div>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Proving Negligence in Premises Liability Cases</h2>
              
              <div className="mb-8">
                <img 
                  src={provingNegligenceImage} 
                  alt="Evidence collection and proving negligence in California premises liability cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  To prove negligence, you must show the property owner owed you a duty of care, breached that duty by failing to maintain safe conditions, and that breach caused your injuries. Evidence includes:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Photos and videos of the hazardous condition.</li>
                  <li>Surveillance footage showing how long the hazard existed.</li>
                  <li>Maintenance and inspection records.</li>
                  <li>Incident reports and witness statements.</li>
                  <li>Expert testimony on building codes and safety standards.</li>
                </ul>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation in Premises Liability Cases</h2>
              
              <div className="mb-8">
                <img 
                  src={compensationImage} 
                  alt="Understanding compensation types in premises liability cases - economic and non-economic damages" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Victims may recover economic damages such as medical expenses, lost wages, and property damage, as well as non-economic damages like pain and suffering, emotional distress, and loss of enjoyment of life. In some cases, punitive damages may be awarded for malicious or reckless conduct.
                </p>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits to File a Claim</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  In California, the statute of limitations for premises liability claims is generally two years from the date of the accident. Claims against government entities must be filed within six months. Acting promptly is essential to preserve evidence and protect your rights.
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">Resources</h2>
              <div className="prose prose-lg max-w-none">
                <ul className="list-disc list-inside space-y-2">
                  <li><a href="https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=1714.&lawCode=CIV" target="_blank" rel="noopener noreferrer" className="text-primary underline">California Civil Code Section 1714</a></li>
                  <li><a href="https://www.courts.ca.gov/selfhelp-injury.htm" target="_blank" rel="noopener noreferrer" className="text-primary underline">California Courts Self-Help: Personal Injury</a></li>
                  <li><a href="https://www.dir.ca.gov/dwc/WorkersCompensationBenefits.htm" target="_blank" rel="noopener noreferrer" className="text-primary underline">California Division of Workers' Compensation</a></li>
                  <li><a href="https://www.osha.gov/stateplans" target="_blank" rel="noopener noreferrer" className="text-primary underline">OSHA State Plans</a></li>
                  <li><a href="https://www.nolo.com/legal-encyclopedia/premises-liability-california.html" target="_blank" rel="noopener noreferrer" className="text-primary underline">Nolo: Premises Liability in California</a></li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-primary">
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Get expert legal advice about your premises liability case. No obligation consultation.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" onClick={() => window.location.href = '/premises-liability-case-evaluation'}>
                        <Scale className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Get Case Evaluation
                      </Button>
                      <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = '/premises-liability-medical-guidance'}>
                        <Stethoscope className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Medical Guidance
                      </Button>
                      <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = '/premises-liability-compensation-calculator'}>
                        <DollarSign className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Calculate Compensation
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        <span className="text-primary font-semibold">(818) 123-4567</span>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      Available 24/7 for premises liability cases
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Statute of Limitations:</span>
                    <span className="font-semibold">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Government Claims:</span>
                    <span className="font-semibold">6 Months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Comparative Negligence:</span>
                    <span className="font-semibold">Pure</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Our Success Rate:</span>
                    <span className="font-semibold text-green-600">95%+</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremisesLiability;
