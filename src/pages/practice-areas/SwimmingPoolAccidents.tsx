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
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/swimming-pool-hero.jpg';
import sidebarImage from '@/assets/swimming-pool-sidebar.jpg';
import overviewImage from '@/assets/swimming-pool-overview.jpg';
import evaluationImage from '@/assets/swimming-pool-evaluation.jpg';
import immediateStepsImage from '@/assets/swimming-pool-immediate-steps.jpg';
import legalProcessImage from '@/assets/swimming-pool-legal-process.jpg';
import resourcesImage from '@/assets/swimming-pool-resources.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const SwimmingPoolAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    incidentDate: '',
    incidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER ACCIDENT', icon: Heart },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
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
    window.location.href = '/practice-areas/swimming-pool/case-evaluation';
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
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
              California Swimming Pool Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Expert Legal Representation</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
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
          
          {/* Sticky Sidebar */}
          <div className="lg:order-2">
            <div className="sticky top-24">
              <Card 
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${sidebarImage})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-6">
                  <div className="text-center text-white mb-6">
                    <h3 className="text-xl font-bold mb-2">3 Ways to</h3>
                    <h3 className="text-xl font-bold text-white">Start Your Case</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      FREE CASE REVIEW
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white hover:text-black"
                      onClick={() => window.location.href = 'tel:(818) 123-4567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="w-full border-white text-white hover:bg-white hover:text-black"
                      onClick={() => window.location.href = '/practice-areas/swimming-pool/compensation-calculator'}
                    >
                      <Calculator className="w-4 h-4 mr-2" />
                      Calculate Case Value
                    </Button>
                  </div>
                  
                  <div className="mt-6 text-center text-white text-sm">
                    <p>Available 24/7 • Free Consultation</p>
                    <p>No Win, No Fee Guarantee</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="lg:col-span-2 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={overviewImage} alt="Swimming Pool Safety Overview" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">California Swimming Pool Accident Attorneys</h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been injured in a swimming pool accident in California, you're facing potentially devastating physical, emotional, and financial consequences. Swimming pool accidents can result in serious injuries including drowning, brain damage, spinal cord injuries, and broken bones that require immediate legal action to protect your rights and secure compensation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the complex legal issues surrounding swimming pool accidents and have extensive experience holding property owners, pool operators, and other responsible parties accountable for their negligence. Our California swimming pool accident lawyers work tirelessly to ensure victims receive maximum compensation for medical expenses, lost wages, pain and suffering, and long-term care needs.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our Swimming Pool Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Comprehensive Investigation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We conduct thorough investigations to identify all liable parties, safety violations, and evidence crucial to your case success.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Maximum Compensation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our experienced team fights to recover full compensation for medical bills, lost income, pain and suffering, and future care needs.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Your Swimming Pool Accident Case?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Proven Track Record</h4>
                          <p className="text-sm text-muted-foreground">Extensive experience handling complex swimming pool accident cases throughout California.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Response</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and protect your legal rights.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We provide emotional support and guidance throughout your recovery journey.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Fee Unless We Win</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we recover compensation for you.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center mb-6">
                <img src={evaluationImage} alt="Swimming Pool Case Evaluation" className="w-16 h-16 rounded-lg mr-4" />
                <h2 className="text-3xl font-bold text-red-600">Free Swimming Pool Accident Case Evaluation</h2>
              </div>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation Today</h3>
                <p className="mb-6">Tell us about your swimming pool accident to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Incident Date</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, incidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Incident</label>
                      <Select value={formData.incidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, incidentType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select incident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="drowning">Near-Drowning/Drowning</SelectItem>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="diving-accident">Diving Accident</SelectItem>
                          <SelectItem value="chemical-burn">Chemical Burns</SelectItem>
                          <SelectItem value="equipment-malfunction">Equipment Malfunction</SelectItem>
                          <SelectItem value="drain-entrapment">Drain Entrapment</SelectItem>
                          <SelectItem value="other">Other Pool Accident</SelectItem>
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

            {/* Time Limits Section */}
            <section className="content-section mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Don't Wait - Time Limits Apply for California Swimming Pool Accident Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Critical Deadlines</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• 2-year statute of limitations for personal injury claims</li>
                        <li>• 6-month deadline for claims against government entities</li>
                        <li>• Evidence can disappear quickly</li>
                        <li>• Witness memories fade over time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Act Now to Protect Your Rights</h4>
                      <p className="text-sm text-red-600 mb-4">
                        California law imposes strict deadlines for filing swimming pool accident claims. 
                        Don't risk losing your right to compensation - contact us immediately for a free consultation.
                      </p>
                      <Button 
                        size="sm" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/swimming-pool/case-evaluation'}
                      >
                        Get Free Consultation Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Contact Section */}
            <section className="text-center">
              <Card className="border-primary bg-primary/5">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                  <p className="text-muted-foreground mb-6">
                    Don't face the insurance companies alone. Our experienced swimming pool accident attorneys 
                    are ready to fight for the compensation you deserve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="/practice-areas/swimming-pool/case-evaluation">
                        Get Free Case Review
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:(818) 123-4567">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolAccidents;