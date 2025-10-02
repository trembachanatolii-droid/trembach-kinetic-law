import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';

interface InjuryType {
  id: string;
  title: string;
}

const injuryTypes: InjuryType[] = [
  { id: 'car-accident', title: 'Car Accident' },
  { id: 'mesothelioma', title: 'Mesothelioma' },
  { id: 'silicosis', title: 'Silicosis' },
  { id: 'talc-talcum', title: 'Talc/Talcum' },
  { id: 'dog-bite', title: 'Dog Bite' },
  { id: 'product-liability', title: 'Product Liability' },
  { id: 'wrongful-death', title: 'Wrongful Death' },
  { id: 'other', title: 'Other' }
];

const EvaluationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    injuryType: '',
    incidentDate: '',
    cityCounty: '',
    description: '',
    smsConsent: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you within 2 hours.');
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="bg-muted/30 py-16">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get Your Free Case Review</h2>
          <p className="text-lg text-muted-foreground">
            Expert legal representation with no upfront costs. We only get paid when you win.
          </p>
        </div>

        <div className="bg-background rounded-lg shadow-lg p-8">
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

            <div>
              <Label htmlFor="injuryType">Type of Injury *</Label>
              <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select injury type" />
                </SelectTrigger>
                <SelectContent>
                  {injuryTypes.map(type => (
                    <SelectItem key={type.id} value={type.id}>
                      {type.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="incidentDate">Date of Injury/Accident/Diagnosis *</Label>
              <Input
                id="incidentDate"
                type="date"
                value={formData.incidentDate}
                onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="cityCounty">City/County Where Injury Occurred *</Label>
              <Input
                id="cityCounty"
                placeholder="e.g., Los Angeles, Orange County, San Francisco"
                value={formData.cityCounty}
                onChange={(e) => handleInputChange('cityCounty', e.target.value)}
                required
              />
            </div>

            <div>
              <Label htmlFor="description">Case Description *</Label>
              <Textarea
                id="description"
                placeholder="Briefly describe what happened, your injuries/diagnosis, and any medical treatment received..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                required
              />
            </div>

            <div className="flex items-start gap-3">
              <Checkbox 
                id="smsConsent" 
                checked={formData.smsConsent}
                onCheckedChange={(checked) => handleInputChange('smsConsent', checked as boolean)}
                required
              />
              <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                <label htmlFor="smsConsent" className="cursor-pointer">
                  By checking this box, you agree to receive TEXT messages from Trembach Law Firm related to your inquiry, follow-ups, and review requests at the phone number provided above. You may reply STOP to opt out at any time. For assistance, reply HELP. Messages and data rates may apply. Message frequency will vary. Please review our <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and terms of service.
                </label>
                <p>
                  This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms of Service</a> apply.
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Submit Free Case Review
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EvaluationForm;
