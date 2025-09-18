import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  Scale,
  Building,
  ChevronDown,
  ChevronUp,
  FileText,
  Stethoscope,
  Activity,
  Heart,
  Brain,
  Baby,
  Pill,
  UserCheck,
  MapPin,
  Calendar,
  Camera,
  Calculator
} from 'lucide-react';
import heroBackground from '@/assets/medical-malpractice-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';

const MedicalMalpracticeMedicalGuidance: React.FC = () => {
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
        title="Medical Malpractice Medical Guidance | Patient Rights | California"
        description="Essential medical guidance for medical malpractice victims in California. Patient rights, medical records, expert care, and recovery resources for all types of medical errors."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Medical Malpractice Medical Guidance
          </h1>
          <p className="text-xl md:text-2xl">
            Essential Medical Information and Patient Rights for Malpractice Victims
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Immediate Medical Steps */}
            <Card className="bg-red-50 border-red-200 p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-700 flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8" />
                  Immediate Medical Steps After Malpractice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white min-w-[24px] h-6 flex items-center justify-center">1</Badge>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Seek Immediate Medical Attention</h4>
                      <p className="text-red-700">Get proper medical care from a different healthcare provider immediately. Your health and safety are the top priority.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white min-w-[24px] h-6 flex items-center justify-center">2</Badge>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Document All Symptoms</h4>
                      <p className="text-red-700">Keep detailed records of all symptoms, pain levels, and how the injury affects your daily activities.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white min-w-[24px] h-6 flex items-center justify-center">3</Badge>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Follow All Treatment Recommendations</h4>
                      <p className="text-red-700">Comply with all medical recommendations to prevent insurance companies from claiming you failed to mitigate damages.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Badge className="bg-red-600 text-white min-w-[24px] h-6 flex items-center justify-center">4</Badge>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-1">Preserve All Evidence</h4>
                      <p className="text-red-700">Take photos of injuries, save all medical documents, and keep receipts for all medical expenses and treatments.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Medical Malpractice Injuries */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Stethoscope className="h-8 w-8 text-primary" />
                  Common Medical Malpractice Injuries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Brain className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Neurological Injuries</h4>
                        <p className="text-sm text-muted-foreground">Brain damage, stroke, paralysis, nerve damage, cognitive impairment</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Heart className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Cardiovascular Complications</h4>
                        <p className="text-sm text-muted-foreground">Heart attack, cardiac arrest, blood clots, arrhythmias</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Activity className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Surgical Complications</h4>
                        <p className="text-sm text-muted-foreground">Organ damage, infections, bleeding, anesthesia reactions</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Baby className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Birth Injuries</h4>
                        <p className="text-sm text-muted-foreground">Cerebral palsy, Erb's palsy, brain damage, fractures</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Pill className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Medication Injuries</h4>
                        <p className="text-sm text-muted-foreground">Organ damage, allergic reactions, drug interactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h4 className="font-semibold mb-1">Infections</h4>
                        <p className="text-sm text-muted-foreground">MRSA, sepsis, surgical site infections, pneumonia</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recommended Medical Specialists */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <UserCheck className="h-8 w-8 text-primary" />
                  Recommended Medical Specialists by Error Type
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  
                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      onClick={() => toggleSection('misdiagnosis-specialists')}
                    >
                      <h4 className="font-semibold flex items-center gap-2">
                        <Brain className="h-5 w-5 text-primary" />
                        Misdiagnosis/Delayed Diagnosis Specialists
                      </h4>
                      {expandedSections['misdiagnosis-specialists'] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-background border rounded-lg mt-2">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Oncologists:</strong> For missed or delayed cancer diagnoses</li>
                        <li><strong>Cardiologists:</strong> For heart attack or cardiac condition misdiagnosis</li>
                        <li><strong>Neurologists:</strong> For stroke, seizure, or brain condition misdiagnosis</li>
                        <li><strong>Infectious Disease Specialists:</strong> For missed infections or sepsis</li>
                        <li><strong>Radiologists:</strong> For proper interpretation of imaging studies</li>
                        <li><strong>Pathologists:</strong> For correct tissue and lab result analysis</li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      onClick={() => toggleSection('surgical-specialists')}
                    >
                      <h4 className="font-semibold flex items-center gap-2">
                        <Activity className="h-5 w-5 text-primary" />
                        Surgical Error Specialists
                      </h4>
                      {expandedSections['surgical-specialists'] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-background border rounded-lg mt-2">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Reconstructive Surgeons:</strong> For repair of surgical damage</li>
                        <li><strong>Orthopedic Surgeons:</strong> For bone, joint, and muscle injuries</li>
                        <li><strong>Plastic Surgeons:</strong> For cosmetic and reconstructive needs</li>
                        <li><strong>Anesthesiologists:</strong> For anesthesia complication treatment</li>
                        <li><strong>Pain Management Specialists:</strong> For chronic pain from surgical errors</li>
                        <li><strong>Physical Medicine & Rehabilitation:</strong> For recovery and therapy</li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>

                  <Collapsible>
                    <CollapsibleTrigger 
                      className="flex items-center justify-between w-full p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                      onClick={() => toggleSection('birth-specialists')}
                    >
                      <h4 className="font-semibold flex items-center gap-2">
                        <Baby className="h-5 w-5 text-primary" />
                        Birth Injury Specialists
                      </h4>
                      {expandedSections['birth-specialists'] ? (
                        <ChevronUp className="h-5 w-5" />
                      ) : (
                        <ChevronDown className="h-5 w-5" />
                      )}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="p-4 bg-background border rounded-lg mt-2">
                      <ul className="space-y-2 text-sm">
                        <li><strong>Pediatric Neurologists:</strong> For brain and nerve injuries</li>
                        <li><strong>Developmental Pediatricians:</strong> For growth and development issues</li>
                        <li><strong>Pediatric Orthopedists:</strong> For bone and muscle injuries</li>
                        <li><strong>Pediatric Physical Therapists:</strong> For mobility and function</li>
                        <li><strong>Speech-Language Pathologists:</strong> For communication difficulties</li>
                        <li><strong>Occupational Therapists:</strong> For daily living skills</li>
                      </ul>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              </CardContent>
            </Card>

            {/* Essential Medical Documentation */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <FileText className="h-8 w-8 text-primary" />
                  Essential Medical Documentation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Medical Records to Obtain</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Complete hospital records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>All imaging studies (X-rays, CT, MRI)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Laboratory test results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Operative notes and surgical reports</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Nursing notes and medication records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Emergency room records</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Physician consultation notes</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Financial Documentation</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>All medical bills and invoices</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Insurance explanation of benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Lost wage documentation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Travel expenses for medical care</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Prescription medication costs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Medical equipment expenses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Home modification costs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment Timeline */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Calendar className="h-8 w-8 text-primary" />
                  Typical Medical Malpractice Treatment Timeline
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-primary mb-2">Immediate (0-72 hours)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Emergency medical stabilization</li>
                      <li>• Diagnostic testing to assess injuries</li>
                      <li>• Pain management and immediate treatment</li>
                      <li>• Consultation with specialists if needed</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-primary mb-2">Short-term (1-4 weeks)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Follow-up appointments with specialists</li>
                      <li>• Additional diagnostic procedures</li>
                      <li>• Surgery if required for repair</li>
                      <li>• Initial rehabilitation and therapy</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-primary mb-2">Medium-term (1-6 months)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Ongoing physical therapy and rehabilitation</li>
                      <li>• Monitoring for complications</li>
                      <li>• Adjustment of medications and treatments</li>
                      <li>• Assessment of permanent limitations</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-primary pl-6">
                    <h4 className="font-semibold text-primary mb-2">Long-term (6+ months)</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Continued therapy and medical management</li>
                      <li>• Life care planning for permanent disabilities</li>
                      <li>• Adaptive equipment and home modifications</li>
                      <li>• Psychological counseling and support</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Emergency Contact */}
              <Card className="bg-red-50 border-red-200 p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Medical Emergency?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Button size="lg" className="w-full bg-red-600 hover:bg-red-700" asChild>
                      <a href="tel:911">
                        <Phone className="mr-2 h-5 w-5" />
                        Call 911
                      </a>
                    </Button>
                    <p className="text-sm text-red-600 mt-2">For immediate medical emergencies</p>
                  </div>
                  <div className="text-center">
                    <Button variant="outline" size="lg" className="w-full border-red-300 text-red-700" asChild>
                      <a href="tel:8181234567">
                        <Phone className="mr-2 h-5 w-5" />
                        Legal Hotline: (818) 123-4567
                      </a>
                    </Button>
                    <p className="text-sm text-red-600 mt-2">24/7 legal assistance</p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" asChild>
                    <Link to="/medical-malpractice-case-evaluation">
                      <Scale className="mr-2 h-4 w-4" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link to="/medical-malpractice-compensation-calculator">
                      <Calculator className="mr-2 h-4 w-4" />
                      Compensation Calculator
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="mailto:info@trembachlawfirm.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Legal Team
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Medical Tips */}
              <Card className="bg-green-50 border-green-200 p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-green-700">Medical Tips for Patients</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-green-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Always ask questions about your treatment</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Request copies of all test results</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Keep a detailed symptom diary</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Bring a family member to appointments</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Follow up on abnormal test results</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5" />
                    <span>Get second opinions for major procedures</span>
                  </div>
                </CardContent>
              </Card>

              {/* Patient Rights */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Your Patient Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Right to informed consent</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Right to access medical records</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Right to quality medical care</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Right to privacy and confidentiality</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <span>Right to seek legal recourse</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalMalpracticeMedicalGuidance;