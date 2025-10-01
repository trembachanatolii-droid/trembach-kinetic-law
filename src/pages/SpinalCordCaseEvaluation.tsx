import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  Clock,
  Star,
  Shield,
  Award,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/spinal-cord-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';

import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

const SpinalCordCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    injuryLevel: '',
    injuryType: '',
    accidentType: '',
    medicalTreatment: '',
    currentSymptoms: '',
    accidentDescription: '',
    previousAttorney: '',
    insuranceClaim: '',
    consentToContact: false
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
    console.log('Spinal Cord Injury Case Evaluation Form:', formData);
    alert('Thank you for contacting Trembach Law Firm. We will review your spinal cord injury case immediately and contact you within 24 hours. For immediate assistance, please call (818) 123-4567.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Spinal Cord Injury Case Evaluation | California Paralysis Lawyers"
        description="Get your free spinal cord injury case evaluation from experienced California paralysis attorneys. Former defense attorney fighting for quadriplegia, paraplegia & SCI victims."
        canonical="/spinal-cord-case-evaluation"
      />
      
      
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Spinal Cord Injury Case Evaluation
          </h1>
          <p className="text-xl mb-6">
            Get expert legal evaluation for your paralysis case - No fees unless we win
          </p>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg">Former Defense Attorney</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl text-red-800">
                  Spinal Cord Injury Case Information
                </CardTitle>
                <p className="text-red-700 text-lg">
                  Complete this form to get your free case evaluation. All information is confidential.
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 text-base p-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="mt-1 text-base p-3"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1 text-base p-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="mt-1 text-base p-3"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Injury Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Spinal Cord Injury Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="accidentDate" className="text-base font-medium">Date of Injury *</Label>
                        <Input
                          id="accidentDate"
                          name="accidentDate"
                          type="date"
                          value={formData.accidentDate}
                          onChange={handleInputChange}
                          required
                          className="mt-1 text-base p-3"
                        />
                      </div>
                      <div>
                        <Label htmlFor="injuryLevel" className="text-base font-medium">Injury Level *</Label>
                        <Select value={formData.injuryLevel} onValueChange={(value) => handleSelectChange('injuryLevel', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select injury level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cervical-c1-4">Cervical C1-C4 (High Quadriplegia)</SelectItem>
                            <SelectItem value="cervical-c5-8">Cervical C5-C8 (Low Quadriplegia)</SelectItem>
                            <SelectItem value="thoracic-t1-6">Thoracic T1-T6 (High Paraplegia)</SelectItem>
                            <SelectItem value="thoracic-t7-12">Thoracic T7-T12 (Low Paraplegia)</SelectItem>
                            <SelectItem value="lumbar-l1-5">Lumbar L1-L5</SelectItem>
                            <SelectItem value="sacral-s1-5">Sacral S1-S5</SelectItem>
                            <SelectItem value="unknown">Unknown/Need Assessment</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="injuryType" className="text-base font-medium">Type of Injury *</Label>
                        <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="complete">Complete Spinal Cord Injury</SelectItem>
                            <SelectItem value="incomplete">Incomplete Spinal Cord Injury</SelectItem>
                            <SelectItem value="quadriplegia">Quadriplegia/Tetraplegia</SelectItem>
                            <SelectItem value="paraplegia">Paraplegia</SelectItem>
                            <SelectItem value="cauda-equina">Cauda Equina Syndrome</SelectItem>
                            <SelectItem value="central-cord">Central Cord Syndrome</SelectItem>
                            <SelectItem value="brown-sequard">Brown-Sequard Syndrome</SelectItem>
                            <SelectItem value="not-sure">Not Sure - Need Evaluation</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="accidentType" className="text-base font-medium">How did the injury occur? *</Label>
                        <Select value={formData.accidentType} onValueChange={(value) => handleSelectChange('accidentType', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select accident type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="car-accident">Car Accident</SelectItem>
                            <SelectItem value="motorcycle-accident">Motorcycle Accident</SelectItem>
                            <SelectItem value="truck-accident">Truck Accident</SelectItem>
                            <SelectItem value="bicycle-accident">Bicycle Accident</SelectItem>
                            <SelectItem value="pedestrian-accident">Pedestrian Accident</SelectItem>
                            <SelectItem value="fall">Fall (Slip/Trip/Height)</SelectItem>
                            <SelectItem value="construction-accident">Construction Accident</SelectItem>
                            <SelectItem value="workplace-accident">Workplace Accident</SelectItem>
                            <SelectItem value="sports-injury">Sports/Recreation Injury</SelectItem>
                            <SelectItem value="medical-malpractice">Medical Malpractice</SelectItem>
                            <SelectItem value="violence">Violence/Assault</SelectItem>
                            <SelectItem value="diving-accident">Diving Accident</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Medical Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Medical Information</h3>
                    
                    <div>
                      <Label htmlFor="medicalTreatment" className="text-base font-medium">Medical Treatment Received</Label>
                      <Textarea
                        id="medicalTreatment"
                        name="medicalTreatment"
                        value={formData.medicalTreatment}
                        onChange={handleInputChange}
                        placeholder="Describe medical treatment, surgeries, rehabilitation, etc."
                        rows={3}
                        className="mt-1 text-base p-3"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="currentSymptoms" className="text-base font-medium">Current Symptoms and Limitations</Label>
                      <Textarea
                        id="currentSymptoms"
                        name="currentSymptoms"
                        value={formData.currentSymptoms}
                        onChange={handleInputChange}
                        placeholder="Describe current symptoms, pain levels, functional limitations, etc."
                        rows={3}
                        className="mt-1 text-base p-3"
                      />
                    </div>
                  </div>

                  {/* Accident Details */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Accident Details</h3>
                    
                    <div>
                      <Label htmlFor="accidentDescription" className="text-base font-medium">Describe how the accident happened</Label>
                      <Textarea
                        id="accidentDescription"
                        name="accidentDescription"
                        value={formData.accidentDescription}
                        onChange={handleInputChange}
                        placeholder="Provide details about the accident, location, circumstances, etc."
                        rows={4}
                        className="mt-1 text-base p-3"
                      />
                    </div>
                  </div>

                  {/* Legal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold text-foreground">Legal Status</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="previousAttorney" className="text-base font-medium">Have you consulted with another attorney?</Label>
                        <Select value={formData.previousAttorney} onValueChange={(value) => handleSelectChange('previousAttorney', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="yes-currently-have">Yes, I currently have an attorney</SelectItem>
                            <SelectItem value="yes-not-satisfied">Yes, but not satisfied with them</SelectItem>
                            <SelectItem value="yes-declined">Yes, but they declined my case</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="insuranceClaim" className="text-base font-medium">Insurance Claim Status</Label>
                        <Select value={formData.insuranceClaim} onValueChange={(value) => handleSelectChange('insuranceClaim', value)}>
                          <SelectTrigger className="mt-1 text-base p-3">
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-filed">Have not filed a claim</SelectItem>
                            <SelectItem value="filed-pending">Filed claim - pending</SelectItem>
                            <SelectItem value="denied">Claim was denied</SelectItem>
                            <SelectItem value="low-offer">Received inadequate offer</SelectItem>
                            <SelectItem value="settled">Already settled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <input
                        type="checkbox"
                        id="consentToContact"
                        name="consentToContact"
                        checked={formData.consentToContact}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                      <Label htmlFor="consentToContact" className="text-base leading-relaxed">
                        I consent to be contacted by Trembach Law Firm regarding my spinal cord injury case. I understand this is not a retainer agreement and there are no fees unless we win. *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg"
                  >
                    Submit Free Case Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Contact Card */}
              <Card className="border-2 border-primary shadow-lg">
                <CardHeader className="bg-primary text-primary-foreground text-center">
                  <CardTitle className="text-xl">Immediate Help Available</CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center space-y-4">
                  <div>
                    <Phone className="w-12 h-12 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold text-lg mb-2">Call Now</h3>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-base"
                      onClick={() => window.open('tel:8181234567')}
                    >
                      (818) 123-4567
                    </Button>
                  </div>
                  
                  <div className="text-center pt-4 border-t">
                    <p className="text-base font-medium text-primary">Available 24/7</p>
                    <p className="text-base text-muted-foreground">Free Consultation</p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border border-border">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Our Firm?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-base">Former Defense Attorney</h4>
                      <p className="text-base text-muted-foreground">Insider knowledge of insurance tactics</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-base">Spinal Cord Specialists</h4>
                      <p className="text-base text-muted-foreground">Focus on catastrophic injury cases</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-base">No Fees Unless We Win</h4>
                      <p className="text-base text-muted-foreground">Contingency fee arrangement</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Urgent Notice */}
              <Card className="border-2 border-red-300 bg-red-50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg text-red-800 mb-2">Time Limits Apply</h3>
                      <p className="text-base text-red-700 leading-relaxed">
                        California law imposes strict deadlines for spinal cord injury claims. Evidence disappears quickly. Don't delay - protect your rights now.
                      </p>
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

export default SpinalCordCaseEvaluation;