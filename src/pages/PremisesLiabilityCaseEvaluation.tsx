import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import {
  Phone, 
  Mail, 
  Scale, 
  Clock,
  Shield,
  AlertTriangle,
  FileText,
  Star,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const PremisesLiabilityCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentLocation: '',
    incidentType: '',
    injuryType: '',
    medicalTreatment: '',
    description: '',
    propertyOwner: '',
    witnesses: '',
    photos: '',
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
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Premises Liability Case Evaluation | California Slip & Fall Lawyers"
        description="Get a free case evaluation for your California premises liability claim. Experienced lawyers handling slip and fall, property negligence, and safety violation cases."
        canonical="https://trembachlaw.com/premises-liability-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Premises Liability Case Evaluation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg text-white">Trusted by Injury Victims</span>
            </div>
            <p className="text-xl text-white">
              Get expert legal advice about your property injury case - completely free
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                {/* Header */}
                <div className="text-center py-12 px-8 bg-gradient-to-b from-gray-50 to-white">
                  <h1 className="text-4xl font-semibold text-red-600 mb-4">
                    Free Case Evaluation
                  </h1>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    Get Your Free Consultation
                  </p>
                  <p className="text-base text-gray-500 mt-3 max-w-xl mx-auto">
                    Provide some basic information to help us understand your case better.
                  </p>
                </div>

                {/* Form */}
                <div className="px-8 pb-12">
                  <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="space-y-8">
                      {/* Incident Date & Injury Type */}
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
                            className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
                            placeholder="mm/dd/yyyy"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-3">
                            Injury Type
                          </label>
                          <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                            <SelectTrigger className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200">
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent className="rounded-xl border-gray-200">
                              <SelectItem value="broken-bone">Broken Bone/Fracture</SelectItem>
                              <SelectItem value="back-injury">Back/Spine Injury</SelectItem>
                              <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                              <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                              <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                              <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                              <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                              <SelectItem value="burns">Burns</SelectItem>
                              <SelectItem value="multiple">Multiple Injuries</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Accident Location */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Accident Location
                        </label>
                        <Input
                          name="incidentLocation"
                          value={formData.incidentLocation}
                          onChange={handleInputChange}
                          className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
                          placeholder="Where did the accident occur?"
                          required
                        />
                      </div>

                      {/* Contact Information Grid */}
                      <div className="border-t border-gray-100 pt-8">
                        <h3 className="text-lg font-medium text-gray-900 mb-6">Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">First Name *</label>
                            <Input
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Last Name *</label>
                            <Input
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
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
                              className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
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
                              className="h-14 text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Incident Description */}
                      <div className="border-t border-gray-100 pt-8">
                        <label className="block text-sm font-medium text-gray-700 mb-3">
                          Please describe what happened *
                        </label>
                        <Textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          placeholder="Please provide a detailed description of the incident..."
                          rows={5}
                          className="text-lg border-gray-200 rounded-2xl focus:border-red-400 focus:ring-red-400/20 transition-all duration-200 resize-none"
                          required
                        />
                      </div>

                      {/* Consent */}
                      <div className="bg-gray-50 rounded-2xl p-6">
                        <div className="flex items-start">
                          <input
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleInputChange}
                            className="mt-1 mr-4 w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500 focus:ring-2"
                            required
                          />
                          <label className="text-sm text-gray-600 leading-relaxed">
                            I consent to being contacted by Trembach Law Firm regarding my case. I understand this consultation is free and there is no obligation. *
                          </label>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          className="w-full h-16 text-lg font-semibold bg-red-600 hover:bg-red-700 rounded-2xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                        >
                          Start My Free Case Evaluation
                        </Button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Information */}
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
                        Available 24/7 for premises liability cases
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Benefits */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Free consultation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">No fees unless we win</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Experienced in premises liability</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Maximum compensation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Time Sensitive */}
                <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Time Sensitive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      California premises liability cases have a 2-year statute of limitations. Don't wait - protect your rights today.
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

export default PremisesLiabilityCaseEvaluation;