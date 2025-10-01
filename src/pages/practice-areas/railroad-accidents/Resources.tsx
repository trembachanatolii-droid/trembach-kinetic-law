import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  Phone, 
  Mail, 
  FileText, 
  Download, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Book, 
  Shield, 
  Scale, 
  Users, 
  AlertTriangle,
  HelpCircle
} from 'lucide-react';
import heroBackground from '@/assets/railroad-hero-bg.jpg';
import resourcesImage from '@/assets/railroad-resources.jpg';
import SEO from '@/components/SEO';

import { useState } from 'react';

const RailroadAccidentsResources: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const allFaqData = [
    {
      question: "What should I do immediately after a railroad accident in California?",
      answer: "First, ensure your safety and call 911. Get medical attention even if injuries seem minor, as some symptoms appear later. Document the scene with photos and gather witness information. Report the accident to appropriate agencies but avoid giving statements to railroad representatives without legal counsel. Contact a railroad accident attorney immediately to protect your rights."
    },
    {
      question: "What is FELA and how does it differ from workers' compensation?",
      answer: "The Federal Employers Liability Act (FELA) is a federal law covering railroad workers injured on the job. Unlike workers' compensation, FELA requires proving employer negligence but allows full compensation including pain and suffering. FELA provides no automatic medical benefits during case prosecution but offers unlimited damage recovery. You have three years in California to file a FELA claim."
    },
    {
      question: "How long do I have to file a railroad accident lawsuit in California?",
      answer: "For FELA claims, you have three years from the date of injury or discovery of occupational disease. For passenger and third-party claims against railroads, the standard two-year personal injury statute applies. Government entity claims require six-month notice. Time limits vary by case type, so immediate legal consultation is crucial to preserve your rights."
    },
    {
      question: "Can I sue if I was partially at fault for the railroad accident?",
      answer: "Yes. Both California personal injury law and FELA use comparative negligence, allowing recovery even if you're partially at fault. Your compensation reduces proportionally to your fault percentage. For example, if you're 20% at fault for a $100,000 case, you'd receive $80,000. Railroad companies often claim victim fault to reduce payouts, making experienced representation essential."
    },
    {
      question: "What types of damages can I recover in a California railroad accident case?",
      answer: "You can recover economic damages (medical expenses, lost wages, future earnings, rehabilitation costs) and non-economic damages (pain and suffering, emotional distress, loss of enjoyment). In cases involving willful misconduct, punitive damages may apply. FELA claims allow full compensation without damage caps, while some other claims may have limitations."
    },
    {
      question: "How much is my railroad accident case worth?",
      answer: "Case values depend on injury severity, lost income, medical expenses, pain and suffering, and degree of negligence. Minor injuries may recover thousands, while catastrophic cases can exceed millions. Factors include age, occupation, family situation, permanent disabilities, and future care needs. Our attorneys provide free case evaluations to assess your claim's potential value."
    },
    {
      question: "Do I need a lawyer for a railroad accident case?",
      answer: "Yes. Railroad cases involve complex federal regulations, specialized evidence, and aggressive corporate defense teams. Railroad companies have experienced lawyers and claims agents working to minimize payouts. Studies show represented victims recover significantly more compensation. Our contingency fee arrangement means no upfront costs, and we only get paid if we win your case."
    },
    {
      question: "What if the railroad company offers me a settlement?",
      answer: "Never accept initial settlement offers without legal consultation. Early offers are typically far below fair value and may not account for future medical needs or lost earning capacity. Once you accept and sign a release, you cannot seek additional compensation. Our attorneys evaluate settlement offers against your case's full value and negotiate for maximum recovery."
    },
    {
      question: "Can family members file wrongful death claims for railroad accidents?",
      answer: "Yes. Under California law, spouses, children, and dependent family members can pursue wrongful death claims for railroad accident fatalities. Damages include funeral expenses, lost financial support, loss of companionship, and household services value. FELA wrongful death claims provide similar recovery rights for railroad worker families."
    },
    {
      question: "What evidence is important in railroad accident cases?",
      answer: "Critical evidence includes photographs of the accident scene, equipment, and injuries; witness statements; medical records; railroad maintenance and inspection records; employee training files; federal safety violation reports; event recorder data; and expert accident reconstruction analysis. Immediate investigation is crucial as railroads can legally destroy certain records after specified time periods."
    }
    // Add more FAQ questions here from the original HTML file as needed
  ];

  const resources = [
    {
      title: "Federal Railroad Administration (FRA)",
      description: "Federal agency responsible for railroad safety regulations and accident investigations",
      link: "https://www.fra.dot.gov/",
      type: "external"
    },
    {
      title: "California Public Utilities Commission - Rail Safety",
      description: "State agency overseeing railroad safety in California",
      link: "https://www.cpuc.ca.gov/industries-and-topics/rail",
      type: "external"
    },
    {
      title: "Operation Lifesaver - Rail Safety Education",
      description: "National nonprofit organization promoting rail safety awareness",
      link: "https://oli.org/",
      type: "external"
    },
    {
      title: "National Transportation Safety Board (NTSB)",
      description: "Independent federal agency investigating transportation accidents",
      link: "https://www.ntsb.gov/",
      type: "external"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Railroad Accident Resources | FELA Information | California Train Safety | Trembach Law Firm"
        description="Comprehensive resources for California railroad accident victims. FELA information, safety resources, legal guides, and expert support for train accident cases."
        keywords="railroad accident resources, FELA information, train safety resources, California railroad law, railroad accident help"
      />

      

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Railroad Accident Resources
          </h1>
          <p className="text-xl text-white/90">
            Comprehensive information and resources for railroad accident victims
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Resource Categories */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Essential Railroad Accident Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <img src={resourcesImage} alt="Railroad Legal Resources" className="w-full h-64 object-cover rounded-lg mb-4" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Scale className="w-5 h-5 mr-2" />
                      Free Case Evaluation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Get a confidential evaluation of your railroad accident case from experienced FELA attorneys.</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/practice-areas/railroad-accidents/case-evaluation'}
                    >
                      Start Evaluation
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <FileText className="w-5 h-5 mr-2" />
                      Compensation Calculator
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Estimate potential compensation for your railroad accident or FELA claim.</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/practice-areas/railroad-accidents/compensation-calculator'}
                    >
                      Calculate Now
                    </Button>
                  </CardContent>
                </Card>

                <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-primary">
                      <Shield className="w-5 h-5 mr-2" />
                      Legal Guidance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Comprehensive legal guidance for railroad accident victims and FELA claims.</p>
                    <Button 
                      className="w-full"
                      onClick={() => window.location.href = '/practice-areas/railroad-accidents/legal-guidance'}
                    >
                      Get Guidance
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* External Resources */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4">Government & Safety Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="border-secondary/20">
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span>{resource.title}</span>
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{resource.description}</p>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => window.open(resource.link, '_blank')}
                      >
                        Visit Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Complete FAQ Section */}
        <section className="mb-12">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-3xl text-red-600 mb-4 flex items-center">
                <HelpCircle className="w-8 h-8 mr-3" />
                Complete FAQ - Railroad Accidents & FELA Claims
              </CardTitle>
              <p className="text-muted-foreground">Comprehensive answers to all your railroad accident legal questions</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {allFaqData.map((faq, index) => (
                  <Card key={index} className="border-primary/10">
                    <CardHeader>
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="w-full text-left flex items-center justify-between hover:text-primary transition-colors p-0"
                      >
                        <h4 className="font-semibold text-lg">{faq.question}</h4>
                        {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                      </button>
                    </CardHeader>
                    {expandedFaq === index && (
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                      </CardContent>
                    )}
                  </Card>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <Card className="bg-blue-50 border-blue-200">
                  <CardContent className="pt-6">
                    <p className="text-blue-700 mb-4">
                      Have a question not answered here? Our railroad accident attorneys are available 24/7 to help.
                    </p>
                    <div className="space-x-4">
                      <Button 
                        className="bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.location.href = 'tel:8181234567'}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call (818) 123-4567
                      </Button>
                      <Button 
                        variant="outline"
                        onClick={() => window.location.href = 'mailto:info@trembachlawfirm.com'}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Emergency Contact */}
        <section>
          <Card className="bg-red-50 border-red-200">
            <CardContent className="pt-8">
              <div className="text-center">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-red-600 mb-4">Need Immediate Legal Help?</h2>
                <p className="text-lg text-red-700 mb-6">
                  Railroad accidents require immediate attention. Time limits apply to FELA and personal injury claims.
                </p>
                <div className="space-y-4">
                  <Button 
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg mr-4"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: (818) 123-4567
                  </Button>
                  <div className="mt-4">
                    <p className="text-red-600 font-semibold">
                      Available 24/7 • No Fees Unless We Win • Former Defense Attorney Advantage
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default RailroadAccidentsResources;