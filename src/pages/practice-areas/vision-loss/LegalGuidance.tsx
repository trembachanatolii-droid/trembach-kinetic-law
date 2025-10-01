import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  Star,
  Scale,
  FileText,
  Clock,
  Shield,
  Eye,
  AlertTriangle,
  CheckCircle,
  Book,
  Gavel
} from 'lucide-react';

import SEO from '@/components/SEO';

// Import hero image
import heroImage from '@/assets/vision-loss-legal-guidance-hero.jpg';

const VisionLossLegalGuidance: React.FC = () => {
  // Add vision-loss-page class for styling
  useEffect(() => {
    document.body.classList.add('vision-loss-page');
    return () => document.body.classList.remove('vision-loss-page');
  }, []);

  return (
    <div className="min-h-screen bg-background vision-loss-page">
      <SEO 
        title="Vision Loss Legal Guidance | California Eye Injury Law Guide"
        description="Comprehensive legal guidance for vision loss and eye injury claims in California. Learn your rights, understand the legal process, and get expert advice from experienced attorneys."
        keywords="vision loss legal guidance, eye injury law California, blindness legal rights, vision loss lawsuit guide, eye injury attorney advice"
        canonical="/practice-areas/vision-loss/legal-guidance"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat hero-section"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white text-center">
              Vision Loss Legal Guidance
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Expert Legal Advice</span>
            </div>
            
            <p className="text-xl mb-6 text-white text-center">
              Understanding your legal rights after vision loss or eye injury
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            
            {/* Legal Rights Section */}
            <Card className="shadow-lg mb-8">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-600 flex items-center">
                  <Scale className="w-6 h-6 mr-2" />
                  Your Legal Rights After Vision Loss
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h3 className="font-bold text-green-800 mb-2 flex items-center">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Right to Compensation
                      </h3>
                      <p className="text-sm text-green-700">You have the right to seek compensation for medical expenses, lost wages, pain and suffering, and future care needs if your vision loss was caused by someone else's negligence.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h3 className="font-bold text-blue-800 mb-2 flex items-center">
                        <Shield className="w-4 h-4 mr-2" />
                        Right to Legal Representation
                      </h3>
                      <p className="text-sm text-blue-700">You have the right to hire an attorney to represent your interests and ensure insurance companies don't take advantage of your situation.</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h3 className="font-bold text-purple-800 mb-2 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Right to Time
                      </h3>
                      <p className="text-sm text-purple-700">You have the right to take time to understand the full extent of your injuries before accepting any settlement offers from insurance companies.</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h3 className="font-bold text-orange-800 mb-2 flex items-center">
                        <FileText className="w-4 h-4 mr-2" />
                        Right to Information
                      </h3>
                      <p className="text-sm text-orange-700">You have the right to obtain all medical records, accident reports, and other documentation related to your vision loss incident.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Legal Process Timeline */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Gavel className="w-5 h-5 mr-2" />
                  Vision Loss Legal Process Timeline
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Immediate Response (Day 1-7)</h3>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Seek emergency medical treatment</li>
                          <li>• Document the incident and injuries</li>
                          <li>• Notify relevant parties (employer, property owner, etc.)</li>
                          <li>• Avoid giving recorded statements to insurance</li>
                          <li>• Contact a vision loss attorney</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Investigation Phase (Week 1-8)</h3>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Attorney reviews medical records and incident details</li>
                          <li>• Investigation of liability and fault</li>
                          <li>• Witness interviews and evidence collection</li>
                          <li>• Medical expert consultations</li>
                          <li>• Insurance policy identification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Medical Documentation (Month 2-6)</h3>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Comprehensive ophthalmologic evaluations</li>
                          <li>• Specialist consultations and testing</li>
                          <li>• Prognosis and future care planning</li>
                          <li>• Vocational impact assessments</li>
                          <li>• Life care plan development</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Demand and Negotiation (Month 6-12)</h3>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Comprehensive demand package preparation</li>
                          <li>• Presentation to insurance companies</li>
                          <li>• Settlement negotiations</li>
                          <li>• Mediation if needed</li>
                          <li>• Trial preparation if settlement fails</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex items-start space-x-4">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">Resolution (Month 12-24)</h3>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Settlement agreement finalization</li>
                          <li>• Trial if necessary</li>
                          <li>• Compensation distribution</li>
                          <li>• Future care arrangements</li>
                          <li>• Case closure</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Common Legal Issues */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Common Legal Issues in Vision Loss Cases
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-red-600">Liability Challenges</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>Multiple potential defendants</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>Disputed fault attribution</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>Complex causation issues</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-red-500">•</span>
                        <span>Pre-existing condition arguments</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-3 text-blue-600">Insurance Tactics</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500">•</span>
                        <span>Lowball settlement offers</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500">•</span>
                        <span>Surveillance and investigation</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500">•</span>
                        <span>Medical exam requests</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-blue-500">•</span>
                        <span>Delay tactics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Legal Concepts */}
            <Card className="shadow-lg mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Book className="w-5 h-5 mr-2" />
                  Key Legal Concepts
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Negligence</h3>
                    <p className="text-sm text-muted-foreground">The failure to exercise reasonable care that results in harm to another person. In vision loss cases, this could include failure to provide safety equipment, inadequate medical care, or dangerous property conditions.</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Strict Liability</h3>
                    <p className="text-sm text-muted-foreground">Legal responsibility regardless of fault or intent. Often applies in product liability cases where defective products cause vision loss, such as contaminated eye drops or faulty safety equipment.</p>
                  </div>
                  
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Comparative Negligence</h3>
                    <p className="text-sm text-muted-foreground">California's legal doctrine that reduces compensation based on the injured person's percentage of fault. Even if you're partially at fault, you can still recover damages.</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="font-bold text-lg mb-2">Statute of Limitations</h3>
                    <p className="text-sm text-muted-foreground">Time limits for filing lawsuits. In California, personal injury claims generally must be filed within two years, but medical malpractice and government claims have different deadlines.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* California Specific Laws */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl flex items-center">
                  <Scale className="w-5 h-5 mr-2" />
                  California-Specific Vision Loss Laws
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold text-blue-800 mb-2">Unruh Civil Rights Act</h3>
                    <p className="text-sm text-blue-700">Provides additional protection and damages for discrimination based on vision disabilities in public accommodations and services.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-bold text-green-800 mb-2">Fair Employment and Housing Act</h3>
                    <p className="text-sm text-green-700">Requires employers to provide reasonable accommodations for employees with vision loss and prohibits discrimination in employment.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="font-bold text-purple-800 mb-2">California Vehicle Code</h3>
                    <p className="text-sm text-purple-700">Establishes vision standards for driving and provides guidelines for license restrictions based on vision limitations.</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="font-bold text-orange-800 mb-2">Workers' Compensation Laws</h3>
                    <p className="text-sm text-orange-700">Provides specific benefits for work-related vision loss while allowing third-party claims against responsible parties other than employers.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Info */}
              <Card className="shadow-lg">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-lg text-red-600">Need Legal Advice?</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-sm">Get personalized legal guidance for your specific vision loss situation.</p>
                  
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-red-600 text-red-600 hover:bg-red-50"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Legal Tips */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Legal Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-green-800">Do This</h4>
                      <ul className="text-xs text-green-700 space-y-1 mt-1">
                        <li>• Keep all medical records</li>
                        <li>• Document daily vision challenges</li>
                        <li>• Follow all medical treatment</li>
                        <li>• Report income changes</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm text-red-800">Avoid This</h4>
                      <ul className="text-xs text-red-700 space-y-1 mt-1">
                        <li>• Recorded statements to insurance</li>
                        <li>• Quick settlement offers</li>
                        <li>• Signing anything without review</li>
                        <li>• Missing medical appointments</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start text-sm" asChild>
                    <a href="/practice-areas/vision-loss/compensation-calculator">
                      <FileText className="w-4 h-4 mr-2" />
                      Compensation Calculator
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm" asChild>
                    <a href="/practice-areas/vision-loss/medical-guidance">
                      <Eye className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm" asChild>
                    <a href="/practice-areas/vision-loss">
                      <Scale className="w-4 h-4 mr-2" />
                      Back to Vision Loss Info
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-4 text-white">Protect Your Legal Rights After Vision Loss</h2>
          <p className="text-lg mb-6 text-white">Don't let insurance companies take advantage of your situation. Get experienced legal representation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <span className="text-white">Call (818) 123-4567</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white/50 text-white hover:bg-white/10 hover:border-white/80 hover:text-white"
              onClick={() => window.location.href = '/practice-areas/vision-loss/case-evaluation'}
            >
              <span className="text-white">Free Legal Consultation</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VisionLossLegalGuidance;