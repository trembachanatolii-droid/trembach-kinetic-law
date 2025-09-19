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
import heroBackground from '@/assets/practice-areas/pharmaceutical-hero.jpg';
import sidebarImage from '@/assets/practice-areas/pharmaceutical-sidebar.jpg';
import dangerousDrugsImage from '@/assets/practice-areas/dangerous-drugs.jpg';
import stepsAfterInjuryImage from '@/assets/practice-areas/pharmaceutical-steps.jpg';
import legalProcessImage from '@/assets/practice-areas/pharmaceutical-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/pharmaceutical-compensation.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const Pharmaceutical: React.FC = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    drugInvolved: '',
    injuryDescription: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'after-injury', label: 'AFTER INJURY STEPS', icon: Stethoscope },
    { id: 'dangerous-drugs', label: 'DANGEROUS DRUGS', icon: AlertTriangle },
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
    // Handle form submission - redirect to pharmaceutical case evaluation
    window.location.href = '/pharmaceutical-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What types of pharmaceutical injuries do you handle?",
      answer: "We handle all types of pharmaceutical injuries including dangerous drug side effects, inadequate warnings, clinical trial deception, and FDA approval fraud. Common cases involve GLP-1 drugs (Ozempic, Wegovy, Mounjaro), causing gastroparesis, vision loss, and organ damage. We also handle antidepressant birth defects, blood thinner bleeding, diabetes drug complications, and cancer medications causing secondary cancers. Any prescription or over-the-counter medication causing unexpected serious harm may support a claim. Our pharmaceutical injury expertise covers defective design, manufacturing defects, and failure to warn claims against drug manufacturers."
    },
    {
      question: "How long do I have to file a pharmaceutical injury lawsuit in California?",
      answer: "California's statute of limitations for pharmaceutical injury cases is generally two years from discovery of the injury. The discovery rule means the clock starts when you knew or should have known your injury was drug-related, not necessarily when you first took the medication. However, some federal claims have different deadlines, and certain circumstances can extend or shorten this timeframe. Given the complexity of pharmaceutical cases and evidence preservation needs, it's crucial to consult with an attorney immediately upon suspecting drug-related injuries. Acting quickly preserves your rights and strengthens your case through better evidence collection."
    },
    {
      question: "What compensation can I recover in a pharmaceutical injury case?",
      answer: "Pharmaceutical injury compensation can include: medical expenses (past and future), lost wages and reduced earning capacity, pain and suffering, emotional distress, loss of consortium, and in cases of corporate misconduct, punitive damages. Current Ozempic gastroparesis cases project $400,000-$700,000 for severe permanent injuries, while temporary symptoms may yield $50,000-$200,000. Factors affecting value include injury severity, permanence, age, income, treatment needs, and strength of causation evidence. Unlike medical malpractice, no damage caps limit pharmaceutical recoveries. Wrongful death cases can recover funeral expenses, lost support, and loss of companionship. Each case is unique, requiring individualized evaluation."
    },
    {
      question: "How do you prove a drug caused my injury?",
      answer: "Proving causation requires both general and specific causation evidence. General causation shows the drug can cause your type of injury through epidemiological studies, clinical trials, adverse event reports, and biological plausibility. Specific causation proves the drug caused YOUR injury through temporal relationship (timing), differential diagnosis (ruling out other causes), dose-response relationship, and dechallenge/rechallenge data. Medical experts provide crucial testimony connecting the drug to your injuries. We work with leading experts in pharmacology, epidemiology, and relevant medical specialties to build compelling causation evidence."
    },
    {
      question: "What if I have pre-existing conditions?",
      answer: "Pre-existing conditions don't prevent recovery if the drug worsened your condition or caused new injuries. California's \"eggshell plaintiff\" rule means defendants take victims as they find them—increased vulnerability doesn't reduce liability. We must show the drug was a substantial factor in causing harm, not the sole cause. Medical experts differentiate drug-induced injuries from pre-existing conditions through careful analysis. Documentation showing condition stability before drug use and deterioration afterward strengthens causation. Many successful pharmaceutical cases involve patients with underlying health conditions."
    },
    {
      question: "Can I sue if the drug has a black box warning?",
      answer: "Yes, black box warnings don't provide complete immunity from lawsuits. You can still sue if: the warning was added after you took the drug, the warning inadequately described the risk, your doctor wasn't properly informed, or off-label use wasn't addressed. Additionally, if the company knew about risks before adding warnings, punitive damages may apply. Black box warnings often come too late, after thousands suffer injuries. The adequacy of warnings—not just their existence—determines liability. We examine warning timeline, content, and distribution to establish liability despite warnings."
    },
    {
      question: "What if I took a generic version of the drug?",
      answer: "Generic drug cases face additional challenges due to federal preemption limiting failure-to-warn claims. However, you may still have claims for: design defects if the generic deviated from brand specifications, manufacturing defects causing contamination or incorrect dosing, or claims against the brand manufacturer who created the dangerous design. Some states allow \"innovator liability\" holding brand manufacturers responsible for generic injuries. We explore all legal theories to overcome generic drug obstacles and may pursue claims against prescribing physicians or pharmacies when appropriate."
    },
    {
      question: "How much does it cost to hire your firm?",
      answer: "We work exclusively on contingency fee basis—you pay nothing unless we win. We advance all case costs including expert witnesses, medical record acquisition, FDA document requests, and court fees. These costs are reimbursed from your settlement or verdict. If we don't win, you owe nothing for attorney fees or advanced costs. This arrangement ensures access to experienced pharmaceutical litigation regardless of your financial situation. The contingency fee percentage is competitive and discussed during your free consultation. Most pharmaceutical cases require substantial upfront investment that we provide."
    },
    {
      question: "Do I need to report my injury to the FDA?",
      answer: "While not legally required, reporting to FDA's MedWatch program is strongly recommended. Reports create official records helpful to your case, contribute to drug safety monitoring potentially helping others, and may trigger FDA action strengthening all cases. Reports don't replace lawsuits but complement legal action. We can assist with FDA reporting while pursuing your legal claim. Healthcare providers can also file reports. Multiple reports about similar injuries strengthen causation arguments and may lead to label changes or recalls benefiting all plaintiffs."
    },
    {
      question: "Should I join a class action or file individual lawsuit?",
      answer: "Individual lawsuits typically provide better outcomes than class actions for pharmaceutical injuries. Class actions result in identical settlements regardless of injury severity, while individual cases receive customized compensation. Multidistrict Litigation (MDL) offers middle ground—coordinated discovery and shared costs while maintaining individual case values. The best approach depends on injury severity, case strength, and current litigation landscape. We evaluate these factors to recommend optimal strategy. Severe injuries often warrant individual litigation while minor injuries may benefit from group resolution."
    },
    {
      question: "How long does a pharmaceutical injury case take?",
      answer: "Pharmaceutical cases typically take 2-4 years from filing to resolution, though timeline varies significantly. Factors affecting duration include: case complexity, discovery scope, expert witness preparation, MDL coordination, settlement negotiations, and trial schedules. Simple cases with clear causation may resolve within 18 months, while complex cases requiring extensive discovery can take 5+ years. Early settlements are possible when liability is clear and damages substantial. MDL participation may extend timelines but often results in better outcomes through coordinated strategy and shared resources."
    },
    {
      question: "What's the difference between MDL and class action?",
      answer: "Multidistrict Litigation (MDL) consolidates similar cases for efficient pretrial proceedings while preserving individual claims. Unlike class actions where everyone receives identical treatment, MDL cases maintain unique valuations based on specific injuries. MDL provides cost savings through shared discovery, coordinated expert witnesses, and unified strategy against pharmaceutical companies. Class actions bind all members to single settlement, often inadequate for severe injuries. MDL allows individual settlement negotiations or trial if needed. Current pharmaceutical MDLs include GLP-1 drugs, offering strength in numbers while protecting individual rights."
    },
    {
      question: "Can I sue my doctor for prescribing a dangerous drug?",
      answer: "Possibly, if the doctor deviated from standard care. Medical malpractice claims may arise from: prescribing contraindicated drugs, ignoring black box warnings, failing to monitor for side effects, prescribing excessive doses, or not considering safer alternatives. However, doctors often rely on pharmaceutical company information. The \"learned intermediary\" doctrine sometimes shields manufacturers behind physician prescribing decisions. We evaluate potential medical malpractice claims alongside pharmaceutical liability. California's MICRA caps may limit medical malpractice recovery, making pharmaceutical claims more valuable."
    },
    {
      question: "What if I threw away the medication?",
      answer: "Don't worry—pharmacy records, medical records, and insurance claims can prove medication use. Physical pills aren't required for successful cases. However, if you still have medication, preserve it in original packaging and photograph lot numbers. Pharmacy records show exact products dispensed including manufacturer and lot numbers. Insurance claims verify prescription filling dates and quantities. Medical records document prescribing history. We obtain all necessary documentation proving your medication use without physical evidence."
    },
    {
      question: "What if the doctor prescribed the drug off-label?",
      answer: "Off-label prescribing (using drugs for non-FDA-approved purposes) is legal and common but can strengthen your case. Pharmaceutical companies often illegally promote off-label use without adequate safety testing. If the company encouraged off-label prescribing through sales representatives or marketing materials, liability increases. Warnings may not address off-label risks, strengthening failure-to-warn claims. The doctor may share liability for inappropriate off-label prescribing. We investigate marketing practices and physician communications to establish liability for off-label injuries."
    },
    {
      question: "How do mass tort settlements work?",
      answer: "Mass tort settlements typically create compensation grids based on injury severity. Point systems assign values for factors like: injury type and severity, duration of drug use, age, and medical treatment required. Individual cases receive point scores determining settlement tiers. Unlike class actions, each plaintiff can accept or reject their offer. Global settlements streamline compensation but may undervalue unique cases. We evaluate whether participating in global settlements or pursuing individual resolution maximizes your recovery. Settlement administration can take months after agreement."
    },
    {
      question: "Can I still sue if I'm partially at fault?",
      answer: "California's pure comparative negligence law allows recovery even if you're partially at fault, though damages reduce proportionally. For example, if you're 30% at fault for not following dosing instructions, you can still recover 70% of damages. However, pharmaceutical companies bear strict liability for defective drugs regardless of user behavior. Taking more than prescribed doesn't excuse failure to warn about side effects. We counter blame-shifting tactics and minimize any comparative fault to maximize your recovery."
    },
    {
      question: "What if my loved one died from a dangerous drug?",
      answer: "California's wrongful death statute allows spouses, children, and dependents to recover for pharmaceutical-caused deaths. Recoverable damages include: funeral and burial expenses, lost financial support and benefits, loss of companionship and consortium, and household services value. Survival actions recover damages the deceased could have claimed including medical expenses before death and pain and suffering. Two-year statute of limitations typically applies from date of death. We handle these sensitive cases with compassion while aggressively pursuing accountability and maximum compensation for grieving families."
    },
    {
      question: "Should I stop taking the medication?",
      answer: "Never stop taking prescribed medication without medical supervision. Abrupt discontinuation can cause serious withdrawal symptoms, rebound effects, or dangerous health complications. Consult your doctor about concerns and alternative treatments. Document conversations about stopping or switching medications. Your legal case doesn't require continuing dangerous medication. In fact, mitigation of damages may require stopping once risks are known. We coordinate with healthcare providers ensuring safe medical management while preserving legal claims."
    },
    {
      question: "Can I afford the medical experts needed for my case?",
      answer: "We advance all expert witness costs, which can exceed $50,000 in complex pharmaceutical cases. Experts typically include: treating physicians, medical specialists, pharmacologists, epidemiologists, FDA regulatory experts, and economic damages experts. These costs are reimbursed from your settlement or verdict. If we don't win, you owe nothing for these expenses. Our resources and experience ensure access to top experts regardless of your financial situation. MDL participation can reduce individual expert costs through shared expenses."
    },
    {
      question: "What if I can't afford ongoing medical treatment?",
      answer: "We connect you with doctors who provide treatment on a lien basis, meaning payment comes from your settlement. This ensures quality medical care without upfront costs. We can also negotiate with existing providers for payment deferrals. Proper treatment documentation strengthens your case while addressing health needs. Some clients qualify for clinical trials or pharmaceutical company patient assistance programs. We explore all options ensuring you receive necessary care during litigation."
    },
    {
      question: "What are bellwether trials?",
      answer: "Bellwether trials are representative cases selected from MDL to be tried first. These \"test cases\" help both sides evaluate strengths, weaknesses, and jury reactions. Outcomes guide settlement negotiations for remaining cases. Selection involves both random and hand-picked cases representing various injury types. Bellwether verdicts aren't binding but create settlement pressure. Winning bellwethers increase all case values while losses may reduce expectations. The process typically takes 18-24 months from MDL formation to first trial."
    },
    {
      question: "How do I know if I have a strong case?",
      answer: "Strong pharmaceutical cases typically have: clear temporal relationship between drug use and injury onset, documented medical treatment for drug-related symptoms, medical expert support for causation, and significant damages justifying litigation costs. Factors strengthening cases include FDA safety communications about your drug, clinical studies showing similar injuries, multiple plaintiff cases, and good documentation of drug use and injuries. We evaluate case strength during free consultation, considering medical records, injury severity, and available evidence. Even seemingly weak cases may have hidden strengths requiring professional evaluation."
    },
    {
      question: "What if I can't travel for legal proceedings?",
      answer: "We accommodate clients who cannot travel due to health, distance, or financial constraints. Most case work occurs remotely through phone, email, and video conferencing. Document signing can happen electronically or through mobile notaries. Depositions may occur near your location or via video. MDL participation doesn't require traveling to Pennsylvania. Only rare cases require court appearances, and we can often appear on your behalf. Medical examinations may be arranged locally. We come to you when necessary, ensuring accessibility regardless of limitations."
    },
    {
      question: "Can I change lawyers if I'm unhappy?",
      answer: "Yes, you can change attorneys anytime. Your case file belongs to you. New and previous attorneys work out fee division without additional cost to you. Common reasons for switching include poor communication, lack of progress, or disagreement about strategy. Changing lawyers doesn't restart statute of limitations but may delay proceedings. Ensure new counsel has pharmaceutical litigation experience. We often accept cases from other firms, improving outcomes through specialized expertise and resources. Request your complete file before switching. New representation can reinvigorate stalled cases."
    },
    {
      question: "What if the drug helped me despite side effects?",
      answer: "Therapeutic benefit doesn't excuse undisclosed risks or eliminate liability. You deserved informed consent about all risks to make educated decisions. Many patients would choose different treatments knowing true risks. The issue isn't whether drugs work but whether companies honestly disclosed dangers. Safer alternatives might have provided similar benefits without severe side effects. Pharmaceutical companies must warn about all material risks regardless of drug efficacy. Your appreciation for therapeutic benefits doesn't waive rights to compensation for injuries. Cases focus on failure to warn, not complete drug failure."
    },
    {
      question: "How do courts handle scientific evidence in pharmaceutical cases?",
      answer: "Courts apply Daubert standards requiring scientific evidence be relevant and reliable. Expert testimony must use accepted methodologies and peer-reviewed studies. Epidemiological evidence showing statistical associations between drugs and injuries carries significant weight. Animal studies, case reports, and adverse event data provide supporting evidence. Judges act as gatekeepers excluding \"junk science\" while allowing legitimate scientific debate. Both sides present competing experts requiring judges to evaluate credibility. MDL judges often hold \"science days\" educating themselves on complex medical issues. California state courts apply similar standards ensuring only valid science reaches juries."
    },
    {
      question: "What's the difference between side effects and adverse events?",
      answer: "Side effects are known, expected reactions listed in drug information (nausea, drowsiness, etc.). Adverse events are unexpected, serious reactions not adequately warned about. Legal liability typically involves adverse events—serious injuries the manufacturer knew or should have known about but failed to disclose. Severity matters: minor side effects don't support lawsuits while life-altering adverse events do. The distinction affects whether risks were acceptable with informed consent. Manufacturers must warn about both common minor side effects and rare serious adverse events."
    },
    {
      question: "Can I sue for increased disease risk without current symptoms?",
      answer: "Generally, California requires present injury for lawsuit viability. However, medical monitoring claims may be available for increased disease risk requiring surveillance. Some courts recognize \"subclinical injury\"—cellular damage without symptoms. Fear of future disease alone typically doesn't support claims without physical changes. Regular medical monitoring costs may be recoverable. If monitoring detects disease later, new claims may arise. Document all monitoring and testing related to increased risk. Some mass settlements include medical monitoring programs for at-risk patients without current symptoms."
    },
    {
      question: "What if I participated in a clinical trial?",
      answer: "Clinical trial participation complicates but doesn't eliminate claims. Informed consent documents may limit liability but don't provide complete immunity. Trials must disclose known risks—undisclosed dangers remain actionable. Investigators and institutions may share liability for protocol violations or inadequate monitoring. Post-approval injuries differ from trial phase injuries legally. Trial data revealing hidden risks strengthens broader litigation. Document retention from trials provides valuable evidence. Payment received for participation doesn't waive injury claims. Special ethical duties apply to human research subjects potentially increasing liability."
    },
    {
      question: "How do product liability laws differ from medical malpractice?",
      answer: "Product liability holds manufacturers strictly liable for defective products regardless of negligence. Medical malpractice requires proving healthcare providers breached standard of care. Pharmaceutical cases don't require proving company negligence—only that drugs were defective and caused injury. No damage caps apply to pharmaceutical cases unlike California's MICRA limiting medical malpractice non-economic damages to $250,000. Statute of limitations differs—two years for product liability versus one year for medical malpractice. Expert requirements vary—product cases need causation experts while malpractice requires standard of care testimony. Recovery potential typically exceeds malpractice due to no caps and punitive damage availability."
    },
    {
      question: "What if I'm elderly or have limited life expectancy?",
      answer: "Age doesn't prevent recovery though it may affect damage calculations. Elderly plaintiffs can recover for pain, suffering, medical expenses, and reduced quality of remaining life. Limited life expectancy may reduce future economic damages but not past damages or pain and suffering. Courts recognize elderly victims deserve full justice regardless of age. Expedited trial settings may be available for plaintiffs with limited life expectancy. Estate planning ensures recovery benefits intended beneficiaries if death occurs during litigation. We pursue aggressive timelines maximizing recovery during your lifetime."
    },
    {
      question: "Should I join the current MDL or file individual lawsuit?",
      answer: "The best approach depends on your specific circumstances. MDL participation provides cost savings through shared discovery and expert witnesses, coordinated strategy against pharmaceutical companies, and potential inclusion in global settlements. Individual lawsuits offer more control over case timing, choice of jurisdiction (possibly keeping your case in California), and customized litigation strategy. Factors to consider include injury severity, available evidence, financial needs timeline, and risk tolerance. We evaluate these factors to recommend the optimal approach for maximizing your recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Component */}
      <SEO
        title="California Pharmaceutical Injury Lawyer | Dangerous Drug Attorney | Trembach Law Firm"
        description="Former defense attorney fighting pharmaceutical companies. Ozempic, dangerous drugs, FDA recalls. Free 24/7 consultation. No fees unless we win. $0 upfront costs."
        canonical="https://www.trembachlawfirm.com/practice-areas/pharmaceutical"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
        <GoBack />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Pharmaceutical Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <p className="text-xl mb-6">
              When medications meant to heal cause harm, you deserve justice. Our former defense experience reveals how pharmaceutical companies hide risks and manipulate data.
            </p>
            
            <p className="text-lg mb-8 text-yellow-300">
              Currently accepting: Ozempic, Wegovy, Mounjaro, and other GLP-1 drug injury cases
            </p>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/pharmaceutical-case-evaluation'}
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
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Pharmaceutical Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4">
                  When medications meant to heal cause harm, you deserve justice. Pharmaceutical companies generate over $1.5 trillion annually, giving them virtually unlimited resources to fight lawsuits. They employ teams of lawyers, hired experts, and public relations firms to minimize liability and protect profits. Without experienced legal representation, victims face an uphill battle against these corporate giants.
                </p>
                
                <p className="text-xl leading-relaxed">
                  At Trembach Law Firm, our former defense experience reveals exactly how pharmaceutical companies hide risks, manipulate data, and deceive regulators. We're prepared to fight for maximum compensation while you focus on treatment and recovery.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Show More About Our California Pharmaceutical Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                      Dangerous Drug Expertise
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Our team specializes in pharmaceutical litigation involving FDA recalls, black box warnings, and hidden side effects that pharmaceutical companies failed to disclose.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Former Defense Experience
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Attorney Trembach's background defending pharmaceutical companies provides unique insights into corporate defense strategies and how to overcome them.</p>
                  </CardContent>
                </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Pharmaceutical Cases?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Activity className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Active MDL Participation</h4>
                          <p className="text-sm text-muted-foreground">We actively participate in major pharmaceutical MDLs including current GLP-1 drug litigation.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Time-Critical Action</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and meet crucial deadlines before they expire.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Medical Expert Network</h4>
                          <p className="text-sm text-muted-foreground">Access to leading pharmacologists, epidemiologists, and medical specialists for expert testimony.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We advance all costs and work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Critical Information About Pharmaceutical Injuries</h3>
                    <p>
                      <strong>Time is critical in pharmaceutical injury cases.</strong> California's two-year statute of limitations begins when you discover or should have discovered your injury. However, drug injuries often develop slowly, making it essential to act quickly once symptoms appear.
                    </p>
                    
                    <p>
                      <strong>FDA approval doesn't guarantee safety.</strong> Many dangerous drugs received FDA approval based on limited clinical trials that lasted only months, while serious side effects often emerge after years of use. Pharmaceutical companies frequently hide negative trial results, manipulate data, and use ghostwritten studies to deceive regulators and doctors.
                    </p>
                    
                    <p>
                      <strong>Black box warnings—the FDA's strongest safety warning—often come too late.</strong> By the time these warnings are added, thousands of patients have already suffered irreversible harm. Currently, over 400 medications carry black box warnings, yet many doctors and patients remain unaware of these critical safety alerts.
                    </p>
                    
                    <p>
                      <strong>Your medical records are crucial evidence.</strong> Document every symptom, doctor visit, hospitalization, and medication change. Keep all pharmacy receipts, medication packaging, and correspondence with healthcare providers. This documentation becomes vital when proving causation—the link between the drug and your injury.
                    </p>
                    
                    <p>
                      <strong>Compensation in pharmaceutical cases can be substantial.</strong> Successful claims may recover medical expenses (past and future), lost wages, reduced earning capacity, pain and suffering, emotional distress, loss of consortium, and in cases of egregious corporate misconduct, punitive damages designed to punish and deter future wrongdoing.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Free Pharmaceutical Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-lg">Provide information about your pharmaceutical injury to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>First Name *</Label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <Label>Last Name *</Label>
                      <Input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label>Phone *</Label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Email *</Label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <Label>Drug/Medication Involved *</Label>
                    <Select value={formData.drugInvolved} onValueChange={(value) => setFormData(prev => ({ ...prev, drugInvolved: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select medication..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ozempic">Ozempic (semaglutide)</SelectItem>
                        <SelectItem value="wegovy">Wegovy (semaglutide)</SelectItem>
                        <SelectItem value="mounjaro">Mounjaro (tirzepatide)</SelectItem>
                        <SelectItem value="trulicity">Trulicity (dulaglutide)</SelectItem>
                        <SelectItem value="rybelsus">Rybelsus (semaglutide)</SelectItem>
                        <SelectItem value="saxenda">Saxenda (liraglutide)</SelectItem>
                        <SelectItem value="other-prescription">Other Prescription Drug</SelectItem>
                        <SelectItem value="over-counter">Over-the-Counter Medication</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label>Injury/Side Effect</Label>
                    <Textarea
                      placeholder="Describe your injury or side effects"
                      value={formData.injuryDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, injuryDescription: e.target.value }))}
                      rows={3}
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Get Free Consultation →
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do After Pharmaceutical Injury */}
            <section id="after-injury" className="content-section mb-12">
              <div className="mb-6">
                <img 
                  src={stepsAfterInjuryImage} 
                  alt="What to do after pharmaceutical injury" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-red-600 mb-6">What to Do After a Pharmaceutical Injury</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Continue medical treatment under supervision</p>
                    <p>• Never stop medication without doctor consultation</p>
                    <p>• Document all symptoms and medical visits</p>
                    <p>• Report to FDA MedWatch program</p>
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
                    <p>• Contact pharmaceutical injury attorney immediately</p>
                    <p>• Preserve all medication bottles and packaging</p>
                    <p>• Avoid speaking to insurance companies</p>
                    <p>• Keep all medical bills and pharmacy records</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.afterInjury} onOpenChange={() => toggleSection('afterInjury')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Show More Detailed Steps
                    {expandedSections.afterInjury ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>1. Continue Medical Treatment Under Supervision</h3>
                    <p>
                      Never stop taking prescribed medication without consulting your doctor. Abrupt discontinuation can cause serious withdrawal symptoms, rebound effects, or worsen your underlying condition. Work with your healthcare provider to safely adjust or discontinue medication if necessary. Document all medical visits, treatments, and conversations about your symptoms.
                    </p>
                    
                    <h3>2. Preserve All Evidence</h3>
                    <p>
                      Keep all medication bottles, packaging, receipts, and pharmacy records. Take photographs of the medication, lot numbers, and expiration dates. Save all medical bills, insurance statements, and correspondence with healthcare providers. Create a symptom diary documenting when side effects began, their severity, and how they impact your daily life.
                    </p>
                    
                    <h3>3. Report to FDA MedWatch</h3>
                    <p>
                      File an adverse event report with the FDA's MedWatch program. This creates an official record of your injury and helps identify dangerous drug patterns. While voluntary, these reports strengthen individual cases and contribute to public safety by alerting regulators to emerging drug risks.
                    </p>
                    
                    <h3>4. Document Your Damages</h3>
                    <p>
                      Track all economic losses including medical expenses, lost wages, and out-of-pocket costs. Document non-economic damages like pain levels, emotional distress, and lifestyle limitations. Keep records of missed work, cancelled activities, and relationship impacts. Photograph visible injuries or physical changes.
                    </p>
                    
                    <h3>5. Avoid Insurance Company Tactics</h3>
                    <p>
                      Pharmaceutical companies and their insurers may contact you directly. They often offer quick, lowball settlements or request recorded statements to minimize liability. Decline all communication and refer them to your attorney. Never sign releases or accept settlements without legal review.
                    </p>
                    
                    <h3>6. Understand Your Timeline</h3>
                    <p>
                      California's statute of limitations for pharmaceutical injuries is generally two years from discovery of the injury. However, the discovery rule may extend this deadline if injuries weren't immediately apparent. Some federal claims have different deadlines. Acting quickly preserves evidence and strengthens your case.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Dangerous Drugs Section */}
            <section id="dangerous-drugs" className="content-section mb-12">
              <div className="mb-6">
                <img 
                  src={dangerousDrugsImage} 
                  alt="Current dangerous drugs and active litigation" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-red-600 mb-6">Current Dangerous Drugs & Active Litigation</h2>
              <p className="text-xl mb-6">We're actively investigating and litigating cases involving these medications</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6 border-l-4 border-red-600">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Ozempic/Wegovy (Semaglutide)</h4>
                  <p className="mb-2"><strong>Manufacturer:</strong> Novo Nordisk</p>
                  <p className="mb-2"><strong>Serious Side Effects:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Gastroparesis (stomach paralysis)</li>
                    <li>Intestinal obstruction/ileus</li>
                    <li>NAION (vision loss)</li>
                    <li>Pancreatitis</li>
                    <li>Gallbladder disease</li>
                    <li>Kidney damage</li>
                  </ul>
                  <p><strong>MDL Status:</strong> Active (MDL 3094)</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-red-600">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Mounjaro (Tirzepatide)</h4>
                  <p className="mb-2"><strong>Manufacturer:</strong> Eli Lilly</p>
                  <p className="mb-2"><strong>Serious Side Effects:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Severe gastrointestinal issues</li>
                    <li>Thyroid tumors</li>
                    <li>Vision problems</li>
                    <li>Severe dehydration</li>
                    <li>Kidney problems</li>
                  </ul>
                  <p><strong>Status:</strong> Under investigation</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-red-600">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Trulicity (Dulaglutide)</h4>
                  <p className="mb-2"><strong>Manufacturer:</strong> Eli Lilly</p>
                  <p className="mb-2"><strong>Serious Side Effects:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Stomach paralysis</li>
                    <li>Persistent vomiting</li>
                    <li>Severe abdominal pain</li>
                    <li>Pancreatic cancer risk</li>
                  </ul>
                  <p><strong>MDL Status:</strong> Consolidated with GLP-1 litigation</p>
                </Card>
                
                <Card className="p-6 border-l-4 border-red-600">
                  <h4 className="text-xl font-bold text-red-600 mb-3">Elmiron (Pentosan)</h4>
                  <p className="mb-2"><strong>Manufacturer:</strong> Janssen Pharmaceuticals</p>
                  <p className="mb-2"><strong>Serious Side Effects:</strong></p>
                  <ul className="list-disc ml-6 mb-3">
                    <li>Pigmentary maculopathy</li>
                    <li>Vision loss/blindness</li>
                    <li>Retinal damage</li>
                    <li>Night blindness</li>
                  </ul>
                  <p><strong>Status:</strong> Active litigation</p>
                </Card>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="The pharmaceutical litigation process" 
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-red-600 mb-6">The Pharmaceutical Litigation Process</h2>
              <p className="text-xl mb-6">Understanding each step from initial consultation to resolution</p>
              
              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Show Detailed Legal Process
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Phase 1: Case Evaluation (Days 1-7)</h3>
                    <p>
                      We begin with a comprehensive free consultation reviewing your medical history, medication usage, injuries, and damages. Our pharmaceutical injury team analyzes medical records, pharmacy data, and FDA databases to establish causation. We identify all potentially liable parties and assess your case value based on similar verdicts and settlements. This initial evaluation determines litigation strategy and whether individual lawsuit or MDL participation best serves your interests.
                    </p>
                    
                    <h3>Phase 2: Investigation & Evidence Collection (Weeks 1-8)</h3>
                    <p>
                      Our investigators gather critical evidence including complete medical records, pharmacy dispensing records, and insurance claims. We obtain FDA adverse event reports, clinical trial data, and internal company documents through discovery. Expert witnesses including physicians, pharmacologists, and epidemiologists review your case to establish causation. We document all damages through medical evaluations, economic analysis, and life care planning for future needs.
                    </p>
                    
                    <h3>Phase 3: Filing Your Claim (Weeks 8-12)</h3>
                    <p>
                      We prepare and file your lawsuit in the appropriate jurisdiction—California state court, federal court, or transfer to existing MDL. The complaint details factual allegations, legal theories (strict liability, negligence, failure to warn), and damage claims. Defendants typically include drug manufacturers, distributors, and potentially healthcare providers. Filing triggers the litigation timeline and preserves your rights before statute of limitations expires.
                    </p>
                    
                    <h3>Phase 4: Discovery Process (Months 3-12)</h3>
                    <p>
                      Discovery involves exchanging information with defendants through document requests, interrogatories, and depositions. We request internal company communications, clinical trial data, FDA correspondence, and marketing materials. Pharmaceutical companies often claim privilege over damaging documents, requiring court intervention. Expert depositions establish causation while company representative depositions reveal corporate knowledge and decision-making processes.
                    </p>
                    
                    <h3>Phase 5: Settlement Negotiations or Trial (Months 12-24)</h3>
                    <p>
                      Most pharmaceutical cases settle before trial through individual negotiations or global MDL settlements. We evaluate settlement offers against trial prospects, considering case strengths, weaknesses, and client needs. If settlement isn't acceptable, we prepare for trial with expert witness preparation, jury selection, and trial strategy. California state courts often provide more favorable venues than federal courts for pharmaceutical litigation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold">{faq.question}</h4>
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                      </div>
                    </CardHeader>
                    
                    <Collapsible open={expandedFaq === index}>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground leading-relaxed text-lg">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Pharmaceutical Injury Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-lg">Estimate your potential pharmaceutical injury compensation based on your specific circumstances.</p>
                    <Button
                      className="w-full text-foreground"
                      onClick={() => window.location.href = '/pharmaceutical-compensation-calculator'}
                    >
                      <span className="text-foreground">Calculate My Case Value</span>
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <BookOpen className="w-5 h-5 mr-2 text-primary" />
                      Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-lg">Essential medical information and guidance for pharmaceutical injury victims.</p>
                    <Button
                      className="w-full text-foreground"
                      onClick={() => window.location.href = '/pharmaceutical-medical-guidance'}
                    >
                      <span className="text-foreground">View Medical Guide</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section mb-12 bg-red-600 text-white p-8 rounded-lg">
              <h2 className="text-4xl font-bold mb-4">Don't Wait - Time Limits Apply for California</h2>
              <p className="text-xl mb-4">
                California's statute of limitations for pharmaceutical injury cases is typically two years from discovery of the injury. Acting quickly preserves crucial evidence and protects your rights.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">⏰ Why Time Matters:</h3>
                  <ul className="space-y-2">
                    <li>• Evidence deteriorates over time</li>
                    <li>• Witness memories fade</li>
                    <li>• Medical records may be destroyed</li>
                    <li>• Pharmaceutical companies destroy documents</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">🛡️ We Protect Your Rights:</h3>
                  <ul className="space-y-2">
                    <li>• Free case evaluation within 24 hours</li>
                    <li>• Immediate evidence preservation</li>
                    <li>• No fees unless we win</li>
                    <li>• Former defense experience on your side</li>
                  </ul>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button 
                  size="lg" 
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-bold px-8 py-4"
                  onClick={() => window.location.href = '/pharmaceutical-case-evaluation'}
                >
                  START MY FREE CASE EVALUATION NOW
                </Button>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              
              {/* 3 Ways to Start Your Case */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-center text-xl font-bold text-red-600">
                    3 Ways to Start Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4" />
                    <span className="text-white">Call (818) 123-4567</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 text-foreground hover:text-foreground"
                    onClick={() => window.location.href = '/pharmaceutical-case-evaluation'}
                  >
                    <FileText className="w-4 h-4" />
                    <span className="text-foreground">Free Case Evaluation</span>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full flex items-center justify-center gap-2 text-foreground hover:text-foreground"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4" />
                    <span className="text-foreground">Email Us</span>
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">1,000+ Drug Recalls Annually</span>
                  </div>
                  <div className="flex items-center">
                    <Activity className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">2,676 Current Ozempic MDL Cases</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">2 Years CA Statute of Limitations</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-red-600 mr-2" />
                    <span className="text-sm">$500K+ Average Top-Tier Settlement</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <img 
                      src={sidebarImage} 
                      alt="Pharmaceutical injury consultation" 
                      className="w-full h-32 object-cover rounded-lg mb-3"
                    />
                  </div>
                  <div className="space-y-2 text-sm">
                    <p><strong>Trembach Law Firm, APC</strong></p>
                    <p>27001 Agoura Road, Suite 350<br />Calabasas, CA 91301</p>
                    <p>📞 <a href="tel:8181234567" className="text-red-600 hover:underline">Call (818) 123-4567</a></p>
                    <p>✉️ <a href="mailto:info@trembachlawfirm.com" className="text-red-600 hover:underline">info@trembachlawfirm.com</a></p>
                    <p className="text-xs text-muted-foreground mt-3">
                      Available 24/7 • No Fees Unless We Win • Free Consultation
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-600 text-white">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <AlertTriangle className="w-8 h-8 mx-auto mb-2" />
                    <h3 className="font-bold mb-2">Need Immediate Help?</h3>
                    <p className="text-sm mb-4">
                      If you're experiencing a pharmaceutical emergency, call 911 first, then contact us.
                    </p>
                    <Button 
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call Now: (818) 123-4567
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pharmaceutical;