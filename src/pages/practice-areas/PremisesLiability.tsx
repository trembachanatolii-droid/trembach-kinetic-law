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
  Home
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/premises-liability-hero.jpg';
import whatToDoImage from '@/assets/practice-areas/premises-liability.jpg';
import accidentTypesImage from '@/assets/practice-areas/construction-accidents.jpg';
import provingNegligenceImage from '@/assets/hero-background-scales.jpg';
import compensationImage from '@/assets/practice-areas/courthouse-professional.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  title: string;
  content: React.ReactNode;
  isActive: boolean;
}

// FAQ data
const faqData = [
  {
    question: "What is premises liability?",
    answer: "Premises liability refers to the legal responsibility of property owners and occupiers to maintain safe conditions for visitors and to warn of potential hazards."
  },
  {
    question: "What types of accidents fall under premises liability?",
    answer: "Common premises liability accidents include slip and fall, trip and fall, inadequate security, swimming pool accidents, dog bites on property, falling objects, and defective conditions."
  },
  {
    question: "How long do I have to file a premises liability claim in California?",
    answer: "Generally, you have two years from the date of injury to file a premises liability lawsuit in California. Claims against government entities have shorter deadlines."
  },
  {
    question: "What do I need to prove in a premises liability case?",
    answer: "You must prove the property owner knew or should have known about the dangerous condition, failed to fix it or warn visitors, and that this caused your injuries."
  },
  {
    question: "Can I sue if I was hurt while trespassing?",
    answer: "Property owners generally owe limited duty to trespassers, but there are exceptions, especially for children and known frequent trespassers."
  }
];

const PremisesLiability: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    accidentDate: '',
    accidentLocation: '',
    injuryType: '',
    propertyType: ''
  });

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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
        title="California Premises Liability Lawyer | Property Accident Attorney | Free Consultation"
        description="Experienced California premises liability attorneys. Free consultation for slip and fall, inadequate security, and property accidents. No fees unless we win."
        keywords="premises liability lawyer California, slip and fall attorney, property accident law, negligent security"
        canonical="https://yourlaw.com/practice-areas/premises-liability"
      />

      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            California Premises Liability Lawyers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Property owners must maintain safe conditions. Free consultation for all accident cases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              Free Case Evaluation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
              Call (855) 374-2906
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Free Case Evaluation Section */}
        <section id="case-evaluation" className="content-section mb-16">
          <ThreeDVisualEffects>
            <div className="relative rounded-2xl p-12 glass-card bg-gradient-to-br from-blue-50/90 to-indigo-100/80 border border-blue-200/50 shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                    Free Premises Liability Case Evaluation
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                    Property owners have a duty to keep visitors safe. Get your free case evaluation to learn about your rights to compensation.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-8" role="form" aria-label="Premises Liability Case Evaluation Form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-semibold text-foreground">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your first name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-semibold text-foreground">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="accidentDate" className="text-sm font-semibold text-foreground">
                        Date of Incident *
                      </label>
                      <input
                        type="date"
                        id="accidentDate"
                        name="accidentDate"
                        value={formData.accidentDate}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="propertyType" className="text-sm font-semibold text-foreground">
                        Type of Property *
                      </label>
                      <Select value={formData.propertyType} onValueChange={(value) => handleSelectChange('propertyType', value)} required>
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                          <SelectValue placeholder="Select property type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="store">Store/Retail</SelectItem>
                          <SelectItem value="restaurant">Restaurant</SelectItem>
                          <SelectItem value="parking-lot">Parking Lot</SelectItem>
                          <SelectItem value="apartment">Apartment Complex</SelectItem>
                          <SelectItem value="office">Office Building</SelectItem>
                          <SelectItem value="sidewalk">Sidewalk/Public</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="injuryType" className="text-sm font-semibold text-foreground">
                        Type of Injury *
                      </label>
                      <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)} required>
                        <SelectTrigger className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200">
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="slip-fall">Slip and Fall</SelectItem>
                          <SelectItem value="trip-fall">Trip and Fall</SelectItem>
                          <SelectItem value="inadequate-security">Inadequate Security</SelectItem>
                          <SelectItem value="falling-object">Falling Object</SelectItem>
                          <SelectItem value="defective-stairs">Defective Stairs</SelectItem>
                          <SelectItem value="poor-lighting">Poor Lighting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="accidentLocation" className="text-sm font-semibold text-foreground">
                        Accident Location *
                      </label>
                      <input
                        type="text"
                        id="accidentLocation"
                        name="accidentLocation"
                        value={formData.accidentLocation}
                        onChange={handleInputChange}
                        required
                        aria-required="true"
                        className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200"
                        placeholder="Enter location of accident"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="incidentDescription" className="text-sm font-semibold text-foreground">
                      Describe the Incident *
                    </label>
                    <Textarea
                      id="incidentDescription"
                      name="incidentDescription"
                      rows={4}
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background/50 backdrop-blur focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                      placeholder="Please provide details about the incident, including the conditions that caused your injury and any witnesses present..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                    Get My Free Premises Liability Case Evaluation
                  </Button>
                </form>
              </div>
            </div>
          </ThreeDVisualEffects>
        </section>

        {/* What To Do Section */}
        <section id="what-to-do" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">What To Do After a Premises Liability Accident</h2>
          
          <div className="mb-8">
            <img 
              src={whatToDoImage} 
              alt="What to do after a premises liability accident - immediate steps for documentation and safety" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              If you've been injured on someone else's property, taking immediate action can significantly impact your ability to recover compensation. Document the scene, seek medical attention, and contact an experienced premises liability attorney to protect your rights.
            </p>
          </div>
        </section>

        {/* Types of Accidents Section */}
        <section id="types-of-accidents" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Types of Premises Liability Accidents</h2>
          
          <div className="mb-8">
            <img 
              src={accidentTypesImage} 
              alt="Common types of premises liability accidents including slip and fall, trip and fall, and inadequate security incidents" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <ul className="list-disc list-inside space-y-2">
              <li>Slip and fall accidents due to wet floors, spills, or poor maintenance.</li>
              <li>Trip and fall accidents caused by uneven surfaces, debris, or poor lighting.</li>
              <li>Inadequate security leading to assaults or robberies.</li>
              <li>Swimming pool accidents and drowning incidents.</li>
              <li>Elevator and escalator malfunctions.</li>
              <li>Falling objects from shelves or construction sites.</li>
              <li>Dog bites and animal attacks on property.</li>
              <li>Fire and explosion incidents due to negligent maintenance.</li>
              <li>Toxic exposure from chemicals or mold.</li>
              <li>Construction site injuries to non-workers.</li>
            </ul>
          </div>
        </section>

        {/* Proving Negligence Section */}
        <section id="proving-negligence" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Proving Negligence in Premises Liability Cases</h2>
          
          <div className="mb-8">
            <img 
              src={provingNegligenceImage} 
              alt="Proving negligence in premises liability cases - key evidence and legal requirements" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              To succeed in a premises liability case, you must prove that the property owner knew or should have known about the dangerous condition and failed to address it. Key evidence includes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Photos and videos of the accident scene and hazardous conditions.</li>
              <li>Medical records documenting your injuries and treatment.</li>
              <li>Witness statements from people who saw the accident.</li>
              <li>Maintenance records showing the property owner's knowledge of issues.</li>
              <li>Security camera footage of the incident.</li>
              <li>Incident reports and witness statements.</li>
              <li>Expert testimony on building codes and safety standards.</li>
            </ul>
          </div>
        </section>

        {/* Compensation Section */}
        <section id="compensation" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Compensation in Premises Liability Cases</h2>
          
          <div className="mb-8">
            <img 
              src={compensationImage} 
              alt="Understanding compensation types in premises liability cases - economic and non-economic damages" 
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p>
              Victims may recover economic damages such as medical expenses, lost wages, and property damage, as well as non-economic damages like pain and suffering, emotional distress, and loss of enjoyment of life. In some cases, punitive damages may be awarded for malicious or reckless conduct.
            </p>
          </div>
        </section>

        {/* Time Limits Section */}
        <section id="time-limits" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Time Limits to File a Claim</h2>
          <div className="prose prose-lg max-w-none">
            <p>
              In California, the statute of limitations for premises liability claims is generally two years from the date of the accident. Claims against government entities must be filed within six months. Acting promptly is essential to preserve evidence and protect your rights.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section mb-12">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <Card key={index} className="glass-card">
                <Collapsible open={openFAQ === index} onOpenChange={() => toggleFAQ(index)}>
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
                </Collapsible>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Don't Wait - Time Limits Apply for California Premises Liability Claims
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-4xl mx-auto">
            Property owners must maintain safe conditions for visitors. If you've been injured due to negligent property maintenance, inadequate security, or dangerous conditions, you may be entitled to significant compensation. Our experienced premises liability attorneys fight for maximum recovery under California law.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-white text-red-600 hover:bg-red-50"
              onClick={() => window.location.href = '/premises-liability-case-evaluation'}
            >
              Free Case Evaluation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 text-white border-white hover:bg-white/10"
              onClick={() => window.location.href = 'tel:8553742906'}
            >
              Call (855) 374-2906
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremisesLiability;