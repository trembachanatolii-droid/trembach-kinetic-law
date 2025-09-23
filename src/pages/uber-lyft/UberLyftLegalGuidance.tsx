import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Scale, 
  Shield, 
  FileText, 
  AlertTriangle, 
  Clock, 
  Phone,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Users,
  DollarSign,
  Gavel
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-legal-hero.jpg';

const UberLyftLegalGuidance = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="uberlyft-page min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Legal Guidance for Uber/Lyft Accident Cases
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto body-text">
            Navigate California's complex rideshare accident laws with expert legal guidance and representation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">

            {/* California Rideshare Laws */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  California Rideshare Laws & Regulations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('ab5-prop22')}
                      >
                        <div>
                          <h3 className="font-semibold text-lg">AB5 & Proposition 22 Impact</h3>
                          <p className="text-sm text-muted-foreground">How California's gig worker laws affect your case</p>
                        </div>
                        {expandedSections['ab5-prop22'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <p className="text-sm">
                          California's Assembly Bill 5 (AB5) attempted to classify rideshare drivers as employees, which would have made Uber and Lyft directly liable for driver actions. However, Proposition 22 (2020) allows these companies to maintain independent contractor status while providing some benefits.
                        </p>
                        <div>
                          <h4 className="font-semibold mb-2">What This Means for Your Case:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Companies still maintain insurance obligations</li>
                            <li>• Corporate liability still possible for negligent hiring/safety failures</li>
                            <li>• Enhanced background check requirements</li>
                            <li>• Stricter safety protocols and reporting</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('insurance-periods')}
                      >
                        <div>
                          <h3 className="font-semibold text-lg">Three-Period Insurance System</h3>
                          <p className="text-sm text-muted-foreground">Understanding coverage levels and disputes</p>
                        </div>
                        {expandedSections['insurance-periods'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <Card className="border-yellow-200 bg-yellow-50">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm text-yellow-800">Period 1</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-yellow-700">App on, no passenger assigned</p>
                              <p className="font-semibold text-yellow-800">$50K/$100K liability</p>
                            </CardContent>
                          </Card>
                          <Card className="border-orange-200 bg-orange-50">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm text-orange-800">Period 2</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-orange-700">Ride accepted, en route</p>
                              <p className="font-semibold text-orange-800">$1 Million liability</p>
                            </CardContent>
                          </Card>
                          <Card className="border-green-200 bg-green-50">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-sm text-green-800">Period 3</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <p className="text-xs text-green-700">Passenger in vehicle</p>
                              <p className="font-semibold text-green-800">$1 Million liability</p>
                            </CardContent>
                          </Card>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Common Coverage Disputes:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Whether driver was truly "available" for rides</li>
                            <li>• Route deviations and coverage gaps</li>
                            <li>• Multiple app usage by drivers</li>
                            <li>• Personal vs. commercial insurance conflicts</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('liability-theories')}
                      >
                        <div>
                          <h3 className="font-semibold text-lg">Corporate Liability Theories</h3>
                          <p className="text-sm text-muted-foreground">How to hold Uber/Lyft directly responsible</p>
                        </div>
                        {expandedSections['liability-theories'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Negligent Hiring & Screening:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Inadequate background checks</li>
                            <li>• Failure to verify driving records</li>
                            <li>• Ignoring criminal history red flags</li>
                            <li>• Insufficient ongoing monitoring</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Platform Design Defects:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Distraction-causing app features</li>
                            <li>• Algorithmic pressure promoting unsafe driving</li>
                            <li>• GPS errors causing accidents</li>
                            <li>• Inadequate safety features</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Safety System Failures:</h4>
                          <ul className="space-y-1 text-sm text-muted-foreground">
                            <li>• Failure to respond to safety complaints</li>
                            <li>• Inadequate driver training programs</li>
                            <li>• Poor vehicle maintenance standards</li>
                            <li>• Insufficient emergency response protocols</li>
                          </ul>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                </div>
              </CardContent>
            </Card>

            {/* Legal Process Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Legal Process Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      phase: "Immediate (0-30 days)",
                      title: "Case Investigation",
                      description: "Evidence preservation, witness interviews, accident reconstruction, medical record collection, insurance claim filing.",
                      actions: ["Preserve app data", "Collect police reports", "Interview witnesses", "Document injuries"]
                    },
                    {
                      phase: "Discovery (1-6 months)",
                      title: "Building Your Case",
                      description: "Medical treatment documentation, expert witness retention, deposition scheduling, damage calculation, settlement negotiations.",
                      actions: ["Medical evaluations", "Expert analysis", "Damage assessment", "Initial negotiations"]
                    },
                    {
                      phase: "Litigation (6-18 months)",
                      title: "Court Proceedings",
                      description: "Lawsuit filing, formal discovery, mediation attempts, trial preparation, jury selection, trial proceedings.",
                      actions: ["File lawsuit", "Discovery process", "Mediation", "Trial preparation"]
                    },
                    {
                      phase: "Resolution",
                      title: "Case Settlement",
                      description: "Final negotiations, settlement agreement, trial verdict, payment processing, case closure.",
                      actions: ["Final settlement", "Payment collection", "Case closure", "Appeal if needed"]
                    }
                  ].map((phase, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <Badge variant="outline">{phase.phase}</Badge>
                          <h3 className="font-semibold text-lg">{phase.title}</h3>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mb-3">{phase.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.actions.map((action, actionIndex) => (
                            <div key={actionIndex} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full" />
                              <span>{action}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Rights Under California Law */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Shield className="w-6 h-6" />
                  Your Rights Under California Law
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-green-700">You Have the Right To:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Full compensation for all damages</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Medical treatment on lien basis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Refuse recorded statements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Legal representation without upfront costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Reject inadequate settlement offers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Trial by jury if needed</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3 text-red-700">Insurance Companies Cannot:</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Force you to accept quick settlements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Deny coverage without valid reasons</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Pressure you into recorded statements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Access your medical records without permission</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Delay payments unreasonably</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span>Discriminate based on immigration status</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Statute of Limitations */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Critical Time Limits - Don't Delay!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-red-300 bg-white">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-700">Personal Injury Claims</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600 mb-1">2 Years</div>
                        <p className="text-sm text-red-600">From date of accident or discovery of injury</p>
                      </CardContent>
                    </Card>
                    <Card className="border-red-300 bg-white">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-700">Property Damage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600 mb-1">3 Years</div>
                        <p className="text-sm text-red-600">From date of accident</p>
                      </CardContent>
                    </Card>
                    <Card className="border-red-300 bg-white">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-red-700">Government Claims</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600 mb-1">6 Months</div>
                        <p className="text-sm text-red-600">If government vehicle involved</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-700 mb-2">Why Time Matters:</h4>
                    <ul className="space-y-1 text-sm text-red-600">
                      <li>• Evidence disappears or gets destroyed</li>
                      <li>• Witnesses forget important details</li>
                      <li>• Companies delete app data and records</li>
                      <li>• Medical conditions may worsen without documentation</li>
                      <li>• Insurance companies become less cooperative</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Why Choose Former Defense Attorney */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Users className="w-6 h-6" />
                  Why Choose a Former Defense Attorney
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Inside Knowledge Advantage</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Understand insurance company tactics</li>
                      <li>• Know their settlement strategies</li>
                      <li>• Familiar with defense expert witnesses</li>
                      <li>• Experienced in trial defense methods</li>
                      <li>• Understand case valuation from both sides</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Strategic Advantages</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Anticipate defense arguments</li>
                      <li>• Counter insurance delay tactics</li>
                      <li>• Maximize settlement negotiations</li>
                      <li>• Prepare stronger trial presentations</li>
                      <li>• Avoid common plaintiff mistakes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get Expert Legal Guidance Today</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Don't navigate complex rideshare accident laws alone. Get experienced legal representation that knows how to fight insurance companies and win.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex-1"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Legal Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Don't Wait Section */}
      <section className="bg-gradient-to-r from-destructive to-destructive/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Don't Wait - Time Limits Apply for California Rideshare Cases</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            California's statute of limitations gives you only 2 years to file. Evidence disappears and cases get harder to win over time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Your Free Legal Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-primary-foreground hover:bg-white/20 hover:!text-primary"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftLegalGuidance;