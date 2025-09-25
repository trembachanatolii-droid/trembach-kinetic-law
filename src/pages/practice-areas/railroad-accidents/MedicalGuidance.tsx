import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Mail, Stethoscope, Heart, Brain, Activity, AlertTriangle, Clock, Shield, Users, FileText, MapPin } from 'lucide-react';
import heroBackground from '@/assets/railroad-guidance-hero.jpg';
import medicalImage from '@/assets/railroad-medical-facility.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
const RailroadAccidentsMedicalGuidance: React.FC = () => {
  const specialists = [{
    specialty: "Traumatic Brain Injury",
    description: "Neurologists and neurosurgeons specializing in railroad accident head trauma",
    icon: Brain,
    urgency: "Emergency",
    specialties: ["Concussion Treatment", "TBI Rehabilitation", "Cognitive Recovery"],
    locations: ["UCLA Medical Center", "Cedars-Sinai", "UCSF Medical Center"]
  }, {
    specialty: "Spinal Cord Injuries",
    description: "Orthopedic surgeons and neurologists for spinal trauma from train accidents",
    icon: Activity,
    urgency: "Critical",
    specialties: ["Spinal Surgery", "Paralysis Treatment", "Rehabilitation Medicine"],
    locations: ["Stanford Medicine", "USC Keck Medicine", "Kaiser Permanente"]
  }, {
    specialty: "Orthopedic Trauma",
    description: "Specialists in complex fractures and musculoskeletal injuries",
    icon: Heart,
    urgency: "Urgent",
    specialties: ["Complex Fractures", "Joint Reconstruction", "Amputation Care"],
    locations: ["Scripps Health", "Sharp Healthcare", "Sutter Health"]
  }];
  const medicalSteps = [{
    step: 1,
    title: "Immediate Emergency Care",
    description: "Life-saving treatment at the accident scene and emergency transport",
    actions: ["Call 911 immediately", "Accept ambulance transport if recommended", "Provide complete medical history to EMTs", "Allow emergency stabilization procedures"]
  }, {
    step: 2,
    title: "Emergency Room Evaluation",
    description: "Comprehensive trauma assessment and initial treatment",
    actions: ["Full body trauma scan (CT, MRI)", "Blood work and vital signs monitoring", "Pain management and stabilization", "Documentation of all injuries"]
  }, {
    step: 3,
    title: "Specialist Consultations",
    description: "Expert evaluation by railroad injury specialists",
    actions: ["Neurological evaluation for head trauma", "Orthopedic assessment for fractures", "Psychological evaluation for trauma", "Occupational therapy assessment"]
  }, {
    step: 4,
    title: "Long-term Treatment Planning",
    description: "Comprehensive care plan for recovery and rehabilitation",
    actions: ["Physical therapy and rehabilitation", "Follow-up specialist appointments", "Pain management protocols", "Return-to-work evaluation"]
  }];
  return <div className="min-h-screen bg-background">
      <SEO title="Railroad Accident Medical Guidance | FELA Injury Treatment | California Train Accident Doctors" description="Medical guidance for California railroad accident victims. FELA injury specialists, treatment options, and medical care coordination for train accident injuries." keywords="railroad accident medical guidance, FELA injury treatment, train accident doctors, California railroad injury specialists" />

      <GoBack fallbackPath="/practice-areas/railroad-accidents" />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Railroad Accident Medical Guidance
          </h1>
          <p className="text-xl text-white/90">Expert medical care comake text whiteordination for railroad accident victims</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Medical Steps Process */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4 flex items-center">
                <Stethoscope className="w-8 h-8 mr-3" />
                Medical Response Process for Railroad Accidents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img src={medicalImage} alt="Railroad Medical Facility" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {medicalSteps.map(step => <Card key={step.step} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="flex items-center text-primary">
                        <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                          {step.step}
                        </div>
                        {step.title}
                      </CardTitle>
                      <p className="text-muted-foreground">{step.description}</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {step.actions.map((action, index) => <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{action}</span>
                          </li>)}
                      </ul>
                    </CardContent>
                  </Card>)}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Specialist Directory */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Railroad Injury Specialists in California</CardTitle>
              <p className="text-muted-foreground">Connect with medical experts who understand railroad accident injuries</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {specialists.map((specialist, index) => {
                const IconComponent = specialist.icon;
                return <Card key={index} className="border-primary/20 hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <IconComponent className="w-8 h-8 text-primary" />
                          <Badge variant={specialist.urgency === 'Emergency' ? 'destructive' : specialist.urgency === 'Critical' ? 'secondary' : 'default'}>
                            {specialist.urgency}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{specialist.specialty}</CardTitle>
                        <p className="text-muted-foreground text-sm">{specialist.description}</p>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h5 className="font-semibold text-sm mb-2">Specialties:</h5>
                            <ul className="space-y-1">
                              {specialist.specialties.map((spec, idx) => <li key={idx} className="text-sm text-muted-foreground">• {spec}</li>)}
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-sm mb-2 flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              Locations:
                            </h5>
                            <ul className="space-y-1">
                              {specialist.locations.map((location, idx) => <li key={idx} className="text-sm text-muted-foreground">• {location}</li>)}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>;
              })}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Common Railroad Injuries */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Common Railroad Accident Injuries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-700">Catastrophic Injuries</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-red-600">
                      <li>• <strong>Traumatic Brain Injuries:</strong> Concussions, skull fractures, cognitive impairment</li>
                      <li>• <strong>Spinal Cord Injuries:</strong> Paralysis, herniated discs, nerve damage</li>
                      <li>• <strong>Amputations:</strong> Loss of limbs from crushing forces</li>
                      <li>• <strong>Severe Burns:</strong> Electrical burns, chemical exposure</li>
                      <li>• <strong>Multiple Fractures:</strong> Complex orthopedic injuries</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="bg-orange-50 border-orange-200">
                  <CardHeader>
                    <CardTitle className="text-orange-700">Occupational Injuries (FELA)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-orange-600">
                      <li>• <strong>Repetitive Stress:</strong> Joint and muscle strain from railroad work</li>
                      <li>• <strong>Hearing Loss:</strong> Noise-induced damage from train operations</li>
                      <li>• <strong>Respiratory Issues:</strong> Diesel exhaust exposure, asbestos</li>
                      <li>• <strong>Back Injuries:</strong> Lifting, coupling, and track maintenance</li>
                      <li>• <strong>Chemical Exposure:</strong> Toxic substance contact</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Treatment Coordination */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Medical Care Coordination</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Users className="w-5 h-5 mr-2" />
                      Treatment Team
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-green-600">
                    <p className="text-sm mb-3">We coordinate with your medical team to ensure comprehensive care:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Primary care physicians</li>
                      <li>• Specialist consultations</li>
                      <li>• Physical therapy</li>
                      <li>• Mental health support</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <FileText className="w-5 h-5 mr-2" />
                      Documentation
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-blue-600">
                    <p className="text-sm mb-3">Proper medical documentation strengthens your case:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Medical record collection</li>
                      <li>• Expert medical opinions</li>
                      <li>• Treatment cost tracking</li>
                      <li>• Prognosis documentation</li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-700">
                      <Shield className="w-5 h-5 mr-2" />
                      Legal Protection
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-purple-600">
                    <p className="text-sm mb-3">We protect your rights during medical treatment:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Insurance communication</li>
                      <li>• Medical lien management</li>
                      <li>• Treatment authorization</li>
                      <li>• Second opinion rights</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-8">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-red-600 mb-4">Medical Emergency After Railroad Accident?</h2>
                <p className="text-lg text-red-700 mb-6">
                  Immediate medical attention is crucial. We can help coordinate care while protecting your legal rights.
                </p>
                <div className="space-y-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mr-4" onClick={() => window.location.href = 'tel:8181234567'}>
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency Legal Support: (818) 123-4567
                  </Button>
                  <div className="mt-4">
                    <p className="text-red-600 font-semibold">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Available 24/7 • Medical-Legal Coordination • No Fees Unless We Win
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>;
};
export default RailroadAccidentsMedicalGuidance;