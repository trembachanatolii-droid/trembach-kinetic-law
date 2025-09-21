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
  DollarSign,
  Calculator,
  BookOpen,
  FlaskConical,
  Microscope,
  Factory
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-hero-bg.jpg';
import diagnosisImage from '@/assets/benzene-diagnosis-process.jpg';
import legalProcessImage from '@/assets/benzene-legal-process.jpg';
import exposureSitesImage from '@/assets/california-benzene-sites.jpg';
import medicalImage from '@/assets/benzene-medical-facility.jpg';

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
    exposureLocation: '',
    bloodCancerType: '',
    diagnosisDate: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Add scroll restoration
  useScrollRestoration();

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
      answer: "Benzene cases have strong scientific causation evidence, shorter latency periods than some cancers, and clear occupational exposure patterns. The link between benzene and blood cancer is well-established in scientific literature."
    },
    {
      question: "What should I do if I suspect current benzene exposure at work?",
      answer: "Report concerns to your employer and OSHA immediately. Request air monitoring, use protective equipment, seek medical evaluation, and document everything. Current exposure cases may have different legal options."
    },
    {
      question: "Do benzene exposure victims ever recover completely?",
      answer: "Some blood cancer patients achieve remission or cure with treatment, though long-term monitoring is usually required. Even successful treatment involves significant medical expenses, pain and suffering, and life disruption deserving compensation."
    },
    {
      question: "What evidence do you need to win a benzene exposure case?",
      answer: "Medical records confirming blood cancer diagnosis, evidence of benzene exposure (employment records, witness testimony, industry documentation), and expert medical testimony linking the exposure to the cancer."
    },
    {
      question: "Can I still file a lawsuit if I was exposed to other carcinogens too?",
      answer: "Yes. Multiple carcinogen exposures don't prevent benzene claims. Our experts can assess each substance's contribution to your cancer and pursue claims against all responsible parties."
    }
  ];

  return (
    <>
      <SEO
        title="California Benzene Exposure Lawyers | Blood Cancer & Leukemia Attorneys"
        description="California benzene exposure attorney fighting for victims of blood cancer, leukemia, and lymphoma from benzene exposure. Oil refineries, chemical plants, gas stations. Former defense attorney experience."
        canonical="/practice-areas/benzene-exposure"
      />
      
      <div className="min-h-screen bg-background">
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
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                California Benzene Exposure Lawyers
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Fighting Blood Cancer from Chemical Exposure</span>
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

        {/* Main Content Layout */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2" ref={contentRef}>
              
              {/* Overview Section */}
              <section id="overview" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Benzene Exposure Attorneys</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    If you or a loved one has been diagnosed with leukemia, lymphoma, or another blood cancer after benzene exposure, you deserve justice and compensation. Benzene is a known human carcinogen that has devastated thousands of California families through workplace and environmental exposure.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    At Trembach Law Firm, we understand the devastating impact of a cancer diagnosis. As a former defense attorney, I've seen how chemical companies try to avoid responsibility. Now I use that insider knowledge to fight for maximum compensation for benzene victims throughout California.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                      Learn More About Our California Benzene Practice
                      {expandedSections.overview ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                            <FlaskConical className="w-5 h-5 mr-2 text-primary" />
                            Chemical Exposure Experts
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>Our team has extensive experience investigating benzene exposure cases throughout California's oil refineries, chemical plants, and gas stations.</p>
                        </CardContent>
                      </Card>
                      
                      <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                        <CardHeader>
                          <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                            <Microscope className="w-5 h-5 mr-2 text-primary" />
                            Medical Understanding
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p>We work with leading oncologists and environmental scientists to establish the connection between benzene exposure and blood cancers.</p>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="bg-muted p-6 rounded-lg">
                      <h3 className="text-xl font-semibold mb-4">Understanding Benzene: The Silent Killer</h3>
                      <p className="mb-4">
                        Benzene is a colorless, sweet-smelling liquid that evaporates quickly and is highly flammable. It's one of the 20 most widely used chemicals in the United States, forming naturally in crude oil and gasoline while also being manufactured for industrial use. This volatile organic compound is used to make plastics, resins, synthetic fibers, rubber lubricants, dyes, detergents, drugs, and pesticides.
                      </p>
                      
                      <p>
                        For decades, corporations knew benzene caused cancer but continued exposing workers and communities to this deadly chemical. The petroleum industry, chemical manufacturers, and other companies prioritized profits over people's lives. Studies dating back to the 1940s showed clear links between benzene and leukemia, yet companies failed to protect workers or warn about dangers.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Free Benzene Case Evaluation</h2>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                  <p className="mb-6">Provide information about your benzene exposure to help us evaluate your case.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Exposure Location</label>
                        <Input
                          placeholder="Oil Refinery, Gas Station, Chemical Plant, etc."
                          value={formData.exposureLocation}
                          onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Blood Cancer Type</label>
                        <Select value={formData.bloodCancerType} onValueChange={(value) => setFormData(prev => ({ ...prev, bloodCancerType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select condition..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="aml">Acute Myeloid Leukemia (AML)</SelectItem>
                            <SelectItem value="all">Acute Lymphoblastic Leukemia (ALL)</SelectItem>
                            <SelectItem value="cll">Chronic Lymphocytic Leukemia (CLL)</SelectItem>
                            <SelectItem value="cml">Chronic Myeloid Leukemia (CML)</SelectItem>
                            <SelectItem value="multiple-myeloma">Multiple Myeloma</SelectItem>
                            <SelectItem value="non-hodgkin">Non-Hodgkin Lymphoma</SelectItem>
                            <SelectItem value="mds">Myelodysplastic Syndromes</SelectItem>
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
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={medicalImage} 
                    alt="Benzene blood cancer medical care facility"
                    className="w-full lg:w-80 h-64 lg:h-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">What to Do After a Blood Cancer Diagnosis</h2>
                    <p className="text-lg text-muted-foreground">Essential steps to protect your health and legal rights following a benzene-related cancer diagnosis</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="border-green-200 bg-green-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-green-800">
                        <Heart className="w-5 h-5 mr-2" />
                        Immediate Medical Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-green-700">
                      <p>• Seek care at a specialized cancer center</p>
                      <p>• Get a second opinion from an oncologist</p>
                      <p>• Request complete blood counts and genetic testing</p>
                      <p>• Document all symptoms and medical visits</p>
                      <p>• Understand your specific cancer type and stage</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-blue-200 bg-blue-50">
                    <CardHeader>
                      <CardTitle className="flex items-center text-blue-800">
                        <Scale className="w-5 h-5 mr-2" />
                        Immediate Legal Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-blue-700">
                      <p>• Document your benzene exposure history</p>
                      <p>• Gather employment and military records</p>
                      <p>• Contact an experienced benzene attorney immediately</p>
                      <p>• Preserve work clothing and equipment if possible</p>
                      <p>• Avoid signing any releases without legal review</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.steps} onOpenChange={() => toggleSection('steps')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                      View Detailed Action Plan
                      {expandedSections.steps ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <div className="bg-amber-50 p-6 rounded-lg border border-amber-200">
                      <h4 className="font-semibold text-amber-800 mb-3">Critical: Time-Sensitive Actions</h4>
                      <ul className="space-y-2 text-amber-700">
                        <li>• <strong>Get specialized care:</strong> Blood cancers require oncologists with specific expertise in hematologic malignancies</li>
                        <li>• <strong>Document exposure:</strong> Gather proof of employment at oil refineries, chemical plants, gas stations, or other benzene-using facilities</li>
                        <li>• <strong>Preserve evidence:</strong> Keep any work clothes, safety equipment, or company documents that might show benzene exposure</li>
                        <li>• <strong>Contact an attorney:</strong> California's strict time limits make early legal consultation essential</li>
                      </ul>
                    </div>

                    <div className="prose prose-lg max-w-none">
                      <h3>Detailed Medical Priority Actions</h3>
                      
                      <h4>1. Seek Treatment at a Specialized Center</h4>
                      <p>
                        Blood cancers require specialized care that general oncologists may not provide. California's leading cancer centers include:
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
                        Ensure you understand the type and stage of your blood cancer. Common benzene-related cancers include:
                      </p>
                      <ul>
                        <li><strong>Acute Myeloid Leukemia (AML):</strong> Most strongly linked to benzene exposure</li>
                        <li><strong>Acute Lymphoblastic Leukemia (ALL):</strong> Can affect both children and adults</li>
                        <li><strong>Chronic Leukemias:</strong> Slower-progressing but still serious</li>
                        <li><strong>Multiple Myeloma:</strong> Cancer of plasma cells in bone marrow</li>
                        <li><strong>Non-Hodgkin Lymphoma:</strong> Various subtypes affecting lymphatic system</li>
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
                        <li>Military service records</li>
                        <li>Social Security earnings statements</li>
                        <li>Workers' compensation records</li>
                        <li>Photos of work sites or equipment</li>
                        <li>Safety training materials</li>
                      </ul>
                      
                      <h3>Family Considerations</h3>
                      <p>
                        Inform family members about your diagnosis, as they may have been exposed to benzene through your work clothes (secondary exposure). Family members who develop blood cancer from take-home exposure may also have legal claims.
                      </p>
                      
                      <h3>Financial Planning</h3>
                      <p>
                        Blood cancer treatment can be extremely expensive. Consider:
                      </p>
                      <ul>
                        <li>Reviewing your health insurance coverage</li>
                        <li>Applying for Social Security disability benefits</li>
                        <li>Exploring financial assistance programs</li>
                        <li>Understanding your legal rights to compensation</li>
                        <li>Keeping detailed records of all medical expenses</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Diagnosis Process */}
              <section id="diagnosis-process" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={diagnosisImage} 
                    alt="Blood cancer diagnosis and testing equipment"
                    className="w-full lg:w-80 h-64 lg:h-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Understanding Blood Cancer Diagnosis</h2>
                    <p className="text-lg text-muted-foreground">How blood cancers from benzene exposure are diagnosed and staged for treatment</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Blood cancer diagnosis often requires multiple tests because early symptoms can mimic other conditions. Understanding the diagnostic process helps you advocate for proper testing and ensures you receive accurate results quickly.
                  </p>
                </div>

                <Collapsible open={expandedSections.diagnosisProcess} onOpenChange={() => toggleSection('diagnosisProcess')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                      Show Complete Diagnosis Process Information
                      {expandedSections.diagnosisProcess ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Initial Symptoms and Warning Signs</h3>
                      <p>
                        Blood cancer symptoms from benzene exposure often develop gradually. Early symptoms may include:
                      </p>
                      
                      <h4>Common Blood Cancer Symptoms:</h4>
                      <ul>
                        <li>Persistent fatigue and weakness</li>
                        <li>Frequent infections</li>
                        <li>Easy bruising or bleeding</li>
                        <li>Unexplained weight loss</li>
                        <li>Swollen lymph nodes</li>
                        <li>Night sweats</li>
                        <li>Shortness of breath</li>
                        <li>Pale skin</li>
                      </ul>
                      
                      <h4>Specific Leukemia Symptoms:</h4>
                      <ul>
                        <li>Bone or joint pain</li>
                        <li>Enlarged spleen or liver</li>
                        <li>Red spots on skin (petechiae)</li>
                        <li>Excessive bleeding from minor cuts</li>
                        <li>Recurring fevers</li>
                      </ul>
                      
                      <h3>Diagnostic Testing Procedures</h3>
                      
                      <h4>1. Blood Tests</h4>
                      <p><strong>Complete Blood Count (CBC):</strong> Shows levels of red blood cells, white blood cells, and platelets. Abnormal counts may indicate blood cancer.</p>
                      <p><strong>Blood Chemistry Panel:</strong> Checks organ function and looks for substances that cancer cells release.</p>
                      <p><strong>Flow Cytometry:</strong> Identifies specific types of cells and can detect cancer cells in blood.</p>
                      
                      <h4>2. Bone Marrow Testing</h4>
                      <p>
                        Since blood cells are made in bone marrow, testing this tissue is often necessary for definitive diagnosis:
                      </p>
                      
                      <p><strong>Bone Marrow Aspiration:</strong> Uses a needle to remove liquid bone marrow for testing.</p>
                      <p><strong>Bone Marrow Biopsy:</strong> Removes a small piece of bone and marrow for detailed analysis.</p>
                      <p><strong>Cytogenetic Analysis:</strong> Looks for chromosomal abnormalities that indicate specific cancer types.</p>
                      
                      <h4>3. Imaging Studies</h4>
                      <p><strong>CT Scans:</strong> Show enlarged lymph nodes, organs, or masses.</p>
                      <p><strong>MRI:</strong> Provides detailed images of organs and soft tissues.</p>
                      <p><strong>PET Scans:</strong> Show metabolic activity and can detect cancer spread.</p>
                      
                      <h4>4. Pathological Analysis</h4>
                      <p>
                        Tissue and blood samples undergo detailed examination including:
                      </p>
                      <ul>
                        <li><strong>Morphology:</strong> Microscopic examination of cell structure</li>
                        <li><strong>Immunophenotyping:</strong> Uses antibodies to identify specific cell types</li>
                        <li><strong>Molecular Testing:</strong> Looks for genetic mutations that guide treatment</li>
                        <li><strong>Chromosomal Analysis:</strong> Identifies genetic changes associated with prognosis</li>
                      </ul>
                      
                      <h3>Blood Cancer Staging and Classification</h3>
                      <p>
                        Unlike solid tumors, blood cancers use different staging systems:
                      </p>
                      
                      <h4>Leukemia Classification:</h4>
                      <ul>
                        <li><strong>Acute vs. Chronic:</strong> How quickly the cancer progresses</li>
                        <li><strong>Myeloid vs. Lymphoid:</strong> Which type of blood cell is affected</li>
                        <li><strong>Genetic Subtypes:</strong> Specific chromosomal abnormalities</li>
                        <li><strong>Risk Stratification:</strong> Low, intermediate, or high-risk categories</li>
                      </ul>
                      
                      <h4>Lymphoma Staging:</h4>
                      <ul>
                        <li><strong>Stage I:</strong> Cancer in one lymph node region</li>
                        <li><strong>Stage II:</strong> Cancer in two or more lymph node regions on same side of diaphragm</li>
                        <li><strong>Stage III:</strong> Cancer in lymph nodes on both sides of diaphragm</li>
                        <li><strong>Stage IV:</strong> Cancer has spread to organs outside lymphatic system</li>
                      </ul>
                      
                      <h3>Getting a Second Opinion</h3>
                      <p>
                        Given the complexity of blood cancers, seeking a second opinion from a hematologic oncologist is crucial. Second opinions can:
                      </p>
                      <ul>
                        <li>Confirm the initial diagnosis</li>
                        <li>Provide additional treatment options</li>
                        <li>Access to clinical trials</li>
                        <li>Connect you with specialized centers</li>
                        <li>Ensure optimal treatment planning</li>
                      </ul>
                      
                      <h3>Importance of Accurate Diagnosis</h3>
                      <p>
                        Blood cancers can be misdiagnosed or confused with other conditions. Accurate diagnosis is essential because:
                      </p>
                      <ul>
                        <li>Treatment approaches differ significantly between cancer types</li>
                        <li>Prognosis varies widely</li>
                        <li>Legal claims require confirmed benzene-related cancer diagnosis</li>
                        <li>Clinical trial eligibility depends on specific diagnosis</li>
                        <li>Insurance coverage may depend on accurate staging</li>
                      </ul>
                      
                      <h3>What to Ask Your Doctor</h3>
                      <p>Important questions to ask your medical team:</p>
                      <ul>
                        <li>What specific type of blood cancer do I have?</li>
                        <li>What stage or risk category is my cancer?</li>
                        <li>What are my treatment options?</li>
                        <li>Should I get a second opinion?</li>
                        <li>Are there clinical trials available?</li>
                        <li>What is my prognosis?</li>
                        <li>How might my work history be relevant?</li>
                        <li>What side effects should I expect from treatment?</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Legal Process */}
              <section id="legal-process" className="content-section mb-12">
                <div className="flex flex-col lg:flex-row items-start mb-6">
                  <img 
                    src={legalProcessImage} 
                    alt="Legal process for benzene exposure litigation"
                    className="w-full lg:w-80 h-64 lg:h-48 object-cover rounded-lg mb-4 lg:mb-0 lg:mr-6 flex-shrink-0 shadow-lg hover:scale-105 transition-transform duration-300"
                  />
                  <div>
                    <h2 className="text-3xl font-bold text-red-600 mb-4">Benzene Legal Process</h2>
                    <p className="text-lg text-muted-foreground">How we build and pursue your benzene exposure case for maximum compensation</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Benzene exposure cases require extensive investigation to identify all sources of exposure and prove causation. Our experienced legal team follows a systematic approach to build the strongest possible case for our clients.
                  </p>
                </div>

                <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                      Show Complete Legal Process Information
                      {expandedSections.legalProcess ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Phase 1: Case Investigation and Development</h3>
                      
                      <h4>Initial Case Evaluation</h4>
                      <p>
                        We begin with a comprehensive review of your medical history, work history, and potential benzene exposure. This includes:
                      </p>
                      <ul>
                        <li>Detailed medical record review</li>
                        <li>Employment history reconstruction</li>
                        <li>Identification of potential defendants</li>
                        <li>Preliminary causation analysis</li>
                        <li>Statute of limitations analysis</li>
                      </ul>
                      
                      <h4>Exposure Investigation</h4>
                      <p>Our investigators work to document all sources of benzene exposure:</p>
                      <ul>
                        <li>Workplace exposure assessment</li>
                        <li>Product identification and usage</li>
                        <li>Safety training and equipment review</li>
                        <li>Co-worker and supervisor interviews</li>
                        <li>Company safety records examination</li>
                        <li>OSHA violation records</li>
                      </ul>
                      
                      <h4>Expert Witness Development</h4>
                      <p>We assemble a team of experts including:</p>
                      <ul>
                        <li><strong>Medical Experts:</strong> Oncologists specializing in blood cancers</li>
                        <li><strong>Industrial Hygienists:</strong> Exposure reconstruction specialists</li>
                        <li><strong>Toxicologists:</strong> Benzene health effects experts</li>
                        <li><strong>Economic Experts:</strong> Loss of earnings and future damages</li>
                        <li><strong>Life Care Planners:</strong> Future medical needs assessment</li>
                      </ul>
                      
                      <h3>Phase 2: Formal Legal Proceedings</h3>
                      
                      <h4>Filing the Lawsuit</h4>
                      <p>Once investigation is complete, we file a comprehensive complaint that:</p>
                      <ul>
                        <li>Names all potentially liable defendants</li>
                        <li>Details specific benzene exposure claims</li>
                        <li>Outlines theories of liability</li>
                        <li>Demands appropriate damages</li>
                        <li>Preserves all legal rights</li>
                      </ul>
                      
                      <h4>Discovery Process</h4>
                      <p>We aggressively pursue discovery to uncover evidence:</p>
                      <ul>
                        <li><strong>Interrogatories:</strong> Written questions to defendants</li>
                        <li><strong>Document Production:</strong> Company records, safety data, studies</li>
                        <li><strong>Depositions:</strong> Sworn testimony from company employees</li>
                        <li><strong>Site Inspections:</strong> Workplace examinations where possible</li>
                        <li><strong>Expert Depositions:</strong> Defense expert examination</li>
                      </ul>
                      
                      <h4>Motion Practice</h4>
                      <p>We handle various legal motions that may arise:</p>
                      <ul>
                        <li>Motions to dismiss (defending against)</li>
                        <li>Summary judgment motions</li>
                        <li>Evidentiary motions</li>
                        <li>Class action certification (if applicable)</li>
                        <li>Protective orders for sensitive information</li>
                      </ul>
                      
                      <h3>Phase 3: Case Resolution</h3>
                      
                      <h4>Settlement Negotiations</h4>
                      <p>Most benzene cases settle before trial. Our approach includes:</p>
                      <ul>
                        <li>Comprehensive damages presentation</li>
                        <li>Multiple defendant coordination</li>
                        <li>Structured settlement analysis</li>
                        <li>Tax consequence evaluation</li>
                        <li>Client counseling on settlement options</li>
                      </ul>
                      
                      <h4>Trial Preparation and Litigation</h4>
                      <p>If settlement isn't achieved, we prepare for trial:</p>
                      <ul>
                        <li>Expert witness preparation</li>
                        <li>Demonstrative evidence creation</li>
                        <li>Jury selection strategy</li>
                        <li>Opening and closing argument development</li>
                        <li>Witness examination preparation</li>
                      </ul>
                      
                      <h3>Types of Compensation Available</h3>
                      
                      <h4>Economic Damages</h4>
                      <ul>
                        <li><strong>Medical Expenses:</strong> Past and future treatment costs</li>
                        <li><strong>Lost Wages:</strong> Income lost due to illness</li>
                        <li><strong>Loss of Earning Capacity:</strong> Reduced future earning ability</li>
                        <li><strong>Medical Monitoring:</strong> Future screening costs</li>
                        <li><strong>Home Care:</strong> Assistance with daily activities</li>
                      </ul>
                      
                      <h4>Non-Economic Damages</h4>
                      <ul>
                        <li><strong>Pain and Suffering:</strong> Physical discomfort and emotional distress</li>
                        <li><strong>Loss of Enjoyment:</strong> Inability to participate in activities</li>
                        <li><strong>Disfigurement:</strong> Changes in appearance from treatment</li>
                        <li><strong>Loss of Consortium:</strong> Impact on spousal relationship</li>
                      </ul>
                      
                      <h4>Punitive Damages</h4>
                      <p>
                        In cases involving corporate misconduct, California allows punitive damages to punish defendants and deter similar conduct. These may be available when companies:
                      </p>
                      <ul>
                        <li>Knew benzene was dangerous but failed to warn</li>
                        <li>Concealed health risks from workers</li>
                        <li>Violated safety regulations</li>
                        <li>Prioritized profits over worker safety</li>
                      </ul>
                      
                      <h3>Special Considerations for Benzene Cases</h3>
                      
                      <h4>Multiple Defendants</h4>
                      <p>
                        Benzene cases often involve multiple defendants including manufacturers, employers, and property owners. We coordinate claims to maximize recovery from all responsible parties.
                      </p>
                      
                      <h4>California's Strict Liability</h4>
                      <p>
                        California imposes strict liability for inherently dangerous substances like benzene. This means we don't need to prove negligence - only that benzene exposure caused your illness.
                      </p>
                      
                      <h4>Proposition 65 Violations</h4>
                      <p>
                        California's Proposition 65 requires warnings about benzene exposure. Violations can strengthen your case and may result in additional penalties against defendants.
                      </p>
                      
                      <h4>Workers' Compensation Coordination</h4>
                      <p>
                        We coordinate with workers' compensation claims to ensure you receive all available benefits while pursuing third-party liability claims for full compensation.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions About Benzene Exposure</h2>
                
                <div className="space-y-4">
                  {benzeneQuestions.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left font-medium text-foreground hover:bg-muted transition-colors flex justify-between items-center"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        <span className="text-base">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-foreground" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Resources Section */}
              <section id="resources" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-8">Benzene Exposure Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Benzene Calculator */}
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">Benzene Compensation Calculator</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Get an estimate of potential compensation for your benzene exposure case.
                      </p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.location.href = '/benzene-calculator'}
                      >
                        <Calculator className="w-4 h-4 mr-2" />
                        Calculate Compensation
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Medical Guidance */}
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">Medical Guidance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Essential medical information for benzene exposure victims and their families.
                      </p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.location.href = '/benzene-medical-guidance'}
                      >
                        <Stethoscope className="w-4 h-4 mr-2" />
                        Medical Information
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Legal Guidance */}
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">Legal Guidance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Understanding your legal rights and options after benzene exposure.
                      </p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.location.href = '/benzene-legal-guidance'}
                      >
                        <Scale className="w-4 h-4 mr-2" />
                        Legal Information
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Benzene Education */}
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-primary transition-colors">Benzene Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Learn about benzene exposure sources, health effects, and prevention.
                      </p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white"
                        onClick={() => window.location.href = '/benzene-education'}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Educational Resources
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Don't Wait Section */}
              <section className="content-section mb-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border border-red-200">
                <div className="text-center mb-6">
                  <h2 className="text-3xl font-bold text-red-600 mb-4">Don't Wait - Time Limits Apply for California Benzene Cases</h2>
                  <p className="text-lg text-red-700 mb-6">
                    California law imposes strict deadlines for filing benzene exposure lawsuits. Missing these deadlines can permanently bar your claim and eliminate your right to compensation.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="border-red-200 bg-white/80">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-800">
                        <Clock className="w-5 h-5 mr-2" />
                        Personal Injury Claims
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-red-700">
                      <p className="mb-2"><strong>2 Years</strong> from the date you discovered or should have discovered that your blood cancer was caused by benzene exposure.</p>
                      <p className="text-sm">The "discovery rule" is crucial since blood cancers often develop years after exposure.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-red-200 bg-white/80">
                    <CardHeader>
                      <CardTitle className="flex items-center text-red-800">
                        <Heart className="w-5 h-5 mr-2" />
                        Wrongful Death Claims
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-red-700">
                      <p className="mb-2"><strong>2 Years</strong> from the date of death for family members to file wrongful death claims.</p>
                      <p className="text-sm">Immediate legal consultation is essential to preserve all rights.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-red-100 p-6 rounded-lg border border-red-300 mb-6">
                  <h3 className="text-xl font-semibold text-red-800 mb-3">Why Time Matters</h3>
                  <ul className="space-y-2 text-red-700">
                    <li>• Evidence deteriorates or disappears over time</li>
                    <li>• Witnesses' memories fade or they become unavailable</li>
                    <li>• Company records may be destroyed</li>
                    <li>• Medical experts need complete documentation</li>
                    <li>• Early action preserves maximum compensation opportunities</li>
                  </ul>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-red-600 mb-4">Get Your Free Case Evaluation Today</h3>
                  <p className="text-lg text-red-700 mb-6">
                    Don't let time run out on your benzene exposure claim. Contact our experienced attorneys now for immediate help.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                      onClick={() => window.location.href = '/benzene-case-evaluation'}
                    >
                      Start Free Case Evaluation
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </Button>
                  </div>
                </div>
              </section>
            </div>

            {/* Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <Card className="shadow-xl bg-white border-2 border-red-200">
                  <CardHeader className="bg-red-600 text-white">
                    <CardTitle className="text-center text-xl">3 Ways to Start Your Case</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {/* Phone Option */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Phone className="w-8 h-8 text-red-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">Call Now</h3>
                        <p className="text-sm text-muted-foreground mb-3">Speak directly with an attorney</p>
                        <Button 
                          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                          onClick={() => window.location.href = 'tel:8181234567'}
                        >
                          (818) 123-4567
                        </Button>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* Email Option */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Mail className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">Email Consultation</h3>
                        <p className="text-sm text-muted-foreground mb-3">Get a detailed case review</p>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                          onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Benzene Exposure Case Inquiry'}
                        >
                          Send Email
                        </Button>
                      </div>

                      <div className="border-t border-gray-200"></div>

                      {/* Online Form Option */}
                      <div className="text-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <FileText className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="font-semibold text-lg mb-2 text-foreground">Online Form</h3>
                        <p className="text-sm text-muted-foreground mb-3">Complete case evaluation form</p>
                        <Button 
                          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                          onClick={() => window.location.href = '/benzene-case-evaluation'}
                        >
                          Start Evaluation
                        </Button>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-xs text-center text-muted-foreground mb-2">No fees unless we win</p>
                      <p className="text-xs text-center text-muted-foreground">Free consultation • Available 24/7</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenzeneExposure;