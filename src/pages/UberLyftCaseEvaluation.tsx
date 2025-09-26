import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, FileText, Calendar, MapPin, AlertTriangle } from 'lucide-react';

import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const UberLyftCaseEvaluation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    accidentType: '',
    injuryType: '',
    accidentDate: '',
    location: '',
    description: '',
    medicalTreatment: '',
    insuranceClaim: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours to discuss your case.');
  };

  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Free Uber/Lyft Accident Case Evaluation
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get a professional assessment of your rideshare accident case. No fees unless we win your case.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle className="text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">24/7 Emergency Line</p>
                      <p className="text-sm text-muted-foreground">(818) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">info@trembachlawfirm.com</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-muted-foreground">
                      All consultations are confidential and protected by attorney-client privilege.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Evaluation Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Case Evaluation Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Please provide detailed information about your Uber/Lyft accident case.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label>Type of Accident *</Label>
                        <Select value={formData.accidentType} onValueChange={(value) => setFormData({...formData, accidentType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select accident type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="passenger-injury">Uber/Lyft Passenger Injury</SelectItem>
                            <SelectItem value="pedestrian-hit">Pedestrian Hit by Uber/Lyft</SelectItem>
                            <SelectItem value="driver-collision">Driver vs. Rideshare Collision</SelectItem>
                            <SelectItem value="driver-assault">Driver Assault/Harassment</SelectItem>
                            <SelectItem value="other">Other Rideshare Incident</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label>Primary Injury Type</Label>
                        <Select value={formData.injuryType} onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                            <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                            <SelectItem value="whiplash">Whiplash/Neck Injury</SelectItem>
                            <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="psychological">PTSD/Psychological Trauma</SelectItem>
                            <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                            <SelectItem value="other">Other Injuries</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="accidentDate">Accident Date</Label>
                        <Input
                          id="accidentDate"
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Accident Location</Label>
                        <Input
                          id="location"
                          placeholder="City, State"
                          value={formData.location}
                          onChange={(e) => setFormData({...formData, location: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">Accident Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe what happened in detail..."
                        value={formData.description}
                        onChange={(e) => setFormData({...formData, description: e.target.value})}
                        rows={4}
                      />
                    </div>

                    <div>
                      <Label>Have you received medical treatment?</Label>
                      <Select value={formData.medicalTreatment} onValueChange={(value) => setFormData({...formData, medicalTreatment: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency-room">Emergency Room</SelectItem>
                          <SelectItem value="hospital">Hospital Stay</SelectItem>
                          <SelectItem value="doctor">Doctor Visit</SelectItem>
                          <SelectItem value="ongoing">Ongoing Treatment</SelectItem>
                          <SelectItem value="none">No Treatment Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Have you filed an insurance claim?</Label>
                      <Select value={formData.insuranceClaim} onValueChange={(value) => setFormData({...formData, insuranceClaim: value})}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-settled">Yes - Already Settled</SelectItem>
                          <SelectItem value="yes-pending">Yes - Still Pending</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="denied">Filed but Denied</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <FileText className="w-5 h-5 mr-2" />
                      Submit Free Case Evaluation
                    </Button>

                    <div className="text-center pt-4">
                      <p className="text-sm text-muted-foreground">
                        <AlertTriangle className="w-4 h-4 inline mr-1" />
                        Confidential & Secure • No Fees Unless We Win
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UberLyftCaseEvaluation;