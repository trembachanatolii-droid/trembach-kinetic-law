import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/amusement-park-faq-hero.jpg';
import SEO from '@/components/SEO';

const AmusementParkFAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const faqs = [
    {
      id: 1,
      question: "What are the most common amusement park injuries?",
      answer: "Common injuries include whiplash, cuts and bruises, head injuries, broken bones, and cardiac events. Children are particularly vulnerable to height-related injuries when safety restraints fail.",
      category: "injuries"
    },
    {
      id: 2,
      question: "How do I prove negligence in my case?",
      answer: "You need to show the park had a duty of care, breached that duty, and this breach caused your injury. Evidence includes maintenance records, inspection reports, witness statements, and expert testimony.",
      category: "legal"
    },
    {
      id: 3,
      question: "Can I sue if I signed a liability waiver?",
      answer: "Yes, waivers don't protect against gross negligence or safety violations. Courts often invalidate overly broad waivers, especially those trying to waive the park's own negligence.",
      category: "legal"
    },
    {
      id: 4,
      question: "What should I do immediately after an injury?",
      answer: "Seek medical attention, report to park management, document everything with photos, collect witness information, and preserve evidence like tickets and clothing.",
      category: "steps"
    },
    {
      id: 5,
      question: "How long do I have to file a lawsuit?",
      answer: "The statute of limitations varies by state, typically 1-3 years from the injury date. Some states have shorter deadlines for government-owned parks. Consult an attorney immediately.",
      category: "legal"
    },
    {
      id: 6,
      question: "What compensation can I recover?",
      answer: "You may recover medical expenses, lost wages, pain and suffering, emotional distress, and permanent disability compensation. Amount depends on injury severity and the park's negligence.",
      category: "compensation"
    },
    {
      id: 7,
      question: "Can I sue the ride manufacturer?",
      answer: "Yes, if a defective design or manufacturing defect caused your injury, you may have a product liability claim against the manufacturer alongside your park claim.",
      category: "legal"
    },
    {
      id: 8,
      question: "How do pre-existing conditions affect my claim?",
      answer: "Pre-existing conditions don't bar recovery. If a ride aggravated your condition, you can recover for the worsening under the 'eggshell skull' rule.",
      category: "medical"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'injuries', label: 'Injuries' },
    { value: 'legal', label: 'Legal Issues' },
    { value: 'steps', label: 'Immediate Steps' },
    { value: 'compensation', label: 'Compensation' },
    { value: 'medical', label: 'Medical Issues' }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Amusement Park Injury FAQ | Trembach Law Firm"
        description="Get answers to frequently asked questions about amusement park injuries, liability, compensation, and legal rights."
        keywords="amusement park injury FAQ, theme park accident questions, ride injury liability"
      />

      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="absolute top-6 left-6">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-black/30 text-white hover:bg-black/50"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </Button>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Frequently Asked Questions
          </h1>
          
          <div className="flex items-center justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1" />
            ))}
            <span className="ml-2 text-white">Expert Answers</span>
          </div>
          
          <p className="text-lg text-white opacity-90">
            Get answers to common questions about amusement park injuries
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-4 py-2 rounded-full transition-all font-medium ${
                  selectedCategory === category.value
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary/50 hover:bg-secondary/70'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4 mb-12">
          {filteredFaqs.map((faq) => (
            <Card key={faq.id} className="hover:shadow-md transition-shadow">
              <Collapsible>
                <CollapsibleTrigger 
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full"
                >
                  <CardHeader className="hover:bg-secondary/20 transition-colors cursor-pointer">
                    <CardTitle className="flex items-center justify-between text-left">
                      <span className="text-lg font-semibold pr-4">
                        {faq.question}
                      </span>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                      )}
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                
                <CollapsibleContent>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our experienced attorneys are here to provide personalized answers to your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Call (818) 123-4567</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/practice-areas/amusement-parks/case-evaluation">
                    Free Case Review
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AmusementParkFAQ;