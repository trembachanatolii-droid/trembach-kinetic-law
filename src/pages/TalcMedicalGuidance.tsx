import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Heart, Phone, AlertTriangle, Stethoscope, Building2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/practice-areas/talc-mesothelioma-treatment.jpg';

const TalcMedicalGuidance = () => {
  const [formData, setFormData] = useState({
    cancerType: '',
    cancerStage: '',
    currentSymptoms: '',
    exposureHistory: '',
    currentTreatment: '',
    primaryConcerns: ''
  });

  const [guidance, setGuidance] = useState<{
    immediateSteps: string[];
    specialists: string[];
    diagnosticTests: string[];
    treatmentOptions: string[];
    lifestyle: string[];
    legal: string[];
  } | null>(null);

  const generatePersonalizedGuidance = () => {
    const immediateSteps: string[] = [];
    const specialists: string[] = [];
    const diagnosticTests: string[] = [];
    const treatmentOptions: string[] = [];
    const lifestyle: string[] = [];
    const legal: string[] = [];

    // Generate guidance based on cancer type
    switch (formData.cancerType) {
      case 'ovarian-cancer':
        immediateSteps.push('Schedule immediate appointment with gynecologic oncologist');
        immediateSteps.push('Gather all pathology reports and imaging studies');
        specialists.push('Gynecologic Oncologist');
        specialists.push('Medical Oncologist');
        specialists.push('Genetic Counselor (for BRCA testing)');
        diagnosticTests.push('CA-125 tumor marker');
        diagnosticTests.push('CT scan of abdomen and pelvis');
        diagnosticTests.push('PET scan for staging');
        treatmentOptions.push('Cytoreductive surgery (debulking)');
        treatmentOptions.push('Chemotherapy (carboplatin and paclitaxel)');
        treatmentOptions.push('Maintenance therapy options');
        break;
        
      case 'mesothelioma':
        immediateSteps.push('Consult with mesothelioma specialist immediately');
        immediateSteps.push('Confirm asbestos exposure history');
        specialists.push('Mesothelioma Specialist');
        specialists.push('Thoracic Surgeon');
        specialists.push('Pulmonologist');
        diagnosticTests.push('Pleural biopsy with immunohistochemistry');
        diagnosticTests.push('Chest CT with contrast');
        diagnosticTests.push('PET scan for staging');
        treatmentOptions.push('Pleurectomy/decortication surgery');
        treatmentOptions.push('Chemotherapy (pemetrexed and cisplatin)');
        treatmentOptions.push('Immunotherapy trials');
        break;
        
      case 'fallopian-tube':
        immediateSteps.push('See gynecologic oncologist urgently');
        specialists.push('Gynecologic Oncologist');
        specialists.push('Medical Oncologist');
        diagnosticTests.push('Transvaginal ultrasound');
        diagnosticTests.push('CA-125 and HE4 tumor markers');
        treatmentOptions.push('Surgical staging and cytoreduction');
        treatmentOptions.push('Platinum-based chemotherapy');
        break;
        
      default:
        immediateSteps.push('Schedule appointment with oncology specialist');
        specialists.push('Medical Oncologist');
    }

    // Add common guidance
    immediateSteps.push('Document all talc exposure history');
    immediateSteps.push('Request copies of all medical records');
    
    diagnosticTests.push('Complete blood count (CBC)');
    diagnosticTests.push('Comprehensive metabolic panel');
    diagnosticTests.push('Pathology review for talc particles');
    
    lifestyle.push('Maintain nutritious diet rich in antioxidants');
    lifestyle.push('Stay hydrated and get adequate rest');
    lifestyle.push('Consider gentle exercise as tolerated');
    lifestyle.push('Join cancer support groups');
    lifestyle.push('Manage stress through meditation or counseling');
    lifestyle.push('Avoid exposure to additional carcinogens');
    
    legal.push('Document all talc product usage history');
    legal.push('Gather purchase receipts if available');
    legal.push('Contact experienced talc cancer attorney');
    legal.push('Preserve any remaining talc products');
    legal.push('Note time limitations for filing claims');

    // Cancer stage specific guidance
    switch (formData.cancerStage) {
      case 'stage-4':
        immediateSteps.push('Consider palliative care consultation');
        treatmentOptions.push('Palliative chemotherapy options');
        treatmentOptions.push('Clinical trial eligibility');
        lifestyle.push('Focus on quality of life and comfort');
        break;
        
      case 'stage-3':
        treatmentOptions.push('Aggressive multimodal treatment approach');
        treatmentOptions.push('Consider clinical trial participation');
        break;
        
      case 'stage-1':
      case 'stage-2':
        treatmentOptions.push('Curative treatment protocols');
        treatmentOptions.push('Fertility preservation options if applicable');
        break;
    }

    setGuidance({
      immediateSteps,
      specialists,
      diagnosticTests,
      treatmentOptions,
      lifestyle,
      legal
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generatePersonalizedGuidance();
    
    // Scroll to guidance section
    setTimeout(() => {
      document.getElementById('guidance-section')?.scrollIntoView({ 
        behavior: 'smooth' 
      });
    }, 100);
  };

  const seoData = {
    title: "Talc Cancer Medical Guidance | Treatment Options & Specialist Care",
    description: "Comprehensive medical guidance for talc cancer patients. Treatment options, specialist referrals, and care coordination for ovarian cancer and mesothelioma victims.",
    keywords: "talc cancer medical guidance, ovarian cancer treatment, mesothelioma specialists, baby powder cancer care",
    canonical: "/talc-medical-guidance"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
      />
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <Stethoscope className="w-12 h-12 text-primary" />
              <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground">
                Talc Cancer Medical Guidance
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Personalized Medical Guidance for Baby Powder Cancer Patients
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              Get personalized medical guidance tailored to your specific talc cancer diagnosis and situation. Our comprehensive resources help you navigate treatment options and specialist care.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Talc Cancer Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Understanding Talc-Related Cancers</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Ovarian Cancer</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    The most common talc-related cancer, affecting women who used talc for feminine hygiene.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Often diagnosed at advanced stages</li>
                    <li>• Symptoms include bloating, pelvic pain</li>
                    <li>• Requires specialized gynecologic oncology care</li>
                    <li>• Strong link to genital talc application</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Mesothelioma</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Aggressive cancer caused by asbestos contamination in talc products.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Affects lung, abdomen, or heart lining</li>
                    <li>• 20-50 year latency period</li>
                    <li>• Requires mesothelioma specialists</li>
                    <li>• Limited treatment options available</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-600">Other Cancers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Additional cancers potentially linked to talc exposure.
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fallopian tube cancer</li>
                    <li>• Primary peritoneal cancer</li>
                    <li>• Cervical and uterine cancers</li>
                    <li>• Emerging research on other links</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Resources Section */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Medical Resources & Specialists</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Cancer Treatment Centers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-blue-600">Major Cancer Centers in California</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• UCSF Helen Diller Family Comprehensive Cancer Center</li>
                        <li>• UCLA Jonsson Comprehensive Cancer Center</li>
                        <li>• City of Hope National Medical Center</li>
                        <li>• Cedars-Sinai Samuel Oschin Comprehensive Cancer Institute</li>
                        <li>• Stanford Cancer Institute</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-primary" />
                    Specialist Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-purple-600">Key Specialists</h4>
                      <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                        <li>• Gynecologic Oncologists (ovarian cancer)</li>
                        <li>• Mesothelioma Specialists</li>
                        <li>• Medical Oncologists</li>
                        <li>• Thoracic Surgeons</li>
                        <li>• Radiation Oncologists</li>
                        <li>• Genetic Counselors</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Guidance Request */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center mb-2">
                  Request Personalized Medical Guidance
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Get tailored medical recommendations based on your specific diagnosis and situation
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="cancerType">Cancer Type</Label>
                      <Select onValueChange={(value) => setFormData({...formData, cancerType: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select cancer type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                          <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                          <SelectItem value="fallopian-tube">Fallopian Tube Cancer</SelectItem>
                          <SelectItem value="peritoneal-cancer">Primary Peritoneal Cancer</SelectItem>
                          <SelectItem value="cervical-cancer">Cervical Cancer</SelectItem>
                          <SelectItem value="uterine-cancer">Uterine Cancer</SelectItem>
                          <SelectItem value="other">Other Cancer Type</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <Label htmlFor="cancerStage">Cancer Stage (if known)</Label>
                      <Select onValueChange={(value) => setFormData({...formData, cancerStage: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select stage" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="stage-1">Stage I</SelectItem>
                          <SelectItem value="stage-2">Stage II</SelectItem>
                          <SelectItem value="stage-3">Stage III</SelectItem>
                          <SelectItem value="stage-4">Stage IV</SelectItem>
                          <SelectItem value="unknown">Unknown</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="currentSymptoms">Current Symptoms</Label>
                    <Textarea
                      id="currentSymptoms"
                      value={formData.currentSymptoms}
                      onChange={(e) => setFormData({...formData, currentSymptoms: e.target.value})}
                      placeholder="Describe your current symptoms and concerns"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="exposureHistory">Talc Exposure History</Label>
                    <Textarea
                      id="exposureHistory"
                      value={formData.exposureHistory}
                      onChange={(e) => setFormData({...formData, exposureHistory: e.target.value})}
                      placeholder="Describe your talc use history (products, duration, frequency)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <Label htmlFor="currentTreatment">Current Treatment Status</Label>
                    <Select onValueChange={(value) => setFormData({...formData, currentTreatment: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select treatment status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newly-diagnosed">Newly Diagnosed</SelectItem>
                        <SelectItem value="currently-treating">Currently Undergoing Treatment</SelectItem>
                        <SelectItem value="completed-treatment">Completed Treatment</SelectItem>
                        <SelectItem value="in-remission">In Remission</SelectItem>
                        <SelectItem value="recurrence">Cancer Recurrence</SelectItem>
                        <SelectItem value="palliative-care">Palliative Care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="primaryConcerns">Primary Concerns</Label>
                    <Textarea
                      id="primaryConcerns"
                      value={formData.primaryConcerns}
                      onChange={(e) => setFormData({...formData, primaryConcerns: e.target.value})}
                      placeholder="What are your main concerns or questions about your care?"
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-dark text-white py-6 text-lg font-semibold"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    Get Personalized Medical Guidance
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Personalized Guidance Results */}
            {guidance && (
              <div id="guidance-section" className="mt-8 space-y-6">
                <Card className="p-8 bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-green-800 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Your Personalized Medical Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Immediate Steps</h3>
                        <ul className="space-y-2">
                          {guidance.immediateSteps.map((step, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Recommended Specialists</h3>
                        <ul className="space-y-2">
                          {guidance.specialists.map((specialist, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {specialist}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Important Tests</h3>
                        <ul className="space-y-2">
                          {guidance.diagnosticTests.map((test, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {test}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Treatment Options</h3>
                        <ul className="space-y-2">
                          {guidance.treatmentOptions.map((treatment, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {treatment}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Lifestyle Support</h3>
                        <ul className="space-y-2">
                          {guidance.lifestyle.map((lifestyle, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {lifestyle}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Legal Considerations</h3>
                        <ul className="space-y-2">
                          {guidance.legal.map((legal, index) => (
                            <li key={index} className="flex items-start gap-2 text-green-700">
                              <span className="text-green-500">•</span>
                              {legal}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 text-center">
                      <Button asChild className="bg-green-600 hover:bg-green-700 mr-4">
                        <a href="/talc-case-evaluation">Legal Case Evaluation</a>
                      </Button>
                      <Button asChild variant="outline">
                        <a href="tel:8181234567">Call for Support</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="text-left">
                  <h3 className="font-semibold text-red-800 mb-2">Medical Emergency</h3>
                  <p className="text-red-700 mb-4">
                    If you are experiencing severe symptoms such as difficulty breathing, chest pain, severe abdominal pain, 
                    or any life-threatening emergency, call 911 immediately or go to your nearest emergency room.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href="tel:911">Call 911</a>
                    </Button>
                    <Button asChild variant="outline">
                      <a href="tel:8181234567">Call Our Office: (818) 123-4567</a>
                    </Button>
                  </div>
                </div>
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalcMedicalGuidance;