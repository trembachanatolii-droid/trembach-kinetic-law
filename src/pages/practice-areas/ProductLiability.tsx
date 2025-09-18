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
  Building,
  Map,
  ArrowLeft,
  Camera,
  MapPin,
  Calendar,
  DollarSign,
  BookOpen,
  HelpCircle,
  Activity,
  UserX,
  CheckCircle,
  Calculator,
  Gavel,
  TrendingUp,
  Home,
  Car,
  Briefcase,
  Settings,
  Wrench,
  ShoppingCart
} from 'lucide-react';
import heroBackground from '@/assets/practice-areas/product-liability-hero.jpg';
import legalConsultationImage from '@/assets/practice-areas/product-liability-legal-consultation.jpg';
import courthouseImage from '@/assets/practice-areas/product-liability-courthouse.jpg';
import manufacturingImage from '@/assets/practice-areas/product-liability-manufacturing.jpg';
import compensationImage from '@/assets/practice-areas/product-liability-compensation.jpg';
import designImage from '@/assets/practice-areas/product-liability-design.jpg';
import SEO from '@/components/SEO';
import GoBack from '@/components/GoBack';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

interface TabSection {
  id: string;
  label: string;
  icon: React.ElementType;
}

const ProductLiability: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    productType: '',
    injuryDate: '',
    description: '',
    consentToContact: false
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const tabs: TabSection[] = [
    { id: 'overview', label: 'OVERVIEW', icon: FileText },
    { id: 'evaluation', label: 'CASE EVALUATION', icon: Scale },
    { id: 'what-to-do', label: 'WHAT TO DO', icon: AlertTriangle },
    { id: 'types-of-defects', label: 'TYPES OF DEFECTS', icon: Gavel },
    { id: 'proving-liability', label: 'PROVING LIABILITY', icon: Shield },
    { id: 'compensation', label: 'COMPENSATION', icon: DollarSign },
    { id: 'time-limits', label: 'TIME LIMITS', icon: Clock },
    { id: 'faq', label: 'FAQ', icon: HelpCircle },
    { id: 'resources', label: 'RESOURCES', icon: Building }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Remove hero animation for immediate appearance

      gsap.fromTo(contentRef.current?.querySelectorAll('.content-section'),
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = 'Free Product Liability Case Evaluation Request';
    const body = `
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Product Type: ${formData.productType}
Date of Injury: ${formData.injuryDate}
Description: ${formData.description}
Consent to Contact: ${formData.consentToContact ? 'Yes' : 'No'}
    `;
    window.open(`mailto:contact@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const faqData = [
    {
      question: "What is product liability under California law?",
      answer: "Product liability in California holds manufacturers, distributors, and sellers strictly liable for injuries caused by defective products. You don't need to prove negligence - only that the product was defective and caused your injury when used as intended or in a reasonably foreseeable manner."
    },
    {
      question: "What are the three types of product defects?",
      answer: "The three types are: (1) Manufacturing defects - errors during production making specific units dangerous; (2) Design defects - inherent flaws making all units dangerous; (3) Warning defects - inadequate instructions or failure to warn about dangers."
    },
    {
      question: "How long do I have to file a product liability lawsuit in California?",
      answer: "Generally, you have two years from the date of injury to file a product liability lawsuit in California. However, the discovery rule may extend this if injuries weren't immediately apparent. For property damage, you have three years."
    },
    {
      question: "Do I need to prove the manufacturer was negligent?",
      answer: "No. California follows strict liability for product defects. You only need to prove the product was defective when it left the defendant's control and that the defect caused your injury. The manufacturer's level of care is irrelevant."
    },
    {
      question: "Who can be held liable for a defective product?",
      answer: "Anyone in the chain of distribution can be held liable: manufacturers, component part manufacturers, distributors, wholesalers, and retailers. All are strictly liable regardless of fault or knowledge of the defect."
    },
    {
      question: "What if I was partially at fault for my injury?",
      answer: "California follows comparative fault rules. You can still recover damages, but your compensation will be reduced by your percentage of fault. For example, if you're 30% at fault, you can recover 70% of your damages."
    },
    {
      question: "What damages can I recover in a product liability case?",
      answer: "You can recover economic damages (medical bills, lost wages, property damage), non-economic damages (pain and suffering, emotional distress, loss of enjoyment), and potentially punitive damages for malicious conduct by the manufacturer."
    },
    {
      question: "What if the product has been recalled?",
      answer: "A recall strengthens your case by showing the manufacturer acknowledged the defect. However, you can pursue a claim even without a recall. Conversely, compliance with a recall doesn't eliminate your right to compensation for injuries already suffered."
    },
    {
      question: "Do I need to have the defective product?",
      answer: "Ideally yes, but not always. If the product was destroyed in the incident or discarded, we can still build a case using photos, witness testimony, similar incidents, and expert analysis. Preserve the product if possible."
    },
    {
      question: "Can I sue if I didn't buy the product myself?",
      answer: "Yes. California eliminated the privity requirement. You can sue even if you didn't purchase the product - whether you borrowed it, received it as a gift, or were a bystander injured by someone else's product."
    },
    {
      question: "What is strict liability?",
      answer: "Strict liability means defendants are liable for defective products regardless of fault. Even if they took all possible precautions, they're still responsible for injuries caused by defects. This protects consumers who can't prove negligence."
    },
    {
      question: "How do I prove a manufacturing defect?",
      answer: "Show that your product differs from the manufacturer's intended design or from other units in the same product line. This often requires expert testimony comparing your product to proper specifications or undamaged units."
    },
    {
      question: "How do I prove a design defect?",
      answer: "California uses two tests: (1) Consumer expectation - the product failed to perform as safely as an ordinary consumer would expect; (2) Risk-benefit - the design's risks outweigh its benefits and a safer alternative was feasible."
    },
    {
      question: "What constitutes inadequate warning?",
      answer: "Warnings must be clear, conspicuous, and adequately inform users of specific dangers and how to avoid them. Inadequate warnings include those that are too small, poorly placed, vague about risks, or missing entirely."
    },
    {
      question: "Can I sue for a used product that injured me?",
      answer: "Yes, if the defect existed when the product was originally sold. Manufacturers remain liable for original defects. However, used product sellers typically aren't strictly liable unless they reconditioned the product."
    },
    {
      question: "What if I modified the product?",
      answer: "Modifications may reduce or eliminate manufacturer liability if they caused the injury. However, manufacturers remain liable if the modification was foreseeable or if the original defect contributed to harm despite modification."
    },
    {
      question: "What if I misused the product?",
      answer: "Manufacturers must anticipate reasonably foreseeable misuse. You may still have a claim if your misuse was predictable. However, unforeseeable misuse that solely caused injury may bar recovery."
    },
    {
      question: "Can I join a class action lawsuit?",
      answer: "If a class action exists for your product and injuries, you may join it. Class actions provide efficiency but may limit individual recovery. We evaluate whether individual litigation or class participation best serves your interests."
    },
    {
      question: "What's the difference between class action and mass tort?",
      answer: "Class actions combine all claims into one lawsuit with representative plaintiffs. Mass torts maintain individual lawsuits while coordinating common issues. Mass torts allow individualized damage assessment while sharing litigation costs."
    },
    {
      question: "How much is my product liability case worth?",
      answer: "Case value depends on injury severity, medical expenses, lost wages, permanency of injuries, impact on life quality, and defendant's conduct. Cases range from thousands to millions of dollars depending on these factors."
    },
    {
      question: "What if the manufacturer is overseas?",
      answer: "Foreign manufacturers selling products in California can be sued here. If they're unreachable, we pursue domestic distributors and retailers who are strictly liable for selling defective foreign products."
    },
    {
      question: "What if the company went out of business?",
      answer: "We explore successor liability, insurance coverage that may survive, parent company liability, and claims against distributors and retailers. Bankruptcy doesn't always eliminate claims if insurance exists."
    },
    {
      question: "Do I need an expert witness?",
      answer: "Most product liability cases require experts to establish defects and causation. We work with engineers, safety experts, medical professionals, and industry specialists. Expert costs are advanced by our firm."
    },
    {
      question: "What evidence should I preserve?",
      answer: "Keep the defective product, packaging, instructions, receipts, photos of injuries and the scene, medical records, witness information, and any correspondence about the product. Don't repair or alter the product."
    },
    {
      question: "Can I sue for emotional distress?",
      answer: "Yes. Emotional distress damages are recoverable in product liability cases, especially when accompanying physical injuries. Severe emotional distress from witnessing injury to family members may also be compensable."
    },
    {
      question: "What are punitive damages?",
      answer: "Punitive damages punish defendants for malicious, oppressive, or fraudulent conduct. Common in cases where manufacturers knew about defects but continued selling products. No cap exists on punitive damages in California."
    },
    {
      question: "How long does a product liability case take?",
      answer: "Cases typically take 12-18 months but can vary. Simple cases with clear liability may settle in months. Complex cases involving multiple parties or disputed causation may take 2-3 years to resolve."
    },
    {
      question: "Will my case go to trial?",
      answer: "Most cases settle before trial, but we prepare every case for trial. Strong trial preparation often leads to better settlements. If trial is necessary, we're fully prepared to present your case to a jury."
    },
    {
      question: "What if I can't afford a lawyer?",
      answer: "We work on contingency - you pay nothing unless we win. We advance all costs including filing fees, expert witnesses, and investigation expenses. You never pay out of pocket."
    },
    {
      question: "What's the consumer expectation test?",
      answer: "This test for design defects asks whether the product performed as safely as an ordinary consumer would expect when used as intended or in a reasonably foreseeable manner. Expert testimony isn't always required."
    },
    {
      question: "What's the risk-benefit test?",
      answer: "This alternative test weighs the product's risks against its benefits, considering gravity of danger, likelihood of harm, feasibility of safer alternatives, cost of improvements, and disadvantages of alternative designs."
    },
    {
      question: "Can retailers be held liable even if they didn't know about the defect?",
      answer: "Yes. Retailers are strictly liable regardless of knowledge or opportunity to inspect. This ensures injured consumers have accessible defendants and encourages retailers to deal with reputable manufacturers."
    },
    {
      question: "What if the product met government standards?",
      answer: "Compliance with government standards doesn't immunize manufacturers from liability. Standards often represent minimum requirements. Products meeting standards can still be defective under California law."
    },
    {
      question: "Can I sue for injuries from prescription drugs?",
      answer: "Yes, but prescription drugs have special rules. Design defect claims are limited, but you can sue for manufacturing defects and inadequate warnings about side effects and risks."
    },
    {
      question: "What about medical device injuries?",
      answer: "Medical devices face similar rules to prescription drugs. While some FDA-approved devices have limited liability, many cases proceed successfully for manufacturing defects and failure to warn."
    },
    {
      question: "Can I sue for food poisoning?",
      answer: "Yes. Contaminated food products are subject to strict liability. Restaurants, food manufacturers, and distributors can be held liable for selling contaminated food causing illness."
    },
    {
      question: "What if I signed a waiver or disclaimer?",
      answer: "Waivers generally don't bar product liability claims in California. Manufacturers cannot contract away liability for defective products that injure consumers. Public policy prevents such disclaimers."
    },
    {
      question: "Can I sue for a defective car if I wasn't driving?",
      answer: "Yes. Passengers, pedestrians, and other drivers injured by defective vehicles can sue manufacturers. You don't need to own or operate the defective product to have a claim."
    },
    {
      question: "What's the sophisticated user defense?",
      answer: "Manufacturers may avoid warning liability if users are professionals who should know the product's dangers through training or experience. This rarely applies to consumer products."
    },
    {
      question: "Can children's injuries lead to higher compensation?",
      answer: "Often yes. Children's injuries may result in higher damages due to longer life expectancy, greater impact on development, and lifetime of medical needs. Products must be safe for foreseeable access by children."
    },
    {
      question: "What if multiple products might have caused my injury?",
      answer: "California allows alternative liability theories when you can't identify which specific product caused harm. All potential manufacturers may be liable unless they prove their product didn't cause injury."
    },
    {
      question: "Do I need to report the defect to authorities?",
      answer: "Not required for your lawsuit, but reporting to CPSC, FDA, or NHTSA helps prevent future injuries. We can assist with reporting while protecting your legal interests."
    },
    {
      question: "Can I recover lost future earnings?",
      answer: "Yes. If injuries prevent you from working or limit earning capacity, you can recover lost future earnings. Economic experts calculate lifetime earning losses considering career trajectory and inflation."
    },
    {
      question: "What if my family member died from a defective product?",
      answer: "Wrongful death claims allow recovery for funeral expenses, lost financial support, and loss of companionship. Spouse, children, and dependents can pursue claims within two years of death."
    },
    {
      question: "Can I sue if the product didn't cause physical injury?",
      answer: "Property damage and economic losses are recoverable. Pure economic loss without physical injury or property damage is generally not recoverable in product liability, with limited exceptions."
    },
    {
      question: "What's a design hierarchy?",
      answer: "Safety design hierarchy prioritizes: (1) Design out the hazard entirely; (2) Guard against the hazard; (3) Warn about residual hazards. Manufacturers should eliminate dangers when feasible, not just warn."
    },
    {
      question: "Can I sue Amazon or eBay for defective products?",
      answer: "California courts increasingly hold online marketplaces liable when they participate in the stream of commerce beyond mere platform services. Liability depends on their level of control over sales."
    },
    {
      question: "What if I'm not a U.S. citizen?",
      answer: "Immigration status doesn't affect your right to pursue product liability claims. You have the same rights as citizens to seek compensation for injuries from defective products."
    },
    {
      question: "Can I sue for allergic reactions?",
      answer: "If the product lacked adequate allergen warnings or contained undisclosed allergens, you may have a claim. Manufacturers must warn about common allergens and ingredients that could cause reactions."
    },
    {
      question: "How do you calculate pain and suffering damages?",
      answer: "California uses no fixed formula. Factors include injury severity, duration of pain, impact on daily activities, emotional distress, and effect on life enjoyment. Juries have wide discretion in awarding these damages."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="California Product Liability Attorney | Defective Products Lawyer | Expert Legal Representation | Free Consultation"
        description="California product liability lawyers fighting for victims of defective products. Former defense attorney insight. Free case evaluation, contingency fees, maximum compensation."
        canonical="/practice-areas/product-liability"
      />

      <GoBack fallbackPath="/practice-areas/product-liability" />

      {/* Hero Section - Same ratio as Wrongful Death */}
      <section 
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
        ref={heroRef}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center hero-content">
            <Badge className="mb-6 bg-red-600 hover:bg-red-700 text-white px-4 py-2 text-sm font-medium">
              California Product Liability Attorney
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Injured by a Defective Product? We Fight Manufacturers for Maximum Compensation
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              California's strict liability laws hold manufacturers accountable. Our former defense experience reveals their tactics. We know how to win.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Phone className="w-5 h-5 mr-2" />
                Call (818) 123-4567
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3"
                onClick={() => navigate('/product-liability-case-evaluation')}
              >
                <Calculator className="w-5 h-5 mr-2" />
                Free Case Evaluation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8" ref={contentRef}>
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Main Content */}
          <div className="xl:w-2/3 w-full space-y-8">
            {/* Navigation Tabs */}
            <div className="content-section">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-8 p-2 bg-gray-100 rounded-lg">
                {tabs.map((tab) => {
                  const IconComponent = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center justify-center gap-1 px-2 py-3 rounded-md text-xs font-medium transition-all text-center ${
                        activeTab === tab.id
                          ? 'bg-red-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-white'
                      }`}
                    >
                      <IconComponent className="w-3 h-3" />
                      <span className="hidden sm:inline">{tab.label}</span>
                      <span className="sm:hidden">{tab.label.split(' ')[0]}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Tab Content */}
            {activeTab === 'overview' && (
              <section id="overview" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <FileText className="w-8 h-8 text-red-600" />
                    Product Liability Overview
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">California's Strict Liability Protection</h3>
                      <p className="text-lg leading-relaxed mb-4">
                        California holds manufacturers, distributors, and retailers strictly liable for injuries caused by defective products. You don't need to prove negligence - only that the product was defective and caused your injury when used as intended or in a reasonably foreseeable manner.
                      </p>
                      <p className="text-lg leading-relaxed">
                        This powerful consumer protection law ensures that companies who profit from selling products bear the responsibility when those products cause harm. Our former defense attorney experience gives us unique insight into how manufacturers defend these cases and how to overcome their strategies.
                      </p>
                    </div>
                    <div>
                      <img 
                        src={legalConsultationImage} 
                        alt="Product liability legal consultation" 
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <Card className="p-6 border-l-4 border-l-red-600">
                      <h4 className="font-bold text-red-600 mb-2">No Fault Required</h4>
                      <p className="text-sm">Strict liability means manufacturers are responsible regardless of how careful they were.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-blue-600">
                      <h4 className="font-bold text-blue-600 mb-2">All Distribution Chain</h4>
                      <p className="text-sm">Everyone who sold the product can be held liable - manufacturers, distributors, and retailers.</p>
                    </Card>
                    <Card className="p-6 border-l-4 border-l-green-600">
                      <h4 className="font-bold text-green-600 mb-2">Maximum Recovery</h4>
                      <p className="text-sm">Multiple defendants mean multiple sources of compensation for your injuries.</p>
                    </Card>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'evaluation' && (
              <section id="evaluation" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Scale className="w-8 h-8 text-red-600" />
                    Free Case Evaluation
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Get Your Free Product Liability Case Assessment</h3>
                      <p className="text-lg mb-4">
                        Our experienced product liability attorneys will evaluate your case at no cost. We'll review your situation, explain your rights, and outline your legal options.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-lg">Free consultation with experienced attorney</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-lg">Case evaluation within 24 hours</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-lg">No fees unless we win your case</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-lg">Immediate preservation of evidence</span>
                        </li>
                      </ul>
                      <Button 
                        size="lg" 
                        className="bg-red-600 hover:bg-red-700 w-full"
                        onClick={() => navigate('/product-liability-case-evaluation')}
                      >
                        Start Your Free Case Evaluation
                      </Button>
                    </div>
                    <div>
                      <img 
                        src={courthouseImage} 
                        alt="Product liability case evaluation" 
                        className="w-full h-full object-cover rounded-lg shadow-lg"
                      />
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'what-to-do' && (
              <section id="what-to-do" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <AlertTriangle className="w-8 h-8 text-red-600" />
                    What to Do After a Product Injury
                  </h2>
                  <div className="space-y-6">
                    <div className="border-l-4 border-l-red-500 pl-6">
                      <h3 className="text-xl font-bold mb-3">Immediate Steps (First 24 Hours)</h3>
                      <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">1.</span>
                          <span>Seek immediate medical attention for any injuries</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">2.</span>
                          <span>Preserve the defective product - don't repair or alter it</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">3.</span>
                          <span>Take photos of your injuries, the product, and the accident scene</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-red-600">4.</span>
                          <span>Keep all packaging, instructions, and receipts</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-orange-500 pl-6">
                      <h3 className="text-xl font-bold mb-3">Evidence Preservation (First Week)</h3>
                      <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-orange-600">5.</span>
                          <span>Collect witness contact information</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-orange-600">6.</span>
                          <span>Save all medical records and bills</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-orange-600">7.</span>
                          <span>Document all conversations about the incident</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-orange-600">8.</span>
                          <span>Check if the product has been recalled</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-l-blue-500 pl-6">
                      <h3 className="text-xl font-bold mb-3">Legal Action (As Soon As Possible)</h3>
                      <ul className="space-y-2 text-lg">
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-blue-600">9.</span>
                          <span>Contact experienced product liability attorney</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-blue-600">10.</span>
                          <span>Don't sign anything from insurance companies</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-blue-600">11.</span>
                          <span>Report the defect to appropriate agencies if advised</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold text-blue-600">12.</span>
                          <span>Begin formal legal investigation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'types-of-defects' && (
              <section id="types-of-defects" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Gavel className="w-8 h-8 text-red-600" />
                    Three Types of Product Defects
                  </h2>
                  <p className="text-lg mb-8">Understanding your claim type is critical for maximum compensation under California law.</p>
                  
                  <div className="grid gap-8">
                    <Card className="p-6 border-l-4 border-l-red-600">
                      <div className="flex items-start gap-4">
                        <Settings className="w-8 h-8 text-red-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Manufacturing Defects</h3>
                          <p className="text-lg mb-4">
                            Errors during production make specific units dangerous while others from the same line work properly. Examples: contaminated medication batch, missing brake components, faulty wiring in appliances.
                          </p>
                          <Button 
                            variant="ghost" 
                            onClick={() => toggleSection('manufacturing')}
                            className="text-red-600 hover:text-red-700 p-0"
                          >
                            Learn More {expandedSections['manufacturing'] ? '↑' : '↓'}
                          </Button>
                          <Collapsible open={expandedSections['manufacturing']}>
                            <CollapsibleContent>
                              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg mb-4"><strong>Legal Standard:</strong> Under California law, you don't need to prove negligence - only that the defect existed when the product left the manufacturer's control.</p>
                                <p className="text-lg mb-4"><strong>Common Examples:</strong></p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                                  <li>Contaminated pharmaceuticals or food products</li>
                                  <li>Vehicles with missing or improperly installed parts</li>
                                  <li>Electronics with faulty wiring causing fires</li>
                                  <li>Medical devices with structural flaws</li>
                                  <li>Children's toys with sharp edges from poor molding</li>
                                </ul>
                                <p className="text-lg"><strong>Evidence Needed:</strong> The defective product itself, proof of proper use, medical records, expert testimony comparing your product to properly manufactured units.</p>
                                <img 
                                  src={manufacturingImage} 
                                  alt="Manufacturing defects in production" 
                                  className="w-full h-48 object-cover rounded-lg mt-4"
                                />
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-blue-600">
                      <div className="flex items-start gap-4">
                        <Wrench className="w-8 h-8 text-blue-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Design Defects</h3>
                          <p className="text-lg mb-4">
                            The entire product line is inherently dangerous due to flawed design, even when manufactured perfectly. Examples: SUVs prone to rollovers, medical implants that degrade, toys with choking hazards.
                          </p>
                          <Button 
                            variant="ghost" 
                            onClick={() => toggleSection('design')}
                            className="text-blue-600 hover:text-blue-700 p-0"
                          >
                            Learn More {expandedSections['design'] ? '↑' : '↓'}
                          </Button>
                          <Collapsible open={expandedSections['design']}>
                            <CollapsibleContent>
                              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg mb-4"><strong>Legal Tests in California:</strong></p>
                                <p className="text-lg mb-4">1. <strong>Consumer Expectation Test:</strong> Did the product perform as safely as an ordinary consumer would expect?</p>
                                <p className="text-lg mb-4">2. <strong>Risk-Benefit Test:</strong> Do the design's risks outweigh its benefits, and was a safer alternative feasible?</p>
                                <p className="text-lg mb-4"><strong>Evidence Required:</strong> Expert testimony on alternative designs, industry standards, cost-benefit analysis, and feasibility of safer designs.</p>
                                <img 
                                  src={designImage} 
                                  alt="Product design and safety testing" 
                                  className="w-full h-48 object-cover rounded-lg mt-4"
                                />
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                    </Card>

                    <Card className="p-6 border-l-4 border-l-green-600">
                      <div className="flex items-start gap-4">
                        <AlertTriangle className="w-8 h-8 text-green-600 mt-1" />
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3">Warning Defects</h3>
                          <p className="text-lg mb-4">
                            Inadequate instructions or failure to warn about dangers. Even properly manufactured and designed products must include adequate warnings about risks and proper use.
                          </p>
                          <Button 
                            variant="ghost" 
                            onClick={() => toggleSection('warning')}
                            className="text-green-600 hover:text-green-700 p-0"
                          >
                            Learn More {expandedSections['warning'] ? '↑' : '↓'}
                          </Button>
                          <Collapsible open={expandedSections['warning']}>
                            <CollapsibleContent>
                              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                                <p className="text-lg mb-4"><strong>Warning Requirements:</strong> Warnings must be clear, conspicuous, and adequately inform users of specific dangers and how to avoid them.</p>
                                <p className="text-lg mb-4"><strong>Inadequate Warnings Include:</strong></p>
                                <ul className="list-disc list-inside space-y-2 mb-4 text-lg">
                                  <li>Warnings that are too small or poorly placed</li>
                                  <li>Vague warnings that don't specify the actual risk</li>
                                  <li>Missing warnings about known dangers</li>
                                  <li>Warnings in wrong language for intended users</li>
                                  <li>Buried warnings in lengthy instruction manuals</li>
                                </ul>
                                <p className="text-lg"><strong>Design Hierarchy Principle:</strong> Manufacturers should eliminate dangers when possible, guard against hazards, and warn only about unavoidable risks.</p>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'proving-liability' && (
              <section id="proving-liability" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-8 h-8 text-red-600" />
                    Proving Product Liability in California
                  </h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Elements of a Product Liability Claim</h3>
                      <p className="text-lg mb-6">
                        California's strict liability doctrine makes it easier to prove product liability compared to negligence claims. You must establish these key elements:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <Card className="p-6">
                          <h4 className="font-bold text-red-600 mb-3">1. Defect Existed</h4>
                          <p className="text-lg">The product had a manufacturing defect, design defect, or inadequate warning when it left the defendant's control.</p>
                        </Card>
                        <Card className="p-6">
                          <h4 className="font-bold text-red-600 mb-3">2. Causation</h4>
                          <p className="text-lg">The defect was a substantial factor in causing your injury - it doesn't need to be the only cause.</p>
                        </Card>
                        <Card className="p-6">
                          <h4 className="font-bold text-red-600 mb-3">3. Commercial Sale</h4>
                          <p className="text-lg">The product was sold in the regular course of business, not a casual sale between individuals.</p>
                        </Card>
                        <Card className="p-6">
                          <h4 className="font-bold text-red-600 mb-3">4. Foreseeable Use</h4>
                          <p className="text-lg">You used the product as intended or in a reasonably foreseeable manner when the injury occurred.</p>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Why California's Laws Favor Consumers</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <ul className="space-y-4 text-lg">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>No Negligence Required:</strong> You don't need to prove the manufacturer was careless</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Multiple Defendants:</strong> Everyone in the distribution chain can be held liable</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>No Privity Required:</strong> You can sue even if you didn't buy the product</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Unlimited Damages:</strong> No caps on pain and suffering in product liability cases</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <img 
                            src={legalConsultationImage} 
                            alt="Legal consultation for product liability" 
                            className="w-full h-64 object-cover rounded-lg shadow-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'compensation' && (
              <section id="compensation" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <DollarSign className="w-8 h-8 text-red-600" />
                    Product Liability Compensation
                  </h2>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-4">Types of Damages Available</h3>
                      <p className="text-lg mb-6">
                        California law provides comprehensive compensation for product liability victims with no caps on most damages.
                      </p>
                      
                      <div className="space-y-4">
                        <Card className="p-4 border-l-4 border-l-blue-600">
                          <h4 className="font-bold text-blue-600 mb-2">Economic Damages</h4>
                          <ul className="text-lg space-y-1">
                            <li>• Medical expenses (past and future)</li>
                            <li>• Lost wages and earning capacity</li>
                            <li>• Property damage</li>
                            <li>• Rehabilitation costs</li>
                          </ul>
                        </Card>
                        
                        <Card className="p-4 border-l-4 border-l-green-600">
                          <h4 className="font-bold text-green-600 mb-2">Non-Economic Damages</h4>
                          <ul className="text-lg space-y-1">
                            <li>• Pain and suffering</li>
                            <li>• Emotional distress</li>
                            <li>• Loss of enjoyment of life</li>
                            <li>• Disfigurement and scarring</li>
                          </ul>
                        </Card>
                        
                        <Card className="p-4 border-l-4 border-l-red-600">
                          <h4 className="font-bold text-red-600 mb-2">Punitive Damages</h4>
                          <ul className="text-lg space-y-1">
                            <li>• When manufacturers act with malice</li>
                            <li>• Concealing known defects</li>
                            <li>• Fraud or oppression</li>
                            <li>• No caps in California</li>
                          </ul>
                        </Card>
                      </div>
                    </div>
                    <div>
                      <img 
                        src={compensationImage} 
                        alt="Product liability compensation calculation" 
                        className="w-full h-80 object-cover rounded-lg shadow-lg mb-6"
                      />
                      <Button 
                        size="lg" 
                        className="w-full bg-blue-600 hover:bg-blue-700"
                        onClick={() => navigate('/product-liability-compensation-calculator')}
                      >
                        <Calculator className="w-5 h-5 mr-2" />
                        Calculate Your Compensation
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4">Factors Affecting Your Compensation</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <ul className="space-y-2 text-lg">
                        <li>• Severity and permanency of injuries</li>
                        <li>• Impact on your ability to work</li>
                        <li>• Effect on daily activities and relationships</li>
                        <li>• Age and life expectancy</li>
                      </ul>
                      <ul className="space-y-2 text-lg">
                        <li>• Manufacturer's knowledge of defect</li>
                        <li>• Egregiousness of conduct</li>
                        <li>• Number of other victims</li>
                        <li>• Defendant's financial resources</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'time-limits' && (
              <section id="time-limits" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Clock className="w-8 h-8 text-red-600" />
                    Time Limits for Product Liability Claims
                  </h2>
                  <div className="space-y-8">
                    <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Critical Deadlines</h3>
                      <p className="text-lg mb-4">
                        California has strict time limits for filing product liability lawsuits. Missing these deadlines can permanently bar your claim.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <Card className="p-4">
                          <h4 className="font-bold text-red-600 mb-2">Personal Injury Claims</h4>
                          <p className="text-lg"><strong>2 Years</strong> from date of injury or discovery</p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-bold text-orange-600 mb-2">Property Damage Claims</h4>
                          <p className="text-lg"><strong>3 Years</strong> from date of damage</p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-bold text-purple-600 mb-2">Wrongful Death Claims</h4>
                          <p className="text-lg"><strong>2 Years</strong> from date of death</p>
                        </Card>
                        <Card className="p-4">
                          <h4 className="font-bold text-blue-600 mb-2">Claims Against Government</h4>
                          <p className="text-lg"><strong>6 Months</strong> notice requirement</p>
                        </Card>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Discovery Rule Exceptions</h3>
                      <p className="text-lg mb-4">
                        Sometimes injuries from defective products don't appear immediately. California's "discovery rule" may extend deadlines when:
                      </p>
                      <ul className="space-y-3 text-lg">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Toxic exposure injuries manifest years later</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Medical device complications develop over time</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Cancer from defective products has long latency periods</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Pharmaceutical side effects emerge gradually</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold mb-4">Special Rules for Minors</h3>
                      <p className="text-lg mb-4">
                        Children injured by defective products have special protections:
                      </p>
                      <ul className="space-y-2 text-lg">
                        <li>• Minors have until age 20 to file personal injury claims (2 years after 18th birthday)</li>
                        <li>• Parents can file on behalf of minor children</li>
                        <li>• Some settlements require court approval to protect the child's interests</li>
                        <li>• Statute may be tolled for incapacitated minors</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                      <h3 className="text-xl font-bold text-blue-600 mb-4">Don't Wait - Act Now</h3>
                      <p className="text-lg mb-4">
                        Product liability cases require extensive investigation and evidence preservation. The sooner you contact an attorney:
                      </p>
                      <ul className="space-y-2 text-lg">
                        <li>• The better we can preserve crucial evidence</li>
                        <li>• The fresher witness memories will be</li>
                        <li>• The more time we have to build a strong case</li>
                        <li>• The sooner we can send spoliation notices to prevent evidence destruction</li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'faq' && (
              <section id="faq" className="content-section">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <HelpCircle className="w-8 h-8 text-red-600" />
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg mb-8 text-gray-600">Complete answers to your product liability concerns</p>
                  
                  <div className="space-y-4">
                    {faqData.map((faq, index) => (
                      <Card key={index} className="border-l-4 border-l-red-600">
                        <button
                          onClick={() => toggleFaq(index)}
                          className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium pr-4 text-lg">{faq.question}</span>
                          {expandedFaq === index ? (
                            <ChevronUp className="w-5 h-5 text-red-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-red-600 flex-shrink-0" />
                          )}
                        </button>
                        <Collapsible open={expandedFaq === index}>
                          <CollapsibleContent>
                            <div className="p-6 pt-0 border-t border-gray-200">
                              <p className="text-gray-700 leading-relaxed text-lg">{faq.answer}</p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      </Card>
                    ))}
                  </div>
                </Card>
              </section>
            )}

            {activeTab === 'resources' && (
              <section id="resources" className="content-section mb-16">
                <Card className="p-8">
                  <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Building className="w-8 h-8 text-red-600" />
                    Product Liability Resources & Information
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4">California Legal Resources</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">Consumer Product Safety Commission (CPSC)</Link>
                          <p className="text-sm text-gray-600">Report dangerous products and check for recalls</p>
                        </li>
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">California Attorney General Consumer Protection</Link>
                          <p className="text-sm text-gray-600">State-level consumer protection resources</p>
                        </li>
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">FDA Safety Information</Link>
                          <p className="text-sm text-gray-600">Drug and medical device safety alerts</p>
                        </li>
                      </ul>
                    </Card>
                    <Card className="p-6">
                      <h3 className="text-xl font-bold mb-4">Support & Medical Resources</h3>
                      <ul className="space-y-3">
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">National Institute for Health</Link>
                          <p className="text-sm text-gray-600">Medical information about product-related injuries</p>
                        </li>
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">Poison Control Centers</Link>
                          <p className="text-sm text-gray-600">Emergency assistance for toxic product exposure</p>
                        </li>
                        <li>
                          <Link to="/schedule-consultation" className="text-red-600 hover:underline text-lg">Trauma Support Groups</Link>
                          <p className="text-sm text-gray-600">Mental health support for injury survivors</p>
                        </li>
                      </ul>
                    </Card>
                  </div>
                </Card>
              </section>
            )}
          </div>

          {/* Sticky Sidebar - "3 Ways to Start Your Case" */}
          <div className="xl:w-1/3 w-full">
            <div className="xl:sticky xl:top-24 space-y-6">
              {/* Contact Card */}
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-black/80 z-10"></div>
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-40"
                  style={{
                    backgroundImage: `url(${courthouseImage})`
                  }}
                ></div>
                
                <CardHeader className="relative z-20 text-center text-white">
                  <CardTitle className="text-2xl font-light text-gray-300 mb-2">
                    3 Ways to
                  </CardTitle>
                  <CardTitle className="text-2xl font-light text-gray-300 mb-4">
                    Start Your Case
                    <div className="w-24 h-1 bg-red-600 mx-auto mt-2"></div>
                  </CardTitle>
                  
                  <p className="text-base mb-8 text-gray-300 leading-relaxed font-light">
                    You pay nothing until we win your case. Contact us today to schedule your FREE consultation.
                  </p>
                </CardHeader>
                <CardContent className="relative z-20 space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3 text-lg"
                    onClick={() => {
                      const subject = 'Free Product Liability Case Evaluation';
                      const body = 'I would like to start a free product liability case evaluation.';
                      window.open(`mailto:contact@trembachlaw.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
                    }}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email Consultation
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 py-3 text-lg"
                    onClick={() => navigate('/product-liability-compensation-calculator')}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Compensation Calculator
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <h4 className="font-bold text-blue-900 mb-2">Case Evaluation</h4>
                    <p className="text-sm text-blue-800 mb-3">
                      Get a free comprehensive evaluation of your product liability case strength and potential outcomes.
                    </p>
                    <Button 
                      className="w-full bg-green-600 hover:bg-green-700 text-lg"
                      onClick={() => navigate('/product-liability-case-evaluation')}
                    >
                      Start Evaluation
                    </Button>
                  </Card>
                  
                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <h4 className="font-bold text-purple-900 mb-2">Compensation Calculator</h4>
                    <p className="text-sm text-purple-800 mb-3">
                      Estimate potential compensation for your product liability case based on California law.
                    </p>
                    <Button 
                      className="w-full bg-blue-600 hover:bg-blue-700 text-lg"
                      onClick={() => navigate('/product-liability-compensation-calculator')}
                    >
                      Calculate Compensation
                    </Button>
                  </Card>
                  
                  <Card className="p-4 bg-green-50 border-green-200">
                    <h4 className="font-bold text-green-900 mb-2">Medical Guidance</h4>
                    <p className="text-sm text-green-800 mb-3">
                      Comprehensive guide to product-related injuries and medical support during your case.
                    </p>
                    <Button 
                      className="w-full bg-purple-600 hover:bg-purple-700 text-lg"
                      onClick={() => navigate('/product-liability-medical-guidance')}
                    >
                      <BookOpen className="w-4 h-4 mr-2" />
                      Access Guide
                    </Button>
                  </Card>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Former defense attorney insight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">No fees unless we win</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span className="text-sm">Bilingual legal team</span>
                  </li>
                </ul>
              </Card>

              {/* Important Deadlines */}
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Important Deadlines</h3>
                <ul className="space-y-2 text-sm">
                  <li><strong>Personal Injury:</strong> 2 years from injury date</li>
                  <li><strong>Property Damage:</strong> 3 years from damage</li>
                  <li><strong>Wrongful Death:</strong> 2 years from death</li>
                  <li><strong>Government Claims:</strong> 6 months notice</li>
                </ul>
                <p className="text-xs text-red-600 mt-3">
                  Don't wait - evidence disappears and witnesses forget. Contact us today!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Don't Wait - Time Limits Apply Section */}
      <section className="bg-red-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Don't Wait - Time Limits Apply for California Product Liability Cases</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto">
            California law sets strict deadlines for product liability claims. Evidence can disappear, witnesses forget, and your right to compensation may be lost forever. The sooner you act, the stronger your case becomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <Button 
              size="lg" 
              className="bg-white text-red-600 hover:bg-gray-100 px-8 py-3 text-lg"
              onClick={() => navigate('/product-liability-case-evaluation')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Start Free Case Evaluation
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-8 py-3 text-lg"
              onClick={() => window.open('tel:8181234567')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567 Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductLiability;