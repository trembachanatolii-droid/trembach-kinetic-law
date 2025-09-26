import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Star } from 'lucide-react';
import SEO from '@/components/SEO';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import heroBackground from '@/assets/benzene-case-evaluation-hero.jpg';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const BenzeneCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    exposureLocation: '',
    bloodCancerType: '',
    diagnosisDate: '',
    exposureDuration: '',
    symptoms: '',
    additionalInfo: ''
  });

  // Add scroll restoration
  useScrollRestoration();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting Trembach Law Firm! We will review your benzene exposure case and contact you within 24 hours.');
  };

  return (
    <>
      <SEO
        title="Free Benzene Exposure Case Evaluation | Blood Cancer Lawsuit Consultation"
        description="Get a free benzene exposure case evaluation from experienced California attorneys. Leukemia, lymphoma, blood cancer claims. No fees unless we win."
        canonical="/benzene-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center" 
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Former Defense Attorney Now Fighting For You</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Benzene Exposure Case Evaluation</h1>
            <p className="text-xl">Get your free consultation for benzene blood cancer claims</p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-12">
          
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-red-600">
                  <Phone className="w-6 h-6 mr-2" />
                  Call Now
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Speak directly with an attorney</p>
                <Button 
                  className="w-full bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  (818) 123-4567
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Available 24/7</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-blue-600">
                  <Mail className="w-6 h-6 mr-2" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Detailed case review by email</p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Benzene Exposure Case Inquiry'}
                >
                  Send Email
                </Button>
                <p className="text-xs text-muted-foreground mt-2">Response within 2 hours</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow border-2 border-green-200">
              <CardHeader>
                <CardTitle className="flex items-center justify-center text-green-600">
                  <span className="text-2xl mr-2">📝</span>
                  Online Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Complete evaluation below</p>
                <p className="text-green-600 font-semibold">Recommended</p>
                <p className="text-xs text-muted-foreground mt-2">Most comprehensive option</p>
              </CardContent>
            </Card>
          </div>

          {/* Case Evaluation Form */}
          <ThreeDVisualEffects>
            <div className="premium-form-container interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Benzene Case Evaluation</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for benzene exposure cases throughout California</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-base font-medium">First Name *</label>
                    <Input
                      value={formData.firstName || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      required
                      className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-base font-medium">Last Name *</label>
                    <Input
                      value={formData.lastName || ''}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      required
                      className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-white text-base font-medium">Email *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-white text-base font-medium">Phone *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      required
                      className="bg-white/10 border-blue-300/40 text-white placeholder:text-blue-200/70 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 h-12 text-base"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Exposure Information */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Benzene Exposure Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Primary Exposure Location *</label>
                      <Input
                        placeholder="Oil refinery, gas station, chemical plant, etc."
                        value={formData.exposureLocation}
                        onChange={(e) => setFormData(prev => ({ ...prev, exposureLocation: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Exposure Duration</label>
                      <Select value={formData.exposureDuration} onValueChange={(value) => setFormData(prev => ({ ...prev, exposureDuration: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="How long were you exposed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                          <SelectItem value="1-5">1-5 years</SelectItem>
                          <SelectItem value="5-10">5-10 years</SelectItem>
                          <SelectItem value="10-20">10-20 years</SelectItem>
                          <SelectItem value="more-than-20">More than 20 years</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Medical Information */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Medical Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Blood Cancer Type *</label>
                      <Select value={formData.bloodCancerType} onValueChange={(value) => setFormData(prev => ({ ...prev, bloodCancerType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your diagnosis..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="aml">Acute Myeloid Leukemia (AML)</SelectItem>
                          <SelectItem value="all">Acute Lymphoblastic Leukemia (ALL)</SelectItem>
                          <SelectItem value="cll">Chronic Lymphocytic Leukemia (CLL)</SelectItem>
                          <SelectItem value="cml">Chronic Myeloid Leukemia (CML)</SelectItem>
                          <SelectItem value="multiple-myeloma">Multiple Myeloma</SelectItem>
                          <SelectItem value="non-hodgkin">Non-Hodgkin Lymphoma</SelectItem>
                          <SelectItem value="hodgkin">Hodgkin Lymphoma</SelectItem>
                          <SelectItem value="mds">Myelodysplastic Syndromes (MDS)</SelectItem>
                          <SelectItem value="aplastic-anemia">Aplastic Anemia</SelectItem>
                          <SelectItem value="other">Other Blood Cancer</SelectItem>
                          <SelectItem value="none">No diagnosis yet</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Diagnosis Date</label>
                      <Input
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-2 text-foreground">Current Symptoms</label>
                      <Textarea
                        placeholder="Describe any symptoms you're experiencing (fatigue, frequent infections, bruising, etc.)"
                        value={formData.symptoms}
                        onChange={(e) => setFormData(prev => ({ ...prev, symptoms: e.target.value }))}
                        rows={3}
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Additional Information</h3>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Tell us more about your case</label>
                    <Textarea
                      placeholder="Include any additional details about your exposure, work history, or questions you have..."
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Legal Disclaimer */}
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <p className="text-sm text-amber-800">
                    <strong>Legal Disclaimer:</strong> By submitting this form, you are not creating an attorney-client relationship. 
                    Information submitted is confidential and will be reviewed by our legal team. We will contact you within 24 hours 
                    to discuss your case. No fees are charged unless we successfully recover compensation for you.
                  </p>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    className="w-full btn-enhanced py-4 text-lg"
                  >
                    Get My Free Case Evaluation
                  </Button>
                </div>
              </form>
            </div>
          </ThreeDVisualEffects>

          {/* Benefits Section */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 text-2xl">✓</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">No Upfront Costs</h3>
                <p className="text-sm text-muted-foreground">We work on contingency - no fees unless we win your case</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 text-2xl">🛡️</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Former Defense Attorney</h3>
                <p className="text-sm text-muted-foreground">Insider knowledge of how companies defend these cases</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold mb-2 text-foreground">Fast Response</h3>
                <p className="text-sm text-muted-foreground">We respond to all inquiries within 24 hours</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default BenzeneCaseEvaluation;