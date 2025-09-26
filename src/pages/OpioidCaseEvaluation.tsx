import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Phone, Mail, Shield, Star, FileText, Clock } from 'lucide-react';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const OpioidCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
    medication: '',
    prescribingDoctor: '',
    pharmacy: '',
    startDate: '',
    endDate: '',
    treatmentHistory: '',
    currentStatus: '',
    damages: '',
    additionalInfo: ''
  });

  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(formRef.current?.querySelectorAll('.form-section'),
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.6, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for submitting your opioid case evaluation. We will review your information and contact you within 24 hours to discuss your case.');
  };

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-900 to-red-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Opioid Case Evaluation
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Free & Confidential</span>
          </div>
          <p className="text-xl opacity-90">
            Get a comprehensive evaluation of your opioid litigation case from experienced attorneys
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div ref={formRef}>
          
          {/* Introduction */}
          <div className="form-section mb-12">
            <Card className="p-8 bg-blue-50 border-blue-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Your Information is Protected</h2>
                <div className="flex items-center justify-center space-x-6 text-blue-700">
                  <div className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    <span>100% Confidential</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    <span>No Fees Unless We Win</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>24-Hour Response</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="form-section mb-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name *</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
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
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Case Details */}
          <div className="form-section mb-8">
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-red-600">Case Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Case Type *</label>
                  <Select value={formData.caseType} onValueChange={(value) => handleInputChange('caseType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select case type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal-addiction">Personal Opioid Addiction</SelectItem>
                      <SelectItem value="wrongful-death">Wrongful Death - Overdose</SelectItem>
                      <SelectItem value="neonatal-abstinence">Neonatal Abstinence Syndrome</SelectItem>
                      <SelectItem value="family-member">Family Member Addiction</SelectItem>
                      <SelectItem value="other">Other Opioid Harm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Opioid Medication</label>
                    <Input
                      value={formData.medication}
                      onChange={(e) => handleInputChange('medication', e.target.value)}
                      placeholder="e.g., OxyContin, Percocet, Vicodin"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Prescribing Doctor</label>
                    <Input
                      value={formData.prescribingDoctor}
                      onChange={(e) => handleInputChange('prescribingDoctor', e.target.value)}
                      placeholder="Doctor's name (if known)"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description of Your Situation</label>
                  <Textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={6}
                    placeholder="Please describe your opioid addiction, treatment history, and how it has affected your life..."
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submit Button */}
          <div className="form-section text-center">
            <Button
              onClick={handleSubmit}
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-4 text-lg"
            >
              SUBMIT MY CASE EVALUATION
            </Button>
            
            <p className="mt-4 text-sm text-muted-foreground">
              By submitting this form, you agree to our terms and acknowledge that all information is confidential and protected by attorney-client privilege.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpioidCaseEvaluation;