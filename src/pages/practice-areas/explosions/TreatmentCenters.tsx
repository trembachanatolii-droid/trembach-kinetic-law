import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Phone, 
  Building, 
  MapPin, 
  Clock, 
  Star, 
  Heart,
  Shield,
  Users,
  FileText,
  Stethoscope
} from 'lucide-react';

import SEO from '@/components/SEO';

import heroImage from '@/assets/explosions-treatment-centers-hero-bright.jpg';

const TreatmentCenters: React.FC = () => {
  // Add explosions-page class for high contrast CSS targeting
  useEffect(() => {
    document.body.classList.add('explosions-page');
    return () => document.body.classList.remove('explosions-page');
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Explosion Injury Treatment Centers | California Medical Facilities"
        description="Find specialized treatment centers for explosion injuries in California. Burn centers, trauma hospitals, and rehabilitation facilities. Expert medical care for blast injury victims."
        keywords="explosion injury treatment center, burn center California, trauma hospital, blast injury medical care, explosion victim treatment, specialized medical facilities"
        canonical="/practice-areas/explosions/treatment-centers"
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
            Explosion Injury
            <br />
            <span className="text-red-400">Treatment Centers</span>
          </h1>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed text-white text-center">
            Find specialized medical facilities and treatment centers for explosion injury victims in California.
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
            {/* Northern California */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Northern California Treatment Centers</h2>
              
              <div className="space-y-6">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-green-600" />
                        UC Davis Regional Burn Center
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">Level I Verified</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-green-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          2315 Stockton Blvd, Sacramento, CA 95817
                        </p>
                        <p className="text-sm text-green-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (916) 734-2011
                        </p>
                        <p className="text-sm text-green-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Emergency Care
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-green-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Severe burn treatment</li>
                          <li>• Plastic and reconstructive surgery</li>
                          <li>• Critical care</li>
                          <li>• Rehabilitation services</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-blue-600" />
                        Santa Clara Valley Medical Center
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">ABA Verified</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-blue-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          751 S Bascom Ave, San Jose, CA 95128
                        </p>
                        <p className="text-sm text-blue-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (408) 885-5000
                        </p>
                        <p className="text-sm text-blue-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Trauma Center
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Adult and pediatric burns</li>
                          <li>• Trauma surgery</li>
                          <li>• Wound care</li>
                          <li>• Occupational therapy</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-purple-200 bg-purple-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-purple-600" />
                        Stanford Health Care
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">Level I Trauma</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-purple-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          300 Pasteur Dr, Stanford, CA 94305
                        </p>
                        <p className="text-sm text-purple-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (650) 723-4000
                        </p>
                        <p className="text-sm text-purple-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Emergency Services
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-purple-700 space-y-1">
                          <li>• Complex trauma care</li>
                          <li>• Reconstructive surgery</li>
                          <li>• Pain management</li>
                          <li>• Physical rehabilitation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Southern California */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Southern California Treatment Centers</h2>
              
              <div className="space-y-6">
                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-red-600" />
                        LAC+USC Medical Center
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">Level I Trauma</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-red-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          2051 Marengo St, Los Angeles, CA 90033
                        </p>
                        <p className="text-sm text-red-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (323) 409-1000
                        </p>
                        <p className="text-sm text-red-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Burn Unit
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Burn and trauma care</li>
                          <li>• Emergency surgery</li>
                          <li>• Critical care medicine</li>
                          <li>• Rehabilitation services</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-orange-600" />
                        Arrowhead Regional Medical Center
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">ABA Verified</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-orange-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          400 N Pepper Ave, Colton, CA 92324
                        </p>
                        <p className="text-sm text-orange-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (909) 580-1000
                        </p>
                        <p className="text-sm text-orange-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Burn Center
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-orange-700 space-y-1">
                          <li>• Comprehensive burn care</li>
                          <li>• Skin grafting</li>
                          <li>• Wound management</li>
                          <li>• Psychological support</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-teal-200 bg-teal-50">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="flex items-center">
                        <Building className="w-5 h-5 mr-2 text-teal-600" />
                        UCSD Regional Burn Center
                      </span>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 mr-1" />
                        <span className="text-sm font-normal">Level I Verified</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-teal-700 mb-2 flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          200 W Arbor Dr, San Diego, CA 92103
                        </p>
                        <p className="text-sm text-teal-700 mb-2 flex items-center">
                          <Phone className="w-4 h-4 mr-1" />
                          (619) 543-6222
                        </p>
                        <p className="text-sm text-teal-700 mb-2 flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          24/7 Emergency Care
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-teal-800 mb-2">Specialties</h4>
                        <ul className="text-sm text-teal-700 space-y-1">
                          <li>• Advanced burn treatment</li>
                          <li>• Microsurgery</li>
                          <li>• Research protocols</li>
                          <li>• Long-term follow-up</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Rehabilitation Centers */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Specialized Rehabilitation Centers</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-pink-600" />
                      Comprehensive Rehabilitation Services
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Physical Rehabilitation</h4>
                        <ul className="text-sm space-y-2">
                          <li>• Range of motion therapy</li>
                          <li>• Strength building exercises</li>
                          <li>• Mobility training</li>
                          <li>• Pain management</li>
                          <li>• Adaptive equipment training</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Occupational Therapy</h4>
                        <ul className="text-sm space-y-2">
                          <li>• Activities of daily living</li>
                          <li>• Work conditioning programs</li>
                          <li>• Cognitive rehabilitation</li>
                          <li>• Home safety assessments</li>
                          <li>• Assistive technology</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Mental Health Support
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Individual Therapy</h4>
                        <ul className="text-sm space-y-2">
                          <li>• PTSD treatment</li>
                          <li>• Depression counseling</li>
                          <li>• Anxiety management</li>
                          <li>• Coping strategies</li>
                          <li>• Medication management</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Support Groups</h4>
                        <ul className="text-sm space-y-2">
                          <li>• Burn survivor groups</li>
                          <li>• Family support sessions</li>
                          <li>• Peer mentoring programs</li>
                          <li>• Online support communities</li>
                          <li>• Educational workshops</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Insurance and Access */}
            <section>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Insurance and Access Information</h2>
              
              <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Important Insurance Considerations
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Before Treatment</h4>
                    <ul className="text-sm text-yellow-600 space-y-1">
                      <li>• Verify insurance coverage</li>
                      <li>• Understand deductibles and co-pays</li>
                      <li>• Get pre-authorization when required</li>
                      <li>• Keep detailed records</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">Legal Coordination</h4>
                    <ul className="text-sm text-yellow-600 space-y-1">
                      <li>• Document all treatments</li>
                      <li>• Preserve medical records</li>
                      <li>• Coordinate with legal team</li>
                      <li>• Protect lien rights</li>
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
                  <CardTitle className="text-center">Find Treatment Centers</CardTitle>
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
                    <Link to="/practice-areas/explosions/medical-guidance">
                      <Stethoscope className="w-4 h-4 mr-2" />
                      Medical Guidance
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Numbers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="font-semibold text-red-800">Emergency: 911</p>
                      <p className="text-red-600">Life-threatening emergencies</p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded">
                      <p className="font-semibold text-blue-800">Burn Center Referral</p>
                      <p className="text-blue-600">Ask for burn unit transfer</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="font-semibold text-green-800">Patient Advocate</p>
                      <p className="text-green-600">Hospital patient services</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Treatment Coordination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    We help coordinate your care between multiple treatment centers and ensure continuity of treatment.
                  </p>
                  <Button variant="outline" className="w-full" asChild>
                    <Link to="/practice-areas/explosions/support-groups">
                      <Users className="w-4 h-4 mr-2" />
                      Support Groups
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
          <h2 className="text-4xl md:text-5xl font-bold mb-2">Connect with the Right Treatment Center</h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-xl mb-12 leading-relaxed">Get help finding and accessing the specialized treatment centers you need for your explosion injury recovery.</p>
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

export default TreatmentCenters;