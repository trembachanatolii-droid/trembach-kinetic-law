import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Phone, Mail } from 'lucide-react';
import heroBackground from '@/assets/pfas-hero-bg.jpg';

const PFASCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    exposureLocation: '',
    diagnosis: '',
    yearDiagnosed: '',
    exposureDuration: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Trembach Law Firm! We will review your PFAS exposure case and contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="absolute top-6 left-6 z-20">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/40 text-white hover:bg-black/60 backdrop-blur-sm border border-white/20"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">PFAS Exposure Case Evaluation</h1>
          <p className="text-xl">Get your free consultation for PFAS exposure claims</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Free PFAS Case Evaluation Form</CardTitle>
                <p className="text-muted-foreground">Complete this form to receive your free consultation</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address *</label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Exposure Location *</label>
                    <Input
                      placeholder="City, Military Base, or Workplace"
                      required
                      value={formData.exposureLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Health Condition/Diagnosis *</label>
                      <Select value={formData.diagnosis} onValueChange={(value) => setFormData(prev => ({ ...prev, diagnosis: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select condition..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                          <SelectItem value="testicular-cancer">Testicular Cancer</SelectItem>
                          <SelectItem value="thyroid-disease">Thyroid Disease</SelectItem>
                          <SelectItem value="liver-damage">Liver Damage</SelectItem>
                          <SelectItem value="ulcerative-colitis">Ulcerative Colitis</SelectItem>
                          <SelectItem value="high-cholesterol">High Cholesterol</SelectItem>
                          <SelectItem value="other">Other PFAS-Related Condition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Year Diagnosed</label>
                      <Input
                        placeholder="e.g., 2023"
                        value={formData.yearDiagnosed}
                        onChange={(e) => setFormData(prev => ({ ...prev, yearDiagnosed: e.target.value }))}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Duration of Exposure</label>
                    <Select value={formData.exposureDuration} onValueChange={(value) => setFormData(prev => ({ ...prev, exposureDuration: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-2-years">1-2 years</SelectItem>
                        <SelectItem value="3-5-years">3-5 years</SelectItem>
                        <SelectItem value="6-10-years">6-10 years</SelectItem>
                        <SelectItem value="10+-years">10+ years</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg">
                    GET FREE CASE EVALUATION
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>

                <div className="text-sm text-muted-foreground mt-4">
                  <p className="font-semibold mb-2">Why Choose Trembach Law Firm?</p>
                  <ul className="space-y-1">
                    <li>• Former Defense Attorney</li>
                    <li>• No Fees Unless We Win</li>
                    <li>• Free Consultation</li>
                    <li>• Maximum Compensation</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PFASCaseEvaluation;