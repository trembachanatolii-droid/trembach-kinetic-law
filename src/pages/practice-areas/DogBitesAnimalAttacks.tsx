import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
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

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const DogBitesAnimalAttacks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: '',
    accidentLocation: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'IMMEDIATE STEPS', icon: AlertTriangle },
    { id: 'california-laws', label: 'CALIFORNIA LAWS', icon: Shield },
    { id: 'injuries-treatment', label: 'INJURIES & TREATMENT', icon: Stethoscope },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ (50 QUESTIONS)', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.1, ease: 'power2.out' }
      );

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/dog-bites-case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // FAQ Data - 50 Questions from HTML
  const faqData = [
    {
      question: "What is California's dog bite law?",
      answer: "California Civil Code Section 3342 creates strict liability for dog owners, making them automatically responsible for ALL bite injuries regardless of the dog's prior behavior or owner's knowledge of viciousness. This eliminates the 'one bite rule' used in other states."
    },
    {
      question: "What should I do immediately after a dog bite?",
      answer: "Seek medical care within 8 hours, identify the dog and owner, get rabies vaccination proof, report to authorities, document everything with photos, get witness information, and avoid giving statements to insurance companies. Contact an attorney immediately."
    },
    {
      question: "How long do I have to file a dog bite lawsuit in California?",
      answer: "Generally 2 years from the bite date under the statute of limitations. For minors, it's 2 years from their 18th birthday. Government entity claims require filing within 6 months. Don't wait - evidence disappears quickly."
    },
    {
      question: "Do I need to prove the dog owner was negligent?",
      answer: "No. California's strict liability law means owners are automatically liable for bite injuries regardless of negligence, prior incidents, or precautions taken. You only need to prove the dog bit you while you were lawfully present."
    },
    {
      question: "What if the dog owner says I provoked their dog?",
      answer: "Provocation is a common defense but difficult to prove. California law requires substantial provocation - normal interactions like petting, walking by, or even loud noises don't qualify. Children under 5 cannot legally provoke under California law."
    },
    {
      question: "Do I need to identify the dog that bit me?",
      answer: "Yes, identifying the dog and owner is crucial for your claim. If the dog ran away, we can help track it down through Animal Control reports, neighborhood canvassing, security cameras, and witness accounts."
    },
    {
      question: "What if I was bitten while working (delivery driver, mail carrier)?",
      answer: "You have extra protections. Workers are specifically protected under California Civil Code 3342. You can pursue both workers' compensation AND a personal injury claim against the dog owner for full damages."
    },
    {
      question: "Can I get compensation for emotional trauma from a dog attack?",
      answer: "Absolutely. California recognizes PTSD, anxiety, depression, phobias, and loss of life enjoyment as compensable damages. Emotional damages often represent the largest portion of settlements."
    },
    {
      question: "What if the dog belongs to a friend or family member?",
      answer: "You're still entitled to compensation. The claim goes through their insurance, not personal assets. Don't let relationships prevent you from getting needed medical care and compensation."
    },
    {
      question: "Do I need a rabies shot after a dog bite?",
      answer: "Consult a doctor immediately. If the dog's vaccination status is unknown, post-exposure prophylaxis may be necessary. The series costs $3,000-$7,000 and is fully compensable in your claim."
    },
    {
      question: "What are the most dangerous dog breeds in California?",
      answer: "California doesn't have breed-specific laws - ALL dogs can cause serious injuries. The owner is liable regardless of breed. Focus on injury severity, not breed, for your claim."
    },
    {
      question: "Can I sue my landlord if a tenant's dog bit me?",
      answer: "Potentially yes. Landlords can be liable if they knew about the dangerous dog and failed to act, allowed pets against lease terms, or failed to enforce pet policies."
    },
    {
      question: "What if I was bitten by a police or military dog?",
      answer: "Special rules apply but you may still have a claim. Government claims require filing within 6 months. These cases are complex and need immediate legal attention."
    },
    {
      question: "How much does it cost to hire a dog bite lawyer?",
      answer: "Nothing upfront. We work on contingency - we only get paid if you win. Our fee is typically 33-40% of the settlement. You pay nothing out of pocket and no fee if we don't win."
    },
    {
      question: "Will the dog be put down if I file a claim?",
      answer: "Not automatically. California doesn't require euthanasia for first bites. Your civil claim for damages is separate from Animal Control proceedings."
    },
    {
      question: "What if I was partially at fault for the dog bite?",
      answer: "California uses comparative negligence. Your compensation reduces by your percentage of fault. However, strict liability often means zero fault for victims."
    },
    {
      question: "Can I get compensation for scarring from a dog bite?",
      answer: "Yes, scarring compensation can be substantial. Factors include location (face = highest value), size, visibility, age, gender, and career impact. Scar revision surgery costs are also compensable."
    },
    {
      question: "Do I need medical treatment even if the bite seems minor?",
      answer: "YES. Always seek medical care within 8 hours. Dog mouths contain dangerous bacteria. Infection rates reach 50% for untreated bites. Medical documentation is crucial for your claim."
    },
    {
      question: "What if the dog was a stray or the owner is unknown?",
      answer: "Recovery is still possible. Your own homeowner's/renter's insurance may cover animal attacks. Crime victim compensation funds might apply. We investigate all angles to identify owners."
    },
    {
      question: "Can I sue if I was bitten while trespassing?",
      answer: "Strict liability doesn't apply to trespassers, but you might still recover under regular negligence if the owner knew the dog was dangerous and failed to post warnings."
    },
    {
      question: "What medical evidence do I need for my dog bite claim?",
      answer: "Emergency room records, wound care documentation, photos of injuries over time, surgery reports, infection treatment records, rabies vaccination records, and all medical bills."
    },
    {
      question: "Should I give a statement to the dog owner's insurance?",
      answer: "NO. Never give recorded statements without an attorney. Insurance adjusters are trained to minimize claims. Let us handle all insurance communications."
    },
    {
      question: "How long does a dog bite settlement take?",
      answer: "Most cases settle in 3-6 months. Complex cases with severe injuries may take 6-12 months. We push for quick resolution while maximizing value."
    },
    {
      question: "What if my child was bitten by a dog?",
      answer: "Children receive special protection under California law. Kids under 5 cannot be found negligent. Child facial scars receive higher compensation due to lifetime impact."
    },
    {
      question: "Can I recover lost wages from missing work?",
      answer: "Yes. All lost income is compensable including time off for medical appointments, recovery, and therapy. Future lost earnings if injuries affect work capacity are also covered."
    },
    {
      question: "What are signs of infection after a dog bite?",
      answer: "Red streaking from wound, increasing pain, swelling, warmth, pus, fever, swollen lymph nodes. Seek immediate medical attention - infections can become life-threatening quickly."
    },
    {
      question: "Do all homeowner's policies cover dog bites?",
      answer: "Most do, but some exclude certain breeds or have bite history exclusions. We investigate all available insurance coverage including umbrella policies."
    },
    {
      question: "What if the insurance company denies my claim?",
      answer: "We fight denials aggressively. Common reasons include coverage disputes, provocation claims, or trespassing allegations. We gather evidence to overcome these defenses."
    },
    {
      question: "Can I recover damages if I don't have health insurance?",
      answer: "Yes, you can recover all reasonable medical expenses whether or not you have insurance. We can help find medical providers who work on a lien basis."
    },
    {
      question: "What types of damages can I recover?",
      answer: "Medical expenses, lost wages, pain and suffering, emotional distress, scarring, future medical costs, and diminished earning capacity. Each case is unique."
    },
    {
      question: "How do you calculate pain and suffering damages?",
      answer: "Multiple factors including injury severity, treatment duration, scarring, psychological impact, age, and how injuries affect daily life. There's no exact formula."
    },
    {
      question: "What if the dog bite caused nerve damage?",
      answer: "Nerve damage can result in permanent disability and significant compensation. We work with medical experts to document the full extent of nerve injuries and future implications."
    },
    {
      question: "Can I sue for a dog attack that didn't break skin?",
      answer: "California's strict liability law specifically requires a 'bite' that breaks skin. However, you might have a negligence claim for other injuries caused by the dog."
    },
    {
      question: "What if I was attacked by multiple dogs?",
      answer: "Each dog owner is liable for their animal's actions. Multiple defendants can mean higher total compensation but requires careful legal strategy."
    },
    {
      question: "How do dog bite cases differ from other personal injury cases?",
      answer: "Dog bite cases benefit from strict liability, making them often easier to prove than negligence cases. However, they involve unique medical and psychological factors."
    },
    {
      question: "What if the dog has bitten people before?",
      answer: "Prior bites strengthen your case and may support punitive damages. We investigate the dog's history through Animal Control records and neighborhood inquiries."
    },
    {
      question: "Can I recover costs for plastic surgery?",
      answer: "Yes, all reconstructive and cosmetic surgery costs are compensable. Future surgeries are also covered, especially important for children who may need multiple procedures as they grow."
    },
    {
      question: "What if I was bitten at someone's business?",
      answer: "Business owners have heightened duties to protect customers. Both the dog owner and potentially the business owner could be liable depending on the circumstances."
    },
    {
      question: "How do I prove the extent of my psychological injuries?",
      answer: "Through psychological evaluations, therapy records, testimony from family and friends about personality changes, and documentation of how the trauma affects daily activities."
    },
    {
      question: "What if the dog owner doesn't have insurance?",
      answer: "We pursue their personal assets and look for other sources of coverage including homeowner's policies of property where the bite occurred or your own insurance."
    },
    {
      question: "Can I file a claim years after the bite?",
      answer: "You must file within California's 2-year statute of limitations. However, the discovery rule may apply in certain circumstances. Contact us immediately to evaluate your options."
    },
    {
      question: "What makes a strong dog bite case?",
      answer: "Clear documentation of the bite, medical records, witness statements, photos of injuries, proof of the dog owner's identity, and evidence the victim was lawfully present."
    },
    {
      question: "How do settlements compare to jury verdicts?",
      answer: "Most cases settle for fair amounts without trial. However, when insurance companies refuse reasonable settlements, jury verdicts can be substantially higher."
    },
    {
      question: "What ongoing medical care might I need?",
      answer: "Physical therapy, scar revision surgery, psychological counseling, pain management, infection monitoring, and potentially long-term disability accommodations."
    },
    {
      question: "How do dog bite injuries affect children differently?",
      answer: "Children suffer disproportionately severe facial injuries, have higher infection rates, develop more psychological trauma, and face a lifetime of living with scars during crucial developmental years."
    },
    {
      question: "What if the bite happened on government property?",
      answer: "Government entities may be liable under certain circumstances. Special rules apply including shorter filing deadlines. Contact us immediately for government bite cases."
    },
    {
      question: "Can dog owners be criminally charged?",
      answer: "Criminal charges are separate from civil claims. Charges might be filed for dangerous dogs, violations of leash laws, or if the owner knew the dog was vicious."
    },
    {
      question: "What role does Animal Control play?",
      answer: "Animal Control investigates, documents the incident, quarantines the dog for rabies observation, and maintains records useful for your civil claim."
    },
    {
      question: "How quickly should I contact an attorney?",
      answer: "Immediately. Evidence disappears quickly, insurance companies start working against you right away, and California's statute of limitations begins running from the bite date."
    },
    {
      question: "What makes your firm different for dog bite cases?",
      answer: "Our former defense attorney experience gives us unique insight into insurance company strategies. We understand how they evaluate and defend these cases, allowing us to maximize your recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="California Dog Bite Lawyers | Strict Liability Protection for Animal Attack Victims"
        description="Expert dog bite attorneys throughout California. Former defense lawyer now fighting for animal attack victims under strict liability laws. Free consultation for bite injury cases."
        canonical="/practice-areas/dog-bites-animal-attacks"
      />

      {/* Go Back Button */}
      <div className="absolute top-20 left-6 z-[60]">
        <Button
          variant="default"
          size="lg"
          onClick={() => window.history.back()}
          className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-full px-5"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </Button>
      </div>

      {/* Hero Section */}
      <div 
        ref={heroRef}
        className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="hero-content container mx-auto px-8 text-center text-white relative z-10">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
              <PawPrint className="w-4 h-4 mr-2" />
              California Strict Liability
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
              <Shield className="w-4 h-4 mr-2" />
              Former Defense Attorney
            </Badge>
            <Badge variant="secondary" className="bg-primary/20 text-white border-primary/30">
              <DollarSign className="w-4 h-4 mr-2" />
              No Fees Unless We Win
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            California Dog Bite Lawyers
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Strict Liability Protection for Animal Attack Victims Throughout All 58 California Counties
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90">
              Free Dog Bite Case Review
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent text-white border-white hover:bg-white hover:text-primary">
              Call (818) 123-4567
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="sticky top-0 bg-background border-b border-border z-50 shadow-sm">
        <div className="container mx-auto px-8">
          <div className="flex overflow-x-auto py-4 gap-6">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => scrollToSection(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <IconComponent className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div ref={contentRef} className="container mx-auto px-8 py-12">
        {/* Overview Section */}
        <section id="overview" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <PawPrint className="w-8 h-8 text-primary" />
              California's Dog Bite Crisis - Your Rights Under Strict Liability
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">2,000+</div>
                <div className="text-sm text-muted-foreground">Annual ER visits for severe dog attacks in California</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">$900M</div>
                <div className="text-sm text-muted-foreground">Yearly insurance payouts for dog bites in California</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">#1</div>
                <div className="text-sm text-muted-foreground">California leads the nation in dog bite claims</div>
              </Card>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              California leads the nation in dog bite claims, with over 2,000 emergency department visits annually from severe attacks and insurance companies paying over $900 million yearly in dog bite settlements—more than any other state. When supposedly friendly family pets suddenly turn violent, victims suffer devastating injuries ranging from deep puncture wounds and torn flesh to permanent scarring, nerve damage, and psychological trauma that affects them for life.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              The physical and psychological devastation from dog attacks extends far beyond initial wounds. Children, who comprise over half of all dog bite victims, face facial injuries at their height level, creating disfiguring scars during crucial developmental years. Adults suffer defensive wounds on hands and arms that damage nerves, tendons, and muscles essential for work and daily activities.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              California Civil Code Section 3342 establishes strict liability for dog owners, meaning victims don't need to prove negligence or prior aggressive behavior—owners are automatically liable when their dogs bite people in public places or lawfully on private property. This powerful legal protection eliminates the "one free bite" rule used in other states, ensuring victims receive compensation even from first-time attacks.
            </p>
          </Card>
        </section>

        {/* Case Evaluation Section */}
        <section id="evaluation" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Scale className="w-8 h-8 text-primary" />
              Free Dog Bite Case Evaluation
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Get Your Free Case Review</h3>
                <p className="text-muted-foreground mb-6">
                  California's strict liability laws protect dog bite victims regardless of the animal's history. Get immediate help understanding your rights and potential compensation.
                </p>
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">When did the attack occur?</label>
                    <Input
                      type="date"
                      value={formData.accidentDate}
                      onChange={(e) => setFormData({...formData, accidentDate: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Type of injury</label>
                    <Select value={formData.injuryType} onValueChange={(value) => setFormData({...formData, injuryType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select injury type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor wounds/scratches</SelectItem>
                        <SelectItem value="puncture">Deep puncture wounds</SelectItem>
                        <SelectItem value="facial">Facial injuries</SelectItem>
                        <SelectItem value="surgery">Required surgery</SelectItem>
                        <SelectItem value="scarring">Permanent scarring</SelectItem>
                        <SelectItem value="multiple">Multiple injuries</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Where did it happen?</label>
                    <Input
                      type="text"
                      placeholder="e.g., Public sidewalk, friend's house, park"
                      value={formData.accidentLocation}
                      onChange={(e) => setFormData({...formData, accidentLocation: e.target.value})}
                      required
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full">
                    Get Free Consultation
                  </Button>
                </form>
              </div>
              <div>
                <img 
                  src={medicalCareImage} 
                  alt="Medical treatment for dog bite injuries" 
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-4">Why Choose Our Dog Bite Attorneys?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Former defense attorney insight into insurance tactics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">No fees unless we win your case</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Available 24/7 for emergency consultations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Maximum compensation under strict liability laws</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Immediate Steps Section */}
        <section id="what-to-do" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-primary" />
              Critical Steps After a Dog Bite in California
            </h2>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-bold text-red-800 mb-2">URGENT:</h3>
                  <p className="text-red-700">
                    Dog bites can transmit rabies, tetanus, and serious infections. Even minor bites require immediate medical attention. California law requires reporting all dog bites - we can help with this process.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  title: "Seek Medical Care Immediately",
                  description: "Visit an ER or urgent care within 8 hours. Dog bites inject bacteria deep into tissue. Document all injuries with photos before cleaning."
                },
                {
                  step: "2", 
                  title: "Identify the Dog & Owner",
                  description: "Get owner's name, address, phone, and insurance. Photograph the dog. Request rabies vaccination proof - California law requires this."
                },
                {
                  step: "3",
                  title: "Report to Authorities", 
                  description: "California law mandates reporting. Call Animal Control and police. This creates official documentation for your claim."
                },
                {
                  step: "4",
                  title: "Document Everything",
                  description: "Take photos of injuries, location, torn clothing. Get witness contacts. Keep all medical records and receipts."
                },
                {
                  step: "5",
                  title: "Don't Give Statements",
                  description: "Don't discuss fault or sign anything from insurance companies. They record calls to minimize payouts. Let us handle them."
                },
                {
                  step: "6",
                  title: "Call an Attorney Today",
                  description: "California's 2-year statute starts immediately. Evidence disappears. Insurance companies work against you. Get protection now."
                }
              ].map((item) => (
                <Card key={item.step} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              ))}
            </div>
          </Card>
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
                  alt="California Civil Code Section 3342 legal documents" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-xl font-bold mb-4">California Civil Code Section 3342</h3>
                <div className="bg-muted/50 border-l-4 border-primary p-4 mb-4">
                  <p className="text-sm italic">
                    "The owner of any dog is liable for the damages suffered by any person who is bitten by the dog while in a public place or lawfully in a private place, including the property of the owner of the dog, regardless of the former viciousness of the dog or the owner's knowledge of such viciousness."
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">What This Means for You:</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>No "One Bite Rule":</strong> Unlike other states, California holds owners liable even for first-time bites</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>No Need to Prove Negligence:</strong> Owner is responsible regardless of precautions taken</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>No Need to Prove Prior Aggression:</strong> Previous good behavior doesn't matter</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span><strong>Covers All Locations:</strong> Public places, sidewalks, parks, and lawfully on private property</span>
                  </li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4">Additional Legal Theories:</h3>
                <div className="grid gap-3">
                  {['Negligence claims', 'Dangerous propensities', 'Landlord liability', 'Premises liability', 'Negligent supervision', 'Attractive nuisance'].map((theory) => (
                    <Card key={theory} className="p-3">
                      <span className="text-sm">{theory}</span>
                    </Card>
                  ))}
                </div>
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
              Dog attacks create unique injury patterns combining puncture wounds, tearing, crushing, and infection risks. The powerful jaws and shaking behavior of attacking dogs cause complex injuries requiring specialized medical treatment and long-term care.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-red-600">Physical Injuries</h3>
                <ul className="space-y-2">
                  {[
                    'Deep puncture wounds',
                    'Flesh tears and avulsions', 
                    'Facial disfigurement and scarring',
                    'Nerve damage and numbness',
                    'Tendon and muscle tears',
                    'Bone fractures from crushing',
                    'Severe infections and sepsis',
                    'Rabies and disease exposure'
                  ].map((injury) => (
                    <li key={injury} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">{injury}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4 text-orange-600">Long-Term Consequences</h3>
                <ul className="space-y-2">
                  {[
                    'Permanent scarring and disfigurement',
                    'Multiple reconstructive surgeries',
                    'Loss of function and mobility',
                    'Post-traumatic stress disorder',
                    'Cynophobia (fear of dogs)',
                    'Social anxiety and isolation',
                    'Career and activity limitations',
                    'Psychological counseling needs'
                  ].map((consequence) => (
                    <li key={consequence} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                      <span className="text-muted-foreground">{consequence}</span>
                    </li>
                  ))}
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
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <img 
                  src={compensationImage} 
                  alt="Legal consultation for dog bite compensation" 
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <p className="text-muted-foreground leading-relaxed">
                  Dog bite cases involve both immediate medical needs and long-term consequences including scarring, infections, and psychological trauma. We ensure comprehensive compensation for all aspects of recovery with systematic damages modeling and expert testimony.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Types of Compensation Available:</h3>
                <div className="grid gap-4">
                  <Card className="p-4">
                    <h4 className="font-bold mb-2 text-primary">Economic Damages</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Emergency medical treatment</li>
                      <li>• Surgical and reconstruction costs</li>
                      <li>• Physical therapy and rehabilitation</li>
                      <li>• Lost wages and benefits</li>
                      <li>• Diminished earning capacity</li>
                      <li>• Future medical expenses</li>
                      <li>• Psychological counseling costs</li>
                    </ul>
                  </Card>
                  <Card className="p-4">
                    <h4 className="font-bold mb-2 text-primary">Non-Economic Damages</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Pain and suffering</li>
                      <li>• Emotional distress</li>
                      <li>• Disfigurement and scarring</li>
                      <li>• Loss of enjoyment of life</li>
                      <li>• Mental anguish</li>
                      <li>• Social embarrassment</li>
                      <li>• Fear and anxiety</li>
                    </ul>
                  </Card>
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
                <h3 className="text-xl font-bold mb-4 text-red-700">California Statute of Limitations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <span><strong>2 years</strong> from the bite date for personal injury claims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <span><strong>2 years</strong> from 18th birthday for minor victims</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <span><strong>6 months</strong> for government entity claims</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-red-700">Why Immediate Action Is Critical</h3>
                <ul className="space-y-2">
                  <li>• Evidence disappears quickly</li>
                  <li>• Witnesses become unavailable</li>
                  <li>• Surveillance footage gets deleted</li>
                  <li>• Insurance companies use delays against you</li>
                  <li>• Medical documentation requirements</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white mr-4">
                Free Case Review Now
              </Button>
              <Button size="lg" className="bg-transparent text-red-600 border-red-600 hover:bg-red-600 hover:text-white">
                Call (818) 123-4567
              </Button>
            </div>
          </Card>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <HelpCircle className="w-8 h-8 text-primary" />
              Frequently Asked Questions About Dog Bites (50 Questions)
            </h2>
            <p className="text-muted-foreground mb-8">
              Get answers to the most common questions about dog bite laws, compensation, and legal procedures in California.
            </p>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <Card key={index} className="overflow-hidden">
                  <button
                    className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="font-medium pr-4">{faq.question}</span>
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <Collapsible open={expandedFaq === index}>
                    <CollapsibleContent>
                      <div className="p-6 pt-0 border-t border-border">
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Resources Section */}
        <section id="resources" className="content-section mb-16">
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Building className="w-8 h-8 text-primary" />
              Dog Bite Resources & Information
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">California Legal Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-primary hover:underline">California Civil Code Section 3342</a>
                    <p className="text-sm text-muted-foreground">Complete text of California's dog bite liability statute</p>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">California Department of Public Health - Rabies Information</a>
                    <p className="text-sm text-muted-foreground">Official guidelines for rabies exposure and treatment</p>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">Animal Control Agencies by County</a>
                    <p className="text-sm text-muted-foreground">Contact information for reporting dog bites statewide</p>
                  </li>
                </ul>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Medical & Support Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="text-primary hover:underline">Emergency Treatment Locations</a>
                    <p className="text-sm text-muted-foreground">Find immediate medical care for dog bite injuries</p>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">Plastic Surgery & Scar Treatment</a>
                    <p className="text-sm text-muted-foreground">Specialists for reconstructive surgery and scar revision</p>
                  </li>
                  <li>
                    <a href="#" className="text-primary hover:underline">Trauma Counseling Services</a>
                    <p className="text-sm text-muted-foreground">Mental health support for dog attack survivors</p>
                  </li>
                </ul>
              </Card>
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
            <Button size="lg" className="text-lg px-8 py-6" onClick={() => window.location.href = '/dog-bites-case-evaluation'}>
              Free Dog Bite Case Review
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Call (818) 123-4567
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DogBitesAnimalAttacks;