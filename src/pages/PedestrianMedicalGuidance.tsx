import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  AlertTriangle, 
  Heart, 
  Brain, 
  Activity, 
  Clock, 
  FileText, 
  Shield, 
  Stethoscope,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import heroBackground from '@/assets/pedestrian-medical-guidance-hero.jpg';

const PedestrianMedicalGuidance = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  // Common injury types in pedestrian accidents
  const injuryTypes = [
    {
      title: "Traumatic Brain Injuries (TBI)",
      icon: Brain,
      severity: "Critical",
      description: "Head injuries from pavement impact or vehicle collision",
      symptoms: ["Headaches", "Confusion", "Memory loss", "Nausea", "Dizziness", "Loss of consciousness"],
      treatment: ["Immediate CT scan", "Neurological evaluation", "Rest and monitoring", "Cognitive rehabilitation"],
      longTerm: "May require lifetime care, cognitive therapy, and ongoing medical monitoring"
    },
    {
      title: "Spinal Cord Injuries",
      icon: Activity,
      severity: "Critical", 
      description: "Damage to spinal cord from impact force and compression",
      symptoms: ["Loss of sensation", "Paralysis", "Difficulty breathing", "Loss of bladder control"],
      treatment: ["Spinal immobilization", "Surgery", "Steroid treatment", "Rehabilitation therapy"],
      longTerm: "Possible permanent paralysis, requiring mobility aids and home modifications"
    },
    {
      title: "Multiple Fractures", 
      icon: Heart,
      severity: "Severe",
      description: "Broken bones throughout the body from vehicle impact",
      symptoms: ["Visible deformity", "Severe pain", "Swelling", "Inability to move limbs"],
      treatment: ["X-rays and imaging", "Surgical repair", "Casting/splinting", "Physical therapy"],
      longTerm: "May require multiple surgeries and extended rehabilitation"
    },
    {
      title: "Internal Injuries",
      icon: Heart,
      severity: "Critical",
      description: "Damage to internal organs from blunt force trauma", 
      symptoms: ["Abdominal pain", "Internal bleeding", "Difficulty breathing", "Shock"],
      treatment: ["Emergency surgery", "Blood transfusion", "Intensive care monitoring"],
      longTerm: "Possible organ damage requiring ongoing medical care"
    }
  ];

  // Treatment timeline phases
  const treatmentPhases = [
    {
      phase: "Emergency Response (0-24 hours)",
      medicalFocus: ["Life-saving interventions", "Trauma assessment", "Surgery if needed", "Stabilization"],
      legalDocumentation: ["Preserve all medical records", "Document all treatments received", "Get copies of imaging studies", "Request detailed treatment notes"]
    },
    {
      phase: "Acute Care (1-30 days)",
      medicalFocus: ["Intensive care monitoring", "Additional surgeries", "Pain management", "Infection prevention"],
      legalDocumentation: ["Keep detailed daily medical records", "Document all complications", "Track all medical expenses", "Photograph visible injuries regularly"]
    },
    {
      phase: "Rehabilitation (1-12 months)",
      medicalFocus: ["Physical therapy", "Occupational therapy", "Cognitive rehabilitation", "Adaptive equipment"],
      legalDocumentation: ["Document functional limitations", "Track therapy progress", "Keep expense receipts", "Get disability assessments"]
    },
    {
      phase: "Long-term Recovery (1+ years)", 
      medicalFocus: ["Ongoing therapy", "Medical maintenance", "Adaptive modifications", "Psychological support"],
      legalDocumentation: ["Annual medical evaluations", "Life care planning", "Vocational assessments", "Future care projections"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Pedestrian Accident Medical Guidance | California Legal Help"
        description="Essential medical guidance for California pedestrian accident victims. Learn about injury treatment, documentation, and legal rights after being struck by a vehicle."
        canonical="/pedestrian-medical-guidance"
      />
      
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pedestrian Accident Medical Guidance
          </h1>
          <p className="text-xl opacity-90 mb-6">
            Critical medical information and legal documentation for California pedestrian accident victims
          </p>
          <div className="flex items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2">Trusted Medical & Legal Guidance</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Emergency Alert */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center text-red-600">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Medical Emergency? Call 911 Immediately
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-red-800 mb-4">
                  If you've been struck by a vehicle and have any of these symptoms, seek emergency medical care immediately:
                </p>
                <ul className="text-red-800 text-sm space-y-1 mb-4">
                  <li>• Loss of consciousness or altered mental state</li>
                  <li>• Severe head, neck, or back pain</li>
                  <li>• Difficulty breathing or chest pain</li>
                  <li>• Visible severe injuries or deformities</li>
                  <li>• Signs of internal bleeding</li>
                </ul>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Call 911 Now
                </Button>
              </CardContent>
            </Card>

            {/* Common Pedestrian Accident Injuries */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Pedestrian Accident Injuries</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Pedestrian accidents often result in severe injuries due to the lack of protection against vehicle impact. 
                Understanding these injury patterns helps ensure proper medical care and legal documentation.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {injuryTypes.map((injury, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <injury.icon className="w-8 h-8 text-red-600" />
                        <Badge variant={injury.severity === "Critical" ? "destructive" : "secondary"}>
                          {injury.severity}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg">{injury.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{injury.description}</p>
                    </CardHeader>
                    
                    <Collapsible open={expandedSections[`injury-${index}`]} onOpenChange={() => toggleSection(`injury-${index}`)}>
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between px-6">
                          Learn More About This Injury
                          {expandedSections[`injury-${index}`] ? <ChevronUp /> : <ChevronDown />}
                        </Button>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="px-6 pb-6">
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Common Symptoms:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {injury.symptoms.map((symptom, i) => (
                                <li key={i}>• {symptom}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Typical Treatment:</h4>
                            <ul className="text-sm text-muted-foreground space-y-1">
                              {injury.treatment.map((treatment, i) => (
                                <li key={i}>• {treatment}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm mb-2">Long-term Impact:</h4>
                            <p className="text-sm text-muted-foreground">{injury.longTerm}</p>
                          </div>
                        </div>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>

            {/* Treatment Timeline */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Treatment and Recovery Timeline</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Understanding the phases of recovery helps you prepare for the medical journey ahead and 
                ensures proper legal documentation at each stage.
              </p>
              
              <div className="space-y-6">
                {treatmentPhases.map((phase, index) => (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Clock className="w-6 h-6 text-red-600 mr-3" />
                        {phase.phase}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-sm mb-3 flex items-center">
                            <Stethoscope className="w-4 h-4 mr-2 text-red-600" />
                            Medical Focus Areas
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {phase.medicalFocus.map((focus, i) => (
                              <li key={i}>• {focus}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-sm mb-3 flex items-center">
                            <FileText className="w-4 h-4 mr-2 text-red-600" />
                            Legal Documentation Tips
                          </h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            {phase.legalDocumentation.map((doc, i) => (
                              <li key={i}>• {doc}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Essential Medical Documentation */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Essential Medical Documentation</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-6 h-6 text-red-600 mr-3" />
                      Medical Records to Obtain
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Emergency room records and ambulance reports</li>
                      <li>• All imaging studies (X-rays, CT scans, MRIs)</li>
                      <li>• Surgery reports and operative notes</li>
                      <li>• Hospital discharge summaries</li>
                      <li>• Physical therapy progress notes</li>
                      <li>• All prescription medication records</li>
                      <li>• Medical equipment and device documentation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-6 h-6 text-red-600 mr-3" />
                      Personal Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm space-y-2">
                      <li>• Daily pain and symptom diary</li>
                      <li>• Photos of visible injuries (dated)</li>
                      <li>• Work absence documentation</li>
                      <li>• Activity limitation records</li>
                      <li>• Medical expense receipts</li>
                      <li>• Transportation costs to appointments</li>
                      <li>• Home modification expenses</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-3">Pro Tip: Medical Record Requests</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Request medical records in writing and keep copies of your requests. California law gives you 
                    the right to your medical records, but providers may charge copying fees. We can help obtain 
                    records and negotiate fee waivers when appropriate.
                  </p>
                  <Button variant="outline" size="sm" className="border-blue-300 text-blue-700">
                    <Phone className="w-4 h-4 mr-2" />
                    Get Help with Medical Records
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Paying for Treatment */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Paying for Medical Treatment</h2>
              
              <div className="space-y-6">
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Health Insurance Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use your health insurance for immediate treatment. Your insurer will seek reimbursement from 
                      the settlement later. Don't delay treatment due to payment concerns.
                    </p>
                    <ul className="text-sm space-y-2">
                      <li>• Contact insurance company to verify coverage</li>
                      <li>• Understand deductibles and co-pays</li>
                      <li>• Keep all insurance communications</li>
                      <li>• We'll negotiate lien reductions later</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Medical Payments Coverage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Your auto insurance's medical payments coverage applies to pedestrian accidents, 
                      providing additional coverage without affecting your rates.
                    </p>
                    <Button variant="outline" size="sm">
                      Check Your Auto Insurance Policy
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Letters of Protection</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      We can arrange letters of protection guaranteeing payment to medical providers from 
                      your settlement, allowing you to receive treatment without upfront costs.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Recovery and Rehabilitation */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Physical and Psychological Recovery</h2>
              
              <Card className="glass-card">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Activity className="w-5 h-5 text-red-600 mr-2" />
                        Physical Rehabilitation
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• Physical therapy for mobility and strength</li>
                        <li>• Occupational therapy for daily activities</li>
                        <li>• Speech therapy for brain injury recovery</li>
                        <li>• Pain management techniques</li>
                        <li>• Adaptive equipment training</li>
                        <li>• Home modification planning</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-4 flex items-center">
                        <Brain className="w-5 h-5 text-red-600 mr-2" />
                        Psychological Support
                      </h3>
                      <ul className="text-sm text-muted-foreground space-y-2">
                        <li>• PTSD counseling and treatment</li>
                        <li>• Anxiety and depression support</li>
                        <li>• Coping strategy development</li>
                        <li>• Family counseling services</li>
                        <li>• Support group participation</li>
                        <li>• Cognitive behavioral therapy</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Emergency Contact */}
              <Card className="bg-gradient-to-b from-red-50 to-red-100 border-red-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-600">Need Legal Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-200 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/pedestrian-case-evaluation'}
                  >
                    Free Case Evaluation
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground pt-4 border-t">
                    <p className="font-semibold">Available 24/7</p>
                    <p>Former Defense Attorney</p>
                    <p>No Fees Unless We Win</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Medical Tips */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Quick Medical Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Seek Treatment Immediately</div>
                      <div className="text-xs text-muted-foreground">Even if you feel fine initially</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Document Everything</div>
                      <div className="text-xs text-muted-foreground">Keep detailed records and photos</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mt-1 mr-3" />
                    <div>
                      <div className="font-semibold text-sm">Don't Delay Treatment</div>
                      <div className="text-xs text-muted-foreground">Use available insurance options</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Resources */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-red-600">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/pedestrian-case-evaluation'}
                  >
                    Case Evaluation Form
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/pedestrian-compensation-calculator'}
                  >
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full justify-start"
                    onClick={() => window.location.href = '/practice-areas/pedestrian-accidents'}
                  >
                    Pedestrian Accident Info
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Focus on Healing - We'll Handle Your Legal Case
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Medical recovery after a pedestrian accident is challenging enough. Let our experienced 
            attorneys handle the legal complexities while you concentrate on getting better.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-red-600 hover:bg-red-50 border-white text-lg px-8 py-4"
              onClick={() => window.location.href = '/pedestrian-case-evaluation'}
            >
              Get Legal Help Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/10 text-lg px-8 py-4"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PedestrianMedicalGuidance;