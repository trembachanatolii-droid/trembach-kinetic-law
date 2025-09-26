import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Activity, 
  Pill, 
  Phone,
  Mail,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Users,
  Target,
  TrendingUp,
  Shield,
  Clock,
  Info,
  BookOpen,
  Zap,
  Thermometer
} from 'lucide-react';
import SEO from '@/components/SEO';

import heroBackground from '@/assets/paralysis-medical-guidance-hero.jpg';

const ParalysisMedicalGuidance: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );
    });
    return () => ctx.revert();
  }, []);

  const immediateSteps = [
    {
      title: "Emergency Medical Care",
      description: "Immediate stabilization of the spine to prevent further injury. Do not move the person unless absolutely necessary.",
      priority: "Critical",
      icon: AlertTriangle,
      timeframe: "Immediately"
    },
    {
      title: "Neurological Assessment",
      description: "Comprehensive evaluation using the ASIA (American Spinal Injury Association) scale to determine level and completeness of injury.",
      priority: "High",
      icon: Brain,
      timeframe: "Within hours"
    },
    {
      title: "Imaging Studies",
      description: "CT scans, MRI, and X-rays to visualize the extent of spinal cord damage and any fractures.",
      priority: "High",
      icon: Activity,
      timeframe: "Within hours"
    },
    {
      title: "Medication Protocol",
      description: "High-dose methylprednisolone may be administered within 8 hours to reduce swelling and secondary injury.",
      priority: "Time-Sensitive",
      icon: Pill,
      timeframe: "Within 8 hours"
    }
  ];

  const treatmentPhases = [
    {
      phase: "Acute Phase (0-72 hours)",
      focus: "Stabilization & Prevention",
      treatments: [
        "Spinal immobilization and surgical stabilization if needed",
        "Management of secondary complications (breathing, circulation)",
        "Prevention of blood clots with anticoagulation therapy",
        "Bladder catheterization and bowel management",
        "Pain management and medication protocols"
      ],
      icon: AlertTriangle,
      color: "text-red-600"
    },
    {
      phase: "Sub-acute Phase (3 days - 3 months)",
      focus: "Medical Management & Early Rehabilitation",
      treatments: [
        "Comprehensive rehabilitation program initiation",
        "Physical and occupational therapy assessment",
        "Respiratory management and ventilator weaning if needed",
        "Skin integrity monitoring and pressure sore prevention",
        "Psychological support and counseling services"
      ],
      icon: Heart,
      color: "text-orange-600"
    },
    {
      phase: "Chronic Phase (3+ months)",
      focus: "Long-term Management & Adaptation",
      treatments: [
        "Advanced mobility training and equipment fitting",
        "Vocational rehabilitation and return-to-work planning",
        "Management of secondary health conditions",
        "Community reintegration and adaptive sports programs",
        "Ongoing medical monitoring and preventive care"
      ],
      icon: TrendingUp,
      color: "text-green-600"
    }
  ];

  const medicalComplications = [
    {
      category: "Respiratory Complications",
      conditions: [
        "Pneumonia and respiratory infections",
        "Reduced lung capacity and function",
        "Sleep apnea and breathing difficulties",
        "Ventilator dependency (high cervical injuries)"
      ],
      management: "Regular pulmonary function tests, chest physiotherapy, vaccination protocols",
      icon: Activity
    },
    {
      category: "Cardiovascular Issues",
      conditions: [
        "Autonomic dysreflexia (dangerous blood pressure spikes)",
        "Orthostatic hypotension (low blood pressure when upright)",
        "Deep vein thrombosis and pulmonary embolism",
        "Reduced cardiovascular fitness"
      ],
      management: "Blood pressure monitoring, compression stockings, anticoagulation, cardiac rehabilitation",
      icon: Heart
    },
    {
      category: "Neurological Concerns",
      conditions: [
        "Chronic neuropathic pain",
        "Spasticity and muscle spasms",
        "Autonomic dysfunction",
        "Post-traumatic syringomyelia (fluid-filled cysts)"
      ],
      management: "Pain management programs, antispasticity medications, regular neurological monitoring",
      icon: Brain
    },
    {
      category: "Genitourinary Problems",
      conditions: [
        "Neurogenic bladder and kidney dysfunction",
        "Urinary tract infections",
        "Sexual dysfunction and fertility issues",
        "Kidney stones and renal complications"
      ],
      management: "Catheter management, regular urology follow-up, fertility preservation counseling",
      icon: Thermometer
    }
  ];

  const rehabilitationServices = [
    {
      service: "Physical Therapy",
      description: "Mobility training, strength building, and equipment assessment",
      goals: ["Maximize remaining function", "Prevent contractures", "Improve endurance"],
      icon: Users
    },
    {
      service: "Occupational Therapy",
      description: "Activities of daily living, adaptive equipment, and workplace modifications",
      goals: ["Independent living skills", "Vocational retraining", "Home modifications"],
      icon: Target
    },
    {
      service: "Speech Therapy",
      description: "Communication assistance for those with tracheostomies or breathing difficulties",
      goals: ["Effective communication", "Swallowing safety", "Voice restoration"],
      icon: BookOpen
    },
    {
      service: "Psychology/Psychiatry",
      description: "Mental health support for adjustment, depression, and anxiety",
      goals: ["Emotional adaptation", "Coping strategies", "Family counseling"],
      icon: Shield
    }
  ];

  const emergencySignsData = [
    {
      sign: "Autonomic Dysreflexia",
      symptoms: ["Sudden severe headache", "High blood pressure", "Sweating above injury level", "Slow heart rate"],
      action: "Remove triggering stimulus, sit upright, seek immediate medical attention",
      severity: "Medical Emergency"
    },
    {
      sign: "Respiratory Distress",
      symptoms: ["Difficulty breathing", "Chest pain", "Rapid breathing", "Blue lips/fingernails"],
      action: "Call 911 immediately, assist with positioning, check airway clearance",
      severity: "Life Threatening"
    },
    {
      sign: "Signs of Infection",
      symptoms: ["Fever", "Chills", "Increased spasticity", "Cloudy urine", "Pressure sores"],
      action: "Contact healthcare provider, monitor temperature, increase fluid intake",
      severity: "Urgent Medical Care"
    },
    {
      sign: "Deep Vein Thrombosis",
      symptoms: ["Leg swelling", "Pain or tenderness", "Warmth and redness", "Shortness of breath"],
      action: "Seek immediate medical evaluation, avoid massaging affected area",
      severity: "Medical Emergency"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Paralysis Medical Guidance - Spinal Cord Injury Treatment & Care | California"
        description="Comprehensive medical guidance for paralysis and spinal cord injuries. Learn about treatment options, rehabilitation, and long-term care management in California."
        keywords="paralysis medical guidance, spinal cord injury treatment, paralysis rehabilitation, California spinal cord care, paralysis medical management"
      />

      

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-content"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Paralysis Medical Guidance
            </h1>
            <p className="text-xl mb-6 text-white">
              Comprehensive medical information for spinal cord injury patients and families
            </p>
            <div className="flex items-center justify-center space-x-6">
              <Badge variant="secondary" className="bg-green-600 text-white px-4 py-2">
                <Stethoscope className="w-4 h-4 mr-2" />
                Expert Medical Guidance
              </Badge>
              <Badge variant="secondary" className="bg-blue-600 text-white px-4 py-2">
                <Heart className="w-4 h-4 mr-2" />
                Comprehensive Care
              </Badge>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Immediate Medical Steps */}
        <section className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Immediate Medical Response to Paralysis</h2>
            <p className="text-xl text-muted-foreground">
              Critical medical steps in the first hours after spinal cord injury
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {immediateSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <Card key={index} className={`${step.priority === 'Critical' ? 'border-red-500' : 
                  step.priority === 'Time-Sensitive' ? 'border-orange-500' : 'border-blue-500'}`}>
                  <CardHeader className="text-center">
                    <div className={`w-12 h-12 rounded-full ${step.priority === 'Critical' ? 'bg-red-100 dark:bg-red-900' :
                      step.priority === 'Time-Sensitive' ? 'bg-orange-100 dark:bg-orange-900' :
                      'bg-blue-100 dark:bg-blue-900'} flex items-center justify-center mx-auto mb-3`}>
                      <IconComponent className={`w-6 h-6 ${step.priority === 'Critical' ? 'text-red-600' :
                        step.priority === 'Time-Sensitive' ? 'text-orange-600' : 'text-blue-600'}`} />
                    </div>
                    <Badge variant={step.priority === 'Critical' ? 'destructive' : 'secondary'} className="mb-2">
                      {step.priority}
                    </Badge>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{step.timeframe}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-center">{step.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Treatment Phases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Medical Treatment Phases</h2>
          
          <div className="space-y-6">
            {treatmentPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <div className="flex items-center">
                      <div className={`w-12 h-12 rounded-full ${phase.color === 'text-red-600' ? 'bg-red-100 dark:bg-red-900' :
                        phase.color === 'text-orange-600' ? 'bg-orange-100 dark:bg-orange-900' :
                        'bg-green-100 dark:bg-green-900'} flex items-center justify-center mr-4`}>
                        <IconComponent className={`w-6 h-6 ${phase.color}`} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.phase}</CardTitle>
                        <p className="text-muted-foreground">{phase.focus}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {phase.treatments.map((treatment, treatmentIndex) => (
                        <div key={treatmentIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-sm">{treatment}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Medical Complications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Common Medical Complications & Management</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {medicalComplications.map((complication, index) => {
              const IconComponent = complication.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-6 h-6 mr-3 text-primary" />
                      {complication.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Common Conditions:</h4>
                      <ul className="space-y-1">
                        {complication.conditions.map((condition, conditionIndex) => (
                          <li key={conditionIndex} className="flex items-start">
                            <AlertTriangle className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{condition}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Management Approach:</h4>
                      <p className="text-sm text-muted-foreground">{complication.management}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Rehabilitation Services */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Essential Rehabilitation Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {rehabilitationServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className="w-6 h-6 mr-3 text-primary" />
                      {service.service}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Goals:</h4>
                      <ul className="space-y-1">
                        {service.goals.map((goal, goalIndex) => (
                          <li key={goalIndex} className="flex items-start">
                            <Target className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Emergency Warning Signs */}
        <section className="mb-12">
          <Card className="border-red-200 dark:border-red-800">
            <CardHeader>
              <CardTitle className="flex items-center text-red-700 dark:text-red-300">
                <AlertTriangle className="w-6 h-6 mr-3" />
                Emergency Warning Signs - When to Seek Immediate Medical Care
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {emergencySignsData.map((emergency, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold">{emergency.sign}</h4>
                      <Badge variant={emergency.severity === 'Life Threatening' || emergency.severity === 'Medical Emergency' ? 'destructive' : 'secondary'}>
                        {emergency.severity}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Symptoms:</h5>
                        <ul className="text-sm space-y-1">
                          {emergency.symptoms.map((symptom, symptomIndex) => (
                            <li key={symptomIndex} className="flex items-start">
                              <AlertTriangle className="w-3 h-3 text-red-500 mr-2 mt-1 flex-shrink-0" />
                              {symptom}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="text-sm font-medium mb-1">Immediate Action:</h5>
                        <p className="text-sm text-muted-foreground">{emergency.action}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Medical Team Coordination */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Healthcare Team */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  Your Medical Team
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <Stethoscope className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Physiatrist (Rehabilitation Medicine)</h4>
                    <p className="text-sm text-muted-foreground">Coordinates overall rehabilitation plan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Brain className="w-5 h-5 text-purple-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Neurologist</h4>
                    <p className="text-sm text-muted-foreground">Monitors nervous system function</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Heart className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Specialized Nurses</h4>
                    <p className="text-sm text-muted-foreground">Day-to-day medical care management</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Activity className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Therapists (PT/OT/ST)</h4>
                    <p className="text-sm text-muted-foreground">Functional rehabilitation specialists</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-orange-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Social Workers</h4>
                    <p className="text-sm text-muted-foreground">Resource coordination and support</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Medical Records & Documentation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-primary" />
                  Medical Documentation Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Keep Detailed Records</h4>
                    <p className="text-sm text-muted-foreground">Document all symptoms, treatments, and changes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Request Medical Records</h4>
                    <p className="text-sm text-muted-foreground">Obtain copies of all test results and reports</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Track Medication Changes</h4>
                    <p className="text-sm text-muted-foreground">Monitor effectiveness and side effects</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Document Functional Changes</h4>
                    <p className="text-sm text-muted-foreground">Note improvements or deterioration in abilities</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h4 className="font-semibold">Financial Documentation</h4>
                    <p className="text-sm text-muted-foreground">Save all medical bills and insurance statements</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-blue-500/10">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold mb-4">Need Legal Guidance for Your Medical Situation?</h2>
              <p className="text-xl text-muted-foreground mb-6">
                Our attorneys work closely with medical experts to ensure you receive proper care and maximum compensation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8"
                  onClick={() => window.location.href = '/practice-areas/paralysis/case-evaluation'}
                >
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Free Case Evaluation
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call: (818) 123-4567
                </Button>
              </div>
              
              <div className="flex items-center justify-center space-x-6 mt-6">
                <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Medical-Legal Expertise
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                  <Clock className="w-4 h-4 mr-2" />
                  24/7 Support
                </Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="mt-8 p-4 bg-muted rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Medical Disclaimer:</strong> This information is for educational purposes only and should not replace professional medical advice. 
            Always consult with qualified healthcare providers for diagnosis, treatment, and medical decisions. Individual medical conditions vary, 
            and treatment should be tailored to specific circumstances by licensed medical professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParalysisMedicalGuidance;