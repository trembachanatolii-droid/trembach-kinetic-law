import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowLeft, 
  Phone, 
  Mail, 
  Clock,
  Shield,
  Award,
  Star,
  Bike,
  AlertTriangle,
  FileText,
  Users,
  CheckCircle
} from 'lucide-react';
import heroImage from '@/assets/motorcycle-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';

const MotorcycleCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    accidentLocation: '',
    motorcycleType: '',
    injuryType: '',
    medicalTreatment: '',
    insuranceStatus: '',
    policeReport: '',
    faultDetermination: '',
    priorAccidents: '',
    description: ''
  });

  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Redirect to thank you page or show success message
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Personal Information</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">First Name *</label>
                <Input
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Last Name *</label>
                <Input
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Phone Number *</label>
                <Input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Email Address *</label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Accident Details</h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Accident Date *</label>
                <Input
                  type="date"
                  value={formData.accidentDate}
                  onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Accident Location *</label>
                <Input
                  value={formData.accidentLocation}
                  onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                  placeholder="City, intersection, or highway"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Type of Motorcycle *</label>
                <Select value={formData.motorcycleType} onValueChange={(value) => handleInputChange('motorcycleType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select motorcycle type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="street">Street/Standard</SelectItem>
                    <SelectItem value="sport">Sport Bike</SelectItem>
                    <SelectItem value="cruiser">Cruiser</SelectItem>
                    <SelectItem value="touring">Touring</SelectItem>
                    <SelectItem value="adventure">Adventure/Dual Sport</SelectItem>
                    <SelectItem value="dirt">Dirt Bike</SelectItem>
                    <SelectItem value="scooter">Scooter</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Police Report Filed? *</label>
                <Select value={formData.policeReport} onValueChange={(value) => handleInputChange('policeReport', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Yes, report was filed</SelectItem>
                    <SelectItem value="no">No report filed</SelectItem>
                    <SelectItem value="unknown">I'm not sure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Who was at fault according to the police or insurance? *</label>
              <Select value={formData.faultDetermination} onValueChange={(value) => handleInputChange('faultDetermination', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select fault determination" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="other-driver">The other driver was at fault</SelectItem>
                  <SelectItem value="me">I was determined to be at fault</SelectItem>
                  <SelectItem value="shared">Shared fault</SelectItem>
                  <SelectItem value="unknown">Not yet determined</SelectItem>
                  <SelectItem value="disputed">Fault is disputed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Injuries & Medical Treatment</h3>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Primary Injury Type *</label>
              <Select value={formData.injuryType} onValueChange={(value) => handleInputChange('injuryType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select primary injury type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                  <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                  <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                  <SelectItem value="road-rash">Road Rash/Abrasions</SelectItem>
                  <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                  <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                  <SelectItem value="burns">Burns</SelectItem>
                  <SelectItem value="amputation">Amputation/Limb Loss</SelectItem>
                  <SelectItem value="multiple">Multiple Injuries</SelectItem>
                  <SelectItem value="none">No significant injuries</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Medical Treatment Received *</label>
              <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select treatment level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="emergency-room">Emergency Room</SelectItem>
                  <SelectItem value="hospitalized">Hospitalized</SelectItem>
                  <SelectItem value="surgery">Surgery Required</SelectItem>
                  <SelectItem value="ongoing-treatment">Ongoing Medical Treatment</SelectItem>
                  <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                  <SelectItem value="doctor-visit">Doctor Visit Only</SelectItem>
                  <SelectItem value="urgent-care">Urgent Care</SelectItem>
                  <SelectItem value="no-treatment">No Medical Treatment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Insurance Status *</label>
              <Select value={formData.insuranceStatus} onValueChange={(value) => handleInputChange('insuranceStatus', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select insurance status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="both-insured">Both parties have insurance</SelectItem>
                  <SelectItem value="other-uninsured">Other driver uninsured</SelectItem>
                  <SelectItem value="i-uninsured">I don't have insurance</SelectItem>
                  <SelectItem value="unknown">Unknown/Investigating</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Previous Motorcycle Accidents? *</label>
              <Select value={formData.priorAccidents} onValueChange={(value) => handleInputChange('priorAccidents', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No previous accidents</SelectItem>
                  <SelectItem value="one">One previous accident</SelectItem>
                  <SelectItem value="multiple">Multiple previous accidents</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center mb-6">Additional Details</h3>
            
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">
                Please describe how the accident happened and any additional details:
              </label>
              <Textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                placeholder="Describe the accident circumstances, weather conditions, road conditions, other driver's behavior, etc."
                rows={6}
                className="min-h-[120px]"
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="text-lg font-semibold mb-4">What Happens Next?</h4>
              <div className="space-y-3">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-muted-foreground">Free case review within 24 hours</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-muted-foreground">Attorney consultation to discuss your options</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-muted-foreground">Investigation begins if you choose to proceed</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                  <span className="text-muted-foreground">No fees unless we win your case</span>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="consent" className="mt-1" />
              <label htmlFor="consent" className="text-sm text-muted-foreground leading-tight">
                I hereby expressly consent to receive communications including calls, texts, emails, and/or automated messages. 
                By submitting this form, I agree to the Terms & acknowledge the Privacy Policy.
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Free Motorcycle Accident Case Evaluation | California Motorcycle Lawyers"
        description="Get a free case evaluation for your California motorcycle accident. Experienced attorneys fighting anti-rider bias. No fees unless we win."
        canonical="/motorcycle-case-evaluation"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[300px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Go Back Button - positioned properly */}
        <div className="absolute top-6 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Free Motorcycle Accident Case Evaluation
          </h1>
          <p className="text-xl">
            Get expert legal advice for your California motorcycle accident case
          </p>
        </div>
      </section>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium">Step {step} of {totalSteps}</span>
            <span className="text-sm text-muted-foreground">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-red-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="p-8">
                <form onSubmit={handleSubmit}>
                  {renderStepContent()}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button 
                      type="button" 
                      variant="outline" 
                      onClick={prevStep}
                      disabled={step === 1}
                    >
                      Previous
                    </Button>
                    
                    {step < totalSteps ? (
                      <Button 
                        type="button" 
                        onClick={nextStep}
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Next Step
                      </Button>
                    ) : (
                      <Button 
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white"
                      >
                        Submit Case Evaluation
                      </Button>
                    )}
                  </div>
                </form>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 sticky top-6">
                {/* Contact Card */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Need Immediate Help?</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <div className="font-semibold">(818) 123-4567</div>
                        <div className="text-sm text-muted-foreground">24/7 Free Consultation</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <div className="font-semibold">info@trembachlawfirm.com</div>
                        <div className="text-sm text-muted-foreground">Email Response Within Hours</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 text-red-600 mr-3" />
                      <div>
                        <div className="font-semibold">Available 24/7</div>
                        <div className="text-sm text-muted-foreground">Emergency Consultations</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Benefits Card */}
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Why Choose Our Firm?</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Anti-Bias Defense</div>
                        <div className="text-sm text-muted-foreground">Fighting motorcycle stereotypes</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Former Defense Attorney</div>
                        <div className="text-sm text-muted-foreground">Insider knowledge of tactics</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Bike className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">Motorcycle Specialists</div>
                        <div className="text-sm text-muted-foreground">Understanding rider dynamics</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-red-600 mr-3 mt-0.5" />
                      <div>
                        <div className="font-medium">No Fees Unless We Win</div>
                        <div className="text-sm text-muted-foreground">Risk-free representation</div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Testimonial Card */}
                <Card className="p-6 bg-red-50">
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-muted-foreground italic mb-3">
                    "The case evaluation was thorough and gave me confidence that my case would be handled professionally. 
                    They understood the unique challenges motorcyclists face."
                  </blockquote>
                  <cite className="text-sm font-medium">- Recent Client</cite>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-red-600 text-white py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Wait - Time Limits Apply</h2>
          <p className="text-lg mb-6">
            California law limits the time you have to file a motorcycle accident claim. 
            Get your free case evaluation today to protect your rights.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge variant="secondary" className="bg-white text-red-600 px-4 py-2">
              No Fees Unless We Win
            </Badge>
            <Badge variant="secondary" className="bg-white text-red-600 px-4 py-2">
              24/7 Availability
            </Badge>
            <Badge variant="secondary" className="bg-white text-red-600 px-4 py-2">
              Free Consultation
            </Badge>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MotorcycleCaseEvaluation;