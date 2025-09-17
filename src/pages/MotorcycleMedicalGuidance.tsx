import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  Clock,
  AlertTriangle,
  Heart,
  Brain,
  Bone,
  Activity,
  Stethoscope,
  FileText,
  ChevronDown,
  ChevronUp,
  Shield,
  Award,
  Star,
  Users,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/motorcycle-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';

const MotorcycleMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const injuryTypes = [
    {
      icon: Brain,
      title: "Traumatic Brain Injuries",
      severity: "Critical",
      description: "Head injuries are the leading cause of death in motorcycle accidents, even with helmet use.",
      symptoms: ["Headaches", "Confusion", "Memory loss", "Dizziness", "Nausea", "Vision problems"],
      treatment: "Immediate emergency care, CT scans, possible surgery, long-term rehabilitation",
      longTerm: "May require lifelong care, cognitive therapy, occupational training, and family support."
    },
    {
      icon: Activity,
      title: "Spinal Cord Injuries", 
      severity: "Critical",
      description: "Spinal injuries can cause permanent paralysis and require immediate stabilization.",
      symptoms: ["Loss of movement", "Loss of sensation", "Breathing difficulties", "Severe back pain"],
      treatment: "Emergency stabilization, surgery, intensive rehabilitation, assistive devices",
      longTerm: "May result in paralysis, require wheelchair accessibility, ongoing medical care."
    },
    {
      icon: Bone,
      title: "Fractures & Broken Bones",
      severity: "Serious", 
      description: "Motorcycle accidents often cause multiple fractures due to impact forces.",
      symptoms: ["Visible deformity", "Severe pain", "Inability to move", "Swelling", "Bruising"],
      treatment: "X-rays, casting, possible surgery, physical therapy",
      longTerm: "May cause permanent mobility issues, arthritis, chronic pain, reduced function."
    },
    {
      icon: Heart,
      title: "Internal Injuries",
      severity: "Critical",
      description: "Internal bleeding and organ damage may not be immediately apparent.",
      symptoms: ["Abdominal pain", "Difficulty breathing", "Lightheadedness", "Rapid pulse"],
      treatment: "Emergency surgery, blood transfusions, intensive care monitoring",
      longTerm: "May require multiple surgeries, organ function monitoring, dietary restrictions."
    }
  ];

  const treatmentPhases = [
    {
      phase: "Emergency Care (First 24-48 Hours)",
      priority: "Life-saving treatment",
      actions: [
        "Stabilize vital signs and breathing",
        "Prevent further spinal injury",
        "Control bleeding and treat shock", 
        "Emergency surgery if needed",
        "Pain management and monitoring"
      ],
      legal: "Document all emergency treatment, medications given, and initial diagnoses for your case."
    },
    {
      phase: "Acute Care (Days 2-14)",
      priority: "Prevent complications",
      actions: [
        "Comprehensive injury assessment",
        "Surgical repairs and stabilization",
        "Infection prevention",
        "Early mobility when safe",
        "Specialist consultations"
      ],
      legal: "Keep detailed records of all treatments, procedures, and specialist recommendations."
    },
    {
      phase: "Rehabilitation (Weeks to Months)",
      priority: "Restore function",
      actions: [
        "Physical therapy and occupational therapy",
        "Pain management programs",
        "Psychological counseling",
        "Adaptive equipment training",
        "Return to work planning"
      ],
      legal: "Document functional limitations and need for ongoing care in your legal case."
    },
    {
      phase: "Long-term Care (Ongoing)",
      priority: "Maintain quality of life", 
      actions: [
        "Regular medical monitoring",
        "Continued therapy as needed",
        "Assistive device maintenance",
        "Home modifications",
        "Family support and education"
      ],
      legal: "Essential for calculating future medical costs and life care planning in settlements."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Motorcycle Accident Medical Guidance | Understanding Your Injuries & Treatment"
        description="Comprehensive medical guidance for motorcycle accident victims. Understanding injuries, treatment options, and recovery process in California."
        canonical="/motorcycle-medical-guidance"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Go Back Button - positioned properly */}
        <div className="absolute top-6 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Motorcycle Accident Medical Guidance
          </h1>
          <p className="text-xl mb-6">
            Understanding your injuries, treatment options, and recovery process
          </p>
          <Badge className="bg-red-600 text-white px-6 py-2 text-lg">
            Critical Information for Your Recovery & Legal Case
          </Badge>
        </div>
      </section>

      {/* Emergency Alert */}
      <section className="bg-red-50 border-l-4 border-red-500 py-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-start">
            <AlertTriangle className="w-8 h-8 text-red-600 mr-4 mt-1" />
            <div>
              <h2 className="text-xl font-bold text-red-800 mb-2">Medical Emergency? Call 911 Immediately</h2>
              <p className="text-red-700 mb-3">
                If you're experiencing severe pain, difficulty breathing, loss of consciousness, or any life-threatening symptoms, 
                seek emergency medical care immediately. This guidance is for informational purposes only.
              </p>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = 'tel:911'}
              >
                Call Emergency Services: 911
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Common Motorcycle Injuries */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Common Motorcycle Accident Injuries</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Motorcycle accidents often result in severe injuries due to the lack of protection. 
              Understanding these injuries helps ensure proper treatment and documentation for your legal case.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {injuryTypes.map((injury, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <injury.icon className="w-8 h-8 text-red-600 mr-3" />
                      <CardTitle className="text-xl">{injury.title}</CardTitle>
                    </div>
                    <Badge 
                      variant={injury.severity === 'Critical' ? 'destructive' : 'secondary'}
                      className={injury.severity === 'Critical' ? 'bg-red-600' : 'bg-orange-500'}
                    >
                      {injury.severity}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{injury.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-2">Common Symptoms:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {injury.symptoms.map((symptom, idx) => (
                        <li key={idx}>• {symptom}</li>
                      ))}
                    </ul>
                  </div>

                  <Collapsible open={expandedSections[`injury-${index}`]} onOpenChange={() => toggleSection(`injury-${index}`)}>
                    <CollapsibleTrigger asChild>
                      <Button variant="outline" className="w-full justify-between">
                        Learn About Treatment & Long-term Effects
                        {expandedSections[`injury-${index}`] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4 space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Treatment Approach:</h4>
                        <p className="text-sm text-muted-foreground">{injury.treatment}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Long-term Considerations:</h4>
                        <p className="text-sm text-muted-foreground">{injury.longTerm}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Treatment Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Treatment & Recovery Timeline</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Understanding the phases of medical treatment helps you prepare for recovery and ensures 
              proper documentation for your legal case.
            </p>
          </div>

          <div className="space-y-8">
            {treatmentPhases.map((phase, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-6">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold">{phase.phase}</h3>
                      <Badge className="bg-blue-100 text-blue-800">{phase.priority}</Badge>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Medical Focus Areas:</h4>
                        <ul className="space-y-2">
                          {phase.actions.map((action, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground text-sm">{action}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-2 flex items-center">
                          <FileText className="w-4 h-4 mr-2" />
                          Legal Documentation Tip:
                        </h4>
                        <p className="text-sm text-muted-foreground">{phase.legal}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Medical Documentation Guide */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Critical Medical Documentation for Your Legal Case</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Essential Medical Records to Obtain:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Emergency room records and ambulance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>All hospital admission and discharge summaries</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Surgical reports and operative notes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>All diagnostic imaging (X-rays, CT scans, MRIs)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Physical therapy and rehabilitation records</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Prescription records and medication lists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                    <span>Doctor's notes about work restrictions</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Personal Documentation Tips:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Take photos of visible injuries throughout healing</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Keep a daily pain and symptom journal</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Document how injuries affect daily activities</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Save all medical bills and receipts</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Record missed work days and lost income</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Note emotional and psychological impacts</span>
                  </li>
                  <li className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-orange-500 mr-2 mt-0.5" />
                    <span>Track transportation costs for medical care</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg">
              <h4 className="text-lg font-semibold mb-3 text-red-800">Important Legal Considerations:</h4>
              <ul className="space-y-2 text-red-700">
                <li>• Never minimize pain or symptoms to medical providers</li>
                <li>• Attend all scheduled medical appointments</li>
                <li>• Follow all treatment recommendations completely</li>
                <li>• Don't sign medical releases for insurance companies without attorney review</li>
                <li>• Be cautious about social media posts showing physical activities</li>
              </ul>
            </div>
          </Card>
        </section>

        {/* Insurance & Payment Options */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Paying for Medical Treatment</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Health Insurance</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Use your health insurance for immediate care</li>
                <li>• Keep detailed records of all payments</li>
                <li>• Insurance may seek reimbursement from settlement</li>
                <li>• Negotiate liens when settlement is reached</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Medical Payments Coverage</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Available through your motorcycle insurance</li>
                <li>• Covers medical bills regardless of fault</li>
                <li>• Usually $1,000-$10,000 in coverage</li>
                <li>• No deductible required</li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Letters of Protection</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Attorney guarantees payment from settlement</li>
                <li>• Allows treatment without upfront payment</li>
                <li>• Helps when insurance denies coverage</li>
                <li>• Ensures you get necessary care</li>
              </ul>
            </Card>
          </div>
        </section>

        {/* Recovery & Rehabilitation */}
        <section className="mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">Recovery & Rehabilitation Process</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Physical Recovery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Physical Therapy Goals:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Restore range of motion and flexibility</li>
                      <li>• Rebuild strength and endurance</li>
                      <li>• Improve balance and coordination</li>
                      <li>• Reduce pain and inflammation</li>
                      <li>• Prevent future complications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Occupational Therapy:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Relearn daily living activities</li>
                      <li>• Adapt to physical limitations</li>
                      <li>• Use assistive devices effectively</li>
                      <li>• Modify work environment if needed</li>
                      <li>• Develop coping strategies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">Psychological Recovery</h3>
                <p className="text-muted-foreground mb-4">
                  Motorcycle accidents often cause psychological trauma that requires professional treatment. 
                  Don't ignore mental health symptoms - they're a valid part of your injury claim.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Common Psychological Effects:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Post-traumatic stress disorder (PTSD)</li>
                      <li>• Anxiety about riding or driving</li>
                      <li>• Depression from lifestyle changes</li>
                      <li>• Sleep disturbances and nightmares</li>
                      <li>• Fear of public places or travel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Treatment Options:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Cognitive behavioral therapy (CBT)</li>
                      <li>• EMDR therapy for trauma</li>
                      <li>• Support groups for accident victims</li>
                      <li>• Medication management</li>
                      <li>• Family counseling services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Contact Information */}
        <section className="text-center">
          <Card className="p-8 bg-red-50">
            <h2 className="text-3xl font-bold mb-4">Need Legal Help with Medical Issues?</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Insurance companies often question motorcycle accident injuries and may deny necessary treatment. 
              Our attorneys ensure you get the medical care you need while building a strong case for full compensation.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-2" />
                <span className="font-semibold">24/7 Free Consultation: (818) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Shield className="w-5 h-5 text-red-600 mr-2" />
                <span>No Fees Unless We Win</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = '/motorcycle-case-evaluation'}
              >
                Get Free Case Evaluation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                Call (818) 123-4567
              </Button>
            </div>
            
            <div className="flex items-center justify-center mt-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-muted-foreground">Rated 5 Stars by Clients</span>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MotorcycleMedicalGuidance;