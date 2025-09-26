import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Phone, 
  Star,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/medical-malpractice-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import Navigation from '@/components/Navigation';
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
  };

  return (
    <div className="medical-malpractice-page min-h-screen bg-background">
      <SEO 
        title="Free Medical Malpractice Case Evaluation | California Attorneys | Trembach Law"
        description="Get your medical malpractice case evaluated by expert California attorneys. Free consultation for misdiagnosis, surgical errors, birth injuries, and all medical negligence cases."
      />
      
      <Navigation />

      {/* Hero Section */}
      <section 
        className="medical-malpractice-page hero-section relative h-[400px] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="hero-content relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Free Medical Malpractice Case Evaluation
          </h1>
          <div className="flex items-center justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-lg text-white">Trusted by Medical Malpractice Victims</span>
          </div>
          <p className="text-xl text-white">
            Expert legal advice about your medical malpractice case - completely free
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Form Section */}
          <div className="lg:col-span-2">
            <ThreeDVisualEffects>
              <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Free Medical Malpractice Case Evaluation</h3>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                  <p className="text-slate-700 text-lg leading-relaxed">Expert evaluation for medical malpractice cases throughout California</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-800 text-base font-medium">First Name *</label>
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-base"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-800 text-base font-medium">Last Name *</label>
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-base"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-slate-800 text-base font-medium">Email *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-base"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-800 text-base font-medium">Phone *</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="h-12 text-base"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  {/* Medical Error Details */}
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Date of Medical Error *</label>
                        <Input 
                          type="date"
                          name="incidentDate"
                          value={formData.incidentDate}
                          onChange={handleInputChange}
                          required
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Type of Medical Error *</label>
                        <Select onValueChange={(value) => handleSelectChange('typeOfError', value)}>
                          <SelectTrigger className="h-12 text-base">
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

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Healthcare Provider/Doctor Name *</label>
                        <Input 
                          name="healthcareProvider"
                          value={formData.healthcareProvider}
                          onChange={handleInputChange}
                          placeholder="Dr. Smith, ABC Medical Center"
                          required
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-slate-800 text-base font-medium">Location/Facility *</label>
                        <Input 
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Hospital name, clinic, city"
                          required
                          className="h-12 text-base"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Case Description */}
                  <div className="space-y-4">
                    <label className="text-slate-800 text-base font-medium">
                      Please describe your medical malpractice case in detail *
                    </label>
                    <Textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Please provide details about what happened, what treatment you received, what went wrong, your injuries, and any complications that occurred..."
                      rows={6}
                      className=""
                      required
                    />
                  </div>

                  {/* Injuries */}
                  <div className="space-y-4">
                    <label className="text-slate-800 text-base font-medium">
                      Injuries and harm suffered
                    </label>
                    <Textarea 
                      name="injuries"
                      value={formData.injuries}
                      onChange={handleInputChange}
                      placeholder="Describe your injuries, complications, worsened condition, or harm caused by the medical error..."
                      rows={4}
                      className=""
                    />
                  </div>

                  {/* Current Condition */}
                  <div className="space-y-4">
                    <label className="text-slate-800 text-base font-medium">
                      Current medical condition and treatment
                    </label>
                    <Textarea 
                      name="currentCondition"
                      value={formData.currentCondition}
                      onChange={handleInputChange}
                      placeholder="How are you now? Ongoing symptoms, disabilities, limitations, additional treatment needed..."
                      rows={3}
                      className=""
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, consent: !!checked }))}
                      className="mt-1"
                    />
                    <label htmlFor="consent" className="text-slate-700 text-sm leading-relaxed">
                      I consent to being contacted by Trembach Law Firm regarding my medical malpractice case. I understand this consultation is free and there is no obligation. *
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-enhanced py-4 text-lg"
                    disabled={!formData.consent}
                  >
                    Get My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </ThreeDVisualEffects>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* Contact Card */}
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
                      Available 24/7 for medical malpractice cases
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Time Warning */}
              <Card className="glass-card border-yellow-500/20 bg-yellow-50">
                <CardHeader>
                  <CardTitle className="flex items-center text-yellow-700">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    Time Sensitive
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-yellow-700">
                    California medical malpractice cases have strict statute of limitations. Don't wait - protect your rights today.
                  </p>
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