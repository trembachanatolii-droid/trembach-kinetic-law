import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  FileText, 
  Shield, 
  Users, 
  Trophy, 
  AlertTriangle, 
  ChevronDown, 
  ChevronUp,
  Clock,
  DollarSign,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import ThreeDVisualEffects from '@/components/3DVisualEffects';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Images
import heroImage from '@/assets/personal-injury-hero-bg.jpg';
import sidebarImage from '@/assets/personal-injury-sidebar.jpg';
import diagnosisImage from '@/assets/personal-injury-diagnosis-process.jpg';
import legalProcessImage from '@/assets/personal-injury-legal-process.jpg';
import injurySitesImage from '@/assets/california-injury-sites.jpg';
import medicalFacilityImage from '@/assets/personal-injury-medical-facility.jpg';
import overviewImage from '@/assets/personal-injury-overview.jpg';
import processImage from '@/assets/personal-injury-process.jpg';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const GeneralPersonalInjury: React.FC = () => {
  useScrollRestoration();
  
  const [expandedSections, setExpandedSections] = useState<{[key: string]: boolean}>({
    overview: false,
    'injury-process': false,
    'legal-process': false
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    incidentType: '',
    incidentDate: '',
    injuries: '',
    medicalAttention: '',
    details: ''
  });

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Animate content sections on scroll
    const sections = contentRef.current?.querySelectorAll('.content-section');
    
    sections?.forEach((section) => {
      gsap.fromTo(section, 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.95
        }, 
        {
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const seo = {
    title: "California Personal Injury Attorney | Trembach Law Firm",
    description: "Experienced California personal injury lawyer fighting for maximum compensation. Former insurance defense attorney now helping injury victims. Free consultation - No fees unless we win.",
    keywords: "personal injury attorney California, car accident lawyer, slip and fall attorney, medical malpractice lawyer, wrongful death attorney, California injury law",
    canonical: "https://www.trembachlawfirm.com/practice-areas/general-personal-injury"
  };

  return (
    <>
      <SEO {...seo} />
      <GoBack />
      
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section 
          className="relative bg-gradient-to-br from-primary/90 to-primary/70 text-white py-32 px-8"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <ThreeDVisualEffects>
            <div className="max-w-6xl mx-auto text-center relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-white animate-fade-in">
                California Personal Injury Attorney
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed text-white">
                Former Insurance Defense Attorney Now Fighting for Injury Victims
              </p>
              
              <div className="prose prose-lg max-w-none text-white mb-8">
                <p className="text-lg leading-relaxed text-white">
                  If you've been injured due to someone else's negligence, you may be entitled to significant compensation for medical expenses, lost wages, pain and suffering, and other damages. Personal injury law in California provides strong protections for injury victims, but navigating the legal system can be complex and overwhelming.
                </p>
                
                <p className="text-lg leading-relaxed text-white">
                  At Trembach Law Firm, we understand the devastating impact personal injuries have on victims and families. With our unique background defending companies and insurance carriers, we know exactly how they evaluate and minimize claims. This insider knowledge allows us to anticipate their strategies and build stronger cases for our clients.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-8 py-4 shadow-lg hover-scale animate-fade-in"
                  asChild
                >
                  <Link to="/practice-areas/general-personal-injury/case-evaluation">
                    Free Case Evaluation
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-white text-white hover:bg-white hover:text-primary font-bold text-lg px-8 py-4 shadow-lg hover-scale animate-fade-in"
                  asChild
                >
                  <a href="tel:+18181234567" className="text-white hover:text-primary">Call (818) 123-4567</a>
                </Button>
              </div>
            </div>
          </ThreeDVisualEffects>
        </section>

        {/* Main Content with Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <main className="lg:col-span-3" ref={contentRef}>
              {/* Overview Section */}
              <section className="content-section mb-12">
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed">
                    Personal injury cases encompass a wide range of incidents where someone is hurt due to another party's negligence or wrongful conduct. These cases can involve motor vehicle accidents, slip and falls, medical malpractice, product defects, and many other situations where preventable harm occurs.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    At Trembach Law Firm, we understand the devastating impact personal injuries have on victims and families. With our unique background defending companies and insurance carriers, we know exactly how they evaluate and minimize claims. This insider knowledge allows us to anticipate their strategies and build stronger cases for our clients.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground hover:text-foreground">
                      Learn More About Our California Personal Injury Practice
                      {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                   <CollapsibleContent className="space-y-6">
                     <div className="mb-8">
                       <img src={overviewImage} alt="Personal injury legal services overview" className="w-full h-64 object-cover rounded-lg shadow-lg mb-6" />
                       <p className="text-lg mb-6 leading-relaxed">
                         Personal injury law encompasses a broad spectrum of accidents and incidents where another party's negligence, recklessness, or intentional actions cause harm. From motor vehicle accidents to slip and falls, from defective products to medical malpractice, personal injury cases require thorough investigation, expert analysis, and aggressive advocacy to ensure maximum compensation.
                       </p>
                     </div>
                     <ThreeDVisualEffects>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                              <Shield className="w-5 h-5 mr-2 text-primary" />
                              Former Defense Experience
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Our unique background defending insurance companies gives us insider knowledge of their strategies, allowing us to build stronger cases and secure better settlements for our clients.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                              <Users className="w-5 h-5 mr-2 text-primary" />
                              Personalized Attention
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>Every client receives direct access to experienced attorneys, not just paralegals or case managers. We maintain reasonable caseloads to ensure quality representation.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                              <Trophy className="w-5 h-5 mr-2 text-primary" />
                              Proven Results
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>We prepare every case for trial, even though most settle out of court. This comprehensive preparation leads to better outcomes and higher settlement offers.</p>
                          </CardContent>
                        </Card>
                        
                        <Card className="glass-card hover-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                          <CardHeader>
                            <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                              <AlertTriangle className="w-5 h-5 mr-2 text-destructive" />
                              No Upfront Costs
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p>We work on contingency - you pay nothing unless we recover compensation. We advance all case costs and only get paid when you do.</p>
                          </CardContent>
                        </Card>
                      </div>
                    </ThreeDVisualEffects>
                    
                    <div className="prose prose-lg max-w-none">
                      <h3>Types of Personal Injury Cases We Handle</h3>
                      <ul>
                        <li>Motor vehicle accidents (cars, trucks, motorcycles, bicycles)</li>
                        <li>Slip and fall accidents on dangerous premises</li>
                        <li>Medical malpractice and hospital negligence</li>
                        <li>Product liability for defective products</li>
                        <li>Dog bite and animal attack injuries</li>
                        <li>Construction and workplace accidents with third-party liability</li>
                        <li>Wrongful death cases caused by negligence</li>
                      </ul>
                      
                      <p>
                        We investigate every potential source of liability to ensure no responsible party escapes accountability for your injuries. This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various legal channels including insurance coverage and government benefits coordination.
                      </p>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Case Evaluation Section */}
              <section id="evaluation" className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6 text-2xl">Free Case Evaluation</h2>
                
                <ThreeDVisualEffects>
                  <div className="bg-muted p-8 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                    <p className="mb-6 text-base">Provide some basic information to help us understand your case better.</p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-base">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="text-base"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="text-base"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="email" className="text-base">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="text-base"
                          required
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="incidentType" className="text-base">Type of Incident *</Label>
                        <Select value={formData.incidentType} onValueChange={(value) => handleInputChange('incidentType', value)}>
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select incident type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="auto-accident">Motor Vehicle Accident</SelectItem>
                            <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                            <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                            <SelectItem value="product-liability">Product Defect</SelectItem>
                            <SelectItem value="dog-bite">Dog Bite</SelectItem>
                            <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="incidentDate" className="text-base">Date of Incident</Label>
                        <Input
                          id="incidentDate"
                          type="date"
                          value={formData.incidentDate}
                          onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                          className="text-base"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="medicalAttention" className="text-base">Did you seek medical attention?</Label>
                        <Select value={formData.medicalAttention} onValueChange={(value) => handleInputChange('medicalAttention', value)}>
                          <SelectTrigger className="text-base">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency Room</SelectItem>
                            <SelectItem value="hospital-admission">Hospital Admission</SelectItem>
                            <SelectItem value="doctor-visit">Doctor Visit</SelectItem>
                            <SelectItem value="urgent-care">Urgent Care</SelectItem>
                            <SelectItem value="no-medical">No Medical Treatment</SelectItem>
                            <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="details" className="text-base">Brief Description of What Happened</Label>
                        <Textarea
                          id="details"
                          value={formData.details}
                          onChange={(e) => handleInputChange('details', e.target.value)}
                          rows={4}
                          className="text-base"
                          placeholder="Please describe the incident and your injuries..."
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold text-base py-3">
                        Submit Case Information
                      </Button>
                    </form>
                  </div>
                </ThreeDVisualEffects>
              </section>

              {/* Understanding Your Injury Section */}
              <section id="injury-process" className="content-section mb-12">
                <img 
                  src={diagnosisImage} 
                  alt="Personal Injury Medical Process"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <h2 className="text-3xl font-bold text-red-600 mb-6 text-2xl">Understanding Your Personal Injury</h2>
                
                <Collapsible open={expandedSections['injury-process']} onOpenChange={() => toggleSection('injury-process')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground hover:text-foreground">
                      Learn More About Personal Injury Medical Evaluation
                      {expandedSections['injury-process'] ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <ThreeDVisualEffects>
                      <div className="prose prose-lg max-w-none">
                        <h3 className="text-lg">Common Personal Injury Symptoms</h3>
                        <p className="text-base">Personal injury symptoms can vary widely depending on the type and severity of the incident. Many injuries don't manifest symptoms immediately, which is why prompt medical attention is crucial:</p>
                        
                        <h4 className="text-base">Physical Symptoms to Watch For:</h4>
                        <ul className="text-base">
                          <li>Persistent pain or discomfort</li>
                          <li>Headaches or dizziness</li>
                          <li>Limited range of motion</li>
                          <li>Numbness or tingling</li>
                          <li>Swelling or bruising</li>
                          <li>Difficulty sleeping due to pain</li>
                          <li>Muscle weakness or stiffness</li>
                        </ul>
                        
                        <h4 className="text-base">Emotional and Cognitive Signs:</h4>
                        <ul className="text-base">
                          <li>Anxiety or depression</li>
                          <li>Memory problems or confusion</li>
                          <li>Difficulty concentrating</li>
                          <li>Mood changes or irritability</li>
                          <li>Fear of driving or specific activities</li>
                          <li>Post-traumatic stress symptoms</li>
                        </ul>
                        
                        <p className="text-base">
                          Seeking immediate medical attention serves multiple critical purposes beyond your health. Insurance companies often argue that delayed treatment indicates injuries weren't severe or weren't caused by the accident. Early medical intervention creates a clear medical record linking your injuries to the incident.
                        </p>
                        
                        <p className="text-base">
                          Additionally, some injuries like traumatic brain injuries or internal bleeding can be life-threatening if not promptly diagnosed and treated. What seems like a minor injury can develop into serious complications without proper medical evaluation.
                        </p>
                      </div>
                    </ThreeDVisualEffects>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Legal Process Section */}
              <section id="legal-process" className="content-section mb-12">
                <img 
                  src={legalProcessImage} 
                  alt="Personal Injury Legal Process"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <h2 className="text-3xl font-bold text-red-600 mb-6 text-2xl">The Personal Injury Legal Process</h2>
                
                <Collapsible open={expandedSections['legal-process']} onOpenChange={() => toggleSection('legal-process')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4 text-foreground hover:text-foreground">
                      Learn More About How We Handle Your Case
                      {expandedSections['legal-process'] ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <ThreeDVisualEffects>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <Card className="hover-card hover:scale-105 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-green-600 text-base">Investigation & Evidence Gathering</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li>• Accident scene reconstruction</li>
                              <li>• Medical record analysis</li>
                              <li>• Witness interviews</li>
                              <li>• Expert witness consultation</li>
                            </ul>
                          </CardContent>
                        </Card>
                        
                        <Card className="hover-card hover:scale-105 transition-all duration-300">
                          <CardHeader>
                            <CardTitle className="text-green-600 text-base">Demand & Negotiation</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <ul className="space-y-2 text-sm">
                              <li>• Comprehensive demand package</li>
                              <li>• Insurance company negotiations</li>
                              <li>• Settlement discussions</li>
                              <li>• Alternative dispute resolution</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <div className="prose prose-lg max-w-none">
                        <h3 className="text-lg">What Sets Our Approach Apart</h3>
                        <p className="text-base">
                          Our former defense experience provides unique insights into how insurance companies evaluate personal injury claims. We understand their internal settlement authority levels, common defense strategies, and pressure points that lead to better offers.
                        </p>
                        
                        <p className="text-base">
                          We prepare every case as if it's going to trial, even though most settle out of court. This thorough preparation demonstrates to insurance companies that we're serious about pursuing maximum compensation and aren't afraid of litigation when necessary.
                        </p>
                      </div>
                    </ThreeDVisualEffects>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* FAQ Section */}
              <section id="faq" className="content-section mb-12">
                <img 
                  src={injurySitesImage} 
                  alt="California Personal Injury Statistics"
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                
                <h2 className="text-3xl font-bold text-red-600 mb-8 text-2xl">Frequently Asked Personal Injury Questions</h2>
                
                <ThreeDVisualEffects>
                  <div className="space-y-4">
                    {[
                      {
                        question: "How long do I have to file a personal injury claim in California?",
                        answer: "California's statute of limitations for most personal injury cases is two years from the date of injury. However, there are exceptions. For government claims, you typically have only six months to file a claim. It's crucial to act quickly as evidence can disappear and witnesses' memories fade."
                      },
                      {
                        question: "What damages can I recover in a personal injury case?",
                        answer: "You may be entitled to economic damages (medical bills, lost wages, future medical costs), non-economic damages (pain and suffering, emotional distress, loss of enjoyment of life), and in rare cases involving extreme negligence, punitive damages. California doesn't cap most damages except in medical malpractice cases."
                      },
                      {
                        question: "Do I need to go to court for my personal injury case?",
                        answer: "Most personal injury cases settle out of court through negotiations. However, we prepare every case as if it will go to trial, which often leads to better settlement offers. If we can't reach a fair settlement, we're fully prepared to take your case to court."
                      },
                      {
                        question: "How much does it cost to hire a personal injury attorney?",
                        answer: "We work on a contingency fee basis, meaning you pay no attorney fees unless we recover compensation for you. We also advance all case costs, so you don't pay anything out of pocket. Our fee is a percentage of any recovery we obtain for you."
                      },
                      {
                        question: "What if I was partially at fault for my injury?",
                        answer: "California follows comparative negligence law, meaning you can still recover damages even if you were partially at fault. Your compensation will be reduced by your percentage of fault. For example, if you were 20% at fault and awarded $100,000, you'd receive $80,000."
                      },
                      {
                        question: "How long does a personal injury case take to resolve?",
                        answer: "Case timelines vary widely depending on factors like injury severity, case complexity, and whether the case goes to trial. Simple cases might resolve in a few months, while complex cases can take 1-3 years. We work efficiently while ensuring we don't settle for less than fair value."
                      },
                      {
                        question: "What should I do immediately after a personal injury accident?",
                        answer: "Seek immediate medical attention, even if injuries seem minor. Document the scene with photos if possible. Get contact information from witnesses. Report the incident to police if required. Avoid admitting fault or discussing details with insurance adjusters until you consult an attorney."
                      },
                      {
                        question: "Can I handle my personal injury case without an attorney?",
                        answer: "While legally possible, it's rarely advisable. Insurance companies have teams of lawyers and adjusters working to minimize payouts. Studies show that injury victims with attorneys typically receive significantly higher settlements than those who represent themselves."
                      },
                      {
                        question: "What if the person who injured me doesn't have insurance?",
                        answer: "We explore all potential sources of compensation, including your own uninsured/underinsured motorist coverage, other potentially liable parties, and the at-fault party's personal assets. Many cases have multiple sources of recovery that aren't immediately obvious."
                      },
                      {
                        question: "How do you determine the value of my personal injury case?",
                        answer: "Case value depends on factors including medical expenses, lost wages, future medical needs, pain and suffering, disability, and how the injury impacts your daily life. We use our experience, similar case results, and economic analysis to value your claim accurately."
                      }
                    ].map((faq, index) => (
                      <Card key={index} className="hover-card">
                        <CardHeader>
                          <CardTitle className="text-lg text-foreground">{faq.question}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-base text-muted-foreground">{faq.answer}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </ThreeDVisualEffects>
              </section>

              {/* Don't Wait - Time Limits Apply Section */}
              <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-8 rounded-lg shadow-2xl mb-12">
                <ThreeDVisualEffects>
                  <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-6 text-white">Don't Wait - Time Limits Apply for California Personal Injury Claims</h2>
                    <p className="text-xl mb-8 leading-relaxed text-white">
                      California's statute of limitations gives you limited time to file your personal injury claim. In most cases, you have just 2 years from the date of injury to take legal action.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-3 text-white">Personal Injury Cases</h3>
                        <p className="text-lg text-white">2 years from date of injury</p>
                      </div>
                      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-3 text-white">Government Claims</h3>
                        <p className="text-lg text-white">6 months to file claim</p>
                      </div>
                      <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                        <h3 className="text-2xl font-bold mb-3 text-white">Wrongful Death</h3>
                        <p className="text-lg text-white">2 years from date of death</p>
                      </div>
                    </div>
                    
                    <p className="text-lg mb-8 text-white">
                      Missing these deadlines means losing your right to compensation forever. Evidence disappears, witnesses forget details, and medical records become harder to obtain. The sooner you act, the stronger your case becomes.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4"
                        asChild
                      >
                        <Link to="/practice-areas/general-personal-injury/case-evaluation">
                          Get Free Case Review Now
                        </Link>
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="border-2 border-white text-white hover:bg-white hover:text-red-600 font-bold text-lg px-8 py-4"
                        asChild
                      >
                        <a href="tel:+18181234567" className="text-white hover:text-red-600 flex items-center justify-center">Call (818) 123-4567</a>
                      </Button>
                    </div>
                  </div>
                </ThreeDVisualEffects>
              </section>
            </main>

            {/* Sticky Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                <Card 
                  className="glass-card shadow-2xl border-primary/20"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${sidebarImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <CardHeader className="text-center">
                    <CardTitle className="text-white text-xl mb-4">
                      3 Ways to Start Your Case
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ThreeDVisualEffects>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 text-base shadow-lg hover-scale"
                        asChild
                      >
                        <Link to="/practice-areas/general-personal-injury/case-evaluation">
                          <FileText className="w-5 h-5 mr-2" />
                          Free Case Evaluation
                        </Link>
                      </Button>
                      
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-base shadow-lg hover-scale"
                        asChild
                      >
                         <a href="tel:+18181234567" className="flex items-center justify-center text-white hover:text-white">
                           <Phone className="w-5 h-5 mr-2" />
                           Call (818) 123-4567
                         </a>
                      </Button>
                      
                      <Button 
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-base shadow-lg hover-scale"
                        asChild
                      >
                        <Link to="/practice-areas/general-personal-injury/compensation-calculator">
                          <DollarSign className="w-5 h-5 mr-2" />
                          Compensation Calculator
                        </Link>
                      </Button>
                      
                      <div className="text-center pt-4">
                        <Badge variant="secondary" className="bg-white/20 text-white text-sm py-2 px-4">
                          No Fees Unless We Win
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 pt-4 text-white text-sm">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-primary" />
                          <span>Available 24/7</span>
                        </div>
                        <div className="flex items-center">
                          <Scale className="w-4 h-4 mr-2 text-primary" />
                          <span>Former Defense Attorney</span>
                        </div>
                        <div className="flex items-center">
                          <Shield className="w-4 h-4 mr-2 text-primary" />
                          <span>California Licensed</span>
                        </div>
                      </div>
                    </ThreeDVisualEffects>
                  </CardContent>
                </Card>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeneralPersonalInjury;