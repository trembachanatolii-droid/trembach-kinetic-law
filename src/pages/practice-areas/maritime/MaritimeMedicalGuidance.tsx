import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Stethoscope, Heart, Activity, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-medical-guidance-hero.jpg';

const MaritimeMedicalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Maritime Medical Guidance - Treatment & Recovery Help"
        description="Medical guidance for maritime injury treatment and recovery. Understanding maintenance and cure benefits, choosing doctors, and managing maritime injury care."
        keywords="maritime medical guidance, maritime injury treatment, maintenance and cure, maritime medical care, seaman medical rights"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Maritime Medical Guidance
            </h1>
            <p className="text-xl mb-6 text-white">
              Expert guidance for maritime injury treatment and recovery
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Medical Help
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Your Medical Rights Under Maritime Law</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Maintenance & Cure
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• All reasonable medical treatment</li>
                      <li>• Living expenses during recovery</li>
                      <li>• Right to choose your doctors</li>
                      <li>• Treatment until maximum improvement</li>
                      <li>• Second opinion rights</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Heart className="w-5 h-5 mr-2" />
                      Medical Care Standards
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Immediate emergency treatment</li>
                      <li>• Specialized maritime medicine</li>
                      <li>• Physical therapy and rehabilitation</li>
                      <li>• Psychological counseling if needed</li>
                      <li>• Vocational rehabilitation services</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Common Maritime Injuries</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Traumatic Injuries</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Fractures and broken bones</li>
                    <li>• Back and spine injuries</li>
                    <li>• Head and brain injuries</li>
                    <li>• Crush injuries</li>
                    <li>• Burns and lacerations</li>
                  </ul>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">Occupational Injuries</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Repetitive strain injuries</li>
                    <li>• Joint and muscle problems</li>
                    <li>• Hearing loss</li>
                    <li>• Chemical exposure</li>
                    <li>• Respiratory conditions</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">Maritime-Specific</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Hypothermia and cold injuries</li>
                    <li>• Decompression injuries</li>
                    <li>• Motion sickness complications</li>
                    <li>• Infection from contaminated water</li>
                    <li>• Equipment-related injuries</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Treatment & Recovery Process</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emergency Care</h4>
                    <p className="text-sm text-muted-foreground">
                      Immediate medical attention on vessel or shore. Evacuation if necessary. 
                      Stabilization and initial treatment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <Stethoscope className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ongoing Treatment</h4>
                    <p className="text-sm text-muted-foreground">
                      Comprehensive medical care with specialists. Physical therapy, 
                      surgery if needed, medication management.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Recovery & Rehabilitation</h4>
                    <p className="text-sm text-muted-foreground">
                      Return to work planning, vocational training if needed, 
                      long-term care management.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <Card className="border-yellow-200 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="text-yellow-800">Important Medical Rights</CardTitle>
                </CardHeader>
                <CardContent className="text-yellow-700">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Doctor Choice:</strong> You have the right to choose your own medical providers</li>
                    <li>• <strong>Second Opinions:</strong> Get additional medical opinions without employer interference</li>
                    <li>• <strong>Reasonable Treatment:</strong> All medically necessary treatment must be covered</li>
                    <li>• <strong>No Retaliation:</strong> Employers cannot punish you for seeking medical care</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6 mb-6">
              <CardHeader>
                <CardTitle>Medical Support Network</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Our network includes maritime medicine specialists who understand 
                  the unique challenges of treating maritime injuries.
                </p>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = '/schedule-consultation'}
                >
                  Get Medical Referrals
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Medical Emergency?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4 text-red-600 font-semibold">
                  If you're experiencing a medical emergency, call 911 immediately.
                </p>
                <p className="text-sm text-muted-foreground">
                  For non-emergency medical questions related to your maritime injury case, 
                  contact our office for guidance and referrals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeMedicalGuidance;