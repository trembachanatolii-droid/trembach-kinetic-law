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
import heroBackground from '@/assets/clergy-abuse-hero-bg.jpg';
import sidebarImage from '@/assets/clergy-abuse-sidebar.jpg';
import supportStepsImage from '@/assets/clergy-abuse-support-steps.jpg';
import legalProcessImage from '@/assets/clergy-abuse-legal-process.jpg';

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
    // Handle form submission - redirect to case evaluation
    window.location.href = '/clergy-abuse-case-evaluation';
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
    },
    {
      question: "Can I Sue a Non-Catholic Religious Organization?",
      answer: "Absolutely. California law applies to all religious institutions including Protestant churches, Jewish synagogues, Mormon temples, Islamic mosques, Buddhist temples, and non-denominational congregations. Every religious organization must protect members from abuse. We've successfully represented survivors from diverse faith backgrounds. The same legal principles apply regardless of denomination."
    },
    {
      question: "What If I Still Attend the Same Church?",
      answer: "Many survivors maintain connections to their faith communities. Filing a lawsuit doesn't require leaving your church. Some find that seeking accountability strengthens their faith by promoting institutional reform. We can structure cases to minimize community disruption while ensuring justice. Your spiritual journey is separate from holding abusers accountable."
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
              California Clergy Abuse Attorneys
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/clergy-abuse-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Clergy Abuse Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  For decades, religious institutions have protected predators while silencing survivors. As a former defense attorney, I know their tactics. Now I fight for survivors, using insider knowledge to maximize compensation and hold institutions accountable. Your courage to come forward deserves compassionate, powerful legal representation.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the unique trauma of clergy abuse - the violation of sacred trust, the spiritual manipulation, and the institutional betrayal. We are prepared to go the distance for survivors and our team is here for you 24/7.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Clergy Abuse Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Heart className="w-5 h-5 mr-2 text-primary" />
                          Trauma-Informed Approach
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We understand religious trauma syndrome and work with specialized therapists who comprehend the unique psychological impact of clergy abuse.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Former Defense Experience
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Attorney Trembach's background defending institutions provides unique insights into how religious organizations protect themselves and minimize liability.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">AB 218 Expertise</h4>
                          <p className="text-sm text-muted-foreground">Deep understanding of California's groundbreaking clergy abuse legislation and how to maximize its benefits.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">We act quickly to preserve evidence and protect your rights while you focus on healing.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Comprehensive Support</h4>
                          <p className="text-sm text-muted-foreground">Connections to trauma specialists, support groups, and victim compensation programs.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we win your case.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Clergy Abuse Representation</h3>
                    <p>
                      Clergy sexual abuse represents one of the most profound betrayals of trust imaginable. When religious leaders exploit their spiritual authority to commit sexual abuse, they devastate not only the survivor's body and mind but often their faith and spiritual identity as well.
                    </p>
                    
                    <p>
                      California has become a leader in protecting clergy abuse survivors through groundbreaking legislation like Assembly Bill 218 (AB 218), which dramatically expanded survivors' rights. This law extends the statute of limitations to age 40 or within 5 years of discovering the psychological injury - whichever is later.
                    </p>
                    
                    <h4>Types of Religious Institutions We Hold Accountable:</h4>
                    <ul>
                      <li>Catholic dioceses throughout California</li>
                      <li>Protestant churches of all denominations</li>
                      <li>Jewish synagogues and organizations</li>
                      <li>Mormon temples and wards</li>
                      <li>Islamic mosques and schools</li>
                      <li>Buddhist temples and meditation centers</li>
                      <li>Non-denominational congregations</li>
                      <li>Religious schools, camps, and youth programs</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">🔒 100% Confidential • 24/7 Available</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">How Can We Help? *</label>
                    <Select value={formData.howCanWeHelp} onValueChange={(value) => setFormData(prev => ({ ...prev, howCanWeHelp: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="catholic-church">Catholic Church Abuse</SelectItem>
                        <SelectItem value="protestant-church">Protestant Church Abuse</SelectItem>
                        <SelectItem value="other-religious">Other Religious Institution</SelectItem>
                        <SelectItem value="school-youth">School/Youth Organization</SelectItem>
                        <SelectItem value="multiple-incidents">Multiple Incidents</SelectItem>
                        <SelectItem value="need-guidance">Not Sure - Need Guidance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Get Free Consultation →
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    Your information is protected by attorney-client privilege
                  </p>
                </form>
              </div>
            </section>

            {/* What to Do After Abuse */}
            <section id="what-to-do" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">What to Do After Experiencing Clergy Abuse</h2>
              
              <div className="mb-6">
                <img 
                  src={supportStepsImage} 
                  alt="Professional support and healing after clergy abuse" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Taking the first steps toward healing and justice requires courage. Here's your path forward.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-green-600" />
                      Seek Medical & Mental Health Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Connect with trauma-informed healthcare providers</p>
                    <p>• Find therapists who understand religious trauma</p>
                    <p>• Document your treatment for your legal case</p>
                    <p>• Consider support groups for survivors</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Phone className="w-5 h-5 mr-2 text-green-600" />
                      Contact Trembach Law Firm
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Call us 24/7 at (818) 123-4567</p>
                    <p>• Completely confidential consultation</p>
                    <p>• Former defense attorney advantage</p>
                    <p>• We know institutional protection tactics</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <FileText className="w-5 h-5 mr-2 text-green-600" />
                      Document Everything
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• Preserve photos, letters, emails</p>
                    <p>• Write down your memories</p>
                    <p>• Gather witness information</p>
                    <p>• Keep journal entries and therapy records</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-green transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-green-600 transition-colors">
                      <Shield className="w-5 h-5 mr-2 text-green-600" />
                      We Handle Everything
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• We take over all communications</p>
                    <p>• No dealing with church or insurance companies</p>
                    <p>• Focus on healing while we fight</p>
                    <p>• Maximum compensation pursuit</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Important Information */}
            <section id="important-info" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Important Information About Clergy Abuse Cases</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Clergy sexual abuse represents one of the most profound betrayals of trust imaginable. When religious leaders exploit their spiritual authority to commit sexual abuse, they devastate not only the survivor's body and mind but often their faith and spiritual identity as well.
                </p>
                
                <p className="text-lg leading-relaxed">
                  California has become a leader in protecting clergy abuse survivors through groundbreaking legislation like Assembly Bill 218 (AB 218), which dramatically expanded survivors' rights and allows courts to award triple damages when institutions engaged in cover-ups.
                </p>
              </div>

              <Collapsible open={expandedSections.importantInfo} onOpenChange={() => toggleSection('importantInfo')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About California's Groundbreaking Legal Reforms
                    {expandedSections.importantInfo ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>The Scope of Clergy Abuse in California</h3>
                    <p>
                      California has been at the epicenter of the clergy abuse crisis, with thousands of survivors coming forward to seek justice. The Archdiocese of Los Angeles alone has paid over $740 million in settlements to more than 500 survivors. Statewide, Catholic dioceses have paid billions in compensation, with many filing for bankruptcy protection.
                    </p>
                    
                    <h3>Assembly Bill 218 (AB 218) - A Game Changer</h3>
                    <p>
                      In 2019, California Governor Gavin Newsom signed Assembly Bill 218 into law, fundamentally transforming the legal landscape for clergy abuse survivors. This landmark legislation:
                    </p>
                    <ul>
                      <li>Extended the statute of limitations from age 26 to age 40</li>
                      <li>Allows claims within 5 years of discovering psychological injury</li>
                      <li>Created a three-year "lookback window" from 2020-2022</li>
                      <li>Permits courts to award treble (triple) damages for cover-ups</li>
                    </ul>
                    
                    <h3>The Psychology of Clergy Abuse</h3>
                    <p>
                      Clergy abuse involves unique psychological dynamics that distinguish it from other forms of sexual abuse. Perpetrators exploit their spiritual authority, using religious concepts to manipulate and control victims. This can cause "religious trauma syndrome," affecting not only mental health but also spiritual identity and worldview.
                    </p>
                    
                    <h3>Types of Clergy Abuse We Handle</h3>
                    <ul>
                      <li>Sexual abuse of minors by religious leaders</li>
                      <li>Adult sexual exploitation through abuse of religious authority</li>
                      <li>Grooming behaviors and boundary violations</li>
                      <li>Institutional cover-ups and failure to report</li>
                      <li>Moving known abusers to new parishes</li>
                      <li>Psychological and spiritual manipulation</li>
                      <li>Abuse in religious schools, camps, or youth programs</li>
                      <li>Abuse during religious counseling or confession</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal Process */}
            <section id="legal-process" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Clergy Abuse Legal Process</h2>
              
              <div className="mb-6">
                <img 
                  src={legalProcessImage} 
                  alt="California legal process for clergy abuse cases" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg mb-4 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer group"
                />
                
                <p className="text-lg leading-relaxed mb-4">
                  Understanding the legal process helps you know what to expect as we pursue maximum compensation for your clergy abuse case. California law provides several avenues for recovery, and our experienced team will pursue all applicable options.
                </p>
              </div>

              <Collapsible open={expandedSections.legalProcess} onOpenChange={() => toggleSection('legalProcess')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Legal Process Details
                    {expandedSections.legalProcess ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>Legal Options Available</h3>
                    
                    <h4>1. Personal Injury Lawsuits</h4>
                    <p>
                      Filed against religious institutions and individual perpetrators. These lawsuits seek compensation for medical expenses, therapy costs, lost wages, pain and suffering, and other damages.
                    </p>
                    
                    <h4>2. Institutional Liability Claims</h4>
                    <p>
                      Claims against religious organizations for negligent hiring, supervision, retention, and cover-up of known abusers. These often result in larger settlements due to institutional responsibility.
                    </p>
                    
                    <h4>3. Criminal Coordination</h4>
                    <p>
                      We coordinate with criminal prosecutors while pursuing civil compensation. Criminal conviction isn't required for civil success - the burden of proof is lower in civil cases.
                    </p>
                    
                    <h3>The Investigation Process</h3>
                    <p>
                      Our investigation includes:
                    </p>
                    <ul>
                      <li>Detailed interviews about your experience</li>
                      <li>Researching the perpetrator's history</li>
                      <li>Uncovering institutional knowledge and cover-ups</li>
                      <li>Locating other survivors and witnesses</li>
                      <li>Reviewing personnel files and church records</li>
                      <li>Working with psychological experts</li>
                    </ul>
                    
                    <h3>Building Your Case</h3>
                    <p>
                      We build strong cases through:
                    </p>
                    <ul>
                      <li>Survivor testimony and impact documentation</li>
                      <li>Expert psychological evaluations</li>
                      <li>Evidence of institutional knowledge</li>
                      <li>Pattern evidence from other survivors</li>
                      <li>Financial impact analysis</li>
                      <li>Character evidence about the perpetrator</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="overflow-hidden">
                    <button
                      onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                      className="w-full text-left p-6 hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Support Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Crisis Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• National Suicide Prevention Lifeline: 988</li>
                      <li>• Crisis Text Line: Text HOME to 741741</li>
                      <li>• RAINN Hotline: 1-800-656-4673</li>
                      <li>• California Youth Crisis Line: 1-800-843-5200</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-primary" />
                      Support Organizations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>• SNAP (Survivors Network)</li>
                      <li>• California Trauma Recovery Centers</li>
                      <li>• Faith Trust Institute</li>
                      <li>• Bishop Accountability</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Don't Wait - Time Limits Apply */}
            <section className="content-section mb-12">
              <Card className="border-l-4 border-l-red-500 bg-red-50">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="w-8 h-8 text-red-500 mt-1 flex-shrink-0" />
                    <div>
                      <h2 className="text-2xl font-bold text-red-700 mb-4">
                        Don't Wait - Time Limits Apply for California Clergy Abuse Cases
                      </h2>
                      <p className="text-red-800 mb-4 text-lg">
                        While California's AB 218 has extended deadlines significantly, time limits still apply. Evidence becomes harder to obtain as time passes, and witnesses' memories fade. The sooner you contact us, the stronger we can build your case.
                      </p>
                      <ul className="list-disc list-inside text-red-800 mb-6 space-y-2">
                        <li>Survivors can file until age 40 or within 5 years of discovery</li>
                        <li>Criminal cases have no statute of limitations for child abuse</li>
                        <li>Evidence preservation is crucial for maximum compensation</li>
                        <li>Early legal action protects your rights and strengthens your case</li>
                      </ul>
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = '/clergy-abuse-case-evaluation'}
                      >
                        Get Free Case Evaluation Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

          </div>

          {/* Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-center text-2xl">3 Ways to Start Your Case</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img 
                    src={sidebarImage} 
                    alt="Legal consultation for clergy abuse cases" 
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                  
                  <div className="space-y-4">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-2"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full flex items-center justify-center gap-2"
                      onClick={() => window.location.href = '/clergy-abuse-case-evaluation'}
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
                  
                  <div className="text-center text-sm text-muted-foreground mt-4">
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
    </div>
  );
};

export default ClergyAbuse;