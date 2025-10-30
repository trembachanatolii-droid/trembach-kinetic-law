import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Shield, Clock, Phone } from 'lucide-react';
import heroBackground from '@/assets/railroad-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const RailroadAccidentsCaseEvaluation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentType: '',
    accidentDate: '',
    injurySeverity: '',
    workRelated: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting Trembach Law Firm! We will review your railroad accident case and contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Railroad Accident Case Evaluation | California FELA Claims | Trembach Law Firm"
        description="Free confidential evaluation for California railroad accident victims. FELA claims, train accidents, crossing incidents. Former defense attorney expertise."
        keywords="railroad accident case evaluation, FELA claims evaluation, train accident lawyer, California railroad attorney"
      />

      <GoBack fallbackPath="/practice-areas/railroad-accidents" />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Railroad Accident Case Evaluation
          </h1>
          <p className="text-xl text-white">
            Get expert legal analysis of your FELA or railroad accident claim
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary">
              Confidential Railroad Accident Evaluation
            </CardTitle>
            <p className="text-center text-muted-foreground">
              Step {currentStep} of 3 - All information is confidential and protected by attorney-client privilege
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Accident Details</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of Railroad Accident *</label>
                    <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select accident type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="train-derailment">Train Derailment</SelectItem>
                        <SelectItem value="grade-crossing">Grade Crossing Accident</SelectItem>
                        <SelectItem value="railroad-worker-fela">Railroad Worker Injury (FELA)</SelectItem>
                        <SelectItem value="passenger-train">Passenger Train Accident</SelectItem>
                        <SelectItem value="freight-collision">Freight Train Collision</SelectItem>
                        <SelectItem value="platform-station">Platform/Station Accident</SelectItem>
                        <SelectItem value="other">Other Railroad Accident</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Accident Date *</label>
                    <Input
                      type="date"
                      value={formData.accidentDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Were you working for the railroad at the time? *</label>
                    <Select value={formData.workRelated} onValueChange={(value) => setFormData(prev => ({ ...prev, workRelated: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes-employee">Yes - Railroad Employee</SelectItem>
                        <SelectItem value="yes-contractor">Yes - Railroad Contractor</SelectItem>
                        <SelectItem value="no-passenger">No - Passenger</SelectItem>
                        <SelectItem value="no-motorist">No - Motorist</SelectItem>
                        <SelectItem value="no-pedestrian">No - Pedestrian</SelectItem>
                        <SelectItem value="no-other">No - Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Injury Information</h3>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Injury Severity *</label>
                    <Select value={formData.injurySeverity} onValueChange={(value) => setFormData(prev => ({ ...prev, injurySeverity: value }))}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor Injuries</SelectItem>
                        <SelectItem value="moderate">Moderate Injuries</SelectItem>
                        <SelectItem value="serious">Serious Injuries</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic Injuries</SelectItem>
                        <SelectItem value="wrongful-death">Wrongful Death</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Brief Description of Accident and Injuries</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                      rows={6}
                      placeholder="Please describe what happened and your injuries..."
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between pt-6">
                {currentStep > 1 && (
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                  >
                    Previous
                  </Button>
                )}
                
                {currentStep < 3 ? (
                  <Button 
                    type="button"
                    onClick={() => setCurrentStep(prev => prev + 1)}
                    className="ml-auto"
                  >
                    Next Step
                  </Button>
                ) : (
                  <Button type="submit" className="ml-auto bg-red-600 hover:bg-red-700">
                    Submit Case Evaluation
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <Card className="glass-card">
            <CardContent className="pt-6">
              <div className="flex items-center justify-center space-x-8">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-2" />
                  <span className="font-semibold">Call (818) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <span>Available 24/7</span>
                </div>
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-primary mr-2" />
                  <span>No Fees Unless We Win</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RailroadAccidentsCaseEvaluation;