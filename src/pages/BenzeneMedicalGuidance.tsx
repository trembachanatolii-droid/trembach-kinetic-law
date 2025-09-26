import React from 'react';
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
  Shield,
  Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-medical-guidance-hero.jpg';

const BenzeneMedicalGuidance: React.FC = () => {
  // Add scroll restoration
  useScrollRestoration();

  const immediateSteps = [
    {
      title: "Seek Specialized Medical Care",
      description: "Get treatment at a hematology/oncology center with benzene exposure experience",
      action: "Schedule appointment with a hematologic oncologist immediately",
      urgency: "high"
    },
    {
      title: "Document Your Exposure History", 
      description: "Gather detailed information about benzene exposure sources and duration",
      action: "Collect employment records, safety training documents, work site photos",
      urgency: "high"
    },
    {
      title: "Preserve Medical Records",
      description: "Maintain complete documentation of all blood cancer diagnosis and treatment",
      action: "Request copies of all medical records, lab results, pathology reports",
      urgency: "medium"
    },
    {
      title: "Contact Legal Counsel",
      description: "Speak with an experienced benzene exposure attorney about your rights",
      action: "Schedule free consultation to evaluate your case",
      urgency: "medium"
    }
  ];

  const neverDo = [
    {
      title: "Don't Delay Medical Treatment",
      description: "Blood cancers require immediate, specialized care for best outcomes",
      consequence: "Delayed treatment can worsen prognosis and reduce treatment options"
    },
    {
      title: "Don't Sign Releases Without Legal Review",
      description: "Insurance companies may offer quick settlements that are far below fair value",
      consequence: "Signing releases can permanently bar you from additional compensation"
    },
    {
      title: "Don't Assume Workers' Comp Covers Everything",
      description: "Workers' compensation provides limited benefits compared to full legal claims",
      consequence: "You may miss opportunities for complete compensation from all liable parties"
    },
    {
      title: "Don't Wait to Document Exposure",
      description: "Evidence becomes harder to obtain as time passes",
      consequence: "Lost evidence can weaken your case and reduce compensation potential"
    }
  ];

  return (
    <>
      <SEO
        title="Benzene Exposure Medical Guidance | Blood Cancer Treatment & Legal Rights"
        description="Essential medical guidance for benzene exposure victims. Expert advice on blood cancer treatment, medical monitoring, and protecting your legal rights."
        canonical="/benzene-medical-guidance"
      />
      
      <div className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Expert Medical & Legal Guidance</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benzene Exposure Medical Guidance</h1>
            <p className="text-xl mb-6">
              Essential information for benzene exposure victims and their families
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
              onClick={() => window.location.href = '/benzene-case-evaluation'}
            >
              Get Free Medical Case Review
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Immediate Action Cards */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">What to Do Immediately</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {immediateSteps.map((step, index) => (
                <Card key={index} className={`border-2 ${step.urgency === 'high' ? 'border-red-200 bg-red-50' : 'border-orange-200 bg-orange-50'} hover:shadow-lg transition-shadow`}>
                  <CardHeader>
                    <CardTitle className={`flex items-center ${step.urgency === 'high' ? 'text-red-800' : 'text-orange-800'}`}>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {step.title}
                      {step.urgency === 'high' && (
                        <Badge variant="destructive" className="ml-2">URGENT</Badge>
                      )}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className={step.urgency === 'high' ? 'text-red-700' : 'text-orange-700'}>
                    <p className="mb-3">{step.description}</p>
                    <p className="text-sm font-medium">{step.action}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Never Do Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Critical Mistakes to Avoid</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {neverDo.map((item, index) => (
                <Card key={index} className="border-2 border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <XCircle className="w-5 h-5 mr-2" />
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-700">
                    <p className="mb-3">{item.description}</p>
                    <div className="bg-red-100 p-3 rounded border border-red-200">
                      <p className="text-sm font-medium text-red-800">⚠️ Consequence: {item.consequence}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Medical Information Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Understanding Blood Cancers */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-600 text-white">
                <CardTitle className="flex items-center">
                  <Stethoscope className="w-6 h-6 mr-2" />
                  Understanding Benzene-Related Blood Cancers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Acute Myeloid Leukemia (AML)</h4>
                    <p className="text-sm text-muted-foreground mb-2">Most strongly linked to benzene exposure</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Rapidly progressing blood cancer</li>
                      <li>• Affects bone marrow and blood</li>
                      <li>• Requires immediate aggressive treatment</li>
                      <li>• 5-year survival rate varies by subtype</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Multiple Myeloma</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cancer of plasma cells in bone marrow</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Often causes bone pain and fractures</li>
                      <li>• May affect kidney function</li>
                      <li>• Treatment includes chemotherapy and stem cell transplant</li>
                      <li>• Chronic condition requiring ongoing monitoring</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Non-Hodgkin Lymphoma</h4>
                    <p className="text-sm text-muted-foreground mb-2">Cancer of the lymphatic system</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Many different subtypes</li>
                      <li>• Can affect lymph nodes, organs</li>
                      <li>• Treatment varies by subtype and stage</li>
                      <li>• Some forms are highly treatable</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Other Blood Cancers</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Acute Lymphoblastic Leukemia (ALL)</li>
                      <li>• Chronic Lymphocytic Leukemia (CLL)</li>
                      <li>• Chronic Myeloid Leukemia (CML)</li>
                      <li>• Myelodysplastic Syndromes (MDS)</li>
                      <li>• Aplastic Anemia</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Treatment and Care */}
            <Card className="shadow-lg">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="flex items-center">
                  <Heart className="w-6 h-6 mr-2" />
                  Treatment & Care Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Choosing Treatment Centers</h4>
                    <p className="text-sm text-muted-foreground mb-2">Seek care at specialized cancer centers</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• National Cancer Institute-designated centers</li>
                      <li>• Hematologic oncology specialists</li>
                      <li>• Access to clinical trials</li>
                      <li>• Multidisciplinary care teams</li>
                      <li>• Advanced treatment technologies</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Treatment Options</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Chemotherapy (various regimens)</li>
                      <li>• Targeted therapy drugs</li>
                      <li>• Immunotherapy treatments</li>
                      <li>• Stem cell transplantation</li>
                      <li>• Radiation therapy (when indicated)</li>
                      <li>• Clinical trial participation</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Supportive Care</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Nutrition counseling</li>
                      <li>• Physical therapy</li>
                      <li>• Psychological support</li>
                      <li>• Pain management</li>
                      <li>• Infection prevention</li>
                      <li>• Family support services</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">Monitoring Requirements</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Regular blood tests</li>
                      <li>• Bone marrow biopsies</li>
                      <li>• Imaging studies</li>
                      <li>• Genetic testing</li>
                      <li>• Response assessments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Medical Monitoring Section */}
          <section className="mt-12">
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="text-center text-2xl">Long-Term Medical Monitoring</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">Regular Checkups</h4>
                    <p className="text-sm text-muted-foreground">Ongoing monitoring every 3-6 months to detect any changes or recurrence</p>
                  </div>
                  <div className="text-center">
                    <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">Complete Records</h4>
                    <p className="text-sm text-muted-foreground">Maintain detailed medical records for both health management and legal purposes</p>
                  </div>
                  <div className="text-center">
                    <AlertTriangle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                    <h4 className="font-semibold mb-2 text-foreground">Warning Signs</h4>
                    <p className="text-sm text-muted-foreground">Know symptoms that require immediate medical attention</p>
                  </div>
                </div>

                <div className="mt-8 bg-purple-50 p-6 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-800 mb-3">Symptoms Requiring Immediate Medical Attention:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• Persistent fever or infections</li>
                      <li>• Unusual bruising or bleeding</li>
                      <li>• Extreme fatigue or weakness</li>
                      <li>• Shortness of breath</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-purple-700">
                      <li>• Unexplained weight loss</li>
                      <li>• Swollen lymph nodes</li>
                      <li>• Bone or joint pain</li>
                      <li>• Night sweats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Legal Considerations */}
          <section className="mt-12">
            <Card className="shadow-lg border-2 border-red-200">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <Shield className="w-6 h-6 mr-2" />
                  Legal Considerations for Medical Care
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Document Everything</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Keep copies of all medical records</li>
                      <li>• Document all symptoms and treatments</li>
                      <li>• Track all medical expenses</li>
                      <li>• Note how illness affects daily life</li>
                      <li>• Photograph any visible symptoms</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Financial Protection</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Don't let medical bills go unpaid</li>
                      <li>• Apply for financial assistance programs</li>
                      <li>• Consider payment plans</li>
                      <li>• Legal settlements can cover past bills</li>
                      <li>• Future medical monitoring may be included</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-red-50 rounded-lg border border-red-200">
                  <p className="text-sm text-red-700">
                    <strong>Important:</strong> Your legal case can help cover current and future medical expenses. 
                    Don't delay treatment due to financial concerns - contact our attorneys to discuss how we can help 
                    ensure you get the medical care you need while pursuing your legal rights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="mt-12 text-center">
            <Card className="shadow-xl bg-gradient-to-r from-red-50 to-blue-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Need Help with Your Benzene Exposure Case?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Our experienced attorneys understand both the medical and legal aspects of benzene exposure cases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = '/benzene-case-evaluation'}
                  >
                    Get Free Case Evaluation
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  No fees unless we win • Available 24/7 • Free consultation
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BenzeneMedicalGuidance;