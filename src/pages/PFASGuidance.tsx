import React from 'react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Clock,
  FileText,
  Phone,
  Heart,
  Shield
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/pfas-health-effects.jpg';

const PFASGuidance: React.FC = () => {
  // Add scroll restoration
  useScrollRestoration();
  const immediateSteps = [
    {
      title: "Seek Medical Evaluation",
      description: "Get comprehensive blood tests to check for PFAS-related health conditions",
      action: "Schedule appointment with your primary care physician",
      urgency: "high"
    },
    {
      title: "Document Your Exposure", 
      description: "Gather evidence of where and when you were exposed to PFAS chemicals",
      action: "Collect water test results, employment records, military service records",
      urgency: "high"
    },
    {
      title: "Preserve Medical Records",
      description: "Maintain complete documentation of all health issues and treatments",
      action: "Request copies of all medical records from healthcare providers",
      urgency: "medium"
    },
    {
      title: "Contact Legal Counsel",
      description: "Speak with an experienced PFAS attorney about your rights",
      action: "Schedule free consultation to evaluate your case",
      urgency: "medium"
    }
  ];

  const neverDo = [
    {
      title: "Don't Delay Medical Care",
      description: "PFAS-related health conditions require ongoing monitoring and treatment",
      consequence: "Early detection and treatment improve outcomes"
    },
    {
      title: "Don't Ignore Water Test Results",
      description: "Continue drinking contaminated water even if you feel fine",
      consequence: "PFAS chemicals accumulate in your body over time"
    },
    {
      title: "Don't Accept Settlement Without Legal Review",
      description: "Sign agreements or waivers without understanding your full rights",
      consequence: "You may waive rights to future compensation"
    },
    {
      title: "Don't Miss Filing Deadlines",
      description: "Wait too long to take legal action due to statute of limitations",
      consequence: "You may lose your right to seek compensation permanently"
    }
  ];

  const medicalTests = [
    {
      test: "PFAS Blood Serum Test",
      purpose: "Measures current PFAS levels in your bloodstream",
      timing: "As soon as possible after suspected exposure"
    },
    {
      test: "Comprehensive Metabolic Panel",
      purpose: "Checks liver and kidney function affected by PFAS",
      timing: "Baseline and follow-up every 6 months"
    },
    {
      test: "Lipid Panel",
      purpose: "Monitors cholesterol levels (PFAS can cause high cholesterol)",
      timing: "Every 6-12 months"
    },
    {
      test: "Thyroid Function Tests",
      purpose: "Detects thyroid disorders linked to PFAS exposure", 
      timing: "Annually or when symptoms develop"
    },
    {
      test: "Cancer Screenings",
      purpose: "Early detection of PFAS-linked cancers (kidney, testicular)",
      timing: "Follow standard screening guidelines, discuss with doctor"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PFAS Medical & Legal Guidance</h1>
          <p className="text-xl">Essential steps to protect your health and legal rights after PFAS exposure</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Immediate Steps Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">What to Do Immediately</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            If you've been exposed to PFAS chemicals or live in an area with contaminated water, 
            these immediate steps can protect your health and preserve your legal rights.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {immediateSteps.map((step, index) => (
              <Card key={index} className="border-green-200 bg-green-50 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-800">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    {step.title}
                    <Badge 
                      variant={step.urgency === 'high' ? 'destructive' : 'secondary'} 
                      className="ml-auto"
                    >
                      {step.urgency === 'high' ? 'Urgent' : 'Important'}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-3">{step.description}</p>
                  <div className="bg-white p-3 rounded border border-green-200">
                    <p className="font-medium text-green-800">Action: {step.action}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* What Never to Do Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-2">Critical Mistakes to Avoid</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            These common mistakes can harm your health or damage your legal case. 
            Avoid these actions to protect yourself and your family.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {neverDo.map((item, index) => (
              <Card key={index} className="border-red-200 bg-red-50 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <XCircle className="w-5 h-5 mr-2" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 mb-3">{item.description}</p>
                  <div className="bg-white p-3 rounded border border-red-200">
                    <p className="font-medium text-red-800">
                      <AlertTriangle className="w-4 h-4 inline mr-1" />
                      {item.consequence}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Medical Testing Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">Recommended Medical Tests</h2>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                PFAS Health Monitoring Protocol
              </CardTitle>
              <p className="text-muted-foreground">
                Work with your healthcare provider to establish a monitoring plan for PFAS-related health effects.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {medicalTests.map((test, index) => (
                  <div key={index} className="flex items-start p-4 bg-muted rounded-lg">
                    <div className="flex-grow">
                      <h4 className="font-semibold text-primary">{test.test}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{test.purpose}</p>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-1 text-amber-600" />
                        <span className="text-amber-700 font-medium">{test.timing}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Important Notes:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Keep copies of all test results for your records</li>
                  <li>• Share results with your PFAS attorney</li>
                  <li>• Follow up abnormal results promptly</li>
                  <li>• Consider consulting specialists for concerning findings</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Legal Timeline Section */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2 text-primary" />
              Legal Action Timeline
            </CardTitle>
            <p className="text-muted-foreground">
              Understanding important deadlines for PFAS exposure lawsuits in California.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <Badge variant="destructive">Immediate</Badge>
                </div>
                <div>
                  <h4 className="font-semibold">Document Everything</h4>
                  <p className="text-sm text-muted-foreground">
                    Begin collecting evidence of exposure and health effects. Time-sensitive documents may be destroyed.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <Badge variant="secondary">30 Days</Badge>
                </div>
                <div>
                  <h4 className="font-semibold">Legal Consultation</h4>
                  <p className="text-sm text-muted-foreground">
                    Meet with an experienced PFAS attorney to evaluate your case and understand your options.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-24 flex-shrink-0">
                  <Badge variant="secondary">2-3 Years</Badge>
                </div>
                <div>
                  <h4 className="font-semibold">Statute of Limitations</h4>
                  <p className="text-sm text-muted-foreground">
                    California personal injury claims must typically be filed within 2-3 years of discovering harm. 
                    Don't wait - deadlines vary by case type.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto border-primary/20 bg-primary/5">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">Get Expert Guidance Today</h3>
              <p className="text-muted-foreground mb-6">
                Don't navigate PFAS exposure alone. Our experienced team provides both medical and legal guidance 
                to protect your health and rights.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => window.location.href = '/pfas-case-evaluation'}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Free Case Evaluation
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PFASGuidance;