import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronDown, ChevronUp, MessageCircle } from 'lucide-react';
import heroBackground from '@/assets/aviation-faq-hero.jpg';
import GoBack from '@/components/GoBack';
import SEO from '@/components/SEO';

const AviationFAQ: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "How much is my aviation accident case worth?",
      answer: "Aviation accident settlements vary widely from hundreds of thousands to tens of millions depending on injury severity, liability clarity, and available insurance. Wrongful death cases average $5.2 million nationally but can exceed $50 million for high earners. Factors include medical expenses, lost income, pain and suffering, and whether punitive damages apply. International flights may have damage limitations under treaties. We evaluate all factors to maximize your compensation."
    },
    {
      question: "Who can be sued in an aviation accident?",
      answer: "Multiple parties may share liability including airlines, aircraft owners and operators, pilots, maintenance facilities, aircraft and component manufacturers, airports, air traffic controllers (through federal government), fixed base operators, and flight schools. Each party's liability depends on their role in causing the accident. We investigate thoroughly to identify all responsible parties, ensuring maximum compensation sources."
    },
    {
      question: "What if the airline or tour operator had me sign a waiver?",
      answer: "Liability waivers don't protect against gross negligence, intentional misconduct, or violations of statutory duties. California law limits waiver enforceability, especially for commercial carriers. Even with waivers, you may have valid claims if the operator was negligent. We review waiver language, circumstances of signing, and whether the specific negligence exceeded waiver scope to challenge these liability limitations."
    },
    {
      question: "How long do I have to file an aviation accident lawsuit?",
      answer: "California generally allows two years for personal injury and wrongful death claims, but aviation cases have exceptions. Government claims require six-month notice. International flights under Montreal Convention require two-year filing. Some defendants may have shorter contractual limitations. Product liability claims may extend to ten years. Early consultation ensures all deadlines are met and evidence preserved."
    },
    {
      question: "What if the NTSB finds pilot error caused the crash?",
      answer: "NTSB findings aren't admissible in court and don't determine legal liability. Pilot error doesn't exclude other contributing factors like inadequate training, maintenance failures, or design defects. Airlines remain liable for employee negligence. We conduct independent investigations often revealing factors NTSB didn't consider, identifying multiple causes and responsible parties beyond pilot error."
    },
    {
      question: "Can I sue if my loved one died in a military aircraft?",
      answer: "Military aviation accidents involve complex legal issues. Active duty service members are generally barred by the Feres Doctrine, but exceptions exist. Civilians, family members, and veterans may have claims. Government contractors may be liable despite government contractor defense. We navigate these complexities, identifying available claims through Federal Tort Claims Act, contractor liability, or product defects."
    },
    {
      question: "What compensation can I receive for aviation injuries?",
      answer: "Compensation includes medical expenses (past and future), lost wages and earning capacity, pain and suffering, disability and disfigurement, property damage, and wrongful death damages for families. Severe injuries like burns, spinal injuries, or traumatic brain injuries require lifetime care costing millions. Punitive damages may apply for gross negligence. We calculate comprehensive damages ensuring full compensation."
    },
    {
      question: "Should I talk to airline representatives or insurance adjusters?",
      answer: "Never give statements or sign documents without legal counsel. Airlines and insurers seek admissions to minimize liability. Their representatives appear sympathetic but work to protect corporate interests. Early statements made without understanding your rights can devastate your case. Let us handle all communications, protecting your interests while you focus on recovery."
    },
    {
      question: "What if the accident happened outside California?",
      answer: "You may still file suit in California if you're a resident, the airline does business here, or the ticket was purchased here. International accidents invoke treaty considerations affecting jurisdiction. We handle cases nationwide and coordinate with local counsel when needed. Choice of venue significantly impacts case value, making proper jurisdiction selection crucial for maximum recovery."
    },
    {
      question: "How are helicopter accidents different from airplane crashes?",
      answer: "Helicopters have higher accident rates due to mechanical complexity, challenging flight characteristics, and operation in dangerous environments. Common issues include rotor failures, transmission problems, and spatial disorientation. Tour operators often push weather limits. Medical helicopters face pressure to accept dangerous flights. These unique factors require specialized expertise in helicopter operations and accident investigation."
    },
    {
      question: "What evidence is important in aviation accident cases?",
      answer: "Critical evidence includes flight data and cockpit voice recorders, maintenance logs, pilot training records, weather data, air traffic control communications, witness statements, photographs and videos, medical records, and wreckage analysis. Evidence can be lost or destroyed quickly. Airlines have rapid response teams protecting their interests. Immediate legal representation ensures evidence preservation before it disappears."
    },
    {
      question: "Can I recover damages if the pilot was a friend or family member?",
      answer: "Yes, insurance typically covers these situations. Aircraft owner's insurance, homeowner's policies, or umbrella coverage may apply regardless of personal relationships. Claims focus on insurance recovery, not personal assets. We handle these sensitive cases with discretion, pursuing available insurance while preserving relationships when possible. Don't let personal relationships prevent you from securing needed compensation."
    },
    {
      question: "What if weather caused the crash?",
      answer: "Weather alone doesn't eliminate liability. Pilots must make safe decisions about flying in adverse conditions. Airlines pressure pilots to maintain schedules despite weather. Inadequate weather equipment, training, or planning creates liability. We investigate whether the flight should have proceeded, adequate weather information was obtained, and proper precautions were taken for conditions encountered."
    },
    {
      question: "How long do aviation accident cases take?",
      answer: "Aviation cases typically take 18 months to 3 years, longer than typical injury cases due to complexity. NTSB investigations, extensive discovery, multiple defendants, and technical issues extend timelines. International cases may take longer. However, we can often secure partial settlements or advances for immediate needs while pursuing full compensation. Our aggressive approach speeds resolution when possible."
    },
    {
      question: "What if I can't afford an aviation accident lawyer?",
      answer: "We work on contingency fees - you pay nothing unless we win. We advance all costs including investigations, experts, and litigation expenses. Aviation cases require substantial resources that we provide without upfront payment. Our fee is a percentage of recovery, aligning our interests with yours. Don't let financial concerns prevent you from pursuing rightful compensation."
    },
    {
      question: "Can I sue if the accident was caused by a terrorist act or hijacking?",
      answer: "Security failures may create liability despite criminal acts. Airlines and airports have duties to screen passengers and cargo. The September 11th Victim Compensation Fund provides alternative compensation for terrorism victims. We evaluate security procedures, intelligence failures, and available compensation sources including government funds, airline liability, and security company negligence."
    },
    {
      question: "What about accidents involving drones or unmanned aircraft?",
      answer: "Drone accidents are increasingly common with evolving regulations. Commercial drone operators need licenses and insurance. Recreational users may have homeowner's coverage. Manufacturers may be liable for defects. We pursue claims against operators, owners, and manufacturers for injuries caused by drones, navigating this developing area of aviation law."
    },
    {
      question: "Can airport ground accidents be aviation claims?",
      answer: "Yes, injuries at airports including jetbridge accidents, baggage vehicle strikes, tarmac falls, and security incidents may be aviation claims. Airlines, airports, and contractors share liability for ground operations safety. These cases involve premises liability, common carrier duties, and aviation regulations. We pursue all responsible parties for airport ground accidents."
    },
    {
      question: "What if I'm injured by turbulence during a flight?",
      answer: "Turbulence injuries may create liability if airlines failed to warn passengers, secure service items, or avoid known turbulence. Clear air turbulence is harder to prove negligence, but severe turbulence often has warnings pilots should heed. We investigate weather reports, pilot decisions, and whether proper procedures were followed to protect passengers."
    },
    {
      question: "What's the Montreal Convention and how does it affect my claim?",
      answer: "The Montreal Convention governs international flights, establishing strict liability up to certain limits (approximately $170,000) regardless of fault. Higher damages require proving negligence. The treaty affects where you can sue and time limits. We navigate treaty requirements, maximize recovery within treaty framework, and identify claims outside treaty limitations."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Aviation Accident FAQ | Airplane & Helicopter Crash Questions California"
        description="Get answers to frequently asked questions about aviation accident cases, airplane crashes, and helicopter accidents in California. Expert legal guidance."
        keywords="aviation accident FAQ, airplane crash questions, helicopter accident answers, California aviation law, aviation attorney questions"
        canonical="https://www.trembachlawfirm.com/aviation/faq"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "name": "Aviation Accident FAQ",
          "description": "Frequently asked questions about aviation accident cases in California",
          "url": "https://www.trembachlawfirm.com/aviation/faq"
        }}
      />
      <GoBack fallbackPath="/practice-areas/aviation-accidents" />
      
      {/* Hero Section */}
      <section 
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Aviation Accident FAQ
          </h1>
          <p className="text-xl">Answers to your important questions about airplane and helicopter crash cases</p>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 mr-3" />
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about aviation accident cases in California
          </p>
        </div>

        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-primary pr-4">{faq.question}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                      {expandedFaq === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </Button>
                </CardTitle>
              </CardHeader>
              {expandedFaq === index && (
                <CardContent className="pt-0">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Still Have Questions?</h3>
              <p className="text-muted-foreground mb-6">
                Our aviation accident attorneys are here to provide personalized answers for your specific case.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold px-8"
                  onClick={() => window.location.href = '/aviation/case-evaluation'}
                >
                  Get Free Case Evaluation
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white font-bold px-8"
                  onClick={() => window.location.href = 'tel:8181234567'}
                >
                  Call (818) 123-4567
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AviationFAQ;