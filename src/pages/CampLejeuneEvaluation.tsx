import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowLeft,
  Phone,
  Mail,
  Clock,
  Shield,
  Award,
  CheckCircle
} from 'lucide-react';
import heroBackground from '@/assets/camp-lejeune-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

const CampLejeuneEvaluation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    timeAtBase: '',
    yearsAtBase: '',
    condition: '',
    diagnosisDate: '',
    relationship: '',
    additionalInfo: '',
    agreeToTerms: false
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.3,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for contacting Trembach Law Firm about your Camp Lejeune claim. We will review your information and contact you within 24 hours for a free consultation.');
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Camp Lejeune Case Evaluation | Free Consultation | Trembach Law"
        description="Get your free Camp Lejeune case evaluation. Former defense attorney fighting for veterans exposed to toxic water 1953-1987. No fees unless we win."
        canonical="/camp-lejeune-case-evaluation"
      />

      {/* Go Back Button - Fade in on scroll */}
      <div className={`fixed top-24 left-6 z-50 transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'}`}>
        <Button 
          variant="ghost" 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-2xl">
              Free Camp Lejeune Case Evaluation
            </h1>
            <p className="text-xl drop-shadow-lg">
              Find out if you qualify for compensation in 60 seconds
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Form Column */}
          <div className="lg:col-span-2" ref={formRef}>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Camp Lejeune Case Evaluation Form</CardTitle>
                <p className="text-muted-foreground text-lg">All information is confidential and protected by attorney-client privilege.</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-base">First Name *</Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                        className="text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-base">Last Name *</Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                        required
                        className="text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-base">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="text-base"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        required
                        className="text-base"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="timeAtBase" className="text-base">Time at Camp Lejeune *</Label>
                      <Select value={formData.timeAtBase} onValueChange={(value) => setFormData(prev => ({ ...prev, timeAtBase: value }))}>
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="Select years..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1953-1960">1953-1960</SelectItem>
                          <SelectItem value="1961-1970">1961-1970</SelectItem>
                          <SelectItem value="1971-1980">1971-1980</SelectItem>
                          <SelectItem value="1981-1987">1981-1987</SelectItem>
                          <SelectItem value="multiple">Multiple Periods</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="relationship" className="text-base">Relationship to Base *</Label>
                      <Select value={formData.relationship} onValueChange={(value) => setFormData(prev => ({ ...prev, relationship: value }))}>
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="Select relationship..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="marine">Marine</SelectItem>
                          <SelectItem value="navy">Navy Personnel</SelectItem>
                          <SelectItem value="family">Family Member</SelectItem>
                          <SelectItem value="civilian">Civilian Employee</SelectItem>
                          <SelectItem value="contractor">Contractor</SelectItem>
                          <SelectItem value="child">Child (In Utero or Born on Base)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="condition" className="text-base">Health Condition *</Label>
                      <Select value={formData.condition} onValueChange={(value) => setFormData(prev => ({ ...prev, condition: value }))}>
                        <SelectTrigger className="text-base">
                          <SelectValue placeholder="Select condition..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="parkinsons">Parkinson's Disease</SelectItem>
                          <SelectItem value="bladder-cancer">Bladder Cancer</SelectItem>
                          <SelectItem value="kidney-cancer">Kidney Cancer</SelectItem>
                          <SelectItem value="liver-cancer">Liver Cancer</SelectItem>
                          <SelectItem value="leukemia">Leukemia</SelectItem>
                          <SelectItem value="lymphoma">Non-Hodgkin's Lymphoma</SelectItem>
                          <SelectItem value="myeloma">Multiple Myeloma</SelectItem>
                          <SelectItem value="birth-defects">Birth Defects</SelectItem>
                          <SelectItem value="other-cancer">Other Cancer</SelectItem>
                          <SelectItem value="other">Other Condition</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="diagnosisDate" className="text-base">Diagnosis Date</Label>
                      <Input
                        id="diagnosisDate"
                        type="date"
                        value={formData.diagnosisDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, diagnosisDate: e.target.value }))}
                        className="text-base"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="additionalInfo" className="text-base">Additional Information</Label>
                    <Textarea
                      id="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={(e) => setFormData(prev => ({ ...prev, additionalInfo: e.target.value }))}
                      placeholder="Please provide any additional details about your condition, military service, or questions..."
                      className="min-h-[100px] text-base"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                    />
                    <Label htmlFor="terms" className="text-sm">
                      I agree to be contacted by Trembach Law Firm regarding my Camp Lejeune case and understand that this creates an attorney-client relationship for consultation purposes.
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 text-lg"
                    disabled={!formData.agreeToTerms}
                  >
                    Submit My Case for Free Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white text-lg py-3"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Available 24/7 for Emergency Consultations
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Why Choose Trembach Law?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-base">Former Defense Experience</h4>
                      <p className="text-sm text-muted-foreground">Unique insight into government tactics</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-base">Fast Response</h4>
                      <p className="text-sm text-muted-foreground">24-hour response guarantee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-base">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">You pay nothing unless we win</p>
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

export default CampLejeuneEvaluation;