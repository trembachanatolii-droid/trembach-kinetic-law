import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { 
  Stethoscope,
  Heart,
  Shield,
  Clock,
  AlertTriangle,
  Phone,
  Star,
  FileText,
  Users,
  ArrowRight
} from 'lucide-react';
import heroBackground from '@/assets/amputation-medical-guidance-hero.jpg';

const AmputationMedicalGuidance: React.FC = () => {
  return (
    <>
      <SEO 
        title="Amputation Medical Guidance | Expert Care After Limb Loss"
        description="Comprehensive medical guidance for amputation recovery. Learn about prosthetics, rehabilitation, pain management, and specialized care options."
        canonical="https://trembachlaw.com/amputation-medical-guidance"
      />
      
      <div className="min-h-screen bg-background">
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <GoBack />
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Amputation Medical Guidance
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted Medical Resources</span>
            </div>
            <p className="text-xl">
              Expert guidance for amputation recovery and prosthetic care
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
                <div className="flex items-center mb-8">
                  <Stethoscope className="w-8 h-8 text-red-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Complete Amputation Medical Guide
                  </h2>
                </div>

                <div className="space-y-12">
                  {/* Immediate Medical Care */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <AlertTriangle className="w-6 h-6 text-red-600 mr-3" />
                      Immediate Medical Care
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Emergency Treatment</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Hemorrhage control and stabilization</li>
                            <li>• Pain management protocols</li>
                            <li>• Wound cleaning and debridement</li>
                            <li>• Infection prevention measures</li>
                            <li>• Psychological support initiation</li>
                          </ul>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Surgical Considerations</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Revision amputation if necessary</li>
                            <li>• Residual limb shaping</li>
                            <li>• Nerve management</li>
                            <li>• Skin closure techniques</li>
                            <li>• Future prosthetic planning</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Rehabilitation Process */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Heart className="w-6 h-6 text-red-600 mr-3" />
                      Rehabilitation Timeline
                    </h3>
                    <div className="space-y-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Phase 1: Acute Care (0-2 weeks)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Medical Focus:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Wound healing monitoring</li>
                                <li>• Pain management</li>
                                <li>• Infection prevention</li>
                                <li>• Range of motion exercises</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Goals:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Stabilize medical condition</li>
                                <li>• Begin psychological adjustment</li>
                                <li>• Prevent complications</li>
                                <li>• Educate patient and family</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Phase 2: Pre-Prosthetic (2-8 weeks)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Medical Focus:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Residual limb shaping</li>
                                <li>• Strength building</li>
                                <li>• Balance training</li>
                                <li>• Phantom pain management</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Goals:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Prepare for prosthetic fitting</li>
                                <li>• Improve overall fitness</li>
                                <li>• Learn adaptive techniques</li>
                                <li>• Address psychological needs</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Phase 3: Prosthetic Training (8+ weeks)</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Medical Focus:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Prosthetic fitting and adjustment</li>
                                <li>• Gait training</li>
                                <li>• Functional activities</li>
                                <li>• Skin care education</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Goals:</h4>
                              <ul className="space-y-1 text-gray-600">
                                <li>• Achieve independent mobility</li>
                                <li>• Return to daily activities</li>
                                <li>• Maximize functional outcomes</li>
                                <li>• Plan long-term care</li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Prosthetic Options */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Shield className="w-6 h-6 text-red-600 mr-3" />
                      Prosthetic Options
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Upper Extremity Prosthetics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold">Body-Powered Prosthetics:</h4>
                              <p className="text-gray-600 text-sm">Cable-operated devices offering direct control and tactile feedback</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Myoelectric Prosthetics:</h4>
                              <p className="text-gray-600 text-sm">Muscle signal-controlled devices with natural appearance</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Hybrid Systems:</h4>
                              <p className="text-gray-600 text-sm">Combination of body-powered and myoelectric components</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Lower Extremity Prosthetics</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold">Mechanical Feet:</h4>
                              <p className="text-gray-600 text-sm">Basic function with good durability and lower cost</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Energy-Storing Feet:</h4>
                              <p className="text-gray-600 text-sm">Carbon fiber designs that store and return energy</p>
                            </div>
                            <div>
                              <h4 className="font-semibold">Microprocessor Knees:</h4>
                              <p className="text-gray-600 text-sm">Computer-controlled joints for enhanced stability</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Pain Management */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Clock className="w-6 h-6 text-red-600 mr-3" />
                      Pain Management Strategies
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Phantom Pain</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Mirror therapy</li>
                            <li>• Transcutaneous electrical nerve stimulation (TENS)</li>
                            <li>• Medications (gabapentin, pregabalin)</li>
                            <li>• Nerve blocks</li>
                            <li>• Spinal cord stimulation</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Residual Limb Pain</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Proper prosthetic fitting</li>
                            <li>• Skin care management</li>
                            <li>• Massage therapy</li>
                            <li>• Physical therapy</li>
                            <li>• Topical medications</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Chronic Pain</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Multidisciplinary approach</li>
                            <li>• Cognitive behavioral therapy</li>
                            <li>• Acupuncture</li>
                            <li>• Biofeedback</li>
                            <li>• Support groups</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </section>

                  {/* Specialist Care Team */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <Users className="w-6 h-6 text-red-600 mr-3" />
                      Specialist Care Team
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        {
                          title: "Physiatrist",
                          description: "Rehabilitation medicine specialist coordinating overall care and recovery planning"
                        },
                        {
                          title: "Prosthetist",
                          description: "Specialist in designing, fitting, and maintaining prosthetic devices"
                        },
                        {
                          title: "Physical Therapist",
                          description: "Mobility training, strength building, and functional rehabilitation"
                        },
                        {
                          title: "Occupational Therapist",
                          description: "Daily living skills, adaptive equipment, and workplace modifications"
                        },
                        {
                          title: "Psychologist",
                          description: "Mental health support, coping strategies, and adjustment counseling"
                        },
                        {
                          title: "Social Worker",
                          description: "Resource coordination, insurance navigation, and community support"
                        }
                      ].map((specialist, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="text-lg">{specialist.title}</CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600">{specialist.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>

                  {/* Long-term Care Considerations */}
                  <section>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center">
                      <FileText className="w-6 h-6 text-red-600 mr-3" />
                      Long-term Care Planning
                    </h3>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold mb-4">Ongoing Medical Needs:</h4>
                            <ul className="space-y-2 text-gray-600">
                              <li>• Regular prosthetic adjustments and replacements</li>
                              <li>• Skin and residual limb monitoring</li>
                              <li>• Phantom pain management</li>
                              <li>• Secondary condition prevention</li>
                              <li>• Annual comprehensive evaluations</li>
                              <li>• Technology updates and upgrades</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-4">Lifestyle Adaptations:</h4>
                            <ul className="space-y-2 text-gray-600">
                              <li>• Home modifications for accessibility</li>
                              <li>• Vehicle adaptations for driving</li>
                              <li>• Workplace accommodations</li>
                              <li>• Sports and recreation modifications</li>
                              <li>• Travel planning considerations</li>
                              <li>• Emergency preparedness planning</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </section>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-red-700">Need Legal Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-red-600 mb-4">
                      If your amputation was caused by someone else's negligence, you may be entitled to compensation.
                    </p>
                    <Button 
                      className="w-full bg-red-600 hover:bg-red-700"
                      onClick={() => window.location.href = '/amputation-case-evaluation'}
                    >
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Emergency Contact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button 
                        className="w-full" 
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-sm text-gray-600 text-center">
                        Available 24/7 for medical emergencies
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-yellow-50 border-yellow-200">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Important Notice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      This guidance is for educational purposes only. Always consult with your healthcare team for personalized medical advice.
                    </p>
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

export default AmputationMedicalGuidance;