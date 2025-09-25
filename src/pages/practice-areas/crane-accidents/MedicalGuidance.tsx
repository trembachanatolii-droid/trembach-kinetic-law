import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, Users, Award, HardHat, Clock } from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const CraneAccidentsMedicalGuidance: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Crane Accident Medical Guidance | Construction Injury Treatment | Trembach Law Firm"
        description="Comprehensive medical guidance for crane accident victims. Find the right medical care and specialists for construction injuries in California."
        keywords="crane accident medical care, construction injury treatment, trauma specialists, rehabilitation"
        canonical="/practice-areas/crane-accidents/medical-guidance"
      />

      <GoBack />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Crane Accident Medical Guidance
          </h1>
          <p className="text-xl md:text-2xl text-white mb-6">
            Getting the Right Medical Care After a Construction Accident
          </p>
          <p className="text-lg text-white max-w-3xl mx-auto leading-relaxed">
            Finding specialized medical care for crane accident injuries is crucial for your recovery and legal case.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HardHat className="w-6 h-6 mr-3 text-primary" />
                <span className="text-foreground">Immediate Medical Steps</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">• Seek emergency medical attention immediately</p>
              <p className="text-foreground">• Get comprehensive trauma evaluation</p>
              <p className="text-foreground">• Document all injuries with medical records</p>
              <p className="text-foreground">• Follow all treatment recommendations</p>
              <p className="text-foreground">• Keep detailed medical expense records</p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-6 h-6 mr-3 text-primary" />
                <span className="text-foreground">Specialist Referrals</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground">• Orthopedic surgeons for bone injuries</p>
              <p className="text-foreground">• Neurologists for head/brain injuries</p>
              <p className="text-foreground">• Spinal cord injury specialists</p>
              <p className="text-foreground">• Plastic surgeons for reconstructive needs</p>
              <p className="text-foreground">• Pain management specialists</p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Need Help Finding Medical Care?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We can help connect you with top medical specialists experienced in treating crane accident injuries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button 
              className="w-full bg-green-600 hover:bg-green-700 text-white py-4"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-white">Call (818) 123-4567</span>
            </Button>
            
            <Button 
              variant="outline"
              className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4"
              onClick={() => window.location.href = '/practice-areas/crane-accidents/case-evaluation'}
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Free Case Review
            </Button>
            
            <Button 
              variant="outline"
              className="w-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white py-4"
              onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
            >
              <Mail className="w-4 h-4 mr-2" />
              Email Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CraneAccidentsMedicalGuidance;