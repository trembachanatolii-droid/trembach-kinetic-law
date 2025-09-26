import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import heroBackground from '@/assets/case-evaluation-hero.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);

const CaseEvaluation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    accidentLocation: '',
    injuryType: '',
    vehicleType: '',
    truckCompany: '',
    additionalInfo: ''
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content cards with staggered entrance
      gsap.fromTo(cardsRef.current?.children || [],
        { 
          opacity: 0, 
          y: 100,
          scale: 0.8,
          filter: 'blur(5px)'
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.15,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Free Truck Accident Case Evaluation | Trembach Law Firm"
        description="Free, confidential truck accident case evaluation for California victims. Expert legal representation. No fees unless we win."
        canonical="/case-evaluation"
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
            Free Truck Accident Case Evaluation
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Get your free, confidential truck accident case evaluation. No obligation. No fees unless we win.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ThreeDVisualEffects>
                <Card className="premium-form-container interactive-card shadow-2xl overflow-hidden">
                  <CardHeader>
                    <CardTitle className="text-2xl text-blue-600 font-display transition-colors">Tell Us About Your Truck Accident</CardTitle>
                    <p className="text-muted-foreground">
                      Please provide as much detail as possible to help us evaluate your truck accident claim.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="accidentDate">Date of Accident *</Label>
                        <Input
                          id="accidentDate"
                          type="date"
                          value={formData.accidentDate}
                          onChange={(e) => handleInputChange('accidentDate', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                      <div>
                        <Label htmlFor="accidentLocation">Accident Location *</Label>
                        <Input
                          id="accidentLocation"
                          placeholder="City, State or Highway/Street"
                          value={formData.accidentLocation}
                          onChange={(e) => handleInputChange('accidentLocation', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="injuryType">Type of Injury</Label>
                      <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                            <SelectItem value="spinal-cord">Spinal Cord Injury</SelectItem>
                            <SelectItem value="broken-bones">Broken Bones/Fractures</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="burns">Burns</SelectItem>
                            <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
                            <SelectItem value="fatality">Wrongful Death</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="vehicleType">Type of Truck</Label>
                      <Select onValueChange={(value) => handleInputChange('vehicleType', value)}>
                        <SelectTrigger className="interactive-card">
                          <SelectValue placeholder="Select truck type" />
                        </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="18-wheeler">18-Wheeler/Semi-Truck</SelectItem>
                            <SelectItem value="delivery-truck">Delivery Truck</SelectItem>
                            <SelectItem value="garbage-truck">Garbage Truck</SelectItem>
                            <SelectItem value="cement-truck">Cement Truck</SelectItem>
                            <SelectItem value="dump-truck">Dump Truck</SelectItem>
                            <SelectItem value="tanker-truck">Tanker Truck</SelectItem>
                            <SelectItem value="other">Other Commercial Vehicle</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="truckCompany">Trucking Company (if known)</Label>
                      <Input
                        id="truckCompany"
                        placeholder="Name of trucking company or carrier"
                        value={formData.truckCompany}
                        onChange={(e) => handleInputChange('truckCompany', e.target.value)}
                        className="interactive-card"
                      />
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Please describe what happened, any medical treatment received, and other relevant details..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={4}
                        className="interactive-card"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full btn-enhanced group">
                      Submit Truck Accident Case Evaluation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </ThreeDVisualEffects>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Call for Immediate Help</p>
                      <p className="text-muted-foreground">855-TREMBACH-WINS</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-muted-foreground">contact@trembachlaw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Serving All of California</p>
                      <p className="text-muted-foreground">Free consultations statewide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Available 24/7</p>
                      <p className="text-muted-foreground">Emergency consultations available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden bg-gradient-to-br from-primary/15 to-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">No Fees Unless We Win</h3>
                  <p className="text-sm text-muted-foreground">
                    We work on a contingency fee basis. You pay nothing unless we secure compensation for you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseEvaluation;