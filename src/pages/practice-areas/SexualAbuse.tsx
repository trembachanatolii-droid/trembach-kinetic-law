import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
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
  Lock,
  UserCheck,
  Calendar,
  BookOpen,
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/sexual-abuse-hero-bg.jpg';
import overviewImage from '@/assets/sexual-abuse-overview.jpg';
import typesImage from '@/assets/sexual-abuse-types.jpg';
import legalProcessImage from '@/assets/sexual-abuse-legal-process.jpg';
import compensationImage from '@/assets/sexual-abuse-compensation.jpg';
import faqImage from '@/assets/sexual-abuse-faq.jpg';
import sidebarImage from '@/assets/sexual-abuse-sidebar.jpg';
import therapyImage from '@/assets/sexual-abuse-therapy-process.jpg';
import californiaLawsImage from '@/assets/california-sexual-abuse-laws.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SexualAbuse: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    abuseType: '',
    timeframe: '',
    relationship: ''
  });
  const [showOverviewMore, setShowOverviewMore] = useState(false);
  const [showTypesMore, setShowTypesMore] = useState(false);
  const [showLegalMore, setShowLegalMore] = useState(false);
  const [showCompensationMore, setShowCompensationMore] = useState(false);
  const [visible, setVisible] = useState(false);

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'types', label: 'TYPES OF ABUSE', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: Calculator },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Container Setup
      gsap.set(heroRef.current, {
        perspective: 1200,
        transformStyle: 'preserve-3d'
      });

      // Layered 3D Background
      const layers = heroRef.current?.querySelectorAll('.bg-layer');
      if (layers) {
        gsap.set(layers[0], { z: -500, opacity: 0.3 });
        gsap.set(layers[1], { z: -250, opacity: 0.5 });
        gsap.set(layers[2], { z: -100, opacity: 0.7 });
      }

      // Floating Background Layers
      if (layers) {
        gsap.to(layers[0], {
          y: 30,
          duration: 14,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
        
        gsap.to(layers[1], {
          x: 40,
          duration: 18,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
        
        gsap.to(layers[2], {
          y: 20,
          x: 25,
          rotation: 2,
          duration: 10,
          ease: 'power2.inOut',
          repeat: -1,
          yoyo: true
        });
      }

      // Hero animation with 3D transforms
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, z: -200 },
        { 
          opacity: 1, 
          y: 0, 
          z: 0,
          duration: 0.8, 
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)' 
        }
      );

      // Content sections with enhanced animations
      const sections = contentRef.current?.querySelectorAll('.content-section');
      if (sections) {
        sections.forEach((section, i) => {
          gsap.fromTo(section,
            { 
              opacity: 0, 
              y: 60,
              scale: 0.95,
              rotationX: 10
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              rotationX: 0,
              duration: 0.8,
              ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
              }
            }
          );
        });
      }

      // Parallax scroll effects
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          if (layers) {
            gsap.set(layers[0], { y: progress * 100 });
            gsap.set(layers[1], { y: progress * 50 });
            gsap.set(layers[2], { y: progress * 25 });
          }
        }
      });

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
    window.location.href = '/sexual-abuse-case-evaluation';
  };

  const faqs = [
    {
      question: "What is the difference between sexual abuse and sexual assault?",
      answer: "Sexual abuse is a broader term that includes any non-consensual sexual contact or behavior, while sexual assault typically refers to more specific criminal acts. Sexual abuse can include unwanted touching, exposure, voyeurism, exploitation, and psychological abuse. Both are serious violations that can result in civil lawsuits regardless of whether criminal charges were filed."
    },
    {
      question: "Can I file a lawsuit if the criminal case was dropped or the perpetrator was acquitted?",
      answer: "Yes, absolutely. Civil lawsuits have a lower burden of proof than criminal cases. Criminal cases require proof 'beyond a reasonable doubt' while civil cases only require proof by 'preponderance of the evidence' (more likely than not). Many civil cases succeed even when criminal cases do not."
    },
    {
      question: "How much does it cost to hire a sexual abuse attorney?",
      answer: "We work on a contingency fee basis, meaning you pay no attorneys' fees unless we win your case. The initial consultation is always free and confidential. We understand that financial concerns shouldn't prevent survivors from seeking justice."
    },
    {
      question: "Will my case be public? Can I remain anonymous?",
      answer: "We take every possible step to protect your privacy. Cases can often be filed under initials (Jane Doe/John Doe), and we can request that sensitive information be sealed. Many cases are resolved through confidential settlements that never become public record."
    },
    {
      question: "What if the abuse happened decades ago?",
      answer: "California has extended statute of limitations laws for sexual abuse cases. You may have until age 40, or within 5 years of discovering the connection between the abuse and psychological injury, or within 3 years of discovering the abuse caused your injury, whichever is later. Recent law changes have opened new opportunities for older cases."
    },
    {
      question: "What if I don't remember all the details of the abuse?",
      answer: "Trauma can affect memory, and this is well understood by courts. Fragmented or repressed memories don't prevent a valid case. We work with trauma specialists and use other evidence like medical records, witness testimony, and documentation to build your case."
    },
    {
      question: "Can I sue if the perpetrator is deceased?",
      answer: "Yes, you may be able to sue the perpetrator's estate or other responsible parties like institutions, employers, or organizations that enabled the abuse. Many cases involve institutional liability rather than just individual perpetrators."
    },
    {
      question: "What kind of evidence do I need for a sexual abuse case?",
      answer: "Evidence can include medical records, therapy records, witness testimony, documentation of reporting the abuse, photos of injuries, journal entries, and expert testimony. We help gather and preserve evidence while respecting your privacy and emotional wellbeing."
    },
    {
      question: "How long does a sexual abuse lawsuit take?",
      answer: "Cases vary widely, from several months to a few years depending on complexity. We work to resolve cases as efficiently as possible while ensuring maximum compensation. Many cases settle out of court, which can be faster and more private."
    },
    {
      question: "What compensation can I receive for sexual abuse?",
      answer: "Compensation may include medical expenses, therapy costs, lost wages, pain and suffering, emotional distress, and in some cases punitive damages. The amount depends on the severity of abuse, impact on your life, and the defendant's ability to pay."
    },
    {
      question: "Will I have to testify in court?",
      answer: "Not necessarily. Many cases settle without going to trial. If a trial is necessary, we prepare you thoroughly and can request accommodations like testifying via video or with privacy screens. Your comfort and safety are our priorities."
    },
    {
      question: "Can I sue a school for sexual abuse by a teacher?",
      answer: "Yes, schools, school districts, and educational institutions can be held liable for sexual abuse by employees. They have a duty to protect students and can be responsible for negligent hiring, supervision, or failing to respond appropriately to reports of abuse."
    },
    {
      question: "What if I was abused by a family member?",
      answer: "Family relationship doesn't prevent a lawsuit. You can sue family members, and in some cases their insurance may cover the claim. We understand the unique challenges of these cases and provide sensitive, confidential representation."
    },
    {
      question: "Can men be victims of sexual abuse?",
      answer: "Absolutely. Men and boys can be victims of sexual abuse, and they have the same legal rights as any other survivor. We represent all survivors regardless of gender and understand the unique challenges male survivors may face."
    },
    {
      question: "What if I signed a non-disclosure agreement (NDA)?",
      answer: "Recent California laws have limited the enforceability of NDAs in sexual abuse cases. Many NDAs related to sexual abuse may be void or unenforceable. We can review any agreements you signed and advise you on your rights."
    },
    {
      question: "Can I get compensation if the abuser doesn't have money?",
      answer: "Yes, there may be other sources of compensation including insurance policies, institutional defendants (schools, churches, employers), victim compensation funds, or assets you're unaware of. We investigate all potential sources of recovery."
    },
    {
      question: "What's the difference between civil and criminal cases?",
      answer: "Criminal cases are prosecuted by the government to punish wrongdoing, while civil cases are filed by victims to obtain compensation. You can pursue both simultaneously, and the outcomes are independent of each other."
    },
    {
      question: "How do I know if I have a valid case?",
      answer: "If you experienced non-consensual sexual contact or behavior, you likely have a valid case. The best way to know for sure is to speak with an experienced attorney. Our free consultation can help determine your legal options."
    },
    {
      question: "What if I feel guilty or partially responsible?",
      answer: "You are not responsible for the abuse you suffered. Guilt and self-blame are common reactions to trauma, but the law is clear that victims are never at fault for their abuse. Our team includes trauma-informed professionals who understand these feelings."
    },
    {
      question: "Can I sue my employer for workplace sexual harassment?",
      answer: "Yes, employers can be held liable for sexual harassment or assault by employees, supervisors, or even customers in some cases. California law provides strong protections for workers against sexual harassment and retaliation."
    },
    {
      question: "What if I was abused in foster care?",
      answer: "Foster care abuse cases can involve liability for the state, county, foster parents, and agencies. California has specific laws addressing abuse in foster care and institutional settings. These cases require specialized knowledge of government liability laws."
    },
    {
      question: "Can I sue a therapist for sexual abuse?",
      answer: "Yes, sexual contact between a therapist and patient is both criminal and grounds for a civil lawsuit. This includes violations by psychologists, psychiatrists, counselors, and other mental health professionals. Professional licensing boards and malpractice insurance may also be involved."
    },
    {
      question: "What if the abuse involved multiple perpetrators?",
      answer: "Cases involving multiple perpetrators or organized abuse can be complex but are definitely actionable. We can pursue claims against all responsible parties and investigate whether institutions knew or should have known about the abuse."
    },
    {
      question: "Can I sue if I was abused at a juvenile detention facility?",
      answer: "Yes, abuse in detention facilities, youth camps, or correctional institutions can result in lawsuits against the facility, staff, and government entities. These institutions have special duties to protect vulnerable populations."
    },
    {
      question: "What if I already received a settlement years ago?",
      answer: "Previous settlements may not prevent new claims, especially if you've discovered additional harm or if new laws have expanded your rights. We can review previous settlements to determine if additional claims are possible."
    },
    {
      question: "How do I start the legal process?",
      answer: "The first step is a free, confidential consultation where we listen to your story, explain your rights, and discuss your options. You can call us, fill out our online form, or schedule a video consultation. Everything you tell us is protected by attorney-client privilege."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Bring any documents you have related to the abuse, such as medical records, police reports, or correspondence. However, don't worry if you don't have documents - your testimony is the most important evidence, and we can help obtain records later."
    },
    {
      question: "Can I change my mind after starting a case?",
      answer: "Yes, you always have the right to dismiss your case. While we hope to help you see your case through to a successful conclusion, the decision is always yours. We'll provide honest advice about the pros and cons of continuing versus dismissing."
    },
    {
      question: "Will my family find out about the abuse?",
      answer: "We respect your privacy and maintain strict confidentiality. You decide who knows about your case. We can take steps to keep proceedings confidential and can discuss how to handle family concerns while protecting your interests."
    },
    {
      question: "What if I'm still in contact with my abuser?",
      answer: "We understand that many survivors maintain contact with their abusers due to family relationships, work situations, or other circumstances. We can help you navigate this complex situation while protecting your safety and legal rights."
    },
    {
      question: "Can therapy records be used against me?",
      answer: "Therapy records are generally protected by privilege, but there are exceptions. We work with mental health professionals to present therapy records in a way that supports your case rather than hurts it. Your healing shouldn't be used against you."
    },
    {
      question: "What if I have a criminal record?",
      answer: "A criminal record doesn't prevent you from being a victim or from pursuing a civil case. Everyone deserves protection from sexual abuse regardless of their past. We focus on the abuse you suffered, not your history."
    },
    {
      question: "Can I sue a police officer for sexual assault?",
      answer: "Yes, police officers and other law enforcement personnel can be sued for sexual abuse. These cases may involve federal civil rights claims as well as state law claims. Government immunity laws have exceptions for criminal conduct."
    },
    {
      question: "What about online sexual abuse or exploitation?",
      answer: "Online sexual abuse, including sextortion, revenge porn, and exploitation, is actionable under California law. We can pursue claims against perpetrators and potentially against platforms that facilitate abuse."
    },
    {
      question: "Can I sue Uber or Lyft for assault by a driver?",
      answer: "Rideshare companies can be held liable for assaults by their drivers, especially if they failed to properly screen drivers or respond to complaints. Similar liability can apply to taxi companies, delivery services, and other transportation providers."
    },
    {
      question: "What if the abuse happened at a party where I was drinking?",
      answer: "Alcohol consumption doesn't make you responsible for sexual abuse. In fact, sexual contact with someone who is intoxicated is illegal because they cannot consent. We handle many cases involving alcohol or drug-facilitated sexual assault."
    },
    {
      question: "Can I sue for sexual harassment that didn't involve touching?",
      answer: "Yes, sexual harassment can include verbal abuse, unwanted sexual advances, creating a hostile environment, and other non-physical conduct. California law broadly protects against sexual harassment in workplaces, schools, and other settings."
    },
    {
      question: "What if I was trafficked for sex?",
      answer: "Sex trafficking victims have special legal protections and rights to compensation. This can include claims against traffickers, buyers, and businesses that benefited from trafficking. We work with specialized service providers to support trafficking survivors."
    },
    {
      question: "Can I sue the Catholic Church for priest abuse?",
      answer: "Yes, religious institutions including the Catholic Church can be held liable for abuse by clergy. California laws have specifically addressed institutional child sexual abuse, including special rules for claims against religious organizations."
    },
    {
      question: "What if I was abused during medical treatment?",
      answer: "Medical professionals who commit sexual abuse can be sued for malpractice, battery, and other claims. This includes doctors, nurses, therapists, and other healthcare providers. Medical institutions may also be liable for the actions of their employees."
    },
    {
      question: "Can I sue if I was abused in the military?",
      answer: "Military sexual abuse cases are complex due to federal laws, but civil remedies may be available against individual perpetrators and in some cases against the government. Recent legal changes have expanded options for military sexual abuse survivors."
    },
    {
      question: "What if I was abused during a massage?",
      answer: "Sexual abuse by massage therapists, whether licensed or unlicensed, is grounds for a lawsuit. This can include claims against the individual therapist and potentially against the business or establishment where the abuse occurred."
    },
    {
      question: "Can I sue if I don't know the perpetrator's real name?",
      answer: "Cases can be filed against unknown defendants (using 'John Doe' names) while we investigate to identify the perpetrator. We have resources to help identify abusers through various investigative methods."
    },
    {
      question: "Can I get emergency financial help while my case is pending?",
      answer: "There may be victim compensation programs, emergency funds, or other resources available while your case is pending. We can help connect you with immediate support services and explore all options for financial assistance."
    },
    {
      question: "How do you protect my privacy during the case?",
      answer: "We use confidentiality agreements, sealed filings, pseudonyms, and other protective measures. Our office maintains strict security protocols, and we're experienced in handling sensitive cases with maximum privacy protection."
    },
    {
      question: "What happens to my case if I move out of California?",
      answer: "You can still pursue a California case even if you move out of state. We can work with you remotely for many aspects of the case, and California courts have jurisdiction over cases involving California-based defendants or abuse that occurred in California."
    },
    {
      question: "What if the defendant declares bankruptcy?",
      answer: "Bankruptcy doesn't necessarily eliminate your claim. Some debts related to sexual abuse cannot be discharged in bankruptcy, and you may have priority status as a victim. We can help navigate bankruptcy proceedings to protect your interests."
    },
    {
      question: "Can I still sue if the statute of limitations has passed?",
      answer: "California has made significant changes to statute of limitations laws for sexual abuse cases. New laws have revived previously time-barred claims in certain circumstances. It's worth consulting with an attorney even if you think too much time has passed."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <SEO 
        title="California Sexual Abuse Lawyers | Confidential Legal Help | Trembach Law"
        description="Experienced sexual abuse attorneys in California providing confidential representation for survivors. Free consultation, trauma-informed care, no fees unless we win."
        canonical="/practice-areas/sexual-abuse"
      />

      <GoBack className={`transition-opacity duration-500 ${visible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />

      {/* Hero Section with 3D Effects */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
          perspective: '1200px',
          transformStyle: 'preserve-3d'
        }}
      >
        {/* 3D Background Layers */}
        <div className="bg-layer absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
        <div className="bg-layer absolute inset-0 bg-gradient-to-l from-red-900/10 to-orange-900/10"></div>
        <div className="bg-layer absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Sexual Abuse Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Confidential • Compassionate • Effective</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg hover:scale-105 transition-all duration-300"
              onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
            >
              START MY FREE CONFIDENTIAL CONSULTATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs with Enhanced Styling */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md hover:scale-105 ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary shadow-lg' 
                        : 'text-white hover:bg-white/20 hover:shadow-md'
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Sexual Abuse Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has survived sexual abuse in California, you deserve justice, healing, and compensation for the trauma you've endured. Sexual abuse cases require experienced, compassionate legal representation that understands both the legal complexities and the emotional sensitivity these cases demand.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we provide trauma-informed legal representation for sexual abuse survivors throughout California. Our team understands that coming forward takes tremendous courage, and we're committed to protecting your privacy while fighting for the justice and compensation you deserve.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary hover:text-primary">
                    Learn More About Our Sexual Abuse Practice
                    {expandedSections.overview ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Lock className="w-5 h-5 mr-2 text-primary" />
                          Complete Confidentiality
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>All communications are protected by attorney-client privilege. We use encrypted systems and can file cases under pseudonyms to protect your identity.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Trauma-Informed Care
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our team is specially trained in trauma-informed practices to ensure your comfort, safety, and emotional well-being throughout the legal process.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Sexual Abuse Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending institutions provides unique insights into how defendants approach sexual abuse cases.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary">Sensitive Timing</h4>
                          <p className="text-sm text-muted-foreground">We work at your pace, understanding that healing and legal action happen on your timeline, not ours.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary">Comprehensive Support</h4>
                          <p className="text-sm text-muted-foreground">We connect you with counseling, medical care, and support services while pursuing your legal case.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">You pay nothing unless we win your case. Initial consultation is always free and confidential.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Sexual Abuse Representation</h3>
                    <p>
                      Sexual abuse cases in California involve complex legal, medical, and psychological factors. Our firm has the resources and expertise to handle every aspect of your case, from gathering evidence and working with expert witnesses to navigating the sensitive nature of these proceedings.
                    </p>
                    
                    <p>
                      We represent survivors of abuse in various settings throughout California, including:
                    </p>
                    
                    <ul>
                      <li>Schools and universities (students abused by teachers, coaches, staff)</li>
                      <li>Churches and religious organizations</li>
                      <li>Youth organizations (scouts, sports teams, camps)</li>
                      <li>Foster care and juvenile detention facilities</li>
                      <li>Workplaces (harassment and assault by supervisors, coworkers)</li>
                      <li>Healthcare settings (abuse by doctors, therapists, medical staff)</li>
                      <li>Rideshare and transportation services</li>
                      <li>Online platforms and digital exploitation</li>
                    </ul>
                    
                    <p>
                      We investigate every aspect of your case to ensure all responsible parties are held accountable. This comprehensive approach often reveals institutional failures, inadequate supervision, or cover-ups that can significantly increase your compensation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={therapyImage} alt="Supportive legal consultation" className="w-16 h-16 rounded-lg mr-4 object-cover" />
                <h2 className="text-3xl font-bold text-red-600">Free Confidential Case Evaluation</h2>
              </div>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free, Confidential Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your situation. All information is 100% confidential and protected by attorney-client privilege.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">Type of Abuse</label>
                      <Select value={formData.abuseType} onValueChange={(value) => setFormData(prev => ({ ...prev, abuseType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workplace-harassment">Workplace Sexual Harassment</SelectItem>
                          <SelectItem value="school-abuse">School/Educational Setting</SelectItem>
                          <SelectItem value="religious-abuse">Religious Institution</SelectItem>
                          <SelectItem value="healthcare-abuse">Healthcare Provider</SelectItem>
                          <SelectItem value="family-abuse">Family Member</SelectItem>
                          <SelectItem value="stranger-assault">Stranger Assault</SelectItem>
                          <SelectItem value="online-abuse">Online/Digital Abuse</SelectItem>
                          <SelectItem value="institutional">Institutional Setting</SelectItem>
                          <SelectItem value="other">Other/Prefer Not to Say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-primary">When Did This Occur?</label>
                      <Select value={formData.timeframe} onValueChange={(value) => setFormData(prev => ({ ...prev, timeframe: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select timeframe (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="recent">Within the last year</SelectItem>
                          <SelectItem value="2-5-years">2-5 years ago</SelectItem>
                          <SelectItem value="5-10-years">5-10 years ago</SelectItem>
                          <SelectItem value="10-20-years">10-20 years ago</SelectItem>
                          <SelectItem value="over-20-years">More than 20 years ago</SelectItem>
                          <SelectItem value="childhood">During childhood/adolescence</SelectItem>
                          <SelectItem value="prefer-not-say">Prefer not to say</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3">
                    Start My Free Confidential Consultation
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    <Lock className="w-4 h-4 inline mr-1" />
                    100% Confidential • No Obligation • Attorney-Client Privilege Protected
                  </p>
                </form>
              </div>
            </section>

            {/* Types of Abuse Section */}
            <section id="types" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={californiaLawsImage} alt="California sexual abuse laws" className="w-16 h-16 rounded-lg mr-4 object-cover" />
                <h2 className="text-3xl font-bold text-red-600">Types of Sexual Abuse We Handle</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                      <Building className="w-5 h-5 mr-2 text-destructive" />
                      Institutional Abuse
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Schools, universities, and educational settings</p>
                    <p>• Churches and religious organizations</p>
                    <p>• Youth programs, sports teams, and camps</p>
                    <p>• Foster care and juvenile facilities</p>
                    <p>• Healthcare institutions and facilities</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                      <Users className="w-5 h-5 mr-2 text-destructive" />
                      Workplace Harassment
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Sexual harassment by supervisors</p>
                    <p>• Hostile work environment</p>
                    <p>• Quid pro quo harassment</p>
                    <p>• Retaliation for reporting</p>
                    <p>• Third-party harassment (clients, customers)</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.types} onOpenChange={() => toggleSection('types')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-primary hover:text-primary">
                    See All Types of Sexual Abuse Cases
                    {expandedSections.types ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-primary" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                          <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                          Personal Relationships
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>• Domestic violence and intimate partner abuse</p>
                        <p>• Date rape and acquaintance assault</p>
                        <p>• Family member abuse (incest)</p>
                        <p>• Caregiver abuse</p>
                        <p>• Elder abuse in care facilities</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                          <MessageCircle className="w-5 h-5 mr-2 text-destructive" />
                          Digital & Online Abuse
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>• Revenge porn and non-consensual sharing</p>
                        <p>• Sextortion and online blackmail</p>
                        <p>• Child exploitation and grooming</p>
                        <p>• Deepfake pornography</p>
                        <p>• Social media harassment</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-destructive" />
                          Professional Settings
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>• Medical professionals and therapists</p>
                        <p>• Lawyers and legal professionals</p>
                        <p>• Teachers and educational staff</p>
                        <p>• Clergy and religious leaders</p>
                        <p>• Coaches and athletic trainers</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-destructive transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-destructive transition-colors">
                          <Map className="w-5 h-5 mr-2 text-destructive" />
                          Transportation & Services
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p>• Rideshare drivers (Uber, Lyft)</p>
                        <p>• Taxi and transportation services</p>
                        <p>• Delivery and service providers</p>
                        <p>• Hotel and hospitality staff</p>
                        <p>• Security and law enforcement</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={legalProcessImage} alt="Sexual abuse legal process" className="w-16 h-16 rounded-lg mr-4 object-cover" />
                <h2 className="text-3xl font-bold text-red-600">The Legal Process for Sexual Abuse Cases</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">What You Should Do Immediately</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">1</div>
                        <p><strong>Ensure Your Safety:</strong> If you're in immediate danger, contact 911 or local police.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">2</div>
                        <p><strong>Preserve Evidence:</strong> Keep any physical evidence, take photos of injuries, save electronic communications.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">3</div>
                        <p><strong>Seek Medical Care:</strong> Get medical attention for injuries and document the abuse.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">4</div>
                        <p><strong>Contact Support:</strong> Reach out to trusted friends, family, or crisis hotlines for emotional support.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">5</div>
                        <p><strong>Consult an Attorney:</strong> Contact an experienced sexual abuse attorney to understand your legal rights.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">6</div>
                        <p><strong>Document Everything:</strong> Keep detailed records of the incident, symptoms, and any reporting you do.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">What You Should Never Do</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Blame Yourself:</strong> Sexual abuse is never the victim's fault, regardless of circumstances.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Destroy Evidence:</strong> Avoid washing clothing, deleting messages, or cleaning up.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Sign Anything:</strong> Avoid signing settlements, NDAs, or agreements without legal counsel.</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Wait Too Long:</strong> Statutes of limitations may apply, so consult an attorney promptly.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Handle It Alone:</strong> Professional legal and emotional support is crucial for your recovery.</p>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-0.5 flex-shrink-0">✗</div>
                        <p><strong>Don't Assume It's Too Late:</strong> Recent law changes may allow older cases to proceed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Sexual Abuse Survivors</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed">
                  Sexual abuse survivors in California may be entitled to significant compensation for the physical, emotional, and financial damages they have suffered. The amount depends on various factors including the severity of abuse, its impact on your life, and the defendant's resources.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Economic Damages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Medical expenses (past and future)</p>
                    <p>• Therapy and counseling costs</p>
                    <p>• Lost wages and earning capacity</p>
                    <p>• Education and training costs</p>
                    <p>• Medication and treatment expenses</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">Non-Economic Damages</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Pain and suffering</p>
                    <p>• Emotional distress and trauma</p>
                    <p>• Loss of enjoyment of life</p>
                    <p>• Relationship and intimacy issues</p>
                    <p>• Mental anguish and anxiety</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits for Filing Sexual Abuse Cases</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4">California's Extended Statute of Limitations</h3>
                <p className="mb-4">
                  California has significantly extended the time limits for sexual abuse cases, recognizing that survivors often need time to process trauma before coming forward.
                </p>
                
                <div className="space-y-3">
                  <p><strong>Adult Survivors:</strong> You may have until age 40, or within 5 years of discovering the connection between abuse and psychological injury, whichever is later.</p>
                  <p><strong>Recent Discovery:</strong> If you recently discovered that psychological injury was caused by abuse, you may have 3 years from discovery.</p>
                  <p><strong>Revival Window:</strong> California has opened special "lookback windows" allowing previously time-barred cases to proceed.</p>
                </div>
              </div>
            </section>

                {/* Time Limits Warning Section */}
                <section id="time-limits" className="content-card mb-12">
                  <Card className="border-red-200 bg-red-50">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-3 bg-red-100 rounded-lg">
                          <Clock className="w-8 h-8 text-red-600" />
                        </div>
                        <div>
                          <CardTitle className="text-3xl text-red-700">Don't Wait - Time Limits Apply for California</CardTitle>
                          <CardDescription className="text-lg text-red-600">Act now to protect your legal rights</CardDescription>
                        </div>
                      </div>
                      <div className="relative h-64 rounded-lg overflow-hidden mb-6">
                        <img 
                          src={californiaLawsImage} 
                          alt="California sexual abuse time limits and statutes" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="bg-red-100 border border-red-300 rounded-lg p-6">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                          <div>
                            <h3 className="font-bold text-red-700 text-xl mb-2">Critical Deadlines</h3>
                            <p className="text-red-700 leading-relaxed">
                              California law sets strict time limits for filing sexual abuse lawsuits. Missing these deadlines 
                              could forever prevent you from seeking justice and compensation. Don't let time run out on your rights.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-orange-200 bg-orange-50">
                          <CardHeader>
                            <CardTitle className="text-xl text-orange-700 flex items-center gap-2">
                              <Users className="w-6 h-6" />
                              Childhood Sexual Abuse
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-orange-700">
                              <li>• Until age 40, OR</li>
                              <li>• Within 5 years of discovering psychological injury was caused by abuse, OR</li>
                              <li>• Within 3 years of discovering abuse caused your injury</li>
                              <li>• <strong>Extended deadlines may apply under new California laws</strong></li>
                            </ul>
                          </CardContent>
                        </Card>

                        <Card className="border-blue-200 bg-blue-50">
                          <CardHeader>
                            <CardTitle className="text-xl text-blue-700 flex items-center gap-2">
                              <UserCheck className="w-6 h-6" />
                              Adult Sexual Abuse
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-blue-700">
                              <li>• Within 10 years of the incident, OR</li>
                              <li>• Within 3 years of discovering the abuse caused your injury</li>
                              <li>• <strong>Special rules may apply for delayed discovery</strong></li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-bold text-green-700 text-xl mb-3 flex items-center gap-2">
                          <Shield className="w-6 h-6" />
                          Recent Legal Changes Expand Your Rights
                        </h3>
                        <p className="text-green-700 mb-4 leading-relaxed">
                          California Assembly Bill 218 and other recent legislation have significantly extended time limits 
                          for sexual abuse cases and created new opportunities for older cases that were previously time-barred.
                        </p>
                        <ul className="space-y-2 text-green-700">
                          <li>• Revival window for previously time-barred cases</li>
                          <li>• Extended deadlines for institutional abuse</li>
                          <li>• New protections for delayed discovery cases</li>
                          <li>• Enhanced remedies against institutions that covered up abuse</li>
                        </ul>
                      </div>

                      {showLegalMore && (
                        <div className="space-y-4 animate-fade-in">
                          <h4 className="font-bold text-xl">Why Time Limits Exist and Why They Matter</h4>
                          <p className="leading-relaxed">
                            Statutes of limitations serve important legal purposes, including ensuring evidence remains fresh 
                            and memories are clear. However, sexual abuse cases are unique because trauma can prevent 
                            survivors from coming forward immediately. California has recognized this reality and created 
                            more survivor-friendly time limits.
                          </p>
                          
                          <h4 className="font-bold text-xl">What Happens When You Miss a Deadline?</h4>
                          <p className="leading-relaxed">
                            If you miss the statute of limitations, your case will likely be dismissed, and you'll lose 
                            your right to seek compensation forever. This is why it's crucial to contact an attorney 
                            immediately, even if you think your case might be too old. Recent legal changes may still 
                            allow your case to proceed.
                          </p>
                          
                          <h4 className="font-bold text-xl">Special Considerations</h4>
                          <ul className="space-y-2">
                            <li>• <strong>Multiple defendants:</strong> Different time limits may apply to different defendants</li>
                            <li>• <strong>Government entities:</strong> Special notice requirements and shorter deadlines</li>
                            <li>• <strong>Out-of-state abuse:</strong> Different state laws may apply</li>
                            <li>• <strong>Repressed memories:</strong> Special rules for delayed discovery of abuse</li>
                          </ul>
                        </div>
                      )}
                      
                      <Button 
                        variant="link" 
                        onClick={() => setShowLegalMore(!showLegalMore)}
                        className="p-0 h-auto text-primary hover:text-primary/80"
                      >
                        {showLegalMore ? 'Show Less' : 'Learn More About Time Limits'}
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showLegalMore ? 'rotate-180' : ''}`} />
                      </Button>

                      <div className="bg-red-600 text-white rounded-lg p-6 text-center">
                        <h3 className="text-2xl font-bold mb-4">Don't Wait - Call Today</h3>
                        <p className="text-lg mb-6">
                          Every day that passes could bring you closer to losing your legal rights forever. 
                          Get a free, confidential consultation to understand your options.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Button 
                            size="lg" 
                            variant="secondary"
                            className="bg-white text-red-600 hover:bg-gray-100"
                          >
                            <Phone className="w-5 h-5 mr-2" />
                            Call (818) 123-4567
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="border-white text-white hover:bg-white hover:text-red-600"
                            onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
                          >
                            Free Case Evaluation
                          </Button>
                        </div>
                        <p className="text-sm opacity-90 mt-4">Available 24/7 • No upfront costs • Completely confidential</p>
                      </div>
                    </CardContent>
                  </Card>
                </section>
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Sexual Abuse Cases</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass-card hover-glow-primary transition-all duration-300">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span className="text-primary">{faq.question}</span>
                        {expandedFaq === index ? 
                          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" /> : 
                          <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                        }
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Resources for Sexual Abuse Survivors</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Crisis Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>National Sexual Assault Hotline:</strong><br />
                    <a href="tel:1-800-656-4673" className="text-primary hover:underline">1-800-656-HOPE (4673)</a></p>
                    <p><strong>Crisis Text Line:</strong><br />
                    Text HOME to <a href="sms:741741" className="text-primary hover:underline">741741</a></p>
                    <p><strong>24/7 Support:</strong> Free, confidential support available anytime</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      California Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>California Coalition Against Sexual Assault</strong></p>
                    <p><strong>Local Rape Crisis Centers</strong></p>
                    <p><strong>Victim Compensation Program</strong></p>
                    <p><strong>Legal Aid Organizations</strong></p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section">
              <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center">
                <h2 className="text-3xl font-bold mb-4 text-white">Don't Wait - Time Limits Apply for California Sexual Abuse Claims</h2>
                
                <div className="w-16 h-1 bg-red-500 mx-auto mb-6 rounded-full"></div>
                
                <p className="text-lg mb-6 text-white">
                  While California has extended time limits for sexual abuse cases, deadlines still apply. 
                  The sooner you act, the better we can preserve evidence and protect your rights.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-white text-primary border-white hover:bg-gray-100 font-bold px-8 py-4 rounded-full"
                    onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                </div>
                
                <p className="text-sm mt-4 text-white/80">
                  Available 24/7 • Completely Confidential • No Fees Unless We Win
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar - Sticky */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-card shadow-xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl font-bold text-primary">3 Ways to Start Your Case</CardTitle>
                  <div className="w-12 h-1 bg-red-500 mx-auto rounded-full"></div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div 
                    className="text-center p-4 bg-cover bg-center rounded-lg relative overflow-hidden"
                    style={{ backgroundImage: `url(${sidebarImage})` }}
                  >
                    <div className="absolute inset-0 bg-black/60"></div>
                    <div className="relative z-10">
                      <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
                      <p className="text-sm text-white/90 mb-4">Confidential discussion of your case</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                        onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Start Online
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 border-2 border-dashed border-primary/30 rounded-lg">
                    <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-primary mb-1">Call Now</h3>
                    <p className="text-sm text-muted-foreground mb-3">Speak directly with our team</p>
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="text-center p-4 bg-muted rounded-lg">
                    <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                    <h3 className="font-semibold text-primary mb-1">Schedule Video Call</h3>
                    <p className="text-sm text-muted-foreground mb-3">Secure video consultation</p>
                    <Button 
                      variant="secondary" 
                      className="w-full"
                      onClick={() => window.location.href = '/sexual-abuse-case-evaluation'}
                    >
                      Schedule Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Sexual Abuse Resources
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => window.location.href = '/sexual-abuse-calculator'}
                  >
                    <Calculator className="w-4 h-4 mr-2" />
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => window.location.href = '/sexual-abuse-legal-guidance'}
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Legal Guidance
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-primary hover:text-primary hover:bg-primary/10"
                    onClick={() => window.location.href = '/sexual-abuse-resources'}
                  >
                    <Heart className="w-4 h-4 mr-2" />
                    Support Resources
                  </Button>
                </CardContent>
              </Card>

              {/* Confidentiality Notice */}
              <Card className="glass-card bg-muted/50">
                <CardContent className="p-4 text-center">
                  <Lock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-primary mb-2">100% Confidential</h3>
                  <p className="text-sm text-muted-foreground">
                    All communications are protected by attorney-client privilege and handled with complete discretion.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SexualAbuse;