import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  MessageCircle, 
  Calendar,
  AlertTriangle,
  FileText,
  Clock,
  Scale,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/bicycle-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const BicycleCaseEvaluation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentLocation: '',
    accidentType: '',
    injuryType: '',
    medicalTreatment: '',
    policeReport: '',
    insuranceContact: '',
    description: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours.');
  };

  return (
      <div className="min-h-screen bg-background">
      <SEO
        title="Free Bicycle Accident Case Evaluation | California Bike Injury Lawyers"
        description="Get a free evaluation of your bicycle accident case from experienced California attorneys. No fees unless we win your bike injury claim."
        canonical="/bicycle-case-evaluation"
      />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-cyan-900/80"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-6 bg-green-600 hover:bg-green-700 text-white px-4 py-2 text-sm font-semibold">
            Free Bicycle Accident Case Evaluation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Get Your Free <span className="text-cyan-300">Bicycle Accident</span> Case Analysis
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Former defense attorney now fighting for injured cyclists. Get expert evaluation of your case value, 
            legal options, and next steps. No obligation, completely confidential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ThreeDVisualEffects>
              <Card className="p-8 premium-form-container interactive-card">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-3xl font-bold text-blue-600 font-display mb-2">
                    Bicycle Accident Case Evaluation Form
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Complete this form to receive a comprehensive analysis of your bicycle accident case. 
                    All information is strictly confidential and protected by attorney-client privilege.
                  </p>
                </CardHeader>
                
                <CardContent className="px-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <FileText className="w-5 h-5 mr-2 text-red-600" />
                      Personal Information
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Accident Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Bicycle Accident Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="accidentDate">Accident Date *</Label>
                        <Input
                          id="accidentDate"
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accidentLocation">Accident Location (City) *</Label>
                        <Input
                          id="accidentLocation"
                          placeholder="e.g., Los Angeles, CA"
                          value={formData.accidentLocation}
                          onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="accidentType">Type of Bicycle Accident *</Label>
                      <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select accident type..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="dooring">Dooring Accident</SelectItem>
                          <SelectItem value="right-hook">Right Hook Collision</SelectItem>
                          <SelectItem value="left-cross">Left Cross/Turn Collision</SelectItem>
                          <SelectItem value="rear-end">Rear-End Collision</SelectItem>
                          <SelectItem value="sideswipe">Sideswipe</SelectItem>
                          <SelectItem value="intersection">Intersection Accident</SelectItem>
                          <SelectItem value="hit-run">Hit and Run</SelectItem>
                          <SelectItem value="bike-lane">Bike Lane Violation</SelectItem>
                          <SelectItem value="e-bike">E-Bike Accident</SelectItem>
                          <SelectItem value="road-hazard">Road Hazard/Infrastructure</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Injury Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2 text-red-600" />
                      Injury Information
                    </h3>
                    <div>
                      <Label htmlFor="injuryType">Primary Injuries Sustained *</Label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select primary injuries..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                          <SelectItem value="spinal">Spinal Cord Injury</SelectItem>
                          <SelectItem value="fractures">Bone Fractures</SelectItem>
                          <SelectItem value="road-rash">Severe Road Rash</SelectItem>
                          <SelectItem value="shoulder-collarbone">Shoulder/Collarbone</SelectItem>
                          <SelectItem value="facial">Facial Injuries</SelectItem>
                          <SelectItem value="internal">Internal Injuries</SelectItem>
                          <SelectItem value="hand-wrist">Hand/Wrist Injuries</SelectItem>
                          <SelectItem value="multiple">Multiple Injuries</SelectItem>
                          <SelectItem value="minor">Minor Injuries</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="medicalTreatment">Medical Treatment Received *</Label>
                      <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select treatment received..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency-room">Emergency Room Only</SelectItem>
                          <SelectItem value="hospitalized">Hospitalized</SelectItem>
                          <SelectItem value="surgery">Surgery Required</SelectItem>
                          <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                          <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                          <SelectItem value="specialist">Specialist Care</SelectItem>
                          <SelectItem value="no-treatment">No Medical Treatment Yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Legal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <Scale className="w-5 h-5 mr-2 text-red-600" />
                      Legal Information
                    </h3>
                    <div>
                      <Label htmlFor="policeReport">Was a Police Report Filed? *</Label>
                      <Select value={formData.policeReport} onValueChange={(value) => handleInputChange('policeReport', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes-have-copy">Yes, I have a copy</SelectItem>
                          <SelectItem value="yes-no-copy">Yes, but I don't have a copy</SelectItem>
                          <SelectItem value="no">No police report filed</SelectItem>
                          <SelectItem value="unsure">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="insuranceContact">Have you been contacted by insurance? *</Label>
                      <Select value={formData.insuranceContact} onValueChange={(value) => handleInputChange('insuranceContact', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select option..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="not-contacted">No contact yet</SelectItem>
                          <SelectItem value="contacted-no-statement">Contacted, but gave no statement</SelectItem>
                          <SelectItem value="contacted-statement">Contacted and gave statement</SelectItem>
                          <SelectItem value="offer-made">Settlement offer made</SelectItem>
                          <SelectItem value="claim-denied">Claim denied</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Additional Details</h3>
                    <div>
                      <Label htmlFor="description">Describe what happened (optional)</Label>
                      <Textarea
                        id="description"
                        placeholder="Please describe the accident, your injuries, and any other relevant details..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows={4}
                        className="interactive-card"
                      />
                    </div>
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg py-6 btn-enhanced">
                    Get My Free Case Evaluation
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting this form, you agree to our privacy policy. This form is secure and confidential.
                  </p>
                </form>
              </CardContent>
            </Card>
            </ThreeDVisualEffects>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Contact Information */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold">Need Immediate Help?</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    (818) 123-4567
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Us
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Available 24/7 for emergency bicycle accident cases. Free consultation with no obligation.
                </p>
              </CardContent>
            </Card>

            {/* Why Choose Us */}
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold">Why Choose Our Firm?</CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Former defense attorney - we know their tactics</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Specialized in bicycle accident law</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">No fees unless we win your case</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Cycling community advocates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Maximum compensation track record</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Urgency Notice */}
            <Card className="p-6 bg-red-50 border-red-200">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-xl font-bold text-red-600 flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  Time is Critical
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-2">
                  <p className="text-sm text-red-700">
                    Evidence disappears quickly after bicycle accidents:
                  </p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Surveillance footage gets deleted</li>
                    <li>• Witnesses forget details</li>
                    <li>• Physical evidence deteriorates</li>
                    <li>• Insurance companies start building defenses</li>
                  </ul>
                  <p className="text-sm font-semibold text-red-700 mt-3">
                    Don't wait - contact us immediately!
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BicycleCaseEvaluation;