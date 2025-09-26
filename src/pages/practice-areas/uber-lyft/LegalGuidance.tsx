import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  Shield, 
  Clock,
  AlertTriangle,
  FileText,
  Phone,
  CheckCircle,
  Star,
  ChevronDown,
  ChevronUp,
  Building,
  Car,
  Users,
  DollarSign,
  Map,
  Gavel
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';

import SEO from '@/components/SEO';
import heroBackground from '@/assets/uber-lyft-legal-guidance-hero.jpg';
import legalProcessImage from '@/assets/california-rideshare-legal-process.jpg';
import insurancePeriodImage from '@/assets/rideshare-insurance-periods.jpg';
import courthouseImage from '@/assets/california-courthouse.jpg';

gsap.registerPlugin(ScrollTrigger);

const LegalGuidance: React.FC = () => {
  useScrollRestoration();
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Hero Effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 100,
          rotationX: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out' 
        }
      );

      // Staggered card animations with 3D effects
      gsap.fromTo(contentRef.current?.querySelectorAll('.guidance-card'),
        { 
          opacity: 0, 
          y: 80, 
          rotationY: -15,
          transformPerspective: 1000 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationY: 0,
          duration: 0.8, 
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 70%'
          }
        }
      );

      // Floating animations for icons
      gsap.to('.float-icon', {
        y: -15,
        rotation: 5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Parallax effect for images
      gsap.to('.parallax-image', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
          trigger: '.parallax-image',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
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

  const legalSteps = [
    {
      icon: Clock,
      title: 'Immediate Response (0-72 Hours)',
      description: 'Time-sensitive evidence preservation and initial case assessment',
      details: [
        'Preserve ride data before it\'s deleted',
        'Photograph accident scene and vehicles',
        'Collect witness contact information',
        'Secure police report and traffic camera footage',
        'Document all injuries with medical photography',
        'Avoid statements to insurance companies'
      ]
    },
    {
      icon: FileText,
      title: 'Investigation Phase (1-4 Weeks)',
      description: 'Comprehensive case building and evidence gathering',
      details: [
        'Obtain driver\'s employment and safety records',
        'Request app data and GPS tracking information',
        'Analyze vehicle maintenance and inspection records',
        'Interview all witnesses and passengers',
        'Secure expert accident reconstruction if needed',
        'Review rideshare company policies and procedures'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance Claims (2-8 Weeks)',
      description: 'Navigate complex multi-policy insurance system',
      details: [
        'Determine applicable insurance coverage period',
        'File claims with all relevant insurance carriers',
        'Coordinate with your health insurance for immediate treatment',
        'Document all medical treatment and expenses',
        'Handle insurance company communications',
        'Prevent early settlement pressure tactics'
      ]
    },
    {
      icon: Gavel,
      title: 'Negotiation & Resolution (3-18 Months)',
      description: 'Maximize compensation through skilled negotiation or litigation',
      details: [
        'Present comprehensive demand package',
        'Negotiate with multiple insurance companies',
        'Prepare for mediation if beneficial',
        'File lawsuit if necessary to protect rights',
        'Manage discovery process and depositions',
        'Pursue maximum compensation at trial if needed'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Uber & Lyft Accident Legal Process Guide | Trembach Law Firm"
        description="Complete guide to California rideshare accident legal process. Learn insurance periods, liability laws, and your rights after Uber/Lyft accidents from expert attorney."
        canonical="https://www.trembachlawfirm.com/uber-lyft/legal-guidance"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-black/60 to-blue-900/80 pointer-events-none"></div>
        
        
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <div className="flex justify-center items-center mb-6">
              <Scale className="float-icon w-16 h-16 text-blue-400 mr-4" />
              <Shield className="float-icon w-16 h-16 text-green-400 mr-4" />
              <Gavel className="float-icon w-16 h-16 text-yellow-400" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
              Legal Guidance Center
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 animate-pulse" />
              ))}
              <span className="ml-2 text-lg">Expert Legal Insights</span>
            </div>
            
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Navigate California's complex rideshare accident laws with guidance from a former defense attorney 
              who understands how these companies operate and defend claims.
            </p>
            
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/uber-lyft/case-evaluation'}
            >
              Get Personalized Legal Advice
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12" ref={contentRef}>
        
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Understanding California Rideshare Law</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            California pioneered rideshare regulation, creating complex legal frameworks that significantly impact 
            accident victims' rights and compensation. This guide provides the insider knowledge you need.
          </p>
        </div>

        {/* Legal Process Timeline */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">The Legal Process Timeline</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className="guidance-card glass-card border-l-4 border-l-blue-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                    <CardTitle className="flex items-center text-xl">
                      <div className="bg-blue-600 rounded-full p-3 mr-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold">{step.title}</div>
                        <div className="text-sm text-muted-foreground font-normal">{step.description}</div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Insurance Periods Section */}
        <section className="mb-16">
          <Card className="guidance-card glass-card border-2 border-blue-200 shadow-2xl overflow-hidden">
            <div className="relative h-64">
              <img 
                src={insurancePeriodImage}
                alt="Rideshare insurance coverage periods in California"
                className="parallax-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-black/60 flex items-center justify-center">
                <h3 className="text-4xl font-bold text-white text-center">Understanding Insurance Periods</h3>
              </div>
            </div>
            
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-red-50 rounded-lg border-2 border-red-200">
                  <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="font-bold text-red-900 mb-2">Period 1: App On</h4>
                  <p className="text-sm text-red-800 mb-4">Driver available but no ride request</p>
                  <Badge variant="destructive">LIMITED COVERAGE</Badge>
                  <ul className="text-xs text-red-700 mt-3 space-y-1">
                    <li>• Personal insurance primary</li>
                    <li>• $50K injury per person</li>
                    <li>• $100K per accident</li>
                    <li>• Coverage gaps common</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-yellow-50 rounded-lg border-2 border-yellow-200">
                  <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="font-bold text-yellow-900 mb-2">Period 2: En Route</h4>
                  <p className="text-sm text-yellow-800 mb-4">Driving to pick up passenger</p>
                  <Badge className="bg-yellow-600 text-white">MODERATE COVERAGE</Badge>
                  <ul className="text-xs text-yellow-700 mt-3 space-y-1">
                    <li>• $1M injury coverage</li>
                    <li>• Property damage included</li>
                    <li>• Rideshare insurance primary</li>
                    <li>• Still some limitations</li>
                  </ul>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg border-2 border-green-200">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="font-bold text-green-900 mb-2">Period 3: During Ride</h4>
                  <p className="text-sm text-green-800 mb-4">Passenger in vehicle</p>
                  <Badge className="bg-green-600 text-white">FULL COVERAGE</Badge>
                  <ul className="text-xs text-green-700 mt-3 space-y-1">
                    <li>• $1M injury coverage</li>
                    <li>• Full property damage</li>
                    <li>• Comprehensive benefits</li>
                    <li>• Maximum protection</li>
                  </ul>
                </div>
              </div>

              <Collapsible open={expandedSections.insurancePeriods} onOpenChange={() => toggleSection('insurancePeriods')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-black hover:bg-muted">
                    Show Detailed Insurance Analysis
                    {expandedSections.insurancePeriods ? <ChevronUp className="text-black" /> : <ChevronDown className="text-black" />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h4>Why Insurance Periods Matter for Your Case</h4>
                    <p>
                      The timing of your accident determines which insurance policies apply and how much compensation you can recover. 
                      Period 1 accidents often result in coverage disputes between personal and rideshare insurers, leaving victims 
                      with inadequate compensation. Period 2 and 3 accidents typically have better coverage, but insurance companies 
                      still employ aggressive tactics to minimize payouts.
                    </p>
                    
                    <h4>Common Insurance Company Tactics</h4>
                    <ul>
                      <li><strong>Period Disputes:</strong> Claiming the driver was in a different period to reduce coverage</li>
                      <li><strong>App Status Challenges:</strong> Arguing the driver wasn't properly logged in</li>
                      <li><strong>Coverage Gap Claims:</strong> Attempting to push liability to other insurers</li>
                      <li><strong>Quick Settlement Offers:</strong> Lowball offers before victims understand their rights</li>
                      <li><strong>Medical Bill Disputes:</strong> Challenging the necessity of treatment</li>
                    </ul>
                    
                    <h4>Our Insider Advantage</h4>
                    <p>
                      As a former defense attorney, I've seen these tactics firsthand and know how to counter them effectively. 
                      We immediately preserve evidence about the driver's app status, secure ride data before it's deleted, 
                      and build cases that maximize your compensation regardless of the coverage period.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </CardContent>
          </Card>
        </section>

        {/* California Specific Laws */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">California-Specific Rideshare Laws</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="guidance-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Building className="w-6 h-6 mr-3 text-blue-600" />
                  Assembly Bill 5 (AB5)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  AB5 attempted to classify rideshare drivers as employees, which would increase liability for companies. 
                  However, Proposition 22 created an exemption for gig workers.
                </p>
                <h4 className="font-semibold mb-2">Impact on Your Case:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Companies still liable for passenger safety</li>
                  <li>• Negligent hiring and supervision claims remain</li>
                  <li>• Background check failures can create liability</li>
                  <li>• Safety system failures may be compensable</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="guidance-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Scale className="w-6 h-6 mr-3 text-green-600" />
                  Comparative Negligence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  California's pure comparative negligence law allows recovery even if you're partially at fault, 
                  but reduces compensation by your percentage of fault.
                </p>
                <h4 className="font-semibold mb-2">Protection Strategies:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Never admit fault at the scene</li>
                  <li>• Document all contributing factors</li>
                  <li>• Challenge fault determinations</li>
                  <li>• Prove other parties' greater liability</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="guidance-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Clock className="w-6 h-6 mr-3 text-red-600" />
                  Statute of Limitations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  California provides two years from the date of injury to file a personal injury lawsuit. 
                  However, evidence preservation must begin immediately.
                </p>
                <h4 className="font-semibold mb-2">Critical Deadlines:</h4>
                <ul className="text-sm space-y-1">
                  <li>• 2 years: Personal injury lawsuit</li>
                  <li>• 6 months: Government claims (if applicable)</li>
                  <li>• 30 days: Notice to employer (workers' comp)</li>
                  <li>• 48-72 hours: App data preservation window</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="guidance-card glass-card shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center text-xl">
                  <Users className="w-6 h-6 mr-3 text-purple-600" />
                  Passenger Rights
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-sm">
                  California law provides strong protections for rideshare passengers, including the right to safe 
                  transportation and compensation for injuries caused by driver negligence.
                </p>
                <h4 className="font-semibold mb-2">Your Rights Include:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Safe and competent drivers</li>
                  <li>• Properly maintained vehicles</li>
                  <li>• Protection from assault/harassment</li>
                  <li>• Full insurance coverage during rides</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Common Legal Challenges */}
        <section className="mb-16">
          <Card className="guidance-card glass-card border-2 border-red-200 shadow-2xl">
            <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50">
              <CardTitle className="flex items-center text-2xl">
                <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                Common Legal Challenges We Overcome
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-red-900">Evidence Destruction</h4>
                  <p className="text-sm text-red-800">
                    Rideshare companies routinely delete driver data, GPS logs, and ride records. We act immediately 
                    to preserve this critical evidence through legal holds and subpoenas.
                  </p>
                  
                  <h4 className="font-bold text-lg text-red-900">Multiple Insurance Denials</h4>
                  <p className="text-sm text-red-800">
                    Insurance companies often deny coverage, claiming the accident occurred during a different period 
                    or that another policy is responsible. We cut through these tactics.
                  </p>
                  
                  <h4 className="font-bold text-lg text-red-900">Corporate Shield Defense</h4>
                  <p className="text-sm text-red-800">
                    Uber and Lyft claim they're technology platforms, not transportation companies, to avoid liability. 
                    We pierce this corporate veil using California law.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-red-900">Lowball Settlement Offers</h4>
                  <p className="text-sm text-red-800">
                    Insurance adjusters prey on victims' financial desperation with inadequate early settlement offers. 
                    We ensure you receive full compensation for all damages.
                  </p>
                  
                  <h4 className="font-bold text-lg text-red-900">Medical Bill Disputes</h4>
                  <p className="text-sm text-red-800">
                    Insurers challenge medical necessity and treatment costs to reduce payouts. Our medical experts 
                    document the full extent of your injuries and treatment needs.
                  </p>
                  
                  <h4 className="font-bold text-lg text-red-900">Complex Liability Issues</h4>
                  <p className="text-sm text-red-800">
                    Multi-vehicle accidents with rideshare involvement create complex liability scenarios. We identify 
                    all responsible parties and maximize your compensation sources.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="guidance-card glass-card border-2 border-blue-500 shadow-2xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold mb-6">Don't Navigate This Alone</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                California rideshare law is complex and constantly evolving. You need an attorney who understands 
                both the legal landscape and the insurance companies' tactics.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">Former Defense Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    Insider knowledge of how these companies defend claims
                  </p>
                </div>
                <div className="text-center">
                  <DollarSign className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">No Win, No Fee</h4>
                  <p className="text-sm text-muted-foreground">
                    You pay nothing unless we recover compensation
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                  <h4 className="font-bold mb-2">24/7 Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    Immediate response for serious accidents
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (818) 123-4567
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg rounded-full border-2 hover:bg-muted"
                  onClick={() => window.location.href = '/uber-lyft/case-evaluation'}
                >
                  Free Case Evaluation
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default LegalGuidance;