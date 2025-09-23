import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-case-evaluation-hero.jpg';

const MaritimeCaseEvaluation: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Maritime Case Evaluation - Expert Legal Analysis"
        description="Get expert evaluation of your maritime accident case. Free consultation with specialized maritime attorneys. Immediate analysis of your Jones Act, LHWCA, or passenger rights claim."
        keywords="maritime case evaluation, free consultation, Jones Act case review, LHWCA evaluation, maritime lawyer consultation"
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
              Free Maritime Case Evaluation
            </h1>
            <p className="text-xl mb-6">
              Expert analysis of your maritime accident claim with immediate consultation
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (818) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Get Your Free Maritime Case Evaluation</h2>
            <p className="text-lg mb-6">
              Maritime law cases have unique requirements and strict deadlines. Our specialized attorneys 
              provide immediate evaluation to determine the strength of your case and your available legal remedies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle>What We Evaluate</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Jones Act eligibility</li>
                    <li>• LHWCA coverage</li>
                    <li>• Vessel unseaworthiness claims</li>
                    <li>• Maintenance and cure rights</li>
                    <li>• Third-party liability</li>
                    <li>• Potential compensation value</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Case Evaluation Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Initial consultation (30 minutes)</li>
                    <li>• Document review</li>
                    <li>• Legal analysis</li>
                    <li>• Compensation estimate</li>
                    <li>• Strategy recommendations</li>
                    <li>• Next steps guidance</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Schedule Your Free Evaluation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
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
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Schedule Online
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for Maritime Emergencies
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

export default MaritimeCaseEvaluation;