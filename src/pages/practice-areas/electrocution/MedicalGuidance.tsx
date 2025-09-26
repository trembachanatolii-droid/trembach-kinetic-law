import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {
  Heart,
  Brain,
  Stethoscope,
  AlertTriangle,
  Clock,
  Phone,
  FileText,
  Star,
  ChevronDown,
  ChevronUp,
  Zap,
  Activity,
  Shield,
  MapPin,
  Calendar,
  Users,
  Building2,
  BookOpen,
  CheckCircle,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';

import heroBackground from '@/assets/electrocution-medical-facility.jpg';
import SEO from '@/components/SEO';

const ElectrocutionMedicalGuidance: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Add specific body class for this page
    document.body.classList.add('electrocution-medical-guidance-page');
    
    return () => {
      document.body.classList.remove('electrocution-medical-guidance-page');
    };
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,  
      [sectionId]: !prev[sectionId]
    }));
  };

  const emergencySteps = [
    {
      icon: AlertTriangle,
      title: "Immediate Emergency Care",
      description: "Call 911 immediately - electrical injuries can cause cardiac arrest",
      critical: true
    },
    {
      icon: Heart,
      title: "Cardiac Monitoring",
      description: "Heart rhythm monitoring for at least 12-24 hours",
      critical: true
    },
    {
      icon: Activity,
      title: "Neurological Assessment",
      description: "Complete neurological examination for nerve damage",
      critical: true
    },
    {
      icon: Stethoscope,
      title: "Burn Assessment",
      description: "Evaluate entry/exit wounds and internal burn damage",
      critical: false
    }
  ];

  const specialists = [
    {
      specialist: "Emergency Medicine Physician",
      role: "Initial assessment and stabilization",
      when: "Immediately after incident",
      critical: true
    },
    {
      specialist: "Cardiologist",
      role: "Heart rhythm monitoring and cardiac assessment",
      when: "Within first 24 hours",
      critical: true
    },
    {
      specialist: "Burn Specialist",
      role: "Treatment of electrical burns and wound care",
      when: "Within first 24-48 hours",
      critical: true
    },
    {
      specialist: "Neurologist",
      role: "Assessment of nervous system damage",
      when: "Within first week",
      critical: false
    },
    {
      specialist: "Orthopedic Surgeon",
      role: "Treatment of fractures from electrical trauma",
      when: "As needed for injuries",
      critical: false
    },
    {
      specialist: "Plastic Surgeon",
      role: "Reconstructive surgery for severe burns",
      when: "After initial healing",
      critical: false
    },
    {
      specialist: "Psychiatrist/Psychologist",
      role: "Treatment of psychological trauma and PTSD",
      when: "Ongoing as needed",
      critical: false
    },
    {
      specialist: "Occupational Medicine Physician",
      role: "Work-related injury evaluation and treatment",
      when: "For workplace injuries",
      critical: false
    }
  ];

  const timeline = [
    {
      phase: "Immediate (0-24 hours)",
      priority: "Critical",
      actions: [
        "Emergency medical assessment",
        "Cardiac monitoring and EKG",
        "Neurological examination",
        "Initial burn assessment",
        "Pain management",
        "Fluid resuscitation if needed"
      ]
    },
    {
      phase: "Short-term (1-7 days)",
      priority: "High",
      actions: [
        "Continued cardiac monitoring",
        "Comprehensive burn care",
        "Infection prevention",
        "Physical therapy assessment",
        "Psychological evaluation",
        "Specialist consultations"
      ]
    },
    {
      phase: "Medium-term (1-6 weeks)",
      priority: "Moderate",
      actions: [
        "Wound healing management",
        "Physical rehabilitation",
        "Occupational therapy",
        "Follow-up imaging studies",
        "Scar management",
        "Return-to-work evaluation"
      ]
    },
    {
      phase: "Long-term (6+ weeks)",
      priority: "Ongoing",
      actions: [
        "Reconstructive surgery planning",
        "Long-term pain management",
        "Psychological counseling",
        "Disability assessment",
        "Career rehabilitation",
        "Legal documentation support"
      ]
    }
  ];

  const medicalRecords = [
    {
      category: "Emergency Care Records",
      documents: [
        "Emergency room reports",
        "Paramedic/ambulance records",
        "Initial EKG and cardiac monitoring",
        "Emergency physician notes",
        "Admission records if hospitalized"
      ]
    },
    {
      category: "Diagnostic Studies",
      documents: [
        "EKG/ECG results",
        "Echocardiogram if performed",
        "CT scans or MRI studies",
        "X-rays for fractures",
        "Neurological testing results"
      ]
    },
    {
      category: "Treatment Records",
      documents: [
        "Burn treatment documentation",
        "Surgical reports",
        "Physical therapy notes",
        "Medication records",
        "Wound care documentation"
      ]
    },
    {
      category: "Specialist Evaluations",
      documents: [
        "Cardiologist reports",
        "Neurologist evaluations",
        "Burn specialist assessments",
        "Psychological evaluations",
        "Occupational medicine reports"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Electrocution Medical Guidance | California Electrical Injury Treatment"
        description="Comprehensive medical guidance for electrocution injuries in California. Emergency care, specialists, treatment timeline, and medical documentation."
        keywords="electrocution medical treatment, electrical injury doctors, California electrical burn care, cardiac monitoring electrical injury"
        canonical="/practice-areas/electrocution/medical-guidance"
      />

      
      
      {/* Hero Section */}
      <section 
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${heroBackground})` }}
      >
        <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
            Electrocution Medical Guidance
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-3 text-xl text-white">Expert Medical Guidance</span>
          </div>
          <p className="text-2xl text-white mb-8 leading-relaxed">
            Critical medical care and specialist guidance for electrical injury victims
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
              <Phone className="w-5 h-5 mr-2" />
              Emergency: (818) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              <FileText className="w-5 h-5 mr-2" />
              Get Medical Referrals
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Emergency Guidelines */}
        <Card className="mb-12 border-red-200 bg-red-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-red-800 text-2xl">
              <AlertTriangle className="w-8 h-8" />
              Emergency Medical Guidelines
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">IMMEDIATE DO's</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Call 911 immediately - even for "minor" electrical contact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Insist on cardiac monitoring for at least 12-24 hours</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Request complete neurological examination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Document all entry and exit wounds with photos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Ask for copies of all medical records</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-700 mb-4">CRITICAL DON'Ts</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Don't refuse medical attention - internal damage may not be visible</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Don't sign releases without legal review</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Don't return to work without medical clearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Don't minimize symptoms to insurance companies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span className="text-lg">Don't delay seeking psychological support</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Treatment Options */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Stethoscope className="w-8 h-8" />
              Comprehensive Treatment Options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {emergencySteps.map((step, index) => (
                <Card key={index} className={`p-6 ${step.critical ? 'border-red-200 bg-red-50/30' : 'border-blue-200 bg-blue-50/30'}`}>
                  <div className="text-center">
                    <step.icon className={`w-12 h-12 mx-auto mb-4 ${step.critical ? 'text-red-600' : 'text-blue-600'}`} />
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-700 text-lg">{step.description}</p>
                    {step.critical && (
                      <Badge variant="destructive" className="mt-3">
                        Critical
                      </Badge>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medical Specialists */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Users className="w-8 h-8" />
              Essential Medical Specialists
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {specialists.map((spec, index) => (
                <div key={index} className={`p-6 rounded-lg border-2 ${spec.critical ? 'border-red-200 bg-red-50/30' : 'border-gray-200 bg-gray-50/30'}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{spec.specialist}</h3>
                      <p className="text-lg text-gray-700 mb-2">{spec.role}</p>
                      <p className="text-md text-blue-600 font-medium">{spec.when}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {spec.critical && (
                        <Badge variant="destructive">
                          Critical
                        </Badge>
                      )}
                      <Button variant="outline" size="sm" className="text-lg px-4 py-2">
                        Find Specialist
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Treatment Timeline */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <Clock className="w-8 h-8" />
              Treatment Timeline & Recovery
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {timeline.map((phase, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                      phase.priority === 'Critical' ? 'bg-red-600' : 
                      phase.priority === 'High' ? 'bg-orange-600' :
                      phase.priority === 'Moderate' ? 'bg-blue-600' : 'bg-green-600'
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-4">
                        <h3 className="text-2xl font-semibold">{phase.phase}</h3>
                        <Badge variant={
                          phase.priority === 'Critical' ? 'destructive' :
                          phase.priority === 'High' ? 'default' : 'secondary'
                        }>
                          {phase.priority}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {phase.actions.map((action, actionIndex) => (
                          <div key={actionIndex} className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <span className="text-lg">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="ml-8 w-0.5 h-8 bg-gray-300 mt-4"></div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Medical Records */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-2xl">
              <FileText className="w-8 h-8" />
              Essential Medical Documentation
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {medicalRecords.map((category, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">{category.category}</h3>
                  <ul className="space-y-3">
                    {category.documents.map((doc, docIndex) => (
                      <li key={docIndex} className="flex items-start gap-3">
                        <BookOpen className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                        <span className="text-lg">{doc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="text-xl font-semibold text-blue-800 mb-3">Key Documentation Points</h4>
              <ul className="space-y-2 text-lg">
                <li>• Request copies of ALL medical records immediately</li>
                <li>• Ensure cardiac monitoring records are preserved</li>
                <li>• Document all symptoms, even if they seem minor</li>
                <li>• Get written opinions from all treating physicians</li>
                <li>• Keep detailed records of all medical expenses</li>
                <li>• Photograph visible injuries and burns regularly during healing</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sidebar */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden xl:block">
        <Card className="w-80 shadow-xl">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Quick Access
            </h3>
            <div className="space-y-4">
              <Button className="w-full justify-start text-lg py-3" size="lg">
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (818) 123-4567
              </Button>
              <Link to="/practice-areas/electrocution/legal-guidance">
                <Button variant="outline" className="w-full justify-start text-lg py-3" size="lg">
                  <Scale className="w-5 h-5 mr-2" />
                  Legal Guidance
                </Button>
              </Link>
              <Link to="/practice-areas/electrocution/case-evaluation">
                <Button variant="outline" className="w-full justify-start text-lg py-3" size="lg">
                  <FileText className="w-5 h-5 mr-2" />
                  Case Evaluation
                </Button>
              </Link>
              <Link to="/practice-areas/electrocution/compensation-calculator">
                <Button variant="outline" className="w-full justify-start text-lg py-3" size="lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Compensation Calculator
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start text-lg py-3" size="lg">
                <MapPin className="w-5 h-5 mr-2" />
                Find Treatment Centers
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom CTA */}
      <section className="bg-primary/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Need Medical Guidance for Your Electrical Injury?</h2>
          <p className="text-2xl text-muted-foreground mb-8">
            Our experienced team can help you navigate the medical and legal complexities of electrical injury cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-xl px-10 py-4">
              <Phone className="w-6 h-6 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button size="lg" variant="outline" className="text-xl px-10 py-4">
              <FileText className="w-6 h-6 mr-2" />
              Free Medical Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ElectrocutionMedicalGuidance;