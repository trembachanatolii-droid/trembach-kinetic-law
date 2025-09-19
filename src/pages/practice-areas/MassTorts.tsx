import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
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
  ArrowLeft,
  Activity,
  Settings,
  AlertCircle,
  Clipboard,
  FileX,
  Zap,
  Calculator,
  BookOpen
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBackground from '@/assets/practice-areas/mass-torts-hero.jpg';
import sidebarImage from '@/assets/practice-areas/mass-torts-evaluation.jpg';
import medicalImage from '@/assets/practice-areas/mass-torts-medical.jpg';
import legalProcessImage from '@/assets/practice-areas/mass-torts-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/mass-torts-compensation.jpg';
import typesImage from '@/assets/practice-areas/mass-torts-types.jpg';
import mesotheliomaImage from '@/assets/practice-areas/mass-torts-mesothelioma.jpg';
import talcImage from '@/assets/practice-areas/mass-torts-talc.jpg';
import campLeJeuneImage from '@/assets/practice-areas/mass-torts-camp-lejeune.jpg';
import silicosisImage from '@/assets/practice-areas/mass-torts-silicosis.jpg';
import pfasImage from '@/assets/practice-areas/mass-torts-pfas.jpg';
import benzeneImage from '@/assets/practice-areas/mass-torts-benzene.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MassTorts: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    overview: false,
    types: false,
    mesothelioma: false,
    talc: false,
    campLejeune: false,
    silicosis: false,
    pfas: false,
    benzene: false,
    process: false
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    injuryType: '',
    exposureSource: '',
    description: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'types', label: 'MASS TORT TYPES', icon: AlertTriangle },
    { id: 'mesothelioma', label: 'MESOTHELIOMA', icon: Activity },
    { id: 'talc', label: 'TALC CANCER', icon: AlertCircle },
    { id: 'camp-lejeune', label: 'CAMP LEJEUNE', icon: Shield },
    { id: 'process', label: 'LEGAL PROCESS', icon: Clipboard },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D floating background layers
      const backLayer = document.querySelector('.bg-layer-back');
      const midLayer = document.querySelector('.bg-layer-mid');
      const frontLayer = document.querySelector('.bg-layer-front');

      if (backLayer) {
        gsap.to(backLayer, {
          y: 30,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (midLayer) {
        gsap.to(midLayer, {
          x: 40,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      if (frontLayer) {
        gsap.to(frontLayer, {
          y: 20,
          x: 25,
          rotation: 2,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
        gsap.to(frontLayer, {
          rotation: -2,
          duration: 22,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }

      // Enhanced hero entrance animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.fromTo(heroContent,
          { 
            opacity: 0, 
            y: 50, 
            z: -100,
            scale: 0.9,
            filter: "blur(10px)"
          },
          { 
            opacity: 1, 
            y: 0, 
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.2, 
            ease: "cubic-bezier(0.22, 1, 0.36, 1)"
          }
        );
      }

      // Enhanced content sections with 3D entrance
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections && contentSections.length > 0) {
        gsap.fromTo(contentSections,
          { 
            opacity: 0, 
            y: 60,
            rotationX: 15,
            z: -50,
            scale: 0.95,
            filter: "blur(5px)"
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            z: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.8,
            stagger: 0.15,
            ease: "cubic-bezier(0.22, 1, 0.36, 1)",
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 80%'
            }
          }
        );
      }

      // Parallax effects for cards
      const cards = document.querySelectorAll('.parallax-card');
      cards.forEach((card, index) => {
        gsap.to(card, {
          y: -20 * (index % 3 + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

    });

    // Cleanup
    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
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
    // Handle form submission - redirect to mass torts case evaluation
    window.location.href = '/mass-torts-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What qualifies as a mass tort case in California?",
      answer: "Mass tort cases involve multiple plaintiffs who suffered similar injuries from the same defective product, dangerous drug, toxic exposure, or corporate negligence. Unlike class actions, each plaintiff maintains an individual lawsuit with damages specific to their injuries. Common mass tort cases include pharmaceutical injuries (like Ozempic gastroparesis), asbestos exposure causing mesothelioma, talc ovarian cancer, Camp Lejeune water contamination, PFAS exposure, and defective medical devices. The key is that numerous people were harmed by the same source, making coordinated litigation beneficial while preserving individual compensation rights."
    },
    {
      question: "How is a mass tort different from a class action lawsuit?",
      answer: "Mass torts and class actions both involve multiple plaintiffs, but they're structured differently. In class actions, all plaintiffs are treated as one group with representative plaintiffs, and everyone receives the same settlement amount regardless of individual damages. Mass torts maintain separate lawsuits for each plaintiff, allowing individualized compensation based on specific injuries and circumstances. Mass torts are better for cases with varying injury severity, like pharmaceutical side effects or toxic exposures where damages differ significantly between victims. This allows for personalized attention and compensation while still benefiting from coordinated discovery and shared litigation costs."
    },
    {
      question: "What is multidistrict litigation (MDL) and how does it work?",
      answer: "Multidistrict Litigation (MDL) is a federal procedure that consolidates similar cases from across the country before one judge for pretrial proceedings. This streamlines discovery, avoids conflicting rulings, and reduces litigation costs. In MDL, cases maintain their individual identity but share common discovery, expert witnesses, and legal strategies. Bellwether trials test representative cases to establish settlement ranges. If no global settlement is reached, cases can be remanded to their original courts for trial. MDL is particularly effective for mass tort cases involving pharmaceutical injuries, medical devices, and toxic exposures where evidence and legal issues overlap significantly."
    },
    {
      question: "How long do mass tort cases typically take to resolve?",
      answer: "Mass tort cases typically take 2-5 years to resolve, though timeline varies significantly based on case complexity, number of plaintiffs, and defendant cooperation. Simple cases with clear liability may settle within 18-24 months, while complex pharmaceutical or toxic exposure cases can take 5+ years. MDL coordination may extend timelines but often results in better outcomes through coordinated strategy and shared resources. Factors affecting duration include discovery scope, expert witness preparation, bellwether trial results, and settlement negotiations. Early settlements are possible when liability is clear and damages substantial. Severe injuries often warrant waiting for full resolution to maximize compensation."
    },
    {
      question: "What compensation can I expect from a mass tort case?",
      answer: "Mass tort compensation varies dramatically based on injury severity, causation strength, age, income, and case-specific factors. Current examples include Ozempic gastroparesis cases projecting $400,000-$700,000 for severe permanent injuries, while temporary symptoms may yield $50,000-$200,000. Mesothelioma cases average $1-2.4 million depending on exposure history and survival time. Talc ovarian cancer settlements range from $300,000-$11 million based on cancer stage and age. Compensation typically includes medical expenses (past and future), lost wages, pain and suffering, and sometimes punitive damages for corporate misconduct. Each case receives individualized evaluation and compensation."
    },
    {
      question: "Do I need to prove the product directly caused my injury?",
      answer: "Yes, causation is essential in mass tort cases, but you don't need to prove it alone. We work with medical experts, epidemiologists, and toxicologists to establish both general causation (the product can cause your type of injury) and specific causation (it caused YOUR injury). Evidence includes temporal relationship (timing), dose-response data, differential diagnosis ruling out other causes, and scientific studies. In pharmaceutical cases, FDA adverse event reports and clinical trial data support causation. For toxic exposures, biomonitoring and environmental testing help. Medical experts provide crucial testimony connecting exposure to your specific injuries. Strong causation evidence significantly increases settlement value."
    },
    {
      question: "Can I join a mass tort if I have pre-existing medical conditions?",
      answer: "Yes, pre-existing conditions don't automatically disqualify you from mass tort participation. California's 'eggshell plaintiff' rule means defendants take victims as they find them—your increased vulnerability doesn't reduce their liability. We must show the defendant's product was a substantial factor in causing or worsening your condition, not necessarily the sole cause. Medical experts help differentiate between pre-existing conditions and new injuries or exacerbations caused by the product. Documentation showing condition stability before exposure and deterioration afterward strengthens your case. Many successful mass tort plaintiffs have underlying health conditions."
    },
    {
      question: "What if the company has filed for bankruptcy?",
      answer: "Bankruptcy doesn't end your mass tort claim—it redirects it through the bankruptcy process. Companies often establish settlement trusts funded by insurance proceeds and company assets to compensate victims. These trusts can provide compensation even after bankruptcy. Notable examples include asbestos trusts worth billions of dollars compensating mesothelioma victims. The bankruptcy court may expedite compensation to critically ill plaintiffs. However, compensation may be reduced compared to pre-bankruptcy settlements. We monitor bankruptcy proceedings and file necessary claims to preserve your rights. Sometimes you can still pursue claims against other defendants like distributors or suppliers."
    },
    {
      question: "How much does it cost to hire a mass tort attorney?",
      answer: "Mass tort cases are handled on contingency fee basis—you pay nothing unless we win. We advance all case costs including expert witnesses, medical record acquisition, discovery expenses, and court fees. These costs are reimbursed from your settlement or verdict. If we don't win, you owe nothing for attorney fees or advanced costs. This arrangement ensures access to experienced mass tort litigation regardless of your financial situation. Contingency fees are competitive and discussed during your free consultation. MDL participation can reduce individual case costs through shared discovery and expert witness expenses."
    },
    {
      question: "Should I accept an early settlement offer?",
      answer: "Early settlement offers should be carefully evaluated as they're typically below fair value. Corporations often make low initial offers hoping victims will accept quick money rather than wait for full litigation. Factors to consider include injury severity, prognosis, future medical needs, and your personal circumstances. For severe permanent injuries, waiting for full case development often results in higher compensation. For minor injuries or urgent financial needs, early settlement might be appropriate. We analyze current settlement trends, similar case outcomes, and your specific damages to advise whether accepting or rejecting early offers serves your best interests."
    }
  ];

  return (
    <div className="mass-torts-page min-h-screen bg-background text-foreground">
      <SEO 
        title="California Mass Tort Lawyer | Mesothelioma, Talc & Pharmaceutical Attorney"
        description="Former defense attorney fighting mass tort claims. Mesothelioma, talc cancer, pharmaceutical injuries, toxic exposure. Free consultation. No fees unless we win."
      />
      
      <GoBack />

      {/* 3D Container with Layered Backgrounds */}
      <div 
        className="mass-torts-3d-container"
        style={{
          perspective: '1200px',
          transformStyle: 'preserve-3d',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Floating Background Layers */}
        <div 
          className="bg-layer-back absolute inset-0 opacity-20"
          style={{
            transform: 'translateZ(-500px) scale(1.4)',
            background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--primary-foreground)) 100%)',
            filter: 'blur(3px)'
          }}
        />
        <div 
          className="bg-layer-mid absolute inset-0 opacity-30"
          style={{
            transform: 'translateZ(-250px) scale(1.2)',
            background: 'linear-gradient(45deg, hsl(var(--accent)) 0%, hsl(var(--secondary)) 100%)',
            filter: 'blur(2px)'
          }}
        />
        <div 
          className="bg-layer-front absolute inset-0 opacity-10"
          style={{
            transform: 'translateZ(-100px) scale(1.1)',
            background: 'radial-gradient(circle, hsl(var(--muted)) 0%, transparent 70%)',
            filter: 'blur(1px)'
          }}
        />

      {/* Hero Section with Enhanced 3D Effects */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center text-white"
        style={{
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden'
        }}
      >
        {/* Enhanced Hero Content with 3D Typography */}
        <div className="hero-content max-w-6xl mx-auto px-6 text-center transform-gpu">
          {/* Premium Badge with Glow Effect */}
          <div className="mb-8 flex justify-center">
            <div className="premium-badge bg-gradient-to-r from-amber-400 to-yellow-500 text-black px-6 py-3 rounded-full font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
              🏆 California's Premier Mass Tort Lawyers
            </div>
          </div>
          
          {/* 3D Display Typography */}
          <h1 
            className="mass-torts-hero-title text-5xl md:text-7xl font-black mb-6 leading-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 4px 8px rgba(0,0,0,0.5)',
              transform: 'translateZ(20px)'
            }}
          >
            Mass Tort Justice for California
          </h1>
          
          {/* Accent Line with Gradient */}
          <div 
            className="w-32 h-2 mx-auto mb-8 rounded-full"
            style={{
              background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))',
              boxShadow: '0 0 20px hsl(var(--primary) / 0.5)'
            }}
          />
          
          {/* Star Rating with Enhanced Animation */}
          <div className="flex justify-center items-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-8 h-8 text-yellow-400 fill-current mx-1 hover:scale-125 transition-transform duration-200" 
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(251, 191, 36, 0.6))',
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
            <span className="ml-4 text-2xl font-bold bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Former Defense Attorney Experience
            </span>
          </div>
          
          {/* Enhanced Call-to-Action with 3D Effect */}
          <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-4xl mx-auto">
            When corporations harm thousands through defective products and toxic exposures, victims deserve justice. Our former defense experience reveals how corporations hide risks and manipulate litigation.
          </p>
          
          <p className="text-lg md:text-xl mb-8 text-green-300 font-semibold animate-pulse">
            Currently accepting: Mesothelioma, Talc Cancer, Camp Lejeune, PFAS, and Pharmaceutical Mass Torts
          </p>
          
          <Button 
            size="lg" 
            className="premium-cta-button bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold px-12 py-6 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300"
            onClick={() => window.location.href = '/mass-torts-case-evaluation'}
            style={{
              boxShadow: '0 10px 30px rgba(220, 38, 38, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
              transform: 'translateZ(10px)'
            }}
          >
            START MY FREE CASE EVALUATION
          </Button>
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
                    <span>{tab.label}</span>
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
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Mass Tort Litigation Overview</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  <strong>Mass tort litigation represents one of the most powerful legal tools available to hold corporations accountable when their negligence harms thousands of people.</strong> Unlike individual lawsuits, mass torts allow victims with similar injuries from the same product or exposure to coordinate their legal efforts while maintaining individual claims. This approach levels the playing field against billion-dollar corporations who would otherwise overwhelm individual plaintiffs with their vast legal resources.
                </p>
                
                <p className="text-xl leading-relaxed">
                  At Trembach Law Firm, we specialize in representing California residents harmed by corporate negligence in mass tort cases. Our unique perspective as a former defense attorney provides invaluable insight into how corporations and their insurers strategize to minimize payouts. We use this knowledge to anticipate their tactics and build stronger cases for our clients.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Learn More About Mass Tort Litigation
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>What Are Mass Torts?</h3>
                    <p>
                      A mass tort is a civil action involving multiple plaintiffs who have been injured by the same product, drug, toxic substance, or event. These cases differ from class actions in that each plaintiff maintains an individual lawsuit with damages specific to their injuries. Common mass tort cases involve:
                    </p>
                    
                    <ul>
                      <li><strong>Dangerous pharmaceutical drugs</strong> - Prescription medications causing unexpected side effects like gastroparesis, cancer, or organ damage</li>
                      <li><strong>Defective medical devices</strong> - Implants, surgical mesh, or diagnostic equipment causing complications</li>
                      <li><strong>Toxic exposures</strong> - Asbestos, chemicals, contaminated water, or environmental pollutants</li>
                      <li><strong>Consumer products</strong> - Cosmetics, household items, or industrial products causing cancer or injuries</li>
                      <li><strong>Workplace exposures</strong> - Occupational hazards affecting multiple workers at different companies</li>
                    </ul>
                    
                    <h3>Why Mass Torts Are More Effective Than Individual Lawsuits</h3>
                    <p>
                      Mass tort litigation provides several advantages over individual personal injury lawsuits when dealing with corporate defendants who have harmed multiple people:
                    </p>
                    
                    <ul>
                      <li><strong>Shared Resources:</strong> Discovery costs, expert witness fees, and investigation expenses are shared among all plaintiffs, making complex litigation affordable</li>
                      <li><strong>Coordinated Strategy:</strong> Attorneys collaborate to develop the strongest legal theories and presentation of evidence</li>
                      <li><strong>Enhanced Leverage:</strong> Hundreds or thousands of cases create significant pressure for fair settlements</li>
                      <li><strong>Preserved Individual Rights:</strong> Each plaintiff maintains their own case with compensation based on their specific injuries</li>
                      <li><strong>Efficient Discovery:</strong> Corporate documents and depositions benefit all plaintiffs simultaneously</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Frequently Asked Questions About Mass Torts</h2>
              <p className="text-xl mb-6">Get answers to common questions about mass tort litigation in California</p>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-morphism-card">
                    <CardHeader 
                      className="cursor-pointer transition-colors hover:bg-muted/50"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex justify-between items-center text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="pt-0">
                        <p className="text-foreground/80 leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Time Limits Section */}
            <section className="content-section mb-12">
              <Card className="never-do-theme p-8 text-center">
                <div className="max-w-4xl mx-auto">
                  <h2 className="text-4xl font-bold text-red-600 mb-6">Don't Wait - Time Limits Apply for California Mass Torts</h2>
                  <p className="text-xl mb-6">
                    California law imposes strict statutes of limitations on mass tort claims. Missing these deadlines can permanently bar your right to compensation, regardless of the strength of your case.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">2 Years</div>
                      <div className="text-sm">Typical statute of limitations from discovery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">1 Year</div>
                      <div className="text-sm">Some specific mass tort deadlines</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600 mb-2">0 Days</div>
                      <div className="text-sm">Extension if deadline passes</div>
                    </div>
                  </div>
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-xl"
                    onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                  >
                    Protect Your Rights - Free Consultation
                  </Button>
                </div>
              </Card>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-morphism-card p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  3 Ways to Start Your Case
                </h3>
                
                <div className="space-y-4">
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <Phone className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">1. Call Now</span>
                    </div>
                    <p className="text-sm mb-3">Speak directly with an experienced mass tort attorney</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-bold"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <FileText className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">2. Online Form</span>
                    </div>
                    <p className="text-sm mb-3">Complete our secure case evaluation form</p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90"
                      onClick={() => window.location.href = '/mass-torts-case-evaluation'}
                    >
                      Start Evaluation
                    </Button>
                  </div>
                  
                  <div className="immediate-steps-theme p-4 rounded-lg transition-all duration-300 hover:transform hover:translateY(-2px)">
                    <div className="flex items-center mb-3">
                      <Mail className="w-6 h-6 text-green-500 mr-3" />
                      <span className="font-bold text-lg">3. Email Us</span>
                    </div>
                    <p className="text-sm mb-3">Send us details about your potential case</p>
                    <Button 
                      className="w-full bg-accent hover:bg-accent/90"
                      onClick={() => window.open('mailto:info@trembachlawfirm.com')}
                    >
                      Send Email
                    </Button>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-muted/20 rounded-lg">
                  <h4 className="font-bold text-center mb-2">Why Choose Us?</h4>
                  <ul className="text-sm space-y-1">
                    <li>✓ No fees unless we win</li>
                    <li>✓ Former defense attorney insight</li>
                    <li>✓ 24/7 consultation available</li>
                    <li>✓ California mass tort specialists</li>
                  </ul>
                </div>
              </Card>

              {/* Emergency Resources */}
              <Card className="never-do-theme p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                  Important Reminders
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <Clock className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Time limits apply</strong> - Contact us immediately if you suspect corporate negligence caused your injury</span>
                  </li>
                  <li className="flex items-start">
                    <FileX className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Preserve evidence</strong> - Keep all medical records, product packaging, and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Don't sign releases</strong> - Contact us before signing any documents from corporations or insurers</span>
                  </li>
                  <li className="flex items-start">
                    <Stethoscope className="w-4 h-4 mr-2 text-red-500 mt-0.5 flex-shrink-0" />
                    <span><strong>Continue medical treatment</strong> - Follow all doctor recommendations and document your condition</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>
      </div> {/* Close 3D container */}
    </div>
  );
};

export default MassTorts;