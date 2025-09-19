import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  ArrowLeft, 
  BookOpen, 
  Phone, 
  FileText, 
  AlertTriangle, 
  Heart, 
  Shield,
  ChevronDown,
  ChevronUp,
  Clock,
  Settings,
  Activity
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SEO from '@/components/SEO';
import heroImage from '@/assets/practice-areas/pharmaceutical-guidance-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const PharmaceuticalMedicalGuidance: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [showGoBack, setShowGoBack] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      setShowGoBack(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pharmaceutical Medical Guidance | Trembach Law Firm"
        description="Essential medical guidance for pharmaceutical injury victims. Learn about symptoms, treatment options, and when to seek legal help."
        canonical="https://www.trembachlawfirm.com/pharmaceutical-medical-guidance"
      />

      {showGoBack && (
        <Button 
          variant="ghost" 
          onClick={handleGoBack}
          className="fixed top-20 left-6 z-50 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go Back
        </Button>
      )}

      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Pharmaceutical Medical Guidance
          </h1>
          <p className="text-xl">
            Essential medical information for pharmaceutical injury victims
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Immediate Medical Actions */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Medical Actions</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Critical First Steps
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-lg">
                    <p>• Do NOT stop medication without medical supervision</p>
                    <p>• Contact your prescribing physician immediately</p>
                    <p>• Document all symptoms with dates and severity</p>
                    <p>• Seek emergency care for severe symptoms</p>
                  </CardContent>
                </Card>
                
                <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="flex items-center group-hover:text-primary transition-colors text-lg">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Emergency Warning Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 text-lg">
                    <p>• Severe abdominal pain or vomiting</p>
                    <p>• Vision changes or eye pain</p>
                    <p>• Difficulty breathing or swallowing</p>
                    <p>• Severe allergic reactions</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Common Pharmaceutical Injuries */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Common Pharmaceutical Injuries</h2>
              
              <Collapsible open={expandedSections.injuries} onOpenChange={() => toggleSection('injuries')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    GLP-1 Drug Injuries (Ozempic, Wegovy, Mounjaro)
                    {expandedSections.injuries ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold">Gastroparesis (Stomach Paralysis)</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>Symptoms:</strong> Severe nausea, vomiting, abdominal pain, feeling full quickly, weight loss, blood sugar fluctuations.
                    </p>
                    <p className="text-lg leading-relaxed">
                      <strong>Medical Management:</strong> Dietary modifications, prokinetic medications, antiemetics, nutritional support. Severe cases may require feeding tubes or gastric electrical stimulation.
                    </p>
                    
                    <h3 className="text-xl font-semibold">Non-Arteritic Anterior Ischemic Optic Neuropathy (NAION)</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>Symptoms:</strong> Sudden vision loss, visual field defects, eye pain, difficulty seeing in dim light.
                    </p>
                    <p className="text-lg leading-relaxed">
                      <strong>Medical Management:</strong> Immediate ophthalmologic evaluation, corticosteroids may be tried, vision aids and rehabilitation services.
                    </p>
                    
                    <h3 className="text-xl font-semibold">Pancreatitis</h3>
                    <p className="text-lg leading-relaxed">
                      <strong>Symptoms:</strong> Severe abdominal pain radiating to back, nausea, vomiting, fever, rapid pulse.
                    </p>
                    <p className="text-lg leading-relaxed">
                      <strong>Medical Management:</strong> Hospitalization, pain management, IV fluids, enzyme replacement therapy, dietary modifications.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Documentation Guidelines */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Documentation Guidelines</h2>
              
              <Card className="p-6 border-l-4 border-red-600">
                <h3 className="text-xl font-bold text-red-600 mb-4">Essential Documentation Checklist</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Medical Records</h4>
                      <p>Complete medical history, prescription records, pharmacy receipts, hospital discharge summaries, diagnostic test results</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Symptom Diary</h4>
                      <p>Daily log of symptoms, severity (1-10 scale), duration, triggers, impact on daily activities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Activity className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Drug Information</h4>
                      <p>Medication bottles with lot numbers, prescribing dates, dosage changes, duration of use</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Settings className="w-5 h-5 text-red-600 mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Financial Impact</h4>
                      <p>Medical bills, insurance claims, lost wage documentation, travel expenses for treatment</p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Treatment Options */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Treatment and Recovery</h2>
              
              <Collapsible open={expandedSections.treatment} onOpenChange={() => toggleSection('treatment')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4 text-lg">
                    Show Treatment Options and Recovery Information
                    {expandedSections.treatment ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3 className="text-xl font-semibold">Gastroparesis Management</h3>
                    <ul className="text-lg space-y-2">
                      <li><strong>Dietary Changes:</strong> Small frequent meals, low fiber/fat diet, liquid nutrition supplements</li>
                      <li><strong>Medications:</strong> Prokinetic agents (metoclopramide, domperidone), antiemetics</li>
                      <li><strong>Advanced Treatments:</strong> Gastric electrical stimulation, feeding tubes, gastric peroral endoscopic myotomy</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold">Vision Loss Support</h3>
                    <ul className="text-lg space-y-2">
                      <li><strong>Low Vision Services:</strong> Magnification devices, adaptive technology training</li>
                      <li><strong>Mobility Training:</strong> Orientation and mobility instruction, guide dog training</li>
                      <li><strong>Vocational Rehabilitation:</strong> Job modification, career counseling, disability benefits</li>
                    </ul>
                    
                    <h3 className="text-xl font-semibold">Finding Specialists</h3>
                    <ul className="text-lg space-y-2">
                      <li><strong>Gastroenterologists:</strong> For gastroparesis and digestive issues</li>
                      <li><strong>Ophthalmologists:</strong> For vision problems and NAION</li>
                      <li><strong>Endocrinologists:</strong> For diabetes management during complications</li>
                      <li><strong>Pain Management:</strong> For chronic pain from pharmaceutical injuries</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Legal and Medical Coordination */}
            <section className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Legal and Medical Coordination</h2>
              
              <Card className="bg-blue-50 border-blue-200 p-6">
                <div className="flex items-start">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">Protecting Your Rights While Getting Care</h3>
                    <div className="space-y-3 text-lg">
                      <p>
                        <strong>Continuing Treatment:</strong> Never stop medical treatment due to legal concerns. Proper ongoing care actually strengthens your case by documenting the full extent of your injuries.
                      </p>
                      <p>
                        <strong>Medical Liens:</strong> We can arrange treatment with healthcare providers who accept payment from your settlement, ensuring you get necessary care without upfront costs.
                      </p>
                      <p>
                        <strong>Expert Medical Testimony:</strong> We work with leading specialists who understand both the medical and legal aspects of pharmaceutical injuries to support your case.
                      </p>
                      <p>
                        <strong>Insurance Communications:</strong> Let your attorney handle all communications with insurance companies to protect your interests while you focus on recovery.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* When to Seek Legal Help */}
            <section className="content-section mb-12 bg-red-600 text-white p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">When to Contact an Attorney</h2>
              <div className="text-xl space-y-4">
                <p>
                  <strong>Immediately if you experience:</strong>
                </p>
                <ul className="space-y-2 text-lg">
                  <li>• Serious side effects not adequately warned about</li>
                  <li>• Permanent injuries from prescription medications</li>
                  <li>• Hospitalization due to drug complications</li>
                  <li>• Vision loss or gastroparesis from GLP-1 drugs</li>
                  <li>• Any injury requiring ongoing medical treatment</li>
                </ul>
                <p className="text-lg">
                  <strong>Remember:</strong> California's statute of limitations is typically 2 years from discovery of injury. Early consultation preserves your rights and evidence.
                </p>
              </div>
            </section>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Need Medical or Legal Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.location.href = '/pharmaceutical-case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Emergency Resources</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <div className="space-y-3">
                    <p><strong>Medical Emergency:</strong></p>
                    <p>Call 911 or go to nearest ER</p>
                    
                    <p><strong>Poison Control:</strong></p>
                    <p>(800) 222-1222</p>
                    
                    <p><strong>FDA MedWatch:</strong></p>
                    <p>Report adverse drug events</p>
                    <p>www.fda.gov/medwatch</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-red-600">Important Reminders</CardTitle>
                </CardHeader>
                <CardContent className="text-lg">
                  <ul className="space-y-2">
                    <li>• Keep all medication bottles and packaging</li>
                    <li>• Document symptoms daily with photos if visible</li>
                    <li>• Save all medical bills and insurance statements</li>
                    <li>• Don't speak to drug company representatives</li>
                    <li>• Follow up with all specialist appointments</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PharmaceuticalMedicalGuidance;