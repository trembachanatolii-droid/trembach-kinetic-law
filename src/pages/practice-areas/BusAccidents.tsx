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
  Bus,
  Calculator,
  DollarSign
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/bus-accident-hero-bg.jpg';
import sidebarImage from '@/assets/bus-accident-sidebar.jpg';
import medicalProcessImage from '@/assets/bus-accident-medical-process.jpg';
import legalProcessImage from '@/assets/bus-accident-legal-process.jpg';
import accidentZonesImage from '@/assets/california-bus-accident-zones.jpg';
import medicalImage from '@/assets/bus-accident-medical-facility.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BusAccidents: React.FC = () => {
  useScrollRestoration();
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    busType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'steps-after', label: 'WHAT TO DO AFTER ACCIDENT', icon: Stethoscope },
    { id: 'process', label: 'COMMON INJURIES', icon: Heart },
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
    window.location.href = '/bus-accident/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Bus Accident Lawyers | MTA, School & Charter Bus Attorneys | Trembach Law Firm"
        description="Injured in a California bus accident? 6-month deadline for government claims. Former defense attorney fights MTA, school districts & bus companies. Free 24/7 consultation. No fees unless we win."
        canonical="https://www.trembachlawfirm.com/practice-areas/bus-accidents"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
        
        <GoBack />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Bus Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorney Advantage</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/bus-accident/case-evaluation'}
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
            
            {/* Overview Section with comprehensive content */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Bus Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a bus accident in California, you're facing complex legal challenges with strict deadlines that could permanently eliminate your right to compensation. Bus accidents involving government entities like MTA, school districts, and public transit systems require filing a claim within just 6 months - missing this deadline typically bars your case forever.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the urgency and complexity of California bus accident cases. With our former defense attorney experience and deep knowledge of common carrier laws, we're uniquely positioned to fight for maximum compensation while you focus on recovery.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our California Bus Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Bus className="w-5 h-5 mr-2 text-primary" />
                          Common Carrier Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We understand California's strict "utmost care and diligence" standard that applies to all bus operators, making it easier to prove liability than regular car accidents.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Clock className="w-5 h-5 mr-2 text-primary" />
                          6-Month Deadline Experts
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We immediately file government claims to preserve your rights while investigating your case thoroughly to build the strongest possible claim.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Bus Accidents?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending transit companies provides unique insights into their defense strategies.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Urgent Response</h4>
                          <p className="text-sm text-muted-foreground">We act immediately to preserve evidence and meet critical government claim deadlines.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We understand the trauma of bus accidents and provide support throughout your recovery.</p>
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
                    <h3>Comprehensive California Bus Accident Representation</h3>
                    <p>
                      Bus accidents in California involve complex legal issues requiring immediate action and specialized knowledge. Our firm handles every type of bus accident case, from MTA collisions to school bus incidents to charter bus crashes.
                    </p>
                    
                    <p>
                      California's extensive public transportation network includes major systems where accidents commonly occur:
                    </p>
                    
                    <ul>
                      <li>Los Angeles Metro (MTA) bus and rapid transit</li>
                      <li>San Francisco Muni and BART feeder buses</li>
                      <li>Orange County Transportation Authority (OCTA)</li>
                      <li>School district buses throughout California</li>
                      <li>Charter and tour bus companies</li>
                      <li>Private shuttle services</li>
                    </ul>
                    
                    <p>
                      We investigate every aspect of your accident to identify all liable parties and pursue maximum compensation through multiple legal channels. Our comprehensive approach often reveals additional defendants and insurance coverage that less experienced attorneys miss.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-600">
                <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                  <Scale className="w-8 h-8 mr-3" />
                  Free Bus Accident Case Evaluation
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <p className="text-lg mb-6">
                      Get an immediate assessment of your bus accident case. Our evaluation considers the unique aspects of California common carrier law and government liability.
                    </p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                        <div>
                          <h4 className="font-semibold">Immediate Response</h4>
                          <p className="text-sm text-muted-foreground">We evaluate your case within 24 hours and take immediate action to preserve your rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                        <div>
                          <h4 className="font-semibold">Government Claim Filing</h4>
                          <p className="text-sm text-muted-foreground">If your accident involves a government entity, we immediately file the required claim to meet the 6-month deadline.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                        <div>
                          <h4 className="font-semibold">Evidence Preservation</h4>
                          <p className="text-sm text-muted-foreground">We secure surveillance video, witness statements, and accident reports before they're lost or destroyed.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Accident Date</label>
                        <Input
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Bus</label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, busType: value }))}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select bus type..." />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mta">MTA/Public Transit</SelectItem>
                            <SelectItem value="school">School Bus</SelectItem>
                            <SelectItem value="charter">Charter/Tour Bus</SelectItem>
                            <SelectItem value="shuttle">Private Shuttle</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3">
                        Get My Free Case Evaluation
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </section>

            {/* What to Do After Bus Accident Section */}
            <section id="steps-after" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                <Stethoscope className="w-8 h-8 mr-3" />
                What to Do After a California Bus Accident
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-6">
                  <Card className="border-l-4 border-l-green-500 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">1</span>
                        Seek Immediate Medical Attention
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Get medical evaluation even if you feel fine. Bus accident injuries often have delayed symptoms, and prompt medical documentation strengthens your case.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">2</span>
                        Document Everything
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Take photos of the scene, your injuries, and damage. Get contact information from witnesses and other passengers. Note weather and road conditions.</p>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500 bg-green-50">
                    <CardHeader>
                      <CardTitle className="text-green-700 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-3">3</span>
                        Call an Attorney Immediately
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Contact us within 24 hours. The 6-month government claim deadline is strict, and evidence disappears quickly. Early attorney involvement is crucial.</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card className="border-l-4 border-l-red-500 bg-red-50">
                    <CardHeader>
                      <CardTitle className="text-red-700 flex items-center">
                        <AlertTriangle className="w-6 h-6 mr-3" />
                        DON'T Make These Mistakes
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <p>• Don't sign anything without attorney review</p>
                      <p>• Don't give recorded statements to insurance companies</p>
                      <p>• Don't accept quick settlement offers</p>
                      <p>• Don't wait to seek medical treatment</p>
                      <p>• Don't assume the 6-month deadline doesn't apply</p>
                    </CardContent>
                  </Card>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="font-bold text-lg mb-3 text-red-600">Critical Time Limits</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Government Claims</span>
                        <Badge variant="destructive">6 Months</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Private Bus Companies</span>
                        <Badge variant="outline">2 Years</Badge>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-white rounded">
                        <span>Evidence Preservation</span>
                        <Badge variant="destructive">Immediate</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Continue with remaining sections... */}
            {/* Common Injuries Section */}
            <section id="process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                <Heart className="w-8 h-8 mr-3" />
                Common Bus Accident Injuries
              </h2>
              
              <div className="mb-6">
                <img 
                  src={medicalProcessImage} 
                  alt="Bus accident medical treatment process" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Bus accidents cause unique and often severe injuries due to the size disparity with other vehicles, lack of seatbelts, and the presence of standing passengers. Understanding these common injuries helps ensure you receive proper medical evaluation and compensation.
                </p>
              </div>

              <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Bus Accident Injuries
                    {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-l-4 border-l-red-500">
                      <CardHeader>
                        <CardTitle className="text-red-700">Traumatic Brain Injuries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Standing passengers often strike poles, seats, or windows during sudden stops or collisions. Even seemingly minor head impacts can cause concussions, memory problems, and cognitive difficulties requiring extensive rehabilitation.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardHeader>
                        <CardTitle className="text-red-700">Spinal Cord Injuries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">The violent motions in bus crashes frequently cause herniated discs, fractured vertebrae, and spinal cord damage leading to paralysis. These life-altering injuries require immediate specialized treatment.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardHeader>
                        <CardTitle className="text-red-700">Fractures and Broken Bones</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Passengers thrown during impacts commonly suffer broken ribs, arms, legs, and hip fractures. Elderly passengers are particularly vulnerable to complex fractures requiring surgery and extended recovery.</p>
                      </CardContent>
                    </Card>

                    <Card className="border-l-4 border-l-red-500">
                      <CardHeader>
                        <CardTitle className="text-red-700">Internal Injuries</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm">Blunt force trauma can cause internal bleeding, organ damage, and life-threatening injuries that may not be immediately apparent. Prompt medical evaluation is crucial for detecting these hidden injuries.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Continue with Legal Process, FAQ, and Resources sections... */}
            {/* FAQ Section - First 10 of 50+ questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Bus Accident FAQs</h2>
              <p className="text-lg text-muted-foreground mb-8">Get answers to over 50 common questions about bus accident claims in California</p>
              
              <div className="space-y-4">
                {[
                  {
                    question: "What's the deadline to file a bus accident claim in California?",
                    answer: "The deadline depends on who operated the bus: Government buses (MTA, school, city): You must file a government claim within 6 MONTHS of the accident. If denied, you have 6 months from denial to file a lawsuit. Private buses: You generally have 2 years to file a lawsuit. Federal vehicles: 2 years under the Federal Tort Claims Act. Missing the 6-month government deadline usually eliminates your right to compensation entirely. Contact an attorney immediately to protect your rights."
                  },
                  {
                    question: "What if I was standing when the bus crashed?",
                    answer: "Standing passengers often suffer the most severe injuries since they have nothing to protect them during sudden stops or collisions. Common carriers must protect standing passengers by avoiding sudden acceleration or braking when possible, warning passengers before unavoidable sudden movements, ensuring handrails and straps work properly, and not exceeding standing passenger capacity. The bus company can't blame you for standing when seats weren't available or when you were preparing to exit."
                  },
                  {
                    question: "Can I sue if the bus driver slammed on brakes and I got hurt?",
                    answer: "Yes. While drivers sometimes must brake suddenly for safety, they're liable if the sudden stop was due to following too closely, distracted driving, speeding requiring emergency braking, failing to warn passengers when possible, or poor route planning creating dangerous situations. Even if braking was necessary, the bus company may be liable if passengers weren't given adequate handholds or if the bus was overcrowded."
                  },
                  {
                    question: "What damages can I recover from a California bus accident?",
                    answer: "California bus accident victims can recover: Medical expenses (emergency care, surgery, medication, physical therapy, future treatments), Lost wages (time missed from work, reduced earning capacity, lost benefits), Pain and suffering (physical pain, emotional distress, loss of enjoyment of life), Property damage (damaged belongings, clothing, electronics), Disability/disfigurement compensation for permanent injuries, Wrongful death (funeral costs, lost support, loss of companionship), and Punitive damages for extremely reckless conduct (rare against government)."
                  },
                  {
                    question: "What if I can't afford medical treatment after a bus accident?",
                    answer: "Don't let lack of insurance or money prevent you from getting treatment. We connect you with doctors who provide treatment on a lien basis (paid from settlement), emergency rooms must treat you regardless of ability to pay, many providers will wait for payment pending your case, your health insurance should cover treatment (they'll seek reimbursement from settlement), and some government programs provide immediate assistance. Getting prompt treatment is crucial for your health and your case."
                  },
                  {
                    question: "Do I need a lawyer for a bus accident claim?",
                    answer: "While not legally required, bus accident cases involve complexities making legal representation crucial including strict 6-month deadline for government claims, multiple potentially liable parties, complex common carrier laws, aggressive insurance company tactics, need for accident reconstruction experts, and governmental immunity issues. Studies show represented victims receive 3-5 times more compensation than those without attorneys, even after legal fees."
                  },
                  {
                    question: "What's California's common carrier law for buses?",
                    answer: "California Civil Code 2100 requires common carriers (including all buses) to use 'utmost care and diligence' for passenger safety. This means a higher standard than regular 'reasonable care,' must do everything reasonably possible to prevent harm, liable for even slight negligence, must provide safe vehicles and competent drivers, and must protect passengers from other passengers' misconduct. This strict standard makes it easier to prove bus company liability compared to regular auto accidents."
                  },
                  {
                    question: "Can I sue a school district for a school bus accident?",
                    answer: "Yes, but special rules apply: Must file government claim within 6 months, districts have some governmental immunities, cannot get punitive damages, damage caps may apply in some situations, and must prove district negligence (not just driver error). School districts are liable for inadequate driver training, poor supervision, dangerous routes, or failing to protect students. California law provides special protections for injured children."
                  },
                  {
                    question: "What if the bus accident wasn't the driver's fault?",
                    answer: "You may still have claims against the bus company for failing to avoid the accident or protect passengers, other drivers who caused the collision, government entities for dangerous road conditions, and manufacturers for defective bus parts that worsened injuries. Even when not at fault, bus companies must take reasonable steps to avoid accidents and minimize passenger injuries. The lack of seatbelts often makes them partially liable."
                  },
                  {
                    question: "How much is my bus accident case worth?",
                    answer: "Case values vary greatly based on severity of injuries (TBI and spinal injuries often exceed $1 million), age and income of victim, fault determination, available insurance coverage, and government vs. private liability. Our former defense experience helps us accurately evaluate cases and pursue maximum compensation from all available sources."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="glass-card group hover-glow-primary border-l-4 border-l-red-600 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <CardHeader 
                      className="cursor-pointer transition-colors group-hover:bg-primary/5"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg group-hover:text-primary transition-colors">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp className="transition-transform duration-200" /> : <ChevronDown className="transition-transform duration-200" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent className="animate-fade-in">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>

              <div className="mt-8 text-center">
                <Button 
                  variant="outline" 
                  className="mb-4"
                  onClick={() => window.location.href = '/bus-accident/faq'}
                >
                  View All 50+ Bus Accident FAQs
                </Button>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Bus Accident Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Department of Insurance</p>
                    <p>• CPUC Transit Regulations</p>
                    <p>• California Vehicle Code</p>
                    <p>• State Bar of California</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Medical Resources
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p>• California Hospital Association</p>
                    <p>• Trauma Recovery Centers</p>
                    <p>• Mental Health Services</p>
                    <p>• Rehabilitation Specialists</p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>

          {/* Sidebar - Exactly matching Mesothelioma sticky structure */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card - 3 Ways to Start Your Case */}
              <Card className="glass-card group hover-glow-primary overflow-hidden transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${sidebarImage})` }}>
                  <div className="h-full bg-black/60 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                    <div className="text-center text-white force-white">
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
                      onClick={() => window.location.href = 'tel:8559851234'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (855) 985-1234
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-black border-gray-300 hover:bg-gray-50"
                      onClick={() => window.location.href = '/bus-accident/compensation-calculator'}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-black border-gray-300 hover:bg-gray-50"
                      onClick={() => window.location.href = '/bus-accident/legal-guidance'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Legal Guidance
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
                      <p className="text-sm text-muted-foreground">6 months for government claims</p>
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

              {/* Medical Support */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Medical Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <img 
                    src={medicalImage} 
                    alt="California bus accident medical treatment" 
                    className="w-full h-32 object-cover rounded-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  />
                  <p className="text-sm text-muted-foreground">
                    We can connect you with specialists experienced in bus accident injuries throughout California.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA - Matching Mesothelioma */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Don't Wait - Time Limits Apply for California Bus Accidents</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">California law gives you only 6 months to file claims against government entities. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" aria-label="Call Trembach Law Firm" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8559851234'}>
              CALL (855) 985-1234
            </Button>
            
            <Button size="lg" aria-label="Start Free Case Evaluation" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = '/bus-accident/case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusAccidents;