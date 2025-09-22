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
  HelpCircle,
  BookOpen,
  Gavel
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/clergy-abuse-hero-bg.jpg';
import sidebarImage from '@/assets/clergy-abuse-sidebar.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ClergyAbuse: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    howCanWeHelp: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO AFTER ABUSE', icon: Heart },
    { id: 'important-info', label: 'IMPORTANT INFORMATION', icon: AlertTriangle },
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
    window.location.href = '/clergy-abuse/case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How Long Do I Have to File a Clergy Abuse Claim in California?",
      answer: "California's AB 218 extends the statute of limitations to age 40 or within 5 years of discovering the psychological injury caused by abuse, whichever is later. This groundbreaking law recognizes that clergy abuse trauma often takes decades to fully understand. The law also created revival windows allowing previously time-barred claims. Don't wait - evidence becomes harder to obtain over time, and having an attorney involved early strengthens your case."
    },
    {
      question: "Do I Need to Pay Attorney Fees Upfront?",
      answer: "No. We work on a contingency fee basis, meaning you pay nothing unless we win your case. This ensures access to justice regardless of your financial situation. There are no upfront costs, no hourly fees, and no expenses unless we secure compensation. We advance all case costs including expert witnesses, investigations, and court fees. You only pay when we successfully recover compensation for you."
    },
    {
      question: "Will My Case Be Kept Confidential?",
      answer: "Absolutely. We maintain strict confidentiality throughout the process. Cases can be filed using pseudonyms like 'John Doe' or 'Jane Doe.' Court records can be sealed when appropriate. Settlement agreements typically include confidentiality provisions. We discuss privacy options during consultation and implement the strongest available protections. Your privacy is paramount, and we work to protect your identity while pursuing justice."
    },
    {
      question: "What If the Abuse Happened Decades Ago?",
      answer: "California recognizes that trauma affects memory and disclosure. Our investigators can uncover evidence you may not know exists, including personnel files, prior complaints, and witness testimony. Many successful cases involve historical abuse supported by corroborating evidence. The institution's knowledge of the abuser's conduct often creates liability regardless of when you come forward. Your delayed disclosure doesn't weaken your case - it's a common trauma response."
    },
    {
      question: "Can I Sue If I Don't Have Physical Evidence?",
      answer: "Yes. Your testimony is evidence. Helpful documentation includes therapy records, journals, photographs from the time period, witness statements, and correspondence with the church. We conduct thorough investigations to uncover evidence you may not know exists, including personnel files, prior complaints, and institutional records. Many successful cases rely primarily on survivor testimony supported by circumstantial evidence."
    },
    {
      question: "What Types of Compensation Are Available?",
      answer: "California law provides multiple forms of compensation including past and future medical expenses, psychological counseling and therapy costs, lost wages and reduced earning capacity, pain and suffering, loss of enjoyment of life, and in cases of institutional cover-up, treble (triple) damages as punishment. Many religious institutions have also established voluntary compensation programs, though these often provide less compensation than litigation."
    },
    {
      question: "How Are Settlements Calculated in Clergy Abuse Cases?",
      answer: "Settlement values consider multiple factors including abuse severity and duration, age when abused, psychological impact, medical and therapy costs, lost wages or career impact, institutional knowledge and cover-up evidence, and strength of liability evidence. California settlements have ranged from $100,000 to over $5 million per survivor. Our former defense experience helps us accurately value cases and refuse inadequate offers."
    },
    {
      question: "What Is Treble Damages in California Clergy Abuse Cases?",
      answer: "Under AB 218, courts can award treble (triple) damages when defendants engaged in cover-ups. If a jury awards $1 million in actual damages and finds cover-up occurred, the total award becomes $3 million. Cover-up includes moving known abusers, destroying evidence, discouraging reporting, or conducting sham investigations. This provision recognizes that institutional betrayal compounds the original abuse trauma."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[700px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBackground})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
              California Clergy Abuse Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-3 text-xl font-medium text-white">Backed by Proven Experience</span>
            </div>
            
            <p className="text-xl md:text-2xl mb-10 text-white/95 max-w-4xl mx-auto leading-relaxed font-medium">
              Confidential support for survivors of clergy abuse. Our experienced attorneys fight for justice, healing, and the compensation you deserve. Free consultation.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-8">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-5 text-lg rounded-lg border-2 border-white/20 shadow-2xl hover:shadow-red-500/20 transition-all duration-300"
                onClick={() => window.location.href = '/clergy-abuse/case-evaluation'}
              >
                Free Case Evaluation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-gray-900 font-bold px-10 py-5 text-lg rounded-lg backdrop-blur-sm transition-all duration-300"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                Call (818) 123-4567
              </Button>
            </div>
            
            <div className="text-white/95 text-lg font-medium bg-black/20 backdrop-blur-sm rounded-lg px-6 py-4 border border-white/20">
              ✓ Confidential consultation ✓ No fees unless we win ✓ 25+ years experience
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-2 py-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToSection(tab.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-red-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Clergy Abuse Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4 text-gray-900">
                  For decades, religious institutions have protected predators while silencing survivors. As a former defense attorney, I know their tactics. Now I fight for survivors, using insider knowledge to maximize compensation and hold institutions accountable. Your courage to come forward deserves compassionate, powerful legal representation.
                </p>
                
                <p className="text-lg leading-relaxed text-gray-900">
                  At Trembach Law Firm, we understand the unique trauma of clergy abuse - the violation of sacred trust, the spiritual manipulation, and the institutional betrayal. We are prepared to go the distance for survivors and our team is here for you 24/7.
                </p>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                      <span className={`text-red-600 transform transition-transform duration-300 ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}>
                        ▼
                      </span>
                    </button>
                    {expandedFaq === index && (
                      <div className="p-4 pt-0 text-gray-700 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle className="text-center text-xl">Get Help Today</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <div className="text-center">
                    <img src={sidebarImage} alt="Clergy abuse legal support" className="w-full h-40 object-cover rounded-lg mb-4" />
                  </div>
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2 text-base py-3"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/clergy-abuse/case-evaluation'}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => window.location.href = 'mailto:confidential@trembachlawfirm.com'}
                    >
                      <Mail className="w-4 h-4" />
                      Email Us
                    </Button>
                  </div>
                  
                  <div className="text-center text-sm text-gray-600 mt-4">
                    <p>✓ 100% Confidential</p>
                    <p>✓ No Fees Unless We Win</p>
                    <p>✓ Available 24/7</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Don't Wait - Time Limits Apply for California</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed text-white/90">California's AB 218 provides extended deadlines, but time limits still apply. Contact us today for your free consultation.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" 
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              CALL (818) 123-4567
            </Button>
            
            <Button 
              size="lg" 
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" 
              onClick={() => window.location.href = '/clergy-abuse/case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClergyAbuse;