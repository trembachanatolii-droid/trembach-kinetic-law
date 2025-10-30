import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  Stethoscope, 
  MapPin, 
  Clock, 
  Users, 
  CheckCircle2, 
  ArrowRight, 
  Heart, 
  Brain,
  Shield,
  AlertTriangle,
  FileText
} from 'lucide-react';
import heroBackground from '@/assets/mass-torts-medical-guidance-hero.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

const MassTortsMedicalGuidance: React.FC = () => {
  const [searchData, setSearchData] = useState({
    location: '',
    injuryType: '',
    urgency: ''
  });

  const [recommendations, setRecommendations] = useState<any[]>([]);
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
    setSearchData(prev => ({ ...prev, [field]: value }));
  };

  const generateRecommendations = () => {
    let immediateSteps: string[] = [];
    let specialists: string[] = [];
    let urgencyLevel = 'routine';

    // Generate recommendations based on injury type
    switch (searchData.injuryType) {
      case 'cancer':
        immediateSteps.push('Consult with oncologist immediately');
        immediateSteps.push('Obtain complete medical records');
        immediateSteps.push('Schedule comprehensive cancer staging');
        specialists.push('Oncologist');
        specialists.push('Radiation Oncologist');
        specialists.push('Cancer Center');
        urgencyLevel = 'urgent';
        break;
      case 'organ-damage':
        immediateSteps.push('Schedule organ function tests');
        immediateSteps.push('Consult with organ specialist');
        immediateSteps.push('Monitor organ function regularly');
        specialists.push('Gastroenterologist');
        specialists.push('Nephrologist');
        specialists.push('Hepatologist');
        urgencyLevel = 'high';
        break;
      case 'neurological':
        immediateSteps.push('Neurological evaluation needed');
        immediateSteps.push('Brain/nerve imaging recommended');
        immediateSteps.push('Cognitive function testing');
        specialists.push('Neurologist');
        specialists.push('Neurosurgeon');
        specialists.push('Neuropsychologist');
        urgencyLevel = 'high';
        break;
      case 'cardiovascular':
        immediateSteps.push('Cardiac evaluation required');
        immediateSteps.push('ECG and echocardiogram');
        immediateSteps.push('Monitor blood pressure and heart rate');
        specialists.push('Cardiologist');
        specialists.push('Cardiac Surgeon');
        specialists.push('Electrophysiologist');
        urgencyLevel = 'high';
        break;
      case 'birth-defects':
        immediateSteps.push('Pediatric specialist consultation');
        immediateSteps.push('Genetic counseling recommended');
        immediateSteps.push('Developmental assessment');
        specialists.push('Pediatric Specialist');
        specialists.push('Genetic Counselor');
        specialists.push('Developmental Pediatrician');
        urgencyLevel = 'urgent';
        break;
      case 'respiratory':
        immediateSteps.push('Pulmonary function tests');
        immediateSteps.push('Chest imaging required');
        immediateSteps.push('Monitor breathing symptoms');
        specialists.push('Pulmonologist');
        specialists.push('Respiratory Therapist');
        specialists.push('Lung Specialist');
        urgencyLevel = 'moderate';
        break;
    }

    setRecommendations([{
      immediateSteps,
      specialists,
      urgencyLevel,
      location: searchData.location || 'California'
    }]);
  };

  const doctors = [
    {
      name: "Dr. Sarah Chen",
      specialty: "Oncology",
      hospital: "California Cancer Institute",
      location: "Los Angeles, CA",
      specialties: ["Mass Tort Cancer Cases", "Environmental Cancer", "Pharmaceutical Oncology"],
      rating: 4.9
    },
    {
      name: "Dr. Michael Rodriguez",
      specialty: "Pulmonology",
      hospital: "UC San Francisco Medical Center",
      location: "San Francisco, CA", 
      specialties: ["Environmental Lung Disease", "Chemical Exposure", "Occupational Lung Injury"],
      rating: 4.8
    },
    {
      name: "Dr. Jennifer Wu",
      specialty: "Neurology",
      hospital: "Cedars-Sinai Medical Center",
      location: "Los Angeles, CA",
      specialties: ["Toxic Encephalopathy", "Drug-Induced Neurological Injury", "Environmental Neurotoxicity"],
      rating: 4.9
    }
  ];

  return (
    <div ref={sectionRef} className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5">
      <SEO 
        title="Mass Torts Medical Guidance | Expert Care Coordination | Trembach Law Firm"
        description="Comprehensive medical guidance for mass tort patients. Treatment options, specialist referrals, and care coordination for pharmaceutical, medical device, and environmental injury victims."
        canonical="/mass-torts-medical-guidance"
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
            Mass Torts Medical Guidance
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-fade-in">
            Connect with mass tort specialists and get comprehensive medical guidance for your journey.
          </p>
        </div>
      </section>

      <GoBack />

      {/* Quick Actions */}
      <section className="py-12 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Find Specialists</h3>
              <p className="text-sm text-muted-foreground">Connect with mass tort medical experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Location-Based</h3>
              <p className="text-sm text-muted-foreground">Find care near you across California</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Urgent Care</h3>
              <p className="text-sm text-muted-foreground">Priority appointments when needed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary mb-2">Care Coordination</h3>
              <p className="text-sm text-muted-foreground">Complete support throughout treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Guidance Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8">
            {/* Search Form */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Heart className="w-6 h-6 text-primary" />
                    Get Personalized Medical Guidance
                  </CardTitle>
                  <p className="text-muted-foreground text-lg">
                    Connect with mass tort specialists and get personalized treatment recommendations.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="location" className="text-foreground font-medium">Your Location</Label>
                      <Select onValueChange={(value) => handleInputChange('location', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="los-angeles">Los Angeles</SelectItem>
                          <SelectItem value="san-francisco">San Francisco</SelectItem>
                          <SelectItem value="san-diego">San Diego</SelectItem>
                          <SelectItem value="sacramento">Sacramento</SelectItem>
                          <SelectItem value="fresno">Fresno</SelectItem>
                          <SelectItem value="other">Other California City</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="injuryType" className="text-foreground font-medium">Type of Injury</Label>
                      <Select onValueChange={(value) => handleInputChange('injuryType', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cancer">Cancer</SelectItem>
                          <SelectItem value="organ-damage">Organ Damage</SelectItem>
                          <SelectItem value="neurological">Neurological Disorders</SelectItem>
                          <SelectItem value="cardiovascular">Cardiovascular Issues</SelectItem>
                          <SelectItem value="birth-defects">Birth Defects</SelectItem>
                          <SelectItem value="respiratory">Respiratory Problems</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="urgency" className="text-foreground font-medium">Urgency Level</Label>
                    <Select onValueChange={(value) => handleInputChange('urgency', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select urgency level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="emergency">Emergency - Need immediate care</SelectItem>
                        <SelectItem value="urgent">Urgent - Within 1-2 days</SelectItem>
                        <SelectItem value="routine">Routine - Within 1-2 weeks</SelectItem>
                        <SelectItem value="consultation">Consultation - Planning care</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    onClick={generateRecommendations}
                    className="w-full text-lg py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 group"
                  >
                    Get Medical Recommendations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  {/* Recommendations Display */}
                  {recommendations.length > 0 && (
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6 border border-primary/20">
                      <h3 className="text-xl font-semibold text-primary mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5" />
                        Your Personalized Recommendations
                      </h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Immediate Steps:</h4>
                          <ul className="space-y-1">
                            {recommendations[0].immediateSteps.map((step: string, index: number) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-primary mb-2">Recommended Specialists:</h4>
                          <ul className="space-y-1">
                            {recommendations[0].specialists.map((specialist: string, index: number) => (
                              <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Stethoscope className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                {specialist}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-primary/10 rounded-lg p-4 border-l-4 border-primary">
                          <h4 className="font-semibold text-primary mb-1">Priority Level: {recommendations[0].urgencyLevel.charAt(0).toUpperCase() + recommendations[0].urgencyLevel.slice(1)}</h4>
                          <p className="text-sm text-muted-foreground">
                            Based on your injury type, we recommend seeking medical attention with this priority level.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Information Sidebar */}
            <div className="space-y-6">
              <Card className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    Medical Guidance Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Expert specialist referrals
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Treatment coordination
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Medical record assistance
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Insurance navigation help
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      Second opinion facilitation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="glass-card border-primary/20 bg-gradient-to-br from-primary/15 to-primary/5 backdrop-blur-md shadow-2xl">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2 text-primary">Need Immediate Help?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our medical coordination team is available to help you navigate urgent medical needs.
                  </p>
                  <Button variant="outline" size="sm" className="w-full group hover:bg-primary hover:text-primary-foreground transition-all duration-300" onClick={() => window.location.href = 'tel:8181234567'}>
                    <AlertTriangle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Call (818) 123-4567
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Featured Specialists */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-primary mb-12">Featured Mass Tort Medical Specialists</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {doctors.map((doctor, index) => (
                <Card key={index} className="glass-card border-primary/10 bg-gradient-to-br from-card/90 to-card/70 backdrop-blur-md shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center justify-between">
                      <span>{doctor.name}</span>
                      <Badge variant="secondary">{doctor.rating} ★</Badge>
                    </CardTitle>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground">{doctor.hospital}</p>
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {doctor.location}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary">Specialties:</h4>
                      {doctor.specialties.map((specialty, idx) => (
                        <Badge key={idx} variant="outline" className="mr-2 mb-2 text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-4 group hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Request Consultation
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MassTortsMedicalGuidance;