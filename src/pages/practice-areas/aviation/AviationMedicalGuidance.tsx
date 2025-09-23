import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, Stethoscope, Heart, AlertCircle } from 'lucide-react';
import heroBackground from '@/assets/aviation-medical-consultation.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const AviationMedicalGuidance: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Aviation Accident Medical Guidance | California Airplane & Helicopter Crash Injuries"
        description="Medical guidance for aviation accident victims. Understanding airplane crash injuries, helicopter accident trauma, and treatment options in California."
        keywords="aviation accident medical guide, airplane crash injuries, helicopter accident trauma, aviation injury treatment, California aviation medicine"
        canonical="https://www.trembachlawfirm.com/aviation/medical-guidance"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          "name": "Aviation Accident Medical Guidance",
          "description": "Medical guidance for aviation accident victims in California",
          "url": "https://www.trembachlawfirm.com/aviation/medical-guidance"
        }}
      />
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Accident Medical Guidance
          </h1>
          <p className="text-xl">Understanding injuries from airplane crashes and helicopter accidents</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <Stethoscope className="w-6 h-6 mr-3" />
                Understanding Aviation Accident Injuries
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                Aviation accidents often result in severe, life-threatening injuries due to the extreme forces involved in airplane crashes and helicopter accidents. Understanding the types of injuries, treatment options, and long-term care needs is crucial for victims and their families.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                <p className="text-red-800 font-medium">
                  ⚠️ Emergency: If you've been in an aviation accident, seek immediate medical attention even if you feel fine. Some injuries may not be immediately apparent.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Common Aviation Injuries */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('injuries')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary flex items-center">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Common Aviation Accident Injuries
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'injuries' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'injuries' && (
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3">Catastrophic Injuries</h4>
                      <ul className="space-y-2 text-red-700 text-sm">
                        <li>• Traumatic brain injuries (TBI)</li>
                        <li>• Spinal cord injuries and paralysis</li>
                        <li>• Severe burns from fuel fires</li>
                        <li>• Multiple bone fractures</li>
                        <li>• Internal organ damage</li>
                        <li>• Amputation injuries</li>
                      </ul>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">Common Impact Injuries</h4>
                      <ul className="space-y-2 text-orange-700 text-sm">
                        <li>• Whiplash and neck injuries</li>
                        <li>• Broken ribs and chest trauma</li>
                        <li>• Facial injuries and lacerations</li>
                        <li>• Knee and leg fractures</li>
                        <li>• Shoulder dislocations</li>
                        <li>• Soft tissue injuries</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-3">Psychological Trauma</h4>
                    <ul className="space-y-2 text-blue-700 text-sm">
                      <li>• Post-traumatic stress disorder (PTSD)</li>
                      <li>• Survivor guilt and anxiety disorders</li>
                      <li>• Depression and emotional distress</li>
                      <li>• Fear of flying and travel anxiety</li>
                      <li>• Sleep disorders and nightmares</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Treatment and Recovery */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('treatment')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary flex items-center">
                  <Heart className="w-5 h-5 mr-2" />
                  Treatment and Recovery Process
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'treatment' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'treatment' && (
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Emergency Treatment Phase</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Life-saving emergency surgery</li>
                      <li>• Stabilization of vital signs</li>
                      <li>• Treatment of burns and traumatic injuries</li>
                      <li>• Diagnostic imaging and assessment</li>
                      <li>• Pain management and sedation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Acute Care Phase</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Intensive care unit monitoring</li>
                      <li>• Surgical interventions and repairs</li>
                      <li>• Infection prevention and treatment</li>
                      <li>• Respiratory support and ventilation</li>
                      <li>• Nutritional support and fluid management</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Rehabilitation Phase</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Physical therapy and mobility training</li>
                      <li>• Occupational therapy for daily activities</li>
                      <li>• Speech therapy for brain injury victims</li>
                      <li>• Psychological counseling and PTSD treatment</li>
                      <li>• Prosthetic fitting and training</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Long-term Care</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Ongoing medical monitoring</li>
                      <li>• Home healthcare services</li>
                      <li>• Adaptive equipment and modifications</li>
                      <li>• Vocational rehabilitation</li>
                      <li>• Life care planning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Medical Documentation */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Importance of Medical Documentation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="mb-4">
                  Proper medical documentation is crucial for both your recovery and any legal case. Aviation accidents often result in complex injuries requiring extensive treatment, making thorough documentation essential.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">Essential Medical Records Include:</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• Emergency room reports and treatment records</li>
                    <li>• Surgical reports and operative notes</li>
                    <li>• Diagnostic imaging (X-rays, CT scans, MRIs)</li>
                    <li>• Laboratory test results</li>
                    <li>• Physical therapy and rehabilitation records</li>
                    <li>• Psychological evaluation and treatment notes</li>
                    <li>• Discharge summaries and care plans</li>
                    <li>• Prescription medication records</li>
                  </ul>
                </div>

                <p>
                  Keep copies of all medical records and maintain a medical diary documenting your symptoms, pain levels, and how your injuries affect daily activities. This documentation supports your legal case and helps healthcare providers track your progress.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Need Help with Medical Expenses?</h3>
              <p className="text-muted-foreground mb-6">
                Aviation accident injuries often result in overwhelming medical costs. Our attorneys can help you secure compensation for all medical expenses, including future treatment needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
                  onClick={() => window.location.href = '/aviation/case-evaluation'}
                >
                  Get Free Case Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
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

export default AviationMedicalGuidance;