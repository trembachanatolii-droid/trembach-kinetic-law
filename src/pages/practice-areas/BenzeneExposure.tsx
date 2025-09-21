import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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
  Calculator,
  BookOpen,
  FlaskConical,
  Factory,
  Skull
} from 'lucide-react';
import heroBackground from '@/assets/benzene-hero-bg.jpg';
import sidebarImage from '@/assets/benzene-hero-bg.jpg';
import diagnosisImage from '@/assets/benzene-diagnosis-process.jpg';
import legalProcessImage from '@/assets/benzene-legal-process.jpg';
import exposureSitesImage from '@/assets/california-benzene-sites.jpg';
import medicalImage from '@/assets/benzene-medical-facility.jpg';
import compensationImage from '@/assets/benzene-hero-bg.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BenzeneExposure: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    diagnosisDate: '',
    cancerType: ''
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
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
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
    // Handle form submission - redirect to case evaluation
    window.location.href = '/benzene-case-evaluation';
  };

  const benzeneQuestions = [
    {
      question: "Can I file a benzene exposure lawsuit in California?",
      answer: "Yes, if you were exposed to benzene and developed blood cancer, you may have a valid legal claim. California law provides strong protections for toxic exposure victims, including strict liability for dangerous substances and robust discovery rules to prove causation."
    },
    {
      question: "What is the statute of limitations for benzene cases in California?",
      answer: "Generally two years from the date you discovered or should have discovered that your illness was caused by benzene exposure. Due to the latency period for blood cancers, this discovery rule is crucial - the clock doesn't start ticking until you know the connection exists."
    },
    {
      question: "What types of cancer are linked to benzene exposure?",
      answer: "Benzene is strongly linked to acute myeloid leukemia (AML), acute lymphoblastic leukemia (ALL), chronic lymphocytic leukemia (CLL), chronic myeloid leukemia (CML), multiple myeloma, non-Hodgkin lymphoma, myelodysplastic syndromes, and aplastic anemia."
    },
    {
      question: "Who is at risk for benzene exposure in California?",
      answer: "Oil refinery workers, gas station employees, chemical plant workers, automotive mechanics, painters, printers, pharmaceutical workers, railroad employees exposed to diesel exhaust, and residents near industrial facilities are all at elevated risk."
    },
    {
      question: "How much compensation can I get for a benzene exposure case?",
      answer: "Settlements and verdicts vary significantly based on factors like your age, cancer type, exposure level, medical costs, and lost earnings. Benzene cases have resulted in settlements ranging from hundreds of thousands to millions of dollars."
    },
    {
      question: "Do I need to prove exactly where I was exposed to benzene?",
      answer: "No. Our investigators work to identify all possible sources of exposure throughout your work history. Many clients only remember their job duties, not specific products. We reconstruct exposure histories using industrial hygiene experts and historical records."
    },
    {
      question: "Can family members file claims for benzene exposure?",
      answer: "Spouses can file wrongful death claims if benzene exposure caused their partner's death. Family members who developed cancer from secondary exposure (like washing contaminated work clothes) may also have claims, though these are more challenging to prove."
    },
    {
      question: "What if I was exposed to benzene decades ago?",
      answer: "That doesn't bar your claim. Blood cancers from benzene typically develop 5-30 years after exposure. California's discovery rule means the statute of limitations doesn't begin until you discover the connection between your illness and benzene exposure."
    },
    {
      question: "How do you prove benzene caused my cancer?",
      answer: "We use medical experts who review your exposure history, medical records, and scientific literature. Key factors include: type of blood cancer, exposure level and duration, timing between exposure and diagnosis, and absence of other known causes."
    },
    {
      question: "Will filing a lawsuit affect my health insurance or medical care?",
      answer: "No. Lawsuits are separate from insurance coverage. Your doctors continue providing care regardless of legal proceedings. Settlements can actually help cover future medical expenses and lost income."
    },
    {
      question: "What if I was exposed at multiple jobs or locations?",
      answer: "We pursue claims against all companies that exposed you to benzene. California's joint and several liability rules allow us to hold each defendant fully responsible, strengthening your case."
    },
    {
      question: "Can I file a claim if I'm not a U.S. citizen?",
      answer: "Yes. Immigration status doesn't prevent you from filing a benzene lawsuit. All workers have rights to compensation for workplace injuries regardless of citizenship status."
    },
    {
      question: "How long does a benzene exposure case take?",
      answer: "Cases typically take 1-3 years, though we prioritize seriously ill clients for expedited proceedings. Many cases settle before trial, while others require court proceedings to achieve maximum compensation."
    },
    {
      question: "What documents do I need for my benzene case?",
      answer: "Employment records, medical records, Social Security earnings statements, union records, military service records, and workers' compensation files help establish exposure history. We can obtain many documents you don't have."
    },
    {
      question: "Do benzene lawsuits affect workers' compensation benefits?",
      answer: "Generally no. Workers' compensation provides limited benefits while lawsuits seek full compensation from negligent parties. We coordinate both to maximize your total recovery."
    },
    {
      question: "What are OSHA's benzene exposure limits?",
      answer: "OSHA's permissible exposure limit is 1 part per million (ppm) as an 8-hour time-weighted average, with a short-term limit of 5 ppm. However, no benzene level is truly safe - even legal exposures can cause cancer."
    },
    {
      question: "How do I know if my cancer was caused by benzene?",
      answer: "Key indicators include: diagnosis of blood cancer (especially AML), history of working with petroleum products or chemicals, exposure to gasoline or solvents, employment in high-risk industries, and absence of family history of blood cancer."
    },
    {
      question: "Can I get compensation if benzene worsened my existing condition?",
      answer: "Potentially yes. If benzene exposure accelerated your cancer, caused it to spread, or made treatment less effective, you may have a claim for the additional harm caused."
    },
    {
      question: "What about benzene in groundwater contamination?",
      answer: "Groundwater contamination from leaking storage tanks, refineries, or chemical plants can cause cancer in nearby residents. If your water supply was contaminated with benzene and you developed cancer, you may have a claim."
    },
    {
      question: "Do I need to know specific product names or companies involved?",
      answer: "No. We investigate to identify all sources of benzene exposure and liable parties. Our experts reconstruct exposure histories to identify defendants even with limited initial information."
    },
    {
      question: "Can independent contractors sue for benzene exposure?",
      answer: "Yes. Independent contractors can sue companies that exposed them to benzene for premises liability, negligent exposure, and failure to warn. Employment status doesn't prevent recovery."
    },
    {
      question: "How are benzene settlements paid out?",
      answer: "Settlements can be paid as lump sums or structured settlements providing periodic payments. We help you choose the best option considering taxes, medical needs, and financial security."
    },
    {
      question: "What's California Proposition 65's role in benzene cases?",
      answer: "Prop 65 requires warnings about benzene exposure. Violations strengthen your case by showing companies failed to warn about known cancer risks and may result in additional damages."
    },
    {
      question: "Can railroad workers file benzene lawsuits?",
      answer: "Yes. Railroad workers exposed to diesel exhaust containing benzene can file FELA claims against railroad companies under federal law for injuries caused by railroad negligence."
    },
    {
      question: "How do you handle cases for seriously ill clients?",
      answer: "We prioritize cases for terminally ill clients, seeking expedited proceedings and quick settlements when appropriate. Video depositions preserve testimony, and we accommodate all health needs."
    },
    {
      question: "What about benzene exposure from gasoline?",
      answer: "Gas station workers, mechanics, and others with regular gasoline exposure can develop benzene-related cancers. Modern gasoline contains up to 1% benzene, creating significant cancer risk from long-term exposure."
    },
    {
      question: "Can family members who washed work clothes file claims?",
      answer: "Secondary exposure cases are possible but challenging. Family members who regularly handled benzene-contaminated clothing and developed cancer may have claims for 'take-home' exposure."
    },
    {
      question: "What's the average settlement for benzene leukemia cases?",
      answer: "Settlement values vary widely based on age, cancer type, exposure level, and case strength. Benzene settlements often range from hundreds of thousands to millions of dollars, and we fight for maximum compensation."
    },
    {
      question: "Do you handle benzene cases outside California?",
      answer: "We focus on California cases where we're licensed to practice. However, we can associate with qualified attorneys in other states if needed to ensure proper representation."
    },
    {
      question: "What if I don't remember all my exposure details?",
      answer: "That's normal and expected. We use investigative tools including union records, co-worker testimony, industry documents, and expert reconstruction to build complete exposure histories."
    },
    {
      question: "Can I file a claim if I already received a settlement?",
      answer: "It depends on your settlement terms and whether all defendants were included. If you settled with one company but others also exposed you to benzene, additional claims may be possible."
    },
    {
      question: "How do you prove benzene levels from decades ago?",
      answer: "Industrial hygienists use historical data, industry standards, similar facility measurements, and exposure modeling to estimate past benzene levels using OSHA records and scientific literature."
    },
    {
      question: "What medical monitoring is recommended after benzene exposure?",
      answer: "Regular complete blood counts (CBC) can detect early blood abnormalities. Annual exams and prompt evaluation of symptoms like fatigue, bruising, or infections are crucial."
    },
    {
      question: "Can children exposed to benzene file lawsuits?",
      answer: "Yes. Children exposed through parental occupation, contaminated water, or living near industrial facilities who develop cancer can file claims with extended statutes of limitations."
    },
    {
      question: "What role does my oncologist play in the case?",
      answer: "Your treating oncologist provides crucial medical records and may offer testimony about your diagnosis, treatment, and prognosis, though independent experts usually provide causation opinions."
    },
    {
      question: "How confidential is my case information?",
      answer: "Attorney-client privilege protects all communications. Medical records are kept strictly confidential, and we can often negotiate confidential settlements protecting your privacy."
    },
    {
      question: "What happens if I pass away during the lawsuit?",
      answer: "The case continues through your estate. Family members can pursue both the original claims and additional wrongful death damages while we work with families during this transition."
    },
    {
      question: "Should I accept the insurance company's settlement offer?",
      answer: "Never accept an offer without legal consultation. Initial offers are typically far below fair value. We evaluate offers and negotiate aggressively for maximum compensation."
    },
    {
      question: "How many people have been affected by benzene exposure in California?",
      answer: "Thousands of California workers and residents have been exposed to benzene through industrial operations, with elevated blood cancer rates documented in communities near refineries and chemical plants."
    },
    {
      question: "What makes benzene so dangerous compared to other chemicals?",
      answer: "Benzene is classified as a Group 1 human carcinogen with no safe exposure level. It damages bone marrow at the cellular level, disrupting blood cell production and causing DNA mutations that can lead to cancer."
    },
    {
      question: "Which California industries pose the highest benzene exposure risk?",
      answer: "Oil refining, chemical manufacturing, gasoline distribution, automotive repair, printing, rubber manufacturing, and pharmaceutical production pose the highest risks for significant benzene exposure."
    },
    {
      question: "Can benzene exposure cause non-cancer health problems?",
      answer: "Yes. Benzene can cause anemia, decreased white blood cell counts, immune system suppression, reproductive effects, and neurological problems even before cancer develops."
    },
    {
      question: "How long after benzene exposure can cancer develop?",
      answer: "Blood cancers typically develop 5-30 years after benzene exposure, though cases have appeared both earlier and later. This latency period is why the discovery rule is so important for legal claims."
    },
    {
      question: "What safety measures should have protected workers from benzene?",
      answer: "Proper ventilation, personal protective equipment, exposure monitoring, medical surveillance, worker training, and substitution with safer chemicals should have been implemented by responsible employers."
    },
    {
      question: "Are there specific blood tests that show benzene exposure?",
      answer: "No single test definitively proves past benzene exposure, but certain blood abnormalities and chromosomal changes can indicate benzene-related damage. Regular CBC monitoring is recommended."
    },
    {
      question: "What if my employer claims they followed all safety regulations?",
      answer: "Following minimum regulations doesn't prevent liability if safer alternatives existed. We examine whether employers met the standard of care considering all available safety measures and industry best practices."
    },
    {
      question: "Can multiple family members file separate benzene lawsuits?",
      answer: "Yes, if multiple family members developed cancer from benzene exposure (whether occupational or environmental), each person can file their own individual lawsuit for their specific damages."
    },
    {
      question: "How do benzene cases differ from other toxic exposure lawsuits?",
      answer: "Benzene cases have unique aspects including specific types of blood cancers, well-established causation science, OSHA exposure standards, and specialized industrial hygiene evidence requirements."
    },
    {
      question: "What if I developed cancer years after my benzene exposure ended?",
      answer: "This is typical for benzene-related cancers. The long latency period doesn't weaken your case - it's a known characteristic of benzene-induced blood cancers that courts and juries understand."
    },
    {
      question: "Are there support groups for benzene exposure victims?",
      answer: "Yes, we can connect you with patient advocacy groups, cancer support organizations, and other families dealing with benzene-related illnesses for emotional support and practical guidance."
    },
    {
      question: "What about benzene contamination in consumer products?",
      answer: "Some sunscreens, dry shampoos, and other consumer products have been recalled for benzene contamination. If you used contaminated products regularly and developed cancer, you may have a product liability claim."
    },
    {
      question: "How do you calculate damages in benzene exposure cases?",
      answer: "We consider past and future medical expenses, lost wages, reduced earning capacity, pain and suffering, loss of enjoyment of life, and for terminal cases, shortened life expectancy."
    },
    {
      question: "Can I work during my benzene exposure lawsuit?",
      answer: "Yes, if you're able. Working doesn't harm your case - we account for reduced earning capacity and any job limitations caused by your illness when calculating damages."
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
        <div className="absolute inset-0 bg-black/70"></div>
        
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
              California Benzene Exposure Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/benzene-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Benzene Exposure Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been diagnosed with blood cancer after benzene exposure in California, you're facing one of the most preventable yet devastating occupational diseases. Benzene is a known human carcinogen that has no safe level of exposure, and those responsible for your exposure should be held accountable for your suffering and financial losses.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the complex nature of benzene exposure cases. With extensive experience in California toxic exposure litigation and a deep understanding of the medical and industrial complexities involved, we're prepared to fight for maximum compensation while you focus on treatment and time with family.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Benzene Exposure Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FlaskConical className="w-5 h-5 mr-2 text-primary" />
                      Scientific Understanding
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team works closely with leading hematologists and occupational medicine specialists throughout California to understand the full scope of your diagnosis, prognosis, and treatment needs.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Factory className="w-5 h-5 mr-2 text-primary" />
                      Industrial Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We have extensive knowledge of California's industrial history, including oil refineries, chemical plants, gas stations, and manufacturing facilities where benzene exposure occurred.</p>
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
                    <h3>Comprehensive California Benzene Exposure Representation</h3>
                    <p>
                      Benzene exposure cases in California involve complex medical, legal, and industrial factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of benzene exposure to working with medical experts who can clearly explain how benzene caused your blood cancer.
                    </p>
                    
                    <p>
                      California has a significant industrial presence, particularly in petroleum refining, chemical manufacturing, and automotive industries. Many of our clients were exposed to benzene at major facilities including:
                    </p>
                    
                    <ul>
                      <li>Chevron Richmond Refinery and other petroleum facilities</li>
                      <li>Los Angeles area chemical manufacturing plants</li>
                      <li>Gas stations and fuel distribution centers</li>
                      <li>Automotive repair facilities and body shops</li>
                      <li>Printing and publishing operations</li>
                      <li>Rubber manufacturing and tire facilities</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of exposure to ensure no liable party escapes responsibility for your illness. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including corporate litigation, product liability claims, and premises liability cases.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Diagnosis Date</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Cancer Type</label>
                      <Select value={formData.cancerType} onValueChange={(value) => setFormData(prev => ({ ...prev, cancerType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cancer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="acute-myeloid-leukemia">Acute Myeloid Leukemia (AML)</SelectItem>
                          <SelectItem value="acute-lymphoblastic-leukemia">Acute Lymphoblastic Leukemia (ALL)</SelectItem>
                          <SelectItem value="chronic-lymphocytic-leukemia">Chronic Lymphocytic Leukemia (CLL)</SelectItem>
                          <SelectItem value="chronic-myeloid-leukemia">Chronic Myeloid Leukemia (CML)</SelectItem>
                          <SelectItem value="multiple-myeloma">Multiple Myeloma</SelectItem>
                          <SelectItem value="non-hodgkin-lymphoma">Non-Hodgkin Lymphoma</SelectItem>
                          <SelectItem value="myelodysplastic-syndrome">Myelodysplastic Syndrome</SelectItem>
                          <SelectItem value="aplastic-anemia">Aplastic Anemia</SelectItem>
                          <SelectItem value="other">Other Blood Cancer</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Diagnosis */}
            <section id="diagnosis-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Blood Cancer Diagnosis</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Get a second opinion from a hematology specialist</p>
                    <p>• Request all medical records and pathology reports</p>
                    <p>• Explore treatment options at specialized cancer centers</p>
                    <p>• Consider clinical trials and experimental treatments</p>
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
                    <p>• Contact an experienced benzene exposure attorney immediately</p>
                    <p>• Gather employment records and work history documentation</p>
                    <p>• Document all medical expenses and treatments</p>
                    <p>• Avoid discussing your case with insurance companies</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.diagnosisSteps} onOpenChange={() => toggleSection('diagnosisSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More Detailed Steps
                    {expandedSections.diagnosisSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Medical Priority Actions</h3>
                    <p>
                      Time is critical after a blood cancer diagnosis potentially related to benzene exposure. While the shock of diagnosis can be overwhelming, taking immediate action can significantly impact both your medical treatment options and legal rights.
                    </p>
                    
                    <h4>1. Secure Expert Medical Care</h4>
                    <p>
                      Blood cancers linked to benzene exposure require specialized treatment. General oncologists may not have extensive experience with occupational cancers. Seek treatment at specialized cancer centers such as:
                    </p>
                    <ul>
                      <li>UCLA Jonsson Comprehensive Cancer Center</li>
                      <li>UCSF Helen Diller Family Comprehensive Cancer Center</li>
                      <li>City of Hope National Medical Center</li>
                      <li>Stanford Cancer Institute</li>
                      <li>USC Norris Comprehensive Cancer Center</li>
                    </ul>
                    
                    <h4>2. Understand Your Diagnosis</h4>
                    <p>
                      Ensure you understand the type and stage of your blood cancer. Benzene is linked to several blood cancers:
                    </p>
                    <ul>
                      <li><strong>Acute Myeloid Leukemia (AML):</strong> Most strongly linked to benzene exposure</li>
                      <li><strong>Acute Lymphoblastic Leukemia (ALL):</strong> Can develop from benzene exposure</li>
                      <li><strong>Chronic Lymphocytic Leukemia (CLL):</strong> Associated with benzene exposure</li>
                      <li><strong>Multiple Myeloma:</strong> Linked to benzene in some studies</li>
                      <li><strong>Non-Hodgkin Lymphoma:</strong> Associated with benzene exposure</li>
                      <li><strong>Myelodysplastic Syndromes:</strong> Often precedes AML in benzene cases</li>
                    </ul>
                    
                    <h3>Legal Priority Actions</h3>
                    
                    <h4>1. Contact an Attorney Immediately</h4>
                    <p>
                      California has strict time limits for filing benzene exposure claims. Don't delay - evidence becomes harder to obtain as time passes, and witnesses' memories fade. An experienced attorney can:
                    </p>
                    <ul>
                      <li>Investigate your benzene exposure history</li>
                      <li>Identify all potentially liable companies</li>
                      <li>Preserve important evidence</li>
                      <li>File necessary legal paperwork</li>
                      <li>Begin the compensation process</li>
                    </ul>
                    
                    <h4>2. Gather Important Documents</h4>
                    <p>Start collecting any documents that might help establish your benzene exposure:</p>
                    <ul>
                      <li>Employment records and job descriptions</li>
                      <li>Union membership records</li>
                      <li>Safety training records</li>
                      <li>Social Security earnings statements</li>
                      <li>Workers' compensation records</li>
                      <li>Photos of work sites or equipment</li>
                    </ul>
                    
                    <h4>3. Document Everything</h4>
                    <p>
                      Keep detailed records of your medical treatment, symptoms, and how blood cancer affects your daily life. This documentation will be crucial for your legal case.
                    </p>
                    
                    <h3>Family Considerations</h3>
                    <p>
                      Inform family members about your diagnosis and potential benzene exposure, as they may have been exposed through your work clothes (secondary exposure). Family members who develop blood cancer from take-home exposure may also have legal claims.
                    </p>
                    
                    <h3>Financial Planning</h3>
                    <p>
                      Blood cancer treatment can be expensive. Consider:
                    </p>
                    <ul>
                      <li>Reviewing your health insurance coverage</li>
                      <li>Applying for Social Security disability benefits</li>
                      <li>Exploring financial assistance programs</li>
                      <li>Understanding your legal rights to compensation</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Diagnosis Process */}
            <section id="diagnosis-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding the Blood Cancer Diagnosis Process</h2>
              
              <div className="mb-6">
                <img 
                  src={diagnosisImage} 
                  alt="Blood cancer diagnosis process in California medical facilities" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Blood cancer diagnosis related to benzene exposure often involves complex testing and analysis. Understanding the diagnostic process helps you advocate for proper testing and ensures you receive accurate results quickly.
                </p>
              </div>

              <Collapsible open={expandedSections.diagnosisProcess} onOpenChange={() => toggleSection('diagnosisProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Diagnosis Process Information
                    {expandedSections.diagnosisProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Initial Symptoms and Warning Signs</h3>
                    <p>
                      Blood cancers from benzene exposure often develop gradually. Early symptoms may include:
                    </p>
                    
                    <h4>Common Blood Cancer Symptoms:</h4>
                    <ul>
                      <li>Persistent fatigue and weakness</li>
                      <li>Frequent infections</li>
                      <li>Easy bruising or bleeding</li>
                      <li>Unexplained weight loss</li>
                      <li>Night sweats</li>
                      <li>Swollen lymph nodes</li>
                      <li>Bone or joint pain</li>
                      <li>Shortness of breath</li>
                    </ul>
                    
                    <h4>Benzene-Specific Considerations:</h4>
                    <ul>
                      <li>Symptoms may appear 5-30 years after exposure</li>
                      <li>Complete blood count abnormalities may precede symptoms</li>
                      <li>Exposure history is crucial for proper diagnosis</li>
                    </ul>
                    
                    <h3>Diagnostic Testing Procedures</h3>
                    
                    <h4>1. Blood Tests</h4>
                    <p><strong>Complete Blood Count (CBC):</strong> Shows abnormal blood cell levels - often the first sign of blood cancer.</p>
                    <p><strong>Blood Chemistry Panel:</strong> Evaluates organ function and detects cancer-related changes.</p>
                    <p><strong>Flow Cytometry:</strong> Identifies specific types of blood cells and cancer markers.</p>
                    <p><strong>Cytogenetics:</strong> Examines chromosomes for cancer-related changes.</p>
                    
                    <h4>2. Bone Marrow Testing</h4>
                    <p>
                      Bone marrow biopsy and aspiration provide definitive diagnosis for blood cancers:
                    </p>
                    
                    <p><strong>Bone Marrow Aspiration:</strong> Removes liquid marrow for cell analysis.</p>
                    <p><strong>Bone Marrow Biopsy:</strong> Removes solid marrow tissue for detailed examination.</p>
                    <p><strong>Immunohistochemistry:</strong> Uses antibodies to identify specific cancer markers.</p>
                    
                    <h4>3. Imaging Studies</h4>
                    <p><strong>CT Scans:</strong> Show enlarged lymph nodes or organs affected by cancer.</p>
                    <p><strong>PET Scans:</strong> Identify cancer activity throughout the body.</p>
                    <p><strong>MRI:</strong> Provides detailed images of bones and soft tissues.</p>
                    
                    <h3>Benzene Exposure Assessment</h3>
                    
                    <h4>Occupational History</h4>
                    <p>
                      Doctors should document detailed work history including:
                    </p>
                    <ul>
                      <li>Jobs involving petroleum products</li>
                      <li>Chemical manufacturing exposure</li>
                      <li>Gasoline handling or auto repair work</li>
                      <li>Printing or painting operations</li>
                      <li>Rubber or plastics manufacturing</li>
                    </ul>
                    
                    <h4>Environmental Exposure</h4>
                    <ul>
                      <li>Residence near industrial facilities</li>
                      <li>Contaminated groundwater exposure</li>
                      <li>Consumer product exposure</li>
                    </ul>
                    
                    <h3>Cancer Staging and Prognosis</h3>
                    <p>
                      Blood cancer staging differs from solid tumors and varies by cancer type:
                    </p>
                    
                    <h4>Leukemia Staging:</h4>
                    <ul>
                      <li>Based on blood cell counts and bone marrow involvement</li>
                      <li>Considers genetic markers and chromosomal abnormalities</li>
                      <li>Risk stratification guides treatment decisions</li>
                    </ul>
                    
                    <h4>Lymphoma Staging:</h4>
                    <ul>
                      <li>Stage I: Single lymph node region</li>
                      <li>Stage II: Two or more regions on same side of diaphragm</li>
                      <li>Stage III: Regions on both sides of diaphragm</li>
                      <li>Stage IV: Widespread organ involvement</li>
                    </ul>
                    
                    <h3>Getting a Second Opinion</h3>
                    <p>
                      Given the complexity of blood cancers and potential benzene connection, seeking a second opinion is crucial:
                    </p>
                    <ul>
                      <li>Confirm the specific cancer type and stage</li>
                      <li>Evaluate treatment options</li>
                      <li>Access to clinical trials</li>
                      <li>Connect with specialists experienced in occupational cancers</li>
                    </ul>
                    
                    <h3>Importance of Exposure History</h3>
                    <p>
                      Documenting benzene exposure is crucial because:
                    </p>
                    <ul>
                      <li>Helps establish causation for legal claims</li>
                      <li>Informs treatment decisions</li>
                      <li>Aids in prognosis assessment</li>
                      <li>Guides monitoring of other exposed individuals</li>
                    </ul>
                    
                    <h3>What to Ask Your Doctor</h3>
                    <p>Important questions to ask your medical team:</p>
                    <ul>
                      <li>What specific type of blood cancer do I have?</li>
                      <li>Could benzene exposure have caused my cancer?</li>
                      <li>What are my treatment options?</li>
                      <li>Should I get a second opinion?</li>
                      <li>Are there clinical trials available?</li>
                      <li>What is my prognosis?</li>
                      <li>How will treatment affect my quality of life?</li>
                    </ul>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2" />
                      Important Legal Consideration
                    </h3>
                    <p>
                      While focusing on your medical care is the priority, it's also important to contact a benzene exposure attorney quickly after diagnosis. The diagnostic process generates important medical records that will be crucial for your legal case, and time limits for filing claims begin from your diagnosis date.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Benzene Exposure Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for benzene exposure cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for your benzene-related illness. California law provides several avenues for recovery, and our experienced team will pursue all applicable options.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Details
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Overview of Legal Options</h3>
                    <p>
                      Benzene exposure victims in California have multiple potential sources of compensation:
                    </p>
                    
                    <h4>1. Personal Injury Lawsuits</h4>
                    <p>
                      Filed against companies that manufactured benzene-containing products or exposed workers to benzene. These lawsuits seek compensation for medical expenses, lost wages, pain and suffering, and other damages.
                    </p>
                    
                    <h4>2. Product Liability Claims</h4>
                    <p>
                      Against manufacturers of products containing benzene who failed to warn about cancer risks or could have used safer alternatives.
                    </p>
                    
                    <h4>3. Premises Liability Claims</h4>
                    <p>
                      Against property owners or employers who failed to protect workers and visitors from benzene exposure on their premises.
                    </p>
                    
                    <h4>4. Wrongful Death Claims</h4>
                    <p>
                      Family members can file wrongful death claims if a loved one dies from benzene-related cancer.
                    </p>
                    
                    <h3>The Investigation Process</h3>
                    
                    <h4>Exposure History Investigation</h4>
                    <p>
                      Our first step is conducting a comprehensive investigation of your benzene exposure history. This involves:
                    </p>
                    <ul>
                      <li>Detailed interviews about your work history</li>
                      <li>Researching employers and job sites</li>
                      <li>Identifying benzene-containing products you encountered</li>
                      <li>Obtaining employment and personnel records</li>
                      <li>Interviewing co-workers and supervisors</li>
                      <li>Consulting with industrial hygienists</li>
                    </ul>
                    
                    <h4>Medical Evidence Development</h4>
                    <p>We work with medical experts to establish causation:</p>
                    <ul>
                      <li>Review all medical records and pathology reports</li>
                      <li>Consult with hematologists and oncologists</li>
                      <li>Obtain expert medical opinions on causation</li>
                      <li>Document the specific type of cancer and its link to benzene</li>
                    </ul>
                    
                    <h4>Defendant Identification</h4>
                    <p>We identify all potentially liable parties:</p>
                    <ul>
                      <li>Employers who exposed you to benzene</li>
                      <li>Manufacturers of benzene-containing products</li>
                      <li>Property owners where exposure occurred</li>
                      <li>Companies that failed to implement safety measures</li>
                    </ul>
                    
                    <h3>Filing Your Lawsuit</h3>
                    
                    <h4>Statute of Limitations</h4>
                    <p>
                      California has specific time limits for filing benzene exposure claims:
                    </p>
                    <ul>
                      <li>Generally 2 years from discovery of the connection between exposure and illness</li>
                      <li>Discovery rule applies - clock starts when you knew or should have known of the connection</li>
                      <li>Different rules may apply for wrongful death cases</li>
                      <li>We file promptly to preserve all your rights</li>
                    </ul>
                    
                    <h4>Complaint and Discovery</h4>
                    <p>Once filed, your case enters the discovery phase:</p>
                    <ul>
                      <li>Document requests to obtain company records</li>
                      <li>Depositions of key witnesses</li>
                      <li>Expert witness preparation</li>
                      <li>Medical examinations</li>
                    </ul>
                    
                    <h3>Settlement Negotiations</h3>
                    
                    <h4>Demand Package Preparation</h4>
                    <p>We prepare comprehensive settlement demands including:</p>
                    <ul>
                      <li>Complete medical documentation</li>
                      <li>Economic loss calculations</li>
                      <li>Pain and suffering assessment</li>
                      <li>Future medical needs projection</li>
                    </ul>
                    
                    <h4>Mediation Process</h4>
                    <p>
                      Many cases resolve through mediation, where a neutral mediator helps facilitate settlement discussions. This can be faster and less expensive than trial.
                    </p>
                    
                    <h3>Trial Preparation and Process</h3>
                    
                    <h4>If Settlement Isn't Reached</h4>
                    <p>We're fully prepared to take your case to trial:</p>
                    <ul>
                      <li>Expert witness preparation</li>
                      <li>Jury selection</li>
                      <li>Opening statements</li>
                      <li>Presentation of evidence</li>
                      <li>Cross-examination of defense witnesses</li>
                      <li>Closing arguments</li>
                    </ul>
                    
                    <h4>Types of Damages Available</h4>
                    <p>California law allows recovery for:</p>
                    <ul>
                      <li><strong>Medical Expenses:</strong> Past and future treatment costs</li>
                      <li><strong>Lost Wages:</strong> Income lost due to illness</li>
                      <li><strong>Lost Earning Capacity:</strong> Reduced ability to earn in the future</li>
                      <li><strong>Pain and Suffering:</strong> Physical and emotional distress</li>
                      <li><strong>Loss of Enjoyment:</strong> Reduced quality of life</li>
                      <li><strong>Wrongful Death:</strong> Loss of support and companionship</li>
                    </ul>
                    
                    <h3>Special Considerations for Benzene Cases</h3>
                    
                    <h4>Scientific Evidence</h4>
                    <p>
                      Benzene cases rely heavily on scientific evidence:
                    </p>
                    <ul>
                      <li>Epidemiological studies linking benzene to cancer</li>
                      <li>Industrial hygiene evidence of exposure levels</li>
                      <li>Medical evidence of causation</li>
                      <li>Toxicological evidence of benzene's carcinogenic effects</li>
                    </ul>
                    
                    <h4>Industry Knowledge</h4>
                    <p>
                      We investigate what companies knew about benzene dangers:
                    </p>
                    <ul>
                      <li>Internal company documents</li>
                      <li>Safety studies and warnings</li>
                      <li>Regulatory compliance history</li>
                      <li>Industry standards and practices</li>
                    </ul>
                    
                    <h3>Working with Seriously Ill Clients</h3>
                    
                    <h4>Expedited Proceedings</h4>
                    <p>
                      For terminally ill clients, we can request:
                    </p>
                    <ul>
                      <li>Expedited discovery schedules</li>
                      <li>Priority trial settings</li>
                      <li>Video depositions to preserve testimony</li>
                      <li>Accelerated settlement negotiations</li>
                    </ul>
                    
                    <h4>Compassionate Representation</h4>
                    <p>
                      We understand the unique challenges of representing seriously ill clients and work to minimize stress while maximizing recovery.
                    </p>
                  </div>
                  
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <Shield className="w-5 h-5 text-primary mr-2" />
                      Why Experience Matters
                    </h3>
                    <p>
                      Benzene exposure cases require extensive knowledge of industrial processes, medical causation, and legal strategy. Our experience in toxic exposure litigation gives us the expertise needed to build winning cases and secure maximum compensation for our clients.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {benzeneQuestions.map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary transition-all duration-300">
                    <Collapsible open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardTitle className="text-lg flex items-center justify-between group-hover:text-primary transition-colors">
                            {faq.question}
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Benzene Exposure Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Get an estimate of potential compensation based on your specific situation.
                    </p>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                      onClick={() => window.location.href = '/benzene-calculator'}
                    >
                      Calculate Compensation
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Educational Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Learn about benzene exposure, health effects, and prevention.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/benzene-education'}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Find medical specialists and treatment options for blood cancers.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/benzene-medical-guidance'}
                    >
                      Medical Resources
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      Legal Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Understanding your legal rights after benzene exposure.
                    </p>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/benzene-legal-guidance'}
                    >
                      Legal Information
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                  <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="text-center text-white">
                      <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                      <h3 className="text-xl font-bold">Start Your Case</h3>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-6">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/schedule-consultation'}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Schedule Consultation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = '/benzene-case-evaluation'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
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

              {/* Medical Images */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California blood cancer treatment facilities" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with leading blood cancer specialists throughout California.
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
                    alt="Benzene exposure compensation calculator" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <div className="space-y-2 text-sm">
                    <p>• Personal Injury Lawsuits</p>
                    <p>• Product Liability Claims</p>
                    <p>• Premises Liability Cases</p>
                    <p>• Wrongful Death Claims</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits 
Apply for California Benzene Exposure Claims</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law gives you limited time from discovery to file your claim. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/benzene-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BenzeneExposure;