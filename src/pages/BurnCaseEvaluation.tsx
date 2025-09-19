import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Phone, Star, Shield, Clock, Award } from 'lucide-react';
import { toast } from 'sonner';
import heroBackground from '@/assets/burn-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

const BurnCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    burnType: '',
    burnSeverity: '',
    location: '',
    description: '',
    medicalTreatment: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success("Thank you! Your case evaluation request has been submitted. We'll contact you within 24 hours.", {
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        incidentDate: '',
        burnType: '',
        burnSeverity: '',
        location: '',
        description: '',
        medicalTreatment: '',
        consent: false
      });
    } catch (error) {
      toast.error("There was an error submitting your request. Please try again or call us directly.", {
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Burn Injury Case Evaluation | California Burn Attorneys"
        description="Get a free evaluation of your California burn injury case. No fees unless we win. Former defense attorney fighting for burn victims."
        canonical="/burn-injuries-case-evaluation"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Burn Injury Case Evaluation
          </h1>
          <p className="text-xl mb-6">
            Get expert legal advice on your burn injury case - completely free
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-red-600">Tell Us About Your Burn Injury</CardTitle>
              </CardHeader>
              <CardContent>
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
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="incidentDate">When did the burn occur? *</Label>
                      <Input
                        id="incidentDate"
                        name="incidentDate"
                        type="date"
                        value={formData.incidentDate}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="burnType">Type of burn *</Label>
                      <Select value={formData.burnType} onValueChange={(value) => handleSelectChange('burnType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select burn type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="thermal">Thermal (Fire/Heat)</SelectItem>
                          <SelectItem value="chemical">Chemical</SelectItem>
                          <SelectItem value="electrical">Electrical</SelectItem>
                          <SelectItem value="scalding">Scalding</SelectItem>
                          <SelectItem value="radiation">Radiation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="burnSeverity">Burn severity *</Label>
                      <Select value={formData.burnSeverity} onValueChange={(value) => handleSelectChange('burnSeverity', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select severity" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="first-degree">First-degree</SelectItem>
                          <SelectItem value="second-degree">Second-degree</SelectItem>
                          <SelectItem value="third-degree">Third-degree</SelectItem>
                          <SelectItem value="unknown">Not sure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="location">Where did it happen? *</Label>
                      <Select value={formData.location} onValueChange={(value) => handleSelectChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="workplace">Workplace</SelectItem>
                          <SelectItem value="home">Home/Residence</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="store">Store/Business</SelectItem>
                          <SelectItem value="vehicle">Vehicle</SelectItem>
                          <SelectItem value="public">Public Property</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description">Describe what happened *</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      placeholder="Please provide details about how the burn injury occurred..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="medicalTreatment">What medical treatment have you received?</Label>
                    <Textarea
                      id="medicalTreatment"
                      name="medicalTreatment"
                      value={formData.medicalTreatment}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Please describe any medical treatment, hospital visits, ongoing care..."
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: checked as boolean }))}
                    />
                    <Label htmlFor="consent" className="text-sm">
                      I consent to being contacted by Trembach Law Firm regarding my case *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                    disabled={!formData.consent || isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Get Your Free Case Review →'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-red-600" />
                    Call Now: (818) 123-4567
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    Call Now for Free Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 mr-2 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Former Defense Attorney</h4>
                      <p className="text-sm text-muted-foreground">We know insurance company tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-5 h-5 mr-2 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">You pay nothing unless we win</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 mr-2 text-red-600 mt-1" />
                    <div>
                      <h4 className="font-semibold">Time is Critical</h4>
                      <p className="text-sm text-muted-foreground">California law limits time to file claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurnCaseEvaluation;