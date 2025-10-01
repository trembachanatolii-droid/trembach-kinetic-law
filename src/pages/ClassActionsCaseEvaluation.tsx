import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Phone, 
  Mail, 
  FileText, 
  Shield, 
  Clock, 
  Users, 
  CheckCircle2,
  AlertTriangle,
  Scale,
  Gavel
} from 'lucide-react';
import heroBackground from '@/assets/class-actions-case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const ClassActionsCaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    caseType: '',
    incidentDate: '',
    damages: '',
    description: '',
    previousAttorney: '',
    urgency: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content cards with staggered entrance
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 80,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your submission. Our team will contact you within 24 hours.');
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Class Action Case Evaluation | Free Consultation | Trembach Law Firm"
        description="Get a free evaluation for your class action case. Expert California attorneys review consumer fraud, data breaches, employment violations, and defective product claims."
        canonical="/class-actions-case-evaluation"
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Class Action Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Free consultation to determine if you have a valid class action case
          </p>
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">100% Free</h3>
              <p className="text-sm text-muted-foreground">No cost for evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Quick Response</h3>
              <p className="text-sm text-muted-foreground">Response within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Expert Review</h3>
              <p className="text-sm text-muted-foreground">Experienced class action attorneys</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Scale className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">No Obligation</h3>
              <p className="text-sm text-muted-foreground">No commitment required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="max-w-4xl mx-auto space-y-12">
            
            {/* Evaluation Form */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <div className="text-center">
                  <Gavel className="w-16 h-16 text-primary mx-auto mb-4" />
                  <CardTitle className="text-3xl text-primary mb-4">Free Class Action Case Evaluation</CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Complete this form to receive a comprehensive evaluation of your potential class action case from our experienced attorneys.
                  </p>
                </div>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        required
                        className="text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        required
                        className="text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="text-foreground"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Phone Number *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        required
                        className="text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Case Type *</label>
                      <Select value={formData.caseType} onValueChange={(value) => handleInputChange('caseType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select case type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="defective-product">Defective Product</SelectItem>
                          <SelectItem value="data-breach">Data Breach</SelectItem>
                          <SelectItem value="consumer-fraud">Consumer Fraud</SelectItem>
                          <SelectItem value="false-advertising">False Advertising</SelectItem>
                          <SelectItem value="employment-violation">Employment Violation</SelectItem>
                          <SelectItem value="wage-theft">Wage Theft</SelectItem>
                          <SelectItem value="environmental-exposure">Environmental Exposure</SelectItem>
                          <SelectItem value="pharmaceutical">Pharmaceutical/Medical Device</SelectItem>
                          <SelectItem value="automotive-defect">Automotive Defect</SelectItem>
                          <SelectItem value="privacy-violation">Privacy Violation</SelectItem>
                          <SelectItem value="securities-fraud">Securities Fraud</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">When did the incident occur? *</label>
                      <Input
                        type="date"
                        value={formData.incidentDate}
                        onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                        required
                        className="text-foreground"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Estimated Damages</label>
                    <Select value={formData.damages} onValueChange={(value) => handleInputChange('damages', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select damage range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1000">Under $1,000</SelectItem>
                        <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                        <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10000-25000">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25000-50000">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                        <SelectItem value="over-100000">Over $100,000</SelectItem>
                        <SelectItem value="unknown">Unknown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-foreground">Case Description *</label>
                    <Textarea
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Please describe what happened, including dates, companies involved, and how you were harmed..."
                      rows={5}
                      required
                      className="text-foreground"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">Have you consulted another attorney?</label>
                      <Select value={formData.previousAttorney} onValueChange={(value) => handleInputChange('previousAttorney', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="yes-still-interested">Yes, but still interested</SelectItem>
                          <SelectItem value="yes-declined">Yes, they declined my case</SelectItem>
                          <SelectItem value="yes-unsatisfied">Yes, but unsatisfied with service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-foreground">How urgent is your case?</label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediate (deadline approaching)</SelectItem>
                          <SelectItem value="urgent">Urgent (within 30 days)</SelectItem>
                          <SelectItem value="moderate">Moderate (within 3 months)</SelectItem>
                          <SelectItem value="low">Low urgency</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg">
                    Submit Case for Free Evaluation
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* What Happens Next */}
            <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl text-primary mb-4">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">1</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Review</h4>
                    <p className="text-sm text-muted-foreground">Our attorneys review your case details within 24 hours</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">2</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Contact</h4>
                    <p className="text-sm text-muted-foreground">We contact you to discuss your case and answer questions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-xl font-bold text-primary">3</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2">Action</h4>
                    <p className="text-sm text-muted-foreground">If we can help, we begin working on your case immediately</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Phone className="w-6 h-6 mr-2" />
                    Call for Immediate Help
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Speak directly with our class action attorneys</p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Available 24/7 for urgent cases</p>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Mail className="w-6 h-6 mr-2" />
                    Email Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg mb-4">Send us detailed information about your case</p>
                  <Button 
                    variant="outline"
                    className="w-full"
                    onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com?subject=Class Action Case Inquiry'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                  <p className="text-sm text-muted-foreground mt-2 text-center">Response within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            {/* Legal Disclaimer */}
            <Card className="glass-card border-muted bg-muted/50">
              <CardContent className="pt-6">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 mr-3 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    <p className="mb-2">
                      <strong>Legal Disclaimer:</strong> This case evaluation form does not create an attorney-client relationship. 
                      The information you provide will be kept confidential and used only to evaluate your potential case.
                    </p>
                    <p>
                      No attorney-client relationship is formed until a written agreement is signed. Prior results do not guarantee a similar outcome.
                      This website contains attorney advertising.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassActionsCaseEvaluation;