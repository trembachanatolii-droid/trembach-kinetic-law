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
    <div className="min-h-screen bg-background">
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
                    Don't Wait - Time Limits Apply for California Civil Rights Claims
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
                      Get Your Free Case Evaluation
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

// FAQ Data
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
  }
];

export default RetailAccidents;