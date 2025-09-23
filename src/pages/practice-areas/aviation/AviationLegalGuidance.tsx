import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, BookOpen, Scale, AlertTriangle, Clock } from 'lucide-react';
import heroBackground from '@/assets/aviation-legal-guidance-hero.jpg';
import GoBack from '@/components/GoBack';

const AviationLegalGuidance: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <div className="min-h-screen bg-background">
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Accident Legal Guidance
          </h1>
          <p className="text-xl">Comprehensive guide to aviation accident law and your legal rights</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          
          {/* Introduction */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center">
                <BookOpen className="w-6 h-6 mr-3" />
                Understanding Aviation Accident Law
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg leading-relaxed mb-4">
                Aviation accident law is one of the most complex areas of personal injury litigation, involving federal regulations, international treaties, and multiple potential defendants. This comprehensive guide explains your rights and the legal process for pursuing compensation after an airplane or helicopter crash.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 font-medium">
                  Key Point: Aviation accidents are governed by both federal and state laws, making experienced legal representation essential for maximum compensation recovery.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Your Rights After an Aviation Accident */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('rights')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary flex items-center">
                  <Scale className="w-5 h-5 mr-2" />
                  Your Rights After an Aviation Accident
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'rights' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'rights' && (
              <CardContent>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Fundamental Rights Include:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Right to compensation for medical expenses, lost wages, and pain and suffering</li>
                    <li>Right to pursue claims against all responsible parties (airlines, manufacturers, maintenance companies)</li>
                    <li>Right to legal representation without upfront costs (contingency fee basis)</li>
                    <li>Right to refuse settlement offers and demand jury trial</li>
                    <li>Right to access all evidence related to the accident investigation</li>
                  </ul>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Special Protections for Aviation Victims:</h4>
                    <p className="text-yellow-700 text-sm">
                      Aviation passengers are protected as "common carriers," meaning airlines owe the highest duty of care. This elevated standard makes it easier to prove negligence and secure compensation compared to typical accident cases.
                    </p>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Time Limits and Deadlines */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('deadlines')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Critical Time Limits and Deadlines
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'deadlines' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'deadlines' && (
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Critical Deadlines - Don't Miss These!</h4>
                    <div className="space-y-2 text-red-700">
                      <p><strong>Government Claims:</strong> 6 months notice requirement for government-related accidents</p>
                      <p><strong>International Flights:</strong> 2 years under Montreal Convention</p>
                      <p><strong>Personal Injury:</strong> 2 years from accident date (California statute of limitations)</p>
                      <p><strong>Wrongful Death:</strong> 2 years from date of death</p>
                      <p><strong>Product Liability:</strong> Generally 2 years, but may extend up to 10 years for design defects</p>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold">Why Immediate Action is Essential:</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    <li>Evidence preservation before it's lost or destroyed</li>
                    <li>Witness interviews while memories are fresh</li>
                    <li>Meeting shorter government claim deadlines</li>
                    <li>Coordinating with ongoing NTSB investigation</li>
                    <li>Securing expert witnesses and technical analysis</li>
                  </ul>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Legal Process Overview */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('process')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  The Aviation Accident Legal Process
                </span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'process' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'process' && (
              <CardContent>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Phase 1: Immediate Response (Days 1-30)</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Accident site investigation and evidence preservation</li>
                      <li>• Coordination with NTSB and FAA officials</li>
                      <li>• Medical documentation and treatment coordination</li>
                      <li>• Insurance company notification</li>
                      <li>• Witness identification and interviews</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Phase 2: Investigation (Months 1-6)</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Identification of all potentially liable parties</li>
                      <li>• Technical analysis of aircraft systems and maintenance</li>
                      <li>• Pilot training and medical record review</li>
                      <li>• Weather and air traffic control analysis</li>
                      <li>• Expert witness retention and consultation</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Phase 3: Legal Action (Months 6-18)</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Filing lawsuits against responsible parties</li>
                      <li>• Discovery process including depositions and document production</li>
                      <li>• Expert witness report preparation</li>
                      <li>• Settlement negotiations with multiple defendants</li>
                      <li>• Trial preparation if settlement isn't achieved</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-semibold text-primary mb-2">Phase 4: Resolution (Months 18-36)</h4>
                    <ul className="space-y-1 text-muted-foreground text-sm">
                      <li>• Final settlement negotiations or trial proceedings</li>
                      <li>• Jury verdict or settlement agreement</li>
                      <li>• Distribution of compensation to victims/families</li>
                      <li>• Resolution of liens and reimbursement claims</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Types of Compensation */}
          <Card>
            <CardHeader 
              className="cursor-pointer hover:bg-muted/50 transition-colors"
              onClick={() => toggleSection('compensation')}
            >
              <CardTitle className="flex items-center justify-between text-xl">
                <span className="text-primary">Types of Compensation Available</span>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  {expandedSection === 'compensation' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </Button>
              </CardTitle>
            </CardHeader>
            {expandedSection === 'compensation' && (
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">Economic Damages</h4>
                      <ul className="space-y-1 text-green-700 text-sm">
                        <li>• Medical expenses (past and future)</li>
                        <li>• Lost wages and earning capacity</li>
                        <li>• Rehabilitation and therapy costs</li>
                        <li>• Property damage</li>
                        <li>• Travel and lodging expenses</li>
                      </ul>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Non-Economic Damages</h4>
                      <ul className="space-y-1 text-blue-700 text-sm">
                        <li>• Pain and suffering</li>
                        <li>• Emotional distress and trauma</li>
                        <li>• Loss of enjoyment of life</li>
                        <li>• Disfigurement and disability</li>
                        <li>• Loss of consortium (for spouses)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2">Punitive Damages</h4>
                    <p className="text-red-700 text-sm">
                      Available when defendants' conduct was particularly reckless or involved conscious disregard for safety. Aviation cases often qualify for punitive damages due to regulatory violations or corporate cover-ups.
                    </p>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Wrongful Death Damages</h4>
                    <ul className="space-y-1 text-purple-700 text-sm">
                      <li>• Loss of financial support</li>
                      <li>• Loss of love, companionship, and guidance</li>
                      <li>• Funeral and burial expenses</li>
                      <li>• Pre-impact pain and suffering (if applicable)</li>
                      <li>• Loss of inheritance and benefits</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* What Makes Our Firm Different */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Why Choose Trembach Law Firm for Aviation Cases?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-primary mb-2">Former Defense Experience</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Attorney Trembach's background defending aviation companies provides unique insights into corporate defense strategies, helping us anticipate and counter their tactics.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Technical Expertise</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our team includes former pilots, mechanics, and investigators who understand the technical complexities of aviation accidents and can explain them clearly to juries.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">Nationwide Resources</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We maintain relationships with leading aviation experts, accident reconstructionists, and medical specialists across the country to build the strongest possible case.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-2">No Win, No Fee</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    We advance all costs including investigations, experts, and litigation expenses. You pay nothing unless we win your case.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-primary mb-4">Ready to Discuss Your Aviation Accident Case?</h3>
              <p className="text-muted-foreground mb-6">
                Don't wait - critical evidence disappears quickly, and strict deadlines apply. Get experienced legal help now.
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

export default AviationLegalGuidance;