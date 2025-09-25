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