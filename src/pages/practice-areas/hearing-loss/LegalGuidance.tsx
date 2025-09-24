import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Star, Scale, FileText, AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/hearing-loss-legal-guidance-hero.jpg';
import legalProcessImage from '@/assets/hearing-loss-legal-process.jpg';
import californiaLawImage from '@/assets/hearing-loss-california-law.jpg';

const HearingLossLegalGuidance: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('hearing-loss-page');
    return () => document.body.classList.remove('hearing-loss-page');
  }, []);

  return (
    <>
      <SEO 
        title="Hearing Loss Legal Guidance California | Know Your Rights | Trembach Law Firm"
        description="Essential legal guidance for California hearing loss victims. Understand your rights, deadlines, and legal options. Free consultation with experienced hearing loss attorneys."
        keywords="hearing loss legal guidance, California hearing loss law, statute of limitations, legal rights, hearing damage claims"
        canonical="https://www.trembachlawfirm.com/practice-areas/hearing-loss/legal-guidance"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack fallbackPath="/practice-areas/hearing-loss" />
        
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hearing Loss Legal Guidance
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Know Your Legal Rights</span>
            </div>
            
            <p className="text-xl mb-8">
              Essential legal information for California hearing loss victims. Understand your rights, deadlines, and legal options.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button 
                 size="lg"
                 className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
                 onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
               >
                 Get Legal Help Now
               </Button>
               <Button 
                 size="lg"
                 variant="outline"
                 className="border-white text-white hover:bg-white hover:text-red-600 font-bold px-8 py-4 text-lg"
                 onClick={() => window.location.href = 'tel:8181234567'}
               >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Time Limits Section */}
              <Card className="shadow-lg border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-600 flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Critical Time Limits - Act Now
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-red-800 mb-2">California Statute of Limitations</h3>
                    <p className="text-red-700">
                      You generally have <strong>2 years</strong> from the date you discovered (or should have discovered) 
                      your hearing loss and its cause to file a personal injury lawsuit in California.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Important Deadline Variations:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Government Claims:</strong> 6 months to file administrative claim notice</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Workers' Compensation:</strong> 1 year from injury date or knowledge</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Gradual Onset Cases:</strong> Discovery rule may extend deadlines</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5" />
                        <span><strong>Minors:</strong> Extended deadlines until age of majority</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <p className="text-yellow-800 font-semibold">
                      ⚠️ Missing these deadlines can permanently bar your claim. Contact us immediately to protect your rights.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Your Legal Rights */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-6 h-6 mr-2 text-primary" />
                    Your Legal Rights in California
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Right to Full Compensation</h3>
                    <p className="mb-3">
                      California law allows complete recovery for hearing loss injuries without artificial damage caps 
                      (except in medical malpractice cases). You can recover:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Economic Damages</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Medical expenses (past and future)</li>
                          <li>• Lost wages and earning capacity</li>
                          <li>• Hearing aids and assistive devices</li>
                          <li>• Vocational rehabilitation costs</li>
                          <li>• Transportation to medical care</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-800 mb-2">Non-Economic Damages</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Pain and suffering</li>
                          <li>• Emotional distress</li>
                          <li>• Loss of life enjoyment</li>
                          <li>• Loss of consortium</li>
                          <li>• Mental anguish</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Pure Comparative Negligence</h3>
                    <p>
                      California uses pure comparative negligence, meaning you can recover damages even if partially at fault. 
                      Your compensation is reduced by your percentage of fault, but you're not completely barred from recovery.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Right to Refuse Quick Settlement Offers</h3>
                    <p>
                      Insurance companies often pressure victims into quick settlements before understanding the full extent 
                      of their hearing loss. You have the right to:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>Take time to understand your injury's full impact</li>
                      <li>Consult with medical experts about prognosis</li>
                      <li>Have an attorney review any settlement offers</li>
                      <li>Reject inadequate offers and pursue fair compensation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Process */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-primary" />
                    The Legal Process
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src={legalProcessImage} alt="Legal process" className="w-full h-48 object-cover rounded-lg" />
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold">Initial Consultation & Case Evaluation</h4>
                        <p className="text-sm text-muted-foreground">
                          Free consultation to review your case, discuss legal options, and determine the best strategy.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold">Investigation & Evidence Gathering</h4>
                        <p className="text-sm text-muted-foreground">
                          Thorough investigation of your case, including medical records review, expert consultations, and evidence preservation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold">Filing Your Claim</h4>
                        <p className="text-sm text-muted-foreground">
                          Formal filing of your lawsuit or insurance claim, including all necessary paperwork and documentation.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold">Discovery & Medical Evaluation</h4>
                        <p className="text-sm text-muted-foreground">
                          Exchange of information with opposing parties, depositions, and comprehensive medical evaluations.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-semibold">Negotiation & Settlement</h4>
                        <p className="text-sm text-muted-foreground">
                          Aggressive negotiation for fair settlement. Most hearing loss cases settle before trial.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm">6</div>
                      <div>
                        <h4 className="font-semibold">Trial (if necessary)</h4>
                        <p className="text-sm text-muted-foreground">
                          If settlement negotiations fail, we're prepared to present your case to a jury.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* California-Specific Laws */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-primary" />
                    California-Specific Hearing Loss Laws
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <img src={californiaLawImage} alt="California law" className="w-full h-48 object-cover rounded-lg" />
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Cal/OSHA Workplace Protections</h4>
                      <p className="text-sm mb-2">
                        California's occupational safety standards provide stronger worker protections than federal OSHA requirements:
                      </p>
                      <ul className="text-sm space-y-1 list-disc pl-6">
                        <li>Lower action levels for hearing conservation programs (85 dB vs 90 dB)</li>
                        <li>Mandatory audiometric testing for exposed workers</li>
                        <li>Required hearing protection in high-noise environments</li>
                        <li>Employer liability for violations</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Consumer Protection Laws</h4>
                      <p className="text-sm mb-2">
                        California's consumer protection statutes provide additional remedies for defective hearing protection products:
                      </p>
                      <ul className="text-sm space-y-1 list-disc pl-6">
                        <li>Song-Beverly Consumer Warranty Act</li>
                        <li>Unfair Competition Law (Business & Professions Code § 17200)</li>
                        <li>False advertising protections</li>
                        <li>Lemon law protections for certain devices</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2">Joint and Several Liability</h4>
                      <p className="text-sm">
                        California's joint and several liability rules mean that if multiple parties caused your hearing loss, 
                        each defendant can be held responsible for the full amount of economic damages, providing better recovery options.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Legal Challenges */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2 text-orange-600" />
                    Common Legal Challenges We Overcome
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-2">Insurance Company Tactics</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Claiming pre-existing conditions</li>
                        <li>• Minimizing severity of hearing loss</li>
                        <li>• Questioning causation</li>
                        <li>• Pressuring for quick settlements</li>
                        <li>• Using defense medical exams</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">How We Counter</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Comprehensive medical documentation</li>
                        <li>• Expert witness testimony</li>
                        <li>• Baseline hearing comparisons</li>
                        <li>• Thorough case preparation</li>
                        <li>• Aggressive negotiation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What You Should Do */}
              <Card className="shadow-lg border-green-200">
                <CardHeader className="bg-green-50">
                  <CardTitle className="text-green-600">Immediate Steps to Protect Your Rights</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-green-800 mb-2">DO:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✓ Seek immediate medical attention</li>
                        <li>✓ Document all symptoms and impacts</li>
                        <li>✓ Preserve all medical records</li>
                        <li>✓ Take photos of accident scenes</li>
                        <li>✓ Get witness contact information</li>
                        <li>✓ Contact an attorney immediately</li>
                        <li>✓ Report workplace injuries to employer</li>
                        <li>✓ Keep a symptom diary</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-red-800 mb-2">DON'T:</h4>
                      <ul className="text-sm space-y-1">
                        <li>✗ Give recorded statements to insurance</li>
                        <li>✗ Sign any settlement agreements</li>
                        <li>✗ Admit fault or downplay injuries</li>
                        <li>✗ Delay seeking medical treatment</li>
                        <li>✗ Miss medical appointments</li>
                        <li>✗ Discuss case on social media</li>
                        <li>✗ Accept quick settlement offers</li>
                        <li>✗ Wait to contact an attorney</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Get Legal Help */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center">Get Legal Help Now</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                    >
                      Free Case Evaluation
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      No fees unless we win your case
                    </p>
                  </CardContent>
                </Card>

                {/* Legal Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Legal Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/compensation-calculator'}
                    >
                      📊 Compensation Calculator
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/medical-guidance'}
                    >
                      🏥 Medical Guidance
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss'}
                    >
                      📖 Hearing Loss Law Guide
                    </Button>
                  </CardContent>
                </Card>

                {/* Why Time Matters */}
                <Card className="border-orange-200 shadow-lg">
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-600 flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      Why Time Matters
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 space-y-2 text-sm">
                    <p>• Evidence can be lost or destroyed</p>
                    <p>• Witnesses' memories fade over time</p>
                    <p>• Medical records may be discarded</p>
                    <p>• Statute of limitations deadlines</p>
                    <p>• Early treatment may prevent worsening</p>
                    <p>• Financial assistance for immediate needs</p>
                  </CardContent>
                </Card>

                {/* Our Advantage */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Our Advantage</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Former defense attorney insight</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Comprehensive medical network</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>Trial-ready representation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>No fees unless we win</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span>24/7 availability</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HearingLossLegalGuidance;