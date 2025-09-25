import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Star, Phone, Scale } from 'lucide-react';
import heroBackground from '@/assets/amusement-park-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  accidentDate: string;
  parkName: string;
  injuryDescription: string;
}

const AmusementParkCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    parkName: '',
    injuryDescription: ''
  });

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 24 hours for your free case evaluation.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Amusement Park Injury Case Evaluation | Trembach Law Firm"
        description="Get a free evaluation of your California amusement park injury case. Expert attorneys with a proven track record."
        keywords="amusement park injury lawyer, case evaluation, California theme park accident attorney, free consultation"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Case Evaluation
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-white">Expert Legal Review</span>
          </div>
          
          <p className="text-lg text-white opacity-90">
            Get your amusement park injury case evaluated by experienced attorneys
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-primary" />
                  Case Evaluation Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => updateFormData('firstName', e.target.value)}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => updateFormData('lastName', e.target.value)}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => updateFormData('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => updateFormData('phone', e.target.value)}
                        placeholder="(555) 123-4567"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => updateFormData('accidentDate', e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Amusement Park</label>
                      <Select value={formData.parkName} onValueChange={(value) => updateFormData('parkName', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select park" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="disneyland">Disneyland Resort</SelectItem>
                          <SelectItem value="six-flags">Six Flags Magic Mountain</SelectItem>
                          <SelectItem value="knotts">Knott's Berry Farm</SelectItem>
                          <SelectItem value="universal">Universal Studios</SelectItem>
                          <SelectItem value="seaworld">SeaWorld San Diego</SelectItem>
                          <SelectItem value="other">Other Park</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Describe Your Injury</label>
                    <Textarea
                      value={formData.injuryDescription}
                      onChange={(e) => updateFormData('injuryDescription', e.target.value)}
                      placeholder="Please describe what happened and your injuries..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-3">
                    Get My Free Case Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-primary">Why Choose Us?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">✓ Former defense attorneys</div>
                <div className="text-sm">✓ No fees unless we win</div>
                <div className="text-sm">✓ Free case evaluation</div>
                <div className="text-sm">✓ 24/7 availability</div>
              </CardContent>
            </Card>

            <Card className="bg-red-50 border-red-200">
              <CardHeader>
                <CardTitle className="text-red-600 flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Need Immediate Help?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-700 mb-4">
                  Call now for immediate assistance with your amusement park injury case.
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Call (818) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkCaseEvaluation;