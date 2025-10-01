import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import {
  Phone, 
  Stethoscope,
  AlertTriangle,
  Clock,
  FileText,
  Star,
  CheckCircle,
  Heart,
  Shield,
  Map
} from 'lucide-react';
import heroBackground from '@/assets/medical-guidance-hero.jpg';

const PremisesLiabilityMedicalGuidance: React.FC = () => {
  return (
    <>
      <SEO 
        title="Premises Liability Medical Guidance | California Injury Treatment"
        description="Expert medical guidance for premises liability injuries in California. Find specialized doctors, understand your injuries, and get proper treatment documentation for your case."
        canonical="https://trembachlaw.com/premises-liability-medical-guidance"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Premises Liability Medical Guidance
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Expert Medical Support</span>
            </div>
            <p className="text-xl">
              Get proper medical treatment and documentation for your premises liability injury
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Immediate Medical Steps */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Immediate Medical Steps After Your Injury
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <h3 className="font-semibold text-red-800 mb-2">Emergency Situations</h3>
                      <p className="text-sm text-red-700">If you have severe pain, loss of consciousness, difficulty breathing, or suspected fractures, call 911 immediately.</p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-2">Non-Emergency Care</h3>
                      <p className="text-sm text-blue-700">For other injuries, seek medical attention within 24-48 hours to establish proper documentation.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Critical First Steps:</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Document the Scene</p>
                          <p className="text-sm text-muted-foreground">Take photos of the hazard, your injuries, and the accident location before leaving.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Report the Incident</p>
                          <p className="text-sm text-muted-foreground">Notify the property owner, manager, or security immediately and get a copy of the incident report.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5" />
                        <div>
                          <p className="font-medium">Seek Medical Attention</p>
                          <p className="text-sm text-muted-foreground">Get examined by a medical professional, even if injuries seem minor initially.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Common Injuries */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Stethoscope className="w-6 h-6 mr-2" />
                    Common Premises Liability Injuries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">Slip and Fall Injuries:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Broken bones and fractures</li>
                        <li>• Back and spinal injuries</li>
                        <li>• Head injuries and concussions</li>
                        <li>• Hip and wrist fractures</li>
                        <li>• Soft tissue injuries</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-3">Other Common Injuries:</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Cuts and lacerations</li>
                        <li>• Burns (chemical or thermal)</li>
                        <li>• Dog bites and animal attacks</li>
                        <li>• Falling object injuries</li>
                        <li>• Security-related injuries</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recommended Specialists */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Heart className="w-6 h-6 mr-2" />
                    Recommended Medical Specialists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Orthopedic Surgeons</h3>
                      <p className="text-sm">For bone fractures, joint injuries, and spinal problems common in slip and fall cases.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Neurologists</h3>
                      <p className="text-sm">For head injuries, concussions, and neurological symptoms from trauma.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Physical Medicine & Rehab</h3>
                      <p className="text-sm">For comprehensive treatment of musculoskeletal injuries and rehabilitation.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold mb-2">Pain Management</h3>
                      <p className="text-sm">For chronic pain resulting from premises liability injuries.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Documentation */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <FileText className="w-6 h-6 mr-2" />
                    Important Medical Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h3 className="font-semibold">Keep Detailed Records of:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Medical Records:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• Initial emergency room visit</li>
                          <li>• Diagnostic tests (X-rays, MRI, CT scans)</li>
                          <li>• Doctor's notes and diagnoses</li>
                          <li>• Treatment plans and prescriptions</li>
                          <li>• Physical therapy records</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Financial Records:</h4>
                        <ul className="text-sm space-y-1">
                          <li>• All medical bills and receipts</li>
                          <li>• Insurance correspondence</li>
                          <li>• Lost wage documentation</li>
                          <li>• Transportation costs for treatment</li>
                          <li>• Prescription medication costs</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Timeline */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Clock className="w-6 h-6 mr-2" />
                    Typical Treatment Timeline
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold">Immediate (0-72 hours)</h3>
                      <p className="text-sm text-muted-foreground">Emergency care, initial diagnosis, pain management</p>
                    </div>
                    <div className="border-l-4 border-blue-400 pl-4">
                      <h3 className="font-semibold">Short-term (1-4 weeks)</h3>
                      <p className="text-sm text-muted-foreground">Follow-up visits, additional testing, treatment plan development</p>
                    </div>
                    <div className="border-l-4 border-green-400 pl-4">
                      <h3 className="font-semibold">Medium-term (1-6 months)</h3>
                      <p className="text-sm text-muted-foreground">Physical therapy, specialist consultations, ongoing treatment</p>
                    </div>
                    <div className="border-l-4 border-yellow-400 pl-4">
                      <h3 className="font-semibold">Long-term (6+ months)</h3>
                      <p className="text-sm text-muted-foreground">Continued therapy, maximum medical improvement evaluation</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Emergency Contact */}
                <Card className="glass-card border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">Medical Emergency?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <p className="text-sm text-red-700">If you're experiencing a medical emergency, call 911 immediately.</p>
                      <div className="space-y-2">
                        <p className="text-xs text-red-600">For legal questions after medical treatment:</p>
                        <Button variant="outline" className="w-full border-red-300 text-red-700" onClick={() => window.location.href = 'tel:8181234567'}>
                          <Phone className="w-4 h-4 mr-2" />
                          Call (818) 123-4567
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Get Legal Help</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full" onClick={() => window.location.href = '/premises-liability-case-evaluation'}>
                        <Shield className="w-4 h-4 mr-2" />
                        Free Case Evaluation
                      </Button>
                      <Button variant="outline" className="w-full" onClick={() => window.location.href = '/premises-liability-compensation-calculator'}>
                        Calculate Compensation
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Medical Tips */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Medical Tips</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="bg-blue-50 p-3 rounded">
                        <p className="font-medium text-blue-800">Always follow your doctor's orders</p>
                        <p className="text-blue-700">Missing appointments can hurt your case</p>
                      </div>
                      <div className="bg-green-50 p-3 rounded">
                        <p className="font-medium text-green-800">Keep all receipts</p>
                        <p className="text-green-700">Document every medical expense</p>
                      </div>
                      <div className="bg-yellow-50 p-3 rounded">
                        <p className="font-medium text-yellow-800">Be honest about pain</p>
                        <p className="text-yellow-700">Accurately describe symptoms to doctors</p>
                      </div>
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

export default PremisesLiabilityMedicalGuidance;