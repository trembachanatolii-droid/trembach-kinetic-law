import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, BookOpen, TrendingDown, Users, Phone, FileText, AlertCircle, BarChart3, Target } from 'lucide-react';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/opioid-education-hero.jpg';

const OpioidEducation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <GoBack fallbackPath="/practice-areas/opioid-litigation" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opioid Crisis Education
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Knowledge is Power</span>
          </div>
          <p className="text-xl opacity-90">
            Understanding the opioid epidemic and its impact on California
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* The Opioid Epidemic Overview */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <BookOpen className="w-6 h-6 mr-3" />
                  The Opioid Epidemic: A Manufactured Crisis
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  The opioid epidemic is the deadliest drug crisis in American history, claiming over 1 million lives 
                  since the 1990s. Unlike previous drug crises that emerged from street drugs, this epidemic was 
                  largely manufactured by pharmaceutical companies through aggressive marketing of prescription opioids.
                </p>
                
                <h3>Timeline of the Crisis</h3>
                <ul>
                  <li><strong>1990s:</strong> Purdue Pharma launches OxyContin with false "12-hour relief" marketing</li>
                  <li><strong>2000s:</strong> Opioid prescriptions skyrocket; companies fund "pain advocacy" groups</li>
                  <li><strong>2010s:</strong> Prescription crackdown leads to heroin and fentanyl epidemic</li>
                  <li><strong>2020s:</strong> Over 100,000 annual overdose deaths; massive litigation against manufacturers</li>
                </ul>

                <div className="bg-red-50 border-l-4 border-red-400 p-6">
                  <h4 className="font-semibold text-red-800">Staggering Statistics</h4>
                  <ul className="text-red-700 mt-2 space-y-1">
                    <li>• Over 1 million Americans have died from overdoses since 1999</li>
                    <li>• California has lost over 70,000 residents to opioid overdoses</li>
                    <li>• 80% of heroin users started with prescription opioids</li>
                    <li>• Economic cost exceeds $1 trillion nationally</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How Pharmaceutical Companies Created the Crisis */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Target className="w-6 h-6 mr-3" />
                  How Pharmaceutical Companies Created the Crisis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <h3>Deceptive Marketing Tactics</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-yellow-50 border-yellow-200">
                    <CardHeader>
                      <CardTitle className="text-yellow-800">False Safety Claims</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Claimed addiction risk was less than 1%</li>
                        <li>• Marketed as "non-addictive" alternatives</li>
                        <li>• Suppressed research showing addiction risks</li>
                        <li>• Created fake medical organizations</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-orange-50 border-orange-200">
                    <CardHeader>
                      <CardTitle className="text-orange-800">Targeting Doctors</CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                      <ul className="space-y-1">
                        <li>• Paid doctors millions in speaker fees</li>
                        <li>• Funded medical conferences and education</li>
                        <li>• Influenced pain management guidelines</li>
                        <li>• Promoted "pain as fifth vital sign"</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3>Distribution System Failures</h3>
                <p>
                  The "Big Three" distributors (McKesson, Cardinal Health, AmerisourceBergen) were required by law 
                  to monitor and report suspicious orders but instead prioritized profits. They shipped billions of 
                  pills to small pharmacies and pain clinics that couldn't possibly serve legitimate medical needs.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <h4 className="font-semibold text-blue-800">Internal Documents Reveal</h4>
                  <ul className="text-blue-700 mt-2 space-y-1">
                    <li>• Companies knew opioids were highly addictive</li>
                    <li>• Executives discussed "blizzard of prescriptions"</li>
                    <li>• Marketing focused on high-prescribing doctors</li>
                    <li>• Concerns about addiction were dismissed as "pseudoaddiction"</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* California's Response */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <BarChart3 className="w-6 h-6 mr-3" />
                  California's Response to the Crisis
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <h3>Legal Action and Settlements</h3>
                <p>
                  California has been aggressive in pursuing accountability, securing over $4.25 billion in opioid 
                  settlements from manufacturers, distributors, and pharmacy chains. These funds support treatment, 
                  prevention, and harm reduction programs statewide.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-700">$4.25B</div>
                    <div className="text-sm text-green-600">California Settlements</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-700">58</div>
                    <div className="text-sm text-blue-600">Counties Participating</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-700">480+</div>
                    <div className="text-sm text-purple-600">Cities Involved</div>
                  </div>
                </div>

                <h3>Treatment and Prevention Initiatives</h3>
                <ul className="space-y-2">
                  <li><strong>CalAIM:</strong> California's Medicaid transformation increasing addiction treatment access</li>
                  <li><strong>Naloxone Distribution:</strong> Statewide overdose reversal drug availability</li>
                  <li><strong>Prescription Monitoring:</strong> CURES database tracks opioid prescribing patterns</li>
                  <li><strong>MAT Expansion:</strong> Increased access to medication-assisted treatment</li>
                </ul>
              </CardContent>
            </Card>

            {/* Understanding Your Rights */}
            <Card className="p-8 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-green-800">
                  <Users className="w-6 h-6 mr-3" />
                  Individual Rights vs. Government Settlements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-100 border-l-4 border-green-400 p-4">
                  <h4 className="font-semibold text-green-800">Important Distinction</h4>
                  <p className="text-green-700">
                    Government opioid settlements fund public programs but don't provide direct compensation to 
                    individual victims. You maintain separate rights to pursue personal injury claims for your 
                    specific damages from opioid addiction.
                  </p>
                </div>

                <h3>What Individual Claims Cover</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="space-y-1 text-sm">
                    <li>• Medical expenses for addiction treatment</li>
                    <li>• Rehabilitation and therapy costs</li>
                    <li>• Lost wages and earning capacity</li>
                    <li>• Pain and suffering damages</li>
                  </ul>
                  <ul className="space-y-1 text-sm">
                    <li>• Family counseling expenses</li>
                    <li>• Wrongful death compensation</li>
                    <li>• Future medical care needs</li>
                    <li>• Loss of consortium claims</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Prevention and Awareness */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <TrendingDown className="w-6 h-6 mr-3" />
                  Prevention and Awareness
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                
                <h3>Warning Signs of Opioid Addiction</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4>Physical Signs</h4>
                    <ul>
                      <li>Tolerance (needing more for same effect)</li>
                      <li>Withdrawal symptoms when stopping</li>
                      <li>Sleep problems and fatigue</li>
                      <li>Changes in appetite</li>
                    </ul>
                  </div>
                  <div>
                    <h4>Behavioral Signs</h4>
                    <ul>
                      <li>Doctor shopping for prescriptions</li>
                      <li>Taking medication more frequently</li>
                      <li>Isolation from family and friends</li>
                      <li>Neglecting responsibilities</li>
                    </ul>
                  </div>
                </div>

                <h3>Safe Opioid Practices</h3>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
                  <ul className="space-y-2 text-blue-700">
                    <li>• Use exactly as prescribed - never increase dose without consulting doctor</li>
                    <li>• Don't share medications with others</li>
                    <li>• Properly dispose of unused medications</li>
                    <li>• Discuss addiction concerns with healthcare providers</li>
                    <li>• Consider non-opioid pain management alternatives</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Get Help Now */}
              <Card className="p-6 bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Need Help Now?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-red-700">
                    <p className="font-semibold">Crisis Resources:</p>
                    <ul className="space-y-1 mt-2">
                      <li>SAMHSA Helpline: 1-800-662-4357</li>
                      <li>Crisis Text Line: Text HOME to 741741</li>
                      <li>National Suicide Prevention: 988</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Support */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Know Your Legal Rights</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-blue-700">
                    If you or a loved one suffered from opioid addiction, you may have legal rights 
                    against pharmaceutical companies, distributors, and pharmacies.
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
                      className="w-full border-blue-600 text-blue-600 hover:bg-blue-50"
                      onClick={() => window.location.href = '/opioid-case-evaluation'}
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Educational Resources */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Educational Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• CDC Opioid Prescribing Guidelines</li>
                    <li>• California Department of Public Health</li>
                    <li>• National Institute on Drug Abuse</li>
                    <li>• Faces & Voices of Recovery</li>
                    <li>• Partnership to End Addiction</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="p-6 bg-gray-50">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Facts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <AlertCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>5x increase in overdose deaths since 1999</span>
                    </div>
                    <div className="flex items-center">
                      <TrendingDown className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>$50+ billion in national settlements</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                      <span>Millions affected nationwide</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpioidEducation;