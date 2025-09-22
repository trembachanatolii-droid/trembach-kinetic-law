import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowLeft, Phone, Mail, MessageCircle, Shield, Heart, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import elderAbuseCaseEvaluationHero from '@/assets/elder-abuse-case-evaluation-hero.jpg';

interface GoBackProps {
  onGoBack?: () => void;
  fromSection?: string;
}

const GoBack: React.FC<GoBackProps> = ({ onGoBack, fromSection }) => {
  const [isVisible, setIsVisible] = useState(true);
  
  const handleClick = () => {
    if (onGoBack) {
      onGoBack();
    } else if (fromSection) {
      const targetElement = document.getElementById(fromSection);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      window.history.back();
    } else {
      window.history.back();
    }
  };
  
  return (
    <div className={`fixed top-20 left-6 z-50 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <Button 
        variant="ghost" 
        onClick={handleClick}
        className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back
      </Button>
    </div>
  );
};

const ElderAbuseCaseEvaluation: React.FC = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Abuse Information
    abuseType: '',
    facilityName: '',
    facilityType: '',
    abuseDate: '',
    abuseDescription: '',
    
    // Medical Information
    injuriesDescription: '',
    medicalTreatment: '',
    currentMedicalNeeds: '',
    
    // Financial Information
    financialLosses: '',
    stolenAmount: '',
    
    // Additional Information
    witnessesAvailable: '',
    reportedToAPS: '',
    lawEnforcementInvolved: '',
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
    
    if (!formData.consent) {
      toast({
        title: "Consent Required",
        description: "Please provide consent to submit your case evaluation.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Case Evaluation Submitted",
      description: "Thank you for your submission. We'll contact you within 24 hours to discuss your case.",
    });
    
    // Redirect to thank you page or show success message
    setTimeout(() => {
      window.location.href = '/thank-you?service=elder-abuse-evaluation';
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Go Back Component */}
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${elderAbuseCaseEvaluationHero})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Elder Abuse Case Evaluation
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Free & Confidential</span>
          </div>
          
          <p className="text-xl text-gray-200">
            Get a free evaluation of your elder abuse case. All information is confidential and protected by attorney-client privilege.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-center">Elder Abuse Case Evaluation Form</CardTitle>
                <p className="text-center text-muted-foreground">
                  🔒 All information is confidential and protected by attorney-client privilege
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary" />
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Abuse Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold flex items-center">
                      <Heart className="w-5 h-5 mr-2 text-red-600" />
                      Abuse Information
                    </h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Abuse *</label>
                      <Select value={formData.abuseType} onValueChange={(value) => handleInputChange('abuseType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select type of abuse" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="physical-abuse">Physical Abuse</SelectItem>
                          <SelectItem value="neglect">Neglect</SelectItem>
                          <SelectItem value="financial-exploitation">Financial Exploitation</SelectItem>
                          <SelectItem value="emotional-abuse">Emotional Abuse</SelectItem>
                          <SelectItem value="sexual-abuse">Sexual Abuse</SelectItem>
                          <SelectItem value="abandonment">Abandonment</SelectItem>
                          <SelectItem value="isolation">Isolation</SelectItem>
                          <SelectItem value="medication-errors">Medication Errors</SelectItem>
                          <SelectItem value="multiple-types">Multiple Types</SelectItem>
                          <SelectItem value="not-sure">Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Facility/Location Name</label>
                        <Input
                          type="text"
                          value={formData.facilityName}
                          onChange={(e) => handleInputChange('facilityName', e.target.value)}
                          placeholder="Name of nursing home, assisted living, etc."
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Facility Type</label>
                        <Select value={formData.facilityType} onValueChange={(value) => handleInputChange('facilityType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select facility type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nursing-home">Nursing Home</SelectItem>
                            <SelectItem value="assisted-living">Assisted Living Facility</SelectItem>
                            <SelectItem value="memory-care">Memory Care Facility</SelectItem>
                            <SelectItem value="home-care">Home Care Agency</SelectItem>
                            <SelectItem value="hospital">Hospital</SelectItem>
                            <SelectItem value="private-home">Private Home</SelectItem>
                            <SelectItem value="adult-day-care">Adult Day Care</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">When did the abuse occur?</label>
                      <Input
                        type="date"
                        value={formData.abuseDate}
                        onChange={(e) => handleInputChange('abuseDate', e.target.value)}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Description of Abuse *</label>
                      <Textarea
                        value={formData.abuseDescription}
                        onChange={(e) => handleInputChange('abuseDescription', e.target.value)}
                        placeholder="Please describe what happened in detail..."
                        rows={4}
                        required
                      />
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Medical Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Injuries or Health Issues Resulting from Abuse</label>
                      <Textarea
                        value={formData.injuriesDescription}
                        onChange={(e) => handleInputChange('injuriesDescription', e.target.value)}
                        placeholder="Describe any injuries, health problems, or worsening of existing conditions..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Medical Treatment Received</label>
                      <Textarea
                        value={formData.medicalTreatment}
                        onChange={(e) => handleInputChange('medicalTreatment', e.target.value)}
                        placeholder="Hospital visits, doctor appointments, medications, therapy, etc..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Current Medical Needs</label>
                      <Textarea
                        value={formData.currentMedicalNeeds}
                        onChange={(e) => handleInputChange('currentMedicalNeeds', e.target.value)}
                        placeholder="Ongoing treatment needs, future medical care requirements..."
                        rows={3}
                      />
                    </div>
                  </div>

                  {/* Financial Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Financial Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Financial Losses (if applicable)</label>
                      <Textarea
                        value={formData.financialLosses}
                        onChange={(e) => handleInputChange('financialLosses', e.target.value)}
                        placeholder="Describe any financial losses, theft, fraud, or exploitation..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Estimated Amount Stolen/Lost (if known)</label>
                      <Input
                        type="text"
                        value={formData.stolenAmount}
                        onChange={(e) => handleInputChange('stolenAmount', e.target.value)}
                        placeholder="$0.00"
                      />
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Additional Information</h3>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Are there witnesses to the abuse?</label>
                      <Select value={formData.witnessesAvailable} onValueChange={(value) => handleInputChange('witnessesAvailable', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="maybe">Maybe/Not Sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Have you reported this to Adult Protective Services?</label>
                      <Select value={formData.reportedToAPS} onValueChange={(value) => handleInputChange('reportedToAPS', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="planning-to">Planning to</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Is law enforcement involved?</label>
                      <Select value={formData.lawEnforcementInvolved} onValueChange={(value) => handleInputChange('lawEnforcementInvolved', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="should-be">Should be involved</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Additional Information</label>
                      <Textarea
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        placeholder="Any other information you think might be relevant to your case..."
                        rows={4}
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', !!checked)}
                      />
                      <label htmlFor="consent" className="text-sm text-muted-foreground">
                        I understand that submitting this form does not create an attorney-client relationship. 
                        I consent to Trembach Law Firm contacting me to discuss my potential elder abuse case. 
                        All information provided is confidential and protected by attorney-client privilege.
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg"
                  >
                    Submit Case Evaluation
                  </Button>
                  
                  <p className="text-center text-sm text-muted-foreground">
                    We'll review your case and contact you within 24 hours
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="text-center">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.open('tel:8181234567')}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call (818) 123-4567
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => window.location.href = 'mailto:confidential@trembachlawfirm.com'}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Email Us
                </Button>
                
                <div className="text-center text-sm text-muted-foreground space-y-1">
                  <p>✓ Free Consultation</p>
                  <p>✓ No Fees Unless We Win</p>
                  <p>✓ Available 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElderAbuseCaseEvaluation;