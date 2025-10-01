import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Scale,
  Shield,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Anchor,
  Ship,
  Building
} from 'lucide-react';
import SEO from '@/components/SEO';

import heroBackground from '@/assets/maritime-legal-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MaritimeLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Content animation
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

  return (
    <>
      <SEO
        title="Maritime Legal Guidance | California Admiralty Law Experts"
        description="Comprehensive legal guidance for California maritime accidents. Expert admiralty attorneys explaining Jones Act, LHWCA, and maritime law rights."
        keywords="maritime legal guidance, admiralty law, Jones Act attorney, LHWCA lawyer, California maritime law"
        canonical="/maritime/legal-guidance"
      />
      
      
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <div className="flex items-center justify-center mb-4">
                <Scale className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Maritime Legal Guidance
                </h1>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Expert Admiralty Law Guidance</span>
              </div>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Understanding your rights under California maritime law and federal admiralty statutes
              </p>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/maritime/case-evaluation'}
              >
                GET FREE LEGAL CONSULTATION
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2" ref={contentRef}>
              
              {/* Maritime Law Overview */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding Maritime Law in California</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Maritime law, also known as admiralty law, is a specialized area of federal law that governs activities on navigable waters. 
                    If you've been injured in a maritime accident in California waters, understanding your legal rights is crucial to obtaining fair compensation.
                  </p>
                  
                  <p className="text-lg leading-relaxed">
                    California's extensive coastline and major ports make maritime accidents unfortunately common. From commercial fishing vessels 
                    to cruise ships, cargo containers to pleasure craft, maritime injuries require specialized legal knowledge to navigate the 
                    complex web of federal and state regulations.
                  </p>
                </div>

                <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Learn More About Maritime Law Fundamentals
                      {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Federal vs. State Jurisdiction in Maritime Cases</h3>
                      <p>
                        Maritime law operates under federal jurisdiction, but state laws may also apply depending on the location and 
                        nature of the accident. Understanding which laws apply to your case is crucial for determining your rights and 
                        the compensation available.
                      </p>
                      
                      <h3>Key Maritime Statutes</h3>
                      <ul>
                        <li><strong>Jones Act:</strong> Protects seamen injured due to employer negligence</li>
                        <li><strong>Longshore and Harbor Workers' Compensation Act (LHWCA):</strong> Provides benefits for shore-based maritime workers</li>
                        <li><strong>Death on the High Seas Act (DOHSA):</strong> Allows wrongful death claims for accidents beyond three nautical miles</li>
                        <li><strong>General Maritime Law:</strong> Provides remedies for maintenance and cure, unseaworthiness claims</li>
                      </ul>

                      <h3>California Maritime Zones</h3>
                      <p>
                        California's maritime jurisdiction includes various zones with different legal implications:
                      </p>
                      <ul>
                        <li>Territorial waters (within 3 nautical miles of shore)</li>
                        <li>Contiguous zone (3-12 nautical miles)</li>
                        <li>Exclusive Economic Zone (12-200 nautical miles)</li>
                        <li>High seas (beyond 200 nautical miles)</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Jones Act Claims */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Jones Act Claims for Seamen</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Anchor className="w-5 h-5 mr-2 text-primary" />
                        Who Qualifies as a Seaman?
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>To qualify for Jones Act protection, you must be a seaman who spends at least 30% of work time on a vessel in navigation and contributes to the vessel's function or mission.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Shield className="w-5 h-5 mr-2 text-primary" />
                        Jones Act Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Jones Act provides compensation for employer negligence, maintenance and cure benefits, and claims for vessel unseaworthiness.</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.jones} onOpenChange={() => toggleSection('jones')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Detailed Jones Act Information
                      {expandedSections.jones ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Proving Seaman Status</h3>
                      <p>
                        Courts examine several factors to determine seaman status:
                      </p>
                      <ul>
                        <li>Duration of connection to vessel in navigation</li>
                        <li>Nature of work performed aboard the vessel</li>
                        <li>Whether work contributes to vessel's function or mission</li>
                        <li>Exposure to perils of the sea</li>
                      </ul>

                      <h3>Types of Vessels Covered</h3>
                      <p>Jones Act applies to various types of vessels including:</p>
                      <ul>
                        <li>Commercial fishing vessels</li>
                        <li>Cargo ships and container vessels</li>
                        <li>Cruise ships and passenger vessels</li>
                        <li>Tugboats and barges</li>
                        <li>Research vessels</li>
                        <li>Coast Guard vessels</li>
                        <li>Offshore drilling platforms and supply vessels</li>
                      </ul>

                      <h3>Maintenance and Cure Benefits</h3>
                      <p>
                        Even without proving negligence, injured seamen are entitled to:
                      </p>
                      <ul>
                        <li><strong>Maintenance:</strong> Living expenses during recovery</li>
                        <li><strong>Cure:</strong> Medical treatment until maximum medical improvement</li>
                        <li><strong>Unearned wages:</strong> Wages through end of voyage</li>
                      </ul>

                      <h3>Unseaworthiness Claims</h3>
                      <p>
                        Vessel owners have an absolute duty to provide a seaworthy vessel. Unseaworthiness can include:
                      </p>
                      <ul>
                        <li>Defective equipment or machinery</li>
                        <li>Inadequate safety equipment</li>
                        <li>Incompetent crew members</li>
                        <li>Inadequate vessel design or maintenance</li>
                        <li>Dangerous working conditions</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* LHWCA Coverage */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Longshore Workers' Compensation Coverage</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    The Longshore and Harbor Workers' Compensation Act (LHWCA) provides benefits to maritime workers who don't qualify 
                    as seamen under the Jones Act. This federal workers' compensation system covers injuries occurring on navigable 
                    waters or adjoining areas used in maritime commerce.
                  </p>
                </div>

                <Collapsible open={expandedSections.lhwca} onOpenChange={() => toggleSection('lhwca')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Complete LHWCA Coverage Information
                      {expandedSections.lhwca ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Who Is Covered Under LHWCA?</h3>
                      <ul>
                        <li>Longshoremen loading and unloading vessels</li>
                        <li>Harbor workers in maritime commerce areas</li>
                        <li>Ship repairers and shipbuilders</li>
                        <li>Marina and dock workers</li>
                        <li>Warehouse workers in port areas</li>
                        <li>Crane operators at ports</li>
                        <li>Security personnel at maritime facilities</li>
                      </ul>

                      <h3>LHWCA Benefits Available</h3>
                      <ul>
                        <li><strong>Medical Benefits:</strong> All reasonable and necessary medical treatment</li>
                        <li><strong>Disability Compensation:</strong> Two-thirds of average weekly wage</li>
                        <li><strong>Vocational Rehabilitation:</strong> Retraining for return to work</li>
                        <li><strong>Death Benefits:</strong> Compensation for surviving dependents</li>
                        <li><strong>Permanent Impairment:</strong> Schedule awards for permanent injuries</li>
                      </ul>

                      <h3>Status and Situs Requirements</h3>
                      <p>
                        To qualify for LHWCA coverage, two requirements must be met:
                      </p>
                      <ul>
                        <li><strong>Status:</strong> Worker must be engaged in maritime employment</li>
                        <li><strong>Situs:</strong> Injury must occur on navigable waters or qualifying adjoining areas</li>
                      </ul>

                      <h3>Third-Party Claims</h3>
                      <p>
                        LHWCA beneficiaries may also pursue third-party claims against:
                      </p>
                      <ul>
                        <li>Vessel owners for unseaworthiness</li>
                        <li>Equipment manufacturers for defective products</li>
                        <li>Contractors for negligence</li>
                        <li>Other third parties whose negligence contributed to injury</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Passenger Rights */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Passenger Rights</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Passengers on vessels have different rights than maritime workers. Whether you're on a cruise ship, ferry, 
                    charter boat, or other passenger vessel, understanding your legal protections is essential if you're injured.
                  </p>
                </div>

                <Collapsible open={expandedSections.passenger} onOpenChange={() => toggleSection('passenger')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Comprehensive Passenger Rights Information
                      {expandedSections.passenger ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Duty of Care to Passengers</h3>
                      <p>
                        Vessel operators owe passengers a high duty of care, including:
                      </p>
                      <ul>
                        <li>Providing reasonable care for passenger safety</li>
                        <li>Maintaining vessel in safe condition</li>
                        <li>Warning of known dangers</li>
                        <li>Providing adequate safety equipment and procedures</li>
                        <li>Training crew in emergency procedures</li>
                      </ul>

                      <h3>Common Passenger Injury Claims</h3>
                      <ul>
                        <li>Slip and fall accidents on wet decks</li>
                        <li>Inadequate medical care aboard vessel</li>
                        <li>Food poisoning and illness outbreaks</li>
                        <li>Swimming and water sports accidents</li>
                        <li>Assault by crew members or other passengers</li>
                        <li>Gangway and boarding accidents</li>
                        <li>Fire and emergency evacuation injuries</li>
                      </ul>

                      <h3>Cruise Ship Specific Laws</h3>
                      <p>
                        Cruise ships are subject to additional regulations:
                      </p>
                      <ul>
                        <li>Cruise Vessel Security and Safety Act (CVSSA) requirements</li>
                        <li>Mandatory reporting of crimes and disappearances</li>
                        <li>Medical facility and staff requirements</li>
                        <li>Passenger bill of rights protections</li>
                      </ul>

                      <h3>Ticket Contract Limitations</h3>
                      <p>
                        Passenger tickets often contain limitations, but some may be unenforceable:
                      </p>
                      <ul>
                        <li>Forum selection clauses requiring lawsuits in specific locations</li>
                        <li>Time limitations for filing claims (often shorter than state law)</li>
                        <li>Damage limitations that may be invalid</li>
                        <li>Arbitration clauses that may be challengeable</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Legal Process */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Maritime Legal Process</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Step 1</Badge>
                      <CardTitle className="text-lg">Immediate Action</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Seek medical attention and report the accident immediately to establish a record.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Step 2</Badge>
                      <CardTitle className="text-lg">Legal Consultation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Contact experienced maritime attorneys to understand your rights and options.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Step 3</Badge>
                      <CardTitle className="text-lg">Case Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Build your case with evidence, witness statements, and expert testimony.</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.process} onOpenChange={() => toggleSection('process')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Detailed Legal Process Guide
                      {expandedSections.process ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Immediate Steps After a Maritime Accident</h3>
                      <ol>
                        <li><strong>Seek Medical Attention:</strong> Your health is the top priority</li>
                        <li><strong>Report the Accident:</strong> Notify the vessel operator immediately</li>
                        <li><strong>Document Everything:</strong> Take photos, get witness information</li>
                        <li><strong>Preserve Evidence:</strong> Keep all medical records and correspondence</li>
                        <li><strong>Contact an Attorney:</strong> Consult with maritime law specialists quickly</li>
                      </ol>

                      <h3>Investigation and Evidence Gathering</h3>
                      <p>Maritime cases require specialized investigation:</p>
                      <ul>
                        <li>Coast Guard incident reports and investigations</li>
                        <li>Vessel inspection records and maintenance logs</li>
                        <li>Weather and sea condition reports</li>
                        <li>Crew training and certification records</li>
                        <li>Company safety policies and procedures</li>
                        <li>Expert witness testimony on maritime standards</li>
                      </ul>

                      <h3>Statute of Limitations</h3>
                      <p>Time limits for maritime claims vary:</p>
                      <ul>
                        <li><strong>Jones Act Claims:</strong> 3 years from date of injury</li>
                        <li><strong>LHWCA Claims:</strong> 1 year to report, 2 years to file</li>
                        <li><strong>Passenger Claims:</strong> Often 1-2 years per ticket contract</li>
                        <li><strong>Death Claims:</strong> 3 years under DOHSA</li>
                      </ul>

                      <h3>Settlement vs. Trial</h3>
                      <p>Most maritime cases settle, but preparation for trial is essential:</p>
                      <ul>
                        <li>Thorough case preparation strengthens settlement position</li>
                        <li>Maritime jury trials require specialized presentation</li>
                        <li>Federal court procedures apply in most cases</li>
                        <li>Expert witnesses crucial for technical maritime issues</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Important Deadlines */}
              <section className="content-section mb-12">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <AlertTriangle className="w-6 h-6 text-red-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-red-800 mb-2">Critical Maritime Law Deadlines</h3>
                      <div className="prose prose-sm text-red-700">
                        <p className="mb-3">
                          Maritime law imposes strict deadlines that are shorter than most personal injury cases. 
                          Missing these deadlines can forever bar your right to compensation.
                        </p>
                        <ul className="space-y-1">
                          <li><strong>LHWCA Notice:</strong> Report injury within 30 days</li>
                          <li><strong>Passenger Claims:</strong> Often just 1 year to file lawsuit</li>
                          <li><strong>Maintenance and Cure:</strong> Report injury promptly for benefits</li>
                          <li><strong>Evidence Preservation:</strong> Vessel logs may be destroyed quickly</li>
                        </ul>
                        <p className="mt-3 font-semibold">
                          Don't wait - contact a maritime attorney immediately after any vessel accident.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                
                {/* Contact CTA */}
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">Need Maritime Legal Help?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-red-700 text-sm">
                      Don't navigate complex maritime law alone. Get expert legal guidance for your California maritime accident case.
                    </p>
                    
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="w-full border-red-300 text-red-700 hover:bg-red-100"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      Free Case Evaluation
                    </Button>
                  </CardContent>
                </Card>

                {/* Why Choose Our Maritime Lawyers */}
                <Card>
                  <CardHeader>
                    <CardTitle>Why Choose Our Maritime Attorneys?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Admiralty Law Specialists</h4>
                        <p className="text-sm text-muted-foreground">Focused exclusively on maritime and admiralty law cases</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Immediate Response</h4>
                        <p className="text-sm text-muted-foreground">Quick action to preserve evidence and protect rights</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Dedicated Maritime Team</h4>
                        <p className="text-sm text-muted-foreground">Attorneys who understand vessel operations and maritime commerce</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">No Fee Unless We Win</h4>
                        <p className="text-sm text-muted-foreground">Contingency fee arrangement for maritime injury cases</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Maritime Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Case Evaluation Form
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/compensation-calculator'}
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/medical-guidance'}
                    >
                      <Ship className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaritimeLegalGuidance;