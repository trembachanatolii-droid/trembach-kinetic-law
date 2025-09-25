import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Home,
  Scissors,
  Activity,
  Calculator,
  ClipboardCheck,
  Zap
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/amputation-hero-new.jpg';
import whatToDoImage from '@/assets/practice-areas/amputation-immediate-care.jpg';
import amputationTypesImage from '@/assets/practice-areas/amputation-types.jpg';
import rehabilitationImage from '@/assets/practice-areas/amputation-rehabilitation.jpg';
import compensationImage from '@/assets/practice-areas/amputation-compensation.jpg';
import prostheticImage from '@/assets/practice-areas/amputation-prosthetics.jpg';
import lifetimeCareImage from '@/assets/practice-areas/amputation-lifetime-care.jpg';
import timeLimitsImage from '@/assets/practice-areas/amputation-legal-timeline.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const AmputationInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    injuryType: '',
    accidentLocation: '',
    amputationType: '',
    medicalTreatment: '',
    injuryDescription: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'types-of-amputations', label: 'AMPUTATION TYPES', icon: Scissors },
    { id: 'rehabilitation', label: 'REHABILITATION', icon: Activity },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'prosthetics', label: 'PROSTHETICS', icon: Heart },
    { id: 'lifetime-care', label: 'LIFETIME CARE', icon: Stethoscope },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

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
    console.log('Amputation Case Evaluation:', formData);
    toast.success('Thanks! We\'ll contact you shortly.');
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data
  const faqData = [
    {
      question: "What is the average settlement for an amputation injury in California?",
      answer: "Amputation settlements in California typically range from $750,000 to $5 million or more, depending on factors like the type and level of amputation, age and occupation of the victim, degree of negligence involved, available insurance coverage, and long-term care needs."
    },
    {
      question: "How much does lifetime care cost for an amputation victim?",
      answer: "The lifetime medical costs for amputation victims average $509,275 but can exceed $1 million for complex cases. Costs include immediate emergency care and surgeries, multiple prosthetic fittings and replacements, ongoing physical and occupational therapy, phantom limb pain treatment, psychological counseling, home modifications for accessibility, and potential revision surgeries."
    },
    {
      question: "What causes most amputation injuries?",
      answer: "Motor vehicle accidents account for approximately 45% of traumatic amputations, particularly involving motorcycles, trucks, and pedestrian accidents. Workplace accidents represent 25% of cases, especially in construction, manufacturing, and industrial settings. Medical malpractice causes 15% of amputations through surgical errors, misdiagnosis of infections, or medication mistakes."
    },
    {
      question: "What should I do immediately after an amputation injury?",
      answer: "Seek immediate emergency medical care - time is critical for potential reattachment. If possible, preserve the amputated part by wrapping it in clean cloth, placing in a sealed plastic bag, and keeping on ice (not direct contact). Document everything with photos of the accident scene, equipment involved, and safety violations."
    },
    {
      question: "Can amputated limbs be reattached?",
      answer: "Successful reattachment depends on several factors: time elapsed (best within 6-8 hours), type of amputation (clean cuts better than crushing injuries), level of amputation (distal limbs more successful), patient's age and health, and quality of emergency care. Upper extremity reattachments have higher success rates than lower extremity."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Amputation Injury Lawyers | Former Defense Attorneys"
        description="California amputation injury attorneys fighting for maximum compensation. Former defense lawyers with insider knowledge. Free consultation. Call (818) 123-4567."
        keywords="amputation injury lawyer California, limb loss attorney, traumatic amputation compensation, prosthetic costs legal claim"
        canonical="https://www.trembachlawfirm.com/practice-areas/amputation-injuries"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "LegalService",
          "name": "Trembach Law Firm - Amputation Injury Attorneys",
          "description": "California amputation injury law firm specializing in traumatic limb loss and medical malpractice cases",
          "url": "https://www.trembachlawfirm.com/practice-areas/amputation-injuries",
          "telephone": "+18181234567",
          "areaServed": "California",
          "priceRange": "No fees unless we win"
        }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
        
        <GoBack />
        
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              California Amputation Injury Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
              Fighting for Maximum Compensation for Limb Loss Victims
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={() => window.open('tel:8181234567')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <div className="flex items-center text-lg">
                <span className="mr-2">Former Defense Attorney</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </span>
              </div>
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
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Key Statistics */}
            <Card className="mb-12 bg-gradient-to-r from-red-50 to-red-100 border-red-200">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-red-600">30,000+</div>
                    <div className="text-sm text-red-600 font-medium">Annual amputations in the US</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">$509K</div>
                    <div className="text-sm text-green-600 font-medium">Average lifetime medical costs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600">$750K-$5M</div>
                    <div className="text-sm text-green-600 font-medium">Typical settlement range</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Overview Section */}
            <section id="overview" className="content-section mb-16">
              <div className="max-w-4xl">
                <h2 className="text-4xl font-bold mb-8 text-foreground">
                  Understanding Amputation Injuries in California
                </h2>
                
                <div className="prose prose-lg max-w-none text-muted-foreground">
                  <p className="text-lg leading-relaxed mb-6">
                    Amputation injuries are among the most devastating consequences of accidents, fundamentally altering a victim's life forever. The loss of a limb affects not just physical function, but emotional well-being, career prospects, and relationships. In California, approximately 45% of traumatic amputations result from motor vehicle accidents, while workplace incidents account for another 25%.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    The psychological impact of amputation often exceeds the physical trauma. Phantom limb pain, depression, PTSD, and adjustment disorders are common. Many victims require years of counseling, multiple prosthetic fittings, extensive rehabilitation, and home modifications. The lifetime cost of care averages $509,275 but can exceed $1 million for complex cases.
                  </p>
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                        Learn more about amputation injury impact...
                        <ChevronDown className="ml-2 h-4 w-4" />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-4 text-base leading-relaxed">
                        <p>
                          Insurance companies routinely undervalue amputation claims, focusing only on immediate medical costs while ignoring lifetime needs. They hire doctors to minimize disability ratings and vocational experts to claim victims can work despite profound limitations.
                        </p>
                        <p>
                          Our firm's former defense attorney experience reveals exactly how insurance companies minimize amputation claims. We know their tactics because we used them. This insider knowledge allows us to build overwhelming cases that force fair settlements or trial victories.
                        </p>
                        <p>
                          Amputation cases require specialized expertise in prosthetics, rehabilitation, life care planning, and vocational assessment. The difference between adequate and exceptional legal representation can mean millions in additional compensation for lifetime care needs.
                        </p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </div>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-16">
              <div className="premium-form-container interactive-card rounded-3xl shadow-xl border border-blue-200/30 overflow-hidden backdrop-blur-md">
                <div className="text-center py-12 px-8 bg-gradient-to-b from-blue-50/80 to-white/90 backdrop-blur-sm">
                  <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">
                    Free Case Evaluation
                  </h2>
                  <p className="text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
                    Get Your Free Consultation for Amputation Injuries
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

                      {/* Accident & Injury Details */}
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
                          <label className="block text-sm font-medium text-slate-900 mb-3">Type of Amputation</label>
                          <Select value={formData.amputationType} onValueChange={(value) => setFormData(prev => ({ ...prev, amputationType: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Select amputation type" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="finger">Finger/Thumb</SelectItem>
                              <SelectItem value="hand">Hand</SelectItem>
                              <SelectItem value="arm-below">Below-Elbow Arm</SelectItem>
                              <SelectItem value="arm-above">Above-Elbow Arm</SelectItem>
                              <SelectItem value="toe">Toe</SelectItem>
                              <SelectItem value="foot">Foot</SelectItem>
                              <SelectItem value="leg-below">Below-Knee Leg</SelectItem>
                              <SelectItem value="leg-above">Above-Knee Leg</SelectItem>
                              <SelectItem value="multiple">Multiple Limbs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Accident Location</label>
                          <Select value={formData.accidentLocation} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentLocation: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Where did the accident occur?" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="workplace">Workplace</SelectItem>
                              <SelectItem value="car-accident">Car Accident</SelectItem>
                              <SelectItem value="motorcycle-accident">Motorcycle Accident</SelectItem>
                              <SelectItem value="construction-site">Construction Site</SelectItem>
                              <SelectItem value="factory">Factory/Industrial</SelectItem>
                              <SelectItem value="hospital">Hospital/Medical</SelectItem>
                              <SelectItem value="home">Home</SelectItem>
                              <SelectItem value="public-place">Public Place</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-slate-900 mb-3">Medical Treatment</label>
                          <Select value={formData.medicalTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, medicalTreatment: value }))}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl bg-white text-slate-900">
                              <SelectValue placeholder="Current treatment status" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 shadow-lg z-50">
                              <SelectItem value="emergency-room">Emergency Room Only</SelectItem>
                              <SelectItem value="hospital-stay">Hospital Stay</SelectItem>
                              <SelectItem value="surgery-complete">Surgery Completed</SelectItem>
                              <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                              <SelectItem value="rehabilitation">In Rehabilitation</SelectItem>
                              <SelectItem value="prosthetic-fitting">Prosthetic Fitting</SelectItem>
                              <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
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
                          placeholder="Please describe what happened and how the amputation occurred..."
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

            {/* Immediate Steps Section */}
            <section id="what-to-do" className="content-section mb-16">
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Immediate Steps After an Amputation Injury
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Emergency Medical Care</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Call 911 immediately. Control bleeding with direct pressure above the amputation site. If possible, preserve the amputated part by wrapping in clean cloth, placing in sealed plastic bag, and keeping on ice (not direct contact). Time is critical for potential reattachment.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Document the Scene</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Take photos of the accident scene, equipment involved, safety violations, and your injuries. Get witness contact information. Report the incident to authorities and obtain report numbers. This evidence is crucial for proving liability.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Contact Legal Representation</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Insurance companies immediately begin building cases against amputation victims. Our former defense experience reveals their tactics. Contact us before giving any statements or signing documents. We protect your rights while you focus on recovery.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-foreground">Begin Case Documentation</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          Start a detailed journal of pain levels, daily challenges, missed activities, and emotional impact. Keep all medical records, bills, and correspondence. This contemporaneous documentation strengthens your claim significantly.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={whatToDoImage} 
                    alt="Emergency medical care for amputation injury"
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Amputation Types Section */}
            <section id="types-of-amputations" className="content-section mb-16">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Types of Amputation Injuries We Handle
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Scissors className="w-5 h-5 mr-2 text-primary" />
                          Upper Extremity Amputations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          Finger, thumb, hand, below-elbow, and above-elbow amputations. Upper limb losses severely impact fine motor skills, work capacity, and daily activities. Prosthetic technology offers some restoration but function remains limited.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Finger/thumb amputations</li>
                          <li>• Partial hand amputations</li>
                          <li>• Below-elbow amputations</li>
                          <li>• Above-elbow amputations</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Activity className="w-5 h-5 mr-2 text-primary" />
                          Lower Extremity Amputations  
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed mb-3">
                          Toe, foot, below-knee, and above-knee amputations. Lower limb losses affect mobility, balance, and independence. Higher-level amputations require more energy for walking and increase fall risk.
                        </p>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Toe amputations</li>
                          <li>• Partial foot amputations</li>
                          <li>• Below-knee amputations</li>
                          <li>• Above-knee amputations</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Multiple Limb Amputations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Loss of two or more limbs from catastrophic accidents. These devastating injuries require extensive rehabilitation, specialized equipment, home modifications, and lifetime attendant care. Compensation often reaches millions.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-lg">
                          <AlertTriangle className="w-5 h-5 mr-2 text-primary" />
                          Traumatic vs. Surgical Amputations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          Traumatic amputations occur at accident scenes from crushing or severing forces. Surgical amputations follow failed limb salvage attempts or infection. Both types qualify for maximum compensation when caused by negligence.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={amputationTypesImage} 
                    alt="Different types of amputation injuries"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Rehabilitation Section */}
            <section id="rehabilitation" className="content-section mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden lg:block">
                  <img 
                    src={rehabilitationImage} 
                    alt="Amputation rehabilitation and physical therapy"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Rehabilitation and Recovery Process
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Immediate Post-Surgical Care</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Wound healing, pain management, phantom limb pain treatment, and psychological support. This critical phase typically lasts 6-12 weeks and sets the foundation for successful prosthetic fitting.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Physical Therapy</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Strength building, range of motion, balance training, and gait instruction. Physical therapy continues throughout the recovery process, often requiring 2-3 sessions weekly for months or years.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Occupational Therapy</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Learning adaptive techniques for daily activities, job skills training, and prosthetic use instruction. Occupational therapy helps maximize independence and work capacity.
                      </p>
                    </div>
                    
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                          Learn more about rehabilitation services...
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Psychological Counseling</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Depression, PTSD, and adjustment disorders are common after amputation. Professional counseling addresses grief, phantom limb pain, and adaptation challenges.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Vocational Rehabilitation</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Job retraining, workplace modifications, and career counseling to help amputees return to productive employment when possible.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Peer Support Programs</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Connecting with other amputees provides emotional support, practical advice, and motivation during the challenging adaptation process.
                            </p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-16">
              <div className="flex items-start gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Amputation Injury Compensation
                  </h2>
                  
                  <div className="space-y-8">
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <DollarSign className="w-6 h-6 mr-2 text-green-600" />
                          Economic Damages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Medical expenses (emergency care, surgeries, rehabilitation)</li>
                          <li>• Prosthetic devices and replacements (every 3-5 years)</li>
                          <li>• Ongoing physical and occupational therapy</li>
                          <li>• Lost wages and diminished earning capacity</li>
                          <li>• Home and vehicle modifications</li>
                          <li>• Attendant care and assistance</li>
                          <li>• Lifetime medical monitoring and treatment</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="border border-border">
                      <CardHeader>
                        <CardTitle className="flex items-center text-xl">
                          <Heart className="w-6 h-6 mr-2 text-red-600" />
                          Non-Economic Damages
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                          <li>• Physical pain and suffering</li>
                          <li>• Emotional distress and mental anguish</li>
                          <li>• Loss of enjoyment of life</li>
                          <li>• Disfigurement and disability</li>
                          <li>• Loss of consortium (impact on relationships)</li>
                          <li>• Phantom limb pain and chronic discomfort</li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 text-green-800">Typical Settlement Ranges</h3>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Finger/Thumb Amputations</h4>
                          <p className="text-green-600">$150,000 - $400,000+</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Hand Amputations</h4>
                          <p className="text-green-600">$400,000 - $1,200,000+</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Arm Amputations</h4>
                          <p className="text-green-600">$750,000 - $2,500,000+</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Leg Amputations</h4>
                          <p className="text-green-600">$500,000 - $2,000,000+</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Multiple Limbs</h4>
                          <p className="text-green-600">$2,000,000 - $10,000,000+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={compensationImage} 
                    alt="Amputation injury compensation calculation"
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Prosthetics Section */}
            <section id="prosthetics" className="content-section mb-16">
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Prosthetic Devices and Technology
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Initial Prosthetic Fitting</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        The first prosthetic is typically fitted 6-12 weeks after amputation. This temporary device allows early mobility while the residual limb continues healing and shaping. Multiple adjustments are necessary during this period.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Advanced Prosthetic Technology</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Modern prosthetics include microprocessor-controlled knees, myoelectric hands, and computer-controlled feet. These advanced devices dramatically improve function but cost $50,000-$150,000 per limb.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Replacement Schedule</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Prosthetics require replacement every 3-5 years due to wear, technology advances, and body changes. Active users may need replacements more frequently. Lifetime prosthetic costs often exceed $500,000.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-800 mb-3">Common Prosthetic Costs</h4>
                      <ul className="space-y-2 text-sm text-blue-700">
                        <li>• Basic below-knee prosthetic: $15,000 - $30,000</li>
                        <li>• Advanced microprocessor knee: $50,000 - $100,000</li>
                        <li>• Myoelectric hand prosthetic: $40,000 - $80,000</li>
                        <li>• Sports/activity-specific prosthetics: $10,000 - $25,000</li>
                        <li>• Annual maintenance and repairs: $3,000 - $8,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={prostheticImage} 
                    alt="Advanced prosthetic devices and technology"
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* Lifetime Care Section */}
            <section id="lifetime-care" className="content-section mb-16">
              <div className="flex items-start gap-8">
                <div className="hidden lg:block">
                  <img 
                    src={lifetimeCareImage} 
                    alt="Lifetime care planning for amputation victims"
                    className="w-96 h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
                
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Lifetime Care Planning
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Medical Care Needs</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Amputees require lifetime medical monitoring including residual limb care, phantom pain management, prosthetic adjustments, and treatment of secondary conditions like arthritis, back pain, and circulation problems.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Home Modifications</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Wheelchair accessibility, ramps, modified bathrooms, lowered counters, and specialized equipment. Initial modifications average $25,000-$75,000 with ongoing maintenance and updates.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Transportation Needs</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        Vehicle modifications including hand controls, wheelchair lifts, or specialized seating. Many amputees require adaptive equipment costing $15,000-$50,000 per vehicle.
                      </p>
                    </div>
                    
                    <Collapsible>
                      <CollapsibleTrigger asChild>
                        <Button variant="link" className="text-primary text-lg p-0 h-auto font-medium">
                          See detailed lifetime care costs...
                          <ChevronDown className="ml-2 h-4 w-4" />
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="mt-4">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Personal Care Assistance</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Many amputees need help with daily activities, especially multiple limb amputees. Personal care assistance ranges from 2-24 hours daily at $25-40 per hour.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Psychological Support</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Ongoing counseling for depression, PTSD, adjustment disorders, and relationship challenges. Mental health treatment continues throughout life.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-2">Secondary Health Conditions</h4>
                            <p className="text-muted-foreground leading-relaxed">
                              Increased arthritis, back problems, cardiovascular issues, and overuse injuries in remaining limbs require additional medical care and treatment.
                            </p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </div>
                </div>
              </div>
            </section>

            {/* Time Limits Section */}
            <section id="time-limits" className="content-section mb-16">
              <div className="flex items-center gap-8">
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-8 text-foreground">
                    Time Limits for Amputation Claims
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-3 text-red-800">California Statute of Limitations</h3>
                      <p className="text-red-700 leading-relaxed mb-4">
                        You have only TWO YEARS from the accident date to file your amputation injury lawsuit. This deadline is strictly enforced - missing it means losing your right to compensation forever.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="flex items-center text-lg">
                            <Building className="w-5 h-5 mr-2 text-primary" />
                            Government Claims
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            Claims against government entities (city, county, state) must be filed within SIX MONTHS of the accident. This includes accidents on public property, government vehicles, or involving government employees.
                          </p>
                        </CardContent>
                      </Card>
                      
                      <Card className="border border-border">
                        <CardHeader>
                          <CardTitle className="flex items-center text-lg">
                            <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                            Medical Malpractice
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed mb-3">
                            Medical malpractice resulting in amputation has a ONE YEAR deadline from discovery of the malpractice or THREE YEARS from the procedure, whichever comes first.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground">Why Early Action is Critical</h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>• Evidence disappears quickly (surveillance footage deleted within 30 days)</li>
                        <li>• Witness memories fade over time</li>
                        <li>• Medical records become harder to obtain</li>
                        <li>• Insurance companies destroy claim files after several years</li>
                        <li>• Physical evidence deteriorates or gets discarded</li>
                        <li>• Expert witnesses may become unavailable</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="hidden lg:block">
                  <img 
                    src={timeLimitsImage} 
                    alt="Legal timeline and statute of limitations"
                    className="w-96 h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Collapsible key={index} open={expandedFaq === index} onOpenChange={() => toggleFaq(index)}>
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
                    24/7 availability for amputation emergencies
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
                    California law gives you only two years from the accident date to file your claim. Government property claims require filing within six months. Contact us today for your free consultation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don't Wait - Time Limits Apply for California Amputation Claims
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            California law gives you only two years from the accident date to file your claim. Government property claims require filing within six months. Contact us today for your free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button 
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('evaluation')}
            >
              Start Free Case Evaluation
            </Button>
            <Button 
              className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-red-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105"
              onClick={() => window.open('tel:8181234567')}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmputationInjuries;