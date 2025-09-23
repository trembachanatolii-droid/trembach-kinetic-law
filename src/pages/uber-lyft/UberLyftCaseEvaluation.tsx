import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  Star, 
  Scale,
  Shield,
  Clock,
  Car,
  AlertTriangle,
  FileText,
  CheckCircle
} from 'lucide-react';
import useScrollRestoration from '@/hooks/useScrollRestoration';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import heroImage from '@/assets/uber-lyft-case-evaluation-hero-new.jpg';

gsap.registerPlugin(ScrollTrigger);

const UberLyftCaseEvaluation: React.FC = () => {
  useScrollRestoration();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentType: '',
    injuries: '',
    description: '',
    wasDriver: '',
    medicalTreatment: '',
    insuranceClaim: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      // Content animation
      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Free Uber & Lyft Accident Case Evaluation | California Rideshare Injury Lawyer"
        description="Get your free case evaluation for Uber/Lyft accidents. Former defense attorney reviews your rideshare injury claim. Available 24/7. No fees unless we win."
        canonical="https://www.trembachlawfirm.com/uber-lyft/case-evaluation"
      />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        <GoBack className="absolute top-20 left-6 z-10 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Free Uber & Lyft Accident Case Evaluation
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Get Your Case Reviewed by Former Defense Attorney</span>
            </div>
            
            <p className="text-xl leading-relaxed">
              No fees unless we win your case. Available 24/7 for urgent rideshare accidents.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Form Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Case Evaluation Form */}
            <section className="content-section mb-12">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 flex items-center">
                    <Scale className="w-6 h-6 mr-3" />
                    Uber/Lyft Accident Case Evaluation
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Provide details about your rideshare accident so we can evaluate your case and determine the best path forward.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name *</label>
                        <Input
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name *</label>
                        <Input
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Phone *</label>
                        <Input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    {/* Accident Details */}
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Accident Details</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Accident Date *</label>
                          <Input
                            type="date"
                            value={formData.accidentDate}
                            onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Type of Accident *</label>
                          <Select value={formData.accidentType} onValueChange={(value) => handleInputChange('accidentType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select accident type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="uber-passenger">Uber Passenger Injury</SelectItem>
                              <SelectItem value="lyft-passenger">Lyft Passenger Injury</SelectItem>
                              <SelectItem value="pedestrian-uber">Pedestrian Hit by Uber</SelectItem>
                              <SelectItem value="pedestrian-lyft">Pedestrian Hit by Lyft</SelectItem>
                              <SelectItem value="driver-collision">Driver vs. Rideshare Collision</SelectItem>
                              <SelectItem value="cyclist">Cyclist Hit by Rideshare</SelectItem>
                              <SelectItem value="assault">Driver Assault/Harassment</SelectItem>
                              <SelectItem value="other">Other Rideshare Incident</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Were you the driver, passenger, or third party? *</label>
                        <Select value={formData.wasDriver} onValueChange={(value) => handleInputChange('wasDriver', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="passenger">Rideshare Passenger</SelectItem>
                            <SelectItem value="other-driver">Driver of Other Vehicle</SelectItem>
                            <SelectItem value="pedestrian">Pedestrian</SelectItem>
                            <SelectItem value="cyclist">Cyclist</SelectItem>
                            <SelectItem value="rideshare-driver">Rideshare Driver</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Describe your injuries *</label>
                        <Textarea
                          value={formData.injuries}
                          onChange={(e) => handleInputChange('injuries', e.target.value)}
                          placeholder="Please describe any injuries you sustained..."
                          rows={3}
                          required
                        />
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Have you received medical treatment? *</label>
                        <Select value={formData.medicalTreatment} onValueChange={(value) => handleInputChange('medicalTreatment', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select medical treatment status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="emergency-room">Emergency Room</SelectItem>
                            <SelectItem value="hospital">Hospitalized</SelectItem>
                            <SelectItem value="doctor">Doctor Visit</SelectItem>
                            <SelectItem value="ongoing">Ongoing Treatment</SelectItem>
                            <SelectItem value="none">No Treatment Yet</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Have you filed an insurance claim? *</label>
                        <Select value={formData.insuranceClaim} onValueChange={(value) => handleInputChange('insuranceClaim', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select insurance claim status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="not-filed">Not Filed Yet</SelectItem>
                            <SelectItem value="filed-pending">Filed - Pending</SelectItem>
                            <SelectItem value="denied">Claim Denied</SelectItem>
                            <SelectItem value="low-offer">Received Low Offer</SelectItem>
                            <SelectItem value="settled">Already Settled</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Additional Details</label>
                        <Textarea
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          placeholder="Please provide any additional details about the accident, your injuries, or your case..."
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                      Submit Case Evaluation
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      Your information is confidential. We will review your case and contact you within 24 hours.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <p className="text-sm text-muted-foreground">
                    Available 24/7 for urgent rideshare accidents. No fees unless we win.
                  </p>
                </CardContent>
              </Card>

              {/* What Happens Next */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Case Review</h4>
                      <p className="text-sm text-muted-foreground">We review your case within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Free Consultation</h4>
                      <p className="text-sm text-muted-foreground">Schedule your free legal consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Case Strategy</h4>
                      <p className="text-sm text-muted-foreground">Develop your personalized legal strategy</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Our Firm?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Former Defense Attorney</h4>
                      <p className="text-sm text-muted-foreground">I know how Uber/Lyft defend cases</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Car className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Rideshare Specialists</h4>
                      <p className="text-sm text-muted-foreground">Focused on Uber/Lyft accidents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">24/7 Availability</h4>
                      <p className="text-sm text-muted-foreground">Immediate response for urgent cases</p>
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

export default UberLyftCaseEvaluation;