import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Flame,
  Activity,
  TrendingUp
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/burn-injuries.jpg';
import whatToDoImage from '@/assets/practice-areas/burn-injuries.jpg';
import burnTypesImage from '@/assets/practice-areas/burn-injuries.jpg';
import provingNegligenceImage from '@/assets/hero-background-scales.jpg';
import compensationImage from '@/assets/practice-areas/courthouse-professional.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BurnInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'burn-types', label: 'BURN TYPES', icon: Flame },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

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
    window.location.href = '/burn-injuries-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    // Legal Rights & Process Questions
    {
      category: "Legal Rights & Process Questions",
      question: "How long do I have to file a burn injury lawsuit in California?",
      answer: "California's statute of limitations gives you 2 years from the date of your burn injury to file a personal injury lawsuit. However, important exceptions exist: if you're suing a government entity, you must file an administrative claim within 6 months. Minors have until 2 years after turning 18. The discovery rule may extend the deadline if injuries weren't immediately apparent. Missing these deadlines typically bars recovery forever, making immediate legal consultation crucial."
    },
    {
      category: "Legal Rights & Process Questions",
      question: "Can I sue for a burn injury if I was partially at fault?",
      answer: "Yes, California follows pure comparative negligence rules, allowing recovery even if you're 99% at fault. Your compensation reduces by your fault percentage. For example, if damages total $1 million but you're 30% at fault, you'd recover $700,000. Insurance companies aggressively argue comparative fault to minimize payouts. Our attorneys counter these tactics by thoroughly investigating all contributing factors and minimizing your assigned fault percentage."
    },
    {
      category: "Legal Rights & Process Questions",
      question: "What if the person who caused my burns doesn't have insurance?",
      answer: "Multiple recovery options exist beyond the at-fault party's insurance: your own homeowner's or renter's insurance may provide coverage, umbrella policies offer additional protection, employer liability for employee actions, property owner liability for dangerous conditions, product manufacturer liability for defects, and personal assets of wealthy defendants. We investigate all potential sources to maximize your recovery."
    },
    {
      category: "Legal Rights & Process Questions",
      question: "Should I talk to the insurance company after my burn injury?",
      answer: "Never speak with insurance adjusters without legal representation. They record conversations to use against you, twist statements to imply fault, and pressure quick settlements before you understand your injuries' full extent. Refer all communications to your attorney. We handle all insurance negotiations, protecting your interests while you focus on recovery."
    },
    {
      category: "Legal Rights & Process Questions",
      question: "How much does it cost to hire a burn injury lawyer?",
      answer: "Nothing upfront. We work on contingency, meaning we only get paid if we win your case. Our fee is typically 33-40% of the recovery. We advance all costs including filing fees, expert witnesses, medical record retrieval, and investigation expenses. You never pay anything out of pocket, eliminating financial barriers to justice."
    },
    // Medical & Treatment Questions
    {
      category: "Medical & Treatment Questions",
      question: "What are the different degrees of burns and their implications?",
      answer: "First-degree burns affect only the epidermis, causing redness and pain, typically healing within a week. Second-degree burns reach the dermis, causing blisters, severe pain, and potential scarring. Third-degree burns destroy all skin layers, appearing white or charred, requiring skin grafts. Fourth-degree burns extend into muscle and bone, often necessitating amputation. Severity affects both treatment complexity and compensation amounts."
    },
    {
      category: "Medical & Treatment Questions",
      question: "Where are California's specialized burn treatment centers?",
      answer: "California has 13 verified burn centers: UC Davis Regional Burn Center (Sacramento), Shriners Hospital NorCal (Sacramento), Saint Francis Bothin Burn Center (San Francisco), Santa Clara Valley Medical Center (San Jose), UC San Diego Regional Burn Center, UC Irvine Regional Burn Center, LAC+USC Burn Center, and others. These facilities provide specialized care including ICU treatment, hyperbaric oxygen therapy, and reconstruction surgery."
    },
    {
      category: "Medical & Treatment Questions",
      question: "What is the Total Body Surface Area (TBSA) rule?",
      answer: "TBSA percentage determines burn severity using the 'Rule of Nines': head/neck 9%, each arm 9%, chest 9%, abdomen 9%, upper back 9%, lower back 9%, each leg 18%, genitals 1%. Burns exceeding 10% TBSA in adults or 5% in children require specialized burn center treatment. TBSA directly impacts case value and required medical care."
    },
    {
      category: "Medical & Treatment Questions",
      question: "What long-term medical care do burn victims need?",
      answer: "Burn recovery often requires years of treatment: multiple reconstructive surgeries, skin grafts and tissue expansion, physical/occupational therapy, psychological counseling for trauma, pain management programs, compression garments, specialized wound care, and scar revision procedures. We work with life care planners to document all future medical needs, ensuring settlements cover lifetime care costs."
    },
    {
      category: "Medical & Treatment Questions",
      question: "Can I afford medical treatment while my case is pending?",
      answer: "Yes. We connect clients with doctors accepting liens, meaning payment comes from your settlement. Health insurance, medical payments coverage, and state disability benefits provide immediate support. We negotiate with providers to delay billing and arrange payment plans. Never delay treatment due to cost concerns - proper medical care strengthens your case."
    },
    // Compensation & Settlement Questions
    {
      category: "Compensation & Settlement Questions",
      question: "What compensation can I receive for my burn injuries?",
      answer: "Economic damages include all medical expenses (emergency care, hospitalization, surgeries, medications), future medical costs, lost wages and benefits, reduced earning capacity, and home/vehicle modifications. Non-economic damages cover pain and suffering, emotional distress, disfigurement, loss of enjoyment, and impact on relationships. Severe cases may warrant punitive damages for egregious negligence."
    },
    {
      category: "Compensation & Settlement Questions",
      question: "How much is my burn injury case worth?",
      answer: "Case values vary significantly based on burn severity (degree and TBSA), location (face/hands worth more), age and occupation, permanence of scarring, required future care, and liability strength. Minor burns may settle for thousands while severe burns can exceed millions. Our free consultation provides personalized case evaluation based on your specific circumstances."
    },
    {
      category: "Compensation & Settlement Questions",
      question: "How long does it take to settle a burn injury case?",
      answer: "Timeline depends on injury severity, treatment duration, and liability complexity. Simple cases with clear liability may settle in 6-12 months. Complex cases requiring extensive treatment, multiple defendants, or disputed liability can take 2-3 years. We balance speed with maximizing compensation, never rushing settlements that undervalue your injuries."
    },
    {
      category: "Compensation & Settlement Questions",
      question: "Will my case go to trial?",
      answer: "Most burn injury cases (95%) settle without trial through skilled negotiation. However, we prepare every case for trial, showing insurance companies we'll fight for maximum compensation. If they won't offer fair settlement, we're ready for court. Our trial-ready approach often results in better settlement offers."
    },
    {
      category: "Compensation & Settlement Questions",
      question: "What if I can't work due to my burn injuries?",
      answer: "You can recover lost wages from injury date forward, plus reduced future earning capacity if burns prevent returning to previous employment. We work with vocational and economic experts documenting your losses, including benefits, bonuses, and advancement opportunities. Severe burns often require career changes with significant income reduction."
    },
    // Insurance & Coverage Questions
    {
      category: "Insurance & Coverage Questions",
      question: "Will my health insurance cover burn treatment?",
      answer: "Health insurance typically covers medical treatment, but may seek reimbursement from your settlement (subrogation). We negotiate reductions in these liens, maximizing your net recovery. Some policies exclude work injuries requiring workers' comp coverage. We coordinate all insurance to ensure continuous treatment."
    },
    {
      category: "Insurance & Coverage Questions",
      question: "What if the defendant's insurance isn't enough?",
      answer: "We pursue multiple sources: umbrella policies providing additional coverage, multiple defendants sharing liability, underinsured motorist coverage for vehicle fires, employer liability for employee actions, and personal assets of wealthy defendants. Strategic litigation maximizes recovery beyond primary insurance limits."
    },
    {
      category: "Insurance & Coverage Questions",
      question: "How do insurance companies evaluate burn claims?",
      answer: "Insurers use formulas considering medical costs, lost wages, and multipliers for pain/suffering. They minimize severity, dispute future care needs, and argue comparative fault. Our former defense experience reveals their tactics. We counter with comprehensive documentation, expert testimony, and aggressive negotiation maximizing settlement value."
    },
    {
      category: "Insurance & Coverage Questions",
      question: "What about uninsured defendants?",
      answer: "Recovery options include your uninsured motorist coverage, homeowner's/renter's insurance, employer liability, property owner liability, government victim compensation programs, and personal asset collection. We investigate all sources, never assuming lack of insurance means no recovery."
    },
    {
      category: "Insurance & Coverage Questions",
      question: "Will filing a claim raise my insurance rates?",
      answer: "Filing a claim against another party's insurance shouldn't affect your rates. Using your own coverage (like medical payments) might have minimal impact. California law prohibits rate increases for not-at-fault claims. We structure claims to minimize any potential rate effects."
    },
    // Evidence & Documentation Questions
    {
      category: "Evidence & Documentation Questions",
      question: "What evidence do I need for my burn injury case?",
      answer: "Critical evidence includes medical records documenting treatment, photographs of injuries and scene, incident reports (police, fire, OSHA), witness statements, defective products or clothing, safety inspection records, and surveillance footage. We handle evidence collection, preservation, and expert analysis building strong cases."
    },
    {
      category: "Evidence & Documentation Questions",
      question: "Should I photograph my burn injuries?",
      answer: "Yes, document injuries daily showing progression. Photograph from multiple angles with good lighting, include rulers for scale, capture surrounding areas showing extent, and maintain dated photo logs. These images prove severity, document healing process, and counter insurance company minimization attempts."
    },
    {
      category: "Evidence & Documentation Questions",
      question: "How important are witness statements?",
      answer: "Extremely important. Witnesses provide objective accounts of accident circumstances, dangerous conditions, safety violations, and your injuries' immediate impact. We locate and interview witnesses quickly before memories fade, obtaining written statements and depositions preserving crucial testimony."
    },
    {
      category: "Evidence & Documentation Questions",
      question: "What if evidence was destroyed in the fire?",
      answer: "Fire investigations by officials provide crucial documentation. We work with origin and cause experts reconstructing incidents. Spoliation laws may penalize defendants for destroying evidence. Building plans, maintenance records, and code violations often exist separately. We creatively gather evidence despite destruction."
    },
    {
      category: "Evidence & Documentation Questions",
      question: "Do I need expert witnesses?",
      answer: "Most burn cases benefit from experts: medical experts explaining injuries/treatment, fire investigators determining cause/origin, safety experts identifying violations, economic experts calculating losses, and life care planners projecting future needs. We maintain relationships with top experts strengthening cases."
    },
    // Recovery & Rehabilitation Questions
    {
      category: "Recovery & Rehabilitation Questions",
      question: "How long does burn recovery typically take?",
      answer: "Recovery varies dramatically: first-degree burns heal within weeks, second-degree burns take months with potential scarring, third-degree burns require years of surgeries and therapy, and severe burns may never fully heal. Rehabilitation continues long after wound closure, addressing mobility, function, and psychological impacts."
    },
    {
      category: "Recovery & Rehabilitation Questions",
      question: "Will I need plastic surgery?",
      answer: "Many burn victims require reconstructive surgery for function and appearance. Procedures include scar revision, tissue expansion, skin grafts, and contracture release. Multiple surgeries over years are common. We ensure settlements cover all anticipated procedures including cosmetic improvements affecting quality of life."
    },
    {
      category: "Recovery & Rehabilitation Questions",
      question: "What psychological support is available?",
      answer: "Burn trauma causes PTSD, depression, anxiety, and body image issues. Treatment includes individual therapy, support groups, family counseling, and psychiatric care. California burn centers offer comprehensive psychological services. We ensure settlements include mental health treatment costs recognizing psychological injuries' severity."
    },
    {
      category: "Recovery & Rehabilitation Questions",
      question: "Can I return to work after severe burns?",
      answer: "Depends on burn severity, location, and job requirements. Many victims require vocational rehabilitation, job modifications, or career changes. We work with vocational experts assessing capabilities and retraining needs. Lost earning capacity includes difference between previous and future earnings potential."
    },
    {
      category: "Recovery & Rehabilitation Questions",
      question: "What about scarring and disfigurement?",
      answer: "Scarring significantly impacts compensation, especially for visible areas (face, hands, neck). California law recognizes disfigurement as separate damage category. Factors include scar size/location, age/gender of victim, impact on relationships/career, and treatment possibilities. Young victims with facial scarring receive highest valuations."
    },
    // Special Circumstances Questions
    {
      category: "Special Circumstances Questions",
      question: "What if my child was burned?",
      answer: "Children's burns often result in higher compensation due to lifetime impact. California extends statute of limitations until age 20. Growth affects scarring requiring multiple surgeries. Psychological impact on development is significant. We ensure settlements account for decades of future care and life opportunities lost."
    },
    {
      category: "Special Circumstances Questions",
      question: "Can I sue a government entity for burn injuries?",
      answer: "Yes, but special rules apply. You must file a government claim within 6 months of injury. The entity has 45 days to respond. If denied, you have 6 months to file lawsuit. Government entities have certain immunities, but dangerous property conditions and employee negligence create liability."
    },
    {
      category: "Special Circumstances Questions",
      question: "What if burns caused a loved one's death?",
      answer: "Wrongful death claims allow recovery for funeral expenses, lost financial support, loss of companionship, and household services value. California's 2-year statute runs from death date. Survival actions recover damages the deceased could have claimed. We handle these sensitive cases with compassion while pursuing maximum compensation."
    },
    {
      category: "Special Circumstances Questions",
      question: "Can undocumented immigrants file burn injury claims?",
      answer: "Yes. Immigration status doesn't affect personal injury rights in California. You can recover medical expenses, pain and suffering, and other damages. Federal law protects against immigration inquiries in civil cases. We protect all clients' rights regardless of immigration status."
    },
    {
      category: "Special Circumstances Questions",
      question: "What if I signed a liability waiver?",
      answer: "Waivers don't protect against gross negligence, intentional harm, or statutory violations. California courts scrutinize waivers strictly. Many are unenforceable due to unclear language, unequal bargaining power, or public policy. We examine waivers carefully, often finding ways around them."
    },
    // Choosing an Attorney Questions
    {
      category: "Choosing an Attorney Questions",
      question: "Why choose our law firm for my burn injury case?",
      answer: "Our unique advantage: former defense attorney knowing insurance company tactics, exclusive focus on catastrophic injuries like burns, 24/7 availability for emergencies, no fees unless we win, free consultation and case evaluation, and personalized attention throughout your case. We combine aggressive advocacy with compassionate support."
    },
    {
      category: "Choosing an Attorney Questions",
      question: "What should I ask a burn injury lawyer?",
      answer: "Ask about their experience with burn cases specifically, recent settlements/verdicts, their approach to case preparation, availability for questions/updates, fee structure, estimated timeline, trial experience, and references from past clients. Ensure they handle burn injuries regularly, not just general personal injury."
    },
    {
      category: "Choosing an Attorney Questions",
      question: "Do I need a lawyer if insurance offers a settlement?",
      answer: "Yes. Insurance companies make lowball offers hoping you'll settle quickly without understanding your injuries' full value. Early settlements typically undervalue future medical needs, lost earnings, and pain/suffering. Our evaluation often reveals settlements worth 3-10 times initial offers."
    },
    {
      category: "Choosing an Attorney Questions",
      question: "What makes burn injury cases different?",
      answer: "Burn cases require specialized knowledge of medical treatment, reconstruction surgery, scarring effects, psychological trauma, and long-term care needs. They often involve complex liability issues like fire causation, product defects, or premises safety. Only attorneys experienced in burn injuries understand these nuances."
    },
    {
      category: "Choosing an Attorney Questions",
      question: "How quickly should I contact a burn injury attorney?",
      answer: "Immediately. Evidence preservation is crucial - surveillance footage gets deleted, witnesses' memories fade, and defendants destroy documents. California's statute of limitations provides deadlines you can't miss. Early attorney involvement protects your rights from day one and prevents costly mistakes."
    }
  ];

  return (
    <div className="min-h-screen">
      <GoBack />
      <SEO 
        title="California Burn Injury Lawyers | #1 Burn Accident Attorneys | Free Consultation"
        description="Experienced California burn injury lawyers fighting for maximum compensation. Former defense attorney now advocating for burn victims. Free 24/7 consultation. No fees unless we win."
        canonical="https://www.californiainjuryadvocates.com/practice-areas/burn-injuries"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden mt-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <div className="mb-6 flex flex-wrap justify-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
                🔥 Burn Injury Specialist
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
                ⚖️ Former Defense Attorney
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 text-lg px-4 py-2">
                💰 No Fees Unless We Win
              </Badge>
            </div>
            <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
              California's Premier{' '}
              <span className="text-primary">Burn Injury</span>{' '}
              Attorneys
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Severe burns cause unimaginable pain, extensive medical treatment, and life-altering consequences. Our former defense attorney now fights exclusively for burn victims, securing maximum compensation for medical care, reconstructive surgery, and your future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-full"
                onClick={() => window.location.href = 'tel:8551234567'}
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (855) 123-4567
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full"
                onClick={handleFormSubmit}
              >
                <Scale className="mr-2 h-5 w-5" />
                Free Case Review
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Navigation Tabs */}
      <div className="sticky top-16 z-30 bg-background/95 backdrop-blur supports-[backdrop-filter]:backdrop-blur border-b pointer-events-auto">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            <div className="flex space-x-1 min-w-max">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <div className="container mx-auto px-4 py-12" ref={contentRef}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4">
                    California Burn Injury Legal Representation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive medical treatment over years. Multiple surgeries including debridement, skin grafts, and reconstruction attempt restoring function and appearance. Infection risks, contractures limiting movement, and nerve damage causing chronic pain complicate recovery.
                  </p>
                  <p>
                    Third and fourth-degree burns destroy tissue requiring amputations. Facial burns causing disfigurement profoundly impact self-esteem, relationships, and employment opportunities. Inhalation injuries damaging airways create respiratory complications. We pursue compensation from apartment fires with inadequate smoke detectors, workplace explosions from safety violations, defective products causing fires, and vehicle crashes with fuel tank ruptures.
                  </p>
                  <div className="bg-accent/20 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="font-semibold mb-2 text-xl">Critical Information Every Burn Victim Must Know</h3>
                    <p>
                      Burns are classified by degree, each requiring different treatment and affecting compensation differently. Understanding burn severity helps you make informed decisions about medical care and legal options. California's statute of limitations requires action within specific timeframes that cannot be extended.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <Scale className="w-8 h-8 mr-3 text-primary" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Type of Burn Injury</label>
                          <Select onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select burn type..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="thermal">Thermal/Fire Burn</SelectItem>
                              <SelectItem value="chemical">Chemical Burn</SelectItem>
                              <SelectItem value="electrical">Electrical Burn</SelectItem>
                              <SelectItem value="radiation">Radiation Burn</SelectItem>
                              <SelectItem value="friction">Friction Burn</SelectItem>
                              <SelectItem value="workplace">Workplace Burn</SelectItem>
                              <SelectItem value="apartment-fire">Apartment Fire</SelectItem>
                              <SelectItem value="vehicle-fire">Vehicle Fire</SelectItem>
                              <SelectItem value="defective-product">Defective Product</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Location of Accident</label>
                        <Input
                          type="text"
                          value={formData.accidentLocation}
                          onChange={(e) => setFormData({...formData, accidentLocation: e.target.value})}
                          placeholder="Where did the burn occur?"
                          className="w-full"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg rounded-full">
                        Get Your Free Case Review →
                      </Button>
                    </form>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-sm text-muted-foreground">
                      Available 24/7 • No fees unless we win • Free consultation
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* What To Do Section */}
            <section id="what-to-do" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <AlertTriangle className="w-8 h-8 mr-3 text-primary" />
                    What to Do After a Burn Injury
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src={whatToDoImage} 
                      alt="What to do after a burn injury - immediate steps" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  <p className="text-lg mb-6 leading-relaxed">
                    Critical steps to protect your health and legal rights in California
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        number: "1",
                        title: "Seek Emergency Medical Care",
                        content: "Call 911 immediately for severe burns. Even minor burns require medical evaluation. California has 13 specialized burn centers providing critical care. Document all treatments, medications, and medical recommendations for your case."
                      },
                      {
                        number: "2",
                        title: "Document Everything",
                        content: "Photograph your injuries daily, save all medical records, keep receipts for expenses, and maintain a pain journal. This evidence becomes crucial for proving damages and the impact on your life."
                      },
                      {
                        number: "3",
                        title: "Report the Incident",
                        content: "File official reports with relevant authorities - police for accidents, Cal/OSHA for workplace injuries, building inspectors for property fires. These reports provide crucial third-party documentation."
                      },
                      {
                        number: "4",
                        title: "Preserve Evidence",
                        content: "Keep damaged clothing, defective products, or anything related to your burn. Don't repair or dispose of evidence. Take photos of the accident scene, hazardous conditions, and safety violations."
                      },
                      {
                        number: "5",
                        title: "Don't Sign Anything",
                        content: "Insurance companies will pressure you to accept lowball settlements. Never sign documents, give recorded statements, or accept offers without legal representation. They're protecting their profits, not your interests."
                      },
                      {
                        number: "6",
                        title: "Contact a Burn Injury Attorney",
                        content: "California's 2-year statute of limitations starts ticking immediately. Evidence disappears, witnesses forget, and insurance companies delay. Our burn injury lawyers protect your rights from day one."
                      }
                    ].map((step, index) => (
                      <Card key={index} className="p-6 border-l-4 border-primary">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                            {step.number}
                          </div>
                          <div>
                            <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.content}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Burn Types Section */}
            <section id="burn-types" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <Flame className="w-8 h-8 mr-3 text-primary" />
                    Understanding Burn Severity & Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src={burnTypesImage} 
                      alt="Different types and degrees of burn injuries" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>

                  <div className="space-y-6">
                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                        <h3 className="text-xl font-semibold flex items-center">
                          <Flame className="w-5 h-5 mr-2 text-primary" />
                          Understanding Burn Severity
                        </h3>
                        <ChevronDown className="w-5 h-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4 text-lg leading-relaxed">
                        <p>
                          Burns are classified by degree, each requiring different treatment and affecting compensation differently. First-degree burns affect only the outer skin layer, causing redness and pain. Second-degree burns penetrate deeper, causing blisters and intense pain. Third-degree burns destroy all skin layers, potentially damaging nerves, muscles, and bones. Fourth-degree burns extend through skin into underlying tissues, often requiring amputation.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                        <h3 className="text-xl font-semibold flex items-center">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          California Burn Centers
                        </h3>
                        <ChevronDown className="w-5 h-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4 text-lg leading-relaxed">
                        <p>
                          California has 13 verified burn centers providing specialized care. Major facilities include UC Davis Regional Burn Center in Sacramento, UC San Diego Regional Burn Center, UC Irvine Regional Burn Center in Orange County, and Grossman Burn Centers. These facilities offer advanced treatment including skin grafts, hyperbaric oxygen therapy, and comprehensive rehabilitation.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>

                    <Collapsible>
                      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left bg-accent/50 rounded-lg hover:bg-accent/70 transition-colors">
                        <h3 className="text-xl font-semibold flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                          Common Causes We Handle
                        </h3>
                        <ChevronDown className="w-5 h-5" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="p-4 space-y-4 text-lg leading-relaxed">
                        <p>
                          Apartment and house fires from faulty wiring, inadequate fire safety, or landlord negligence. Workplace burns from chemical exposure, electrical hazards, explosions, or safety violations. Vehicle fires from defective fuel systems or collision impacts. Product defects including exploding batteries, faulty appliances, or flammable clothing. Restaurant burns from hot liquids, grease fires, or unsafe conditions. Chemical burns from improper handling or inadequate warnings.
                        </p>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Proving Negligence Section */}
            <section id="proving-negligence" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <Shield className="w-8 h-8 mr-3 text-primary" />
                    Proving Your Burn Injury Case
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src={provingNegligenceImage} 
                      alt="Legal process for proving burn injury negligence cases" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="space-y-6 text-lg leading-relaxed">
                    <p>
                      Liability in burn cases can involve multiple parties. Property owners must maintain safe premises under California Civil Code 1714. Employers must provide safe workplaces per Cal/OSHA regulations. Manufacturers face strict liability for defective products causing burns. Landlords must ensure fire safety compliance including working smoke detectors, proper exits, and fire extinguishers.
                    </p>
                    
                    <div className="bg-accent/20 p-6 rounded-lg">
                      <h3 className="font-semibold mb-2 text-xl">Settlement Factors</h3>
                      <p>
                        Burn injury settlements depend on severity (degree and TBSA percentage), location of burns (face, hands, joints command higher values), age and occupation of victim, permanence of scarring/disfigurement, required future medical care, impact on daily activities and relationships, and strength of liability evidence. Our former defense experience helps maximize these factors.
                      </p>
                    </div>

                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="font-semibold mb-2 text-xl">Insurance Company Tactics</h3>
                      <p>
                        Insurance adjusters minimize burn claims by disputing severity, claiming pre-existing conditions, arguing comparative negligence, delaying until you're desperate, offering quick lowball settlements, and using your statements against you. We counter every tactic, protecting your interests throughout the process.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <DollarSign className="w-8 h-8 mr-3 text-primary" />
                    Types of Compensation Available
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <img 
                      src={compensationImage} 
                      alt="Burn injury compensation and damages calculation" 
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <p className="text-lg mb-6 leading-relaxed">
                    Burn victims can recover economic damages including medical expenses (past and future), reconstructive surgery costs, lost wages and earning capacity, home modifications, and attendant care. Non-economic damages cover pain and suffering, emotional distress, disfigurement, loss of enjoyment of life, and loss of consortium. Punitive damages may apply for egregious negligence.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6 border-l-4 border-primary">
                      <h3 className="font-semibold text-xl mb-4 flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-primary" />
                        Economic Damages
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Emergency medical treatment</li>
                        <li>• Hospitalization and ICU care</li>
                        <li>• Reconstructive surgeries</li>
                        <li>• Physical therapy and rehabilitation</li>
                        <li>• Lost wages and benefits</li>
                        <li>• Future earning capacity</li>
                        <li>• Home and vehicle modifications</li>
                        <li>• Life care costs</li>
                      </ul>
                    </Card>

                    <Card className="p-6 border-l-4 border-secondary">
                      <h3 className="font-semibold text-xl mb-4 flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-secondary" />
                        Non-Economic Damages
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Pain and suffering</li>
                        <li>• Emotional distress and trauma</li>
                        <li>• Disfigurement and scarring</li>
                        <li>• Loss of enjoyment of life</li>
                        <li>• Impact on relationships</li>
                        <li>• Psychological counseling needs</li>
                        <li>• Loss of consortium</li>
                        <li>• Reduced quality of life</li>
                      </ul>
                    </Card>
                  </div>

                  <div className="mt-6 p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
                    <h3 className="font-semibold text-xl mb-2">Get Your Free Compensation Calculator</h3>
                    <p className="mb-4">
                      Calculate your potential burn injury settlement based on your specific circumstances.
                    </p>
                    <Link to="/burn-injuries-compensation-calculator">
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Calculate My Case Value
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <Clock className="w-8 h-8 mr-3 text-destructive" />
                    Don't Wait - Time Limits Apply for California
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6 text-lg leading-relaxed">
                    <div className="bg-destructive/10 p-6 rounded-lg border-l-4 border-destructive">
                      <h3 className="font-semibold mb-2 text-xl text-destructive">⏰ California's Statute of Limitations</h3>
                      <p>
                        You have exactly 2 years from your burn injury date to file a personal injury lawsuit in California. However, exceptions exist: minors have until age 20, discovery rule applies for latent injuries, and government claims require filing within 6 months. Missing these deadlines eliminates your right to compensation forever.
                      </p>
                    </div>
                    
                    <p>
                      Evidence disappears quickly after burn incidents. Surveillance footage gets deleted, witness memories fade, and important documents are discarded. The sooner we can begin investigating your case, the stronger your claim becomes.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="p-6 bg-primary/5 border-primary/20">
                        <h3 className="font-semibold text-xl mb-2">Act Now Because:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Evidence must be preserved immediately</li>
                          <li>• Witness statements are crucial</li>
                          <li>• Medical documentation is time-sensitive</li>
                          <li>• Insurance companies act fast</li>
                          <li>• Legal deadlines cannot be extended</li>
                        </ul>
                      </Card>
                      
                      <Card className="p-6 bg-secondary/5 border-secondary/20">
                        <h3 className="font-semibold text-xl mb-2">We'll Handle:</h3>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Immediate evidence preservation</li>
                          <li>• Medical record collection</li>
                          <li>• Insurance claim filing</li>
                          <li>• Expert witness coordination</li>
                          <li>• All legal deadlines and paperwork</li>
                        </ul>
                      </Card>
                    </div>
                    
                    <div className="text-center mt-8">
                      <Button 
                        size="lg" 
                        className="bg-destructive hover:bg-destructive/90 text-white px-8 py-4 text-xl rounded-full"
                        onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
                      >
                        <Clock className="mr-2 h-5 w-5" />
                        Start Your Free Case Review Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <HelpCircle className="w-8 h-8 mr-3 text-primary" />
                    Frequently Asked Questions About Burn Injuries
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Get answers to 50+ critical questions about burn injury claims in California
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Group FAQs by category */}
                    {Object.entries(
                      faqData.reduce((acc, faq) => {
                        if (!acc[faq.category]) acc[faq.category] = [];
                        acc[faq.category].push(faq);
                        return acc;
                      }, {} as Record<string, typeof faqData>)
                    ).map(([category, faqs], categoryIndex) => (
                      <div key={category}>
                        <h3 className="text-xl font-semibold mb-4 text-primary border-b border-primary/20 pb-2">
                          {category}
                        </h3>
                        <div className="space-y-2">
                          {faqs.slice(0, 3).map((faq, index) => {
                            const globalIndex = categoryIndex * 10 + index;
                            return (
                              <Collapsible key={globalIndex}>
                                <CollapsibleTrigger 
                                  className="flex justify-between items-center w-full p-4 text-left bg-accent/50 hover:bg-accent/70 rounded-lg transition-colors"
                                  onClick={() => toggleFaq(globalIndex)}
                                >
                                  <span className="font-medium pr-4">{faq.question}</span>
                                  {expandedFaq === globalIndex ? (
                                    <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                                  ) : (
                                    <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                                  )}
                                </CollapsibleTrigger>
                                <CollapsibleContent className="px-4 pb-4">
                                  <div className="pt-2 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                  </div>
                                </CollapsibleContent>
                              </Collapsible>
                            );
                          })}
                          {faqs.length > 3 && (
                            <div className="text-center mt-4">
                              <Button variant="outline" size="sm">
                                View More {category.split(' ')[0]} Questions
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-foreground mb-4 flex items-center">
                    <Building className="w-8 h-8 mr-3 text-primary" />
                    Burn Injury Resources
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Medical Centers</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <a 
                            href="https://health.ucdavis.edu/burncare/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • UC Davis Regional Burn Center
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.shrinerschildrens.org/en/locations/northern-california" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • Shriners Hospital Northern California
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://health.ucsd.edu/specialties/surgery/trauma-burn/burn-center/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • UC San Diego Regional Burn Center
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.ucihealth.org/services/surgery/burn-center" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • UC Irvine Regional Burn Center
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">Support Organizations</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <a 
                            href="https://www.phoenix-society.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • Phoenix Society for Burn Survivors
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.ameriburn.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • American Burn Association
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.burnfoundation.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • Burn Foundation
                          </a>
                        </li>
                        <li>
                          <a 
                            href="https://www.preventburns.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            • Burn Prevention Network
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              {/* 3 Ways to Start Your Case */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border-primary/20">
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl font-bold text-center">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base rounded-full"
                    onClick={() => window.location.href = 'tel:8551234567'}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call (855) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white py-3 text-base rounded-full"
                    onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
                  >
                    <Scale className="mr-2 h-4 w-4" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white py-3 text-base rounded-full"
                    onClick={() => window.location.href = '/burn-injuries-compensation-calculator'}
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Calculate Compensation
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">24/7 Legal Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Call Now</p>
                      <p className="font-semibold">(855) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-semibold">info@calinjurylaw.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/50 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Available</p>
                      <p className="font-semibold">24/7/365</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl font-bold">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>Former Defense Attorney</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>No Fees Unless We Win</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>Available 24/7/365</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>Free Consultation</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>All California Counties</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Badge variant="secondary" className="w-2 h-2 p-0 rounded-full bg-primary"></Badge>
                      <span>Maximized Settlements</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Time-Sensitive Warning */}
              <Card className="p-6 bg-destructive/10 border-destructive/20">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-destructive flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Time-Sensitive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4">
                    California law gives you only 2 years to file your burn injury claim. Evidence disappears quickly, and insurance companies act fast to minimize payouts.
                  </p>
                  <Button 
                    className="w-full bg-destructive hover:bg-destructive/90 text-white"
                    onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
                  >
                    Protect Your Rights Now
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-r from-primary via-primary/90 to-secondary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Time Limits Apply for California Burn Injuries
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every day you delay reduces your chances of maximum compensation. Our burn injury specialists are available 24/7 to protect your rights and secure the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-primary hover:bg-accent px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = 'tel:8551234567'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (855) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
            >
              <Scale className="mr-2 h-5 w-5" />
              Free Case Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BurnInjuries;