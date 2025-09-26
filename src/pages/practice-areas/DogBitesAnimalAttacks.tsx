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
  },
  {
    question: "What types of damages are available in dog bite cases?",
    answer: "Economic damages include medical bills, lost wages, and future medical costs. Non-economic damages include pain and suffering, emotional distress, and scarring. Punitive damages may be available in cases involving particularly aggressive dogs or negligent owners."
  },
  {
    question: "How do I prove the dog owner's liability?",
    answer: "Under California's strict liability law, you only need to prove: (1) you were bitten by the defendant's dog, (2) you were in a public place or lawfully on private property, and (3) you suffered injuries. No proof of negligence or prior dangerous behavior is required."
  },
  {
    question: "What if the dog bite caused permanent scarring?",
    answer: "Permanent scarring, especially on visible areas like the face, can significantly increase your compensation. We work with medical experts and economists to calculate the full impact of disfigurement on your life and career."
  },
  {
    question: "Can I claim emotional distress after a dog attack?",
    answer: "Yes, emotional distress is a recognized form of damage in dog bite cases. This includes anxiety, depression, PTSD, fear of dogs, and other psychological impacts that may require ongoing therapy."
  },
  {
    question: "What if the dog was acting aggressively but didn't actually bite me?",
    answer: "You may still have a claim if the dog's aggressive behavior caused you to fall or suffer injuries while trying to escape. California law recognizes claims for injuries caused by dogs even without actual biting."
  },
  {
    question: "How long does a dog bite case take to resolve?",
    answer: "Most cases settle within 6-18 months, but complex cases involving severe injuries or multiple defendants may take longer. We work efficiently to resolve your case while ensuring maximum compensation."
  },
  {
    question: "What if the dog owner claims I provoked the attack?",
    answer: "Provocation is a defense to dog bite liability, but it must be proven by the dog owner. California courts set a high bar for provocation, especially for children. We investigate thoroughly to counter any provocation claims."
  },
  {
    question: "Can I sue if my own dog bit me?",
    answer: "Generally, you cannot sue yourself for your own dog's actions. However, if someone else was responsible for controlling your dog when the bite occurred, you might have a claim against them."
  },
  {
    question: "What if the dog bite resulted in an infection?",
    answer: "Infections are common complications of dog bites and can significantly increase your damages. We ensure all infection-related medical costs, including potential future complications, are included in your claim."
  },
  {
    question: "Do I need to see a doctor even for minor dog bites?",
    answer: "Yes, always seek medical attention for any dog bite. Even minor-appearing bites can become infected or involve deeper tissue damage. Medical documentation is also crucial for your legal case."
  },
  {
    question: "What if the dog that bit me was a stray?",
    answer: "Stray dog cases are more complex but may still have viable claims. We investigate to determine if anyone was feeding or caring for the dog, or if a property owner allowed the stray to remain on their premises."
  },
  {
    question: "Can I get compensation for my pet if it was attacked by another dog?",
    answer: "Yes, California law allows recovery for veterinary bills and the value of your pet if it was injured or killed by another dog. You may also recover emotional distress damages in severe cases."
  },
  {
    question: "What role does breed play in dog bite cases?",
    answer: "While breed alone doesn't determine liability, certain breeds may be considered more dangerous, which can affect damages and insurance coverage. We investigate the specific dog's history and the owner's knowledge of any dangerous propensities."
  },
  {
    question: "What if the dog owner is a minor?",
    answer: "Minors can be held liable for their dogs' actions, but their parents or guardians are typically responsible for damages. We pursue claims against all responsible parties, including parents and insurance carriers."
  },
  {
    question: "Can I sue if the dog bite happened at work?",
    answer: "If you were bitten while working, you may have both a workers' compensation claim and a personal injury claim against the dog owner. We coordinate both claims to maximize your total recovery."
  },
  {
    question: "What if I was walking my dog when another dog attacked us?",
    answer: "You may have claims for both your injuries and your dog's injuries. We handle complex multi-party situations involving attacks on both humans and their pets."
  },
  {
    question: "How do I document my dog bite injuries?",
    answer: "Take photos immediately and throughout the healing process, keep all medical records and bills, document lost wages, and maintain a journal of your pain and limitations. We provide detailed guidance on documentation."
  },
  {
    question: "What if the dog owner offers to pay my medical bills?",
    answer: "Don't accept quick settlements or sign any documents without legal consultation. Early offers rarely cover the full extent of your damages, especially long-term costs and pain and suffering."
  },
  {
    question: "Can I still pursue a case if I didn't report the bite immediately?",
    answer: "While immediate reporting is ideal, you may still have a valid case. We help gather evidence and witness statements even when the incident wasn't immediately reported to authorities."
  },
  {
    question: "What if the dog owner claims their homeowner's insurance doesn't cover dog bites?",
    answer: "We investigate all potential insurance coverage. Even if a policy excludes certain breeds, there may still be coverage under different theories of liability or through other insurance sources."
  },
  {
    question: "How do courts determine pain and suffering in dog bite cases?",
    answer: "Courts consider factors like severity of injuries, permanence of scarring, impact on daily life, emotional trauma, and future limitations. We present compelling evidence to maximize these non-economic damages."
  },
  {
    question: "What if I'm partially at fault for the dog bite?",
    answer: "California follows comparative negligence rules, meaning your compensation may be reduced by your percentage of fault. However, you can still recover damages even if you're partially responsible."
  },
  {
    question: "Can military families sue for dog bites on base housing?",
    answer: "Military families have special considerations for dog bite injuries. We navigate the complex jurisdictional issues and help pursue claims under the appropriate legal framework."
  },
  {
    question: "What if the dog was being cared for by a pet sitter or dog walker?",
    answer: "Both the owner and the caretaker may be liable for a dog bite. We investigate all relationships and responsibilities to ensure all liable parties are held accountable."
  },
  {
    question: "How do dog bite cases differ from other personal injury cases?",
    answer: "Dog bite cases often involve strict liability rather than negligence, have unique insurance considerations, and may involve animal control investigations. Specialized knowledge of these factors is crucial."
  },
  {
    question: "What if the dog bite happened during a professional service call?",
    answer: "Service workers have special protections. Property owners have heightened duties to warn about dangerous dogs or secure them during service calls. We pursue claims against both dog owners and property owners."
  },
  {
    question: "Can I sue if a dog knocked me down without biting?",
    answer: "Yes, you may have a claim for injuries caused by a dog's actions even without biting. This includes being knocked down, scratched, or injured while trying to escape an aggressive dog."
  },
  {
    question: "What if the dog owner is claiming the bite was an accident?",
    answer: "Intent is irrelevant under California's strict liability law. The dog owner is responsible for their animal's actions regardless of whether the bite was intentional or accidental."
  },
  {
    question: "How do dog bite settlements get calculated?",
    answer: "We consider medical expenses, lost wages, future medical needs, pain and suffering, emotional distress, scarring, and impact on quality of life. Each case is unique and requires detailed evaluation."
  },
  {
    question: "What if I was bitten by a police or military dog?",
    answer: "Police and military dog bites involve special legal considerations and potential government immunity issues. We have experience handling these complex cases against governmental entities."
  },
  {
    question: "Can grandparents sue if their grandchild is bitten?",
    answer: "Generally, only parents or legal guardians can file on behalf of minor children. However, grandparents may have claims if they were caring for the child when the bite occurred and suffered emotional distress."
  },
  {
    question: "What if the dog has bitten people before?",
    answer: "Prior bites can significantly increase your case value and may support punitive damages. We investigate the dog's history and the owner's knowledge of dangerous propensities."
  },
  {
    question: "How do I choose the right lawyer for my dog bite case?",
    answer: "Look for attorneys with specific experience in dog bite cases, knowledge of California's strict liability laws, and a track record of successful settlements and verdicts in animal attack cases."
  },
  {
    question: "What if the dog owner files bankruptcy after my injury?",
    answer: "Bankruptcy may complicate but not eliminate your recovery. We navigate bankruptcy proceedings and pursue insurance claims and other assets to secure your compensation."
  },
  {
    question: "Can I get compensation for future medical treatment?",
    answer: "Yes, we work with medical experts to project future treatment needs including plastic surgery, therapy, and ongoing medical care related to your dog bite injuries."
  },
  {
    question: "What if the dog was adopted from a shelter?",
    answer: "Shelters may have liability if they knew of the dog's dangerous propensities and failed to warn adopters. We investigate all parties in the chain of ownership and care."
  },
  {
    question: "How do cultural or language barriers affect dog bite cases?",
    answer: "We work with clients from all backgrounds and provide translation services when needed. Cultural barriers don't affect your legal rights to compensation under California law."
  },
  {
    question: "What if I was bitten while trying to break up a dog fight?",
    answer: "Good Samaritan situations may have special considerations, but you likely still have valid claims against the dog owners whose animals were fighting."
  },
  {
    question: "Can I sue if the dog escaped from the owner's property?",
    answer: "Yes, dog owners are generally liable for their animals' actions even if the dog escapes. Property conditions and containment measures may also be factors in your case."
  },
  {
    question: "What if my dog bite case goes to trial?",
    answer: "While most cases settle, we're prepared to take your case to trial if necessary. We have extensive courtroom experience and work with expert witnesses to present compelling cases to juries."
  },
  {
    question: "How do insurance companies typically respond to dog bite claims?",
    answer: "Insurance companies often try to minimize payouts by disputing injuries, claiming provocation, or arguing coverage exclusions. We handle all insurance negotiations to protect your interests."
  },
  {
    question: "What ongoing support do you provide during my case?",
    answer: "We provide regular case updates, coordinate with medical providers, handle all legal paperwork, and offer emotional support throughout the process. You're never alone in this fight."
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

        {/* Comprehensive California Dog Bite Laws Section */}
        <section id="california-laws" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Understanding California's Strict Liability Dog Bite Laws
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src={lawsImage} 
                  alt="California dog bite laws - strict liability protection for victims" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">California Civil Code Section 3342</h3>
                  <p className="text-muted-foreground mb-4">
                    California's dog bite statute is one of the strongest in the nation, providing comprehensive protection for bite victims. Under Civil Code Section 3342, dog owners are strictly liable for damages when their dog bites someone in a public place or while the victim is lawfully on private property.
                  </p>
                  <p className="text-muted-foreground">
                    This means you don't need to prove the owner was negligent or that the dog had previously shown aggressive behavior. The law recognizes that dog ownership comes with absolute responsibility for the animal's actions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="prose prose-lg max-w-none mb-8">
              <h3 className="text-2xl font-bold mb-6">Key Elements of California's Dog Bite Law</h3>
              
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6 border-l-4 border-l-primary">
                  <h4 className="text-lg font-semibold mb-3 text-primary">Strict Liability Standard</h4>
                  <p className="text-sm text-muted-foreground">
                    Unlike many other states that require proof of negligence, California imposes strict liability. This means the dog owner is automatically responsible for bite injuries, regardless of:
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>• The dog's prior behavior or temperament</li>
                    <li>• Whether the owner knew the dog was dangerous</li>
                    <li>• The owner's level of care in controlling the dog</li>
                    <li>• Whether the owner followed leash laws</li>
                  </ul>
                </Card>
                
                <Card className="p-6 border-l-4 border-l-green-500">
                  <h4 className="text-lg font-semibold mb-3 text-green-600">Location Requirements</h4>
                  <p className="text-sm text-muted-foreground">
                    The law applies when the victim is bitten:
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                    <li>• In any public place (parks, sidewalks, streets)</li>
                    <li>• On private property where they have a legal right to be</li>
                    <li>• While performing duties required by law (mail delivery, inspections)</li>
                    <li>• As an invited guest on someone's property</li>
                  </ul>
                </Card>
              </div>
              
              <h4 className="text-xl font-semibold mb-4">Beyond the Basic Bite: Additional California Protections</h4>
              <p className="mb-4">
                California law extends beyond simple bite injuries. Courts have recognized claims for injuries caused by dogs even without actual biting, including:
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h5 className="font-semibold text-blue-700 mb-2">Knockdown Injuries</h5>
                  <p className="text-sm text-blue-600">Injuries from dogs jumping on or knocking down victims</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h5 className="font-semibold text-green-700 mb-2">Chase Injuries</h5>
                  <p className="text-sm text-green-600">Injuries sustained while fleeing from an aggressive dog</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h5 className="font-semibold text-purple-700 mb-2">Property Damage</h5>
                  <p className="text-sm text-purple-600">Damage to clothing, personal items, or other property</p>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Common Dog Bite Injuries Section */}
        <section id="injuries" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Stethoscope className="w-8 h-8 text-primary" />
              Common Dog Bite Injuries and Long-Term Effects
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed mb-6">
                Dog bite injuries can be devastating and life-altering. The powerful jaws of dogs can cause severe tissue damage, nerve injury, and psychological trauma that extends far beyond the initial attack. Understanding the full scope of potential injuries is crucial for ensuring adequate compensation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Physical Injuries</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-red-700 mb-2">Puncture Wounds</h4>
                    <p className="text-sm text-muted-foreground">Deep wounds from canine teeth that can damage muscles, tendons, nerves, and blood vessels. Often require surgical repair and carry high infection risk.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-2">Lacerations and Torn Tissue</h4>
                    <p className="text-sm text-muted-foreground">Jagged tears from dog teeth that may require extensive plastic surgery, especially on the face and hands where function and appearance are critical.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-yellow-700 mb-2">Nerve Damage</h4>
                    <p className="text-sm text-muted-foreground">Can result in permanent numbness, tingling, weakness, or complete loss of function in affected areas. May require specialized neurological treatment.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-blue-700 mb-2">Fractures and Crush Injuries</h4>
                    <p className="text-sm text-muted-foreground">Large dogs can exert over 400 pounds of pressure per square inch, easily breaking bones and crushing tissue, particularly in children and elderly victims.</p>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Psychological Trauma</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-purple-700 mb-2">Post-Traumatic Stress Disorder (PTSD)</h4>
                    <p className="text-sm text-muted-foreground">Persistent re-experiencing of the attack through flashbacks, nightmares, and severe anxiety when encountering dogs or similar situations.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-pink-500">
                    <h4 className="font-semibold text-pink-700 mb-2">Cynophobia (Fear of Dogs)</h4>
                    <p className="text-sm text-muted-foreground">Debilitating fear that can significantly impact daily life, limiting outdoor activities, social interactions, and overall quality of life.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-indigo-500">
                    <h4 className="font-semibold text-indigo-700 mb-2">Depression and Anxiety</h4>
                    <p className="text-sm text-muted-foreground">Long-term emotional effects that may require ongoing therapy and medication, particularly when accompanied by disfiguring scars.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-700 mb-2">Social Withdrawal</h4>
                    <p className="text-sm text-muted-foreground">Isolation from activities and relationships due to physical limitations, scarring, or psychological trauma from the attack.</p>
                  </Card>
                </div>
              </div>
            </div>

            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <h3 className="text-xl font-semibold mb-4 text-red-800 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                Special Considerations for Facial Injuries
              </h3>
              <p className="text-red-700 mb-4">
                Facial dog bites are particularly devastating due to the high concentration of nerves, blood vessels, and the cosmetic importance of facial features. Children are especially vulnerable to facial attacks due to their height relative to dogs.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2 text-red-600 text-sm">
                  <li>• Permanent scarring and disfigurement</li>
                  <li>• Damage to facial nerves affecting expression</li>
                  <li>• Eye injuries potentially causing vision loss</li>
                  <li>• Damage to tear ducts, nasal passages, or ears</li>
                </ul>
                <ul className="space-y-2 text-red-600 text-sm">
                  <li>• Need for multiple reconstructive surgeries</li>
                  <li>• Long-term psychological impact on self-image</li>
                  <li>• Potential speech or eating difficulties</li>
                  <li>• Impact on career and social relationships</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Compensation and Damages Section */}
        <section id="compensation" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-primary" />
              Maximum Compensation for California Dog Bite Victims
            </h2>
            
            <div className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed mb-6">
                California's strict liability law ensures that dog bite victims can recover full compensation for their injuries without having to prove the owner's negligence. The compensation available depends on the severity of injuries, impact on your life, and long-term consequences of the attack.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src={compensationImage} 
                  alt="Dog bite compensation - understanding your rights to damages in California" 
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">Economic Damages (Actual Financial Losses)</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• <strong>Medical Expenses:</strong> All past and future medical treatment including emergency care, surgery, therapy, and medications</li>
                    <li>• <strong>Lost Wages:</strong> Income lost due to time off work for treatment and recovery</li>
                    <li>• <strong>Reduced Earning Capacity:</strong> Permanent impact on your ability to earn income</li>
                    <li>• <strong>Rehabilitation Costs:</strong> Physical therapy, occupational therapy, and psychological counseling</li>
                    <li>• <strong>Property Damage:</strong> Clothing, personal items, or other property damaged in the attack</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Non-Economic Damages (Quality of Life Impact)</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-blue-500">
                    <h4 className="font-semibold text-blue-700 mb-2">Pain and Suffering</h4>
                    <p className="text-sm text-muted-foreground">Physical pain and discomfort from the attack and ongoing medical treatment, calculated based on severity and duration.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-purple-500">
                    <h4 className="font-semibold text-purple-700 mb-2">Emotional Distress</h4>
                    <p className="text-sm text-muted-foreground">Anxiety, depression, PTSD, and other psychological impacts that may require long-term therapy.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-green-500">
                    <h4 className="font-semibold text-green-700 mb-2">Scarring and Disfigurement</h4>
                    <p className="text-sm text-muted-foreground">Permanent changes to appearance, particularly significant for visible scars on face, hands, or arms.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-orange-500">
                    <h4 className="font-semibold text-orange-700 mb-2">Loss of Enjoyment of Life</h4>
                    <p className="text-sm text-muted-foreground">Inability to participate in activities you previously enjoyed due to physical limitations or psychological trauma.</p>
                  </Card>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4 text-primary">Additional Damage Categories</h3>
                <div className="space-y-4">
                  <Card className="p-4 border-l-4 border-l-red-500">
                    <h4 className="font-semibold text-red-700 mb-2">Punitive Damages</h4>
                    <p className="text-sm text-muted-foreground">Available when the dog owner's conduct was particularly reckless or when they knew the dog was dangerous but failed to take proper precautions.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-yellow-500">
                    <h4 className="font-semibold text-yellow-700 mb-2">Loss of Consortium</h4>
                    <p className="text-sm text-muted-foreground">Compensation for spouses affected by changes in the relationship due to the victim's injuries and trauma.</p>
                  </Card>
                  
                  <Card className="p-4 border-l-4 border-l-indigo-500">
                    <h4 className="font-semibold text-indigo-700 mb-2">Future Medical Costs</h4>
                    <p className="text-sm text-muted-foreground">Projected costs for ongoing treatment, future surgeries, therapy, and long-term care needs related to the dog bite injuries.</p>
                  </Card>
                </div>
                
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">Typical Settlement Ranges</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Minor bites: $10,000 - $30,000</li>
                    <li>• Moderate injuries: $30,000 - $100,000</li>
                    <li>• Severe injuries: $100,000 - $500,000</li>
                    <li>• Catastrophic/facial injuries: $500,000+</li>
                  </ul>
                  <p className="text-xs text-green-600 mt-2">*Actual settlements vary based on specific circumstances</p>
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
              Frequently Asked Questions About Dog Bites (50+ Questions)
            </h2>
            <p className="text-muted-foreground mb-8">
              Get comprehensive answers to common questions about dog bite laws and your rights in California.
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