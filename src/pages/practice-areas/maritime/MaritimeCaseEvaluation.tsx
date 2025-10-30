import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Phone, Mail, MessageCircle, Send, CheckCircle } from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroImage from '@/assets/maritime-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const MaritimeCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentLocation: '',
    vesselName: '',
    employerName: '',
    jobTitle: '',
    accidentType: '',
    injuryType: '',
    medicalTreatment: '',
    currentStatus: '',
    additionalInfo: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        incidentDate: '',
        incidentLocation: '',
        vesselName: '',
        employerName: '',
        jobTitle: '',
        accidentType: '',
        injuryType: '',
        medicalTreatment: '',
        currentStatus: '',
        additionalInfo: ''
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Maritime Case Evaluation - Expert Legal Analysis"
        description="Get expert evaluation of your maritime accident case. Free consultation with specialized maritime attorneys. Immediate analysis of your Jones Act, LHWCA, or passenger rights claim."
        keywords="maritime case evaluation, free consultation, Jones Act case review, LHWCA evaluation, maritime lawyer consultation"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Free Maritime Case Evaluation
            </h1>
            <p className="text-xl mb-6 text-white">
              Expert analysis of your maritime accident claim with immediate consultation
            </p>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now: (818) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6">Submit Your Case for Free Evaluation</h2>
            <p className="text-lg mb-6">
              Complete the form below to receive a comprehensive evaluation of your maritime accident case. 
              Our specialized attorneys will review your information and contact you within 24 hours.
            </p>

            <ThreeDVisualEffects>
              <Card className="premium-form-container interactive-card">
                <CardHeader>
                  <CardTitle className="text-blue-600 font-display">Case Evaluation Form</CardTitle>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-green-600 mb-2">Form Submitted Successfully!</h3>
                      <p className="text-muted-foreground">
                        Thank you for submitting your information. Our team will review your case and contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={(e) => { e.preventDefault(); console.log('Form submitted:', formData); alert('Thank you! Your case evaluation has been submitted. We will contact you within 24 hours.'); setIsSubmitted(true); setTimeout(() => { setIsSubmitted(false); setFormData({ firstName: '', lastName: '', email: '', phone: '', incidentDate: '', incidentLocation: '', vesselName: '', employerName: '', jobTitle: '', accidentType: '', injuryType: '', medicalTreatment: '', currentStatus: '', additionalInfo: '' }); }, 3000); }} className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Personal Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="firstName">First Name *</Label>
                            <Input
                              id="firstName"
                              required
                              value={formData.firstName}
                              onChange={(e) => handleInputChange('firstName', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="lastName">Last Name *</Label>
                            <Input
                              id="lastName"
                              required
                              value={formData.lastName}
                              onChange={(e) => handleInputChange('lastName', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Incident Details */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Incident Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="incidentDate">Date of Incident *</Label>
                            <Input
                              id="incidentDate"
                              type="date"
                              required
                              value={formData.incidentDate}
                              onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="incidentLocation">Location of Incident *</Label>
                            <Input
                              id="incidentLocation"
                              required
                              placeholder="e.g., Gulf of Mexico, Port of Los Angeles"
                              value={formData.incidentLocation}
                              onChange={(e) => handleInputChange('incidentLocation', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="vesselName">Vessel/Platform Name</Label>
                            <Input
                              id="vesselName"
                              value={formData.vesselName}
                              onChange={(e) => handleInputChange('vesselName', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="accidentType">Type of Accident *</Label>
                            <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                              <SelectTrigger className="interactive-card">
                                <SelectValue placeholder="Select accident type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                                <SelectItem value="equipment-failure">Equipment Failure</SelectItem>
                                <SelectItem value="collision">Vessel Collision</SelectItem>
                                <SelectItem value="explosion">Explosion/Fire</SelectItem>
                                <SelectItem value="crane-accident">Crane Accident</SelectItem>
                                <SelectItem value="crushing">Crushing Injury</SelectItem>
                                <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Employment Information */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Employment Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="employerName">Employer Name *</Label>
                            <Input
                              id="employerName"
                              required
                              value={formData.employerName}
                              onChange={(e) => handleInputChange('employerName', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                          <div>
                            <Label htmlFor="jobTitle">Job Title *</Label>
                            <Input
                              id="jobTitle"
                              required
                              value={formData.jobTitle}
                              onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                              className="interactive-card"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Injury Information */}
                      <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Injury Information</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="injuryType">Type of Injury *</Label>
                            <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                              <SelectTrigger className="interactive-card">
                                <SelectValue placeholder="Select injury type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="back-spine">Back/Spine Injury</SelectItem>
                                <SelectItem value="broken-bones">Broken Bones</SelectItem>
                                <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                                <SelectItem value="burns">Burns</SelectItem>
                                <SelectItem value="amputation">Amputation</SelectItem>
                                <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                                <SelectItem value="multiple-injuries">Multiple Injuries</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="currentStatus">Current Status *</Label>
                            <Select value={formData.currentStatus} onValueChange={(value) => handleInputChange('currentStatus', value)}>
                              <SelectTrigger className="interactive-card">
                                <SelectValue placeholder="Select current status" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="still-treating">Still Receiving Treatment</SelectItem>
                                <SelectItem value="returned-work">Returned to Work</SelectItem>
                                <SelectItem value="unable-work">Unable to Work</SelectItem>
                                <SelectItem value="light-duty">On Light Duty</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="medicalTreatment">Medical Treatment Received</Label>
                          <Textarea
                            id="medicalTreatment"
                            placeholder="Describe the medical treatment you have received..."
                            value={formData.medicalTreatment}
                            onChange={(e) => handleInputChange('medicalTreatment', e.target.value)}
                            className="interactive-card"
                          />
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <Label htmlFor="additionalInfo">Additional Information</Label>
                        <Textarea
                          id="additionalInfo"
                          placeholder="Please provide any additional details about your case that you think would be helpful..."
                          value={formData.additionalInfo}
                          onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                          className="interactive-card"
                        />
                      </div>

                      <Button type="submit" className="w-full btn-enhanced py-4 text-lg">
                        Submit Case for Evaluation
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        By submitting this form, you agree that an attorney may contact you to discuss your case. 
                        Submitting this form does not establish an attorney-client relationship.
                      </p>
                    </form>
                  )}
                </CardContent>
              </Card>
            </ThreeDVisualEffects>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6 mb-6">
              <CardHeader>
                <CardTitle>Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm">
                  Can't wait for our response? Call us directly for immediate assistance with your maritime accident case.
                </p>
                
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for Maritime Emergencies
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We Evaluate</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Jones Act eligibility</li>
                  <li>• LHWCA coverage</li>
                  <li>• Vessel unseaworthiness claims</li>
                  <li>• Maintenance and cure rights</li>
                  <li>• Third-party liability</li>
                  <li>• Potential compensation value</li>
                  <li>• Case timeline and deadlines</li>
                  <li>• Available legal remedies</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaritimeCaseEvaluation;