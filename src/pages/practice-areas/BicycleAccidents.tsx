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
  Car,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Bike
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/bicycle-accidents-hero.jpg';
import legalConsultationImage from '@/assets/practice-areas/bicycle-legal-consultation.jpg';
import medicalCareImage from '@/assets/practice-areas/bicycle-medical-care.jpg';
import accidentSceneImage from '@/assets/practice-areas/bicycle-accident-scene.jpg';
import compensationCalculationImage from '@/assets/practice-areas/bicycle-compensation-calculation.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BicycleAccidents: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'california-law', label: 'CALIFORNIA LAW', icon: BookOpen },
    { id: 'accident-types', label: 'ACCIDENT TYPES', icon: Bike },
    { id: 'injuries', label: 'INJURIES', icon: Heart },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
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
    window.location.href = '/bicycle-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data
  const faqData = [
    {
      question: "What should I do immediately after a bicycle accident?",
      answer: "First priority is safety - get out of traffic if possible. Call 911 for medical attention and police documentation. Never leave the scene. Take photos of your injuries, bike damage, and accident scene. Get driver's license, insurance info, and witness contacts. Seek medical evaluation even if you feel fine - adrenaline masks serious injuries like concussions or internal damage."
    },
    {
      question: "Do cyclists have the same rights as car drivers in California?",
      answer: "Yes, California Vehicle Code Section 21200 establishes that cyclists have all the rights and responsibilities of vehicle drivers. You have the legal right to use any road except freeways, take the full lane when necessary for safety, and expect drivers to treat you as traffic, not an obstacle."
    },
    {
      question: "What is California's Three-Foot Law?",
      answer: "Assembly Bill 1909 requires drivers to change lanes entirely when passing cyclists, not just maintain three feet of distance. This 'change lanes to pass' law recognizes that three feet at high speeds creates dangerous wind turbulence. Violations result in base fines of $233, increasing to $959 if a collision occurs."
    },
    {
      question: "Can I still recover compensation if I wasn't wearing a helmet?",
      answer: "Yes, California only mandates helmets for cyclists under 18. While insurance companies may argue comparative negligence for not wearing a helmet, this doesn't eliminate your right to compensation. The driver's negligence is the primary factor in determining liability and damages."
    },
    {
      question: "How long do I have to file a bicycle accident lawsuit in California?",
      answer: "Two years from the accident date under the statute of limitations. However, start immediately - evidence disappears, witnesses forget, and surveillance footage gets overwritten. Government claims require filing within six months. Missing these deadlines bars recovery forever."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Bicycle Accident Lawyers | Trembach Law Firm"
        description="Experienced bicycle accident attorneys helping injured cyclists in California. Former defense attorney now fighting for maximum compensation. Free consultation."
        canonical="/practice-areas/bicycle-accidents"
      />
      
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
              California Bicycle Accident Lawyers
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
              onClick={() => window.location.href = '/bicycle-case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Bicycle Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  When a 4,000-pound vehicle strikes a 20-pound bicycle, the outcome is never fair. California's roads see over 10,000 bicycle accidents annually, with cyclists facing catastrophic injuries from what should be preventable collisions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the unique challenges cyclists face on California roads. With our background in defense work, we know exactly how insurance companies minimize bicycle accident claims - and how to beat their tactics.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Bicycle Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Bike className="w-5 h-5 mr-2 text-primary" />
                          Cycling Community Understanding
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We understand cycling culture, equipment values, and the devastating impact losing the ability to ride has on cyclists' lives and identities.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Shield className="w-5 h-5 mr-2 text-primary" />
                          Defense Background Advantage
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>Our former defense experience reveals exactly how insurance companies devalue bicycle claims and build defenses against cyclists.</p>
                      </CardContent>
                    </Card>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-red-50 border-2 border-red-200 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-red-800">Get Your Free Consultation</h3>
                <p className="mb-6 text-red-700">Provide some basic information to help us understand your case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-red-800">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                        className="border-red-300 focus:border-red-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-red-800">Injury Type</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger className="border-red-300 focus:border-red-500">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-injuries">Head/Brain Injuries</SelectItem>
                          <SelectItem value="fractures">Bone Fractures</SelectItem>
                          <SelectItem value="road-rash">Road Rash/Abrasions</SelectItem>
                          <SelectItem value="spinal">Spinal Cord Injuries</SelectItem>
                          <SelectItem value="multiple">Multiple Injuries</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
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

            {/* California Law Section */}
            <section id="california-law" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Bicycle Laws & Your Rights</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California has some of the most comprehensive bicycle protection laws in the nation. Understanding your rights as a cyclist is crucial for building a strong compensation claim.
                </p>
              </div>

              <Collapsible open={expandedSections.californiaLaw} onOpenChange={() => toggleSection('californiaLaw')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete California Bicycle Law Details
                    {expandedSections.californiaLaw ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>California Vehicle Code Section 21200 - Equal Rights</h3>
                    <p>
                      This fundamental law establishes that cyclists have all the rights and responsibilities of vehicle drivers. This means:
                    </p>
                    <ul>
                      <li>Right to use any road except freeways</li>
                      <li>Right to take the full lane when necessary for safety</li>
                      <li>Right to be treated as traffic, not an obstacle</li>
                      <li>Protection under all traffic laws</li>
                    </ul>

                    <h3>Assembly Bill 1909 - Three-Foot Law Enhanced</h3>
                    <p>
                      California's "change lanes to pass" law requires drivers to change lanes entirely when passing cyclists, not just maintain three feet of distance. Key provisions:
                    </p>
                    <ul>
                      <li>Complete lane change required when safe</li>
                      <li>If lane change impossible, slow speed and ensure safety</li>
                      <li>Base fine $233 for violations</li>
                      <li>Fine increases to $959 if collision occurs</li>
                    </ul>

                    <h3>Dooring Laws - Vehicle Code Section 22517</h3>
                    <p>
                      California law prohibits opening vehicle doors into bicycle traffic:
                    </p>
                    <ul>
                      <li>Driver must check for cyclists before opening doors</li>
                      <li>Passengers also liable for door-related accidents</li>
                      <li>Creates presumption of negligence against door-opener</li>
                    </ul>

                    <h3>Right-of-Way Protections</h3>
                    <p>Cyclists have protected right-of-way in numerous situations:</p>
                    <ul>
                      <li>In bicycle lanes and paths</li>
                      <li>When proceeding straight through intersections</li>
                      <li>When drivers are making turns</li>
                      <li>At crosswalks when legally present</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Accident Types Section */}
            <section id="accident-types" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common California Bicycle Accident Types</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Car className="w-5 h-5 mr-2 text-red-600" />
                      Right Hook Collisions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">Driver turns right across cyclist's path</p>
                    <p className="text-sm">Often occurs at intersections</p>
                    <p className="text-sm">Driver typically fails to check mirrors/blind spots</p>
                    <p className="text-sm">Can cause severe head and torso injuries</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <MapPin className="w-5 h-5 mr-2 text-red-600" />
                      Dooring Accidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">Car door opened into cyclist's path</p>
                    <p className="text-sm">Common in urban areas with street parking</p>
                    <p className="text-sm">Often causes cyclists to swerve into traffic</p>
                    <p className="text-sm">Can result in secondary vehicle collisions</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Left Cross Accidents
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">Driver turns left across cyclist's path</p>
                    <p className="text-sm">High-speed impacts at intersections</p>
                    <p className="text-sm">Driver fails to yield right-of-way</p>
                    <p className="text-sm">Often results in catastrophic injuries</p>
                  </CardContent>
                </Card>

                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Clock className="w-5 h-5 mr-2 text-red-600" />
                      Rear-End Collisions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">Vehicle strikes cyclist from behind</p>
                    <p className="text-sm">Often involves distracted driving</p>
                    <p className="text-sm">Can launch cyclist forward violently</p>
                    <p className="text-sm">Spinal and head injuries common</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Injuries Section */}
            <section id="injuries" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Bicycle Accident Injuries</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Bicycle accidents often result in severe injuries due to the lack of protection cyclists have compared to motor vehicle occupants. Understanding injury patterns helps establish appropriate compensation demands.
                </p>
              </div>

              <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show Complete Injury Information
                    {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <Heart className="w-5 h-5 mr-2" />
                          Head and Brain Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Traumatic brain injury (TBI)</p>
                        <p>• Concussions and post-concussion syndrome</p>
                        <p>• Skull fractures</p>
                        <p>• Facial fractures and lacerations</p>
                        <p>• Loss of consciousness</p>
                        <p>• Cognitive impairment</p>
                        <p>• Memory and concentration problems</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <Shield className="w-5 h-5 mr-2" />
                          Spinal Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Spinal cord injuries</p>
                        <p>• Vertebrae fractures</p>
                        <p>• Herniated discs</p>
                        <p>• Paralysis (partial or complete)</p>
                        <p>• Chronic back and neck pain</p>
                        <p>• Loss of sensation</p>
                        <p>• Reduced mobility</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <Users className="w-5 h-5 mr-2" />
                          Extremity Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Broken bones (arms, legs, ribs)</p>
                        <p>• Joint dislocations</p>
                        <p>• Ligament and tendon tears</p>
                        <p>• Crush injuries</p>
                        <p>• Amputation</p>
                        <p>• Nerve damage</p>
                        <p>• Loss of function</p>
                      </CardContent>
                    </Card>

                    <Card className="glass-card">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-600">
                          <AlertTriangle className="w-5 h-5 mr-2" />
                          Soft Tissue Injuries
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2 text-sm">
                        <p>• Road rash and abrasions</p>
                        <p>• Deep lacerations</p>
                        <p>• Muscle strains</p>
                        <p>• Bruising and contusions</p>
                        <p>• Scarring and disfigurement</p>
                        <p>• Skin grafts required</p>
                        <p>• Permanent scarring</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Long-term Impacts</h3>
                    <div className="prose prose-lg max-w-none">
                      <p>
                        Bicycle accident injuries often have lasting consequences beyond the initial trauma:
                      </p>
                      <ul>
                        <li><strong>Chronic Pain:</strong> Ongoing pain affecting daily activities and quality of life</li>
                        <li><strong>Mobility Limitations:</strong> Reduced ability to walk, exercise, or perform job duties</li>
                        <li><strong>Psychological Impact:</strong> PTSD, anxiety, depression, and fear of cycling</li>
                        <li><strong>Career Impact:</strong> Inability to return to previous employment or reduced earning capacity</li>
                        <li><strong>Relationship Strain:</strong> Impact on family relationships and social connections</li>
                        <li><strong>Financial Burden:</strong> Ongoing medical expenses and lost income</li>
                      </ul>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Don't Wait - Time Limits Section */}
            <section id="time-limits" className="content-section mb-12">
              <div className="bg-gradient-to-r from-red-600/10 to-red-500/5 border-l-4 border-red-600 p-6 rounded-lg">
                <h2 className="text-3xl font-bold text-red-600 mb-6 flex items-center">
                  <Clock className="w-8 h-8 mr-3" />
                  Don't Wait - Time Limits Apply for California Bicycle Accidents
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg font-semibold text-red-700 mb-4">
                    California law imposes strict deadlines for filing bicycle accident claims. Missing these deadlines can permanently bar your right to compensation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-red-200 bg-red-50/50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                          <Calendar className="w-5 h-5 mr-2" />
                          Statute of Limitations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-semibold text-red-800 mb-2">2 Years from Accident Date</p>
                        <p className="text-sm text-red-700">This applies to personal injury claims against the at-fault driver and their insurance company.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-red-200 bg-red-50/50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                          <Building className="w-5 h-5 mr-2" />
                          Government Claims
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-semibold text-red-800 mb-2">6 Months for Government Entities</p>
                        <p className="text-sm text-red-700">Claims against cities, counties, or state for dangerous road conditions have much shorter deadlines.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Critical Evidence Disappears Quickly
                    </h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Surveillance footage gets overwritten (often within 30-90 days)</li>
                      <li>• Witness memories fade and contact information is lost</li>
                      <li>• Physical evidence at accident scene gets disturbed</li>
                      <li>• Vehicle damage gets repaired, eliminating crucial evidence</li>
                      <li>• Road conditions change, making reconstruction difficult</li>
                    </ul>
                  </div>

                  <h3>Why Immediate Action is Essential</h3>
                  <ul>
                    <li><strong>Evidence Preservation:</strong> Our team can immediately secure surveillance footage, witness statements, and physical evidence</li>
                    <li><strong>Insurance Deadlines:</strong> Insurance companies have their own reporting requirements and deadlines</li>
                    <li><strong>Medical Documentation:</strong> Early legal involvement ensures proper medical documentation for your claim</li>
                    <li><strong>Investigation Time:</strong> Complex bicycle accidents require thorough investigation to identify all liable parties</li>
                    <li><strong>Expert Analysis:</strong> Accident reconstruction experts and medical professionals need time to analyze your case</li>
                  </ul>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold text-green-800 mb-2">Free Consultation - No Risk</h4>
                    <p className="text-sm text-green-700">
                      Don't let time limits jeopardize your case. Contact us today for a free, no-obligation consultation. We'll review your case, explain your rights, and ensure all deadlines are met while you focus on recovery.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Compensation Section */}
            <section id="compensation" className="content-section mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Comprehensive Compensation for Cyclists</h2>
              
              <div className="mb-6">
                <img src={compensationCalculationImage} alt="Bicycle accident compensation calculation" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              
              <div className="prose prose-lg max-w-none mb-8">
                <p className="text-lg leading-relaxed mb-6">
                  Bicycle accident cases require specialized understanding of cycling culture, infrastructure, and the unique vulnerabilities cyclists face. We ensure comprehensive compensation addressing all aspects of impact.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <DollarSign className="w-5 h-5 mr-2 text-red-600" />
                      Economic Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Medical treatment costs</p>
                    <p className="text-sm">• Lost wages and benefits</p>
                    <p className="text-sm">• Diminished earning capacity</p>
                    <p className="text-sm">• Bicycle and equipment replacement</p>
                    <p className="text-sm">• Transportation alternatives</p>
                    <p className="text-sm">• Home and workplace modifications</p>  
                    <p className="text-sm">• Ongoing rehabilitation costs</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Non-Economic Damages
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-sm">• Pain and suffering</p>
                    <p className="text-sm">• Loss of cycling enjoyment</p>
                    <p className="text-sm">• Disfigurement and scarring</p>
                    <p className="text-sm">• Emotional distress</p>
                    <p className="text-sm">• Loss of life activities</p>
                    <p className="text-sm">• Family relationship impact</p>
                    <p className="text-sm">• Community connection loss</p>
                  </CardContent>
                </Card>
              </div>

              {/* Compensation Calculator Disclaimer */}
              <Card className="glass-card border-orange-200 bg-orange-50/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-800">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Important Compensation Disclaimer
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-orange-700 mb-3">
                    Compensation amounts vary significantly based on case-specific factors including injury severity, fault determination, available insurance, and individual circumstances. Our <a href="/bicycle-compensation-calculator" className="text-red-600 hover:underline font-semibold">compensation calculator</a> provides estimates only and should not be considered a guarantee of recovery.
                  </p>
                  <p className="text-sm text-orange-700">
                    For an accurate assessment of your potential compensation, schedule a free consultation with our experienced bicycle accident attorneys who can evaluate your specific circumstances and provide personalized guidance.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-16">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader 
                      className="cursor-pointer hover:bg-muted/50 transition-colors"
                      onClick={() => toggleFaq(index)}
                    >
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? (
                          <ChevronUp className="w-5 h-5 text-red-600" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-red-600" />
                        )}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Contact Card */}
              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-center text-primary">
                    Free Case Evaluation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      Get expert legal advice about your bicycle accident case. No obligation consultation.
                    </p>
                    <div className="space-y-3">
                      <Button className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70" onClick={() => window.location.href = '/bicycle-case-evaluation'}>
                        <Scale className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Get Case Evaluation
                      </Button>
                      <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = '/bicycle-medical-guidance'}>
                        <Stethoscope className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Medical Guidance
                      </Button>
                      <Button variant="outline" className="w-full group hover:bg-primary hover:text-primary-foreground" onClick={() => window.location.href = '/bicycle-compensation-calculator'}>
                        <DollarSign className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                        Calculate Compensation
                      </Button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Phone className="w-4 h-4 mr-1" />
                        <span>(818) 123-4567</span>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-2">
                      Available 24/7 for bicycle accident cases
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-primary" />
                    Quick Facts
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>CA Annual Bike Accidents:</span>
                    <span className="font-semibold">10,000+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Statute of Limitations:</span>
                    <span className="font-semibold">2 Years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Three-Foot Law:</span>
                    <span className="font-semibold">Mandatory</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Our Success Rate:</span>
                    <span className="font-semibold text-green-600">95%+</span>
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

export default BicycleAccidents;