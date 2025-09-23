import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Phone,
  ChevronDown,
  ChevronUp,
  MapPin,
  Calendar,
  Shield
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/uber-lyft-medical-hero.jpg';

const UberLyftMedicalGuidance = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-background">
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
            Medical Guidance for Uber/Lyft Accident Victims
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Essential medical information and treatment guidance for rideshare accident injuries in California.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-8">

            {/* Immediate Medical Response */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-2xl text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6" />
                  Immediate Medical Response
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-green-800">Do This Immediately</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li>✓ Call 911 if seriously injured</li>
                          <li>✓ Accept ambulance transport if recommended</li>
                          <li>✓ Report all pain, even if minor</li>
                          <li>✓ Get complete medical documentation</li>
                          <li>✓ Follow all treatment recommendations</li>
                          <li>✓ Keep all medical receipts</li>
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-red-200 bg-red-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg text-red-800">Avoid These Mistakes</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>✗ Refusing medical attention</li>
                          <li>✗ Saying "I'm fine" to responders</li>
                          <li>✗ Delaying treatment for cost concerns</li>
                          <li>✗ Minimizing symptoms to doctors</li>
                          <li>✗ Missing follow-up appointments</li>
                          <li>✗ Stopping treatment too early</li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Rideshare Injuries */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Stethoscope className="w-6 h-6" />
                  Common Uber/Lyft Accident Injuries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  {/* Traumatic Brain Injuries */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('brain-injury')}
                      >
                        <div className="flex items-center gap-3">
                          <Brain className="w-5 h-5 text-red-600" />
                          <div>
                            <h3 className="font-semibold text-lg">Traumatic Brain Injuries (TBI)</h3>
                            <p className="text-sm text-muted-foreground">Concussions, brain bleeding, cognitive impairment</p>
                          </div>
                        </div>
                        {expandedSections['brain-injury'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-red-700 mb-2">Symptoms to Watch For:</h4>
                          <ul className="grid md:grid-cols-2 gap-1 text-sm">
                            <li>• Headaches or pressure</li>
                            <li>• Confusion or disorientation</li>
                            <li>• Memory problems</li>
                            <li>• Nausea or vomiting</li>
                            <li>• Dizziness or balance issues</li>
                            <li>• Sensitivity to light/sound</li>
                            <li>• Mood changes or irritability</li>
                            <li>• Sleep disturbances</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Recommended Treatment:</h4>
                          <p className="text-sm">Immediate CT scan or MRI, neurological evaluation, cognitive rest, graduated return to activities, ongoing monitoring by neurologist or brain injury specialist.</p>
                        </div>
                        <Alert className="border-orange-200 bg-orange-50">
                          <AlertTriangle className="h-4 w-4 text-orange-600" />
                          <div className="text-orange-800">
                            <strong>Critical:</strong> Brain injury symptoms may not appear for hours or days. Always seek immediate evaluation after any head impact.
                          </div>
                        </Alert>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Whiplash and Neck Injuries */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('whiplash')}
                      >
                        <div className="flex items-center gap-3">
                          <Heart className="w-5 h-5 text-orange-600" />
                          <div>
                            <h3 className="font-semibold text-lg">Whiplash & Neck Injuries</h3>
                            <p className="text-sm text-muted-foreground">Cervical strain, herniated discs, nerve damage</p>
                          </div>
                        </div>
                        {expandedSections['whiplash'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-orange-700 mb-2">Common Symptoms:</h4>
                          <ul className="grid md:grid-cols-2 gap-1 text-sm">
                            <li>• Neck pain and stiffness</li>
                            <li>• Reduced range of motion</li>
                            <li>• Headaches</li>
                            <li>• Shoulder pain</li>
                            <li>• Arm pain or numbness</li>
                            <li>• Muscle spasms</li>
                            <li>• Fatigue</li>
                            <li>• Sleep difficulties</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Treatment Protocol:</h4>
                          <p className="text-sm">X-rays and MRI imaging, physical therapy, chiropractic care, pain management, muscle relaxants, injection therapy if needed, ongoing monitoring for chronic symptoms.</p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>

                  {/* Spinal Cord Injuries */}
                  <Collapsible>
                    <CollapsibleTrigger asChild>
                      <Button 
                        variant="outline" 
                        className="w-full justify-between text-left p-4 h-auto"
                        onClick={() => toggleSection('spinal-injury')}
                      >
                        <div className="flex items-center gap-3">
                          <Shield className="w-5 h-5 text-purple-600" />
                          <div>
                            <h3 className="font-semibold text-lg">Spinal Cord Injuries</h3>
                            <p className="text-sm text-muted-foreground">Partial/complete paralysis, nerve damage</p>
                          </div>
                        </div>
                        {expandedSections['spinal-injury'] ? <ChevronUp /> : <ChevronDown />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 p-4 bg-gray-50 rounded-lg">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-purple-700 mb-2">Emergency Signs:</h4>
                          <ul className="grid md:grid-cols-2 gap-1 text-sm">
                            <li>• Loss of movement or sensation</li>
                            <li>• Severe back/neck pain</li>
                            <li>• Weakness in limbs</li>
                            <li>• Numbness or tingling</li>
                            <li>• Loss of bladder/bowel control</li>
                            <li>• Difficulty breathing</li>
                            <li>• Unnatural head/back position</li>
                            <li>• Balance problems</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Critical Care Needs:</h4>
                          <p className="text-sm">Immediate spinal immobilization, emergency surgery if needed, specialized spinal cord unit care, comprehensive rehabilitation, adaptive equipment, lifetime medical monitoring.</p>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                  
                </div>
              </CardContent>
            </Card>

            {/* Treatment Timeline */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <Clock className="w-6 h-6" />
                  Treatment Timeline & Recovery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      phase: "Immediate (0-72 hours)",
                      title: "Emergency Response",
                      description: "Emergency room evaluation, diagnostic imaging, pain management, injury documentation, treatment plan development.",
                      color: "red"
                    },
                    {
                      phase: "Acute (1-4 weeks)",
                      title: "Primary Treatment",
                      description: "Follow specialist appointments, begin prescribed therapy, medication management, symptom monitoring, work restrictions.",
                      color: "orange"
                    },
                    {
                      phase: "Recovery (1-6 months)",
                      title: "Rehabilitation Phase",
                      description: "Physical therapy, occupational therapy, pain management, gradual activity increase, return-to-work planning.",
                      color: "blue"
                    },
                    {
                      phase: "Long-term (6+ months)",
                      title: "Ongoing Care",
                      description: "Maintenance therapy, chronic pain management, psychological support, vocational rehabilitation, life adaptations.",
                      color: "green"
                    }
                  ].map((phase, index) => (
                    <div key={index} className="flex gap-4">
                      <div className={`w-4 h-4 rounded-full bg-${phase.color}-500 mt-2 flex-shrink-0`} />
                      <div>
                        <Badge variant="outline" className="mb-2">{phase.phase}</Badge>
                        <h3 className="font-semibold text-lg mb-2">{phase.title}</h3>
                        <p className="text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* California Medical Resources */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  California Rideshare Accident Medical Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Major Trauma Centers</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• UCLA Medical Center (Los Angeles)</li>
                      <li>• UCSF Medical Center (San Francisco)</li>
                      <li>• UC San Diego Medical Center</li>
                      <li>• Cedars-Sinai Medical Center</li>
                      <li>• Stanford Hospital</li>
                      <li>• USC Keck Medical Center</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-3">Specialized Care</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• Brain injury rehabilitation centers</li>
                      <li>• Spinal cord injury specialists</li>
                      <li>• Pain management clinics</li>
                      <li>• Physical therapy networks</li>
                      <li>• Mental health providers</li>
                      <li>• Occupational therapists</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-primary flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Protecting Your Medical Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">Essential Documentation</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Emergency room records</li>
                        <li>• Diagnostic imaging results</li>
                        <li>• Physician treatment notes</li>
                        <li>• Therapy session records</li>
                        <li>• Medication prescriptions</li>
                        <li>• Medical expense receipts</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Documentation Tips</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Keep detailed symptom diary</li>
                        <li>• Photograph visible injuries</li>
                        <li>• Save all medical bills</li>
                        <li>• Request complete records</li>
                        <li>• Track missed work days</li>
                        <li>• Document impact on daily life</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Get Legal Help for Medical Issues</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We can arrange medical treatment on a lien basis and help you get the care you need without upfront costs.
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
                    Free Case Evaluation
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
          <h2 className="text-3xl font-bold mb-6">Don't Wait - Get Medical Treatment Now</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Delayed treatment can worsen your injuries and hurt your legal case. We can arrange treatment without upfront costs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-gray-100"
              onClick={() => window.location.href = '/uber-lyft-case-evaluation'}
            >
              <FileText className="w-5 h-5 mr-2" />
              Get Medical Treatment Help
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20"
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

export default UberLyftMedicalGuidance;