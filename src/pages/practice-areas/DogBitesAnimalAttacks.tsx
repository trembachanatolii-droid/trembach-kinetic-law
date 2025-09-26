import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Progress } from '@/components/ui/progress';
import { ThreeDVisualEffects } from '@/components/3DVisualEffects';
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
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  PawPrint,
  DollarSign,
  HelpCircle
} from 'lucide-react';
import '@/styles/premium-3d-effects.css';
import heroBackground from '@/assets/practice-areas/dog-bites-hero-new.jpg';
import sidebarImage from '@/assets/practice-areas/dog-bite-medical-care.jpg';
import lawsImage from '@/assets/practice-areas/dog-bite-laws.jpg';
import compensationImage from '@/assets/practice-areas/dog-bite-compensation.jpg';
import incidentImage from '@/assets/practice-areas/dog-bite-incident-scene.jpg';
import preventionImage from '@/assets/practice-areas/dog-bite-prevention.jpg';
import legalConsultationImage from '@/assets/practice-areas/dog-bite-legal-consultation.jpg';
import medicalTreatmentImage from '@/assets/practice-areas/dog-bite-medical-treatment.jpg';
import SEO from '@/components/SEO';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const DogBitesAnimalAttacks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    
    // Incident Information
    incidentDate: '',
    attackType: '',
    injuryType: '',
    medicalTreatment: '',
    symptoms: [] as string[],
    
    // Dog & Owner Information
    dogBreed: '',
    dogSize: '',
    ownerKnown: '',
    incidentLocation: '',
    witnesses: '',
    
    // Legal Information
    previousClaim: '',
    policeReport: '',
    urgency: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'liability-laws', label: 'LIABILITY LAWS', icon: Scale },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Stethoscope },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Shield },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation - instant
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

      // Content sections animation
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

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const scrollToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Log form data (in real app, this would be sent to server)
    console.log('Dog Bite Case Evaluation Submitted:', formData);
    
    // Show success message and potentially redirect
    alert('Your case evaluation has been submitted. We will contact you within 24 hours.');
    
    // Reset form
    setCurrentStep(1);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      incidentDate: '',
      attackType: '',
      injuryType: '',
      medicalTreatment: '',
      symptoms: [],
      dogBreed: '',
      dogSize: '',
      ownerKnown: '',
      incidentLocation: '',
      witnesses: '',
      previousClaim: '',
      policeReport: '',
      urgency: ''
    });
  };

  // Comprehensive FAQs data - 50+ questions
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
    },
    {
      question: "What if the dog bite happened on someone else's property?",
      answer: "You may have claims against both the dog owner and the property owner. Property owners have a duty to ensure their premises are safe from dangerous animals, and may be liable if they allowed a dangerous dog on their property."
    },
    {
      question: "Do I need a lawyer for a dog bite case?",
      answer: "While not required by law, a lawyer is highly recommended. Dog bite cases involve complex insurance issues, medical documentation, and liability determinations that require legal expertise to maximize your compensation."
    },
    {
      question: "How much does a dog bite lawyer cost?",
      answer: "Most dog bite lawyers work on a contingency fee basis, meaning you pay nothing unless they win your case. The fee is typically a percentage of the settlement or judgment."
    },
    {
      question: "What if the dog owner doesn't have insurance?",
      answer: "You may still recover compensation through your own homeowner's or renter's insurance, the property owner's insurance, or by pursuing the dog owner's personal assets."
    },
    {
      question: "Can children file dog bite claims in California?",
      answer: "Yes, children have special protections under California law. Parents or guardians can file claims on behalf of minor children, and the statute of limitations may be extended until the child reaches age 18."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Dog Bite Lawyer | Free Case Evaluation | Strict Liability Law"
        description="Experienced California dog bite attorneys. Free case evaluation. Strict liability law protects victims. No fees unless we win. Call (818) 123-4567 today."
        keywords="California dog bite lawyer, dog attack attorney, strict liability law, dog bite compensation, animal attack, California personal injury"
        canonical="https://www.trembachlawfirm.com/practice-areas/dog-bites-animal-attacks"
      />

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button - positioned in hero overlay */}
        <div className="absolute top-20 left-6 z-10">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50 backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              California Dog Bite Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Strict Liability Protection</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/dog-bite-case-evaluation'}
            >
              START MY FREE CASE EVALUATION
            </Button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 py-4">
              {tabs.map((tab) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => scrollToSection(tab.id)}
                    className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                      activeTab === tab.id 
                        ? 'bg-white text-primary' 
                        : 'text-white hover:bg-white/20'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2" ref={contentRef}>
            
            {/* Overview Section */}
            <section id="overview" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Dog Bite Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  If you or a loved one has been attacked by a dog in California, you deserve justice and compensation for your injuries. Dog bites can cause devastating physical and emotional trauma, leaving victims with permanent scars, ongoing medical needs, and psychological distress that can last a lifetime.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we understand the unique challenges faced by dog bite victims. With extensive experience in California's strict liability dog bite laws and a deep commitment to fighting for our clients' rights, we're here to help you secure the maximum compensation you deserve while you focus on healing.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Show More About Our California Dog Bite Practice
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <PawPrint className="w-5 h-5 mr-2 text-primary" />
                          Strict Liability Expertise
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>California's strict liability law means dog owners are responsible for injuries their pets cause, regardless of the animal's previous behavior or the owner's knowledge of aggression.</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="glass-card group hover-glow-primary transition-all duration-300 hover:scale-105">
                      <CardHeader>
                        <CardTitle className="flex items-center group-hover:text-primary transition-colors">
                          <Stethoscope className="w-5 h-5 mr-2 text-primary" />
                          Medical Understanding
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>We work with leading medical experts to fully understand your injuries, from immediate trauma care to long-term reconstruction needs and psychological treatment.</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-muted p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Why Choose Trembach Law Firm for Your Dog Bite Case?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <Shield className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Aggressive Representation</h4>
                          <p className="text-sm text-muted-foreground">We fight tirelessly against insurance companies and dog owners who try to minimize your claim or deny responsibility.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Immediate Action</h4>
                          <p className="text-sm text-muted-foreground">We move quickly to preserve evidence, interview witnesses, and build a strong case while details are fresh.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">Compassionate Support</h4>
                          <p className="text-sm text-muted-foreground">We understand the emotional trauma of dog attacks and provide empathetic guidance throughout your recovery.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Award className="w-5 h-5 text-primary mt-1 mr-3" />
                        <div>
                          <h4 className="font-semibold">No Win, No Fee</h4>
                          <p className="text-sm text-muted-foreground">We work on contingency - you pay nothing unless we secure compensation for your injuries.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <h3>Comprehensive California Dog Bite Representation</h3>
                    <p>
                      Dog bite cases in California involve complex legal, medical, and insurance issues. Our firm has the resources and expertise to handle every aspect of your case, from investigating the incident and identifying all liable parties to working with medical experts who can clearly explain the full extent of your injuries and future needs.
                    </p>
                    
                    <p>
                      We investigate every potential source of liability to ensure maximum compensation for our clients:
                    </p>
                    
                    <ul>
                      <li>Dog owners under California's strict liability statute</li>
                      <li>Property owners who allowed dangerous dogs on their premises</li>
                      <li>Landlords who knew of dangerous animals on rental properties</li>
                      <li>Dog walkers, pet sitters, and animal care providers</li>
                      <li>Employers if the attack occurred during work activities</li>
                      <li>Governmental entities for attacks by police or military dogs</li>
                    </ul>
                    
                    <p>
                      This comprehensive approach often results in higher compensation as we identify multiple defendants and pursue claims through various insurance policies and legal theories to ensure no source of recovery is overlooked.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Liability Laws Section */}
            <section id="liability-laws" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Understanding California's Strict Liability Dog Bite Laws</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California Civil Code Section 3342 establishes one of the strongest protections for dog bite victims in the United States. Unlike many states that follow the "one bite rule," California holds dog owners strictly liable for injuries caused by their pets, regardless of the animal's previous behavior or the owner's knowledge of any aggressive tendencies.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="text-xl font-semibold text-blue-900 mb-3">Key Elements of California's Dog Bite Law</h3>
                <ul className="space-y-2 text-blue-800">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    The dog owner is liable regardless of the dog's past behavior
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    No proof of negligence or knowledge of dangerous propensities required
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    Victim must be in a public place or lawfully on private property
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                    Covers all damages including medical bills, lost wages, and pain and suffering
                  </li>
                </ul>
              </div>

              <Collapsible open={expandedSections.liability} onOpenChange={() => toggleSection('liability')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Learn More About California Dog Bite Laws
                    {expandedSections.liability ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>When Strict Liability Applies</h3>
                    <p>
                      California's strict liability law applies in most dog bite situations, but there are specific requirements that must be met:
                    </p>
                    
                    <h4>Location Requirements</h4>
                    <ul>
                      <li><strong>Public Places:</strong> Streets, sidewalks, parks, and any publicly accessible areas</li>
                      <li><strong>Private Property:</strong> You must be lawfully present (invited guest, delivery person, etc.)</li>
                      <li><strong>Trespassing:</strong> If you were unlawfully on private property, strict liability may not apply, but other legal theories might still provide recovery</li>
                    </ul>
                    
                    <h4>Beyond Bites: Other Injuries</h4>
                    <p>
                      While the strict liability statute specifically addresses "bites," California courts have extended liability to other dog-related injuries under negligence theories:
                    </p>
                    <ul>
                      <li>Injuries from being knocked down by an aggressive dog</li>
                      <li>Scratches and claw wounds</li>
                      <li>Injuries sustained while trying to escape an attacking dog</li>
                      <li>Injuries to bystanders who intervene during an attack</li>
                    </ul>
                    
                    <h3>Defenses Dog Owners May Raise</h3>
                    <p>
                      While California's law strongly favors bite victims, dog owners and their insurance companies may attempt various defenses:
                    </p>
                    
                    <h4>Provocation Defense</h4>
                    <p>
                      The most common defense is claiming the victim provoked the attack. However, California courts set a high standard for what constitutes provocation, especially for children. Examples of potential provocation include:
                    </p>
                    <ul>
                      <li>Deliberately hitting, kicking, or tormenting the dog</li>
                      <li>Taking food or toys away from the dog aggressively</li>
                      <li>Cornering or threatening the animal</li>
                    </ul>
                    <p>
                      Note: Normal interaction with a dog, petting, or even minor annoyances typically do not constitute legal provocation.
                    </p>
                    
                    <h4>Trespassing Defense</h4>
                    <p>
                      If you were unlawfully on private property when bitten, the strict liability law may not apply. However, you may still have a valid claim under negligence theory if:
                    </p>
                    <ul>
                      <li>The owner knew the dog had dangerous propensities</li>
                      <li>The owner failed to properly restrain a known aggressive dog</li>
                      <li>Local leash laws were violated</li>
                    </ul>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-red-600">Get Your Free Dog Bite Case Evaluation</h2>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  100% Confidential
                </Badge>
                <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
                  No Cost • No Obligation
                </Badge>
              </div>

              <ThreeDVisualEffects className="premium-3d-container">
                <div className="premium-form-container interactive-card glass-card rounded-2xl p-8 gpu-accelerated">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-display text-white mb-2 font-bold">Get Your Free Dog Bite Consultation</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                    <p className="text-white text-lg leading-relaxed">Specialized evaluation for dog bite cases throughout California</p>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm text-white mb-2 font-medium">
                      <span>Step {currentStep} of 4</span>
                      <span>{Math.round((currentStep / 4) * 100)}% Complete</span>
                    </div>
                    <Progress value={(currentStep / 4) * 100} className="h-3 bg-blue-100">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                        style={{ width: `${(currentStep / 4) * 100}%` }}
                      />
                    </Progress>
                  </div>

                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    {/* Step 1: Personal Information */}
                    {currentStep === 1 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Personal Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="firstName" className="text-black font-medium text-base">First Name *</Label>
                            <Input
                              id="firstName"
                              name="firstName"
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="bg-white/90 border-0 text-black placeholder-gray-500 h-12 text-base focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your first name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName" className="text-black font-medium text-base">Last Name *</Label>
                            <Input
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="bg-white/90 border-0 text-black placeholder-gray-500 h-12 text-base focus:ring-2 focus:ring-blue-500"
                              placeholder="Enter your last name"
                              required
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="phone" className="text-black font-medium text-base">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="bg-white/90 border-0 text-black placeholder-gray-500 h-12 text-base focus:ring-2 focus:ring-blue-500"
                              placeholder="(555) 123-4567"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email" className="text-black font-medium text-base">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="bg-white/90 border-0 text-black placeholder-gray-500 h-12 text-base focus:ring-2 focus:ring-blue-500"
                              placeholder="your.email@example.com"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 2: Incident Information */}
                    {currentStep === 2 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Incident Details</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="incidentDate" className="text-black font-medium text-base">Date of Incident *</Label>
                            <Input
                              id="incidentDate"
                              name="incidentDate"
                              type="date"
                              value={formData.incidentDate}
                              onChange={handleInputChange}
                              className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="attackType" className="text-black font-medium text-base">Type of Attack *</Label>
                            <Select value={formData.attackType} onValueChange={(value) => handleSelectChange('attackType', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select attack type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="bite">Dog Bite</SelectItem>
                                <SelectItem value="knockdown">Knocked Down by Dog</SelectItem>
                                <SelectItem value="scratch">Scratched/Clawed</SelectItem>
                                <SelectItem value="chase">Chased and Injured</SelectItem>
                                <SelectItem value="multiple">Multiple Injuries</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="injuryType" className="text-black font-medium text-base">Primary Injury Location *</Label>
                            <Select value={formData.injuryType} onValueChange={(value) => handleSelectChange('injuryType', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select injury location" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="face">Face/Head</SelectItem>
                                <SelectItem value="neck">Neck</SelectItem>
                                <SelectItem value="arms">Arms/Hands</SelectItem>
                                <SelectItem value="legs">Legs/Feet</SelectItem>
                                <SelectItem value="torso">Torso/Back</SelectItem>
                                <SelectItem value="multiple">Multiple Areas</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="medicalTreatment" className="text-black font-medium text-base">Medical Treatment Received *</Label>
                            <Select value={formData.medicalTreatment} onValueChange={(value) => handleSelectChange('medicalTreatment', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select treatment type" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="emergency-room">Emergency Room</SelectItem>
                                <SelectItem value="urgent-care">Urgent Care</SelectItem>
                                <SelectItem value="primary-care">Primary Care Doctor</SelectItem>
                                <SelectItem value="surgery">Surgery Required</SelectItem>
                                <SelectItem value="hospitalization">Hospitalization</SelectItem>
                                <SelectItem value="ongoing">Ongoing Treatment</SelectItem>
                                <SelectItem value="none">No Medical Treatment Yet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 3: Dog & Owner Information */}
                    {currentStep === 3 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Dog & Owner Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="dogBreed" className="text-black font-medium text-base">Dog Breed (if known)</Label>
                            <Select value={formData.dogBreed} onValueChange={(value) => handleSelectChange('dogBreed', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select dog breed" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="pit-bull">Pit Bull Type</SelectItem>
                                <SelectItem value="german-shepherd">German Shepherd</SelectItem>
                                <SelectItem value="rottweiler">Rottweiler</SelectItem>
                                <SelectItem value="mixed-breed">Mixed Breed</SelectItem>
                                <SelectItem value="labrador">Labrador</SelectItem>
                                <SelectItem value="golden-retriever">Golden Retriever</SelectItem>
                                <SelectItem value="chihuahua">Chihuahua</SelectItem>
                                <SelectItem value="unknown">Unknown/Stray</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="dogSize" className="text-black font-medium text-base">Dog Size *</Label>
                            <Select value={formData.dogSize} onValueChange={(value) => handleSelectChange('dogSize', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select dog size" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="small">Small (under 25 lbs)</SelectItem>
                                <SelectItem value="medium">Medium (25-60 lbs)</SelectItem>
                                <SelectItem value="large">Large (60-90 lbs)</SelectItem>
                                <SelectItem value="extra-large">Extra Large (over 90 lbs)</SelectItem>
                                <SelectItem value="unknown">Unknown</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="ownerKnown" className="text-black font-medium text-base">Do you know the dog owner? *</Label>
                            <Select value={formData.ownerKnown} onValueChange={(value) => handleSelectChange('ownerKnown', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes-identified">Yes, owner identified</SelectItem>
                                <SelectItem value="yes-neighbor">Yes, neighbor/acquaintance</SelectItem>
                                <SelectItem value="unknown-fled">Unknown, owner fled scene</SelectItem>
                                <SelectItem value="stray">Stray dog</SelectItem>
                                <SelectItem value="investigating">Still investigating</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="incidentLocation" className="text-black font-medium text-base">Where did the attack occur? *</Label>
                            <Select value={formData.incidentLocation} onValueChange={(value) => handleSelectChange('incidentLocation', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select location" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public-street">Public Street/Sidewalk</SelectItem>
                                <SelectItem value="park">Park/Public Area</SelectItem>
                                <SelectItem value="owners-property">Owner's Property</SelectItem>
                                <SelectItem value="my-property">My Property</SelectItem>
                                <SelectItem value="other-private">Other Private Property</SelectItem>
                                <SelectItem value="business">Business Property</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Legal Information */}
                    {currentStep === 4 && (
                      <div className="space-y-6 animate-fade-in">
                        <h4 className="text-xl md:text-2xl font-bold text-white mb-6">Legal & Case Information</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="policeReport" className="text-black font-medium text-base">Was a police report filed? *</Label>
                            <Select value={formData.policeReport} onValueChange={(value) => handleSelectChange('policeReport', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="yes">Yes, report filed</SelectItem>
                                <SelectItem value="no">No report filed</SelectItem>
                                <SelectItem value="unsure">Unsure</SelectItem>
                                <SelectItem value="plan-to">Plan to file report</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="previousClaim" className="text-black font-medium text-base">Have you filed any previous claims? *</Label>
                            <Select value={formData.previousClaim} onValueChange={(value) => handleSelectChange('previousClaim', value)}>
                              <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                                <SelectValue placeholder="Select option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="no">No previous claims</SelectItem>
                                <SelectItem value="insurance">Filed insurance claim</SelectItem>
                                <SelectItem value="lawsuit">Previous lawsuit</SelectItem>
                                <SelectItem value="workers-comp">Workers' compensation claim</SelectItem>
                                <SelectItem value="other">Other type of claim</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="urgency" className="text-black font-medium text-base">Case urgency level *</Label>
                          <Select value={formData.urgency} onValueChange={(value) => handleSelectChange('urgency', value)}>
                            <SelectTrigger className="bg-white/90 border-0 text-black h-12 text-base focus:ring-2 focus:ring-blue-500">
                              <SelectValue placeholder="Select urgency level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="immediate">Immediate - Recent attack, need urgent legal help</SelectItem>
                              <SelectItem value="high">High - Significant injuries, concerned about rights</SelectItem>
                              <SelectItem value="moderate">Moderate - Seeking information and evaluation</SelectItem>
                              <SelectItem value="low">Low - General inquiry about potential case</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 border-t border-white/20">
                      {currentStep > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setCurrentStep(currentStep - 1)}
                          className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                        >
                          <ChevronLeft className="w-4 h-4 mr-2" />
                          Previous
                        </Button>
                      )}
                      
                      <div className="ml-auto">
                        {currentStep < 4 ? (
                          <Button
                            type="button"
                            onClick={() => setCurrentStep(currentStep + 1)}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium"
                          >
                            Next Step
                            <ChevronRight className="w-4 h-4 ml-2" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8"
                          >
                            Submit Case Evaluation
                            <CheckCircle className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </ThreeDVisualEffects>
            </section>

            {/* Immediate Steps Section */}
            <section id="immediate-steps" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Immediate Steps After a Dog Attack</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="glass-card hover-glow-green">
                  <CardHeader>
                    <CardTitle className="flex items-center text-green-700">
                      <Stethoscope className="w-5 h-5 mr-2" />
                      Immediate Medical Care
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="font-semibold">Seek medical attention immediately, even for minor-appearing bites.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Clean wounds thoroughly with soap and water</li>
                      <li>• Apply antibiotic ointment and bandages</li>
                      <li>• Get tetanus shot if needed</li>
                      <li>• Watch for signs of infection</li>
                      <li>• Document all medical treatment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="glass-card hover-glow-blue">
                  <CardHeader>
                    <CardTitle className="flex items-center text-blue-700">
                      <FileText className="w-5 h-5 mr-2" />
                      Document Everything
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="font-semibold">Gather evidence while details are fresh.</p>
                    <ul className="text-sm space-y-1">
                      <li>• Take photos of injuries and scene</li>
                      <li>• Get contact info for witnesses</li>
                      <li>• Report to animal control and police</li>
                      <li>• Get dog owner's contact and insurance info</li>
                      <li>• Keep all medical records and bills</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-red-600">Frequently Asked Questions</h2>
                <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Top 10 Questions
                </Badge>
              </div>

              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <Card key={index} className="glass-card">
                    <Collapsible open={expandedFaq === index} onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}>
                      <CollapsibleTrigger asChild>
                        <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardTitle className="flex items-center justify-between text-left">
                            <span className="text-lg">{faq.question}</span>
                            {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </CardTitle>
                        </CardHeader>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <CardContent>
                          <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                        </CardContent>
                      </CollapsibleContent>
                    </Collapsible>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              
              {/* Contact Card */}
              <Card className="glass-card text-center">
                <CardHeader>
                  <CardTitle className="text-red-600">Need Immediate Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2 text-green-600" />
                    <span className="font-bold text-lg">(818) 123-4567</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    24/7 Emergency Line for Dog Bite Victims
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Us
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Statute of Limitations Warning */}
              <Card className="glass-card border-red-200 bg-red-50">
                <CardHeader>
                  <CardTitle className="text-red-600 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Time is Critical
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-red-700 font-semibold mb-2">
                    California gives you 2 years to file a dog bite lawsuit.
                  </p>
                  <p className="text-sm text-red-600">
                    Don't wait - evidence disappears and witnesses forget. Contact us immediately to protect your rights.
                  </p>
                </CardContent>
              </Card>

              {/* Compensation Info */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Potential Compensation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Medical expenses (current and future)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Lost wages and income
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Pain and suffering
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Emotional distress
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Scarring and disfigurement
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      Rehabilitation costs
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogBitesAnimalAttacks;
