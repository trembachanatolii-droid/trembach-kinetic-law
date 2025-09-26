import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import ThreeDVisualEffects from '@/components/ThreeDVisualEffects';
import '@/styles/premium-3d-effects.css';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Star, 
  ChevronDown, 
  ChevronUp,
  Heart,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Stethoscope,
  Building,
  Map,
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Home,
  PawPrint
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/dog-bites-hero-new.jpg';
import medicalCareImage from '@/assets/practice-areas/dog-bite-medical-care.jpg';
import lawsImage from '@/assets/practice-areas/dog-bite-laws.jpg';
import compensationImage from '@/assets/practice-areas/dog-bite-compensation.jpg';
import incidentImage from '@/assets/practice-areas/dog-bite-incident-scene.jpg';
import preventionImage from '@/assets/practice-areas/dog-bite-prevention.jpg';
import legalConsultationImage from '@/assets/practice-areas/dog-bite-legal-consultation.jpg';
import medicalTreatmentImage from '@/assets/practice-areas/dog-bite-medical-treatment.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

// FAQs data
const faqData = [
  {
    question: "What should I do immediately after a dog bite in California?",
    answer: "Seek immediate medical attention, report the incident to animal control and police, document the scene with photos, collect witness information, and avoid signing any documents from insurance companies without legal representation."
  },
  {
    question: "Is the dog owner liable even if the dog has never bitten anyone before?",
    answer: "Yes. California has a strict liability law that holds dog owners responsible for bites regardless of the dog's previous behavior or the owner's knowledge of aggression."
  },
  {
    question: "How long do I have to file a dog bite lawsuit in California?",
    answer: "Generally, you have two years from the date of the attack to file a personal injury lawsuit. However, it's best to contact an attorney immediately to preserve evidence and protect your rights."
  },
  {
    question: "What compensation can I receive for a dog bite injury?",
    answer: "You may recover medical expenses, lost wages, pain and suffering, emotional distress, scarring and disfigurement, future medical costs, and in severe cases, punitive damages."
  },
  {
    question: "Can I sue if I was bitten while trespassing?",
    answer: "California's strict liability law may not apply if you were trespassing, but you might still have a case under negligence theory if the owner was aware of the dog's dangerous propensities."
  }
];

const DogBitesAnimalAttacks: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    accidentDate: '',
    dogType: '',
    injuryType: '',
    medicalTreatment: '',
    incidentDescription: '',
    consent: false
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Dog Bite Lawyer | Free Case Evaluation | Strict Liability Law"
        description="Experienced California dog bite attorneys. Free case evaluation. Strict liability law protects victims. No fees unless we win. Call (818) 123-4567 today."
        keywords="dog bite lawyer California, dog attack attorney, animal bite law, strict liability, dog bite compensation"
        canonical="https://yourlaw.com/practice-areas/dog-bites-animal-attacks"
      />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            California Dog Bite Lawyers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Strict liability law protects victims. Free case evaluation. No fees unless we win.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Free Case Evaluation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Free Case Evaluation Section */}
        <section id="case-evaluation" className="content-section mb-16">
          <ThreeDVisualEffects>
            <div className="premium-form-container premium-form-container--blue-solid interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-display text-slate-900 mb-2 font-bold">Get Your Free Dog Bite Case Evaluation</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <p className="text-slate-700 text-lg leading-relaxed">Specialized evaluation for dog bite injury cases throughout California</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6" role="form" aria-label="Dog Bite Case Evaluation Form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-slate-800 text-base font-medium">First Name *</label>
                    <Input
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="h-12 text-base text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-slate-800 text-base font-medium">Last Name *</label>
                    <Input
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="h-12 text-base text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-slate-800 text-base font-medium">Email *</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="h-12 text-base text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-slate-800 text-base font-medium">Phone *</label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="h-12 text-base text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="accidentDate" className="text-slate-800 text-base font-medium">Date of Dog Bite Incident *</label>
                    <Input
                      type="date"
                      id="accidentDate"
                      name="accidentDate"
                      value={formData.accidentDate}
                      onChange={handleInputChange}
                      required
                      aria-required="true"
                      className="h-12 text-base text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="dogType" className="text-slate-800 text-base font-medium">Type of Dog *</label>
                    <Select value={formData.dogType} onValueChange={(value) => handleSelectChange('dogType', value)} required>
                      <SelectTrigger className="h-12 text-base text-slate-900 bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <SelectValue placeholder="Select dog breed/type" className="text-slate-500" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-300 z-50">
                        <SelectItem value="pit-bull" className="text-slate-900 hover:bg-blue-50">Pit Bull</SelectItem>
                        <SelectItem value="german-shepherd" className="text-slate-900 hover:bg-blue-50">German Shepherd</SelectItem>
                        <SelectItem value="rottweiler" className="text-slate-900 hover:bg-blue-50">Rottweiler</SelectItem>
                        <SelectItem value="doberman" className="text-slate-900 hover:bg-blue-50">Doberman</SelectItem>
                        <SelectItem value="labrador" className="text-slate-900 hover:bg-blue-50">Labrador</SelectItem>
                        <SelectItem value="mixed-breed" className="text-slate-900 hover:bg-blue-50">Mixed Breed</SelectItem>
                        <SelectItem value="unknown" className="text-slate-900 hover:bg-blue-50">Unknown</SelectItem>
                        <SelectItem value="other" className="text-slate-900 hover:bg-blue-50">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="injuryType" className="text-slate-800 text-base font-medium">Type of Injuries *</label>
                    <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)} required>
                      <SelectTrigger className="h-12 text-base text-slate-900 bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <SelectValue placeholder="Select injury type" className="text-slate-500" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-300 z-50">
                        <SelectItem value="puncture-wounds" className="text-slate-900 hover:bg-blue-50">Puncture Wounds</SelectItem>
                        <SelectItem value="lacerations" className="text-slate-900 hover:bg-blue-50">Lacerations</SelectItem>
                        <SelectItem value="facial-injuries" className="text-slate-900 hover:bg-blue-50">Facial Injuries</SelectItem>
                        <SelectItem value="nerve-damage" className="text-slate-900 hover:bg-blue-50">Nerve Damage</SelectItem>
                        <SelectItem value="scarring" className="text-slate-900 hover:bg-blue-50">Scarring</SelectItem>
                        <SelectItem value="emotional-trauma" className="text-slate-900 hover:bg-blue-50">Emotional Trauma</SelectItem>
                        <SelectItem value="multiple-injuries" className="text-slate-900 hover:bg-blue-50">Multiple Injuries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="medicalTreatment" className="text-slate-800 text-base font-medium">Medical Treatment Received *</label>
                    <Select value={formData.medicalTreatment} onValueChange={(value) => handleSelectChange('medicalTreatment', value)} required>
                      <SelectTrigger className="h-12 text-base text-slate-900 bg-white border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                        <SelectValue placeholder="Select treatment type" className="text-slate-500" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-slate-300 z-50">
                        <SelectItem value="emergency-room" className="text-slate-900 hover:bg-blue-50">Emergency Room</SelectItem>
                        <SelectItem value="urgent-care" className="text-slate-900 hover:bg-blue-50">Urgent Care</SelectItem>
                        <SelectItem value="surgery" className="text-slate-900 hover:bg-blue-50">Surgery Required</SelectItem>
                        <SelectItem value="plastic-surgery" className="text-slate-900 hover:bg-blue-50">Plastic Surgery</SelectItem>
                        <SelectItem value="ongoing-treatment" className="text-slate-900 hover:bg-blue-50">Ongoing Treatment</SelectItem>
                        <SelectItem value="no-treatment" className="text-slate-900 hover:bg-blue-50">No Treatment Yet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="incidentDescription" className="text-slate-800 text-base font-medium">
                    Please describe your dog bite injury *
                  </label>
                  <Textarea
                    id="incidentDescription"
                    name="incidentDescription"
                    rows={5}
                    required
                    aria-required="true"
                    className="text-slate-900 bg-white border-slate-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-blue-500"
                    placeholder="Please provide details about how the dog bite occurred..."
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
                    required
                    aria-required="true"
                  />
                  <label htmlFor="consent" className="text-slate-700 text-sm leading-relaxed">
                    I consent to being contacted by Trembach Law Firm regarding my dog bite case. I understand this consultation is free and there is no obligation. *
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full btn-enhanced py-4 text-lg bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
                >
                  Get My Free Case Evaluation
                </Button>
              </form>
            </div>
          </ThreeDVisualEffects>
        </section>

        {/* California Laws Section */}
        <section id="california-laws" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Understanding California Dog Bite Laws
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src={lawsImage} 
                  alt="California dog bite laws - strict liability protection for victims" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">Strict Liability Law</h3>
                <p className="text-muted-foreground">
                  California Civil Code Section 3342 imposes strict liability on dog owners for bites that occur in public places or when the victim is lawfully on private property.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>No "one free bite" rule</li>
                  <li>Owner liable regardless of dog's history</li>
                  <li>Applies to all breeds and sizes</li>
                  <li>Covers attacks on public and private property</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Injuries & Treatment Section */}
        <section id="injuries-treatment" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Stethoscope className="w-8 h-8 text-primary" />
              Devastating Dog Bite Injuries & Treatment
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Dog attacks can cause severe physical and psychological trauma requiring immediate and ongoing medical care.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Physical Injuries</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Puncture wounds and lacerations</li>
                  <li>• Facial injuries and disfigurement</li>
                  <li>• Nerve damage and loss of function</li>
                  <li>• Broken bones and fractures</li>
                  <li>• Infections and scarring</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Medical Treatment</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Emergency room care</li>
                  <li>• Surgery and reconstructive procedures</li>
                  <li>• Plastic surgery for scarring</li>
                  <li>• Physical therapy and rehabilitation</li>
                  <li>• Ongoing wound care</li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">Psychological Impact</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Post-traumatic stress disorder</li>
                  <li>• Anxiety and depression</li>
                  <li>• Fear of dogs (cynophobia)</li>
                  <li>• Sleep disorders and nightmares</li>
                  <li>• Social withdrawal and isolation</li>
                </ul>
              </Card>
            </div>
          </Card>
        </section>

        {/* Compensation Section */}
        <section id="compensation" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              Maximum Compensation for Dog Bite Victims
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={compensationImage} 
                  alt="Dog bite compensation - understanding your rights to damages in California" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Economic Damages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Medical expenses (past and future)</li>
                    <li>• Lost wages and income</li>
                    <li>• Rehabilitation costs</li>
                    <li>• Property damage</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Non-Economic Damages</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pain and suffering</li>
                    <li>• Emotional distress</li>
                    <li>• Scarring and disfigurement</li>
                    <li>• Loss of enjoyment of life</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Time Limits Section */}
        <section id="time-limits" className="content-section mb-16">
          <Card className="p-8 border-red-200 bg-red-50">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-red-800">
              <Clock className="w-8 h-8 text-red-600" />
              Don't Wait - Time Limits Apply for California Dog Bite Claims
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-700">Statute of Limitations</h3>
                <p className="text-red-700 mb-4">
                  In California, you generally have <strong>2 years</strong> from the date of the dog bite to file a personal injury lawsuit.
                </p>
                <ul className="space-y-2 text-red-600">
                  <li>• Evidence can be lost or destroyed</li>
                  <li>• Witnesses may forget details</li>
                  <li>• Medical records may be discarded</li>
                  <li>• Insurance companies may deny coverage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-red-700">Act Now</h3>
                <p className="text-red-700 mb-4">
                  Early action protects your rights and strengthens your case for maximum compensation.
                </p>
                <Button className="bg-red-600 hover:bg-red-700 text-white">
                  Free Case Evaluation
                </Button>
              </div>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Frequently Asked Questions About Dog Bites
            </h2>
            <p className="text-muted-foreground mb-8">
              Get answers to common questions about dog bite laws and your rights in California.
            </p>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Collapsible key={index} open={openFAQ === index} onOpenChange={() => toggleFAQ(index)}>
                  <Card className="overflow-hidden">
                    <CollapsibleTrigger className="w-full">
                      <CardHeader className="flex flex-row items-center justify-between p-6 hover:bg-muted/50 transition-colors">
                        <h3 className="text-left font-semibold">{faq.question}</h3>
                        {openFAQ === index ? (
                          <ChevronUp className="w-5 h-5 text-primary" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-primary" />
                        )}
                      </CardHeader>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="pt-0 pb-6 px-6">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>
          </Card>
        </section>

        {/* Call to Action */}
        <Card className="p-8 text-center bg-primary/5 border-primary/20">
          <h2 className="text-3xl font-bold mb-6">Attacked by a Dog in California?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-3xl mx-auto">
            California's strict liability law protects dog bite victims regardless of the animal's history. Don't let insurance companies minimize your injuries or blame you for the attack. Our experienced dog bite attorneys understand the physical and emotional trauma these attacks cause and fight aggressively for maximum compensation under California's powerful protection laws.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/dog-bite-case-evaluation'}>
              Free Dog Bite Case Review
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"
              onClick={() => window.location.href = 'tel:8181234567'}
            >
              Call (818) 123-4567
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DogBitesAnimalAttacks;