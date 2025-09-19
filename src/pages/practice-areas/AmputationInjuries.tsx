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
  Home,
  Scissors,
  Activity
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/amputation-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/amputation-immediate-care.jpg';
import amputationTypesImage from '@/assets/practice-areas/amputation-types.jpg';
import rehabilitationImage from '@/assets/practice-areas/amputation-rehabilitation.jpg';
import compensationImage from '@/assets/practice-areas/amputation-compensation.jpg';
import prostheticImage from '@/assets/practice-areas/amputation-prosthetics.jpg';
import lifetimeCareImage from '@/assets/practice-areas/amputation-lifetime-care.jpg';
import timelintsImage from '@/assets/practice-areas/amputation-legal-timeline.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AmputationInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: '',
    amputationType: '',
    medicalTreatment: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'types-of-amputations', label: 'AMPUTATION TYPES', icon: Scissors },
    { id: 'rehabilitation', label: 'REHABILITATION', icon: Activity },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'prosthetics', label: 'PROSTHETICS', icon: Heart },
    { id: 'lifetime-care', label: 'LIFETIME CARE', icon: Stethoscope },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/amputation-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50 Questions about Amputation Injuries
  const faqData = [
    {
      question: "What is the average settlement for an amputation injury in California?",
      answer: "Amputation settlements in California typically range from $750,000 to $5 million or more, depending on factors like the type and level of amputation, age and occupation of the victim, degree of negligence involved, available insurance coverage, and long-term care needs. Upper extremity amputations affecting dominant hands often result in higher settlements due to greater functional impact, while lower extremity amputations may require expensive prosthetics and mobility aids for life."
    },
    {
      question: "How much does lifetime care cost for an amputation victim?",
      answer: "The lifetime medical costs for amputation victims average $509,275 but can exceed $1 million for complex cases. Costs include immediate emergency care and surgeries, multiple prosthetic fittings and replacements, ongoing physical and occupational therapy, phantom limb pain treatment, psychological counseling, home modifications for accessibility, and potential revision surgeries. Prosthetic limbs require replacement every 3-5 years and can cost $15,000-$50,000 each."
    },
    {
      question: "What causes most amputation injuries?",
      answer: "Motor vehicle accidents account for approximately 45% of traumatic amputations, particularly involving motorcycles, trucks, and pedestrian accidents. Workplace accidents represent 25% of cases, especially in construction, manufacturing, and industrial settings. Medical malpractice causes 15% of amputations through surgical errors, misdiagnosis of infections, or medication mistakes. Other causes include defective products, premises liability accidents, and dog attacks resulting in severe limb damage."
    },
    {
      question: "What should I do immediately after an amputation injury?",
      answer: "Seek immediate emergency medical care - time is critical for potential reattachment. If possible, preserve the amputated part by wrapping it in clean cloth, placing in a sealed plastic bag, and keeping on ice (not direct contact). Document everything with photos of the accident scene, equipment involved, and safety violations. Gather witness contact information and report the incident to appropriate authorities. Contact an experienced amputation attorney immediately to preserve evidence and protect your rights."
    },
    {
      question: "Can amputated limbs be reattached?",
      answer: "Successful reattachment depends on several factors: time elapsed (best within 6-8 hours), type of amputation (clean cuts better than crushing injuries), level of amputation (distal limbs more successful), patient's age and health, and quality of emergency care. Upper extremity reattachments have higher success rates than lower extremity. Even successful reattachment often results in permanent disability, chronic pain, and reduced function, warranting significant compensation for ongoing impairment."
    },
    {
      question: "What types of amputation injuries do you handle?",
      answer: "We handle all types of traumatic and surgical amputations including finger and thumb amputations affecting grip and dexterity, hand and wrist amputations requiring complex prosthetics, arm amputations (below and above elbow), toe amputations affecting balance and mobility, foot and ankle amputations requiring specialized prosthetics, leg amputations (below and above knee), and partial amputations requiring multiple reconstructive surgeries. Each type presents unique challenges and compensation considerations."
    },
    {
      question: "How do amputation injuries affect earning capacity?",
      answer: "Amputation significantly impacts earning capacity depending on the individual's occupation, age, education level, and type of amputation. Manual laborers may lose 60-100% of earning capacity, while office workers might maintain more income potential. Factors considered include pre-injury income and career trajectory, physical demands of the occupation, availability of reasonable accommodations, costs of vocational retraining, and reduced competitiveness in the job market. We work with vocational experts to calculate accurate lifetime earning losses."
    },
    {
      question: "What is phantom limb pain and how does it affect compensation?",
      answer: "Phantom limb pain affects 60-80% of amputees, causing sensation that the missing limb is still present and painful. This chronic condition can be debilitating, affecting sleep, mood, and daily functioning. Treatment includes medications, nerve blocks, spinal cord stimulation, and psychological therapy. Phantom pain significantly impacts quality of life and is a major component of pain and suffering damages in amputation cases, often justifying substantial non-economic damage awards."
    },
    {
      question: "How long does amputation rehabilitation take?",
      answer: "Rehabilitation duration varies but typically requires 6-18 months for initial adjustment, with ongoing therapy for years. The process includes wound healing and surgical recovery (2-6 months), prosthetic fitting and training (3-12 months), physical therapy to regain strength and mobility, occupational therapy for daily living skills, and psychological counseling for emotional adjustment. Upper extremity amputations often require longer rehabilitation due to the complexity of hand and arm function."
    },
    {
      question: "What factors determine amputation compensation amounts?",
      answer: "Compensation depends on multiple factors: severity and level of amputation, age and life expectancy of the victim, pre-injury income and career prospects, degree of defendant's negligence, available insurance coverage, medical expenses (past and future), loss of earning capacity, pain and suffering damages, loss of enjoyment of life, spousal consortium claims, and punitive damages in cases of gross negligence. Our experienced attorneys maximize compensation by thoroughly documenting all these factors."
    },
    {
      question: "Can I sue for a workplace amputation injury?",
      answer: "If you're covered by workers' compensation, you can receive benefits but generally cannot sue your employer directly. However, you may sue third parties whose negligence contributed to your injury, such as equipment manufacturers, contractors, or property owners. Third-party claims often provide significantly higher compensation than workers' compensation alone. If you're not covered by workers' comp (independent contractor, etc.), you may sue your employer directly for negligence."
    },
    {
      question: "What if my amputation was caused by medical malpractice?",
      answer: "Medical malpractice amputations result from surgical errors, misdiagnosis of infections leading to sepsis, medication errors causing tissue death, delayed treatment of compartment syndrome, improper wound care, or unnecessary amputations. These cases require extensive medical record review and expert testimony. California has specific procedures for medical malpractice cases, including mandatory expert witness requirements and damage caps on non-economic damages (currently $350,000, but exceptions apply for catastrophic injuries)."
    },
    {
      question: "How much do prosthetic limbs cost?",
      answer: "Prosthetic costs vary dramatically: basic prosthetic arms cost $3,000-$30,000, advanced myoelectric arms cost $25,000-$70,000, basic prosthetic legs cost $5,000-$50,000, computerized knee units add $35,000-$50,000, and hands with individual finger control cost $25,000-$50,000. Most prosthetics require replacement every 3-5 years. Active individuals may need multiple prosthetics for different activities. Insurance often doesn't cover the most advanced prosthetics, making full compensation crucial."
    },
    {
      question: "What home modifications are needed after amputation?",
      answer: "Home modifications for amputees include wheelchair ramps and accessible entrances, bathroom modifications (grab bars, roll-in showers), kitchen adaptations for one-handed use, stair lifts or residential elevators, widened doorways and hallways, accessible parking areas, and specialized equipment storage. Costs range from $15,000-$150,000 depending on the extent of modifications needed. These modifications are recoverable damages in amputation cases."
    },
    {
      question: "How do amputation injuries affect family members?",
      answer: "Amputation injuries profoundly impact family members who often become caregivers, face financial stress from lost income and medical expenses, experience emotional trauma and grief, and lose consortium (companionship, affection, sexual relations) with their spouse. Spouses may be entitled to separate loss of consortium damages. Children may suffer psychological trauma requiring counseling. Family members' damages are legitimate components of amputation injury claims."
    },
    {
      question: "What is the statute of limitations for amputation injury cases in California?",
      answer: "Generally two years from the injury date, but exceptions include discovery rule (when you discover the injury was caused by negligence), medical malpractice cases (one year from discovery or three years from injury, whichever is first), government liability cases (six months notice requirement), and cases involving minors (extended deadlines). Evidence disappears quickly in amputation cases, so immediate legal action is crucial to preserve surveillance footage, witness statements, and physical evidence."
    },
    {
      question: "Can I recover damages for emotional trauma from amputation?",
      answer: "Yes, emotional trauma is a significant component of amputation damages. Recoverable psychological damages include depression and anxiety disorders, post-traumatic stress disorder (PTSD), grief over loss of body image, social isolation and withdrawal, loss of self-esteem and confidence, fear of public appearances, and relationship difficulties. Professional psychological evaluation and treatment records support these claims. Emotional trauma damages often exceed $100,000-$500,000 in severe amputation cases."
    },
    {
      question: "What evidence is needed to prove an amputation case?",
      answer: "Critical evidence includes medical records documenting the amputation and treatment, photos of the accident scene and your injuries, witness statements and contact information, expert testimony on liability and damages, surveillance footage if available, maintenance and inspection records, safety violation reports, employment records showing lost earning capacity, and prosthetic and rehabilitation cost estimates. We work with accident reconstruction experts, medical professionals, and life care planners to build compelling cases."
    },
    {
      question: "How do insurance companies handle amputation claims?",
      answer: "Insurance companies recognize amputation claims as high-value cases but employ various tactics to minimize payouts: questioning the necessity of expensive prosthetics, disputing future care needs, challenging lost earning capacity calculations, rushing settlement offers before full damages are known, using their own medical examiners to downplay injuries, and exploiting any pre-existing conditions. Our experience with insurance company tactics helps maximize your compensation."
    },
    {
      question: "Can children with amputations recover different damages?",
      answer: "Children's amputation cases present unique damage considerations: longer life expectancy increases lifetime costs, ongoing prosthetic replacements throughout growth, educational accommodations and support services, psychological counseling for adjustment issues, future earning capacity impacts requiring expert analysis, potential for bullying and social difficulties, and family disruption damages. California courts recognize that childhood amputations have devastating lifelong consequences warranting substantial compensation."
    },
    {
      question: "What role do life care planners play in amputation cases?",
      answer: "Life care planners are medical professionals who assess future care needs and costs for amputation victims. They evaluate ongoing medical care requirements, prosthetic replacement schedules and costs, rehabilitation and therapy needs, home care assistance requirements, equipment and supply needs, and life expectancy considerations. Their detailed reports provide foundation for future damage calculations, often supporting claims of $1 million or more in lifetime care costs."
    },
    {
      question: "How do below-knee and above-knee amputations differ legally?",
      answer: "Above-knee amputations typically result in higher compensation due to greater functional impairment, higher prosthetic costs (computerized knees cost $35,000-$50,000), increased energy expenditure (60-100% more energy for walking), greater mobility limitations, and higher likelihood of phantom pain. Below-knee amputees retain natural knee function, have better prosthetic options, and maintain more normal gait patterns. Compensation reflects these significant functional differences."
    },
    {
      question: "Can I sue the manufacturer of defective equipment that caused my amputation?",
      answer: "Yes, product liability claims are common in amputation cases involving defective machinery, power tools, medical devices, or safety equipment. Manufacturers can be liable for design defects making products unreasonably dangerous, manufacturing defects creating dangerous conditions, and failure to warn about known risks. These cases often involve multiple defendants including manufacturers, distributors, and retailers. Product liability claims can provide substantial compensation even when workplace injuries are involved."
    },
    {
      question: "What is the difference between traumatic and surgical amputation?",
      answer: "Traumatic amputations occur suddenly due to accidents, often requiring emergency reattachment attempts and multiple surgeries. Surgical amputations are deliberate medical procedures to save life or health, but may be unnecessary due to medical malpractice. Legal considerations differ: traumatic amputations focus on accident causation and negligence, while surgical amputation cases require proving the surgery was unnecessary or improperly performed. Both types warrant significant compensation for the life-changing consequences."
    },
    {
      question: "How do amputation cases go to trial?",
      answer: "Amputation cases rarely go to trial because damages are typically substantial and liability is often clear. When trials occur, they involve extensive expert testimony from medical professionals, life care planners, vocational experts, and accident reconstruction specialists. Juries generally respond favorably to amputation victims due to the obvious severity of injuries. Our trial experience and relationships with top experts ensure maximum compensation whether through settlement or verdict."
    },
    {
      question: "What compensation can family members receive in amputation cases?",
      answer: "Family members may recover loss of consortium damages for lost companionship, affection, and sexual relations, loss of household services and support, emotional distress from witnessing the trauma, and financial contributions to the injured person's care. Spouses typically receive $50,000-$500,000 for consortium losses. Parents of injured children and adult children of injured parents may also have viable claims depending on their relationship and dependency."
    },
    {
      question: "How do pre-existing conditions affect amputation claims?",
      answer: "Pre-existing conditions don't bar recovery, but may affect damage calculations. California follows the 'eggshell plaintiff' rule - defendants take victims as they find them. If a pre-existing condition made amputation more likely, we focus on how the accident aggravated or accelerated the condition. Diabetes, circulation problems, or previous injuries may be relevant but don't eliminate the defendant's liability for causing or contributing to the amputation."
    },
    {
      question: "What psychological support is available for amputation victims?",
      answer: "Psychological support includes individual counseling for adjustment and depression, group therapy with other amputees, family counseling for relationship issues, cognitive behavioral therapy for phantom pain, support groups through hospitals and community organizations, and peer mentorship programs. These services are recoverable damages in amputation cases. Early psychological intervention improves outcomes and is considered essential care for amputation victims."
    },
    {
      question: "Can I recover punitive damages in an amputation case?",
      answer: "Punitive damages are available when defendants acted with malice, oppression, or fraud. Examples include employers who knowingly ignored safety violations, manufacturers who concealed product dangers, or drivers under the influence. Punitive damages punish wrongdoers and deter similar conduct. They're calculated based on the defendant's wealth and degree of misconduct. Successful punitive damage claims can add millions to amputation settlements."
    },
    {
      question: "How do motorcycle accidents cause amputations?",
      answer: "Motorcycle accidents frequently cause amputations due to crushing injuries from larger vehicles, severe road rash requiring amputation, entanglement with motorcycle parts, and high-impact collisions causing irreparable limb damage. Protective gear reduces but doesn't eliminate amputation risk. These cases often involve significant liability issues including driver negligence, road defects, or motorcycle defects. The combination of catastrophic injuries and clear liability often results in substantial settlements."
    },
    {
      question: "What vocational rehabilitation is needed after amputation?",
      answer: "Vocational rehabilitation helps amputees return to work through job skills assessment and retraining, workplace accommodation evaluation, assistive technology training, career counseling and guidance, job placement assistance, and employer education about disabilities. The cost of vocational rehabilitation and any permanent reduction in earning capacity are recoverable damages. Some amputees successfully return to their previous careers with accommodations, while others require complete career changes."
    },
    {
      question: "How do construction accidents cause amputations?",
      answer: "Construction amputations commonly result from unguarded machinery, defective power tools, crane and heavy equipment accidents, electrical injuries requiring amputation, falls from height causing crushing injuries, and struck-by accidents with heavy objects. OSHA violations are often involved, providing evidence of negligence. Multiple parties may be liable including general contractors, subcontractors, equipment manufacturers, and property owners. These cases often result in substantial recoveries due to available commercial insurance."
    },
    {
      question: "What is the role of peer support in amputation recovery?",
      answer: "Peer support from other amputees provides practical advice about prosthetics and adaptation, emotional support from those with shared experiences, inspiration and hope for the future, practical tips for daily living, and social connections reducing isolation. Peer support programs are increasingly recognized as essential components of comprehensive amputation care. The cost of peer support programs and their documented benefits support higher compensation awards for comprehensive rehabilitation."
    },
    {
      question: "How do power tool accidents cause amputations?",
      answer: "Power tool amputations often involve circular saws, table saws, grinders, and industrial equipment with inadequate safety guards, defective safety mechanisms, lack of proper warnings, and user error due to inadequate training. Manufacturer liability may exist for design defects or failure to warn. Employer liability exists for inadequate training or safety enforcement. These cases require immediate preservation of the equipment for expert analysis and often result in significant settlements."
    },
    {
      question: "What long-term complications can occur after amputation?",
      answer: "Long-term complications include phantom limb pain affecting 60-80% of amputees, residual limb pain from nerve damage or poor healing, skin problems from prosthetic friction, bone spurs requiring revision surgery, infections in the residual limb, joint problems from altered gait patterns, back pain from compensation mechanisms, depression and anxiety disorders, and social isolation issues. These complications significantly impact quality of life and justify substantial pain and suffering awards."
    },
    {
      question: "How do dog attacks result in amputations?",
      answer: "Severe dog attacks can cause crushing injuries, tissue destruction requiring amputation, infection leading to sepsis and amputation, and arterial damage causing tissue death. Large, powerful dogs pose the greatest amputation risk. Dog owner liability is strict in California - owners are liable regardless of the dog's previous behavior. Property owner liability may also exist for allowing dangerous dogs on premises. These cases often involve homeowner's insurance providing substantial coverage."
    },
    {
      question: "What is the difference between partial and complete amputation?",
      answer: "Complete amputation involves total severance of the limb, while partial amputation maintains some tissue connection. Partial amputations may allow reattachment but often result in significant disability. Legal considerations include whether immediate treatment was adequate, whether complete amputation became necessary due to poor care, and the extent of permanent disability. Both types warrant substantial compensation, but complete amputations typically result in higher awards due to greater functional loss."
    },
    {
      question: "How do infections lead to amputation?",
      answer: "Infections can cause amputations through misdiagnosed wound infections, delayed antibiotic treatment allowing sepsis, improper wound care in hospitals, medication errors affecting immune response, and surgical site infections after procedures. Medical malpractice claims may exist if healthcare providers failed to diagnose, treat, or prevent infections that led to amputation. These cases require extensive medical record review and expert testimony to establish standard of care violations."
    },
    {
      question: "What adaptive equipment is needed after amputation?",
      answer: "Adaptive equipment includes prosthetic limbs and accessories, mobility aids (wheelchairs, crutches, walkers), bathroom safety equipment, kitchen adaptations for one-handed use, dressing aids and adaptive clothing, recreational equipment modifications, computer and technology adaptations, and vehicle modifications for driving. The cost of adaptive equipment is substantial and continues throughout the amputee's lifetime. These costs are fully recoverable in successful amputation claims."
    },
    {
      question: "How do car accidents cause amputations?",
      answer: "Car accidents cause amputations through crushing injuries from impact, entrapment requiring amputation for rescue, burns causing tissue death, and severe fractures with arterial damage. High-speed crashes, rollover accidents, and accidents involving large vehicles pose the greatest amputation risk. These cases often involve multiple liable parties and substantial insurance coverage. The sudden, traumatic nature of car accident amputations typically results in significant psychological trauma requiring comprehensive damages."
    },
    {
      question: "What support services are available for amputation families?",
      answer: "Support services include family counseling and therapy, support groups for family members, educational resources about amputation, financial assistance programs, respite care services, and advocacy organizations. The emotional and financial stress on families is enormous. Family support services are considered essential components of comprehensive amputation care, and their costs are recoverable damages. Early family intervention improves outcomes for both the amputee and family members."
    },
    {
      question: "How do you calculate future medical costs in amputation cases?",
      answer: "Future medical costs calculation involves life care planning by medical professionals, prosthetic replacement schedules and projected costs, ongoing rehabilitation therapy needs, potential revision surgeries, phantom pain treatment costs, psychological counseling requirements, and home healthcare assistance. These calculations often exceed $500,000-$1 million for young amputees. We work with certified life care planners and economists to ensure accurate projections that account for medical inflation and changing technology."
    },
    {
      question: "What activities are permanently affected by amputation?",
      answer: "Amputation permanently affects recreational activities and sports participation, career and job performance, driving and transportation, household tasks and maintenance, personal care and hygiene, social activities and relationships, sexual function and intimacy, and overall independence and mobility. The loss of ability to participate in previously enjoyed activities is a significant component of damages known as 'loss of enjoyment of life.' These damages often justify awards of $200,000-$1 million depending on the individual's age and lifestyle."
    },
    {
      question: "How do workplace safety violations contribute to amputations?",
      answer: "Common workplace safety violations include unguarded machinery and equipment, inadequate lockout/tagout procedures, insufficient employee training, missing or defective safety equipment, poor maintenance of equipment, and failure to follow OSHA standards. Safety violations provide strong evidence of negligence in amputation cases. OSHA citations and violations can be used as evidence in civil lawsuits. Employers who violate safety standards face both regulatory penalties and civil liability for resulting injuries."
    },
    {
      question: "What is the role of occupational therapy in amputation recovery?",
      answer: "Occupational therapy helps amputees relearn daily living skills, adapt work environments and techniques, use adaptive equipment effectively, develop upper body strength and dexterity, manage phantom limb sensations, and adjust psychologically to physical changes. Occupational therapy is essential for maximizing independence and quality of life. The cost of occupational therapy throughout the recovery process is substantial and fully recoverable in amputation injury claims."
    },
    {
      question: "How do amputation cases differ from other personal injury cases?",
      answer: "Amputation cases involve higher damage amounts due to permanent disability, require specialized medical and vocational experts, have longer case development periods for proper evaluation, involve complex life care planning, require extensive documentation of future needs, and often result in settlements exceeding $1 million. The permanent, visible nature of amputation injuries typically generates strong jury sympathy. Insurance companies take these cases seriously and often settle for substantial amounts to avoid trial exposure."
    },
    {
      question: "What transportation modifications are needed after amputation?",
      answer: "Transportation modifications include vehicle hand controls for leg amputees, left-foot accelerator pedals, wheelchair accessible vehicles with ramps or lifts, adaptive seating and restraint systems, prosthetic storage solutions, and public transportation accessibility training. Vehicle modifications can cost $15,000-$100,000 depending on the extent of adaptation needed. These costs are recoverable damages in amputation cases, along with the ongoing costs of accessible transportation."
    },
    {
      question: "How do you prove the extent of amputation damages?",
      answer: "Proving damages requires comprehensive documentation including complete medical records and expert testimony, life care plans detailing future needs, vocational expert analysis of earning capacity, economic expert calculations of financial losses, psychological evaluations documenting emotional trauma, day-in-the-life videos showing functional limitations, and testimony from family and friends about life changes. This extensive documentation process often takes 12-18 months but is essential for maximizing compensation."
    },
    {
      question: "What happens if the person responsible for my amputation has no insurance?",
      answer: "If the responsible party lacks insurance, options include pursuing their personal assets through litigation, seeking coverage from other potentially liable parties, filing claims under your own insurance policies (uninsured motorist coverage), pursuing workers' compensation benefits if applicable, and investigating whether other parties (manufacturers, property owners) share liability. Even uninsured defendants may have attachable assets or future income. Our investigation often reveals additional sources of recovery not immediately apparent."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Amputation Injury Lawyers | Loss of Limb Attorneys | Trembach Law Firm"
        description="California amputation injury attorneys. Former defense insider maximizes compensation for limb loss victims. $509,000+ average lifetime costs. Free consultation. No fees unless we win."
        canonical="/practice-areas/amputation-injuries"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="hero-content relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            California Amputation Injury Lawyers
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            Fighting for Maximum Compensation for Limb Loss Victims
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Former Defense Attorney
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              $509,000+ Average Lifetime Costs
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              No Fees Unless We Win
            </Badge>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/amputation-case-evaluation'}
            >
              <Phone className="w-6 h-6 mr-3" />
              Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 border-2 border-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/amputation-compensation-calculator'}
            >
              <DollarSign className="w-6 h-6 mr-3" />
              Calculate Compensation
            </Button>
          </div>
        </div>
      </section>

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="flex-1 px-6 py-12" ref={contentRef}>
          
          {/* Navigation Tabs */}
          <div className="flex overflow-x-auto mb-8 border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'text-red-600 border-b-2 border-red-600'
                      : 'text-gray-600 hover:text-red-600'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Overview Section */}
          <section id="overview" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <FileText className="w-8 h-8 mr-3 text-red-600" />
                  Catastrophic Amputation Injuries Demand Exceptional Legal Representation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <p>
                  The loss of a limb represents one of the most catastrophic injuries a person can endure. Whether resulting from a traumatic accident, medical malpractice, or workplace incident, amputation fundamentally alters every aspect of life. At Trembach Law Firm, we understand that behind every amputation case is a person facing profound physical, emotional, and financial challenges that will persist for a lifetime.
                </p>
                <p>
                  As a former defense attorney who previously represented insurance companies, I've seen firsthand how they minimize amputation claims and exploit victims during their most vulnerable moments. This insider knowledge now serves my clients, helping them secure maximum compensation for their life-changing injuries.
                </p>

                {/* Statistics Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
                  <Card className="text-center p-6 bg-gradient-to-br from-red-50 to-red-100">
                    <div className="text-3xl font-bold text-red-600">185,000</div>
                    <div className="text-sm font-medium text-gray-700">New amputations annually in the US</div>
                  </Card>
                  <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                    <div className="text-3xl font-bold text-blue-600">$509,275</div>
                    <div className="text-sm font-medium text-gray-700">Average lifetime medical costs</div>
                  </Card>
                  <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                    <div className="text-3xl font-bold text-purple-600">60-80%</div>
                    <div className="text-sm font-medium text-gray-700">Experience phantom limb pain</div>
                  </Card>
                  <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
                    <div className="text-3xl font-bold text-green-600">$750K-$5M</div>
                    <div className="text-sm font-medium text-gray-700">Typical settlement range</div>
                  </Card>
                </div>

                <Collapsible open={expandedSections['overview-detail']} onOpenChange={() => toggleSection('overview-detail')}>
                  <CollapsibleTrigger className="flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                    Learn More About Amputation Injuries
                    {expandedSections['overview-detail'] ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4 mt-4 text-base">
                    <p>
                      Amputation injuries represent the most devastating consequences of negligence, forever altering victims' lives and imposing enormous financial burdens. The immediate medical crisis of traumatic amputation requires emergency intervention, often followed by multiple surgeries, extensive rehabilitation, and lifelong care needs. The psychological trauma of losing a limb compounds the physical challenges, creating depression, anxiety, and social isolation that can persist for years.
                    </p>
                    <p>
                      The financial impact extends far beyond initial medical treatment. Prosthetic limbs require replacement every 3-5 years at costs ranging from $15,000 to $70,000 each. Advanced computerized prosthetics for leg amputees can cost $50,000 or more, while sophisticated myoelectric arms approach $70,000. Many insurance plans exclude the most advanced prosthetics, leaving families to bear enormous out-of-pocket expenses.
                    </p>
                    <p>
                      Home modifications become essential for accessibility and safety. Wheelchair ramps, bathroom renovations, kitchen adaptations, and stair lifts can cost $50,000 to $150,000. Vehicle modifications for driving with prosthetics or hand controls add another $15,000 to $40,000. These modifications are not luxuries but necessities for maintaining independence and quality of life.
                    </p>
                    <p>
                      Employment impacts vary dramatically based on the individual's occupation and the location and extent of amputation. Manual laborers often face complete career changes, while office workers may maintain earning capacity with accommodations. The psychological impact of career disruption, combined with the physical limitations, creates complex vocational rehabilitation needs requiring specialized expertise.
                    </p>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>
          </section>

          {/* Case Evaluation Section */}
          <section id="evaluation" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Scale className="w-8 h-8 mr-3 text-red-600" />
                  Free Amputation Case Evaluation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6 text-lg">
                  <div>
                    <label htmlFor="accidentDate" className="block font-semibold mb-2">Date of Injury</label>
                    <Input
                      type="date"
                      id="accidentDate"
                      value={formData.accidentDate}
                      onChange={e => setFormData({ ...formData, accidentDate: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="injuryType" className="block font-semibold mb-2">Type of Injury</label>
                    <Select
                      onValueChange={value => setFormData({ ...formData, injuryType: value })}
                      value={formData.injuryType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="traumatic">Traumatic Amputation</SelectItem>
                        <SelectItem value="surgical">Surgical Amputation</SelectItem>
                        <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                        <SelectItem value="workplace">Workplace Injury</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="accidentLocation" className="block font-semibold mb-2">Location of Accident</label>
                    <Input
                      type="text"
                      id="accidentLocation"
                      value={formData.accidentLocation}
                      onChange={e => setFormData({ ...formData, accidentLocation: e.target.value })}
                      placeholder="City, State"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="amputationType" className="block font-semibold mb-2">Type of Amputation</label>
                    <Select
                      onValueChange={value => setFormData({ ...formData, amputationType: value })}
                      value={formData.amputationType}
                      required
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select amputation type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="finger">Finger</SelectItem>
                        <SelectItem value="hand">Hand</SelectItem>
                        <SelectItem value="arm">Arm</SelectItem>
                        <SelectItem value="toe">Toe</SelectItem>
                        <SelectItem value="foot">Foot</SelectItem>
                        <SelectItem value="below-knee">Below Knee</SelectItem>
                        <SelectItem value="above-knee">Above Knee</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="medicalTreatment" className="block font-semibold mb-2">Medical Treatment Received</label>
                    <Input
                      type="text"
                      id="medicalTreatment"
                      value={formData.medicalTreatment}
                      onChange={e => setFormData({ ...formData, medicalTreatment: e.target.value })}
                      placeholder="Brief description"
                      required
                    />
                  </div>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold w-full">
                    Submit Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>

          {/* Immediate Steps Section */}
          <section id="what-to-do" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="w-8 h-8 mr-3 text-red-600" />
                  Immediate Steps After an Amputation Injury
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={whatToDoImage} alt="Immediate care for amputation" className="w-full rounded-lg mb-6" />
                <ol className="list-decimal list-inside space-y-4">
                  <li>
                    <strong>Prioritize Medical Treatment:</strong> Your health comes first. Ensure you receive immediate and ongoing medical care from specialists experienced in amputation injuries. Document all treatments, surgeries, and rehabilitation efforts.
                  </li>
                  <li>
                    <strong>Preserve All Evidence:</strong> Document the accident scene, keep all medical records, preserve the amputated limb if possible for examination, and maintain records of all expenses related to your injury.
                  </li>
                  <li>
                    <strong>Avoid Insurance Company Tactics:</strong> Do not give recorded statements or sign any documents from insurance companies without legal representation. They will use your words against you to minimize compensation.
                  </li>
                  <li>
                    <strong>Contact Experienced Counsel:</strong> Amputation cases are complex and require immediate legal action. California's statute of limitations is generally two years, but evidence disappears quickly.
                  </li>
                </ol>
              </CardContent>
            </Card>
          </section>

          {/* Types of Amputations Section */}
          <section id="types-of-amputations" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Scissors className="w-8 h-8 mr-3 text-red-600" />
                  Types of Amputation Injuries We Handle
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={amputationTypesImage} alt="Types of amputations" className="w-full rounded-lg mb-6" />
                <p>
                  Amputation injuries vary significantly in their severity and impact on victims' lives. Upper extremity amputations, including finger, hand, and arm amputations, account for approximately 70% of all amputation injuries and profoundly affect a person's ability to work, perform daily tasks, and maintain independence. The loss of even a single finger can end careers for musicians, surgeons, or skilled craftspeople, while arm amputations require complete life restructuring.
                </p>
                <p>
                  Lower extremity amputations – including toe, foot, below-knee (BKA), and above-knee (AKA) amputations – present unique challenges for mobility and independence. Above-knee amputations are particularly devastating, requiring more complex prosthetics and extensive rehabilitation. The energy expenditure for walking with an above-knee prosthesis increases by 60-100%, fundamentally altering a person's activity level and quality of life.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Rehabilitation Section */}
          <section id="rehabilitation" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Activity className="w-8 h-8 mr-3 text-red-600" />
                  Rehabilitation After Amputation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={rehabilitationImage} alt="Amputation rehabilitation" className="w-full rounded-lg mb-6" />
                <p>
                  Rehabilitation is a critical phase in amputation recovery, involving physical therapy to regain strength and mobility, occupational therapy to relearn daily living skills, and psychological counseling to address emotional trauma. The process can take months to years, depending on the level of amputation and individual circumstances.
                </p>
                <p>
                  Prosthetic training is essential for adapting to artificial limbs, improving balance, and restoring independence. Our firm works with top rehabilitation specialists to ensure clients receive comprehensive care and support throughout their recovery journey.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Compensation Section */}
          <section id="compensation" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <DollarSign className="w-8 h-8 mr-3 text-red-600" />
                  Compensation for Amputation Injuries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={compensationImage} alt="Amputation compensation" className="w-full rounded-lg mb-6" />
                <p>
                  Compensation in amputation cases covers medical expenses, lost income, pain and suffering, emotional distress, and future care costs. Our attorneys use detailed life care plans and expert testimony to calculate fair and comprehensive damages.
                </p>
                <p>
                  We aggressively negotiate with insurance companies and prepare for trial if necessary to ensure victims receive the maximum recovery they deserve.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Prosthetics Section */}
          <section id="prosthetics" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Heart className="w-8 h-8 mr-3 text-red-600" />
                  Prosthetics and Assistive Devices
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={prostheticImage} alt="Prosthetic limbs" className="w-full rounded-lg mb-6" />
                <p>
                  Prosthetic limbs are essential for restoring function and independence after amputation. Costs vary widely depending on technology and complexity, with advanced myoelectric arms and computerized knees costing tens of thousands of dollars.
                </p>
                <p>
                  Replacement and maintenance are ongoing expenses, often requiring multiple prosthetics for different activities. Our firm ensures these costs are fully accounted for in your claim.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Lifetime Care Section */}
          <section id="lifetime-care" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Stethoscope className="w-8 h-8 mr-3 text-red-600" />
                  Lifetime Care and Support
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={lifetimeCareImage} alt="Lifetime care for amputees" className="w-full rounded-lg mb-6" />
                <p>
                  Amputation victims require lifelong medical care, including prosthetic replacements, physical therapy, psychological support, and home modifications. Life care planners help estimate these costs, which often exceed half a million dollars.
                </p>
                <p>
                  Our attorneys work closely with experts to ensure your lifetime care needs are fully compensated.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Time Limits Section */}
          <section id="time-limits" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-red-600" />
                  Time Limits for Filing Amputation Claims
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-lg">
                <img src={timelintsImage} alt="Legal time limits" className="w-full rounded-lg mb-6" />
                <p>
                  California law imposes strict deadlines for filing amputation injury claims, typically two years from the date of injury. Exceptions apply for medical malpractice, government claims, and minors.
                </p>
                <p>
                  Immediate legal action is crucial to preserve evidence and protect your rights.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="content-section mb-16">
            <Card className="p-8 shadow-xl">
              <CardHeader>
                <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                  <HelpCircle className="w-8 h-8 mr-3 text-red-600" />
                  Frequently Asked Questions About Amputation Injuries
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-lg">
                {faqData.map((item, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left flex justify-between items-center font-semibold text-red-600 hover:text-red-700 transition-colors"
                      aria-expanded={expandedFaq === index}
                    >
                      {item.question}
                      {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedFaq === index && (
                      <p className="mt-2 text-gray-700">{item.answer}</p>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <div className="w-80 p-6">
          <div className="sticky top-24 space-y-6">
            {/* 3 Ways to Start Your Case */}
            <Card className="shadow-xl">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-xl font-bold text-center">
                  3 Ways to Start Your Case
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
                  onClick={() => window.location.href = 'tel:8553743202'}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call (855) 374-3202
                </Button>
                
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg"
                  onClick={() => window.location.href = '/amputation-case-evaluation'}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Free Case Evaluation
                </Button>
                
                <Button 
                  className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg"
                  onClick={() => window.location.href = '/amputation-compensation-calculator'}
                >
                  <DollarSign className="mr-2 h-5 w-5" />
                  Calculate Settlement
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="shadow-xl">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Get Help Now</h3>
                <p className="text-gray-600 mb-4">
                  Former defense attorney fighting for amputation victims
                </p>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8553743202'}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    (855) 374-3202
                  </Button>
                  <p className="text-sm text-gray-500">Available 24/7 • Free Consultation</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Time Limits Section */}
      <section className="bg-red-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-red-600 mb-4">
              Don't Wait - Time Limits Apply for California Amputation Cases
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              California law strictly limits the time you have to file an amputation injury claim. Don't let time run out on your right to compensation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6">
              <Clock className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">2 Years</h3>
              <p className="text-gray-600">General statute of limitations for amputation injury cases</p>
            </Card>
            <Card className="text-center p-6">
              <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">6 Months</h3>
              <p className="text-gray-600">Deadline for claims against government entities</p>
            </Card>
            <Card className="text-center p-6">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Act Now</h3>
              <p className="text-gray-600">Evidence disappears quickly - immediate action protects your rights</p>
            </Card>
          </div>
          
          <div className="text-center">
            <Button 
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-lg rounded-full"
              onClick={() => window.location.href = '/amputation-case-evaluation'}
            >
              Start Your Free Case Evaluation Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmputationInjuries;
