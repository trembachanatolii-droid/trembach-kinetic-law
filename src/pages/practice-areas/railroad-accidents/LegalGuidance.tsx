import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Scale, Clock, Phone, FileText, AlertTriangle, Users, Award } from 'lucide-react';
import heroBackground from '@/assets/railroad-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const RailroadAccidentsLegalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Railroad Accident Legal Guidance | FELA Claims Help | California Train Accident Lawyers"
        description="Complete legal guidance for California railroad accident victims. FELA claims, legal rights, settlement process, and expert representation from former defense attorney."
        keywords="railroad accident legal guidance, FELA legal help, train accident lawyer advice, California railroad attorney guidance"
      />

      <GoBack fallbackPath="/practice-areas/railroad-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Railroad Accident Legal Guidance
          </h1>
          <p className="text-xl text-white/90">
            Expert legal guidance for FELA claims and railroad accident cases
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Immediate Steps Section */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Immediate Steps After a Railroad Accident</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Shield className="w-5 h-5 mr-2" />
                      What TO Do Immediately
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• <strong>Ensure Safety:</strong> Move to a safe location away from tracks</p>
                    <p>• <strong>Call 911:</strong> Report the accident and request medical help</p>
                    <p>• <strong>Document Scene:</strong> Take photos of equipment, tracks, and injuries</p>
                    <p>• <strong>Gather Witnesses:</strong> Get contact information from anyone who saw the accident</p>
                    <p>• <strong>Seek Medical Care:</strong> Get immediate medical attention, even for minor injuries</p>
                    <p>• <strong>Preserve Evidence:</strong> Keep damaged clothing and personal items</p>
                    <p>• <strong>Contact Attorney:</strong> Call a railroad accident lawyer immediately</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      What NOT to Do
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p>• <strong>Don't Give Statements:</strong> Avoid talking to railroad representatives without a lawyer</p>
                    <p>• <strong>Don't Accept Quick Offers:</strong> Initial settlement offers are typically too low</p>
                    <p>• <strong>Don't Sign Documents:</strong> Never sign anything without legal review</p>
                    <p>• <strong>Don't Delay Medical Care:</strong> Delayed treatment can hurt your case</p>
                    <p>• <strong>Don't Admit Fault:</strong> Avoid making statements about who was at fault</p>
                    <p>• <strong>Don't Delete Evidence:</strong> Preserve all photos, videos, and documents</p>
                    <p>• <strong>Don't Wait to Act:</strong> Time limits apply to railroad accident claims</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FELA vs Workers' Compensation */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Understanding FELA vs Workers' Compensation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-600">FELA Advantages</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Full Compensation:</strong> Recovery for all damages including pain and suffering</li>
                    <li>• <strong>No Damage Caps:</strong> Unlimited recovery potential for most injuries</li>
                    <li>• <strong>Jury Trials:</strong> Right to have your case heard by a jury</li>
                    <li>• <strong>Comparative Negligence:</strong> Can recover even if partially at fault</li>
                    <li>• <strong>Three-Year Deadline:</strong> Longer time limit to file claims</li>
                    <li>• <strong>Attorney Representation:</strong> Right to choose your own lawyer</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">Workers' Compensation Limitations</h3>
                  <ul className="space-y-2">
                    <li>• <strong>Limited Benefits:</strong> Only covers medical expenses and partial lost wages</li>
                    <li>• <strong>No Pain & Suffering:</strong> Cannot recover for emotional distress or pain</li>
                    <li>• <strong>No Jury Trials:</strong> Claims decided by administrative judges</li>
                    <li>• <strong>Benefit Caps:</strong> Maximum weekly and total benefit limits</li>
                    <li>• <strong>Shorter Deadlines:</strong> Must report injuries quickly</li>
                    <li>• <strong>Company Doctors:</strong> Limited choice in medical providers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Legal Process Timeline */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Railroad Accident Legal Process Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                  <div>
                    <h4 className="font-semibold text-lg">Initial Consultation (Day 1)</h4>
                    <p className="text-muted-foreground">Free case evaluation, legal strategy discussion, and immediate action plan</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                  <div>
                    <h4 className="font-semibold text-lg">Investigation Phase (Weeks 1-8)</h4>
                    <p className="text-muted-foreground">Evidence gathering, expert consultation, medical record review, and liability analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                  <div>
                    <h4 className="font-semibold text-lg">Filing Lawsuit (Months 2-6)</h4>
                    <p className="text-muted-foreground">Formal legal action, discovery process, and evidence exchange</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
                  <div>
                    <h4 className="font-semibold text-lg">Settlement Negotiations (Months 6-18)</h4>
                    <p className="text-muted-foreground">Mediation, settlement discussions, and damage calculations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">5</div>
                  <div>
                    <h4 className="font-semibold text-lg">Trial if Necessary (Months 18-36)</h4>
                    <p className="text-muted-foreground">Court proceedings, jury selection, and final resolution</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Why Choose Trembach Law Firm */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Why Choose Trembach Law Firm for Railroad Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Former Defense Attorney Advantage
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Attorney Anatolii Trembach's background defending railroad companies provides unique insights into corporate defense strategies, insurance tactics, and settlement negotiations.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2 text-primary" />
                      FELA Specialization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Deep understanding of Federal Employers Liability Act requirements, federal railroad regulations, and complex liability issues specific to railroad accident cases.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-primary" />
                      Expedited Process
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Understanding the urgency of railroad cases and working to secure compensation as quickly as possible while maximizing recovery potential.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary" />
                      No Win, No Fee
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>Contingency fee arrangement means no upfront costs and payment only when we achieve successful results for your railroad accident case.</p>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-8">
              <div className="text-center">
                <h2 className="text-3xl font-bold text-red-600 mb-4">Get Expert Legal Guidance Now</h2>
                <p className="text-lg text-red-700 mb-6">
                  Don't navigate the complex railroad accident legal process alone. Our experienced attorneys are here to guide you every step of the way.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mr-4"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg"
                    onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <div className="mt-4">
                    <p className="text-red-600 font-semibold">
                      Available 24/7 • No Fees Unless We Win • Former Defense Attorney
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default RailroadAccidentsLegalGuidance;