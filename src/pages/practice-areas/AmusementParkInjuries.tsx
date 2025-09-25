import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { toast } from 'sonner';
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
    phone: '',
    email: '',
    accidentDate: '',
    parkName: '',
    rideType: '',
    injuryType: '',
    injuryDescription: ''
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
    console.log('Amusement Park Case Evaluation:', formData);
    toast.success('Thanks! We\'ll contact you shortly.');
  };

  const faqData = [
    {
      question: "What should I do immediately after an amusement park injury?",
      answer: "Seek medical attention first, then document everything with photos, get witness information, report to park management, preserve evidence like tickets and clothing, and contact an attorney before speaking with park insurance representatives."
    },
    {
      question: "Can I sue an amusement park for my injury?",
      answer: "Yes, if the park was negligent in maintaining rides, training operators, or ensuring safety. California law requires parks to exercise the highest degree of care. We investigate maintenance records, safety violations, and operator training to build your case."
    },
    {
      question: "How long do I have to file a claim?",
      answer: "Generally two years from the injury date, but government-owned properties may require filing within six months. Evidence disappears quickly, so contact us immediately to preserve surveillance footage and witness statements."
    },
    {
      question: "What compensation can I recover?",
      answer: "Medical expenses, lost wages, pain and suffering, future medical costs, rehabilitation expenses, and emotional trauma damages. Major parks carry substantial insurance policies, allowing for significant recoveries in serious injury cases."
    },
    {
      question: "Do I need to prove the park was negligent?",
      answer: "Yes, we must show the park failed to exercise reasonable care. This includes ride maintenance failures, inadequate operator training, design defects, or failure to warn of known dangers. Our investigation examines all potential negligence factors."
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
              onClick={() => scrollToSection('evaluation')}
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
                  From Disneyland to Six Flags, we've seen how parks and insurers minimize claims. Now we use that insider knowledge to protect you.
                </p>
              </div>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="premium-form-container interactive-card rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden backdrop-blur-md">
                <div className="text-center py-12 px-8 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-sm">
                  <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
                    Free Case Evaluation
                  </h2>
                  <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    Get Your Free Consultation for Amusement Park Injuries
                  </p>
                </div>

                <div className="px-8 pb-12 bg-white/95 backdrop-blur-sm">
                  <form onSubmit={handleFormSubmit} className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                      {/* Contact Information */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">First Name *</label>
                          <Input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Last Name *</label>
                          <Input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Phone Number *</label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Email Address *</label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                            required
                          />
                        </div>
                      </div>

                      {/* Accident Details */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                            className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Park Name</label>
                          <Select value={formData.parkName} onValueChange={(value) => setFormData(prev => ({ ...prev, parkName: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Select park" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="disneyland">Disneyland Resort</SelectItem>
                              <SelectItem value="california-adventure">Disney California Adventure</SelectItem>
                              <SelectItem value="six-flags">Six Flags Magic Mountain</SelectItem>
                              <SelectItem value="knotts">Knott's Berry Farm</SelectItem>
                              <SelectItem value="universal">Universal Studios Hollywood</SelectItem>
                              <SelectItem value="seaworld">SeaWorld San Diego</SelectItem>
                              <SelectItem value="great-america">California's Great America</SelectItem>
                              <SelectItem value="water-park">Water Park</SelectItem>
                              <SelectItem value="other">Other Amusement Park</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Type of Ride/Attraction</label>
                          <Select value={formData.rideType} onValueChange={(value) => setFormData(prev => ({ ...prev, rideType: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Select ride type" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="roller-coaster">Roller Coaster</SelectItem>
                              <SelectItem value="water-ride">Water Ride/Slide</SelectItem>
                              <SelectItem value="spinning-ride">Spinning Ride</SelectItem>
                              <SelectItem value="ferris-wheel">Ferris Wheel</SelectItem>
                              <SelectItem value="bumper-cars">Bumper Cars</SelectItem>
                              <SelectItem value="kiddie-ride">Children's Ride</SelectItem>
                              <SelectItem value="walkway">Walkway/Pathway</SelectItem>
                              <SelectItem value="restaurant">Restaurant/Food Area</SelectItem>
                              <SelectItem value="other">Other Area</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Primary Injury Type</label>
                          <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                              <SelectItem value="spinal-injury">Spinal/Neck Injury</SelectItem>
                              <SelectItem value="broken-bones">Broken Bones</SelectItem>
                              <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                              <SelectItem value="bruising">Bruising</SelectItem>
                              <SelectItem value="concussion">Concussion</SelectItem>
                              <SelectItem value="whiplash">Whiplash</SelectItem>
                              <SelectItem value="emotional-trauma">Emotional Trauma</SelectItem>
                              <SelectItem value="other">Other Injury</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Injury Description */}
                      <div>
                        <label className="block text-sm font-medium text-slate-900 mb-3">Brief Description of Injury</label>
                        <Textarea
                          value={formData.injuryDescription}
                          onChange={(e) => setFormData(prev => ({ ...prev, injuryDescription: e.target.value }))}
                          className="min-h-[100px] text-lg border-gray-200 rounded-2xl bg-white text-slate-900 resize-none"
                          placeholder="Please describe what happened and your injuries..."
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="text-center pt-4">
                        <Button 
                          type="submit" 
                          className="w-full md:w-auto bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold px-12 py-4 text-lg rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg"
                        >
                          Get My Free Case Evaluation
                        </Button>
                        <p className="text-sm text-slate-600 mt-3">
                          * Required fields. We respect your privacy and will never share your information.
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                    <Card className="group hover:shadow-lg transition-all duration-300">
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer">
                          <CardTitle className="flex items-center justify-between group-hover:text-primary transition-colors">
                            <span>{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent className="pt-0">
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Card>
                  </Collapsible>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Card */}
            <Card className="sticky top-6 mb-6">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center text-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white" 
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <p className="text-sm text-red-600 text-center">
                    24/7 availability for amusement park emergencies
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Statute of Limitations Warning */}
            <Card className="bg-red-50 border-red-200 mb-6">
              <CardHeader>
                <CardTitle className="text-red-700 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Time Limits Apply
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div>
                  <h4 className="font-semibold text-red-700 mb-3">Act Now to Protect Your Rights</h4>
                  <p className="text-sm text-red-600 mb-4">
                    California law imposes strict deadlines for filing amusement park injury claims. 
                    Don't risk losing your right to compensation - contact us immediately for a free consultation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkInjuries;