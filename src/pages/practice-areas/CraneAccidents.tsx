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
  Construction,
  HardHat,
  Wrench
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/crane-accident-hero-bg.jpg';
import sidebarImage from '@/assets/crane-sidebar.jpg';
import diagnosisImage from '@/assets/crane-diagnosis-process.jpg';
import legalProcessImage from '@/assets/crane-legal-process.jpg';
import exposureSitesImage from '@/assets/california-crane-sites.jpg';
import medicalImage from '@/assets/crane-medical-facility.jpg';
import compensationImage from '@/assets/crane-compensation-calculator.jpg';
import overviewImage from '@/assets/crane-accidents-overview.jpg';
import caseEvaluationImage from '@/assets/crane-case-evaluation.jpg';
import immediateStepsImage from '@/assets/crane-immediate-steps.jpg';
import investigationImage from '@/assets/crane-investigation.jpg';
import legalProcessSectionImage from '@/assets/crane-legal-process.jpg';
import faqImage from '@/assets/crane-faq.jpg';
import resourcesImage from '@/assets/crane-resources.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const CraneAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    craneType: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: Stethoscope },
    { id: 'accident-process', label: 'ACCIDENT INVESTIGATION', icon: HardHat },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation with 3D effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50, rotationX: -15 },
        { opacity: 1, y: 0, rotationX: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Content sections with parallax
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );

      // 3D background layers
      const backLayer = heroRef.current?.querySelector('.back-layer');
      const midLayer = heroRef.current?.querySelector('.mid-layer');
      const frontLayer = heroRef.current?.querySelector('.front-layer');

      if (backLayer && midLayer && frontLayer) {
        gsap.to(backLayer, {
          y: 30,
          duration: 14,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });

        gsap.to(midLayer, {
          x: 40,
          duration: 18,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });

        gsap.to(frontLayer, {
          y: 20,
          x: 25,
          rotation: 2,
          duration: 10,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true
        });
      }
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
    window.location.href = '/practice-areas/crane-accidents/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background relative" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
      <SEO 
        title="California Crane Accident Lawyer | Construction Site Injury Attorney | Trembach Law Firm"
        description="Experienced California crane accident lawyers. Former defense attorney fighting for construction workers and victims. Free 24/7 consultation. No fees unless we win."
        keywords="California crane accident lawyer, construction accident attorney, crane collapse lawyer, crane operator injury, OSHA violation attorney, construction site injury"
        canonical="/practice-areas/crane-accidents"
      />

      <GoBack />

      {/* 3D Background Layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ transformStyle: 'preserve-3d' }}>
        <div 
          className="back-layer absolute inset-0 opacity-10"
          style={{ 
            background: 'linear-gradient(45deg, hsl(var(--primary)/0.1), hsl(var(--accent)/0.1))',
            transform: 'translateZ(-500px) scale(6)'
          }}
        />
        <div 
          className="mid-layer absolute inset-0 opacity-20"
          style={{ 
            background: 'radial-gradient(circle, hsl(var(--primary)/0.05) 0%, transparent 70%)',
            transform: 'translateZ(-250px) scale(3)'
          }}
        />
        <div 
          className="front-layer absolute inset-0 opacity-30"
          style={{ 
            background: 'linear-gradient(135deg, transparent 0%, hsl(var(--accent)/0.03) 50%, transparent 100%)',
            transform: 'translateZ(-100px) scale(1.5)'
          }}
        />
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              California Crane Accident Lawyers
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
              onClick={() => window.location.href = '/practice-areas/crane-accidents/case-evaluation'}
            >
              <span className="text-white">START MY FREE CASE EVALUATION</span>
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
                    <span className={activeTab === tab.id ? 'text-primary' : 'text-white'}>
                      {tab.label}
                    </span>
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
          
          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-card hover-glow-primary transition-all duration-500 hover:scale-105 border-2 border-primary/20">
                <CardHeader className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-t-lg">
                  <CardTitle className="text-2xl font-bold text-primary">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-foreground">Call Now</h3>
                    <p className="text-sm text-muted-foreground mb-4">Speak with our legal team immediately</p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-white transition-all duration-300 hover:scale-105"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <span className="text-white">(818) 123-4567</span>
                    </Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                        <MessageCircle className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">Free Case Review</h3>
                      <p className="text-sm text-muted-foreground mb-4">Get your case evaluated online</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-105"
                        onClick={() => window.location.href = '/practice-areas/crane-accidents/case-evaluation'}
                      >
                        <span className="text-blue-600 hover:text-white">Start Evaluation</span>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                        <Mail className="w-8 h-8 text-purple-600" />
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-foreground">Email Us</h3>
                      <p className="text-sm text-muted-foreground mb-4">Send us your case details</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300 hover:scale-105"
                        onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                      >
                        <span className="text-purple-600 hover:text-white">Send Email</span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Sidebar Content */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Shield className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Former defense attorney advantage</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">24/7 case consultation</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">No fees unless we win</span>
                  </div>
                  <div className="flex items-start">
                    <HardHat className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">Construction accident specialists</span>
                  </div>
                </CardContent>
              </Card>

              <div className="bg-muted p-4 rounded-lg">
                <img 
                  src={sidebarImage} 
                  alt="Crane safety equipment and inspection tools" 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h4 className="font-semibold mb-2 text-foreground">Immediate Action Required</h4>
                <p className="text-sm text-muted-foreground">
                  Crane accident evidence can be lost quickly. Contact us immediately to preserve your rights and secure critical evidence.
                </p>
                <div className="mt-4 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full text-sm border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/practice-areas/crane-accidents/legal-guidance'}
                  >
                    <span className="text-primary hover:text-white">Legal Guidance</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full text-sm border-primary text-primary hover:bg-primary hover:text-white"
                    onClick={() => window.location.href = '/practice-areas/crane-accidents/medical-guidance'}
                  >
                    <span className="text-primary hover:text-white">Medical Guidance</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 order-2 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={overviewImage} 
                  alt="Construction site with tower cranes and safety equipment" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">California Crane Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-xl leading-relaxed mb-4 text-foreground">
                  If you or a loved one has been injured in a crane accident in California, you're facing one of the most complex and dangerous types of construction accidents. These massive machines can cause catastrophic injuries that change lives forever, and those responsible for unsafe crane operations must be held accountable.
                </p>
                
                <p className="text-xl leading-relaxed text-foreground">
                  At Trembach Law Firm, we understand the complexities of crane accident cases in California. With extensive experience in construction accident litigation and a deep understanding of OSHA regulations, we're prepared to fight for maximum compensation while you focus on recovery and rehabilitation.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:scale-105 transition-all duration-300">
                    <span className="text-foreground">Show More About Our California Crane Accident Practice</span>
                    {expandedSections.overview ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Construction className="w-5 h-5 mr-2 text-primary" />
                          <span className="text-foreground group-hover:text-primary">Crane Expertise</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">Our team works with leading crane safety experts and engineers throughout California to understand the technical aspects of your accident and identify all liable parties.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Map className="w-5 h-5 mr-2 text-primary" />
                          <span className="text-foreground group-hover:text-primary">California Construction Knowledge</span>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground">We have extensive knowledge of California's construction industry, including major projects, crane operators, and construction sites where crane accidents frequently occur.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-8 rounded-lg border border-primary/20">
                    <h3 className="text-2xl font-semibold mb-6 text-foreground">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-start hover:scale-105 transition-transform duration-300">
                        <Shield className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Former Defense Experience</h4>
                          <p className="text-sm text-muted-foreground">Attorney Trembach's background defending construction companies provides unique insights into defense strategies and how to counter them effectively.</p>
                        </div>
                      </div>
                      <div className="flex items-start hover:scale-105 transition-transform duration-300">
                        <Clock className="w-6 h-6 text-green-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Immediate Response</h4>
                          <p className="text-sm text-muted-foreground">We understand the urgency of crane accidents and respond immediately to preserve evidence and protect your rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start hover:scale-105 transition-transform duration-300">
                        <Users className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">Comprehensive Support</h4>
                          <p className="text-sm text-muted-foreground">We provide compassionate support and guidance throughout your legal journey while fighting aggressively for compensation.</p>
                        </div>
                      </div>
                      <div className="flex items-start hover:scale-105 transition-transform duration-300">
                        <Award className="w-6 h-6 text-red-500 mt-1 mr-4 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-foreground">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we successfully recover compensation for your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-2xl font-bold text-foreground">Comprehensive California Crane Accident Representation</h3>
                    <p className="text-foreground">
                      Crane accident cases in California involve complex engineering, safety regulations, and multiple liable parties. Our firm has the resources and expertise to handle every aspect of your case, from identifying all sources of negligence to working with expert witnesses who can clearly explain how the accident occurred and who should be held responsible.
                    </p>
                    
                    <p className="text-foreground">
                      California's robust construction industry includes major infrastructure projects, commercial developments, and industrial facilities. Many of our clients have been injured at sites involving:
                    </p>
                    
                    <ul className="text-foreground">
                      <li>High-rise construction projects in Los Angeles and San Francisco</li>
                      <li>Bridge and highway construction throughout California</li>
                      <li>Port operations in Long Beach and Los Angeles</li>
                      <li>Refinery and industrial facility construction</li>
                      <li>Residential and commercial development projects</li>
                      <li>Infrastructure projects like airports and public facilities</li>
                    </ul>
                    
                    <p className="text-foreground">
                      We investigate every potential source of liability to ensure no responsible party escapes accountability for your injuries. This comprehensive approach often results in higher compensation as we identify multiple defendants including general contractors, crane operators, equipment manufacturers, and property owners.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={caseEvaluationImage} 
                  alt="Legal documents with scales of justice and law books for case evaluation" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">Free Crane Accident Case Evaluation</h2>
              
              <div className="bg-gradient-to-r from-muted/50 to-accent/5 p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Get Your Free Consultation</h3>
                <p className="mb-6 text-lg text-foreground">Provide some basic information to help us understand your crane accident case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                        className="bg-background border-primary/30 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Type of Crane Involved</label>
                      <Select value={formData.craneType} onValueChange={(value) => setFormData(prev => ({ ...prev, craneType: value }))}>
                        <SelectTrigger className="bg-background border-primary/30 focus:border-primary">
                          <SelectValue placeholder="Select crane type" className="text-foreground" />
                        </SelectTrigger>
                        <SelectContent className="bg-background border-primary/30">
                          <SelectItem value="mobile-crane">Mobile Crane</SelectItem>
                          <SelectItem value="tower-crane">Tower Crane</SelectItem>
                          <SelectItem value="overhead-crane">Overhead Crane</SelectItem>
                          <SelectItem value="crawler-crane">Crawler Crane</SelectItem>
                          <SelectItem value="truck-mounted-crane">Truck-Mounted Crane</SelectItem>
                          <SelectItem value="unknown">Unknown/Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Type of Injury</label>
                    <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                      <SelectTrigger className="bg-background border-primary/30 focus:border-primary">
                        <SelectValue placeholder="Select injury type" className="text-foreground" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border-primary/30">
                        <SelectItem value="crush-injury">Crush Injury</SelectItem>
                        <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                        <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                        <SelectItem value="fractures">Broken Bones/Fractures</SelectItem>
                        <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                        <SelectItem value="burns">Burns/Electrical Injuries</SelectItem>
                        <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white text-lg py-4 hover:scale-105 transition-all duration-300">
                    <span className="text-white">Start My Free Case Evaluation</span>
                  </Button>
                </form>
              </div>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={immediateStepsImage} 
                  alt="First aid medical kit with emergency supplies and safety equipment" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">What to Do After Your Crane Accident</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-500 hover:scale-105 border-2 border-green-200 hover:border-green-400">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      <span className="text-foreground group-hover:text-primary">Immediate Medical Steps</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-foreground">• Seek emergency medical attention immediately, even for minor injuries</p>
                    <p className="text-foreground">• Get a thorough medical evaluation at a trauma center</p>
                    <p className="text-foreground">• Document all injuries with photographs if possible</p>
                    <p className="text-foreground">• Follow all medical treatment recommendations</p>
                    <p className="text-foreground">• Keep detailed records of all medical appointments</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-500 hover:scale-105 border-2 border-red-200 hover:border-red-400">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      <span className="text-foreground group-hover:text-primary">Immediate Legal Steps</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-foreground">• Contact an experienced crane accident attorney immediately</p>
                    <p className="text-foreground">• Do not give recorded statements to insurance companies</p>
                    <p className="text-foreground">• Preserve all evidence from the accident scene</p>
                    <p className="text-foreground">• Obtain contact information from witnesses</p>
                    <p className="text-foreground">• Document the accident scene with photos and videos</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.immediateSteps} onOpenChange={() => toggleSection('immediateSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 hover:scale-105 transition-all duration-300">
                    <span className="text-foreground">Learn More About Protecting Your Rights</span>
                    {expandedSections.immediateSteps ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-xl font-semibold mb-4 text-foreground">Critical Evidence That Can Be Lost</h3>
                    <p className="mb-4 text-foreground">
                      Crane accident scenes are often cleaned up quickly, destroying crucial evidence. Time is critical in preserving:
                    </p>
                    <ul className="space-y-2 text-foreground">
                      <li>• Crane maintenance and inspection records</li>
                      <li>• Operator certification and training documentation</li>
                      <li>• Load charts and weight calculations for the lift</li>
                      <li>• Ground condition assessments and soil reports</li>
                      <li>• Weather conditions at the time of the accident</li>
                      <li>• Communication records between crew members</li>
                      <li>• OSHA inspection reports and safety violations</li>
                      <li>• Video surveillance from nearby cameras</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                      <h4 className="font-semibold mb-3 text-foreground">What NOT to Do</h4>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• Don't sign any documents from insurance companies</li>
                        <li>• Don't accept blame or admit fault</li>
                        <li>• Don't delay seeking medical attention</li>
                        <li>• Don't return to work without medical clearance</li>
                        <li>• Don't post about the accident on social media</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                      <h4 className="font-semibold mb-3 text-foreground">What TO Do</h4>
                      <ul className="space-y-2 text-sm text-foreground">
                        <li>• Contact Trembach Law Firm immediately</li>
                        <li>• Keep detailed records of everything</li>
                        <li>• Follow all medical treatment plans</li>
                        <li>• Avoid discussing the case with others</li>
                        <li>• Let us handle all communications</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Accident Investigation Section */}
            <section id="accident-process" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={investigationImage} 
                  alt="Investigation equipment and tools for accident scene analysis" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">Crane Accident Investigation Process</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card hover-glow-primary transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <HardHat className="w-5 h-5 mr-2 text-primary" />
                      Immediate Investigation Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground">
                      <li>• Secure the accident scene and preserve evidence</li>
                      <li>• Photograph all equipment, conditions, and injuries</li>
                      <li>• Identify and interview all witnesses</li>
                      <li>• Collect crane maintenance and inspection records</li>
                      <li>• Document weather and site conditions</li>
                      <li>• Preserve operator certification records</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover-glow-primary transition-all duration-500 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Wrench className="w-5 h-5 mr-2 text-primary" />
                      Technical Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-foreground">
                      <li>• Crane mechanical inspection and failure analysis</li>
                      <li>• Load calculation verification and capacity analysis</li>
                      <li>• Operator competency and certification review</li>
                      <li>• Safety protocol compliance evaluation</li>
                      <li>• OSHA regulation adherence assessment</li>
                      <li>• Expert witness consultation and testimony</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200 mb-6">
                <h3 className="text-xl font-bold text-orange-800 mb-3 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Critical Time-Sensitive Evidence
                </h3>
                <p className="text-orange-700 mb-4">
                  Crane accident evidence can be lost, destroyed, or altered quickly. Immediate action is essential to preserve:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Physical Evidence</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Crane components and failed parts</li>
                      <li>• Load and rigging equipment</li>
                      <li>• Ground conditions and soil samples</li>
                      <li>• Site layout and obstructions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-800 mb-2">Documentation</h4>
                    <ul className="text-orange-700 space-y-1">
                      <li>• Maintenance and inspection logs</li>
                      <li>• Operator training and certification</li>
                      <li>• Safety meeting records</li>
                      <li>• Weather and site condition reports</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={legalProcessSectionImage} 
                  alt="Courtroom with gavel, legal documents, and scales of justice" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-red-600 mb-6">Legal Process for Crane Accident Cases</h2>
              
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Phase 1: Immediate Response (First 30 Days)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-foreground mb-4">
                        Time is critical in crane accident cases. We immediately begin preserving evidence and protecting your rights:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Send spoliation letters to preserve evidence</li>
                        <li>• Conduct independent accident investigation</li>
                        <li>• Identify all potentially liable parties</li>
                        <li>• Secure expert witness consultations</li>
                        <li>• File necessary insurance claims and notices</li>
                        <li>• Coordinate with medical providers for treatment</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Phase 2: Case Development (Months 2-6)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-foreground mb-4">
                        We build a comprehensive case by gathering evidence and expert analysis:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Complete medical evaluation and damage assessment</li>
                        <li>• File formal lawsuit against all responsible parties</li>
                        <li>• Conduct depositions of witnesses and defendants</li>
                        <li>• Expert witness analysis and report preparation</li>
                        <li>• Discovery of internal company documents</li>
                        <li>• OSHA investigation review and citation analysis</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center text-foreground">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      Phase 3: Resolution (Months 6+)
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <p className="text-foreground mb-4">
                        We pursue maximum compensation through settlement negotiations or trial:
                      </p>
                      <ul className="space-y-2 text-foreground">
                        <li>• Mediation and settlement negotiations</li>
                        <li>• Trial preparation and jury selection</li>
                        <li>• Expert witness testimony coordination</li>
                        <li>• Final settlement approval and distribution</li>
                        <li>• Post-settlement medical lien resolution</li>
                        <li>• Structured settlement planning if appropriate</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200 mt-8">
                <h3 className="text-xl font-bold text-red-800 mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Why Legal Representation Matters
                </h3>
                <p className="text-red-700 mb-4">
                  Crane accident cases involve complex legal and technical issues that require experienced representation:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Legal Complexity</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Multiple potentially liable parties</li>
                      <li>• Complex insurance coverage issues</li>
                      <li>• Federal and state safety regulations</li>
                      <li>• Comparative fault considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-800 mb-2">Defense Tactics</h4>
                    <ul className="text-red-700 space-y-1">
                      <li>• Aggressive insurance company strategies</li>
                      <li>• Attempts to blame the victim</li>
                      <li>• Quick settlement offers below true value</li>
                      <li>• Evidence destruction or alteration</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section with 50+ Questions - Improved font sizes */}
            <section id="faq" className="content-section mb-12">
              <div className="mb-8">
                <img 
                  src={faqImage} 
                  alt="Question marks floating above law books and legal documents" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <h2 className="text-4xl font-bold text-red-600 mb-8">Crane Accident FAQ</h2>
              <p className="text-xl text-muted-foreground mb-8">Get answers to the most common questions about crane accident claims in California</p>
              
              <div className="space-y-4">
                {craneAccidentFAQs.map((faq, index) => (
                  <Card key={index} className="glass-card hover-glow-primary transition-all duration-300 hover:scale-[1.02]">
                    <Collapsible open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                      <CollapsibleTrigger asChild>
                        <div className="p-6 cursor-pointer hover:bg-primary/5 transition-colors">
                          <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-foreground">{faq.question}</h3>
                            {expandedFaq === index ? (
                              <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-primary flex-shrink-0 ml-4" />
                            )}
                          </div>
                        </div>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <div className="px-6 pb-6">
                          <p className="text-lg text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Time Limits Apply Section */}
            <section className="bg-gray-900 text-white py-16 rounded-lg mb-12 relative overflow-hidden">
              <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Don't Wait - Time Limits Apply for California Crane Accident Claims</h2>
                <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                <p className="text-xl mb-12 leading-relaxed text-white">California law has strict deadlines for filing crane accident claims. Contact us today for your free consultation.</p>
                <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
                  <Button 
                    size="lg" 
                    aria-label="Call Trembach Law Firm" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg hover:scale-105" 
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <span className="text-white">CALL (818) 123-4567</span>
                  </Button>
                  
                  <p className="text-sm text-white/80">Available 24/7 for your crane accident case</p>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="w-full border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = '/practice-areas/crane-accidents/case-evaluation'}
                  >
                    <span className="text-white hover:text-gray-900">Free Online Case Evaluation</span>
                  </Button>
                </div>
              </div>
              
              {/* Decorative background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 border border-white rounded-full"></div>
                <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white transform rotate-45"></div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

// 50+ FAQ Data
const craneAccidentFAQs = [
  {
    question: "What should I do immediately after a crane accident?",
    answer: "First, get medical attention immediately even if you don't think you're seriously injured. Many crane accident injuries don't manifest symptoms right away. Report the accident to your employer and document everything. Don't give recorded statements to insurance companies before consulting with an attorney. Contact Trembach Law Firm as soon as possible to protect your rights and preserve evidence."
  },
  {
    question: "How long do I have to file a crane accident lawsuit in California?",
    answer: "California's statute of limitations for personal injury cases is generally two years from the date of injury. However, some claims may have shorter deadlines, and evidence preservation requires immediate action. Don't wait - contact an attorney as soon as possible to ensure your rights are protected."
  },
  {
    question: "Who can be held liable for a crane accident?",
    answer: "Multiple parties may be liable including the general contractor, crane rental company, crane manufacturer, property owner, crane operator, and subcontractors. Each party has different responsibilities and insurance coverage. Our investigation will identify all potentially liable parties to maximize your compensation."
  },
  {
    question: "Can I sue if I was partially at fault for the crane accident?",
    answer: "Yes. California follows pure comparative negligence law, meaning you can recover damages even if you were partially at fault. Your compensation will be reduced by your percentage of fault. For example, if you were 20% at fault, you can still recover 80% of your damages."
  },
  {
    question: "What types of compensation can I recover for a crane accident?",
    answer: "You may recover medical expenses, lost wages, future medical costs, pain and suffering, disability compensation, loss of enjoyment of life, and other damages. In wrongful death cases, families can recover funeral expenses, lost financial support, and loss of companionship."
  },
  {
    question: "Do I need an attorney for a crane accident claim?",
    answer: "Yes. Crane accident cases involve complex liability issues, multiple parties, extensive investigation, and sophisticated insurance company defense strategies. Without experienced legal representation, you're unlikely to receive fair compensation. Our former defense experience gives you a significant advantage."
  },
  {
    question: "How much does it cost to hire a crane accident lawyer?",
    answer: "We work on a contingency fee basis, meaning you pay no attorney fees unless we win your case. We advance all case costs and expenses, so you have no upfront financial burden. You only pay us if we successfully recover compensation for you."
  },
  {
    question: "What makes crane accidents different from other construction accidents?",
    answer: "Crane accidents typically involve more severe injuries due to the massive size and weight of the equipment. They often affect multiple victims, involve complex equipment and multiple contractors, require specialized expert testimony, and face more aggressive insurance company defenses due to higher potential damages."
  },
  {
    question: "What evidence is important in crane accident cases?",
    answer: "Critical evidence includes crane maintenance records, operator certification documents, inspection reports, OSHA violations, safety training records, witness statements, photographs of the accident scene, equipment specifications, weather conditions, and medical records. Time is critical as this evidence can be lost or destroyed."
  },
  {
    question: "How long do crane accident cases take to resolve?",
    answer: "Case duration varies widely depending on injury severity, number of parties involved, insurance company cooperation, and whether trial is necessary. Simple cases may resolve in months, while complex cases with severe injuries can take years. We work diligently to resolve cases as quickly as possible while ensuring maximum compensation."
  },
  {
    question: "Can family members file a lawsuit if someone dies in a crane accident?",
    answer: "Yes. California allows surviving spouses, children, and dependents to file wrongful death lawsuits. These claims can recover funeral expenses, lost financial support, loss of companionship, and other damages. The statute of limitations is two years from the date of death."
  },
  {
    question: "What role does OSHA play in crane accident cases?",
    answer: "OSHA investigates workplace accidents and can issue citations for safety violations. These citations strengthen liability claims by establishing that safety standards were violated. OSHA's crane regulations cover operator certification, daily inspections, load limits, and other critical safety requirements."
  },
  {
    question: "What are the most common causes of crane accidents?",
    answer: "The most common causes include operator error, equipment failure, inadequate maintenance, overloading, contact with power lines, unstable ground conditions, improper assembly or disassembly, poor communication between crew members, and failure to follow safety protocols."
  },
  {
    question: "Are crane operators required to be certified in California?",
    answer: "Yes. OSHA requires crane operators to be certified through accredited programs. California also has state-specific requirements. Operators must pass written and practical exams, maintain certification through continuing education, and operate only equipment they're certified for."
  },
  {
    question: "What should I know about insurance companies after a crane accident?",
    answer: "Insurance companies will try to minimize payouts through various tactics including quick settlement offers, recorded statements, surveillance, and claims that you were at fault. Never give recorded statements or accept settlement offers without consulting an attorney. As a former defense attorney, I know their strategies."
  },
  {
    question: "Can I sue the crane manufacturer for a defective crane?",
    answer: "Yes. Under California's strict liability law, manufacturers are responsible for defective products regardless of negligence. This includes design defects, manufacturing defects, and failure to provide adequate warnings. Product liability claims can provide significant compensation."
  },
  {
    question: "What types of cranes are involved in the most accidents?",
    answer: "Mobile cranes cause the most accidents, followed by tower cranes and overhead cranes. Each type presents unique risks: mobile cranes can tip over, tower cranes can collapse, and overhead cranes can drop loads. All require specialized safety protocols and proper operation."
  },
  {
    question: "How do weather conditions affect crane safety?",
    answer: "Weather significantly impacts crane safety. High winds can cause load swing and crane instability. Rain makes surfaces slippery and reduces visibility. Extreme temperatures affect equipment performance. Lightning poses electrocution risks. Crane operations should cease when weather conditions exceed safe limits."
  },
  {
    question: "What is the role of signal persons in crane operations?",
    answer: "Signal persons communicate with crane operators using standardized hand signals, radio, or other methods when the operator cannot clearly see the load or landing area. They must be qualified through training and testing. Failure to use qualified signal persons or communication breakdowns often contribute to accidents."
  },
  {
    question: "Are there different safety requirements for different types of cranes?",
    answer: "Yes. Mobile cranes, tower cranes, overhead cranes, and other types have specific safety requirements. Mobile cranes require outrigger setup and ground preparation. Tower cranes need proper anchoring and climbing procedures. Each type has unique inspection requirements, capacity limitations, and operational protocols."
  },
  {
    question: "How often should cranes be inspected?",
    answer: "OSHA requires daily visual inspections before use, monthly inspections of critical components, and annual comprehensive inspections by qualified inspectors. Additional inspections are required after incidents, modifications, or extended periods of non-use. Inspection records are critical evidence in accident cases."
  },
  {
    question: "What is crane load capacity and why is it important?",
    answer: "Load capacity is the maximum weight a crane can safely lift at a specific radius and boom angle. It varies based on configuration and conditions. Exceeding load capacity can cause tip-overs, structural failures, or dropped loads. Load charts must be consulted for every lift, and loads must be accurately calculated."
  },
  {
    question: "Can I file a claim if I was injured as a bystander to a crane accident?",
    answer: "Yes. Bystanders injured by crane accidents can file personal injury claims against all negligent parties. Unlike workers who may be limited to workers' compensation benefits, bystanders can recover full damages including pain and suffering. Public safety is a primary concern in crane operations."
  },
  {
    question: "What happens if multiple people are injured in the same crane accident?",
    answer: "Each injured person has a separate claim for their individual damages. However, insurance policy limits may need to be allocated among multiple claimants. This makes it critical to act quickly to preserve your rights and ensure adequate compensation is available for your claim."
  },
  {
    question: "How do crane accidents compare to other construction accidents in terms of severity?",
    answer: "Crane accidents typically result in more severe injuries and higher fatality rates than other construction accidents. The massive weight and height involved in crane operations create potential for catastrophic injuries including crush injuries, falls from height, and electrocution. Recovery time and costs are generally much higher."
  },
  {
    question: "What is the average settlement for crane accident cases?",
    answer: "Settlement amounts vary widely based on injury severity, fault determination, insurance coverage, and economic losses. Severe injuries can result in settlements ranging from hundreds of thousands to millions of dollars. Each case is unique, and we cannot guarantee specific outcomes, but we fight for maximum compensation in every case."
  },
  {
    question: "Can crane accidents be prevented?",
    answer: "Most crane accidents are preventable through proper safety protocols, adequate training, regular maintenance, proper planning, and adherence to safety regulations. When companies cut corners on safety to save time or money, preventable accidents occur. This negligence forms the basis for liability claims."
  },
  {
    question: "What should employers do to prevent crane accidents?",
    answer: "Employers should implement comprehensive safety programs including proper training, regular equipment maintenance, qualified personnel, safety protocols, hazard identification, incident reporting, and ongoing supervision. Creating a safety culture where workers feel comfortable reporting hazards without retaliation is essential."
  },
  {
    question: "How do crane accident cases differ from car accident cases?",
    answer: "Crane cases involve more complex liability issues, multiple parties, specialized equipment, OSHA regulations, and typically more severe injuries. They require expert testimony, detailed investigation, and higher insurance policy limits. The legal and technical complexity is significantly greater than typical car accident cases."
  },
  {
    question: "Can crane accidents result in criminal charges?",
    answer: "Yes, in cases involving gross negligence, willful safety violations, or impaired operation. Criminal charges don't prevent civil lawsuits. In fact, criminal convictions can strengthen civil cases by establishing that dangerous conduct occurred. Both criminal and civil cases may proceed simultaneously."
  },
  {
    question: "What safety measures should be in place during crane operations?",
    answer: "Safety measures include pre-operational inspections, qualified operators and signal persons, proper load calculations, exclusion zones, communication protocols, emergency procedures, weather monitoring, and ongoing supervision. A comprehensive safety plan should address all foreseeable hazards."
  },
  {
    question: "How do crane accidents affect workers' compensation claims?",
    answer: "Workers' compensation may provide immediate benefits for medical care and partial wage replacement. However, these benefits are limited and don't include pain and suffering. Third-party liability claims against non-employer parties can provide additional compensation beyond workers' compensation limits."
  },
  {
    question: "What happens if crane accident evidence is destroyed?",
    answer: "Evidence destruction can seriously harm your case. Courts may impose sanctions on parties who destroy evidence, including adverse jury instructions or default judgments. This is why immediate legal intervention is critical to preserve evidence through spoliation letters and court orders."
  },
  {
    question: "Can environmental factors beyond weather affect crane safety?",
    answer: "Yes. Factors include soil conditions, nearby construction activities, traffic vibrations, electromagnetic interference, and proximity to airports or flight paths. Site surveys should identify all environmental hazards and appropriate safety measures should be implemented."
  },
  {
    question: "What is the importance of crane assembly and disassembly procedures?",
    answer: "Assembly and disassembly are high-risk operations requiring qualified supervision and specific procedures. Many serious accidents occur during these phases. OSHA requires detailed plans, qualified personnel, and specific safety protocols. Shortcuts or improper procedures can lead to catastrophic failures."
  },
  {
    question: "How do urban construction sites affect crane accident risk?",
    answer: "Urban sites have increased risks due to confined spaces, proximity to other buildings, pedestrian traffic, and utility lines. Public safety concerns are heightened when cranes operate over streets or occupied buildings. Special permits, safety protocols, and public notifications may be required."
  },
  {
    question: "What role does crane manufacturer training play in accident prevention?",
    answer: "Manufacturers should provide comprehensive training on their specific equipment. Generic training may not cover unique features or limitations of particular crane models. Inadequate manufacturer training or documentation can contribute to accidents and create liability for the manufacturer."
  },
  {
    question: "Can crane accidents be caused by inadequate communication?",
    answer: "Yes. Communication failures between operators, signal persons, and ground crews are common causes of accidents. Radio problems, language barriers, and failure to use proper signals can lead to devastating mistakes. Clear communication protocols and backup systems are essential for safe operations."
  },
  {
    question: "What should I expect during the legal process for a crane accident case?",
    answer: "The process includes investigation, filing claims, discovery (document exchange and depositions), expert analysis, mediation attempts, and potentially trial. We handle all legal aspects while keeping you informed. Most cases settle before trial, but we prepare every case as if it will go to trial."
  },
  {
    question: "How important is immediate medical attention after a crane accident?",
    answer: "Immediate medical attention is critical, even if injuries seem minor. Adrenaline and shock can mask serious injuries, and some conditions like internal bleeding or brain injuries may not show symptoms immediately. Early medical documentation also strengthens your legal case by establishing the connection between the accident and your injuries."
  },
  {
    question: "What types of expert witnesses are used in crane accident cases?",
    answer: "Common expert witnesses include crane engineers, safety experts, accident reconstruction specialists, medical experts, economic experts, and industry standards experts. These professionals help explain complex technical issues to juries and establish liability, causation, and damages in your case."
  },
  {
    question: "Can crane accidents be caused by electrical hazards?",
    answer: "Yes. Contact with power lines is a leading cause of crane accidents, often resulting in electrocution deaths and severe burns. OSHA requires specific clearance distances from power lines, and utility companies may need to de-energize lines during nearby crane operations. Electrical contact cases often involve both the crane operator's employer and the utility company."
  },
  {
    question: "How do crane stability and ground conditions affect safety?",
    answer: "Crane stability depends on proper ground preparation, adequate load-bearing capacity, and level surfaces. Soft soil, underground utilities, slopes, and vibrations from nearby operations can compromise stability. Ground preparation and soil testing are critical safety requirements that, when neglected, can lead to catastrophic tip-over accidents."
  },
  {
    question: "What role do crane load charts play in accident prevention?",
    answer: "Load charts specify the maximum weight a crane can safely lift at various boom lengths and angles. Operators must consult these charts for every lift and ensure loads don't exceed capacity. Using outdated charts, miscalculating load weights, or ignoring capacity limits are common causes of accidents."
  },
  {
    question: "Can crane accidents be caused by mechanical failures?",
    answer: "Yes. Mechanical failures including brake failures, hydraulic system problems, structural fatigue, cable breaks, and electrical malfunctions can cause accidents. Regular maintenance, inspections, and prompt repairs are essential. Mechanical failure cases often involve the equipment owner, maintenance company, or manufacturer."
  },
  {
    question: "How do multiple crane operations affect safety?",
    answer: "When multiple cranes work in proximity, coordination and communication become critical. Load swings, boom movements, and overlapping work areas create additional hazards. Special planning, communication protocols, and clearance procedures are required. Accidents involving multiple cranes often have complex liability issues."
  },
  {
    question: "What is the role of crane boom length in accident causation?",
    answer: "Longer boom lengths reduce lifting capacity and increase instability risks. Operating with excessive boom length for the load weight can cause tip-overs. Boom length also affects wind loading and ground clearance. Proper boom length selection and load calculation are fundamental safety requirements."
  },
  {
    question: "How do crane accidents affect families of victims?",
    answer: "Crane accidents often result in death or permanent disability, creating devastating impacts on families. Beyond immediate grief and trauma, families face lost income, increased medical expenses, and long-term care needs. California's wrongful death and survival statutes provide legal remedies, but compensation cannot fully address the emotional toll."
  },
  {
    question: "What makes Trembach Law Firm different in handling crane accident cases?",
    answer: "Attorney Trembach's background as a former defense attorney provides unique insights into how construction companies and insurance companies defend crane accident cases. This experience helps us anticipate defense strategies, identify weaknesses in their arguments, and develop more effective approaches to maximize compensation for our clients."
  },
  {
    question: "Why should I choose Trembach Law Firm for my crane accident case?",
    answer: "As a former defense attorney, Anatolii Trembach understands how insurance companies and construction companies defend these cases. This insider knowledge helps anticipate defense strategies and counter them effectively. We provide experienced representation, thorough investigation, and aggressive advocacy to maximize your compensation while you focus on recovery."
  }
];

export default CraneAccidents;