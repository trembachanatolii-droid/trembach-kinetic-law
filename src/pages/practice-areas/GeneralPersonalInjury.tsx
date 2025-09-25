import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import GoBack from '@/components/GoBack';
import useScrollRestoration from '@/hooks/useScrollRestoration';
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
import heroBackground from '@/assets/personal-injury-hero-bg.jpg';
import sidebarImage from '@/assets/personal-injury-sidebar.jpg';
import diagnosisImage from '@/assets/personal-injury-diagnosis-process.jpg';
import legalProcessImage from '@/assets/personal-injury-legal-process.jpg';
import injurySitesImage from '@/assets/california-injury-sites.jpg';
import medicalImage from '@/assets/personal-injury-medical-facility.jpg';
import compensationImage from '@/assets/personal-injury-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const GeneralPersonalInjury: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    injuryDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useScrollRestoration();

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'injury-steps', label: 'WHAT TO DO AFTER INJURY', icon: Stethoscope },
    { id: 'injury-process', label: 'INJURY PROCESS', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create 3D container effect
      if (contentRef.current) {
        gsap.set(contentRef.current, {
          perspective: 1200,
          transformStyle: "preserve-3d"
        });

        // Create floating background layers
        const layers = contentRef.current.querySelectorAll('.floating-layer');
        layers.forEach((layer, index) => {
          const element = layer as HTMLElement;
          const depth = -500 - (index * 250);
          
          gsap.set(element, {
            z: depth,
            rotationX: 5,
            rotationY: index % 2 === 0 ? 2 : -2
          });

          // Floating animations
          gsap.to(element, {
            y: index === 0 ? 30 : index === 1 ? -40 : 20,
            rotation: index % 2 === 0 ? 2 : -2,
            duration: 14 + index * 4,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true
          });

          // Parallax scroll effect
          gsap.to(element, {
            scrollTrigger: {
              trigger: contentRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 1
            },
            y: -100 - (index * 50),
            rotationY: index % 2 === 0 ? 5 : -5
          });
        });
      }

      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation with 3D effects
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30, rotationX: -10 },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      // Interactive hover effects for cards
      const cards = contentRef.current?.querySelectorAll('.hover-card');
      cards?.forEach(card => {
        const cardElement = card as HTMLElement;
        
        card.addEventListener('mouseenter', () => {
          gsap.to(cardElement, {
            scale: 1.05,
            z: 50,
            rotationY: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(cardElement, {
            scale: 1,
            z: 0,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      });
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
    window.location.href = '/practice-areas/general-personal-injury/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Floating Background Layers for 3D Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="floating-layer absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-30" />
        <div className="floating-layer absolute inset-0 bg-gradient-to-tl from-accent/5 to-primary/5 opacity-20" />
        <div className="floating-layer absolute inset-0 bg-gradient-to-tr from-secondary/5 to-accent/5 opacity-10" />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Personal Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/general-personal-injury/case-evaluation'}
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
      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="lg:col-span-1 order-2 lg:order-2">
            <div className="sticky top-32">
              <Card className="glass-card backdrop-blur-sm bg-background/95 border border-border/50 shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-primary mb-2">3 Ways to Start Your Case</CardTitle>
                  <p className="text-muted-foreground">Choose the option that works best for you</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <img 
                      src={sidebarImage} 
                      alt="Personal Injury Legal Help"
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />
                  </div>
                  
                  <Button 
                    onClick={() => window.location.href = 'tel:8181234567'}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = '/practice-areas/general-personal-injury/case-evaluation'}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3"
                  >
                    Free Case Evaluation
                  </Button>
                  
                  <Button 
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white py-3 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Us
                  </Button>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-sm text-muted-foreground mb-2">Available 24/7</p>
                    <p className="text-xs text-muted-foreground">No fees unless we win your case</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 order-1 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Personal Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When 31 million Americans suffer injuries requiring medical treatment annually, you need a former defense attorney who knows insurance company tactics inside and out. If you or a loved one has been injured in California due to someone else's negligence, you deserve experienced legal representation that fights for maximum compensation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the devastating impact personal injuries have on victims and families. With our unique background defending companies and insurance carriers, we know exactly how they evaluate and minimize claims. This insider knowledge allows us to anticipate their strategies and build stronger cases for our clients.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our California Personal Injury Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Former Defense Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our attorney's background defending companies provides unique insights into corporate defense strategies, giving our clients a significant advantage.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          California Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California personal injury law, including recent MICRA reforms and changing insurance requirements.</p>
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
                          <h4 className="font-semibold">Rapid Response</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and protect your rights before critical information disappears.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your recovery and legal journey.</p>
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
                    <h3>Comprehensive California Personal Injury Representation</h3>
                    <p>
                      Personal injury cases in California involve complex medical, legal, and insurance factors. Our firm has the resources and expertise to handle every aspect of your case, from investigating the accident to working with medical experts who can clearly explain how the incident caused your injuries.
                    </p>
                    
                    <p>
                      California sees millions of accidents annually across various settings. We represent clients injured in:
                    </p>
                    
                    <ul>
                      <li>Motor vehicle accidents on California highways and streets</li>
                      <li>Slip and fall incidents on dangerous property conditions</li>
                      <li>Medical malpractice at hospitals and clinics</li>
                      <li>Product liability from defective consumer goods</li>
                      <li>Workplace accidents with third-party liability</li>
                      <li>Wrongful death cases caused by negligence</li>
                    </ul>
                    
                    <p>
                      We investigate every potential source of liability to ensure no responsible party escapes accountability for your injuries. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including insurance coverage, workers' compensation coordination, and government benefits.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Injury Date</label>
                      <Input
                        type="date"
                        value={formData.injuryDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, injuryDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="car-accident">Car Accident</SelectItem>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                          <SelectItem value="product-liability">Product Liability</SelectItem>
                          <SelectItem value="workplace-injury">Workplace Injury</SelectItem>
                          <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                          <SelectItem value="other">Other Personal Injury</SelectItem>
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

            {/* What to Do After Injury */}
            <section id="injury-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Your Personal Injury</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card hover-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      Immediate Medical Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-green-700">• Seek immediate medical attention, even for seemingly minor injuries</p>
                    <p className="text-green-700">• Follow all treatment recommendations from healthcare providers</p>
                    <p className="text-green-700">• Keep detailed records of all medical visits and expenses</p>
                    <p className="text-green-700">• Get copies of all medical records and diagnostic imaging</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover-card group hover-glow-red transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-red-600 transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Never Do This
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-red-700">• Never sign anything from insurance companies without legal review</p>
                    <p className="text-red-700">• Don't give recorded statements to opposing insurance carriers</p>
                    <p className="text-red-700">• Avoid posting about your accident on social media platforms</p>
                    <p className="text-red-700">• Don't delay in seeking legal representation</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Critical First Steps</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Evidence Preservation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Take photographs of the accident scene and your injuries</li>
                      <li>• Collect contact information from all witnesses</li>
                      <li>• Obtain a copy of any police or incident reports</li>
                      <li>• Preserve damaged property and clothing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Documentation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Keep a detailed injury diary of pain and symptoms</li>
                      <li>• Track all medical appointments and treatments</li>
                      <li>• Document lost wages and work absences</li>
                      <li>• Save all receipts for accident-related expenses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Injury Process Section */}
            <section id="injury-process" className="content-section mb-12">
              <img 
                src={diagnosisImage} 
                alt="Personal Injury Medical Process"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Your Personal Injury</h2>
              
              <Collapsible open={expandedSections['injury-process']} onOpenChange={() => toggleSection('injury-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Personal Injury Medical Evaluation
                    {expandedSections['injury-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollipsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Common Personal Injury Symptoms</h3>
                    <p>Personal injury symptoms can vary widely depending on the type and severity of the incident. Many injuries don't manifest symptoms immediately, which is why prompt medical attention is crucial:</p>
                    
                    <h4>Physical Symptoms to Watch For:</h4>
                    <ul>
                      <li>Persistent pain or discomfort</li>
                      <li>Limited range of motion or stiffness</li>
                      <li>Swelling, bruising, or visible deformity</li>
                      <li>Headaches or dizziness</li>
                      <li>Numbness or tingling</li>
                      <li>Sleep disturbances</li>
                    </ul>
                    
                    <h4>Emotional and Cognitive Symptoms:</h4>
                    <ul>
                      <li>Anxiety or depression</li>
                      <li>Memory problems or confusion</li>
                      <li>Difficulty concentrating</li>
                      <li>Mood changes or irritability</li>
                      <li>Post-traumatic stress symptoms</li>
                    </ul>
                    
                    <h3>The Importance of Prompt Medical Care</h3>
                    <p>
                      Seeking immediate medical attention serves multiple critical purposes beyond your health. Insurance companies often argue that delayed treatment indicates injuries weren't severe or weren't caused by the accident. Early medical intervention creates a clear medical record linking your injuries to the incident.
                    </p>
                    
                    <p>
                      Additionally, some injuries like traumatic brain injuries or internal bleeding can be life-threatening if not promptly diagnosed and treated. What seems like a minor injury can develop into serious complications without proper medical evaluation.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <img 
                src={legalProcessImage} 
                alt="Personal Injury Legal Process"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">The Personal Injury Legal Process</h2>
              
              <Collapsible open={expandedSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About How We Handle Your Case
                    {expandedSections['legal-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="hover-card">
                      <CardHeader>
                        <CardTitle className="text-green-600">Investigation & Evidence Gathering</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Accident scene reconstruction</li>
                          <li>• Medical record analysis</li>
                          <li>• Witness interviews</li>
                          <li>• Expert witness consultation</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="hover-card">
                      <CardHeader>
                        <CardTitle className="text-green-600">Demand & Negotiation</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm">
                          <li>• Comprehensive demand package</li>
                          <li>• Insurance company negotiations</li>
                          <li>• Settlement discussions</li>
                          <li>• Alternative dispute resolution</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="prose prose-lg max-w-none">
                    <h3>What Sets Our Approach Apart</h3>
                    <p>
                      Our former defense experience provides unique insights into how insurance companies evaluate personal injury claims. We understand their internal settlement authority levels, common defense strategies, and pressure points that lead to better offers.
                    </p>
                    
                    <p>
                      We prepare every case as if it's going to trial, even though most settle out of court. This thorough preparation demonstrates to insurance companies that we're serious about pursuing maximum compensation and aren't afraid of litigation when necessary.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collipsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <img 
                src={injurySitesImage} 
                alt="California Personal Injury Statistics"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {[
                  {
                    question: "How much is my personal injury case worth?",
                    answer: "Case value depends on multiple factors including medical expenses, lost wages, pain and suffering, future medical needs, and degree of negligence. California's average settlement is $55,056, but serious injuries often result in much higher compensation. We evaluate all damages including non-economic losses like pain, suffering, and loss of enjoyment of life."
                  },
                  {
                    question: "How long do I have to file a personal injury claim in California?",
                    answer: "California's statute of limitations is generally two years from the injury date. However, important exceptions exist: government claims require six-month notice, medical malpractice has one-year limits, and the discovery rule may extend deadlines when injuries aren't immediately apparent. Contact us immediately to preserve your rights."
                  },
                  {
                    question: "What if I was partially at fault for my accident?",
                    answer: "California's pure comparative negligence law allows recovery even if you were partially at fault. Your compensation reduces by your percentage of fault. For example, if you're 20% at fault for a $100,000 case, you'd receive $80,000. This generous system means most injured parties can recover something, unlike states with harsher contributory negligence rules."
                  },
                  {
                    question: "Should I accept the insurance company's first offer?",
                    answer: "First offers are typically much lower than fair compensation. Insurance companies hope you'll accept quickly before understanding your full damages. Studies show represented clients recover 40% more even after attorney fees. Our former defense experience reveals their tactics to minimize payouts - we know how to counter their strategies effectively."
                  },
                  {
                    question: "What types of damages can I recover in a personal injury case?",
                    answer: "California allows recovery of economic damages (medical expenses, lost wages, property damage), non-economic damages (pain and suffering, emotional distress), and sometimes punitive damages for egregious conduct. We calculate current and future medical costs, lost earning capacity, and non-economic losses to maximize your total recovery."
                  },
                  {
                    question: "How do personal injury lawyers get paid?",
                    answer: "We work on contingency - no fees unless we win your case. Our fee comes from any settlement or verdict, so you pay nothing upfront. This arrangement aligns our interests with yours and ensures everyone can afford quality legal representation regardless of financial circumstances. Consultation and case evaluation are completely free."
                  },
                  {
                    question: "What makes your firm different from other personal injury attorneys?",
                    answer: "Our founder's background defending insurance companies reveals their tactics, evaluation methods, and settlement authority levels. We know their playbook, anticipate their moves, and counter their arguments effectively. This inside knowledge often leads to significantly better outcomes for our clients."
                  },
                  {
                    question: "What if injuries appear later after the accident?",
                    answer: "California's discovery rule may extend filing deadlines when injuries aren't immediately apparent. Document symptoms and seek medical attention immediately. Some injuries like traumatic brain injury or soft tissue damage may not manifest for days or weeks after accidents. Early legal consultation protects your rights."
                  },
                  {
                    question: "Can I handle my personal injury case without an attorney?",
                    answer: "While legally possible, statistics show represented clients recover 40% more even after attorney fees. Insurance companies exploit unrepresented individuals' lack of legal knowledge. Complex procedures, damage calculations, and negotiation tactics require legal expertise for maximum recovery. Free consultation helps you understand your options."
                  },
                  {
                    question: "What's the difference between settlement and trial?",
                    answer: "Settlement involves negotiated agreement avoiding trial uncertainty and providing faster resolution with guaranteed recovery. Trials risk losing but may yield higher awards. We advise on the best strategy based on your specific circumstances, case strength, and insurance company behavior during negotiations."
                  },
                  {
                    question: "How do liens affect my personal injury settlement?",
                    answer: "Medical providers, health insurance, and government benefits may claim settlement portions. We negotiate lien reductions to maximize your net recovery while ensuring proper handling prevents double payment and clears title to settlement funds. Experienced lien resolution protects more money for you."
                  },
                  {
                    question: "Can I recover punitive damages in my case?",
                    answer: "Punitive damages punish malicious, fraudulent, or extremely reckless conduct. Clear and convincing evidence of despicable behavior is required. Corporate misconduct hiding dangers or drunk driving cases often warrant punitive awards to deter future misconduct and provide additional compensation."
                  },
                  {
                    question: "What's a structured settlement and when does it make sense?",
                    answer: "Structured settlements provide periodic payments over time rather than lump sums. Tax advantages and guaranteed income benefit long-term care needs. Customizable payment schedules address future medical expenses and living costs. We advise whether structured settlements suit your circumstances and financial goals."
                  },
                  {
                    question: "What if I was injured as a passenger in a vehicle?",
                    answer: "Passengers typically aren't at fault and can recover from any negligent driver's insurance. Multiple insurance policies may apply including the driver you were with, other involved drivers, and your own uninsured motorist coverage providing maximum protection and recovery options."
                  },
                  {
                    question: "Can I sue a government entity for my injuries?",
                    answer: "Yes, but special rules apply. California Tort Claims Act requires filing administrative claim within six months. Government entities have immunities limiting liability. Dangerous condition of public property and employee negligence create potential liability requiring strict compliance with procedures and deadlines."
                  },
                  {
                    question: "What's the role of expert witnesses in personal injury cases?",
                    answer: "Experts provide specialized knowledge supporting causation, damages, and liability. Medical experts explain injuries and treatment needs. Accident reconstructionists determine fault. Economists calculate lost earnings. Life care planners project future costs. Strong expert testimony significantly strengthens cases and settlement negotiations."
                  },
                  {
                    question: "How do I know if I have a valid personal injury case?",
                    answer: "Valid cases require: (1) someone owed you a duty of care, (2) they breached that duty through negligence, (3) their breach caused your injuries, and (4) you suffered actual damages. We evaluate cases free of charge to determine strength and potential recovery through comprehensive case analysis."
                  },
                  {
                    question: "What if the insurance company denies my claim?",
                    answer: "Insurance companies often deny valid claims hoping claimants give up. We fight denials through additional investigation, expert testimony, and litigation when necessary. Many denied claims result in substantial recoveries after proper legal representation challenges the denial with compelling evidence."
                  },
                  {
                    question: "Can I recover if the accident was a hit-and-run?",
                    answer: "Uninsured motorist coverage applies to hit-and-run accidents. Prompt police reporting is required. We investigate surveillance footage, witness accounts, and vehicle debris to identify fleeing drivers while pursuing available insurance coverage and crime victim compensation programs."
                  },
                  {
                    question: "What if I'm injured by a drunk driver?",
                    answer: "Drunk driving cases often warrant punitive damages due to reckless disregard for safety. Bars and establishments serving obviously intoxicated drivers may face liability under dram shop laws. Criminal convictions strengthen civil cases but aren't required for recovery of damages."
                  },
                  {
                    question: "How do social media and surveillance affect my case?",
                    answer: "Insurance companies monitor social media and conduct surveillance looking for evidence contradicting injury claims. We advise clients on social media precautions and privacy settings while using legitimate surveillance evidence to strengthen cases when it supports our clients' positions."
                  },
                  {
                    question: "What if I have pre-existing conditions?",
                    answer: "Pre-existing conditions don't bar recovery if the accident aggravated or worsened them. The 'eggshell skull' rule means defendants take victims as they find them. We work with medical experts to differentiate pre-existing conditions from accident-related injuries and aggravations for maximum recovery."
                  },
                  {
                    question: "Can family members recover for emotional distress?",
                    answer: "Family members who witness accidents or their immediate aftermath may recover for emotional distress under California law. Spouses and close relatives suffering severe emotional trauma from witnessing loved ones' injuries deserve compensation for their psychological harm and treatment costs."
                  },
                  {
                    question: "What if I'm injured in a rideshare vehicle?",
                    answer: "Rideshare accidents involve complex insurance coverage varying by driver status when crashes occur. Million-dollar policies apply during rides and approaching riders while personal insurance governs between rides. We navigate coverage disputes to maximize recovery from all available sources."
                  },
                  {
                    question: "How do product liability cases work in personal injury law?",
                    answer: "Product liability holds manufacturers, distributors, and retailers responsible for injuries from defective products regardless of negligence. Design defects, manufacturing flaws, and inadequate warnings create liability. We identify all potential defendants and pursue recovery from multiple sources with expert testimony proving defects."
                  },
                  {
                    question: "What if I'm injured on someone else's property?",
                    answer: "Property owners owe varying duties depending on your legal status. Invitees (customers) receive the highest protection requiring active inspection for dangers. Social guests must be warned of known hazards. Even trespassers can't be intentionally harmed. We prove notice and negligent maintenance for maximum recovery."
                  },
                  {
                    question: "How do workplace injury cases differ from other personal injury claims?",
                    answer: "Workers' compensation provides limited benefits but bars suits against employers. Third-party claims against equipment manufacturers, contractors, and property owners provide additional recovery. We identify all potential defendants while coordinating with workers' comp to maximize total recovery without jeopardizing benefits."
                  },
                  {
                    question: "What if I'm injured in a bicycle or motorcycle accident?",
                    answer: "Cyclists and motorcyclists face prejudice from insurance companies and juries despite following traffic laws. We counter stereotypes with compelling evidence proving driver negligence while addressing unique injuries from lack of protection. California's lane-splitting laws create specific liability issues requiring experienced representation."
                  },
                  {
                    question: "What happens if I'm injured by an uninsured driver?",
                    answer: "Uninsured motorist coverage from your policy may provide protection up to your policy limits. We also investigate defendant assets for collection potential and explore employer liability if the at-fault driver was working. Even minimum coverage is better than no coverage when properly pursued."
                  },
                  {
                    question: "How do wrongful death claims work in California?",
                    answer: "Surviving spouses, children, and dependents can recover funeral expenses, lost financial support, and loss of companionship. California's two-year statute requires prompt action. Distribution follows intestacy laws unless settlement specifies otherwise. We handle these sensitive cases compassionately while pursuing maximum recovery."
                  },
                  {
                    question: "Can I recover if I was injured while intoxicated?",
                    answer: "Intoxication doesn't automatically bar recovery under California's comparative negligence system. Your compensation reduces by your percentage of fault. Defendants who serve obviously intoxicated individuals or create dangerous conditions may still be liable for their negligence despite your impairment."
                  },
                  {
                    question: "What if multiple parties caused my injury?",
                    answer: "California's joint and several liability allows recovery from any defendant capable of paying the full judgment. We identify all potentially liable parties including property owners, manufacturers, contractors, and drivers. Multiple defendants often provide better recovery prospects and insurance coverage options."
                  },
                  {
                    question: "How do medical liens affect my personal injury settlement?",
                    answer: "Healthcare providers and insurers may place liens on settlements for unpaid medical bills. We negotiate lien reductions and ensure proper legal procedures were followed. Improper liens can be challenged and reduced, preserving more settlement money for your financial recovery and future needs."
                  },
                  {
                    question: "What if the statute of limitations has already expired?",
                    answer: "Certain exceptions may still allow filing despite missed deadlines including delayed discovery of injuries, defendant's fraudulent concealment, or mental incapacity. We analyze your specific circumstances to determine if any exceptions apply and explore alternative legal remedies when available."
                  },
                  {
                    question: "Can I change lawyers if I'm unhappy with my current representation?",
                    answer: "Yes, you have the right to change attorneys at any time. We handle the transition smoothly including obtaining your file and addressing any fee arrangements. Client satisfaction is crucial for successful outcomes, and you deserve representation that meets your needs and communication expectations."
                  },
                  {
                    question: "What should I bring to my initial consultation?",
                    answer: "Bring all relevant documents including police reports, medical records, insurance correspondence, photographs, and witness contact information. However, don't delay consultation if you don't have everything - we can help obtain necessary documents and guide you through the evidence preservation process."
                  },
                  {
                    question: "How long will my personal injury case take to resolve?",
                    answer: "Timeline varies based on injury severity, treatment duration, and insurance company cooperation. Simple cases may resolve in months while complex cases take years. We don't rush settlements that undervalue your claim, but we work efficiently to resolve cases as quickly as possible while maximizing recovery."
                  },
                  {
                    question: "What if I can't afford medical treatment for my injuries?",
                    answer: "We can connect you with healthcare providers who treat personal injury patients on liens, allowing treatment without upfront payment. Medical care strengthens your case while addressing your health needs. Some providers offer reduced rates for personal injury patients, and we help coordinate appropriate care."
                  },
                  {
                    question: "Do I need to go to trial to get fair compensation?",
                    answer: "Most personal injury cases settle out of court, but trial preparation is crucial for strong negotiations. Insurance companies offer better settlements when they know we're prepared and willing to go to trial. Our former defense experience helps us evaluate when settlement offers are fair versus when trial is necessary."
                  },
                  {
                    question: "What if the other party has no insurance or assets?",
                    answer: "We explore all coverage sources including your own insurance policies, employer liability, property owner responsibility, and government entity involvement. Even judgment-proof defendants may have future assets or income streams. We also investigate whether anyone else contributed to causing your injuries."
                  },
                  {
                    question: "Can I still pursue a case if I signed a waiver or release?",
                    answer: "Waivers don't always bar recovery. California law limits enforceability of releases, especially for gross negligence, intentional misconduct, or violations of statutory duties. We analyze waiver language and circumstances to determine if exceptions apply or if the release is invalid or unenforceable."
                  },
                  {
                    question: "What if my injury prevents me from working permanently?",
                    answer: "Permanent disability cases require comprehensive life care planning and vocational analysis. We work with economists and medical experts to calculate lifetime earning capacity loss, future medical needs, and reduced quality of life. These cases often result in substantial settlements reflecting lifelong impacts."
                  },
                  {
                    question: "How do insurance companies investigate personal injury claims?",
                    answer: "Insurance companies conduct thorough investigations including surveillance, social media monitoring, medical record reviews, and witness interviews. They look for ways to minimize liability and damages. Our former defense experience reveals their tactics, allowing us to anticipate and counter their investigative strategies effectively."
                  },
                  {
                    question: "What if I'm injured while traveling outside California?",
                    answer: "Out-of-state accidents may still allow California jurisdiction if defendants conduct business here or if your own insurance policies apply. We analyze applicable laws and jurisdictional issues to determine the best legal strategy and ensure you receive maximum protection under the most favorable legal standards."
                  },
                  {
                    question: "Can I sue for pain and suffering in addition to medical bills?",
                    answer: "Yes, California allows recovery for non-economic damages including pain, suffering, emotional distress, and loss of enjoyment of life. These damages often exceed economic losses in serious injury cases. We present compelling evidence of how injuries have impacted your daily life and future happiness."
                  },
                  {
                    question: "What if the accident happened at my workplace but involved a third party?",
                    answer: "Workplace accidents may involve both workers' compensation and third-party personal injury claims. While workers' comp limits claims against your employer, you can still sue other responsible parties like equipment manufacturers, contractors, or visiting drivers. We coordinate both claims to maximize total recovery."
                  },
                  {
                    question: "How do you prove who was at fault in an accident?",
                    answer: "Fault determination involves investigating physical evidence, witness testimony, expert analysis, and applicable traffic laws or safety standards. We reconstruct accidents, analyze medical evidence, and consult experts to build compelling proof of liability. Our former defense experience reveals what evidence convinces insurance companies and juries."
                  },
                  {
                    question: "What if I was injured by a government employee?",
                    answer: "Government employee negligence may create liability for their employing agency under certain circumstances. California Government Code provides limited waiver of sovereign immunity for employee negligence within the scope of employment. Strict notice requirements and procedural rules make early legal consultation essential for government claims."
                  }
                ].map((faq, index) => (
                  <Card key={index} className="hover-card">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg font-semibold text-left">{faq.question}</CardTitle>
                        {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </div>
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

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <img 
                src={medicalImage} 
                alt="Personal Injury Medical Resources"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              
              <h2 className="text-3xl font-bold text-red-600 mb-6">Personal Injury Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>
                      <Button 
                        onClick={() => window.location.href = '/practice-areas/general-personal-injury/compensation-calculator'}
                        className="w-full bg-blue-600 hover:bg-blue-700"
                      >
                        Personal Injury Calculator
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Calculate potential compensation for your personal injury case based on your specific circumstances and damages.</p>
                  </CardContent>
                </Card>
                
                <Card className="hover-card">
                  <CardHeader>
                    <CardTitle>
                      <Button 
                        onClick={() => window.location.href = '/practice-areas/general-personal-injury/legal-guidance'}
                        className="w-full bg-purple-600 hover:bg-purple-700"
                      >
                        Legal Guidance Center
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive legal information and guidance for personal injury victims in California.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait Section */}
            <section className="content-section bg-red-50 border-l-4 border-red-500 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-red-600 mb-4">Don't Wait - Time Limits Apply for California Personal Injury Claims</h2>
              <p className="text-lg mb-4">
                California's statute of limitations gives you only two years from your injury date to file a personal injury lawsuit. Waiting too long can result in losing your right to compensation forever.
              </p>
              <p className="mb-6">
                Evidence disappears, witnesses forget, and your case becomes harder to prove over time. Insurance companies know these deadlines and often delay hoping you'll miss them.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => window.location.href = '/practice-areas/general-personal-injury/case-evaluation'}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  Start Your Free Case Evaluation Now
                </Button>
                <Button 
                  size="lg"
                  onClick={() => window.location.href = 'tel:8181234567'}
                  variant="outline"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold"
                >
                  Call (818) 123-4567
                </Button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralPersonalInjury;