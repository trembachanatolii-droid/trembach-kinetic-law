import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Scale, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  FileText,
  Phone,
  Shield,
  Gavel,
  DollarSign,
  Users,
  Star
} from 'lucide-react';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-legal-guidance-hero.jpg';

const BenzeneLegalGuidance: React.FC = () => {
  // Add scroll restoration
  useScrollRestoration();

  const legalSteps = [
    {
      title: "Contact an Attorney Immediately",
      description: "Time limits apply to benzene exposure claims in California",
      action: "Schedule free consultation within days of diagnosis",
      timeline: "Within 48 hours"
    },
    {
      title: "Preserve Evidence",
      description: "Document all sources of benzene exposure before evidence disappears",
      action: "Gather employment records, safety training documents, workplace photos",
      timeline: "Within 1 week"
    },
    {
      title: "Medical Documentation", 
      description: "Establish clear medical evidence linking benzene to your cancer",
      action: "Request complete medical records and pathology reports",
      timeline: "Within 2 weeks"
    },
    {
      title: "Avoid Insurance Company Tactics",
      description: "Don't sign anything without legal review",
      action: "Refer all communications to your attorney",
      timeline: "Immediately"
    }
  ];

  const legalRights = [
    {
      title: "Right to Full Compensation",
      description: "You deserve compensation for all damages caused by benzene exposure",
      includes: ["Medical expenses", "Lost wages", "Pain and suffering", "Future medical care"]
    },
    {
      title: "Right to Legal Representation",
      description: "You have the right to experienced legal counsel",
      includes: ["No upfront costs", "Contingency fee basis", "Expert witness access", "Full investigation"]
    },
    {
      title: "Right to Hold Companies Accountable",
      description: "Corporations that exposed you to benzene must be held responsible",
      includes: ["Strict liability", "Negligence claims", "Failure to warn", "Punitive damages"]
    }
  ];

  return (
    <>
      <SEO
        title="Benzene Exposure Legal Guidance | California Blood Cancer Lawsuit Rights"
        description="Comprehensive legal guidance for benzene exposure victims. Understanding your rights, legal process, and how to protect your claim for maximum compensation."
        canonical="/benzene-legal-guidance"
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
              <span className="ml-2 text-lg">Former Defense Attorney Expertise</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benzene Exposure Legal Guidance</h1>
            <p className="text-xl mb-6">
              Understanding your legal rights and options after benzene exposure
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
              onClick={() => window.location.href = '/benzene-case-evaluation'}
            >
              Get Free Legal Consultation
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          
          {/* Immediate Legal Actions */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Immediate Legal Actions Required</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalSteps.map((step, index) => (
                <Card key={index} className="border-2 border-red-200 bg-red-50 hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-800">
                      <Scale className="w-5 h-5 mr-2" />
                      {step.title}
                      <Badge variant="destructive" className="ml-2">{step.timeline}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-red-700">
                    <p className="mb-3">{step.description}</p>
                    <div className="bg-red-100 p-3 rounded border border-red-200">
                      <p className="text-sm font-medium text-red-800">Action: {step.action}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Your Legal Rights */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Your Legal Rights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {legalRights.map((right, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="bg-blue-600 text-white">
                    <CardTitle className="flex items-center text-lg">
                      <Shield className="w-5 h-5 mr-2" />
                      {right.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4">{right.description}</p>
                    <ul className="space-y-2">
                      {right.includes.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Legal Process Overview */}
          <section className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-green-600 text-white">
                <CardTitle className="text-center text-2xl">The Legal Process for Benzene Cases</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <FileText className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">1. Case Investigation</h4>
                    <p className="text-sm text-muted-foreground">Thorough investigation of your exposure history and medical condition</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Gavel className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">2. Filing Claims</h4>
                    <p className="text-sm text-muted-foreground">Filing lawsuits against all responsible parties before deadlines expire</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">3. Discovery & Experts</h4>
                    <p className="text-sm text-muted-foreground">Gathering evidence and working with medical and scientific experts</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">4. Resolution</h4>
                    <p className="text-sm text-muted-foreground">Negotiating settlements or proceeding to trial for maximum compensation</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* California Law Specifics */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            
            {/* Statute of Limitations */}
            <Card className="shadow-lg border-2 border-amber-200">
              <CardHeader className="bg-amber-600 text-white">
                <CardTitle className="flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  California Statute of Limitations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Personal Injury Claims</h4>
                    <p className="text-sm text-amber-700">
                      <strong>2 years</strong> from the date you discovered or should have discovered 
                      that your blood cancer was caused by benzene exposure.
                    </p>
                  </div>
                  
                  <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                    <h4 className="font-semibold text-amber-800 mb-2">Wrongful Death Claims</h4>
                    <p className="text-sm text-amber-700">
                      <strong>2 years</strong> from the date of death for family members 
                      to file wrongful death claims.
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <h4 className="font-semibold text-red-800 mb-2">⚠️ Critical Warning</h4>
                    <p className="text-sm text-red-700">
                      Missing these deadlines can permanently bar your claim. 
                      Contact an attorney immediately upon diagnosis.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Types of Claims */}
            <Card className="shadow-lg">
              <CardHeader className="bg-purple-600 text-white">
                <CardTitle className="flex items-center">
                  <Scale className="w-6 h-6 mr-2" />
                  Types of Legal Claims
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Strict Liability</h4>
                    <p className="text-sm text-muted-foreground">
                      California holds companies strictly liable for injuries from dangerous substances like benzene. 
                      No need to prove negligence - only that exposure caused your illness.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Negligence Claims</h4>
                    <p className="text-sm text-muted-foreground">
                      Companies failed to protect workers or warn about benzene dangers despite 
                      knowing the risks for decades.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Failure to Warn</h4>
                    <p className="text-sm text-muted-foreground">
                      Violations of California's Proposition 65 requirements to warn about 
                      benzene exposure and cancer risks.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-600 mb-2">Punitive Damages</h4>
                    <p className="text-sm text-muted-foreground">
                      Available when companies deliberately concealed benzene dangers or 
                      prioritized profits over worker safety.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Compensation Types */}
          <section className="mb-12">
            <Card className="shadow-xl">
              <CardHeader className="bg-red-600 text-white">
                <CardTitle className="text-center text-2xl">Types of Compensation Available</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Economic Damages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Past and future medical expenses</li>
                      <li>• Lost wages and earning capacity</li>
                      <li>• Medical monitoring costs</li>
                      <li>• Home healthcare expenses</li>
                      <li>• Travel costs for treatment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Non-Economic Damages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Loss of life enjoyment</li>
                      <li>• Loss of consortium</li>
                      <li>• Disfigurement/scarring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-600 mb-3">Punitive Damages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Corporate misconduct punishment</li>
                      <li>• Deterrent for future violations</li>
                      <li>• Concealment of dangers</li>
                      <li>• Deliberate safety violations</li>
                      <li>• Profits over people decisions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Common Legal Challenges */}
          <section className="mb-12">
            <Card className="shadow-lg border-2 border-orange-200">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="flex items-center text-xl">
                  <AlertTriangle className="w-6 h-6 mr-2" />
                  Common Legal Challenges & How We Overcome Them
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">Defense Tactics We Counter</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• "Safe exposure level" claims</li>
                      <li>• Causation challenges</li>
                      <li>• Statute of limitations arguments</li>
                      <li>• Multiple causation theories</li>
                      <li>• Preemption defenses</li>
                      <li>• Bankruptcy strategies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-3">Our Advantages</h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• Former defense attorney insight</li>
                      <li>• Expert witness network</li>
                      <li>• Scientific literature mastery</li>
                      <li>• Industry document access</li>
                      <li>• California law expertise</li>
                      <li>• Track record of success</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Why Choose Trembach Law */}
          <section className="mb-12">
            <Card className="shadow-xl bg-gradient-to-r from-blue-50 to-red-50">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-center text-foreground mb-6">Why Choose Trembach Law Firm?</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-blue-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">Former Defense Attorney</h4>
                    <p className="text-sm text-muted-foreground">I know how companies defend these cases because I used to defend them</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <DollarSign className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">No Upfront Costs</h4>
                    <p className="text-sm text-muted-foreground">We work on contingency - no fees unless we win your case</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-purple-600" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">Dedicated Team</h4>
                    <p className="text-sm text-muted-foreground">Experienced legal team focused exclusively on toxic exposure cases</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="shadow-xl bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">Don't Wait - Time Limits Apply</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  California law imposes strict deadlines for benzene exposure claims. 
                  Contact us immediately to protect your legal rights.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4"
                    onClick={() => window.location.href = '/benzene-case-evaluation'}
                  >
                    Get Free Legal Consultation
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
                  Available 24/7 • Free consultation • No obligation
                </p>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BenzeneLegalGuidance;