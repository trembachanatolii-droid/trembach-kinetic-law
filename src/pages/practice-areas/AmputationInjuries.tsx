import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';
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
  Activity,
  Calculator,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/amputation-hero-new.jpg';
import whatToDoImage from '@/assets/practice-areas/amputation-immediate-care.jpg';
import amputationTypesImage from '@/assets/practice-areas/amputation-types.jpg';
import rehabilitationImage from '@/assets/practice-areas/amputation-rehabilitation.jpg';
import compensationImage from '@/assets/practice-areas/amputation-compensation.jpg';
import prostheticImage from '@/assets/practice-areas/amputation-prosthetics.jpg';
import lifetimeCareImage from '@/assets/practice-areas/amputation-lifetime-care.jpg';
import timeLimitsImage from '@/assets/practice-areas/amputation-legal-timeline.jpg';
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
    console.log('Amputation Case Evaluation:', formData);
    toast.success('Thanks! We\'ll contact you shortly.');
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
      answer: "Traumatic amputations occur suddenly due to accidents, crushing injuries, or severe trauma, while surgical amputations are planned medical procedures to remove diseased or severely injured tissue. Traumatic amputations often involve more psychological trauma and may have better potential for legal recovery if caused by someone else's negligence. Surgical amputations may be necessary due to medical malpractice, delayed treatment, or misdiagnosis. Both types can result in significant compensation depending on the circumstances and responsible parties."
    },
    {
      question: "How do partial amputations differ from complete amputations?",
      answer: "Partial amputations involve loss of fingers, toes, or parts of limbs, while complete amputations remove entire limbs. Both significantly impact function and quality of life. Partial amputations may require multiple reconstructive surgeries, specialized prosthetics for fine motor control, and ongoing therapy. Complete amputations typically involve higher prosthetic costs but may have clearer functional limitations. Compensation depends on the specific impact on the individual's life, work capacity, and long-term care needs."
    },
    {
      question: "What are the most common complications after amputation?",
      answer: "Common complications include phantom limb pain (60-80% of amputees), infection at the amputation site, poor wound healing requiring revision surgery, stump pain and discomfort, skin breakdown from prosthetic use, decreased mobility and balance, psychological issues including depression and PTSD, and joint problems from altered gait patterns. These complications can increase medical costs, extend recovery time, and significantly impact quality of life, all factors considered in compensation calculations."
    },
    {
      question: "How does age affect amputation injury compensation?",
      answer: "Age significantly impacts compensation calculations. Younger victims typically receive higher awards due to longer life expectancy (more years of lost income and higher lifetime medical costs), greater potential for adaptation and prosthetic use, higher likelihood of career advancement losses, and more years of pain and suffering. However, older victims may have established higher incomes and specialized skills that are difficult to replace. Each case requires individual analysis of age-related factors affecting damages."
    },
    {
      question: "What vocational rehabilitation is available for amputees?",
      answer: "Vocational rehabilitation helps amputees return to work or find new careers. Services include job skills assessment and retraining, adaptive equipment and workplace modifications, education about Americans with Disabilities Act accommodations, career counseling and job placement assistance, and coordination with prosthetic specialists. Costs of vocational rehabilitation are recoverable damages in amputation cases. Some amputees successfully return to previous careers with accommodations, while others may need complete retraining."
    },
    {
      question: "Can I still drive after an amputation?",
      answer: "Many amputees can drive with appropriate vehicle modifications. Options include hand controls for acceleration and braking (leg amputees), steering knobs for one-handed operation (arm amputees), left foot accelerator pedals, and specialized seating and entry systems. Vehicle modifications cost $500-$5,000 and are recoverable damages. Some states require driver testing with adaptive equipment. Driving ability significantly affects independence and employability, factors considered in compensation calculations."
    },
    {
      question: "What psychological support is needed after amputation?",
      answer: "Amputation causes significant psychological trauma requiring professional support. Common issues include grief over body image loss, depression and anxiety, post-traumatic stress disorder, social withdrawal and isolation, relationship difficulties, and adjustment disorders. Treatment includes individual and group therapy, medication management, peer support groups, and family counseling. Psychological treatment costs are substantial and recoverable in amputation cases. Mental health treatment often continues for years and significantly impacts quality of life."
    },
    {
      question: "How do insurance companies evaluate amputation claims?",
      answer: "Insurance companies use specific criteria to evaluate amputation claims: level and type of amputation, functional impairment and disability ratings, medical costs and future care needs, lost earning capacity calculations, age and life expectancy factors, degree of negligence and liability, and available policy limits. They often hire medical experts, vocational specialists, and economists to minimize claim values. Having experienced legal representation is crucial to counter insurance company tactics and ensure fair compensation."
    },
    {
      question: "What is the difference between workers' compensation and personal injury claims for amputation?",
      answer: "Workers' compensation provides limited benefits: medical expenses, partial wage replacement (typically 2/3 of wages), and disability ratings. Personal injury claims can provide full compensation including complete wage loss, pain and suffering, loss of enjoyment of life, and punitive damages. Workers' comp is no-fault but limits recovery. Personal injury requires proving negligence but allows full damages. You may have both claims if third parties contributed to your workplace amputation injury."
    },
    {
      question: "How do pre-existing conditions affect amputation cases?",
      answer: "Pre-existing conditions don't bar recovery but may affect compensation amounts. California follows the 'eggshell skull' rule - defendants must take victims as they find them. If negligence aggravates a pre-existing condition or makes amputation necessary when it wouldn't have been otherwise, full damages may be recoverable. However, pre-existing conditions may reduce future earning capacity calculations or affect prosthetic options. Thorough medical record review is essential to distinguish pre-existing issues from injury-related impairments."
    },
    {
      question: "What role do expert witnesses play in amputation cases?",
      answer: "Expert witnesses are crucial in amputation cases. Medical experts explain the nature of injuries, treatment needs, and prognosis. Life care planners detail future care costs and needs. Vocational experts calculate lost earning capacity and job market impacts. Accident reconstruction experts determine how the amputation occurred. Prosthetic specialists explain costs and limitations of artificial limbs. Economic experts calculate lifetime financial losses. These experts provide the foundation for proving damages and countering insurance company arguments."
    },
    {
      question: "Can family members sue for loss of consortium in amputation cases?",
      answer: "Yes, spouses can sue for loss of consortium, which includes loss of companionship, affection, sexual relations, and household services. Amputation injuries often severely impact marital relationships due to physical limitations, emotional trauma, and role changes within the family. Parents may also claim loss of consortium for children's amputation injuries. These damages are separate from the victim's claims and can be substantial, often reaching $100,000-$500,000 depending on the relationship's impact and duration."
    },
    {
      question: "How do amputation settlements get paid out?",
      answer: "Amputation settlements may be paid as lump sums or structured settlements. Lump sum payments provide immediate access to funds for medical expenses, home modifications, and prosthetics. Structured settlements provide guaranteed income over time, often with tax advantages. Factors affecting payout structure include victim's age, medical needs, financial planning requirements, and tax implications. Large settlements often combine both approaches - immediate lump sum for current needs and structured payments for long-term security."
    },
    {
      question: "What is the appeals process if I disagree with a settlement offer?",
      answer: "If settlement negotiations fail, your case proceeds to trial where a jury determines damages. Before trial, mediation or arbitration may be attempted. At trial, evidence is presented about liability, damages, and future needs. Jury verdicts can be higher or lower than settlement offers. Either party can appeal trial verdicts on legal grounds. The appeals process can take years and add significant costs. Experienced attorneys help evaluate whether settlement offers are fair or if trial might yield better results."
    },
    {
      question: "How do multiple party liability cases work in amputation injuries?",
      answer: "Multiple parties may be liable for amputation injuries: vehicle manufacturers and drivers in car accidents, employers and equipment manufacturers in workplace injuries, property owners and contractors in construction accidents, and medical providers and device manufacturers in medical cases. Each defendant's insurance coverage is potentially available. California's joint and several liability rules allow recovery from any defendant able to pay, regardless of their percentage of fault. Multiple defendants often increase total compensation available."
    },
    {
      question: "What documentation should I keep for my amputation case?",
      answer: "Essential documentation includes all medical records and bills from emergency treatment through rehabilitation, photos of the accident scene and your injuries, witness statements and contact information, employment records showing income and benefits, insurance policies and correspondence, prosthetic costs and replacement schedules, home modification receipts, therapy and counseling records, and daily journals documenting pain, limitations, and emotional impact. Thorough documentation strengthens your case and maximizes compensation."
    },
    {
      question: "How long do amputation injury cases typically take to resolve?",
      answer: "Amputation cases typically take 1-3 years to resolve, depending on factors like injury severity and treatment duration, number of defendants and insurance companies involved, complexity of liability issues, extent of damages and future care needs, and court scheduling. Cases shouldn't be rushed to settlement before maximum medical improvement is reached and future needs are understood. Complex cases involving multiple surgeries, extensive rehabilitation, or disputed liability may take longer. Experienced attorneys balance thorough preparation with timely resolution."
    },
    {
      question: "What happens if the at-fault party has insufficient insurance coverage?",
      answer: "If defendants lack adequate insurance, several options exist: pursue personal assets of wealthy defendants, seek coverage from additional insurance policies (umbrella policies, professional liability), file claims against multiple responsible parties, use your own underinsured motorist coverage (in vehicle accidents), and consider asset protection violations that might pierce corporate veils. Catastrophic injuries like amputations may exceed standard insurance limits, making thorough investigation of all available coverage crucial for adequate compensation."
    },
    {
      question: "How do I choose the right attorney for my amputation case?",
      answer: "Choose an attorney with specific experience in amputation cases, proven track record with catastrophic injury settlements, access to medical and financial experts, adequate resources to handle complex litigation, trial experience in personal injury cases, and clear communication about fees and expectations. Amputation cases require specialized knowledge of prosthetics, rehabilitation, and life care planning. Initial consultations are typically free, allowing you to evaluate multiple attorneys before making this crucial decision."
    },
    {
      question: "What makes amputation cases different from other personal injury cases?",
      answer: "Amputation cases involve unique factors: permanent, life-altering disabilities requiring lifetime care, extremely high medical costs for prosthetics and replacements, complex psychological trauma and adjustment issues, significant impact on family members and relationships, specialized medical experts and life care planners, and potential for million-dollar-plus damages. These cases require attorneys with specific experience in catastrophic injuries who understand the medical, psychological, and financial complexities of amputation injuries."
    },
    {
      question: "Are there support groups available for amputation victims?",
      answer: "Yes, numerous support groups exist for amputees and their families: Amputee Coalition provides resources and local chapter connections, limb loss support groups in most major cities, online communities and forums for peer support, specialized groups for children with amputations, activity-specific groups (sports, hobbies), and counseling groups for spouses and family members. Participation in support groups aids psychological recovery and provides practical advice about living with amputation. Support group involvement demonstrates ongoing emotional impact in legal cases."
    },
    {
      question: "How do amputation cases affect Social Security Disability claims?",
      answer: "Amputations often qualify for Social Security Disability benefits, particularly for lower extremity amputations or bilateral upper extremity amputations. The Social Security Administration has specific listings for amputation disabilities. Benefits include monthly payments and Medicare eligibility after 24 months. However, large personal injury settlements may affect SSI eligibility due to asset limits. Coordination between personal injury and disability claims requires careful planning to maximize total benefits while preserving eligibility for ongoing government assistance."
    },
    {
      question: "What new technologies are available for amputees?",
      answer: "Advanced prosthetic technologies include myoelectric limbs controlled by muscle signals, computer-controlled knees that adjust to walking patterns, individual finger control in prosthetic hands, sensory feedback systems that provide touch sensation, osseointegration (direct bone attachment), and 3D-printed custom prosthetics. These technologies significantly improve function but cost substantially more than basic prosthetics. Legal cases should account for current and future technological advances to ensure adequate compensation for the best available prosthetic options throughout the victim's lifetime."
    },
    {
      question: "How do I maximize my amputation injury compensation?",
      answer: "Maximize compensation by seeking immediate medical attention and following all treatment recommendations, hiring an experienced amputation injury attorney early in the process, thoroughly documenting all aspects of your injury and its impact, working with medical experts to establish future care needs, obtaining life care plans and vocational assessments, preserving all evidence related to how the injury occurred, being patient with the legal process to ensure full damages are understood, and avoiding early settlement offers before maximum medical improvement is reached. Each amputation case is unique and requires personalized legal strategy."
    }
  ];

  return (
    <>
      <SEO 
        title="California Amputation Injury Attorneys | Maximum Compensation for Limb Loss"
        description="California amputation injury lawyers fighting for maximum compensation. Experienced in catastrophic limb loss cases. Free consultation for traumatic amputation injuries."
        canonical="https://trembachlaw.com/practice-areas/amputation-injuries"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack />
        
        {/* Hero Section - Exact ratio match to Premises Liability */}
        <section 
          ref={heroRef}
          className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="hero-content relative z-10 text-center text-white max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              California Amputation Injury Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Fighting for Maximum Compensation for Limb Loss Victims
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:8181234567'}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <div className="flex items-center text-lg">
                <span className="mr-2">Former Defense Attorney</span>
                <span className="mx-2">•</span>
                <span className="mr-2">$509,000+ Average Lifetime Costs</span>
                <span className="mx-2">•</span>
                <span>No Fees Unless We Win</span>
              </div>
            </div>
            <div className="flex items-center justify-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-3 text-lg">Trusted by Amputation Victims</span>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Main Content - 3 columns */}
            <div className="lg:col-span-3" ref={contentRef}>
              
              {/* Navigation Tabs */}
              <div className="content-section mb-8">
                <div className="flex flex-wrap gap-2 p-2 bg-muted rounded-lg">
                  {tabs.map((tab) => {
                    const IconComponent = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={`flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'bg-primary text-primary-foreground shadow-sm'
                            : 'text-muted-foreground hover:text-primary hover:bg-background'
                        }`}
                      >
                        <IconComponent className="w-4 h-4 mr-2" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Overview Section */}
              <section id="overview" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary flex items-center">
                      <FileText className="w-8 h-8 mr-3" />
                      Catastrophic Amputation Injuries Demand Exceptional Legal Representation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <p className="text-lg leading-relaxed mb-6">
                      The loss of a limb represents one of the most catastrophic injuries a person can endure. Whether resulting from a traumatic accident, medical malpractice, or workplace incident, amputation fundamentally alters every aspect of life. At Trembach Law Firm, we understand that behind every amputation case is a person facing profound physical, emotional, and financial challenges that will persist for a lifetime.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-8">
                      As a former defense attorney who previously represented insurance companies, I've seen firsthand how they minimize amputation claims and exploit victims during their most vulnerable moments. This inside knowledge gives our clients a significant advantage in securing maximum compensation for their life-altering injuries.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 my-8">
                      <div className="text-center p-6 bg-blue-50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-600">185,000</div>
                        <div className="text-sm text-blue-600 font-medium">New amputations annually in the US</div>
                      </div>
                      <div className="text-center p-6 bg-red-50 rounded-lg">
                        <div className="text-3xl font-bold text-red-600">$509,275</div>
                        <div className="text-sm text-red-600 font-medium">Average lifetime medical costs</div>
                      </div>
                      <div className="text-center p-6 bg-yellow-50 rounded-lg">
                        <div className="text-3xl font-bold text-yellow-600">60-80%</div>
                        <div className="text-sm text-yellow-600 font-medium">Experience phantom limb pain</div>
                      </div>
                      <div className="text-center p-6 bg-green-50 rounded-lg">
                        <div className="text-3xl font-bold text-green-600">$750K-$5M</div>
                        <div className="text-sm text-green-600 font-medium">Typical settlement range</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-16">
                <div className="premium-form-container interactive-card rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden backdrop-blur-md">
                  <div className="text-center py-12 px-8 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-sm">
                    <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
                      Free Case Evaluation
                    </h2>
                    <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                      Get Your Free Consultation for Amputation Injuries
                    </p>
                  </div>

                  <div className="px-8 pb-12 bg-white/95 backdrop-blur-sm">
                    <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto">
                      <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Accident Date
                            </label>
                            <Input
                              type="date"
                              name="accidentDate"
                              value={formData.accidentDate}
                              onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                              className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Type of Amputation
                            </label>
                            <Select value={formData.amputationType} onValueChange={(value) => setFormData(prev => ({ ...prev, amputationType: value }))}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="Select amputation type" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="finger">Finger/Thumb</SelectItem>
                                <SelectItem value="hand">Hand</SelectItem>
                                <SelectItem value="arm-below">Below-Elbow Arm</SelectItem>
                                <SelectItem value="arm-above">Above-Elbow Arm</SelectItem>
                                <SelectItem value="toe">Toe</SelectItem>
                                <SelectItem value="foot">Foot</SelectItem>
                                <SelectItem value="leg-below">Below-Knee Leg</SelectItem>
                                <SelectItem value="leg-above">Above-Knee Leg</SelectItem>
                                <SelectItem value="multiple">Multiple Limbs</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Accident Location
                            </label>
                            <Select value={formData.accidentLocation} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentLocation: value }))}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="Where did the accident occur?" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="workplace">Workplace</SelectItem>
                                <SelectItem value="construction-site">Construction Site</SelectItem>
                                <SelectItem value="factory">Factory/Manufacturing</SelectItem>
                                <SelectItem value="hospital">Hospital/Medical Facility</SelectItem>
                                <SelectItem value="road">Road/Highway</SelectItem>
                                <SelectItem value="home">Home/Residence</SelectItem>
                                <SelectItem value="store">Store/Business</SelectItem>
                                <SelectItem value="other">Other Location</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-900 mb-3">
                              Cause of Accident
                            </label>
                            <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                              <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                                <SelectValue placeholder="What caused the accident?" />
                              </SelectTrigger>
                              <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                                <SelectItem value="machinery">Defective Machinery</SelectItem>
                                <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                                <SelectItem value="car-accident">Car Accident</SelectItem>
                                <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                                <SelectItem value="product-defect">Defective Product</SelectItem>
                                <SelectItem value="construction">Construction Accident</SelectItem>
                                <SelectItem value="industrial-accident">Industrial Accident</SelectItem>
                                <SelectItem value="other">Other Cause</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">
                            Medical Treatment Received
                          </label>
                          <Select value={formData.medicalTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, medicalTreatment: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="What medical treatment have you received?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="emergency-surgery">Emergency Surgery</SelectItem>
                              <SelectItem value="reattachment-attempt">Reattachment Attempt</SelectItem>
                              <SelectItem value="amputation-surgery">Amputation Surgery</SelectItem>
                              <SelectItem value="multiple-surgeries">Multiple Surgeries</SelectItem>
                              <SelectItem value="prosthetic-fitting">Prosthetic Fitting</SelectItem>
                              <SelectItem value="rehabilitation">Rehabilitation Therapy</SelectItem>
                              <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                              <SelectItem value="none-yet">No Treatment Yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="text-center">
                          <Button
                            type="submit"
                            className="w-full h-16 text-xl font-semibold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                          >
                            Start My Free Case Evaluation
                          </Button>
                          <p className="mt-4 text-sm text-slate-600">
                            100% Free • No Upfront Costs • Former Defense Attorney Advantage
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>

              {/* Immediate Steps Section */}
              <section id="what-to-do" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <AlertTriangle className="w-6 h-6 mr-2" />
                      Immediate Steps After an Amputation Injury
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <div className="space-y-6">
                          <div className="p-6 border-l-4 border-red-500 bg-red-50">
                            <h3 className="text-xl font-semibold text-red-700 mb-3">1. Prioritize Medical Treatment</h3>
                            <p className="text-red-600">
                              Your health comes first. Ensure you receive immediate and ongoing medical care from specialists experienced in amputation injuries. Document all treatments, surgeries, and rehabilitation efforts.
                            </p>
                          </div>
                          
                          <div className="p-6 border-l-4 border-orange-500 bg-orange-50">
                            <h3 className="text-xl font-semibold text-orange-700 mb-3">2. Preserve All Evidence</h3>
                            <p className="text-orange-600">
                              Document the accident scene, keep all medical records, preserve the amputated limb if possible for examination, and maintain records of all expenses related to your injury.
                            </p>
                          </div>
                          
                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                              >
                                <span className="text-primary font-medium">Show More Critical Steps</span>
                                <ChevronDown className="w-5 h-5 text-primary" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="space-y-6 mt-6">
                              <div className="p-6 border-l-4 border-yellow-500 bg-yellow-50">
                                <h3 className="text-xl font-semibold text-yellow-700 mb-3">3. Avoid Insurance Company Tactics</h3>
                                <p className="text-yellow-600">
                                  Do not give recorded statements or sign any documents from insurance companies without legal representation. They will use your words against you to minimize compensation.
                                </p>
                              </div>
                              
                              <div className="p-6 border-l-4 border-blue-500 bg-blue-50">
                                <h3 className="text-xl font-semibold text-blue-700 mb-3">4. Contact Experienced Counsel</h3>
                                <p className="text-blue-600">
                                  Amputation cases are complex and require immediate legal action. California's statute of limitations is generally two years, but evidence disappears quickly.
                                </p>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={whatToDoImage} 
                          alt="Emergency medical care for amputation injuries" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Types of Amputations Section */}
              <section id="types-of-amputations" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Scissors className="w-6 h-6 mr-2" />
                      Types of Amputation Injuries We Handle
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="text-lg mb-6">
                          Amputation injuries vary significantly in their severity and impact on victims' lives. Upper extremity amputations, including finger, hand, and arm amputations, account for approximately 70% of all amputation injuries and profoundly affect a person's ability to work, perform daily tasks, and maintain independence. The loss of even a single finger can end careers for musicians, surgeons, or skilled craftspeople, while arm amputations require complete life restructuring.
                        </p>
                        
                        <p className="text-lg mb-6">
                          Lower extremity amputations – including toe, foot, below-knee (BKA), and above-knee (AKA) amputations – present unique challenges for mobility and independence. Above-knee amputations are particularly devastating, requiring more complex prosthetics and extensive rehabilitation. The energy expenditure for walking with an above-knee prosthesis increases by 60-100%, fundamentally altering a person's activity level and quality of life.
                        </p>
                        
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                            >
                              <span className="text-primary font-medium">Learn More About Amputation Types</span>
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-6">
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold mb-3">Upper Extremity Amputations</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Finger and thumb amputations affecting grip and fine motor skills</li>
                                  <li>• Hand amputations requiring advanced prosthetic technology</li>
                                  <li>• Below-elbow amputations preserving elbow function</li>
                                  <li>• Above-elbow amputations requiring more complex prosthetics</li>
                                  <li>• Shoulder disarticulation amputations</li>
                                </ul>
                              </div>
                              
                              <div>
                                <h4 className="text-xl font-semibold mb-3">Lower Extremity Amputations</h4>
                                <ul className="space-y-2 text-muted-foreground">
                                  <li>• Toe amputations affecting balance and gait</li>
                                  <li>• Partial foot amputations requiring specialized footwear</li>
                                  <li>• Below-knee amputations with preserved knee function</li>
                                  <li>• Above-knee amputations requiring computerized prosthetics</li>
                                  <li>• Hip disarticulation amputations</li>
                                  <li>• Bilateral amputations requiring extensive rehabilitation</li>
                                </ul>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={amputationTypesImage} 
                          alt="Different types of amputation injuries" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Rehabilitation Section */}
              <section id="rehabilitation" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Activity className="w-6 h-6 mr-2" />
                      Comprehensive Rehabilitation Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="text-lg mb-6">
                          Amputation rehabilitation is a complex, multi-phase process that extends far beyond initial medical treatment. The rehabilitation journey typically spans 6-18 months for initial adjustment, with ongoing therapy and support continuing for years. This comprehensive process requires a coordinated team approach involving multiple medical specialists, therapists, and support professionals.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="p-4 bg-blue-50 rounded-lg">
                            <h4 className="font-semibold text-blue-700 mb-2">Phase 1: Acute Care (0-3 months)</h4>
                            <ul className="text-sm text-blue-600">
                              <li>• Wound healing and infection prevention</li>
                              <li>• Pain management and phantom limb treatment</li>
                              <li>• Early mobility training</li>
                              <li>• Psychological support initiation</li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-green-50 rounded-lg">
                            <h4 className="font-semibold text-green-700 mb-2">Phase 2: Prosthetic Training (3-12 months)</h4>
                            <ul className="text-sm text-green-600">
                              <li>• Prosthetic fitting and adjustment</li>
                              <li>• Gait training and balance work</li>
                              <li>• Functional activity training</li>
                              <li>• Strength and endurance building</li>
                            </ul>
                          </div>
                        </div>
                        
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                            >
                              <span className="text-primary font-medium">View Complete Rehabilitation Timeline</span>
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-6">
                            <div className="space-y-6">
                              <div className="p-4 bg-yellow-50 rounded-lg">
                                <h4 className="font-semibold text-yellow-700 mb-2">Phase 3: Advanced Training (6-18 months)</h4>
                                <ul className="text-sm text-yellow-600">
                                  <li>• Advanced prosthetic control techniques</li>
                                  <li>• Return to work preparation</li>
                                  <li>• Sports and recreational activities</li>
                                  <li>• Driving assessment and training</li>
                                </ul>
                              </div>
                              
                              <div className="p-4 bg-purple-50 rounded-lg">
                                <h4 className="font-semibold text-purple-700 mb-2">Ongoing Support (Lifetime)</h4>
                                <ul className="text-sm text-purple-600">
                                  <li>• Regular prosthetic maintenance and replacement</li>
                                  <li>• Continued psychological support</li>
                                  <li>• Peer support group participation</li>
                                  <li>• Technology upgrades and training</li>
                                </ul>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={rehabilitationImage} 
                          alt="Amputation rehabilitation therapy session" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Compensation Section */}
              <section id="compensation" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <DollarSign className="w-6 h-6 mr-2" />
                      Understanding Amputation Compensation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="text-lg mb-6">
                          Amputation injury compensation must account for the profound, lifelong impact of limb loss. Unlike other injuries that may heal over time, amputation creates permanent disabilities requiring ongoing medical care, prosthetic replacements, and lifestyle adaptations. California law recognizes both economic and non-economic damages, with amputation cases typically resulting in some of the highest settlement amounts in personal injury law.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="p-6 bg-blue-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Economic Damages</h4>
                            <ul className="space-y-2 text-blue-600">
                              <li>• Emergency medical treatment and surgeries</li>
                              <li>• Prosthetic limbs and replacements</li>
                              <li>• Rehabilitation and physical therapy</li>
                              <li>• Lost wages and reduced earning capacity</li>
                              <li>• Home modifications and accessibility</li>
                              <li>• Transportation and equipment costs</li>
                            </ul>
                          </div>
                          
                          <div className="p-6 bg-green-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-green-700 mb-3">Non-Economic Damages</h4>
                            <ul className="space-y-2 text-green-600">
                              <li>• Pain and suffering (physical and emotional)</li>
                              <li>• Loss of enjoyment of life</li>
                              <li>• Permanent disability and disfigurement</li>
                              <li>• Mental anguish and depression</li>
                              <li>• Loss of consortium for spouses</li>
                              <li>• Impact on family relationships</li>
                            </ul>
                          </div>
                        </div>
                        
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                            >
                              <span className="text-primary font-medium">Learn More About Compensation Factors</span>
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-6">
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold mb-3">Factors Affecting Compensation Amount</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-red-50 rounded-lg">
                                    <h5 className="font-semibold text-red-700 mb-2">Injury-Specific Factors</h5>
                                    <ul className="text-sm text-red-600">
                                      <li>• Level and type of amputation</li>
                                      <li>• Dominant vs. non-dominant limb</li>
                                      <li>• Single vs. multiple amputations</li>
                                      <li>• Associated injuries and complications</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-orange-50 rounded-lg">
                                    <h5 className="font-semibold text-orange-700 mb-2">Personal Factors</h5>
                                    <ul className="text-sm text-orange-600">
                                      <li>• Age and life expectancy</li>
                                      <li>• Occupation and career prospects</li>
                                      <li>• Pre-injury income level</li>
                                      <li>• Education and skills</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                                <h4 className="text-xl font-semibold text-yellow-700 mb-3">Typical Settlement Ranges</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                  <div>
                                    <div className="text-2xl font-bold text-yellow-600">$750K - $1.5M</div>
                                    <div className="text-sm text-yellow-600">Single finger/toe</div>
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold text-yellow-600">$1.5M - $3M</div>
                                    <div className="text-sm text-yellow-600">Hand/foot amputation</div>
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold text-yellow-600">$3M+</div>
                                    <div className="text-sm text-yellow-600">Major limb amputation</div>
                                  </div>
                                </div>
                                <p className="text-xs text-yellow-600 mt-4 text-center">
                                  *Actual settlements depend on specific case factors and degree of negligence
                                </p>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={compensationImage} 
                          alt="Legal compensation for amputation injuries" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Prosthetics Section */}
              <section id="prosthetics" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Heart className="w-6 h-6 mr-2" />
                      Advanced Prosthetic Technology and Costs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="text-lg mb-6">
                          Modern prosthetic technology has revolutionized life for amputees, offering advanced functionality that can restore significant independence and quality of life. However, these life-changing devices come with substantial costs that must be factored into compensation calculations. Prosthetic limbs require replacement every 3-5 years, with active individuals often needing multiple prosthetics for different activities.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="p-6 bg-blue-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Upper Extremity Prosthetics</h4>
                            <ul className="space-y-2 text-blue-600">
                              <li>• Basic prosthetic arms: $3,000-$30,000</li>
                              <li>• Myoelectric arms: $25,000-$70,000</li>
                              <li>• Individual finger control: $25,000-$50,000</li>
                              <li>• Sensory feedback systems: $75,000+</li>
                            </ul>
                          </div>
                          
                          <div className="p-6 bg-green-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-green-700 mb-3">Lower Extremity Prosthetics</h4>
                            <ul className="space-y-2 text-green-600">
                              <li>• Basic prosthetic legs: $5,000-$50,000</li>
                              <li>• Computerized knee units: $35,000-$50,000</li>
                              <li>• Microprocessor ankles: $15,000-$35,000</li>
                              <li>• Running/sports prosthetics: $20,000-$40,000</li>
                            </ul>
                          </div>
                        </div>
                        
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                            >
                              <span className="text-primary font-medium">Explore Advanced Prosthetic Options</span>
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-6">
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold mb-3">Cutting-Edge Technologies</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-purple-50 rounded-lg">
                                    <h5 className="font-semibold text-purple-700 mb-2">Emerging Technologies</h5>
                                    <ul className="text-sm text-purple-600">
                                      <li>• Osseointegration (direct bone attachment)</li>
                                      <li>• Neural control interfaces</li>
                                      <li>• 3D-printed custom prosthetics</li>
                                      <li>• Bionic limbs with sensory feedback</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-indigo-50 rounded-lg">
                                    <h5 className="font-semibold text-indigo-700 mb-2">Specialized Prosthetics</h5>
                                    <ul className="text-sm text-indigo-600">
                                      <li>• Waterproof prosthetics for swimming</li>
                                      <li>• Shock-absorbing legs for running</li>
                                      <li>• Multi-grip hands for various tools</li>
                                      <li>• Prosthetics for specific occupations</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-red-400">
                                <h4 className="text-xl font-semibold text-red-700 mb-3">Lifetime Prosthetic Costs</h4>
                                <p className="text-red-600 mb-4">
                                  For a 30-year-old amputee with a life expectancy of 50 years, prosthetic costs alone can exceed $500,000-$1,000,000, not including fitting, training, repairs, and maintenance.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                                  <div>
                                    <div className="text-2xl font-bold text-red-600">$50K-$150K</div>
                                    <div className="text-sm text-red-600">Per prosthetic replacement</div>
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold text-red-600">3-5 years</div>
                                    <div className="text-sm text-red-600">Replacement frequency</div>
                                  </div>
                                  <div>
                                    <div className="text-2xl font-bold text-red-600">$1M+</div>
                                    <div className="text-sm text-red-600">Lifetime costs</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={prostheticImage} 
                          alt="Advanced prosthetic technology" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Lifetime Care Section */}
              <section id="lifetime-care" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <Stethoscope className="w-6 h-6 mr-2" />
                      Comprehensive Lifetime Care Planning
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <p className="text-lg mb-6">
                          Amputation creates lifelong medical and care needs that extend far beyond the initial injury and recovery period. Proper compensation must account for decades of ongoing medical care, prosthetic maintenance, and support services. Life care planners work with medical experts to project these needs and calculate accurate lifetime costs, which often exceed $1 million for major amputations.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="p-6 bg-blue-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-blue-700 mb-3">Ongoing Medical Care</h4>
                            <ul className="space-y-2 text-blue-600">
                              <li>• Regular physician monitoring</li>
                              <li>• Phantom limb pain treatment</li>
                              <li>• Stump care and maintenance</li>
                              <li>• Revision surgeries</li>
                              <li>• Infection prevention and treatment</li>
                              <li>• Secondary condition management</li>
                            </ul>
                          </div>
                          
                          <div className="p-6 bg-green-50 rounded-lg">
                            <h4 className="text-xl font-semibold text-green-700 mb-3">Support Services</h4>
                            <ul className="space-y-2 text-green-600">
                              <li>• Ongoing physical therapy</li>
                              <li>• Occupational therapy</li>
                              <li>• Psychological counseling</li>
                              <li>• Vocational rehabilitation</li>
                              <li>• Home care assistance</li>
                              <li>• Transportation services</li>
                            </ul>
                          </div>
                        </div>
                        
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button 
                              variant="ghost" 
                              className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                            >
                              <span className="text-primary font-medium">View Detailed Lifetime Care Breakdown</span>
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </Button>
                          </CollapsibleTrigger>
                          <CollapsibleContent className="mt-6">
                            <div className="space-y-6">
                              <div>
                                <h4 className="text-xl font-semibold mb-3">Age-Specific Care Considerations</h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div className="p-4 bg-purple-50 rounded-lg">
                                    <h5 className="font-semibold text-purple-700 mb-2">Young Adults (18-35)</h5>
                                    <ul className="text-sm text-purple-600">
                                      <li>• Career development support</li>
                                      <li>• Family planning considerations</li>
                                      <li>• Sports and recreation adaptation</li>
                                      <li>• Technology upgrade training</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-indigo-50 rounded-lg">
                                    <h5 className="font-semibold text-indigo-700 mb-2">Middle Age (35-55)</h5>
                                    <ul className="text-sm text-indigo-600">
                                      <li>• Joint preservation therapy</li>
                                      <li>• Ergonomic workplace modifications</li>
                                      <li>• Preventive arthritis treatment</li>
                                      <li>• Family caregiver support</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-cyan-50 rounded-lg">
                                    <h5 className="font-semibold text-cyan-700 mb-2">Older Adults (55+)</h5>
                                    <ul className="text-sm text-cyan-600">
                                      <li>• Fall prevention programs</li>
                                      <li>• Mobility aid modifications</li>
                                      <li>• Home safety adaptations</li>
                                      <li>• Age-related health monitoring</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                                <h4 className="text-xl font-semibold text-yellow-700 mb-3">Lifetime Cost Projections</h4>
                                <div className="space-y-4">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="text-center">
                                      <div className="text-3xl font-bold text-yellow-600">$509,275</div>
                                      <div className="text-sm text-yellow-600">Average lifetime medical costs</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-3xl font-bold text-yellow-600">$1M+</div>
                                      <div className="text-sm text-yellow-600">Complex cases with complications</div>
                                    </div>
                                  </div>
                                  <p className="text-sm text-yellow-600">
                                    These projections include medical care, prosthetics, therapy, medications, home modifications, and support services over a lifetime.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={lifetimeCareImage} 
                          alt="Lifetime care planning for amputation patients" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* Time Limits Section */}
              <section id="time-limits" className="content-section mb-16">
                <Card className="glass-card border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-red-700 flex items-center">
                      <Clock className="w-6 h-6 mr-2" />
                      Don't Wait - Time Limits Apply for California Amputation Cases
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="md:w-2/3">
                        <div className="p-6 bg-red-100 rounded-lg border-l-4 border-red-500 mb-6">
                          <h3 className="text-xl font-semibold text-red-700 mb-3">Critical Time Deadlines</h3>
                          <p className="text-red-600 mb-4">
                            California law imposes strict deadlines for filing amputation injury claims. Missing these deadlines can permanently bar your right to compensation, regardless of how strong your case may be.
                          </p>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded">
                              <div className="text-2xl font-bold text-red-600">2 Years</div>
                              <div className="text-sm text-red-500">General personal injury statute of limitations</div>
                            </div>
                            <div className="bg-white p-4 rounded">
                              <div className="text-2xl font-bold text-red-600">6 Months</div>
                              <div className="text-sm text-red-500">Government entity claims notice requirement</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold text-red-700 mb-3">Why Immediate Action is Critical</h4>
                            <ul className="space-y-2 text-red-600">
                              <li>• Evidence disappears quickly (surveillance footage typically deleted within 30-90 days)</li>
                              <li>• Witness memories fade over time</li>
                              <li>• Medical records become harder to obtain</li>
                              <li>• Insurance companies begin building defenses immediately</li>
                              <li>• Physical evidence at accident scenes gets disturbed or removed</li>
                            </ul>
                          </div>
                          
                          <Collapsible>
                            <CollapsibleTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className="flex items-center justify-between w-full p-0 h-auto text-left hover:bg-transparent"
                              >
                                <span className="text-red-600 font-medium">Learn More About Specific Time Limits</span>
                                <ChevronDown className="w-5 h-5 text-red-600" />
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="mt-6">
                              <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div className="p-4 bg-white rounded-lg border border-red-200">
                                    <h5 className="font-semibold text-red-700 mb-2">Motor Vehicle Accidents</h5>
                                    <ul className="text-sm text-red-600">
                                      <li>• 2 years from accident date</li>
                                      <li>• Property damage: 3 years</li>
                                      <li>• Uninsured motorist claims: special rules apply</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-white rounded-lg border border-red-200">
                                    <h5 className="font-semibold text-red-700 mb-2">Workplace Injuries</h5>
                                    <ul className="text-sm text-red-600">
                                      <li>• Workers' comp: report within 30 days</li>
                                      <li>• Third-party claims: 2 years</li>
                                      <li>• Government employers: 6 months notice</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-white rounded-lg border border-red-200">
                                    <h5 className="font-semibold text-red-700 mb-2">Medical Malpractice</h5>
                                    <ul className="text-sm text-red-600">
                                      <li>• 1 year from discovery of malpractice</li>
                                      <li>• 3 years maximum from date of injury</li>
                                      <li>• 90-day notice requirement to provider</li>
                                    </ul>
                                  </div>
                                  
                                  <div className="p-4 bg-white rounded-lg border border-red-200">
                                    <h5 className="font-semibold text-red-700 mb-2">Product Liability</h5>
                                    <ul className="text-sm text-red-600">
                                      <li>• 2 years from injury discovery</li>
                                      <li>• Defective medical devices: special rules</li>
                                      <li>• Manufacturer notice requirements</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                        
                        <div className="mt-8 text-center">
                          <Link to="/amputation-case-evaluation">
                            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
                              <Zap className="w-5 h-5 mr-2" />
                              Get Free Case Evaluation Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                      <div className="md:w-1/3">
                        <img 
                          src={timeLimitsImage} 
                          alt="Legal timeline for amputation cases" 
                          className="w-full rounded-lg shadow-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-16">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-2xl text-primary flex items-center">
                      <HelpCircle className="w-6 h-6 mr-2" />
                      Frequently Asked Questions About Amputation Injuries
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqData.map((faq, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg">
                          <button
                            onClick={() => toggleFaq(index)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                          >
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                            )}
                          </button>
                          {expandedFaq === index && (
                            <div className="px-6 pb-4">
                              <p className="text-gray-600 leading-relaxed text-lg">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </section>

            </div>

            {/* Sticky Sidebar - 1 column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* 3 Ways to Start Your Case - Always Visible */}
                <Card className="glass-card border-primary/20 bg-gradient-to-br from-red-50 to-orange-50">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary text-center">
                      3 Ways to Start Your Case
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <Input
                          type="date"
                          name="accidentDate"
                          value={formData.accidentDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                          placeholder="Accident Date"
                          className="text-lg"
                        />
                      </div>
                      <div>
                        <Select 
                          value={formData.amputationType} 
                          onValueChange={(value) => setFormData(prev => ({ ...prev, amputationType: value }))}
                        >
                          <SelectTrigger className="text-lg">
                            <SelectValue placeholder="Amputation Type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="finger">Finger/Thumb</SelectItem>
                            <SelectItem value="hand">Hand</SelectItem>
                            <SelectItem value="arm">Arm</SelectItem>
                            <SelectItem value="toe">Toe</SelectItem>
                            <SelectItem value="foot">Foot</SelectItem>
                            <SelectItem value="leg">Leg</SelectItem>
                            <SelectItem value="multiple">Multiple Limbs</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Input
                          name="accidentLocation"
                          value={formData.accidentLocation}
                          onChange={(e) => setFormData(prev => ({ ...prev, accidentLocation: e.target.value }))}
                          placeholder="Accident Location"
                          className="text-lg"
                        />
                      </div>
                      
                      <div className="space-y-3">
                        <Link to="/amputation-case-evaluation">
                          <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                            <ClipboardCheck className="w-4 h-4 mr-2" />
                            FREE CASE EVALUATION
                          </Button>
                        </Link>
                        
                        <Link to="/amputation-compensation-calculator">
                          <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                            <Calculator className="w-4 h-4 mr-2" />
                            CALCULATE SETTLEMENT
                          </Button>
                        </Link>
                        
                        <Link to="/amputation-medical-guidance">
                          <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                            <Stethoscope className="w-4 h-4 mr-2" />
                            MEDICAL GUIDANCE
                          </Button>
                        </Link>
                      </div>
                    </form>
                  </CardContent>
                </Card>

                {/* Emergency Contact */}
                <Card className="glass-card border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-700 flex items-center">
                      <Phone className="w-5 h-5 mr-2" />
                      Need Immediate Help?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white" 
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-sm text-red-600 text-center">
                        24/7 availability for amputation emergencies
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Tips */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-primary">Important for Amputation Patients</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Preserve amputated limb on ice if possible</span>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Document everything immediately</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-4 h-4 text-red-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Seek immediate medical attention</span>
                      </div>
                      <div className="flex items-start">
                        <FileText className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                        <span>Don't sign anything from insurance</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Amputation Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            California law gives you only two years from the accident date to file your claim. Government property claims require filing within six months. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('evaluation')}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('tel:8181234567')}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AmputationInjuries;