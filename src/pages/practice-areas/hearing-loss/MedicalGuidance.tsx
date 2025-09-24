import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Star, Heart, AlertTriangle, CheckCircle, Clock, Stethoscope, Building2, Users } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/hearing-loss-medical-guidance-hero.jpg';
import treatmentImage from '@/assets/hearing-loss-treatment.jpg';
import medicalDevicesImage from '@/assets/hearing-loss-medical-devices.jpg';

const HearingLossMedicalGuidance: React.FC = () => {
  useEffect(() => {
    document.body.classList.add('hearing-loss-page');
    return () => document.body.classList.remove('hearing-loss-page');
  }, []);

  return (
    <>
      <SEO 
        title="Hearing Loss Medical Guidance California | Treatment Options | Trembach Law Firm"
        description="Essential medical guidance for California hearing loss victims. Learn about treatment options, emergency care, and finding the right specialists for your hearing loss condition."
        keywords="hearing loss medical guidance, California ENT specialists, hearing loss treatment, audiologist, cochlear implants, hearing aids"
        canonical="https://www.trembachlawfirm.com/practice-areas/hearing-loss/medical-guidance"
      />
      
      <div className="min-h-screen bg-background">
        <GoBack fallbackPath="/practice-areas/hearing-loss" />
        
        {/* Hero Section */}
        <section 
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 force-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 force-white">
              Hearing Loss Medical Guidance
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg force-white !text-white">Expert Medical Resources</span>
            </div>
            
            <p className="text-xl mb-8">
              Essential medical guidance and resources for individuals experiencing hearing loss. Get the care you need.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-black hover:bg-gray-100 font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:911'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: 911
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black font-bold px-8 py-4 text-lg"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Our Office
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Emergency Care Guidelines */}
              <Card className="shadow-lg border-red-200">
                <CardHeader className="bg-red-50">
                  <CardTitle className="text-red-600 flex items-center text-xl">
                    <AlertTriangle className="w-6 h-6 mr-2" />
                    Emergency Hearing Loss Care Guidelines
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6 space-y-6">
                  <div className="bg-red-50 border-l-4 border-red-400 p-4">
                    <h3 className="font-semibold text-red-800 mb-2">Immediate Steps for Sudden Hearing Loss</h3>
                    <p className="text-red-700 mb-3">
                      <strong>Sudden hearing loss is a medical emergency!</strong> Seek treatment within 72 hours for the best chance of recovery.
                    </p>
                    <ul className="text-red-700 space-y-1 text-sm">
                      <li>• Call 911 if hearing loss follows head trauma or explosion</li>
                      <li>• Go to emergency room immediately for sudden, severe hearing loss</li>
                      <li>• Do not wait - early treatment significantly improves outcomes</li>
                      <li>• Bring list of all medications and medical history</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        DO These Things
                      </h4>
                      <ul className="text-sm text-green-700 space-y-2">
                        <li>✓ Seek immediate medical attention</li>
                        <li>✓ Protect the unaffected ear from loud sounds</li>
                        <li>✓ Take all medications as prescribed</li>
                        <li>✓ Keep all follow-up appointments</li>
                        <li>✓ Document all symptoms and changes</li>
                        <li>✓ Get audiometric testing</li>
                        <li>✓ Ask about steroid treatment options</li>
                        <li>✓ Consider hyperbaric oxygen therapy if recommended</li>
                      </ul>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                        <AlertTriangle className="w-5 h-5 mr-2" />
                        NEVER Do These Things
                      </h4>
                      <ul className="text-sm text-red-700 space-y-2">
                        <li>✗ Wait to see if hearing returns on its own</li>
                        <li>✗ Use cotton swabs or objects in ears</li>
                        <li>✗ Expose yourself to loud sounds</li>
                        <li>✗ Ignore dizziness or balance problems</li>
                        <li>✗ Skip medications or stop treatment early</li>
                        <li>✗ Assume age-related hearing loss</li>
                        <li>✗ Delay seeking second opinions</li>
                        <li>✗ Ignore accompanying symptoms</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Critical Symptoms Requiring Immediate Medical Attention:</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Sudden hearing loss in one or both ears</li>
                      <li>• Hearing loss following head injury or explosion</li>
                      <li>• Severe ear pain with hearing loss</li>
                      <li>• Dizziness, vertigo, or balance problems with hearing loss</li>
                      <li>• Discharge or bleeding from the ear</li>
                      <li>• Facial weakness or numbness with hearing loss</li>
                      <li>• Severe headache with hearing changes</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Options and Specialists */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Stethoscope className="w-6 h-6 mr-2 text-primary" />
                    Treatment Options and Specialists
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <img src={treatmentImage} alt="Hearing treatment options" className="w-full h-64 object-cover rounded-lg" />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-blue-600">Audiologists</h3>
                      <p className="text-sm mb-3">
                        Specialists in hearing and balance disorders who conduct comprehensive hearing evaluations and provide hearing aids.
                      </p>
                      <h4 className="font-semibold mb-2">Services Provided:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Comprehensive hearing assessments</li>
                        <li>• Hearing aid fitting and programming</li>
                        <li>• Tinnitus evaluation and management</li>
                        <li>• Balance testing</li>
                        <li>• Auditory processing evaluations</li>
                        <li>• Hearing protection recommendations</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">ENT Specialists (Otolaryngologists)</h3>
                      <p className="text-sm mb-3">
                        Medical doctors specializing in ear, nose, and throat disorders who can provide surgical and medical treatments.
                      </p>
                      <h4 className="font-semibold mb-2">Services Provided:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Surgical interventions</li>
                        <li>• Medical management of ear diseases</li>
                        <li>• Cochlear implant evaluation</li>
                        <li>• Tympanoplasty and ossiculoplasty</li>
                        <li>• Treatment of sudden hearing loss</li>
                        <li>• Acoustic neuroma management</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-purple-600">Neurologists</h3>
                      <p className="text-sm mb-3">
                        Specialists for hearing loss related to brain injuries, strokes, or neurological conditions.
                      </p>
                      <h4 className="font-semibold mb-2">When to See a Neurologist:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Hearing loss after head trauma</li>
                        <li>• Central auditory processing disorders</li>
                        <li>• Hearing loss with neurological symptoms</li>
                        <li>• Acoustic neuroma diagnosis</li>
                        <li>• Stroke-related hearing changes</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-orange-600">Occupational Medicine Physicians</h3>
                      <p className="text-sm mb-3">
                        Specialists in work-related injuries and illnesses, including noise-induced hearing loss.
                      </p>
                      <h4 className="font-semibold mb-2">Expertise Areas:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Workplace hearing conservation</li>
                        <li>• Noise exposure assessments</li>
                        <li>• Workers' compensation evaluations</li>
                        <li>• Return-to-work assessments</li>
                        <li>• Hearing protection recommendations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="font-semibold text-blue-800 mb-2">California Treatment Centers</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Los Angeles Area:</h4>
                        <ul className="text-blue-700 space-y-1">
                          <li>• USC Tina and Rick Caruso Department of Otolaryngology</li>
                          <li>• UCLA Department of Head and Neck Surgery</li>
                          <li>• Cedars-Sinai ENT Department</li>
                          <li>• Kaiser Permanente Audiology Services</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Bay Area:</h4>
                        <ul className="text-blue-700 space-y-1">
                          <li>• UCSF Department of Otolaryngology</li>
                          <li>• Stanford ENT and Audiology</li>
                          <li>• California Pacific Medical Center</li>
                          <li>• Sutter Health Audiology Services</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Timeline and Recovery */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Clock className="w-6 h-6 mr-2 text-primary" />
                    Treatment Timeline and Recovery
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <img src={medicalDevicesImage} alt="Medical devices for hearing loss" className="w-full h-64 object-cover rounded-lg" />
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-red-400 pl-4">
                      <h3 className="text-lg font-semibold text-red-600 mb-2">First 24-48 Hours (Critical Period)</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Emergency medical evaluation if sudden hearing loss</li>
                        <li>• High-dose corticosteroid treatment may be started</li>
                        <li>• Comprehensive audiological testing</li>
                        <li>• CT or MRI imaging if trauma-related</li>
                        <li>• Hyperbaric oxygen therapy consideration for severe cases</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-orange-400 pl-4">
                      <h3 className="text-lg font-semibold text-orange-600 mb-2">First Week</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Follow-up audiological testing to monitor progress</li>
                        <li>• Adjustment of medications based on response</li>
                        <li>• ENT specialist consultation if not already seen</li>
                        <li>• Discussion of treatment options if no improvement</li>
                        <li>• Tinnitus management strategies introduced</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-400 pl-4">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">2-4 Weeks</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Comprehensive hearing aid evaluation if needed</li>
                        <li>• Counseling and rehabilitation planning</li>
                        <li>• Workplace accommodation discussions</li>
                        <li>• Advanced imaging studies if indicated</li>
                        <li>• Genetic testing consideration for hereditary causes</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-400 pl-4">
                      <h3 className="text-lg font-semibold text-green-600 mb-2">Long-term Recovery (1-6 months+)</h3>
                      <ul className="text-sm space-y-1">
                        <li>• Hearing aid fitting and adjustment period</li>
                        <li>• Cochlear implant evaluation for profound loss</li>
                        <li>• Auditory rehabilitation therapy</li>
                        <li>• Support group participation</li>
                        <li>• Ongoing monitoring and adjustment of treatments</li>
                        <li>• Annual hearing evaluations</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Recovery Expectations</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h4 className="font-semibold mb-2">Factors Affecting Recovery:</h4>
                        <ul className="text-green-700 space-y-1">
                          <li>• Speed of treatment initiation</li>
                          <li>• Severity and type of hearing loss</li>
                          <li>• Age and overall health</li>
                          <li>• Cause of hearing loss</li>
                          <li>• Presence of other medical conditions</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Recovery Rates:</h4>
                        <ul className="text-green-700 space-y-1">
                          <li>• Sudden hearing loss: 30-65% recovery with treatment</li>
                          <li>• Conductive hearing loss: Often treatable/reversible</li>
                          <li>• Noise-induced: Usually permanent but preventable progression</li>
                          <li>• Trauma-related: Variable depending on extent of damage</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Medical Documentation for Legal Claims */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-xl">
                    <Building2 className="w-6 h-6 mr-2 text-primary" />
                    Medical Documentation for Legal Claims
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-base">
                    Proper medical documentation is crucial for successful hearing loss legal claims. Ensure your medical team understands the importance of thorough documentation.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-3">Essential Medical Records</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• Pre-injury audiograms (if available)</li>
                        <li>• Emergency room records</li>
                        <li>• All audiological testing results</li>
                        <li>• ENT consultation notes</li>
                        <li>• Treatment records and responses</li>
                        <li>• Hearing aid fitting documentation</li>
                        <li>• Work restrictions and accommodations</li>
                        <li>• Ongoing care plans</li>
                      </ul>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-800 mb-3">Key Documentation Points</h4>
                      <ul className="text-sm text-orange-700 space-y-1">
                        <li>• Link between incident and hearing loss</li>
                        <li>• Detailed symptom descriptions</li>
                        <li>• Functional impact assessments</li>
                        <li>• Work and daily life limitations</li>
                        <li>• Communication difficulties</li>
                        <li>• Psychological and social impacts</li>
                        <li>• Future treatment needs</li>
                        <li>• Prognosis and permanency</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">Important Legal Considerations</h4>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• Request copies of all medical records immediately</li>
                      <li>• Ensure doctors document causation opinions when possible</li>
                      <li>• Keep detailed symptom and impact diaries</li>
                      <li>• Document all medical expenses and travel costs</li>
                      <li>• Photograph any visible injuries or conditions</li>
                      <li>• Save all insurance correspondence</li>
                      <li>• Maintain records of missed work and income loss</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Emergency Contact */}
                <Card className="border-red-200 shadow-lg">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-600 text-center">Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4 pt-6">
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:911'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call 911 Emergency
                    </Button>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Our Office
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      Available 24/7 for legal consultation
                    </p>
                  </CardContent>
                </Card>

                {/* Emergency Resources */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Emergency Resources</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span>🚨 Emergency Services</span>
                        <Button variant="ghost" size="sm" onClick={() => window.location.href = 'tel:911'}>911</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>☎️ Poison Control</span>
                        <Button variant="ghost" size="sm" onClick={() => window.location.href = 'tel:18002221222'}>Call</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>💬 Crisis Text Line</span>
                        <span className="text-xs">Text HOME to 741741</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Medical Advocacy */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary">Medical Advocacy & Legal Guidance</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
                    >
                      📋 Free Case Evaluation
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/legal-guidance'}
                    >
                      ⚖️ Legal Rights Guide
                    </Button>
                    <Button 
                      variant="ghost" 
                      className="w-full justify-start p-0 h-auto text-primary"
                      onClick={() => window.location.href = '/practice-areas/hearing-loss/compensation-calculator'}
                    >
                      💰 Compensation Calculator
                    </Button>
                  </CardContent>
                </Card>

                {/* Treatment Centers Quick Access */}
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-primary flex items-center">
                      <Building2 className="w-5 h-5 mr-2" />
                      Find Treatment Centers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p>🏥 Major Medical Centers with ENT/Audiology</p>
                    <p>👂 Specialized Hearing Loss Clinics</p>
                    <p>🔬 Cochlear Implant Centers</p>
                    <p>🎯 Tinnitus Treatment Centers</p>
                    <Button 
                      className="w-full mt-3"
                      variant="outline"
                      onClick={() => window.location.href = 'tel:8181234567'}
                    >
                      Get Referrals
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <section className="bg-blue-600 text-white py-12">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-4">Need Medical Guidance for Your Hearing Loss?</h2>
            <p className="text-xl mb-8">
              Don't navigate the complex medical system alone. Our legal team can help you find the right specialists 
              and ensure proper documentation for your case.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4"
                onClick={() => window.location.href = '/practice-areas/hearing-loss/case-evaluation'}
              >
                Get Free Consultation
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HearingLossMedicalGuidance;