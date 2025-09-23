import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Download, FileText, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-education-hero.jpg';

const MaritimeEducation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Maritime Education & Resources - Learn Your Rights"
        description="Educational resources for maritime workers and their families. Learn about Jones Act, LHWCA, maritime safety, and worker rights. Free guides and resources."
        keywords="maritime education, maritime law resources, Jones Act guide, LHWCA information, maritime safety training, worker rights education"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Maritime Education Center
            </h1>
            <p className="text-xl mb-6">
              Educational resources to help you understand your maritime rights
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Ask Questions
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Educational Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BookOpen className="w-5 h-5 mr-2" />
                      Jones Act Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Comprehensive guide to understanding your rights under the Jones Act, 
                      including eligibility requirements and available remedies.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Guide
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      LHWCA Handbook
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">
                      Complete handbook covering Longshore and Harbor Workers' Compensation Act 
                      benefits, procedures, and your rights.
                    </p>
                    <Button variant="outline" size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Download Handbook
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Maritime Safety Education</h3>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Workplace Safety Standards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Vessel Safety Requirements</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Safety equipment standards</li>
                          <li>• Emergency procedures</li>
                          <li>• Crew training requirements</li>
                          <li>• Coast Guard regulations</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Worker Protection Rights</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Right to safe working conditions</li>
                          <li>• Right to report safety violations</li>
                          <li>• Protection from retaliation</li>
                          <li>• Right to refuse unsafe work</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Common Maritime Hazards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-50 border border-red-200 rounded p-3">
                        <h5 className="font-semibold text-red-800 mb-2">Physical Hazards</h5>
                        <ul className="text-xs text-red-700 space-y-1">
                          <li>• Slip and fall risks</li>
                          <li>• Heavy machinery</li>
                          <li>• Moving cargo</li>
                          <li>• Weather conditions</li>
                        </ul>
                      </div>
                      <div className="bg-orange-50 border border-orange-200 rounded p-3">
                        <h5 className="font-semibold text-orange-800 mb-2">Chemical Hazards</h5>
                        <ul className="text-xs text-orange-700 space-y-1">
                          <li>• Fuel and oil exposure</li>
                          <li>• Cleaning chemicals</li>
                          <li>• Cargo chemicals</li>
                          <li>• Welding fumes</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 border border-purple-200 rounded p-3">
                        <h5 className="font-semibold text-purple-800 mb-2">Environmental</h5>
                        <ul className="text-xs text-purple-700 space-y-1">
                          <li>• Temperature extremes</li>
                          <li>• Noise exposure</li>
                          <li>• Confined spaces</li>
                          <li>• Isolation factors</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Know Your Rights</h3>
              
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">If You're Injured</h4>
                      <ol className="text-sm space-y-2">
                        <li>1. Seek immediate medical attention</li>
                        <li>2. Report the injury to your supervisor</li>
                        <li>3. Document the accident scene</li>
                        <li>4. Get witness contact information</li>
                        <li>5. Contact a maritime attorney</li>
                        <li>6. Keep all medical records</li>
                      </ol>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Your Legal Protections</h4>
                      <ul className="text-sm space-y-2">
                        <li>• Right to maintenance and cure</li>
                        <li>• Right to choose your doctor</li>
                        <li>• Right to sue for negligence</li>
                        <li>• Protection from retaliation</li>
                        <li>• Right to legal representation</li>
                        <li>• Right to fair compensation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6 mb-6">
              <CardHeader>
                <CardTitle>Need Personal Guidance?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  While our educational resources provide general information, 
                  every maritime case is unique. Get personalized guidance for your situation.
                </p>
                
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
                  onClick={() => window.location.href = '/schedule-consultation'}
                >
                  Schedule Consultation
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Free Resources Available</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  <li>• Jones Act eligibility checklist</li>
                  <li>• LHWCA benefits calculator</li>
                  <li>• Maritime safety guidelines</li>
                  <li>• Accident reporting forms</li>
                  <li>• Legal rights pamphlets</li>
                  <li>• Case study examples</li>
                </ul>
                <Button variant="ghost" size="sm" className="mt-4 w-full">
                  Request All Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeEducation;