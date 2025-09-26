import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  CheckCircle2, 
  Star, 
  Shield,
  Clock,
  Users,
  Award,
  ArrowRight,
  Anchor,
  Ship,
  FileText,
  Calendar
} from 'lucide-react';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import heroBackground from '@/assets/maritime-case-evaluation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MaritimeCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentType: '',
    vesselType: '',
    incidentDate: '',
    location: '',
    injuries: '',
    currentCondition: '',
    medicalTreatment: '',
    timeOffWork: '',
    insurance: '',
    previousAttorney: '',
    description: '',
    consent: false
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Form animation
      gsap.fromTo(formRef.current?.querySelectorAll('.form-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Redirect to thank you page or show success message
  };

  const maritimeAccidentTypes = [
    'Commercial Vessel Accident',
    'Cruise Ship Accident',
    'Ferry Accident',
    'Fishing Vessel Accident',
    'Cargo Ship Accident',
    'Yacht/Pleasure Craft Accident',
    'Tugboat Accident',
    'Barge Accident',
    'Harbor/Port Accident',
    'Offshore Platform Accident',
    'Jones Act Injury',
    'Longshore Injury',
    'Other Maritime Accident'
  ];

  const vesselTypes = [
    'Commercial Fishing Vessel',
    'Cargo Ship',
    'Container Ship',
    'Cruise Ship',
    'Ferry',
    'Tugboat',
    'Barge',
    'Yacht',
    'Sailboat',
    'Motor Boat',
    'Coast Guard Vessel',
    'Navy Ship',
    'Offshore Platform',
    'Other'
  ];

  const californiaMaritimeLocations = [
    'Los Angeles Harbor',
    'Long Beach Port',
    'San Francisco Bay',
    'San Diego Harbor',
    'Oakland Port',
    'Monterey Bay',
    'Humboldt Bay',
    'Santa Barbara Harbor',
    'Newport Beach',
    'Catalina Island Waters',
    'Golden Gate',
    'Pacific Ocean (CA Waters)',
    'Other California Waters'
  ];

  return (
    <>
      <SEO
        title="Free Maritime Accident Case Evaluation | California Maritime Lawyers"
        description="Get a free case evaluation for your California maritime accident. Experienced admiralty attorneys reviewing Jones Act, longshore, and vessel accident claims."
        keywords="maritime accident lawyer, admiralty attorney, Jones Act, longshore injury, California maritime law"
        canonical="/maritime/case-evaluation"
      />
      
      <GoBack fallbackPath="/practice-areas/maritime-accidents" />
      
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
          
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="hero-content">
              <div className="flex items-center justify-center mb-4">
                <Anchor className="w-12 h-12 text-blue-400 mr-4" />
                <h1 className="text-4xl md:text-5xl font-bold">
                  Free Maritime Case Evaluation
                </h1>
              </div>
              
              <div className="flex items-center justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
                ))}
                <span className="ml-2 text-lg">Experienced Maritime Attorneys</span>
              </div>
              
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                Get expert legal evaluation of your California maritime accident case. No cost, no obligation.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Form Column */}
            <div className="lg:col-span-2" ref={formRef}>
              <Card className="form-section">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="w-6 h-6 mr-3 text-primary" />
                    Maritime Accident Information
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Please provide details about your maritime accident. All information is confidential and protected by attorney-client privilege.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Personal Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Accident Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Accident Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="accidentType">Type of Maritime Accident *</Label>
                          <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select accident type" />
                            </SelectTrigger>
                            <SelectContent>
                              {maritimeAccidentTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="vesselType">Type of Vessel *</Label>
                          <Select value={formData.vesselType} onValueChange={(value) => handleInputChange('vesselType', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select vessel type" />
                            </SelectTrigger>
                            <SelectContent>
                              {vesselTypes.map((type) => (
                                <SelectItem key={type} value={type}>{type}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="incidentDate">Date of Incident *</Label>
                          <Input
                            id="incidentDate"
                            type="date"
                            value={formData.incidentDate}
                            onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                            required
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="location">Location of Incident *</Label>
                          <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select location" />
                            </SelectTrigger>
                            <SelectContent>
                              {californiaMaritimeLocations.map((location) => (
                                <SelectItem key={location} value={location}>{location}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Injury Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Injury Information</h3>
                      
                      <div>
                        <Label htmlFor="injuries">Injuries Sustained *</Label>
                        <Textarea
                          id="injuries"
                          value={formData.injuries}
                          onChange={(e) => handleInputChange('injuries', e.target.value)}
                          placeholder="Please describe your injuries in detail..."
                          required
                          className="mt-1 min-h-[100px]"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="currentCondition">Current Medical Condition</Label>
                          <Select value={formData.currentCondition} onValueChange={(value) => handleInputChange('currentCondition', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select current condition" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fully-recovered">Fully Recovered</SelectItem>
                              <SelectItem value="ongoing-treatment">Ongoing Treatment</SelectItem>
                              <SelectItem value="permanent-disability">Permanent Disability</SelectItem>
                              <SelectItem value="surgery-required">Surgery Required</SelectItem>
                              <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="medicalTreatment">Medical Treatment Received</Label>
                          <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select treatment type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="emergency-room">Emergency Room</SelectItem>
                              <SelectItem value="hospitalization">Hospitalization</SelectItem>
                              <SelectItem value="surgery">Surgery</SelectItem>
                              <SelectItem value="physical-therapy">Physical Therapy</SelectItem>
                              <SelectItem value="ongoing-care">Ongoing Medical Care</SelectItem>
                              <SelectItem value="none">No Treatment Yet</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Work and Insurance Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Employment & Insurance</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="timeOffWork">Time Off Work</Label>
                          <Select value={formData.timeOffWork} onValueChange={(value) => handleInputChange('timeOffWork', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select time off work" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="none">No Time Off</SelectItem>
                              <SelectItem value="1-7-days">1-7 Days</SelectItem>
                              <SelectItem value="1-4-weeks">1-4 Weeks</SelectItem>
                              <SelectItem value="1-6-months">1-6 Months</SelectItem>
                              <SelectItem value="6-months-plus">6+ Months</SelectItem>
                              <SelectItem value="permanently-disabled">Permanently Disabled</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label htmlFor="insurance">Insurance Coverage</Label>
                          <Select value={formData.insurance} onValueChange={(value) => handleInputChange('insurance', value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select insurance status" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="employer-insurance">Employer Insurance</SelectItem>
                              <SelectItem value="personal-insurance">Personal Health Insurance</SelectItem>
                              <SelectItem value="maritime-insurance">Maritime Insurance</SelectItem>
                              <SelectItem value="no-insurance">No Insurance</SelectItem>
                              <SelectItem value="unsure">Unsure</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Additional Information</h3>
                      
                      <div>
                        <Label htmlFor="previousAttorney">Previous Attorney Consultation</Label>
                        <Select value={formData.previousAttorney} onValueChange={(value) => handleInputChange('previousAttorney', value)}>
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Have you consulted with another attorney?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="yes-consulted">Yes, Consulted Only</SelectItem>
                            <SelectItem value="yes-hired">Yes, Currently Represented</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Accident Description</Label>
                        <Textarea
                          id="description"
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Please provide a detailed description of how the accident occurred..."
                          className="mt-1 min-h-[120px]"
                        />
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleInputChange('consent', checked as boolean)}
                        required
                      />
                      <Label htmlFor="consent" className="text-sm leading-relaxed">
                        I agree to be contacted by Trembach Law Firm regarding my case. I understand that submitting this form does not create an attorney-client relationship. *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-4 text-lg"
                      disabled={!formData.consent}
                    >
                      Submit Case Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-6">
                
                {/* Contact Information */}
                <Card className="form-section">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-primary" />
                      Contact Us
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-2">Call for immediate consultation</p>
                      <Button 
                        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        (818) 123-4567
                      </Button>
                    </div>
                    
                    <div className="text-center pt-4 border-t">
                      <p className="text-sm text-muted-foreground mb-2">Or email us</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.location.href = 'mailto:info@trembachlaw.com'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="form-section">
                  <CardHeader>
                    <CardTitle>Why Choose Our Maritime Lawyers?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Maritime Law Expertise</h4>
                        <p className="text-sm text-muted-foreground">Specialized knowledge of Jones Act, LHWCA, and admiralty law</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Urgent Response</h4>
                        <p className="text-sm text-muted-foreground">Quick case evaluation and immediate legal action when needed</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">Dedicated Support</h4>
                        <p className="text-sm text-muted-foreground">Personal attention throughout your maritime injury case</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                      <div>
                        <h4 className="font-semibold">No Fee Unless We Win</h4>
                        <p className="text-sm text-muted-foreground">Contingency fee arrangement - no upfront costs</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Process Timeline */}
                <Card className="form-section">
                  <CardHeader>
                    <CardTitle>What Happens Next?</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-start">
                      <Badge variant="destructive" className="mr-3 mt-1">1</Badge>
                      <div>
                        <h4 className="font-semibold">Case Review</h4>
                        <p className="text-sm text-muted-foreground">We review your case within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Badge variant="destructive" className="mr-3 mt-1">2</Badge>
                      <div>
                        <h4 className="font-semibold">Free Consultation</h4>
                        <p className="text-sm text-muted-foreground">Detailed discussion of your maritime accident</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Badge variant="destructive" className="mr-3 mt-1">3</Badge>
                      <div>
                        <h4 className="font-semibold">Legal Action</h4>
                        <p className="text-sm text-muted-foreground">We begin working on your case immediately</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Legal Disclaimer */}
                <Card className="form-section bg-muted/50">
                  <CardContent className="pt-6">
                    <p className="text-xs text-muted-foreground">
                      <strong>Legal Disclaimer:</strong> Submitting this form does not create an attorney-client relationship. 
                      All information provided is confidential and will be reviewed by our maritime law attorneys. 
                      You will not be charged any fees unless we successfully recover compensation for your case.
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

export default MaritimeCaseEvaluation;