import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
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
  Calculator,
  MapPin
} from 'lucide-react';
import heroBackground from '@/assets/amusement-park-hero-bg.jpg';
import sidebarImage from '@/assets/amusement-park-sidebar.jpg';
import evaluationImage from '@/assets/amusement-park-evaluation.jpg';
import immediateStepsImage from '@/assets/amusement-park-immediate-steps.jpg';
import legalProcessImage from '@/assets/amusement-park-legal-process.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AmusementParkInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    parkName: '',
    rideType: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'WHAT TO DO AFTER ACCIDENT', icon: Heart },
    { id: 'injuries', label: 'COMMON INJURIES', icon: Stethoscope },
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
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours for your free case evaluation.');
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
        
        {/* Go Back Button - positioned in hero overlay */}
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
              California Amusement Park Injury Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorneys Fighting for Victims</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/practice-areas/amusement-parks/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Amusement Park Injury Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When the magic turns tragic, our former defense attorneys fight for maximum compensation. From Disneyland to Six Flags, we've seen how parks and insurers minimize claims. Now we use that insider knowledge to protect you. With 30,000+ annual ER visits from amusement park accidents nationwide, these injuries range from minor to catastrophic.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand that amusement park accidents shatter families and create overwhelming financial burdens. California's strict safety regulations and premises liability laws protect visitors, but parks and their insurers aggressively defend claims. Our former defense attorney insight gives us the tactical advantage to secure maximum compensation for your injuries, medical expenses, lost wages, and trauma.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About Our Amusement Park Injury Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          California Park Regulations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>California's Division of Occupational Safety and Health (Cal/OSHA) inspects permanent rides annually. Parks must report injuries requiring medical care beyond first aid within 24 hours. We use violation records to establish negligence.</p>
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
                        <p>Major parks carry substantial liability insurance exceeding $1 billion. We fight to recover full compensation for medical bills, lost income, pain and suffering, and future care needs from these extensive policies.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Major California Amusement Parks We Handle Cases For</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>Disneyland Resort</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>Six Flags Magic Mountain</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>Knott's Berry Farm</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>Universal Studios</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>SeaWorld San Diego</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary mr-2" />
                        <span>California's Great America</span>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Amusement Park Injury Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation Today</h3>
                <p className="mb-6">Tell us about your amusement park accident to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

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
                      <label className="block text-sm font-medium mb-2">Park Name</label>
                      <Select value={formData.parkName} onValueChange={(value) => setFormData(prev => ({ ...prev, parkName: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select park" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disneyland">Disneyland Resort</SelectItem>
                          <SelectItem value="six-flags">Six Flags Magic Mountain</SelectItem>
                          <SelectItem value="knotts">Knott's Berry Farm</SelectItem>
                          <SelectItem value="universal">Universal Studios</SelectItem>
                          <SelectItem value="seaworld">SeaWorld San Diego</SelectItem>
                          <SelectItem value="great-america">California's Great America</SelectItem>
                          <SelectItem value="other-permanent">Other Permanent Park</SelectItem>
                          <SelectItem value="traveling-carnival">Traveling Carnival/Fair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                   
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Ride/Attraction</label>
                      <Select value={formData.rideType} onValueChange={(value) => setFormData(prev => ({ ...prev, rideType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select ride type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="roller-coaster">Roller Coaster</SelectItem>
                          <SelectItem value="water-ride">Water Ride/Slide</SelectItem>
                          <SelectItem value="spinning-ride">Spinning Ride</SelectItem>
                          <SelectItem value="drop-tower">Drop Tower</SelectItem>
                          <SelectItem value="kiddie-ride">Children's Ride</SelectItem>
                          <SelectItem value="dark-ride">Dark Ride/Indoor</SelectItem>
                          <SelectItem value="walkway">Walkway/Queue Area</SelectItem>
                          <SelectItem value="other">Other Attraction</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Primary Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal/Neck Injury</SelectItem>
                          <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                          <SelectItem value="drowning">Drowning/Near-Drowning</SelectItem>
                          <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                          <SelectItem value="psychological">Psychological Trauma</SelectItem>
                          <SelectItem value="multiple">Multiple Injuries</SelectItem>
                          <SelectItem value="other">Other Injury</SelectItem>
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

            {/* What to Do After Accident Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After an Amusement Park Accident</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Taking the right steps immediately after your accident protects your health and strengthens your legal claim. Here's what you must do right away:
                </p>
              </div>

              <Collapsible open={expandedSections['immediate-steps']} onOpenChange={() => toggleSection('immediate-steps')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    View Critical Steps to Take After Your Accident
                    {expandedSections['immediate-steps'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700">
                          <Heart className="w-5 h-5 mr-2" />
                          DO IMMEDIATELY
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2 text-green-700">
                          <li>Seek immediate medical attention, even for "minor" injuries</li>
                          <li>Report the accident to park management and get a written report</li>
                          <li>Take photos of the ride, scene, and your injuries</li>
                          <li>Get contact information from witnesses</li>
                          <li>Keep your admission ticket and any park receipts</li>
                          <li>Document exactly what happened while memory is fresh</li>
                          <li>Contact an experienced amusement park attorney immediately</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 bg-red-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          NEVER DO
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-2 text-red-700">
                          <li>Don't sign any documents without legal review</li>
                          <li>Don't give recorded statements to park investigators</li>
                          <li>Don't accept quick settlement offers</li>
                          <li>Don't delay medical treatment to "tough it out"</li>
                          <li>Don't post about the accident on social media</li>
                          <li>Don't let the park pressure you to "move on"</li>
                          <li>Don't assume insurance will cover everything</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                    <div className="flex items-start">
                      <Clock className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">Time is Critical</h3>
                        <p className="text-blue-700">
                          California has a two-year statute of limitations for personal injury claims, but shorter deadlines may apply for government-owned parks. Evidence disappears quickly - surveillance footage is often deleted within 30 days. Contact us immediately to preserve crucial evidence and protect your rights.
                        </p>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Common Injuries Section */}
            <section id="injuries" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Amusement Park Injuries We Handle</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  With 30,000+ emergency room visits annually, amusement park injuries range from minor to catastrophic. We handle all types of theme park accidents throughout California.
                </p>
              </div>

              <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    View Common Amusement Park Injury Types
                    {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Traumatic Brain Injuries (TBI)
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">Roller coasters and high-speed rides cause severe head trauma from:</p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>Sudden stops and violent shaking</li>
                          <li>Inadequate head restraints</li>
                          <li>Collision with ride structures</li>
                          <li>Falls from height</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Spinal Cord Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">High-speed rides and water slides cause catastrophic spinal damage:</p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>Compression fractures from sudden impacts</li>
                          <li>Whiplash from rapid acceleration</li>
                          <li>Herniated discs from jarring movements</li>
                          <li>Paralysis from severe trauma</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Drowning and Near-Drowning
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">Water park accidents result in life-threatening emergencies:</p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>Inadequate lifeguard supervision</li>
                          <li>Faulty drain entrapment systems</li>
                          <li>Overcrowded pools and attractions</li>
                          <li>Malfunctioning safety equipment</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Psychological Trauma
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-2">Theme park accidents create lasting emotional damage:</p>
                        <ul className="list-disc ml-6 space-y-1">
                          <li>Post-traumatic stress disorder (PTSD)</li>
                          <li>Severe anxiety and panic attacks</li>
                          <li>Fear of crowds or mechanical rides</li>
                          <li>Depression and social withdrawal</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-800 mb-2">Average Settlement Ranges</h3>
                    <p className="text-yellow-700 mb-4">
                      California amusement park injury settlements typically range from $150,000 to $750,000, with catastrophic cases exceeding several million dollars. Factors affecting compensation include injury severity, long-term disabilities, medical expenses, lost wages, and the park's negligence level.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process Section */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Our Amusement Park Injury Legal Process</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Understanding our legal process helps you know what to expect. We handle every aspect of your case while you focus on recovery and rebuilding your life.
                </p>
              </div>

              <Collapsible open={expandedSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn About Our Legal Process
                    {expandedSections['legal-process'] ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="space-y-6">
                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">1</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Free Case Evaluation & Investigation</h3>
                        <p className="text-muted-foreground">We review your case details, assess liability, and immediately begin investigating the accident scene, maintenance records, and safety violations.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">2</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Evidence Preservation & Expert Analysis</h3>
                        <p className="text-muted-foreground">We secure surveillance footage, inspect rides with certified engineers, interview witnesses, and work with medical experts to establish the full extent of your injuries.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">3</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Filing Claims & Legal Documentation</h3>
                        <p className="text-muted-foreground">We file all necessary legal documents, notify insurance companies, and ensure compliance with California's strict procedural requirements and deadlines.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">4</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Aggressive Negotiation</h3>
                        <p className="text-muted-foreground">Using our insider knowledge of defense tactics, we negotiate aggressively with park operators and insurance companies to secure maximum compensation.</p>
                      </div>
                    </div>

                    <div className="flex items-start p-6 bg-muted rounded-lg">
                      <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center mr-4 font-bold">5</div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Trial Preparation & Litigation</h3>
                        <p className="text-muted-foreground">If settlement negotiations fail, we're fully prepared to take your case to trial with experienced litigation attorneys and compelling evidence presentations.</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <Card className="border-blue-200 bg-blue-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-blue-700">
                          <Clock className="w-5 h-5 mr-2" />
                          Case Timeline
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-1 text-blue-700">
                          <li>Simple cases: 8-18 months</li>
                          <li>Complex cases: 1.5-3 years</li>
                          <li>Trial cases: 2-4 years</li>
                          <li>We provide regular updates throughout</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-green-200 bg-green-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-green-700">
                          <Shield className="w-5 h-5 mr-2" />
                          No Fee Guarantee
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="list-disc ml-6 space-y-1 text-green-700">
                          <li>No upfront attorney fees</li>
                          <li>We advance all case costs</li>
                          <li>Only paid when we win your case</li>
                          <li>Free initial consultation always</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section with 50 Questions */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions About Amusement Park Injuries</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Get answers to common questions about California theme park accident claims, your legal rights, and the compensation process.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    question: "How much is my amusement park injury case worth?",
                    answer: "Case value depends on injury severity, medical expenses, lost wages, pain and suffering, and long-term disability. California settlements typically range from $150,000-$750,000, with catastrophic cases exceeding several million. We evaluate your case based on similar verdicts and settlements, working with medical and economic experts to calculate full damages including future medical care, lost earning capacity, and psychological trauma. Parks carry substantial insurance policies, and we fight to maximize recovery from these resources."
                  },
                  {
                    question: "Can I sue if I signed a waiver or the ticket has disclaimers?",
                    answer: "Waivers and disclaimers don't protect parks from gross negligence, willful misconduct, or violations of safety laws. California courts scrutinize these agreements strictly, especially for children who cannot legally consent. Parks cannot waive liability for inherently dangerous conditions they created or failed to warn about. We challenge invalid waivers and hold parks accountable despite their attempts to limit liability through fine print."
                  },
                  {
                    question: "What if the park says I didn't follow safety instructions?",
                    answer: "Parks often blame victims to avoid liability, but California's comparative negligence law allows recovery even if you were partially at fault. Your compensation reduces by your percentage of fault, but parks must prove you acted unreasonably. We investigate whether instructions were clear, visible, and adequate. Missing or inadequate warnings, language barriers, or confusing instructions often establish park negligence regardless of visitor actions."
                  },
                  {
                    question: "How long do I have to file a lawsuit in California?",
                    answer: "California's statute of limitations is two years from the accident date for personal injury claims. Minors have until age 20 to file. Government-owned facilities require claim filing within six months. Delayed discovery of injuries may extend deadlines. Don't wait - evidence disappears quickly, surveillance footage gets deleted, and witnesses forget details. Contact us immediately to preserve your rights and crucial evidence."
                  },
                  {
                    question: "What types of injuries are most common at amusement parks?",
                    answer: "Common injuries include traumatic brain injuries from roller coasters, spinal cord damage from sudden stops, fractures from falls, drowning at water parks, cuts from mechanical failures, and severe psychological trauma. Head and neck injuries are particularly frequent due to inadequate restraint systems and violent ride movements. Children suffer proportionally more severe injuries due to size mismatches with adult-designed safety systems."
                  },
                  {
                    question: "Should I give a statement to the park's insurance company?",
                    answer: "Never give recorded statements without attorney representation. Insurance adjusters use these statements against you later, taking words out of context to minimize or deny claims. They're trained to ask leading questions that create liability for you. Politely decline and refer them to your attorney. Early recorded statements often become the biggest obstacle to fair compensation."
                  },
                  {
                    question: "What if my child was injured at an amusement park?",
                    answer: "Children receive special protection under California law. Parks owe the highest duty of care to child visitors, and adult supervision doesn't absolve park liability for dangerous conditions. Age-appropriate safety measures, clear warnings, and proper restraint systems are required. Children's cases often involve higher damages due to lifetime impacts on development, education, and earning capacity. We work with pediatric specialists to establish full damages."
                  },
                  {
                    question: "Can I sue for PTSD or emotional trauma without physical injuries?",
                    answer: "Yes, California allows recovery for severe emotional distress even without physical injury if you were in the zone of danger or witnessed traumatic events. Amusement park accidents often cause lasting PTSD, anxiety, and phobias that require extensive therapy. We work with mental health professionals to document psychological injuries and their impact on your daily life, relationships, and ability to work."
                  },
                  {
                    question: "What causes most amusement park accidents?",
                    answer: "Most accidents result from mechanical failures, inadequate maintenance, operator errors, design defects, and insufficient safety inspections. Common causes include broken restraint systems, computer malfunctions, power failures, structural defects, and inadequate ride operator training. We investigate maintenance records, inspection reports, prior incidents, and employee training to establish negligence patterns."
                  },
                  {
                    question: "Do I need a lawyer for an amusement park injury?",
                    answer: "Absolutely. Parks and insurers have teams of lawyers and investigators working immediately to minimize liability. They preserve evidence favoring them while crucial evidence supporting your claim disappears. Experienced amusement park attorneys understand complex regulations, investigation techniques, and litigation strategies. We level the playing field and protect your rights while you focus on recovery."
                  },
                  {
                    question: "What evidence do I need for my case?",
                    answer: "Critical evidence includes photos of the scene and ride, witness statements, medical records, your admission ticket, incident reports, and surveillance footage. We also obtain maintenance records, inspection reports, employee training files, prior accident reports, and manufacturer specifications. Expert testimony from engineers, safety specialists, and medical professionals strengthens your case significantly."
                  },
                  {
                    question: "Can I sue if the accident happened at a traveling carnival or fair?",
                    answer: "Yes, but traveling carnivals face different regulations than permanent parks. They often lack adequate insurance and proper maintenance records. California requires licensing and inspection, but enforcement varies. We identify all potentially liable parties including carnival owners, ride operators, fair organizers, and property owners. Multiple defendants increase chances of adequate compensation."
                  },
                  {
                    question: "What if the ride operator was drunk or on drugs?",
                    answer: "Intoxicated operators create strong liability cases for punitive damages beyond compensatory awards. Parks must properly screen, train, and supervise employees. Failure to prevent intoxicated operation shows gross negligence warranting punishment. We investigate employee records, testing policies, and supervision protocols. Criminal charges against operators don't preclude civil liability against parks."
                  },
                  {
                    question: "How are brain injuries from roller coasters diagnosed?",
                    answer: "Brain injuries require immediate medical evaluation with CT scans, MRIs, and neurological testing. Symptoms may appear days or weeks later, including headaches, confusion, memory problems, and personality changes. We work with neurologists and neuropsychologists to document cognitive impacts through comprehensive testing. Early documentation is crucial for proving causation and establishing damages."
                  },
                  {
                    question: "What about injuries from water parks or water rides?",
                    answer: "Water parks present unique dangers including drowning, near-drowning, slip and falls, drain entrapment, and chemical exposure. California requires certified lifeguards, proper pool chemistry, and safety equipment. We investigate lifeguard training, response times, chemical levels, drain safety compliance, and supervision adequacy. Water park injuries often involve multiple theories of liability."
                  },
                  {
                    question: "Can I sue for food poisoning at an amusement park?",
                    answer: "Yes, parks are liable for foodborne illnesses from their restaurants and concessions. California health codes require proper food handling, storage, and preparation. We investigate health department records, employee training, and food supplier protocols. Multiple victims strengthen cases through pattern evidence. Medical documentation linking illness to park food consumption is essential for proving causation."
                  },
                  {
                    question: "What if I was injured getting on or off a ride?",
                    answer: "Loading and unloading areas must be safe with adequate lighting, non-slip surfaces, and proper assistance for disabled guests. Operators must ensure riders are properly secured before dispatch. Platform design defects, inadequate railings, and rushed loading procedures cause many injuries. We examine design standards, operator training, and safety protocols during boarding processes."
                  },
                  {
                    question: "How do Cal/OSHA regulations protect visitors?",
                    answer: "Cal/OSHA requires annual inspections, certified operators, maintenance records, and injury reporting. Violations establish negligence per se, making liability easier to prove. We obtain inspection reports, violation notices, and compliance records to demonstrate safety failures. Cal/OSHA's strict standards provide strong foundations for negligence claims against non-compliant parks."
                  },
                  {
                    question: "What's the difference between permanent and traveling ride regulations?",
                    answer: "Permanent parks face stricter Cal/OSHA oversight with certified Quality Safety Inspectors and annual ride inspections. Traveling rides follow different standards with less frequent inspections and varying insurance requirements. Permanent installations generally have better maintenance records and safety protocols. We adapt legal strategies based on applicable regulatory frameworks and available insurance coverage."
                  },
                  {
                    question: "Can I recover if I have pre-existing conditions?",
                    answer: "Absolutely. California's eggshell skull doctrine holds defendants liable for aggravating pre-existing conditions. You recover for the worsening of your condition caused by the accident, even if someone healthier wouldn't have been injured as severely. We work with medical experts to distinguish pre-existing conditions from accident-related injuries and establish the extent of aggravation."
                  },
                  {
                    question: "What if the park blames mechanical failure on the manufacturer?",
                    answer: "Parks remain liable for properly maintaining rides and following manufacturer specifications. We often sue both parks and manufacturers, ensuring maximum compensation sources. Parks must inspect regularly, perform preventive maintenance, and address known defects. Manufacturer recalls, service bulletins, and design defects can establish additional liability beyond park negligence."
                  },
                  {
                    question: "How long does an amusement park injury case take?",
                    answer: "Simple cases settle in 8-18 months, while complex cases take 1.5-3 years. Trial cases can extend 2-4 years depending on court schedules and case complexity. We work efficiently while thoroughly investigating and preparing your case. Early settlement attempts often undervalue claims, so patience usually yields better results. We keep you informed throughout the process."
                  },
                  {
                    question: "What if multiple people were injured in the same accident?",
                    answer: "Multiple victim accidents often strengthen individual cases through corroborating evidence and shared investigation costs. Each victim maintains their separate claim, but common evidence benefits everyone. Mass casualty events may trigger media attention and regulatory investigations that support liability claims. We coordinate with other attorneys when beneficial while protecting your individual interests."
                  },
                  {
                    question: "Can I sue if someone died in an amusement park accident?",
                    answer: "Wrongful death claims seek compensation for survivors' losses including financial support, companionship, and funeral expenses. California allows spouses, children, and dependent relatives to recover. We investigate thoroughly to establish negligence and maximize recovery for surviving family members. Punitive damages may be available for particularly egregious safety violations or cover-ups."
                  },
                  {
                    question: "What role does video surveillance play in my case?",
                    answer: "Surveillance footage provides crucial objective evidence of accident mechanics and park response. Parks often delete footage quickly, so we immediately demand preservation through legal notices. Video can show mechanical failures, operator errors, safety violations, and inadequate emergency response. Multiple camera angles help reconstruct accidents and establish liability."
                  },
                  {
                    question: "Should I post about my accident on social media?",
                    answer: "Absolutely not. Insurance companies monitor social media and use posts against you in court. Photos showing activity inconsistent with claimed injuries can destroy your case. Even innocent posts get taken out of context. Avoid posting about the accident, your recovery, or any activities until your case concludes. Inform family and friends to avoid tagging you in posts."
                  },
                  {
                    question: "What if I was injured at a California state fair?",
                    answer: "State fair injuries involve government liability with special procedural requirements including six-month claim deadlines. California has limited immunity for some activities but remains liable for dangerous conditions and negligent supervision. We analyze the specific circumstances to determine whether sovereign immunity applies and which entities bear responsibility for safety violations."
                  },
                  {
                    question: "Can I recover if alcohol was involved?",
                    answer: "Your alcohol consumption may reduce but not eliminate recovery under comparative negligence. However, if the park over-served you or served minors, they face additional liability under California's dram shop laws. We investigate alcohol policies, server training, and identification procedures. Parks cannot escape liability by contributing to visitor intoxication."
                  },
                  {
                    question: "What about injuries from fights or assaults at parks?",
                    answer: "Parks owe visitors protection from reasonably foreseeable criminal acts through adequate security, lighting, and crowd control. Previous incidents put parks on notice of security needs. We investigate security staffing, training, response protocols, and prior violence reports. Inadequate security measures during known high-risk periods create premises liability for resulting injuries."
                  },
                  {
                    question: "How do height and weight restrictions affect liability?",
                    answer: "Restrictions must be clearly posted, consistently enforced, and properly designed for safety. Operators must verify compliance before allowing riders. Inadequate measurement procedures, unclear signage, or arbitrary restrictions can establish negligence. We investigate whether restrictions were appropriate, properly communicated, and consistently enforced. Discrimination claims may apply for unreasonable restrictions."
                  },
                  {
                    question: "What if bad weather contributed to the accident?",
                    answer: "Parks must monitor weather conditions and close rides when dangerous. Failure to shut down rides during high winds, rain, or lightning creates liability for resulting accidents. We investigate weather monitoring protocols, closure procedures, and meteorological data. Parks cannot operate rides unsafely during foreseeable weather conditions."
                  },
                  {
                    question: "Can I sue for injuries from virtual reality rides?",
                    answer: "VR rides present unique dangers from sensory disorientation and motion sickness. Parks must provide adequate warnings, proper equipment, and trained operators. Age restrictions and health warnings are essential. We investigate equipment maintenance, software safety testing, and operator training. VR technology creates new liability theories as courts adapt to emerging ride types."
                  },
                  {
                    question: "What compensation is available for scarring or disfigurement?",
                    answer: "Scarring and disfigurement qualify for significant pain and suffering awards, especially for children and young adults. California allows recovery for loss of enjoyment of life and diminished self-esteem. Plastic surgery costs, both completed and future, are recoverable. We work with plastic surgeons and psychologists to document the full impact of disfiguring injuries."
                  },
                  {
                    question: "How does California's 'dangerous condition' law apply?",
                    answer: "California Civil Code Section 1714 makes property owners liable for dangerous conditions they create or fail to remedy after notice. Amusement parks must inspect for hazards and warn of known dangers. Constructive notice applies when hazards exist long enough that reasonable inspection would discover them. We investigate inspection records and prior incident reports."
                  },
                  {
                    question: "What if the park claims the ride was tampered with?",
                    answer: "Parks bear the burden of proving tampering and must show adequate security measures to prevent unauthorized access. Sabotage by third parties may not excuse park liability if security was inadequate. We investigate access controls, surveillance systems, and maintenance protocols. Employee tampering or vandalism often indicates insufficient security and supervision systems."
                  },
                  {
                    question: "Can I recover for injuries from park transportation (trams, monorails)?",
                    answer: "Park transportation systems are subject to strict safety regulations and liability standards. Operators must be properly trained and licensed. Mechanical failures, inadequate maintenance, and operator errors create liability. We investigate transportation safety records, maintenance protocols, and operator qualifications. These systems often have substantial insurance coverage."
                  },
                  {
                    question: "What about injuries from costumed characters or performers?",
                    answer: "Parks must ensure performer safety training and adequate visibility in costumes. Character interactions require supervision and crowd control. Assault by performers, falls caused by limited vision, or inadequate training create liability. We investigate performer hiring, training records, and supervision protocols. Background checks and behavioral guidelines are essential safety measures."
                  },
                  {
                    question: "How do I prove the park knew about the danger?",
                    answer: "Notice is established through prior incidents, inspection records, employee reports, and industry standards. Constructive notice applies when dangers exist long enough for discovery through reasonable inspection. We obtain maintenance logs, incident reports, and employee testimony to demonstrate park knowledge of hazardous conditions they failed to remedy."
                  },
                  {
                    question: "What if I can't afford medical treatment while my case is pending?",
                    answer: "We work with medical providers who accept payment from case settlements and connect you with appropriate treatment options. California's healthcare lien laws protect providers while ensuring you receive necessary care. Don't delay treatment due to cost - documented medical care is essential for both your health and legal case."
                  },
                  {
                    question: "Can I change lawyers if I already hired someone?",
                    answer: "Yes, you can change attorneys, but timing affects fee arrangements and case strategy. We review existing contracts and coordinate transfers professionally. Sometimes fresh perspective and specialized amusement park experience significantly improve case outcomes. Consult with us to evaluate whether changing representation benefits your case."
                  },
                  {
                    question: "What makes your firm different from others?",
                    answer: "Our former defense attorney experience provides insider knowledge of park and insurance company strategies. We understand how they investigate and defend claims, giving us tactical advantages in negotiation and litigation. This background, combined with specialized amusement park expertise, results in higher settlements and verdicts for our clients."
                  },
                  {
                    question: "Do you handle cases throughout California?",
                    answer: "Yes, we represent amusement park injury victims throughout California, from San Diego to San Francisco. We travel to meet clients and handle cases in all California counties. Our state-wide practice includes major theme parks like Disneyland, Universal Studios, Six Flags, and local fairs and carnivals throughout the state."
                  },
                  {
                    question: "What should I bring to my consultation?",
                    answer: "Bring medical records, photos of your injuries and the accident scene, incident reports, witness information, admission tickets, correspondence with the park or insurance companies, and any documents you've signed. Don't worry if you don't have everything - we can obtain missing records and evidence through legal process."
                  },
                  {
                    question: "How much does it cost to hire you?",
                    answer: "We work on contingency - you pay no attorney fees unless we win your case. We advance all case expenses including expert witnesses, investigators, and medical records. Our fee comes from the settlement or verdict, and you never pay out-of-pocket attorney costs. Initial consultations are always free with no obligations."
                  },
                  {
                    question: "What happens after I hire you?",
                    answer: "We immediately begin investigating your accident, preserving evidence, and coordinating your medical care. You'll receive regular updates on case progress and strategy decisions. We handle all communications with insurance companies and opposing counsel while you focus on recovery. Our goal is removing legal stress so you can heal."
                  },
                  {
                    question: "Will my case go to trial?",
                    answer: "Most cases settle before trial, but we prepare every case for litigation to maximize settlement leverage. Our willingness to try cases results in better settlement offers because insurance companies know we'll fight in court if necessary. If trial becomes necessary, we have experienced litigators ready to present your case effectively to a jury."
                  },
                  {
                    question: "Can you help if the accident happened years ago?",
                    answer: "Possibly, depending on when the statute of limitations expires. California generally allows two years from discovery of injury, and minors have until age 20. Some exceptions may extend deadlines. Contact us immediately - even if deadlines have passed, we may find exceptions or additional claims that remain viable."
                  },
                  {
                    question: "What parks have the worst safety records?",
                    answer: "We cannot publicly comment on specific park safety records, but we maintain comprehensive databases of incidents and violations across California. During your consultation, we can discuss any park's safety history as it relates to your case. This information helps establish notice and negligence patterns that strengthen your claim."
                  },
                  {
                    question: "How can I prevent amusement park injuries?",
                    answer: "Follow posted safety instructions, ensure proper height and health requirements are met, inspect restraint systems before rides begin, avoid rides during bad weather, report safety concerns immediately, supervise children closely, and trust your instincts if something seems unsafe. However, even careful visitors can be injured by park negligence beyond their control."
                  }
                ].map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                    <Card className="cursor-pointer hover:shadow-md transition-shadow">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="hover:bg-muted/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-left text-lg">
                            <span>{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>

              <div className="mt-8 bg-primary/10 border border-primary/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-4">
                  Our experienced amusement park injury attorneys are here to answer all your questions and provide personalized legal guidance for your specific situation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => window.location.href = '/practice-areas/amusement-parks/case-evaluation'}
                  >
                    Get Your Questions Answered - Free Consultation
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = 'tel:(818) 123-4567'}
                    className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Amusement Park Injury Resources</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Access important resources and tools to help you understand your rights, calculate potential compensation, and take the next steps in your amusement park injury case.
                </p>
              </div>

              <Collapsible open={expandedSections.resources} onOpenChange={() => toggleSection('resources')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Access Our Amusement Park Injury Resources
                    {expandedSections.resources ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/case-evaluation'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Free Case Evaluation
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Get a comprehensive evaluation of your amusement park injury case with no obligation or cost.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/compensation-calculator'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Calculator className="w-5 h-5 mr-2 text-primary" />
                          Compensation Calculator
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Estimate potential compensation for your amusement park injury and damages.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = 'tel:(818) 123-4567'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Phone className="w-5 h-5 mr-2 text-primary" />
                          24/7 Legal Hotline
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Speak with an experienced amusement park injury attorney immediately - available 24/7.</p>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/resources'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          Medical Guidance
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Essential medical information for amusement park injuries and emergency response guidance.</p>
                        <Button 
                          className="mt-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/medical-guidance'}
                        >
                          View Medical Guide
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Scale className="w-5 h-5 mr-2 text-primary" />
                          Legal Guidance
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Understanding your legal rights and options after an amusement park injury in California.</p>
                        <Button 
                          className="mt-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/legal-guidance'}
                        >
                          View Legal Guide
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <FileText className="w-5 h-5 mr-2 text-primary" />
                          FAQ
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Frequently asked questions about amusement park injury cases and legal processes.</p>
                        <Button 
                          className="mt-3 w-full bg-primary hover:bg-primary/90 text-primary-foreground" 
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/faq'}
                        >
                          View FAQ
                        </Button>
                      </CardContent>
                    </Card>

                    <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
                          onClick={() => window.location.href = '/practice-areas/amusement-parks/resources'}>
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Building className="w-5 h-5 mr-2 text-primary" />
                          Legal Resources
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Access important legal information and safety resources for amusement park visitors in California.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">California Amusement Park Safety Laws</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Cal/OSHA Requirements</h4>
                        <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                          <li>Annual safety inspections by certified inspectors</li>
                          <li>Daily operational checks and maintenance logs</li>
                          <li>Immediate injury reporting to regulatory authorities</li>
                          <li>Qualified Safety Inspector (QSI) certification requirements</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Common Liability Issues</h4>
                        <ul className="list-disc ml-6 space-y-1 text-sm text-muted-foreground">
                          <li>Inadequate ride maintenance and inspection</li>
                          <li>Operator training deficiencies and errors</li>
                          <li>Design defects and manufacturing flaws</li>
                          <li>Insufficient safety warnings and instructions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Time Limits Section */}
            <section className="content-section mb-12">
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-700">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Don't Wait - Time Limits Apply for California Amusement Park Claims
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Critical Deadlines</h4>
                      <ul className="list-disc ml-6 space-y-2 text-red-600">
                        <li>• Two years from accident date for personal injury claims</li>
                        <li>• Six months for claims against government entities</li>
                        <li>• Minors have until age 20 to file claims</li>
                        <li>• Evidence disappears quickly - act immediately</li>
                        <li>• Surveillance footage often deleted within 30 days</li>
                        <li>• Witness memories fade over time</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-700 mb-3">Act Now to Protect Your Rights</h4>
                      <p className="text-sm text-red-600 mb-4">
                        California law imposes strict deadlines for filing amusement park injury claims. 
                        Don't risk losing your right to compensation - contact us immediately for a free consultation.
                      </p>
                      <Button 
                        size="sm" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/practice-areas/amusement-parks/case-evaluation'}
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
                    Don't face the amusement park operators and insurance companies alone. Our experienced theme park injury attorneys 
                    are ready to fight for the compensation you deserve.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="/practice-areas/amusement-parks/case-evaluation">
                        Get Free Case Review
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <a href="tel:(818) 123-4567" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                        <Phone className="w-5 h-5 mr-2" />
                        Call (818) 123-4567
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sticky Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:order-2">
            <div className="sticky top-24">
              <Card 
                className="relative overflow-hidden bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${sidebarImage})` }}
              >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 p-6">
                  <div className="text-center text-white mb-6">
                    <h3 className="text-xl font-bold mb-2 text-white">3 Ways to</h3>
                    <h3 className="text-xl font-bold text-white">Start Your Case</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                      onClick={() => window.location.href = '/practice-areas/amusement-parks/case-evaluation'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      FREE CASE REVIEW
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.location.href = 'tel:(818) 123-4567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="secondary" 
                      size="lg" 
                      className="w-full"
                      onClick={() => window.location.href = '/practice-areas/amusement-parks/compensation-calculator'}
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
        </div>
      </div>
    </div>
  );
};

export default AmusementParkInjuries;