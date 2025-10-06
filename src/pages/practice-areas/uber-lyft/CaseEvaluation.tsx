import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Clock, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Star,
  Car,
  Users,
  DollarSign,
  Calendar,
  MapPin
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';

import SEO from '@/components/SEO';
import heroBackground from '@/assets/uber-lyft-case-evaluation-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const CaseEvaluation: React.FC = () => {
  useScrollRestoration();
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [formData, setFormData] = useState({
    // Step 1: Basic Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Step 2: Accident Details
    accidentDate: '',
    accidentTime: '',
    accidentLocation: '',
    rideshareCompany: '',
    accidentType: '',
    policeReport: '',
    
    // Step 3: Injuries & Medical Treatment
    injuries: [] as string[],
    hospitalVisit: '',
    ongoingTreatment: '',
    medicalExpenses: '',
    
    // Step 4: Additional Details
    workMissed: '',
    insuranceClaim: '',
    previousContact: '',
    additionalInfo: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 3D Hero Effects
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { 
          opacity: 0, 
          y: 100,
          rotationX: -15,
          transformPerspective: 1000
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out' 
        }
      );

      // Floating animation for cards
      gsap.to(contentRef.current?.querySelectorAll('.float-card'), {
        y: -10,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Progress bar animation
      gsap.fromTo('.progress-bar',
        { scaleX: 0, transformOrigin: 'left center' },
        { 
          scaleX: 1, 
          duration: 1.5, 
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.progress-container',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    setProgress((currentStep / 4) * 100);
  }, [currentStep]);

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Case evaluation submitted! We will contact you within 24 hours.');
  };

  const handleInjuryChange = (injury: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      injuries: checked 
        ? [...prev.injuries, injury]
        : prev.injuries.filter(i => i !== injury)
    }));
  };

  const injuryTypes = [
    'Head/Brain Injury',
    'Neck/Whiplash',
    'Back/Spinal Injury',
    'Broken Bones',
    'Cuts/Lacerations',
    'Internal Injuries',
    'Psychological Trauma',
    'Other'
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free California Uber & Lyft Accident Case Evaluation | Trembach Law Firm"
        description="Get your free rideshare accident case evaluation. Former defense attorney provides expert analysis of your Uber or Lyft injury claim. Start today - no cost."
        canonical="https://www.trembachlawfirm.com/uber-lyft/case-evaluation"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80 pointer-events-none"></div>
        
        
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Free Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1 animate-pulse" />
              ))}
              <span className="ml-2 text-lg">Expert Legal Analysis</span>
            </div>
            
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Get a comprehensive evaluation of your California rideshare accident case from a former defense attorney who knows how these companies operate.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12" ref={contentRef}>
        
        {/* Progress Bar */}
        <div className="progress-container mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Step {currentStep} of 4</h2>
            <Badge variant="secondary" className="text-sm">
              {Math.round(progress)}% Complete
            </Badge>
          </div>
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div 
              className="progress-bar h-full bg-gradient-to-r from-primary to-blue-600 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <Card className="float-card glass-card border-l-4 border-l-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <Users className="w-6 h-6 mr-3 text-primary" />
                  Personal Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">First Name *</label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Last Name *</label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Phone Number *</label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Email Address *</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-l-blue-500">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Your Information is Protected</h4>
                      <p className="text-sm text-blue-800">
                        All information shared is confidential and protected by attorney-client privilege. 
                        We never share your personal information with third parties.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Accident Details */}
          {currentStep === 2 && (
            <Card className="float-card glass-card border-l-4 border-l-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <Car className="w-6 h-6 mr-3 text-primary" />
                  Accident Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Accident Date *</label>
                    <Input
                      type="date"
                      value={formData.accidentDate}
                      onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Approximate Time</label>
                    <Input
                      type="time"
                      value={formData.accidentTime}
                      onChange={(e) => setFormData(prev => ({ ...prev, accidentTime: e.target.value }))}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground">Accident Location *</label>
                    <Input
                      value={formData.accidentLocation}
                      onChange={(e) => setFormData(prev => ({ ...prev, accidentLocation: e.target.value }))}
                      placeholder="Street address, city, California"
                      className="border-2 focus:border-primary transition-colors"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Rideshare Company *</label>
                    <Select value={formData.rideshareCompany} onValueChange={(value) => setFormData(prev => ({ ...prev, rideshareCompany: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select company" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uber">Uber</SelectItem>
                        <SelectItem value="lyft">Lyft</SelectItem>
                        <SelectItem value="other">Other Rideshare</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Type of Accident *</label>
                    <Select value={formData.accidentType} onValueChange={(value) => setFormData(prev => ({ ...prev, accidentType: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="passenger">Passenger in Rideshare</SelectItem>
                        <SelectItem value="pedestrian">Pedestrian Hit</SelectItem>
                        <SelectItem value="driver">Other Driver</SelectItem>
                        <SelectItem value="cyclist">Cyclist</SelectItem>
                        <SelectItem value="assault">Driver Assault</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground">Police Report Filed?</label>
                    <Select value={formData.policeReport} onValueChange={(value) => setFormData(prev => ({ ...prev, policeReport: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, report was filed</SelectItem>
                        <SelectItem value="no">No report was filed</SelectItem>
                        <SelectItem value="unknown">I'm not sure</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Injuries & Medical Treatment */}
          {currentStep === 3 && (
            <Card className="float-card glass-card border-l-4 border-l-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <AlertTriangle className="w-6 h-6 mr-3 text-red-600" />
                  Injuries & Medical Treatment
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <label className="text-sm font-semibold text-foreground">Select all injuries you sustained:</label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {injuryTypes.map((injury) => (
                      <div key={injury} className="flex items-center space-x-3">
                        <Checkbox
                          id={injury}
                          checked={formData.injuries.includes(injury)}
                          onCheckedChange={(checked) => handleInjuryChange(injury, checked as boolean)}
                          className="border-2"
                        />
                        <label htmlFor={injury} className="text-sm font-medium">
                          {injury}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Did you visit a hospital?</label>
                    <Select value={formData.hospitalVisit} onValueChange={(value) => setFormData(prev => ({ ...prev, hospitalVisit: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency Room</SelectItem>
                        <SelectItem value="admitted">Admitted to Hospital</SelectItem>
                        <SelectItem value="urgent-care">Urgent Care</SelectItem>
                        <SelectItem value="doctor">Doctor's Office</SelectItem>
                        <SelectItem value="no">No Medical Treatment</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Are you receiving ongoing treatment?</label>
                    <Select value={formData.ongoingTreatment} onValueChange={(value) => setFormData(prev => ({ ...prev, ongoingTreatment: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, ongoing treatment</SelectItem>
                        <SelectItem value="completed">Treatment completed</SelectItem>
                        <SelectItem value="no">No treatment needed</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground">Estimated medical expenses (if known)</label>
                    <Input
                      value={formData.medicalExpenses}
                      onChange={(e) => setFormData(prev => ({ ...prev, medicalExpenses: e.target.value }))}
                      placeholder="e.g., $5,000 or 'Unknown'"
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Additional Details */}
          {currentStep === 4 && (
            <Card className="float-card glass-card border-l-4 border-l-primary shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="bg-gradient-to-r from-primary/5 to-blue-50">
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 mr-3 text-primary" />
                  Additional Information
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Have you missed work?</label>
                    <Select value={formData.workMissed} onValueChange={(value) => setFormData(prev => ({ ...prev, workMissed: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No time missed</SelectItem>
                        <SelectItem value="days">A few days</SelectItem>
                        <SelectItem value="weeks">Several weeks</SelectItem>
                        <SelectItem value="months">Months</SelectItem>
                        <SelectItem value="permanent">Permanent disability</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Have you filed an insurance claim?</label>
                    <Select value={formData.insuranceClaim} onValueChange={(value) => setFormData(prev => ({ ...prev, insuranceClaim: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Yes, claim filed</SelectItem>
                        <SelectItem value="no">No claim filed</SelectItem>
                        <SelectItem value="denied">Claim was denied</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground">Have you been contacted by insurance companies?</label>
                    <Select value={formData.previousContact} onValueChange={(value) => setFormData(prev => ({ ...prev, previousContact: value }))}>
                      <SelectTrigger className="border-2 focus:border-primary">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No contact</SelectItem>
                        <SelectItem value="rideshare">Uber/Lyft insurance</SelectItem>
                        <SelectItem value="driver">Driver's insurance</SelectItem>
                        <SelectItem value="both">Both companies</SelectItem>
                        <SelectItem value="settlement">Settlement offer made</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-semibold text-foreground">Additional details about your case</label>
                    <Textarea
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      placeholder="Please provide any additional details about your accident, injuries, or circumstances that might be relevant to your case..."
                      rows={4}
                      className="border-2 focus:border-primary transition-colors"
                    />
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border-l-4 border-l-green-500">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold text-green-900 mb-2">What Happens Next?</h4>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• We'll review your case within 24 hours</li>
                        <li>• Free consultation to discuss your options</li>
                        <li>• No fees unless we win your case</li>
                        <li>• We handle all communication with insurance companies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center pt-8">
            <Button
              type="button"
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 1}
              className="px-8 py-3"
            >
              Previous
            </Button>
            
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Step {currentStep} of 4</p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((step) => (
                  <div
                    key={step}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      step <= currentStep ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </div>

            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-primary hover:bg-primary/90"
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                className="px-8 py-3 bg-green-600 hover:bg-green-700"
              >
                Submit Evaluation
              </Button>
            )}
          </div>
        </form>

        {/* Contact Information */}
        <Card className="mt-12 glass-card border-2 border-primary/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Need to Speak with Someone Now?</h3>
            <p className="text-muted-foreground mb-6">
              Our California rideshare accident attorneys are available 24/7 for urgent cases.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.location.href = 'tel:8181234567'}
              >
                Call (818) 123-4567
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
              >
                <Link to="/free-consultation">Request Callback</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseEvaluation;