import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import heroBackground from '@/assets/free-consultation-hero-neutral.jpg';
import SEO from '@/components/SEO';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';

gsap.registerPlugin(ScrollTrigger);
interface InjuryType {
  id: string;
  title: string;
}
const injuryTypes: InjuryType[] = [
  {
    id: 'car-accident',
    title: 'Car Accident'
  },
  {
    id: 'mesothelioma',
    title: 'Mesothelioma'
  },
  {
    id: 'silicosis',
    title: 'Silicosis'
  },
  {
    id: 'talc-talcum',
    title: 'Talc/Talcum'
  },
  {
    id: 'dog-bite',
    title: 'Dog Bite'
  },
  {
    id: 'product-liability',
    title: 'Product Liability'
  },
  {
    id: 'wrongful-death',
    title: 'Wrongful Death'
  },
  {
    id: 'other',
    title: 'Other'
  }
];
const FreeConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    injuryType: '',
    incidentDate: '',
    cityCounty: '',
    description: '',
    smsConsent: false as boolean,
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
    alert('Thank you! We will contact you within 2 hours.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };
  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-blue-50">
      <SEO 
        title="Free Consultation | California Injury Lawyers | Trembach Law Firm" 
        description="Start your free case review today. No fees unless we win. Available 24/7 with multilingual support. Call (213) 908-9708." 
        canonical="/free-consultation" 
      />
      
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/70" />
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 relative">
            Get Your Free Case Review
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed relative">
            Expert legal representation with no upfront costs. We only get paid when you win.
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
                    <CardTitle className="text-2xl text-blue-600 font-display transition-colors">Tell Us About Your Case</CardTitle>
                    <p className="text-muted-foreground">
                      Please provide as much detail as possible to help us evaluate your claim.
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

                      <div>
                        <Label htmlFor="injuryType">Type of Injury *</Label>
                        <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger className="interactive-card">
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            {injuryTypes.map(type => (
                              <SelectItem key={type.id} value={type.id}>
                                {type.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div>
                        <Label htmlFor="incidentDate">Date of Injury/Accident/Diagnosis *</Label>
                        <Input
                          id="incidentDate"
                          type="date"
                          value={formData.incidentDate}
                          onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>

                      <div>
                        <Label htmlFor="cityCounty">City/County Where Injury Occurred *</Label>
                        <Input
                          id="cityCounty"
                          placeholder="e.g., Los Angeles, Orange County, San Francisco"
                          value={formData.cityCounty}
                          onChange={(e) => handleInputChange('cityCounty', e.target.value)}
                          required
                          className="interactive-card"
                        />
                      </div>

                      <div>
                        <Label htmlFor="description">Case Description *</Label>
                        <Textarea
                          id="description"
                          placeholder="Briefly describe what happened, your injuries/diagnosis, and any medical treatment received..."
                          value={formData.description}
                          onChange={(e) => handleInputChange('description', e.target.value)}
                          rows={4}
                          required
                          className="interactive-card"
                        />
                      </div>

                      <label className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        <input 
                          type="checkbox" 
                          id="smsConsent"
                          checked={formData.smsConsent}
                          onChange={(e) => setFormData(prev => ({ ...prev, smsConsent: e.target.checked }))}
                          required
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="space-y-2">
                          <span className="block">
                            By checking this box, you agree to receive TEXT messages from Trembach Law Firm related to your inquiry, follow-ups, and review requests at the phone number provided above. You may reply STOP to opt out at any time. For assistance, reply HELP. Messages and data rates may apply. Message frequency will vary. Please review our <a href="/privacy-policy" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and terms of service.
                          </span>
                          <span className="block">
                            Protected by reCAPTCHA, and Google's <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Privacy Policy</a> and <a href="https://policies.google.com/terms?hl=en" target="_blank" rel="noopener noreferrer" className="text-primary underline hover:text-primary/80">Terms of Service</a>.
                          </span>
                        </span>
                      </label>

                      <Button type="submit" size="lg" className="w-full btn-enhanced group">
                        Submit Case Review
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ThreeDVisualEffects>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="group overflow-hidden bg-white/90 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl transition-transform hover:-translate-y-0.5">
                <CardHeader>
                  <CardTitle className="text-slate-900 group-hover:text-blue-600 transition-colors">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Call for Immediate Help</p>
                      <p className="text-slate-600">(213) 908-9708</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Email Us</p>
                      <p className="text-slate-600">info@trembachlaw.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Serving All of California</p>
                      <p className="text-slate-600">Free consultations statewide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-900">Available 24/7</p>
                      <p className="text-slate-600">Emergency consultations available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="group overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white shadow-xl">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">No Fees Unless We Win</h3>
                  <p className="text-sm text-slate-700">
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
export default FreeConsultation;