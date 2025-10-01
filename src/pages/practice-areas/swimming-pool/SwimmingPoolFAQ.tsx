import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { 
  MessageCircle, 
  ChevronDown, 
  ChevronUp,
  Phone,
  Scale,
  Clock,
  DollarSign,
  Shield
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import faqHero from '@/assets/swimming-pool-faq-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const SwimmingPoolFAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current?.querySelector('.hero-content'),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo('.faq-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-content',
            start: 'top 80%'
          }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const faqData: FAQItem[] = [
    // Legal Process Questions
    {
      category: "Legal Process",
      question: "How long do I have to file a swimming pool accident lawsuit in California?",
      answer: "In California, you typically have 2 years from the date of the swimming pool accident to file a personal injury lawsuit. However, if the accident occurred at a government-owned facility (such as a public pool), you may have only 6 months to file a claim against the government entity. It's crucial to consult with an attorney immediately as these deadlines are strict and missing them can permanently bar your claim."
    },
    {
      category: "Legal Process",
      question: "What should I do immediately after a swimming pool accident?",
      answer: "First, seek immediate medical attention even if injuries seem minor. Call 911 if the injury is serious. Document the scene with photos, get contact information from witnesses, and report the incident to the property owner or pool operator. Preserve any clothing or equipment involved in the accident. Avoid giving detailed statements to insurance companies without legal representation. Contact an experienced swimming pool accident attorney as soon as possible to protect your rights."
    },
    {
      category: "Legal Process",
      question: "Do I need a lawyer for my swimming pool accident case?",
      answer: "While not legally required, having an experienced swimming pool accident attorney is highly recommended. Pool accident cases often involve complex liability issues, multiple potentially responsible parties, insurance companies with experienced legal teams, and significant medical expenses. An attorney can investigate the accident, preserve evidence, negotiate with insurance companies, and ensure you receive maximum compensation for your injuries."
    },
    {
      category: "Legal Process",
      question: "How much does it cost to hire a swimming pool accident lawyer?",
      answer: "Most swimming pool accident attorneys work on a contingency fee basis, meaning you pay no attorney fees unless they win your case. The attorney's fee is typically a percentage of the settlement or judgment recovered. This arrangement allows accident victims to obtain quality legal representation without upfront costs. During your free consultation, your attorney will explain their fee structure and any costs involved in pursuing your case."
    },
    {
      category: "Legal Process",
      question: "Can I still file a claim if the accident was partially my fault?",
      answer: "Yes, California follows a comparative negligence rule, which means you can still recover compensation even if you were partially at fault for the accident. Your compensation will be reduced by your percentage of fault. For example, if you were found to be 20% at fault and your damages were $100,000, you would recover $80,000. An experienced attorney can help minimize any fault attributed to you and maximize your recovery."
    },

    // Liability Questions
    {
      category: "Liability",
      question: "Who can be held liable for a swimming pool accident?",
      answer: "Multiple parties may be liable for swimming pool accidents, including property owners (homeowners, landlords, businesses), pool operators or management companies, lifeguards or supervisory staff, pool maintenance companies, equipment manufacturers (if defective products caused the accident), and construction companies (if poor installation caused the problem). A thorough investigation is necessary to identify all potentially liable parties and maximize your compensation."
    },
    {
      category: "Liability",
      question: "Can I sue for a swimming pool accident at a private residence?",
      answer: "Yes, homeowners have a duty to maintain their pools safely and may be liable for accidents on their property. This includes ensuring proper fencing, maintaining safety equipment, providing adequate supervision when hosting guests, and warning of known dangers. Homeowners' insurance typically covers these claims. The specific circumstances of your case will determine the strength of your claim against a private homeowner."
    },
    {
      category: "Liability",
      question: "What if the swimming pool accident happened at a hotel or resort?",
      answer: "Hotels and resorts have a heightened duty of care to their guests and may be held to stricter liability standards. They must maintain pools according to safety regulations, provide adequate supervision or warnings, ensure proper lighting and safety equipment, and regularly inspect and maintain pool areas. Commercial establishments often carry substantial insurance coverage, potentially resulting in higher compensation for victims."
    },
    {
      category: "Liability",
      question: "Can apartment complex owners be held liable for pool accidents?",
      answer: "Yes, apartment complex owners and property management companies have a duty to maintain common area pools safely for residents and their guests. They must comply with local safety codes, provide proper fencing and gates, maintain equipment in good working order, and address known hazards promptly. Landlords can be held liable for accidents resulting from their negligence in maintaining pool areas."
    },
    {
      category: "Liability",
      question: "What about accidents at public or government-owned pools?",
      answer: "Government entities that operate public pools can be held liable for accidents, but special rules apply. You must file a claim within 6 months of the accident, follow specific procedures for government claims, and overcome potential governmental immunity defenses. Despite these challenges, government entities can still be held accountable for negligent pool maintenance, inadequate supervision, or safety violations."
    },

    // Compensation Questions
    {
      category: "Compensation",
      question: "What types of compensation can I recover for a swimming pool accident?",
      answer: "Compensation may include medical expenses (past and future), lost wages and earning capacity, pain and suffering, permanent disability or disfigurement, rehabilitation and therapy costs, psychological counseling, and in wrongful death cases, funeral expenses and loss of companionship. The amount depends on the severity of injuries, degree of negligence, and long-term impact on your life. An experienced attorney can help maximize your recovery."
    },
    {
      category: "Compensation",
      question: "How much is my swimming pool accident case worth?",
      answer: "Case values vary widely based on injury severity, medical expenses, lost income, degree of negligence, and long-term impacts. Minor injuries might result in thousands of dollars in compensation, while catastrophic injuries (brain damage, paralysis, wrongful death) can result in millions. Factors affecting value include permanent disabilities, need for future care, age of victim, and earning capacity. A thorough case evaluation by an experienced attorney is necessary to estimate potential compensation."
    },
    {
      category: "Compensation",
      question: "Can I recover compensation for my child's swimming pool accident?",
      answer: "Yes, children who are injured in swimming pool accidents may be entitled to compensation for medical expenses, pain and suffering, future medical care, and in cases of permanent disability, lost future earning capacity. Parents may also recover for medical expenses they've paid and emotional distress. Children's cases often result in higher compensation due to their longer life expectancy and potential lifetime impacts of the injuries."
    },
    {
      category: "Compensation",
      question: "What if my loved one died in a swimming pool accident?",
      answer: "Surviving family members may file a wrongful death lawsuit to recover compensation for funeral and burial expenses, lost future earnings the deceased would have provided, loss of companionship and support, and medical expenses before death. In California, spouses, children, and sometimes parents or other dependents may file wrongful death claims. These cases require immediate legal attention due to strict time limits and complex legal requirements."
    },
    {
      category: "Compensation",
      question: "Will insurance pay for my swimming pool accident injuries?",
      answer: "Multiple insurance policies may provide coverage, including the property owner's homeowners or commercial liability insurance, your own health insurance, auto insurance (if traveling to the pool), and umbrella policies. However, insurance companies often try to minimize payouts or deny claims. Having an experienced attorney handle insurance negotiations significantly increases your chances of fair compensation and prevents you from accepting inadequate settlements."
    },

    // Types of Accidents
    {
      category: "Types of Accidents",
      question: "What are the most common types of swimming pool accidents?",
      answer: "Common swimming pool accidents include drowning and near-drowning incidents, slip and fall accidents on wet surfaces, diving accidents resulting in spinal cord or brain injuries, chemical burns from improper pool chemical handling, drain entrapment injuries, electrical injuries from faulty wiring, cuts from broken glass or sharp edges, and equipment-related injuries from malfunctioning pool equipment. Each type of accident may involve different liability theories and compensation amounts."
    },
    {
      category: "Types of Accidents",
      question: "What should I know about diving accident injuries?",
      answer: "Diving accidents are among the most serious swimming pool injuries, often resulting in spinal cord damage, traumatic brain injuries, or paralysis. These accidents frequently occur due to inadequate depth warnings, poor lighting, underwater obstructions, or improperly designed pools. Diving injury cases can result in substantial compensation due to the severe, life-altering nature of these injuries and the extensive medical care required."
    },
    {
      category: "Types of Accidents",
      question: "Can I file a claim for a near-drowning incident?",
      answer: "Yes, near-drowning incidents can result in serious injuries including brain damage from oxygen deprivation, lung injuries, and psychological trauma. Even if the victim survived, they may face long-term medical complications and deserve compensation. These cases often involve issues of inadequate supervision, faulty safety equipment, or failure to maintain proper pool safety measures."
    },
    {
      category: "Types of Accidents",
      question: "What about chemical-related swimming pool injuries?",
      answer: "Pool chemical injuries can include chemical burns, respiratory problems, eye injuries, and skin conditions. These injuries may result from improper mixing of chemicals, inadequate ventilation, faulty equipment, or failure to warn users of recent chemical treatments. Property owners and pool maintenance companies can be held liable for chemical-related injuries, especially if they failed to follow safety protocols."
    },

    // Safety and Prevention
    {
      category: "Safety and Prevention",
      question: "What safety measures should pool owners have in place?",
      answer: "Pool owners should maintain proper barriers and fencing (minimum 5 feet high in California), install self-closing, self-latching gates, ensure anti-entrapment drain covers, provide adequate lighting, maintain clear pool water visibility, have emergency equipment readily available, post safety rules and depth markers, and ensure regular safety inspections. Failure to implement these measures can result in liability for accidents."
    },
    {
      category: "Safety and Prevention",
      question: "Are there special requirements for pools around children?",
      answer: "California law requires enhanced safety measures for pools accessible to children under 5, including multiple barrier requirements, pool alarms in some cases, and strict gate and latch requirements. Property owners must take extra precautions when they know children frequent the area. Attractive nuisance doctrine may hold property owners liable for injuries to trespassing children if the pool attracts them and proper safety measures weren't in place."
    }
  ];

  const categories = ["Legal Process", "Liability", "Compensation", "Types of Accidents", "Safety and Prevention"];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Legal Process": return Scale;
      case "Liability": return Shield;
      case "Compensation": return DollarSign;
      case "Types of Accidents": return MessageCircle;
      case "Safety and Prevention": return Clock;
      default: return MessageCircle;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Legal Process": return "text-blue-600";
      case "Liability": return "text-red-600";
      case "Compensation": return "text-green-600";
      case "Types of Accidents": return "text-purple-600";
      case "Safety and Prevention": return "text-orange-600";
      default: return "text-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      
      
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${faqHero})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <div className="hero-content">
            <MessageCircle className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Swimming Pool Accident FAQ
            </h1>
            <p className="text-xl">
              Comprehensive answers to common questions about swimming pool accident claims in California
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="faq-content">
          
          {/* Category Overview */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">FAQ Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {categories.map((category, index) => {
                const IconComponent = getCategoryIcon(category);
                const colorClass = getCategoryColor(category);
                return (
                  <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow cursor-pointer">
                    <IconComponent className={`w-8 h-8 mx-auto mb-2 ${colorClass}`} />
                    <h3 className="text-sm font-semibold">{category}</h3>
                    <p className="text-xs text-muted-foreground">
                      {faqData.filter(item => item.category === category).length} questions
                    </p>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* FAQ Sections by Category */}
          {categories.map((category, categoryIndex) => {
            const categoryQuestions = faqData.filter(item => item.category === category);
            const IconComponent = getCategoryIcon(category);
            const colorClass = getCategoryColor(category);
            
            return (
              <section key={categoryIndex} className="mb-12">
                <Card className="faq-card">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <IconComponent className={`w-6 h-6 mr-3 ${colorClass}`} />
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {categoryQuestions.map((faq, index) => {
                        const faqIndex = categoryIndex * 100 + index; // Unique index
                        return (
                          <Collapsible 
                            key={faqIndex}
                            open={expandedFaq === faqIndex} 
                            onOpenChange={() => setExpandedFaq(expandedFaq === faqIndex ? null : faqIndex)}
                          >
                            <CollapsibleTrigger asChild>
                              <Button 
                                variant="ghost" 
                                className="w-full justify-between p-4 h-auto text-left hover:bg-muted/50"
                              >
                                <span className="font-medium pr-4">{faq.question}</span>
                                {expandedFaq === faqIndex ? <ChevronUp /> : <ChevronDown />}
                              </Button>
                            </CollapsibleTrigger>
                            <CollapsibleContent className="px-4 pb-4">
                              <div className="prose prose-sm max-w-none">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </div>
                            </CollapsibleContent>
                          </Collapsible>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </section>
            );
          })}

          {/* Call to Action */}
          <section className="text-center">
            <Card className="faq-card border-primary bg-primary/5">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
                <p className="text-muted-foreground mb-6">
                  Every swimming pool accident case is unique. Get personalized answers to your specific questions 
                  during a free consultation with our experienced California swimming pool accident attorneys.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" asChild>
                    <a href="/practice-areas/swimming-pool/case-evaluation">
                      Get Free Consultation
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="tel:(818) 123-4567">
                      <Phone className="w-5 h-5 mr-2" />
                      Call (818) 123-4567
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SwimmingPoolFAQ;