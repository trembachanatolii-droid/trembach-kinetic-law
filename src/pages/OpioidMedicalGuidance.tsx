import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Heart, Shield, Phone, FileText, Stethoscope, AlertCircle, CheckCircle } from 'lucide-react';
import heroBackground from '@/assets/opioid-medical-guidance-hero.jpg';

const OpioidMedicalGuidance: React.FC = () => {
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
            Opioid Medical Guidance
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Expert Medical Resources</span>
          </div>
          <p className="text-xl opacity-90">
            Comprehensive medical guidance for opioid addiction treatment and recovery
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Understanding Opioid Addiction */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Stethoscope className="w-6 h-6 mr-3" />
                  Understanding Opioid Addiction
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <p>
                  Opioid addiction is a chronic medical condition that affects the brain's reward system. 
                  It's characterized by compulsive drug seeking and use despite harmful consequences. 
                  Understanding that addiction is a disease, not a moral failing, is crucial for effective treatment.
                </p>
                
                <h3>How Opioids Affect the Brain</h3>
                <ul>
                  <li>Bind to opioid receptors in the brain and spinal cord</li>
                  <li>Block pain signals and release dopamine in reward centers</li>
                  <li>Create tolerance, requiring higher doses for same effect</li>
                  <li>Lead to physical dependence and withdrawal symptoms</li>
                  <li>Alter brain chemistry and decision-making processes</li>
                </ul>
              </CardContent>
            </Card>

            {/* Treatment Options */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <Heart className="w-6 h-6 mr-3" />
                  Evidence-Based Treatment Options
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-green-50 border-green-200">
                    <CardHeader>
                      <CardTitle className="text-green-800">Medication-Assisted Treatment (MAT)</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li><strong>Methadone:</strong> Long-acting opioid agonist</li>
                        <li><strong>Buprenorphine:</strong> Partial opioid agonist</li>
                        <li><strong>Naltrexone:</strong> Opioid antagonist</li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-blue-50 border-blue-200">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Behavioral Therapies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="text-sm space-y-2">
                        <li><strong>Cognitive Behavioral Therapy (CBT)</strong></li>
                        <li><strong>Contingency Management</strong></li>
                        <li><strong>Motivational Interviewing</strong></li>
                        <li><strong>Group Therapy</strong></li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-yellow-800">Important Note</h4>
                      <p className="text-yellow-700">
                        MAT is considered the gold standard for opioid addiction treatment. 
                        Studies show it reduces overdose risk by 50% or more when combined with counseling.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recovery Resources */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-red-600">
                  <CheckCircle className="w-6 h-6 mr-3" />
                  Recovery Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                <h3>California Treatment Centers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">Major Medical Centers</h4>
                    <ul className="text-sm space-y-1">
                      <li>UCLA Integrated Substance Abuse Programs</li>
                      <li>UCSF Addiction Medicine</li>
                      <li>Cedars-Sinai Addiction Medicine</li>
                      <li>Stanford Addiction Medicine</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold">Support Groups</h4>
                    <ul className="text-sm space-y-1">
                      <li>Narcotics Anonymous (NA)</li>
                      <li>SMART Recovery</li>
                      <li>LifeRing Secular Recovery</li>
                      <li>Celebrate Recovery</li>
                    </ul>
                  </div>
                </div>

                <h3>Helplines and Resources</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (24/7 treatment referral)</li>
                    <li><strong>California Department of Health Care Services:</strong> Treatment locator</li>
                    <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect in Recovery */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">What to Expect in Recovery</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-lg max-w-none">
                <h3>Recovery Stages</h3>
                
                <h4>1. Detoxification (3-7 days)</h4>
                <p>
                  Medical supervision helps manage withdrawal symptoms safely. 
                  Medications can ease discomfort and prevent complications.
                </p>
                
                <h4>2. Stabilization (Weeks to months)</h4>
                <p>
                  Focus on establishing MAT if appropriate, beginning counseling, 
                  and developing coping strategies for triggers and cravings.
                </p>
                
                <h4>3. Long-term Recovery (Ongoing)</h4>
                <p>
                  Continued medication management, regular counseling, peer support, 
                  and lifestyle changes to maintain sobriety and prevent relapse.
                </p>

                <div className="bg-green-50 border-l-4 border-green-400 p-6">
                  <h4 className="font-semibold text-green-800">Remember</h4>
                  <p className="text-green-700">
                    Recovery is a lifelong process. Relapse doesn't mean failure - it's often part of the journey. 
                    With proper treatment and support, long-term recovery is absolutely possible.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Emergency Resources */}
              <Card className="p-6 bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-lg text-red-800">Emergency Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <p className="font-semibold text-red-700">If you or someone you know is in crisis:</p>
                    <ul className="space-y-1 mt-2">
                      <li>Call 911 for overdose emergencies</li>
                      <li>National Suicide Prevention: 988</li>
                      <li>Crisis Text Line: Text HOME to 741741</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Legal Support */}
              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-blue-800">Legal Support Available</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-blue-700">
                    While focusing on recovery, don't forget your legal rights. 
                    Pharmaceutical companies may be liable for your addiction and treatment costs.
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

              {/* Quick Tips */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-lg text-green-600">Recovery Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm space-y-2">
                    <li>• Take recovery one day at a time</li>
                    <li>• Build a strong support network</li>
                    <li>• Practice self-care and stress management</li>
                    <li>• Avoid triggers and high-risk situations</li>
                    <li>• Celebrate small victories</li>
                    <li>• Be patient with the process</li>
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

export default OpioidMedicalGuidance;