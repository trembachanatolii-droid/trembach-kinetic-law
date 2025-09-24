import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './civil-rights.css';
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
  Activity,
  Eye,
  User
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/civil-rights-hero-bg.jpg';
import sidebarImage from '@/assets/civil-rights-sidebar.jpg';
import legalProcessImage from '@/assets/civil-rights-legal-process.jpg';
import medicalImage from '@/assets/civil-rights-medical-facility.jpg';
import compensationImage from '@/assets/civil-rights-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CivilRights: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    violationType: '',
    incidentDate: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const backgroundLayer1 = useRef<HTMLDivElement>(null);
  const backgroundLayer2 = useRef<HTMLDivElement>(null);
  const backgroundLayer3 = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'violations', label: 'CIVIL RIGHTS VIOLATIONS', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Building },
    { id: 'resources', label: 'RESOURCES', icon: Stethoscope },
    { id: 'faq', label: 'FAQ', icon: MessageCircle }
  ];

  useEffect(() => {
    document.body.classList.add('civil-rights-page');
    
    // Scroll tracking for active tab
    const handleScroll = () => {
      const sections = tabs.map(tab => document.getElementById(tab.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150;
      
      let currentSection = 'overview';
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = tabs[i].id;
          break;
        }
      }
      
      setActiveTab(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      document.body.classList.remove('civil-rights-page');
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store scroll position before navigation
    localStorage.setItem('scrollPosition', window.pageYOffset.toString());
    window.location.href = '/practice-areas/civil-rights/case-evaluation';
  };

  const faqData = [
    {
      question: "How much does a civil rights attorney cost?",
      answer: "We work on contingency fees, meaning you pay nothing unless we win your case. When we win, our fee comes from the settlement or verdict, not your pocket. This ensures everyone has access to justice regardless of financial resources."
    },
    {
      question: "How long do I have to file a civil rights lawsuit?",
      answer: "California has different deadlines depending on the type of claim. Government entities require a claim within 6 months, while federal Section 1983 claims have a 2-year statute of limitations. Time is critical - contact us immediately."
    },
    {
      question: "What is Section 1983 and how does it help my case?",
      answer: "42 U.S.C. § 1983 allows you to sue government officials who violate your constitutional rights. This powerful federal law provides remedies for police brutality, false arrest, and other civil rights violations, including attorney fees when you win."
    },
    {
      question: "Can I sue if I was resisting arrest?",
      answer: "Yes. Even if you resisted, officers can only use reasonable force necessary to overcome resistance. Excessive force remains illegal. Many 'resisting' charges are fabricated to justify officer misconduct - we investigate thoroughly."
    },
    {
      question: "What damages can I recover in a civil rights case?",
      answer: "You can recover medical expenses, lost wages, emotional distress, pain and suffering, and punitive damages. Attorney fees are also recoverable under civil rights laws. Damages often reach hundreds of thousands or millions for serious violations."
    },
    {
      question: "Will suing police put me in danger?",
      answer: "Retaliation is illegal and creates additional claims. We take protective measures when necessary and document any harassment. Courts take retaliation seriously, often increasing damages significantly."
    },
    {
      question: "Do I need video evidence to win my case?",
      answer: "Video helps but isn't required. We build strong cases using medical records, witness testimony, officer statements, and circumstantial evidence. Even when police delete or hide video, we pursue sanctions and adverse inferences."
    },
    {
      question: "What is qualified immunity?",
      answer: "A legal doctrine protecting government officials from lawsuits unless they violated 'clearly established' rights. While challenging, experienced attorneys know how to overcome qualified immunity through proper legal strategies and case law."
    },
    {
      question: "Can I sue a city or county for police misconduct?",
      answer: "Yes, under Monell claims when municipal policies, customs, or practices caused the violation. This includes inadequate training, supervision, or discipline. Municipal liability often results in larger settlements."
    },
    {
      question: "What if the officer was fired or criminally charged?",
      answer: "Criminal prosecution and employment consequences are separate from civil rights. You can pursue civil damages regardless of criminal outcomes. In fact, officer discipline often strengthens civil cases."
    },
    {
      question: "How long does a civil rights case take?",
      answer: "Cases typically resolve within 12-24 months, though complex cases may take longer. We balance urgency with maximizing compensation. Some cases settle quickly while others require litigation for fair results."
    },
    {
      question: "What is the Tom Bane Civil Rights Act?",
      answer: "California's powerful civil rights law (Civil Code § 52.1) providing broader protections than federal law. It covers threats, intimidation, or coercion interfering with constitutional rights, with minimum $4,000 damages and attorney fees."
    },
    {
      question: "Can I record police in California?",
      answer: "Yes. You have a First Amendment right to record police performing public duties. Officers cannot legally stop you from recording or seize your phone without a warrant. Recording is crucial evidence."
    },
    {
      question: "What if I was drunk or on drugs during the incident?",
      answer: "Intoxication doesn't forfeit constitutional rights. Officers still cannot use excessive force or make unlawful arrests. While intoxication may affect damages, you still have valid civil rights claims."
    },
    {
      question: "Do I have to cooperate with internal affairs investigations?",
      answer: "No. You're not required to speak with police investigators. Anything you say can be used against you in criminal and civil proceedings. Always consult an attorney before giving statements."
    },
    {
      question: "What if the incident wasn't that serious?",
      answer: "Any constitutional violation is serious. Even brief detentions, minor injuries, or threats can result in significant damages. Civil rights laws protect all citizens from government overreach, regardless of severity."
    },
    {
      question: "Can I sue for emotional trauma without physical injuries?",
      answer: "Yes. Psychological injuries like PTSD, anxiety, and depression are compensable damages. Mental health treatment documents these injuries. Emotional distress awards often exceed physical injury compensation."
    },
    {
      question: "What evidence should I preserve?",
      answer: "Photograph injuries immediately, preserve clothing, get witness contact information, request medical treatment, and document everything. Don't wash wounds before photographing. Time-sensitive evidence disappears quickly."
    },
    {
      question: "Will my case become public?",
      answer: "Court filings are public records, but we can request protective orders for sensitive information. Many cases settle confidentially. We balance your privacy concerns with achieving maximum compensation."
    },
    {
      question: "What if multiple officers were involved?",
      answer: "Each officer faces individual liability for their actions. Those who participated, encouraged, or failed to intervene can all be held responsible. Multiple defendants often increase settlement values."
    },
    {
      question: "Can family members sue for police brutality?",
      answer: "Spouses and children can sue for loss of consortium and companionship when family members are injured or killed by police. Family members often suffer secondary trauma requiring compensation."
    },
    {
      question: "What if the incident happened in jail or prison?",
      answer: "Inmates retain constitutional rights. Excessive force, medical neglect, and failure to protect violate Eighth and Fourteenth Amendments. Prison officials face liability for deliberate indifference to serious risks."
    },
    {
      question: "Do I need expert witnesses?",
      answer: "Often yes. Use of force experts, medical professionals, and economists provide crucial testimony. We work with nationally recognized experts and advance all costs so you pay nothing upfront."
    },
    {
      question: "What if police claim I was reaching for a weapon?",
      answer: "Officers often fabricate weapons threats to justify excessive force. We investigate thoroughly, examining evidence and witness statements. False police reports strengthen misconduct claims significantly."
    },
    {
      question: "Can I sue for strip searches?",
      answer: "Unreasonable strip searches violate Fourth Amendment rights. Searches without reasonable suspicion, in public view, or conducted improperly create liability. Particularly strong claims for minor offenses."
    },
    {
      question: "What if I signed something at the jail?",
      answer: "Documents signed under duress, without understanding, or containing false information may be challenged. Don't assume signed papers bar claims. We review all documents for validity and defenses."
    },
    {
      question: "Will insurance cover the judgment against police?",
      answer: "Government entities typically have insurance for officer conduct within policy. However, punitive damages and intentional acts may not be covered, creating personal liability pressure for settlement."
    },
    {
      question: "What if the officer has no money?",
      answer: "Government entities typically indemnify officers, meaning the city/county pays judgments. We pursue all available resources including insurance policies, government funds, and personal assets when appropriate."
    },
    {
      question: "Can undocumented immigrants sue police?",
      answer: "Yes. Constitutional protections apply to all persons in the U.S. regardless of immigration status. You can pursue civil rights claims without fear of deportation solely for seeking justice."
    },
    {
      question: "What if I have a criminal record?",
      answer: "Past criminal history doesn't forfeit constitutional rights. While it may affect some damages, you still have valid civil rights claims. Officers cannot use your history to justify current misconduct."
    },
    {
      question: "How do you prove racial profiling?",
      answer: "Through statistical evidence, comparative treatment, officer statements, and departmental patterns. California's RIPA Act requires data collection showing disparate treatment. We use sophisticated legal strategies to prove discrimination."
    },
    {
      question: "What is deliberate indifference in medical care?",
      answer: "When officials know of and disregard serious medical needs. Includes denying medication, ignoring symptoms, delaying treatment, and inadequate mental health care. Violates Eighth/Fourteenth Amendment rights."
    },
    {
      question: "Can I sue school police who hurt my child?",
      answer: "Yes. School resource officers who use excessive force or violate students' rights face liability. Minors have special protections, and school districts may share liability for inadequate policies or supervision."
    },
    {
      question: "What if officers turned off body cameras?",
      answer: "Deliberately disabling cameras suggests consciousness of guilt. Courts may instruct juries to assume officers had something to hide. Policy violations strengthen misconduct claims even without footage."
    },
    {
      question: "Can I get punitive damages against police?",
      answer: "Yes, for malicious, oppressive, or reckless conduct. Punitive damages punish wrongdoers and deter future misconduct. Not covered by insurance, creating personal liability pressure for officers."
    },
    {
      question: "What if I was injured during a high-speed chase?",
      answer: "Officers have limited immunity during pursuits, but reckless conduct shocking the conscience creates liability. Innocent bystanders injured by pursuits have stronger claims than fleeing suspects."
    },
    {
      question: "Will my immigration status be reported?",
      answer: "We don't report clients to immigration authorities. Attorney-client privilege protects our communications. Civil rights violations are entirely separate from immigration matters."
    },
    {
      question: "What if multiple agencies were involved?",
      answer: "Each agency and officer faces potential liability for their actions. Joint operations often involve federal, state, and local agencies, all potentially responsible for constitutional violations."
    },
    {
      question: "Can I sue for tasering?",
      answer: "Excessive taser use violates Fourth Amendment when force exceeds necessity. Multiple deployments, tasering restrained individuals, or using tasers on vulnerable populations strengthens liability claims."
    },
    {
      question: "What is Brady material in criminal cases?",
      answer: "Evidence favorable to defendants that prosecutors must disclose. When police or prosecutors hide exculpatory evidence, it violates due process and can lead to civil rights claims for resulting harm."
    },
    {
      question: "How do you calculate damages?",
      answer: "We evaluate medical expenses, lost wages, pain and suffering, emotional distress, and future impacts. Economic experts calculate lifetime losses while medical experts document ongoing treatment needs."
    },
    {
      question: "What if the incident was captured on surveillance?",
      answer: "Video evidence is powerful but requires preservation. We immediately send preservation notices to prevent deletion. Surveillance footage often contradicts police reports, strengthening misconduct claims."
    },
    {
      question: "Can I sue for wrongful conviction?",
      answer: "Yes, if police misconduct led to false conviction. This includes fabricating evidence, coercing confessions, or hiding exculpatory evidence. Compensation increases with years wrongfully imprisoned."
    },
    {
      question: "What if I was protesting when arrested?",
      answer: "Peaceful protesters have First and Fourth Amendment protections. Mass arrests without individualized probable cause, excessive force against non-violent demonstrators, and content-based targeting violate civil rights."
    },
    {
      question: "Will I have to testify at trial?",
      answer: "Most cases settle without trial. If trial is necessary, we prepare you thoroughly and protect your interests. Your testimony is crucial but we make the experience as comfortable as possible."
    },
    {
      question: "What makes a civil rights case strong?",
      answer: "Clear evidence of violations, documented injuries, witness support, video footage, officer misconduct history, policy violations, and inconsistent police statements. We build strong cases even without ideal evidence."
    },
    {
      question: "Should I accept the first settlement offer?",
      answer: "Never without attorney review. Initial offers are always lowball attempts. We know true case values and negotiate aggressively. Most cases settle for multiples of initial offers through skilled advocacy."
    },
    {
      question: "What if I'm afraid of retaliation?",
      answer: "Retaliation for exercising legal rights is illegal and creates additional claims. We can seek protective orders if necessary. Document any harassment - it strengthens your case and increases damages."
    },
    {
      question: "Can I sue for false arrest if charges were dropped?",
      answer: "Yes. Dropped charges often indicate lack of probable cause for arrest. While not conclusive proof, dismissed charges strengthen false arrest claims and suggest prosecutorial doubt about case merit."
    },
    {
      question: "What is positional asphyxia?",
      answer: "Death or injury from being placed in positions restricting breathing, like prolonged prone restraint. Despite known dangers, officers continue using these techniques, creating clear liability for resulting harm."
    },
    {
      question: "How do you handle media attention?",
      answer: "We manage media strategically to benefit your case while protecting privacy. Positive publicity can pressure settlements while negative coverage requires careful response. We control the narrative professionally."
    },
    {
      question: "What if police deleted evidence?",
      answer: "Destroying evidence (spoliation) leads to sanctions, adverse jury instructions, and separate claims. Courts presume deleted evidence was unfavorable to police. We pursue all remedies for evidence tampering."
    }
  ];

  return (
    <>
      <SEO 
        title="California Civil Rights Attorney | Police Brutality Lawyer | Trembach Law Firm"
        description="Experienced California civil rights attorney fighting police brutality, false arrest, and discrimination. Former defense attorney. Free consultation. No fees unless we win."
        keywords="civil rights lawyer California, police brutality attorney, excessive force lawyer, false arrest attorney, Section 1983 lawsuit, civil rights violations"
        canonical="https://www.trembachlawfirm.com/practice-areas/civil-rights"
      />
      
      <div className="civil-rights-page min-h-screen bg-background">
        <GoBack />
        
        {/* Floating 3D Background Elements */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div 
            ref={backgroundLayer1}
            className="floating-bg-1 absolute w-96 h-96 bg-gradient-to-br from-primary/5 to-primary/10 rounded-full blur-3xl"
            style={{ top: '10%', left: '10%' }}
          />
          <div 
            ref={backgroundLayer2}
            className="floating-bg-2 absolute w-80 h-80 bg-gradient-to-br from-red-500/5 to-red-600/10 rounded-full blur-3xl"
            style={{ top: '50%', right: '10%' }}
          />
          <div 
            ref={backgroundLayer3}
            className="floating-bg-3 absolute w-64 h-64 bg-gradient-to-br from-blue-500/5 to-blue-600/10 rounded-full blur-3xl"
            style={{ bottom: '20%', left: '20%' }}
          />
        </div>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="hero-section relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight">
                California Civil Rights Attorney
              </h1>
              
              <div className="star-rating flex items-center justify-center mb-4 sm:mb-6 flex-col sm:flex-row gap-2 sm:gap-0">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400 mr-1" />
                  ))}
                </div>
                <span className="sm:ml-2 text-sm sm:text-lg text-white text-center">Former Defense Attorney Fighting for You</span>
              </div>
              
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white leading-relaxed">
                When your civil rights are violated, we fight for justice and maximum compensation. 
                Expert legal representation for police brutality, false arrest, and discrimination throughout California.
              </p>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                style={{ color: '#ffffff' }}
                onClick={() => window.location.href = '/practice-areas/civil-rights/case-evaluation'}
              >
                START MY FREE CASE EVALUATION
              </Button>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4 overflow-x-auto">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`flex items-center px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md whitespace-nowrap ${
                        activeTab === tab.id 
                          ? 'bg-red-600 text-white shadow-lg' 
                          : 'text-gray-700 hover:bg-gray-100 hover:text-red-600'
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
        <div className="flex max-w-7xl mx-auto px-6 py-12 gap-8">
          
          {/* Left Content Area */}
          <div ref={contentRef} className="flex-1 space-y-12">
            
            {/* Overview Section */}
            <section id="overview" className="content-section">
              <h2 className="text-4xl font-bold text-red-600 mb-8">California Civil Rights Violations</h2>
              
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  If you or a loved one has experienced police brutality, false arrest, or other civil rights violations in California, you deserve justice and compensation. These constitutional violations represent some of the most serious abuses of government power, and those responsible must be held accountable.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the trauma and injustice of civil rights violations. With extensive experience in California civil rights litigation and a deep understanding of both federal and state civil rights laws, we're prepared to fight for maximum compensation while you focus on healing and moving forward.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 mt-6">
                    Learn More About Our California Civil Rights Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Constitutional Protection
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We protect your fundamental constitutional rights under the Fourth, Fifth, Eighth, and Fourteenth Amendments, ensuring government officials are held accountable for violations.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          California Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Deep knowledge of California's Tom Bane Civil Rights Act, RIPA Act, and other state laws that provide broader protections than federal law alone.</p>
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
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background provides unique insights into government defense strategies and tactics.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and meet critical deadlines for government claims.</p>
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
                    <h3>Comprehensive California Civil Rights Representation</h3>
                    <p>
                      Civil rights cases in California involve complex federal and state laws, constitutional principles, and government liability theories. Our firm has the resources and expertise to handle every aspect of your case, from investigating the incident to working with experts who can clearly explain how your rights were violated.
                    </p>
                    
                    <p>
                      California's civil rights laws provide some of the strongest protections in the nation. We pursue claims under federal Section 1983, California's Tom Bane Civil Rights Act, and other applicable statutes to maximize your recovery and ensure accountability.
                    </p>
                    
                    <p>
                      We investigate every aspect of your case to ensure no responsible party escapes accountability. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including municipal liability, individual officer liability, and policy reform.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={compensationImage} alt="Civil Rights Case Evaluation" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Free Case Evaluation</h2>
              </div>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Violation</label>
                      <Select value={formData.violationType} onValueChange={(value) => setFormData(prev => ({ ...prev, violationType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select violation type" />
                        </SelectTrigger>
                        <SelectContent className="bg-white z-50">
                          <SelectItem value="police-brutality">Police Brutality/Excessive Force</SelectItem>
                          <SelectItem value="false-arrest">False Arrest/Wrongful Detention</SelectItem>
                          <SelectItem value="racial-profiling">Racial Profiling</SelectItem>
                          <SelectItem value="malicious-prosecution">Malicious Prosecution</SelectItem>
                          <SelectItem value="jail-abuse">Jail/Prison Abuse</SelectItem>
                          <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                          <SelectItem value="other">Other Civil Rights Violation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Incident Date</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* Civil Rights Violations Section */}
            <section id="violations" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={legalProcessImage} alt="Civil Rights Violations" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Common Civil Rights Violations</h2>
              </div>
              
              <div className="space-y-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Police Brutality & Excessive Force
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">When law enforcement uses more force than reasonably necessary, including beatings, tasings, shootings, chokeholds, and K-9 attacks. California law requires force to be "necessary" not just "reasonable."</p>
                    
                    <Collapsible open={expandedSections.brutality} onOpenChange={() => toggleSection('brutality')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm">
                          Learn More {expandedSections.brutality ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <p>Police brutality represents the most visible form of civil rights violations, encompassing any use of force beyond what is reasonably necessary to accomplish a lawful police purpose. This includes physical beatings with batons, fists, or other objects; excessive use of tasers or pepper spray; chokeholds and other dangerous restraint techniques; and unjustified deadly force incidents.</p>
                        
                        <p>California's recent legislative changes have strengthened protections against police brutality. Assembly Bill 392 requires that officers use only force that is "necessary" rather than merely "reasonable," raising the standard for justified force. This means officers must consider whether force is required at all, not just whether their actions might be deemed reasonable by other officers.</p>
                        
                        <p>The consequences of police brutality extend far beyond physical injuries. Victims often suffer severe psychological trauma including PTSD, anxiety, depression, and loss of trust in law enforcement. Many require ongoing medical treatment, therapy, and rehabilitation. The financial impact includes medical bills, lost wages, and diminished earning capacity.</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-red-600" />
                      False Arrest & Wrongful Detention
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Detention without probable cause or valid legal justification. This includes arrests based on fabricated evidence, racial profiling, or retaliation for exercising constitutional rights.</p>
                    
                    <Collapsible open={expandedSections.falseArrest} onOpenChange={() => toggleSection('falseArrest')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm">
                          Learn More {expandedSections.falseArrest ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <p>False arrest occurs when police detain or arrest someone without probable cause, violating the Fourth Amendment's protection against unreasonable seizures. Common scenarios include arrests based on racial profiling, retaliatory arrests for exercising First Amendment rights, and mistaken identity arrests due to outdated warrants or facial recognition errors.</p>
                        
                        <p>The consequences extend beyond immediate humiliation and trauma. Victims may lose jobs, professional licenses, custody arrangements, and immigration status. Their reputation suffers irreparable harm even after charges are dropped or they're found innocent.</p>
                        
                        <p>California's Tom Bane Civil Rights Act provides remedies when officers use threats, intimidation, or coercion to interfere with constitutional rights, including situations where officers knowingly make false arrests to cover up misconduct or retaliate against citizens.</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Eye className="w-5 h-5 mr-2 text-red-600" />
                      Racial Profiling & Discrimination
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Targeting individuals based on race, ethnicity, or religion rather than reasonable suspicion of criminal activity. This violates equal protection guarantees under both federal and California law.</p>
                    
                    <Collapsible open={expandedSections.profiling} onOpenChange={() => toggleSection('profiling')}>
                      <CollapsibleTrigger asChild>
                        <Button variant="outline" size="sm">
                          Learn More {expandedSections.profiling ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4 space-y-4">
                        <p>California's Racial and Identity Profiling Act (RIPA) requires law enforcement agencies to collect and report data on stops, searches, and interactions. This data consistently reveals disturbing disparities: Black drivers are searched at rates three times higher than white drivers despite lower contraband discovery rates.</p>
                        
                        <p>Pretextual stops represent a common form of racial profiling where officers use minor traffic violations as excuses to investigate drivers based on race. "Driving while Black" or "Driving while Brown" aren't crimes, yet minorities face constant scrutiny and harassment.</p>
                        
                        <p>The psychological impact creates toxic stress, anxiety, and trauma in minority communities. This breakdown in police-community relations makes everyone less safe while perpetuating systemic racism.</p>
                      </CollapsibleContent>
                    </Collapsible>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={medicalImage} alt="Legal Process" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Legal Process & Your Rights</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Scale className="w-5 h-5 mr-2 text-green-600" />
                        Federal Section 1983 Claims
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Allows lawsuits against government officials who violate constitutional rights</p>
                      <p>• Covers Fourth, Fifth, Eighth, and Fourteenth Amendment violations</p>
                      <p>• Provides attorney fees when you win your case</p>
                      <p>• 2-year statute of limitations for filing</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Shield className="w-5 h-5 mr-2 text-green-600" />
                        California Tom Bane Act
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Broader protections than federal law</p>
                      <p>• Covers threats, intimidation, or coercion</p>
                      <p>• Minimum $4,000 damages per violation</p>
                      <p>• Treble damages and attorney fees available</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About the Legal Process
                      {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Understanding Your Legal Rights</h3>
                      <p>
                        Civil rights cases involve complex federal and state laws designed to protect constitutional freedoms. The primary federal remedy is Section 1983, which allows lawsuits against government officials who violate constitutional rights while acting under color of state law.
                      </p>
                      
                      <h4>Government Claim Requirements</h4>
                      <p>
                        California requires filing a government claim within 6 months for state law violations against government entities. This administrative requirement must be completed before filing a lawsuit. Federal Section 1983 claims don't require this step but pursuing both maximizes recovery options.
                      </p>
                      
                      <h4>Municipal Liability</h4>
                      <p>
                        Cities and counties can be held liable under Monell claims when policies, customs, or practices cause constitutional violations. This includes inadequate training, supervision, or discipline that amounts to deliberate indifference to constitutional rights.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Resources & Support</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="glass-card hover-scale transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/civil-rights/case-evaluation'}
                      >
                        Case Evaluation
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">Get a free consultation about your civil rights case</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/civil-rights/compensation-calculator'}
                      >
                        Compensation Calculator
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">Estimate potential compensation for your case</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-scale transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-center">
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/civil-rights/legal-guidance'}
                      >
                        Legal Guidance
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-muted-foreground">Learn about your rights and legal options</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="text-lg flex items-center justify-between">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
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
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="w-80">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-card p-6 bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-6 text-center">3 Ways to Start Your Case</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-sm">Free Phone Consultation</h4>
                      <p className="text-xs text-muted-foreground mb-2">Speak directly with Attorney Trembach</p>
                      <Button 
                        size="sm" 
                        className="w-full bg-green-600 hover:bg-green-700"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-sm">Online Case Review</h4>
                      <p className="text-xs text-muted-foreground mb-2">Complete our detailed evaluation form</p>
                      <Button 
                        size="sm" 
                        className="w-full bg-red-600 hover:bg-red-700"
                        onClick={() => window.location.href = '/practice-areas/civil-rights/case-evaluation'}
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        Start Case Review
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-sm">Send Us a Message</h4>
                      <p className="text-xs text-muted-foreground mb-2">Brief description of your situation</p>
                      <Button 
                        size="sm" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-white/50 rounded-lg text-center">
                  <img src={sidebarImage} alt="Civil Rights Attorney" className="w-full h-32 object-cover rounded-lg mb-3" />
                  <p className="text-xs text-muted-foreground">
                    <strong>No fees unless we win.</strong> Free consultation. Former defense attorney fighting for your rights.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <section className="bg-red-600 text-white py-16 min-h-screen flex items-center">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Don't Wait - Time Limits Apply for California Civil Rights Claims</h2>
            <p className="text-lg md:text-xl mb-10 leading-relaxed text-white">
              California has strict deadlines for filing civil rights claims. Evidence can be lost and witnesses' memories fade. 
              The sooner you contact us, the better we can protect your rights and secure maximum compensation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg"
                className="bg-white hover:bg-gray-100 font-bold px-8 py-4 text-lg border-0"
                style={{ color: '#dc2626' }}
                onClick={() => window.location.href = '/practice-areas/civil-rights/case-evaluation'}
              >
                Get Your Free Case Evaluation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent font-bold px-8 py-4 text-lg"
                style={{ color: '#ffffff' }}
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-6 h-6 mr-3" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CivilRights;