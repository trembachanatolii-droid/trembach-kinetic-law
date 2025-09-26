import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Shield, Clock, Phone, Mail } from 'lucide-react';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';

import heroBackground from '@/assets/talc-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const TalcCaseEvaluation = () => {
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    
    // Medical Information
    cancerType: '',
    diagnosisDate: '',
    diagnosingPhysician: '',
    currentTreatmentStatus: '',
    medicalFacility: '',
    cancerStage: '',
    hasPathologyReport: '',
    otherCancers: '',
    
    // Talc Exposure Information
    talcProductsUsed: '',
    brandsUsed: '',
    exposureStartDate: '',
    exposureDuration: '',
    usageFrequency: '',
    applicationMethod: '',
    primaryUseLocation: '',
    familyMembers: '',
    purchaseLocations: '',
    
    // Legal Information
    hasAttorney: '',
    previousLawsuits: '',
    workersCompensation: '',
    urgencyLevel: '',
    additionalInfo: '',
    
    // Consent
    consent: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Talc case evaluation submitted:', formData);
    // Handle form submission
  };

  const seoData = {
    title: "Free Talc Cancer Case Evaluation | California Baby Powder Lawyers",
    description: "Free confidential case evaluation for talc cancer victims. Ovarian cancer and mesothelioma from baby powder. No fees unless we win. Submit your case details today.",
    keywords: "talc cancer case evaluation, baby powder lawsuit evaluation, ovarian cancer attorney consultation, free legal case review",
    canonical: "/talc-case-evaluation"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoData.title}
        description={seoData.description}
        canonical={seoData.canonical}
      />
      <Navigation />
      

      {/* Hero Section */}
      <section 
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
        
        <div className="relative z-10 container mx-auto px-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
              Free Talc Cancer Case Evaluation
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Confidential Review for Baby Powder Cancer Victims
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-4xl">
              If you or a loved one developed ovarian cancer, mesothelioma, or other cancers after using talc-based baby powder, you may be entitled to compensation. Complete our confidential evaluation form.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-2 text-green-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">100% Confidential</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600">
                <Clock className="w-5 h-5" />
                <span className="font-medium">Quick Response</span>
              </div>
              <div className="flex items-center gap-2 text-purple-600">
                <Shield className="w-5 h-5" />
                <span className="font-medium">No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Evaluation Form */}
      <section className="py-20">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center mb-2">
                  Talc Cancer Case Evaluation Form
                </CardTitle>
                <p className="text-muted-foreground text-center">
                  Please provide detailed information to help us evaluate your case
                </p>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-red-600 border-b pb-2">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={formData.city}
                          onChange={(e) => handleInputChange('city', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Select onValueChange={(value) => handleInputChange('state', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="CA">California</SelectItem>
                            <SelectItem value="other">Other State</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code</Label>
                        <Input
                          id="zipCode"
                          value={formData.zipCode}
                          onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth</Label>
                      <Input
                        id="dateOfBirth"
                        type="date"
                        value={formData.dateOfBirth}
                        onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                      />
                    </div>
                  </div>

                  {/* Medical Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-red-600 border-b pb-2">Medical Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="cancerType">Type of Cancer Diagnosed *</Label>
                        <Select onValueChange={(value) => handleInputChange('cancerType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select cancer type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ovarian-cancer">Ovarian Cancer</SelectItem>
                            <SelectItem value="mesothelioma">Mesothelioma</SelectItem>
                            <SelectItem value="fallopian-tube">Fallopian Tube Cancer</SelectItem>
                            <SelectItem value="peritoneal-cancer">Primary Peritoneal Cancer</SelectItem>
                            <SelectItem value="cervical-cancer">Cervical Cancer</SelectItem>
                            <SelectItem value="uterine-cancer">Uterine Cancer</SelectItem>
                            <SelectItem value="other">Other Cancer Type</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="diagnosisDate">Date of Diagnosis *</Label>
                        <Input
                          id="diagnosisDate"
                          type="date"
                          value={formData.diagnosisDate}
                          onChange={(e) => handleInputChange('diagnosisDate', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="diagnosingPhysician">Diagnosing Physician/Hospital</Label>
                        <Input
                          id="diagnosingPhysician"
                          value={formData.diagnosingPhysician}
                          onChange={(e) => handleInputChange('diagnosingPhysician', e.target.value)}
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="cancerStage">Cancer Stage (if known)</Label>
                        <Select onValueChange={(value) => handleInputChange('cancerStage', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stage-1">Stage I</SelectItem>
                            <SelectItem value="stage-2">Stage II</SelectItem>
                            <SelectItem value="stage-3">Stage III</SelectItem>
                            <SelectItem value="stage-4">Stage IV</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="currentTreatmentStatus">Current Treatment Status</Label>
                      <Select onValueChange={(value) => handleInputChange('currentTreatmentStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select treatment status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="currently-treating">Currently Undergoing Treatment</SelectItem>
                          <SelectItem value="completed-treatment">Completed Treatment</SelectItem>
                          <SelectItem value="in-remission">In Remission</SelectItem>
                          <SelectItem value="palliative-care">Palliative Care</SelectItem>
                          <SelectItem value="not-yet-started">Treatment Not Yet Started</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="hasPathologyReport">Do you have pathology reports showing talc particles in tissue?</Label>
                      <Select onValueChange={(value) => handleInputChange('hasPathologyReport', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select answer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="unknown">Unknown/Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Talc Exposure Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-red-600 border-b pb-2">Talc Exposure Information</h3>
                    
                    <div>
                      <Label htmlFor="talcProductsUsed">What talc products did you use? *</Label>
                      <Textarea
                        id="talcProductsUsed"
                        value={formData.talcProductsUsed}
                        onChange={(e) => handleInputChange('talcProductsUsed', e.target.value)}
                        placeholder="Describe the talc or baby powder products you used (e.g., Baby Powder, Shower to Shower, etc.)"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="exposureStartDate">When did you start using talc products?</Label>
                        <Select onValueChange={(value) => handleInputChange('exposureStartDate', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time period" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1950s-1960s">1950s-1960s</SelectItem>
                            <SelectItem value="1970s-1980s">1970s-1980s</SelectItem>
                            <SelectItem value="1990s-2000s">1990s-2000s</SelectItem>
                            <SelectItem value="2000s-2010s">2000s-2010s</SelectItem>
                            <SelectItem value="2010s-present">2010s-Present</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="exposureDuration">How long did you use talc products?</Label>
                        <Select onValueChange={(value) => handleInputChange('exposureDuration', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="less-than-1-year">Less than 1 year</SelectItem>
                            <SelectItem value="1-5-years">1-5 years</SelectItem>
                            <SelectItem value="6-10-years">6-10 years</SelectItem>
                            <SelectItem value="11-20-years">11-20 years</SelectItem>
                            <SelectItem value="more-than-20-years">More than 20 years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="usageFrequency">How often did you use talc products?</Label>
                        <Select onValueChange={(value) => handleInputChange('usageFrequency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select frequency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="daily">Daily</SelectItem>
                            <SelectItem value="several-times-week">Several times per week</SelectItem>
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <SelectItem value="occasionally">Occasionally</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="primaryUseLocation">Primary application area *</Label>
                        <Select onValueChange={(value) => handleInputChange('primaryUseLocation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="genital-area">Genital Area</SelectItem>
                            <SelectItem value="underwear-pads">Underwear/Sanitary Pads</SelectItem>
                            <SelectItem value="all-over-body">All Over Body</SelectItem>
                            <SelectItem value="baby-diaper-area">Baby Diaper Area</SelectItem>
                            <SelectItem value="multiple-areas">Multiple Areas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="familyMembers">Did other family members use talc products in your household?</Label>
                      <Textarea
                        id="familyMembers"
                        value={formData.familyMembers}
                        onChange={(e) => handleInputChange('familyMembers', e.target.value)}
                        placeholder="Describe other family members' talc use and any cancers they developed"
                      />
                    </div>
                  </div>

                  {/* Legal Information Section */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-red-600 border-b pb-2">Legal Information</h3>
                    
                    <div>
                      <Label htmlFor="hasAttorney">Do you currently have an attorney representing you for this matter?</Label>
                      <Select onValueChange={(value) => handleInputChange('hasAttorney', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select answer" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="consulting">Consulting with attorneys</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="urgencyLevel">What is the urgency of your situation?</Label>
                      <Select onValueChange={(value) => handleInputChange('urgencyLevel', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate - Terminal diagnosis</SelectItem>
                          <SelectItem value="urgent">Urgent - Active treatment</SelectItem>
                          <SelectItem value="important">Important - Stable condition</SelectItem>
                          <SelectItem value="routine">Routine - Information gathering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Please provide any additional information about your case, medical history, or talc exposure that might be relevant"
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Consent Section */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-red-600 border-b pb-2">Consent</h3>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', !!checked)}
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I consent to be contacted by an attorney regarding my potential talc cancer case. I understand this evaluation is free and confidential, and I am under no obligation to hire an attorney. I acknowledge that submitting this form does not create an attorney-client relationship.
                      </Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <Button
                      type="submit"
                      disabled={!formData.consent}
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold"
                    >
                      Submit Free Case Evaluation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="mt-8 text-center">
              <Card className="p-6 bg-gray-50">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild variant="outline" size="lg">
                    <a href="tel:8181234567" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="mailto:info@californialaw.com" className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email Us
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Available 24/7 • Free Consultation • No Fees Unless We Win
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TalcCaseEvaluation;