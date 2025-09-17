import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { 
  Phone, 
  Mail, 
  Scale, 
  Clock,
  Shield,
  AlertTriangle,
  FileText,
  Star,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/premises-case-evaluation-hero.jpg';

const PremisesLiabilityCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    incidentLocation: '',
    incidentType: '',
    injuryType: '',
    medicalTreatment: '',
    description: '',
    propertyOwner: '',
    witnesses: '',
    photos: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <SEO 
        title="Free Premises Liability Case Evaluation | California Slip & Fall Lawyers"
        description="Get a free case evaluation for your California premises liability claim. Experienced lawyers handling slip and fall, property negligence, and safety violation cases."
        canonical="https://trembachlaw.com/premises-liability-case-evaluation"
      />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          
          <GoBack />
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Premises Liability Case Evaluation
            </h1>
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Trusted by Injury Victims</span>
            </div>
            <p className="text-xl">
              Get expert legal advice about your property injury case - completely free
            </p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Section */}
            <div className="lg:col-span-2">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <Scale className="w-6 h-6 mr-2" />
                    Case Evaluation Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Please provide details about your premises liability incident. All information is confidential.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">First Name *</label>
                          <Input
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Last Name *</label>
                          <Input
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Email *</label>
                          <Input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Phone *</label>
                          <Input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Incident Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Incident Details</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Incident Date *</label>
                          <Input
                            type="date"
                            name="incidentDate"
                            value={formData.incidentDate}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Incident Type *</label>
                          <Select value={formData.incidentType} onValueChange={(value) => handleSelectChange('incidentType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select incident type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                              <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                              <SelectItem value="falling-object">Falling Object</SelectItem>
                              <SelectItem value="inadequate-lighting">Inadequate Lighting</SelectItem>
                              <SelectItem value="security-negligence">Security Negligence</SelectItem>
                              <SelectItem value="swimming-pool">Swimming Pool Accident</SelectItem>
                              <SelectItem value="dog-bite">Dog Bite/Animal Attack</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium mb-2">Incident Location *</label>
                          <Input
                            name="incidentLocation"
                            value={formData.incidentLocation}
                            onChange={handleInputChange}
                            placeholder="Store name, address, etc."
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Property Owner (if known)</label>
                          <Input
                            name="propertyOwner"
                            value={formData.propertyOwner}
                            onChange={handleInputChange}
                            placeholder="Business name, individual, etc."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Injury Type</label>
                          <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select injury type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="broken-bone">Broken Bone/Fracture</SelectItem>
                              <SelectItem value="back-injury">Back/Spine Injury</SelectItem>
                              <SelectItem value="head-injury">Head/Brain Injury</SelectItem>
                              <SelectItem value="cuts-lacerations">Cuts/Lacerations</SelectItem>
                              <SelectItem value="soft-tissue">Soft Tissue Injury</SelectItem>
                              <SelectItem value="burns">Burns</SelectItem>
                              <SelectItem value="multiple">Multiple Injuries</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Medical Treatment */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Medical Treatment</h3>
                      <div>
                        <label className="block text-sm font-medium mb-2">Have you received medical treatment?</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => handleSelectChange('medicalTreatment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select treatment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency Room</SelectItem>
                            <SelectItem value="hospital-admitted">Hospitalized</SelectItem>
                            <SelectItem value="doctor-visit">Doctor Visit</SelectItem>
                            <SelectItem value="urgent-care">Urgent Care</SelectItem>
                            <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                            <SelectItem value="no-treatment">No Treatment Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4">Additional Information</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Describe what happened *</label>
                          <Textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            placeholder="Please provide a detailed description of the incident..."
                            rows={4}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Were there witnesses?</label>
                          <Textarea
                            name="witnesses"
                            value={formData.witnesses}
                            onChange={handleInputChange}
                            placeholder="Names and contact information if available"
                            rows={2}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Do you have photos or documentation?</label>
                          <Textarea
                            name="photos"
                            value={formData.photos}
                            onChange={handleInputChange}
                            placeholder="Describe what photos/documents you have"
                            rows={2}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-muted p-4 rounded-lg">
                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleInputChange}
                          className="mr-3 mt-1"
                          required
                        />
                        <label className="text-sm">
                          I consent to being contacted by Trembach Law Firm regarding my case. I understand this consultation is free and there is no obligation. *
                        </label>
                      </div>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-red-600 hover:bg-red-700">
                      Get My Free Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Information */}
                <Card className="glass-card border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-primary">Need Immediate Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <Button className="w-full" onClick={() => window.location.href = 'tel:8181234567'}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <p className="text-sm text-muted-foreground text-center">
                        Available 24/7 for premises liability cases
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Key Benefits */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle>Why Choose Us?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Free consultation</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">No fees unless we win</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Experienced in premises liability</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                        <span className="text-sm">Maximum compensation</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Time Sensitive */}
                <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                  <CardHeader>
                    <CardTitle className="flex items-center text-yellow-700">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Time Sensitive
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-yellow-700">
                      California premises liability cases have a 2-year statute of limitations. Don't wait - protect your rights today.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PremisesLiabilityCaseEvaluation;