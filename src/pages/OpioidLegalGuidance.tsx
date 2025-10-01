import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Scale, Shield, Phone, FileText, Gavel, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import heroBackground from '@/assets/opioid-legal-guidance-hero.jpg';

const OpioidLegalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opioid Legal Guidance
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Expert Legal Advice</span>
          </div>
          <p className="text-xl opacity-90">
            Understanding your legal rights and options for opioid litigation
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Understanding Your Rights */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Scale className="w-6 h-6 mr-3" />
                  Understanding Your Legal Rights
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  If you or a loved one became addicted to prescription opioids, you have legal rights. 
                  Pharmaceutical companies, distributors, and pharmacies may be liable for failing to warn 
                  about addiction risks or engaging in deceptive marketing practices.
                </p>
                
                <h3>Key Legal Principles</h3>
                <ul>
                  <li><strong>Duty to Warn:</strong> Companies must provide adequate warnings about known risks</li>
                  <li><strong>False Marketing:</strong> Misrepresenting safety or addiction potential creates liability</li>
                  <li><strong>Negligent Distribution:</strong> Failing to monitor suspicious orders violates federal law</li>
                  <li><strong>Public Nuisance:</strong> Contributing to the opioid crisis through deceptive practices</li>
                </ul>
              </CardContent>
            </Card>

            {/* Types of Legal Claims */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Gavel className="w-6 h-6 mr-3" />
                  Types of Legal Claims
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Personal Injury Claims</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Medical expenses for treatment</li>
                        <li>• Lost wages and earning capacity</li>
                        <li>• Pain and suffering</li>
                        <li>• Rehabilitation costs</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-purple-50 border-purple-200">
                    <CardHeader>
                      <CardTitle className="text-purple-800">Wrongful Death Claims</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Funeral and burial expenses</li>
                        <li>• Lost financial support</li>
                        <li>• Loss of companionship</li>
                        <li>• Pre-death pain and suffering</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">Consumer Protection Claims</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm">
                    <p>
                      Even without addiction, patients may have claims if prescribed opioids based on 
                      false marketing representations about safety or addiction potential.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>

            {/* Statute of Limitations */}
            <Card className="p-8 bg-yellow-50 border-yellow-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-yellow-800">
                  <Clock className="w-6 h-6 mr-3" />
                  Time Limits - Act Now
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-yellow-100 border-l-4 border-yellow-400 p-4">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Important Deadlines</h4>
                      <ul className="text-yellow-700 mt-2 space-y-1">
                        <li>• Personal injury claims: Generally 2 years from discovery</li>
                        <li>• Wrongful death claims: 2 years from date of death</li>
                        <li>• Some circumstances may extend deadlines</li>
                        <li>• Evidence degrades over time</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="text-yellow-800 font-medium">
                  Don't wait - contact an attorney immediately to protect your rights and preserve evidence.
                </p>
              </CardContent>
            </Card>

            {/* Defendants in Opioid Litigation */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Who Can Be Held Liable</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <h3>Pharmaceutical Manufacturers</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold">Major Defendants:</h4>
                    <ul className="space-y-1">
                      <li>Purdue Pharma</li>
                      <li>Johnson & Johnson</li>
                      <li>Teva Pharmaceuticals</li>
                      <li>Endo International</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Distributors:</h4>
                    <ul className="space-y-1">
                      <li>McKesson</li>
                      <li>Cardinal Health</li>
                      <li>AmerisourceBergen</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Pharmacy Chains:</h4>
                    <ul className="space-y-1">
                      <li>CVS Health</li>
                      <li>Walgreens</li>
                      <li>Walmart</li>
                    </ul>
                  </div>
                </div>

                <h3>Evidence of Corporate Misconduct</h3>
                <ul className="space-y-2">
                  <li><strong>Internal Documents:</strong> Companies knew about addiction risks but concealed them</li>
                  <li><strong>Marketing Materials:</strong> False claims about safety and addiction potential</li>
                  <li><strong>Distribution Data:</strong> Suspicious order patterns ignored by distributors</li>
                  <li><strong>Scientific Studies:</strong> Research showing addiction risks was suppressed</li>
                </ul>
              </CardContent>
            </Card>

            {/* What to Expect in Your Case */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  What to Expect in Your Case
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                
                <h3>The Legal Process</h3>
                
                <h4>1. Case Evaluation (Free)</h4>
                <p>
                  We review your prescription history, medical records, and damages to assess case strength 
                  and identify liable parties.
                </p>
                
                <h4>2. Investigation</h4>
                <p>
                  We gather medical records, prescription data, and work with experts to establish 
                  the connection between your addiction and defendant misconduct.
                </p>
                
                <h4>3. Filing Lawsuit</h4>
                <p>
                  Your case may be filed as individual lawsuit, joined with others in mass tort, 
                  or consolidated in multidistrict litigation (MDL).
                </p>
                
                <h4>4. Discovery Process</h4>
                <p>
                  We obtain internal company documents, depose witnesses, and work with medical experts 
                  to build your case.
                </p>
                
                <h4>5. Resolution</h4>
                <p>
                  Most cases settle before trial, but we prepare every case for court to maximize 
                  leverage in negotiations.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h4 className="font-semibold text-blue-800">No Risk to You</h4>
                  <p className="text-blue-700">
                    We work on contingency fee basis - you pay nothing unless we win your case. 
                    We advance all costs and expenses.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Free Consultation */}
              <Card className="p-6 bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-lg text-green-800">Free Legal Consultation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-green-700">
                    Get experienced legal advice about your opioid litigation options. 
                    Confidential consultation with no obligation.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full border-green-600 text-green-600 hover:bg-green-50"
                      onClick={() => window.location.href = '/opioid-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-red-600">Why Choose Trembach Law Firm</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <Shield className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Former defense attorney advantage
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      No fees unless we win
                    </li>
                    <li className="flex items-start">
                      <Scale className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      Extensive opioid litigation experience
                    </li>
                    <li className="flex items-start">
                      <Clock className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                      24/7 availability for consultation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Legal Resources */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Legal Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2 text-blue-700">
                    <li>• Opioid litigation updates</li>
                    <li>• Settlement information</li>
                    <li>• California court filings</li>
                    <li>• Your rights under state law</li>
                  </ul>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full mt-4 border-blue-600 text-blue-600 hover:bg-blue-50"
                    onClick={() => window.location.href = '/opioid-education'}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpioidLegalGuidance;