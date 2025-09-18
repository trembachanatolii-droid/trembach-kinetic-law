import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  MessageCircle,
  ChevronDown, 
  ChevronUp,
  Shield,
  Scale,
  Clock,
  Users,
  Award,
  FileText,
  AlertTriangle,
  Brain,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Stethoscope,
  Activity,
  Zap,
  HeartPulse
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/brain-injuries-hero.jpg';
import rehabilitationImage from '@/assets/practice-areas/brain-injury-rehabilitation.jpg';
import medicalFacilityImage from '@/assets/practice-areas/brain-injury-medical-facility.jpg';
import testingImage from '@/assets/practice-areas/brain-injury-testing.jpg';
import emergencyCareImage from '@/assets/practice-areas/brain-injury-emergency-care.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const BrainInjuries: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lawyers');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    injuryDate: '',
    injuryType: '',
    symptoms: '',
    description: ''
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs: TabSection[] = [
    { id: 'lawyers', label: 'BRAIN INJURY LAWYERS', icon: Brain },
    { id: 'after-injury', label: 'AFTER A BRAIN INJURY', icon: AlertTriangle },
    { id: 'faq', label: 'BRAIN INJURY FAQ', icon: HelpCircle },
    { id: 'related-cases', label: 'RELATED CASES', icon: FileText }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us. We will review your brain injury case and contact you within 24 hours.');
  };

  const faqQuestions = [
    {
      question: "What is considered a traumatic brain injury in California law?",
      answer: "Under California law, a traumatic brain injury is any disruption of normal brain function caused by external physical force. This includes concussions, contusions, penetrating injuries, and anoxic injuries from lack of oxygen. Even 'mild' TBIs without loss of consciousness qualify if they cause cognitive, physical, or psychological symptoms. California courts recognize that brain injuries can occur without direct head impact through acceleration-deceleration forces."
    },
    {
      question: "How long after an accident can brain injury symptoms appear?",
      answer: "Brain injury symptoms can appear immediately or develop over days, weeks, or even months after trauma. Adrenaline and shock often mask initial symptoms. Delayed symptoms include headaches developing days later, memory problems emerging weeks post-injury, personality changes noticed by family over time, and depression or anxiety developing months later. This is why immediate medical evaluation is crucial even without obvious symptoms."
    },
    {
      question: "Do I have a case if my CT scan or MRI was normal?",
      answer: "Yes, you may still have a valid brain injury case even with normal imaging. Many brain injuries, especially mild TBIs and concussions, don't show on standard CT scans or MRIs. Microscopic damage to neurons and axons isn't visible on routine imaging. California courts recognize that normal scans don't rule out brain injury. Advanced testing like DTI MRI, PET scans, or neuropsychological evaluations can document injuries standard tests miss."
    },
    {
      question: "Can a concussion cause permanent damage?",
      answer: "Yes, concussions can cause permanent damage, especially with inadequate treatment or multiple injuries. Post-concussion syndrome can persist for years with chronic headaches, memory problems, difficulty concentrating, mood changes, and sleep disturbances. Multiple concussions increase risk of chronic traumatic encephalopathy (CTE), early dementia, and depression. Studies show 15-30% of concussion victims have symptoms lasting over a year."
    },
    {
      question: "How long do I have to file a brain injury lawsuit in California?",
      answer: "California's statute of limitations for personal injury claims, including brain injuries, is generally two years from the date of injury. However, the discovery rule may extend this deadline if symptoms appear later or if the full extent of the injury isn't immediately known. For minors, the deadline extends to two years after their 18th birthday. Government claims have shorter deadlines. Time limits are critical - don't delay in seeking legal counsel."
    },
    {
      question: "What damages can I recover for a brain injury in California?",
      answer: "California allows recovery for economic damages (medical expenses, lost wages, future care costs), non-economic damages (pain and suffering, emotional distress, loss of life enjoyment), and punitive damages in cases of extreme misconduct. Severe brain injuries often result in multi-million dollar settlements due to lifetime care needs and lost earning capacity. Compensation depends on injury severity, liability, and available insurance coverage."
    },
    {
      question: "Why is the insurance company offering such a low settlement?",
      answer: "Insurance companies systematically undervalue brain injury claims through various tactics: offering quick settlements before you understand injury severity, disputing the connection between accident and symptoms, claiming pre-existing conditions, minimizing invisible injuries, ignoring future medical needs and lost earnings, and using biased medical examiners. Initial offers are typically 10-20% of actual case value. Proper representation typically triples or quadruples settlement amounts."
    },
    {
      question: "What doctors should I see for a brain injury?",
      answer: "Comprehensive brain injury treatment requires multiple specialists: neurologists for overall brain function, neurosurgeons if surgery is needed, neuropsychologists for cognitive testing, psychiatrists for mood and behavior changes, physiatrists for rehabilitation, physical/occupational/speech therapists, neuro-ophthalmologists for vision problems, and endocrinologists for hormone disruptions. We connect you with California's leading brain injury specialists."
    }
  ];

  const injuryTypes = [
    {
      title: "Traumatic Brain Injury (TBI)",
      description: "Caused by external force to the head from car accidents, falls, or blows. Ranges from mild concussions to severe injuries causing permanent disability. Even 'mild' TBI can result in lasting cognitive and emotional changes requiring extensive treatment."
    },
    {
      title: "Concussion / Mild TBI",
      description: "Often dismissed as 'just a concussion,' these injuries can cause persistent post-concussion syndrome with headaches, dizziness, memory problems, and mood changes lasting months or years. Multiple concussions increase risk of CTE."
    },
    {
      title: "Diffuse Axonal Injury",
      description: "Severe rotational forces tear brain nerve fibers, often from high-speed crashes or violent shaking. Can cause coma, permanent vegetative state, or severe cognitive and physical disabilities. Requires lifetime care."
    },
    {
      title: "Anoxic/Hypoxic Brain Injury",
      description: "Oxygen deprivation from drowning, medical malpractice, or cardiac arrest. Even brief oxygen loss causes permanent damage. Victims may suffer memory loss, cognitive impairment, and physical disabilities."
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'lawyers':
        return (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Former Defense Attorney Advantage</h3>
                <p className="text-muted-foreground mb-6">
                  As a former defense attorney, I know exactly how insurance companies and their lawyers think. I've seen their playbooks, attended their strategy meetings, and understand their tactics to minimize brain injury claims.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-accent mt-0.5" />
                    <span>Counter every defense tactic before they use it</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Activity className="w-5 h-5 text-accent mt-0.5" />
                    <span>Anticipate insurance company strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-5 h-5 text-accent mt-0.5" />
                    <span>Build ironclad cases that force maximum compensation</span>
                  </li>
                </ul>
              </div>
              <div>
                <img src={rehabilitationImage} alt="Brain injury rehabilitation" className="w-full h-64 object-cover rounded-lg" />
              </div>
            </div>
            
            <div className="bg-muted/50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">California Brain Injury Statistics</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <ul className="space-y-2">
                    <li>• Over 280,000 Californians suffer TBI annually</li>
                    <li>• TBI is leading cause of death/disability ages 1-44</li>
                    <li>• Falls cause 47% of TBI hospitalizations</li>
                    <li>• Motor vehicles cause most TBI deaths</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-2">
                    <li>• Average severe TBI cost: $1.8-6.5 million</li>
                    <li>• 75% classified as "mild" but still permanent</li>
                    <li>• 52% remain disabled after one year</li>
                    <li>• 50% higher unemployment among TBI survivors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'after-injury':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-destructive/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Stethoscope className="w-6 h-6 text-destructive" />
                    <CardTitle className="text-xl">Seek Immediate Medical Care</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Brain injuries can have delayed symptoms. Get a comprehensive medical evaluation immediately, even if you feel fine. Document all symptoms, no matter how minor they seem.</p>
                </CardContent>
              </Card>
              
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    <CardTitle className="text-xl">Document Everything</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Keep detailed records of symptoms, medical visits, missed work, and daily challenges. Take photos of injuries and accident scenes. This evidence is crucial for your claim.</p>
                </CardContent>
              </Card>
              
              <Card className="border-accent/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Scale className="w-6 h-6 text-accent" />
                    <CardTitle className="text-xl">Contact Legal Help</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Insurance companies minimize brain injury claims. Our former defense experience reveals their tactics. We fight for maximum compensation while you focus on recovery.</p>
                </CardContent>
              </Card>
              
              <Card className="border-secondary/20">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Shield className="w-6 h-6 text-secondary" />
                    <CardTitle className="text-xl">Protect Your Rights</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p>Don't give recorded statements or sign anything without legal counsel. California's two-year statute of limitations makes prompt action essential.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-destructive" />
                Emergency Warning Signs
              </h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium mb-2">Seek immediate emergency care for:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Worsening headache</li>
                    <li>• Repeated vomiting</li>
                    <li>• Seizures or convulsions</li>
                    <li>• Unable to wake up</li>
                    <li>• One pupil larger than other</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium mb-2">Also watch for:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Slurred speech</li>
                    <li>• Weakness in limbs</li>
                    <li>• Unusual behavior/confusion</li>
                    <li>• Clear fluid from nose/ears</li>
                    <li>• Loss of consciousness</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'faq':
        return (
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <Collapsible 
                key={index}
                open={expandedFaq === index}
                onOpenChange={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className="w-full justify-between p-6 h-auto text-left hover:bg-muted/50"
                  >
                    <span className="font-medium">{faq.question}</span>
                    {expandedFaq === index ? <ChevronUp /> : <ChevronDown />}
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-6 pb-6">
                  <div className="pt-4 border-t border-border/50">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        );
      
      case 'related-cases':
        return (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {injuryTypes.map((injury, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Brain className="w-5 h-5 text-primary" />
                      {injury.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{injury.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">We Handle All Brain Injury Cases</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <ul className="space-y-1">
                    <li>• Car accident TBI</li>
                    <li>• Motorcycle accident brain injury</li>
                    <li>• Slip and fall head injury</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Sports-related concussion</li>
                    <li>• Medical malpractice TBI</li>
                    <li>• Workplace brain injury</li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-1">
                    <li>• Assault head trauma</li>
                    <li>• Defective product TBI</li>
                    <li>• Birth injury brain damage</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="California Brain Injury Lawyers | TBI Attorneys | Trembach Law"
        description="California brain injury lawyers fighting for TBI victims. Former defense attorney securing maximum compensation. Free consultation. No fees unless we win."
        canonical="/practice-areas/brain-injuries"
      />
      
      <GoBack />
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="hero-content container mx-auto px-4 text-center text-white z-10">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              <Award className="w-4 h-4 mr-2" />
              2026 Rising Star
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              <Shield className="w-4 h-4 mr-2" />
              Former Defense Attorney
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              <DollarSign className="w-4 h-4 mr-2" />
              Maximum Compensation
            </Badge>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Available
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            California Brain Injury Attorneys
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Your brain injury changes everything. We fight to secure the compensation and care you need for life. 
            Former defense attorney now fighting for TBI victims throughout California.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg">
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Link to="/brain-case-evaluation">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
                Free Case Review
              </Button>
            </Link>
          </div>
          
          <p className="text-lg">
            <strong>No Fees. No Risk.</strong><br />
            You only pay when we win
          </p>
        </div>
      </section>

      {/* 3 Ways to Start Form */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-80">
        <Card className="bg-gray-900 text-white border-gray-700">
          <CardHeader className="text-center pb-4">
            <h3 className="text-2xl font-bold text-white">
              3 WAYS TO START
            </h3>
            <div className="w-16 h-1 bg-red-600 mx-auto mt-2"></div>
            <p className="text-sm text-gray-300 mt-3">
              Call Now For Your Free Consultation
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
              <Phone className="w-5 h-5 mr-2" />
              CALL (818) 123-4567
            </Button>
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
              <Mail className="w-5 h-5 mr-2" />
              EMAIL US
            </Button>
            <Link to="/brain-case-evaluation" className="block">
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6 text-lg font-semibold">
                <FileText className="w-5 h-5 mr-2" />
                CALCULATE SETTLEMENT
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <div ref={contentRef} className="py-16">
        {/* Navigation Tabs */}
        <div className="container mx-auto px-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <Button
                  key={tab.id}
                  variant={activeTab === tab.id ? "default" : "outline"}
                  className={`px-6 py-3 ${activeTab === tab.id ? 'bg-red-600 hover:bg-red-700 text-white' : 'hover:bg-red-50'}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {tab.label}
                </Button>
              );
            })}
          </div>

          <div className="content-section">
            {renderTabContent()}
          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Brain Injuries Require Specialized Legal Expertise</h2>
            <p className="text-xl mb-8 max-w-4xl mx-auto">
              With millions in potential medical costs and lifetime care needs, you need attorneys who understand 
              the devastating impact of TBI. Our former defense experience gives you the edge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (818) 123-4567
              </Button>
              <Link to="/brain-case-evaluation">
                <Button size="lg" variant="outline" className="bg-white/10 border-white hover:bg-white hover:text-primary">
                  Start Case Evaluation
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Brain Injury Case Process</h2>
              <p className="text-xl text-muted-foreground">Strategic approach developed from former defense experience</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {[
                {
                  number: "1",
                  title: "Immediate Case Evaluation",
                  description: "Free, comprehensive review of your brain injury case within 24 hours. We assess liability, damages, and all available insurance coverage."
                },
                {
                  number: "2", 
                  title: "Medical Documentation",
                  description: "Connect you with brain injury specialists. Thoroughly document current and future medical needs, cognitive testing, and life care planning."
                },
                {
                  number: "3",
                  title: "Aggressive Investigation", 
                  description: "Deploy investigators, accident reconstructionists, and biomechanical experts. Preserve critical evidence before it disappears."
                },
                {
                  number: "4",
                  title: "Strategic Negotiation",
                  description: "Using former defense knowledge, we anticipate insurance tactics and build overwhelming cases prepared for trial."
                },
                {
                  number: "5",
                  title: "Maximum Recovery",
                  description: "Secure compensation for all damages: medical expenses, lost wages, pain and suffering, future care, and punitive damages."
                }
              ].map((step, index) => (
                <Card key={index} className="content-section text-center">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.number}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-4 text-red-500">Don't Wait - Time Limits Apply for California</h2>
            <p className="text-xl mb-8">
              California has strict deadlines for brain injury claims. Evidence disappears and witnesses forget. 
              Protect your rights with immediate legal action.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/brain-case-evaluation">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 px-8 py-6 text-lg">
                  Start My Brain Injury Case Evaluation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-6 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default BrainInjuries;