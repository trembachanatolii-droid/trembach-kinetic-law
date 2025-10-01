import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Stethoscope, 
  AlertTriangle, 
  Clock, 
  FileText, 
  Phone, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Users,
  PawPrint,
  Activity,
  Thermometer,
  Syringe,
  Pill,
  Bandage,
  Brain
} from 'lucide-react';
import heroImage from '@/assets/dog-bite-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';

const DogBiteMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const medicalSteps = [
    {
      id: 'immediate',
      title: 'Immediate Care (First 30 Minutes)',
      icon: AlertTriangle,
      priority: 'CRITICAL',
      steps: [
        'Control bleeding with direct pressure using clean cloth',
        'Elevate the injured area above heart level if possible',
        'Do not attempt to close deep wounds',
        'Remove jewelry from injured area before swelling occurs',
        'Take photos of injuries for documentation',
        'Call 911 if bleeding is severe or victim shows signs of shock'
      ]
    },
    {
      id: 'cleaning',
      title: 'Wound Cleaning and Assessment',
      icon: Shield,
      priority: 'URGENT',
      steps: [
        'Wash hands thoroughly before touching wound',
        'Rinse wound gently with clean water or saline solution',
        'Apply antiseptic solution around (not directly in) the wound',
        'Assess wound depth - if you can see fat, muscle, or bone, seek immediate medical care',
        'Check for foreign objects in wound (do not remove)',
        'Cover with sterile bandage or clean cloth'
      ]
    },
    {
      id: 'medical',
      title: 'Professional Medical Care',
      icon: Stethoscope,
      priority: 'ESSENTIAL',
      steps: [
        'Seek medical attention within 24 hours (sooner for severe wounds)',
        'Provide complete medical history to healthcare provider',
        'Discuss tetanus vaccination status',
        'Ask about rabies prophylaxis based on dog vaccination status',
        'Request antibiotic prophylaxis to prevent infection',
        'Document all injuries with medical photographs'
      ]
    }
  ];

  const warningSigns = [
    {
      category: 'Infection Signs',
      symptoms: [
        'Increasing redness around wound',
        'Red streaking from wound site',
        'Pus or unusual discharge',
        'Fever over 100.4°F (38°C)',
        'Increasing pain after initial 48 hours',
        'Wound becoming warm to touch'
      ]
    },
    {
      category: 'Neurological Concerns',
      symptoms: [
        'Numbness or tingling',
        'Loss of sensation in affected area',
        'Difficulty moving injured body part',
        'Weakness in surrounding muscles',
        'Severe or worsening headache',
        'Confusion or altered mental state'
      ]
    },
    {
      category: 'Circulation Problems',
      symptoms: [
        'Fingers or toes turning blue/gray',
        'Inability to feel pulse below injury',
        'Severe swelling that doesn\'t improve',
        'Skin that stays white when pressed',
        'Extreme coldness in injured area'
      ]
    }
  ];

  const treatmentOptions = [
    {
      type: 'Emergency Treatment',
      procedures: [
        'Wound irrigation and debridement',
        'Tetanus booster injection',
        'Rabies post-exposure prophylaxis',
        'Antibiotic prescription',
        'Surgical repair for deep wounds',
        'Pain management protocols'
      ]
    },
    {
      type: 'Reconstructive Surgery',
      procedures: [
        'Plastic surgery for facial wounds',
        'Skin grafts for large areas',
        'Scar revision procedures',
        'Nerve repair surgery',
        'Tendon reconstruction',
        'Bone fracture repair'
      ]
    },
    {
      type: 'Psychological Treatment',
      procedures: [
        'Trauma-focused therapy',
        'EMDR for PTSD symptoms',
        'Cognitive behavioral therapy',
        'Anxiety management',
        'Support group participation',
        'Family counseling'
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Dog Bite Medical Guidance - Emergency Care & Treatment | California"
        description="Complete medical guidance for dog bite injuries. Learn immediate care steps, treatment options, and when to seek emergency help. Expert advice from California attorneys."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
        {/* Hero Section */}
        <div 
          className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImage})` }}
        >
          <div className="text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              <Stethoscope className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold">
                Dog Bite Medical Guidance
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Critical medical information for dog bite victims and their families
            </p>
          </div>
        </div>

        {/* Emergency Banner */}
        <div className="bg-destructive text-destructive-foreground py-4">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="text-lg font-semibold">
                EMERGENCY: Call 911 immediately for severe bleeding, signs of shock, or loss of consciousness
              </span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          
          {/* Immediate Action Steps */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Immediate Medical Response Steps
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {medicalSteps.map((step, index) => (
                <Card key={step.id} className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="flex items-center justify-center mb-4">
                      <div className="bg-primary rounded-full p-4">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                    <Badge variant={step.priority === 'CRITICAL' ? 'destructive' : step.priority === 'URGENT' ? 'default' : 'secondary'} className="mb-2">
                      {step.priority}
                    </Badge>
                    <CardTitle className="text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {step.steps.map((item, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <div className="bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground text-sm font-bold mt-0.5 flex-shrink-0">
                            {stepIndex + 1}
                          </div>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Warning Signs */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Warning Signs Requiring Immediate Medical Attention
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {warningSigns.map((category, index) => (
                <Card key={index} className="border border-destructive/20 shadow-xl bg-destructive/5">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-destructive">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.symptoms.map((symptom, sympIndex) => (
                        <li key={sympIndex} className="flex items-start space-x-2">
                          <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Treatment Options */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Comprehensive Treatment Options
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {treatmentOptions.map((treatment, index) => (
                <Card key={index} className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <CardTitle className="text-xl text-primary">{treatment.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {treatment.procedures.map((procedure, procIndex) => (
                        <li key={procIndex} className="flex items-start space-x-2">
                          <div className="bg-primary/10 rounded-full p-1">
                            <FileText className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-sm">{procedure}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Detailed Medical Information */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Detailed Medical Information
            </h2>

            {/* Infection Prevention */}
            <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
              <Collapsible>
                <CollapsibleTrigger 
                  className="w-full"
                  onClick={() => toggleSection('infection')}
                >
                  <CardHeader className="hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Shield className="w-8 h-8 text-primary" />
                        <CardTitle className="text-2xl">Infection Prevention and Management</CardTitle>
                      </div>
                      {expandedSections.infection ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Prevention Strategies</h4>
                        <ul className="space-y-2">
                          <li>• Immediate thorough wound cleaning</li>
                          <li>• Prophylactic antibiotic therapy</li>
                          <li>• Proper wound dressing and care</li>
                          <li>• Regular wound monitoring</li>
                          <li>• Maintaining tetanus vaccination</li>
                          <li>• Following up with healthcare provider</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Common Complications</h4>
                        <ul className="space-y-2">
                          <li>• Cellulitis and soft tissue infection</li>
                          <li>• Osteomyelitis (bone infection)</li>
                          <li>• Septic arthritis</li>
                          <li>• Necrotizing fasciitis (rare but serious)</li>
                          <li>• Abscess formation</li>
                          <li>• Delayed wound healing</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Rabies Information */}
            <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
              <Collapsible>
                <CollapsibleTrigger 
                  className="w-full"
                  onClick={() => toggleSection('rabies')}
                >
                  <CardHeader className="hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Syringe className="w-8 h-8 text-primary" />
                        <CardTitle className="text-2xl">Rabies Prevention and Treatment</CardTitle>
                      </div>
                      {expandedSections.rabies ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Risk Assessment</h4>
                        <ul className="space-y-2">
                          <li>• Dog vaccination status unknown</li>
                          <li>• Wild or stray animal involvement</li>
                          <li>• Unprovoked attack</li>
                          <li>• Animal showing abnormal behavior</li>
                          <li>• Geographic rabies prevalence</li>
                          <li>• Severity and location of wound</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Post-Exposure Protocol</h4>
                        <ul className="space-y-2">
                          <li>• Immediate wound cleaning (critical)</li>
                          <li>• Rabies immune globulin (RIG)</li>
                          <li>• Rabies vaccine series (4 doses)</li>
                          <li>• Timeline: Days 0, 3, 7, 14</li>
                          <li>• No delay in treatment initiation</li>
                          <li>• 100% effective if started promptly</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Psychological Impact */}
            <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
              <Collapsible>
                <CollapsibleTrigger 
                  className="w-full"
                  onClick={() => toggleSection('psychological')}
                >
                  <CardHeader className="hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Brain className="w-8 h-8 text-primary" />
                        <CardTitle className="text-2xl">Psychological Impact and Treatment</CardTitle>
                      </div>
                      {expandedSections.psychological ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Common Psychological Effects</h4>
                        <ul className="space-y-2">
                          <li>• Post-traumatic stress disorder (PTSD)</li>
                          <li>• Anxiety and panic attacks</li>
                          <li>• Fear of dogs (cynophobia)</li>
                          <li>• Depression and mood changes</li>
                          <li>• Sleep disturbances and nightmares</li>
                          <li>• Social withdrawal and avoidance</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-4">Treatment Approaches</h4>
                        <ul className="space-y-2">
                          <li>• Trauma-focused cognitive behavioral therapy</li>
                          <li>• Eye Movement Desensitization and Reprocessing (EMDR)</li>
                          <li>• Exposure therapy for specific phobias</li>
                          <li>• Medication management when appropriate</li>
                          <li>• Support groups and peer counseling</li>
                          <li>• Family therapy and education</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>

            {/* Recovery Timeline */}
            <Card className="border border-primary/20 shadow-xl bg-card/50 backdrop-blur-sm">
              <Collapsible>
                <CollapsibleTrigger 
                  className="w-full"
                  onClick={() => toggleSection('recovery')}
                >
                  <CardHeader className="hover:bg-primary/5 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Activity className="w-8 h-8 text-primary" />
                        <CardTitle className="text-2xl">Recovery Timeline and Expectations</CardTitle>
                      </div>
                      {expandedSections.recovery ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                    </div>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Clock className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">Days 1-7</h4>
                          <ul className="text-sm space-y-1">
                            <li>Initial wound healing</li>
                            <li>Infection monitoring</li>
                            <li>Pain management</li>
                            <li>Follow-up appointments</li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Bandage className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">Weeks 2-6</h4>
                          <ul className="text-sm space-y-1">
                            <li>Tissue regeneration</li>
                            <li>Scar formation</li>
                            <li>Physical therapy</li>
                            <li>Psychological support</li>
                          </ul>
                        </div>
                        <div className="text-center">
                          <div className="bg-primary/10 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-primary" />
                          </div>
                          <h4 className="text-lg font-semibold mb-2">Months 2-12</h4>
                          <ul className="text-sm space-y-1">
                            <li>Scar maturation</li>
                            <li>Functional recovery</li>
                            <li>Ongoing therapy</li>
                            <li>Return to activities</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="mt-16">
            <Card className="border border-primary/20 shadow-xl bg-primary/5">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Need Legal Help With Your Medical Bills?</h3>
                <p className="text-lg mb-6">
                  Our experienced attorneys can help you recover compensation for medical expenses, 
                  lost wages, and pain and suffering.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => window.location.href = '/dog-bite-case-evaluation'}
                    className="flex items-center space-x-2"
                  >
                    <FileText className="w-5 h-5" />
                    <span>Free Case Evaluation</span>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.location.href = 'tel:8181234567'}
                    className="flex items-center space-x-2"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call (818) 123-4567</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default DogBiteMedicalGuidance;