import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

const ExpandedFAQ: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const faqData: FAQItem[] = [
    {
      question: "How much does it cost to hire a mesothelioma lawyer?",
      answer: "Our mesothelioma attorneys work on a contingency fee basis, meaning you pay nothing unless we win your case. We advance all costs for investigation, medical records, expert witnesses, and litigation expenses.",
      category: "Legal Fees"
    },
    {
      question: "What is the statute of limitations for mesothelioma cases in California?",
      answer: "California has a one-year statute of limitations from the date of diagnosis or discovery of the disease. It's crucial to contact an attorney immediately after diagnosis to preserve your rights.",
      category: "Legal Process"
    },
    {
      question: "How long does a mesothelioma lawsuit take?",
      answer: "Case duration varies from 6 months to 2 years, depending on complexity. Many cases settle out of court within 12-18 months. We work efficiently while ensuring maximum compensation.",
      category: "Legal Process"
    },
    {
      question: "What compensation can I expect from a mesothelioma case?",
      answer: "Compensation varies widely based on exposure history, diagnosis stage, and impact on your life. Settlements range from hundreds of thousands to several million dollars. We evaluate each case individually.",
      category: "Compensation"
    },
    {
      question: "Do I need to know where I was exposed to asbestos?",
      answer: "While helpful, it's not required. Our experienced investigators can trace exposure sources through work history, military service, home renovation, and product use. We have extensive exposure databases.",
      category: "Case Requirements"
    },
    {
      question: "Can family members file a mesothelioma lawsuit?",
      answer: "Yes, spouses and family members can file claims for secondary exposure (bringing asbestos home on clothing) or wrongful death if the victim has passed away.",
      category: "Family Rights"
    },
    {
      question: "What if the company that exposed me is out of business?",
      answer: "Many asbestos companies established bankruptcy trust funds specifically to compensate victims. We can file claims against multiple trusts and successor companies.",
      category: "Bankruptcy Trusts"
    },
    {
      question: "Is mesothelioma always caused by asbestos exposure?",
      answer: "Yes, mesothelioma is almost exclusively caused by asbestos exposure. Even minimal exposure decades ago can cause this aggressive cancer. Any mesothelioma diagnosis warrants legal investigation.",
      category: "Medical Information"
    },
    {
      question: "Can I file a lawsuit if I'm receiving workers' compensation?",
      answer: "Yes, workers' compensation and personal injury lawsuits are separate. You can pursue both simultaneously. We coordinate to maximize your total compensation.",
      category: "Workers' Compensation"
    },
    {
      question: "What documents do I need for my mesothelioma case?",
      answer: "Medical records, employment history, military service records, and any documentation of asbestos exposure. We help gather all necessary documents and evidence.",
      category: "Case Requirements"
    },
    {
      question: "How do you prove asbestos exposure in court?",
      answer: "We use employment records, witness testimony, product identification, site inspections, and expert witnesses. Our team has extensive experience tracing exposure sources.",
      category: "Legal Process"
    },
    {
      question: "What are asbestos trust funds?",
      answer: "Bankruptcy trust funds established by asbestos companies to compensate victims. Over $30 billion is available in these trusts. We file claims with all applicable trusts.",
      category: "Bankruptcy Trusts"
    },
    {
      question: "Can veterans file mesothelioma claims?",
      answer: "Yes, veterans have special rights and may be eligible for VA benefits plus civilian lawsuits. Military asbestos exposure was widespread, especially in Navy ships and facilities.",
      category: "Veterans"
    },
    {
      question: "What is the difference between mesothelioma and lung cancer?",
      answer: "Mesothelioma affects the lining of organs (pleura, peritoneum), while lung cancer affects lung tissue. Both can be caused by asbestos, but mesothelioma is almost exclusively asbestos-related.",
      category: "Medical Information"
    },
    {
      question: "How long after asbestos exposure does mesothelioma develop?",
      answer: "Mesothelioma typically develops 20-50 years after initial exposure, with an average latency period of 35-40 years. This long delay often complicates identifying exposure sources.",
      category: "Medical Information"
    },
    {
      question: "Can I sue if my loved one died from mesothelioma?",
      answer: "Yes, surviving family members can file wrongful death claims. These cases seek compensation for loss of companionship, financial support, and funeral expenses.",
      category: "Wrongful Death"
    },
    {
      question: "What types of asbestos exposure cases do you handle?",
      answer: "We handle all types: occupational, military, secondary (family), environmental, and product liability. Our team investigates all potential exposure sources.",
      category: "Case Types"
    },
    {
      question: "Do I have to go to court for my mesothelioma case?",
      answer: "Most cases settle out of court. If litigation is necessary, we handle all court proceedings. Many depositions can be conducted at your home if travel is difficult.",
      category: "Legal Process"
    },
    {
      question: "What if I was exposed to asbestos in multiple locations?",
      answer: "Multiple exposure sources often mean higher compensation. We investigate all potential defendants and file claims against companies, trust funds, and insurance policies.",
      category: "Multiple Exposures"
    },
    {
      question: "How do you calculate damages in mesothelioma cases?",
      answer: "Damages include medical expenses, lost wages, pain and suffering, loss of consortium, and funeral costs. We work with economists and medical experts to calculate fair compensation.",
      category: "Compensation"
    },
    {
      question: "What is the survival rate for mesothelioma?",
      answer: "Mesothelioma is aggressive with a median survival of 12-21 months. Early diagnosis and treatment can improve outcomes. Legal action ensures financial security for treatment and family.",
      category: "Medical Information"
    },
    {
      question: "Can I file a claim if I'm still working?",
      answer: "Yes, you can file immediately after diagnosis regardless of work status. Early filing preserves evidence and ensures you meet all deadlines.",
      category: "Employment"
    },
    {
      question: "What happens if I die during the lawsuit?",
      answer: "The case continues as a wrongful death claim with your estate or designated representative. Family members become the beneficiaries of any settlement or verdict.",
      category: "Wrongful Death"
    },
    {
      question: "Are there different types of mesothelioma?",
      answer: "Yes: pleural (lung lining), peritoneal (abdominal lining), pericardial (heart lining), and testicular. Pleural is most common (75-80% of cases). All types can support legal claims.",
      category: "Medical Information"
    },
    {
      question: "What if my employer is immune from lawsuits?",
      answer: "While workers' compensation may limit employer liability, you can still sue product manufacturers, contractors, and other third parties responsible for your exposure.",
      category: "Legal Limitations"
    },
    {
      question: "How do you find all potential defendants in my case?",
      answer: "We use comprehensive databases, employment records, witness interviews, and site investigations. Our team identifies all companies that manufactured, sold, or used asbestos products at your exposure sites.",
      category: "Investigation"
    },
    {
      question: "What role do expert witnesses play in mesothelioma cases?",
      answer: "Expert witnesses testify about medical causation, industrial hygiene, product identification, and damages. We work with leading specialists to strengthen your case.",
      category: "Expert Witnesses"
    },
    {
      question: "Can I get compensation if I smoked cigarettes?",
      answer: "Yes, smoking doesn't disqualify mesothelioma claims. While smoking causes lung cancer, it doesn't cause mesothelioma. Asbestos is the sole cause of this disease.",
      category: "Smoking"
    },
    {
      question: "What if I was exposed through my spouse's work clothes?",
      answer: "Secondary exposure cases are valid claims. Spouses who washed work clothes contaminated with asbestos can develop mesothelioma and have full legal rights.",
      category: "Secondary Exposure"
    },
    {
      question: "How do settlements work in mesothelioma cases?",
      answer: "Most cases settle through negotiations. Settlement amounts depend on exposure evidence, medical prognosis, and number of defendants. We ensure all potential sources are included.",
      category: "Settlements"
    },
    {
      question: "What makes California favorable for mesothelioma cases?",
      answer: "California has victim-friendly laws, experienced judges, substantial jury verdicts, and a large industrial history creating extensive asbestos exposure. The legal environment favors comprehensive compensation.",
      category: "California Law"
    },
    {
      question: "Can I file a claim for lung cancer caused by asbestos?",
      answer: "Yes, asbestos-related lung cancer claims are valid. We need medical evidence linking your cancer to asbestos exposure and documentation of significant exposure history.",
      category: "Lung Cancer"
    },
    {
      question: "What if I don't remember specific asbestos products?",
      answer: "Memory isn't required. We use site surveys, witness testimony, purchase records, and expert reconstruction to identify asbestos-containing products at your workplace.",
      category: "Product Identification"
    },
    {
      question: "How do you handle cases with minimal exposure?",
      answer: "Even brief asbestos exposure can cause mesothelioma. We investigate thoroughly to document all exposure incidents and pursue claims against all responsible parties.",
      category: "Minimal Exposure"
    },
    {
      question: "What compensation is available for pain and suffering?",
      answer: "Pain and suffering damages compensate for physical pain, emotional distress, loss of life enjoyment, and mental anguish. These often represent the largest portion of mesothelioma settlements.",
      category: "Pain and Suffering"
    },
    {
      question: "Do you handle cases outside California?",
      answer: "We focus on California cases but work with qualified attorneys nationwide. California residents exposed elsewhere can often file here due to favorable jurisdiction rules.",
      category: "Jurisdiction"
    },
    {
      question: "What if multiple family members have mesothelioma?",
      answer: "Multiple family cases suggest common exposure source (home, neighborhood, or secondary exposure). Each person has individual rights, and cases can be coordinated for efficiency.",
      category: "Multiple Victims"
    },
    {
      question: "How do you prove causation in mesothelioma cases?",
      answer: "Medical testimony establishes asbestos as the cause. Industrial hygiene experts demonstrate exposure levels. Product identification proves specific defendants contributed to your exposure.",
      category: "Causation"
    },
    {
      question: "What happens to my case if the defendant declares bankruptcy?",
      answer: "Bankruptcy doesn't end your case. Companies often continue operations under new ownership, and bankruptcy trusts provide alternative compensation sources.",
      category: "Bankruptcy"
    },
    {
      question: "Can I get punitive damages in mesothelioma cases?",
      answer: "Yes, when defendants knew asbestos dangers but failed to warn users. Punitive damages punish misconduct and can significantly increase compensation beyond actual damages.",
      category: "Punitive Damages"
    },
    {
      question: "What medical records do you need for my case?",
      answer: "All medical records from diagnosis forward, plus any historical records mentioning lung problems. We obtain records from all treating physicians and specialists.",
      category: "Medical Records"
    },
    {
      question: "How do you value future medical expenses?",
      answer: "Medical economists project lifetime treatment costs based on diagnosis, prognosis, and treatment plans. We ensure settlements cover all future medical needs.",
      category: "Future Medical Costs"
    },
    {
      question: "What if I was exposed to asbestos in the military and civilian work?",
      answer: "Dual exposure often increases compensation opportunities. We pursue military contractor liability, civilian defendants, and coordinate with VA benefits for maximum recovery.",
      category: "Dual Exposure"
    },
    {
      question: "Can children file mesothelioma claims?",
      answer: "Yes, children exposed to asbestos can develop mesothelioma and have full legal rights. Statute of limitations may be extended for minors in some cases.",
      category: "Minors"
    },
    {
      question: "What role does genetics play in mesothelioma cases?",
      answer: "While some genetic factors may increase susceptibility, asbestos exposure remains the necessary cause. Genetic predisposition doesn't reduce legal rights or compensation.",
      category: "Genetics"
    },
    {
      question: "How do you handle cases with limited life expectancy?",
      answer: "We expedite case development and prioritize settlement negotiations. Emergency motions can accelerate court proceedings when time is critical.",
      category: "Expedited Cases"
    },
    {
      question: "What if my employer provided safety equipment?",
      answer: "Inadequate or improperly maintained safety equipment doesn't protect employers from liability. We investigate whether equipment met standards and was properly used.",
      category: "Safety Equipment"
    },
    {
      question: "Can I sue manufacturers of asbestos-containing products?",
      answer: "Yes, product manufacturers have strict liability for selling dangerous products without adequate warnings. These cases often provide the largest compensation awards.",
      category: "Product Liability"
    },
    {
      question: "What if I was exposed through home renovation?",
      answer: "DIY renovation and contractor exposure creates liability for product manufacturers, suppliers, and potentially contractors who failed to warn of asbestos dangers.",
      category: "Home Exposure"
    },
    {
      question: "How do you coordinate with my medical treatment?",
      answer: "We work closely with your medical team, obtain necessary records and reports, and ensure legal proceedings don't interfere with treatment priorities.",
      category: "Medical Coordination"
    },
    {
      question: "What makes your law firm different in mesothelioma cases?",
      answer: "Our team combines decades of asbestos litigation experience with compassionate client service. We have recovered millions for California families and provide personalized attention throughout your case.",
      category: "Our Firm"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll('.faq-item');
    
    gsap.fromTo(items,
      { 
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Get answers to common questions about mesothelioma cases and legal rights
          </p>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="faq-item bg-card border border-border rounded-lg px-6 hover:shadow-md transition-shadow duration-300"
              >
                <AccordionTrigger className="text-left hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ExpandedFAQ;