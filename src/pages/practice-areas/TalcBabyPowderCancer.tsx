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
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/talc-cancer-hero.jpg';
import contaminationImage from '@/assets/practice-areas/talc-contamination-analysis.jpg';
import diagnosisImage from '@/assets/practice-areas/talc-ovarian-diagnosis.jpg';
import corporateImage from '@/assets/practice-areas/talc-corporate-documents.jpg';
import legalImage from '@/assets/practice-areas/talc-legal-consultation.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const TalcBabyPowderCancer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    exposureStartDate: '',
    productType: '',
    exposureLocation: '',
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

  const seoData = {
    title: "California Talc & Baby Powder Cancer Lawyers | Free Consultation",
    description: "California talc cancer lawyers. Ovarian cancer and mesothelioma from contaminated baby powder. Major settlements pending. Free consultation. No fees unless we win.",
    canonical: "/practice-areas/talc-baby-powder-cancer"
  };

  const faqData = [
    {
      question: "Did manufacturers know about asbestos in talc products?",
      answer: "Yes. Internal documents reveal companies have known since the 1970s that their talc contained asbestos but hid this from consumers. They prioritized profits over safety, suppressed testing results, and continued marketing to women for intimate use despite knowing the cancer risks."
    },
    {
      question: "What types of cancer are linked to talc use?",
      answer: "Talc use is primarily linked to ovarian cancer in women who used powder for feminine hygiene, and mesothelioma in both men and women exposed to asbestos-contaminated talc. Other cancers including fallopian tube, primary peritoneal, cervical, and uterine cancers are also being investigated."
    },
    {
      question: "How long after talc exposure does cancer develop?",
      answer: "Cancer can develop 10-50 years after initial exposure. Ovarian cancer typically develops after decades of regular talc use, while mesothelioma has a latency period of 20-50 years. The delayed onset often makes it difficult for victims to connect their cancer to past talc exposure."
    },
    {
      question: "Can I file a lawsuit if I don't remember the exact brand?",
      answer: "Yes. Perfect brand recall isn't required. We can establish exposure through your testimony about usage patterns, family testimony, cultural practices, and historical product availability. General timeframes and consistent powder use for feminine hygiene are sufficient evidence."
    },
    {
      question: "What compensation is available for talc cancer victims?",
      answer: "Compensation may include medical expenses (past and future), lost wages, pain and suffering, loss of consortium, and punitive damages. Awards vary based on cancer type, stage, treatment requirements, age, and impact on life expectancy and quality of life."
    },
    {
      question: "Is there a time limit to file a talc cancer lawsuit?",
      answer: "Yes. California has a statute of limitations, typically 2 years from diagnosis or discovery. However, various factors can extend this deadline. It's crucial to consult an attorney immediately after diagnosis to preserve your rights and ensure proper filing within legal deadlines."
    },
    {
      question: "What evidence do I need for a talc cancer case?",
      answer: "Key evidence includes medical records documenting cancer diagnosis, pathology reports, treatment records, and your testimony about talc use patterns. While tissue evidence showing talc particles strengthens cases, it's not required. We help gather and organize all necessary documentation."
    },
    {
      question: "Can men file talcum powder lawsuits?",
      answer: "Yes. Men who developed mesothelioma or other cancers from talc exposure can file lawsuits. This includes direct use, occupational exposure, or secondary exposure from family members' use. Mesothelioma affects both genders and can result from household talc exposure."
    },
    {
      question: "Will filing a lawsuit affect my health insurance coverage?",
      answer: "No. Filing a lawsuit doesn't affect your health coverage or benefits. Your insurance provider may have a lien on settlement proceeds for expenses they paid, but we negotiate these liens to maximize your recovery. Providers cannot cancel coverage for pursuing legal action."
    },
    {
      question: "What is the difference between talc and cornstarch powders?",
      answer: "Talc is a mineral that can contain asbestos contamination, while cornstarch is plant-based and doesn't cause cancer. Many products labeled 'baby powder' historically contained talc despite consumer assumptions. Understanding product formulations helps identify exposure periods and liable parties."
    },
    {
      question: "Can family members be exposed to talc secondhand?",
      answer: "Yes. Secondary exposure occurs when family members inhale talc particles from another person's use, through shared bathroom use, laundry handling, or being present during application. Children, spouses, and other household members can develop cancer from secondary talc exposure."
    },
    {
      question: "Why are California talc cases particularly strong?",
      answer: "California has robust consumer protection laws, experienced product liability courts, and a history of substantial verdicts for corporate misconduct. Our state's legal framework provides various advantages for plaintiffs, including favorable damages calculations and strong judicial precedents."
    },
    {
      question: "How do lawyers prove talc caused my cancer?",
      answer: "Causation is established through medical expert testimony, epidemiological studies showing increased cancer risk, pathology evidence (when available), and detailed exposure history. We work with leading oncologists and pathologists who specialize in talc-related cancers to build strong causation arguments."
    },
    {
      question: "What if I used multiple brands of powder over the years?",
      answer: "This is common and doesn't hurt your case. Many successful cases involve multi-brand exposure. We can pursue claims against multiple manufacturers based on market share, availability during relevant periods, and your usage patterns. Product identification experts help reconstruct exposure history."
    },
    {
      question: "Can I file if I had genetic predisposition to cancer?",
      answer: "Yes. Having BRCA mutations or family history doesn't disqualify you. While genetic factors may affect case evaluation, talc exposure likely contributed to cancer development or accelerated onset. Medical experts can distinguish between genetic and environmental causation factors."
    },
    {
      question: "What happens during the legal process?",
      answer: "The process includes case evaluation, medical record review, expert consultation, lawsuit filing, discovery (document exchange), depositions, settlement negotiations, and potentially trial. Most cases settle before trial. We handle all legal complexities while keeping you informed of progress."
    },
    {
      question: "Are talc lawsuits class actions?",
      answer: "No. Talc cases are individual lawsuits that may be coordinated for efficiency in multidistrict litigation (MDL). This preserves your right to individual compensation based on your specific damages rather than equal distribution regardless of injury severity."
    },
    {
      question: "What if manufacturers declare bankruptcy?",
      answer: "Courts have rejected bad faith bankruptcy attempts by solvent companies. If legitimate bankruptcy occurs, trust funds are established for victim compensation. Multiple defendants and insurance coverage provide compensation sources even if one entity faces financial difficulties."
    },
    {
      question: "How long does a talc cancer lawsuit take?",
      answer: "Cases typically take 1-3 years depending on complexity, court schedules, and whether they settle or go to trial. We can expedite cases for clients with serious health conditions. Most energy goes toward building strong cases rather than lengthy court proceedings."
    },
    {
      question: "Can I switch lawyers if unsatisfied with current representation?",
      answer: "Yes. You can change attorneys anytime if unsatisfied. The new and previous firms coordinate fee arrangements without additional cost to you. Our former defense experience and aggressive approach often improve outcomes for transferred cases."
    },
    {
      question: "What should I do if diagnosed with ovarian cancer or mesothelioma?",
      answer: "Focus on your health and treatment first. Then contact us for a free consultation to discuss your talc exposure history. We work around your treatment schedule and can begin building your case while you focus on recovery. Early consultation preserves important evidence."
    },
    {
      question: "Do talc settlements get taxed?",
      answer: "Personal injury settlements for physical injuries are generally not taxable under federal law. Punitive damages and interest may be taxable. We structure settlements to minimize tax consequences and can recommend tax professionals for guidance on your specific situation."
    },
    {
      question: "What makes your firm different in talc litigation?",
      answer: "Our attorney's former defense experience provides unique insights into corporate strategies and weaknesses. We understand how manufacturers defend these cases and use that knowledge to build stronger plaintiff cases. This inside knowledge often leads to better outcomes for our clients."
    },
    {
      question: "Can I file in California if I lived elsewhere when using talc?",
      answer: "Possibly. Jurisdiction depends on where exposure occurred, current residence, and where defendants conduct business. Many manufacturers operate in California, potentially allowing filing here. We determine the best jurisdiction for maximum recovery based on your specific circumstances."
    },
    {
      question: "What is multidistrict litigation (MDL) for talc cases?",
      answer: "MDL consolidates similar federal cases for coordinated pretrial proceedings. This streamlines discovery and creates efficiency while preserving individual claims and damage assessments. Your case may be filed in or transferred to MDL depending on strategic considerations."
    },
    {
      question: "What scientific studies support talc cancer claims?",
      answer: "Multiple peer-reviewed studies from Harvard, NIH, and international cancer organizations demonstrate increased cancer risk from genital talc use. The Sister Study and other major research projects provide epidemiological evidence. Scientific consensus continues strengthening our understanding of talc-cancer links."
    },
    {
      question: "How much does it cost to hire a talc cancer lawyer?",
      answer: "Nothing upfront. We work on contingency fees, meaning we only get paid if we win your case. Our fee comes from the settlement or verdict, never from your pocket. We also advance all case expenses, so you have no financial risk in pursuing justice."
    },
    {
      question: "Can I file if my cancer is in remission?",
      answer: "Yes. Even if you're in remission or have beaten cancer, you can still file for compensation. Your past medical expenses, lost wages, pain and suffering, and ongoing medical monitoring needs are all compensable damages, regardless of current cancer status."
    },
    {
      question: "What if I'm currently undergoing cancer treatment?",
      answer: "We work around your treatment schedule and health needs. Most case activities don't require your active participation. We prioritize your health and can expedite settlement negotiations for clients with serious conditions. Your recovery comes first."
    },
    {
      question: "Are there ongoing research studies about talc and cancer?",
      answer: "Yes. Research continues examining talc-cancer links, including studies on different cancer types, exposure patterns, and genetic factors. This ongoing research strengthens the scientific foundation for talc litigation and may identify additional at-risk populations."
    },
    {
      question: "What if I used talc during pregnancy?",
      answer: "Talc use during pregnancy may have exposed both you and your child. If either you or your child developed cancer that could be linked to talc exposure, you may have claims. Pregnancy use often involved increased powder application, potentially intensifying exposure."
    },
    {
      question: "Can healthcare workers exposed to talc file lawsuits?",
      answer: "Yes. Healthcare workers, particularly those working in labor and delivery units where talc was commonly used, may have occupational exposure claims. This includes nurses, doctors, and other staff exposed to airborne talc particles in medical settings."
    },
    {
      question: "What role does genetics play in talc cancer cases?",
      answer: "While genetic factors may influence cancer development, they don't prevent talc claims. Medical experts can differentiate between genetic predisposition and environmental causation. Many successful cases involve clients with genetic risk factors because talc exposure likely accelerated or triggered cancer development."
    },
    {
      question: "How do I prove secondary exposure to talc?",
      answer: "Secondary exposure is proven through testimony about household talc use, shared living spaces, family usage patterns, and proximity to direct users. Witnesses can testify about seeing powder application, helping with laundry, or breathing dust during household activities involving talc."
    },
    {
      question: "What if I used talc products for decades without problems?",
      answer: "Long-term use without immediate problems doesn't protect against future cancer development. Cancer often develops decades after initial exposure. Consistent, long-term use actually strengthens causation arguments by establishing sustained exposure patterns that increase cancer risk."
    },
    {
      question: "Are there specific talc products that are more dangerous?",
      answer: "Products marketed for feminine hygiene use pose the highest risk due to application location and marketing targeting women for genital use. However, any talc-containing product with asbestos contamination can cause cancer. The danger depends on contamination levels and usage patterns."
    },
    {
      question: "What happens if I receive a cancer diagnosis after filing?",
      answer: "If your cancer progresses or spreads after filing, we can seek to amend your case to include additional damages. Worsening conditions, additional treatments, and changed prognoses can increase case value. We continuously monitor your medical situation and adjust claims accordingly."
    },
    {
      question: "Can I join a support group for talc cancer victims?",
      answer: "Yes. Support groups exist for cancer patients generally, and some specifically for talc litigation clients. We can connect you with appropriate resources. Many clients find comfort in speaking with others who share similar experiences with both cancer and legal proceedings."
    },
    {
      question: "What medical records do I need for my case?",
      answer: "We need all cancer-related medical records including pathology reports, surgical notes, oncology records, radiology reports, and treatment summaries. We also collect records mentioning talc use, family history, and any occupational or environmental exposures. We help obtain and organize all documentation."
    },
    {
      question: "How do lawyers determine case value in talc litigation?",
      answer: "Case value depends on cancer type and stage, age at diagnosis, treatment requirements, medical expenses, lost wages, pain and suffering, life expectancy impact, and available defendants. Punitive damages for corporate misconduct can significantly increase awards in strong cases."
    },
    {
      question: "What if my loved one died from talc-related cancer?",
      answer: "Surviving family members can file wrongful death claims for economic losses like lost financial support and household services, plus non-economic damages for loss of love, companionship, and guidance. We handle these sensitive cases with compassion while aggressively pursuing justice."
    },
    {
      question: "Are children who used talc products at higher risk?",
      answer: "Childhood exposure may create lifelong cancer risk since young, developing tissues may be more susceptible to carcinogen damage. Children exposed through direct use or household exposure should be monitored for cancer symptoms throughout their lives, with potential claims if cancer develops."
    },
    {
      question: "What should I document about my talc use?",
      answer: "Document everything you remember about powder use including brands, frequency, application methods, purchase locations, and time periods. Family members can provide supporting testimony. Even approximate timeframes and general usage patterns provide valuable evidence for your case."
    },
    {
      question: "How do courts handle conflicting scientific evidence?",
      answer: "Courts allow both sides to present expert testimony and studies. Judges and juries evaluate the credibility and quality of evidence. The growing body of research supporting talc-cancer links, combined with internal company documents showing knowledge of risks, typically favors plaintiffs in well-prepared cases."
    },
    {
      question: "What if I developed multiple cancers potentially linked to talc?",
      answer: "Multiple cancers can strengthen your case by demonstrating the systemic impact of talc exposure. Each cancer may represent separate claims with distinct damages. Medical experts help establish whether multiple cancers share common causation from talc exposure or represent independent developments."
    },
    {
      question: "Can I file a lawsuit if I'm covered by workers' compensation?",
      answer: "Workers' compensation typically covers occupational exposure, but you may still pursue third-party claims against product manufacturers. If your exposure occurred outside work (household use), workers' compensation doesn't apply. We evaluate all potential claims and compensation sources for maximum recovery."
    },
    {
      question: "What role do expert witnesses play in talc cases?",
      answer: "Expert witnesses are crucial for establishing causation, explaining scientific evidence, and calculating damages. We work with oncologists, pathologists, epidemiologists, industrial hygienists, and economists to build comprehensive expert testimony supporting your case from multiple scientific and economic perspectives."
    },
    {
      question: "How do I know if my cancer is related to talc exposure?",
      answer: "Medical experts evaluate your exposure history, cancer type, pathology findings, and other risk factors to determine causation likelihood. While not every cancer in talc users is talc-caused, certain patterns strongly suggest talc causation, particularly ovarian cancer following feminine hygiene use."
    },
    {
      question: "What happens during depositions in talc cases?",
      answer: "Depositions involve answering questions under oath about your talc use, cancer diagnosis, and damages. We prepare you thoroughly for this process. Most questions focus on your exposure history and medical treatment. Depositions are opportunities to tell your story and strengthen your case."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
      />
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        
        <div className="relative z-10 container mx-auto px-8 py-20">
          <div className="max-w-6xl">
            <div className="hero-content">
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  🚨 Thousands of Active Cases
                </Badge>
                <Badge variant="default" className="text-lg px-4 py-2 bg-green-600">
                  ✓ Major Settlements Pending
                </Badge>
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  ⚡ Former Defense Attorney
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6">
                California Talc & Baby Powder Cancer Lawyers
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl">
                Fighting for Victims of Contaminated Baby Powder Throughout All 58 California Counties
              </p>
              <p className="text-lg text-muted-foreground mb-12 max-w-5xl">
                Major manufacturers knew their talc contained cancer-causing asbestos for decades. Now California victims are securing justice through legal action.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button asChild size="lg" className="text-lg px-8 py-6 bg-red-600 hover:bg-red-700">
                  <Link to="/talc-case-evaluation">Free Case Review</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/90 text-foreground border-white hover:bg-white transition-all">
                  <a href="tel:8181234567">📞 Call (818) 123-4567</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-background/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary font-semibold'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="container mx-auto px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-8">
                {/* Comprehensive Overview Card */}
                <Card className="content-section p-8">
                  <h2 className="text-3xl font-bold mb-6 text-red-600">The Talc Cancer Crisis in California</h2>
                  <div className="mb-6">
                    <img 
                      src={contaminationImage} 
                      alt="Laboratory testing of talc powder for asbestos contamination"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    For generations, talcum powder was marketed as the epitome of purity and safety, a product gentle enough for babies and recommended for women's most intimate hygiene needs. Today, thousands of California women face ovarian cancer diagnoses, and both men and women confront mesothelioma, after decades of using products contaminated with asbestos and linked to cancer development.
                  </p>
                  <div className="show-more-container">
                    <Collapsible 
                      open={expandedSections['overview-full']} 
                      onOpenChange={() => toggleSection('overview-full')}
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="flex items-center gap-2 text-primary hover:text-primary-dark">
                          Learn More About the Crisis
                          {expandedSections['overview-full'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-6 space-y-6">
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          The betrayal runs deeper than simple product defects. Internal documents reveal manufacturers tested their talc, found asbestos contamination, and chose to hide these results while specifically marketing powder for feminine hygiene use.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                          California's demographic diversity means talc exposure patterns vary across communities. Multi-generational powder use in Latino families, where mothers taught daughters to use talc for freshness, created decades of exposure.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </Card>

                {/* Types of Cases Card */}
                <Card className="content-section p-8">
                  <h2 className="text-3xl font-bold mb-6 text-red-600">Types of Talc Cancer Cases We Handle</h2>
                  <div className="mb-6">
                    <img 
                      src={diagnosisImage} 
                      alt="Medical documentation and ovarian cancer diagnosis materials"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Ovarian Cancer from Genital Talc Use</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Ovarian cancer cases form the largest category of talc litigation, affecting women who used powder for feminine hygiene over years or decades.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Mesothelioma from Contaminated Talc</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Mesothelioma cases involve cancer of the mesothelium, caused by asbestos fibers in contaminated talc.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Other Related Cancers</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Fallopian tube, primary peritoneal, cervical, and uterine cancers are also linked to talc exposure.
                      </p>
                    </div>
                  </div>
                </Card>

                {/* Corporate Concealment Card */}
                <Card className="content-section p-8">
                  <h2 className="text-3xl font-bold mb-6 text-red-600">Corporate Concealment and Evidence</h2>
                  <div className="mb-6">
                    <img 
                      src={corporateImage} 
                      alt="Corporate boardroom with documents showing talc contamination cover-up evidence"
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    Product manufacturers employed sophisticated marketing strategies specifically targeting women for genital talc use despite knowing the cancer risks.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Key Evidence Sources</h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Internal company testing showing asbestos contamination</li>
                        <li>• Marketing materials targeting intimate use</li>
                        <li>• Scientific studies linking talc to cancer</li>
                        <li>• Expert testimony on causation mechanisms</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Corporate Misconduct Patterns</h3>
                      <ul className="text-muted-foreground space-y-2">
                        <li>• Deliberate hiding of contamination results</li>
                        <li>• Failure to warn consumers of cancer risks</li>
                        <li>• Targeted marketing despite known dangers</li>
                        <li>• Decades of regulatory deception</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {/* Case Evaluation Tab */}
            {activeTab === 'evaluation' && (
              <Card className="content-section p-8">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Talc Cancer Case Evaluation</h2>
                <p className="text-muted-foreground mb-8">
                  Help us understand your talc exposure and cancer diagnosis to evaluate your potential case.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <label className="block text-sm font-medium mb-2">When did you start using talc products?</label>
                    <Select onValueChange={(value) => setFormData({...formData, exposureStartDate: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select time period" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1950s-1960s">1950s-1960s</SelectItem>
                        <SelectItem value="1970s-1980s">1970s-1980s</SelectItem>
                        <SelectItem value="1990s-2000s">1990s-2000s</SelectItem>
                        <SelectItem value="2000s-2010s">2000s-2010s</SelectItem>
                        <SelectItem value="2010s-present">2010s-Present</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of talc product used</label>
                    <Select onValueChange={(value) => setFormData({...formData, productType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select product type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="baby-powder">Baby Powder</SelectItem>
                        <SelectItem value="feminine-hygiene">Feminine Hygiene Powder</SelectItem>
                        <SelectItem value="body-powder">Body Powder</SelectItem>
                        <SelectItem value="multiple-products">Multiple Product Types</SelectItem>
                        <SelectItem value="unknown">Unknown/Not Sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary use location</label>
                    <Select onValueChange={(value) => setFormData({...formData, exposureLocation: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="genital-area">Genital Area</SelectItem>
                        <SelectItem value="underwear-pads">Underwear/Sanitary Pads</SelectItem>
                        <SelectItem value="all-over-body">All Over Body</SelectItem>
                        <SelectItem value="baby-diaper-area">Baby Diaper Area</SelectItem>
                        <SelectItem value="multiple-areas">Multiple Areas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Cancer diagnosis</label>
                    <Select onValueChange={(value) => setFormData({...formData, cancerType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select cancer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                        <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                        <SelectItem value="fallopian-tube">Fallopian Tube Cancer</SelectItem>
                        <SelectItem value="peritoneal-cancer">Primary Peritoneal Cancer</SelectItem>
                        <SelectItem value="cervical-cancer">Cervical Cancer</SelectItem>
                        <SelectItem value="uterine-cancer">Uterine Cancer</SelectItem>
                        <SelectItem value="other">Other Cancer Type</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-800 mb-4">Get Your Free Case Evaluation</h3>
                  <p className="text-red-700 mb-4">
                    Based on your responses, you may have a valid talc cancer claim. Our experienced attorneys can provide a comprehensive case evaluation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <Link to="/talc-case-evaluation">Complete Full Evaluation</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="tel:8181234567">Call (818) 123-4567</a>
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {/* FAQ Tab */}
            {activeTab === 'faq' && (
              <Card className="content-section p-8">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Frequently Asked Questions</h2>
                <p className="text-muted-foreground mb-8">
                  Find answers to common questions about talc cancer lawsuits in California.
                </p>
                
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border border-border rounded-lg">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-semibold text-lg">{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Resources Tab */}
            {activeTab === 'resources' && (
              <Card className="content-section p-8">
                <h2 className="text-3xl font-bold mb-6 text-red-600">Helpful Resources</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card 
                    className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.location.href = '/talc-medical-guidance'}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                        Medical Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>• Cancer Treatment Centers</p>
                      <p>• Ovarian Cancer Specialists</p>
                      <p>• Mesothelioma Treatment Programs</p>
                      <p>• Support Groups for Patients</p>
                      <p className="text-sm text-primary mt-4 font-medium">Click to access medical guidance →</p>
                    </CardContent>
                  </Card>

                  <Card 
                    className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.location.href = '/talc-case-evaluation'}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Scale className="w-5 h-5 mr-2 text-primary" />
                        Legal Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>• Free Case Evaluation</p>
                      <p>• California Cancer Laws</p>
                      <p>• Legal Rights for Victims</p>
                      <p>• Immigration Protection Resources</p>
                      <p className="text-sm text-primary mt-4 font-medium">Click for free case evaluation →</p>
                    </CardContent>
                  </Card>

                  <Card 
                    className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open('https://www.cancer.gov/', '_blank')}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Building className="w-5 h-5 mr-2 text-primary" />
                        Government Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>• National Cancer Institute</p>
                      <p>• FDA Safety Information</p>
                      <p>• Social Security Disability</p>
                      <p>• Medicare/Medi-Cal Information</p>
                      <p className="text-sm text-primary mt-4 font-medium">Click to access government resources →</p>
                    </CardContent>
                  </Card>

                  <Card 
                    className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105 cursor-pointer"
                    onClick={() => window.open('https://www.cancer.org/', '_blank')}
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Users className="w-5 h-5 mr-2 text-primary" />
                        Support Resources
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>• American Cancer Society</p>
                      <p>• Patient Support Networks</p>
                      <p>• Family Counseling Services</p>
                      <p>• Community Health Centers</p>
                      <p className="text-sm text-primary mt-4 font-medium">Click to access support resources →</p>
                    </CardContent>
                  </Card>
                </div>
              </Card>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* Contact Card */}
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-xl font-bold text-red-800 mb-4">Free Case Review</h3>
                <p className="text-red-700 mb-4">Available 24/7 • No Fees Unless We Win</p>
                <div className="space-y-3">
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link to="/talc-case-evaluation">Get Free Evaluation</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full">
                    <a href="tel:8181234567">Call (818) 123-4567</a>
                  </Button>
                </div>
              </Card>

              {/* Key Facts */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Facts</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5" />
                    <span>Thousands of active talc cancer cases nationwide</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span>Time limits apply for filing claims</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-500 mt-0.5" />
                    <span>No fees unless we win your case</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span>Free medical guidance available</span>
                  </div>
                </div>
              </Card>

              {/* Sidebar Image */}
              <div className="hidden lg:block">
                <img 
                  src={legalImage} 
                  alt="Legal consultation for talc cancer cases"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Time Limits Apply for California Talc Cancer Claims</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            California law imposes strict time limits for filing talc cancer claims. Generally, you have 2 years from the date of diagnosis or discovery of the disease to file a lawsuit. However, workers' compensation claims may have different deadlines.
          </p>
          <p className="text-lg mb-8 max-w-4xl mx-auto">
            Because talc-related cancers are progressive and can be fatal, immediate legal action is essential to preserve your rights and secure compensation for medical treatment. Don't let legal deadlines prevent you from getting the justice and compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-red-600 hover:bg-gray-100">
              <Link to="/talc-case-evaluation">Get Free Case Evaluation Now</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-red-600">
              <a href="tel:8181234567">Call (818) 123-4567</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalcBabyPowderCancer;