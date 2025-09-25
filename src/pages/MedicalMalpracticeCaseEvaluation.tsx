import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Phone, 
  Mail, 
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle,
  Scale,
  Building,
  Calendar,
  FileText,
  Stethoscope,
  Activity
} from 'lucide-react';
import heroBackground from '@/assets/medical-malpractice-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
import GoBack from '@/components/GoBack';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  incidentDate: string;
  typeOfError: string;
  healthcareProvider: string;
  location: string;
  description: string;
  injuries: string;
  medicalTreatment: string;
  currentCondition: string;
  witness: string;
  consent: boolean;
}

const MedicalMalpracticeCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    incidentDate: '',
    typeOfError: '',
    healthcareProvider: '',
    location: '',
    description: '',
    injuries: '',
    medicalTreatment: '',
    currentCondition: '',
    witness: '',
    consent: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Medical Malpractice Case Evaluation Form submitted:', formData);
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Medical Malpractice Case Evaluation | California Attorneys | Trembach Law"
        description="Get your medical malpractice case evaluated by expert California attorneys. Free consultation for misdiagnosis, surgical errors, birth injuries, and all medical negligence cases."
      />
      
      <Navigation />
      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Medical Malpractice Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl">
            Free Case Review by Expert California Medical Malpractice Attorneys
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-4 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-primary" />
                  Medical Malpractice Case Details
                </CardTitle>
                <p className="text-lg text-muted-foreground">
                  Please provide detailed information about your medical malpractice case. All information is confidential and protected by attorney-client privilege.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-8">
                  
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email Address *</label>
                        <Input 
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone Number *</label>
                        <Input 
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Medical Error Details */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Stethoscope className="h-5 w-5 text-primary" />
                      Medical Error Details
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Date of Medical Error *</label>
                        <Input 
                          type="date"
                          name="incidentDate"
                          value={formData.incidentDate}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Type of Medical Error *</label>
                        <Select onValueChange={(value) => handleSelectChange('typeOfError', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select type of medical error" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="misdiagnosis">Misdiagnosis</SelectItem>
                            <SelectItem value="delayed-diagnosis">Delayed Diagnosis</SelectItem>
                            <SelectItem value="surgical-error">Surgical Error</SelectItem>
                            <SelectItem value="anesthesia-error">Anesthesia Error</SelectItem>
                            <SelectItem value="medication-error">Medication Error</SelectItem>
                            <SelectItem value="birth-injury">Birth Injury</SelectItem>
                            <SelectItem value="emergency-room-error">Emergency Room Error</SelectItem>
                            <SelectItem value="nursing-error">Nursing Error</SelectItem>
                            <SelectItem value="hospital-infection">Hospital-Acquired Infection</SelectItem>
                            <SelectItem value="failure-to-treat">Failure to Treat</SelectItem>
                            <SelectItem value="lack-of-informed-consent">Lack of Informed Consent</SelectItem>
                            <SelectItem value="radiology-error">Radiology/Imaging Error</SelectItem>
                            <SelectItem value="pathology-error">Pathology Error</SelectItem>
                            <SelectItem value="other">Other Medical Error</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Healthcare Provider/Doctor Name *</label>
                        <Input 
                          name="healthcareProvider"
                          value={formData.healthcareProvider}
                          onChange={handleInputChange}
                          placeholder="Dr. Smith, ABC Medical Center"
                          required
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Location/Facility *</label>
                        <Input 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Hospital name, clinic, city"
                          required
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Incident Description */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Activity className="h-5 w-5 text-primary" />
                      Medical Error Description
                    </h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Detailed Description of Medical Error *
                      </label>
                      <Textarea 
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        placeholder="Please describe what happened, what treatment you received, what went wrong, and any complications that occurred..."
                        required
                        rows={6}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Injuries and Treatment */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-primary" />
                      Injuries and Medical Treatment
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Injuries/Harm Suffered *
                        </label>
                        <Textarea 
                          name="injuries"
                          value={formData.injuries}
                          onChange={handleInputChange}
                          placeholder="Describe your injuries, complications, worsened condition, or harm caused by the medical error..."
                          required
                          rows={4}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Additional Medical Treatment Required
                        </label>
                        <Textarea 
                          name="medicalTreatment"
                          value={formData.medicalTreatment}
                          onChange={handleInputChange}
                          placeholder="Additional surgeries, medications, therapy, ongoing treatment..."
                          rows={3}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Current Medical Condition
                        </label>
                        <Textarea 
                          name="currentCondition"
                          value={formData.currentCondition}
                          onChange={handleInputChange}
                          placeholder="How are you now? Ongoing symptoms, disabilities, limitations..."
                          rows={3}
                          className="w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Witnesses */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Witnesses</h3>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Witness Information (if any)
                      </label>
                      <Textarea 
                        name="witness"
                        value={formData.witness}
                        onChange={handleInputChange}
                        placeholder="Names and contact information of any witnesses to the medical error..."
                        rows={3}
                        className="w-full"
                      />
                    </div>
                  </div>

                  {/* Consent */}
                  <div className="flex items-start space-x-3 p-4 bg-muted rounded-lg">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                    />
                    <label htmlFor="consent" className="text-sm leading-relaxed">
                      I consent to be contacted by Trembach Law Firm regarding my potential medical malpractice case. I understand that submitting this form does not create an attorney-client relationship and that the information I provide will be kept confidential. I agree to receive communications via phone, email, or text message at the contact information provided.
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    disabled={!formData.consent}
                  >
                    <Scale className="mr-2 h-5 w-5" />
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
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Phone className="h-5 w-5 text-primary" />
                    Emergency Legal Line
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <Button size="lg" className="w-full text-lg" asChild>
                      <a href="tel:8181234567">
                        <Phone className="mr-2 h-5 w-5" />
                        Call (818) 123-4567
                      </a>
                    </Button>
                    <p className="text-sm text-muted-foreground mt-2">Available 24/7 for Medical Emergencies</p>
                  </div>
                  
                  <div className="text-center">
                    <Button variant="outline" size="lg" className="w-full" asChild>
                      <a href="mailto:info@trembachlawfirm.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Why Choose Our Firm?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">No fees unless we win your case</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Medical experts on our team</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Proven MICRA expertise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">24/7 legal support available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Maximum compensation pursuit</span>
                  </div>
                </CardContent>
              </Card>

              {/* Time Warning */}
              <Card className="bg-red-50 border-red-200 p-6">
                <CardHeader>
                  <CardTitle className="text-xl text-red-700 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Time-Sensitive Warning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-600 text-sm leading-relaxed">
                    California medical malpractice cases have strict deadlines. You generally have 3 years from injury or 1 year from discovery. Evidence disappears quickly - surveillance footage, medical records, and witness memories fade. Contact us immediately to protect your rights.
                  </p>
                </CardContent>
              </Card>

              {/* Related Services */}
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl">Additional Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/medical-malpractice-compensation-calculator">
                      <Scale className="mr-2 h-4 w-4" />
                      Compensation Calculator
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/medical-malpractice-medical-guidance">
                      <Stethoscope className="mr-2 h-4 w-4" />
                      Medical Guidance
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/practice-areas/medical-malpractice">
                      <Building className="mr-2 h-4 w-4" />
                      Medical Malpractice Info
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MedicalMalpracticeCaseEvaluation;