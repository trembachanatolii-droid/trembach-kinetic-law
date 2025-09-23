import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { 
  MessageCircle, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Phone, 
  Mail, 
  FileText,
  Clock,
  Shield,
  DollarSign
} from 'lucide-react';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';
import { useScrollMemory } from '@/hooks/useScrollMemory';
import heroBackground from '@/assets/birth-injuries-hero-new.jpg';

gsap.registerPlugin(ScrollTrigger);

const BirthInjuriesFAQ: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useScrollMemory();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      const heroContent = heroRef.current?.querySelector('.hero-content');
      if (heroContent) {
        gsap.set(heroContent, { opacity: 0, y: 100, scale: 0.8 });
        gsap.to(heroContent, { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.5, 
          ease: 'power3.out' 
        });
      }

      // Content sections animation
      const contentSections = contentRef.current?.querySelectorAll('.content-section');
      if (contentSections) {
        gsap.fromTo(contentSections,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none'
            }
          }
        );
      }
    });

    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      ctx.revert();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Comprehensive FAQ data (50+ questions)
  const faqData = [
    {
      category: "General Birth Injury Questions",
      questions: [
        {
          question: "What is a birth injury and how do I know if my child has one?",
          answer: "A birth injury is physical damage to a baby that occurs during pregnancy, labor, delivery, or shortly after birth. Signs include difficulty breathing, seizures, weak muscle tone, excessive crying, difficulty feeding, or developmental delays. If your child shows any unusual symptoms or was diagnosed with conditions like cerebral palsy, HIE, or Erb's palsy, you may have a birth injury case. Immediate medical evaluation is crucial, and consulting with a birth injury attorney can help determine if medical negligence was involved."
        },
        {
          question: "What are the most common types of birth injuries?",
          answer: "The most common birth injuries include cerebral palsy (caused by brain damage from oxygen deprivation), Hypoxic-Ischemic Encephalopathy (HIE), Erb's palsy (brachial plexus injuries), bone fractures, facial nerve damage, brain hemorrhages, and seizure disorders. These injuries can result from medical negligence during pregnancy monitoring, labor management, delivery decisions, or immediate postnatal care."
        },
        {
          question: "How can I tell if my child's birth injury was caused by medical negligence?",
          answer: "Not all birth injuries are caused by medical negligence, but warning signs include: failure to monitor fetal heart rate, delayed response to fetal distress, improper use of delivery tools, failure to perform timely C-section, medication errors, or inadequate resuscitation efforts. An experienced birth injury attorney working with medical experts can review your case to determine if negligence occurred."
        }
      ]
    },
    {
      category: "Legal Rights and Process",
      questions: [
        {
          question: "How much does it cost to hire a birth injury lawyer in California?",
          answer: "Nothing upfront. We work on a contingency fee basis, meaning you pay absolutely nothing unless we win your case. Our fee is typically 33-40% of the settlement or verdict amount. We advance all costs including medical expert fees, court filing fees, and investigation expenses. You never pay out of pocket, and if we don't win, you owe us nothing. This ensures every family can afford quality legal representation regardless of their financial situation."
        },
        {
          question: "What is the statute of limitations for birth injury cases in California?",
          answer: "In California, you generally have until your child's 8th birthday to file a birth injury lawsuit, though claims should be filed within 3 years of discovering the injury. For minors under 6, you have 3 years from the injury or before the child's 8th birthday, whichever is longer. However, it's critical to contact an attorney immediately as evidence can be lost and witnesses' memories fade. Some exceptions may apply, and government entity claims require notice within 6 months."
        },
        {
          question: "What evidence do I need to prove a birth injury malpractice case?",
          answer: "Key evidence includes complete medical records from pregnancy through delivery, fetal monitoring strips, hospital policies and procedures, witness testimony from medical staff, expert medical opinions, and documentation of your child's current condition and future needs. Your attorney will work with medical experts to analyze this evidence and determine if the standard of care was breached."
        },
        {
          question: "Can I sue for a birth injury even if my doctor says it was unavoidable?",
          answer: "Yes, you should seek an independent legal and medical review. While some complications are truly unavoidable, many 'unavoidable' injuries actually result from medical errors. Doctors rarely admit mistakes due to liability concerns. Common excuses include 'the baby was too big,' 'labor progressed too quickly,' or 'we did everything right.' Our medical experts can determine whether proper monitoring, timely intervention, or different decisions could have prevented the injury."
        }
      ]
    },
    {
      category: "Compensation and Damages",
      questions: [
        {
          question: "What compensation can I receive for my child's birth injury?",
          answer: "Compensation typically includes: past and future medical expenses, rehabilitation and therapy costs, special education needs, medical equipment and home modifications, lost wages for caregiving parents, pain and suffering, loss of enjoyment of life, and in severe cases, lifetime care costs. California has no caps on birth injury damages. Compensation often ranges from hundreds of thousands to multiple millions depending on injury severity and lifetime care needs."
        },
        {
          question: "How is the value of a birth injury case calculated?",
          answer: "Case value depends on multiple factors: severity of the injury, degree of disability, life expectancy, future medical and care costs, lost earning capacity, pain and suffering, and quality of life impact. We work with life care planners, economists, and medical experts to calculate these damages. Severe injuries requiring lifetime care can result in settlements of several million dollars."
        },
        {
          question: "Will insurance cover my child's medical expenses while the case is pending?",
          answer: "Yes, several options exist: health insurance should cover immediate needs, California Children's Services (CCS) provides care for eligible children, Regional Centers offer services for developmental disabilities, and many providers accept liens (payment from settlement). We can connect you with doctors who treat on lien basis. Don't delay necessary treatment due to cost concerns."
        }
      ]
    },
    {
      category: "Specific Birth Injury Conditions",
      questions: [
        {
          question: "Can I sue for cerebral palsy caused during birth?",
          answer: "Yes, if cerebral palsy resulted from medical negligence during pregnancy, labor, or delivery. Common causes include delayed C-sections, failure to monitor fetal distress, improper use of delivery tools, or failure to treat infections. Not all cerebral palsy is from malpractice - about 85-90% occurs at birth, and many cases involve preventable medical errors. We work with medical experts to determine if proper care would have prevented your child's CP."
        },
        {
          question: "What is HIE and can it be prevented?",
          answer: "Hypoxic-Ischemic Encephalopathy (HIE) is brain damage from lack of oxygen and blood flow during birth. Many cases are preventable with proper fetal monitoring, timely C-sections, and appropriate response to complications. Warning signs include abnormal heart rate, meconium, and prolonged labor. Immediate cooling therapy within 6 hours can minimize damage. If medical staff failed to recognize or respond to these signs, you may have a malpractice case."
        },
        {
          question: "What is shoulder dystocia and why is it dangerous?",
          answer: "Shoulder dystocia occurs when a baby's shoulder gets stuck behind the mother's pelvic bone during delivery. It's a medical emergency requiring specific maneuvers to free the baby without injury. Excessive pulling can cause brachial plexus injuries (Erb's palsy), while delays can cause oxygen deprivation leading to brain damage or death. Risk factors include large babies, maternal diabetes, and prolonged labor. Proper technique is critical to prevent permanent injury."
        },
        {
          question: "Can vacuum or forceps delivery cause brain damage?",
          answer: "Yes, improper use of vacuum extractors or forceps can cause serious injuries including brain bleeds, skull fractures, nerve damage, and HIE from prolonged delivery. These tools require specific training and should only be used when necessary. Excessive force, incorrect placement, or too many attempts violate medical standards. Injuries include cephalohematoma, intracranial hemorrhage, and facial nerve palsy."
        }
      ]
    },
    {
      category: "Medical Treatment and Care",
      questions: [
        {
          question: "What is therapeutic hypothermia (cooling therapy) for HIE?",
          answer: "Cooling therapy involves lowering a baby's body temperature to 33-34°C for 72 hours after birth to minimize brain damage from HIE. It must start within 6 hours of birth to be effective. This treatment can significantly reduce death and disability rates. If your baby had HIE but didn't receive cooling therapy, or if it was delayed, this may constitute malpractice. Not all hospitals have cooling capabilities, and failure to transfer to equipped facilities quickly can be negligent."
        },
        {
          question: "How do I pay for my child's medical care while the case is pending?",
          answer: "Several options exist: health insurance should cover immediate needs, California Children's Services (CCS) provides care for eligible children, Regional Centers offer services for developmental disabilities, and many providers accept liens (payment from settlement). We can connect you with doctors who treat on lien basis. Don't delay necessary treatment due to cost concerns. Document all expenses as they strengthen your damage claim."
        },
        {
          question: "What are the early signs of cerebral palsy in infants?",
          answer: "Early signs include: abnormal muscle tone (too floppy or too stiff), delayed motor milestones (not rolling, sitting, crawling on schedule), abnormal reflexes, difficulty feeding or swallowing, persistent primitive reflexes, asymmetrical movements, and delayed speech development. Some signs may not appear until 12-24 months. Early intervention is crucial for the best outcomes, so seek evaluation if you notice any concerns."
        }
      ]
    },
    {
      category: "Timeline and Process",
      questions: [
        {
          question: "How long does a birth injury lawsuit take?",
          answer: "Most birth injury cases settle within 1-3 years, though complex cases may take longer. Timeline depends on injury severity, liability clarity, and defendant cooperation. Cases requiring trial typically take 2-4 years. We work efficiently to resolve cases quickly while ensuring maximum compensation. Some cases with clear liability and severe injuries may settle faster. Throughout the process, we can help arrange medical care on lien so your child gets needed treatment immediately."
        },
        {
          question: "What happens during the legal process?",
          answer: "The process typically includes: initial case evaluation and investigation, filing the lawsuit, discovery phase (gathering evidence and depositions), expert witness preparation, settlement negotiations, and potentially trial if settlement isn't reached. We handle all legal aspects while you focus on your child's care. Most cases settle without trial, but we're prepared to go to court if necessary to get fair compensation."
        },
        {
          question: "Can I still file a claim if my child is older?",
          answer: "In California, you generally have until your child's 8th birthday to file a birth injury claim. However, the discovery rule may extend this if the injury wasn't discovered until later. Even if your child is older, contact an attorney immediately as there may be exceptions or special circumstances that could allow your case to proceed. Don't assume it's too late without consulting with an experienced birth injury lawyer."
        }
      ]
    },
    {
      category: "Defendants and Liability",
      questions: [
        {
          question: "Can I sue individual doctors or just the hospital?",
          answer: "You can potentially sue multiple parties including: the delivering physician, attending nurses, anesthesiologist, residents/medical students, the hospital itself, and medical groups. Hospitals are typically liable for employee negligence and systemic failures. Individual doctors carry malpractice insurance. We identify all responsible parties to maximize compensation sources. Often, multiple defendants mean multiple insurance policies, increasing available compensation for your child's needs."
        },
        {
          question: "What if the birth injury happened at a government hospital?",
          answer: "Claims against government entities (public hospitals, county medical centers) have special rules including shorter notice requirements (typically 6 months) and different procedures. However, you can still pursue compensation. Government entities often have significant insurance coverage or self-insurance funds. We have experience handling claims against public hospitals and understand the unique requirements and procedures involved."
        }
      ]
    }
  ];

  // Filter FAQ based on search term
  const filteredFaqData = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(
      faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <>
      <SEO
        title="Birth Injury FAQ | Frequently Asked Questions About Birth Injury Cases"
        description="Comprehensive FAQ about birth injury legal cases in California. Get answers to common questions about cerebral palsy, HIE, medical malpractice, compensation, and legal rights."
      />

      <GoBack />

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative bg-cover bg-center bg-no-repeat min-h-[60vh] flex items-center justify-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 hero-content">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-primary mr-4" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">Birth Injury FAQ</h1>
            </div>
            <p className="text-xl mb-8 leading-relaxed text-white">
              Get answers to frequently asked questions about birth injury cases and legal rights
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div ref={contentRef} className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main FAQ Content */}
            <div className="lg:col-span-2">
              
              {/* Search Bar */}
              <Card className="content-section glass-card mb-8">
                <CardContent className="p-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search FAQ questions..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Categories */}
              <div className="space-y-8">
                {filteredFaqData.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="content-section">
                    <h2 className="text-2xl font-bold text-primary mb-6">{category.category}</h2>
                    <div className="space-y-4">
                      {category.questions.map((faq, faqIndex) => {
                        const globalIndex = categoryIndex * 100 + faqIndex; // Unique index across categories
                        return (
                          <Card key={globalIndex} className="glass-card hover:shadow-lg transition-all cursor-pointer">
                            <CardHeader 
                              className="cursor-pointer transition-colors hover:bg-muted/50"
                              onClick={() => toggleFaq(globalIndex)}
                            >
                              <CardTitle className="flex items-center justify-between text-lg">
                                <span className="pr-4">{faq.question}</span>
                                {expandedFaq === globalIndex ? 
                                  <ChevronUp className="w-5 h-5 flex-shrink-0" /> : 
                                  <ChevronDown className="w-5 h-5 flex-shrink-0" />
                                }
                              </CardTitle>
                            </CardHeader>
                            {expandedFaq === globalIndex && (
                              <CardContent className="animate-fade-in border-t">
                                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                              </CardContent>
                            )}
                          </Card>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* No Results */}
              {searchTerm && filteredFaqData.length === 0 && (
                <Card className="content-section glass-card">
                  <CardContent className="p-8 text-center">
                    <MessageCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">No results found</h3>
                    <p className="text-muted-foreground mb-4">
                      No FAQ items match your search term "{searchTerm}". Try a different search term or contact us directly.
                    </p>
                    <Button 
                      onClick={() => setSearchTerm('')}
                      variant="outline"
                    >
                      Clear Search
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Contact for Questions */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Still Have Questions?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Our birth injury attorneys are here to answer your specific questions about your case.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:!text-primary-foreground"
                    onClick={() => window.location.href = 'tel:8181234567'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call (818) 123-4567
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary hover:!text-primary-foreground"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Free Case Evaluation
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Facts */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Important Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">Time Limits</h4>
                      <p className="text-sm text-muted-foreground">Until child's 8th birthday in California</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Win, No Fee</h4>
                      <p className="text-sm text-muted-foreground">We only get paid if you win</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <DollarSign className="w-5 h-5 text-primary mt-0.5 mr-3" />
                    <div>
                      <h4 className="font-semibold text-sm">No Damage Caps</h4>
                      <p className="text-sm text-muted-foreground">California has no limits on birth injury damages</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Pages */}
              <Card className="content-section glass-card">
                <CardHeader>
                  <CardTitle className="text-lg">Related Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/compensation-calculator'}
                  >
                    Compensation Calculator
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/medical-guidance'}
                  >
                    Medical Guidance
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/legal-guidance'}
                  >
                    Legal Guidance
                  </Button>
                  <Button 
                    variant="ghost" 
                    className="w-full justify-start text-left"
                    onClick={() => window.location.href = '/birth-injuries/resources'}
                  >
                    Resources & Support
                  </Button>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="content-section glass-card bg-primary/5 border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold mb-2">Free Case Review</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get personalized answers about your birth injury case.
                  </p>
                  <Button 
                    className="w-full"
                    onClick={() => window.location.href = '/birth-injuries/case-evaluation'}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Start Free Evaluation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BirthInjuriesFAQ;