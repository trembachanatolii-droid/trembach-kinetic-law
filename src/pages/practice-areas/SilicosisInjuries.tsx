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
  ArrowLeft
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/silicosis-injuries-hero.jpg';
import sidebarImage from '@/assets/practice-areas/silicosis-stone-fabrication.jpg';
import diagnosisImage from '@/assets/practice-areas/silicosis-lung-damage.jpg';
import legalProcessImage from '@/assets/practice-areas/silicosis-legal-process.jpg';
import exposureSitesImage from '@/assets/practice-areas/california-silicosis-sites.jpg';
import medicalImage from '@/assets/practice-areas/silicosis-medical-facility.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SilicosisInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    exposureStartDate: '',
    stoneType: '',
    exposureLocation: '',
    symptomsSeverity: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER DIAGNOSIS', icon: Stethoscope },
    { id: 'diagnosis-process', label: 'DIAGNOSIS PROCESS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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
    // Handle form submission - redirect to silicosis case evaluation
    window.location.href = '/silicosis-case-evaluation';
  };

  const faqData = [
    {
      question: "What is silicosis and how does it develop?",
      answer: "Silicosis is an incurable, progressive lung disease caused by inhaling crystalline silica particles smaller than 10 microns. These particles embed in lung tissue, causing inflammation and permanent scarring. The disease progresses even after exposure stops, making early legal action critical for securing medical care and compensation."
    },
    {
      question: "How long after exposure does silicosis appear?",
      answer: "Chronic silicosis typically develops after 10-30 years of exposure. Accelerated silicosis appears within 5-10 years with heavy exposure. Acute silicosis can develop in weeks to 5 years with extreme exposures common in engineered stone fabrication. California workers are experiencing accelerated forms at unprecedented rates."
    },
    {
      question: "What is the statute of limitations for silicosis claims in California?",
      answer: "Generally 2 years from diagnosis or discovery, but can extend for certain claims. The discovery rule applies when you learn of the disease and its connection to work exposure. Given silicosis's latency period, the clock often starts at diagnosis, not exposure. File immediately to preserve all legal rights."
    },
    {
      question: "Can I file a claim if I'm undocumented?",
      answer: "Yes, absolutely. Immigration status doesn't affect your right to workers' compensation or personal injury claims. California law protects all workers regardless of documentation. We handle cases confidentially and don't report immigration status. Your health and legal rights come first."
    },
    {
      question: "How much compensation can I recover for silicosis?",
      answer: "Settlements vary widely based on age, severity, lost wages, and medical needs. Recent California verdicts include $52.4 million for a young fabricator needing lung transplant. Compensation covers medical expenses (including transplants exceeding $1 million), lost wages, pain and suffering, and punitive damages when companies concealed dangers."
    },
    {
      question: "What if I only worked with engineered stone briefly?",
      answer: "Even short-term exposure to engineered stone can cause silicosis due to extremely high silica content (90-95%) compared to natural stone (20-30%). Brief exposure with inadequate protection may support substantial claims. Duration affects damages but doesn't prevent recovery if silicosis resulted from that exposure."
    },
    {
      question: "Do I need to hire a lawyer immediately?",
      answer: "Yes. Evidence disappears quickly, statutes of limitations apply, and companies immediately begin defending against claims. Early investigation preserves crucial evidence like employment records, coworker testimony, and product identification. Free consultations protect your rights without upfront costs."
    },
    {
      question: "Can I still work with silicosis?",
      answer: "Continuing silica exposure accelerates disease progression and could be fatal. Seek immediate medical evaluation and workplace accommodations. Workers' comp should provide temporary disability benefits. We help secure immediate medical care and income replacement while pursuing full compensation."
    },
    {
      question: "Will workers' compensation cover my silicosis treatment?",
      answer: "Yes, if silicosis resulted from work exposure. Workers' comp covers medical treatment and partial wage replacement but limits other damages. Third-party lawsuits against manufacturers and contractors can provide full compensation for pain, suffering, and complete lost wages beyond workers' comp."
    },
    {
      question: "What companies are liable for my silicosis?",
      answer: "Potentially all companies in the chain: engineered stone manufacturers (Caesarstone, Cambria, Silestone), distributors, contractors, and employers. Product liability claims target manufacturers who failed to warn about dangers. We investigate your specific exposures to identify all responsible parties and maximize recovery."
    },
    {
      question: "Can I file a claim if I'm still working?",
      answer: "Yes, and you should file immediately. Silicosis is progressive - waiting only allows the disease to worsen. California law protects against retaliation for filing workers' comp or safety complaints. Early filing preserves evidence and ensures timely medical treatment."
    },
    {
      question: "What companies are being sued for silicosis?",
      answer: "Major defendants include Caesarstone, Cambria, Silestone, Cosentino, and numerous distributors. Any company that manufactured, imported, distributed, or sold engineered stone without adequate warnings faces potential liability. We investigate your specific exposures to identify all responsible parties."
    },
    {
      question: "How is silicosis different from asbestosis?",
      answer: "Both are incurable lung diseases from inhaling mineral fibers, but silicosis comes from crystalline silica while asbestosis comes from asbestos. Silicosis can develop faster, especially with engineered stone exposure. Both cause progressive lung scarring and increase cancer risk."
    },
    {
      question: "What if I smoked cigarettes?",
      answer: "Smoking doesn't prevent recovery but may affect compensation amounts. Silicosis is specifically caused by silica exposure, not smoking. Medical experts can distinguish silicosis from smoking-related lung disease through imaging and pathology."
    },
    {
      question: "Do I need to remember specific stone brands I worked with?",
      answer: "Helpful but not required. We investigate using employer records, supplier invoices, coworker testimony, and industry data to identify products. Photos of slabs, work orders, or installation addresses help trace specific brands."
    },
    {
      question: "Can I get a lung transplant? Who pays?",
      answer: "Advanced silicosis may require double lung transplant, costing over $1 million plus lifetime immunosuppressive drugs. Legal compensation should cover transplant costs, follow-up care, and lost wages during recovery. We work with transplant centers to document these future medical needs."
    },
    {
      question: "What about other health problems from silica?",
      answer: "Silica exposure increases risk of lung cancer, kidney disease, autoimmune diseases, and COPD. These conditions warrant compensation even without classic silicosis. We pursue claims for all silica-related conditions, documenting connections through medical experts."
    },
    {
      question: "How do I prove which employer caused my silicosis?",
      answer: "California law doesn't require proving which specific exposure caused silicosis. All employers and manufacturers who contributed to cumulative exposure share liability. This 'substantial factor' test favors workers exposed at multiple sites."
    },
    {
      question: "Will I have to go to court?",
      answer: "Most cases settle without trial through negotiation or mediation. If trial becomes necessary, we thoroughly prepare you for testimony. We accommodate medical limitations including video testimony if needed."
    },
    {
      question: "What if I already settled a workers' comp claim?",
      answer: "Workers' comp settlements don't prevent third-party lawsuits against manufacturers and distributors. We examine whether your settlement adequately addressed silicosis or focused on other injuries."
    },
    {
      question: "Can I claim emotional distress and anxiety?",
      answer: "Absolutely. Silicosis causes severe emotional distress, anxiety about shortened lifespan, depression from inability to work, and family relationship strain. These non-economic damages often exceed economic losses."
    },
    {
      question: "What if my employer is out of business?",
      answer: "Focus shifts to manufacturers, distributors, and other third parties. Defunct employers may still have insurance coverage available. We investigate successor companies, asset purchases, and corporate relationships."
    },
    {
      question: "How are settlements paid out?",
      answer: "Options include lump sum payments or structured settlements providing periodic payments. Structures can provide tax advantages and guaranteed lifetime income. We help evaluate options considering your circumstances."
    },
    {
      question: "What evidence should I gather now?",
      answer: "Preserve pay stubs, tax records, employment documents, medical records, and photos of work sites or materials. Document coworkers' names and contact information. Don't wait - evidence disappears quickly."
    },
    {
      question: "Can I file if I worked as an independent contractor?",
      answer: "Yes. Independent contractors can pursue product liability claims against manufacturers and distributors. Misclassification as contractors instead of employees is common in construction."
    },
    {
      question: "What about disability benefits while my case is pending?",
      answer: "Apply for state disability insurance, Social Security disability, and workers' comp temporary disability benefits immediately. These provide income during litigation."
    },
    {
      question: "How does Cal/OSHA's emergency standard affect my case?",
      answer: "The December 2023 emergency standard and 2024 permanent rules strengthen cases by establishing that dry cutting is prohibited. Violations support negligence claims."
    },
    {
      question: "Can I sue if I knew about silica dangers but needed the job?",
      answer: "Yes. Economic necessity doesn't constitute assumption of risk. Workers shouldn't choose between earning a living and their health. Employers must provide safe working conditions."
    },
    {
      question: "What if I can't afford medical treatment now?",
      answer: "We connect you with doctors who provide treatment on a lien basis. Workers' comp should cover work-related treatment. County hospitals must provide emergency care regardless of ability to pay."
    },
    {
      question: "How do mass torts work for silicosis?",
      answer: "Silicosis cases may be coordinated for efficiency while preserving individual claims. Each person maintains their own lawsuit with damages based on their specific injuries."
    },
    {
      question: "Will my case be public?",
      answer: "Court filings are generally public, but sensitive medical information is protected. Many cases settle confidentially. We can seek protective orders limiting disclosure of personal information."
    },
    {
      question: "What if I moved from another state?",
      answer: "California courts may have jurisdiction if you worked here, live here now, or defendants do business here. We coordinate with out-of-state counsel if needed."
    },
    {
      question: "Can my case help other workers?",
      answer: "Yes. Each case contributes to holding companies accountable and improving workplace safety. Discovery reveals corporate documents helping other cases."
    },
    {
      question: "What about Medicare or Medi-Cal liens?",
      answer: "Government insurance programs may claim reimbursement from settlements. We negotiate these liens to minimize reductions, often achieving significant reductions."
    },
    {
      question: "How do you calculate lost future earnings?",
      answer: "Economic experts analyze your work history, skills, age, and earning capacity to project losses through expected retirement age. For younger workers, this includes lost promotions and career advancement."
    },
    {
      question: "What if symptoms appear years after I stopped stone work?",
      answer: "This is common with silicosis due to its latency period. The discovery rule extends limitation periods until you know or should know of the disease and its connection to work exposure."
    },
    {
      question: "Can family members recover damages?",
      answer: "Spouses can recover for loss of consortium and support. If silicosis leads to death, family members may pursue wrongful death claims for lost support, companionship, and funeral expenses."
    },
    {
      question: "What if I was exposed at multiple job sites?",
      answer: "California's substantial factor test allows recovery against all contributing exposures. You don't need to prove which specific site caused your silicosis - all exposures that substantially contributed share liability."
    },
    {
      question: "How long does a silicosis lawsuit take?",
      answer: "Cases typically resolve within 1-3 years depending on complexity and defendant cooperation. Severe cases may expedite through fast-track procedures. We prioritize quick resolution given the progressive nature of the disease."
    },
    {
      question: "What makes engineered stone more dangerous than natural stone?",
      answer: "Engineered stone contains 90-95% crystalline silica versus 20-30% in natural granite. This dramatically increases exposure levels during cutting and polishing, causing silicosis to develop much faster than with traditional stonework."
    },
    {
      question: "Can I recover for my spouse's medical bills helping care for me?",
      answer: "Yes, family members who incur medical expenses or provide care may recover these costs. We document all family impacts including care provided by spouses, children, or relatives."
    },
    {
      question: "What if my employer provided some safety equipment?",
      answer: "Inadequate safety measures don't relieve liability. Many employers provide insufficient protection while claiming compliance. We evaluate whether equipment met industry standards and adequately protected against silica exposure."
    },
    {
      question: "How do I get copies of my medical records?",
      answer: "We help obtain all relevant medical records from doctors, hospitals, and imaging centers. Early comprehensive medical documentation strengthens your case and ensures proper treatment planning."
    },
    {
      question: "What if I can't remember exact dates of employment?",
      answer: "We help reconstruct work history using Social Security records, tax returns, union records, and coworker testimony. Approximate timeframes are sufficient to establish exposure periods and calculate damages."
    },
    {
      question: "Can I file if I only did stone work occasionally?",
      answer: "Yes, even intermittent exposure to high-silica materials can cause silicosis. We evaluate total cumulative exposure across all jobs and projects. Part-time or occasional work doesn't preclude substantial recovery."
    },
    {
      question: "What happens if I die before my case resolves?",
      answer: "Your family can continue the lawsuit and may add wrongful death claims. Cases often settle quickly when health deteriorates rapidly. We ensure families understand their rights and options."
    },
    {
      question: "How do I find the best silicosis treatment?",
      answer: "We connect you with leading pulmonologists and specialized treatment centers. UCLA, UCSF, and Stanford have excellent silicosis programs. Early aggressive treatment may slow disease progression."
    },
    {
      question: "Can I recover for home modifications due to breathing problems?",
      answer: "Yes, reasonable modifications like air filtration systems, ramps for mobility equipment, and accessibility features are recoverable. We document all necessary changes to accommodate your condition."
    },
    {
      question: "What if my coworkers also have silicosis?",
      answer: "Coordinated litigation often benefits all workers while preserving individual recovery. Shared costs and evidence benefit everyone. We handle group cases while ensuring each person's unique damages are fully compensated."
    },
    {
      question: "How do I know if my lung problems are from silicosis?",
      answer: "Proper medical evaluation including chest imaging, pulmonary function tests, and occupational history review is essential. We can refer you to specialists experienced in diagnosing occupational lung diseases."
    },
    {
      question: "What information should I bring to my consultation?",
      answer: "Bring medical records, employment history, tax returns, and any photos or documents from work sites. Don't worry if records are incomplete - we help gather missing information during investigation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Silicosis Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting for Stone Workers</span>
            </div>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Former defense attorney now fighting for California stone workers suffering from preventable lung disease. Free consultation - No fees unless we win.
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/silicosis-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Silicosis Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been diagnosed with silicosis in California, you're facing one of the most devastating occupational diseases affecting modern workers. This preventable lung disease is caused exclusively by crystalline silica exposure, and those responsible for your exposure should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency of silicosis cases. With extensive experience in California occupational disease litigation and a deep understanding of the medical complexities involved, we're prepared to fight for maximum compensation while you focus on treatment and time with family.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Silicosis Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Understanding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team works closely with leading silicosis specialists throughout California to understand the full scope of your diagnosis, prognosis, and treatment needs including lung transplantation.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Map className="w-5 h-5 mr-2 text-primary" />
                      California Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have extensive knowledge of California's stone fabrication industry, including shops in Los Angeles, Orange County, San Diego, and the Central Valley where silica exposure occurred.</p>
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
                          <p className="text-sm text-muted-foreground">We understand the urgency and work to secure compensation as quickly as possible given the progressive nature of silicosis.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your legal journey, understanding the devastating impact on families.</p>
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
                    <h3>Comprehensive California Silicosis Representation</h3>
                    <p>
                      Silicosis cases in California involve complex medical, legal, and industrial factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of silica exposure to working with medical experts who can clearly explain how crystalline silica caused your disease.
                    </p>
                    
                    <p>
                      California has experienced an unprecedented silicosis epidemic among stone fabrication workers. Many of our clients were exposed to dangerous levels of crystalline silica at facilities throughout:
                    </p>
                    
                    <ul>
                      <li>Los Angeles County fabrication shops and construction sites</li>
                      <li>Orange County countertop installation companies</li>
                      <li>San Diego area stone cutting operations</li>
                      <li>Central Valley construction and agricultural facilities</li>
                      <li>Bay Area commercial and residential projects</li>
                      <li>Riverside and San Bernardino County industrial sites</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of exposure to ensure no liable party escapes responsibility for your illness. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including product liability against manufacturers, premises liability claims, and employer negligence where applicable.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Silicosis Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your silicosis case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Exposure Start Date</label>
                      <Input
                        type="date"
                        value={formData.exposureStartDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureStartDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Stone Work</label>
                      <Select value={formData.stoneType} onValueChange={(value) => setFormData(prev => ({ ...prev, stoneType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stone type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineered-stone">Engineered Stone/Quartz</SelectItem>
                          <SelectItem value="granite">Granite</SelectItem>
                          <SelectItem value="marble">Marble</SelectItem>
                          <SelectItem value="concrete">Concrete</SelectItem>
                          <SelectItem value="sandstone">Sandstone</SelectItem>
                          <SelectItem value="multiple">Multiple Types</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Work Location</label>
                      <Input
                        type="text"
                        placeholder="City, County"
                        value={formData.exposureLocation}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Current Symptoms</label>
                      <Select value={formData.symptomsSeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, symptomsSeverity: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mild">Mild (Occasional cough, slight breathlessness)</SelectItem>
                          <SelectItem value="moderate">Moderate (Daily symptoms, limited activity)</SelectItem>
                          <SelectItem value="severe">Severe (Constant symptoms, oxygen needed)</SelectItem>
                          <SelectItem value="diagnosed">Diagnosed with Silicosis</SelectItem>
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

            {/* What to Do After Diagnosis */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Silicosis Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Get a second opinion from a silicosis specialist</p>
                    <p>• Request all medical records and pathology reports</p>
                    <p>• Explore treatment options at specialized centers</p>
                    <p>• Consider pulmonary rehabilitation programs</p>
                    <p>• Evaluate lung transplant candidacy if severe</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Legal Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Contact an experienced silicosis attorney immediately</p>
                    <p>• Preserve all employment and medical records</p>
                    <p>• Document your work history and exposures</p>
                    <p>• File workers' compensation claim if work-related</p>
                    <p>• Don't discuss your case with insurance companies</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.diagnosisSteps} onOpenChange={() => toggleSection('diagnosisSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Critical Next Steps
                    {expandedSections.diagnosisSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                    <div className="flex">
                      <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold text-yellow-800 mb-2">Time is Critical</h3>
                        <p className="text-yellow-700">
                          Silicosis is progressive - the disease continues to worsen even after exposure stops. Legal deadlines also apply. Taking immediate action protects both your health and legal rights. Early intervention can access better treatment options and preserve crucial evidence for your case.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Medical Priorities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Stop all silica exposure immediately</li>
                          <li>• Baseline pulmonary function testing</li>
                          <li>• High-resolution CT scan</li>
                          <li>• Bronchoscopy if needed for diagnosis</li>
                          <li>• Screen for related conditions (autoimmune, cancer)</li>
                          <li>• Establish treatment plan</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Legal Priorities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Identify statute of limitations deadlines</li>
                          <li>• Preserve employment records</li>
                          <li>• Document exposure sources</li>
                          <li>• Identify potential defendants</li>
                          <li>• File workers' comp claim</li>
                          <li>• Begin case investigation</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Financial Priorities</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Apply for disability benefits</li>
                          <li>• Understand insurance coverage</li>
                          <li>• Document lost wages</li>
                          <li>• Plan for future medical costs</li>
                          <li>• Protect family finances</li>
                          <li>• Explore treatment funding</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Diagnosis Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Silicosis Diagnosis</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Silicosis diagnosis requires specialized medical evaluation combining occupational history, imaging studies, and pulmonary function testing. Early detection is crucial for both treatment and legal action.
                  </p>
                  <p className="text-lg leading-relaxed">
                    California's epidemic of accelerated silicosis among young stone workers has led to improved diagnostic protocols. Our medical network includes specialists experienced in occupational lung disease who understand the legal implications of accurate diagnosis.
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={diagnosisImage} alt="Silicosis diagnosis process" className="rounded-lg shadow-lg w-full" />
                </div>
              </div>

              <Collapsible open={expandedSections.diagnosisProcess} onOpenChange={() => toggleSection('diagnosisProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn About the Complete Diagnostic Process
                    {expandedSections.diagnosisProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Occupational History</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Detailed review of work exposures including:</p>
                        <ul className="space-y-2">
                          <li>• Types of stone materials worked</li>
                          <li>• Duration and intensity of exposure</li>
                          <li>• Safety equipment provided</li>
                          <li>• Workplace ventilation systems</li>
                          <li>• Dry vs. wet cutting methods</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Medical Testing</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Comprehensive evaluation includes:</p>
                        <ul className="space-y-2">
                          <li>• Chest X-rays and CT scans</li>
                          <li>• Pulmonary function tests</li>
                          <li>• Blood tests for autoimmune markers</li>
                          <li>• Exercise stress testing</li>
                          <li>• Bronchoscopy when indicated</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Types of Silicosis</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-blue-700">
                      <div>
                        <h4 className="font-semibold">Chronic Silicosis</h4>
                        <p className="text-sm">Develops after 10-30 years of exposure. Most common form with gradual onset of symptoms.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Accelerated Silicosis</h4>
                        <p className="text-sm">Appears within 5-10 years. Common in engineered stone workers with heavy exposure.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Acute Silicosis</h4>
                        <p className="text-sm">Develops in weeks to 5 years. Most severe form requiring immediate medical intervention.</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-red-600 mb-6">Your Legal Journey</h2>
                  <p className="text-lg leading-relaxed mb-4">
                    Silicosis litigation involves multiple potential defendants and complex medical evidence. Our systematic approach ensures no liable party escapes responsibility while securing maximum compensation for your injuries.
                  </p>
                  <p className="text-lg leading-relaxed">
                    We leverage our former defense attorney experience to anticipate corporate strategies and build stronger cases for our clients. This insider knowledge gives us significant advantages in negotiations and trial preparation.
                  </p>
                </div>
                <div className="flex items-center">
                  <img src={legalProcessImage} alt="Silicosis legal process" className="rounded-lg shadow-lg w-full" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">1</Badge>
                      Case Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Free consultation to review your medical diagnosis, work history, and potential claims. We identify all possible defendants and evaluate the strength of your case.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">2</Badge>
                      Investigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive investigation including medical record review, employment verification, expert consultations, and evidence preservation.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">3</Badge>
                      Filing Claims
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Strategic filing of all applicable claims including workers' compensation, product liability, and premises liability within statutory deadlines.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">4</Badge>
                      Discovery
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Aggressive discovery to uncover corporate knowledge of silica dangers, safety violations, and concealment of risks from workers.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">5</Badge>
                      Negotiation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Skilled negotiation with defendants and their insurers to secure fair compensation reflecting the full extent of your damages.</p>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Badge className="bg-red-600 text-white mr-2">6</Badge>
                      Resolution
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Settlement or trial resolution ensuring you receive maximum compensation for medical expenses, lost wages, and pain and suffering.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get answers to common questions about silicosis litigation in California.
              </p>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
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

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Helpful Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card 
                  className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => window.location.href = '/silicosis-medical-guidance'}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Silicosis Treatment Centers</p>
                    <p>• Pulmonology Specialists</p>
                    <p>• Lung Transplant Programs</p>
                    <p>• Support Groups for Patients</p>
                    <p>• Medical Equipment Resources</p>
                    <p className="text-sm text-primary mt-4 font-medium">Click to access medical guidance →</p>
                  </CardContent>
                </Card>

                <Card 
                  className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => window.location.href = '/silicosis-case-evaluation'}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      Legal Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Workers' Compensation</p>
                    <p>• Disability Benefits Information</p>
                    <p>• Cal/OSHA Silica Standards</p>
                    <p>• Legal Rights for Workers</p>
                    <p>• Immigration Protection Resources</p>
                    <p className="text-sm text-primary mt-4 font-medium">Click for free case evaluation →</p>
                  </CardContent>
                </Card>

                <Card 
                  className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => window.open('https://www.dir.ca.gov/dosh/complaint.htm', '_blank')}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Building className="w-5 h-5 mr-2 text-primary" />
                      Government Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Cal/OSHA Complaint Filing</p>
                    <p>• California Department of Public Health</p>
                    <p>• Workers' Compensation Appeals Board</p>
                    <p>• Social Security Disability</p>
                    <p>• Medicare/Medi-Cal Information</p>
                    <p className="text-sm text-primary mt-4 font-medium">Click to access government resources →</p>
                  </CardContent>
                </Card>

                <Card 
                  className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                  onClick={() => window.open('https://www.cdc.gov/niosh/topics/silica/', '_blank')}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Support Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• Family Support Groups</p>
                    <p>• Financial Assistance Programs</p>
                    <p>• Occupational Health Organizations</p>
                    <p>• Workplace Safety Advocacy</p>
                    <p>• Community Health Centers</p>
                    <p className="text-sm text-primary mt-4 font-medium">Click to access support resources →</p>
                  </CardContent>
                </Card>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Contact Card */}
              <Card className="glass-card p-6">
                <h3 className="text-xl font-bold mb-4 text-center">Get Help Now</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = '/silicosis-case-evaluation'}
                  >
                    <Scale className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/silicosis-compensation-calculator'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/silicosis-medical-guidance'}
                  >
                    <Stethoscope className="w-4 h-4 mr-2" />
                    Medical Guidance
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = 'sms:8181234567'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Text for Quick Response
                  </Button>
                </div>
              </Card>

              {/* Image Card */}
              <Card className="overflow-hidden">
                <img 
                  src={sidebarImage} 
                  alt="Silicosis legal support" 
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">Fighting for Stone Workers</h4>
                  <p className="text-sm text-muted-foreground">
                    Dedicated legal representation for California workers suffering from preventable silicosis.
                  </p>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card p-4">
                <h4 className="font-semibold mb-3">Quick Facts</h4>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• Silicosis is 100% preventable</li>
                  <li>• Engineered stone contains 90-95% silica</li>
                  <li>• Disease progresses even after exposure stops</li>
                  <li>• No cure - only supportive treatment</li>
                  <li>• Lung transplant may be required</li>
                  <li>• Legal action must be taken quickly</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Silicosis Claims
          </h2>
          <p className="text-xl mb-8">
            California law gives you only one year from diagnosis to file your claim. 
            Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
              onClick={() => window.location.href = '/silicosis-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8559851234'}
            >
              Call (855) 985-1234
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SilicosisInjuries;