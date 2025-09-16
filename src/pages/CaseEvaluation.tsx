import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

const CaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    diagnosisDate: '',
    exposureType: '',
    workHistory: '',
    symptoms: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">
            Free Case Evaluation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Get your free, confidential case evaluation. No obligation. No fees unless we win.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Tell Us About Your Case</CardTitle>
                  <p className="text-muted-foreground">
                    Please provide as much detail as possible to help us evaluate your potential claim.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="diagnosisDate">Date of Diagnosis</Label>
                        <Input
                          id="diagnosisDate"
                          type="date"
                          value={formData.diagnosisDate}
                          onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="exposureType">Type of Exposure</Label>
                        <Select onValueChange={(value) => handleInputChange('exposureType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select exposure type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="occupational">Occupational</SelectItem>
                            <SelectItem value="military">Military Service</SelectItem>
                            <SelectItem value="secondary">Secondary/Take-home</SelectItem>
                            <SelectItem value="environmental">Environmental</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="workHistory">Work History & Potential Exposure Sources</Label>
                      <Textarea
                        id="workHistory"
                        placeholder="Please describe your work history, including any jobs where you may have been exposed to asbestos..."
                        value={formData.workHistory}
                        onChange={(e) => handleInputChange('workHistory', e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label htmlFor="symptoms">Symptoms & Medical Information</Label>
                      <Textarea
                        id="symptoms"
                        placeholder="Please describe your symptoms and any medical information you'd like to share..."
                        value={formData.symptoms}
                        onChange={(e) => handleInputChange('symptoms', e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Any additional information that might be relevant to your case..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={3}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group">
                      Submit Case Evaluation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Call for Immediate Help</p>
                      <p className="text-muted-foreground">855-TREMBACH-WINS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-muted-foreground">contact@trembachlaw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Serving All of California</p>
                      <p className="text-muted-foreground">Free consultations statewide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Available 24/7</p>
                      <p className="text-muted-foreground">Emergency consultations available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">No Fees Unless We Win</h3>
                  <p className="text-sm text-muted-foreground">
                    We work on a contingency fee basis. You pay nothing unless we secure compensation for you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseEvaluation;