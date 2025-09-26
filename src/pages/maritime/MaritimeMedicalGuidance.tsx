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
  Heart,
  Shield,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  MapPin
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/maritime-medical-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MaritimeMedicalGuidance: React.FC = () => {
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
        title="Maritime Medical Guidance | California Maritime Injury Treatment"
        description="Comprehensive medical guidance for California maritime injuries. Find specialized treatment centers, understand injury types, and get expert medical care recommendations."
        keywords="maritime medical treatment, maritime injury care, California maritime hospitals, marine accident medical help"
        canonical="/maritime/medical-guidance"
      />
      
      <GoBack fallbackPath="/practice-areas/maritime-accidents" />
      
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
                <Stethoscope className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Maritime Medical Guidance
                </h1>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Expert Maritime Injury Care</span>
              </div>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Comprehensive medical guidance for California maritime injury victims and their families
              </p>
              
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = '/maritime/case-evaluation'}
              >
                GET MEDICAL & LEGAL HELP
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2" ref={contentRef}>
              
              {/* Immediate Medical Response */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Medical Response for Maritime Injuries</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                        Emergency Response
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Call 911 or Coast Guard immediately for severe injuries</p>
                      <p>• Stabilize the injured person if trained to do so</p>
                      <p>• Document the scene and injuries if possible</p>
                      <p>• Get to the nearest emergency medical facility</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                    <CardHeader>
                      <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                        <Heart className="w-5 h-5 mr-2 text-red-600" />
                        Medical Documentation
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>• Request complete medical records from all providers</p>
                      <p>• Follow up with specialists for proper diagnosis</p>
                      <p>• Document all symptoms and treatment responses</p>
                      <p>• Keep detailed records of medical expenses</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.emergency} onOpenChange={() => toggleSection('emergency')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Complete Emergency Response Protocol
                      {expandedSections.emergency ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Shipboard Medical Emergency Protocol</h3>
                      <ol>
                        <li><strong>Assess the Scene:</strong> Ensure safety before approaching injured person</li>
                        <li><strong>Call for Help:</strong> Alert crew, captain, and emergency services</li>
                        <li><strong>Basic First Aid:</strong> Stop bleeding, stabilize spine, maintain airway</li>
                        <li><strong>Radio for Medical Advice:</strong> Many vessels have direct medical consultation</li>
                        <li><strong>Prepare for Evacuation:</strong> Helicopter or Coast Guard rescue if needed</li>
                      </ol>

                      <h3>Shore-Based Maritime Facilities</h3>
                      <p>When accidents occur at ports, harbors, or near shore:</p>
                      <ul>
                        <li>Port emergency medical services are usually available</li>
                        <li>Local hospitals may have maritime injury experience</li>
                        <li>Coast Guard stations can provide emergency transport</li>
                        <li>Ambulance services serve major port areas</li>
                      </ul>

                      <h3>Critical Documentation</h3>
                      <p>From the moment of injury, proper documentation is crucial:</p>
                      <ul>
                        <li><strong>Incident Reports:</strong> File with vessel operator immediately</li>
                        <li><strong>Witness Statements:</strong> Get contact information from all witnesses</li>
                        <li><strong>Photographic Evidence:</strong> Document scene, equipment, and injuries</li>
                        <li><strong>Medical Records:</strong> Obtain copies of all treatment records</li>
                        <li><strong>Coast Guard Reports:</strong> Request copies of official investigations</li>
                      </ul>

                      <h3>Common Maritime Injury Complications</h3>
                      <p>Maritime injuries often involve unique complications:</p>
                      <ul>
                        <li>Salt water exposure can worsen wounds and infections</li>
                        <li>Delayed treatment due to remote locations</li>
                        <li>Hypothermia from cold water exposure</li>
                        <li>Crush injuries from heavy maritime equipment</li>
                        <li>Chemical exposure from cargo or vessel systems</li>
                        <li>Burns from engine fires or hot machinery</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Common Maritime Injuries */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Common Maritime Injuries and Treatment</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    Maritime work environments present unique injury risks due to heavy machinery, unstable surfaces, 
                    dangerous weather conditions, and the remote nature of many maritime operations. Understanding 
                    common injury types helps ensure proper treatment and documentation.
                  </p>
                </div>

                <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Comprehensive Maritime Injury Guide
                      {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Slip, Trip, and Fall Injuries</h3>
                      <p><strong>Most common maritime injuries include:</strong></p>
                      <ul>
                        <li>Wet deck falls due to spray, rain, or washing</li>
                        <li>Ladder falls when boarding or moving between decks</li>
                        <li>Gangway accidents during loading/unloading</li>
                        <li>Falls into cargo holds or open hatches</li>
                        <li>Ice-related falls in cold weather operations</li>
                      </ul>
                      <p><strong>Treatment considerations:</strong> Head injuries require immediate evaluation, spinal injuries need careful transport, fractures may be complicated by delayed treatment.</p>

                      <h3>Crushing and Pinching Injuries</h3>
                      <p><strong>Common causes:</strong></p>
                      <ul>
                        <li>Getting caught between vessels and docks</li>
                        <li>Cargo handling equipment accidents</li>
                        <li>Rope and cable injuries during line handling</li>
                        <li>Crane and winch accidents</li>
                        <li>Container loading/unloading injuries</li>
                      </ul>
                      <p><strong>Treatment needs:</strong> Often require surgical intervention, may involve complex fractures, compartment syndrome risk, potential amputations.</p>

                      <h3>Back and Spinal Injuries</h3>
                      <p><strong>Maritime-specific causes:</strong></p>
                      <ul>
                        <li>Heavy lifting in unstable conditions</li>
                        <li>Repetitive motion from ship movements</li>
                        <li>Sudden vessel movements causing falls</li>
                        <li>Awkward working positions in confined spaces</li>
                        <li>Vibration exposure from machinery</li>
                      </ul>
                      <p><strong>Treatment approach:</strong> MRI imaging crucial, may need spinal surgery, long-term physical therapy, chronic pain management.</p>

                      <h3>Burns and Chemical Exposure</h3>
                      <p><strong>Maritime burn risks:</strong></p>
                      <ul>
                        <li>Engine room fires and explosions</li>
                        <li>Hot steam and machinery burns</li>
                        <li>Chemical cargo exposure</li>
                        <li>Fuel and oil burns</li>
                        <li>Electrical burns from ship systems</li>
                      </ul>
                      <p><strong>Specialized treatment:</strong> Burn centers for severe cases, decontamination procedures, long-term reconstructive surgery needs.</p>

                      <h3>Drowning and Near-Drowning</h3>
                      <p><strong>Prevention and response:</strong></p>
                      <ul>
                        <li>Personal flotation device requirements</li>
                        <li>Man overboard procedures</li>
                        <li>Hypothermia prevention and treatment</li>
                        <li>Respiratory complications from saltwater</li>
                        <li>Secondary drowning symptoms to monitor</li>
                      </ul>

                      <h3>Occupational Diseases</h3>
                      <p><strong>Long-term health risks in maritime work:</strong></p>
                      <ul>
                        <li>Asbestos exposure in older vessels</li>
                        <li>Hearing loss from engine noise</li>
                        <li>Respiratory issues from cargo dust</li>
                        <li>Skin conditions from chemical exposure</li>
                        <li>Joint problems from repetitive work</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Specialized Treatment Centers */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">California Maritime Medical Centers</h2>
                
                <div className="prose prose-lg max-w-none mb-6">
                  <p className="text-lg leading-relaxed mb-4">
                    California has several medical facilities with experience treating maritime injuries. These centers 
                    understand the unique challenges of maritime accidents and can provide specialized care for complex injuries.
                  </p>
                </div>

                <Collapsible open={expandedSections.centers} onOpenChange={() => toggleSection('centers')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Complete Medical Center Directory
                      {expandedSections.centers ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Los Angeles Area Maritime Medical Facilities</h3>
                      <ul>
                        <li><strong>Harbor-UCLA Medical Center:</strong> Level I trauma center serving San Pedro port area</li>
                        <li><strong>Long Beach Memorial Medical Center:</strong> Close to Long Beach port with maritime injury experience</li>
                        <li><strong>UCLA Medical Center:</strong> Comprehensive trauma and specialized care</li>
                        <li><strong>Cedars-Sinai Medical Center:</strong> Advanced trauma and burn treatment</li>
                        <li><strong>USC Verdugo Hills Hospital:</strong> Emergency services for maritime workers</li>
                      </ul>

                      <h3>San Francisco Bay Area Centers</h3>
                      <ul>
                        <li><strong>UCSF Medical Center:</strong> Level I trauma with maritime injury specialization</li>
                        <li><strong>San Francisco General Hospital:</strong> Public hospital with trauma expertise</li>
                        <li><strong>Stanford Medical Center:</strong> Advanced care and research facility</li>
                        <li><strong>John Muir Medical Center:</strong> Trauma services for East Bay maritime workers</li>
                        <li><strong>Kaiser Permanente Oakland:</strong> Comprehensive care network</li>
                      </ul>

                      <h3>San Diego Maritime Medical Resources</h3>
                      <ul>
                        <li><strong>UC San Diego Medical Center:</strong> Level I trauma serving port area</li>
                        <li><strong>Scripps Memorial Hospital:</strong> Emergency and trauma services</li>
                        <li><strong>Sharp Memorial Hospital:</strong> Comprehensive medical care</li>
                        <li><strong>Naval Medical Center San Diego:</strong> Military maritime injury specialization</li>
                      </ul>

                      <h3>Specialized Treatment Programs</h3>
                      <ul>
                        <li><strong>Burn Centers:</strong> UC Davis, USC, UCSF for severe burn treatment</li>
                        <li><strong>Spinal Injury Centers:</strong> Specialized rehabilitation programs</li>
                        <li><strong>Occupational Medicine:</strong> Work-related injury specialists</li>
                        <li><strong>Hyperbaric Medicine:</strong> For diving-related injuries</li>
                        <li><strong>Poison Control:</strong> Chemical exposure treatment</li>
                      </ul>

                      <h3>Emergency Contact Information</h3>
                      <ul>
                        <li><strong>Coast Guard Rescue:</strong> Channel 16 VHF radio or dial 911</li>
                        <li><strong>Poison Control:</strong> 1-800-222-1222</li>
                        <li><strong>Maritime Medical Consultation:</strong> Available through Coast Guard</li>
                        <li><strong>Air Evacuation:</strong> Coast Guard and private helicopter services</li>
                      </ul>

                      <h3>Insurance and Payment Considerations</h3>
                      <p>Understanding payment for maritime medical treatment:</p>
                      <ul>
                        <li><strong>Jones Act Coverage:</strong> Employer responsible for maintenance and cure</li>
                        <li><strong>LHWCA Benefits:</strong> Federal workers' compensation for covered employees</li>
                        <li><strong>Private Insurance:</strong> May be primary for passengers and visitors</li>
                        <li><strong>Veterans Benefits:</strong> Available for military maritime personnel</li>
                        <li><strong>Emergency Treatment:</strong> Cannot be refused due to inability to pay</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Recovery and Rehabilitation */}
              <section className="content-section mb-12">
                <h2 className="text-3xl font-bold text-red-600 mb-6">Recovery and Rehabilitation Process</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Phase 1</Badge>
                      <CardTitle className="text-lg">Acute Treatment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Emergency stabilization and initial medical intervention for life-threatening injuries.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Phase 2</Badge>
                      <CardTitle className="text-lg">Active Recovery</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Ongoing medical treatment, surgery, and initial rehabilitation efforts.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <Badge variant="destructive" className="mx-auto mb-2">Phase 3</Badge>
                      <CardTitle className="text-lg">Rehabilitation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">Physical therapy, occupational therapy, and return to work preparation.</p>
                    </CardContent>
                  </Card>
                </div>

                <Collapsible open={expandedSections.recovery} onOpenChange={() => toggleSection('recovery')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      Complete Recovery and Rehabilitation Guide
                      {expandedSections.recovery ? <ChevronUp /> : <ChevronDown />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-6">
                    <div className="prose prose-lg max-w-none">
                      <h3>Physical Therapy for Maritime Injuries</h3>
                      <p>Maritime injuries often require specialized physical therapy:</p>
                      <ul>
                        <li><strong>Balance Training:</strong> Essential for return to vessel work</li>
                        <li><strong>Strength Conditioning:</strong> Rebuilding capacity for maritime tasks</li>
                        <li><strong>Flexibility Work:</strong> Addressing confined space work requirements</li>
                        <li><strong>Functional Training:</strong> Simulating actual work movements</li>
                        <li><strong>Vestibular Rehabilitation:</strong> For balance issues from head injuries</li>
                      </ul>

                      <h3>Occupational Therapy Services</h3>
                      <p>Helping maritime workers return to functional capacity:</p>
                      <ul>
                        <li>Activities of daily living assessment</li>
                        <li>Work capacity evaluations</li>
                        <li>Adaptive equipment recommendations</li>
                        <li>Job modification strategies</li>
                        <li>Cognitive rehabilitation for brain injuries</li>
                      </ul>

                      <h3>Vocational Rehabilitation</h3>
                      <p>When return to maritime work isn't possible:</p>
                      <ul>
                        <li><strong>Skills Assessment:</strong> Evaluating transferable skills</li>
                        <li><strong>Retraining Programs:</strong> New career preparation</li>
                        <li><strong>Job Placement Services:</strong> Assistance finding suitable work</li>
                        <li><strong>Educational Support:</strong> Funding for new training</li>
                        <li><strong>Accommodation Services:</strong> Workplace modification assistance</li>
                      </ul>

                      <h3>Psychological and Mental Health Support</h3>
                      <p>Maritime accidents can cause lasting psychological effects:</p>
                      <ul>
                        <li><strong>PTSD Treatment:</strong> For traumatic accident survivors</li>
                        <li><strong>Depression Counseling:</strong> Common after serious injuries</li>
                        <li><strong>Anxiety Management:</strong> Especially fear of returning to water</li>
                        <li><strong>Family Counseling:</strong> Supporting entire family through recovery</li>
                        <li><strong>Chronic Pain Psychology:</strong> Coping with ongoing pain</li>
                      </ul>

                      <h3>Return to Work Considerations</h3>
                      <p>Unique challenges of returning to maritime employment:</p>
                      <ul>
                        <li><strong>Medical Clearance:</strong> Coast Guard fitness requirements</li>
                        <li><strong>Physical Demands:</strong> Meeting job-specific requirements</li>
                        <li><strong>Safety Concerns:</strong> Addressing accident-related fears</li>
                        <li><strong>Modified Duties:</strong> Transitional work arrangements</li>
                        <li><strong>Retraining Needs:</strong> Updates on safety procedures</li>
                      </ul>

                      <h3>Long-term Medical Management</h3>
                      <p>Many maritime injuries require ongoing care:</p>
                      <ul>
                        <li>Regular specialist follow-ups</li>
                        <li>Medication management for chronic conditions</li>
                        <li>Monitoring for delayed complications</li>
                        <li>Preventive care to avoid re-injury</li>
                        <li>Coordination between multiple providers</li>
                      </ul>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </section>

              {/* Medical Rights Under Maritime Law */}
              <section className="content-section mb-12">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Your Medical Rights Under Maritime Law</h3>
                      <div className="prose prose-sm text-blue-700">
                        <p className="mb-3">
                          Maritime workers have specific rights to medical care under federal law. Understanding these 
                          rights ensures you receive proper treatment and compensation.
                        </p>
                        <ul className="space-y-1">
                          <li><strong>Maintenance and Cure:</strong> Right to medical treatment and living expenses during recovery</li>
                          <li><strong>Choice of Doctor:</strong> Right to select your own physician for treatment</li>
                          <li><strong>Second Opinions:</strong> Right to seek additional medical opinions</li>
                          <li><strong>Specialized Care:</strong> Access to specialists and advanced treatment</li>
                          <li><strong>Reasonable Treatment:</strong> All necessary medical care until maximum recovery</li>
                        </ul>
                        <p className="mt-3 font-semibold">
                          Don't let employers limit your medical care - know your rights and get proper treatment.
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
                
                {/* Emergency Contacts */}
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">Emergency Medical Contacts</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="text-center">
                      <p className="text-red-700 text-sm font-semibold mb-2">Maritime Emergency</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white"
                        onClick={() => window.location.href = 'tel:911'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call 911
                      </Button>
                    </div>
                    
                    <div className="text-center pt-2 border-t border-red-300">
                      <p className="text-red-700 text-sm font-semibold mb-2">Legal & Medical Help</p>
                      <Button 
                        variant="outline" 
                        className="w-full border-red-300 text-red-700 hover:bg-red-100"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        (818) 123-4567
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Medical Resources */}
                <Card>
                  <CardHeader>
                    <CardTitle>Medical Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Stethoscope className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Specialized Treatment</h4>
                        <p className="text-sm text-muted-foreground">Access to maritime injury specialists throughout California</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Heart className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Comprehensive Care</h4>
                        <p className="text-sm text-muted-foreground">From emergency treatment to long-term rehabilitation</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Protected Rights</h4>
                        <p className="text-sm text-muted-foreground">Ensuring your maritime medical rights are protected</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle>Medical & Legal Help</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/legal-guidance'}
                    >
                      <Building className="w-4 h-4 mr-2" />
                      Legal Guidance
                    </Button>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start text-primary hover:text-primary-foreground hover:bg-primary"
                      onClick={() => window.location.href = '/maritime/compensation-calculator'}
                    >
                      <MapPin className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>

                {/* Maintenance and Cure Info */}
                <Card className="bg-blue-50 border-blue-200">
                  <CardHeader>
                    <CardTitle className="text-blue-800">Maintenance & Cure Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-blue-700 mb-3">
                      If you're a seaman, you're entitled to maintenance and cure benefits regardless of fault. 
                      This includes all medical expenses and living allowances during recovery.
                    </p>
                    <Button 
                      size="sm"
                      variant="outline" 
                      className="w-full border-blue-300 text-blue-700 hover:bg-blue-100"
                      onClick={() => window.location.href = '/maritime/legal-guidance'}
                    >
                      Learn Your Rights
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

export default MaritimeMedicalGuidance;