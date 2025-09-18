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
  Activity,
  Brain
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/spinal-cord-injuries-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/spinal-cord-what-to-do.jpg';
import accidentTypesImage from '@/assets/practice-areas/spinal-cord-injury-types.jpg';
import provingNegligenceImage from '@/assets/practice-areas/spinal-cord-proving-negligence.jpg';
import compensationImage from '@/assets/practice-areas/spinal-cord-compensation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SpinalCordInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
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
    { id: 'types-of-injuries', label: 'INJURY TYPES', icon: Activity },
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

    const onScroll = () => setIsVisible(window.scrollY > 160);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

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
    window.location.href = '/spinal-cord-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "What is the difference between complete and incomplete spinal cord injury?",
      answer: "A complete spinal cord injury results in total loss of sensation and motor function below the injury level, meaning no signals pass between the brain and body below that point. An incomplete injury preserves some function, allowing partial sensation or movement. Incomplete injuries have better recovery potential but still cause significant disability requiring extensive medical care and compensation."
    },
    {
      question: "How much is a spinal cord injury case worth in California?",
      answer: "California spinal cord injury cases typically range from $2 million to over $10 million depending on severity. Complete quadriplegia cases often exceed $8 million, paraplegia cases average $3-5 million, and incomplete injuries range from $1-3 million. Factors include age, injury level, medical costs, lost wages, and impact on life. Each case requires individual evaluation."
    },
    {
      question: "What causes most spinal cord injuries in California?",
      answer: "In California, motor vehicle accidents cause 38% of spinal cord injuries, falls account for 32% (especially in older adults), violence (primarily gunshots) causes 14%, sports and recreation 8%, and medical/surgical complications 5%. Construction accidents, diving injuries, and motorcycle crashes are also significant causes requiring legal action."
    },
    {
      question: "How long do I have to file a spinal cord injury lawsuit in California?",
      answer: "California's statute of limitations is generally two years from the injury date for personal injury claims. However, government claims require filing within six months, medical malpractice has specific notice requirements, and discovery rule may extend deadlines if injuries weren't immediately apparent. Contact an attorney immediately to preserve your rights."
    },
    {
      question: "What is quadriplegia versus paraplegia?",
      answer: "Quadriplegia (tetraplegia) affects all four limbs from cervical spine injuries (C1-C8), causing paralysis in arms, hands, trunk, and legs. Higher injuries may require ventilator support. Paraplegia affects lower body from thoracic or lumbar injuries (T1-L5), preserving arm function but paralyzing trunk and legs. Both require wheelchairs and lifetime medical care but quadriplegia requires more extensive assistance."
    },
    {
      question: "Can spinal cord injuries heal or recover?",
      answer: "Complete spinal cord injuries rarely recover function below the injury level. Incomplete injuries may show improvement with intensive rehabilitation, but recovery is often limited. New treatments like stem cell therapy and electrical stimulation show promise but remain experimental. Most recovery occurs within the first year, with gradual improvements possible for several years. Compensation must account for permanent disabilities and lifetime care needs."
    },
    {
      question: "What are the lifetime costs of spinal cord injuries?",
      answer: "The National Spinal Cord Injury Statistical Center reports lifetime costs from $1.5 million for incomplete motor injuries to over $5 million for high quadriplegia. First-year costs alone range from $375,000 to $1.15 million. Annual costs thereafter range from $45,000 to $200,000, excluding lost wages. These figures don't include home modifications, vehicle adaptations, or attendant care costs."
    },
    {
      question: "What medical specialists treat spinal cord injuries?",
      answer: "Spinal cord injury treatment requires a multidisciplinary team including neurosurgeons for surgical intervention, physiatrists (rehabilitation doctors) for ongoing care, neurologists for nervous system evaluation, urologists for bladder/bowel management, pulmonologists for breathing problems, orthopedic surgeons for bone injuries, and physical/occupational therapists for functional training. Psychologists address emotional adjustment issues."
    },
    {
      question: "How do I prove someone caused my spinal cord injury?",
      answer: "Proving liability requires establishing the defendant owed you a duty of care, breached that duty through negligence or wrongful conduct, and that breach directly caused your spinal cord injury. Evidence includes accident reports, witness statements, expert testimony, surveillance footage, safety violations, and medical records linking the accident to your injury. We work with accident reconstruction experts and medical specialists to build compelling cases."
    },
    {
      question: "Can I still have a case if I was partially at fault?",
      answer: "Yes, California follows pure comparative negligence, allowing recovery even if you're partially at fault. Your compensation reduces by your percentage of fault. For example, if you're 20% at fault in a $5 million case, you'd recover $4 million. Insurance companies aggressively argue victim fault to reduce payouts. Our former defense experience helps minimize your assigned fault percentage."
    },
    {
      question: "What if my spinal cord injury was from medical malpractice?",  
      answer: "Medical malpractice spinal cord injuries result from surgical errors, anesthesia complications, medication mistakes, or failure to diagnose/treat conditions causing paralysis. These cases require proving the medical provider fell below accepted standards of care. California has specific notice requirements and shorter deadlines for medical malpractice claims. We work with medical experts to establish malpractice and calculate full damages."
    },
    {
      question: "How does workers' compensation affect my spinal cord injury case?",
      answer: "Workers' comp provides medical benefits and partial wage replacement but limits pain and suffering recovery. If a third party caused your workplace spinal cord injury, you may have both workers' comp and personal injury claims. Third-party claims can provide full compensation while preserving workers' comp benefits. Coordination between claims is complex and requires experienced legal representation."
    },
    {
      question: "What equipment and modifications will I need after spinal cord injury?",
      answer: "Spinal cord injuries require extensive equipment including wheelchairs ($5,000-$35,000, requiring replacement every 5 years), pressure relief cushions, hospital beds, lifts and hoists, bathroom modifications, vehicle adaptations ($40,000-$80,000), home ramps and accessibility modifications ($50,000-$200,000), and adaptive technology. Life care planners calculate specific needs and replacement schedules for compensation purposes."
    },
    {
      question: "How do spinal cord injuries affect employment and earnings?",
      answer: "Spinal cord injuries dramatically impact employment, with only 35% of individuals working post-injury compared to 62% pre-injury. Lost earning capacity calculations consider pre-injury income, education, career trajectory, and post-injury work limitations. Vocational experts assess suitable employment options and income potential. Compensation includes full lost earnings plus benefits, retirement contributions, and advancement opportunities."
    },
    {
      question: "What complications should I watch for after spinal cord injury?",
      answer: "Common complications include autonomic dysreflexia (dangerous blood pressure spikes), pressure sores that can become life-threatening, urinary tract infections, blood clots, pneumonia, muscle spasticity, chronic pain, depression, and secondary injuries from falls. Prevention requires constant vigilance, specialized medical care, and proper equipment. Treatment costs for complications add substantially to lifetime medical expenses."
    },
    {
      question: "Can family members recover damages for spinal cord injuries?",
      answer: "Yes, spouses can recover loss of consortium damages for lost companionship, affection, and intimacy. Family members providing care may recover for lost services. If the injury causes death, family members may pursue wrongful death claims. California allows recovery for emotional distress in certain circumstances. Family impact testimony helps juries understand the full scope of damages beyond the victim's losses."
    },
    {
      question: "How do age and gender affect spinal cord injury cases?", 
      answer: "Age significantly impacts case value due to life expectancy and care duration. Younger victims face higher lifetime costs but also longer to recover lost wages. Males comprise 78% of spinal cord injuries, typically from high-risk activities. Females often have better life expectancy but may face pregnancy complications. Age-specific life care plans and economic projections are essential for accurate compensation calculations."
    },
    {
      question: "What role do life care planners play in spinal cord injury cases?",
      answer: "Life care planners are crucial for documenting lifetime needs and costs. These certified professionals work with medical teams to project future medical care, equipment needs, attendant services, medications, and therapy requirements over the victim's lifetime. Their detailed reports provide roadmaps for settlement negotiations and trial testimony, ensuring compensation covers actual future needs."
    },
    {
      question: "Should I accept insurance company settlement offers?",
      answer: "Never accept early settlement offers without legal consultation. Insurance companies offer quick settlements before full injury extent is known, often for a fraction of true value. Spinal cord injuries require lifetime care costing millions. Once you settle, you cannot seek additional compensation. Our former defense experience reveals settlement tactics designed to minimize payouts. Proper evaluation by life care planners and economists is essential."
    },
    {
      question: "How do I find the best spinal cord injury attorney?",
      answer: "Look for attorneys with specific spinal cord injury experience, not just general personal injury practice. Key factors include track record with catastrophic injury cases, access to medical and life care experts, financial resources to fund expensive litigation, trial experience for maximum settlements, and understanding of spinal cord injury medical complexities. Former defense experience provides valuable insight into insurance company tactics."
    },
    {
      question: "What makes spinal cord injury cases different from other personal injury claims?",
      answer: "Spinal cord injury cases involve catastrophic, permanent disabilities requiring lifetime medical care and support. They demand specialized medical knowledge, life care planning expertise, and understanding of complex damages including lost earning capacity, attendant care, equipment needs, and home modifications. Case values often reach millions, requiring sophisticated legal strategies and extensive expert testimony."
    },
    {
      question: "Can experimental treatments affect my case value?",
      answer: "Emerging treatments like stem cell therapy, epidural stimulation, and exoskeletons may be included in life care plans if medically appropriate. However, experimental treatments shouldn't replace proven therapies. Insurance companies may argue experimental treatments reduce damages. We work with medical experts to determine which future treatments merit inclusion in settlement calculations while ensuring current needs are fully covered."
    },
    {
      question: "How do secondary injuries affect spinal cord injury cases?",
      answer: "Secondary injuries from accidents (broken bones, internal injuries, traumatic brain injury) complicate treatment and increase damages. They may delay spinal cord rehabilitation and worsen outcomes. All injuries must be documented and their interactions understood. Secondary conditions developing over time (joint deterioration, chronic pain, depression) also warrant compensation as foreseeable consequences of the original injury."
    },
    {
      question: "What if my spinal cord injury was from a defective product?",
      answer: "Product liability claims arise from defective vehicles, medical devices, safety equipment, or other products causing spinal cord injuries. These cases may involve design defects, manufacturing flaws, or inadequate warnings. Manufacturers face strict liability, meaning fault isn't required if the product was unreasonably dangerous. Multiple defendants (manufacturers, distributors, retailers) may share liability, increasing available insurance coverage."
    },
    {
      question: "How do insurance coverage limits affect my case?",
      answer: "Spinal cord injury damages often exceed insurance policy limits. We investigate all available coverage including liability policies, umbrella policies, commercial coverage, and additional defendants' insurance. California requires minimum coverage but serious accidents may exceed limits. Uninsured/underinsured motorist coverage may provide additional compensation. Asset investigation determines whether defendants have personal resources beyond insurance."
    },
    {
      question: "What psychological support is available for spinal cord injuries?",
      answer: "Spinal cord injuries cause profound psychological trauma requiring professional support. Common issues include depression, anxiety, PTSD, adjustment disorders, and grief for lost abilities. Treatment includes individual therapy, support groups, family counseling, and psychiatric medication. Psychological care costs are recoverable damages. Early intervention improves outcomes and supports successful legal claims showing injury impact on mental health."
    },
    {
      question: "How do I document my spinal cord injury for legal purposes?",
      answer: "Thorough documentation includes all medical records from emergency treatment through rehabilitation, diagnostic images (X-rays, MRI, CT scans), therapy notes, daily symptom journals, functional limitation records, equipment needs, medication lists, and photography/video showing daily challenges. Family and friends should document observed changes. This evidence supports damage claims and counters insurance company surveillance."
    },
    {
      question: "Can I travel with a spinal cord injury during my case?",
      answer: "Travel is often possible but requires careful planning for accessibility, medical needs, and equipment transport. Document any travel limitations, additional costs, or equipment needs for legal purposes. Insurance companies may use travel photos against you, claiming they show you're not as disabled as claimed. Inform your attorney before traveling and consider how activities might be perceived by insurance surveillance."
    },
    {
      question: "What resources are available for spinal cord injury victims in California?",
      answer: "California offers numerous resources including Model Spinal Cord Injury Centers (Rancho Los Amigos, Santa Clara Valley Medical Center), support organizations (United Spinal Association, Christopher Reeve Foundation), state rehabilitation services, equipment loan programs, disability benefits, and vocational rehabilitation. These resources supplement but don't replace full legal compensation for injuries caused by negligence."
    },
    {
      question: "How do I maintain health insurance coverage after spinal cord injury?",
      answer: "Maintaining insurance is crucial given high medical costs. Options include continuing employer coverage through COBRA, spouse's insurance, Medi-Cal for low-income individuals, Medicare for permanent disabilities, and private insurance (though pre-existing condition exclusions may apply). Settlement planning should consider insurance preservation and Medicare set-aside accounts. Legal compensation must account for insurance gaps and lifetime medical needs."
    },
    {
      question: "What happens if the person who caused my injury declares bankruptcy?",
      answer: "Bankruptcy doesn't eliminate personal injury claims, which may be non-dischargeable debts. Insurance coverage often remains available even if defendants file bankruptcy. Multiple defendants may provide additional recovery sources. Asset protection planning by defendants before accidents may be challenged as fraudulent transfers. Experienced attorneys know how to pursue compensation despite bankruptcy proceedings protecting client interests."
    },
    {
      question: "Can I modify my home for accessibility?",
      answer: "Home modifications are essential for spinal cord injury victims and are recoverable damages. Common modifications include ramps, widened doorways, accessible bathrooms, stair lifts or elevators, lowered counters and cabinets, roll-in showers, and automated door systems. Costs range from $50,000-$200,000 depending on home size and needs. Life care planners specify necessary modifications for compensation purposes."
    },
    {
      question: "How do spinal cord injuries affect driving?",
      answer: "Many spinal cord injury victims can drive with vehicle modifications including hand controls, wheelchair lifts, extended mirrors, and specialized seating. Vehicle adaptations cost $40,000-$80,000 and are recoverable damages. Some injuries prevent driving entirely, requiring transportation services or family assistance. Lost independence and transportation costs are compensable damages in legal claims."
    },
    {
      question: "What role does rehabilitation play in spinal cord injury cases?",
      answer: "Intensive rehabilitation is crucial for maximizing function and independence. Inpatient rehabilitation at specialized spinal cord centers costs thousands daily but provides essential training in wheelchair use, transfers, bowel/bladder management, and daily living skills. Outpatient therapy continues for years. Rehabilitation costs are fully recoverable damages, and successful rehabilitation often increases case value by demonstrating victim's determination and needs."
    },
    {
      question: "Can I have children after a spinal cord injury?",
      answer: "Many spinal cord injury victims can have children, though fertility and sexual function may be affected. Men may need assisted reproductive technology, while women may face pregnancy complications requiring specialized care. Reproductive services and pregnancy care costs are recoverable damages. Family planning considerations affect life care plans and damage calculations for younger victims."
    },
    {
      question: "How do I find appropriate medical care for spinal cord injuries?",
      answer: "Spinal cord injuries require specialized care from experienced providers. California has Model SCI Centers providing comprehensive treatment, including Rancho Los Amigos, Santa Clara Valley Medical Center, and UC Davis. These centers offer acute care, rehabilitation, and lifetime follow-up. Choosing appropriate medical providers affects both recovery outcomes and legal case documentation."
    },
    {
      question: "What if my spinal cord injury gets worse over time?",
      answer: "Progressive deterioration is common with spinal cord injuries due to post-traumatic syringomyelia, tethered cord syndrome, or normal aging effects. Worsening conditions may warrant additional surgery and care. Life care plans must account for potential deterioration. Settlement agreements should include provisions for future complications. Regular medical monitoring is essential for detecting and treating progressive changes early."
    },
    {
      question: "How do social media and technology help spinal cord injury victims?",
      answer: "Technology provides independence through adaptive equipment, environmental controls, communication devices, and mobility aids. Social media connects victims with support networks and resources. However, social media posts can hurt legal cases if insurance companies use them to argue against disability claims. Attorneys advise clients on appropriate technology use during litigation while leveraging beneficial aspects for case presentation."
    },
    {
      question: "What employment options exist after spinal cord injury?",
      answer: "While employment rates drop after spinal cord injury, many individuals find meaningful work with proper support. Options include remote work, modified positions, self-employment, and disability-friendly employers. Vocational rehabilitation helps identify suitable careers. Americans with Disabilities Act requires workplace accommodations. Employment potential affects lost wage calculations, with credit given for realistic post-injury earning capacity."
    },
    {
      question: "How do I cope with the financial impact of spinal cord injuries?",
      answer: "Spinal cord injuries create immediate and long-term financial stress from medical bills, lost income, and equipment costs. Options include disability benefits, state assistance programs, charitable organizations, and equipment loan programs. However, these resources are insufficient for lifetime needs. Full legal compensation is essential for financial security, covering all medical costs, equipment, modifications, and lost earnings."
    },
    {
      question: "What makes California spinal cord injury law unique?",
      answer: "California's pure comparative negligence allows recovery even with shared fault, maximizing compensation potential. No caps exist on economic damages, and non-economic damage caps don't apply to personal injury cases. The state has extensive accessibility laws and disability resources. Strong consumer protection laws benefit victims. However, strict statutes of limitations and government claim requirements demand immediate legal action."
    },
    {
      question: "How do I choose between settlement and trial for my spinal cord injury case?",
      answer: "Settlement provides certainty and faster resolution but may undervalue catastrophic injuries. Trials risk lower verdicts but can result in higher awards reflecting full damages. Factors include strength of liability evidence, insurance coverage adequacy, defendant's settlement willingness, and trial risks. Experienced attorneys evaluate these factors, often using trial preparation to leverage better settlements while maintaining trial readiness."
    },
    {
      question: "What happens to my spinal cord injury case if I die?",
      answer: "If you die from spinal cord injury complications, your estate may pursue wrongful death claims. Survivors can recover for lost support, companionship, and funeral expenses. Existing personal injury claims may continue through estate representatives. Life expectancy calculations in spinal cord injury cases already account for reduced lifespan. Proper estate planning ensures compensation reaches intended beneficiaries."
    },
    {
      question: "Can stem cell therapy help my spinal cord injury?",
      answer: "Stem cell therapy remains largely experimental for spinal cord injuries, with limited proven benefits. Some trials show modest improvements in incomplete injuries, but complete injuries rarely benefit. FDA approval is limited, and treatments are expensive. While promising for the future, current life care plans should focus on proven therapies. Any experimental treatments must be carefully evaluated for medical appropriateness and insurance coverage."
    },
    {
      question: "How do I prevent complications after spinal cord injury?",
      answer: "Prevention requires constant vigilance and proper medical care. Key measures include daily skin inspection for pressure sores, regular position changes, proper nutrition, exercise within ability, careful hygiene to prevent infections, medication compliance, and regular medical follow-up. Prevention equipment and services are recoverable damages, and proper prevention actually increases case value by demonstrating appropriate care needs."
    },
    {
      question: "What legal deadlines apply to spinal cord injury cases in California?",
      answer: "California's two-year statute of limitations starts from injury date, but discovery rule may extend deadlines if injury wasn't immediately apparent. Government claims require filing within six months. Medical malpractice has one-year notice requirements. Product liability may have different deadlines. Evidence preservation is urgent - surveillance footage disappears within 30 days. Immediate legal consultation protects all deadlines and preserves crucial evidence."
    },
    {
      question: "How do I document pain and suffering from spinal cord injuries?",
      answer: "Spinal cord injuries cause chronic pain, depression, anxiety, and lost life enjoyment that are difficult to quantify. Documentation includes pain journals, medication records, therapy notes, activity limitations, mood changes, and family testimony about personality changes. Medical records should detail pain levels and treatment responses. Life impact statements from victims and families help juries understand intangible losses deserving substantial compensation."
    },
    {
      question: "What if multiple parties caused my spinal cord injury?",
      answer: "Multiple defendants often exist in spinal cord injury cases, including drivers, property owners, employers, manufacturers, and others. Each party may share liability, increasing total available insurance coverage. California joint and several liability rules allow recovery from any defendant capable of paying, even if others can't pay their share. Strategic litigation targets all responsible parties to maximize compensation sources."
    },
    {
      question: "How do I find peer support for spinal cord injuries?",
      answer: "Peer support is invaluable for adjustment and recovery. Resources include United Spinal Association chapters, Christopher Reeve Foundation networks, hospital support groups, online communities, and recreational organizations for disabled individuals. Many find mentorship with successfully adjusted individuals with similar injuries. Peer support complements professional counseling and may be recommended in life care plans as beneficial therapy."
    },
    {
      question: "What research developments offer hope for spinal cord injuries?",
      answer: "Promising research includes stem cell therapy, neural stimulation, tissue engineering, drug therapies to promote healing, robotic exoskeletons, and brain-computer interfaces. While exciting, most remain experimental. Current legal cases should focus on proven treatments while remaining open to future developments. Settlement structures may accommodate future treatments if they become available and medically appropriate for specific cases."
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
        title="California Spinal Cord Injury Lawyers | Paralysis Attorneys | Trembach Law Firm"
        description="Former defense attorney fighting for California spinal cord injury victims. Free 24/7 consultation for quadriplegia, paraplegia & SCI cases. No fees unless we win."
        canonical="/practice-areas/spinal-cord-injuries"
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
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 pt-20 pb-16">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              California Spinal Cord Injury Attorneys
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              Life changes in an instant with a spinal cord injury. Former defense attorney securing maximum compensation for paralysis victims throughout California. We fight for your future while you focus on recovery.
            </p>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">2026 Rising Star</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-6 text-lg"
                onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
              >
                Start Spinal Cord Injuries Evaluation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 visible"
                onClick={() => window.open('tel:8181234567')}
              >
                Call (818) 123-4567
              </Button>
            </div>
            
            <p className="text-white/90 mt-6 text-lg">
              <strong>No Fees. No Risk.</strong><br />
              You only pay when we win
            </p>
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
              <h2 className="text-4xl font-bold text-red-600 mb-8">California Spinal Cord Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-8">
                  Spinal cord injuries represent one of the most catastrophic injuries a person can suffer. In an instant, your entire life changes - mobility, independence, career, relationships, and dreams for the future are all impacted. When property owners fail to maintain safe conditions, and you suffer injuries as a result, we fight for the compensation you deserve.
                </p>
                
                <p className="text-xl leading-relaxed mb-8">
                  California sees approximately 1,400 new spinal cord injuries annually, with motor vehicle accidents causing 38%, falls accounting for 32%, violence (primarily gunshot wounds) at 14%, and sports/recreation injuries making up 8%. At Trembach Law Firm, we understand the urgency of these catastrophic cases and the devastating impact they have on victims and families.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn more about our California Spinal Cord Injury practice...
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold mb-4">The Devastating Reality of Spinal Cord Injuries</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The spinal cord, a bundle of nerves running from your brain through your vertebral column, controls virtually every function in your body. When damaged, the consequences are profound and usually permanent. Young adults between 16-30 face the highest risk, though increasingly, older adults over 60 are experiencing SCI from falls.
                    </p>
                    
                    <h3 className="text-2xl font-semibold mb-4">Complete vs. Incomplete Injuries: Understanding the Difference</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      The distinction between complete and incomplete spinal cord injuries significantly impacts prognosis, treatment, and legal valuation of your case. A complete injury means no sensory or motor function exists below the injury level - the communication highway between brain and body is completely severed.
                    </p>
                    
                    <p className="text-lg leading-relaxed mb-4">
                      Incomplete injuries preserve some function below the injury site. The spinal cord remains partially intact, allowing some signals to pass. While incomplete injuries offer more hope for recovery, they still cause significant disability and require extensive medical care.
                    </p>
                    
                    <h3 className="text-2xl font-semibold mb-4">Why Former Defense Experience Matters</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      Having spent decades defending insurance companies in spinal cord injury cases, I know their playbook intimately. They immediately dispatch investigators to find any excuse to minimize your claim. They hire biomechanical "experts" to argue your injury isn't as severe as claimed. They delay settlement hoping financial pressure forces you to accept less.
                    </p>
                    
                    <p className="text-lg leading-relaxed">
                      I've sat in their strategy meetings, reviewed their claim evaluation software, and witnessed their systematic devaluation of catastrophic injuries. Now I use this insider knowledge to protect you. We anticipate their tactics, counter their experts, and document your injuries comprehensively.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-8">Free Case Evaluation</h2>
              
              <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg shadow-sm">
                <h3 className="text-2xl font-semibold mb-4 text-red-800">Get Your Free Consultation</h3>
                <p className="mb-6 text-red-700 text-lg">Provide some basic information to help us understand your spinal cord injury case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-lg font-medium mb-2 text-red-800">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                        className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500 text-base p-3"
                      />
                    </div>
                    <div>
                      <label className="block text-base font-medium mb-2 text-red-800">Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500 text-base p-3">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="complete-sci">Complete Spinal Cord Injury</SelectItem>
                          <SelectItem value="incomplete-sci">Incomplete Spinal Cord Injury</SelectItem>
                          <SelectItem value="quadriplegia">Quadriplegia/Tetraplegia</SelectItem>
                          <SelectItem value="paraplegia">Paraplegia</SelectItem>
                          <SelectItem value="cervical">Cervical Spine Injury</SelectItem>
                          <SelectItem value="thoracic">Thoracic Spine Injury</SelectItem>
                          <SelectItem value="lumbar">Lumbar Spine Injury</SelectItem>
                          <SelectItem value="not-sure">Not Sure - Need Evaluation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-base font-medium mb-2 text-red-800">Accident Location</label>
                    <Input
                      type="text"
                      value={formData.accidentLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, accidentLocation: e.target.value }))}
                      placeholder="Where did the accident occur?"
                      className="border-red-300 focus-visible:ring-red-500 focus-visible:border-red-500 text-base p-3"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  >
                    START MY FREE CASE EVALUATION →
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do Section */}
            <section id="what-to-do" className="content-section mb-12">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    What to Do After a Spinal Cord Injury
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Prioritize Medical Care</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          Immediate stabilization is critical. Follow all medical advice, attend every appointment, and document all treatments. Your health comes first, but thorough medical records also strengthen your legal case.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Preserve Evidence</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          Document everything: accident scene photos, witness information, medical records, and daily impact on your life. Keep all equipment, clothing, and other physical evidence from the accident.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Avoid Insurance Tricks</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          Never give recorded statements or sign anything without legal counsel. Insurance companies use these against you. Let us handle all communications to protect your rights.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Contact Our Team</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                          Time limits apply to spinal cord injury claims in California. Early legal intervention preserves evidence, protects your rights, and ensures you receive proper medical care and maximum compensation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={whatToDoImage} 
                    alt="Medical emergency equipment and spinal immobilization devices"
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Types of Injuries Section */}
            <section id="types-of-injuries" className="content-section mb-12">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Types of Spinal Cord Injuries We Handle
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Activity className="w-5 h-5 mr-2 text-primary" />
                          Complete Spinal Cord Injury
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          Total loss of sensation and motor function below the injury level. No signals pass between brain and body below the injury site, resulting in complete paralysis and requiring lifetime care.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Brain className="w-5 h-5 mr-2 text-primary" />
                          Incomplete Spinal Cord Injury
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          Some function preserved below injury site. Partial sensation or movement possible. Better recovery potential but still causes significant disability requiring extensive medical care.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Quadriplegia/Tetraplegia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          Cervical spine injuries (C1-C8) affecting all four limbs and trunk. Higher injuries may require ventilator support and 24-hour care. Profound impact on independence.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Paraplegia
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-base">
                          Thoracic or lumbar injuries (T1-L5) affecting lower body while preserving arm function. Requires wheelchair use and causes bowel/bladder dysfunction.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Collapsible className="mt-6">
                    <CollapsibleTrigger asChild>
                      <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                        Learn more about injury levels and their life-changing impact...
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Cervical Injuries (C1-C8)</h4>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            These high-level injuries cause quadriplegia/tetraplegia, affecting all four limbs and trunk. C1-C3 injuries often require permanent ventilator support and 24-hour care. C4 injuries may preserve some shoulder function but still require extensive assistance. All cervical injuries profoundly impact independence.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Thoracic Injuries (T1-T12)</h4>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            These mid-back injuries typically cause paraplegia, preserving arm and hand function while affecting the trunk and legs. All thoracic injuries affect walking ability, require wheelchair use, and cause bowel/bladder dysfunction.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Lumbar and Sacral Injuries (L1-S5)</h4>
                          <p className="text-muted-foreground leading-relaxed text-base">
                            Lower back injuries affect hip and leg function. Some walking may be possible with braces and assistive devices. These "invisible" injuries still cause significant disability and require ongoing medical management.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={accidentTypesImage} 
                    alt="Spinal imaging equipment and diagnostic tools"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section mb-12">
              <div className="flex items-start gap-8">
                <div className="hidden lg:block">
                  <img 
                    src={provingNegligenceImage} 
                    alt="Legal documentation and medical records for spinal cord injury cases"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Proving Your Spinal Cord Injury Case
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Medical Documentation</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                        Comprehensive medical records documenting diagnosis, treatment, and prognosis. We work with leading neurologists and spinal cord specialists to establish clear evidence of your injury and lifetime needs.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Life Care Planning</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                        Certified life care planners document your lifetime medical needs, equipment requirements, and care costs. These detailed reports provide roadmaps for settlement negotiations.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Testimony</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4 text-lg">
                        Leading spinal cord injury specialists explain your condition, treatment needs, and life-long impacts to insurance companies and juries.
                      </p>
                    </div>
                    
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                          Learn more about evidence gathering...
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2 text-base">Accident Reconstruction</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              Expert analysis of how the accident occurred and the forces that caused your spinal cord injury, establishing liability and injury causation.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-base">Economic Analysis</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              Economists calculate lost earning capacity, considering pre-injury income, career trajectory, and post-injury limitations affecting employment.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2 text-base">Family Impact Testimony</h4>
                            <p className="text-muted-foreground leading-relaxed text-base">
                              Family members testify about personality changes, care needs, and lost companionship, helping juries understand the full impact on your life.
                            </p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Spinal Cord Injury Compensation
                  </h2>
                  
                  <div className="space-y-8">
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                          Economic Damages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground text-base">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Medical expenses (lifetime treatment and care)
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Lost wages and reduced earning capacity
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Attendant care and personal assistance
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Equipment and wheelchair costs
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Home and vehicle modifications
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Heart className="w-6 h-6 mr-2 text-red-600" />
                          Non-Economic Damages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground text-base">
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Pain and suffering from paralysis
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Emotional distress and depression
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Loss of enjoyment of life
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Loss of consortium for spouses
                          </li>
                          <li className="flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            Lost independence and mobility
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <div className="bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4 text-blue-800">Typical Case Values</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-bold text-blue-600">$8M+</div>
                          <div className="text-sm text-blue-700">Complete Quadriplegia</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">$5M+</div>
                          <div className="text-sm text-blue-700">Incomplete SCI</div>
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-blue-600">$3M+</div>
                          <div className="text-sm text-blue-700">Paraplegia Cases</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={compensationImage} 
                    alt="Professional courthouse and legal compensation documentation"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Don't Wait - Time Limits Apply</h2>
              
              <div className="bg-red-50 border-2 border-red-300 p-8 rounded-lg">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold mb-4 text-red-800">California Statute of Limitations</h3>
                    <p className="text-red-700 mb-4 text-lg leading-relaxed">
                      You generally have <strong>2 years</strong> from the date of injury to file a lawsuit. However, government claims must be filed within <strong>6 months</strong>. Evidence disappears quickly - surveillance footage is typically deleted within 30 days.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2 text-red-800 text-lg">Act Immediately Because:</h4>
                        <ul className="space-y-2 text-red-700 text-base">
                          <li>• Evidence disappears or gets destroyed</li>
                          <li>• Witnesses forget details over time</li>
                          <li>• Medical records become harder to obtain</li>
                          <li>• Insurance companies destroy claim files</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2 text-red-800 text-lg">We Preserve Your Rights:</h4>
                        <ul className="space-y-2 text-red-700 text-base">
                          <li>• Immediate evidence preservation</li>
                          <li>• Expert witness identification</li>
                          <li>• Medical record compilation</li>
                          <li>• Insurance claim protection</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                        onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
                      >
                        Start Your FREE Case Evaluation Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-4xl font-bold mb-8 text-foreground">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.slice(0, 10).map((faq, index) => (
                  <Card key={index} className="border border-border">
                    <CardHeader
                      className="cursor-pointer"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex justify-between items-center text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
                
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between">
                      See All {faqData.length} Frequently Asked Questions
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4 space-y-4">
                    {faqData.slice(10).map((faq, index) => (
                      <Card key={index + 10} className="border border-border">
                        <CardHeader
                          className="cursor-pointer"
                          onClick={() => toggleFaq(index + 10)}
                        >
                          <CardTitle className="flex justify-between items-center text-lg">
                            <span>{faq.question}</span>
                            {expandedFaq === index + 10 ? <ChevronUp /> : <ChevronDown />}
                          </CardTitle>
                        </CardHeader>
                        {expandedFaq === index + 10 && (
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed text-base">{faq.answer}</p>
                          </CardContent>
                        )}
                      </Card>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-4xl font-bold mb-8 text-foreground">California Spinal Cord Injury Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Building className="w-6 h-6 mr-2 text-primary" />
                      Medical Centers
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-base">
                      <li>• Rancho Los Amigos National Rehabilitation Center</li>
                      <li>• Santa Clara Valley Medical Center</li>
                      <li>• UC Davis Medical Center</li>
                      <li>• Cedars-Sinai Medical Center</li>
                      <li>• Casa Colina Rehabilitation Hospital</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <Users className="w-6 h-6 mr-2 text-primary" />
                      Support Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-muted-foreground text-base">
                      <li>• United Spinal Association - California</li>
                      <li>• Christopher & Dana Reeve Foundation</li>
                      <li>• Paralyzed Veterans of America</li>
                      <li>• California Foundation for Independent Living</li>
                      <li>• Triumph Foundation</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card - Dark Overlay Style */}
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                {/* Background with overlay */}
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage: `url(${provingNegligenceImage})`
                  }}
                ></div>
                
                {/* Content */}
                <div className="relative z-20 p-8 text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">
                    3 Ways to
                  </h3>
                  <h3 className="text-3xl font-bold mb-4">
                    Start Your Case
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 visible"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      CALL (818) 123-4567
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
                    >
                      EMAIL US
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 visible"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      24/7 LIVE CHAT
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/spinal-cord-compensation-calculator'}
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

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Spinal Cord Injury Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            California law gives you only two years from the accident date to file your claim. Government property claims require filing within six months. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/spinal-cord-case-evaluation'}
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
    </div>
  );
};

export default SpinalCordInjuries;