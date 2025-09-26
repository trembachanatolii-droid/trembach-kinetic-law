import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, Phone, Video, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import heroBackground from '@/assets/schedule-consultation-hero.jpg';
import SEO from '@/components/SEO';


gsap.registerPlugin(ScrollTrigger);

const ScheduleConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    consultationType: '',
    accidentType: '',
    vesselType: '',
    injuryType: '',
    incidentDate: '',
    employmentStatus: '',
    urgency: '',
    caseDetails: ''
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
    console.log('Consultation scheduled:', formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Schedule Free Maritime Consultation | Trembach Law Firm"
        description="Book your confidential maritime accident consultation by phone, video, or in-person. Available 24/7 for maritime emergencies across California."
        canonical="/schedule-consultation"
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
            Schedule Your Free Maritime Consultation
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Book your confidential maritime accident consultation today. No fees unless we win your case.
          </p>
        </div>
      </section>

      {/* Go Back (below hero to avoid overlap with logo) */}
      <div className="container mx-auto px-6 mt-6">
        
      </div>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
            {/* Scheduling Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">Schedule Your Maritime Consultation</CardTitle>
                  <p className="text-muted-foreground">
                    Choose your preferred date, time, and consultation method for your maritime accident case.
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
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                        <Input
                          id="preferredDate"
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      <div>
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                        <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select time" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>{time}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="accidentType">Type of Maritime Accident</Label>
                        <Select onValueChange={(value) => handleInputChange('accidentType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select accident type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="slip-fall">Slip and Fall on Vessel</SelectItem>
                            <SelectItem value="equipment-failure">Equipment Failure</SelectItem>
                            <SelectItem value="collision">Vessel Collision</SelectItem>
                            <SelectItem value="explosion-fire">Explosion/Fire</SelectItem>
                            <SelectItem value="crane-accident">Crane/Loading Accident</SelectItem>
                            <SelectItem value="crushing">Crushing Injury</SelectItem>
                            <SelectItem value="chemical-exposure">Chemical Exposure</SelectItem>
                            <SelectItem value="man-overboard">Man Overboard</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="vesselType">Vessel/Platform Type</Label>
                        <Select onValueChange={(value) => handleInputChange('vesselType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select vessel type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cargo-ship">Cargo Ship</SelectItem>
                            <SelectItem value="tanker">Tanker</SelectItem>
                            <SelectItem value="fishing-vessel">Fishing Vessel</SelectItem>
                            <SelectItem value="passenger-ship">Passenger Ship/Cruise</SelectItem>
                            <SelectItem value="tugboat">Tugboat</SelectItem>
                            <SelectItem value="barge">Barge</SelectItem>
                            <SelectItem value="oil-rig">Oil Rig/Platform</SelectItem>
                            <SelectItem value="port-facility">Port Facility</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="injuryType">Type of Injury</Label>
                        <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select injury type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="back-spine">Back/Spine Injury</SelectItem>
                            <SelectItem value="broken-bones">Broken Bones</SelectItem>
                            <SelectItem value="head-brain">Head/Brain Injury</SelectItem>
                            <SelectItem value="burns">Burns</SelectItem>
                            <SelectItem value="amputation">Amputation</SelectItem>
                            <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                            <SelectItem value="multiple-injuries">Multiple Injuries</SelectItem>
                            <SelectItem value="fatality">Wrongful Death</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="incidentDate">Date of Incident</Label>
                        <Input
                          id="incidentDate"
                          type="date"
                          value={formData.incidentDate}
                          onChange={(e) => handleInputChange('incidentDate', e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="employmentStatus">Employment Status</Label>
                      <Select onValueChange={(value) => handleInputChange('employmentStatus', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select employment status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seaman">Seaman (Jones Act Covered)</SelectItem>
                          <SelectItem value="longshoreman">Longshoreman (LHWCA Covered)</SelectItem>
                          <SelectItem value="harbor-worker">Harbor Worker (LHWCA Covered)</SelectItem>
                          <SelectItem value="passenger">Passenger</SelectItem>
                          <SelectItem value="contractor">Independent Contractor</SelectItem>
                          <SelectItem value="visitor">Visitor/Guest</SelectItem>
                          <SelectItem value="unsure">Unsure</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="consultationType">Consultation Type</Label>
                        <Select onValueChange={(value) => handleInputChange('consultationType', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select consultation type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="phone">Phone Consultation</SelectItem>
                            <SelectItem value="video">Video Conference</SelectItem>
                            <SelectItem value="in-person">In-Person Meeting</SelectItem>
                            <SelectItem value="home-visit">Home Visit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Case Urgency</Label>
                        <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select urgency" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="routine">Routine</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                            <SelectItem value="emergency">Emergency</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="caseDetails">Brief Description of Your Maritime Accident</Label>
                      <Textarea
                        id="caseDetails"
                        placeholder="Please describe your maritime accident, injuries sustained, and any other relevant details..."
                        value={formData.caseDetails}
                        onChange={(e) => handleInputChange('caseDetails', e.target.value)}
                        rows={4}
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full group bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300">
                      Schedule Maritime Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Consultation Options & Info */}
            <div className="space-y-6">
              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">Consultation Options</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Phone Consultation</p>
                      <p className="text-sm text-muted-foreground">Convenient and immediate</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Video Conference</p>
                      <p className="text-sm text-muted-foreground">Face-to-face from home</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">In-Person Meeting</p>
                      <p className="text-sm text-muted-foreground">Meet at our office</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-semibold">Home Visit</p>
                      <p className="text-sm text-muted-foreground">We come to you</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden">
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">What to Expect</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">30-60 minutes depending on case complexity</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="font-semibold mb-2">We'll Discuss:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Your maritime legal rights (Jones Act, LHWCA)</li>
                      <li>• Maintenance and cure benefits</li>
                      <li>• Potential case value and compensation</li>
                      <li>• Timeline and legal process</li>
                      <li>• No-cost representation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card group hover-glow-primary shadow-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">Maritime Emergency Consultations</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    For maritime emergencies or urgent matters, call us directly at (818) 123-4567. We're available 24/7 for maritime accident emergencies.
                  </p>
                  <Button variant="outline" size="sm" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.location.href = 'tel:8181234567'}>
                    <Phone className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Call Now
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

export default ScheduleConsultation;