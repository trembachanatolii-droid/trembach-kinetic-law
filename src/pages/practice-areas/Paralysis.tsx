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
  Activity,
  Brain,
  User
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/paralysis-hero-bg.jpg';
import sidebarImage from '@/assets/paralysis-sidebar.jpg';
import diagnosisImage from '@/assets/paralysis-diagnosis-process.jpg';
import legalProcessImage from '@/assets/paralysis-legal-process.jpg';
import medicalImage from '@/assets/paralysis-medical-facility.jpg';
import compensationImage from '@/assets/paralysis-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Paralysis: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    paralysisType: '',
    cause: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundLayer1 = useRef<HTMLDivElement>(null);
  const backgroundLayer2 = useRef<HTMLDivElement>(null);
  const backgroundLayer3 = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER PARALYSIS', icon: Stethoscope },
    { id: 'types', label: 'TYPES OF PARALYSIS', icon: User },
    { id: 'causes', label: 'COMMON CAUSES', icon: AlertTriangle },
    { id: 'compensation', label: 'COMPENSATION', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Building },
    { id: 'faq', label: 'FAQ', icon: MessageCircle }
  ];

  useEffect(() => {
    document.body.classList.add('paralysis-page');
    
    // Scroll tracking for active tab
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;
      
      let currentSection = 'overview';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = tabs[i].id;
          break;
        }
      }
      
      setActiveTab(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('paralysis-page');
      window.removeEventListener('scroll', handleScroll);
    };
  }, [tabs]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Background animations
      if (backgroundLayer1.current) {
        gsap.to(backgroundLayer1.current, {
          rotation: 360,
          duration: 14,
          ease: "none",
          repeat: -1,
          transformOrigin: "center center"
        });
      }
      
      if (backgroundLayer2.current) {
        gsap.to(backgroundLayer2.current, {
          x: 40,
          y: -20,
          rotation: 2,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
      
      if (backgroundLayer3.current) {
        gsap.to(backgroundLayer3.current, {
          x: 25,
          y: -25,
          rotation: -2,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/practice-areas/paralysis/case-evaluation';
  };

  // FAQ Data - 50+ questions from the HTML
  const faqData = [
    {
      question: "What is the average settlement for paralysis in California?",
      answer: "Paralysis settlements in California typically range from $2.5 million to over $38 million, depending on severity, age, and circumstances. Paraplegia cases average $2.5-5 million, while quadriplegia cases often exceed $5-10 million. Factors include medical costs, lost earnings, pain and suffering, and available insurance coverage."
    },
    {
      question: "How long do I have to file a paralysis lawsuit in California?",
      answer: "California's statute of limitations is generally two years from the injury date for personal injury claims. However, medical malpractice has a one-year limit, and government claims require six-month notice. Minors have extended deadlines. Contact an attorney immediately as evidence disappears quickly."
    },
    {
      question: "Can I sue if I was partially at fault for my paralysis?",
      answer: "Yes, California follows pure comparative negligence, allowing recovery even if you're 99% at fault. Your compensation reduces by your fault percentage. For example, if damages are $5 million and you're 30% at fault, you recover $3.5 million."
    },
    {
      question: "What's the difference between complete and incomplete paralysis?",
      answer: "Complete paralysis means total loss of sensation and motor function below the injury level. Incomplete paralysis preserves some function or sensation. About 60% of spinal injuries are incomplete, offering better recovery potential but still requiring substantial compensation for limitations."
    },
    {
      question: "How much does a paralysis attorney cost?",
      answer: "We work on contingency fees, meaning no upfront costs. You pay only if we win, typically 33-40% of recovery. We advance all case costs including experts, medical records, and court fees. This ensures access to justice regardless of financial resources."
    },
    {
      question: "What if the at-fault party has minimal insurance?",
      answer: "We pursue all available sources including underinsured motorist coverage, umbrella policies, employer liability, and personal assets. Multiple defendants may share liability. Creative legal strategies maximize recovery even with limited primary insurance."
    },
    {
      question: "Can family members receive compensation?",
      answer: "Yes, spouses can claim loss of consortium for relationship impacts. Children may recover for loss of parental consortium. Family members often become caregivers, suffering economic and emotional losses warranting compensation."
    },
    {
      question: "How long does a paralysis case take to resolve?",
      answer: "Most cases settle within 12-24 months, though complex cases may take 2-3 years. Quick settlements often undervalue claims. We balance urgency with maximizing recovery. Litigation extends timelines but often yields higher compensation."
    },
    {
      question: "What medical evidence is needed for a paralysis case?",
      answer: "Essential evidence includes emergency records, imaging (MRI/CT), surgical reports, ASIA classifications, rehabilitation assessments, and prognosis statements. We obtain all records and work with specialists to document current and future medical needs comprehensively."
    },
    {
      question: "Can I recover future medical costs?",
      answer: "Yes, future medical expenses are major damage components. Life care planners project lifetime costs for surgeries, therapy, medications, equipment, home care, and complications. Plans often total $2-8 million depending on injury severity."
    },
    {
      question: "What if my paralysis appeared gradually after the accident?",
      answer: "Delayed paralysis from swelling, bleeding, or progressive damage is compensable. The discovery rule may extend filing deadlines. Document symptom progression carefully. Medical experts establish causation linking gradual paralysis to the original trauma."
    },
    {
      question: "How is lost earning capacity calculated?",
      answer: "Vocational experts analyze education, skills, work history, and limitations to project lifetime earnings loss. They consider promotion potential, benefits, and inflation. Only 13% return to work within one year. Calculations often exceed $2-3 million for younger victims."
    },
    {
      question: "What secondary complications are compensated?",
      answer: "All SCI-related complications including pressure sores, UTIs, respiratory issues, autonomic dysreflexia, blood clots, osteoporosis, chronic pain, spasticity, and psychological conditions. Treatment costs for predictable complications are included in damages."
    },
    {
      question: "Can I sue my employer for workplace paralysis?",
      answer: "Workers' compensation typically bars employer suits, but exceptions exist for intentional harm or dual capacity. Third-party claims against equipment manufacturers, property owners, or contractors provide additional recovery beyond workers' comp limits."
    },
    {
      question: "What home modifications are covered?",
      answer: "Necessary accessibility modifications including ramps, bathroom renovations, kitchen alterations, doorway widening, elevators/lifts, and smart home technology. Costs range from $50,000-200,000+ depending on existing structure and needs."
    },
    {
      question: "How are pain and suffering damages calculated?",
      answer: "No formula exists, but factors include injury severity, pain levels, lifestyle impact, age, and life expectancy. Multiplier methods or per diem calculations provide baselines. Paralysis cases often receive pain and suffering awards equaling or exceeding economic damages."
    },
    {
      question: "What if I can't afford medical treatment now?",
      answer: "We connect clients with doctors providing treatment on liens, meaning payment from settlement. This ensures quality care without upfront costs. Proper treatment strengthens your case while addressing health needs."
    },
    {
      question: "Can I get punitive damages for my paralysis?",
      answer: "Punitive damages apply when defendants act with malice, oppression, or fraud. Common scenarios include drunk driving, texting while driving, concealing product dangers, or willful safety violations. No caps apply, potentially adding millions to recovery."
    },
    {
      question: "What's the ASIA impairment scale?",
      answer: "The American Spinal Injury Association scale classifies injury completeness: A (complete), B (sensory incomplete), C-D (motor incomplete), E (normal). Classification affects prognosis and compensation. More severe classifications typically yield higher settlements."
    },
    {
      question: "How does California's MICRA affect paralysis cases?",
      answer: "MICRA caps non-economic damages at $390,000 (2024) only in medical malpractice cases. General personal injury paralysis cases have no caps. Strategic case framing maximizes recovery even in medical negligence cases."
    },
    {
      question: "What if paralysis resulted from violence?",
      answer: "Beyond criminal prosecution, civil remedies include negligent security claims, dram shop liability, employer liability, and crime victim compensation ($70,000 maximum). Property owner insurance and homeowner's policies may provide coverage."
    },
    {
      question: "Can I recover if paralyzed in a hit-and-run?",
      answer: "Yes, through uninsured motorist coverage. Prompt police reporting is required. We investigate surveillance footage, vehicle debris, and witness accounts to identify fleeing drivers. Crime victim compensation provides additional resources."
    },
    {
      question: "What vehicle modifications are compensated?",
      answer: "Wheelchair-accessible vans ($40,000-80,000), hand controls, transfer seats, and storage modifications. Replacement costs every 5-7 years are included. Transportation alternatives during vehicle servicing also covered."
    },
    {
      question: "How does paralysis affect life expectancy?",
      answer: "Life expectancy reduces depending on injury level and age. Quadriplegia at age 20 reduces life expectancy by 20+ years. Paraplegia has less impact. Life care plans and damage calculations account for reduced lifespan."
    },
    {
      question: "What attendant care costs are recoverable?",
      answer: "24/7 care for high-level quadriplegia costs $200,000+ annually. Part-time assistance for paraplegia runs $30,000-60,000 yearly. Family caregiving value is compensable even without paid services. Respite care also covered."
    },
    {
      question: "Can I sue a government entity for paralysis?",
      answer: "Yes, but special rules apply. California Tort Claims Act requires filing administrative claims within six months. Government entities have immunities limiting liability. Dangerous road conditions and employee negligence create potential liability."
    },
    {
      question: "What psychological treatment is covered?",
      answer: "All mental health treatment including therapy for depression, PTSD, anxiety, and adjustment disorders. Family counseling, sex therapy, and support groups also covered. Psychological impact often requires lifetime treatment."
    },
    {
      question: "How do structured settlements work?",
      answer: "Structured settlements provide periodic tax-free payments rather than lump sums. Benefits include guaranteed income, protection from overspending, and potential creditor protection. We advise whether structures suit your circumstances."
    },
    {
      question: "What if I'm undocumented?",
      answer: "Immigration status doesn't affect personal injury rights in California. You can pursue full compensation including lost wages. We protect client confidentiality and don't report to immigration authorities."
    },
    {
      question: "Can minors file paralysis lawsuits?",
      answer: "Parents or guardians file on behalf of minors. California extends statute of limitations until age 19. Court approval required for settlements. Funds often placed in blocked accounts or structured settlements protecting minor's interests."
    },
    {
      question: "What experts are used in paralysis cases?",
      answer: "Spinal cord specialists, neurologists, life care planners, vocational experts, economists, accident reconstructionists, biomechanical engineers, and rehabilitation specialists. Expert testimony establishes causation, prognosis, and damages."
    },
    {
      question: "How are sexual dysfunction damages handled?",
      answer: "Sexual dysfunction is compensable including treatment costs, therapy, medications, and relationship impact. Loss of fertility and reproductive capacity also covered. Handled sensitively while ensuring full compensation for intimate losses."
    },
    {
      question: "What if multiple parties caused my paralysis?",
      answer: "Joint and several liability makes each defendant potentially responsible for full damages. We pursue all liable parties maximizing recovery sources. Defendants sort out respective shares through cross-claims."
    },
    {
      question: "Can I change attorneys during my case?",
      answer: "Yes, you can change attorneys anytime. New and previous attorneys work out fee division without additional cost. Your file belongs to you. We often achieve better results for clients switching from other firms."
    },
    {
      question: "What technology assistance is covered?",
      answer: "Environmental control systems, communication devices, computer adaptations, smart home technology, and assistive software. Costs range from $5,000-50,000+ depending on needs. Regular updates as technology advances."
    },
    {
      question: "How do liens affect my settlement?",
      answer: "Medical providers, health insurance, and government benefits may claim settlement portions through liens. We negotiate reductions maximizing your net recovery. Proper handling prevents double payment and ensures clear settlement funds."
    },
    {
      question: "What if I need immediate financial help?",
      answer: "Pre-settlement funding provides advances against future recovery. Social Security disability, state disability, and other programs offer support. We help navigate benefit applications while pursuing maximum compensation."
    },
    {
      question: "Can I recover lost retirement benefits?",
      answer: "Yes, lost 401(k) contributions, pension benefits, Social Security reductions, and employer matches are compensable. Economists calculate total retirement losses often exceeding hundreds of thousands for younger victims."
    },
    {
      question: "What happens if I die from complications?",
      answer: "Survival actions continue existing claims. Wrongful death claims compensate families for funeral expenses, lost support, and loss of companionship. Two-year statute applies from death date. Estate planning important for SCI patients."
    },
    {
      question: "How is a guardian appointed for incapacitated victims?",
      answer: "Court-appointed guardians manage legal and financial affairs when victims lack capacity. Family members typically preferred. Guardians have fiduciary duties protecting victim interests. Professional guardians available if family conflicts exist."
    },
    {
      question: "What is maximum medical improvement (MMI)?",
      answer: "MMI occurs when condition stabilizes and further improvement unlikely. Timing affects settlement negotiations and damage calculations. Premature MMI determinations undervalue claims. Independent medical examinations help establish accurate MMI dates."
    },
    {
      question: "Can I return to work after paralysis?",
      answer: "Return-to-work rates are low (13% within one year), but vocational rehabilitation helps maximize employment potential. ADA accommodations required by employers. Lost earning capacity includes reduced promotion prospects and career limitations."
    },
    {
      question: "What insurance coverage applies to paralysis cases?",
      answer: "Multiple policies may apply including auto liability, homeowner's, umbrella, commercial general liability, workers' compensation, and disability insurance. We identify all coverage sources and pursue maximum benefits from each applicable policy."
    },
    {
      question: "How do I choose the right paralysis attorney?",
      answer: "Look for experience with catastrophic injuries, trial readiness, resources to handle complex cases, and personal attention. Former defense attorneys understand insurance tactics. Contingency fees ensure attorneys are motivated to maximize recovery."
    },
    {
      question: "What happens to my Social Security benefits?",
      answer: "SSDI continues regardless of lawsuit recovery. SSI may be affected by settlements but proper planning preserves benefits. Special needs trusts protect government benefits while providing lawsuit proceeds for non-covered expenses."
    },
    {
      question: "Can I sue for wrongful paralysis if misdiagnosed?",
      answer: "Medical malpractice claims apply when delayed diagnosis or treatment worsens paralysis. Emergency room errors, misread imaging, and delayed surgery create liability. MICRA caps apply but economic damages unlimited."
    },
    {
      question: "What adaptive equipment is compensated?",
      answer: "Wheelchairs (manual/power), transfer boards, pressure relief cushions, shower chairs, standing frames, FES bikes, communication devices, environmental controls, and computer access equipment. Replacement schedules built into life care plans."
    },
    {
      question: "How do spinal cord injury levels affect compensation?",
      answer: "Higher injuries (cervical) cause greater disability and higher compensation. C1-C4 affects breathing, C5-C8 allows some arm function, thoracic affects legs, lumbar affects lower legs/feet. Completeness matters more than level for damages."
    },
    {
      question: "What about fertility and reproductive damages?",
      answer: "Spinal injuries often affect fertility and sexual function. Assisted reproduction costs, fertility treatments, sexual therapy, and relationship impacts are compensable. Loss of enjoyment of intimate relationships factors into non-economic damages."
    },
    {
      question: "Can I sue product manufacturers for paralysis?",
      answer: "Defective products causing paralysis create strict liability claims. Examples include faulty safety equipment, vehicle defects, medical devices, and workplace machinery. No negligence proof required - only that defect caused injury."
    },
    {
      question: "What if paralysis occurred during surgery?",
      answer: "Surgical complications causing paralysis may constitute malpractice if below standard of care. Positioning injuries, anesthesia errors, surgical mistakes, and post-op negligence create liability. Expert testimony required to establish negligence."
    }
  ];

  return (
    <>
      <SEO 
        title="California Paralysis Injury Lawyer | Spinal Cord Attorney | Trembach Law Firm"
        description="Former defense attorney fighting for paralysis victims. Quadriplegia, paraplegia, spinal cord injuries. Free consultation. No fees unless we win your case."
        keywords="California paralysis lawyer, spinal cord injury attorney, quadriplegia compensation, paraplegia settlement, Los Angeles SCI lawyer, catastrophic injury, permanent disability, wheelchair accident attorney, spinal fracture lawyer, nerve damage compensation"
        canonical="https://www.trembachlawfirm.com/practice-areas/paralysis"
      />
      
      <div className="bg-background relative overflow-x-hidden" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
        {/* 3D Floating Background Layers */}
        <div 
          ref={backgroundLayer1}
          className="fixed inset-0 opacity-5 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
            transform: 'translateZ(-500px) scale(1.5)'
          }}
        />
        <div 
          ref={backgroundLayer2}
          className="fixed inset-0 opacity-10 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at 60% 40%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)',
            transform: 'translateZ(-250px) scale(1.3)'
          }}
        />
        <div 
          ref={backgroundLayer3}
          className="fixed inset-0 opacity-15 pointer-events-none"
          style={{ 
            background: 'radial-gradient(circle at 40% 60%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)',
            transform: 'translateZ(-100px) scale(1.1)'
          }}
        />
        
        <GoBack fallbackPath="/practice-areas" />
        
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
                California Paralysis Injury Attorneys
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg text-white">Former Defense Attorney Fighting for You</span>
              </div>
              
              <p className="text-xl mb-8 text-white">
                When paralysis changes everything, we fight for the compensation you need to rebuild. 
                Expert legal representation for quadriplegia, paraplegia, and all spinal cord injuries throughout California.
              </p>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
              >
                START MY FREE CASE EVALUATION
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4 overflow-x-auto">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap ${
                        activeTab === tab.id 
                          ? 'bg-red-600 text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
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
                <h2 className="text-4xl font-bold text-red-600 mb-8">California Paralysis Injury Attorneys</h2>
                
                <div className="prose prose-xl max-w-none mb-8">
                  <p className="text-xl leading-relaxed mb-6">
                    Paralysis represents one of the most devastating consequences of spinal cord injuries, fundamentally 
                    altering every aspect of life for victims and their families. As former defense attorneys, we understand 
                    the complex medical, legal, and financial challenges you face. This knowledge drives our commitment 
                    to securing maximum compensation for your lifelong needs.
                  </p>
                  
                  <p className="text-xl leading-relaxed">
                    California sees approximately 1,800 new spinal cord injuries annually. When paralysis occurs due to someone else's negligence, 
                    those responsible must be held accountable. At Trembach Law Firm, we leverage our former defense experience to fight 
                    for maximum compensation while you focus on treatment and adapting to your new reality.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Show More About Our California Paralysis Practice
                      {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <User className="w-5 h-5 mr-2 text-primary" />
                        Spinal Cord Expertise
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Our team works closely with leading spinal cord specialists throughout California to understand the full scope of your paralysis, prognosis, and lifetime care needs.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Map className="w-5 h-5 mr-2 text-primary" />
                        California Experience
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>We have extensive knowledge of California's accident patterns, medical facilities, and legal landscape for catastrophic injury cases throughout all counties.</p>
                    </CardContent>
                  </Card>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-start">
                          <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Former Defense Experience</h4>
                            <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into insurance defense strategies.</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                          <div>
                            <h4 className="font-semibold">Expedited Process</h4>
                            <p className="text-sm text-muted-foreground">We understand the urgency of paralysis cases and work to secure compensation as quickly as possible.</p>
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

                    <div className="prose prose-lg max-w-none">
                      <h3>Comprehensive California Paralysis Representation</h3>
                      <p>
                        Paralysis cases in California involve complex medical, legal, and life care factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all liable parties to working with medical experts who can clearly establish the cause and extent of your paralysis.
                      </p>
                      
                      <p>
                        We investigate every potential source of liability to ensure no responsible party escapes accountability for your injury. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue all available recovery sources.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Free Paralysis Case Evaluation</h2>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                  <p className="mb-6">Provide some basic information to help us understand your paralysis case better.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Paralysis</label>
                        <Select value={formData.paralysisType} onValueChange={(value) => setFormData(prev => ({ ...prev, paralysisType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select paralysis type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="quadriplegia">Quadriplegia/Tetraplegia</SelectItem>
                            <SelectItem value="paraplegia">Paraplegia</SelectItem>
                            <SelectItem value="incomplete">Incomplete Paralysis</SelectItem>
                            <SelectItem value="monoplegia">Monoplegia</SelectItem>
                            <SelectItem value="hemiplegia">Hemiplegia</SelectItem>
                            <SelectItem value="other">Other/Unsure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cause of Paralysis</label>
                        <Select value={formData.cause} onValueChange={(value) => setFormData(prev => ({ ...prev, cause: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cause" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car-accident">Car Accident</SelectItem>
                            <SelectItem value="truck-accident">Truck Accident</SelectItem>
                            <SelectItem value="motorcycle-accident">Motorcycle Accident</SelectItem>
                            <SelectItem value="fall">Fall</SelectItem>
                            <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                            <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                            <SelectItem value="violence">Violence</SelectItem>
                            <SelectItem value="sports">Sports Injury</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Start My Free Case Evaluation
                    </Button>
                  </form>
                </div>
              </section>

              {/* What to Do After Paralysis */}
              <section id="diagnosis-steps" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After a Paralysis Injury</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="glass-card group hover-glow-success transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                        <Heart className="w-5 h-5 mr-2 text-green-600" />
                        Immediate Medical Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Prioritize emergency medical care at specialized spinal centers</p>
                      <p>• Request all medical records and imaging studies</p>
                      <p>• Get second opinions from spinal cord specialists</p>
                      <p>• Begin rehabilitation as soon as medically appropriate</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                        <Scale className="w-5 h-5 mr-2 text-red-600" />
                        Immediate Legal Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Contact an experienced paralysis attorney immediately</p>
                      <p>• Preserve all evidence from the accident scene</p>
                      <p>• Document all medical treatment and expenses</p>
                      <p>• Don't speak to insurance companies without representation</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="flex">
                    <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Time is Critical</h3>
                      <p className="text-yellow-700">
                        California's statute of limitations for personal injury cases is typically two years, but evidence disappears quickly. 
                        The sooner you contact us, the better we can protect your rights and build a strong case.
                      </p>
                    </div>
                  </div>
                </div>

                <img src={diagnosisImage} alt="Spinal cord diagnosis process" className="w-full h-64 object-cover rounded-lg mb-6" />
              </section>

              {/* Types of Paralysis */}
              <section id="types" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Different Types of Paralysis</h2>
                
                <div className="space-y-6">
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between mb-4">
                        Quadriplegia (Tetraplegia) - Complete Paralysis of All Four Limbs
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mb-4">
                        <CardContent className="pt-6">
                          <p className="mb-4">
                            Quadriplegia involves paralysis of all four limbs and the torso, typically resulting from injuries to the cervical spine (C1-C8). 
                            This catastrophic condition affects approximately 13% of spinal cord injury victims and often requires:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>24/7 attendant care and nursing support</li>
                            <li>Respiratory assistance and ventilator support</li>
                            <li>Power wheelchairs and mobility equipment ($15,000-$65,000)</li>
                            <li>Extensive home modifications ($100,000+)</li>
                            <li>Vehicle modifications with wheelchair lifts ($20,000-$80,000)</li>
                            <li>Ongoing medical care exceeding $1 million annually</li>
                          </ul>
                          <p className="mt-4">
                            Lifetime costs often exceed $5 million. High-level injuries (C1-C4) may affect breathing, while lower cervical injuries (C5-C8) may preserve some arm function.
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between mb-4">
                        Paraplegia - Lower Body Paralysis
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mb-4">
                        <CardContent className="pt-6">
                          <p className="mb-4">
                            Paraplegia involves paralysis of the lower body from injuries to the thoracic (T1-T12), lumbar (L1-L5), or sacral spine. 
                            While upper body function remains intact, paraplegics face significant challenges:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li>Complete loss of leg function and mobility</li>
                            <li>Loss of bowel and bladder control</li>
                            <li>Sexual dysfunction and fertility issues</li>
                            <li>Chronic pain and muscle spasms</li>
                            <li>Manual or power wheelchairs ($3,000-$30,000)</li>
                            <li>Home accessibility modifications ($50,000-$150,000)</li>
                          </ul>
                          <p className="mt-4">
                            First-year costs average $560,000, with annual expenses of $75,000+ thereafter. Total lifetime costs typically range from $2.5 to $3.5 million.
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between mb-4">
                        Incomplete Paralysis and Other Forms
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <Card className="mb-4">
                        <CardContent className="pt-6">
                          <p className="mb-4">
                            Incomplete spinal cord injuries preserve some function below the injury level. These account for about 60% of all spinal injuries:
                          </p>
                          <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Central Cord Syndrome:</strong> Greater weakness in arms than legs</li>
                            <li><strong>Brown-Séquard Syndrome:</strong> Paralysis on one side of the body</li>
                            <li><strong>Anterior Cord Syndrome:</strong> Loss of motor function and pain/temperature sensation</li>
                            <li><strong>Monoplegia:</strong> Paralysis of a single limb</li>
                            <li><strong>Hemiplegia:</strong> Paralysis of one side of the body</li>
                          </ul>
                          <p className="mt-4">
                            Recovery potential varies significantly, making accurate prognosis essential for proper compensation calculations.
                          </p>
                        </CardContent>
                      </Card>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </section>

              {/* Common Causes */}
              <section id="causes" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Common Causes of Paralysis & Legal Liability</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-red-600" />
                        Vehicle Accidents (46%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Car, truck, and motorcycle crashes</li>
                        <li>• High-speed collisions on highways</li>
                        <li>• T-bone and rollover accidents</li>
                        <li>• Commercial vehicle incidents</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                        Falls (28%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Construction and workplace falls</li>
                        <li>• Premises liability incidents</li>
                        <li>• Nursing home accidents</li>
                        <li>• Slip and fall on dangerous conditions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="w-5 h-5 mr-2 text-purple-600" />
                        Violence (15%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Gunshot wounds and stabbings</li>
                        <li>• Negligent security claims</li>
                        <li>• Assault and battery incidents</li>
                        <li>• Crime victim compensation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Stethoscope className="w-5 h-5 mr-2 text-blue-600" />
                        Medical Malpractice (5%)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Surgical errors during spine operations</li>
                        <li>• Anesthesia complications</li>
                        <li>• Delayed diagnosis of spinal conditions</li>
                        <li>• Birth injuries from medical negligence</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <img src={medicalImage} alt="Spinal cord treatment facility" className="w-full h-64 object-cover rounded-lg" />
              </section>

              {/* Compensation Section */}
              <section id="compensation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Paralysis Injuries</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-green-600" />
                        Economic Damages
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <h4 className="font-semibold">Medical Expenses</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Emergency treatment and surgeries</li>
                        <li>Lifetime medical care and rehabilitation</li>
                        <li>Medical equipment and assistive devices</li>
                        <li>Medication and ongoing treatments</li>
                      </ul>
                      
                      <h4 className="font-semibold">Lost Wages & Earning Capacity</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Past and future lost income</li>
                        <li>Lost benefits and retirement contributions</li>
                        <li>Reduced earning potential</li>
                        <li>Career advancement opportunities</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-blue-600" />
                        Non-Economic Damages
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <h4 className="font-semibold">Pain & Suffering</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Physical pain from injury and complications</li>
                        <li>Emotional distress and mental anguish</li>
                        <li>Loss of enjoyment of life activities</li>
                        <li>Humiliation and embarrassment</li>
                      </ul>
                      
                      <h4 className="font-semibold">Loss of Consortium</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Loss of companionship and society</li>
                        <li>Impact on intimate relationships</li>
                        <li>Loss of household contributions</li>
                        <li>Effect on family relationships</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">No Damage Caps</h3>
                  <p className="text-green-700">
                    Unlike medical malpractice cases, most paralysis claims face no damage caps in California. You can recover full economic and non-economic damages without artificial limits. Punitive damages may apply for egregious conduct.
                  </p>
                </div>

                <img src={compensationImage} alt="Compensation calculation" className="w-full h-64 object-cover rounded-lg mt-6" />
              </section>

              {/* Legal Process */}
              <section id="legal-process" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">The Legal Process for Paralysis Cases</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Initial Consultation & Case Evaluation</h3>
                      <p>We review your medical records, discuss the incident causing your paralysis, and evaluate the strength of your case. This consultation is free and confidential.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Medical Documentation & Expert Review</h3>
                      <p>We obtain all relevant medical records, arrange additional testing if needed, and have your case reviewed by spinal cord experts who can establish the extent of your paralysis.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Investigation & Evidence Gathering</h3>
                      <p>Our team investigates the accident scene, workplace conditions, or circumstances that caused your paralysis. We interview witnesses and preserve crucial evidence.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Filing Your Claim</h3>
                      <p>We file your lawsuit within California's statute of limitations and handle all legal paperwork and court filings on your behalf.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Negotiation & Settlement</h3>
                      <p>We negotiate aggressively with insurance companies for fair compensation. Our former defense attorney experience gives us unique insight into their tactics.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Trial Preparation & Court Proceedings</h3>
                      <p>If settlement negotiations fail, we're prepared to take your case to trial. We present compelling evidence and expert testimony to secure maximum compensation.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Paralysis Cases</h2>
                
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <CardTitle className="flex justify-between items-center text-base">
                          {faq.question}
                          {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                        </CardTitle>
                      </CardHeader>
                      {expandedFaq === index && (
                        <CardContent>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      )}
                    </Card>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar - Exactly matching Mesothelioma sticky structure */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 lg:top-32 z-20 max-h-[calc(100vh-8rem)] space-y-6">
                
                {/* 3 Ways to Start Your Case - Matches Mesothelioma */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader 
                    className="bg-cover bg-center bg-no-repeat text-white p-8 rounded-t-lg relative"
                    style={{ backgroundImage: `url(${sidebarImage})` }}
                  >
                    <div className="absolute inset-0 bg-red-600/90 rounded-t-lg"></div>
                    <CardTitle className="text-center text-xl font-bold relative z-10 text-white">3 Ways to Start Your Case</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold text-lg py-4"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      <span className="text-white">Call (818) 123-4567</span>
                    </Button>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4"
                      onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      <span className="text-white">Free Case Evaluation</span>
                    </Button>
                    
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-4"
                      onClick={() => window.location.href = '/practice-areas/paralysis/compensation-calculator'}
                    >
                      <Scale className="w-5 h-5 mr-2" />
                      <span className="text-white">Compensation Calculator</span>
                    </Button>
                  </CardContent>
                </Card>

                {/* What We Evaluate - Matches Mesothelioma structure */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">What We Evaluate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-red-600" />
                      <span className="text-sm">Vehicle Accidents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Workplace Falls</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Medical Malpractice</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Sports Injuries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Building className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Premises Liability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Violence & Assault</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/paralysis/legal-guidance'}
                    >
                      📋 Legal Guidance
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/paralysis/medical-guidance'}
                    >
                      🏥 Medical Guidance  
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/paralysis/compensation-calculator'}
                    >
                      💰 Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Matching Mesothelioma */}
        <section className="bg-red-600 text-white py-16 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't Wait - Time Limits Apply for California Paralysis Claims</h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white">
              California has strict deadlines for filing paralysis claims. Evidence can be lost and witnesses' memories fade. 
              The sooner you contact us, the better we can protect your rights and secure maximum compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 text-red-600 hover:text-red-700 font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
              >
                Get Your Free Case Evaluation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-6 h-6 mr-3" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Paralysis;