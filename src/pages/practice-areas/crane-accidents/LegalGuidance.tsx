import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ChevronDown, 
  ChevronUp,
  Phone,
  Mail,
  MessageCircle,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  AlertTriangle,
  FileText,
  HardHat,
  Construction
} from 'lucide-react';

import SEO from '@/components/SEO';
import legalGuidanceImage from '@/assets/crane-legal-guidance-hero.jpg';

const CraneAccidentsLegalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Crane Accident Legal Guidance | California Construction Law | Trembach Law Firm"
        description="Comprehensive legal guidance for crane accident victims in California. Learn your rights, legal process, and how to protect your claim."
        keywords="crane accident legal guidance, construction accident law, California OSHA regulations, crane safety violations"
        canonical="/practice-areas/crane-accidents/legal-guidance"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${legalGuidanceImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Crane Accident Legal Guidance
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Understanding Your Rights After a Construction Crane Accident
          </p>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Comprehensive legal information to help you navigate the complex process of seeking compensation 
            for crane accident injuries in California.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Scale className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-foreground">Your Legal Rights After a Crane Accident</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-lg text-foreground">
                  If you've been injured in a crane accident in California, you have important legal rights that must be protected immediately. Understanding these rights and the legal process can make the difference between a successful claim and inadequate compensation.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                    <h3 className="text-lg font-bold text-green-800 mb-3">You Have the Right To:</h3>
                    <ul className="space-y-2 text-sm text-green-700">
                      <li>• Receive immediate medical care</li>
                      <li>• File claims against all liable parties</li>
                      <li>• Recover full damages for your injuries</li>
                      <li>• Legal representation at no upfront cost</li>
                      <li>• Refuse recorded statements from insurers</li>
                      <li>• Have evidence preserved and investigated</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                    <h3 className="text-lg font-bold text-red-800 mb-3">Immediate Threats to Avoid:</h3>
                    <ul className="space-y-2 text-sm text-red-700">
                      <li>• Quick settlement offers from insurance</li>
                      <li>• Giving recorded statements without counsel</li>
                      <li>• Signing releases or waivers</li>
                      <li>• Accepting blame for the accident</li>
                      <li>• Delay in seeking medical attention</li>
                      <li>• Allowing evidence to be destroyed</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* OSHA Regulations Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <HardHat className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-foreground">OSHA Crane Safety Regulations</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6">
                  The Occupational Safety and Health Administration (OSHA) has comprehensive regulations governing crane operations. Violations of these standards can significantly strengthen your legal case.
                </p>

                <Collapsible open={expandedSections.osha} onOpenChange={() => toggleSection('osha')}>
                  <CollapsibleTrigger asChild>
                    <Button variant="outline" className="w-full justify-between mb-4">
                      <span className="text-foreground">Learn More About OSHA Crane Standards</span>
                      {expandedSections.osha ? <ChevronUp className="text-foreground" /> : <ChevronDown className="text-foreground" />}
                    </Button>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="space-y-4">
                    <div className="bg-muted p-6 rounded-lg">
                      <h4 className="font-bold mb-3 text-foreground">Key OSHA Crane Standards (29 CFR 1926.1400-1442):</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-foreground">
                        <div>
                          <h5 className="font-semibold mb-2">Operator Requirements:</h5>
                          <ul className="space-y-1">
                            <li>• Certified operator required</li>
                            <li>• Type-specific training mandatory</li>
                            <li>• Annual recertification</li>
                            <li>• Medical fitness standards</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Inspection Requirements:</h5>
                          <ul className="space-y-1">
                            <li>• Daily pre-operational inspections</li>
                            <li>• Monthly safety inspections</li>
                            <li>• Annual comprehensive inspections</li>
                            <li>• Post-incident investigations</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Safety Protocols:</h5>
                          <ul className="space-y-1">
                            <li>• Load capacity compliance</li>
                            <li>• Signal person requirements</li>
                            <li>• Ground conditions assessment</li>
                            <li>• Weather limitations</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold mb-2">Maintenance Standards:</h5>
                          <ul className="space-y-1">
                            <li>• Manufacturer specifications</li>
                            <li>• Documented maintenance records</li>
                            <li>• Immediate repair requirements</li>
                            <li>• Parts replacement protocols</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </CardContent>
            </Card>

            {/* Legal Process Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-foreground">The Legal Process for Crane Accident Cases</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Phase 1: Immediate Response (Days 1-30)</h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Emergency medical treatment and stabilization</li>
                      <li>• Scene investigation and evidence preservation</li>
                      <li>• Witness interviews and statement collection</li>
                      <li>• OSHA notification and investigation initiation</li>
                      <li>• Insurance company notifications</li>
                      <li>• Legal representation engagement</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Phase 2: Investigation (Months 1-6)</h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Comprehensive accident reconstruction</li>
                      <li>• Expert witness consultation and analysis</li>
                      <li>• Medical evaluation and prognosis development</li>
                      <li>• Employment and financial records review</li>
                      <li>• Equipment inspection and testing</li>
                      <li>• Liability analysis and defendant identification</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Phase 3: Formal Legal Action (Months 6-18)</h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Lawsuit filing and defendant service</li>
                      <li>• Discovery process and document exchange</li>
                      <li>• Depositions of parties and witnesses</li>
                      <li>• Expert witness preparation and reports</li>
                      <li>• Mediation and settlement negotiations</li>
                      <li>• Trial preparation if settlement fails</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-bold mb-3 text-foreground">Phase 4: Resolution (Months 12-36)</h3>
                    <ul className="space-y-2 text-foreground">
                      <li>• Final settlement negotiations</li>
                      <li>• Trial proceedings if necessary</li>
                      <li>• Jury deliberation and verdict</li>
                      <li>• Post-trial motions and appeals (if applicable)</li>
                      <li>• Settlement distribution and case closure</li>
                      <li>• Ongoing medical care coordination</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Liable Parties Section */}
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  <span className="text-foreground">Who Can Be Held Liable?</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground mb-6">
                  Crane accidents often involve multiple parties who may share responsibility. Our investigation identifies all potentially liable parties to maximize your compensation.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">Primary Parties</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">General Contractor</h4>
                        <p className="text-sm text-muted-foreground">Overall site safety responsibility</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Crane Owner/Operator</h4>
                        <p className="text-sm text-muted-foreground">Equipment operation and maintenance</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Property Owner</h4>
                        <p className="text-sm text-muted-foreground">Site conditions and safety oversight</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Equipment Manufacturer</h4>
                        <p className="text-sm text-muted-foreground">Design defects and failure to warn</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-primary/20">
                    <CardHeader>
                      <CardTitle className="text-lg text-foreground">Secondary Parties</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-foreground">Subcontractors</h4>
                        <p className="text-sm text-muted-foreground">Specialized work and coordination</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Maintenance Companies</h4>
                        <p className="text-sm text-muted-foreground">Equipment servicing and repairs</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Training Providers</h4>
                        <p className="text-sm text-muted-foreground">Inadequate operator instruction</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Government Entities</h4>
                        <p className="text-sm text-muted-foreground">Permit approval and site oversight</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>

            {/* Time Limits Section */}
            <Card className="glass-card border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-800">
                  <Clock className="w-6 h-6 mr-3" />
                  Critical Time Limits
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2">California Statute of Limitations:</h4>
                    <p className="text-red-700 text-sm">
                      Personal injury claims must be filed within <strong>2 years</strong> from the date of accident. 
                      Wrongful death claims also have a 2-year deadline from the date of death.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2">Government Claims:</h4>
                    <p className="text-red-700 text-sm">
                      Claims against government entities require notice within <strong>6 months</strong> and 
                      must be filed within 1 year of the incident.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-bold text-red-800 mb-2">Evidence Preservation:</h4>
                    <p className="text-red-700 text-sm">
                      Critical evidence can be lost within <strong>days</strong> of an accident. 
                      Immediate legal action is required to preserve evidence through spoliation notices.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card className="glass-card border-primary/20">
                <CardHeader>
                  <CardTitle className="text-center text-foreground">Get Immediate Help</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="text-white">Call (818) 123-4567</span>
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
                    onClick={() => window.location.href = '/practice-areas/crane-accidents/case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  
                  <Button 
                    variant="outline"
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white"
                    onClick={() => window.location.href = '/practice-areas/crane-accidents/compensation-calculator'}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Calculate Damages
                  </Button>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-foreground">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <Award className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground">Former defense attorney insight</span>
                  </div>
                  <div className="flex items-start">
                    <Construction className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground">Construction accident specialists</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground">24/7 emergency response</span>
                  </div>
                  <div className="flex items-start">
                    <Users className="w-4 h-4 text-primary mt-1 mr-3 flex-shrink-0" />
                    <span className="text-foreground">No fees unless we win</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3 text-blue-800">Urgent Action Required</h4>
                  <p className="text-sm text-blue-700 mb-4">
                    Crane accident evidence disappears quickly. Construction sites are cleaned up, 
                    witnesses forget details, and documents can be lost or destroyed.
                  </p>
                  <p className="text-sm font-semibold text-blue-800">
                    Contact us immediately to protect your rights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraneAccidentsLegalGuidance;