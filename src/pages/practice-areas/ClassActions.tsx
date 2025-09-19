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
  Calculator,
  DollarSign,
  Gavel
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/class-actions-hero.jpg';
import sidebarImage from '@/assets/practice-areas/class-actions-evaluation.jpg';
import typesImage from '@/assets/practice-areas/class-actions-types.jpg';
import legalProcessImage from '@/assets/practice-areas/class-actions-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/class-actions-compensation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ClassActions: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    caseType: '',
    incidentDate: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'types', label: 'TYPES OF CASES', icon: Gavel },
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
    window.location.href = '/class-actions-case-evaluation';
  };

  const faqs = [
    {
      question: "What is a class action lawsuit?",
      answer: "A class action is a legal proceeding where one or more plaintiffs sue on behalf of a larger group with similar claims. It allows efficient resolution of numerous similar cases while ensuring consistent outcomes for all affected parties."
    },
    {
      question: "How do I know if I qualify for a class action?",
      answer: "You may qualify if you've suffered similar harm as other class members from the same defendant's actions. Common indicators include receiving recall notices, experiencing data breaches, purchasing defective products, or facing employment violations."
    },
    {
      question: "What's the difference between class action and mass tort?",
      answer: "In class actions, plaintiffs are treated collectively with uniform compensation. Mass torts treat each plaintiff individually, allowing personalized compensation based on specific damages while still benefiting from coordinated litigation."
    },
    {
      question: "How much does it cost to join a class action?",
      answer: "Nothing. Class action attorneys work on contingency, meaning no upfront costs or fees unless the case succeeds. Attorney fees are paid from the settlement or judgment, typically 25-33% as approved by the court."
    },
    {
      question: "How long do class action lawsuits take?",
      answer: "Class actions typically take 1-3 years, though complex cases may take longer. Factors include case complexity, number of defendants, discovery scope, settlement negotiations, and court schedules."
    },
    {
      question: "Can I opt out of a class action?",
      answer: "Yes, in most cases you can opt out to preserve your right to file an individual lawsuit. The class notice will explain opt-out procedures and deadlines. Consider consulting an attorney before opting out."
    },
    {
      question: "What happens if I do nothing after receiving a class action notice?",
      answer: "If you don't opt out, you remain in the class and are bound by the outcome. You'll be eligible for any settlement or judgment but lose the right to file an individual lawsuit for the same claims."
    },
    {
      question: "How is compensation distributed in class actions?",
      answer: "Distribution depends on the settlement terms. Methods include pro rata (equal shares), claims-made (submit proof), or tiered (based on harm severity). A court-appointed administrator handles the distribution process."
    },
    {
      question: "What is a bellwether trial?",
      answer: "Bellwether trials are test cases in mass torts that help establish settlement values. A few representative cases go to trial, and outcomes guide settlement negotiations for remaining cases."
    },
    {
      question: "What is multidistrict litigation (MDL)?",
      answer: "MDL consolidates similar federal cases before one judge for pretrial proceedings. It promotes efficiency while preserving individual cases. After pretrial, cases may settle, get dismissed, or return to original courts for trial."
    },
    {
      question: "Can I still join a class action after it's filed?",
      answer: "It depends on the case status. Before class certification, you may be able to join. After certification, the class definition and time period determine eligibility. Some settlements allow late claims with good cause."
    },
    {
      question: "What damages can I recover in a class action?",
      answer: "Recoverable damages include economic losses, statutory damages, punitive damages, and injunctive relief. Specific recovery depends on applicable laws, harm suffered, and settlement negotiations or trial outcomes."
    },
    {
      question: "Do I need to testify in a class action?",
      answer: "Rarely. Class representatives and a few class members may testify or give depositions. Most class members simply submit claim forms after settlement. Your attorney will prepare you if testimony is needed."
    },
    {
      question: "What is class certification?",
      answer: "Class certification is the court's approval for a case to proceed as a class action. The judge determines if Rule 23 requirements are met: numerosity, commonality, typicality, adequacy, predominance, and superiority."
    },
    {
      question: "Can class actions be filed in state and federal court?",
      answer: "Yes. Federal courts handle nationwide classes and federal law claims. State courts handle state law claims and smaller classes. The Class Action Fairness Act (CAFA) allows removal of large state cases to federal court."
    },
    {
      question: "What is a settlement class?",
      answer: "A settlement class is certified solely for settlement purposes when parties reach agreement before litigation. The court still reviews the settlement for fairness, adequacy, and reasonableness to protect class interests."
    },
    {
      question: "How are attorneys' fees determined?",
      answer: "Courts approve attorney fees using either percentage method (typically 25-33% of settlement) or lodestar method (hourly rates multiplied by hours worked). Fees must be reasonable considering case complexity, risk, and results."
    },
    {
      question: "What happens to unclaimed settlement funds?",
      answer: "Unclaimed funds may be distributed through cy pres (to related charities), additional distribution to claiming class members, reversion to defendant, or held for late claims. Courts determine appropriate disposition."
    },
    {
      question: "Can I object to a class action settlement?",
      answer: "Yes. Class members can file written objections before the fairness hearing explaining why the settlement is inadequate. You may also appear at the hearing. The court considers all objections before approval."
    },
    {
      question: "What is a fairness hearing?",
      answer: "A fairness hearing is where the judge reviews the proposed settlement to ensure it's fair, reasonable, and adequate for the class. Class members can voice support or objections before final approval."
    },
    {
      question: "Are class action settlements taxable?",
      answer: "It depends on the damages type. Physical injury compensation is generally not taxable. Punitive damages, interest, and certain economic losses may be taxable. Consult a tax professional for specific guidance."
    },
    {
      question: "Can immigrants participate in class actions?",
      answer: "Yes. Immigration status generally doesn't affect class action participation. California and federal laws protect all victims regardless of status. Your information remains confidential and protected by attorney-client privilege."
    },
    {
      question: "What is a lead plaintiff or class representative?",
      answer: "Lead plaintiffs represent the entire class's interests. They work closely with attorneys, may give depositions or testify, and receive incentive awards for their service to the class."
    },
    {
      question: "How do I file a claim in a class action settlement?",
      answer: "Follow instructions in the class notice. Typically involves completing a claim form online or by mail, providing required documentation, and submitting before the deadline. The claims administrator processes and validates claims."
    },
    {
      question: "What if I miss the claim deadline?",
      answer: "Missing deadlines usually bars recovery unless you show good cause (serious illness, not receiving notice). Some settlements allow late claims with reduced compensation. Contact the claims administrator immediately if you miss a deadline."
    },
    {
      question: "Can I participate in multiple related class actions?",
      answer: "Generally no. Settlements typically release all related claims. However, you might participate in separate cases for different harms or time periods. Review each case's scope carefully with an attorney."
    },
    {
      question: "What is a PAGA claim?",
      answer: "Private Attorney General Act allows California employees to sue employers for labor code violations on behalf of themselves and other employees. It's similar to class actions but with different procedures and penalties."
    },
    {
      question: "How are data breach class actions different?",
      answer: "Data breach cases often involve proving actual harm from exposed information. California's CCPA provides statutory damages ($100-$750) without proving actual damages, making these cases more viable than in other states."
    },
    {
      question: "What is a consumer class action?",
      answer: "Consumer class actions address widespread harm from defective products, false advertising, hidden fees, or unfair business practices. California's strong consumer protection laws provide powerful remedies including restitution and injunctive relief."
    },
    {
      question: "Can businesses join class actions?",
      answer: "Yes. Businesses can be class members in antitrust cases, supplier disputes, or B2B fraud. Small businesses often join class actions against larger companies for price-fixing or anticompetitive practices."
    },
    {
      question: "What are statutory damages?",
      answer: "Statutory damages are preset amounts established by law regardless of actual harm. Examples include TCPA ($500-$1,500 per robocall), FCRA violations ($100-$1,000), and California privacy breaches ($100-$750)."
    },
    {
      question: "What is injunctive relief in class actions?",
      answer: "Injunctive relief requires defendants to change practices, recall products, or provide warnings. It benefits all class members by preventing future harm beyond monetary compensation."
    },
    {
      question: "Can I start my own class action?",
      answer: "Anyone can initiate a class action if they've suffered harm affecting many others similarly. Contact an experienced class action attorney to evaluate whether your case meets certification requirements."
    },
    {
      question: "What's the statute of limitations for class actions?",
      answer: "Varies by claim type: personal injury (2 years), property damage (3 years), fraud (3 years from discovery), breach of written contract (4 years). Class action filing may toll the statute for class members."
    },
    {
      question: "How do I find out about class action settlements?",
      answer: "Courts require direct notice when possible through mail or email. Additional notice through publication, websites, and social media. Check settlement websites, legal news sites, or contact attorneys for current cases."
    },
    {
      question: "What if the defendant goes bankrupt?",
      answer: "Bankruptcy doesn't necessarily end claims. Class members become creditors with priority depending on claim type. Trust funds may be established for future claimants, especially in mass tort cases."
    },
    {
      question: "Can I switch attorneys during a class action?",
      answer: "Individual class members don't have personal attorneys in class actions. However, you can hire separate counsel to protect your interests, object to settlements, or pursue individual claims if you opt out."
    },
    {
      question: "What is a claims administrator?",
      answer: "A neutral third party appointed by the court to handle settlement administration including sending notices, processing claims, calculating payments, and distributing funds according to court-approved procedures."
    },
    {
      question: "Are punitive damages available in class actions?",
      answer: "Yes, when defendants acted with malice, oppression, or fraud. California allows punitive damages to punish wrongdoing and deter future misconduct. Courts carefully review punitive awards for constitutional limits."
    },
    {
      question: "What's the difference between opt-in and opt-out classes?",
      answer: "Opt-out (Rule 23(b)(3)): Automatically included unless you exclude yourself. Opt-in: Must affirmatively join, common in employment cases under Fair Labor Standards Act. California follows opt-out for most class actions."
    },
    {
      question: "Can minors be class members?",
      answer: "Yes. Parents or guardians act on their behalf. Settlements involving minors may require special court approval (minor's compromise) ensuring the settlement serves the child's best interests."
    },
    {
      question: "What is cy pres distribution?",
      answer: "When direct distribution to class members is impractical, funds go to organizations whose work benefits the class indirectly. Common in small-value consumer cases where distribution costs exceed individual payments."
    },
    {
      question: "How do appeals work in class actions?",
      answer: "Parties can appeal class certification, settlement approval, or trial verdicts. Objectors can appeal settlement approval. Appeals delay resolution but may improve outcomes. Most circuits allow immediate appeal of certification decisions."
    },
    {
      question: "What evidence do I need for a class action?",
      answer: "Keep all documentation: receipts, contracts, communications, medical records, employment documents. Class counsel handles most evidence gathering through discovery, but your documents help establish the claim."
    },
    {
      question: "Can I join a class action if I signed an arbitration agreement?",
      answer: "Arbitration agreements may prevent class action participation, but exceptions exist. California law limits arbitration enforcement in certain contexts. Mass arbitration strategies may provide alternatives. Consult an attorney about your specific agreement."
    },
    {
      question: "What happens after a class action settles?",
      answer: "Notice sent to class members, claim period opens (typically 60-90 days), claims reviewed and validated, payments calculated and distributed, unclaimed funds handled per court order, case closed after all distributions complete."
    },
    {
      question: "Are there risks in joining a class action?",
      answer: "Minimal risks exist. Main consideration: you typically can't pursue individual claims for same issues. No financial risk as attorneys work on contingency. Participating doesn't affect credit or create public records."
    },
    {
      question: "How do I know if a class action notice is legitimate?",
      answer: "Legitimate notices include case name, court information, claim deadlines, and administrator contact details. Verify through court websites or PACER. Be wary of requests for upfront payments or sensitive information beyond basic claim data."
    },
    {
      question: "Can I participate if I moved from California?",
      answer: "Usually yes if you were a California resident when harmed or the conduct occurred in California. Class definitions determine eligibility. Current residence rarely affects participation in cases based on past events."
    },
    {
      question: "What makes California favorable for class actions?",
      answer: "Strong consumer protection laws, employee-friendly labor code, broad standing requirements, availability of statutory damages, fee-shifting provisions, and courts experienced with complex litigation make California plaintiff-friendly."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Class Action Lawyers | Consumer Rights & Mass Litigation | Trembach Law Firm"
        description="Join forces against corporate wrongdoing. California class action attorneys fighting for consumer rights, data breaches, defective products, employment violations. Free consultation."
        canonical="/class-actions"
      />
      
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
              California Class Action Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting Corporate Wrongdoing</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/class-actions-case-evaluation'}
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
              <h2 className="text-4xl font-bold text-red-600 mb-6">California Class Action Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When corporations harm numerous people through the same wrongful conduct, class action lawsuits provide a powerful tool for justice. These cases unite victims with similar claims against defendants who would otherwise escape accountability due to the small individual damages or high cost of litigation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we represent California consumers, employees, and businesses in class action lawsuits against corporations that prioritize profits over people. Our experience includes consumer fraud, data breaches, employment violations, defective products, and antitrust cases.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-foreground">
                    Learn More About Class Action Cases
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Users className="w-5 h-5 mr-2 text-primary" />
                          Collective Strength
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Class actions unite individuals with similar grievances, making justice accessible when individual lawsuits would be impractical or too costly against powerful corporations.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Corporate Accountability
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We hold negligent companies accountable for defective products, false advertising, data breaches, employment violations, and unfair business practices.</p>
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
                          <h4 className="font-semibold">Efficient Resolution</h4>
                          <p className="text-sm text-muted-foreground">We understand class action procedures and work to secure fair settlements efficiently.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Class Member Support</h4>
                          <p className="text-sm text-muted-foreground">We keep class members informed throughout the litigation process.</p>
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
                    <h3>Understanding Class Actions vs. Mass Torts</h3>
                    <p>
                      Class actions treat plaintiffs as one collective group with uniform compensation, making them ideal for widespread harm with similar damages. Mass torts treat each plaintiff individually while benefiting from coordinated litigation, allowing personalized compensation based on specific damages.
                    </p>
                    
                    <p>
                      California's strong consumer protection laws, including the Unfair Competition Law, False Advertising Law, and Consumer Legal Remedies Act, provide powerful tools for class action litigation. These statutes allow recovery of actual damages, restitution, injunctive relief, and attorney fees.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6 text-lg">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Incident Date</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                        required
                        className="text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Case Type</label>
                      <Select value={formData.caseType} onValueChange={(value) => setFormData(prev => ({ ...prev, caseType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="defective-product">Defective Product</SelectItem>
                          <SelectItem value="data-breach">Data Breach</SelectItem>
                          <SelectItem value="consumer-fraud">Consumer Fraud</SelectItem>
                          <SelectItem value="employment-violation">Employment Violation</SelectItem>
                          <SelectItem value="environmental-exposure">Environmental Exposure</SelectItem>
                          <SelectItem value="pharmaceutical">Pharmaceutical/Medical Device</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 text-lg">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* Types of Cases Section */}
            <section id="types" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Types of Class Action Cases We Handle</h2>
              
              <div className="mb-8">
                <img src={typesImage} alt="Types of Class Action Cases" className="w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
              </div>

              <div className="space-y-6">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left text-lg p-4 h-auto">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">💊</div>
                        <span>Pharmaceutical & Medical Device Cases</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                      <p className="text-lg">Dangerous drugs and defective medical devices harm thousands annually. We pursue cases involving:</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>Defective Hip/Knee Replacements:</strong> Metal-on-metal implants causing tissue damage and systemic toxicity</li>
                        <li><strong>Surgical Mesh Complications:</strong> Transvaginal and hernia mesh erosion, migration, and organ perforation</li>
                        <li><strong>Dangerous Pharmaceuticals:</strong> Drugs with undisclosed side effects, contamination, or inadequate warnings</li>
                        <li><strong>IVC Filter Failures:</strong> Migration, fracture, and perforation requiring emergency surgery</li>
                        <li><strong>Insulin Pump Defects:</strong> Malfunctions causing severe hypoglycemia or diabetic ketoacidosis</li>
                      </ul>
                      <Button variant="outline" className="mt-4" onClick={() => window.location.href = '/class-actions-legal-guidance'}>
                        Learn More About Pharmaceutical Cases
                      </Button>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left text-lg p-4 h-auto">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">🔒</div>
                        <span>Data Breach & Privacy Violations</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                      <p className="text-lg">Personal data exposure affects millions annually through corporate negligence. We handle:</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>Major Data Breaches:</strong> Retail, healthcare, financial, and government system compromises</li>
                        <li><strong>Identity Theft:</strong> Social Security numbers, credit cards, and financial account exposure</li>
                        <li><strong>HIPAA Violations:</strong> Medical records and health information unauthorized disclosure</li>
                        <li><strong>Biometric Privacy:</strong> Illegal collection of fingerprints, facial recognition, and DNA data</li>
                        <li><strong>Consumer Privacy:</strong> Unauthorized data sales, tracking, and surveillance</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left text-lg p-4 h-auto">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">🛍️</div>
                        <span>Consumer Fraud & False Advertising</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                      <p className="text-lg">Deceptive business practices cost consumers billions annually. We pursue cases involving:</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>False Advertising:</strong> Misleading claims about product capabilities, ingredients, or benefits</li>
                        <li><strong>Hidden Fees:</strong> Undisclosed charges, automatic renewals, and subscription traps</li>
                        <li><strong>Bait and Switch:</strong> Advertising unavailable products to sell alternatives</li>
                        <li><strong>Price Fixing:</strong> Illegal agreements to maintain artificially high prices</li>
                        <li><strong>Warranty Fraud:</strong> Denial of valid warranty claims or selling worthless warranties</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left text-lg p-4 h-auto">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">💼</div>
                        <span>Employment & Wage Violations</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                      <p className="text-lg">California's strong labor laws protect workers from exploitation. We handle:</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>Unpaid Wages:</strong> Overtime violations, off-the-clock work, minimum wage violations</li>
                        <li><strong>Meal/Rest Breaks:</strong> Denial of required breaks and meal periods</li>
                        <li><strong>Misclassification:</strong> Treating employees as independent contractors to avoid benefits</li>
                        <li><strong>Discrimination:</strong> Race, gender, age, disability, and other protected class violations</li>
                        <li><strong>PAGA Claims:</strong> Private Attorney General Act penalties for labor code violations</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between text-left text-lg p-4 h-auto">
                      <div className="flex items-center">
                        <div className="text-2xl mr-3">🌍</div>
                        <span>Environmental & Toxic Exposure</span>
                      </div>
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4">
                    <div className="bg-muted p-6 rounded-lg space-y-4">
                      <p className="text-lg">Chemical and environmental exposure causes serious health impacts. We pursue cases for:</p>
                      <ul className="list-disc list-inside space-y-2 text-foreground">
                        <li><strong>Water Contamination:</strong> PFAS, lead, industrial chemicals in drinking water</li>
                        <li><strong>Air Pollution:</strong> Refinery emissions, chemical releases, particulate matter</li>
                        <li><strong>Soil Contamination:</strong> Heavy metals, pesticides, industrial waste</li>
                        <li><strong>Toxic Products:</strong> Asbestos, benzene, formaldehyde in consumer goods</li>
                        <li><strong>Occupational Exposure:</strong> Workplace chemicals causing cancer and disease</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">The Class Action Legal Process</h2>
              
              <div className="mb-8">
                <img src={legalProcessImage} alt="Class Action Legal Process" className="w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">California Class Action Requirements (Rule 23)</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Numerosity</h4>
                      <p className="text-sm text-muted-foreground">The class must be so large that individual lawsuits would be impractical.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Commonality</h4>
                      <p className="text-sm text-muted-foreground">Class members must share common questions of law or fact.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Typicality</h4>
                      <p className="text-sm text-muted-foreground">The representative plaintiff's claims must be typical of the class.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Adequacy</h4>
                      <p className="text-sm text-muted-foreground">The representative must fairly protect the class's interests.</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">Your Rights as a Class Member</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Right to Notice</h4>
                      <p className="text-sm text-muted-foreground">Clear notice about the lawsuit and your options for participation.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Right to Opt Out</h4>
                      <p className="text-sm text-muted-foreground">Exclude yourself to preserve individual lawsuit rights.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Right to Object</h4>
                      <p className="text-sm text-muted-foreground">Object to settlements or attorney fees at fairness hearings.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Right to Compensation</h4>
                      <p className="text-sm text-muted-foreground">Your share of settlements or judgments according to distribution plans.</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass-card bg-gradient-to-r from-primary/10 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">California Consumer Protection Statutes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary">Business & Professions Code § 17200</h4>
                        <p className="text-sm text-muted-foreground">Unfair Competition Law - Prohibits unlawful, unfair, or fraudulent business practices</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Business & Professions Code § 17500</h4>
                        <p className="text-sm text-muted-foreground">False Advertising Law - Prohibits untrue or misleading statements in advertising</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Civil Code § 1750</h4>
                        <p className="text-sm text-muted-foreground">Consumers Legal Remedies Act - Protects against unfair methods of competition</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary">Labor Code § 2698</h4>
                        <p className="text-sm text-muted-foreground">Private Attorney General Act - Allows employees to sue for labor code violations</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Civil Code § 1798.150</h4>
                        <p className="text-sm text-muted-foreground">California Consumer Privacy Act - Creates private right of action for data breaches</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Civil Code § 1790</h4>
                        <p className="text-sm text-muted-foreground">Song-Beverly Act - California's Lemon Law for defective vehicles and goods</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground mb-8">50 Common Questions About Class Actions</p>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <button
                        className="w-full text-left flex justify-between items-center text-lg font-semibold text-foreground hover:text-primary transition-colors"
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      >
                        {faq.question}
                        <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} />
                      </button>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-foreground leading-relaxed text-lg">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-4xl font-bold text-red-600 mb-6">Class Action Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Calculator className="w-5 h-5 mr-2 text-primary" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Estimate potential compensation for your class action case based on case type and damages.</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/class-actions-compensation-calculator'}
                    >
                      Calculate Compensation
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Legal Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Comprehensive guides about class action litigation, legal rights, and the legal process.</p>
                    <Button 
                      variant="outline"
                      className="w-full"
                      onClick={() => window.location.href = '/class-actions-legal-guidance'}
                    >
                      Get Legal Guidance
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-md">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                    <img src={sidebarImage} alt="Class Action Legal Help" className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-2xl text-primary">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Phone className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Call Now</h3>
                    <p className="text-sm text-muted-foreground mb-3">Speak directly with our class action attorneys</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all font-bold text-primary border-primary"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
        <span className="text-primary hover:text-primary-foreground">Call (818) 123-4567</span>
                    </Button>
                  </div>

                  <div className="text-center">
                    <Mail className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Email Us</h3>
                    <p className="text-sm text-muted-foreground mb-3">Send us details about your case</p>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full hover:bg-primary hover:text-primary-foreground transition-all font-bold text-primary border-primary"
                      onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Class Action Case Inquiry'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-primary hover:text-primary-foreground">Send Email</span>
                    </Button>
                  </div>

                  <div className="text-center">
                    <FileText className="w-12 h-12 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold text-primary text-lg mb-2">Online Form</h3>
                    <p className="text-sm text-muted-foreground mb-3">Complete our detailed case evaluation</p>
                    <Button 
                      size="lg" 
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                      onClick={() => window.location.href = '/class-actions-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Start Evaluation
                    </Button>
                  </div>

                  {/* Quick Facts */}
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Quick Facts</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-semibold text-sm">Time Limits Apply</h4>
                          <p className="text-sm text-muted-foreground">Statutes of limitations vary by case type</p>
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
                        <Users className="w-5 h-5 text-primary mt-0.5 mr-3" />
                        <div>
                          <h4 className="font-semibold text-sm">Strength in Numbers</h4>
                          <p className="text-sm text-muted-foreground">Join with others for maximum impact</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Class Actions
          </h2>
          <p className="text-xl mb-8">
            California has strict statutes of limitations for class action cases. Missing these deadlines could forever bar your right to compensation. Contact us today for your free consultation.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <Button 
              size="lg" 
              className="bg-background text-primary hover:bg-muted border-2 border-background font-bold px-8 py-4 shadow-lg transition-all duration-300"
              onClick={() => window.location.href = '/class-actions-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              size="lg" 
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 transition-all duration-300"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white hover:text-red-600 transition-colors">Call (818) 123-4567</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassActions;