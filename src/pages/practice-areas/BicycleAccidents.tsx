import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
import { Phone, Mail, MessageCircle, Star, ChevronDown, ChevronUp, Heart, Shield, Scale, Clock, Users, Award, FileText, AlertTriangle, Stethoscope, Building, Map, ArrowLeft, Car, MapPin, Calendar, DollarSign, BookOpen, HelpCircle, Bike } from 'lucide-react';
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
    name: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentType: '',
    bicycleType: '',
    injuryType: '',
    medicalTreatment: '',
    insuranceClaim: '',
    description: ''
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Bicycle Accidents Form Data:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours to discuss your bicycle accident case.');
  };
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const tabs: TabSection[] = [{
    id: 'overview',
    label: 'OVERVIEW',
    icon: FileText
  }, {
    id: 'evaluation',
    label: 'CASE EVALUATION',
    icon: Scale
  }, {
    id: 'california-law',
    label: 'CALIFORNIA LAW',
    icon: BookOpen
  }, {
    id: 'accident-types',
    label: 'ACCIDENT TYPES',
    icon: Bike
  }, {
    id: 'injuries',
    label: 'INJURIES',
    icon: Heart
  }, {
    id: 'time-limits',
    label: 'TIME LIMITS',
    icon: Clock
  }, {
    id: 'compensation',
    label: 'COMPENSATION',
    icon: DollarSign
  }, {
    id: 'faq',
    label: 'FAQ',
    icon: HelpCircle
  }, {
    id: 'resources',
    label: 'RESOURCES',
    icon: Building
  }];
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'), {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 0.1,
        ease: 'power2.out'
      });
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'), {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%'
        }
      });
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
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/bicycle-case-evaluation';
  };
  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50 Questions
  const faqData = [{
    question: "What should I do immediately after a bicycle accident?",
    answer: "First priority is safety - get out of traffic if possible. Call 911 for medical attention and police documentation. Never leave the scene. Take photos of your injuries, bike damage, and accident scene. Get driver's license, insurance info, and witness contacts. Seek medical evaluation even if you feel fine - adrenaline masks serious injuries like concussions or internal damage."
  }, {
    question: "Do cyclists have the same rights as car drivers in California?",
    answer: "Yes, California Vehicle Code Section 21200 establishes that cyclists have all the rights and responsibilities of vehicle drivers. You have the legal right to use any road except freeways, take the full lane when necessary for safety, and expect drivers to treat you as traffic, not an obstacle."
  }, {
    question: "What is California's Three-Foot Law?",
    answer: "Assembly Bill 1909 requires drivers to change lanes entirely when passing cyclists, not just maintain three feet of distance. This 'change lanes to pass' law recognizes that three feet at high speeds creates dangerous wind turbulence. Violations result in base fines of $233, increasing to $959 if a collision occurs."
  }, {
    question: "Can I still recover compensation if I wasn't wearing a helmet?",
    answer: "Yes, California only mandates helmets for cyclists under 18. While insurance companies may argue comparative negligence for not wearing a helmet, this doesn't eliminate your right to compensation. The driver's negligence is the primary factor in determining liability and damages."
  }, {
    question: "How long do I have to file a bicycle accident lawsuit in California?",
    answer: "Two years from the accident date under the statute of limitations. However, start immediately - evidence disappears, witnesses forget, and surveillance footage gets overwritten. Government claims require filing within six months. Missing these deadlines bars recovery forever."
  }, {
    question: "Do I need to call the police after a bike accident?",
    answer: "Yes. A police report documents fault, injuries, and witness information. Politely insist on a report even if the driver wants to 'work it out'. The report number is critical for insurance claims."
  }, {
    question: "What if the driver fled the scene (hit-and-run)?",
    answer: "Call 911 immediately. Provide any vehicle details and witness contacts. Your own uninsured motorist (UM) coverage may apply. We can help secure nearby surveillance footage quickly before it's overwritten."
  }, {
    question: "Should I see a doctor even if I feel okay?",
    answer: "Yes. Many serious injuries (TBI, internal bleeding, spinal trauma) are delayed. Early medical documentation is vital for both your health and your claim."
  }, {
    question: "Should I speak with the insurance company?",
    answer: "Do not give a recorded statement before speaking with a lawyer. Adjusters are trained to minimize claims. We handle communications to protect your case."
  }, {
    question: "What if I was partially at fault?",
    answer: "California follows comparative negligence—you can still recover damages reduced by your percentage of fault. Never assume fault without legal review."
  }, {
    question: "What damages can I recover in a bicycle accident case?",
    answer: "Medical bills, future care, lost wages, reduced earning capacity, pain and suffering, disfigurement, loss of enjoyment of life, bike/equipment replacement, and more."
  }, {
    question: "How much is my bicycle accident case worth?",
    answer: "Case value depends on injury severity, permanence, medical costs, lost income, pain levels, and fault clarity. Use our calculator for an estimate, then get a personalized evaluation."
  }, {
    question: "How long will my case take?",
    answer: "Most cases resolve within 6–18 months depending on treatment duration, investigation needs, insurance cooperation, and whether litigation is required."
  }, {
    question: "What evidence should I preserve?",
    answer: "Photos/videos, damaged bike and gear, GPS/Strava data, medical records, receipts, witness contacts, repair estimates, and your cycling history."
  }, {
    question: "What if the driver has no or minimal insurance?",
    answer: "Your UM/UIM coverage can step in. We also investigate other liable parties, including employers, commercial policies, and dangerous road conditions."
  }, {
    question: "Are e-bikes treated the same under California law?",
    answer: "Generally yes, but Class 3 e-bikes have additional restrictions. Liability rules and compensation rights are similar—contact us for case-specific guidance."
  }, {
    question: "Do I need a lawyer? How are fees handled?",
    answer: "Serious bicycle cases benefit greatly from legal representation. We work on contingency—no fees unless we win. Our early involvement preserves evidence and maximizes recovery."
  }, {
    question: "What if I was riding in a bike lane?",
    answer: "Bike lanes provide cyclists with enhanced legal protections. Drivers who enter bike lanes illegally face additional penalties and presumptions of negligence in accident cases."
  }, {
    question: "Can I sue for a bicycle accident on a sidewalk?",
    answer: "Sidewalk cycling legality varies by city. Even where prohibited, you may still have claims against negligent drivers. We analyze local ordinances and liability factors."
  }, {
    question: "What about accidents involving ride-share vehicles?",
    answer: "Uber/Lyft carry substantial insurance coverage. Commercial vehicle standards and corporate liability may apply, potentially increasing available compensation."
  }, {
    question: "How do bicycle accident settlements work?",
    answer: "Most cases settle without trial. We negotiate maximum compensation while you focus on recovery. Settlement includes all damages: medical, economic, and pain/suffering."
  }, {
    question: "What if the accident happened in a bike race or group ride?",
    answer: "Recreational cycling accidents still allow liability claims against negligent drivers. Waivers typically don't protect against third-party vehicle negligence."
  }, {
    question: "Can weather conditions affect my bicycle accident case?",
    answer: "Weather may be a factor but doesn't eliminate driver responsibility. Poor conditions require extra caution from motorists, not cyclists accepting unnecessary risk."
  }, {
    question: "What about bicycle accidents involving children?",
    answer: "Children receive special legal protections. Age-appropriate behavior standards apply, and parents can typically pursue claims on behalf of injured minor cyclists."
  }, {
    question: "How are bicycle accident medical bills handled?",
    answer: "Use health insurance initially, then seek reimbursement through your claim. We coordinate with providers and negotiate medical liens to maximize your net recovery."
  }, {
    question: "What if I was using bike-share or rental bike?",
    answer: "Rental status doesn't affect your right to compensation from negligent drivers. The bike company's insurance may provide additional coverage for equipment damage."
  }, {
    question: "Can I claim compensation for my damaged bicycle and gear?",
    answer: "Yes. High-end cycling equipment replacement costs are recoverable damages. We document fair market value and replacement costs for bikes, helmets, clothing, and electronics."
  }, {
    question: "What if the driver claims they didn't see me?",
    answer: "Driver inattention is negligence, not a defense. We investigate sight lines, lighting conditions, and whether the driver was distracted (phone use, etc.)."
  }, {
    question: "How do intersection bicycle accidents work legally?",
    answer: "Intersections have complex right-of-way rules. We analyze traffic signals, signage, and vehicle/cyclist positioning to establish liability and build your case."
  }, {
    question: "What about bicycle accidents in parking lots?",
    answer: "Private property accidents still allow liability claims. Property owners may also be liable for dangerous conditions, inadequate lighting, or poor design."
  }, {
    question: "Can I sue if I was hit while cycling to/from work?",
    answer: "Yes, you can pursue a personal injury claim against the at-fault driver. Workers' compensation may also apply if you were on work time or using a work bike."
  }, {
    question: "What if the bicycle accident involved a commercial truck?",
    answer: "Commercial vehicle accidents involve higher insurance limits, federal regulations, and corporate liability. These cases often result in larger settlements due to available coverage."
  }, {
    question: "How do bicycle accident investigations work?",
    answer: "We immediately secure evidence: surveillance footage, witness statements, police reports, vehicle damage, road conditions, and expert accident reconstruction when needed."
  }, {
    question: "What if I was cycling under the influence?",
    answer: "California DUI laws apply to cyclists, but this doesn't automatically bar injury claims. We evaluate all factors and may still recover compensation depending on driver fault."
  }, {
    question: "Can I get compensation for lost cycling enjoyment?",
    answer: "Yes. Loss of life's pleasures is a recoverable damage. For avid cyclists, losing the ability to ride represents significant lifestyle and recreational losses."
  }, {
    question: "What about bicycle accidents involving road construction?",
    answer: "Construction zones require special safety measures. Contractors, government entities, and drivers may all share liability for inadequate protection or negligent operation."
  }, {
    question: "How do bicycle accident cases differ from car accident cases?",
    answer: "Cyclists face unique vulnerabilities, insurance biases, and injury patterns. We understand cycling culture, equipment, and the specific legal challenges bicycle cases present."
  }, {
    question: "What if the accident happened on a group ride or cycling event?",
    answer: "Event organizers typically carry insurance. Driver liability remains regardless of event participation. We review event waivers and determine all available coverage sources."
  }, {
    question: "Can I sue for bicycle accidents caused by road defects?",
    answer: "Government entities responsible for road maintenance can be liable for dangerous conditions. These claims have strict notice requirements and shorter deadlines."
  }, {
    question: "What if I was wearing headphones during the bicycle accident?",
    answer: "California allows one earbud while cycling. Even if both ears were covered, this doesn't automatically prevent recovery - we focus on driver negligence as the primary cause."
  }, {
    question: "How do bicycle accident cases handle future medical expenses?",
    answer: "We work with medical experts to project ongoing treatment costs, rehabilitation needs, and potential surgeries. Future damages are included in settlement demands."
  }, {
    question: "What if the bicycle accident involved a government vehicle?",
    answer: "Government entity claims require special procedures and shorter deadlines. Sovereign immunity exceptions apply for negligent operation of government vehicles."
  }, {
    question: "Can I recover lost income if I can't return to my previous job?",
    answer: "Yes. Diminished earning capacity covers career changes, reduced hours, and lost advancement opportunities. Vocational experts help calculate these economic losses."
  }, {
    question: "What about bicycle accidents involving electric scooters or e-bikes?",
    answer: "Micro-mobility devices are increasingly common. Liability depends on device type, rider behavior, and local regulations. We stay current on evolving laws."
  }, {
    question: "How do insurance companies typically defend bicycle accident claims?",
    answer: "Common defenses include visibility arguments, right-of-way disputes, and helmet/safety equipment issues. Our defense experience helps counter these tactics effectively."
  }, {
    question: "What if I was cycling in a bike lane and a parked car door opened?",
    answer: "Dooring is a clear violation of California Vehicle Code 22517. The door-opener faces presumed negligence. These cases often result in favorable settlements."
  }, {
    question: "Can family members recover damages if I was killed in a bicycle accident?",
    answer: "Wrongful death claims allow family members to recover funeral expenses, lost financial support, and loss of companionship. These cases require immediate legal action."
  }, {
    question: "What if the bicycle accident happened during bad weather?",
    answer: "Weather doesn't excuse driver negligence. Poor conditions require increased caution from motorists. We demonstrate how reasonable drivers should have responded to conditions."
  }, {
    question: "How do bicycle accident cases handle scarring and disfigurement?",
    answer: "Permanent scarring significantly impacts case value, especially facial or visible scarring. We document disfigurement thoroughly and work with medical experts on projected treatment costs."
  }, {
    question: "What if I was cycling without lights at night?",
    answer: "California requires bicycle lights after dark, but equipment violations don't bar recovery if driver negligence caused the accident. We evaluate all contributing factors fairly."
  }];

  // FAQ Structured Data for SEO
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map(q => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.answer
      }
    }))
  };
  return <div className="min-h-screen bg-background">
      <SEO title="California Bicycle Accident Lawyers | Trembach Law Firm" description="Experienced bicycle accident attorneys helping injured cyclists in California. Former defense attorney now fighting for maximum compensation. Free consultation." canonical="/practice-areas/bicycle-accidents" structuredData={faqJsonLd} />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button variant="ghost" onClick={() => window.history.back()} className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm">
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
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />)}
              <span className="ml-2 text-lg">Backed by Proven Experience</span>
            </div>
            
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg" onClick={() => window.location.href = '/bicycle-case-evaluation'}>
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map(tab => {
              const IconComponent = tab.icon;
              return <button key={tab.id} onClick={() => scrollToSection(tab.id)} className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${activeTab === tab.id ? 'bg-white text-primary' : 'text-white hover:bg-white/20'}`}>
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>;
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
              <p className="sr-only">Time limits and FAQs below provide critical guidance for California bicycle accident claims.</p>
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

            {/* Free Case Evaluation Form */}
            <section id="case-evaluation" className="content-section mb-16">
              <div className="max-w-6xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <ThreeDVisualEffects>
                      <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                        <div className="text-center mb-8">
                          <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Bicycle Accident Case Evaluation</h3>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                          <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for bicycle accident cases throughout California</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Bicycle Accident Case Evaluation Form">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">First Name *</label>
                              <Input name="firstName" value={formData.name.split(' ')[0] || ''} onChange={e => {
                              const lastName = formData.name.split(' ').slice(1).join(' ');
                              handleInputChange('name', `${e.target.value} ${lastName}`.trim());
                            }} required aria-required="true" className="h-12 text-base" placeholder="Enter your first name" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Last Name *</label>
                              <Input name="lastName" value={formData.name.split(' ').slice(1).join(' ') || ''} onChange={e => {
                              const firstName = formData.name.split(' ')[0] || '';
                              handleInputChange('name', `${firstName} ${e.target.value}`.trim());
                            }} required aria-required="true" className="h-12 text-base" placeholder="Enter your last name" />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Email *</label>
                              <Input type="email" name="email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} required aria-required="true" className="h-12 text-base" placeholder="your.email@example.com" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Phone *</label>
                              <Input type="tel" name="phone" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} required aria-required="true" className="h-12 text-base" placeholder="(555) 123-4567" />
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Date of Accident *</label>
                              <Input type="date" name="accidentDate" value={formData.accidentDate} onChange={e => handleInputChange('accidentDate', e.target.value)} required aria-required="true" className="h-12 text-base" />
                            </div>
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Type of Bicycle *</label>
                              <Select value={formData.bicycleType || ''} onValueChange={value => handleInputChange('bicycleType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select bicycle type" className="text-slate-600" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="road-bike">Road Bike</SelectItem>
                                  <SelectItem value="mountain-bike">Mountain Bike</SelectItem>
                                  <SelectItem value="hybrid-bike">Hybrid Bike</SelectItem>
                                  <SelectItem value="electric-bike">Electric Bike</SelectItem>
                                  <SelectItem value="city-commuter">City/Commuter Bike</SelectItem>
                                  <SelectItem value="bmx">BMX</SelectItem>
                                  <SelectItem value="cruiser">Cruiser</SelectItem>
                                  <SelectItem value="fixie">Fixed Gear</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Type of Accident *</label>
                              <Select value={formData.accidentType || ''} onValueChange={value => handleInputChange('accidentType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select accident type" className="text-slate-600" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="car-vs-bike">Car vs. Bicycle</SelectItem>
                                  <SelectItem value="dooring-accident">Dooring Accident</SelectItem>
                                  <SelectItem value="intersection-collision">Intersection Collision</SelectItem>
                                  <SelectItem value="bike-lane-accident">Bike Lane Accident</SelectItem>
                                  <SelectItem value="right-hook">Right Hook</SelectItem>
                                  <SelectItem value="left-cross">Left Cross</SelectItem>
                                  <SelectItem value="rear-end">Rear End</SelectItem>
                                  <SelectItem value="commercial-vehicle">Commercial Vehicle</SelectItem>
                                  <SelectItem value="hit-and-run">Hit and Run</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Primary Injury Type *</label>
                              <Select value={formData.injuryType || ''} onValueChange={value => handleInputChange('injuryType', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select injury type" className="text-slate-600" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="head-brain-injury">Head/Brain Injury</SelectItem>
                                  <SelectItem value="spinal-injuries">Spinal Injuries</SelectItem>
                                  <SelectItem value="broken-bones">Broken Bones</SelectItem>
                                  <SelectItem value="road-rash">Road Rash</SelectItem>
                                  <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                                  <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                                  <SelectItem value="shoulder-collarbone">Shoulder/Collarbone</SelectItem>
                                  <SelectItem value="wrist-hand">Wrist/Hand Injuries</SelectItem>
                                  <SelectItem value="multiple-injuries">Multiple Injuries</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Medical Treatment *</label>
                              <Select value={formData.medicalTreatment || ''} onValueChange={value => handleInputChange('medicalTreatment', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select treatment level" className="text-slate-600" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="emergency-room">Emergency Room Only</SelectItem>
                                  <SelectItem value="hospitalized">Hospitalized</SelectItem>
                                  <SelectItem value="surgery">Surgery Required</SelectItem>
                                  <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                                  <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                                  <SelectItem value="rehabilitation">Rehabilitation</SelectItem>
                                  <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <label className="text-slate-800 text-base font-medium">Insurance Status *</label>
                              <Select value={formData.insuranceClaim || ''} onValueChange={value => handleInputChange('insuranceClaim', value)} required>
                                <SelectTrigger className="h-12 text-base">
                                  <SelectValue placeholder="Select claim status" className="text-slate-600" />
                                </SelectTrigger>
                                <SelectContent className="bg-white z-50">
                                  <SelectItem value="not-filed">Not Filed Yet</SelectItem>
                                  <SelectItem value="filed-pending">Filed - Pending</SelectItem>
                                  <SelectItem value="under-investigation">Under Investigation</SelectItem>
                                  <SelectItem value="offer-received">Settlement Offer Received</SelectItem>
                                  <SelectItem value="denied">Claim Denied</SelectItem>
                                  <SelectItem value="disputed-fault">Fault Being Disputed</SelectItem>
                                  <SelectItem value="low-offer">Unreasonably Low Offer</SelectItem>
                                  <SelectItem value="no-insurance">Other Party Uninsured</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <label className="text-slate-800 text-base font-medium">
                              Please describe your bicycle accident *
                            </label>
                            <Textarea name="description" value={formData.description} onChange={e => handleInputChange('description', e.target.value)} placeholder="Please provide details about how the bicycle accident occurred..." rows={5} className="" required aria-required="true" />
                          </div>

                          

                          <Button type="submit" className="w-full btn-enhanced py-4 text-lg">
                            Get My Free Case Evaluation
                          </Button>
                        </form>
                      </div>
                    </ThreeDVisualEffects>
                  </div>

                  <div className="lg:col-span-1">
                    <div className="sticky top-24 space-y-6">
                      <Card className="glass-card border-primary/20">
                        <div className="p-6">
                          <h4 className="text-primary font-semibold mb-4">Need Immediate Help?</h4>
                          <div className="space-y-4">
                            <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                              Call (818) 123-4567
                            </Button>
                            <p className="text-sm text-muted-foreground text-center">
                              Available 24/7 for bicycle accident cases
                            </p>
                          </div>
                        </div>
                      </Card>

                      <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                        <div className="p-6">
                          <h4 className="flex items-center text-yellow-700 font-semibold mb-2">
                            ⚠️ Time Sensitive
                          </h4>
                          <p className="text-sm text-yellow-700">
                            California bicycle accident cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                          </p>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
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
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-8">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => <Card key={index} className="glass-card">
                    <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors" onClick={() => toggleFaq(index)}>
                      <CardTitle className="flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        {expandedFaq === index ? <ChevronUp className="w-5 h-5 text-red-600" /> : <ChevronDown className="w-5 h-5 text-red-600" />}
                      </CardTitle>
                    </CardHeader>
                    {expandedFaq === index && <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>}
                  </Card>)}
              </div>
            </section>

            {/* Don't Wait - Time Limits Section - Styled like Mesothelioma */}
            <section id="time-limits" className="content-section mb-16">
              <div className="bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-200 rounded-xl p-8 shadow-lg">
                <h2 className="text-3xl font-bold text-red-700 mb-6 flex items-center">
                  <Clock className="w-8 h-8 mr-3 text-red-600" />
                  Don't Wait - Time Limits Apply for California Bicycle Accidents
                </h2>
                
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg font-semibold text-red-800 mb-6">
                    California law imposes strict deadlines for filing bicycle accident claims. Missing these deadlines can permanently bar your right to compensation.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <Card className="border-red-300 bg-red-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                          <Calendar className="w-5 h-5 mr-2" />
                          Statute of Limitations
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-bold text-red-800 mb-2">2 Years from Accident Date</p>
                        <p className="text-sm text-red-700">This applies to personal injury claims against the at-fault driver and their insurance company.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-red-300 bg-red-50">
                      <CardHeader>
                        <CardTitle className="flex items-center text-red-700">
                          <Building className="w-5 h-5 mr-2" />
                          Government Claims
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm font-bold text-red-800 mb-2">6 Months for Government Entities</p>
                        <p className="text-sm text-red-700">Claims against cities, counties, or state for dangerous road conditions have much shorter deadlines.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-6 mb-6">
                    <h4 className="font-bold text-yellow-800 mb-3 flex items-center text-lg">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Critical Evidence Disappears Quickly
                    </h4>
                    <ul className="text-sm text-yellow-700 space-y-2">
                      <li>• Surveillance footage gets overwritten (often within 30-90 days)</li>
                      <li>• Witness memories fade and contact information is lost</li>
                      <li>• Physical evidence at accident scene gets disturbed</li>
                      <li>• Vehicle damage gets repaired, eliminating crucial evidence</li>
                      <li>• Road conditions change, making reconstruction difficult</li>
                      <li>• GPS and cycling computer data may be lost or overwritten</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-bold text-red-700 mb-4">Why Immediate Action is Essential</h3>
                  <ul className="space-y-3 text-red-800">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <div>
                        <strong>Evidence Preservation:</strong> Our team can immediately secure surveillance footage, witness statements, and physical evidence before it disappears forever.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <div>
                        <strong>Insurance Deadlines:</strong> Insurance companies have their own reporting requirements and internal deadlines that can affect your claim.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Stethoscope className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <div>
                        <strong>Medical Documentation:</strong> Early legal involvement ensures proper medical documentation and treatment coordination for your claim.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Scale className="w-5 h-5 mr-2 mt-0.5 text-red-600 flex-shrink-0" />
                      <div>
                        <strong>Investigation Time:</strong> Complex bicycle accidents require thorough investigation to identify all potentially liable parties and coverage sources.
                      </div>
                    </li>
                  </ul>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mt-6">
                    <h4 className="font-bold text-green-800 mb-3 flex items-center text-lg">
                      <Phone className="w-5 h-5 mr-2" />
                      Free Consultation - No Risk, No Obligation
                    </h4>
                    <p className="text-sm text-green-700 mb-4">
                      Don't let time limits jeopardize your case. Contact us today for a free, comprehensive consultation. We'll review your case, explain your rights, and ensure all critical deadlines are met while you focus on your recovery.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold" onClick={() => window.location.href = '/bicycle-case-evaluation'}>
                        Start My Free Case Review
                      </Button>
                      <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50" onClick={() => window.location.href = 'tel:(818)123-4567'}>
                        Call (818) 123-4567 Now
                      </Button>
                    </div>
                  </div>
                </div>
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
    </div>;
};
export default BicycleAccidents;