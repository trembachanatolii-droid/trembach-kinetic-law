import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { 
  Phone, 
  Star,
  CheckCircle,
  AlertTriangle
} from 'lucide-react';
import heroBackground from '@/assets/amputation-case-evaluation-hero.jpg';

const AmputationCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentLocation: '',
    amputationType: '',
    injuryType: '',
    medicalTreatment: '',
    description: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Amputation Case Evaluation | California Limb Loss Lawyers"
        description="Get a free case evaluation for your California amputation injury claim. Experienced lawyers handling traumatic limb loss and catastrophic injury cases."
        canonical="https://trembachlaw.com/amputation-case-evaluation"
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
              Free Amputation Case Evaluation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted by Amputation Victims</span>
            </div>
            <p className="text-xl">
              Get expert legal advice about your amputation injury case - completely free
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="text-center py-12 px-8 bg-gradient-to-b from-gray-50 to-white">
                  <h1 className="text-4xl font-semibold text-red-600 mb-4">
                    Free Case Evaluation
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Get Your Free Consultation for Amputation Injuries
                  </p>
                </div>

                <div className="px-8 pb-12">
                  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Accident Date
                          </label>
                          <Input
                            type="date"
                            name="incidentDate"
                            value={formData.incidentDate}
                            onChange={handleInputChange}
                            className="h-14 text-lg border-gray-200 rounded-2xl"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Amputation Type
                          </label>
                          <Select value={formData.amputationType} onValueChange={(value) => handleSelectChange('amputationType', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl">
                              <SelectValue placeholder="Select amputation type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="finger">Finger/Thumb</SelectItem>
                              <SelectItem value="hand">Hand</SelectItem>
                              <SelectItem value="arm-below">Below-Elbow Arm</SelectItem>
                              <SelectItem value="arm-above">Above-Elbow Arm</SelectItem>
                              <SelectItem value="toe">Toe</SelectItem>
                              <SelectItem value="foot">Foot</SelectItem>
                              <SelectItem value="leg-below">Below-Knee Leg</SelectItem>
                              <SelectItem value="leg-above">Above-Knee Leg</SelectItem>
                              <SelectItem value="multiple">Multiple Limbs</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">First Name *</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            className="h-14 text-lg border-gray-200 rounded-2xl"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Last Name *</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            className="h-14 text-lg border-gray-200 rounded-2xl"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="h-14 text-lg border-gray-200 rounded-2xl"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">Phone *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="h-14 text-lg border-gray-200 rounded-2xl"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Please describe your amputation injury *
                        </label>
                        <Textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Please provide details about how the amputation occurred..."
                          rows={5}
                          className="text-lg border-gray-200 rounded-2xl"
                          required
                        />
                      </div>

                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mt-1 mr-4 w-4 h-4 text-red-600 border-gray-300 rounded"
                            required
                          />
                          <label className="text-sm text-gray-600 leading-relaxed">
                            I consent to being contacted by Trembach Law Firm regarding my amputation case. I understand this consultation is free and there is no obligation. *
                          </label>
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full h-16 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-2xl"
                        >
                          Start My Free Case Evaluation
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Available 24/7 for amputation cases
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Time Sensitive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      California amputation cases have a 2-year statute of limitations. Don't wait - protect your rights today.
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

export default AmputationCaseEvaluation;