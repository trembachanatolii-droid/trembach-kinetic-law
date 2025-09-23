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
import caseEvaluationImage from "@/assets/bus-accident-case-evaluation.jpg";
import emergencyResponseImage from "@/assets/bus-accident-emergency-response.jpg";
import governmentClaimsImage from "@/assets/bus-accident-government-claims.jpg";
import accidentSceneImage from "@/assets/bus-accident-scene.jpg";
import diagnosisImage from "@/assets/bus-accident-diagnosis.jpg";
import legalRepresentationImage from "@/assets/bus-accident-legal-representation.jpg";
import courtroomImage from "@/assets/bus-accident-courtroom.jpg";
import californiaCoverageImage from "@/assets/bus-accident-california-coverage.jpg";
import medicalConsultationImage from "@/assets/bus-accident-medical-consultation.jpg";
import resourcesImage from "@/assets/bus-accident-resources.jpg";

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
              <div className="mb-6">
                <img 
                  src={caseEvaluationImage} 
                  alt="Professional bus accident case evaluation" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>
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
              <div className="mb-6">
                <img 
                  src={emergencyResponseImage} 
                  alt="Bus accident emergency response procedures" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>
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

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                <Shield className="w-8 h-8 mr-3" />
                Legal Process for Bus Accident Cases
              </h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Bus accident legal process" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Bus accident cases follow a specific legal process in California, with critical deadlines that can make or break your case. Understanding each phase helps you prepare for what's ahead and ensures no crucial steps are missed.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  {
                    phase: "Immediate (0-30 days)",
                    title: "Case Investigation",
                    description: "Evidence preservation, witness interviews, accident reconstruction, medical record collection, government claim filing.",
                    actions: ["Preserve video evidence", "File government claims", "Interview witnesses", "Document injuries"]
                  },
                  {
                    phase: "Discovery (1-6 months)",
                    title: "Building Your Case",
                    description: "Medical treatment documentation, expert witness retention, deposition scheduling, damage calculation, settlement negotiations.",
                    actions: ["Medical evaluations", "Expert analysis", "Damage assessment", "Initial negotiations"]
                  },
                  {
                    phase: "Litigation (6-18 months)",
                    title: "Court Proceedings",
                    description: "Lawsuit filing, formal discovery, mediation attempts, trial preparation, jury selection, trial proceedings.",
                    actions: ["File lawsuit", "Discovery process", "Mediation", "Trial preparation"]
                  },
                  {
                    phase: "Resolution",
                    title: "Case Settlement",
                    description: "Final negotiations, settlement agreement, trial verdict, payment processing, case closure.",
                    actions: ["Final settlement", "Payment collection", "Case closure", "Appeal if needed"]
                  }
                ].map((phase, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between flex-col">
                        <Badge variant="outline" className="mb-2">{phase.phase}</Badge>
                        <h3 className="font-semibold text-lg text-center">{phase.title}</h3>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 text-sm">{phase.description}</p>
                      <div className="space-y-1">
                        {phase.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-center gap-2 text-xs">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span>{action}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About the Legal Process
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="prose prose-lg max-w-none space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">Who's Liable in California Bus Accidents?</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card className="border-l-4 border-l-orange-500">
                          <CardHeader>
                            <CardTitle className="text-orange-700 text-lg">Bus Driver Liability</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Bus drivers must exercise the "highest degree of care" under California's common carrier law. Any negligence including distracted driving, fatigued driving, speeding, or failing to secure wheelchairs creates liability.</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-blue-500">
                          <CardHeader>
                            <CardTitle className="text-blue-700 text-lg">Company Liability</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Bus operators face liability for negligent hiring, inadequate training, poor maintenance, defective equipment, and violating federal/state regulations.</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-green-500">
                          <CardHeader>
                            <CardTitle className="text-green-700 text-lg">Government Liability</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Government entities operating buses face liability for dangerous road conditions, inadequate bus stop design, and operational negligence despite some immunities.</p>
                          </CardContent>
                        </Card>

                        <Card className="border-l-4 border-l-purple-500">
                          <CardHeader>
                            <CardTitle className="text-purple-700 text-lg">Other Parties</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm">Other drivers, maintenance contractors, parts manufacturers, and property owners may share liability depending on accident circumstances.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                      <h4 className="font-semibold text-yellow-800 mb-3">Critical Time Limits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-red-600 mb-2">6 Months</div>
                          <div className="text-sm text-gray-600">Government Claims</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-blue-600 mb-2">2 Years</div>
                          <div className="text-sm text-gray-600">Private Companies</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-lg">
                          <div className="text-2xl font-bold text-green-600 mb-2">72 Hours</div>
                          <div className="text-sm text-gray-600">Video Evidence</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section - All 50+ questions */}
            <section id="faq" className="content-section mb-12">
              <div className="mb-6">
                <img 
                  src={legalRepresentationImage} 
                  alt="Professional bus accident legal representation" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>
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
                  },
                  {
                    question: "What if the bus driver was on drugs or drunk?",
                    answer: "DUI bus drivers create strong liability: Automatic negligence (negligence per se), Punitive damages likely available, Company liable for inadequate screening/supervision, Criminal charges don't prevent civil claims, and Lower BAC limits for commercial drivers (0.04%). Drug/alcohol testing after accidents is required. Refusal or delays create presumptions of impairment. These cases often result in maximum compensation."
                  },
                  {
                    question: "How do I get the bus surveillance video?",
                    answer: "Act fast - video is often deleted within 30-72 days: Send immediate preservation letter, File government claim triggering preservation duty, Subpoena if necessary, Spoliation claims if destroyed, and Other passengers may have cell phone video. We immediately send preservation demands and obtain video before it's lost. This evidence is often case-winning."
                  },
                  {
                    question: "What about wheelchair or disability access injuries?",
                    answer: "ADA violations strengthen bus accident claims: Malfunctioning wheelchair lifts, Failure to secure wheelchairs properly, Inadequate assistance boarding/exiting, Discrimination affecting safety, and Inaccessible emergency exits. Federal and state disability laws create additional liability. Disabled passengers often receive higher compensation for discrimination and safety violations."
                  },
                  {
                    question: "Can I sue for a bus door injury?",
                    answer: "Bus door injuries are common and compensable: Doors closing on passengers, Starting to drive with doors open, Dragging passengers caught in doors, Malfunctioning door sensors, and Inadequate warnings before closing. Drivers must ensure all passengers are safely clear before closing doors or moving. These injuries range from bruising to amputation."
                  },
                  {
                    question: "What if bad weather caused the bus accident?",
                    answer: "Weather doesn't excuse negligence: Drivers must adjust speed for conditions, Companies must maintain safe tires/brakes, Routes should be modified in dangerous weather, Inadequate driver training for conditions, and Failure to chain tires when required. Professional drivers are expected to handle weather safely. 'Act of God' defenses rarely succeed when proper precautions weren't taken."
                  },
                  {
                    question: "Can I sue if the bus accident made a pre-existing condition worse?",
                    answer: "Yes - the 'eggshell plaintiff' rule protects you: Defendants take victims as they find them, Full compensation for aggravation of conditions, New treatment needs covered, Acceleration of degenerative conditions compensable, and Cannot use pre-existing conditions to deny claims. Insurance companies scrutinize these claims, but we prove how the accident worsened your condition through medical experts."
                  },
                  {
                    question: "What if I signed something at the scene?",
                    answer: "Documents signed after an accident may not be binding: Releases signed without consideration are void, Duress or confusion may invalidate agreements, Didn't know extent of injuries, No attorney review, and May only cover property damage. Never sign anything without legal review. Even if you signed something, we may be able to challenge it."
                  },
                  {
                    question: "How much does a bus accident lawyer cost?",
                    answer: "Our fee structure ensures you can afford quality representation: No upfront costs or retainers, Free initial consultation, Contingency fee (typically 33-40% of recovery), We advance all case costs, and No fee if no recovery. You literally cannot afford NOT to have a lawyer. Studies show represented victims receive 3-5 times more compensation even after legal fees."
                  },
                  {
                    question: "What's the process for filing a government claim?",
                    answer: "Government claims require specific procedures: File within 6 months of accident, Use proper form (we handle this), Include all required information, Serve on correct entity, Wait for response (45 days), If denied, 6 months to file lawsuit, and Late claims possible with showing of good cause. Mistakes can be fatal to your claim. We ensure perfect compliance with all requirements."
                  },
                  {
                    question: "What if the bus company offers a quick settlement?",
                    answer: "Be extremely cautious: Early offers are always lowball, Don't know full extent of injuries yet, Signing releases all future claims, No consideration of future medical needs, and Excludes pain and suffering. NEVER accept an offer without legal review. Quick settlements benefit them, not you. We ensure you receive full compensation."
                  },
                  {
                    question: "Can family members get compensation too?",
                    answer: "Family members may have claims for: Loss of consortium (Spouse's loss of companionship), Wrongful death (If loved one died), Emotional distress (Witnessing severe injuries), Economic losses (Caring for injured family member), and Bystander claims (Seeing accident happen). California recognizes the impact on families. We pursue all available claims for affected family members."
                  },
                  {
                    question: "What if I have Medicare or Medi-Cal?",
                    answer: "Government insurance creates special considerations: They'll seek reimbursement from settlement, Liens must be addressed, Reduction negotiations possible, Cannot be denied treatment, and Future medical covered through settlement. We handle lien negotiations to maximize your net recovery. Having government insurance doesn't reduce your claim value."
                  },
                  {
                    question: "Do I have to go to court?",
                    answer: "Most cases settle without trial: 95% of cases settle before trial, Mediation often resolves cases, Depositions may be required, We prepare every case for trial, and You decide whether to accept settlements. If trial is necessary, we thoroughly prepare you. Our trial readiness often forces better settlements."
                  },
                  {
                    question: "What if I already have an attorney but am unhappy?",
                    answer: "You can change attorneys anytime: No penalty for switching, New attorney handles transition, Previous attorney gets fair share of work done, Doesn't increase your fees, and May dramatically improve results. If your attorney isn't responsive, aggressive, or knowledgeable about bus accidents, switching could save your case."
                  },
                  {
                    question: "What makes bus accident cases complex?",
                    answer: "Multiple factors create complexity: Common carrier heightened duties, Government entity special rules, Multiple potentially liable parties, Federal and state regulations, Severe injuries requiring experts, Insurance coverage disputes, Governmental immunities, and Short filing deadlines. This complexity is why experienced bus accident attorneys are essential for maximum recovery."
                  },
                  {
                    question: "Can I handle a bus accident claim myself?",
                    answer: "While legally possible, it's extremely risky: Miss 6-month deadline = case over, Don't know claim's true value, Insurance companies exploit unrepresented victims, Cannot subpoena evidence, No access to experts, and One mistake can ruin case. Studies show unrepresented victims receive 3-5 times less compensation. Our contingency fee means no risk in hiring us."
                  },
                  {
                    question: "What if the bus accident happened at work?",
                    answer: "Work-related bus accidents may involve workers' compensation benefits, Third-party claims against bus company, Enhanced damages for workplace safety violations, Employer liability for unsafe transportation arrangements, and Coordination between workers' comp and personal injury claims. Multiple compensation sources may apply simultaneously."
                  },
                  {
                    question: "How long do bus accident cases take?",
                    answer: "Timeline varies based on complexity: Simple cases may settle in 6-12 months, Complex cases can take 2-3 years, Government cases often take longer due to bureaucracy, Severe injuries require waiting for medical stability, and Going to trial adds 1-2 years. We work to expedite your case while maximizing compensation."
                  },
                  {
                    question: "What if the bus accident caused PTSD or emotional trauma?",
                    answer: "Mental health impacts are compensable: Post-traumatic stress disorder from crashes, Anxiety about riding public transportation, Depression from lifestyle changes, Sleep disorders and nightmares, and Loss of enjoyment of life. We work with mental health professionals to document and prove psychological injuries for full compensation."
                  },
                  {
                    question: "Can children injured in school bus accidents get compensation?",
                    answer: "Yes, with special protections: School districts owe heightened duty to children, Enhanced damages for children's injuries, No contributory negligence for young children, Extended time to file claims in some cases, and Parents can claim loss of consortium. California law provides additional protections for child victims."
                  },
                  {
                    question: "What if the bus accident killed my loved one?",
                    answer: "Wrongful death claims provide compensation for: Economic losses (lost earnings, benefits, support), Non-economic losses (companionship, guidance, love), Funeral and burial expenses, Pain and suffering before death, and Punitive damages in extreme cases. Only certain family members can file wrongful death claims in California."
                  },
                  {
                    question: "What evidence do I need for my bus accident case?",
                    answer: "Critical evidence includes: Police accident reports, Bus surveillance video, Witness contact information, Photos of scene and injuries, Medical records and bills, Employment records for lost wages, and Expert testimony on causation. We handle evidence collection and preservation for you."
                  },
                  {
                    question: "Can tourists or visitors file bus accident claims in California?",
                    answer: "Yes, visitors have full rights to compensation: Out-of-state residents can file claims, Tourist status doesn't affect compensation, May need California attorney for representation, Travel expenses to California may be compensable, and Home state medical treatment typically covered. We handle cases for clients throughout the United States."
                  },
                  {
                    question: "What if multiple people were injured in the same bus accident?",
                    answer: "Mass casualty cases involve: Shared evidence strengthens all cases, Multiple witnesses support liability findings, Insurance policy limits may be exceeded, Some cases settle before others, and Coordination among attorneys benefits everyone. We often work with other attorneys to maximize recovery for all victims."
                  },
                  {
                    question: "What if the bus accident happened on a freeway vs city street?",
                    answer: "Location affects liability and investigation: Freeway accidents often involve higher speeds and more severe injuries, City accidents may involve pedestrians and traffic signals, Different government entities may be responsible, CHP vs local police investigation, and Evidence preservation varies by location. We investigate all relevant factors regardless of accident location."
                  },
                  {
                    question: "Can undocumented immigrants file bus accident claims?",
                    answer: "Yes, immigration status doesn't affect your right to compensation: All bus accident victims have rights regardless of status, Cannot be reported to immigration during legal process, Future earning capacity calculated at US wage rates, Medical treatment and compensation fully available, and Attorneys bound by confidentiality. We protect your privacy and rights."
                  },
                  {
                    question: "What if the bus accident was caused by road construction?",
                    answer: "Construction zone accidents may involve: Construction company liability for unsafe conditions, Government liability for inadequate traffic control, Bus company liability for failure to adjust for conditions, Subcontractor liability for specific work, and Enhanced damages for construction zone violations. Multiple parties may share responsibility."
                  },
                  {
                    question: "What role do black boxes play in bus accidents?",
                    answer: "Electronic data recorders provide crucial evidence: Speed and braking data before crash, Hard acceleration or deceleration events, Route and timing information, Driver behavior patterns, and Maintenance alerts or warnings. We immediately request this data before it's overwritten or lost."
                  },
                  {
                    question: "What if I was hurt getting on or off the bus?",
                    answer: "Boarding/alighting injuries are common and compensable: Slip and falls due to wet steps, Doors closing during boarding, Bus moving before passenger seated, Inadequate lighting at stops, and Dangerous platform conditions. Bus companies owe heightened duty during boarding and alighting process."
                  },
                  {
                    question: "Can I get compensation if I was only a witness to a bus accident?",
                    answer: "Bystander claims may be available for: Emotional distress from witnessing severe injuries, Relationship to injured person matters, Physical symptoms from psychological trauma, and Witnessing death or severe injury to family. California allows certain family members to recover for emotional distress as bystanders."
                  },
                  {
                    question: "What if the bus driver had a medical emergency?",
                    answer: "Medical emergencies don't automatically excuse liability: Bus company liable for failing to screen for medical conditions, Driver liable for driving with known conditions, Inadequate training for emergency procedures, and Failure to pull over safely when possible. The sudden emergency defense has strict requirements and rarely succeeds."
                  },
                  {
                    question: "How do I know if my bus accident attorney is experienced?",
                    answer: "Look for: Specific bus accident case experience, Knowledge of common carrier laws, Understanding of government claim procedures, Relationships with relevant experts, Track record with similar cases, and Board certifications in personal injury. We focus specifically on transportation accident cases."
                  },
                  {
                    question: "What if the bus accident happened during a natural disaster?",
                    answer: "Natural disasters don't eliminate liability if: Bus company failed to suspend service in dangerous conditions, Driver continued operating when unsafe, Inadequate emergency procedures, and Failure to warn passengers of dangers. Professional drivers and companies must prioritize passenger safety over schedule adherence."
                  },
                  {
                    question: "Can I file a claim if I was hurt helping other bus accident victims?",
                    answer: "Good Samaritan injuries may be compensable: California protects those providing emergency aid, Enhanced protection for medical professionals, Bus company liable for creating dangerous rescue situation, and May qualify for emergency worker benefits. Your altruism shouldn't prevent you from receiving compensation for your injuries."
                  },
                  {
                    question: "What if my bus accident case goes to trial?",
                    answer: "Trial preparation includes: Thorough case preparation and evidence organization, Expert witness testimony, Jury selection favorable to your case, Compelling presentation of your injuries and damages, and Professional trial advocacy. We prepare every case for trial to maximize settlement pressure and ensure readiness if trial becomes necessary."
                  },
                  {
                    question: "What happens to my case if the bus company goes bankrupt?",
                    answer: "Bankruptcy doesn't eliminate your rights: Insurance policies remain available, Asset recovery may still be possible, Bankruptcy court procedures for claims, Priority status for personal injury claims, and Alternative compensation sources. We aggressively pursue all available recovery sources even in bankruptcy situations."
                  },
                  {
                    question: "How do bus accidents differ from regular car accidents legally?",
                    answer: "Bus accidents involve: Higher standard of care (common carrier law), More complex liability (multiple parties), Stricter government claim deadlines, Enhanced insurance coverage requirements, and Greater potential for severe injuries. These differences require specialized legal expertise for maximum recovery."
                  },
                  {
                    question: "What if security cameras caught my bus accident?",
                    answer: "Video evidence is extremely valuable: Traffic cameras may show intersection accidents, Business security cameras capture street accidents, Cell phone videos from witnesses, Bus stop cameras document boarding injuries, and Social media may contain relevant footage. We immediately identify and preserve all video evidence before it's lost."
                  },
                  {
                    question: "Can I reopen my bus accident case if my injuries get worse?",
                    answer: "Generally, settlements are final, but exceptions exist: Fraud or misrepresentation by defendants, Undiscovered injuries within statute of limitations, Progressive conditions not fully understood at settlement, and Reservation of rights in settlement agreement. It's crucial to understand full injury extent before settling."
                  }
                ].slice(0, 20).map((faq, index) => (
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
                  className="mb-4 text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                  onClick={() => window.location.href = '/bus-accident/faq'}
                >
                  View All 50+ Bus Accident FAQs
                </Button>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <div className="mb-6">
                <img 
                  src={resourcesImage} 
                  alt="Bus accident legal and medical resources" 
                  className="w-full h-64 object-cover rounded-lg mb-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
                />
              </div>
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
                      className="w-full text-foreground border-border hover:bg-accent hover:text-accent-foreground"
                      onClick={() => window.location.href = '/bus-accident/compensation-calculator'}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full text-foreground border-border hover:bg-accent hover:text-accent-foreground"
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