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

const ProductLiability: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [allFaqExpanded, setAllFaqExpanded] = useState(false);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    const subject = encodeURIComponent('Product Liability Case Inquiry');
    const body = encodeURIComponent(`
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}
Product Type: ${formData.productType}
Injury Date: ${formData.injuryDate}
Description: ${formData.description}
Consent to Contact: ${formData.consentToContact ? 'Yes' : 'No'}
    `);
    window.location.href = `mailto:contact@trembachlaw.com?subject=${subject}&body=${body}`;
  };

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const toggleAllFaq = () => {
    setAllFaqExpanded(!allFaqExpanded);
    setExpandedFaq(null);
  };

  const handleInputChange = (field: string, value: string) => {
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
        title="Product Liability Attorney California | Defective Product Lawyers"
        description="California product liability lawyers with 15+ years experience. Free case evaluation for defective product injuries. No fees unless we win. Call (818) 123-4567."
        keywords="product liability attorney California, defective product lawyer, manufacturing defect, design defect, failure to warn"
        canonicalUrl="/practice-areas/product-liability"
      />

      <GoBack />

      {/* Hero Section */}
      <section 
        className="relative h-[70vh] flex items-center justify-center text-white overflow-hidden"
        ref={heroRef}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            California Product Liability Attorneys
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Holding manufacturers accountable for defective products that cause serious injuries. Former defense attorney experience gives us the edge you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
              onClick={() => window.open('tel:8181234567')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (818) 123-4567
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg"
              onClick={() => navigate('/product-liability-case-evaluation')}
            >
              <FileText className="w-5 h-5 mr-2" />
              Free Case Evaluation
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12" ref={contentRef}>
        <div className="flex flex-col xl:flex-row gap-12">
          {/* Main Content */}
          <div className="xl:w-2/3 w-full space-y-12">
            
            {/* Overview Section */}
            <section className="content-section">
              <Card className="p-8">
                <h2 className="text-4xl font-bold mb-8 text-center">California Product Liability Overview</h2>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">Strict Liability Protection</h3>
                    <p className="text-lg leading-relaxed mb-4">
                      California holds manufacturers, distributors, and retailers strictly liable for injuries caused by defective products. You don't need to prove negligence - only that the product was defective and caused your injury when used as intended.
                    </p>
                    <p className="text-lg leading-relaxed">
                      This powerful consumer protection law ensures companies who profit from products bear responsibility when those products cause harm. Our former defense attorney experience gives us unique insight into manufacturer defense strategies.
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
              </Card>
            </section>

            {/* Three Types of Defects Section */}
            <section className="content-section">
              <Card className="p-8">
                <h2 className="text-4xl font-bold mb-8 text-center">Three Types of Product Defects</h2>
                <p className="text-xl mb-8 text-center">Understanding your claim type is critical for maximum compensation under California law.</p>
                
                <div className="space-y-8">
                  <Card className="p-8 border-l-4 border-l-red-600">
                    <div className="flex items-start gap-6">
                      <Settings className="w-12 h-12 text-red-600 mt-2" />
                      <div>
                        <h3 className="text-2xl font-bold mb-4">1. Manufacturing Defects</h3>
                        <p className="text-lg mb-6">
                          Production errors make specific units dangerous while others work properly. Examples: contaminated medication, missing brake components, faulty wiring.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Common Examples:</h4>
                          <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>Contaminated pharmaceuticals or food products</li>
                            <li>Vehicles with missing or improperly installed parts</li>
                            <li>Electronics with faulty wiring causing fires</li>
                            <li>Medical devices with structural flaws</li>
                            <li>Children's toys with sharp edges from poor molding</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border-l-4 border-l-blue-600">
                    <div className="flex items-start gap-6">
                      <Wrench className="w-12 h-12 text-blue-600 mt-2" />
                      <div>
                        <h3 className="text-2xl font-bold mb-4">2. Design Defects</h3>
                        <p className="text-lg mb-6">
                          Inherent design flaws make all units dangerous. The entire product line shares the same dangerous characteristic.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Common Examples:</h4>
                          <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>SUVs prone to rollover due to high center of gravity</li>
                            <li>Power tools without adequate safety guards</li>
                            <li>Cribs with slat spacing allowing infant entrapment</li>
                            <li>Medications with dangerous side effects outweighing benefits</li>
                            <li>Furniture that tips over easily</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8 border-l-4 border-l-green-600">
                    <div className="flex items-start gap-6">
                      <AlertTriangle className="w-12 h-12 text-green-600 mt-2" />
                      <div>
                        <h3 className="text-2xl font-bold mb-4">3. Warning Defects (Failure to Warn)</h3>
                        <p className="text-lg mb-6">
                          Adequate product but inadequate warnings about dangers or instructions for safe use. Manufacturers must warn about risks not obvious to users.
                        </p>
                        <div className="bg-gray-50 p-6 rounded-lg">
                          <h4 className="font-bold mb-3">Inadequate Warnings Include:</h4>
                          <ul className="list-disc list-inside space-y-2 text-lg">
                            <li>Warnings too small or poorly placed</li>
                            <li>Vague warnings not specifying actual risks</li>
                            <li>Missing warnings about known dangers</li>
                            <li>Warnings in wrong language for intended users</li>
                            <li>Buried warnings in lengthy instruction manuals</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </Card>
            </section>

            {/* FAQ Section - All 50+ Questions */}
            <section className="content-section">
              <Card className="p-8">
                <h2 className="text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
                <p className="text-xl mb-8 text-center text-gray-600">Complete answers to your product liability concerns ({faqData.length} questions)</p>
                
                <div className="mb-8 text-center">
                  <Button 
                    onClick={toggleAllFaq} 
                    className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3"
                  >
                    {allFaqExpanded ? 'Collapse All Questions' : 'Expand All Questions'}
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {faqData.map((faq, index) => (
                    <Card key={index} className="border-l-4 border-l-red-600">
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full p-6 text-left flex justify-between items-start gap-4 hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold pr-4 text-lg">{faq.question}</span>
                        {(allFaqExpanded || expandedFaq === index) ? (
                          <ChevronUp className="w-6 h-6 text-red-600 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-red-600 flex-shrink-0" />
                        )}
                      </button>
                      <Collapsible open={allFaqExpanded || expandedFaq === index}>
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
          </div>

          {/* Sidebar */}
          <div className="xl:w-1/3 w-full">
            <div className="xl:sticky xl:top-24 space-y-8">
              {/* Contact Card */}
              <Card className="p-8 bg-gradient-to-br from-red-600 to-red-700 text-white">
                <h3 className="text-2xl font-bold mb-6 text-center">3 Ways to Start Your Case</h3>
                <div className="space-y-4">
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-4 text-lg"
                    onClick={() => window.open('tel:8181234567')}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-red-600 py-4 text-lg"
                    onClick={() => navigate('/product-liability-case-evaluation')}
                  >
                    <FileText className="w-5 h-5 mr-2" />
                    Free Case Evaluation
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-white text-white hover:bg-white hover:text-red-600 py-4 text-lg"
                    onClick={() => navigate('/product-liability-compensation-calculator')}
                  >
                    <Calculator className="w-5 h-5 mr-2" />
                    Compensation Calculator
                  </Button>
                </div>
              </Card>

              {/* Why Choose Us */}
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                    <span>Former defense attorney insight</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <DollarSign className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <span>No fees unless we win</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span>24/7 availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                    <span>Bilingual legal team</span>
                  </li>
                </ul>
              </Card>

              {/* Important Deadlines */}
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-xl font-bold text-red-600 mb-4">⚠️ Important Deadlines</h3>
                <ul className="space-y-2">
                  <li><strong>Personal Injury:</strong> 2 years from injury date</li>
                  <li><strong>Property Damage:</strong> 3 years from damage</li>
                  <li><strong>Wrongful Death:</strong> 2 years from death</li>
                  <li><strong>Government Claims:</strong> 6 months notice</li>
                </ul>
                <p className="text-sm text-red-600 mt-3">
                  Don't wait - evidence disappears and witnesses forget. Contact us today!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
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
              className="border-white text-white hover:bg-white hover:text-red-600 px-8 py-3 text-lg"
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
