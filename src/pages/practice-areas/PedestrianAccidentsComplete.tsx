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
  User,
  Construction,
  Wrench
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/pedestrian-accidents-hero.jpg';
import sidebarImage from '@/assets/practice-areas/pedestrian-accidents.jpg';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const PedestrianAccidents: React.FC = () => {
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
    { id: 'pedestrian-rights', label: 'PEDESTRIAN RIGHTS', icon: Shield },
    { id: 'legal-process', label: 'LEGAL PROCESS', icon: Construction },
    { id: 'faq', label: 'FAQ', icon: MessageCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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
      question: "How long do I have to file a pedestrian accident claim in California?",
      answer: "Generally, you have two years from the date of the accident to file a personal injury claim. However, if the accident involved a government entity, special notice requirements may apply with much shorter deadlines."
    },
    {
      question: "What if I was jaywalking when the accident happened?",
      answer: "Even if you were jaywalking, you may still be entitled to compensation. California follows comparative negligence rules, meaning your compensation may be reduced but not eliminated based on your percentage of fault."
    },
    {
      question: "Can I sue if the driver who hit me was uninsured?",
      answer: "Yes, you may have several options including your own uninsured motorist coverage, assets of the uninsured driver, or other potentially liable parties like property owners or government entities."
    },
    {
      question: "How much is my pedestrian accident case worth?",
      answer: "Case values depend on injury severity, medical expenses, lost wages, permanent disabilities, and pain and suffering. We work with medical and economic experts to accurately assess all current and future damages."
    },
    {
      question: "What if the accident happened in a crosswalk?",
      answer: "Pedestrians in marked crosswalks have the right-of-way, and drivers who strike them face strong liability. However, insurance companies still try to blame pedestrians, which is why experienced legal representation is crucial."
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
              California Pedestrian Accident Lawyers
            </h1>
            
            <div className="flex items-center justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400 mr-1" />
              ))}
              <span className="ml-2 text-lg">Justice for Vulnerable Road Users</span>
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
              <h2 className="text-3xl font-bold text-red-600 mb-6">California Pedestrian Accident Attorneys</h2>
              
              <div className="prose prose-lg max-w-none mb-6">
                <p className="text-lg leading-relaxed mb-4">
                  Every 25 minutes, a pedestrian dies in a traffic accident somewhere in America, with California accounting for nearly 25% of all pedestrian fatalities nationwide despite having only 12% of the nation's population. In 2023 alone, over 1,000 California pedestrians lost their lives to vehicle strikes, while thousands more suffered catastrophic injuries that forever altered their futures.
                </p>
                
                <p className="text-lg leading-relaxed">
                  At Trembach Law Firm, we leverage our former defense attorney background to expose how insurance companies systematically blame pedestrians for accidents caused by driver negligence, ensuring maximum compensation for victims who were simply walking when vehicles destroyed their lives.
                </p>
              </div>

              <Collapsible open={expandedSections.overview} onOpenChange={() => toggleSection('overview')}>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" className="w-full justify-between mb-4">
                    Read More About California's Pedestrian Safety Crisis
                    {expandedSections.overview ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-6">
                  <div className="prose prose-lg max-w-none">
                    <h3>California's Pedestrian Safety Crisis</h3>
                    <p>
                      The vulnerability of pedestrians cannot be overstated—when thousands of pounds of steel strike an unprotected human body, the results are devastating. Unlike vehicle occupants protected by airbags, seatbelts, and crumple zones, pedestrians absorb direct impact forces causing traumatic brain injuries from pavement strikes, spinal damage from vehicle impact, crushing injuries to organs and limbs, and massive internal trauma. Even low-speed impacts that would cause minor vehicle damage can kill or permanently disable pedestrians.
                    </p>
                    
                    <p>
                      California's Vision Zero initiatives and Complete Streets policies acknowledge that pedestrian deaths are preventable tragedies, not inevitable accidents. Despite marked crosswalks, pedestrian signals, and vehicle code protections, drivers continue to strike pedestrians while turning without looking, speeding through residential areas, texting while driving, running red lights, and failing to yield at crosswalks.
                    </p>

                    <h3>The Demographics of Pedestrian Victims</h3>
                    <p>
                      Pedestrian accidents don't affect all populations equally. Children under 15 and adults over 65 comprise disproportionate percentages of pedestrian fatalities. Children lack the cognitive development to accurately judge vehicle speeds and distances, while older adults may have slower reaction times and less physical ability to escape dangerous situations.
                    </p>

                    <p>
                      Low-income communities face higher pedestrian accident rates due to inadequate infrastructure, poorly maintained crosswalks, insufficient lighting, and higher volumes of pedestrian traffic in areas lacking adequate public transportation. These communities often lack political influence to demand safer street designs, creating systemic safety disparities.
                    </p>

                    <h3>Urban Planning and Infrastructure Failures</h3>
                    <p>
                      Many California cities prioritize vehicle traffic flow over pedestrian safety, creating dangerous environments through poor street design. Wide, high-speed arterial roads cut through neighborhoods, creating barriers for pedestrians trying to access businesses, schools, and public transportation. Inadequate crosswalk timing forces pedestrians to hurry or become stranded in traffic islands.
                    </p>

                    <p>
                      Suburban sprawl creates car-dependent communities where walking becomes dangerous due to lack of sidewalks, poor lighting, and streets designed solely for vehicles. Strip malls and shopping centers often lack safe pedestrian access, forcing people to walk through parking lots and across dangerous driveways where drivers don't expect pedestrians.
                    </p>

                    <h3>Driver Behavior and Distraction</h3>
                    <p>
                      The rise of smartphone use has created an epidemic of distracted driving that particularly endangers pedestrians. Drivers looking at phones while turning right on red frequently strike pedestrians in crosswalks. Texting while driving through residential areas leads to children being struck while playing or walking to school.
                    </p>

                    <p>
                      California's culture of rushing and road rage also contributes to pedestrian accidents. Drivers become impatient with pedestrians taking time to cross streets, leading to aggressive behaviors like honking, accelerating toward crosswalks, or squeezing past pedestrians with minimal clearance.
                    </p>

                    <h3>Insurance Company Anti-Pedestrian Bias</h3>
                    <p>
                      Our former defense attorney experience reveals exactly how insurance companies approach pedestrian accident claims with predetermined bias. Adjusters receive training to investigate jaywalking regardless of actual crossing location, question pedestrian visibility despite broad daylight, argue comparative fault for legal crosswalk use, and minimize injuries as "expected" from choosing to walk.
                    </p>

                    <p>
                      Insurance companies employ accident reconstruction experts who consistently find ways to blame pedestrians. They'll argue pedestrians should have made eye contact with drivers, worn brighter clothing, waited longer before crossing, or chosen different routes entirely. These victim-blaming strategies ignore the fundamental legal principle that drivers must exercise reasonable care to avoid striking pedestrians.
                    </p>

                    <h3>The True Cost of Pedestrian Accidents</h3>
                    <p>
                      Pedestrian accidents create devastating financial impacts beyond immediate medical expenses. Traumatic brain injuries may require lifelong care and supervision. Spinal cord injuries necessitate extensive home modifications, specialized transportation, and ongoing therapy. Even seemingly minor injuries can result in chronic pain conditions that affect work capacity and quality of life.
                    </p>

                    <p>
                      Families often face difficult decisions about care arrangements when breadwinners become disabled or when injured family members require constant supervision. The psychological trauma extends to family members who witness accidents or struggle with guilt about not preventing them.
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
                <p className="mb-6">Provide some basic information to help us understand your pedestrian accident case better.</p>
                
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
                          <SelectItem value="brain-injury">Traumatic Brain Injury</SelectItem>
                          <SelectItem value="spinal-injury">Spinal Cord Injury</SelectItem>
                          <SelectItem value="fractures">Multiple Fractures</SelectItem>
                          <SelectItem value="internal-injuries">Internal Injuries</SelectItem>
                          <SelectItem value="soft-tissue">Soft Tissue Injuries</SelectItem>
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
                    Safety Organizations
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• National Highway Traffic Safety Administration</li>
                    <li>• California Office of Traffic Safety</li>
                    <li>• Vision Zero California</li>
                    <li>• Safe Routes to School</li>
                  </ul>
                </Card>
                
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Heart className="w-5 h-5 mr-2 text-primary" />
                    Support Resources
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Pedestrian Accident Support Groups</li>
                    <li>• Traumatic Brain Injury Resources</li>
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
                  alt="California pedestrian accident legal representation" 
                  className="w-full h-48 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
                  <div className="text-white text-center">
                    <h3 className="font-bold mb-2">Protecting Pedestrian Rights</h3>
                    <p className="text-sm">Justice for vulnerable road users</p>
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
                    <div className="font-bold text-lg">$2.3M Settlement</div>
                    <div className="text-sm text-muted-foreground">Crosswalk accident</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-lg">$1.7M Recovery</div>
                    <div className="text-sm text-muted-foreground">Brain injury case</div>
                  </div>
                  <div className="border-l-4 border-primary pl-4">
                    <div className="font-bold text-lg">$890K Verdict</div>
                    <div className="text-sm text-muted-foreground">Parking lot incident</div>
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

export default PedestrianAccidents;