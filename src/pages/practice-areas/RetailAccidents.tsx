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
  ShoppingCart,
  Store
} from 'lucide-react';
import { Link } from 'react-router-dom';
import GoBack from '@/components/GoBack';
import '../../../styles/retail-accidents.css';
import heroBackground from '@/assets/practice-areas/retail-accidents-hero.jpg';
import sidebarImage from '@/assets/practice-areas/retail-accidents-sidebar.jpg';
import hazardsImage from '@/assets/practice-areas/retail-hazards.jpg';
import legalProcessImage from '@/assets/practice-areas/retail-legal-process.jpg';
import fallingMerchandiseImage from '@/assets/practice-areas/falling-merchandise.jpg';
import compensationImage from '@/assets/practice-areas/retail-compensation-calculator.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const RetailAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    incidentDate: '',
    accidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO IMMEDIATELY', icon: AlertTriangle },
    { id: 'liability', label: 'STORE LIABILITY', icon: Building },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Map }
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
    window.location.href = '/practice-areas/retail-accidents/case-evaluation';
  };

  return (
        <div className="retail-accidents-page">
          {/* 3D Background Layers */}
          <div className="floating-layer-back"></div>
          <div className="floating-layer-mid"></div>
          <div className="floating-layer-front"></div>
      {/* Go Back Component */}
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
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">
              Injured While Shopping?
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-white">
              We Fight Major Retailers for Maximum Compensation
            </p>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Former Defense Attorney Now Protecting California Shoppers</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/practice-areas/retail-accidents/case-evaluation'}
              >
                START FREE CASE EVALUATION
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-white/10 text-white border-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg backdrop-blur-sm"
                onClick={() => window.location.href = 'tel:(818) 123-4567'}
              >
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
          
          {/* Sticky Sidebar - Right Column */}
          <div className="lg:order-2">
            <div className="sticky top-32 space-y-6">
              
              {/* 3 Ways to Start Your Case Card */}
              <Card className="glass-card p-6 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20">
                <h3 className="text-2xl font-bold text-center mb-6 text-primary">3 Ways to Start Your Case</h3>
                
                <div className="space-y-4">
                  <Button 
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <a href="tel:(818) 123-4567" className="flex items-center justify-center gap-3">
                      <Phone className="w-5 h-5" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/practice-areas/retail-accidents/case-evaluation" className="flex items-center justify-center gap-3">
                      <FileText className="w-5 h-5" />
                      Free Case Review
                    </Link>
                  </Button>
                  
                  <Button 
                    asChild
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Link to="/practice-areas/retail-accidents/compensation-calculator" className="flex items-center justify-center gap-3">
                      <Scale className="w-5 h-5" />
                      Compensation Calculator
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-white/80 rounded-lg">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        No Fees Unless We Win
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Available 24/7 • Free Consultation</p>
                  </div>
                </div>
              </Card>

              {/* Why Choose Us Card */}
              <Card className="glass-card p-6">
                <h4 className="font-bold text-lg mb-4 text-primary">Why Choose Us?</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Former defense attorney advantage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Store className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Know retailer defense tactics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Maximum compensation focus</span>
                  </li>
                </ul>
              </Card>

              {/* Contact Image */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={sidebarImage} 
                  alt="Retail accident legal consultation" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 lg:order-1" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">California Retail Store Accident Lawyers</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you've been injured while shopping at a retail store in California, you may be entitled to compensation for your injuries, medical bills, lost wages, and pain and suffering. Retail stores have a legal duty to maintain safe premises for their customers, and when they fail in this responsibility, they can be held liable for accidents and injuries that occur on their property.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we specialize in representing victims of retail store accidents throughout California. Our experienced legal team understands the complexities of premises liability law and knows how to build strong cases against major retailers like Walmart, Target, Home Depot, Costco, and other shopping establishments.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Retail Store Liability in California
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Former Defense Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our attorney's background defending retailers provides unique insights into corporate defense strategies and how to counter them effectively.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          California Premises Law Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We have extensive knowledge of California premises liability law and how it applies specifically to retail establishments and shopping centers.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Common Types of Retail Store Accidents</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Slip and Fall Accidents</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Wet floors without warning signs</li>
                          <li>• Spilled liquids or food items</li>
                          <li>• Freshly mopped or waxed floors</li>
                          <li>• Ice or snow in entryways</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Falling Merchandise</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Improperly stacked items</li>
                          <li>• Overloaded shelves</li>
                          <li>• Unstable displays</li>
                          <li>• Heavy items placed too high</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Trip and Fall Hazards</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Torn or bunched carpeting</li>
                          <li>• Uneven floor surfaces</li>
                          <li>• Cluttered aisles</li>
                          <li>• Loose floor mats</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-primary">Other Accidents</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Shopping cart accidents</li>
                          <li>• Inadequate lighting</li>
                          <li>• Negligent security</li>
                          <li>• Defective escalators/elevators</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information about your retail store accident to help us evaluate your case.</p>
                
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
                      <label className="block text-sm font-medium mb-2">Accident Type</label>
                      <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select accident type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="falling-merchandise">Falling Merchandise</SelectItem>
                          <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                          <SelectItem value="shopping-cart">Shopping Cart Accident</SelectItem>
                          <SelectItem value="inadequate-lighting">Inadequate Lighting</SelectItem>
                          <SelectItem value="negligent-security">Negligent Security</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* What to Do Immediately Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">What to Do After a Retail Store Accident - Critical Steps</h2>
              
              <div className="mb-6">
                <img 
                  src={hazardsImage} 
                  alt="Retail store hazards and warning signs" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card border-l-4 border-l-green-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Immediate Actions (Do These)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>1. Report Immediately:</strong> Notify store management and insist on an official incident report. Get a copy before leaving.</p>
                    <p><strong>2. Document Everything:</strong> Take photos/videos of the hazard, your injuries, and surrounding area.</p>
                    <p><strong>3. Get Witnesses:</strong> Collect names and phone numbers of anyone who saw your accident.</p>
                    <p><strong>4. Seek Medical Care:</strong> Get examined immediately, even for "minor" injuries.</p>
                    <p><strong>5. Preserve Evidence:</strong> Keep clothing, shoes, and receipts.</p>
                    <p><strong>6. Call an Attorney:</strong> Contact us before speaking to insurance.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card border-l-4 border-l-red-500">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Never Do These Things
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p><strong>• Don't admit fault</strong> or apologize, even if you feel embarrassed</p>
                    <p><strong>• Don't sign anything</strong> from the store without legal review</p>
                    <p><strong>• Don't give recorded statements</strong> to insurance companies</p>
                    <p><strong>• Don't accept quick settlements</strong> before knowing full extent of injuries</p>
                    <p><strong>• Don't delay medical treatment</strong> or legal consultation</p>
                    <p><strong>• Don't post on social media</strong> about your accident</p>
                  </CardContent>
                </Card>
              </div>

              <Collapsible open={expandedSections.immediateSteps} onOpenChange={() => toggleSection('immediateSteps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Protecting Your Rights After an Accident
                    {expandedSections.immediateSteps ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Why These Steps Are Critical</h3>
                    <p>
                      The moments immediately following a retail store accident are crucial for protecting your legal rights and building a strong case. Retail stores have sophisticated incident response procedures designed to minimize their liability, and they will often try to downplay the severity of accidents or shift blame to the customer.
                    </p>
                    
                    <h4>Documentation Is Key</h4>
                    <p>
                      Physical evidence disappears quickly in retail environments. Spills are cleaned up, broken merchandise is removed, and surveillance footage may be recycled within days or weeks. That's why it's essential to document everything at the scene while the evidence is still fresh.
                    </p>
                    
                    <h4>Medical Records Establish Your Injuries</h4>
                    <p>
                      Even if you feel fine immediately after the accident, adrenaline can mask pain and injuries may not manifest symptoms until hours or days later. Getting prompt medical attention creates an official record of your injuries and establishes the connection between the accident and your medical condition.
                    </p>
                    
                    <h4>Witness Testimony Can Make or Break Your Case</h4>
                    <p>
                      Independent witnesses who saw your accident can provide crucial testimony about what really happened. Store employees may be coached to provide testimony that favors their employer, making independent witness accounts even more valuable.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Store Liability Section */}
            <section id="liability" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Understanding Retail Store Liability in California</h2>
              
              <div className="mb-6">
                <img 
                  src={fallingMerchandiseImage} 
                  alt="Fallen merchandise in retail store" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
              </div>

              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California premises liability law holds retail stores to the highest standard of care for customer safety. As business invitees, shoppers deserve protection from preventable hazards. Stores must regularly inspect premises, promptly address dangers, and warn customers about unavoidable risks.
                </p>
              </div>

              <Collapsible open={expandedSections.liability} onOpenChange={() => toggleSection('liability')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About When Stores Are Legally Responsible
                    {expandedSections.liability ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">When Stores Are Legally Responsible</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary">Actual Notice</h4>
                        <p>Management knew about the hazard but failed to fix it</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Constructive Notice</h4>
                        <p>The danger existed long enough that reasonable inspection would have discovered it</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Creation of Hazard</h4>
                        <p>Store employees caused the dangerous condition</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Recurring Conditions</h4>
                        <p>Known problem areas that repeatedly cause accidents</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary">Mode of Operation</h4>
                        <p>Business practices that foreseeably create risks</p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="Legal process and documentation" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-6"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-primary" />
                      Case Investigation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We thoroughly investigate your accident, collect evidence, review surveillance footage, and interview witnesses.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                      Medical Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>We work with medical experts to document your injuries, treatment needs, and long-term prognosis.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer"
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    >
                      <CardTitle className="flex justify-between items-center text-lg">
                        {faq.question}
                        {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
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

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-primary mb-6">Helpful Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>
                      <Link to="/practice-areas/retail-accidents/compensation-calculator" className="flex items-center text-primary hover:underline">
                        <Scale className="w-5 h-5 mr-2" />
                        Compensation Calculator
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Estimate your potential compensation based on your specific accident and injuries.</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>
                      <Link to="/practice-areas/retail-accidents/legal-guidance" className="flex items-center text-primary hover:underline">
                        <FileText className="w-5 h-5 mr-2" />
                        Legal Guidance
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Comprehensive guide to California retail accident law and your rights.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Final CTA Section */}
            <section className="content-section">
              <Card className="glass-card bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Don't Wait - Time Limits Apply for California Retail Accident Claims
                  </h3>
                  <p className="text-lg mb-6">
                    California law imposes strict deadlines for filing retail accident claims. Don't let your opportunity for justice expire.
                  </p>
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 text-lg w-full sm:w-auto"
                      onClick={() => window.location.href = '/practice-areas/retail-accidents/case-evaluation'}
                    >
                      <span className="text-white">Get Your Free Case Evaluation</span>
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      No fees unless we win • Available 24/7 • Free consultation
                    </p>
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

// Expanded FAQ Data - 50+ Questions
const faqData = [
  {
    question: "What should I do immediately after a retail store accident?",
    answer: "Report the accident to store management immediately and insist on filing an incident report. Take photos of the hazard and your injuries, get witness contact information, and seek medical attention right away. Contact an experienced retail accident attorney before speaking to any insurance representatives."
  },
  {
    question: "How do I prove the store was negligent in my accident?",
    answer: "To prove negligence, we must show the store had a duty to maintain safe premises, breached that duty by allowing a dangerous condition to exist, and that breach caused your injuries. Evidence includes surveillance footage, incident reports, maintenance records, witness testimony, and expert analysis of store safety procedures."
  },
  {
    question: "Can I still file a claim if I was partially at fault for my accident?",
    answer: "Yes, California follows a comparative negligence system. Even if you were partially at fault, you can still recover compensation, though it may be reduced by your percentage of fault. For example, if you're found 20% at fault, you can still recover 80% of your damages."
  },
  {
    question: "How long do I have to file a retail store accident claim in California?",
    answer: "In California, you generally have two years from the date of your accident to file a personal injury claim against a retail store. However, certain circumstances can affect this deadline, so it's important to consult with an attorney as soon as possible after your accident."
  },
  {
    question: "What types of compensation can I recover in a retail store accident case?",
    answer: "You may be entitled to compensation for medical expenses, lost wages, pain and suffering, permanent disability, future medical costs, and in some cases, punitive damages. The specific amount depends on the severity of your injuries and the circumstances of your accident."
  },
  {
    question: "What is premises liability law in California?",
    answer: "Premises liability law requires property owners to maintain safe conditions for visitors. In California, retail stores owe customers the highest duty of care as business invitees, meaning they must regularly inspect for hazards, promptly fix dangers, and warn of unavoidable risks."
  },
  {
    question: "Do I need to hire an attorney for my retail accident case?",
    answer: "While not required, hiring an experienced premises liability attorney significantly improves your chances of fair compensation. Retail stores have teams of lawyers and insurance adjusters working to minimize payouts. An attorney levels the playing field and protects your interests."
  },
  {
    question: "How much does it cost to hire a retail accident lawyer?",
    answer: "Most retail accident attorneys work on a contingency fee basis, meaning you pay nothing upfront and only pay if we win your case. The fee is typically a percentage of your settlement or judgment, so there's no financial risk to you."
  },
  {
    question: "What if the store claims I should have seen the hazard?",
    answer: "Stores often try to blame customers for accidents, but they have a legal duty to maintain safe premises regardless. Even if a hazard was visible, the store may still be liable if they created the condition, knew about it, or failed to provide adequate warnings."
  },
  {
    question: "Can I sue if I was injured in a store parking lot?",
    answer: "Yes, store parking lots are part of the premises, and retailers are responsible for maintaining safe conditions including proper lighting, clear markings, pothole repairs, snow/ice removal, and adequate security measures."
  },
  {
    question: "What evidence should I collect after a retail store accident?",
    answer: "Take photos of the hazard, your injuries, and the surrounding area. Get names and contact information of witnesses. Request a copy of the incident report. Keep all medical records, receipts, and documentation related to your accident and treatment."
  },
  {
    question: "How long does a retail accident case typically take?",
    answer: "Case duration varies based on complexity, but most settle within 6-18 months. Factors affecting timeline include injury severity, medical treatment completion, investigation complexity, and the store's willingness to negotiate fairly."
  },
  {
    question: "What if the store offers me a quick settlement?",
    answer: "Never accept initial settlement offers without consulting an attorney. Early offers are typically far below fair value and may not account for future medical costs, lost earning capacity, or the full extent of your injuries."
  },
  {
    question: "Can I still file a claim if I didn't report the accident immediately?",
    answer: "While immediate reporting is best, you may still have a case even if you didn't report right away. However, delayed reporting can make your case more challenging, so contact an attorney as soon as possible to protect your rights."
  },
  {
    question: "What types of injuries are common in retail store accidents?",
    answer: "Common injuries include broken bones, sprains, cuts, head injuries, back injuries, and soft tissue damage. Slip and falls can cause serious injuries including fractures, traumatic brain injuries, and spinal cord damage."
  },
  {
    question: "Do I have a case if I fell on a wet floor with no warning sign?",
    answer: "Potentially yes. Stores must either immediately clean up spills or place warning signs. If a wet floor lacked proper warning and caused your fall, the store may be liable for negligence in maintaining safe premises."
  },
  {
    question: "What if merchandise fell on me from a high shelf?",
    answer: "Falling merchandise cases often result in significant liability for stores. Retailers must properly stock shelves, secure displays, and ensure heavy items are safely positioned. Poor stacking practices that cause merchandise to fall can result in substantial compensation."
  },
  {
    question: "Can I recover damages for emotional distress from a retail accident?",
    answer: "Yes, in addition to physical injuries, you may recover compensation for emotional distress, anxiety, depression, and mental anguish caused by your accident and its aftermath."
  },
  {
    question: "What role does surveillance footage play in my case?",
    answer: "Security camera footage is crucial evidence that can prove how your accident occurred and establish the store's negligence. It's important to request preservation of footage immediately, as stores often recycle recordings within days or weeks."
  },
  {
    question: "Am I covered if I'm injured while working in a retail store?",
    answer: "Employee injuries are typically covered by workers' compensation, which is different from premises liability claims. However, if a third party caused your injury or if there are special circumstances, you may have additional legal options."
  },
  {
    question: "What if the accident happened because of another customer's actions?",
    answer: "You may have claims against both the customer who caused the hazard and the store if they failed to address the dangerous condition promptly. Stores have a duty to monitor premises and respond quickly to hazards."
  },
  {
    question: "How do I prove my medical expenses are related to the accident?",
    answer: "Medical records linking your treatment to the accident are essential. Seek immediate medical attention and inform healthcare providers that your injuries resulted from a retail store accident. Keep all medical bills, records, and documentation."
  },
  {
    question: "Can I claim lost wages if I missed work due to my injuries?",
    answer: "Yes, lost wages are recoverable damages in retail accident cases. This includes both past lost income and future earning capacity if your injuries affect your ability to work. Documentation from your employer is important evidence."
  },
  {
    question: "What if my pre-existing condition was worsened by the accident?",
    answer: "You can still recover damages even if you had pre-existing conditions. Under the 'eggshell skull' rule, defendants must take plaintiffs as they find them. If the accident aggravated your condition, the store may be liable for the worsening."
  },
  {
    question: "How is pain and suffering calculated in retail accident cases?",
    answer: "Pain and suffering damages are calculated using various methods including multipliers of economic damages, per diem amounts, or case-by-case evaluation based on injury severity, treatment duration, impact on daily life, and long-term effects."
  },
  {
    question: "What defenses might the store use against my claim?",
    answer: "Common defenses include claiming the hazard was open and obvious, that you were distracted or negligent, that your injuries were pre-existing, or that they had no notice of the dangerous condition. An experienced attorney can counter these defenses effectively."
  },
  {
    question: "Can I sue for punitive damages in a retail accident case?",
    answer: "Punitive damages are rare in premises liability cases but may be awarded if the store's conduct was particularly egregious, such as knowingly maintaining dangerous conditions or deliberately ignoring safety violations."
  },
  {
    question: "What if the accident was caused by a wet floor from a roof leak?",
    answer: "Stores are responsible for maintaining their buildings and addressing leaks promptly. If a roof leak created a dangerous condition and the store failed to repair it or warn customers, they may be liable for resulting injuries."
  },
  {
    question: "How do slip and fall cases differ from trip and fall cases?",
    answer: "Slip and fall typically involves loss of traction (wet floors, ice), while trip and fall involves catching your foot on something (torn carpet, uneven surfaces). Both can result in serious injuries and store liability."
  },
  {
    question: "What compensation is available for permanent disabilities?",
    answer: "Permanent disabilities can result in substantial compensation including future medical costs, lost earning capacity, life care planning expenses, home modifications, assistive devices, and compensation for permanent pain and suffering."
  },
  {
    question: "Can family members recover damages if I was killed in a retail accident?",
    answer: "Yes, family members may file wrongful death claims to recover damages including funeral expenses, loss of financial support, loss of companionship, and other losses resulting from their loved one's death."
  },
  {
    question: "What if the store claims the accident was an 'act of God'?",
    answer: "Natural disasters may excuse some liability, but stores still have duties to address known hazards. For example, while they can't prevent earthquakes, they must secure merchandise and maintain safe conditions during and after such events."
  },
  {
    question: "How do insurance companies evaluate retail accident claims?",
    answer: "Insurance adjusters consider medical expenses, lost wages, injury severity, liability evidence, plaintiff credibility, and potential jury awards. They often use software programs that may undervalue claims, which is why legal representation is important."
  },
  {
    question: "Can I recover damages for scarring or disfigurement?",
    answer: "Yes, scarring and disfigurement are compensable damages. The amount depends on the severity, location, and permanence of scarring, as well as its impact on your appearance, self-esteem, and daily life."
  },
  {
    question: "What if multiple people were injured in the same retail accident?",
    answer: "Multiple injury cases can be handled individually or sometimes as class actions. Each person's damages are evaluated separately, though similar accident circumstances may strengthen all claims through shared evidence and resources."
  },
  {
    question: "How do economic damages differ from non-economic damages?",
    answer: "Economic damages are calculable financial losses like medical bills and lost wages. Non-economic damages compensate for intangible losses like pain, suffering, emotional distress, and loss of life enjoyment. Both are recoverable in retail accident cases."
  },
  {
    question: "What role does expert testimony play in retail accident cases?",
    answer: "Experts may testify about premises safety standards, accident reconstruction, medical causation, economic losses, or industry practices. Expert testimony can be crucial in proving negligence and establishing damages in complex cases."
  },
  {
    question: "Can I sue if I was injured using a defective shopping cart?",
    answer: "Yes, defective shopping cart cases may involve both premises liability (store's duty to maintain equipment) and product liability (manufacturer defects). You may have claims against the store, manufacturer, or both."
  },
  {
    question: "What if the store was under construction when my accident occurred?",
    answer: "Construction creates additional hazards and heightened duties for stores. They must adequately warn customers of dangers, provide safe passage, and may need to restrict access to dangerous areas. Construction is not an excuse for customer injuries."
  },
  {
    question: "How do I handle medical bills while my case is pending?",
    answer: "Options include using health insurance, medical payment coverage, treatment liens with providers, or special arrangements. An attorney can help you manage medical costs and ensure all expenses are included in your claim."
  },
  {
    question: "What if I was injured while using store facilities like restrooms?",
    answer: "Store restrooms, elevators, and other facilities are part of the premises covered by liability law. Stores must maintain these areas safely, including proper cleaning, maintenance, lighting, and accessibility compliance."
  },
  {
    question: "Can weather conditions affect my retail accident case?",
    answer: "Weather can impact liability but doesn't automatically excuse stores. Retailers must take reasonable precautions for foreseeable weather hazards like placing mats during rain, clearing ice, and ensuring adequate drainage."
  },
  {
    question: "What if the dangerous condition was created by a vendor or contractor?",
    answer: "Stores may still be liable for injuries caused by vendors or contractors on their premises. Multiple parties may share responsibility, and you may have claims against the store, contractor, or both depending on the circumstances."
  },
  {
    question: "How do age and health affect retail accident case value?",
    answer: "Age and health can significantly impact case value. Younger plaintiffs typically receive higher awards for life-long impacts. Pre-existing conditions don't bar recovery but may affect damage calculations and require careful medical documentation."
  },
  {
    question: "What if store employees were rude or unhelpful after my accident?",
    answer: "While poor customer service after an accident isn't directly compensable, it may indicate the store's attitude toward safety and can be relevant to your overall experience. Focus on documenting the accident circumstances and your injuries."
  },
  {
    question: "Can I recover damages if my accident was minor but caused ongoing problems?",
    answer: "Yes, even seemingly minor accidents can cause significant long-term problems. Some injuries don't manifest immediately or worsen over time. It's important to seek medical attention and monitor your condition even after 'minor' accidents."
  },
  {
    question: "What happens if the store goes out of business during my case?",
    answer: "Business closure doesn't eliminate liability. Claims may proceed against insurance carriers, parent companies, or successor entities. An experienced attorney can navigate these complications and protect your interests."
  },
  {
    question: "How do I maximize my retail accident case value?",
    answer: "Follow all medical advice, attend appointments, document everything, avoid social media posts about your case, be honest with your attorney, and don't accept early settlement offers without legal review. Proper case development is crucial for maximum value."
  },
  {
    question: "What if I signed something at the store after my accident?",
    answer: "Signed documents may affect your case but don't automatically bar recovery. Waivers or releases signed under duress, without full understanding, or that are overly broad may be challengeable. Have any documents reviewed by an attorney immediately."
  },
  {
    question: "Can I still pursue a case if I received workers' compensation?",
    answer: "Workers' compensation is different from premises liability. If you were injured as a customer rather than employee, you would pursue a premises liability claim. Employees injured on the job typically receive workers' compensation but may have third-party claims in some situations."
  },
  {
    question: "What makes Trembach Law Firm different in retail accident cases?",
    answer: "Our firm combines former defense attorney insight with aggressive plaintiff representation. We understand how stores and insurers think, allowing us to anticipate their strategies and build stronger cases for maximum compensation. We also work on contingency with no upfront costs."
  },
  {
    question: "How quickly should I contact an attorney after a retail accident?",
    answer: "Contact an attorney immediately after seeking medical care. Early legal involvement preserves evidence, ensures proper documentation, prevents harmful mistakes, and allows your attorney to guide you through the process from the beginning for the best possible outcome."
  }
];

export default RetailAccidents;