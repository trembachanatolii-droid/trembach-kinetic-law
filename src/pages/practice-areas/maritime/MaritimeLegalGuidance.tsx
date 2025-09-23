import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Scale, Shield, Clock, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-legal-guidance-hero.jpg';

const MaritimeLegalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Maritime Legal Guidance - Step-by-Step Legal Help"
        description="Comprehensive legal guidance for maritime accident victims. Step-by-step help navigating Jones Act, LHWCA, and passenger rights claims."
        keywords="maritime legal guidance, maritime law help, Jones Act guidance, LHWCA legal help, maritime accident legal advice"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="text-white max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Maritime Legal Guidance
            </h1>
            <p className="text-xl mb-6">
              Step-by-step legal guidance for maritime accident victims
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Get Legal Guidance
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Understanding Your Legal Rights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Scale className="w-5 h-5 mr-2" />
                      Jones Act Rights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Right to sue employer for negligence</li>
                      <li>• Maintenance and cure benefits</li>
                      <li>• Pain and suffering compensation</li>
                      <li>• Lost wages and future earnings</li>
                      <li>• Choice in medical treatment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Shield className="w-5 h-5 mr-2" />
                      LHWCA Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      <li>• Medical expense coverage</li>
                      <li>• Disability compensation</li>
                      <li>• Vocational rehabilitation</li>
                      <li>• Death benefits for families</li>
                      <li>• Third-party claims allowed</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Legal Process Timeline</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">1</div>
                  <div>
                    <h4 className="font-semibold">Immediate Actions (0-30 days)</h4>
                    <p className="text-sm text-muted-foreground">Report accident, seek medical care, contact attorney</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">2</div>
                  <div>
                    <h4 className="font-semibold">Investigation Phase (1-6 months)</h4>
                    <p className="text-sm text-muted-foreground">Evidence gathering, witness interviews, expert analysis</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">3</div>
                  <div>
                    <h4 className="font-semibold">Filing Claims (6-12 months)</h4>
                    <p className="text-sm text-muted-foreground">Formal legal action, discovery process begins</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1 text-sm font-bold">4</div>
                  <div>
                    <h4 className="font-semibold">Resolution (12-24 months)</h4>
                    <p className="text-sm text-muted-foreground">Settlement negotiations or trial preparation</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold mb-4">Critical Deadlines</h3>
              
              <Card className="border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-800">
                    <Clock className="w-5 h-5 mr-2" />
                    Important Time Limits
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-red-700">
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>LHWCA:</strong> 30 days to report injury, 1 year to file claim</li>
                    <li>• <strong>Jones Act:</strong> 3 years from date of injury</li>
                    <li>• <strong>Passenger Claims:</strong> Often 1-2 years (check ticket terms)</li>
                    <li>• <strong>Death Claims:</strong> 3 years under Death on High Seas Act</li>
                  </ul>
                </CardContent>
              </Card>
            </section>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Get Expert Legal Guidance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Don't navigate maritime law alone. Our specialized attorneys provide 
                  personalized guidance for your specific situation.
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
                  Schedule Consultation
                </Button>

                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Free consultation • No fee unless we win
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeLegalGuidance;