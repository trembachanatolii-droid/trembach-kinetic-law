import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Phone, Calendar, Heart, Users, MapPin, Clock, ArrowRight, Star } from 'lucide-react';
import heroBackground from '@/assets/mesothelioma-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const MedicalGuidance: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    diagnosisType: '',
    stage: '',
    currentTreatment: '',
    location: '',
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
    console.log('Medical guidance request:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const treatmentCenters = [
    {
      name: "UCLA Jonsson Comprehensive Cancer Center",
      location: "Los Angeles, CA",
      specialties: ["Pleural Mesothelioma", "Clinical Trials", "Multimodal Therapy"],
      contact: "(310) 825-5268"
    },
    {
      name: "UCSF Helen Diller Family Comprehensive Cancer Center",
      location: "San Francisco, CA",
      specialties: ["Peritoneal Mesothelioma", "HIPEC Treatment", "Surgical Excellence"],
      contact: "(415) 353-7070"
    },
    {
      name: "Stanford Cancer Institute",
      location: "Palo Alto, CA",
      specialties: ["Immunotherapy", "Precision Medicine", "Clinical Research"],
      contact: "(650) 498-6000"
    },
    {
      name: "City of Hope",
      location: "Los Angeles, CA",
      specialties: ["Innovative Treatments", "Palliative Care", "Family Support"],
      contact: "(626) 256-4673"
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
            Medical Guidance & Support
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Connect with mesothelioma specialists and get comprehensive medical guidance for your journey.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
            {/* Medical Guidance Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">Get Medical Guidance</CardTitle>
                  <p className="text-muted-foreground">
                    Connect with mesothelioma specialists and get personalized treatment recommendations.
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
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
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
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="diagnosisType">Diagnosis Type</Label>
                        <Select onValueChange={(value) => handleInputChange('diagnosisType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select diagnosis" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="pleural">Pleural Mesothelioma</SelectItem>
                            <SelectItem value="peritoneal">Peritoneal Mesothelioma</SelectItem>
                            <SelectItem value="pericardial">Pericardial Mesothelioma</SelectItem>
                            <SelectItem value="testicular">Testicular Mesothelioma</SelectItem>
                            <SelectItem value="suspected">Suspected Diagnosis</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="stage">Cancer Stage</Label>
                        <Select onValueChange={(value) => handleInputChange('stage', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="stage1">Stage I</SelectItem>
                            <SelectItem value="stage2">Stage II</SelectItem>
                            <SelectItem value="stage3">Stage III</SelectItem>
                            <SelectItem value="stage4">Stage IV</SelectItem>
                            <SelectItem value="unknown">Unknown</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="currentTreatment">Current Treatment</Label>
                        <Input
                          id="currentTreatment"
                          value={formData.currentTreatment}
                          onChange={(e) => handleInputChange('currentTreatment', e.target.value)}
                          placeholder="Current treatment plan"
                        />
                      </div>
                      <div>
                        <Label htmlFor="location">Preferred Location</Label>
                        <Select onValueChange={(value) => handleInputChange('location', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="los-angeles">Los Angeles Area</SelectItem>
                            <SelectItem value="san-francisco">San Francisco Bay Area</SelectItem>
                            <SelectItem value="san-diego">San Diego Area</SelectItem>
                            <SelectItem value="sacramento">Sacramento Area</SelectItem>
                            <SelectItem value="anywhere">Anywhere in California</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="additionalInfo">Additional Medical Information</Label>
                      <Textarea
                        id="additionalInfo"
                        placeholder="Please share any additional medical information, current symptoms, or specific questions you have..."
                        value={formData.additionalInfo}
                        onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                      Get Medical Guidance
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Treatment Centers */}
            <div className="space-y-6">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle>Leading Treatment Centers</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {treatmentCenters.map((center, index) => (
                    <div key={index} className="border-b border-border/20 last:border-0 pb-3 last:pb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Heart className="w-4 h-4 text-destructive" />
                        <h4 className="font-semibold text-sm">{center.name}</h4>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-3 h-3" />
                        <span>{center.location}</span>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {center.specialties.slice(0, 2).map((specialty, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">{specialty}</Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle>Treatment Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Surgery</p>
                      <p className="text-xs text-muted-foreground">Specialized surgical procedures</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Chemotherapy</p>
                      <p className="text-xs text-muted-foreground">Advanced combination therapies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Star className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Immunotherapy</p>
                      <p className="text-xs text-muted-foreground">Cutting-edge treatments</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <div>
                      <p className="font-semibold text-sm">Clinical Trials</p>
                      <p className="text-xs text-muted-foreground">Access to experimental treatments</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Urgent Medical Support</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For immediate medical guidance or emergency consultations, call us directly. We're available 24/7.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call for Immediate Help
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MedicalGuidance;