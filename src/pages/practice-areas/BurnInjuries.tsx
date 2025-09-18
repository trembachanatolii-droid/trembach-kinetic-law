import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Flame,
  Activity,
  TrendingUp
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/burn-injuries-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/burn-medical-treatment.jpg';
import burnTypesImage from '@/assets/practice-areas/burn-chemical-damage.jpg';
import provingNegligenceImage from '@/assets/practice-areas/burn-legal-process.jpg';
import compensationImage from '@/assets/practice-areas/burn-compensation-calculation.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BurnInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'burn-types', label: 'BURN TYPES', icon: Flame },
    { id: 'proving-negligence', label: 'PROVING NEGLIGENCE', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
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
    window.location.href = '/burn-injuries-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50+ Questions from HTML
  const faqData = [
    {
      question: "How long do I have to file a burn injury lawsuit in California?",
      answer: "California's statute of limitations gives you 2 years from the date of your burn injury to file a personal injury lawsuit. However, important exceptions exist: if you're suing a government entity, you must file an administrative claim within 6 months. Minors have until 2 years after turning 18. The discovery rule may extend the deadline if injuries weren't immediately apparent. Missing these deadlines typically bars recovery forever, making immediate legal consultation crucial."
    },
    {
      question: "Can I sue for a burn injury if I was partially at fault?",
      answer: "Yes, California follows pure comparative negligence rules, allowing recovery even if you're 99% at fault. Your compensation reduces by your fault percentage. For example, if damages total $1 million but you're 30% at fault, you'd recover $700,000. Insurance companies aggressively argue comparative fault to minimize payouts. Our attorneys counter these tactics by thoroughly investigating all contributing factors and minimizing your assigned fault percentage."
    },
    {
      question: "What if the person who caused my burns doesn't have insurance?",
      answer: "Multiple recovery options exist beyond the at-fault party's insurance: your own homeowner's or renter's insurance may provide coverage, umbrella policies offer additional protection, employer liability for employee actions, property owner liability for dangerous conditions, product manufacturer liability for defects, and personal assets of wealthy defendants. We investigate all potential sources to maximize your recovery."
    },
    {
      question: "Should I talk to the insurance company after my burn injury?",
      answer: "Never speak with insurance adjusters without legal representation. They record conversations to use against you, twist statements to imply fault, and pressure quick settlements before you understand your injuries' full extent. Refer all communications to your attorney. We handle all insurance negotiations, protecting your interests while you focus on recovery."
    },
    {
      question: "How much does it cost to hire a burn injury lawyer?",
      answer: "Nothing upfront. We work on contingency, meaning we only get paid if we win your case. Our fee is typically 33-40% of the recovery. We advance all costs including filing fees, expert witnesses, medical record retrieval, and investigation expenses. You never pay anything out of pocket, eliminating financial barriers to justice."
    },
    {
      question: "What are the different degrees of burns and their implications?",
      answer: "First-degree burns affect only the epidermis, causing redness and pain, typically healing within a week. Second-degree burns reach the dermis, causing blisters, severe pain, and potential scarring. Third-degree burns destroy all skin layers, appearing white or charred, requiring skin grafts. Fourth-degree burns extend into muscle and bone, often necessitating amputation. Severity affects both treatment complexity and compensation amounts."
    },
    {
      question: "Where are California's specialized burn treatment centers?",
      answer: "California has 13 verified burn centers: UC Davis Regional Burn Center (Sacramento), Shriners Hospital NorCal (Sacramento), Saint Francis Bothin Burn Center (San Francisco), Santa Clara Valley Medical Center (San Jose), UC San Diego Regional Burn Center, UC Irvine Regional Burn Center, LAC+USC Burn Center, and others. These facilities provide specialized care including ICU treatment, hyperbaric oxygen therapy, and reconstruction surgery."
    },
    {
      question: "What is the Total Body Surface Area (TBSA) rule?",
      answer: "TBSA percentage determines burn severity using the 'Rule of Nines': head/neck 9%, each arm 9%, chest 9%, abdomen 9%, upper back 9%, lower back 9%, each leg 18%, genitals 1%. Burns exceeding 10% TBSA in adults or 5% in children require specialized burn center treatment. TBSA directly impacts case value and required medical care."
    },
    {
      question: "What long-term medical care do burn victims need?",
      answer: "Burn recovery often requires years of treatment: multiple reconstructive surgeries, skin grafts and tissue expansion, physical/occupational therapy, psychological counseling for trauma, pain management programs, compression garments, specialized wound care, and scar revision procedures. We work with life care planners to document all future medical needs, ensuring settlements cover lifetime care costs."
    },
    {
      question: "Can I afford medical treatment while my case is pending?",
      answer: "Yes. We connect clients with doctors accepting liens, meaning payment comes from your settlement. Health insurance, medical payments coverage, and state disability benefits provide immediate support. We negotiate with providers to delay billing and arrange payment plans. Never delay treatment due to cost concerns - proper medical care strengthens your case."
    }
  ];

  return (
    <div className="min-h-screen">
      <GoBack />
      <SEO 
        title="California Burn Injury Lawyers | #1 Burn Accident Attorneys | Free Consultation"
        description="Experienced California burn injury lawyers fighting for maximum compensation. Former defense attorney now advocating for burn victims. Free 24/7 consultation. No fees unless we win."
        canonical="https://www.californiainjuryadvocates.com/practice-areas/burn-injuries"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              California Burn Injury Attorneys
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Experienced legal representation for thermal, chemical, and electrical burn injuries. 
              Fighting for maximum compensation for your medical costs, lost wages, and pain and suffering.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('evaluation')}
              >
                <Phone className="w-6 h-6 mr-3" />
                Free Case Evaluation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => scrollToSection('compensation')}
              >
                <DollarSign className="w-6 h-6 mr-3" />
                Calculate Compensation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Navigation Tabs */}
            <div className="bg-white shadow-xl rounded-lg mb-8 overflow-hidden">
              <div className="flex flex-wrap border-b">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => scrollToSection(tab.id)}
                      className={`flex items-center px-4 py-4 text-sm font-medium transition-colors border-r border-gray-200 hover:bg-red-50 ${
                        activeTab === tab.id 
                          ? 'bg-red-600 text-white' 
                          : 'text-gray-700 hover:text-red-600'
                      }`}
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4">
                    California Burn Injury Legal Representation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-lg leading-relaxed">
                  <p>
                    Severe burns cause excruciating pain, permanent scarring, and psychological trauma requiring extensive medical treatment over years. Multiple surgeries including debridement, skin grafts, and reconstruction attempt restoring function and appearance. Infection risks, contractures limiting movement, and nerve damage causing chronic pain complicate recovery.
                  </p>
                  <p>
                    Third and fourth-degree burns destroy tissue requiring amputations. Facial burns causing disfigurement profoundly impact self-esteem, relationships, and employment opportunities. Inhalation injuries damaging airways create respiratory complications. We pursue compensation from apartment fires with inadequate smoke detectors, workplace explosions from safety violations, defective products causing fires, and vehicle crashes with fuel tank ruptures.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <Scale className="w-8 h-8 mr-3 text-red-600" />
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Accident Date</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Type of Burn Injury</label>
                          <Select onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select burn type..." />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="thermal">Thermal/Fire Burn</SelectItem>
                              <SelectItem value="chemical">Chemical Burn</SelectItem>
                              <SelectItem value="electrical">Electrical Burn</SelectItem>
                              <SelectItem value="radiation">Radiation Burn</SelectItem>
                              <SelectItem value="friction">Friction Burn</SelectItem>
                              <SelectItem value="workplace">Workplace Burn</SelectItem>
                              <SelectItem value="apartment-fire">Apartment Fire</SelectItem>
                              <SelectItem value="vehicle-fire">Vehicle Fire</SelectItem>
                              <SelectItem value="defective-product">Defective Product</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Location of Accident</label>
                        <Input
                          type="text"
                          value={formData.accidentLocation}
                          onChange={(e) => setFormData({...formData, accidentLocation: e.target.value})}
                          placeholder="Where did the burn occur?"
                          className="w-full"
                        />
                      </div>
                      <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg rounded-full">
                        Get Your Free Case Review →
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section">
              <Card className="p-8 shadow-xl mb-8">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold mb-4 flex items-center">
                    <HelpCircle className="w-8 h-8 mr-3 text-red-600" />
                    Frequently Asked Questions About Burn Injuries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <Collapsible key={index}>
                        <CollapsibleTrigger 
                          className="flex justify-between items-center w-full p-4 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span className="font-medium pr-4 text-lg">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                          )}
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 pb-4">
                          <div className="pt-2 text-gray-700 leading-relaxed text-lg">
                            {faq.answer}
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar - 3 Ways to Start Your Case */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Card className="shadow-2xl border-0">
                <CardHeader className="bg-gradient-to-r from-red-600 to-red-700 text-white">
                  <CardTitle className="text-center text-xl font-bold">
                    3 Ways to Start Your Case
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  {/* Phone Contact */}
                  <div className="text-center">
                    <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-red-600" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-red-600">(818) 123-4567</h3>
                    <p className="text-gray-600 mb-4 text-base">
                      Speak directly with our burn injury attorneys
                    </p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Call Now
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Free Case Evaluation</h3>
                      <p className="text-gray-600 mb-4 text-base">
                        Get expert analysis of your burn injury case
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() => scrollToSection('evaluation')}
                      >
                        Start Evaluation
                      </Button>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <div className="text-center">
                      <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-red-600" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Message Us</h3>
                      <p className="text-gray-600 mb-4 text-base">
                        Send us details about your burn injury
                      </p>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-600 text-red-600 hover:bg-red-50"
                        onClick={() => scrollToSection('evaluation')}
                      >
                        Send Message
                      </Button>
                    </div>
                  </div>

                  {/* Trust Indicators */}
                  <div className="border-t pt-6">
                    <div className="text-center space-y-3">
                      <div className="flex justify-center items-center">
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                        <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      </div>
                      <p className="text-sm text-gray-600">
                        Experienced Burn Injury Attorneys
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-center">
                          <Shield className="w-4 h-4 text-green-600 mr-2" />
                          No Win, No Fee
                        </div>
                        <div className="flex items-center justify-center">
                          <Clock className="w-4 h-4 text-blue-600 mr-2" />
                          Free Consultation
                        </div>
                        <div className="flex items-center justify-center">
                          <Heart className="w-4 h-4 text-red-600 mr-2" />
                          Personal Attention
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-orange-600 py-16 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Don't Wait - Time Limits Apply for California Burn Injuries
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Every day you delay reduces your chances of maximum compensation. Our burn injury specialists are available 24/7 to protect your rights and secure the compensation you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 text-lg rounded-full"
              onClick={() => window.location.href = '/burn-injuries-case-evaluation'}
            >
              <Scale className="mr-2 h-5 w-5" />
              Free Case Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BurnInjuries;