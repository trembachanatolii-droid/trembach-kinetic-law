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
  Truck,
  Construction,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/truck-accidents-hero.jpg';
import sidebarImage from '@/assets/practice-areas/truck-18-wheeler.jpg';
import legalProcessImage from '@/assets/practice-areas/truck-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const TruckAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER ACCIDENT', icon: AlertTriangle },
    { id: 'trucking-regulations', label: 'TRUCKING REGULATIONS', icon: Truck },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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
    window.location.href = '/case-evaluation';
  };

  const faqData = [
    {
      question: "How long do I have to file a truck accident claim in California?",
      answer: "Generally, you have two years from the date of the accident to file a personal injury claim. However, there are exceptions that could extend or shorten this deadline, so it's crucial to consult with an attorney immediately."
    },
    {
      question: "Who can be held liable in a truck accident case?",
      answer: "Multiple parties may be liable including the truck driver, trucking company, cargo loaders, maintenance companies, parts manufacturers, and even government entities responsible for road maintenance."
    },
    {
      question: "What if the truck driver was an independent contractor?",
      answer: "Even if the driver is an independent contractor, the trucking company may still be liable under various legal theories including negligent hiring, supervision, or if they controlled the driver's operations."
    },
    {
      question: "How much is my truck accident case worth?",
      answer: "Case values depend on many factors including injury severity, medical expenses, lost wages, future care needs, and pain and suffering. Our attorneys work with economic experts to accurately calculate your damages."
    },
    {
      question: "Do I need to hire an attorney for a truck accident?",
      answer: "Yes. Truck accident cases are complex, involving federal regulations, multiple defendants, and aggressive defense teams. You need experienced legal representation to protect your rights and maximize recovery."
    }
  ];

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
              California Truck Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Fighting Big Trucking Companies</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/case-evaluation'}
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
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Truck Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Every year, over 5,000 people die and 150,000 suffer injuries in commercial truck accidents across America, with California's massive transportation infrastructure bearing a disproportionate share of these devastating collisions. When an 80,000-pound eighteen-wheeler collides with a passenger vehicle, the results are catastrophic—traumatic brain injuries, spinal cord damage, multiple fractures, and too often, death.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we leverage our former defense attorney insight to combat the immediate response teams, aggressive defense tactics, and unlimited resources trucking companies deploy to minimize their liability while you focus on recovery.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Truck Accident Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>California's Commercial Trucking Crisis</h3>
                    <p>
                      California's position as America's primary Pacific trade gateway means millions of commercial trucks traverse our highways annually. The Ports of Los Angeles and Long Beach alone generate over 20,000 truck trips daily. Interstate 5 carries constant streams of big rigs from Mexico to Canada. Highway 99 serves as the Central Valley's commercial lifeline. Interstate 10 connects California to the rest of America.
                    </p>
                    
                    <p>
                      This massive commercial traffic, combined with passenger vehicles, creates deadly conditions where size and weight disparities turn minor errors into fatal catastrophes. The trucking industry operates under extensive federal and state regulations designed to ensure safety, yet violations remain common as companies prioritize delivery deadlines and profits over compliance.
                    </p>

                    <h3>Understanding the True Impact</h3>
                    <p>
                      The devastating physics of truck-passenger vehicle collisions cannot be overstated. An average passenger car weighs approximately 3,000 pounds, while a fully loaded commercial truck can weigh up to 80,000 pounds—more than 25 times heavier. This massive weight difference means that even relatively low-speed truck accidents often result in catastrophic injuries or death for passenger vehicle occupants.
                    </p>

                    <p>
                      Beyond the immediate physical trauma, truck accidents create ripple effects throughout families and communities. Breadwinners face permanent disabilities that eliminate income potential. Parents cannot care for children during extended recoveries. Spouses become full-time caregivers, sacrificing careers and financial security. The true cost extends far beyond medical bills to encompass lifetime care needs, lost earning capacity, and immeasurable emotional suffering.
                    </p>

                    <h3>Federal and State Regulatory Framework</h3>
                    <p>
                      The Federal Motor Carrier Safety Administration (FMCSA) creates comprehensive regulations governing commercial trucking operations, including:
                    </p>
                    <ul>
                      <li>Hours of Service regulations limiting driving time to prevent fatigue</li>
                      <li>Drug and alcohol testing requirements for commercial drivers</li>
                      <li>Vehicle inspection and maintenance standards</li>
                      <li>Driver qualification requirements and training standards</li>
                      <li>Load securement regulations to prevent cargo-related accidents</li>
                      <li>Electronic logging device mandates to prevent logbook falsification</li>
                    </ul>

                    <p>
                      California adds additional state-specific requirements that often exceed federal minimums. Despite this comprehensive regulatory framework, violations remain endemic throughout the trucking industry as companies face economic pressure to maximize profits through regulatory shortcuts.
                    </p>

                    <h3>The Insurance and Legal Landscape</h3>
                    <p>
                      Commercial trucking insurance policies typically carry much higher limits than standard auto insurance—often $1 million or more per occurrence. While this might seem reassuring for accident victims, these large insurance policies come with proportionally aggressive defense strategies. Insurance companies employ teams of investigators, accident reconstruction experts, and attorneys who begin working immediately after accidents to minimize claim values.
                    </p>

                    <p>
                      Trucking companies also maintain rapid response teams that deploy to accident scenes within hours. These teams document evidence in ways that support defense narratives, interview witnesses before victims' attorneys can reach them, and begin developing strategies to shift blame away from their insured drivers and companies.
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
                <p className="mb-6">Provide some basic information to help us understand your truck accident case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                          <SelectItem value="fractures">Multiple Fractures</SelectItem>
                          <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                          <SelectItem value="burns">Burn Injuries</SelectItem>
                          <SelectItem value="other">Other Severe Injuries</SelectItem>
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

            {/* Continue with remaining sections... */}
            {/* I'll implement the rest in the next part due to length */}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Contact Card */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    (855) 985-1234
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Consultation
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    Available 24/7 • No Fee Unless We Win
                  </div>
                </CardContent>
              </Card>

              {/* Sidebar Image */}
              <div className="relative">
                <img 
                  src={sidebarImage} 
                  alt="California truck accident legal representation" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-bold mb-2">Fighting for Truck Accident Victims</h3>
                    <p className="text-sm">Maximum compensation for catastrophic injuries</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruckAccidentsNew;