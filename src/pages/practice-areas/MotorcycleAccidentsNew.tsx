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
  Bike,
  Construction,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/motorcycle-accidents-hero.jpg';
import sidebarImage from '@/assets/practice-areas/motorcycle-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const MotorcycleAccidentsNew: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    accidentDate: '',
    injuryType: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'immediate-steps', label: 'IMMEDIATE STEPS AFTER ACCIDENT', icon: AlertTriangle },
    { id: 'bias-defense', label: 'FIGHTING BIAS', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Construction },
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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = '/case-evaluation';
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How long do I have to file a motorcycle accident claim in California?",
      answer: "Generally, you have two years from the date of the accident to file a personal injury claim. However, certain circumstances can extend or shorten this deadline, so it's crucial to consult with an attorney immediately."
    },
    {
      question: "Is lane splitting legal in California, and how does it affect my case?",
      answer: "Yes, California is the only state where lane splitting is explicitly legal when done safely. Insurance companies often try to blame motorcyclists for legal lane splitting, but we know how to defend against these tactics."
    },
    {
      question: "What if the insurance company says I wasn't wearing a helmet?",
      answer: "While California requires helmets, helmet use doesn't determine fault for the accident. We fight against insurance companies who try to blame riders for injuries that would have occurred regardless of helmet use."
    },
    {
      question: "How much is my motorcycle accident case worth?",
      answer: "Case values depend on injury severity, medical expenses, lost wages, and other factors. We work with medical and economic experts to accurately calculate both current and future damages."
    },
    {
      question: "Why do I need a lawyer who specializes in motorcycle accidents?",
      answer: "Motorcycle cases involve unique laws, bias issues, and injury patterns that general personal injury attorneys may not understand. We specialize in overcoming anti-motorcycle prejudice and maximizing recovery."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[600px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        
        {/* Go Back Button */}
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
              California Motorcycle Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Defeating Anti-Motorcycle Bias</span>
            </div>
            
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 text-lg"
              onClick={() => window.location.href = '/case-evaluation'}
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Motorcycle Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  California's year-round riding weather and diverse scenic routes make it home to over 800,000 registered motorcycles, more than any other state. Yet when negligent drivers cause accidents, injured riders face not only devastating physical injuries but also systematic bias from insurance companies, law enforcement, and even potential jurors who wrongly assume motorcyclists are reckless thrill-seekers responsible for their own injuries.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we leverage our former defense attorney knowledge to expose and defeat the discriminatory tactics insurance companies use against motorcycle accident victims while securing maximum compensation for riders who have been wronged by careless drivers.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Read More About California's Motorcycle Community Crisis
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>California's Motorcycle Community Under Attack</h3>
                    <p>
                      From daily commuters navigating Los Angeles traffic to weekend warriors exploring Pacific Coast Highway, from adventure riders tackling mountain passes to touring enthusiasts crossing deserts, California's motorcycle community embodies freedom, efficiency, and passion. This diverse community includes professionals, retirees, veterans, and families who choose motorcycles for reasons ranging from environmental consciousness to economic necessity to pure enjoyment of the riding experience.
                    </p>
                    
                    <p>
                      The physics of motorcycle accidents create injury patterns far more severe than typical vehicle collisions. Without the protective cage of a car, airbags, or crumple zones, riders absorb impact forces directly through their bodies. Even low-speed collisions can launch riders onto pavement or into fixed objects, causing road rash, fractures, traumatic brain injuries, and spinal damage that can permanently alter lives.
                    </p>

                    <h3>The Economics of Motorcycle Transportation</h3>
                    <p>
                      Many California motorcyclists choose two wheels for practical reasons that benefit everyone on the road. Motorcycles consume significantly less fuel than cars, reducing environmental impact and dependence on foreign oil. They require less parking space, helping alleviate urban congestion. They enable efficient transportation through traffic, reducing commute times and improving productivity.
                    </p>

                    <p>
                      During economic downturns, many Californians turn to motorcycles as affordable transportation alternatives. A motorcycle can cost a fraction of a car's price while providing reliable transportation with minimal maintenance costs and exceptional fuel economy. For working families struggling with California's high cost of living, motorcycles represent practical solutions rather than recreational luxuries.
                    </p>

                    <h3>California's Unique Traffic Challenges</h3>
                    <p>
                      California's traffic congestion creates unique hazards for motorcyclists. Stop-and-go traffic on freeways like the 405, 101, and 5 creates rear-end collision risks as distracted drivers fail to notice stopped motorcycles. Urban areas with dense parking present "dooring" hazards as passengers exit vehicles without checking mirrors. Construction zones throughout the state create sudden lane changes and debris hazards that affect motorcycles more severely than cars.
                    </p>

                    <p>
                      The state's diverse geography also creates riding challenges. Coastal areas deal with marine layer fog that reduces visibility. Mountain regions face sudden weather changes and road conditions. Desert areas present extreme temperatures and visibility issues. Each environment requires different riding skills and presents unique accident risks.
                    </p>

                    <h3>Anti-Motorcycle Bias in the Legal System</h3>
                    <p>
                      Motorcycle accident victims face systematic discrimination that car accident victims never experience. Insurance companies, police officers, and potential jurors often harbor unconscious bias against motorcyclists, viewing them as reckless risk-takers who "asked for it" by choosing to ride. This bias translates into reduced settlements, minimized injuries, and blamed victims.
                    </p>

                    <p>
                      Our former defense attorney experience reveals exactly how insurance companies train adjusters to exploit these biases. They're taught to investigate whether riders were "showing off" or "speeding," regardless of evidence. They question helmet use even for injuries unrelated to head trauma. They scrutinize motorcycle modifications while ignoring driver negligence that caused accidents.
                    </p>

                    <h3>California's Lane Splitting Laws</h3>
                    <p>
                      California stands alone in explicitly legalizing lane splitting, recognizing that when performed prudently, this practice reduces rear-end collision risks and traffic congestion. Yet insurance companies systematically misrepresent lane splitting to argue comparative fault, even when riders followed California Highway Patrol guidelines perfectly.
                    </p>

                    <p>
                      The legal guidelines for safe lane splitting include riding at safe speeds relative to traffic flow, avoiding high-speed differentials, considering road and weather conditions, and using leftmost lanes when possible. Despite these clear parameters, insurance adjusters routinely characterize any lane splitting as "reckless" behavior contributing to accidents.
                    </p>

                    <h3>Medical Challenges Unique to Motorcycle Injuries</h3>
                    <p>
                      Emergency medical personnel and hospital staff may harbor unconscious bias against motorcyclists, viewing them as reckless risk-takers who "asked for" their injuries. This bias can affect initial treatment decisions and medical documentation that becomes crucial for legal cases. Additionally, many medical providers lack experience with motorcycle-specific injuries like road rash, which requires specialized treatment to prevent infection and minimize scarring.
                    </p>

                    <p>
                      The psychological trauma from motorcycle accidents extends beyond typical vehicle collision impacts. Riders often experience acute awareness during crashes as they're thrown from their bikes, creating vivid traumatic memories. The vulnerability felt during the accident can develop into long-term anxiety about riding or even being around traffic as a passenger in cars.
                    </p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </section>

            {/* Case Evaluation Section */}
            <section id="evaluation" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Free Case Evaluation</h2>
              
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Get Your Free Consultation</h3>
                <p className="mb-6">Provide some basic information to help us understand your motorcycle accident case better.</p>
                
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Accident Date</label>
                      <Input
                        type="date"
                        value={formData.accidentDate}
                        onChange={(e) => setFormData(prev => ({ ...prev, accidentDate: e.target.value }))}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Type of Injury</label>
                      <Select value={formData.injuryType} onValueChange={(value) => setFormData(prev => ({ ...prev, injuryType: value }))}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select injury type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="road-rash">Road Rash</SelectItem>
                          <SelectItem value="fractures">Fractures</SelectItem>
                          <SelectItem value="brain-injury">Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal Injury</SelectItem>
                          <SelectItem value="nerve-damage">Nerve Damage</SelectItem>
                          <SelectItem value="other">Other Injuries</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                    Start My Free Case Evaluation
                  </Button>
                </form>
              </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="border border-border rounded-lg">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                    >
                      <span className="font-medium">{faq.question}</span>
                      {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-muted-foreground">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Resources Section */}
            <section id="resources" className="content-section mb-12">
              <h2 className="text-3xl font-bold text-red-600 mb-6">Additional Resources</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Building className="w-5 h-5 mr-2 text-primary" />
                    Motorcycle Organizations
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Motorcycle Safety Foundation</li>
                    <li>• American Motorcyclist Association</li>
                    <li>• California Motorcyclist Association</li>
                    <li>• Motorcycle Industry Council</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Support Resources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Motorcycle Accident Support Groups</li>
                    <li>• Traumatic Injury Resources</li>
                    <li>• California Victim Compensation Program</li>
                    <li>• Disability Rights Organizations</li>
                  </ul>
                </Card>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-8">
              {/* Quick Contact Card */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <Phone className="w-5 h-5 mr-2" />
                    Free Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full bg-red-600 hover:bg-red-700">
                    <Phone className="w-4 h-4 mr-2" />
                    (855) 985-1234
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Consultation
                  </Button>
                  <div className="text-sm text-muted-foreground text-center">
                    Available 24/7 • No Fee Unless We Win
                  </div>
                </CardContent>
              </Card>

              {/* Case Evaluation Form */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Quick Case Evaluation</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <Input placeholder="Your Name" required />
                    <Input placeholder="Phone Number" type="tel" required />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Injury Severity" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="minor">Minor Injuries</SelectItem>
                        <SelectItem value="moderate">Moderate Injuries</SelectItem>
                        <SelectItem value="severe">Severe Injuries</SelectItem>
                        <SelectItem value="catastrophic">Catastrophic Injuries</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Get Free Evaluation
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Sidebar Image */}
              <div className="relative">
                <img 
                  src={sidebarImage} 
                  alt="California motorcycle accident legal representation" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-bold mb-2">Fighting for Motorcyclists</h3>
                    <p className="text-sm">Defeating bias, maximizing recovery</p>
                  </div>
                </div>
              </div>

              {/* Results Preview */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-yellow-600" />
                    Recent Results
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-lg">$1.8M Settlement</div>
                    <div className="text-sm text-muted-foreground">Lane splitting accident</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-lg">$950K Recovery</div>
                    <div className="text-sm text-muted-foreground">Left-turn collision</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-lg">$1.2M Verdict</div>
                    <div className="text-sm text-muted-foreground">Road rash and fractures</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotorcycleAccidentsNew;