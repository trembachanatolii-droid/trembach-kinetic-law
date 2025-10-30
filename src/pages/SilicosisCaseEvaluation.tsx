import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { FileText, Shield, Clock, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import caseEvaluationHero from '@/assets/case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const SilicosisCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    state: '',
    diagnosed: '',
    diagnosisDate: '',
    exposureYears: '',
    workplaceType: '',
    symptoms: '',
    medicalTreatment: '',
    workHistory: '',
    legalRepresentation: '',
    urgency: '',
    additionalInfo: '',
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Case evaluation data:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Silicosis Case Evaluation | Expert Legal Assessment"
        description="Get a free, confidential silicosis case evaluation from experienced attorneys. Determine if you have a valid silicosis claim and understand your legal options."
      />
      
      <div className="min-h-screen bg-gradient-to-br from-background via-background/50 to-primary/5">
        <GoBack className="container mx-auto px-4" />
        
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{ backgroundImage: `url(${caseEvaluationHero})` }}
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-6">
                <FileText className="w-12 h-12 text-primary" />
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  Free Silicosis Case Evaluation
                </h1>
              </div>
              <p className="text-xl text-muted-foreground mb-8">
                Get a confidential assessment of your silicosis case from experienced legal professionals
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">100% Confidential</h3>
                  <p className="text-sm text-muted-foreground">Your information is protected</p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Response</h3>
                  <p className="text-sm text-muted-foreground">Get answers within 24 hours</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">No Obligation</h3>
                  <p className="text-sm text-muted-foreground">Free consultation, no strings attached</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Evaluation Form */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="shadow-2xl border-0 bg-card/80 backdrop-blur">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-primary mb-4">
                    Case Evaluation Form
                  </CardTitle>
                  <CardDescription className="text-lg">
                    Please provide detailed information about your silicosis exposure and symptoms
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                        Personal Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="age">Age</Label>
                          <Input
                            id="age"
                            type="number"
                            placeholder="Your current age"
                            value={formData.age}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="state">State *</Label>
                          <Select onValueChange={(value) => handleInputChange('state', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select your state" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="CA">California</SelectItem>
                              <SelectItem value="other">Other State</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Medical Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                        Medical Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="diagnosed">Have you been diagnosed with silicosis? *</Label>
                          <Select onValueChange={(value) => handleInputChange('diagnosed', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="suspected">Suspected/Under Investigation</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="diagnosisDate">Date of Diagnosis</Label>
                          <Input
                            id="diagnosisDate"
                            type="date"
                            value={formData.diagnosisDate}
                            onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="symptoms">Current Symptoms</Label>
                        <Textarea
                          id="symptoms"
                          placeholder="Describe your symptoms (shortness of breath, cough, chest pain, etc.)"
                          value={formData.symptoms}
                          onChange={(e) => handleInputChange('symptoms', e.target.value)}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="medicalTreatment">Medical Treatment</Label>
                        <Textarea
                          id="medicalTreatment"
                          placeholder="Describe your current medical treatment and healthcare providers"
                          value={formData.medicalTreatment}
                          onChange={(e) => handleInputChange('medicalTreatment', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Exposure Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                        Exposure Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="exposureYears">Years of Silica Exposure</Label>
                          <Input
                            id="exposureYears"
                            type="number"
                            placeholder="Number of years"
                            value={formData.exposureYears}
                            onChange={(e) => handleInputChange('exposureYears', e.target.value)}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="workplaceType">Type of Work/Industry</Label>
                          <Select onValueChange={(value) => handleInputChange('workplaceType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="countertop">Countertop/Stone Fabrication</SelectItem>
                              <SelectItem value="construction">Construction</SelectItem>
                              <SelectItem value="mining">Mining</SelectItem>
                              <SelectItem value="foundry">Foundry Work</SelectItem>
                              <SelectItem value="sandblasting">Sandblasting</SelectItem>
                              <SelectItem value="ceramics">Ceramics/Glass</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="workHistory">Detailed Work History</Label>
                        <Textarea
                          id="workHistory"
                          placeholder="Provide details about your work history, companies, job duties, and silica exposure"
                          value={formData.workHistory}
                          onChange={(e) => handleInputChange('workHistory', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Legal Information */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold text-primary border-b border-border pb-2">
                        Legal Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="legalRepresentation">Do you currently have legal representation?</Label>
                          <Select onValueChange={(value) => handleInputChange('legalRepresentation', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select option" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="no">No</SelectItem>
                              <SelectItem value="yes">Yes</SelectItem>
                              <SelectItem value="consulting">Consulting with attorneys</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="urgency">How urgent is your situation?</Label>
                          <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select urgency" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate</SelectItem>
                              <SelectItem value="within-week">Within a week</SelectItem>
                              <SelectItem value="within-month">Within a month</SelectItem>
                              <SelectItem value="no-rush">No immediate rush</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Any other relevant information about your case or questions you have"
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        />
                        <Label htmlFor="consent" className="text-sm leading-relaxed">
                          I consent to be contacted by the law firm regarding my potential silicosis case. 
                          I understand this consultation is free and confidential, and I am under no obligation to hire this firm.
                        </Label>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full py-6 text-lg font-semibold"
                      disabled={!formData.consent}
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Submit Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SilicosisCaseEvaluation;