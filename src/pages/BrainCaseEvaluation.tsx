import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CheckCircle, Phone, Mail, Shield, Clock, Award } from 'lucide-react';
import heroBackground from '@/assets/brain-case-evaluation-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const BrainCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    injuryType: '',
    description: '',
    previousAttorney: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your submission. We will contact you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Brain Injury Case Evaluation | California TBI Lawyers"
        description="Get a free evaluation of your brain injury case from experienced California attorneys. No fees unless we win your TBI compensation claim."
        canonical="/brain-case-evaluation"
      />

      <GoBack />

      {/* Hero Section */}
      <section
        className="relative h-[50vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Free Brain Injury Case Evaluation
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Get expert legal analysis of your TBI case. Our former defense attorneys know how to maximize your compensation.
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <ThreeDVisualEffects>
              <Card className="p-8 premium-form-container interactive-card">
                <h2 className="text-3xl font-bold mb-6 text-blue-600 font-display">
                  Tell Us About Your Brain Injury
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 interactive-card"
                      />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1 interactive-card"
                      />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 interactive-card"
                      />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1 interactive-card"
                      />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="incidentDate">Date of Accident</Label>
                      <Input
                        id="incidentDate"
                        name="incidentDate"
                        type="date"
                        value={formData.incidentDate}
                        onChange={handleInputChange}
                        className="mt-1 interactive-card"
                      />
                  </div>
                  <div>
                    <Label htmlFor="injuryType">Type of Brain Injury</Label>
                    <Select onValueChange={(value) => handleSelectChange('injuryType', value)}>
                      <SelectTrigger className="mt-1 interactive-card">
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="concussion">Concussion</SelectItem>
                        <SelectItem value="tbi-mild">Mild TBI</SelectItem>
                        <SelectItem value="tbi-moderate">Moderate TBI</SelectItem>
                        <SelectItem value="tbi-severe">Severe TBI</SelectItem>
                        <SelectItem value="anoxic">Anoxic Brain Injury</SelectItem>
                        <SelectItem value="diffuse-axonal">Diffuse Axonal Injury</SelectItem>
                        <SelectItem value="penetrating">Penetrating Brain Injury</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Describe Your Accident and Injuries *</Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="mt-1 interactive-card"
                    placeholder="Please describe how your brain injury occurred, current symptoms, and how it has affected your daily life..."
                  />
                </div>

                <div>
                  <Label htmlFor="previousAttorney">Have you consulted with another attorney?</Label>
                  <Select onValueChange={(value) => handleSelectChange('previousAttorney', value)}>
                    <SelectTrigger className="mt-1 interactive-card">
                      <SelectValue placeholder="Select one" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="no">No</SelectItem>
                      <SelectItem value="yes-retained">Yes, I have retained an attorney</SelectItem>
                      <SelectItem value="yes-consulted">Yes, I consulted but didn't retain</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleInputChange}
                    required
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed">
                    I consent to be contacted by Trembach Law Firm regarding my potential case. 
                    I understand that submitting this form does not create an attorney-client relationship.
                  </Label>
                </div>

                <Button type="submit" className="w-full btn-enhanced py-4 text-lg">
                  Get My Free Case Evaluation
                </Button>
              </form>
            </Card>
            </ThreeDVisualEffects>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Contact Info */}
              <Card className="p-6 text-center bg-gradient-to-b from-red-600 to-red-700 text-white">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Call Now</h3>
                <p className="text-xl mb-4">(818) 123-4567</p>
                <p className="text-white/90">24/7 Free Consultation</p>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-foreground">Why Choose Our Firm?</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Former defense attorney insight</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">No fees unless we win</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">24/7 case consultation</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">Maximum compensation focus</span>
                  </div>
                </div>
              </Card>

              {/* Time Sensitive */}
              <Card className="p-6 bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-yellow-600 mr-2" />
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200">Time Sensitive</h3>
                </div>
                <p className="text-yellow-800 dark:text-yellow-200 text-sm leading-relaxed">
                  California's statute of limitations gives you only 2 years to file your brain injury claim. 
                  Don't wait - evidence disappears and witnesses' memories fade.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainCaseEvaluation;