import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import GoBack from '@/components/GoBack';
import faqHeroImage from '@/assets/amusement-park-faq-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const AmusementParkFAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const faqs: FAQ[] = [
    {
      id: 1,
      question: "What types of amusement park injuries are most common?",
      answer: "The most common amusement park injuries include whiplash from sudden stops or jerky movements, cuts and bruises from poorly maintained equipment, head injuries from falling objects or collisions, broken bones from falls or mechanical failures, and cardiac events triggered by extreme rides. Children are particularly vulnerable to height-related injuries when safety restraints fail or are improperly secured.",
      category: "injuries"
    },
    {
      id: 2,
      question: "How do I prove negligence in an amusement park injury case?",
      answer: "Proving negligence requires establishing four elements: duty of care (the park's obligation to maintain safe conditions), breach of duty (failure to meet safety standards), causation (the breach directly caused your injury), and damages (actual harm occurred). Evidence includes maintenance records, inspection reports, witness statements, photographs, medical records, and expert testimony from ride safety engineers.",
      category: "legal"
    },
    {
      id: 3,
      question: "Can I sue an amusement park if I signed a liability waiver?",
      answer: "Yes, liability waivers don't absolve parks of all responsibility. Waivers cannot protect against gross negligence, intentional misconduct, or violations of safety regulations. Courts often invalidate overly broad waivers or those that attempt to waive liability for the park's own negligence. The enforceability depends on state law, the waiver's specific language, and the circumstances of your injury.",
      category: "legal"
    },
    {
      id: 4,
      question: "What should I do immediately after an amusement park injury?",
      answer: "Seek immediate medical attention, even if injuries seem minor. Report the incident to park management and request a written incident report. Document everything: take photos of the ride, your injuries, and the accident scene. Collect contact information from witnesses. Preserve all evidence including tickets, wristbands, and clothing. Don't sign any documents from the park without legal counsel. Keep detailed records of all medical treatment and expenses.",
      category: "steps"
    },
    {
      id: 5,
      question: "How long do I have to file an amusement park injury lawsuit?",
      answer: "The statute of limitations varies by state, typically ranging from 1-3 years from the date of injury. Some states have shorter deadlines for claims against government entities if the park is publicly owned. Minors may have extended time limits. It's crucial to consult an attorney immediately as evidence can disappear quickly, and early investigation is essential for building a strong case.",
      category: "legal"
    },
    {
      id: 6,
      question: "What compensation can I recover for an amusement park injury?",
      answer: "Compensation may include medical expenses (current and future), lost wages and earning capacity, pain and suffering, emotional distress, permanent disability or disfigurement, and in severe cases, punitive damages. The amount depends on injury severity, long-term impact on your life, the degree of the park's negligence, and available insurance coverage.",
      category: "compensation"
    },
    {
      id: 7,
      question: "Are amusement parks required to carry insurance?",
      answer: "Most states require amusement parks to carry liability insurance, though minimum amounts vary. Large theme parks typically carry substantial coverage, often exceeding $25 million per occurrence. However, some smaller operations may be underinsured. Parks may also have additional coverage through manufacturers' insurance, property owner policies, or umbrella policies that can provide additional compensation sources.",
      category: "insurance"
    },
    {
      id: 8,
      question: "Can I sue the ride manufacturer instead of the park?",
      answer: "Yes, if a defective ride design or manufacturing defect caused your injury, you may have a product liability claim against the manufacturer. This can be pursued simultaneously with a claim against the park. Manufacturer liability doesn't require proving negligence—only that the product was unreasonably dangerous. Multiple parties may share liability, potentially increasing your compensation.",
      category: "legal"
    },
    {
      id: 9,
      question: "What role do ride inspections play in my case?",
      answer: "Regular inspections are mandatory in most states, and inspection records are crucial evidence. Missing inspections, ignored safety violations, or inadequate maintenance revealed in these records can prove negligence. We subpoena daily inspection logs, annual certifications, maintenance records, and incident reports. Patterns of problems or deferred maintenance significantly strengthen your case.",
      category: "evidence"
    },
    {
      id: 10,
      question: "How do pre-existing medical conditions affect my claim?",
      answer: "Pre-existing conditions don't bar recovery, but they may affect damages. Under the 'eggshell skull' rule, defendants must take victims as they find them. If a ride aggravates a pre-existing condition, you can recover for the worsening. However, you can only claim damages for injuries directly caused or aggravated by the incident, not for pre-existing symptoms.",
      category: "medical"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'injuries', label: 'Types of Injuries' },
    { value: 'legal', label: 'Legal Issues' },
    { value: 'steps', label: 'Immediate Steps' },
    { value: 'compensation', label: 'Compensation' },
    { value: 'insurance', label: 'Insurance' },
    { value: 'evidence', label: 'Evidence' },
    { value: 'medical', label: 'Medical Issues' }
  ];

  const filteredFaqs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    
    if (!hero || !content) return;

    // Hero animation
    gsap.fromTo(hero, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
    );

    // FAQ cards animation
    gsap.fromTo(".faq-card",
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.6, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: content,
          start: "top 80%"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [filteredFaqs]);

  const toggleFaq = (faqId: number) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <>
      <Helmet>
        <title>Amusement Park Injury FAQ - Common Questions & Answers | Expert Legal Help</title>
        <meta name="description" content="Get answers to frequently asked questions about amusement park injuries, liability, compensation, and legal rights. Expert guidance from experienced attorneys." />
        <meta name="keywords" content="amusement park injury FAQ, theme park accident questions, ride injury liability, park injury compensation, safety violation claims" />
        <link rel="canonical" href="/practice-areas/amusement-parks/faq" />
      </Helmet>

      <GoBack />

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
        {/* Hero Section */}
        <section ref={heroRef} className="relative py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${faqHeroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
          </div>
          
          <div className="relative container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="w-16 h-16 text-primary mr-4" />
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-red-500 to-orange-500 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get expert answers to common questions about amusement park injuries, legal rights, and compensation claims
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section ref={contentRef} className="py-16">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                    selectedCategory === category.value
                      ? 'bg-primary text-primary-foreground shadow-lg transform scale-105'
                      : 'bg-secondary/50 text-secondary-foreground hover:bg-secondary/70 hover:shadow-md'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* FAQ Grid */}
            <div className="max-w-4xl mx-auto space-y-6">
              {filteredFaqs.map((faq) => (
                <Card key={faq.id} className="faq-card shadow-lg hover:shadow-xl transition-all duration-300">
                  <Collapsible>
                    <CollapsibleTrigger 
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full"
                    >
                      <CardHeader className="hover:bg-secondary/20 transition-colors duration-200 cursor-pointer">
                        <CardTitle className="flex items-center justify-between text-left">
                          <span className="text-lg font-semibold text-foreground pr-4">
                            {faq.question}
                          </span>
                          {expandedFaq === faq.id ? (
                            <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
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

            {/* Contact CTA */}
            <div className="mt-16 text-center">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-red-500/10 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our experienced attorneys are here to provide personalized answers to your specific situation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                      href="tel:8181234567"
                      className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
                    >
                      Call (818) 123-4567
                    </a>
                    <a 
                      href="/practice-areas/amusement-parks/case-evaluation"
                      className="inline-flex items-center justify-center px-8 py-3 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors duration-200 font-semibold"
                    >
                      Free Case Review
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AmusementParkFAQ;