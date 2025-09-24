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
  VolumeX,
  Headphones,
  Brain,
  Activity
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/hearing-loss-hero.jpg';
import diagnosisImage from '@/assets/hearing-loss-diagnosis.jpg';
import treatmentImage from '@/assets/hearing-loss-treatment.jpg';
import workplaceImage from '@/assets/hearing-loss-workplace.jpg';
import compensationImage from '@/assets/hearing-loss-compensation.jpg';
import medicalDevicesImage from '@/assets/hearing-loss-medical-devices.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const HearingLoss: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    hearingLossType: '',
    causeOfLoss: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'diagnosis-steps', label: 'WHAT TO DO AFTER DIAGNOSIS', icon: Stethoscope },
    { id: 'types', label: 'TYPES OF HEARING LOSS', icon: VolumeX },
    { id: 'causes', label: 'CAUSES & LIABILITY', icon: AlertTriangle },
    { id: 'treatment', label: 'TREATMENT OPTIONS', icon: Headphones },
    { id: 'compensation', label: 'COMPENSATION', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Building },
    { id: 'faq', label: 'FAQ', icon: MessageCircle }
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
    window.location.href = '/practice-areas/hearing-loss/case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What is sensorineural hearing loss?",
      answer: "Permanent damage to inner ear hair cells or auditory nerve, typically irreversible. Common from noise exposure, head trauma, or ototoxic chemicals. Results in difficulty understanding speech, especially in noisy environments."
    },
    {
      question: "Can I sue for workplace hearing damage?",
      answer: "Workers' compensation covers most workplace injuries, but third-party claims possible against equipment manufacturers, contractors, or property owners. Intentional employer misconduct may allow civil suits beyond workers' comp."
    },
    {
      question: "How much compensation can I receive?",
      answer: "Settlements vary widely based on severity, age, occupation, and cause. Minor temporary loss might settle for thousands; permanent bilateral deafness in young workers can exceed millions. Each case requires individual evaluation."
    },
    {
      question: "What is acoustic trauma?",
      answer: "Hearing damage from sudden, extremely loud sounds like explosions, gunshots, or airbag deployment. Can cause immediate permanent damage to cochlear hair cells, eardrum rupture, and ossicular disruption."
    },
    {
      question: "Is hearing loss from military service compensable?",
      answer: "Veterans can receive VA disability benefits for service-connected hearing loss. Additionally, 3M earplug litigation allows claims for defective combat earplugs. California veterans may have additional state benefit options."
    },
    {
      question: "What are cochlear implants?",
      answer: "Surgically implanted devices bypassing damaged hair cells, directly stimulating auditory nerve. For severe-to-profound sensorineural hearing loss when hearing aids insufficient. Costs $30,000-50,000 plus surgery, programming, and rehabilitation."
    },
    {
      question: "Can children recover damages for hearing loss?",
      answer: "Yes. Childhood hearing loss profoundly impacts development, education, and future opportunities. California extends statute of limitations for minors. Damages include special education, speech therapy, lifetime medical costs, and reduced earning capacity."
    },
    {
      question: "What is mixed hearing loss?",
      answer: "Combination of conductive and sensorineural hearing loss. Common in severe trauma affecting both mechanical sound transmission and nerve function. Requires complex treatment addressing both components."
    },
    {
      question: "How do you calculate pain and suffering for hearing loss?",
      answer: "Considering daily impact on communication, relationships, and activities; psychological effects including depression, anxiety, and isolation; safety concerns from inability to hear warnings; and permanence of condition."
    },
    {
      question: "Can stress or PTSD cause hearing problems?",
      answer: "Yes. Trauma-induced stress can trigger or worsen tinnitus, cause auditory processing difficulties, and result in hyperacusis (sound sensitivity). PTSD from accidents may manifest auditory symptoms."
    },
    {
      question: "What is barotrauma?",
      answer: "Ear injury from pressure changes. Can occur from explosions, rapid altitude changes, or airbag deployment. Causes eardrum rupture, middle ear hemorrhage, inner ear damage, and potentially permanent hearing loss."
    },
    {
      question: "Are there California-specific laws protecting hearing loss victims?",
      answer: "Yes. Cal/OSHA provides stronger workplace protections than federal standards. California's pure comparative negligence allows recovery even if partially at fault. No damage caps for most hearing loss cases."
    },
    {
      question: "Can I sue my employer for workplace hearing loss?",
      answer: "Through workers' compensation primarily, but third-party claims possible against equipment manufacturers, contractors, or property owners. Intentional employer misconduct may allow civil suits beyond workers' comp."
    },
    {
      question: "What is hyperacusis?",
      answer: "Extreme sensitivity to normal environmental sounds. Can develop after acoustic trauma or head injury. Everyday sounds become painful or overwhelming. Significantly impacts daily activities and social interaction."
    },
    {
      question: "How long does a hearing loss lawsuit take?",
      answer: "Timeline varies. Simple cases may settle in months; complex litigation can take 1-2 years. Factors include injury severity, liability disputes, insurance company cooperation, and court schedules."
    },
    {
      question: "Can medications cause hearing loss?",
      answer: "Yes. Ototoxic medications include certain antibiotics, chemotherapy drugs, loop diuretics, and high-dose aspirin. If prescribed negligently or without proper warnings, medical malpractice claims possible."
    },
    {
      question: "What is the average settlement for hearing loss cases?",
      answer: "Settlements vary widely based on severity, age, occupation, and cause. Minor temporary loss might settle for thousands; permanent bilateral deafness in young workers can exceed millions."
    },
    {
      question: "Do I need an audiogram before filing a claim?",
      answer: "While helpful, not required to start your claim. We can arrange comprehensive audiological evaluation. Pre-injury hearing tests provide valuable baseline comparisons strengthening your case."
    },
    {
      question: "Can vertigo or balance problems accompany hearing loss?",
      answer: "Yes. Inner ear houses both hearing (cochlea) and balance (vestibular) organs. Trauma affecting one often impacts the other. Vertigo, dizziness, and balance problems following accidents warrant evaluation."
    },
    {
      question: "What if my hearing loss appears months after an accident?",
      answer: "Delayed onset doesn't preclude compensation. Progressive hair cell death, delayed endolymphatic hydrops, and gradual recognition of high-frequency loss can manifest months later."
    },
    {
      question: "Are bone-anchored hearing aids (BAHA) covered in settlements?",
      answer: "Yes. BAHA devices for conductive hearing loss or single-sided deafness require surgical implantation and cost $10,000-15,000 plus surgery. Settlements should include initial placement, processor upgrades, and lifetime maintenance costs."
    },
    {
      question: "Can hearing loss cause cognitive decline?",
      answer: "Research shows untreated hearing loss accelerates cognitive decline and increases dementia risk. Reduced auditory stimulation affects brain function. Social isolation from communication difficulties compounds cognitive impact."
    },
    {
      question: "What is recruitment in hearing loss?",
      answer: "Abnormal loudness perception where soft sounds are inaudible but louder sounds become uncomfortably loud quickly. Common with sensorineural hearing loss. Makes hearing aid fitting challenging."
    },
    {
      question: "Can I recover future medical costs for hearing loss?",
      answer: "Yes. Life care planners calculate decades of future costs including audiological monitoring, hearing aid replacements, potential cochlear implants, assistive devices, and treatment for associated conditions."
    },
    {
      question: "What if the at-fault party has minimal insurance?",
      answer: "We explore all coverage sources: umbrella policies, employer liability, premises liability, product liability, and your own underinsured motorist coverage. Asset investigation may reveal additional recovery sources."
    },
    {
      question: "Should I see an ENT specialist or audiologist first?",
      answer: "For sudden hearing loss, see an ENT immediately for potential emergency treatment. For gradual changes or diagnostic evaluation, audiologists provide comprehensive hearing testing."
    },
    {
      question: "Can hearing loss affect my mental health?",
      answer: "Significantly. Studies show increased rates of depression, anxiety, and social isolation in hearing loss sufferers. Communication frustration, relationship strain, and lost independence impact psychological wellbeing."
    },
    {
      question: "What happens if I can't afford hearing aids while my case is pending?",
      answer: "We help arrange medical care on lien basis - providers wait for payment from settlement. Some programs offer loaner devices. Document financial hardship from inability to afford necessary devices."
    },
    {
      question: "How do insurance companies try to minimize hearing loss claims?",
      answer: "They argue pre-existing conditions, claim mild losses don't affect daily life, suggest hearing aids fully restore function, and pressure for quick settlements before understanding injury extent."
    },
    {
      question: "What evidence do I need for my hearing loss case?",
      answer: "Medical records, audiometric testing, expert testimony linking hearing damage to specific incidents, employment records showing work limitations, and psychological evaluations revealing emotional impact."
    },
    {
      question: "Can tinnitus be compensated separately from hearing loss?",
      answer: "Yes. Tinnitus (ringing/buzzing sounds) significantly impacts quality of life through sleep disruption, concentration difficulties, and psychological distress. Compensation addresses both hearing loss and tinnitus effects."
    },
    {
      question: "What is the statute of limitations for hearing loss claims in California?",
      answer: "Generally two years from injury date, but hearing loss often develops gradually. Discovery rule may extend deadlines from when you knew or should have known about the injury and its cause."
    },
    {
      question: "Are there different types of hearing aids for different losses?",
      answer: "Yes. Behind-the-ear, in-the-ear, and completely-in-canal styles serve different needs. Digital features include directional microphones, noise reduction, bluetooth connectivity. Professional fitting optimizes performance."
    },
    {
      question: "Can workplace noise exposure cause gradual hearing loss?",
      answer: "Yes. Prolonged exposure to noise over 85 decibels causes cumulative damage. Workers adapt to gradually worsening hearing until significant damage occurs. Employers must provide protection and monitoring."
    },
    {
      question: "What role do expert witnesses play in hearing loss cases?",
      answer: "Audiologists establish hearing loss extent, ENT specialists determine causation, occupational medicine experts link workplace exposure, economists calculate lifetime losses, and life care planners project future costs."
    },
    {
      question: "Can hearing loss from car accidents be compensated?",
      answer: "Yes. Airbag deployment (160-178 dB), impact trauma, and explosion-like sounds from crashes can cause immediate or delayed hearing damage requiring comprehensive evaluation and treatment."
    },
    {
      question: "What is the difference between conductive and sensorineural hearing loss?",
      answer: "Conductive loss involves outer/middle ear problems blocking sound transmission, often treatable medically/surgically. Sensorineural loss affects inner ear/nerve, typically permanent, requiring hearing aids or implants."
    },
    {
      question: "How do you prove workplace noise caused my hearing loss?",
      answer: "Through noise dosimetry readings, OSHA inspection reports, comparing pre-employment and current audiograms, coworker testimony about noise levels, and expert analysis of workplace hazards."
    },
    {
      question: "Can explosions cause delayed hearing loss symptoms?",
      answer: "Yes. Initial shock wave damage may not manifest immediately. Progressive hair cell death, delayed endolymphatic hydrops, and gradual recognition of high-frequency loss can appear weeks or months later."
    },
    {
      question: "What compensation is available for family members affected by my hearing loss?",
      answer: "Loss of consortium claims address relationship impacts. Family members may recover for loss of companionship, communication difficulties, and emotional distress from watching loved ones struggle with hearing impairment."
    },
    {
      question: "Are there federal regulations protecting workers from noise exposure?",
      answer: "Yes. OSHA requires hearing conservation programs including noise monitoring, audiometric testing, hearing protection, and training. Cal/OSHA provides even stronger protections with lower action levels."
    },
    {
      question: "What is sudden sensorineural hearing loss (SSNHL)?",
      answer: "Rapid onset hearing loss requiring emergency treatment within 72 hours. Can result from trauma, viral infections, autoimmune disorders, or unknown causes. Early steroid treatment may prevent permanent damage."
    },
    {
      question: "Can chemical exposure cause hearing loss?",
      answer: "Yes. Ototoxic substances include industrial solvents, heavy metals, carbon monoxide, and certain pesticides. Combined exposure to chemicals and noise exponentially increases damage risk."
    },
    {
      question: "How do you calculate lost earning capacity for hearing loss?",
      answer: "Vocational experts assess how hearing loss limits career options. Economic experts project lifetime earning losses considering education, skills, pre-injury trajectory, and accommodation possibilities."
    },
    {
      question: "What assistive devices beyond hearing aids might I need?",
      answer: "FM systems for meetings, amplified phones, vibrating alarms, visual alert systems, closed captioning services, and home safety modifications. Costs add up over lifetime requiring comprehensive planning."
    },
    {
      question: "Can hearing loss cases go to trial?",
      answer: "Yes. While many settle, complex cases involving disputed liability, severe damages, or bad faith insurance practices may require jury trial. We prepare every case thoroughly for potential trial."
    },
    {
      question: "What is presbycusis and how does it affect my case?",
      answer: "Age-related hearing loss that insurance companies claim caused your symptoms. Expert analysis can differentiate trauma-induced loss from normal aging, especially when sudden changes occur after incidents."
    },
    {
      question: "Are there support groups for people with hearing loss?",
      answer: "Yes. Organizations like HLAA (Hearing Loss Association of America) provide support, education, and advocacy. Participation demonstrates ongoing impact and may provide helpful testimony for your case."
    },
    {
      question: "Can hearing loss affect my ability to drive safely?",
      answer: "Yes. Inability to hear sirens, horns, or approaching vehicles creates safety risks. Some states require additional mirrors or restrictions. These limitations affect independence and may warrant additional compensation."
    },
    {
      question: "What is auditory processing disorder (APD)?",
      answer: "Difficulty processing heard information despite normal hearing thresholds. Can result from head trauma affecting brain's auditory centers. Requires specialized testing and treatment, separate from peripheral hearing loss."
    }
  ];

  return (
    <>
      <SEO 
        title="California Hearing Loss Attorneys | Industrial Deafness Lawyers | Trembach Law Firm"
        description="California hearing loss lawyers fighting for victims of workplace noise exposure, acoustic trauma, and accident-related deafness. Free consultation. No fees unless we win your case."
        keywords="hearing loss lawyer California, industrial deafness attorney, acoustic trauma lawyer, workplace noise exposure, tinnitus compensation, sensorineural hearing loss attorney"
        canonical="https://www.trembachlawfirm.com/practice-areas/hearing-loss"
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
                California Hearing Loss Attorneys
              </h1>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Fighting for Maximum Compensation</span>
              </div>
              
              <p className="text-xl mb-8 max-w-3xl">
                Has an accident, workplace exposure, or sudden trauma left you with hearing damage? 
                Our experienced legal team fights for victims of hearing loss throughout California.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                  onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                >
                  START MY FREE CASE EVALUATION
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
              </div>
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
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Hearing Loss Injury Attorneys</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Hearing loss can be one of the most devastating yet invisible injuries. Unlike a broken bone that heals, damage to your auditory system often results in permanent impairment affecting every aspect of your life. The sudden inability to hear loved ones' voices, participate in conversations, or enjoy music transforms daily existence in profound ways most people cannot imagine until experiencing it themselves.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    California law recognizes hearing loss as a serious injury deserving substantial compensation, whether caused by workplace noise exposure, car accidents, explosions, or other traumatic events. However, insurance companies routinely minimize these claims, arguing that hearing loss is age-related or pre-existing. They exploit the invisible nature of auditory damage to deny rightful compensation to suffering victims.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About Our California Hearing Loss Practice
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
                          <p>Our team works closely with leading audiologists and ENT specialists throughout California to understand the full scope of your hearing loss, prognosis, and treatment needs.</p>
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
                          <p>We have extensive knowledge of California's industrial history, including shipyards, construction sites, and manufacturing facilities where noise exposure occurs.</p>
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
                      <h3>Comprehensive California Hearing Loss Representation</h3>
                      <p>
                        Hearing loss cases in California involve complex medical, legal, and workplace factors. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of noise exposure to working with medical experts who can clearly explain how specific incidents caused your hearing damage.
                      </p>
                      
                      <p>
                        California has extensive industrial operations where workers face dangerous noise levels. Many of our clients were exposed to hazardous noise at facilities including:
                      </p>
                      
                      <ul>
                        <li>Construction sites with heavy machinery and power tools</li>
                        <li>Manufacturing facilities with loud industrial equipment</li>
                        <li>Shipyards and maritime operations</li>
                        <li>Airports and aviation maintenance facilities</li>
                        <li>Entertainment venues and concert halls</li>
                        <li>Military installations and training facilities</li>
                      </ul>
                      
                      <p>
                        We investigate every potential source of exposure and liability to ensure no responsible party escapes accountability for your hearing loss. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Free Hearing Loss Case Evaluation</h2>
                
                <div className="bg-muted p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                  <p className="mb-6">Provide some basic information to help us understand your hearing loss case better.</p>
                  
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Hearing Loss</label>
                        <Select value={formData.hearingLossType} onValueChange={(value) => setFormData(prev => ({ ...prev, hearingLossType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select hearing loss type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sensorineural">Sensorineural Hearing Loss</SelectItem>
                            <SelectItem value="conductive">Conductive Hearing Loss</SelectItem>
                            <SelectItem value="mixed">Mixed Hearing Loss</SelectItem>
                            <SelectItem value="sudden">Sudden Hearing Loss</SelectItem>
                            <SelectItem value="tinnitus">Tinnitus</SelectItem>
                            <SelectItem value="unknown">Not Sure/Need Testing</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Cause of Hearing Loss</label>
                        <Select value={formData.causeOfLoss} onValueChange={(value) => setFormData(prev => ({ ...prev, causeOfLoss: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cause" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="workplace-noise">Workplace Noise Exposure</SelectItem>
                            <SelectItem value="car-accident">Car Accident</SelectItem>
                            <SelectItem value="explosion">Explosion/Blast</SelectItem>
                            <SelectItem value="airbag">Airbag Deployment</SelectItem>
                            <SelectItem value="industrial-accident">Industrial Accident</SelectItem>
                            <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                            <SelectItem value="head-trauma">Head Trauma</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
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
                <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Hearing Loss Diagnosis</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Heart className="w-5 h-5 mr-2 text-red-600" />
                        Immediate Medical Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Get a second opinion from an ENT specialist</p>
                      <p>• Request all medical records and audiometry reports</p>
                      <p>• Explore treatment options including hearing aids</p>
                      <p>• Consider emergency treatment if sudden hearing loss</p>
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
                      <p>• Contact our firm before speaking to insurance companies</p>
                      <p>• Document all symptoms and their impact on daily life</p>
                      <p>• Preserve evidence from the workplace or accident scene</p>
                      <p>• Don't accept any quick settlement offers</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                  <div className="flex">
                    <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Time is Critical</h3>
                      <p className="text-yellow-700">
                        California has strict deadlines for filing hearing loss claims. Evidence can be lost, and witnesses' memories fade. 
                        The sooner you contact us, the better we can protect your rights and preserve crucial evidence for your case.
                      </p>
                    </div>
                  </div>
                </div>

                <img src={diagnosisImage} alt="Hearing diagnosis equipment" className="w-full h-64 object-cover rounded-lg mb-6" />
              </section>

              {/* Types of Hearing Loss */}
              <section id="types" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Different Types of Hearing Loss</h2>

                <Collapsible open={expandedSections.sensorineural} onOpenChange={() => toggleSection('sensorineural')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Sensorineural Hearing Loss (SNHL)
                      {expandedSections.sensorineural ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <p>
                      Sensorineural hearing loss represents the most common and often permanent type of hearing damage, occurring when delicate hair cells in the cochlea or the auditory nerve sustain injury. This damage disrupts the conversion of sound vibrations into electrical signals the brain interprets as hearing. Once these microscopic hair cells are destroyed, they cannot regenerate, making SNHL typically irreversible.
                    </p>
                    
                    <h4 className="font-semibold">Common causes in personal injury cases include:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Acoustic trauma:</strong> Sudden exposure to extremely loud sounds like airbag deployment (160-178 dB), explosions, gunshots, or industrial accidents</li>
                      <li><strong>Head trauma:</strong> Traumatic brain injuries damaging the auditory pathway from inner ear to brain</li>
                      <li><strong>Ototoxic exposure:</strong> Chemical substances in workplaces that poison the inner ear</li>
                      <li><strong>Barotrauma:</strong> Pressure changes from explosions or rapid decompression</li>
                      <li><strong>Temporal bone fractures:</strong> Skull fractures affecting the ear's bony housing</li>
                    </ul>
                    
                    <p>
                      Symptoms of SNHL include difficulty understanding speech especially in noisy environments, sounds seeming muffled or distorted, tinnitus (ringing/buzzing), inability to hear high-frequency sounds, and challenges localizing sound sources. Treatment options remain limited, primarily involving hearing aids or cochlear implants for severe cases, making compensation for lifetime medical needs crucial.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={expandedSections.conductive} onOpenChange={() => toggleSection('conductive')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Conductive Hearing Loss
                      {expandedSections.conductive ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <p>
                      Conductive hearing loss occurs when sound waves cannot properly travel through the outer ear, ear canal, eardrum, or middle ear bones (ossicles) to reach the inner ear. Unlike sensorineural damage, conductive hearing loss often responds to medical or surgical treatment, though not always successfully.
                    </p>
                    
                    <h4 className="font-semibold">Accident-related causes include:</h4>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Ruptured eardrum:</strong> From explosion pressure waves, direct trauma, or severe pressure changes</li>
                      <li><strong>Ossicular chain disruption:</strong> Dislocation or fracture of the tiny middle ear bones from impact</li>
                      <li><strong>External auditory canal damage:</strong> Bleeding, swelling, or foreign objects blocking sound transmission</li>
                      <li><strong>Cholesteatoma formation:</strong> Abnormal skin growth following trauma</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible open={expandedSections.mixed} onOpenChange={() => toggleSection('mixed')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Mixed Hearing Loss & Tinnitus
                      {expandedSections.mixed ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <p>
                      Mixed hearing loss combines both conductive and sensorineural components, often resulting from severe trauma affecting multiple ear structures. This type of hearing loss typically produces greater disability than either type alone and requires complex treatment addressing both mechanical and neural aspects.
                    </p>
                    
                    <p>
                      Tinnitus, the perception of ringing, buzzing, or other phantom sounds, frequently accompanies both types of hearing loss. This condition can be more debilitating than the hearing loss itself, causing sleep disruption, concentration difficulties, anxiety, and depression. Tinnitus severity doesn't always correlate with hearing loss degree, and some victims experience tinnitus without measurable hearing loss.
                    </p>
                  </CollapsibleContent>
                </Collapsible>

                <img src={treatmentImage} alt="Hearing treatment devices" className="w-full h-64 object-cover rounded-lg mt-6" />
              </section>

              {/* Causes & Liability */}
              <section id="causes" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Common Causes of Hearing Loss & Legal Liability</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-orange-600" />
                        Workplace Noise Exposure
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>Prolonged exposure to noise over 85 decibels causes cumulative cochlear damage. California requires employers to provide hearing protection, conduct audiometric testing, and implement engineering controls.</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Legal Basis:</strong> Workers' compensation, third-party equipment manufacturer claims, premises liability
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Explosion & Blast Injuries
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>Explosions cause complex ear injuries through pressure waves, acoustic trauma, and flying debris. Common in industrial accidents, construction sites, and chemical incidents.</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Legal Basis:</strong> Negligence, premises liability, product liability, safety violation claims
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Activity className="w-5 h-5 mr-2 text-blue-600" />
                        Motor Vehicle Accidents
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>Airbag deployment produces 160-178 decibels, head trauma from impact, and explosion-like crash sounds can cause immediate or delayed hearing damage.</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Legal Basis:</strong> Auto negligence, product liability for defective airbags, uninsured motorist claims
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Brain className="w-5 h-5 mr-2 text-purple-600" />
                        Chemical Exposure
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>Ototoxic substances including industrial solvents, heavy metals, and chemicals damage hearing through inner ear poisoning, often combined with noise exposure.</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Legal Basis:</strong> Toxic exposure, failure to warn, inadequate safety equipment, environmental contamination
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <img src={workplaceImage} alt="Workplace safety equipment" className="w-full h-64 object-cover rounded-lg" />
              </section>

              {/* Treatment Options */}
              <section id="treatment" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Medical Treatment Options for Hearing Loss</h2>

                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Emergency Treatment
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Sudden hearing loss constitutes a medical emergency. Immediate treatment within 72 hours can sometimes prevent permanent damage. Emergency interventions include high-dose corticosteroids (oral or intratympanic injections), hyperbaric oxygen therapy for severe cases, surgical repair of eardrum perforations, and removal of blood or debris from ear canal.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Delaying treatment dramatically reduces recovery chances and may weaken legal claims.
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Headphones className="w-5 h-5 mr-2 text-blue-600" />
                        Hearing Aids & Assistive Devices
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">
                        Modern hearing aids offer sophisticated technology but cannot restore normal hearing. Features include digital signal processing, directional microphones, noise reduction algorithms, bluetooth connectivity, and rechargeable batteries. Professional fitting and programming optimize performance, but adjustment periods frustrate many users.
                      </p>
                      <ul className="list-disc pl-6 space-y-1 text-sm">
                        <li>Behind-the-ear, in-the-ear, and completely-in-canal styles</li>
                        <li>Bilateral hearing loss requires two aids for spatial hearing</li>
                        <li>Costs range from $1,000-8,000 per ear with 3-7 year replacement cycles</li>
                        <li>Additional devices: FM systems, amplified phones, visual alerts</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Heart className="w-5 h-5 mr-2 text-green-600" />
                        Surgical Interventions
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">Surgery may repair certain conductive hearing losses and provide options for severe sensorineural loss:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li><strong>Tympanoplasty:</strong> Repairs perforated eardrums</li>
                        <li><strong>Ossiculoplasty:</strong> Reconstructs damaged middle ear bones</li>
                        <li><strong>Cochlear implants:</strong> Bypass damaged hair cells for severe SNHL ($30,000-50,000)</li>
                        <li><strong>Bone-anchored devices:</strong> Transmit sound through skull bone ($10,000-15,000)</li>
                      </ul>
                      <p className="text-sm text-muted-foreground mt-4">
                        Success varies significantly. Failed surgeries may worsen hearing, requiring careful consideration.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <img src={medicalDevicesImage} alt="Medical hearing devices" className="w-full h-64 object-cover rounded-lg mt-6" />
              </section>

              {/* Compensation */}
              <section id="compensation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation for Hearing Loss Injuries</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-green-600">Economic Damages</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <h4 className="font-semibold">Medical Expenses</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Emergency treatment and hospitalization</li>
                        <li>Audiological evaluations and ongoing monitoring</li>
                        <li>Hearing aids and replacement costs</li>
                        <li>Cochlear implants and surgical procedures</li>
                        <li>Assistive devices and home modifications</li>
                      </ul>
                      
                      <h4 className="font-semibold">Lost Wages & Earning Capacity</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Time off work for treatment</li>
                        <li>Reduced earning capacity in hearing-dependent jobs</li>
                        <li>Career limitation and advancement restrictions</li>
                        <li>Vocational rehabilitation costs</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-blue-600">Non-Economic Damages</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <h4 className="font-semibold">Pain & Suffering</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Physical discomfort from tinnitus</li>
                        <li>Emotional distress and mental anguish</li>
                        <li>Depression and anxiety from isolation</li>
                        <li>Frustration with communication difficulties</li>
                      </ul>
                      
                      <h4 className="font-semibold">Loss of Life Enjoyment</h4>
                      <ul className="text-sm list-disc pl-4 space-y-1">
                        <li>Inability to enjoy music and nature sounds</li>
                        <li>Missing important family conversations</li>
                        <li>Social isolation and relationship strain</li>
                        <li>Safety concerns from inability to hear warnings</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">No Damage Caps</h3>
                  <p className="text-green-700">
                    Unlike medical malpractice cases, most hearing loss claims face no damage caps in California. You can recover full economic and non-economic damages without artificial limits. Punitive damages may apply for egregious conduct.
                  </p>
                </div>

                <img src={compensationImage} alt="Compensation calculation" className="w-full h-64 object-cover rounded-lg mt-6" />
              </section>

              {/* Legal Process */}
              <section id="legal-process" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">The Legal Process for Hearing Loss Cases</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Initial Consultation & Case Evaluation</h3>
                      <p>We review your medical records, discuss the incident causing your hearing loss, and evaluate the strength of your case. This consultation is free and confidential.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Medical Documentation & Expert Review</h3>
                      <p>We obtain all relevant medical records, arrange additional testing if needed, and have your case reviewed by medical experts who can establish causation and prognosis.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Investigation & Evidence Gathering</h3>
                      <p>Our team investigates the accident scene, workplace conditions, or product defects that caused your hearing loss. We interview witnesses and preserve crucial evidence.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Filing Your Claim</h3>
                      <p>We file your lawsuit within California's statute of limitations and handle all legal paperwork and court filings on your behalf.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Negotiation & Settlement</h3>
                      <p>We negotiate aggressively with insurance companies for fair compensation. Our former defense attorney experience gives us unique insight into their tactics.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">6</div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Trial Preparation & Court Proceedings</h3>
                      <p>If settlement negotiations fail, we're prepared to take your case to trial. We present compelling evidence and expert testimony to secure maximum compensation.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
                
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="glass-card">
                      <CardHeader 
                        className="cursor-pointer hover:bg-muted/50 transition-colors"
                        onClick={() => toggleFaq(index)}
                      >
                        <CardTitle className="flex justify-between items-center text-base">
                          {faq.question}
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
            </div>

            {/* Sidebar - Exactly matching Mesothelioma sticky structure */}
            <div className="lg:col-span-1" ref={sidebarRef}>
              <div className="sticky top-24 space-y-6">
                
                {/* 3 Ways to Start Your Case - Matches Mesothelioma */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center">3 Ways to Start Your Case</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/compensation-calculator'}
                    >
                      <Scale className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>

                {/* What We Evaluate - Matches Mesothelioma structure */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">What We Evaluate</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <VolumeX className="w-4 h-4 text-red-600" />
                      <span className="text-sm">Workplace Noise Exposure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-orange-600" />
                      <span className="text-sm">Industrial Accidents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Activity className="w-4 h-4 text-blue-600" />
                      <span className="text-sm">Vehicle Accidents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm">Chemical Exposure</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className="w-4 h-4 text-green-600" />
                      <span className="text-sm">Product Liability</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Heart className="w-4 h-4 text-pink-600" />
                      <span className="text-sm">Medical Malpractice</span>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/legal-guidance'}
                    >
                      📋 Legal Guidance
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/medical-guidance'}
                    >
                      🏥 Medical Guidance  
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/compensation-calculator'}
                    >
                      💰 Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section - Matching Mesothelioma */}
        <section className="bg-red-600 text-white py-16">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Don't Wait - Time Limits Apply for California Hearing Loss Claims</h2>
            <p className="text-xl mb-8">
              California has strict deadlines for filing hearing loss claims. Evidence can be lost and witnesses' memories fade. 
              The sooner you contact us, the better we can protect your rights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4"
                onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
              >
                Get Your Free Case Evaluation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HearingLoss;