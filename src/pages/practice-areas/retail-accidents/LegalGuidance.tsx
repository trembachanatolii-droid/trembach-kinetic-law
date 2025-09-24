import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroBackground from '@/assets/practice-areas/retail-accidents-hero.jpg';

const LegalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Retail Store Accident Legal Guidance | California Law | Trembach Law Firm"
        description="Complete guide to California retail store accident law, your rights, and legal options. Expert guidance from former defense attorney."
        keywords="California retail accident law, premises liability guide, shopping injury rights, store accident legal help"
      />

      <GoBack fallbackPath="/practice-areas/retail-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Legal Guidance for Retail Store Accidents
          </h1>
          <p className="text-xl mb-6 text-white">
            Your Complete Guide to California Premises Liability Law
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="p-8">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Understanding Your Rights After a Retail Store Accident</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-lg">
              If you've been injured in a retail store in California, you have legal rights that protect you. 
              This comprehensive guide explains what you need to know about premises liability law and your options for compensation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Immediate Steps</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Report the accident immediately</li>
                    <li>• Document everything with photos</li>
                    <li>• Get witness information</li>
                    <li>• Seek medical attention</li>
                    <li>• Contact an attorney</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Your Legal Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Right to safe premises</li>
                    <li>• Right to compensation</li>
                    <li>• Right to medical care</li>
                    <li>• Right to legal representation</li>
                    <li>• Right to refuse quick settlements</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center pt-8">
              <Badge className="bg-primary text-white">
                Need Help? Call (818) 123-4567 for Free Consultation
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LegalGuidance;