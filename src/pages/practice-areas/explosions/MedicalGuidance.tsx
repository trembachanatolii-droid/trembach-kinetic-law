import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Heart, 
  Stethoscope, 
  Building, 
  Clock, 
  AlertTriangle,
  Shield,
  Users,
  FileText,
  MapPin
} from 'lucide-react';

import SEO from '@/components/SEO';

import heroImage from '@/assets/explosions-medical-guidance-hero-bright.jpg';

const MedicalGuidance: React.FC = () => {
  // Add explosions-page class for high contrast CSS targeting
  useEffect(() => {
    document.body.classList.add('explosions-page');
    return () => document.body.classList.remove('explosions-page');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Medical Guidance for Explosion Injuries | California Treatment Resources"
        description="Comprehensive medical guidance for explosion injury victims in California. Find specialized treatment centers, burn care facilities, and trauma specialists. Free medical resource consultation."
        keywords="explosion injury medical treatment, burn center California, trauma specialist, explosion injury doctor, blast injury treatment, medical guidance explosion victims"
        canonical="/practice-areas/explosions/medical-guidance"
      />

      

      {/* Hero Section */}
      <section 
        className="relative py-24 lg:py-32 text-white overflow-hidden hero-section"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center hero-content">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white text-center">
            Medical Guidance for
            <br />
            <span className="text-red-400">Explosion Injuries</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white text-center">
            Specialized medical resources and treatment guidance for explosion injury victims in California.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              CALL (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg"
              asChild
            >
              <Link to="/practice-areas/explosions/case-evaluation">
                FREE CONSULTATION
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            {/* Immediate Medical Care */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Medical Care After Explosion Injuries</h2>
              
              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <div className="flex items-start">
                  <AlertTriangle className="w-6 h-6 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">Emergency Priority</h3>
                    <p className="text-red-700">
                      Seek immediate emergency medical attention even if injuries appear minor. Explosion injuries can have delayed effects that may not be immediately apparent.
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-600">
                      <Heart className="w-5 h-5 mr-2" />
                      Immediate Actions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Call 911 immediately</li>
                      <li>• Do not move if spinal injury suspected</li>
                      <li>• Remove from danger if safe to do so</li>
                      <li>• Cover burns with clean, dry cloth</li>
                      <li>• Document injuries with photos</li>
                      <li>• Keep all medical records</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-red-600">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Warning Signs
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Difficulty breathing</li>
                      <li>• Chest pain or pressure</li>
                      <li>• Severe burns covering large areas</li>
                      <li>• Head injuries or confusion</li>
                      <li>• Hearing loss or ringing</li>
                      <li>• Eye injuries or vision changes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Types of Specialists */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Specialists for Explosion Injuries</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Burn Specialists
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Specialized care for severe burns, including skin grafts, wound care, and plastic surgery reconstruction.</p>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-800 mb-2">California Burn Centers</h4>
                      <ul className="text-sm text-green-700 space-y-1">
                        <li>• UC Davis Regional Burn Center</li>
                        <li>• Santa Clara Valley Medical Center Burn Center</li>
                        <li>• Arrowhead Regional Medical Center</li>
                        <li>• UCSD Regional Burn Center</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Building className="w-5 h-5 mr-2" />
                      Trauma Specialists
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Comprehensive care for multiple injuries including fractures, internal injuries, and trauma surgery.</p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-800 mb-2">Level I Trauma Centers</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• LAC+USC Medical Center</li>
                        <li>• UCLA Medical Center</li>
                        <li>• Cedars-Sinai Medical Center</li>
                        <li>• Stanford Hospital</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Mental Health Specialists
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">PTSD, anxiety, and depression treatment for explosion trauma survivors.</p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-800 mb-2">Trauma Therapy Options</h4>
                      <ul className="text-sm text-purple-700 space-y-1">
                        <li>• Cognitive Behavioral Therapy (CBT)</li>
                        <li>• Eye Movement Desensitization (EMDR)</li>
                        <li>• Group therapy sessions</li>
                        <li>• Medication management</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Treatment Timeline */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Treatment Timeline and Recovery</h2>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
                  <h3 className="font-semibold text-red-800 mb-3 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    First 24-48 Hours
                  </h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• Emergency stabilization and critical care</li>
                    <li>• Assessment of burn severity and extent</li>
                    <li>• Pain management and fluid resuscitation</li>
                    <li>• Diagnostic imaging for internal injuries</li>
                    <li>• Initial wound care and debridement</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
                  <h3 className="font-semibold text-yellow-800 mb-3">First Week</h3>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Surgical interventions as needed</li>
                    <li>• Infection prevention and monitoring</li>
                    <li>• Beginning of physical therapy</li>
                    <li>• Nutritional support optimization</li>
                    <li>• Psychological evaluation and support</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-3">Long-term Recovery</h3>
                  <ul className="text-green-700 space-y-2">
                    <li>• Reconstructive surgeries</li>
                    <li>• Intensive rehabilitation programs</li>
                    <li>• Occupational therapy for daily activities</li>
                    <li>• Ongoing mental health treatment</li>
                    <li>• Scar management and cosmetic procedures</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Insurance and Legal Coordination */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Medical Documentation for Legal Claims</h2>
              
              <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-4 flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  Important Medical Records
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Essential Documents</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Emergency room records</li>
                      <li>• Surgical reports and photos</li>
                      <li>• Diagnostic imaging results</li>
                      <li>• Physical therapy notes</li>
                      <li>• Medication lists and costs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-700 mb-2">Future Care Plans</h4>
                    <ul className="text-sm text-blue-600 space-y-1">
                      <li>• Life care planning assessments</li>
                      <li>• Projected medical costs</li>
                      <li>• Rehabilitation timelines</li>
                      <li>• Equipment and device needs</li>
                      <li>• Home modification requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Get Medical Guidance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full text-white bg-primary hover:bg-primary/90" size="lg" asChild>
                    <Link to="tel:8181234567">
                      <Phone className="w-4 h-4 mr-2" />
                      Call (818) 123-4567
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground" size="lg" asChild>
                    <Link to="/practice-areas/explosions/case-evaluation">
                      <FileText className="w-4 h-4 mr-2" />
                      Free Case Evaluation
                    </Link>
                  </Button>
                  
                  <Button variant="outline" className="w-full text-foreground border-input hover:bg-accent hover:text-accent-foreground" size="lg" asChild>
                    <Link to="/practice-areas/explosions/treatment-centers">
                      <Building className="w-4 h-4 mr-2" />
                      Treatment Centers
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Resources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-red-800">Emergency: 911</p>
                      <p className="text-red-600">For immediate medical emergencies</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-blue-800">Poison Control: 1-800-222-1222</p>
                      <p className="text-blue-600">For chemical exposure emergencies</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">Crisis Text Line: Text HOME to 741741</p>
                      <p className="text-green-600">For mental health crisis support</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Medical Advocacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We help coordinate your medical care and ensure you receive the treatment you need while building your legal case.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/practice-areas/explosions/legal-guidance">
                      <Shield className="w-4 h-4 mr-2" />
                      Legal Guidance
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Get Medical Guidance for Your Explosion Injury</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">Don't navigate the complex medical system alone. Get expert guidance and advocacy for your explosion injury treatment.</p>
          <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" onClick={() => window.location.href = 'tel:8181234567'}>
              CALL (818) 123-4567
            </Button>
            
            <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 text-lg" asChild>
              <Link to="/practice-areas/explosions/case-evaluation">
                START FREE CONSULTATION
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalGuidance;