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
  Brain,
  Activity,
  Search,
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/brain-injuries-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/brain-injury-emergency.jpg';
import accidentTypesImage from '@/assets/practice-areas/brain-injury-testing.jpg';
import provingNegligenceImage from '@/assets/practice-areas/brain-injury-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/brain-injury-rehabilitation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BrainInjuries: React.FC = () => {
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
    { id: 'types-of-injuries', label: 'INJURY TYPES', icon: Brain },
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
    window.location.href = '/brain-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "What is considered a traumatic brain injury in California law?",
      answer: "Under California law, a traumatic brain injury is any disruption of normal brain function caused by external physical force. This includes concussions, contusions, penetrating injuries, and anoxic injuries from lack of oxygen. Even 'mild' TBIs without loss of consciousness qualify if they cause cognitive, physical, or psychological symptoms. California courts recognize that brain injuries can occur without direct head impact through acceleration-deceleration forces. Medical documentation of altered mental state, confusion, memory loss, or any period of unconsciousness establishes TBI for legal purposes."
    },
    {
      question: "How long after an accident can brain injury symptoms appear?",
      answer: "Brain injury symptoms can appear immediately or develop over days, weeks, or even months after trauma. Adrenaline and shock often mask initial symptoms. Delayed symptoms include headaches developing days later, memory problems emerging weeks post-injury, personality changes noticed by family over time, and depression or anxiety developing months later. Slow brain bleeds may not cause symptoms for weeks. This is why immediate medical evaluation is crucial even without obvious symptoms. California's discovery rule may extend the statute of limitations if symptoms appear later, but prompt medical attention strengthens your claim."
    },
    {
      question: "Do I have a case if my CT scan or MRI was normal?",
      answer: "Yes, you may still have a valid brain injury case even with normal imaging. Many brain injuries, especially mild TBIs and concussions, don't show on standard CT scans or MRIs. Microscopic damage to neurons and axons isn't visible on routine imaging. California courts recognize that normal scans don't rule out brain injury. Advanced testing like DTI MRI, PET scans, or neuropsychological evaluations can document injuries standard tests miss. Symptoms, clinical examinations, and cognitive testing often prove brain injury when imaging appears normal. Never let insurance companies dismiss your injury based solely on normal initial scans."
    },
    {
      question: "What are the warning signs I need immediate medical attention?",
      answer: "Seek emergency care immediately for: worsening headache, repeated vomiting, seizures, inability to wake up, one pupil larger than the other, slurred speech, weakness or numbness in limbs, unusual behavior or confusion, loss of consciousness even briefly, clear fluids draining from nose or ears, or convulsions. For children, also watch for persistent crying, refusal to eat, or changes in sleep patterns. These symptoms may indicate brain bleeding, swelling, or other complications requiring immediate treatment. Delaying care can be life-threatening and may also impact your legal claim."
    },
    {
      question: "Can a concussion cause permanent damage?",
      answer: "Yes, concussions can cause permanent damage, especially with inadequate treatment or multiple injuries. Post-concussion syndrome can persist for years with chronic headaches, memory problems, difficulty concentrating, mood changes, and sleep disturbances. Multiple concussions increase risk of chronic traumatic encephalopathy (CTE), early dementia, and depression. Studies show 15-30% of concussion victims have symptoms lasting over a year. California law recognizes long-term concussion effects for compensation purposes. Never minimize a concussion as 'just a bump on the head' - proper treatment and legal representation are essential."
    },
    {
      question: "How long do I have to file a brain injury lawsuit in California?",
      answer: "California's statute of limitations gives you two years from the accident date to file your lawsuit. However, the discovery rule may extend this if symptoms weren't immediately apparent. Government entity claims must be filed within six months. Medical malpractice cases have a one-year limit from discovery. Product liability claims may have different timelines. Time limits are strictly enforced, so immediate legal consultation is crucial. Evidence disappears quickly - surveillance footage is typically deleted within 30 days, witnesses' memories fade, and physical evidence deteriorates. Don't wait to protect your rights."
    },
    {
      question: "What if the insurance company says my brain injury is pre-existing?",
      answer: "Insurance companies routinely claim brain injuries are pre-existing to deny compensation. We counter this by obtaining complete medical records showing no prior symptoms, documenting the accident's mechanism of injury, getting witness testimony about pre/post-accident functioning, obtaining expert medical testimony on causation, and presenting neuropsychological testing showing specific deficits consistent with your accident. Even with pre-existing conditions, California's 'eggshell plaintiff' rule holds defendants liable for aggravating existing conditions. We prove your accident caused new injuries or worsened existing ones."
    },
    {
      question: "How much compensation can I get for a brain injury?",
      answer: "Brain injury compensation varies widely based on severity, liability strength, and insurance coverage. Mild TBI cases typically range from $100,000-$500,000+. Moderate TBI cases often exceed $500,000-$2,000,000. Severe TBI cases can reach $5,000,000-$20,000,000 or more. Factors affecting value include medical expenses (current and future), lost earning capacity, pain and suffering, life care needs, and degree of disability. California allows compensation for economic damages (medical bills, lost wages), non-economic damages (pain, suffering), and sometimes punitive damages for egregious conduct."
    },
    {
      question: "What doctors should I see for a brain injury?",
      answer: "Comprehensive brain injury treatment requires multiple specialists: neurologists for overall brain function, neurosurgeons if surgery is needed, neuropsychologists for cognitive testing, psychiatrists for mood and behavior changes, physiatrists for rehabilitation, physical/occupational/speech therapists, neuro-ophthalmologists for vision problems, and endocrinologists for hormone disruptions. Primary care coordinates treatment. Emergency physicians provide initial care. Pain management specialists address chronic headaches. We connect you with California's leading brain injury specialists who understand both treatment and legal documentation needs. Proper medical team is crucial for recovery and case success."
    },
    {
      question: "What if I can't afford medical treatment?",
      answer: "Never delay treatment due to cost concerns. Options include treatment on lien (doctors wait for payment from settlement), medical payment coverage from auto insurance, health insurance with reimbursement from settlement, state disability and victim compensation programs, and letter of protection guaranteeing payment. We connect you with doctors who treat on lien basis, ensuring quality care without upfront costs. Medical treatment strengthens your case while addressing health needs. Gaps in treatment hurt case value more than treatment costs. We negotiate medical liens to maximize your net recovery. Financial concerns should never prevent necessary brain injury treatment."
    },
    {
      question: "Should I keep a symptom journal?",
      answer: "Yes, symptom journals provide powerful evidence insurance companies can't dismiss. Document daily: headache frequency, intensity, and triggers; cognitive problems like memory lapses or confusion; physical symptoms including balance problems or fatigue; emotional changes such as irritability or depression; sleep disturbances and nightmares; impact on work and daily activities; medications taken and side effects. Include specific examples, not just general complaints. Note good days and bad days showing pattern. Family members should also document observed changes. This contemporaneous record prevents insurance claims that you're exaggerating. Written evidence from the time of injury carries more weight than later recollections."
    },
    {
      question: "How do you prove invisible brain injury symptoms?",
      answer: "Invisible symptoms like cognitive impairment, fatigue, and personality changes require multiple proof sources: Neuropsychological testing providing objective measurement; Functional capacity evaluations showing limitations; Testimony from family, friends, and coworkers about changes; Employment records demonstrating decreased performance; Academic records for students showing grade changes; Expert testimony explaining symptom mechanisms; Daily activity logs showing impact; Comparison to pre-injury functioning; Advanced imaging detecting subtle abnormalities; Consistent medical documentation over time. Insurance companies exploit invisible injuries claiming exaggeration. We build overwhelming evidence from multiple sources making symptoms undeniable."
    },
    {
      question: "What if I don't remember the accident?",
      answer: "Memory loss actually supports brain injury severity. Post-traumatic amnesia indicates significant trauma. We build cases through witness statements, police reports, surveillance footage, vehicle damage analysis, medical records from first responders, 911 call recordings, accident reconstruction, and biomechanical expert analysis. Loss of consciousness or memory gaps strengthen TBI claims. Insurance companies can't use your memory loss against you. California law doesn't require victim testimony when other evidence proves liability. We investigate thoroughly, gathering evidence you can't provide. Memory loss surrounding trauma is common with TBI and actually validates injury severity rather than weakening cases."
    },
    {
      question: "Can social media hurt my brain injury case?",
      answer: "Yes, insurance companies systematically monitor social media to undermine claims. Photos appearing happy or active become 'evidence' you're not injured. Posts about activities get twisted to show capability. Even old photos get misrepresented as current. Privacy settings don't prevent legal discovery. Best practice: stop posting during your case, never post about your accident or case, don't accept new friend requests, ask friends/family not to tag you, and save but don't delete existing posts. Insurance investigators take posts out of context - one 'good day' photo undermines months of suffering. We advise complete social media abstinence during litigation."
    },
    {
      question: "Will my brain injury case go to trial?",
      answer: "Most brain injury cases (approximately 95%) settle without trial, but trial readiness drives better settlements. Cases go to trial when insurance companies unreasonably deny liability or adequate compensation. Trial factors include strength of liability evidence, severity of injuries versus offers, insurance coverage disputes, and defendant's willingness to negotiate. We prepare every case for trial, which paradoxically prevents most trials by demonstrating strength. Juries sympathize with brain injury victims and often award more than settlements. Trial involves 12-18 months of litigation, depositions, expert preparation, and 1-2 week trial. We're experienced trial attorneys who insurance companies know will go to court."
    },
    {
      question: "What happens during a brain injury lawsuit?",
      answer: "The litigation process includes: Filing complaint initiating lawsuit; Discovery phase exchanging evidence and information; Depositions where parties testify under oath; Medical examinations by defense doctors; Expert witness designation and reports; Motion practice on legal issues; Mediation attempting settlement; Trial preparation if settlement fails; Trial presenting evidence to jury; Verdict and potential appeals. Throughout, we handle all legal work while keeping you informed. You'll participate in deposition and possibly trial testimony. Most work happens behind scenes. Timeline is typically 12-24 months. We push cases efficiently while building maximum value."
    },
    {
      question: "Do I have to testify in court?",
      answer: "If your case goes to trial, your testimony is usually necessary but we thoroughly prepare you. Most cases settle without trial testimony. During litigation, you'll likely give a deposition (testimony under oath outside court). Trial testimony involves direct examination where we ask friendly questions, and cross-examination from defense attorneys. We prepare you extensively, reviewing questions, practicing responses, and explaining procedures. Brain injury victims often worry about cognitive difficulties affecting testimony. We work with your limitations, using aids if needed. Judges and juries understand brain injury impacts. Your genuine testimony about suffering and life changes is powerful."
    },
    {
      question: "How important are neuropsychological evaluations?",
      answer: "Neuropsychological testing is crucial for documenting brain injury impacts invisible on imaging. Comprehensive testing evaluates memory, attention, processing speed, executive function, language, visual-spatial skills, and emotional functioning. Results provide objective evidence of cognitive deficits, baseline for tracking recovery or decline, and comparison to pre-injury functioning estimates. Testing identifies specific deficits affecting work capacity and daily living. Insurance companies can't dismiss documented cognitive impairment as subjective complaints. Serial testing shows improvement or permanent deficits. These evaluations often provide the strongest evidence in mild TBI cases."
    },
    {
      question: "Should I see the insurance company's doctor?",
      answer: "Insurance medical exams (IMEs) are not independent - doctors are paid to minimize injuries. You may be required to attend but protect yourself: bring a witness or request recording, review all paperwork carefully before signing, don't exaggerate but fully describe symptoms, keep your own detailed notes of the exam, and never go without attorney preparation. These doctors spend minimal time, perform cursory exams, and write reports minimizing injuries regardless of findings. We prepare you for tactics, attend when permitted, and counter biased reports with legitimate medical evidence. IME doctors are hired guns - we expose their bias and frequent testimony for insurance companies."
    },
    {
      question: "What therapies help with brain injury recovery?",
      answer: "Comprehensive rehabilitation improves outcomes and documents ongoing needs: Physical therapy for balance, coordination, and strength; Occupational therapy for daily living skills; Speech therapy for communication and swallowing; Cognitive rehabilitation for memory and thinking skills; Vision therapy for eye movement and processing; Psychological counseling for emotional adjustment; Vocational rehabilitation for work skills; Art/music therapy for expression and motor skills. Early, intensive therapy provides best recovery potential. Insurance often limits therapy sessions despite medical necessity. We fight for continued treatment and document therapy needs for compensation."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Brain Injury Lawyers | TBI Attorney | Trembach Law Firm"
        description="California brain injury lawyers fighting for TBI victims. Former defense attorney securing maximum compensation. Free 24/7 consultation. No fees unless we win."
        canonical="/practice-areas/brain-injuries"
      />

      {/* Go Back Button */}
      <div className="fixed top-20 left-6 z-[60]">
        <Button
          variant="default"
          size="lg"
          onClick={() => {
            if (window.history.length > 1) {
              window.history.back();
            } else {
              window.location.href = '/';
            }
          }}
          className="flex items-center gap-2 bg-background/80 text-foreground hover:bg-background/90 border border-border shadow-lg rounded-full px-5 backdrop-blur supports-[backdrop-filter]:backdrop-blur"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="hero-content relative z-10 text-center max-w-4xl mx-auto px-6">
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            California Brain Injury Attorneys
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Your brain injury changes everything. We fight to secure the compensation and care you need for life. Former defense attorney now fighting for TBI victims throughout California.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-6"
              onClick={() => window.location.href = '/brain-case-evaluation'}
            >
              Get Your Free Case Review
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => window.open('tel:8181234567')}
            >
              Call (818) 123-4567
            </Button>
          </div>
          
          <p className="text-white/90 mt-6 text-lg">
            <strong>No Fees. No Risk.</strong><br />
            You only pay when we win
          </p>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border shadow-lg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide py-3">
            <div className="flex space-x-1 min-w-full">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center px-4 py-2 text-sm font-medium whitespace-nowrap rounded-lg transition-all ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <tab.icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        {/* Main Content */}
        <div ref={contentRef} className="flex-1 px-6 py-8">
          {/* Overview Section */}
          <section id="overview" className="content-section py-16">
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold mb-8 text-foreground">
                Understanding Brain Injuries in California
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  Brain injuries are often called the "invisible injury" because symptoms may not appear immediately. Unlike broken bones visible on X-rays, brain damage can be subtle yet devastating. Even "mild" traumatic brain injuries like concussions can cause permanent cognitive, emotional, and physical changes.
                </p>
                
                <p className="text-lg leading-relaxed mb-6">
                  The brain controls everything - from breathing to personality. When damaged, every aspect of life can change. Memory problems, difficulty concentrating, mood swings, depression, anxiety, and physical symptoms like chronic headaches can persist for years or permanently.
                </p>
                
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                      Learn more about brain injury impact...
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="space-y-4 text-base leading-relaxed">
                      <p>
                        Insurance companies exploit this invisibility, claiming victims are exaggerating or that symptoms are unrelated to the accident. They hire experts to minimize your injuries while their adjusters pressure you to settle quickly for far less than you need.
                      </p>
                      <p>
                        Our firm understands brain injuries from both sides. As former defense attorneys, we know exactly how insurance companies build their cases against TBI victims. This inside knowledge allows us to anticipate their tactics and build overwhelming evidence supporting your claim.
                      </p>
                      <p>
                        Brain injuries require specialized medical and legal expertise. The difference between a mild concussion and moderate TBI can mean hundreds of thousands of dollars in compensation. We work with leading neurologists, neuropsychologists, and life care planners to document every aspect of your injury and its impact on your future.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>
          </section>

          {/* What to Do Section */}
          <section id="what-to-do" className="content-section py-16">
            <div className="flex items-center gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  What to Do After a Brain Injury
                </h2>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                        1
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Seek Immediate Medical Care</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Brain injuries can have delayed symptoms. Get a comprehensive medical evaluation immediately, even if you feel fine. Document all symptoms, no matter how minor they seem.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        2
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Document Everything</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Keep detailed records of symptoms, medical visits, missed work, and daily challenges. Take photos of injuries and accident scenes. This evidence is crucial for your claim.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                        3
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Contact Trembach Law Firm</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Insurance companies minimize brain injury claims. Our former defense experience reveals their tactics. We fight for maximum compensation while you focus on recovery.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                        4
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">Protect Your Rights</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Don't give recorded statements or sign anything without legal counsel. California's two-year statute of limitations makes prompt action essential for preserving your claim.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src={whatToDoImage} 
                  alt="Brain injury emergency medical care equipment"
                  className="w-96 h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Types of Brain Injuries Section */}
          <section id="types-of-injuries" className="content-section py-16">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Types of Brain Injuries We Handle
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Brain className="w-5 h-5 mr-2 text-primary" />
                        Traumatic Brain Injury (TBI)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Caused by external force to the head from car accidents, falls, or blows. Ranges from mild concussions to severe injuries causing permanent disability. Even "mild" TBI can result in lasting cognitive and emotional changes requiring extensive treatment.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Activity className="w-5 h-5 mr-2 text-primary" />
                        Concussion / Mild TBI
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Often dismissed as "just a concussion," these injuries can cause persistent post-concussion syndrome with headaches, dizziness, memory problems, and mood changes lasting months or years. Multiple concussions increase risk of CTE.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Search className="w-5 h-5 mr-2 text-primary" />
                        Diffuse Axonal Injury
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Severe rotational forces tear brain nerve fibers, often from high-speed crashes or violent shaking. Can cause coma, permanent vegetative state, or severe cognitive and physical disabilities. Requires lifetime care.
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Heart className="w-5 h-5 mr-2 text-primary" />
                        Anoxic/Hypoxic Brain Injury
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        Oxygen deprivation from drowning, medical malpractice, or cardiac arrest. Even brief oxygen loss causes permanent damage. Victims may suffer memory loss, cognitive impairment, and physical disabilities.
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <Collapsible className="mt-6">
                  <CollapsibleTrigger asChild>
                    <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                      See more brain injury types...
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="mt-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-lg">Penetrating Brain Injury</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            Object penetrates skull damaging brain tissue. Common in workplace accidents, violent crimes, and severe crashes. Often requires multiple surgeries and causes permanent focal deficits.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="text-lg">Coup-Contrecoup Injury</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">
                            Brain impacts skull on impact side (coup) and opposite side (contrecoup) from violent motion. Common in vehicle accidents and falls. Causes damage to multiple brain areas with complex symptoms.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src={accidentTypesImage} 
                  alt="Brain injury testing and diagnostic equipment"
                  className="w-96 h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Proving Negligence Section */}
          <section id="proving-negligence" className="content-section py-16">
            <div className="flex items-start gap-8">
              <div className="hidden lg:block">
                <img 
                  src={provingNegligenceImage} 
                  alt="Legal documentation and brain injury case files"
                  className="w-96 h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
              
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Proving Your Brain Injury Case
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Medical Documentation</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Comprehensive medical records documenting diagnosis, treatment, and prognosis. We work with leading neurologists and neuropsychologists to establish clear evidence of your brain injury.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Neuropsychological Testing</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Objective testing documenting cognitive deficits invisible on standard imaging. These evaluations provide concrete evidence of brain injury impacts on daily functioning.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Testimony</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      Leading brain injury specialists explain your condition, treatment needs, and life-long impacts to insurance companies and juries.
                    </p>
                  </div>
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                        Learn more about evidence gathering...
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Witness Testimony</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Family, friends, and coworkers testify about personality changes, cognitive decline, and functional limitations they observe daily.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Employment Records</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Documentation of work performance changes, missed days, accommodation requests, and reduced productivity following your injury.
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Life Care Planning</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            Comprehensive evaluation of future medical needs, rehabilitation requirements, and lifetime care costs by certified life care planners.
                          </p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </div>
          </section>

          {/* Compensation Section */}
          <section id="compensation" className="content-section py-16">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Brain Injury Compensation
                </h2>
                
                <div className="space-y-8">
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                        Economic Damages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Medical expenses (current and future treatment)
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Lost wages and reduced earning capacity
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Rehabilitation and therapy costs
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Home modifications and assistive devices
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          24/7 attendant care for severe injuries
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border border-border">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Heart className="w-6 h-6 mr-2 text-red-600" />
                        Non-Economic Damages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Pain and suffering from injuries
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Emotional distress and mental anguish
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Loss of enjoyment of life
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Disfigurement and scarring
                        </li>
                        <li className="flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          Loss of consortium for spouses
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-6 rounded-lg border border-border">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Typical Settlement Ranges</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="font-semibold text-foreground">Mild TBI/Concussion</p>
                        <p className="text-muted-foreground">$100,000 - $500,000+</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Moderate TBI</p>
                        <p className="text-muted-foreground">$500,000 - $2,000,000+</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Severe TBI</p>
                        <p className="text-muted-foreground">$2,000,000 - $10,000,000+</p>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Catastrophic TBI</p>
                        <p className="text-muted-foreground">$5,000,000 - $20,000,000+</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4 italic">
                      Note: Every case is unique. These ranges reflect potential values, not guarantees. Contact us for a personalized case evaluation.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="hidden lg:block">
                <img 
                  src={compensationImage} 
                  alt="Brain injury rehabilitation and recovery center"
                  className="w-96 h-80 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>

          {/* Time Limits Section */}
          <section id="time-limits" className="content-section py-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              California Time Limits for Brain Injury Claims
            </h2>
            
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
                <h3 className="text-xl font-semibold text-red-800 dark:text-red-200">
                  Don't Wait - Act Now!
                </h3>
              </div>
              <p className="text-red-800 dark:text-red-200 leading-relaxed text-lg">
                California law strictly enforces deadlines for filing brain injury claims. Missing these deadlines means losing your right to compensation forever.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    General Cases
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">2 Years</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From the date of accident or discovery of injury for most brain injury cases against private parties.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Building className="w-5 h-5 mr-2 text-primary" />
                    Government Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">6 Months</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Claims against government entities must be filed within six months of the incident.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                    Medical Malpractice
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-foreground mb-2">1 Year</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    From discovery of injury caused by medical negligence, with some exceptions.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                Why Immediate Action Is Critical:
              </h4>
              <ul className="space-y-1 text-yellow-800 dark:text-yellow-200 text-sm">
                <li>• Evidence disappears quickly (surveillance footage, witness memories)</li>
                <li>• Medical records may be destroyed after certain periods</li>
                <li>• Early treatment documentation strengthens your case</li>
                <li>• Insurance companies are less cooperative as time passes</li>
                <li>• California courts strictly enforce these deadlines</li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="content-section py-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="border border-border">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full text-left p-6 flex justify-between items-center hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-foreground pr-4">
                      {faq.question}
                    </h3>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed text-base">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          {/* Resources Section */}
          <section id="resources" className="content-section py-16">
            <h2 className="text-4xl font-bold mb-8 text-foreground">
              Brain Injury Resources
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Scale className="w-5 h-5 mr-2 text-primary" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Get a comprehensive review of your brain injury case from our experienced attorneys.
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/brain-case-evaluation'}
                  >
                    Start Evaluation
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Calculator className="w-5 h-5 mr-2 text-primary" />
                    Compensation Calculator
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Estimate the potential value of your brain injury compensation claim.
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/brain-compensation-calculator'}
                  >
                    Calculate Value
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <BookOpen className="w-5 h-5 mr-2 text-primary" />
                    Medical Guidance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Comprehensive guide to brain injury treatment and recovery resources.
                  </p>
                  <Button 
                    className="w-full" 
                    onClick={() => window.location.href = '/brain-medical-guidance'}
                  >
                    Get Guidance
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>

        {/* Sticky Sidebar */}
        <div className="hidden lg:block w-80 pl-8">
          <div className="sticky top-24 space-y-6">
            {/* Contact Form */}
            <Card className="bg-gradient-to-b from-red-600 to-red-700 text-white border-0">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">
                    3 Ways to 
                    Start Your Case
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
                  </h3>
                  
                  <p className="text-lg mb-8 text-gray-200 leading-relaxed">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      CALL (818) 123-4567
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/brain-case-evaluation'}
                    >
                      EMAIL US
                    </Button>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = '/brain-compensation-calculator'}
                    >
                      CALCULATE SETTLEMENT
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Quick Facts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Statute of Limitations:</span>
                  <span className="font-semibold">2 Years</span>
                </div>
                <div className="flex justify-between">
                  <span>Government Claims:</span>
                  <span className="font-semibold">6 Months</span>
                </div>
                <div className="flex justify-between">
                  <span>Medical Malpractice:</span>
                  <span className="font-semibold">1 Year</span>
                </div>
                <div className="flex justify-between">
                  <span>Our Success Rate:</span>
                  <span className="font-semibold text-green-600">95%+</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Brain Injury Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            California law gives you only two years from the accident date to file your claim. Government entity claims require filing within six months. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.location.href = '/brain-case-evaluation'}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('tel:8181234567')}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrainInjuries;