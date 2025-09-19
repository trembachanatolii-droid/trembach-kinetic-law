import React, { useState, useEffect, useRef, Suspense } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollMemory } from '@/hooks/useScrollMemory';
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
  ArrowLeft
} from 'lucide-react';
import heroBackground from '@/assets/environmental-toxic-hero-bg.jpg';
import sidebarImage from '@/assets/environmental-toxic-sidebar.jpg';
import diagnosisImage from '@/assets/environmental-toxic-diagnosis-process.jpg';
import legalProcessImage from '@/assets/environmental-toxic-legal-process.jpg';
import exposureSitesImage from '@/assets/california-contamination-sites.jpg';
import medicalImage from '@/assets/environmental-toxic-medical-facility.jpg';
import compensationImage from '@/assets/environmental-toxic-compensation-calculator.jpg';
import { ToxicHeroScene } from '@/components/three/ToxicHeroScene';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const EnvironmentalToxic: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const scrollMemory = useScrollMemory();
  const [formData, setFormData] = useState({
    exposureDate: '',
    exposureType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'toxic-chemicals', label: 'TOXIC CHEMICALS', icon: AlertTriangle },
    { id: 'health-effects', label: 'HEALTH EFFECTS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  const faqs = [
    {
      question: "How do I know if I have a toxic exposure case?",
      answer: "If you've been diagnosed with cancer, neurological disorders, reproductive problems, or other serious health conditions and have been exposed to contaminated water, air, or soil, you may have a case. We investigate the connection between your exposure and health problems, even if the exposure occurred years ago."
    },
    {
      question: "What is the statute of limitations for toxic exposure cases in California?",
      answer: "California generally provides two years from discovery of the injury to file a personal injury claim. For toxic exposure cases, this often means two years from when you knew or should have known that your illness was caused by toxic exposure. Discovery rules can extend these deadlines in complex cases."
    },
    {
      question: "How much does it cost to hire an environmental toxic exposure lawyer?",
      answer: "We work on a contingency fee basis, meaning you pay nothing unless we win your case. There are no upfront costs, consultation fees, or out-of-pocket expenses. We advance all case costs including expert witnesses, environmental testing, and litigation expenses."
    },
    {
      question: "What compensation can I recover in a toxic exposure lawsuit?",
      answer: "California toxic exposure victims can recover medical expenses (past and future), lost wages, pain and suffering, property damage, diminished property values, medical monitoring costs, and in cases of willful misconduct, punitive damages. Compensation varies based on exposure severity and health impacts."
    },
    {
      question: "How do you prove toxic exposure caused my illness?",
      answer: "We use medical experts, environmental testing, epidemiological studies, and exposure reconstruction to establish causation. This includes reviewing your exposure history, medical records, and working with specialists who understand how specific chemicals cause particular diseases."
    },
    {
      question: "What if the company responsible has gone bankrupt?",
      answer: "Many companies responsible for environmental contamination have established settlement funds or environmental trusts as part of bankruptcy proceedings. We can pursue claims against these funds while also identifying other potentially responsible parties including successor companies and insurance carriers."
    },
    {
      question: "Can I sue if I haven't gotten sick yet but was exposed?",
      answer: "Yes, California law allows claims for medical monitoring even before illness develops. If you've been exposed to toxic chemicals, you may be entitled to ongoing medical surveillance to detect early signs of disease. This proactive approach can be crucial for early detection and treatment."
    },
    {
      question: "What's the difference between a class action and individual lawsuit?",
      answer: "Class actions combine many similar claims into one lawsuit, which can be efficient but may result in lower individual compensation. Individual lawsuits allow for personalized damages based on your specific circumstances. We evaluate which approach best serves your interests."
    },
    {
      question: "How long do toxic exposure cases take to resolve?",
      answer: "Timeline varies significantly based on case complexity, number of defendants, and extent of contamination. Simple cases may resolve in 1-2 years, while complex multi-party litigation can take 3-5 years. We work to expedite resolution while building the strongest possible case."
    },
    {
      question: "Do I need to move away from the contaminated area?",
      answer: "This depends on the type and level of contamination. We work with environmental experts to assess ongoing exposure risks and can help recover relocation costs if moving is medically necessary. Document all exposure reduction measures you take, as these costs may be recoverable."
    },
    {
      question: "What evidence do I need to save?",
      answer: "Preserve all medical records, environmental test results, property documents, photographs of the contaminated area, and any correspondence with authorities or companies about contamination. Keep receipts for medical expenses, property damage repairs, and alternative housing or water costs."
    },
    {
      question: "Can I sue the government for contamination?",
      answer: "Yes, but government liability involves special procedures and immunity limitations. The Federal Tort Claims Act governs federal agency liability, while California law provides procedures for suing state and local governments. These cases require specialized knowledge of governmental liability laws."
    },
    {
      question: "What about contamination from decades ago?",
      answer: "California's discovery rule allows claims to be filed within two years of discovering the injury and its connection to toxic exposure, even if the exposure occurred decades earlier. Historical contamination cases are common and can be successful with proper investigation and expert testimony."
    },
    {
      question: "Will my case go to trial?",
      answer: "Most toxic exposure cases settle before trial, often after extensive discovery reveals the full extent of contamination and corporate responsibility. However, we prepare every case for trial to maximize settlement leverage and ensure you receive fair compensation."
    },
    {
      question: "Can I join an existing lawsuit?",
      answer: "In some cases, joining existing litigation can be efficient and cost-effective. We evaluate whether joining a class action, multidistrict litigation, or coordinated proceedings serves your interests, or whether an individual lawsuit would provide better results."
    },
    {
      question: "What if I signed a waiver or release?",
      answer: "Waivers and releases don't always bar toxic exposure claims, especially if they were signed before exposure effects were known or if they don't specifically cover toxic exposure claims. California law limits the enforceability of releases that violate public policy."
    },
    {
      question: "How is property damage valued?",
      answer: "Property damage includes diminished market value, cleanup costs, and stigma damages. We work with environmental consultants and real estate appraisers to document the full impact of contamination on property values, including the long-term stigma effect that persists even after cleanup."
    },
    {
      question: "What about my children's exposure?",
      answer: "Children face heightened risks from toxic exposure, and California law provides special protections. We can pursue claims for developmental delays, learning disabilities, increased cancer risk, and the need for lifetime medical monitoring. Minors' claims have extended statute of limitations periods."
    },
    {
      question: "Can I recover if the contamination is 'naturally occurring'?",
      answer: "Naturally occurring contamination doesn't automatically bar claims if human activities concentrated or mobilized the contaminants. For example, if construction or industrial activities disturbed naturally occurring arsenic or other minerals, creating exposure risks, liability may still exist."
    },
    {
      question: "What's medical monitoring and am I eligible?",
      answer: "Medical monitoring is court-ordered and funded medical surveillance for people exposed to toxic chemicals. California allows these claims when exposure creates a significantly increased risk of serious disease and monitoring can detect early signs of illness for more effective treatment."
    },
    {
      question: "How do PFAS 'forever chemicals' cases work?",
      answer: "PFAS cases involve complex multi-district litigation against manufacturers like 3M and DuPont. These cases combine individual claims with broader environmental remediation efforts. We handle both personal injury claims and property contamination issues in coordinated proceedings."
    },
    {
      question: "What if I'm a veteran exposed on a military base?",
      answer: "Military base contamination cases involve unique jurisdictional and liability issues. Veterans may be eligible for VA disability benefits while also pursuing claims against private contractors who supplied contaminated materials to the military. These parallel tracks don't offset each other."
    },
    {
      question: "Can I sue if I lived near but not on contaminated property?",
      answer: "Yes, off-site contamination claims are common when toxic chemicals migrate through groundwater, air, or soil. We investigate exposure pathways including vapor intrusion into homes, contaminated drinking water wells, and airborne chemical migration from industrial sites."
    },
    {
      question: "What about contamination from fracking or oil operations?",
      answer: "Oil and gas operations can contaminate air, water, and soil through multiple pathways. California has specific regulations governing these operations, and violations can create strict liability. We handle cases involving drilling, hydraulic fracturing, waste disposal, and pipeline leaks."
    },
    {
      question: "How do pesticide drift cases work?",
      answer: "Pesticide drift cases involve chemicals traveling from application sites to nearby properties. California's strict pesticide regulations create liability when drift occurs, especially when it affects schools, homes, or organic farms. These cases require specialized knowledge of agricultural practices and regulations."
    },
    {
      question: "What if multiple companies contributed to contamination?",
      answer: "Multi-party contamination cases require apportioning liability among responsible parties. California's joint and several liability laws allow recovery of full damages from any responsible party, who can then seek contribution from others. We identify all potentially responsible parties to maximize recovery."
    },
    {
      question: "Can I recover emotional distress damages?",
      answer: "California allows emotional distress damages in toxic exposure cases, including fear of developing cancer, anxiety about family health, and distress from property contamination. These damages recognize the significant psychological impact of learning you've been exposed to dangerous chemicals."
    },
    {
      question: "What's the difference between acute and chronic exposure?",
      answer: "Acute exposure involves high-level, short-term contact causing immediate symptoms, while chronic exposure involves lower-level, long-term contact causing gradual health effects. Both can create legal liability, but they require different approaches to proving causation and damages."
    },
    {
      question: "How do you value a wrongful death claim?",
      answer: "Wrongful death claims in toxic exposure cases include loss of financial support, loss of companionship, funeral expenses, and the decedent's pre-death pain and suffering. California law allows recovery by spouses, children, and dependent family members based on their relationship to the deceased."
    },
    {
      question: "What if the contamination affected my business?",
      answer: "Business contamination claims can include lost profits, property damage, cleanup costs, relocation expenses, and lost business value. We work with business valuation experts and environmental consultants to document the full economic impact of contamination on your business operations."
    },
    {
      question: "Can I recover if I rented rather than owned property?",
      answer: "Yes, renters can recover for personal injury, personal property damage, relocation costs, and loss of use. While you may not have property ownership damages, you still have claims for health effects, inconvenience, and additional living expenses caused by contamination."
    },
    {
      question: "What about contaminated consumer products?",
      answer: "Product contamination cases involve liability for manufacturers, distributors, and retailers who sold products containing toxic chemicals. Recent examples include PFAS in food packaging, benzene in sunscreens, and heavy metals in baby food. These cases often involve nationwide litigation."
    },
    {
      question: "How does vapor intrusion work?",
      answer: "Vapor intrusion occurs when toxic chemicals in soil or groundwater evaporate and seep into buildings through foundations, creating indoor air contamination. This invisible exposure pathway can affect homes, schools, and businesses, requiring specialized testing and expert testimony to prove."
    },
    {
      question: "What if I'm experiencing symptoms but tests are 'normal'?",
      answer: "Many toxic exposure symptoms aren't detected by standard medical tests. We work with occupational medicine specialists and toxicologists who understand how environmental chemicals cause disease and can perform specialized testing to document exposure and early health effects."
    },
    {
      question: "Can I sue if a family member died years ago from exposure?",
      answer: "California's discovery rule may allow wrongful death claims even years after death if the connection to toxic exposure wasn't previously known. These cases require careful analysis of the statute of limitations and often benefit from advances in scientific understanding of chemical toxicity."
    },
    {
      question: "What about Superfund sites?",
      answer: "Superfund sites are heavily contaminated locations requiring federal cleanup. While the government handles cleanup, private parties can still sue responsible parties for personal injury and property damage. These cases benefit from extensive environmental investigation conducted during the cleanup process."
    },
    {
      question: "How do I know if my water is contaminated?",
      answer: "Municipal water systems must provide annual quality reports, but private wells require independent testing. We can help arrange comprehensive water testing and interpret results. Even 'safe' levels under federal standards may still create legal liability under California's stricter standards."
    },
    {
      question: "What if I already settled with my insurance company?",
      answer: "Insurance settlements for property damage don't prevent personal injury claims against responsible parties. However, insurance companies may have subrogation rights to recover payments they made. We coordinate with insurance counsel to maximize your overall recovery."
    },
    {
      question: "Can I remain anonymous in a lawsuit?",
      answer: "California courts sometimes allow pseudonymous litigation in cases involving stigma or privacy concerns, particularly for plaintiffs with sensitive medical conditions. We can petition the court for protective orders and confidential proceedings when circumstances warrant anonymity."
    },
    {
      question: "What role do government agencies play?",
      answer: "Agencies like EPA, Cal EPA, and local health departments investigate contamination and order cleanup, but their actions don't prevent private lawsuits. Agency findings and enforcement actions often provide valuable evidence of contamination and corporate responsibility in civil litigation."
    },
    {
      question: "What if the contamination crosses state lines?",
      answer: "Multi-state contamination cases involve complex jurisdictional issues and may be consolidated in federal multidistrict litigation. We coordinate with attorneys in other states and determine the most favorable jurisdiction for filing based on applicable law and court precedents."
    },
    {
      question: "How are settlements paid out?",
      answer: "Settlement payments can be structured as lump sums or periodic payments over time. For seriously injured plaintiffs, structured settlements may provide tax advantages and ensure long-term financial security. We work with financial experts to optimize settlement structures for your needs."
    },
    {
      question: "What's your success rate with environmental cases?",
      answer: "As a newly established firm, we don't have historical results to report. However, Attorney Trembach's background defending corporations provides unique insights into how these cases are valued and defended, which we now use to maximize recovery for contamination victims."
    },
    {
      question: "Why should I choose Trembach Law Firm?",
      answer: "Our unique advantage comes from Attorney Trembach's background defending corporations in environmental cases. This insider knowledge of defense strategies, case valuation methods, and settlement pressures allows us to anticipate defense tactics and build stronger cases for contamination victims."
    },
    {
      question: "What if I was exposed at work?",
      answer: "Workplace toxic exposure cases may involve both personal injury lawsuits against responsible parties and coordination with California's strict workplace safety laws. These cases require specialized knowledge of occupational health regulations and liability laws."
    },
    {
      question: "Can I recover if I'm not showing symptoms yet?",
      answer: "Yes, California recognizes fear of future disease and medical monitoring claims even before symptoms appear. If you've been exposed to dangerous chemicals, you may be entitled to compensation for anxiety about future health problems and ongoing medical surveillance."
    },
    {
      question: "What about exposure through contaminated food or water?",
      answer: "Contaminated food and water exposure cases can involve multiple responsible parties including manufacturers, distributors, water utilities, and government agencies. We investigate the contamination source and pursue all liable parties to maximize recovery for health effects and property damage."
    },
    {
      question: "How long after exposure can health problems appear?",
      answer: "Toxic exposure health effects can appear immediately or take decades to manifest. Cancer from chemical exposure often has a latency period of 10-40 years. This delayed onset is why California's discovery rule allows claims to be filed years after the initial exposure occurred."
    },
    {
      question: "What if I can't afford medical treatment?",
      answer: "We can help arrange medical care through liens or referrals to specialists who work with contamination victims. Many medical monitoring programs are funded through legal settlements or court orders, ensuring you receive necessary care regardless of your financial situation."
    },
    {
      question: "How do you investigate contamination sources?",
      answer: "We use environmental consultants, historical records, regulatory databases, and expert witnesses to trace contamination sources. This includes reviewing EPA databases, state environmental records, industrial facility permits, and conducting soil and water testing to establish contamination pathways."
    },
    {
      question: "What makes environmental toxic cases different from other personal injury cases?",
      answer: "Environmental toxic cases involve complex scientific causation issues, multiple potentially responsible parties, long latency periods between exposure and illness, and specialized knowledge of environmental regulations. These cases require extensive expert testimony and environmental investigation to establish liability and damages."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotationX: 10, z: -100 },
        { opacity: 1, y: 0, rotationX: 0, z: 0, duration: 1.2, ease: 'power2.out' }
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/environmental-toxic-case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Environmental Toxic Exposure Lawyers | Trembach Law Firm"
        description="Fighting for California families exposed to dangerous chemicals. Free consultation for toxic exposure cases. No fees unless we win your environmental contamination claim."
        canonical="/environmental-toxic"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Enhanced 3D Scene Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <Suspense fallback={null}>
            <ToxicHeroScene />
          </Suspense>
        </div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 drop-shadow-2xl">
              Environmental Toxic Exposure Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 drop-shadow-lg" />
              ))}
              <span className="ml-2 text-lg drop-shadow-lg">Fighting for California Families Exposed to Dangerous Chemicals</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-primary mb-6">California Environmental Toxic Exposure Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  For decades, corporations have contaminated our water, air, and soil with toxic chemicals that 
                  cause cancer, birth defects, and chronic diseases. As a former defense attorney, I know their 
                  tactics. Now I use that insider knowledge to protect families and communities throughout 
                  California from environmental poisoning.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Environmental toxic exposure occurs when dangerous chemicals contaminate the 
                  air you breathe, water you drink, or soil where you live and work. These invisible 
                  poisons accumulate in your body over time, causing devastating health effects that 
                  may not appear for years or even decades. California leads the nation in 
                  environmental contamination cases, with thousands of sites poisoning communities 
                  through industrial negligence, illegal dumping, and regulatory violations.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-base">
                    Show More About Our California Environmental Toxic Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                          Immediate Health Risks
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">Toxic exposure can cause immediate symptoms including respiratory problems, skin 
                        rashes, headaches, nausea, and neurological issues. Children and pregnant women 
                        face the highest risks, with exposures linked to birth defects, developmental delays, 
                        and childhood cancers.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Long-Term Consequences
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base">Many toxic chemicals are carcinogenic, causing various cancers years after exposure. 
                        Others damage organs, disrupt hormones, impair fertility, and cause chronic diseases 
                        like Parkinson's, kidney disease, and immune disorders.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending companies provides unique insights into corporate defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Expedited Process</h4>
                          <p className="text-sm text-muted-foreground">We understand the urgency and work to secure compensation as quickly as possible.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey.</p>
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
                    <h3>Property Damage</h3>
                    <p>
                      Contamination destroys property values, makes homes unsellable, and forces families
                      to abandon their investments. Even after cleanup, stigma remains, permanently
                      reducing property values by 20-50%.
                    </p>
                    
                    <h3>Legal Rights</h3>
                    <p>
                      California law provides strong protections for contamination victims, including strict
                      liability for polluters, enhanced damages for willful violations, and recovery for
                      medical monitoring even before illness develops.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-base">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Date</label>
                      <Input
                        type="date"
                        value={formData.exposureDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Type</label>
                      <Select value={formData.exposureType} onValueChange={(value) => setFormData(prev => ({ ...prev, exposureType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select exposure type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pfas">PFAS "Forever Chemicals"</SelectItem>
                          <SelectItem value="tce-pce">TCE & PCE Industrial Solvents</SelectItem>
                          <SelectItem value="chromium">Hexavalent Chromium</SelectItem>
                          <SelectItem value="benzene">Benzene</SelectItem>
                          <SelectItem value="vocs">Volatile Organic Compounds</SelectItem>
                          <SelectItem value="pesticides">Pesticides & Agricultural Chemicals</SelectItem>
                          <SelectItem value="heavy-metals">Heavy Metals</SelectItem>
                          <SelectItem value="other">Other Toxic Exposure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* FAQ Section with 50 Questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-primary transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground text-base leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Main CTA Card */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <img 
                    src={sidebarImage} 
                    alt="Environmental toxic exposure legal consultation" 
                    className="w-full h-48 object-cover rounded-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3 transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-white text-lg py-3 transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limit</h4>
                      <p className="text-sm text-muted-foreground">2 years from discovery in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">No cost to discuss your case</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Medical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California environmental health specialists" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with environmental health specialists throughout California.
                  </p>
                </CardContent>
              </Card>

              {/* Compensation Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compensation Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={compensationImage} 
                    alt="Environmental toxic exposure compensation calculator" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Medical expenses and monitoring</p>
                    <p>• Lost wages and reduced earning capacity</p>
                    <p>• Property damage and cleanup costs</p>
                    <p>• Pain and suffering</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Environmental Toxic Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you limited time to file your claim. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/environmental-toxic-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalToxic;